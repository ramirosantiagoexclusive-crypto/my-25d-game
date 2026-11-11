import * as THREE from 'three';

/* ================= КОНСТАНТЫ ================= */
const CRYSTAL_TOTAL = 12;
const WALK = 4.3, SPRINT = 7.6, GRAV = 24, JUMP_V = 9.6;
const WORLD_R = 25;
const DIFF = {
  calm:   { wisps: 0, wSpeed: 0,   chase: 0 },
  normal: { wisps: 2, wSpeed: 3.0, chase: 6.5 },
  hard:   { wisps: 4, wSpeed: 4.5, chase: 8 }
};
const store = {
  get(k, d){ try{ const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); }catch(e){ return d; } },
  set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};

/* ================= DOM ================= */
const $ = id => document.getElementById(id);
const ui = {
  crystalCount: $('crystalCount'), crystalChip: $('crystalChip'), timeText: $('timeText'),
  hearts: $('hearts'), toast: $('toast'), vignette: $('vignette'),
  menu: $('overlayMenu'), pause: $('overlayPause'), win: $('overlayWin'), lose: $('overlayLose'),
  winTime: $('winTime'), winScore: $('winScore'), winBest: $('winBest'),
  loseText: $('loseText'), bestLine: $('bestLine'), boot: $('boot')
};
const HEART_SVG = '<svg class="heart" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
ui.hearts.innerHTML = HEART_SVG + HEART_SVG + HEART_SVG;
const heartEls = [...ui.hearts.children];

/* ================= ЗВУК ================= */
const Audio = {
  ctx: null, master: null, ambStarted: false,
  muted: store.get('fm_muted', false),
  ensure(){
    if (!this.ctx){
      try{
        const AC = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AC();
        this.master = this.ctx.createGain();
        this.master.gain.value = this.muted ? 0 : 0.8;
        this.master.connect(this.ctx.destination);
      }catch(e){}
    }
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  },
  setMuted(m){
    this.muted = m; store.set('fm_muted', m);
    if (this.master) this.master.gain.linearRampToValueAtTime(m ? 0 : 0.8, (this.ctx?.currentTime || 0) + 0.1);
    $('icoSoundOn').style.display = m ? 'none' : '';
    $('icoSoundOff').style.display = m ? '' : 'none';
  },
  blip(f0, f1, dur, type, vol){
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime, o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(Math.max(f1, 1), t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + 0.02);
  },
  noise(dur, freq, vol){
    if (!this.ctx || this.muted) return;
    const t = this.ctx.currentTime, len = Math.floor(this.ctx.sampleRate * dur);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const s = this.ctx.createBufferSource(); s.buffer = buf;
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = freq;
    const g = this.ctx.createGain(); g.gain.value = vol;
    s.connect(f); f.connect(g); g.connect(this.master); s.start(t);
  },
  collect(combo){ this.blip(660, 880, .12, 'sine', .25); setTimeout(() => this.blip(880 + combo * 60, 1320, .15, 'sine', .2), 70); },
  jump(){ this.blip(280, 540, .14, 'triangle', .18); },
  land(){ this.noise(.09, 320, .3); },
  step(){ this.noise(.035, 750, .07); },
  hurt(){ this.blip(220, 80, .3, 'sawtooth', .25); this.noise(.15, 500, .2); },
  win(){ [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => this.blip(f, f, .22, 'triangle', .22), i * 130)); },
  lose(){ [330, 247, 196].forEach((f, i) => setTimeout(() => this.blip(f, f * .97, .3, 'triangle', .2), i * 190)); },
  ambience(){
    if (!this.ctx || this.ambStarted) return; this.ambStarted = true;
    const len = this.ctx.sampleRate * 2, buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const s = this.ctx.createBufferSource(); s.buffer = buf; s.loop = true;
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 300;
    const g = this.ctx.createGain(); g.gain.value = .045;
    const lfo = this.ctx.createOscillator(), lg = this.ctx.createGain();
    lfo.frequency.value = .08; lg.gain.value = .02; lfo.connect(lg); lg.connect(g.gain); lfo.start();
    s.connect(f); f.connect(g); g.connect(this.master); s.start();
  }
};
Audio.setMuted(Audio.muted);

/* ================= РЕНДЕР / СЦЕНА ================= */
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
document.body.appendChild(renderer.domElement);
renderer.domElement.addEventListener('contextmenu', e => e.preventDefault());

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x7fb08a, 26, 62);

/* Небо — градиент с закатом и звёздами */
{
  const c = document.createElement('canvas'); c.width = 512; c.height = 512;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, 512);
  grad.addColorStop(0, '#0e2e3a'); grad.addColorStop(.42, '#23605a');
  grad.addColorStop(.62, '#7fb08a'); grad.addColorStop(.78, '#e9c979'); grad.addColorStop(1, '#f4d98c');
  g.fillStyle = grad; g.fillRect(0, 0, 512, 512);
  const sun = g.createRadialGradient(370, 350, 5, 370, 350, 130);
  sun.addColorStop(0, 'rgba(255,235,180,.9)'); sun.addColorStop(1, 'rgba(255,235,180,0)');
  g.fillStyle = sun; g.fillRect(0, 0, 512, 512);
  g.fillStyle = 'rgba(255,255,255,.7)';
  for (let i = 0; i < 60; i++){ g.globalAlpha = Math.random() * .6 + .1;
    g.fillRect(Math.random() * 512, Math.random() * 150, 1.6, 1.6); }
  g.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  scene.background = tex;
}

