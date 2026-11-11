import * as THREE from 'three';

/* ================= БАЗА ================= */
const WORLD_R = 52, DAY_LENGTH = 240;
const WALK = 4.3, SPRINT = 7.4, GRAV = 24, JUMP_V = 9.4;
const $ = id => document.getElementById(id);
const clamp = (v,a,b)=>Math.max(a,Math.min(b,v));
const lerp = (a,b,t)=>a+(b-a)*t;
const store = {
  get(k,d){ try{ const v=localStorage.getItem(k); return v===null?d:JSON.parse(v);}catch(e){return d;} },
  set(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} }
};
function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }

const ui = {
  clock:$('clockText'), stamina:$('staminaFill'), disc:$('discText'),
  prompt:$('prompt'), promptText:$('promptText'), toast:$('toast'),
  discovery:$('discovery'), discoveryTitle:$('discoveryTitle'),
  intro:$('overlayIntro'), wardrobe:$('overlayWardrobe'), journal:$('overlayJournal'),
  bag:$('overlayBag'), pause:$('overlayPause'), complete:$('overlayComplete'),
  skinGrid:$('skinGrid'), journalList:$('journalList'), journalFill:$('journalFill'),
  bagList:$('bagList'), boot:$('boot'), minimap:$('minimap'),
  btnInteract:$('btnInteract')
};

/* ================= ЗВУК ================= */
const Sfx = {
  ctx:null, master:null, muted:store.get('fm_muted',false), ambStarted:false,
  ensure(){
    if(!this.ctx){ try{ const AC=window.AudioContext||window.webkitAudioContext; this.ctx=new AC();
      this.master=this.ctx.createGain(); this.master.gain.value=this.muted?0:.8; this.master.connect(this.ctx.destination);}catch(e){} }
    if(this.ctx&&this.ctx.state==='suspended') this.ctx.resume();
  },
  setMuted(m){ this.muted=m; store.set('fm_muted',m);
    if(this.master) this.master.gain.linearRampToValueAtTime(m?0:.8,(this.ctx?.currentTime||0)+.1);
    $('icoSoundOn').style.display=m?'none':''; $('icoSoundOff').style.display=m?'':'none'; },
  tone(f0,f1,dur,type,vol){ if(!this.ctx||this.muted)return; const t=this.ctx.currentTime,o=this.ctx.createOscillator(),g=this.ctx.createGain();
    o.type=type; o.frequency.setValueAtTime(f0,t); o.frequency.exponentialRampToValueAtTime(Math.max(f1,1),t+dur);
    g.gain.setValueAtTime(vol,t); g.gain.exponentialRampToValueAtTime(.001,t+dur);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t+dur+.02); },
  noise(dur,freq,vol){ if(!this.ctx||this.muted)return; const t=this.ctx.currentTime,len=Math.floor(this.ctx.sampleRate*dur);
    const buf=this.ctx.createBuffer(1,len,this.ctx.sampleRate),d=buf.getChannelData(0);
    for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*(1-i/len);
    const s=this.ctx.createBufferSource(); s.buffer=buf; const f=this.ctx.createBiquadFilter(); f.type='lowpass'; f.frequency.value=freq;
    const g=this.ctx.createGain(); g.gain.value=vol; s.connect(f); f.connect(g); g.connect(this.master); s.start(t); },
  step(){this.noise(.035,750,.06);}, jump(){this.tone(280,540,.14,'triangle',.16);}, land(){this.noise(.09,320,.25);},
  interact(){this.tone(440,660,.1,'sine',.15);}, pickup(){this.tone(660,990,.12,'sine',.18);},
  discover(){[523,659,784].forEach((f,i)=>setTimeout(()=>this.tone(f,f,.2,'triangle',.2),i*110));},
  eat(){this.noise(.08,900,.15); this.tone(300,200,.1,'sine',.1);},
  splash(){this.noise(.25,600,.3); this.tone(200,120,.2,'sine',.12);},
  fire(){this.noise(.3,400,.2); this.tone(120,80,.3,'sawtooth',.08);},
  rune(){this.tone(220,440,.5,'sine',.18); this.tone(330,660,.5,'sine',.12);},
  purr(){this.tone(90,110,.25,'sine',.15); setTimeout(()=>this.tone(95,105,.25,'sine',.12),180);},
  win(){[523,659,784,1047,1319].forEach((f,i)=>setTimeout(()=>this.tone(f,f,.25,'triangle',.2),i*130));},
  ambience(){ if(!this.ctx||this.ambStarted)return; this.ambStarted=true;
    const len=this.ctx.sampleRate*2,buf=this.ctx.createBuffer(1,len,this.ctx.sampleRate),d=buf.getChannelData(0);
    for(let i=0;i<len;i++)d[i]=Math.random()*2-1;
    const s=this.ctx.createBufferSource(); s.buffer=buf; s.loop=true;
    const f=this.ctx.createBiquadFilter(); f.type='lowpass'; f.frequency.value=280;
    const g=this.ctx.createGain(); g.gain.value=.04;
    const lfo=this.ctx.createOscillator(),lg=this.ctx.createGain(); lfo.frequency.value=.07; lg.gain.value=.018;
    lfo.connect(lg); lg.connect(g.gain); lfo.start(); s.connect(f); f.connect(g); g.connect(this.master); s.start(); }
};
Sfx.setMuted(Sfx.muted);

