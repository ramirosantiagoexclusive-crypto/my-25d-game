import * as THREE from 'three';

/* ==================== ХЕЛПЕРЫ ==================== */
const $ = (id) => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const TAU = Math.PI * 2;

const store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }
};

function mulberry32(seed) {
  let a = seed | 0;
  return function () {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function fmtTime(seconds) {
  const s = Math.floor(seconds);
  return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
}

/* ==================== КОНФИГ ==================== */
const WORLD_R = 52;
const DAY_LENGTH = 240;
const WALK = 4.3;
const SPRINT = 7.4;
const GRAV = 24;
const JUMP_V = 9.4;

/* ==================== DOM ==================== */
const ui = {
  boot: $('boot'),
  bootText: $('bootText'),
  clock: $('clockText'),
  stamina: $('staminaFill'),
  disc: $('discText'),
  prompt: $('prompt'),
  promptText: $('promptText'),
  toast: $('toast'),
  discovery: $('discovery'),
  discoveryTitle: $('discoveryTitle'),
  intro: $('overlayIntro'),
  wardrobe: $('overlayWardrobe'),
  journal: $('overlayJournal'),
  bag: $('overlayBag'),
  pause: $('overlayPause'),
  complete: $('overlayComplete'),
  skinGrid: $('skinGrid'),
  journalList: $('journalList'),
  journalFill: $('journalFill'),
  bagList: $('bagList'),
  minimap: $('minimap'),
  btnInteract: $('btnInteract'),
  seedIntro: $('seedIntro'),
  seedPause: $('seedPause'),
  completeText: $('completeText')
};

let toastTimer = null;
let discTimer = null;

function toast(msg) {
  ui.toast.textContent = msg;
  ui.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => ui.toast.classList.remove('show'), 2400);
}

/* ==================== СОСТОЯНИЕ ==================== */
let world = null;
let seed = store.get('fm_seed', Math.floor(Math.random() * 99999));
let state = 'intro';
let activePanel = 'intro';
let timeSpeed = 1;
let gameTime = 0;
let dayTime = 0.3;
let distanceWalked = 0;
let fishing = null;
let completeShown = false;
let nearestInteract = null;
let rippleTimer = 0;
let fishTimer = 5;
let skyRepaint = 0;

/* ==================== ЗВУК ==================== */
const Sfx = {
  ctx: null,
  master: null,
  muted: store.get('fm_muted', false),
  ambStarted: false,

  ensure() {
    if (!this.ctx) {
      try {
        const AC = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AC();
        this.master = this.ctx.createGain();
        this.master.gain.value = this.muted ? 0 : 0.8;
        this.master.connect(this.ctx.destination);
      } catch (e) {}
    }
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  },

  setMuted(m) {
    this.muted = m;
    store.set('fm_muted', m);
    if (this.master && this.ctx) {
      this.master.gain.linearRampToValueAtTime(m ? 0 : 0.8, this.ctx.currentTime + 0.1);
    }
    $('icoSoundOn').style.display = m ? 'none' : '';
    $('icoSoundOff').style.display = m ? '' : 'none';
  },

  tone(f0, f1, dur, type, vol) {
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(f0, t);
    osc.frequency.exponentialRampToValueAtTime(Math.max(f1, 1), t + dur);
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  },

  noise(dur, freq, vol) {
    if (!this.ctx || this.muted) return;
    const len = Math.floor(this.ctx.sampleRate * dur);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = freq;
    const gain = this.ctx.createGain();
    gain.gain.value = vol;
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    src.start();
  },

  step() { this.noise(0.035, 750, 0.06); },
  jump() { this.tone(280, 540, 0.14, 'triangle', 0.16); },
  land() { this.noise(0.09, 320, 0.25); },
  interact() { this.tone(440, 660, 0.1, 'sine', 0.15); },
  pickup() { this.tone(660, 990, 0.12, 'sine', 0.18); },
  eat() { this.noise(0.08, 900, 0.15); this.tone(300, 200, 0.1, 'sine', 0.1); },
  splash() { this.noise(0.25, 600, 0.3); this.tone(200, 120, 0.2, 'sine', 0.12); },
  fire() { this.noise(0.3, 400, 0.2); this.tone(120, 80, 0.3, 'sawtooth', 0.08); },
  rune() { this.tone(220, 440, 0.5, 'sine', 0.18); this.tone(330, 660, 0.5, 'sine', 0.12); },
  purr() {
    this.tone(90, 110, 0.25, 'sine', 0.15);
    setTimeout(() => this.tone(95, 105, 0.25, 'sine', 0.12), 180);
  },
  discover() {
    [523, 659, 784].forEach((f, i) => setTimeout(() => this.tone(f, f, 0.2, 'triangle', 0.2), i * 110));
  },
  win() {
    [523, 659, 784, 1047, 1319].forEach((f, i) => setTimeout(() => this.tone(f, f, 0.25, 'triangle', 0.2), i * 130));
  },

  ambience() {
    if (!this.ctx || this.ambStarted) return;
    this.ambStarted = true;
    const len = this.ctx.sampleRate * 2;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 280;
    const gain = this.ctx.createGain();
    gain.gain.value = 0.04;
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.value = 0.07;
    lfoGain.gain.value = 0.018;
    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);
    lfo.start();
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    src.start();
  }
};
Sfx.setMuted(Sfx.muted);

/* ==================== РЕНДЕРЕР / СЦЕНА ==================== */
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.domElement.id = 'gameCanvas3D';
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
document.body.appendChild(renderer.domElement);
renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x7fb08a, 30, 78);

const skyCanvas = document.createElement('canvas');
skyCanvas.width = 512;
skyCanvas.height = 512;
const skyCtx = skyCanvas.getContext('2d');
const skyTex = new THREE.CanvasTexture(skyCanvas);
skyTex.colorSpace = THREE.SRGBColorSpace;
scene.background = skyTex;

const stars = [];
for (let i = 0; i < 70; i++) {
  stars.push({ x: Math.random() * 512, y: Math.random() * 170, a: Math.random() * 0.7 + 0.2 });
}

let frustum = 9.4;
let camYaw = Math.PI / 4;
let camYawT = Math.PI / 4;
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 220);

const hemi = new THREE.HemisphereLight(0xbfe8ff, 0x3e5a3a, 0.5);
scene.add(hemi);

const sun = new THREE.DirectionalLight(0xffd9a0, 1.6);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -18;
sun.shadow.camera.right = 18;
sun.shadow.camera.top = 18;
sun.shadow.camera.bottom = -18;
sun.shadow.camera.far = 70;
sun.shadow.bias = -0.002;
scene.add(sun);
scene.add(sun.target);

const fill = new THREE.DirectionalLight(0x4de3c1, 0.25);
fill.position.set(-10, 8, -12);
scene.add(fill);

function makeGlowTexture() {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 128;
  const g = c.getContext('2d');
  const r = g.createRadialGradient(64, 64, 2, 64, 64, 62);
  r.addColorStop(0, 'rgba(255,255,255,1)');
  r.addColorStop(0.35, 'rgba(255,255,255,0.45)');
  r.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = r;
  g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const glowTex = makeGlowTexture();

function glowSprite(color, scale, opacity) {
  const mat = new THREE.SpriteMaterial({
    map: glowTex,
    color: color,
    transparent: true,
    opacity: opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const s = new THREE.Sprite(mat);
  s.scale.setScalar(scale);
  return s;
}

/* ==================== ПЕРСОНАЖ ==================== */
const FALLBACK_SKIN = {
  id: 'wanderer', name: 'Скиталец', desc: '', glow: 2,
  colors: { helmet:'#15151c', eyes:'#ff2a1a', jacket:'#4a7c33', pants:'#4a3222', boots:'#2b1c12', scarf:'#f2e3c2', pack:'#6b4a33' }
};
const SKINS = (Array.isArray(window.SKINS) && window.SKINS.length) ? window.SKINS : [FALLBACK_SKIN];

const M = {
  helmet: new THREE.MeshLambertMaterial({ color: 0x15151c }),
  eyes: new THREE.MeshLambertMaterial({ color: 0xff2a1a, emissive: 0xff2a1a, emissiveIntensity: 2 }),
  jacket: new THREE.MeshLambertMaterial({ color: 0x4a7c33 }),
  pants: new THREE.MeshLambertMaterial({ color: 0x4a3222 }),
  boots: new THREE.MeshLambertMaterial({ color: 0x2b1c12 }),
  scarf: new THREE.MeshLambertMaterial({ color: 0xf2e3c2 }),
  pack: new THREE.MeshLambertMaterial({ color: 0x6b4a33 })
};

const player = {
  x: 0, y: 0, z: 4,
  vx: 0, vz: 0, vy: 0,
  grounded: true, facing: Math.PI,
  walkPhase: 0, prevSin: 0, landT: 0,
  moving: false, sprinting: false,
  stamina: 100, inWater: false
};

function makeLimb(w, h, d, mat, x, y, z) {
  const pivot = new THREE.Group();
  pivot.position.set(x, y, z);
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  mesh.position.y = -h / 2 + 0.05;
  mesh.castShadow = true;
  pivot.add(mesh);
  return pivot;
}

const hero = new THREE.Group();
{
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.78, 1.05, 0.5), M.jacket);
  body.position.y = 1.5;
  body.castShadow = true;
  hero.add(body);

  const belt = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.12, 0.52), M.boots);
  belt.position.y = 1.02;
  hero.add(belt);

  const pack = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.24), M.pack);
  pack.position.set(0, 1.55, -0.38);
  pack.castShadow = true;
  hero.add(pack);

  const scarfRing = new THREE.Mesh(new THREE.BoxGeometry(0.84, 0.22, 0.56), M.scarf);
  scarfRing.position.y = 2.06;
  hero.add(scarfRing);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.42, 18, 14), M.helmet);
  head.position.y = 2.5;
  head.castShadow = true;
  hero.add(head);

  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.2, 0.34), M.helmet);
  fin.position.y = 2.95;
  hero.add(fin);

  [-0.16, 0.16].forEach((ex) => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), M.eyes);
    eye.position.set(ex, 2.54, 0.36);
    hero.add(eye);
  });

  const eyeLight = new THREE.PointLight(0xff4433, 1.1, 4);
  eyeLight.position.set(0, 2.5, 0.5);
  hero.add(eyeLight);

  const lantern = new THREE.PointLight(0xffc46b, 0, 9);
  lantern.position.set(0.6, 1.6, 0.4);
  hero.add(lantern);

  const legL = makeLimb(0.24, 0.85, 0.26, M.pants, -0.19, 0.98, 0);
  const legR = makeLimb(0.24, 0.85, 0.26, M.pants, 0.19, 0.98, 0);
  [legL, legR].forEach((leg) => {
    const boot = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.16, 0.4), M.boots);
    boot.position.set(0, -0.82, 0.06);
    boot.castShadow = true;
    leg.add(boot);
  });

  const armL = makeLimb(0.22, 0.78, 0.26, M.jacket, -0.52, 1.92, 0);
  const armR = makeLimb(0.22, 0.78, 0.26, M.jacket, 0.52, 1.92, 0);
  [armL, armR].forEach((arm) => {
    const mitten = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 8), M.scarf);
    mitten.position.y = -0.72;
    arm.add(mitten);
  });

  const tailPivot = new THREE.Group();
  tailPivot.position.set(0.24, 2.02, -0.26);
  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.68, 0.06), M.scarf);
  tail.position.y = -0.32;
  tail.castShadow = true;
  tailPivot.add(tail);

  hero.add(legL, legR, armL, armR, tailPivot);
  hero.userData = { body, legL, legR, armL, armR, tailPivot, eyeLight, lantern };
}
hero.position.set(player.x, 0, player.z);
hero.rotation.y = player.facing;
scene.add(hero);