/* Камера — изометрия */
let frustum = 9.4, aspect = innerWidth / innerHeight;
const camera = new THREE.OrthographicCamera(-frustum * aspect / 2, frustum * aspect / 2, frustum / 2, -frustum / 2, .1, 200);
const CAM_OFF = new THREE.Vector3(16, 18, 16);
camera.position.copy(CAM_OFF); camera.lookAt(0, 0, 0);

/* Свет */
scene.add(new THREE.HemisphereLight(0xbfe8ff, 0x3e5a3a, .55));
const sun = new THREE.DirectionalLight(0xffd9a0, 1.7);
sun.position.set(12, 18, 8); sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -16; sun.shadow.camera.right = 16;
sun.shadow.camera.top = 16; sun.shadow.camera.bottom = -16;
sun.shadow.camera.far = 60; sun.shadow.bias = -0.002;
scene.add(sun); scene.add(sun.target);
const fill = new THREE.DirectionalLight(0x4de3c1, .3); fill.position.set(-10, 8, -12); scene.add(fill);

/* Текстура свечения */
function makeGlow(){
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), r = g.createRadialGradient(64, 64, 2, 64, 64, 62);
  r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(.35, 'rgba(255,255,255,.45)'); r.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = r; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const glowTex = makeGlow();
function glowSprite(color, scale, opacity){
  const m = new THREE.SpriteMaterial({ map: glowTex, color, transparent: true, opacity,
    blending: THREE.AdditiveBlending, depthWrite: false });
  const s = new THREE.Sprite(m); s.scale.setScalar(scale); return s;
}

/* ================= ЗЕМЛЯ ================= */
{
  const geo = new THREE.PlaneGeometry(64, 64, 48, 48);
  const pos = geo.attributes.position, colors = [];
  const cA = new THREE.Color(0x4c9a55), cB = new THREE.Color(0x63b168), cC = new THREE.Color(0x79c17b), tmp = new THREE.Color();
  for (let i = 0; i < pos.count; i++){
    const x = pos.getX(i), y = pos.getY(i), d = Math.hypot(x, y);
    const n = (Math.sin(x * .35 + 1.7) * Math.cos(y * .3) + Math.sin(x * .13 - y * .21)) * .25 + .5;
    tmp.copy(cA).lerp(cB, THREE.MathUtils.clamp(n, 0, 1));
    if (d < 6) tmp.lerp(cC, (1 - d / 6) * .6);
    if (d > 20) tmp.multiplyScalar(1 - Math.min((d - 20) / 12, .45));
    colors.push(tmp.r, tmp.g, tmp.b);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const ground = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true }));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
}