/* ================= РЕНДЕР / СЦЕНА ================= */
const renderer = new THREE.WebGLRenderer({ antialias:true });
renderer.domElement.id='gameCanvas3D';
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.setSize(innerWidth,innerHeight);
renderer.shadowMap.enabled=true; renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.1;
document.body.appendChild(renderer.domElement);
renderer.domElement.addEventListener('contextmenu',e=>e.preventDefault());

const scene=new THREE.Scene();
scene.fog=new THREE.Fog(0x7fb08a,30,78);

const skyCanvas=document.createElement('canvas'); skyCanvas.width=512; skyCanvas.height=512;
const skyCtx=skyCanvas.getContext('2d');
const skyTex=new THREE.CanvasTexture(skyCanvas); skyTex.colorSpace=THREE.SRGBColorSpace;
scene.background=skyTex;
const stars=[]; for(let i=0;i<70;i++) stars.push({x:Math.random()*512,y:Math.random()*170,a:Math.random()*.7+.2});

let frustum=9.4, camYaw=Math.PI/4, camYawT=Math.PI/4, aspect=innerWidth/innerHeight;
const camera=new THREE.OrthographicCamera(-frustum*aspect/2,frustum*aspect/2,frustum/2,-frustum/2,.1,220);

scene.add(new THREE.HemisphereLight(0xbfe8ff,0x3e5a3a,.5));
const hemi=scene.children[scene.children.length-1];
const sun=new THREE.DirectionalLight(0xffd9a0,1.6);
sun.castShadow=true; sun.shadow.mapSize.set(1024,1024);
sun.shadow.camera.left=-18; sun.shadow.camera.right=18; sun.shadow.camera.top=18; sun.shadow.camera.bottom=-18;
sun.shadow.camera.far=70; sun.shadow.bias=-.002;
scene.add(sun); scene.add(sun.target);
const fill=new THREE.DirectionalLight(0x4de3c1,.25); fill.position.set(-10,8,-12); scene.add(fill);

function makeGlow(){ const c=document.createElement('canvas'); c.width=c.height=128; const g=c.getContext('2d');
  const r=g.createRadialGradient(64,64,2,64,64,62); r.addColorStop(0,'rgba(255,255,255,1)'); r.addColorStop(.35,'rgba(255,255,255,.45)'); r.addColorStop(1,'rgba(255,255,255,0)');
  g.fillStyle=r; g.fillRect(0,0,128,128); const t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; return t; }
const glowTex=makeGlow();
function glowSprite(color,scale,opacity){ const m=new THREE.SpriteMaterial({map:glowTex,color,transparent:true,opacity,blending:THREE.AdditiveBlending,depthWrite:false});
  const s=new THREE.Sprite(m); s.scale.setScalar(scale); return s; }

/* ================= ПЕРСОНАЖ И СКИНЫ ================= */
const SKINS=(Array.isArray(window.SKINS)&&window.SKINS.length)?window.SKINS:[{id:"default",name:"Скиталец",desc:"",glow:2,colors:{helmet:"#15151c",eyes:"#ff2a1a",jacket:"#4a7c33",pants:"#4a3222",boots:"#2b1c12",scarf:"#f2e3c2",pack:"#6b4a33"}}];
const M={
  helmet:new THREE.MeshLambertMaterial({color:0x15151c}),
  eyes:new THREE.MeshLambertMaterial({color:0xff2a1a,emissive:0xff2a1a,emissiveIntensity:2}),
  jacket:new THREE.MeshLambertMaterial({color:0x4a7c33}),
  pants:new THREE.MeshLambertMaterial({color:0x4a3222}),
  boots:new THREE.MeshLambertMaterial({color:0x2b1c12}),
  scarf:new THREE.MeshLambertMaterial({color:0xf2e3c2}),
  pack:new THREE.MeshLambertMaterial({color:0x6b4a33})
};
const player={x:0,y:0,z:4,vx:0,vz:0,vy:0,grounded:true,facing:Math.PI,walkPhase:0,prevSin:0,landT:0,moving:false,sprinting:false,stamina:100,inWater:false};
function limb(w,h,d,mat,px,py,pz){ const p=new THREE.Group(); p.position.set(px,py,pz);
  const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat); m.position.y=-h/2+.05; m.castShadow=true; p.add(m); return p; }