/* ==================== СКИНЫ ==================== */
let currentSkin = store.get('fm_skin', 'wanderer');

function applySkin(id, silent) {
  const skin = SKINS.find((s) => s.id === id) || SKINS[0];
  currentSkin = skin.id;
  store.set('fm_skin', skin.id);

  for (const key in M) {
    if (skin.colors && skin.colors[key]) M[key].color.set(skin.colors[key]);
  }
  const eyeColor = (skin.colors && skin.colors.eyes) || '#ff2a1a';
  const glow = typeof skin.glow === 'number' ? skin.glow : 2;
  M.eyes.emissive.set(eyeColor);
  M.eyes.emissiveIntensity = glow;
  hero.userData.eyeLight.color.set(eyeColor);
  hero.userData.eyeLight.intensity = glow * 0.5;

  renderSkins();
  if (!silent) toast('Скин: ' + skin.name);
}

function skinSVG(skin) {
  const c = skin.colors || {};
  return `<svg viewBox="0 0 60 80" aria-hidden="true">
    <circle cx="30" cy="16" r="13" fill="${c.helmet || '#15151c'}"/>
    <circle cx="25" cy="17" r="2.6" fill="${c.eyes || '#ff2a1a'}"/>
    <circle cx="35" cy="17" r="2.6" fill="${c.eyes || '#ff2a1a'}"/>
    <rect x="17" y="30" width="26" height="24" rx="4" fill="${c.jacket || '#4a7c33'}"/>
    <rect x="15" y="30" width="5" height="20" rx="2" fill="${c.jacket || '#4a7c33'}"/>
    <rect x="40" y="30" width="5" height="20" rx="2" fill="${c.jacket || '#4a7c33'}"/>
    <rect x="17" y="28" width="26" height="5" rx="2" fill="${c.scarf || '#f2e3c2'}"/>
    <rect x="20" y="54" width="8" height="18" rx="2" fill="${c.pants || '#4a3222'}"/>
    <rect x="32" y="54" width="8" height="18" rx="2" fill="${c.pants || '#4a3222'}"/>
    <rect x="18" y="69" width="11" height="6" rx="2" fill="${c.boots || '#2b1c12'}"/>
    <rect x="31" y="69" width="11" height="6" rx="2" fill="${c.boots || '#2b1c12'}"/>
  </svg>`;
}

function renderSkins() {
  ui.skinGrid.innerHTML = SKINS.map((s) => {
    const selected = s.id === currentSkin ? 'selected' : '';
    return `<button class="skin-card ${selected}" data-id="${s.id}">
      ${skinSVG(s)}
      <span class="s-name">${s.name}</span>
      <span class="s-desc">${s.desc || ''}</span>
    </button>`;
  }).join('');

  ui.skinGrid.querySelectorAll('.skin-card').forEach((btn) => {
    btn.addEventListener('click', () => {
      Sfx.ensure();
      Sfx.interact();
      applySkin(btn.dataset.id, false);
      burst(player.x, 1.5, player.z, 0xffd166, 18, 3, 3, 0.8);
    });
  });
}

/* ==================== ЧАСТИЦЫ ==================== */
const P_MAX = 260;
const pPos = new Float32Array(P_MAX * 3);
const pCol = new Float32Array(P_MAX * 3);
const pVel = new Float32Array(P_MAX * 3);
const pLife = new Float32Array(P_MAX);
const pMax = new Float32Array(P_MAX);
const pGrav = new Float32Array(P_MAX);
const pBase = new Float32Array(P_MAX * 3);
for (let i = 0; i < P_MAX; i++) pPos[i * 3 + 1] = -999;

const pGeo = new THREE.BufferGeometry();
pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
  map: glowTex, size: 10, sizeAttenuation: false, vertexColors: true,
  transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
}));
particles.frustumCulled = false;
scene.add(particles);
let pCursor = 0;
const tmpC = new THREE.Color();

function burst(x, y, z, color, count, speed, grav, life) {
  tmpC.set(color);
  for (let n = 0; n < count; n++) {
    const i = pCursor;
    pCursor = (pCursor + 1) % P_MAX;
    const a = Math.random() * TAU;
    const up = Math.random();
    pPos[i * 3] = x;
    pPos[i * 3 + 1] = y;
    pPos[i * 3 + 2] = z;
    pVel[i * 3] = Math.cos(a) * speed * (0.3 + Math.random() * 0.7);
    pVel[i * 3 + 1] = up * speed;
    pVel[i * 3 + 2] = Math.sin(a) * speed * (0.3 + Math.random() * 0.7);
    pLife[i] = pMax[i] = life * (0.6 + Math.random() * 0.6);
    pGrav[i] = grav;
    pBase[i * 3] = tmpC.r;
    pBase[i * 3 + 1] = tmpC.g;
    pBase[i * 3 + 2] = tmpC.b;
  }
}

function updateParticles(dt) {
  for (let i = 0; i < P_MAX; i++) {
    if (pLife[i] <= 0) continue;
    pLife[i] -= dt;
    if (pLife[i] <= 0) {
      pPos[i * 3 + 1] = -999;
      pCol[i * 3] = pCol[i * 3 + 1] = pCol[i * 3 + 2] = 0;
      continue;
    }
    pVel[i * 3 + 1] -= pGrav[i] * dt;
    pPos[i * 3] += pVel[i * 3] * dt;
    pPos[i * 3 + 1] += pVel[i * 3 + 1] * dt;
    pPos[i * 3 + 2] += pVel[i * 3 + 2] * dt;
    if (pPos[i * 3 + 1] < 0.03) {
      pPos[i * 3 + 1] = 0.03;
      pVel[i * 3 + 1] *= -0.3;
    }
    const f = pLife[i] / pMax[i];
    pCol[i * 3] = pBase[i * 3] * f;
    pCol[i * 3 + 1] = pBase[i * 3 + 1] * f;
    pCol[i * 3 + 2] = pBase[i * 3 + 2] * f;
  }
  pGeo.attributes.position.needsUpdate = true;
  pGeo.attributes.color.needsUpdate = true;
}

/* ==================== ОТКРЫТИЯ ==================== */
const DISC = [
  { id:'camp', ico:'🏕️', title:'Лагерь', text:'Уютный лагерь с палаткой и костром. Здесь можно отдохнуть.' },
  { id:'fire', ico:'🔥', title:'Первый огонь', text:'Костёр разожжён. Ночью он согревает и освещает путь.' },
  { id:'cat', ico:'🐈', title:'Барсик', text:'Рыжий кот доволен. Кажется, он теперь ваш спутник.' },
  { id:'supplies', ico:'📦', title:'Припасы', text:'В ящике нашлись яблоки. Кто-то оставил их для путников.' },
  { id:'lake', ico:'🌊', title:'Тихое озеро', text:'Вода тихая, но в ней определённо кто-то есть.' },
  { id:'fish', ico:'🐟', title:'Рыбак', text:'Первая рыба поймана! У костра её можно пожарить.' },
  { id:'grove', ico:'🍄', title:'Грибная роща', text:'Светящиеся грибы растут только здесь. Ночью они ярче.' },
  { id:'mushroom', ico:'🧺', title:'Грибник', text:'Гриб собран. Через время на этом месте вырастет новый.' },
  { id:'orchard', ico:'🌳', title:'Яблоневый сад', text:'Старые яблони всё ещё плодоносят.' },
  { id:'apple', ico:'🍎', title:'Яблочный спас', text:'Яблоко упало прямо в руки. Дерево стоит потрясти ещё.' },
  { id:'meadow', ico:'🌼', title:'Цветочная поляна', text:'Бабочки кружат над цветами. Красота — тоже открытие.' },
  { id:'flower', ico:'💐', title:'Букет', text:'Цветы собраны. Их не съесть, но настроение они поднимают.' },
  { id:'ruins', ico:'🗿', title:'Древние руины', text:'Пять камней с рунами. Что будет, если коснуться каждого?' },
  { id:'runes', ico:'🔮', title:'Хранитель рун', text:'Все руны зажглись. Долина ответила сиянием.' },
  { id:'beacon', ico:'🗼', title:'Старый маяк', text:'Маяк давно погас. Но его ещё можно зажечь.' },
  { id:'light', ico:'💡', title:'Свет маяка', text:'Маяк осветил долину и открыл все места на карте.' },
  { id:'rest', ico:'⛺', title:'Ночлег', text:'Сон в палатке вернул силы и приблизил утро.' }
];
const discovered = new Set();

function syncDisc() {
  ui.disc.textContent = discovered.size + ' / ' + DISC.length;
}

function renderJournal() {
  ui.journalFill.style.width = (discovered.size / DISC.length * 100) + '%';
  ui.journalList.innerHTML = DISC.map((d) => {
    const ok = discovered.has(d.id);
    return `<div class="j-entry ${ok ? '' : 'locked'}">
      <div class="j-ico">${ok ? d.ico : '❔'}</div>
      <div>
        <div class="j-title">${ok ? d.title : '???'}</div>
        <div class="j-text">${ok ? d.text : 'Исследуйте долину, чтобы сделать это открытие.'}</div>
      </div>
    </div>`;
  }).join('');
}