/* ================= МИР: деревья, камни, грибы, трава ================= */
const colliders = [], trees = [];
const trunkGeo = new THREE.CylinderGeometry(.2, .3, 1.4, 7);
const trunkMat = new THREE.MeshLambertMaterial({ color: 0x6b4a33 });
const coneGeos = [new THREE.ConeGeometry(1.5, 1.7, 7), new THREE.ConeGeometry(1.15, 1.45, 7), new THREE.ConeGeometry(.78, 1.2, 7)];
const leafMats = [new THREE.MeshLambertMaterial({ color: 0x2f7a44 }), new THREE.MeshLambertMaterial({ color: 0x3c8f4f })];
function addTree(x, z, s){
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(trunkGeo, trunkMat); trunk.position.y = .7; trunk.castShadow = true; g.add(trunk);
  const fol = new THREE.Group();
  coneGeos.forEach((cg, i) => { const m = new THREE.Mesh(cg, leafMats[i % 2]);
    m.position.y = 1.7 + i * 1.0; m.castShadow = true; fol.add(m); });
  g.add(fol); g.position.set(x, 0, z); g.scale.setScalar(s);
  g.rotation.y = Math.random() * Math.PI * 2;
  scene.add(g); colliders.push({ x, z, r: .55 * s });
  trees.push({ fol, phase: Math.random() * 9 });
}
const rockGeo = new THREE.DodecahedronGeometry(1, 0);
const rockMat = new THREE.MeshLambertMaterial({ color: 0x7d8a77 });
function addRock(x, z, s){
  const m = new THREE.Mesh(rockGeo, rockMat);
  m.position.set(x, s * .35, z); m.scale.set(s, s * .7, s);
  m.rotation.set(Math.random(), Math.random() * 6, Math.random());
  m.castShadow = true; m.receiveShadow = true; scene.add(m);
  colliders.push({ x, z, r: s * .8 });
}
const mushStemG = new THREE.CylinderGeometry(.06, .09, .28, 6);
const mushCapG = new THREE.SphereGeometry(.2, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2);
const mushStemM = new THREE.MeshLambertMaterial({ color: 0xf2e3c2 });
const mushCapM = new THREE.MeshLambertMaterial({ color: 0xff9f43, emissive: 0xff7b00, emissiveIntensity: .55 });
function addMushroom(x, z){
  const g = new THREE.Group();
  const st = new THREE.Mesh(mushStemG, mushStemM); st.position.y = .14; g.add(st);
  const cp = new THREE.Mesh(mushCapG, mushCapM); cp.position.y = .27; g.add(cp);
  g.position.set(x, 0, z); g.scale.setScalar(.7 + Math.random() * .8); scene.add(g);
}
/* Кристаллы ставим первыми, чтобы деревья не перекрыли */
const crystals = [];
const crysGeo = new THREE.OctahedronGeometry(.42, 0);
const crysMat = new THREE.MeshStandardMaterial({ color: 0x9ff5e2, emissive: 0x2bd6b0, emissiveIntensity: 1.5, roughness: .2, metalness: .1 });
const pillarGeo = new THREE.CylinderGeometry(.06, .1, 6, 6, 1, true);
for (let i = 0; i < CRYSTAL_TOTAL; i++){
  let x, z, ok = false, tries = 0;
  while (!ok && tries++ < 200){
    const a = Math.random() * Math.PI * 2, r = 5 + Math.random() * 16;
    x = Math.cos(a) * r; z = Math.sin(a) * r;
    ok = Math.hypot(x, z) > 3.5 && crystals.every(c => Math.hypot(c.x - x, c.z - z) > 4.2);
  }
  const g = new THREE.Group();
  const mesh = new THREE.Mesh(crysGeo, crysMat); mesh.scale.y = 1.5; mesh.castShadow = true; g.add(mesh);
  const glow = glowSprite(0x4de3c1, 2.4, .55); g.add(glow);
  const pillar = new THREE.Mesh(pillarGeo, new THREE.MeshBasicMaterial({ color: 0x4de3c1, transparent: true,
    opacity: .12, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  pillar.position.y = 2.2; g.add(pillar);
  g.position.set(x, 1, z); scene.add(g);
  crystals.push({ x, z, group: g, mesh, glow, pillar, collected: false, phase: Math.random() * 9 });
}
/* Деревья кольцом + внутри */
for (let i = 0; i < 26; i++){
  const a = (i / 26) * Math.PI * 2 + Math.random() * .3, r = 24 + Math.random() * 6;
  addTree(Math.cos(a) * r, Math.sin(a) * r, .9 + Math.random() * .6);
}
for (let i = 0; i < 6; i++){
  let x, z, tries = 0;
  do { const a = Math.random() * 6.28, r = 8 + Math.random() * 11;
    x = Math.cos(a) * r; z = Math.sin(a) * r; tries++;
  } while (tries < 60 && (Math.hypot(x, z) < 6 || crystals.some(c => Math.hypot(c.x - x, c.z - z) < 2.6)));
  const s = .8 + Math.random() * .5; addTree(x, z, s);
  addMushroom(x + 1.2, z + .6); addMushroom(x - .9, z + 1.1);
}
for (let i = 0; i < 12; i++){
  let x, z, tries = 0;
  do { const a = Math.random() * 6.28, r = 5 + Math.random() * 17;
    x = Math.cos(a) * r; z = Math.sin(a) * r; tries++;
  } while (tries < 60 && (Math.hypot(x, z) < 4 || crystals.some(c => Math.hypot(c.x - x, c.z - z) < 2)));
  addRock(x, z, .45 + Math.random() * .55);
}
/* Трава — InstancedMesh */
{
  const g = new THREE.ConeGeometry(.06, .38, 5);
  const m = new THREE.MeshLambertMaterial({ color: 0xffffff });
  const inst = new THREE.InstancedMesh(g, m, 150);
  const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), p = new THREE.Vector3();
  const col = new THREE.Color();
  for (let i = 0; i < 150; i++){
    const a = Math.random() * 6.28, r = Math.random() * 23;
    p.set(Math.cos(a) * r, .17, Math.sin(a) * r);
    q.setFromEuler(new THREE.Euler((Math.random() - .5) * .3, Math.random() * 6, (Math.random() - .5) * .3));
    sc.setScalar(.7 + Math.random() * .9);
    mtx.compose(p, q, sc); inst.setMatrixAt(i, mtx);
    inst.setColorAt(i, col.setHSL(.32 + Math.random() * .05, .5, .32 + Math.random() * .12));
  }
  inst.instanceMatrix.needsUpdate = true; if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
  scene.add(inst);
}

/* ================= ПЕРСОНАЖ ================= */
const player = {
  x: 0, y: 0, z: 2, vx: 0, vz: 0, vy: 0, grounded: true,
  facing: Math.PI, walkPhase: 0, prevSin: 0, landT: 0, invuln: 0,
  moving: false, sprinting: false
};
const M = {
  jacket: new THREE.MeshLambertMaterial({ color: 0x4a7c33 }),
  pants:  new THREE.MeshLambertMaterial({ color: 0x4a3222 }),
  boot:   new THREE.MeshLambertMaterial({ color: 0x2b1c12 }),
  scarf:  new THREE.MeshLambertMaterial({ color: 0xf2e3c2 }),
  helmet: new THREE.MeshLambertMaterial({ color: 0x15151c }),
  eye:    new THREE.MeshLambertMaterial({ color: 0xff2a1a, emissive: 0xff2a1a, emissiveIntensity: 2 }),
  pack:   new THREE.MeshLambertMaterial({ color: 0x6b4a33 })
};
function limb(w, h, d, mat, px, py, pz){
  const pivot = new THREE.Group(); pivot.position.set(px, py, pz);
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  mesh.position.y = -h / 2 + .05; mesh.castShadow = true; pivot.add(mesh);
  return pivot;
}
const hero = new THREE.Group();
{
  const body = new THREE.Mesh(new THREE.BoxGeometry(.78, 1.05, .5), M.jacket);
  body.position.y = 1.5; body.castShadow = true; hero.add(body);
  const belt = new THREE.Mesh(new THREE.BoxGeometry(.8, .12, .52), M.boot); belt.position.y = 1.02; hero.add(belt);
  const pack = new THREE.Mesh(new THREE.BoxGeometry(.5, .6, .24), M.pack);
  pack.position.set(0, 1.55, -.38); pack.castShadow = true; hero.add(pack);
  const scarfRing = new THREE.Mesh(new THREE.BoxGeometry(.84, .22, .56), M.scarf); scarfRing.position.y = 2.06; hero.add(scarfRing);
  const head = new THREE.Mesh(new THREE.SphereGeometry(.42, 18, 14), M.helmet);
  head.position.y = 2.5; head.castShadow = true; hero.add(head);
  const fin = new THREE.Mesh(new THREE.BoxGeometry(.07, .2, .34), M.helmet); fin.position.y = 2.95; hero.add(fin);
  [[-.16], [.16]].forEach(([ex]) => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(.09, 8, 8), M.eye);
    eye.position.set(ex, 2.54, .36); hero.add(eye);
  });
  const eyeLight = new THREE.PointLight(0xff4433, 1.2, 4); eyeLight.position.set(0, 2.5, .5); hero.add(eyeLight);

  const legL = limb(.24, .85, .26, M.pants, -.19, .98, 0);
  const legR = limb(.24, .85, .26, M.pants, .19, .98, 0);
  [legL, legR].forEach(l => { const b = new THREE.Mesh(new THREE.BoxGeometry(.28, .16, .4), M.boot);
    b.position.set(0, -.82, .06); b.castShadow = true; l.add(b); });
  const armL = limb(.22, .78, .26, M.jacket, -.52, 1.92, 0);
  const armR = limb(.22, .78, .26, M.jacket, .52, 1.92, 0);
  [armL, armR].forEach(a => { const mit = new THREE.Mesh(new THREE.SphereGeometry(.13, 8, 8), M.scarf);
    mit.position.y = -.72; a.add(mit); });
  const tailPivot = new THREE.Group(); tailPivot.position.set(.24, 2.02, -.26);
  const tail = new THREE.Mesh(new THREE.BoxGeometry(.2, .68, .06), M.scarf);
  tail.position.y = -.32; tail.castShadow = true; tailPivot.add(tail);
  hero.add(legL, legR, armL, armR, tailPivot);
  hero.userData = { body, legL, legR, armL, armR, tailPivot };
}
hero.position.set(player.x, 0, player.z); hero.rotation.y = player.facing;
scene.add(hero);