const hero=new THREE.Group();
{
  const body=new THREE.Mesh(new THREE.BoxGeometry(.78,1.05,.5),M.jacket); body.position.y=1.5; body.castShadow=true; hero.add(body);
  const belt=new THREE.Mesh(new THREE.BoxGeometry(.8,.12,.52),M.boots); belt.position.y=1.02; hero.add(belt);
  const pack=new THREE.Mesh(new THREE.BoxGeometry(.5,.6,.24),M.pack); pack.position.set(0,1.55,-.38); pack.castShadow=true; hero.add(pack);
  const scarfRing=new THREE.Mesh(new THREE.BoxGeometry(.84,.22,.56),M.scarf); scarfRing.position.y=2.06; hero.add(scarfRing);
  const head=new THREE.Mesh(new THREE.SphereGeometry(.42,18,14),M.helmet); head.position.y=2.5; head.castShadow=true; hero.add(head);
  const fin=new THREE.Mesh(new THREE.BoxGeometry(.07,.2,.34),M.helmet); fin.position.y=2.95; hero.add(fin);
  [-.16,.16].forEach(ex=>{ const e=new THREE.Mesh(new THREE.SphereGeometry(.09,8,8),M.eyes); e.position.set(ex,2.54,.36); hero.add(e); });
  const eyeLight=new THREE.PointLight(0xff4433,1.1,4); eyeLight.position.set(0,2.5,.5); hero.add(eyeLight);
  const lantern=new THREE.PointLight(0xffc46b,0,9); lantern.position.set(.6,1.6,.4); hero.add(lantern);
  const legL=limb(.24,.85,.26,M.pants,-.19,.98,0), legR=limb(.24,.85,.26,M.pants,.19,.98,0);
  [legL,legR].forEach(l=>{ const b=new THREE.Mesh(new THREE.BoxGeometry(.28,.16,.4),M.boots); b.position.set(0,-.82,.06); b.castShadow=true; l.add(b); });
  const armL=limb(.22,.78,.26,M.jacket,-.52,1.92,0), armR=limb(.22,.78,.26,M.jacket,.52,1.92,0);
  [armL,armR].forEach(a=>{ const m=new THREE.Mesh(new THREE.SphereGeometry(.13,8,8),M.scarf); m.position.y=-.72; a.add(m); });
  const tailPivot=new THREE.Group(); tailPivot.position.set(.24,2.02,-.26);
  const tail=new THREE.Mesh(new THREE.BoxGeometry(.2,.68,.06),M.scarf); tail.position.y=-.32; tail.castShadow=true; tailPivot.add(tail);
  hero.add(legL,legR,armL,armR,tailPivot);
  hero.userData={body,legL,legR,armL,armR,tailPivot,eyeLight,lantern};
}
hero.position.set(player.x,0,player.z); hero.rotation.y=player.facing; scene.add(hero);

let currentSkin=store.get('fm_skin','wanderer');
function applySkin(id){
  const s=SKINS.find(x=>x.id===id)||SKINS[0]; currentSkin=s.id; store.set('fm_skin',s.id);
  for(const k in M){ if(s.colors[k]) M[k].color.set(s.colors[k]); }
  M.eyes.emissive.set(s.colors.eyes||'#ff2a1a'); M.eyes.emissiveIntensity=s.glow??2;
  hero.userData.eyeLight.color.set(s.colors.eyes||'#ff2a1a');
  hero.userData.eyeLight.intensity=(s.glow??2)*.5;
  renderSkins(); toast('Скин: '+s.name);
}
function skinSVG(s){
  const c=s.colors;
  return `<svg viewBox="0 0 60 80"><circle cx="30" cy="16" r="13" fill="${c.helmet}"/><circle cx="25" cy="17" r="2.6" fill="${c.eyes}"/><circle cx="35" cy="17" r="2.6" fill="${c.eyes}"/><rect x="17" y="30" width="26" height="24" rx="4" fill="${c.jacket}"/><rect x="15" y="30" width="5" height="20" rx="2" fill="${c.jacket}"/><rect x="40" y="30" width="5" height="20" rx="2" fill="${c.jacket}"/><rect x="17" y="28" width="26" height="5" rx="2" fill="${c.scarf}"/><rect x="20" y="54" width="8" height="18" rx="2" fill="${c.pants}"/><rect x="32" y="54" width="8" height="18" rx="2" fill="${c.pants}"/><rect x="18" y="69" width="11" height="6" rx="2" fill="${c.boots}"/><rect x="31" y="69" width="11" height="6" rx="2" fill="${c.boots}"/></svg>`;
}
function renderSkins(){
  ui.skinGrid.innerHTML=SKINS.map(s=>`<button class="skin-card ${s.id===currentSkin?'selected':''}" data-id="${s.id}">${skinSVG(s)}<span class="s-name">${s.name}</span><span class="s-desc">${s.desc||''}</span></button>`).join('');
  ui.skinGrid.querySelectorAll('.skin-card').forEach(b=>b.addEventListener('click',()=>{ Sfx.ensure(); Sfx.interact(); applySkin(b.dataset.id); burst(player.x,1.5,player.z,0xffd166,18,3,3,.8); }));
}
applySkin(currentSkin);