function unlock(id) {
  if (discovered.has(id)) return;
  discovered.add(id);
  const d = DISC.find((x) => x.id === id);
  if (!d) return;

  ui.discoveryTitle.textContent = d.ico + ' ' + d.title;
  ui.discovery.classList.add('show');
  Sfx.discover();
  clearTimeout(discTimer);
  discTimer = setTimeout(() => ui.discovery.classList.remove('show'), 3200);
  syncDisc();
  renderJournal();

  if (discovered.size === DISC.length && !completeShown) {
    completeShown = true;
    setTimeout(() => {
      Sfx.win();
      ui.completeText.innerHTML = `Вы нашли все <b>${DISC.length} открытий</b> за ${fmtTime(gameTime)} и прошли ${Math.round(distanceWalked)} метров. Долина запомнит вас.`;
      openPanel('complete');
    }, 1200);
  }
}

/* ==================== РЮКЗАК ==================== */
const items = { apple: 0, mushroom: 0, fish: 0, flower: 0 };
const ITEM_META = {
  apple: { ico:'🍎', name:'Яблоко', eat:true },
  mushroom: { ico:'🍄', name:'Светящийся гриб', eat:true },
  fish: { ico:'🐟', name:'Рыба', eat:true },
  flower: { ico:'🌼', name:'Цветы', eat:false }
};

function addItem(type, n) {
  items[type] = (items[type] || 0) + (n || 1);
  Sfx.pickup();
  renderBag();
  toast(ITEM_META[type].ico + ' +' + (n || 1) + ' ' + ITEM_META[type].name);
}

function renderBag() {
  const rows = Object.keys(items).filter((k) => items[k] > 0).map((k) => {
    const m = ITEM_META[k];
    const eatBtn = m.eat ? `<button class="btn-ghost eat-btn" data-item="${k}">Съесть</button>` : '';
    return `<div class="b-item">
      <div class="b-ico">${m.ico}</div>
      <div class="b-name">${m.name}</div>
      <div class="b-count">×${items[k]}</div>
      ${eatBtn}
    </div>`;
  }).join('');
  ui.bagList.innerHTML = rows || '<div class="b-empty">Пока пусто. Поищите яблоки, грибы, рыбу или цветы.</div>';
  ui.bagList.querySelectorAll('.eat-btn').forEach((btn) => {
    btn.addEventListener('click', () => eat(btn.dataset.item));
  });
}

function nearLitFire() {
  return world && world.fire && world.fire.lit &&
    Math.hypot(player.x - world.fire.x, player.z - world.fire.z) < 5;
}

function eat(type) {
  if (!items[type]) return;
  items[type]--;
  Sfx.eat();
  let gain = 0;
  let msg = '';
  if (type === 'apple') { gain = 30; msg = '🍎 Хрусть! +30 сил'; }
  if (type === 'mushroom') { gain = 22; msg = '🍄 Светящийся гриб… странно вкусно. +22 силы'; }
  if (type === 'fish') {
    if (nearLitFire()) { gain = 55; msg = '🐟 Жареная рыба у костра! +55 сил'; }
    else { gain = 15; msg = '🐟 Сырая рыба… лучше у костра. +15 сил'; }
  }
  player.stamina = clamp(player.stamina + gain, 0, 100);
  toast(msg);
  renderBag();
}

/* ==================== ОБЩИЕ ГЕОМЕТРИИ / МАТЕРИАЛЫ ==================== */
const G = {
  trunk: new THREE.CylinderGeometry(0.2, 0.3, 1.4, 7),
  cone: [
    new THREE.ConeGeometry(1.5, 1.7, 7),
    new THREE.ConeGeometry(1.15, 1.45, 7),
    new THREE.ConeGeometry(0.78, 1.2, 7)
  ],
  rock: new THREE.DodecahedronGeometry(1, 0),
  grass: new THREE.ConeGeometry(0.06, 0.38, 5),
  apple: new THREE.SphereGeometry(0.12, 8, 8),
  mushStem: new THREE.CylinderGeometry(0.06, 0.09, 0.28, 6),
  mushCap: new THREE.SphereGeometry(0.2, 8, 6, 0, TAU, 0, Math.PI / 2),
  flower: new THREE.ConeGeometry(0.09, 0.16, 6),
  rabbitBody: new THREE.SphereGeometry(0.28, 10, 8),
  rabbitHead: new THREE.SphereGeometry(0.18, 10, 8),
  ear: new THREE.BoxGeometry(0.06, 0.3, 0.08),
  deerBody: new THREE.BoxGeometry(0.9, 0.55, 0.4),
  deerLeg: new THREE.BoxGeometry(0.1, 0.6, 0.1),
  deerHead: new THREE.BoxGeometry(0.3, 0.3, 0.3),
  antler: new THREE.ConeGeometry(0.05, 0.4, 5)
};

const MAT = {
  trunk: new THREE.MeshLambertMaterial({ color: 0x6b4a33 }),
  leaf: [
    new THREE.MeshLambertMaterial({ color: 0x2f7a44 }),
    new THREE.MeshLambertMaterial({ color: 0x3c8f4f })
  ],
  rock: new THREE.MeshLambertMaterial({ color: 0x7d8a77 }),
  grass: new THREE.MeshLambertMaterial({ color: 0xffffff }),
  flowerInst: new THREE.MeshLambertMaterial({ color: 0xffffff }),
  apple: new THREE.MeshLambertMaterial({ color: 0xd62828 }),
  mushStem: new THREE.MeshLambertMaterial({ color: 0xf2e3c2 }),
  mushCap: new THREE.MeshLambertMaterial({ color: 0xff9f43, emissive: 0xff7b00, emissiveIntensity: 0.5 }),
  water: new THREE.MeshStandardMaterial({ color: 0x2e6f8e, transparent: true, opacity: 0.82, roughness: 0.25, metalness: 0.1 }),
  sand: new THREE.MeshLambertMaterial({ color: 0xc9b98a }),
  wood: new THREE.MeshLambertMaterial({ color: 0x8a5a3a }),
  tent: new THREE.MeshLambertMaterial({ color: 0xc96f3b }),
  cat: new THREE.MeshLambertMaterial({ color: 0xd97b29 }),
  catDark: new THREE.MeshLambertMaterial({ color: 0x8a4a1a }),
  rabbit: new THREE.MeshLambertMaterial({ color: 0xb8a58a }),
  deer: new THREE.MeshLambertMaterial({ color: 0x9a6b4f }),
  runeStone: new THREE.MeshLambertMaterial({ color: 0x6a7568 }),
  runeOff: new THREE.MeshLambertMaterial({ color: 0x3a4a3e }),
  runeOn: new THREE.MeshLambertMaterial({ color: 0xb48cff, emissive: 0xb48cff, emissiveIntensity: 1.6 }),
  flame: new THREE.MeshBasicMaterial({ color: 0xff9f43, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }),
  beam: new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
};

/* ==================== МИНИКАРТА ==================== */
const mmCtx = ui.minimap.getContext('2d');
const MM = 150;
const MM_R = 68;
const FOG_N = 44;
const minimapFog = new Uint8Array(FOG_N * FOG_N);

function revealFog() {
  const cx = Math.floor((player.x + WORLD_R) / (WORLD_R * 2) * FOG_N);
  const cz = Math.floor((player.z + WORLD_R) / (WORLD_R * 2) * FOG_N);
  for (let dz = -4; dz <= 4; dz++) {
    for (let dx = -4; dx <= 4; dx++) {
      if (dx * dx + dz * dz > 16) continue;
      const x = cx + dx;
      const z = cz + dz;
      if (x >= 0 && x < FOG_N && z >= 0 && z < FOG_N) minimapFog[z * FOG_N + x] = 1;
    }
  }
}

function isExplored(x, z) {
  const fx = Math.floor((x + WORLD_R) / (WORLD_R * 2) * FOG_N);
  const fz = Math.floor((z + WORLD_R) / (WORLD_R * 2) * FOG_N);
  if (fx < 0 || fx >= FOG_N || fz < 0 || fz >= FOG_N) return false;
  return minimapFog[fz * FOG_N + fx] === 1;
}

function drawMinimap() {
  mmCtx.clearRect(0, 0, MM, MM);
  mmCtx.fillStyle = '#0d2114';
  mmCtx.fillRect(0, 0, MM, MM);
  const s = MM_R / WORLD_R;

  for (let z = 0; z < FOG_N; z++) {
    for (let x = 0; x < FOG_N; x++) {
      if (!minimapFog[z * FOG_N + x]) continue;
      mmCtx.fillStyle = 'rgba(76,154,85,0.5)';
      mmCtx.fillRect(
        MM / 2 + (x / FOG_N * 2 - 1) * MM_R,
        MM / 2 + (z / FOG_N * 2 - 1) * MM_R,
        MM_R * 2 / FOG_N + 1,
        MM_R * 2 / FOG_N + 1
      );
    }
  }

  if (world) {
    if (world.fogReveal || isExplored(world.lake.x, world.lake.z)) {
      mmCtx.fillStyle = 'rgba(111,195,255,0.7)';
      mmCtx.beginPath();
      mmCtx.arc(MM / 2 + world.lake.x * s, MM / 2 + world.lake.z * s, world.lake.r * s, 0, TAU);
      mmCtx.fill();
    }
    world.landmarks.forEach((l) => {
      if (l.discovered || world.fogReveal || isExplored(l.x, l.z)) {
        mmCtx.font = '13px serif';
        mmCtx.textAlign = 'center';
        mmCtx.textBaseline = 'middle';
        mmCtx.fillText(l.ico, MM / 2 + l.x * s, MM / 2 + l.z * s);
      }
    });
  }

  mmCtx.save();
  mmCtx.translate(MM / 2 + player.x * s, MM / 2 + player.z * s);
  mmCtx.rotate(-player.facing + Math.PI);
  mmCtx.fillStyle = '#ffd166';
  mmCtx.beginPath();
  mmCtx.moveTo(0, -6);
  mmCtx.lineTo(4, 5);
  mmCtx.lineTo(-4, 5);
  mmCtx.closePath();
  mmCtx.fill();
  mmCtx.restore();

  mmCtx.strokeStyle = 'rgba(120,200,140,0.4)';
  mmCtx.lineWidth = 2;
  mmCtx.beginPath();
  mmCtx.arc(MM / 2, MM / 2, MM_R, 0, TAU);
  mmCtx.stroke();
}