/* ================= ТЕНИ ================= */
const wisps = [];
for (let i = 0; i < 4; i++){
  const g = new THREE.Group();
  const core = new THREE.Mesh(new THREE.SphereGeometry(.32, 12, 10),
    new THREE.MeshLambertMaterial({ color: 0x1a0f24, emissive: 0x7a2bd6, emissiveIntensity: 1.3 }));
  g.add(core);
  const halo = new THREE.Mesh(new THREE.SphereGeometry(.48, 12, 10),
    new THREE.MeshBasicMaterial({ color: 0xb44dff, transparent: true, opacity: .16, blending: THREE.AdditiveBlending, depthWrite: false }));
  g.add(halo);
  g.add(glowSprite(0xa64dff, 2.6, .4));
  const l = new THREE.PointLight(0xa64dff, 2, 7); g.add(l);
  g.visible = false; scene.add(g);
  wisps.push({ group: g, x: 0, z: 0, tx: 0, tz: 0, retarget: 0, phase: Math.random() * 9, trailT: 0, active: false });
}

/* ================= ЧАСТИЦЫ ================= */
const P_MAX = 200;
const pPos = new Float32Array(P_MAX * 3), pCol = new Float32Array(P_MAX * 3);
const pVel = new Float32Array(P_MAX * 3), pLife = new Float32Array(P_MAX), pMax = new Float32Array(P_MAX),
      pGrav = new Float32Array(P_MAX), pBase = new Float32Array(P_MAX * 3);