/* ================= ЧАСТИЦЫ ================= */
const P_MAX=260, pPos=new Float32Array(P_MAX*3), pCol=new Float32Array(P_MAX*3), pVel=new Float32Array(P_MAX*3),
  pLife=new Float32Array(P_MAX), pMax=new Float32Array(P_MAX), pGrav=new Float32Array(P_MAX), pBase=new Float32Array(P_MAX*3);
for(let i=0;i<P_MAX;i++)pPos[i*3+1]=-999;
const pGeo=new THREE.BufferGeometry(); pGeo.setAttribute('position',new THREE.BufferAttribute(pPos,3)); pGeo.setAttribute('color',new THREE.BufferAttribute(pCol,3));
const particles=new THREE.Points(pGeo,new THREE.PointsMaterial({map:glowTex,size:10,sizeAttenuation:false,vertexColors:true,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));
particles.frustumCulled=false; scene.add(particles); let pCursor=0; const tmpC=new THREE.Color();
function burst(x,y,z,color,count,speed,grav,life){ tmpC.set(color);
  for(let n=0;n<count;n++){ const i=pCursor; pCursor=(pCursor+1)%P_MAX; const a=Math.random()*6.28,up=Math.random();
    pPos[i*3]=x;pPos[i*3+1]=y;pPos[i*3+2]=z;
    pVel[i*3]=Math.cos(a)*speed*(.3+Math.random()*.7); pVel[i*3+1]=up*speed; pVel[i*3+2]=Math.sin(a)*speed*(.3+Math.random()*.7);
    pLife[i]=pMax[i]=life*(.6+Math.random()*.6); pGrav[i]=grav;
    pBase[i*3]=tmpC.r;pBase[i*3+1]=tmpC.g;pBase[i*3+2]=tmpC.b; } }
function updateParticles(dt){ for(let i=0;i<P_MAX;i++){ if(pLife[i]<=0)continue; pLife[i]-=dt;
  if(pLife[i]<=0){pPos[i*3+1]=-999;pCol[i*3]=pCol[i*3+1]=pCol[i*3+2]=0;continue;}
  pVel[i*3+1]-=pGrav[i]*dt; pPos[i*3]+=pVel[i*3]*dt; pPos[i*3+1]+=pVel[i*3+1]*dt; pPos[i*3+2]+=pVel[i*3+2]*dt;
  if(pPos[i*3+1]<.03){pPos[i*3+1]=.03;pVel[i*3+1]*=-.3;}
  const f=pLife[i]/pMax[i]; pCol[i*3]=pBase[i*3]*f;pCol[i*3+1]=pBase[i*3+1]*f;pCol[i*3+2]=pBase[i*3+2]*f; }
  pGeo.attributes.position.needsUpdate=true; pGeo.attributes.color.needsUpdate=true; }

/* ================= ОТКРЫТИЯ / РЮКЗАК ================= */
const DISC=[
  {id:'camp',ico:'🏕️',title:'Лагерь',text:'Уютный лагерь с палаткой и костром. Здесь можно отдохнуть.'},
  {id:'fire',ico:'🔥',title:'Первый огонь',text:'Костёр разожжён. Ночью он согревает и освещает путь.'},
  {id:'cat',ico:'🐈',title:'Барсик',text:'Рыжий кот доволен. Кажется, он теперь ваш спутник.'},
  {id:'supplies',ico:'📦',title:'Припасы',text:'В ящике нашлись яблоки. Кто-то оставил их для путников.'},
  {id:'lake',ico:'🌊',title:'Тихое озеро',text:'Вода тихая, но в ней определённо кто-то есть.'},
  {id:'fish',ico:'🐟',title:'Рыбак',text:'Первая рыба поймана! У костра её можно пожарить.'},
  {id:'grove',ico:'🍄',title:'Грибная роща',text:'Светящиеся грибы растут только здесь. Ночью они ярче.'},
  {id:'mushroom',ico:'🧺',title:'Грибник',text:'Гриб собран. Через время на этом месте вырастет новый.'},
  {id:'orchard',ico:'🌳',title:'Яблоневый сад',text:'Старые яблони всё ещё плодоносят.'},
  {id:'apple',ico:'🍎',title:'Яблочный спас',text:'Яблоко упало прямо в руки. Дерево стоит потрясти ещё.'},
  {id:'meadow',ico:'🌼',title:'Цветочная поляна',text:'Бабочки кружат над цветами. Красота — тоже открытие.'},
  {id:'flower',ico:'💐',title:'Букет',text:'Цветы собраны. Их не съесть, но настроение они поднимают.'},
  {id:'ruins',ico:'🗿',title:'Древние руины',text:'Пять камней с рунами. Что будет, если коснуться каждого?'},
  {id:'runes',ico:'🔮',title:'Хранитель рун',text:'Все руны зажглись. Долина ответила сиянием.'},
  {id:'beacon',ico:'🗼',title:'Старый маяк',text:'Маяк давно погас. Но его ещё можно зажечь.'},
  {id:'light',ico:'💡',title:'Свет маяка',text:'Маяк осветил долину и открыл все места на карте.'},
  {id:'rest',ico:'⛺',title:'Ночлег',text:'Сон в палатке вернул силы и приблизил утро.'}
];
// 17 открытий — счётчик подстроится автоматически
const discovered=new Set();
const items={apple:0,mushroom:0,fish:0,flower:0};
const ITEM_META={
  apple:{ico:'🍎',name:'Яблоко',eat:true},
  mushroom:{ico:'🍄',name:'Светящийся гриб',eat:true},
  fish:{ico:'🐟',name:'Рыба',eat:true},
  flower:{ico:'🌼',name:'Цветы',eat:false}
};
let discTimer=null, toastTimer=null;
function toast(msg){ ui.toast.textContent=msg; ui.toast.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>ui.toast.classList.remove('show'),2400); }
function unlock(id){ if(discovered.has(id))return; discovered.add(id);
  const d=DISC.find(x=>x.id===id); if(!d)return;
  ui.discoveryTitle.textContent=d.ico+' '+d.title; ui.discovery.classList.add('show'); Sfx.discover();
  clearTimeout(discTimer); discTimer=setTimeout(()=>ui.discovery.classList.remove('show'),3200);
  syncDisc(); renderJournal();
  if(discovered.size===DISC.length){ setTimeout(()=>{ Sfx.win(); $('completeText').innerHTML=`Вы нашли все <b>${DISC.length} открытий</b> за ${fmt(gameTime)} и прошли ${Math.round(distanceWalked/10)} «шагов». Долина запомнит вас.`; openPanel('complete'); },1200); }
}
function syncDisc(){ ui.disc.textContent=discovered.size+' / '+DISC.length; }
function renderJournal(){
  ui.journalFill.style.width=(discovered.size/DISC.length*100)+'%';
  ui.journalList.innerHTML=DISC.map(d=>{ const ok=discovered.has(d.id);
    return `<div class="j-entry ${ok?'':'locked'}"><div class="j-ico">${ok?d.ico:'❔'}</div><div><div class="j-title">${ok?d.title:'???'}</div><div class="j-text">${ok?d.text:'Исследуйте долину, чтобы сделать это открытие.'}</div></div></div>`; }).join('');
}
function addItem(type,n=1){ items[type]=(items[type]||0)+n; Sfx.pickup(); renderBag(); toast(ITEM_META[type].ico+' +'+n+' '+ITEM_META[type].name); }
function renderBag(){
  const rows=Object.keys(items).filter(k=>items[k]>0).map(k=>{ const m=ITEM_META[k];
    return `<div class="b-item"><div class="b-ico">${m.ico}</div><div class="b-name">${m.name}</div><div class="b-count">×${items[k]}</div>${m.eat?`<button class="btn-ghost eat-btn" data-item="${k}">Съесть</button>`:''}</div>`; }).join('');
  ui.bagList.innerHTML=rows||'<div class="b-empty">Пока пусто. Поищите яблоки, грибы, рыбу или цветы.</div>';
  ui.bagList.querySelectorAll('.eat-btn').forEach(b=>b.addEventListener('click',()=>eat(b.dataset.item)));
}
function eat(type){
  if(!items[type])return; items[type]--; Sfx.eat();
  let gain=0,msg='';
  if(type==='apple'){gain=30;msg='🍎 Хрусть! +30 сил';}
  if(type==='mushroom'){gain=22;msg='🍄 Светящийся гриб… странно вкусно. +22 силы';}
  if(type==='fish'){ if(nearLitFire()){gain=55;msg='🐟 Жареная рыба у костра! +55 сил';} else {gain=15;msg='🐟 Сырая рыба… лучше у костра. +15 сил';} }
  player.stamina=clamp(player.stamina+gain,0,100); toast(msg); renderBag();
}
function nearLitFire(){ return world && world.fire && world.fire.lit && Math.hypot(player.x-world.fire.x,player.z-world.fire.z)<5; }