/* ==================== ПОСТРОЙКА МИРА ==================== */
function buildWorld(sd) {
  const rnd = mulberry32(sd);
  const group = new THREE.Group();
  scene.add(group);

  const colliders = [];
  const interactables = [];
  const landmarks = [];
  const trees = [];
  const mushrooms = [];
  const appleTrees = [];
  const animals = [];
  const butterflies = [];
  const birds = [];
  const ripples = [];

  const W = {
    group, colliders, interactables, landmarks, trees, mushrooms, appleTrees,
    animals, butterflies, birds, ripples,
    fire: null, beacon: null, cat: null, runes: [], lake: null,
    fogReveal: false, auroraT: 0
  };

  /* --- Земля --- */
  const geo = new THREE.PlaneGeometry(120, 120, 60, 60);
  const pos = geo.attributes.position;
  const colors = [];
  const cA = new THREE.Color(0x4c9a55);
  const cB = new THREE.Color(0x63b168);
  const cC = new THREE.Color(0x79c17b);
  const tmp = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const d = Math.hypot(x, y);
    const n = (Math.sin(x * 0.3 + 1.7) * Math.cos(y * 0.27) + Math.sin(x * 0.12 - y * 0.2)) * 0.25 + 0.5;
    tmp.copy(cA).lerp(cB, clamp(n, 0, 1));
    if (d < 7) tmp.lerp(cC, (1 - d / 7) * 0.5);
    if (d > 42) tmp.multiplyScalar(1 - Math.min((d - 42) / 16, 0.4));
    colors.push(tmp.r, tmp.g, tmp.b);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const ground = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);

  function addTree(x, z, s, apple) {
    const g = new THREE.Group();
    const trunk = new THREE.Mesh(G.trunk, MAT.trunk);
    trunk.position.y = 0.7;
    trunk.castShadow = true;
    g.add(trunk);

    const fol = new THREE.Group();
    G.cone.forEach((cg, i) => {
      const m = new THREE.Mesh(cg, MAT.leaf[i % 2]);
      m.position.y = 1.7 + i;
      m.castShadow = true;
      fol.add(m);
    });
    if (apple) {
      for (let i = 0; i < 7; i++) {
        const a = rnd() * TAU;
        const r = 0.5 + rnd() * 0.8;
        const ap = new THREE.Mesh(G.apple, MAT.apple);
        ap.position.set(Math.cos(a) * r, 2.2 + rnd() * 1.4, Math.sin(a) * r);
        fol.add(ap);
      }
    }
    g.add(fol);
    g.position.set(x, 0, z);
    g.scale.setScalar(s);
    g.rotation.y = rnd() * TAU;
    group.add(g);
    colliders.push({ x, z, r: 0.55 * s });
    trees.push({ fol, phase: rnd() * 9 });
    if (apple) appleTrees.push({ x, z, group: g, cd: 0 });
    return g;
  }

  function addRock(x, z, s) {
    const m = new THREE.Mesh(G.rock, MAT.rock);
    m.position.set(x, s * 0.35, z);
    m.scale.set(s, s * 0.7, s);
    m.rotation.set(rnd(), rnd() * 6, rnd());
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
    colliders.push({ x, z, r: s * 0.8 });
  }

  function addMushroom(x, z, big) {
    const g = new THREE.Group();
    const st = new THREE.Mesh(G.mushStem, MAT.mushStem);
    st.position.y = 0.14;
    g.add(st);
    const cp = new THREE.Mesh(G.mushCap, MAT.mushCap);
    cp.position.y = 0.27;
    g.add(cp);
    g.position.set(x, 0, z);
    g.scale.setScalar(big ? 2.2 : 0.7 + rnd() * 0.8);
    group.add(g);
    const m = { x, z, group: g, picked: false, regrow: 0, big: !!big };
    mushrooms.push(m);
    return m;
  }

  function interact(x, z, r, label, action) {
    const o = { x, z, r, label, action };
    interactables.push(o);
    return o;
  }

  /* --- Локации --- */
  const aL = rnd() * TAU;
  const lake = { x: Math.cos(aL) * 30, z: Math.sin(aL) * 30, r: 9 };
  const forest = { x: Math.cos(aL + 2.2) * 32, z: Math.sin(aL + 2.2) * 32 };
  const grove = { x: Math.cos(aL + 4.0) * 28, z: Math.sin(aL + 4.0) * 28 };
  const ruins = { x: Math.cos(aL + 1.1) * 38, z: Math.sin(aL + 1.1) * 38 };
  const beaconPos = { x: Math.cos(aL + 5.2) * 40, z: Math.sin(aL + 5.2) * 40 };
  const meadow = { x: Math.cos(aL + 3.1) * 22, z: Math.sin(aL + 3.1) * 22 };
  W.lake = lake;

  landmarks.push(
    { id:'camp', name:'Лагерь', x:0, z:0, r:7, color:'#ffd166', ico:'🏕', discovered:false },
    { id:'lake', name:'Озеро', x:lake.x, z:lake.z, r:11, color:'#6fc3ff', ico:'🌊', discovered:false },
    { id:'orchard', name:'Яблоневый сад', x:forest.x, z:forest.z, r:10, color:'#7ee081', ico:'🌳', discovered:false },
    { id:'grove', name:'Грибная роща', x:grove.x, z:grove.z, r:8, color:'#ff9f43', ico:'🍄', discovered:false },
    { id:'ruins', name:'Руины', x:ruins.x, z:ruins.z, r:8, color:'#b48cff', ico:'🗿', discovered:false },
    { id:'beacon', name:'Маяк', x:beaconPos.x, z:beaconPos.z, r:8, color:'#ffd166', ico:'🗼', discovered:false },
    { id:'meadow', name:'Поляна', x:meadow.x, z:meadow.z, r:8, color:'#ff7eb6', ico:'🌼', discovered:false }
  );

  /* --- Озеро и рыбалка --- */
  const sand = new THREE.Mesh(new THREE.CircleGeometry(lake.r + 1.4, 40), MAT.sand);
  sand.rotation.x = -Math.PI / 2;
  sand.position.set(lake.x, 0.015, lake.z);
  group.add(sand);

  const water = new THREE.Mesh(new THREE.CircleGeometry(lake.r, 40), MAT.water);
  water.rotation.x = -Math.PI / 2;
  water.position.set(lake.x, 0.03, lake.z);
  water.receiveShadow = true;
  group.add(water);
  W.water = water;

  const pierDir = new THREE.Vector2(-lake.x, -lake.z).normalize();
  const pierStart = { x: lake.x + pierDir.x * (lake.r + 1), z: lake.z + pierDir.y * (lake.r + 1) };
  const pierEnd = { x: lake.x + pierDir.x * (lake.r - 3), z: lake.z + pierDir.y * (lake.r - 3) };
  for (let i = 0; i < 7; i++) {
    const t = i / 6;
    const px = lerp(pierStart.x, pierEnd.x, t);
    const pz = lerp(pierStart.z, pierEnd.z, t);
    const plank = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.12, 0.55), MAT.wood);
    plank.position.set(px, 0.18, pz);
    plank.rotation.y = Math.atan2(pierDir.x, pierDir.y);
    plank.castShadow = true;
    group.add(plank);
  }
  interact(
    pierEnd.x, pierEnd.z, 2.2,
    () => fishing ? (fishing.bite ? 'Поймать!' : 'Ждём поклёвку…') : 'Рыбачить',
    () => startFishing(pierEnd)
  );

  /* --- Лагерь --- */
  const tent = new THREE.Mesh(new THREE.ConeGeometry(2, 2.4, 4), MAT.tent);
  tent.position.set(-3, 1.2, -2);
  tent.rotation.y = Math.PI / 4;
  tent.castShadow = true;
  group.add(tent);
  colliders.push({ x: -3, z: -2, r: 1.8 });
  interact(-3, -2, 2.6, () => 'Отдохнуть до утра', () => {
    dayTime = 0.28;
    player.stamina = 100;
    unlock('rest');
    Sfx.interact();
    toast('⛺ Вы выспались. Утро близко.');
  });

  const crate = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), MAT.wood);
  crate.position.set(3, 0.5, -2);
  crate.castShadow = true;
  group.add(crate);
  colliders.push({ x: 3, z: -2, r: 0.8 });
  let crateOpened = false;
  interact(3, -2, 2, () => crateOpened ? 'Ящик пуст' : 'Открыть ящик', () => {
    if (crateOpened) { toast('Ящик уже пуст.'); return; }
    crateOpened = true;
    addItem('apple', 2);
    unlock('supplies');
    burst(3, 1, -2, 0xffd166, 14, 3, 4, 0.8);
  });

  const fireG = new THREE.Group();
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * TAU;
    const st = new THREE.Mesh(G.rock, MAT.rock);
    st.scale.setScalar(0.22);
    st.position.set(Math.cos(a) * 0.8, 0.12, Math.sin(a) * 0.8);
    fireG.add(st);
  }
  const logs = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.18, 0.18), MAT.wood);
  logs.position.y = 0.15;
  logs.rotation.y = 0.5;
  fireG.add(logs);
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.4, 1, 8), MAT.flame);
  flame.position.y = 0.6;
  flame.visible = false;
  fireG.add(flame);
  const fireLight = new THREE.PointLight(0xff9f43, 0, 12);
  fireLight.position.y = 1;
  fireG.add(fireLight);
  group.add(fireG);
  W.fire = { x: 0, z: 0, lit: false, flame, light: fireLight };
  interact(0, 0, 2.4, () => W.fire.lit ? 'Потушить костёр' : 'Разжечь костёр', () => {
    W.fire.lit = !W.fire.lit;
    W.fire.flame.visible = W.fire.lit;
    Sfx.fire();
    if (W.fire.lit) { unlock('fire'); toast('🔥 Костёр разожжён'); }
    else toast('Костёр потушен');
  });

  /* --- Кот --- */
  const cat = new THREE.Group();
  const cb = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), MAT.cat);
  cb.scale.set(1, 0.7, 1.3);
  cb.position.y = 0.3;
  cat.add(cb);
  const ch = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), MAT.cat);
  ch.position.set(0, 0.5, 0.35);
  cat.add(ch);
  [-0.1, 0.1].forEach((ex) => {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.16, 4), MAT.cat);
    ear.position.set(ex, 0.68, 0.35);
    cat.add(ear);
  });
  const catTail = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.5), MAT.catDark);
  catTail.position.set(0, 0.35, -0.45);
  catTail.rotation.x = 0.6;
  cat.add(catTail);
  cat.position.set(2, 0, 1.5);
  cat.rotation.y = -0.7;
  group.add(cat);
  W.cat = { group: cat, tail: catTail, petT: 0 };
  interact(2, 1.5, 1.8, () => 'Погладить Барсика', () => {
    W.cat.petT = 2;
    Sfx.purr();
    unlock('cat');
    burst(2, 0.8, 1.5, 0xff7eb6, 10, 2, 1, 0.9);
    toast('🐈 Барсик мурчит');
  });

  /* --- Яблоневый сад --- */
  for (let i = 0; i < 4; i++) {
    const a = i / 4 * TAU + rnd() * 0.5;
    const r = 3 + rnd() * 3;
    addTree(forest.x + Math.cos(a) * r, forest.z + Math.sin(a) * r, 1 + rnd() * 0.3, true);
  }
  appleTrees.forEach((tree) => {
    interact(tree.x, tree.z, 2.4, () => tree.cd > 0 ? 'Яблоня отдыхает' : 'Потрясти яблоню', () => {
      if (tree.cd > 0) { toast('Яблоки ещё не созрели.'); return; }
      tree.cd = 25;
      addItem('apple', 1);
      unlock('apple');
      burst(tree.x, 2.5, tree.z, 0x7ee081, 16, 3, 4, 0.8);
      burst(tree.x, 0.3, tree.z, 0xd62828, 6, 2, 5, 0.7);
      Sfx.interact();
    });
  });
  for (let i = 0; i < 14; i++) {
    const a = rnd() * TAU;
    const r = 5 + rnd() * 7;
    addTree(forest.x + Math.cos(a) * r, forest.z + Math.sin(a) * r, 0.8 + rnd() * 0.5, false);
  }

  /* --- Грибная роща --- */
  for (let i = 0; i < 14; i++) {
    const a = rnd() * TAU;
    const r = rnd() * 6;
    const m = addMushroom(grove.x + Math.cos(a) * r, grove.z + Math.sin(a) * r, i === 0);
    if (!m.big) {
      interact(m.x, m.z, 1.5, () => m.picked ? 'Гриб ещё растёт' : 'Собрать гриб', () => {
        if (m.picked) return;
        m.picked = true;
        m.regrow = 40;
        m.group.visible = false;
        addItem('mushroom', 1);
        unlock('mushroom');
        burst(m.x, 0.4, m.z, 0xff9f43, 10, 2, 2, 0.7);
      });
    }
  }
  for (let i = 0; i < 5; i++) {
    const a = rnd() * TAU;
    const r = 6 + rnd() * 3;
    addTree(grove.x + Math.cos(a) * r, grove.z + Math.sin(a) * r, 0.7 + rnd() * 0.4, false);
  }

  /* --- Цветочная поляна --- */
  const flowerInst = new THREE.InstancedMesh(G.flower, MAT.flowerInst, 110);
  const mtx = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const sc = new THREE.Vector3();
  const p = new THREE.Vector3();
  const col = new THREE.Color();
  const flowerSpots = [];
  const flowerColors = [0xffd166, 0xff7eb6, 0xb48cff, 0x6fc3ff];
  for (let i = 0; i < 110; i++) {
    const a = rnd() * TAU;
    const r = rnd() * 7;
    const x = meadow.x + Math.cos(a) * r;
    const z = meadow.z + Math.sin(a) * r;
    p.set(x, 0.1, z);
    q.setFromEuler(new THREE.Euler(0, rnd() * 6, 0));
    sc.setScalar(0.7 + rnd() * 0.8);
    mtx.compose(p, q, sc);
    flowerInst.setMatrixAt(i, mtx);
    flowerInst.setColorAt(i, col.set(flowerColors[Math.floor(rnd() * flowerColors.length)]));
    if (i < 3) flowerSpots.push({ x, z });
  }
  flowerInst.instanceMatrix.needsUpdate = true;
  if (flowerInst.instanceColor) flowerInst.instanceColor.needsUpdate = true;
  group.add(flowerInst);
  flowerSpots.forEach((spot) => {
    interact(spot.x, spot.z, 2, () => 'Собрать цветы', () => {
      addItem('flower', 1);
      unlock('flower');
      burst(spot.x, 0.4, spot.z, 0xff7eb6, 12, 2, 1, 0.8);
    });
  });
  for (let i = 0; i < 8; i++) {
    const b = new THREE.Group();
    const wingMat = new THREE.MeshBasicMaterial({
      color: [0xffd166, 0xff7eb6, 0xb48cff][i % 3],
      side: THREE.DoubleSide
    });
    const w1 = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.16), wingMat);
    const w2 = w1.clone();
    w1.position.x = -0.1;
    w2.position.x = 0.1;
    b.add(w1, w2);
    b.position.set(meadow.x + (rnd() - 0.5) * 10, 1 + rnd() * 1.5, meadow.z + (rnd() - 0.5) * 10);
    group.add(b);
    butterflies.push({ group: b, w1, w2, cx: b.position.x, cz: b.position.z, phase: rnd() * 9 });
  }

  /* --- Руины --- */
  for (let i = 0; i < 5; i++) {
    const a = i / 5 * TAU;
    const x = ruins.x + Math.cos(a) * 4;
    const z = ruins.z + Math.sin(a) * 4;
    const stone = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2.2, 0.6), MAT.runeStone);
    stone.position.set(x, 1.1, z);
    stone.rotation.y = -a;
    stone.castShadow = true;
    group.add(stone);

    const rune = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.8), MAT.runeOff);
    rune.position.set(x + Math.cos(a) * 0.32, 1.2, z + Math.sin(a) * 0.32);
    rune.rotation.y = -a + Math.PI / 2;
    group.add(rune);

    const glow = glowSprite(0xb48cff, 1.6, 0);
    glow.position.copy(rune.position);
    group.add(glow);

    const r = { x, z, active: false, rune, glow };
    W.runes.push(r);
    colliders.push({ x, z, r: 0.6 });

    interact(x, z, 2, () => r.active ? 'Руна светится' : 'Коснуться руны', () => {
      if (r.active) { toast('Руна уже светится.'); return; }
      r.active = true;
      r.rune.material = MAT.runeOn;
      r.glow.material.opacity = 0.6;
      Sfx.rune();
      burst(x, 1.4, z, 0xb48cff, 20, 3, 1, 1);
      const activeCount = W.runes.filter((q) => q.active).length;
      toast('🔮 Руна ожила (' + activeCount + '/5)');
      if (W.runes.every((q) => q.active)) {
        unlock('runes');
        W.auroraT = 25;
        toast('✨ Долина ответила сиянием!');
        Sfx.win();
      }
    });
  }

  /* --- Маяк --- */
  const tower = new THREE.Mesh(new THREE.CylinderGeometry(1, 1.3, 6, 10), MAT.rock);
  tower.position.set(beaconPos.x, 3, beaconPos.z);
  tower.castShadow = true;
  group.add(tower);
  colliders.push({ x: beaconPos.x, z: beaconPos.z, r: 1.4 });

  const top = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1, 1.6), MAT.wood);
  top.position.set(beaconPos.x, 6.5, beaconPos.z);
  group.add(top);

  const lamp = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 12, 10),
    new THREE.MeshLambertMaterial({ color: 0xffd166, emissive: 0xffd166, emissiveIntensity: 0 })
  );
  lamp.position.set(beaconPos.x, 6.5, beaconPos.z);
  group.add(lamp);

  const beamG = new THREE.Group();
  beamG.position.set(beaconPos.x, 6.5, beaconPos.z);
  const beam = new THREE.Mesh(new THREE.ConeGeometry(2.5, 14, 12, 1, true), MAT.beam);
  beam.rotation.z = Math.PI / 2;
  beam.position.x = 7;
  beamG.add(beam);
  beamG.visible = false;
  group.add(beamG);

  const beaconLight = new THREE.PointLight(0xffd166, 0, 30);
  beaconLight.position.set(beaconPos.x, 6.5, beaconPos.z);
  group.add(beaconLight);

  W.beacon = { x: beaconPos.x, z: beaconPos.z, lit: false, lamp, beamG, light: beaconLight };
  interact(beaconPos.x, beaconPos.z, 3, () => W.beacon.lit ? 'Погасить маяк' : 'Зажечь маяк', () => {
    W.beacon.lit = !W.beacon.lit;
    W.beacon.beamG.visible = W.beacon.lit;
    W.beacon.lamp.material.emissiveIntensity = W.beacon.lit ? 2 : 0;
    W.beacon.light.intensity = W.beacon.lit ? 3 : 0;
    Sfx.interact();
    if (W.beacon.lit) {
      unlock('light');
      W.fogReveal = true;
      landmarks.forEach((l) => { l.discovered = true; });
      toast('💡 Маяк открыл все места на карте');
    } else {
      toast('Маяк погас');
    }
  });

  /* --- Лес по границе и камни --- */
  for (let i = 0; i < 46; i++) {
    const a = i / 46 * TAU + rnd() * 0.2;
    const r = 46 + rnd() * 6;
    addTree(Math.cos(a) * r, Math.sin(a) * r, 0.9 + rnd() * 0.6, false);
  }
  for (let i = 0; i < 18; i++) {
    const a = rnd() * TAU;
    const r = 8 + rnd() * 36;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (Math.hypot(x - lake.x, z - lake.z) > lake.r + 2 && Math.hypot(x, z) > 8) {
      addRock(x, z, 0.4 + rnd() * 0.6);
    }
  }

  /* --- Трава --- */
  const grassInst = new THREE.InstancedMesh(G.grass, MAT.grass, 380);
  for (let i = 0; i < 380; i++) {
    const a = rnd() * TAU;
    const r = Math.sqrt(rnd()) * 44;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (Math.hypot(x - lake.x, z - lake.z) < lake.r + 1) p.set(0, -999, 0);
    else p.set(x, 0.17, z);
    q.setFromEuler(new THREE.Euler((rnd() - 0.5) * 0.3, rnd() * 6, (rnd() - 0.5) * 0.3));
    sc.setScalar(0.7 + rnd());
    mtx.compose(p, q, sc);
    grassInst.setMatrixAt(i, mtx);
    grassInst.setColorAt(i, col.setHSL(0.3 + rnd() * 0.06, 0.5, 0.3 + rnd() * 0.12));
  }
  grassInst.instanceMatrix.needsUpdate = true;
  if (grassInst.instanceColor) grassInst.instanceColor.needsUpdate = true;
  group.add(grassInst);

  /* --- Животные --- */
  function rabbit(x, z) {
    const g = new THREE.Group();
    const b = new THREE.Mesh(G.rabbitBody, MAT.rabbit);
    b.scale.set(1, 0.8, 1.2);
    b.position.y = 0.28;
    g.add(b);
    const h = new THREE.Mesh(G.rabbitHead, MAT.rabbit);
    h.position.set(0, 0.42, 0.3);
    g.add(h);
    [-0.07, 0.07].forEach((ex) => {
      const ear = new THREE.Mesh(G.ear, MAT.rabbit);
      ear.position.set(ex, 0.65, 0.3);
      g.add(ear);
    });
    g.position.set(x, 0, z);
    group.add(g);
    animals.push({ type:'rabbit', group:g, x, z, tx:x, tz:z, speed:2.2, phase:rnd() * 9 });
  }

  function deer(x, z) {
    const g = new THREE.Group();
    const b = new THREE.Mesh(G.deerBody, MAT.deer);
    b.position.y = 0.8;
    g.add(b);
    [[-0.3, -0.12], [0.3, -0.12], [-0.3, 0.12], [0.3, 0.12]].forEach(([lx, lz]) => {
      const leg = new THREE.Mesh(G.deerLeg, MAT.deer);
      leg.position.set(lx, 0.3, lz);
      g.add(leg);
    });
    const h = new THREE.Mesh(G.deerHead, MAT.deer);
    h.position.set(0, 1.15, 0.45);
    g.add(h);
    [-0.1, 0.1].forEach((ex) => {
      const ant = new THREE.Mesh(G.antler, MAT.trunk);
      ant.position.set(ex, 1.45, 0.45);
      ant.rotation.z = ex * 2;
      g.add(ant);
    });
    g.position.set(x, 0, z);
    group.add(g);
    animals.push({ type:'deer', group:g, x, z, tx:x, tz:z, speed:1.6, phase:rnd() * 9 });
  }

  for (let i = 0; i < 5; i++) {
    const a = rnd() * TAU;
    const r = 8 + rnd() * 28;
    rabbit(Math.cos(a) * r, Math.sin(a) * r);
  }
  deer(forest.x + 4, forest.z + 4);
  deer(forest.x - 5, forest.z - 3);

  for (let i = 0; i < 6; i++) {
    const g = new THREE.Group();
    const wingMat = new THREE.MeshBasicMaterial({ color: 0x223344, side: THREE.DoubleSide });
    const w1 = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.18), wingMat);
    const w2 = w1.clone();
    w1.position.x = -0.25;
    w2.position.x = 0.25;
    g.add(w1, w2);
    group.add(g);
    birds.push({ group:g, w1, w2, r:18 + rnd() * 20, h:8 + rnd() * 5, speed:0.15 + rnd() * 0.15, phase:rnd() * TAU });
  }

  /* --- Светлячки --- */
  const FN = 80;
  const fPos = new Float32Array(FN * 3);
  const fSeed = [];
  for (let i = 0; i < FN; i++) {
    const a = rnd() * TAU;
    const r = rnd() * 44;
    fSeed.push({
      x: Math.cos(a) * r, y: 0.6 + rnd() * 2.6, z: Math.sin(a) * r,
      s1: rnd() * 9, s2: rnd() * 9, s3: rnd() * 9
    });
  }
  const fGeo = new THREE.BufferGeometry();
  fGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3));
  const fireflies = new THREE.Points(fGeo, new THREE.PointsMaterial({
    map: glowTex, color: 0xffe28a, size: 7, sizeAttenuation: false,
    transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false
  }));
  fireflies.frustumCulled = false;
  group.add(fireflies);
  W.fireflies = { points: fireflies, pos: fPos, seed: fSeed, n: FN };

  return W;
}