for (let i = 0; i < P_MAX; i++) pPos[i * 3 + 1] = -999;
const pGeo = new THREE.BufferGeometry();
pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
const points = new THREE.Points(pGeo, new THREE.PointsMaterial({ map: glowTex, size: 10, sizeAttenuation: false,
  vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
points.frustumCulled = false; scene.add(points);
let pCursor = 0;
const tmpC = new THREE.Color();
function burst(x, y, z, color, count, speed, grav, life){
  tmpC.set(color);
  for (let n = 0; n < count; n++){
    const i = pCursor; pCursor = (pCursor + 1) % P_MAX;
    const a = Math.random() * 6.28, up = Math.random();
    pPos[i*3] = x; pPos[i*3+1] = y; pPos[i*3+2] = z;
    pVel[i*3] = Math.cos(a) * speed * (.3 + Math.random() * .7);
    pVel[i*3+1] = up * speed;
    pVel[i*3+2] = Math.sin(a) * speed * (.3 + Math.random() * .7);
    pLife[i] = pMax[i] = life * (.6 + Math.random() * .6);
    pGrav[i] = grav;
    pBase[i*3] = tmpC.r; pBase[i*3+1] = tmpC.g; pBase[i*3+2] = tmpC.b;
  }
}
function updateParticles(dt){
  for (let i = 0; i < P_MAX; i++){
    if (pLife[i] <= 0) continue;
    pLife[i] -= dt;
    if (pLife[i] <= 0){ pPos[i*3+1] = -999; pCol[i*3] = pCol[i*3+1] = pCol[i*3+2] = 0; continue; }
    pVel[i*3+1] -= pGrav[i] * dt;
    pPos[i*3] += pVel[i*3] * dt; pPos[i*3+1] += pVel[i*3+1] * dt; pPos[i*3+2] += pVel[i*3+2] * dt;
    if (pPos[i*3+1] < .03){ pPos[i*3+1] = .03; pVel[i*3+1] *= -.3; }
    const f = pLife[i] / pMax[i];
    pCol[i*3] = pBase[i*3] * f; pCol[i*3+1] = pBase[i*3+1] * f; pCol[i*3+2] = pBase[i*3+2] * f;
  }
  pGeo.attributes.position.needsUpdate = true; pGeo.attributes.color.needsUpdate = true;
}

/* ================= СВЕТЛЯЧКИ ================= */
const F_N = 45;
const fPos = new Float32Array(F_N * 3), fSeed = [];
for (let i = 0; i < F_N; i++){
  const a = Math.random() * 6.28, r = Math.random() * 24;
  fSeed.push({ x: Math.cos(a) * r, y: .6 + Math.random() * 2.6, z: Math.sin(a) * r,
    s1: Math.random() * 9, s2: Math.random() * 9, s3: Math.random() * 9 });
}
const fGeo = new THREE.BufferGeometry();
fGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3));
const fireflies = new THREE.Points(fGeo, new THREE.PointsMaterial({ map: glowTex, color: 0xffe28a, size: 7,
  sizeAttenuation: false, transparent: true, opacity: .9, blending: THREE.AdditiveBlending, depthWrite: false }));
fireflies.frustumCulled = false; scene.add(fireflies);

/* ================= СОСТОЯНИЕ ИГРЫ ================= */
let state = 'menu';           // menu | playing | paused | won | lost
let difficulty = store.get('fm_diff', 'normal');
let collected = 0, hearts = 3, score = 0, combo = 0, elapsed = 0, lastCollect = 0;
let shake = 0, menuAngle = 0, winBurstDone = false, toastTimer = null;
const keys = {}; let jumpQueued = false, sprintTouch = false;
const joy = { x: 0, y: 0, id: null };

function fmt(t){ const s = Math.floor(t); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); }
function toast(msg){
  ui.toast.textContent = msg; ui.toast.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => ui.toast.classList.remove('show'), 2200);
}
function syncHearts(pop){
  heartEls.forEach((h, i) => {
    h.classList.toggle('lost', i >= hearts);
    if (pop && i === hearts){ h.classList.remove('pop'); void h.offsetWidth; h.classList.add('pop'); }
  });
}
function syncCrystals(){
  ui.crystalCount.textContent = collected + ' / ' + CRYSTAL_TOTAL;
  ui.crystalChip.classList.remove('pulse'); void ui.crystalChip.offsetWidth; ui.crystalChip.classList.add('pulse');
}
function showOverlay(el){ [ui.menu, ui.pause, ui.win, ui.lose].forEach(o => o.classList.add('hidden')); if (el) el.classList.remove('hidden'); }
function updateBestLine(){
  const b = store.get('fm_best', null);
  ui.bestLine.innerHTML = b ? 'Ваш рекорд: <b>' + fmt(b) + '</b>' : 'Рекорда пока нет — установите первый!';
}
updateBestLine();
document.querySelectorAll('.diff-btn').forEach(b => {
  b.classList.toggle('selected', b.dataset.diff === difficulty);
  b.addEventListener('click', () => {
    difficulty = b.dataset.diff; store.set('fm_diff', difficulty);
    document.querySelectorAll('.diff-btn').forEach(x => x.classList.toggle('selected', x === b));
  });
});

function resetGame(){
  player.x = 0; player.y = 0; player.z = 2; player.vx = player.vz = player.vy = 0;
  player.grounded = true; player.facing = Math.PI; player.walkPhase = 0; player.invuln = 2; player.landT = 0;
  hero.rotation.set(0, Math.PI, 0); hero.visible = true;
  M.eye.emissiveIntensity = 2;
  collected = 0; hearts = 3; score = 0; combo = 0; elapsed = 0; lastCollect = 0; shake = 0; winBurstDone = false;
  crystals.forEach(c => { c.collected = false; c.group.visible = true; });
  const cfg = DIFF[difficulty];
  wisps.forEach((w, i) => {
    w.active = i < cfg.wisps; w.group.visible = w.active;
    const a = (i / 4) * 6.28 + 1; w.x = Math.cos(a) * 18; w.z = Math.sin(a) * 18;
    w.tx = w.x; w.tz = w.z; w.retarget = 0;
  });
  for (let i = 0; i < P_MAX; i++){ pLife[i] = 0; pPos[i*3+1] = -999; }
  syncHearts(false); syncCrystals(); ui.timeText.textContent = '00:00';
}
function startGame(){
  Audio.ensure(); Audio.ambience();
  resetGame(); state = 'playing'; showOverlay(null);
  toast('Собери все ' + CRYSTAL_TOTAL + ' кристаллов ✦');
}
function winGame(){
  state = 'won'; Audio.win();
  score += hearts * 150 + Math.max(0, 1500 - Math.floor(elapsed) * 8);
  const best = store.get('fm_best', null);
  const isRecord = best === null || elapsed < best;
  if (isRecord) store.set('fm_best', elapsed);
  ui.winTime.textContent = fmt(elapsed);
  ui.winScore.textContent = score;
  ui.winBest.textContent = fmt(isRecord ? elapsed : best) + (isRecord ? ' ★' : '');
  updateBestLine();
  setTimeout(() => showOverlay(ui.win), 900);
}
function loseGame(){
  state = 'lost'; Audio.lose();
  ui.loseText.innerHTML = 'Собрано кристаллов: <b>' + collected + ' из ' + CRYSTAL_TOTAL + '</b>. Совет: прыгай <b>через</b> тени — в воздухе они не достают!';
  setTimeout(() => showOverlay(ui.lose), 800);
}
function hurt(fromX, fromZ){
  hearts--; syncHearts(true); Audio.hurt();
  player.invuln = 1.6; shake = .5;
  const dx = player.x - fromX, dz = player.z - fromZ, d = Math.hypot(dx, dz) || 1;
  player.vx = dx / d * 9; player.vz = dz / d * 9;
  ui.vignette.classList.add('hit');
  setTimeout(() => ui.vignette.classList.remove('hit'), 120);
  burst(player.x, 1.4, player.z, 0xff5a5f, 16, 4, 5, .7);
  if (hearts <= 0) loseGame(); else toast('Осторожно, тени! Прыгай через них');
}