/* ================= МИР ================= */
let world=null, seed=store.get('fm_seed',Math.floor(Math.random()*99999));
function newWorld(newSeed){
  seed=newSeed??Math.floor(Math.random()*99999); store.set('fm_seed',seed);
  if(world){ scene.remove(world.group); }
  discovered.clear(); Object.keys(items).forEach(k=>items[k]=0);
  player.x=0;player.z=4;player.y=0;player.vx=player.vz=player.vy=0;player.stamina=100;player.grounded=true;
  gameTime=0; dayTime=.3; distanceWalked=0; fishing=null;
  world=buildWorld(seed);
  $('seedIntro').textContent=seed; $('seedPause').textContent=seed;
  syncDisc(); renderJournal(); renderBag(); renderSkins();
  minimapFog.fill(0);
  toast('Новая долина №'+seed);
}

/* Общие геометрии/материалы */
const G={
  trunk:new THREE.CylinderGeometry(.2,.3,1.4,7),
  cone:[new THREE.ConeGeometry(1.5,1.7,7),new THREE.ConeGeometry(1.15,1.45,7),new THREE.ConeGeometry(.78,1.2,7)],
  rock:new THREE.DodecahedronGeometry(1,0),
  grass:new THREE.ConeGeometry(.06,.38,5),
  apple:new THREE.SphereGeometry(.12,8,8),
  mushStem:new THREE.CylinderGeometry(.06,.09,.28,6),
  mushCap:new THREE.SphereGeometry(.2,8,6,0,Math.PI*2,0,Math.PI/2),
  flower:new THREE.ConeGeometry(.09,.16,6),
  rabbitBody:new THREE.SphereGeometry(.28,10,8),
  rabbitHead:new THREE.SphereGeometry(.18,10,8),
  ear:new THREE.BoxGeometry(.06,.3,.08),
  deerBody:new THREE.BoxGeometry(.9,.55,.4),
  deerLeg:new THREE.BoxGeometry(.1,.6,.1),
  deerHead:new THREE.BoxGeometry(.3,.3,.3),
  antler:new THREE.ConeGeometry(.05,.4,5)
};
const MAT={
  trunk:new THREE.MeshLambertMaterial({color:0x6b4a33}),
  leaf:[new THREE.MeshLambertMaterial({color:0x2f7a44}),new THREE.MeshLambertMaterial({color:0x3c8f4f})],
  rock:new THREE.MeshLambertMaterial({color:0x7d8a77}),
  grass:new THREE.MeshLambertMaterial({color:0xffffff}),
  apple:new THREE.MeshLambertMaterial({color:0xd62828}),
  mushStem:new THREE.MeshLambertMaterial({color:0xf2e3c2}),
  mushCap:new THREE.MeshLambertMaterial({color:0xff9f43,emissive:0xff7b00,emissiveIntensity:.5}),
  flower:[new THREE.MeshLambertMaterial({color:0xffd166}),new THREE.MeshLambertMaterial({color:0xff7eb6}),new THREE.MeshLambertMaterial({color:0xb48cff}),new THREE.MeshLambertMaterial({color:0x6fc3ff})],
  water:new THREE.MeshStandardMaterial({color:0x2e6f8e,transparent:true,opacity:.82,roughness:.25,metalness:.1}),
  sand:new THREE.MeshLambertMaterial({color:0xc9b98a}),
  wood:new THREE.MeshLambertMaterial({color:0x8a5a3a}),
  tent:new THREE.MeshLambertMaterial({color:0xc96f3b}),
  cat:new THREE.MeshLambertMaterial({color:0xd97b29}),
  catDark:new THREE.MeshLambertMaterial({color:0x8a4a1a}),
  rabbit:new THREE.MeshLambertMaterial({color:0xb8a58a}),
  deer:new THREE.MeshLambertMaterial({color:0x9a6b4f}),
  runeStone:new THREE.MeshLambertMaterial({color:0x6a7568}),
  runeOff:new THREE.MeshLambertMaterial({color:0x3a4a3e,emissive:0x000000}),
  runeOn:new THREE.MeshLambertMaterial({color:0xb48cff,emissive:0xb48cff,emissiveIntensity:1.6}),
  flame:new THREE.MeshBasicMaterial({color:0xff9f43,transparent:true,opacity:.85,blending:THREE.AdditiveBlending,depthWrite:false}),
  beam:new THREE.MeshBasicMaterial({color:0xffd166,transparent:true,opacity:.22,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide})
};
function buildWorld(sd){
  const rnd=mulberry32(sd), group=new THREE.Group(); scene.add(group);
  const colliders=[], interactables=[], landmarks=[], trees=[], mushrooms=[], appleTrees=[], animals=[], butterflies=[], birds=[], ripples=[];
  const W={group,colliders,interactables,landmarks,trees,mushrooms,appleTrees,animals,butterflies,birds,ripples,fire:null,beacon:null,runes:[],lake:null,fogReveal:false};

  /* Земля */
  const geo=new THREE.PlaneGeometry(120,120,60,60), pos=geo.attributes.position, colors=[];
  const cA=new THREE.Color(0x4c9a55),cB=new THREE.Color(0x63b168),cC=new THREE.Color(0x79c17b),tmp=new THREE.Color();
  for(let i=0;i<pos.count;i++){ const x=pos.getX(i),y=pos.getY(i),d=Math.hypot(x,y);
    const n=(Math.sin(x*.3+1.7)*Math.cos(y*.27)+Math.sin(x*.12-y*.2))*.25+.5;
    tmp.copy(cA).lerp(cB,clamp(n,0,1)); if(d<7)tmp.lerp(cC,(1-d/7)*.5); if(d>42)tmp.multiplyScalar(1-Math.min((d-42)/16,.4));
    colors.push(tmp.r,tmp.g,tmp.b); }
  geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  const ground=new THREE.Mesh(geo,new THREE.MeshLambertMaterial({vertexColors:true}));
  ground.rotation.x=-Math.PI/2; ground.receiveShadow=true; group.add(ground);

  function addTree(x,z,s,apple=false){
    const g=new THREE.Group(); const trunk=new THREE.Mesh(G.trunk,MAT.trunk); trunk.position.y=.7; trunk.castShadow=true; g.add(trunk);
    const fol=new THREE.Group(); G.cone.forEach((cg,i)=>{ const m=new THREE.Mesh(cg,MAT.leaf[i%2]); m.position.y=1.7+i; m.castShadow=true; fol.add(m); });
    if(apple){ for(let i=0;i<7;i++){ const a=rnd()*6.28,r=.5+rnd()*.8; const ap=new THREE.Mesh(G.apple,MAT.apple);
      ap.position.set(Math.cos(a)*r,2.2+rnd()*1.4,Math.sin(a)*r); fol.add(ap); } }
    g.add(fol); g.position.set(x,0,z); g.scale.setScalar(s); g.rotation.y=rnd()*6.28; group.add(g);
    colliders.push({x,z,r:.55*s}); trees.push({fol,phase:rnd()*9});
    if(apple) appleTrees.push({x,z,group:g,cd:0});
    return g;
  }
  function addRock(x,z,s){ const m=new THREE.Mesh(G.rock,MAT.rock); m.position.set(x,s*.35,z); m.scale.set(s,s*.7,s);
    m.rotation.set(rnd(),rnd()*6,rnd()); m.castShadow=true; m.receiveShadow=true; group.add(m); colliders.push({x,z,r:s*.8}); }
  function addMushroom(x,z,big=false){ const g=new THREE.Group(); const st=new THREE.Mesh(G.mushStem,MAT.mushStem); st.position.y=.14; g.add(st);
    const cp=new THREE.Mesh(G.mushCap,MAT.mushCap); cp.position.y=.27; g.add(cp); g.position.set(x,0,z); g.scale.setScalar(big?2.2:.7+rnd()*.8); group.add(g);
    const m={x,z,group:g,picked:false,regrow:0,big}; mushrooms.push(m); return m; }
  function interact(x,z,r,label,action){ const o={x,z,r,label,action,cd:0}; interactables.push(o); return o; }

  /* Локации */
  const aL=rnd()*6.28;
  const lake={x:Math.cos(aL)*30,z:Math.sin(aL)*30,r:9};
  const forest={x:Math.cos(aL+2.2)*32,z:Math.sin(aL+2.2)*32};
  const grove={x:Math.cos(aL+4.0)*28,z:Math.sin(aL+4.0)*28};
  const ruins={x:Math.cos(aL+1.1)*38,z:Math.sin(aL+1.1)*38};
  const beacon={x:Math.cos(aL+5.2)*40,z:Math.sin(aL+5.2)*40};
  const meadow={x:Math.cos(aL+3.1)*22,z:Math.sin(aL+3.1)*22};
  W.lake=lake;
  landmarks.push(
    {id:'camp',name:'Лагерь',x:0,z:0,r:7,color:'#ffd166',ico:'🏕'},
    {id:'lake',name:'Озеро',x:lake.x,z:lake.z,r:11,color:'#6fc3ff',ico:'🌊'},
    {id:'orchard',name:'Яблоневый сад',x:forest.x,z:forest.z,r:10,color:'#7ee081',ico:'🌳'},
    {id:'grove',name:'Грибная роща',x:grove.x,z:grove.z,r:8,color:'#ff9f43',ico:'🍄'},
    {id:'ruins',name:'Руины',x:ruins.x,z:ruins.z,r:8,color:'#b48cff',ico:'🗿'},
    {id:'beacon',name:'Маяк',x:beacon.x,z:beacon.z,r:8,color:'#ffd166',ico:'🗼'},
    {id:'meadow',name:'Поляна',x:meadow.x,z:meadow.z,r:8,color:'#ff7eb6',ico:'🌼'}
  );

  /* Озеро */
  const sand=new THREE.Mesh(new THREE.CircleGeometry(lake.r+1.4,40),MAT.sand); sand.rotation.x=-Math.PI/2; sand.position.set(lake.x,.015,lake.z); group.add(sand);
  const water=new THREE.Mesh(new THREE.CircleGeometry(lake.r,40),MAT.water); water.rotation.x=-Math.PI/2; water.position.set(lake.x,.03,lake.z); water.receiveShadow=true; group.add(water);
  W.water=water;
  const pierDir=new THREE.Vector2(-lake.x,-lake.z).normalize();
  const pierStart={x:lake.x+pierDir.x*(lake.r+1),z:lake.z+pierDir.y*(lake.r+1)};
  const pierEnd={x:lake.x+pierDir.x*(lake.r-3),z:lake.z+pierDir.y*(lake.r-3)};
  for(let i=0;i<7;i++){ const t=i/6,px=lerp(pierStart.x,pierEnd.x,t),pz=lerp(pierStart.z,pierEnd.z,t);
    const plank=new THREE.Mesh(new THREE.BoxGeometry(1.6,.12,.55),MAT.wood); plank.position.set(px,.18,pz);
    plank.rotation.y=Math.atan2(pierDir.x,pierDir.y); plank.castShadow=true; group.add(plank); }
  interact(pierEnd.x,pierEnd.z,2.2,()=>fishing?(fishing.bite?'Поймать!':'Ждём поклёвку…'):'Рыбачить',()=>startFishing(pierEnd));

  /* Лагерь */
  const tent=new THREE.Mesh(new THREE.ConeGeometry(2,2.4,4),MAT.tent); tent.position.set(-3,1.2,-2); tent.rotation.y=Math.PI/4; tent.castShadow=true; group.add(tent); colliders.push({x:-3,z:-2,r:1.8});
  interact(-3,-2,2.6,()=>'Отдохнуть до утра',()=>{ dayTime=.28; player.stamina=100; unlock('rest'); Sfx.interact(); toast('⛺ Вы выспались. Утро близко.'); });
  const crate=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),MAT.wood); crate.position.set(3,.5,-2); crate.castShadow=true; group.add(crate); colliders.push({x:3,z:-2,r:.8});
  let crateOpened=false;
  interact(3,-2,2,()=>crateOpened?'Ящик пуст':'Открыть ящик',()=>{ if(crateOpened){toast('Ящик уже пуст.');return;} crateOpened=true; addItem('apple',2); unlock('supplies'); burst(3,1,-2,0xffd166,14,3,4,.8); });
  const fireG=new THREE.Group(); fireG.position.set(0,0,0);
  for(let i=0;i<8;i++){ const a=i/8*6.28; const st=new THREE.Mesh(G.rock,MAT.rock); st.scale.setScalar(.22); st.position.set(Math.cos(a)*.8,.12,Math.sin(a)*.8); fireG.add(st); }
  const logs=new THREE.Mesh(new THREE.BoxGeometry(1.1,.18,.18),MAT.wood); logs.position.y=.15; logs.rotation.y=.5; fireG.add(logs);
  const flame=new THREE.Mesh(new THREE.ConeGeometry(.4,1,8),MAT.flame); flame.position.y=.6; flame.visible=false; fireG.add(flame);
  const fireLight=new THREE.PointLight(0xff9f43,0,12); fireLight.position.y=1; fireG.add(fireLight);
  group.add(fireG);
  W.fire={x:0,z:0,lit:false,flame,light:fireLight};
  interact(0,0,2.4,()=>W.fire.lit?'Потушить костёр':'Разжечь костёр',()=>{ W.fire.lit=!W.fire.lit; W.fire.flame.visible=W.fire.lit; Sfx.fire();
    if(W.fire.lit){unlock('fire');toast('🔥 Костёр разожжён');}else toast('Костёр потушен'); });
  /* Кот */
  const cat=new THREE.Group(); const cb=new THREE.Mesh(new THREE.SphereGeometry