/* ==================== НОВЫЙ МИР ==================== */
function newWorld(newSeed) {
  seed = (typeof newSeed === 'number') ? newSeed : Math.floor(Math.random() * 99999);
  store.set('fm_seed', seed);
  if (world) scene.remove(world.group);

  discovered.clear();
  Object.keys(items).forEach((k) => { items[k] = 0; });
  player.x = 0; player.z = 4; player.y = 0;
  player.vx = 0; player.vz = 0; player.vy = 0;
  player.stamina = 100; player.grounded = true;
  gameTime = 0; dayTime = 0.3; distanceWalked = 0;
  fishing = null; completeShown = false;
  minimapFog.fill(0);

  world = buildWorld(seed);
  ui.seedIntro.textContent = seed;
  ui.seedPause.textContent = seed;
  syncDisc();
  renderJournal();
  renderBag();
  renderSkins();
  toast('Новая долина №' + seed);
}

/* ==================== РЫБАЛКА ==================== */
function startFishing(pier) {
  if (fishing) {
    if (fishing.bite) {
      fishing = null;
      addItem('fish', 1);
      unlock('fish');
      Sfx.splash();
      burst(pier.x, 0.3, pier.z, 0x6fc3ff, 20, 3, 4, 0.9);
      toast('🐟 Рыба поймана!');
    } else {
      toast('Терпение… ждём поклёвку.');
    }
    return;
  }
  fishing = { x: pier.x, z: pier.z, t: 0, biteAt: 2 + Math.random() * 3, bite: false, biteT: 0 };
  Sfx.splash();
  toast('🎣 Поплавок заброшен. Ждите…');
}