/* ================= УПРАВЛЕНИЕ ================= */
addEventListener('keydown', e => {
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  keys[e.code] = true;
  if (e.repeat) return;
  if (e.code === 'Space' && state === 'playing') jumpQueued = true;
  if (e.code === 'KeyM'){ Audio.ensure(); Audio.setMuted(!Audio.muted); }
  if (e.code === 'Escape' || e.code === 'KeyP'){
    if (state === 'playing'){ state = 'paused'; showOverlay(ui.pause); }
    else if (state === 'paused'){ state = 'playing'; showOverlay(null); }
  }
  if (e.code === 'Enter' && state === 'menu') startGame();
  if (e.code === 'KeyR' && (state === 'won' || state === 'lost' || state === 'paused')) startGame();
});
addEventListener('keyup', e => { keys[e.code] = false; });
addEventListener('blur', () => { if (state === 'playing'){ state = 'paused'; showOverlay(ui.pause); } });
document.addEventListener('visibilitychange', () => { if (document.hidden && state === 'playing'){ state = 'paused'; showOverlay(ui.pause); } });

$('btnStart').addEventListener('click', startGame);
$('btnWinRestart').addEventListener('click', startGame);
$('btnLoseRestart').addEventListener('click', startGame);
$('btnPauseRestart').addEventListener('click', startGame);
$('btnRestart').addEventListener('click', () => { Audio.ensure(); startGame(); });
$('btnResume').addEventListener('click', () => { state = 'playing'; showOverlay(null); });
$('btnPause').addEventListener('click', () => {
  if (state === 'playing'){ state = 'paused'; showOverlay(ui.pause); }
  else if (state === 'paused'){ state = 'playing'; showOverlay(null); }
});
$('btnSound').addEventListener('click', () => { Audio.ensure(); Audio.setMuted(!Audio.muted); });