function updateFishing(dt) {
  if (!fishing) return;
  fishing.t += dt;
  if (!fishing.bite && fishing.t >= fishing.biteAt) {
    fishing.bite = true;
    fishing.biteT = 1.4;
    Sfx.splash();
    toast('❗ Клюёт! Нажмите E');
  }
  if (fishing.bite) {
    fishing.biteT -= dt;
    if (fishing.biteT <= 0) {
      fishing = null;
      toast('Рыба ушла…');
    }
  }
}

/* ==================== ПАНЕЛИ ==================== */
const overlays = {
  intro: ui.intro,
  wardrobe: ui.wardrobe,
  journal: ui.journal,
  bag: ui.bag,
  pause: ui.pause,
  complete: ui.complete
};

function openPanel(name) {
  activePanel = name;
  Object.values(overlays).forEach((o) => o.classList.add('hidden'));
  if (name && overlays[name]) overlays[name].classList.remove('hidden');
  if (name === 'wardrobe') renderSkins();
  if (name === 'journal') renderJournal();
  if (name === 'bag') renderBag();
}

function closePanel() {
  activePanel = null;
  Object.values(overlays).forEach((o) => o.classList.add('hidden'));
}

function startGame() {
  Sfx.ensure();
  Sfx.ambience();
  state = 'playing';
  closePanel();
  toast('Исследуйте долину. Дневник — J');
}

/* ==================== ВВОД ==================== */
const keys = {};
let jumpQueued = false;
let sprintTouch = false;
let interactQueued = false;
const joy = { x: 0, y: 0, id: null };

window.addEventListener('keydown', (e) => {
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  keys[e.code] = true;
  if (e.repeat) return;

  if (e.code === 'Space' && state === 'playing' && !activePanel) jumpQueued = true;
  if (e.code === 'KeyE' && state === 'playing' && !activePanel) interactQueued = true;
  if (e.code === 'KeyM') { Sfx.ensure(); Sfx.setMuted(!Sfx.muted); }
  if (e.code === 'KeyC' && state !== 'intro') openPanel(activePanel === 'wardrobe' ? null : 'wardrobe');
  if (e.code === 'KeyJ' && state !== 'intro') openPanel(activePanel === 'journal' ? null : 'journal');
  if (e.code === 'KeyI' && state !== 'intro') openPanel(activePanel === 'bag' ? null : 'bag');

  if (e.code === 'Escape') {
    if (activePanel && activePanel !== 'intro' && activePanel !== 'complete') closePanel();
    else if (state === 'playing') { state = 'paused'; openPanel('pause'); }
    else if (state === 'paused') { state = 'playing'; closePanel(); }
  }
  if (e.code === 'Enter' && state === 'intro') startGame();
});

window.addEventListener('keyup', (e) => { keys[e.code] = false; });
window.addEventListener('blur', () => {
  if (state === 'playing' && !activePanel) { state = 'paused'; openPanel('pause'); }
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden && state === 'playing' && !activePanel) { state = 'paused'; openPanel('pause'); }
});

$('btnStart').addEventListener('click', startGame);
$('btnIntroWardrobe').addEventListener('click', () => openPanel('wardrobe'));
$('btnWardrobeClose').addEventListener('click', () => {
  if (state === 'intro') openPanel('intro');
  else closePanel();
});
$('btnJournalClose').addEventListener('click', closePanel);
$('btnBagClose').addEventListener('click', closePanel);
$('btnResume').addEventListener('click', () => { state = 'playing'; closePanel(); });
$('btnPause').addEventListener('click', () => {
  if (state === 'playing') { state = 'paused'; openPanel('pause'); }
  else if (state === 'paused') { state = 'playing'; closePanel(); }
});
$('btnSound').addEventListener('click', () => { Sfx.ensure(); Sfx.setMuted(!Sfx.muted); });
$('btnBag').addEventListener('click', () => openPanel(activePanel === 'bag' ? null : 'bag'));
$('btnJournal').addEventListener('click', () => openPanel(activePanel === 'journal' ? null : 'journal'));
$('btnWardrobe').addEventListener('click', () => openPanel(activePanel === 'wardrobe' ? null : 'wardrobe'));
$('btnNewWorld').addEventListener('click', () => { newWorld(); state = 'playing'; closePanel(); });
$('btnCompleteNew').addEventListener('click', () => { newWorld(); state = 'playing'; closePanel(); });
$('btnCompleteContinue').addEventListener('click', () => { state = 'playing'; closePanel(); });

document.querySelectorAll('.time-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    timeSpeed = parseFloat(btn.dataset.speed);
    document.querySelectorAll('.time-btn').forEach((b) => b.classList.toggle('selected', b === btn));
  });
});

/* Джойстик */
const joyBase = $('joyBase');
const joyKnob = $('joyKnob');
function joyMove(e) {
  const r = joyBase.getBoundingClientRect();
  let dx = e.clientX - (r.left + r.width / 2);
  let dy = e.clientY - (r.top + r.height / 2);
  const d = Math.hypot(dx, dy);
  const max = 42;
  if (d > max) { dx = dx / d * max; dy = dy / d * max; }
  joy.x = dx / max;
  joy.y = dy / max;
  joyKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
}
joyBase.addEventListener('pointerdown', (e) => {
  joy.id = e.pointerId;
  joyBase.setPointerCapture(e.pointerId);
  joyMove(e);
});
joyBase.addEventListener('pointermove', (e) => { if (e.pointerId === joy.id) joyMove(e); });
function joyEnd(e) {
  if (e.pointerId === joy.id) {
    joy.id = null;
    joy.x = 0; joy.y = 0;
    joyKnob.style.transform = 'translate(-50%,-50%)';
  }
}
joyBase.addEventListener('pointerup', joyEnd);
joyBase.addEventListener('pointercancel', joyEnd);

$('btnJump').addEventListener('pointerdown', (e) => {
  e.preventDefault();
  if (state === 'playing' && !activePanel) jumpQueued = true;
});
$('btnInteract').addEventListener('pointerdown', (e) => {
  e.preventDefault();
  if (state === 'playing' && !activePanel) interactQueued = true;
});
const spBtn = $('btnSprint');
spBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); sprintTouch = true; });
['pointerup', 'pointercancel', 'pointerleave'].forEach((ev) => {
  spBtn.addEventListener(ev, () => { sprintTouch = false; });
});

/* Камера мышью */
let dragging = false;
let lastX = 0;
renderer.domElement.addEventListener('pointerdown', (e) => {
  if (e.pointerType === 'mouse') { dragging = true; lastX = e.clientX; }
});
window.addEventListener('pointermove', (e) => {
  if (dragging) { camYawT -= (e.clientX - lastX) * 0.006; lastX = e.clientX; }
});
window.addEventListener('pointerup', () => { dragging = false; });
renderer.domElement.addEventListener('wheel', (e) => {
  e.preventDefault();
  frustum = clamp(frustum + e.deltaY * 0.01, 7, 15);
}, { passive: false });

/* ==================== НЕБО / ДЕНЬ-НОЧЬ ==================== */
function updateSky(dt) {
  const elev = Math.sin((dayTime - 0.25) * TAU);
  const day = clamp(elev * 1.5 + 0.12, 0, 1);
  const dusk = clamp(1 - Math.abs(elev) * 3, 0, 1);

  sun.intensity = 0.18 + day * 1.5;
  sun.color.set(0x7f9fd9).lerp(new THREE.Color(0xffd9a0), day);
  hemi.intensity = 0.22 + day * 0.4;
  hero.userData.lantern.intensity = (1 - day) * 1.5;

  skyRepaint -= dt;
  if (skyRepaint > 0) return day;
  skyRepaint = 0.25;

  const top = new THREE.Color(0x050a18).lerp(new THREE.Color(0x6db3d9), day);
  const mid = new THREE.Color(0x0d1b33).lerp(new THREE.Color(0x9fd3c0), day);
  const hor = new THREE.Color(0x16263f).lerp(new THREE.Color(0xe9d9a0), day).lerp(new THREE.Color(0xff9f43), dusk * 0.5);

  const g = skyCtx.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0, '#' + top.getHexString());
  g.addColorStop(0.45, '#' + mid.getHexString());
  g.addColorStop(0.75, '#' + hor.getHexString());
  g.addColorStop(1, '#' + hor.clone().multiplyScalar(0.8).getHexString());
  skyCtx.fillStyle = g;
  skyCtx.fillRect(0, 0, 512, 512);

  skyCtx.fillStyle = '#fff';
  stars.forEach((s) => {
    skyCtx.globalAlpha = s.a * (1 - day);
    skyCtx.fillRect(s.x, s.y, 1.6, 1.6);
  });
  skyCtx.globalAlpha = 1;

  if (elev > -0.1) {
    const sx = dayTime * 512;
    const sy = 330 - elev * 230;
    const sg = skyCtx.createRadialGradient(sx, sy, 4, sx, sy, 110);
    sg.addColorStop(0, 'rgba(255,240,190,0.95)');
    sg.addColorStop(1, 'rgba(255,240,190,0)');
    skyCtx.fillStyle = sg;
    skyCtx.fillRect(0, 0, 512, 512);
  }
  if (day < 0.4) {
    const mx = (1 - dayTime) * 512;
    const my = 300 + elev * 180;
    const mg = skyCtx.createRadialGradient(mx, my, 3, mx, my, 70);
    mg.addColorStop(0, 'rgba(200,220,255,0.8)');
    mg.addColorStop(1, 'rgba(200,220,255,0)');
    skyCtx.fillStyle = mg;
    skyCtx.fillRect(0, 0, 512, 512);
  }

  scene.fog.color.copy(mid).lerp(hor, 0.4);
  skyTex.needsUpdate = true;
  return day;
}

/* ==================== ИГРОК ==================== */
const camFwd = new THREE.Vector3();
const camRight = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);

function updatePlayer(dt, t) {
  let ix = (keys.KeyD || keys.ArrowRight ? 1 : 0) - (keys.KeyA || keys.ArrowLeft ? 1 : 0) + joy.x;
  let iz = (keys.KeyS || keys.ArrowDown ? 1 : 0) - (keys.KeyW || keys.ArrowUp ? 1 : 0) + joy.y;
  const il = Math.hypot(ix, iz);
  if (il > 1) { ix /= il; iz /= il; }

  const wantSprint = (keys.ShiftLeft || keys.ShiftRight || sprintTouch) && il > 0 && player.stamina > 2;
  player.sprinting = wantSprint;
  if (wantSprint) player.stamina = clamp(player.stamina - 18 * dt, 0, 100);
  else player.stamina = clamp(player.stamina + (nearLitFire() ? 22 : 9) * dt, 0, 100);

  const water = world && Math.hypot(player.x - world.lake.x, player.z - world.lake.z) < world.lake.r;
  player.inWater = water;
  const spd = (wantSprint ? SPRINT : WALK) * (water ? 0.45 : 1);

  camera.getWorldDirection(camFwd);
  camFwd.y = 0;
  camFwd.normalize();
  camRight.crossVectors(camFwd, UP).normalize();
  const wx = camRight.x * ix + camFwd.x * -iz;
  const wz = camRight.z * ix + camFwd.z * -iz;

  const k = 1 - Math.exp(-12 * dt);
  player.vx += (wx * spd - player.vx) * k;
  player.vz += (wz * spd - player.vz) * k;

  const ox = player.x;
  const oz = player.z;
  player.x += player.vx * dt;
  player.z += player.vz * dt;
  distanceWalked += Math.hypot(player.x - ox, player.z - oz);
  player.moving = Math.hypot(player.vx, player.vz) > 0.5;

  for (const c of world.colliders) {
    const dx = player.x - c.x;
    const dz = player.z - c.z;
    const d = Math.hypot(dx, dz);
    const min = c.r + 0.45;
    if (d < min && d > 0.001) {
      player.x = c.x + dx / d * min;
      player.z = c.z + dz / d * min;
    }
  }
  const dc = Math.hypot(player.x, player.z);
  if (dc > WORLD_R) {
    player.x *= WORLD_R / dc;
    player.z *= WORLD_R / dc;
  }

  if (jumpQueued && player.grounded && !player.inWater) {
    player.vy = JUMP_V;
    player.grounded = false;
    Sfx.jump();
    burst(player.x, 0.15, player.z, 0xc9b98a, 8, 2, 4, 0.5);
  }
  jumpQueued = false;

  if (!player.grounded) {
    player.vy -= GRAV * dt;
    player.y += player.vy * dt;
    if (player.y <= 0) {
      player.y = 0;
      player.grounded = true;
      if (player.vy < -4) {
        Sfx.land();
        player.landT = 0.18;
        burst(player.x, 0.12, player.z, player.inWater ? 0x6fc3ff : 0xc9b98a, 12, 2.6, 5, 0.55);
      }
      player.vy = 0;
    }
  }

  if (player.moving) {
    const target = Math.atan2(player.vx, player.vz);
    let d = target - player.facing;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    player.facing += d * Math.min(1, dt * 12);
  }

  const P = hero.userData;
  const runF = player.sprinting ? 1.5 : 1;
  if (player.moving && player.grounded) player.walkPhase += dt * 9 * runF;
  const s = Math.sin(player.walkPhase);
  if (player.grounded) {
    const amp = player.moving ? (player.sprinting ? 0.85 : 0.55) : 0;
    P.legL.rotation.x = s * amp;
    P.legR.rotation.x = -s * amp;
    P.armL.rotation.x = -s * amp * 0.8;
    P.armR.rotation.x = s * amp * 0.8;
    if (player.moving && player.prevSin > 0 && s <= 0) Sfx.step();
    player.prevSin = s;
  } else {
    P.legL.rotation.x = 0.55;
    P.legR.rotation.x = -0.35;
    P.armL.rotation.x = -2.5;
    P.armR.rotation.x = -2.5;
  }
  P.body.scale.y = 1 + Math.sin(t * 2.2) * 0.015;
  P.tailPivot.rotation.x = -0.25 - (player.moving ? (player.sprinting ? 0.75 : 0.4) : 0) + Math.sin(t * 6) * 0.12;
  P.tailPivot.rotation.z = Math.sin(t * 3.1) * 0.1;
  hero.rotation.x = player.moving && player.sprinting && player.grounded ? 0.12 : 0;

  if (player.landT > 0) {
    player.landT -= dt;
    const q = Math.max(player.landT, 0) / 0.18;
    hero.scale.set(1 + q * 0.12, 1 - q * 0.15, 1 + q * 0.12);
  } else {
    hero.scale.set(1, 1, 1);
  }

  const bob = player.moving && player.grounded ? Math.abs(s) * 0.07 : 0;
  hero.position.set(player.x, player.y + bob, player.z);
  hero.rotation.y = player.facing;

  if (player.inWater && player.moving) {
    rippleTimer -= dt;
    if (rippleTimer <= 0) {
      rippleTimer = 0.25;
      spawnRipple(player.x, player.z);
    }
  }
}

function idleHero(t) {
  const P = hero.userData;
  P.body.scale.y = 1 + Math.sin(t * 2.2) * 0.02;
  P.tailPivot.rotation.x = -0.25 + Math.sin(t * 4) * 0.12;
  P.armL.rotation.x = Math.sin(t * 2.2) * 0.05;
  P.armR.rotation.x = -Math.sin(t * 2.2) * 0.05;
}