/* Джойстик */
const joyBase = $('joyBase'), joyKnob = $('joyKnob');
function joyMove(e){
  const r = joyBase.getBoundingClientRect();
  let dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
  const d = Math.hypot(dx, dy), max = 42;
  if (d > max){ dx = dx / d * max; dy = dy / d * max; }
  joy.x = dx / max; joy.y = dy / max;
  joyKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
}
joyBase.addEventListener('pointerdown', e => { joy.id = e.pointerId; joyBase.setPointerCapture(e.pointerId); joyMove(e); });
joyBase.addEventListener('pointermove', e => { if (e.pointerId === joy.id) joyMove(e); });
const joyEnd = e => { if (e.pointerId === joy.id){ joy.id = null; joy.x = joy.y = 0; joyKnob.style.transform = 'translate(-50%,-50%)'; } };
joyBase.addEventListener('pointerup', joyEnd); joyBase.addEventListener('pointercancel', joyEnd);
$('btnJump').addEventListener('pointerdown', e => { e.preventDefault(); if (state === 'playing') jumpQueued = true; });
const spBtn = $('btnSprint');
spBtn.addEventListener('pointerdown', e => { e.preventDefault(); sprintTouch = true; spBtn.classList.add('on'); });
['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => spBtn.addEventListener(ev, () => { sprintTouch = false; spBtn.classList.remove('on'); }));

/* ================= ОБНОВЛЕНИЕ ИГРОКА ================= */
const camFwd = new THREE.Vector3(), camRight = new THREE.Vector3(), UP = new THREE.Vector3(0, 1, 0);
function updatePlayer(dt, t){
  let ix = (keys['KeyD'] || keys['ArrowRight'] ? 1 : 0) - (keys['KeyA'] || keys['ArrowLeft'] ? 1 : 0) + joy.x;
  let iz = (keys['KeyS'] || keys['ArrowDown'] ? 1 : 0) - (keys['KeyW'] || keys['ArrowUp'] ? 1 : 0) + joy.y;
  const il = Math.hypot(ix, iz); if (il > 1){ ix /= il; iz /= il; }
  player.sprinting = !!(keys['ShiftLeft'] || keys['ShiftRight'] || sprintTouch);
  camera.getWorldDirection(camFwd); camFwd.y = 0; camFwd.normalize();
  camRight.crossVectors(camFwd, UP).normalize();
  const wx = camRight.x * ix + camFwd.x * -iz, wz = camRight.z * ix + camFwd.z * -iz;
  const spd = player.sprinting ? SPRINT : WALK;
  const k = 1 - Math.exp(-12 * dt);
  player.vx += (wx * spd - player.vx) * k;
  player.vz += (wz * spd - player.vz) * k;
  player.x += player.vx * dt; player.z += player.vz * dt;
  player.moving = Math.hypot(player.vx, player.vz) > .5;

  /* Коллизии */
  for (const c of colliders){
    const dx = player.x - c.x, dz = player.z - c.z, d = Math.hypot(dx, dz), min = c.r + .45;
    if (d < min && d > .001){ player.x = c.x + dx / d * min; player.z = c.z + dz / d * min; }
  }
  const dc = Math.hypot(player.x, player.z);
  if (dc > WORLD_R){ player.x *= WORLD_R / dc; player.z *= WORLD_R / dc; }

  /* Прыжок и гравитация */
  if (jumpQueued && player.grounded){
    player.vy = JUMP_V; player.grounded = false; Audio.jump();
    burst(player.x, .15, player.z, 0xc9b98a, 8, 2, 4, .5);
  }
  jumpQueued = false;
  if (!player.grounded){
    player.vy -= GRAV * dt; player.y += player.vy * dt;
    if (player.y <= 0){
      player.y = 0; player.grounded = true;
      if (player.vy < -4){ Audio.land(); player.landT = .18; shake = Math.max(shake, .12);
        burst(player.x, .12, player.z, 0xc9b98a, 12, 2.6, 5, .55); }
      player.vy = 0;
    }
  }

  /* Поворот */
  if (player.moving){
    const target = Math.atan2(player.vx, player.vz);
    let d = target - player.facing;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    player.facing += d * Math.min(1, dt * 12);
  }

  /* Анимация */
  const P = hero.userData;
  const runF = player.sprinting ? 1.5 : 1;
  if (player.moving && player.grounded) player.walkPhase += dt * 9 * runF;
  const s = Math.sin(player.walkPhase);
  if (player.grounded){
    const amp = player.moving ? (player.sprinting ? .85 : .55) : 0;
    P.legL.rotation.x = s * amp; P.legR.rotation.x = -s * amp;
    P.armL.rotation.x = -s * amp * .8; P.armR.rotation.x = s * amp * .8;
    if (player.moving && player.prevSin > 0 && s <= 0) Audio.step();
    player.prevSin = s;
  } else {
    P.legL.rotation.x = .55; P.legR.rotation.x = -.35;
    P.armL.rotation.x = -2.5; P.armR.rotation.x = -2.5;
  }
  P.body.scale.y = 1 + Math.sin(t * 2.2) * .015;
  P.tailPivot.rotation.x = -.25 - (player.moving ? (player.sprinting ? .75 : .4) : 0) + Math.sin(t * 6) * .12;
  P.tailPivot.rotation.z = Math.sin(t * 3.1) * .1;
  hero.rotation.x = player.moving && player.sprinting && player.grounded ? .12 : 0;
  if (player.landT > 0){ player.landT -= dt; const q = Math.max(player.landT, 0) / .18;
    hero.scale.set(1 + q * .12, 1 - q * .15, 1 + q * .12); } else hero.scale.set(1, 1, 1);
  const bob = player.moving && player.grounded ? Math.abs(s) * .07 : 0;
  hero.position.set(player.x, player.y + bob, player.z);
  hero.rotation.y = player.facing;

  /* Неуязвимость — мигание */
  if (player.invuln > 0){ player.invuln -= dt; hero.visible = Math.floor(t * 10) % 2 === 0; }
  else hero.visible = true;

  /* Сбор кристаллов */
  for (const c of crystals){
    if (c.collected) continue;
    if (Math.hypot(c.x - player.x, c.z - player.z) < 1.15){
      c.collected = true; c.group.visible = false; collected++;
      combo = (elapsed - lastCollect < 4) ? combo + 1 : 1; lastCollect = elapsed;
      const bonus = (combo - 1) * 25; score += 100 + bonus;
      Audio.collect(combo); syncCrystals();
      burst(c.x, 1.2, c.z, 0x4de3c1, 22, 4.5, 3, .9);
      const left = CRYSTAL_TOTAL - collected;
      if (combo > 1) toast('Комбо ×' + combo + '! +' + (100 + bonus));
      else if (left === 6 || left === 3) toast('Осталось ' + left + ' кристалла!');
      else if (left === 1) toast('Последний кристалл!');
      if (collected >= CRYSTAL_TOTAL){ winGame(); return; }
    }
  }
}

/* ================= ТЕНИ ================= */
function updateWisps(dt, t){
  const cfg = DIFF[difficulty];
  for (const w of wisps){
    if (!w.active) continue;
    const dp = Math.hypot(player.x - w.x, player.z - w.z);
    let spd = cfg.wSpeed * .55;
    if (state === 'playing' && dp < cfg.chase){ w.tx = player.x; w.tz = player.z; spd = cfg.wSpeed; }
    else { w.retarget -= dt;
      if (w.retarget <= 0){ w.retarget = 2 + Math.random() * 3;
        const a = Math.random() * 6.28, r = 4 + Math.random() * 19;
        w.tx = Math.cos(a) * r; w.tz = Math.sin(a) * r; } }
    const dx = w.tx - w.x, dz = w.tz - w.z, d = Math.hypot(dx, dz);
    if (d > .3){ w.x += dx / d * spd * dt; w.z += dz / d * spd * dt; }
    w.group.position.set(w.x, .85 + Math.sin(t * 2 + w.phase) * .18, w.z);
    w.group.scale.setScalar(1 + Math.sin(t * 3 + w.phase) * .08);
    w.trailT -= dt;
    if (w.trailT <= 0){ w.trailT = .14; burst(w.x, .8, w.z, 0x8a3bd6, 1, .7, -.5, .8); }
    if (state === 'playing' && dp < .9 && player.y < 1.1 && player.invuln <= 0) hurt(w.x, w.z);
  }
}

/* ================= КАМЕРА ================= */
const camTarget = new THREE.Vector3();
function updateCamera(dt, t){
  if (state === 'menu'){
    menuAngle += dt * .07;
    camTarget.set(Math.cos(menuAngle) * 20, 15, Math.sin(menuAngle) * 20);
    camera.position.lerp(camTarget, 1 - Math.exp(-2 * dt));
    camera.lookAt(0, 1.2, 0);
  } else {
    camTarget.set(player.x + CAM_OFF.x, CAM_OFF.y, player.z + CAM_OFF.z);
    camera.position.lerp(camTarget, 1 - Math.exp(-6 * dt));
    if (shake > 0){ shake = Math.max(0, shake - dt * 1.8);
      camera.position.x += (Math.random() - .5) * shake; camera.position.y += (Math.random() - .5) * shake; }
    camera.lookAt(player.x, player.y + 1, player.z);
    const targetF = player.sprinting && player.moving ? 10.6 : 9.4;
    frustum += (targetF - frustum) * Math.min(1, dt * 4);
  }
  aspect = innerWidth / innerHeight;
  camera.left = -frustum * aspect / 2; camera.right = frustum * aspect / 2;
  camera.top = frustum / 2; camera.bottom = -frustum / 2;
  camera.updateProjectionMatrix();
  sun.position.set(player.x + 12, 18, player.z + 8);
  sun.target.position.set(player.x, 0, player.z);
}

/* ================= ГЛАВНЫЙ ЦИКЛ ================= */
const clock = new THREE.Clock();
let firstFrame = true;
function animate(){
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), .05), t = clock.elapsedTime;

  /* Мир живёт всегда */
  for (let i = 0; i < F_N; i++){ const f = fSeed[i];
    fPos[i*3] = f.x + Math.sin(t * .5 + f.s1) * 1.6;
    fPos[i*3+1] = f.y + Math.sin(t * .8 + f.s2) * .5;
    fPos[i*3+2] = f.z + Math.cos(t * .4 + f.s3) * 1.6; }
  fGeo.attributes.position.needsUpdate = true;
  fireflies.material.opacity = .6 + Math.sin(t * 1.7) * .3;
  trees.forEach(tr => { tr.fol.rotation.z = Math.sin(t * .8 + tr.phase) * .025;
    tr.fol.rotation.x = Math.cos(t * .6 + tr.phase) * .02; });

  let nearest = null, nd = 1e9;
  if (state === 'playing') for (const c of crystals){ if (c.collected) continue;
    const d = Math.hypot(c.x - player.x, c.z - player.z); if (d < nd){ nd = d; nearest = c; } }
  crystals.forEach(c => {
    if (c.collected) return;
    c.mesh.rotation.y += dt * 1.5;
    c.group.position.y = 1 + Math.sin(t * 2 + c.phase) * .15;
    c.glow.material.opacity = .4 + Math.sin(t * 3 + c.phase) * .18;
    c.pillar.material.opacity = (c === nearest && elapsed - lastCollect > 5) ? .3 : .12;
  });

  if (state === 'playing'){
    elapsed += dt; ui.timeText.textContent = fmt(elapsed);
    updatePlayer(dt, t);
    updateWisps(dt, t);
  } else if (state === 'menu'){
    const P = hero.userData;
    P.body.scale.y = 1 + Math.sin(t * 2.2) * .02;
    P.tailPivot.rotation.x = -.25 + Math.sin(t * 4) * .12;
    P.armL.rotation.x = Math.sin(t * 2.2) * .05; P.armR.rotation.x = -Math.sin(t * 2.2) * .05;
    updateWisps(dt, t);
  } else if (state === 'won'){
    hero.position.y = Math.abs(Math.sin(t * 3)) * .5;
    hero.rotation.y += dt * 2;
    hero.userData.armL.rotation.x = -2.6; hero.userData.armR.rotation.x = -2.6;
    if (!winBurstDone){ winBurstDone = true;
      burst(player.x, 2, player.z, 0xffd166, 40, 6, 5, 1.4);
      burst(player.x, 2, player.z, 0x4de3c1, 40, 5, 4, 1.6); }
  } else if (state === 'lost'){
    hero.rotation.x += (-1.4 - hero.rotation.x) * Math.min(1, dt * 4);
    M.eye.emissiveIntensity += (.15 - M.eye.emissiveIntensity) * Math.min(1, dt * 3);
    hero.visible = true;
    updateWisps(dt, t);
  }

  updateParticles(dt);
  updateCamera(dt, t);
  renderer.render(scene, camera);

  if (firstFrame){ firstFrame = false; window.__fmReady = true;
    ui.boot.classList.add('hide'); setTimeout(() => ui.boot.remove(), 600); }
}
addEventListener('resize', () => { renderer.setSize(innerWidth, innerHeight); });
resetGame();
state = 'menu'; showOverlay(ui.menu);
animate();