/* ==================== ВОЛНЫ ==================== */
function spawnRipple(x, z) {
  if (!world) return;
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.1, 0.16, 20),
    new THREE.MeshBasicMaterial({ color: 0x9fdcff, transparent: true, opacity: 0.6, side: THREE.DoubleSide })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.set(x, 0.06, z);
  world.group.add(ring);
  world.ripples.push({ mesh: ring, t: 0 });
}

function updateRipples(dt) {
  if (!world) return;
  for (let i = world.ripples.length - 1; i >= 0; i--) {
    const r = world.ripples[i];
    r.t += dt;
    r.mesh.scale.setScalar(1 + r.t * 3);
    r.mesh.material.opacity = 0.6 * (1 - r.t / 1.2);
    if (r.t > 1.2) {
      world.group.remove(r.mesh);
      r.mesh.geometry.dispose();
      r.mesh.material.dispose();
      world.ripples.splice(i, 1);
    }
  }
}

/* ==================== ВЗАИМОДЕЙСТВИЯ ==================== */
function updateInteractions(dt) {
  nearestInteract = null;
  let best = Infinity;
  for (const o of world.interactables) {
    const d = Math.hypot(o.x - player.x, o.z - player.z);
    if (d < o.r && d < best) { best = d; nearestInteract = o; }
  }

  if (nearestInteract) {
    const label = typeof nearestInteract.label === 'function' ? nearestInteract.label() : nearestInteract.label;
    ui.promptText.textContent = label;
    ui.prompt.classList.add('show');
    ui.btnInteract.classList.add('show');
  } else {
    ui.prompt.classList.remove('show');
    ui.btnInteract.classList.remove('show');
  }

  if (interactQueued) {
    interactQueued = false;
    if (nearestInteract) {
      Sfx.interact();
      nearestInteract.action();
    }
  }

  for (const lm of world.landmarks) {
    if (!lm.discovered && Math.hypot(lm.x - player.x, lm.z - player.z) < lm.r) {
      lm.discovered = true;
      unlock(lm.id);
    }
  }

  for (const m of world.mushrooms) {
    if (m.picked) {
      m.regrow -= dt;
      if (m.regrow <= 0) { m.picked = false; m.group.visible = true; }
    }
  }
  for (const tree of world.appleTrees) {
    if (tree.cd > 0) tree.cd -= dt;
  }

  if (fishing && Math.hypot(player.x - fishing.x, player.z - fishing.z) > 3) {
    fishing = null;
    toast('Вы отошли от поплавка.');
  }
  updateFishing(dt);
}

/* ==================== ЖИЗНЬ МИРА ==================== */
function updateWorldLife(dt, t, day) {
  for (const tr of world.trees) {
    tr.fol.rotation.z = Math.sin(t * 0.8 + tr.phase) * 0.025;
    tr.fol.rotation.x = Math.cos(t * 0.6 + tr.phase) * 0.02;
  }

  const ff = world.fireflies;
  for (let i = 0; i < ff.n; i++) {
    const f = ff.seed[i];
    ff.pos[i * 3] = f.x + Math.sin(t * 0.5 + f.s1) * 1.6;
    ff.pos[i * 3 + 1] = f.y + Math.sin(t * 0.8 + f.s2) * 0.5;
    ff.pos[i * 3 + 2] = f.z + Math.cos(t * 0.4 + f.s3) * 1.6;
  }
  ff.points.geometry.attributes.position.needsUpdate = true;
  ff.points.material.opacity = (1 - day) * 0.9;

  if (world.fire.lit) {
    world.fire.flame.scale.set(
      1 + Math.sin(t * 9) * 0.15,
      1 + Math.sin(t * 11) * 0.2,
      1 + Math.sin(t * 7) * 0.15
    );
    world.fire.light.intensity = 2 + Math.sin(t * 10) * 0.5;
    if (Math.random() < dt * 4) burst(world.fire.x, 0.8, world.fire.z, 0xff9f43, 1, 1.5, -1, 0.8);
  } else {
    world.fire.light.intensity = 0;
  }

  if (world.beacon.lit) world.beacon.beamG.rotation.y += dt * 0.7;

  if (world.cat) {
    world.cat.petT = Math.max(0, world.cat.petT - dt);
    world.cat.tail.rotation.y = Math.sin(t * (world.cat.petT > 0 ? 14 : 3)) * 0.5;
  }

  if (world.auroraT > 0) {
    world.auroraT -= dt;
    if (Math.random() < dt * 8) {
      const r = world.runes[Math.floor(Math.random() * world.runes.length)];
      burst(r.x, 2.5, r.z, Math.random() < 0.5 ? 0xb48cff : 0x4de3c1, 3, 2, -1, 1.5);
    }
  }

  for (const a of world.animals) {
    const dp = Math.hypot(a.x - player.x, a.z - player.z);
    const fleeR = a.type === 'rabbit' ? 5 : 7;
    const flee = dp < fleeR && (a.type === 'rabbit' || player.sprinting);
    if (flee) {
      const dx = a.x - player.x;
      const dz = a.z - player.z;
      const d = Math.hypot(dx, dz) || 1;
      a.tx = a.x + dx / d * 8;
      a.tz = a.z + dz / d * 8;
    } else if (Math.hypot(a.tx - a.x, a.tz - a.z) < 1) {
      const ang = Math.random() * TAU;
      const r = 3 + Math.random() * 8;
      a.tx = a.x + Math.cos(ang) * r;
      a.tz = a.z + Math.sin(ang) * r;
    }
    const dx = a.tx - a.x;
    const dz = a.tz - a.z;
    const d = Math.hypot(dx, dz) || 1;
    const sp = flee ? a.speed * 2.4 : a.speed;
    a.x += dx / d * sp * dt;
    a.z += dz / d * sp * dt;
    const dc = Math.hypot(a.x, a.z);
    if (dc > WORLD_R - 2) {
      a.x *= (WORLD_R - 2) / dc;
      a.z *= (WORLD_R - 2) / dc;
      a.tx = 0; a.tz = 0;
    }
    a.group.position.set(a.x, a.type === 'rabbit' ? Math.abs(Math.sin(t * 6 + a.phase)) * 0.22 : 0, a.z);
    a.group.rotation.y = Math.atan2(dx, dz);
  }

  for (const b of world.butterflies) {
    b.group.position.x = b.cx + Math.sin(t * 0.7 + b.phase) * 2;
    b.group.position.z = b.cz + Math.cos(t * 0.5 + b.phase) * 2;
    b.group.position.y = 1 + Math.sin(t * 2 + b.phase) * 0.4;
    b.w1.rotation.y = Math.sin(t * 14 + b.phase) * 0.8;
    b.w2.rotation.y = -Math.sin(t * 14 + b.phase) * 0.8;
    b.group.visible = day > 0.3;
  }

  for (const b of world.birds) {
    const a = t * b.speed + b.phase;
    b.group.position.set(Math.cos(a) * b.r, b.h + Math.sin(t + b.phase) * 0.5, Math.sin(a) * b.r);
    b.group.rotation.y = -a;
    b.w1.rotation.z = Math.sin(t * 8 + b.phase) * 0.5;
    b.w2.rotation.z = -Math.sin(t * 8 + b.phase) * 0.5;
    b.group.visible = day > 0.25;
  }

  fishTimer -= dt;
  if (fishTimer <= 0) {
    fishTimer = 6 + Math.random() * 8;
    const a = Math.random() * TAU;
    const r = Math.random() * world.lake.r * 0.7;
    const x = world.lake.x + Math.cos(a) * r;
    const z = world.lake.z + Math.sin(a) * r;
    spawnRipple(x, z);
    burst(x, 0.2, z, 0x6fc3ff, 10, 2, 4, 0.7);
    if (Math.hypot(x - player.x, z - player.z) < 14) Sfx.splash();
  }

  MAT.mushCap.emissiveIntensity = 0.3 + (1 - day) * 0.9;
  updateRipples(dt);
}

/* ==================== КАМЕРА ==================== */
const camTarget = new THREE.Vector3();
function updateCamera(dt) {
  camYaw += (camYawT - camYaw) * Math.min(1, dt * 8);
  const dist = 22;
  camTarget.set(
    player.x + Math.sin(camYaw) * dist,
    18,
    player.z + Math.cos(camYaw) * dist
  );
  camera.position.lerp(camTarget, 1 - Math.exp(-6 * dt));
  camera.lookAt(player.x, player.y + 1, player.z);

  const aspect = window.innerWidth / window.innerHeight;
  camera.left = -frustum * aspect / 2;
  camera.right = frustum * aspect / 2;
  camera.top = frustum / 2;
  camera.bottom = -frustum / 2;
  camera.updateProjectionMatrix();

  sun.position.set(player.x + 12, 18, player.z + 8);
  sun.target.position.set(player.x, 0, player.z);
}

/* ==================== ГЛАВНЫЙ ЦИКЛ ==================== */
const clock = new THREE.Clock();
let firstFrame = true;
let mmTimer = 0;

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  if (state === 'playing' && !activePanel) {
    gameTime += dt;
    dayTime = (dayTime + dt * timeSpeed / DAY_LENGTH) % 1;
  }

  const day = updateSky(dt);

  if (state === 'playing' && !activePanel) {
    updatePlayer(dt, t);
    updateInteractions(dt);
    revealFog();
    ui.stamina.style.width = player.stamina + '%';
    const h = Math.floor(dayTime * 24);
    const m = Math.floor((dayTime * 24 - h) * 60);
    ui.clock.textContent = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
  } else if (state === 'intro') {
    camYawT += dt * 0.05;
    idleHero(t);
  }

  if (world) updateWorldLife(dt, t, day);
  updateParticles(dt);
  updateCamera(dt);

  mmTimer -= dt;
  if (mmTimer <= 0) {
    mmTimer = 0.12;
    drawMinimap();
  }

  renderer.render(scene, camera);

  if (firstFrame) {
    firstFrame = false;
    window.__fmReady = true;
    ui.boot.classList.add('hide');
    setTimeout(() => ui.boot.remove(), 600);
  }
}

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* ==================== ЗАПУСК ==================== */
applySkin(currentSkin, true);
newWorld(seed);
syncDisc();
renderJournal();
renderBag();
renderSkins();
openPanel('intro');
animate();
