import * as THREE from 'three';

const D = window.GAME_DATA;
const $ = (id) => document.getElementById(id);
const clamp = (v,a,b)=>Math.max(a,Math.min(b,v));
const lerp = (a,b,t)=>a+(b-a)*t;
const TAU = Math.PI*2;
const rndInt = (a,b)=>a+Math.floor(Math.random()*(b-a+1));
const store = {
  get(k,d){ try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v);}catch(e){return d;} },
  set(k,v){ try{localStorage.setItem(k,JSON.stringify(v));}catch(e){} },
  del(k){ try{localStorage.removeItem(k);}catch(e){} }
};
function mulberry32(seed){ let a=seed|0; return function(){ a=(a+0x6D2B79F5)|0; let t=Math.imul(a^(a>>>15),1|a); t=(t+Math.imul(t^(t>>>7),61|t))^t; return ((t^(t>>>14))>>>0)/4294967296; }; }

/* ==================== СОСТОЯНИЕ ==================== */
const SAVE_KEY='rpg_valley_save_v1';
const XP_TABLE=[0,60,160,320,560,900,1400,2100,3000];
function freshState(){
  return {
    hp:100, stamina:100, coins:20, xp:0, level:1,
    inventory:{}, equipment:{tool:null,weapon:null,armor:null,charm:null,light:null},
    location:'valley', visited:{valley:true},
    tutorialStep:0, tutorialDone:false,
    counters:{gather:{},sold:{},bought:{}},
    poison:0, warmthBuff:0, playTime:0
  };
}
let S=freshState();
const saved=store.get(SAVE_KEY,null);
const hasSave=!!saved;
if(saved) S=Object.assign(freshState(),saved);

let world=null;
let state='intro';
let activePanel='intro';
let selectedMap='valley';
let tradeTab='buy';
let selectedInv=null;
let toastTimer=null;
let saveTimer=0;
let attackQueued=false;
let interactQueued=false;
let jumpQueued=false;
let sprintTouch=false;
let attackCd=0;
let dayTime=.32;
let hazardTimer=0;
let nearestInteract=null;
let nearestEnemy=null;
const keys={};
const joy={x:0,y:0,id:null};

const player={x:0,y:0,z:5,vx:0,vz:0,vy:0,grounded:true,facing:Math.PI,walkPhase:0,prevSin:0,landT:0,moving:false,sprinting:false,invuln:0};

/* ==================== ПРЕДМЕТЫ / СТАТЫ ==================== */
const ITEMS=D.items;
const RAR=D.rarities;
function item(id){ return ITEMS[id]; }
function rarityColor(id){ const it=item(id); return RAR[it.rarity].color; }
function count(id){ return S.inventory[id]||0; }
function addItem(id,n=1){ S.inventory[id]=count(id)+n; }
function takeItem(id,n=1){ if(count(id)<n)return false; S.inventory[id]-=n; if(S.inventory[id]<=0)delete S.inventory[id]; return true; }
function equipItem(id){
  const it=item(id); if(!it.slot)return;
  if(count(id)<=0)return;
  const old=S.equipment[it.slot];
  takeItem(id,1);
  if(old)addItem(old,1);
  S.equipment[it.slot]=id;
  toast('Экипировано: '+it.name);
  renderAll();
  checkTutorial();
}
function unequip(slot){
  const id=S.equipment[slot]; if(!id)return;
  S.equipment[slot]=null; addItem(id,1); renderAll();
}
function stats(){
  const s={atk:2,def:0,gatherType:null,gatherPower:0,speed:0,luck:0,maxHp:100+(S.level-1)*12,maxStamina:100+(S.level-1)*6,light:0,warmth:0,poisonResist:0,coldResist:0};
  for(const slot in S.equipment){
    const id=S.equipment[slot]; if(!id)continue; const it=item(id);
    for(const k of ['atk','def','speed','luck','maxStamina','light','warmth','poisonResist','coldResist']) s[k]+=it[k]||0;
    if(it.slot==='tool'){ s.gatherType=it.gatherType; s.gatherPower=it.gatherPower||1; }
  }
  s.maxHp+=0;
  return s;
}
function addXP(n){
  S.xp+=n;
  let lvl=1;
  for(let i=0;i<XP_TABLE.length;i++) if(S.xp>=XP_TABLE[i]) lvl=i+1;
  if(lvl>S.level){ S.level=lvl; S.hp=stats().maxHp; toast('⭐ Уровень '+lvl+'! Открыты новые рецепты и локации.'); Sfx.level(); }
}
function useItem(id){
  const it=item(id); if(!it.use)return;
  if(!takeItem(id,1))return;
  const st=stats();
  if(it.use.heal)S.hp=clamp(S.hp+it.use.heal,0,st.maxHp);
  if(it.use.stamina)S.stamina=clamp(S.stamina+it.use.stamina,0,st.maxStamina);
  if(it.use.curePoison)S.poison=0;
  if(it.use.buffWarmth)S.warmthBuff=60;
  Sfx.eat(); toast('Использовано: '+it.name); renderAll();
}
function sellPrice(id){ const it=item(id); return Math.max(1,Math.floor(it.value*0.6)); }
function buyPrice(id){ const it=item(id); return Math.ceil(it.value*2.5); }

/* ==================== ЗВУК ==================== */
const Sfx={
  ctx:null,master:null,muted:store.get('rpg_muted',false),
  ensure(){ if(!this.ctx){try{const AC=window.AudioContext||window.webkitAudioContext;this.ctx=new AC();this.master=this.ctx.createGain();this.master.gain.value=this.muted?0:.7;this.master.connect(this.ctx.destination);}catch(e){}} if(this.ctx&&this.ctx.state==='suspended')this.ctx.resume(); },
  setMuted(m){this.muted=m;store.set('rpg_muted',m);if(this.master&&this.ctx)this.master.gain.linearRampToValueAtTime(m?0:.7,this.ctx.currentTime+.1);$('icoSoundOn').style.display=m?'none':'';$('icoSoundOff').style.display=m?'':'none';},
  tone(f0,f1,dur,type,vol){if(!this.ctx||this.muted)return;const t=this.ctx.currentTime,o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=type;o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(Math.max(f1,1),t+dur);g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.001,t+dur);o.connect(g);g.connect(this.master);o.start(t);o.stop(t+dur+.02);},
  noise(dur,freq,vol){if(!this.ctx||this.muted)return;const len=Math.floor(this.ctx.sampleRate*dur),buf=this.ctx.createBuffer(1,len,this.ctx.sampleRate),d=buf.getChannelData(0);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*(1-i/len);const s=this.ctx.createBufferSource();s.buffer=buf;const f=this.ctx.createBiquadFilter();f.type='lowpass';f.frequency.value=freq;const g=this.ctx.createGain();g.gain.value=vol;s.connect(f);f.connect(g);g.connect(this.master);s.start();},
  step(){this.noise(.03,700,.05);},jump(){this.tone(260,520,.12,'triangle',.14);},land(){this.noise(.08,300,.2);},
  interact(){this.tone(420,640,.1,'sine',.13);},pickup(){this.tone(620,920,.12,'sine',.16);},eat(){this.noise(.07,900,.12);},
  craft(){this.tone(300,600,.15,'square',.1);setTimeout(()=>this.tone(450,900,.15,'sine',.14),120);},
  coin(){this.tone(800,1200,.08,'sine',.14);},hit(){this.noise(.08,500,.2);this.tone(180,90,.12,'sawtooth',.12);},
  hurt(){this.tone(200,70,.25,'sawtooth',.18);},level(){[523,659,784,1047].forEach((f,i)=>setTimeout(()=>this.tone(f,f,.2,'triangle',.18),i*100));},
  death(){[330,247,196].forEach((f,i)=>setTimeout(()=>this.tone(f,f*.9,.3,'triangle',.16),i*180));},
  travel(){this.tone(200,800,.5,'sine',.15);}
};
Sfx.setMuted(Sfx.muted);

/* ==================== UI ==================== */
function toast(msg){ const el=$('toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2600); }
function save(){ store.set(SAVE_KEY,S); }
function renderHUD(){
  const st=stats();
  $('hpFill').style.width=clamp(S.hp/st.maxHp*100,0,100)+'%';
  $('stFill').style.width=clamp(S.stamina/st.maxStamina*100,0,100)+'%';
  $('hpText').textContent=Math.ceil(S.hp);
  $('stText').textContent=Math.ceil(S.stamina);
  $('lvlText').textContent='Ур.'+S.level;
  const cur=XP_TABLE[S.level-1]||0,next=XP_TABLE[S.level]||XP_TABLE[XP_TABLE.length-1];
  $('xpFill').style.width=clamp((S.xp-cur)/(next-cur)*100,0,100)+'%';
  $('coinText').textContent=S.coins;
  $('locText').textContent=D.locations[S.location].name;
}
function renderQuest(){
  if(S.tutorialDone){ $('questText').textContent='Свободное исследование. Редкие предметы добываются в опасных землях.'; $('questProgress').textContent='Уровень '+S.level+' · '+S.coins+' монет'; return; }
  const q=D.tutorial[S.tutorialStep];
  if(!q){ $('questText').textContent=''; $('questProgress').textContent=''; return; }
  $('questText').textContent=q.text;
  let prog='';
  if(q.type==='gather'||q.type==='sell'||q.type==='buy'){
    prog=Object.entries(q.need).map(([id,n])=>(S.counters[q.type][id]||0)+'/'+n+' '+item(id).name).join(' · ');
  } else if(q.type==='have'){
    prog=Object.entries(q.need).map(([id,n])=>count(id)+'/'+n+' '+item(id).name).join(' · ');
  } else if(q.type==='equip'){
    prog=S.equipment[q.slot]===q.item?'Готово':'Не экипировано';
  } else if(q.type==='travel'){
    prog=S.location===q.target?'Готово':'Вы в долине';
  }
  $('questProgress').textContent=prog;
}
function checkTutorial(){
  if(S.tutorialDone)return;
  const q=D.tutorial[S.tutorialStep]; if(!q)return;
  let ok=false;
  if(q.type==='gather'||q.type==='sell'||q.type==='buy') ok=Object.entries(q.need).every(([id,n])=>(S.counters[q.type][id]||0)>=n);
  if(q.type==='have') ok=Object.entries(q.need).every(([id,n])=>count(id)>=n);
  if(q.type==='equip') ok=S.equipment[q.slot]===q.item;
  if(q.type==='travel') ok=S.location===q.target;
  if(ok){ S.tutorialStep++; Sfx.pickup(); toast('✅ Цель выполнена!'); if(S.tutorialStep>=D.tutorial.length){S.tutorialDone=true;toast('🎓 Обучение завершено. Опасные земли открыты!');} }
  renderQuest();
}
function attrText(it){
  const names={atk:'Атака',def:'Защита',gatherType:'Инструмент',gatherPower:'Сила добычи',speed:'Скорость',luck:'Удача',maxStamina:'Выносливость',light:'Свет',warmth:'Тепло',poisonResist:'Защита от яда',coldResist:'Защита от холода'};
  const lines=[];
  for(const k in names){ if(it[k])lines.push(names[k]+': '+(typeof it[k]==='string'?it[k]:it[k])); }
  if(it.use){ const u=[];if(it.use.heal)u.push('+'+it.use.heal+' HP');if(it.use.stamina)u.push('+'+it.use.stamina+' сил');if(it.use.curePoison)u.push('снимает яд');if(it.use.buffWarmth)u.push('+тепло на 60с');lines.push(u.join(', ')); }
  lines.push('Ценность: '+it.value+' 🪙 · Вес: '+it.weight);
  return lines.join('<br>');
}
function renderInventory(){
  const st=stats();
  $('statLine').innerHTML='⚔️ '+st.atk+' · 🛡️ '+st.def+' · 🍀 '+st.luck+' · 💡 '+st.light+' · 🔥 '+st.warmth+' · ☠️ '+st.poisonResist+'% · ❄️ '+st.coldResist+'%';
  const slotNames={tool:'Инструмент',weapon:'Оружие',armor:'Броня',charm:'Амулет',light:'Свет'};
  $('equipSlots').innerHTML=Object.keys(S.equipment).map(slot=>{
    const id=S.equipment[slot];const it=id?item(id):null;
    return `<div class="equip-slot" data-slot="${slot}"><div class="es-label">${slotNames[slot]}</div><div class="es-icon">${it?it.icon:'—'}</div><div class="es-name" style="color:${it?rarityColor(id):'var(--dim)'}">${it?it.name:'Пусто'}</div></div>`;
  }).join('');
  $('equipSlots').querySelectorAll('.equip-slot').forEach(el=>el.addEventListener('click',()=>{unequip(el.dataset.slot);toast('Снято');}));
  const ids=Object.keys(S.inventory).filter(id=>count(id)>0).sort((a,b)=>RAR[item(a).rarity].order-RAR[item(b).rarity].order);
  $('invGrid').innerHTML=ids.map(id=>{
    const it=item(id);
    return `<div class="inv-item" data-id="${id}" style="border-color:${rarityColor(id)}55"><div class="ii-count">×${count(id)}</div><div class="ii-icon">${it.icon}</div><div class="ii-name" style="color:${rarityColor(id)}">${it.name}</div></div>`;
  }).join('')||'<div class="story">Рюкзак пуст. Соберите ресурсы клавишей E.</div>';
  $('invGrid').querySelectorAll('.inv-item').forEach(el=>el.addEventListener('click',()=>{selectedInv=el.dataset.id;renderInvDetail();}));
  renderInvDetail();
}
function renderInvDetail(){
  const id=selectedInv; const box=$('invDetail');
  if(!id||!item(id)||count(id)<=0){ box.innerHTML='Выберите предмет, чтобы увидеть его атрибуты.';return; }
  const it=item(id);
  let buttons='';
  if(it.slot)buttons+=`<button class="btn-primary" id="btnEquip">Экипировать</button>`;
  if(it.use)buttons+=`<button class="btn-ghost" id="btnUse">Использовать</button>`;
  if(it.value>0)buttons+=`<button class="btn-ghost" id="btnSellFromInv">Продать за ${sellPrice(id)} 🪙</button>`;
  box.innerHTML=`<div class="id-name" style="color:${rarityColor(id)}">${it.icon} ${it.name} <span style="font-size:11px;color:var(--dim)">(${RAR[it.rarity].name})</span></div><div class="id-desc">${it.desc}</div><div class="id-attrs">${attrText(it)}</div><div class="btn-row" style="justify-content:flex-start;margin-top:10px">${buttons}</div>`;
  if($('btnEquip'))$('btnEquip').addEventListener('click',()=>equipItem(id));
  if($('btnUse'))$('btnUse').addEventListener('click',()=>useItem(id));
  if($('btnSellFromInv'))$('btnSellFromInv').addEventListener('click',()=>{ if(takeItem(id,1)){S.coins+=sellPrice(id);S.counters.sold[id]=(S.counters.sold[id]||0)+1;Sfx.coin();toast('Продано: '+it.name);renderAll();checkTutorial();} });
}
function renderCraft(){
  $('craftList').innerHTML=D.recipes.map((r,idx)=>{
    const it=item(r.out);const canLevel=S.level>=r.level;
    const mats=Object.entries(r.mats).map(([id,n])=>{const have=count(id);return `<span class="${have>=n?'ok':'missing'}">${item(id).icon}${have}/${n}</span>`;}).join(' ');
    const can=canLevel&&Object.entries(r.mats).every(([id,n])=>count(id)>=n);
    return `<div class="recipe"><div class="r-icon">${it.icon}</div><div class="r-main"><div class="r-name" style="color:${rarityColor(r.out)}">${it.name} <span style="font-size:10px;color:var(--dim)">ур.${r.level}</span></div><div class="r-mats">${mats}</div></div><button class="btn-ghost" data-idx="${idx}" ${can?'':'disabled'}>Создать</button></div>`;
  }).join('');
  $('craftList').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>craft(parseInt(b.dataset.idx))));
}
function craft(idx){
  const r=D.recipes[idx]; if(!r)return;
  if(S.level<r.level){toast('Нужен уровень '+r.level);return;}
  if(!Object.entries(r.mats).every(([id,n])=>count(id)>=n)){toast('Не хватает материалов');return;}
  Object.entries(r.mats).forEach(([id,n])=>takeItem(id,n));
  addItem(r.out,r.n||1); addXP(12+RAR[item(r.out).rarity].order*8); Sfx.craft();
  toast('🛠️ Создано: '+item(r.out).name); burst(player.x,1.4,player.z,0xffd166,16,3,3,.8);
  renderAll(); checkTutorial();
}
function renderTrade(){
  $('tradeCoins').textContent=S.coins;
  let ids=tradeTab==='buy'?D.merchantStock:Object.keys(S.inventory).filter(id=>count(id)>0&&item(id).value>0);
  $('tradeList').innerHTML=ids.map(id=>{
    const it=item(id);const price=tradeTab==='buy'?buyPrice(id):sellPrice(id);
    const can=tradeTab==='buy'?S.coins>=price:count(id)>0;
    return `<div class="trade-row"><div class="t-icon">${it.icon}</div><div class="t-main"><div class="t-name" style="color:${rarityColor(id)}">${it.name}</div><div class="t-sub">${RAR[it.rarity].name} · ${tradeTab==='buy'?'Цена':'Вы получите'} ${price} 🪙 ${tradeTab==='sell'?'· у вас '+count(id):''}</div></div><button class="btn-ghost" data-id="${id}" ${can?'':'disabled'}>${tradeTab==='buy'?'Купить':'Продать'}</button></div>`;
  }).join('')||'<div class="story">Нечего продавать.</div>';
  $('tradeList').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
    const id=b.dataset.id;const it=item(id);
    if(tradeTab==='buy'){const p=buyPrice(id);if(S.coins>=p){S.coins-=p;addItem(id,1);S.counters.bought[id]=(S.counters.bought[id]||0)+1;Sfx.coin();toast('Куплено: '+it.name);}}
    else{const p=sellPrice(id);if(takeItem(id,1)){S.coins+=p;S.counters.sold[id]=(S.counters.sold[id]||0)+1;Sfx.coin();toast('Продано: '+it.name);}}
    renderAll();checkTutorial();
  }));
}
function locationUnlocked(id){
  const u=D.locations[id].unlock; if(!u)return true;
  if(u.item&&count(u.item)<=0)return false;
  if(u.level&&S.level<u.level)return false;
  if(u.visited&&!S.visited[u.visited])return false;
  return true;
}
function unlockText(id){
  const u=D.locations[id].unlock;if(!u)return 'Открыто';
  const parts=[];if(u.item)parts.push('иметь '+item(u.item).name);if(u.level)parts.push('уровень '+u.level);if(u.visited)parts.push('посетить '+D.locations[u.visited].name);
  return 'Нужно: '+parts.join(', ');
}
function renderMap(){
  const area=$('mapArea');const locs=Object.entries(D.locations);
  let svg='<svg viewBox="0 0 100 100" preserveAspectRatio="none">';
  const order=['valley','forest','swamp','peaks','ruins'];
  for(let i=0;i<order.length-1;i++){const a=D.locations[order[i]],b=D.locations[order[i+1]];svg+=`<line x1="${a.mapX}" y1="${a.mapY}" x2="${b.mapX}" y2="${b.mapY}" stroke="rgba(168,196,160,.35)" stroke-width=".7" stroke-dasharray="2 2"/>`;}
  svg+='</svg>';
  area.innerHTML=svg+locs.map(([id,l])=>{
    const unlocked=locationUnlocked(id);const current=S.location===id;const sel=selectedMap===id;
    return `<div class="map-node ${unlocked?'':'locked'} ${current?'current':''} ${sel?'selected':''}" data-id="${id}" style="left:${l.mapX}%;top:${l.mapY}%"><div class="mn-dot">${unlocked?locIcon(id):'🔒'}</div><div class="mn-name">${l.name}</div><div class="mn-danger">${l.danger?'☠️'.repeat(l.danger):'🏠 хаб'}</div></div>`;
  }).join('');
  area.querySelectorAll('.map-node').forEach(el=>el.addEventListener('click',()=>{selectedMap=el.dataset.id;renderMap();}));
  const l=D.locations[selectedMap];const unlocked=locationUnlocked(selectedMap);
  const resources=[...new Set(l.nodes.flatMap(n=>[n.base.item,...n.bonus.map(b=>b.item)]))].slice(0,6).map(id=>item(id).icon+' '+item(id).name).join(', ');
  const enemies=l.enemies.length?l.enemies.map(e=>D.enemies[e.type].name).join(', '):'нет';
  $('mapDetail').innerHTML=`<b>${l.name}</b> · опасность ${l.danger}/4<br>${l.desc}<br><span style="color:var(--dim)">Ресурсы: ${resources}<br>Враги: ${enemies}<br>${unlocked?'✅ Открыто':'🔒 '+unlockText(selectedMap)}</span>`;
  $('btnTravel').disabled=!unlocked||selectedMap===S.location;
}
function locIcon(id){return{valley:'🏠',forest:'🌲',swamp:'🐸',peaks:'🌋',ruins:'🌙'}[id]||'📍';}
function renderAll(){renderHUD();renderQuest();if(activePanel==='inv')renderInventory();if(activePanel==='craft')renderCraft();if(activePanel==='trade')renderTrade();if(activePanel==='map')renderMap();}

/* ==================== ПАНЕЛИ ==================== */
const overlays={intro:$('overlayIntro'),pause:$('overlayPause'),inv:$('overlayInv'),craft:$('overlayCraft'),trade:$('overlayTrade'),map:$('overlayMap'),death:$('overlayDeath')};
function openPanel(name){activePanel=name;Object.values(overlays).forEach(o=>o.classList.add('hidden'));if(name&&overlays[name])overlays[name].classList.remove('hidden');renderAll();}
function closePanel(){activePanel=null;Object.values(overlays).forEach(o=>o.classList.add('hidden'));}
function startGame(){Sfx.ensure();state='playing';closePanel();toast('Добро пожаловать в долину. Следуйте цели слева сверху.');}

/* ==================== THREE ==================== */
const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.domElement.id='gameCanvas3D';
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.setSize(innerWidth,innerHeight);
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;
document.body.appendChild(renderer.domElement);
const scene=new THREE.Scene();
scene.fog=new THREE.Fog(0x7fb08a,26,72);
let frustum=9.6,camYaw=Math.PI/4,camYawT=Math.PI/4;
const camera=new THREE.OrthographicCamera(-1,1,1,-1,.1,220);
const hemi=new THREE.HemisphereLight(0xbfe8ff,0x3e5a3a,.5);scene.add(hemi);
const sun=new THREE.DirectionalLight(0xffd9a0,1.5);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);
sun.shadow.camera.left=-18;sun.shadow.camera.right=18;sun.shadow.camera.top=18;sun.shadow.camera.bottom=-18;sun.shadow.camera.far=70;sun.shadow.bias=-.002;
scene.add(sun);scene.add(sun.target);
const fill=new THREE.DirectionalLight(0x4de3c1,.22);fill.position.set(-10,8,-12);scene.add(fill);

function glowTexture(){const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d');const r=g.createRadialGradient(64,64,2,64,64,62);r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.35,'rgba(255,255,255,.45)');r.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=r;g.fillRect(0,0,128,128);return new THREE.CanvasTexture(c);}
const glowTex=glowTexture();
function glowSprite(color,scale,opacity){const m=new THREE.SpriteMaterial({map:glowTex,color,transparent:true,opacity,blending:THREE.AdditiveBlending,depthWrite:false});const s=new THREE.Sprite(m);s.scale.setScalar(scale);return s;}

/* ==================== ГЕРОЙ / СКИНЫ ==================== */
const SKINS=(Array.isArray(window.SKINS)&&window.SKINS.length)?window.SKINS:[{id:'wanderer',colors:{helmet:'#15151c',eyes:'#ff2a1a',jacket:'#4a7c33',pants:'#4a3222',boots:'#2b1c12',scarf:'#f2e3c2',pack:'#6b4a33'},glow:2}];
const M={helmet:new THREE.MeshLambertMaterial({color:0x15151c}),eyes:new THREE.MeshLambertMaterial({color:0xff2a1a,emissive:0xff2a1a,emissiveIntensity:2}),jacket:new THREE.MeshLambertMaterial({color:0x4a7c33}),pants:new THREE.MeshLambertMaterial({color:0x4a3222}),boots:new THREE.MeshLambertMaterial({color:0x2b1c12}),scarf:new THREE.MeshLambertMaterial({color:0xf2e3c2}),pack:new THREE.MeshLambertMaterial({color:0x6b4a33})};
function makeLimb(w,h,d,mat,x,y,z){const p=new THREE.Group();p.position.set(x,y,z);const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.y=-h/2+.05;m.castShadow=true;p.add(m);return p;}
const hero=new THREE.Group();
{
  const body=new THREE.Mesh(new THREE.BoxGeometry(.78,1.05,.5),M.jacket);body.position.y=1.5;body.castShadow=true;hero.add(body);
  const belt=new THREE.Mesh(new THREE.BoxGeometry(.8,.12,.52),M.boots);belt.position.y=1.02;hero.add(belt);
  const pack=new THREE.Mesh(new THREE.BoxGeometry(.5,.6,.24),M.pack);pack.position.set(0,1.55,-.38);pack.castShadow=true;hero.add(pack);
  const scarf=new THREE.Mesh(new THREE.BoxGeometry(.84,.22,.56),M.scarf);scarf.position.y=2.06;hero.add(scarf);
  const head=new THREE.Mesh(new THREE.SphereGeometry(.42,18,14),M.helmet);head.position.y=2.5;head.castShadow=true;hero.add(head);
  [-.16,.16].forEach(ex=>{const e=new THREE.Mesh(new THREE.SphereGeometry(.09,8,8),M.eyes);e.position.set(ex,2.54,.36);hero.add(e);});
  const eyeLight=new THREE.PointLight(0xff4433,1,4);eyeLight.position.set(0,2.5,.5);hero.add(eyeLight);
  const lantern=new THREE.PointLight(0xffc46b,0,9);lantern.position.set(.6,1.6,.4);hero.add(lantern);
  const legL=makeLimb(.24,.85,.26,M.pants,-.19,.98,0),legR=makeLimb(.24,.85,.26,M.pants,.19,.98,0);
  [legL,legR].forEach(l=>{const b=new THREE.Mesh(new THREE.BoxGeometry(.28,.16,.4),M.boots);b.position.set(0,-.82,.06);b.castShadow=true;l.add(b);});
  const armL=makeLimb(.22,.78,.26,M.jacket,-.52,1.92,0),armR=makeLimb(.22,.78,.26,M.jacket,.52,1.92,0);
  [armL,armR].forEach(a=>{const m=new THREE.Mesh(new THREE.SphereGeometry(.13,8,8),M.scarf);m.position.y=-.72;a.add(m);});
  const tail=new THREE.Group();tail.position.set(.24,2.02,-.26);const tm=new THREE.Mesh(new THREE.BoxGeometry(.2,.68,.06),M.scarf);tm.position.y=-.32;tm.castShadow=true;tail.add(tm);
  hero.add(legL,legR,armL,armR,tail);hero.userData={body,legL,legR,armL,armR,tail,eyeLight,lantern};
}
hero.position.set(player.x,0,player.z);hero.rotation.y=player.facing;scene.add(hero);
let currentSkin=store.get('rpg_skin','wanderer');
function applySkin(id){const s=SKINS.find(x=>x.id===id)||SKINS[0];currentSkin=s.id;store.set('rpg_skin',s.id);for(const k in M)if(s.colors[k])M[k].color.set(s.colors[k]);M.eyes.emissive.set(s.colors.eyes||'#ff2a1a');M.eyes.emissiveIntensity=s.glow??2;hero.userData.eyeLight.color.set(s.colors.eyes||'#ff2a1a');}
applySkin(currentSkin);

/* ==================== ЧАСТИЦЫ ==================== */
const P_MAX=220,pPos=new Float32Array(P_MAX*3),pCol=new Float32Array(P_MAX*3),pVel=new Float32Array(P_MAX*3),pLife=new Float32Array(P_MAX),pMax=new Float32Array(P_MAX),pGrav=new Float32Array(P_MAX),pBase=new Float32Array(P_MAX*3);
for(let i=0;i<P_MAX;i++)pPos[i*3+1]=-999;
const pGeo=new THREE.BufferGeometry();pGeo.setAttribute('position',new THREE.BufferAttribute(pPos,3));pGeo.setAttribute('color',new THREE.BufferAttribute(pCol,3));
const particles=new THREE.Points(pGeo,new THREE.PointsMaterial({map:glowTex,size:9,sizeAttenuation:false,vertexColors:true,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));
particles.frustumCulled=false;scene.add(particles);let pCursor=0;const tmpC=new THREE.Color();
function burst(x,y,z,color,count,speed,grav,life){tmpC.set(color);for(let n=0;n<count;n++){const i=pCursor;pCursor=(pCursor+1)%P_MAX;const a=Math.random()*TAU,up=Math.random();pPos[i*3]=x;pPos[i*3+1]=y;pPos[i*3+2]=z;pVel[i*3]=Math.cos(a)*speed*(.3+Math.random()*.7);pVel[i*3+1]=up*speed;pVel[i*3+2]=Math.sin(a)*speed*(.3+Math.random()*.7);pLife[i]=pMax[i]=life*(.6+Math.random()*.6);pGrav[i]=grav;pBase[i*3]=tmpC.r;pBase[i*3+1]=tmpC.g;pBase[i*3+2]=tmpC.b;}}
function updateParticles(dt){for(let i=0;i<P_MAX;i++){if(pLife[i]<=0)continue;pLife[i]-=dt;if(pLife[i]<=0){pPos[i*3+1]=-999;pCol[i*3]=pCol[i*3+1]=pCol[i*3+2]=0;continue;}pVel[i*3+1]-=pGrav[i]*dt;pPos[i*3]+=pVel[i*3]*dt;pPos[i*3+1]+=pVel[i*3+1]*dt;pPos[i*3+2]+=pVel[i*3+2]*dt;const f=pLife[i]/pMax[i];pCol[i*3]=pBase[i*3]*f;pCol[i*3+1]=pBase[i*3+1]*f;pCol[i*3+2]=pBase[i*3+2]*f;}pGeo.attributes.position.needsUpdate=true;pGeo.attributes.color.needsUpdate=true;}

/* ==================== ГЕОМЕТРИИ ==================== */
const G={trunk:new THREE.CylinderGeometry(.2,.3,1.4,7),cone:[new THREE.ConeGeometry(1.5,1.7,7),new THREE.ConeGeometry(1.15,1.45,7),new THREE.ConeGeometry(.78,1.2,7)],rock:new THREE.DodecahedronGeometry(1,0),bush:new THREE.SphereGeometry(.7,8,6),ore:new THREE.DodecahedronGeometry(.8,0),crystal:new THREE.OctahedronGeometry(.6,0),relic:new THREE.BoxGeometry(.8,1.2,.8),grass:new THREE.ConeGeometry(.06,.38,5)};
const MAT={trunk:new THREE.MeshLambertMaterial({color:0x6b4a33}),leaf:new THREE.MeshLambertMaterial({color:0x2f7a44}),rock:new THREE.MeshLambertMaterial({color:0x7d8a77}),bush:new THREE.MeshLambertMaterial({color:0x3f8f4f}),ore:new THREE.MeshLambertMaterial({color:0x5a5a66}),crystal:new THREE.MeshLambertMaterial({color:0x9ff5e2,emissive:0x2bd6b0,emissiveIntensity:1.2}),relic:new THREE.MeshLambertMaterial({color:0xb48cff,emissive:0xb48cff,emissiveIntensity:.8}),wood:new THREE.MeshLambertMaterial({color:0x8a5a3a}),npc:new THREE.MeshLambertMaterial({color:0x3a7ca5}),grass:new THREE.MeshLambertMaterial({color:0xffffff})};

/* ==================== ПОСТРОЙКА ЛОКАЦИИ ==================== */
function buildLocation(id){
  const loc=D.locations[id];const rnd=mulberry32(id.length*999+S.level);
  if(world)scene.remove(world.group);
  const group=new THREE.Group();scene.add(group);
  const W={group,nodes:[],enemies:[],features:[],hazards:[],respawns:[],loc};
  const geo=new THREE.PlaneGeometry(90,90,40,40),pos=geo.attributes.position,colors=[];
  const cA=new THREE.Color(loc.ground[0]),cB=new THREE.Color(loc.ground[1]),tmp=new THREE.Color();
  for(let i=0;i<pos.count;i++){const x=pos.getX(i),y=pos.getY(i);const n=(Math.sin(x*.3)*Math.cos(y*.27)+1)/2;tmp.copy(cA).lerp(cB,n);colors.push(tmp.r,tmp.g,tmp.b);}
  geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  const ground=new THREE.Mesh(geo,new THREE.MeshLambertMaterial({vertexColors:true}));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;group.add(ground);
  scene.fog.color.set(loc.skyDay);

  function addNode(type,x,z,def){
    const g=new THREE.Group();
    if(type==='tree'){const t=new THREE.Mesh(G.trunk,MAT.trunk);t.position.y=.7;t.castShadow=true;g.add(t);G.cone.forEach((cg,i)=>{const m=new THREE.Mesh(cg,MAT.leaf);m.position.y=1.7+i;m.castShadow=true;g.add(m);});}
    else if(type==='rock'||type==='ore'){const m=new THREE.Mesh(type==='ore'?G.ore:G.rock,type==='ore'?MAT.ore:MAT.rock);m.position.y=.5;m.scale.set(1,.7,1);m.castShadow=true;g.add(m);if(type==='ore'){const c=new THREE.Mesh(G.crystal,MAT.crystal);c.scale.setScalar(.35);c.position.y=1;c.rotation.y=.5;g.add(c);}}
    else if(type==='bush'){for(let i=0;i<3;i++){const m=new THREE.Mesh(G.bush,MAT.bush);m.scale.setScalar(.5+i*.1);m.position.set((i-1)*.4,.4,0);m.castShadow=true;g.add(m);}}
    else if(type==='crystal'){const m=new THREE.Mesh(G.crystal,MAT.crystal);m.position.y=.8;m.scale.y=1.5;m.castShadow=true;g.add(m);g.add(glowSprite(0x4de3c1,2,.4));}
    else if(type==='relic'){const m=new THREE.Mesh(G.relic,MAT.relic);m.position.y=.6;m.castShadow=true;g.add(m);g.add(glowSprite(0xb48cff,2.4,.5));}
    g.position.set(x,0,z);group.add(g);
    W.nodes.push({type,x,z,def,group:g,active:true,respawn:0});
  }
  function randomPos(minR,maxR){let x,z,tries=0;do{const a=rnd()*TAU,r=minR+rnd()*(maxR-minR);x=Math.cos(a)*r;z=Math.sin(a)*r;tries++;}while(tries<40&&Math.hypot(x,z)<6);return{x,z};}
  loc.nodes.forEach(def=>{for(let i=0;i<def.count;i++){const p=randomPos(7,36);addNode(def.type,p.x,p.z,def);}});

  /* Особенности стартовой локации */
  if(id==='valley'){
    const bench=new THREE.Mesh(new THREE.BoxGeometry(2,.8,1),MAT.wood);bench.position.set(-4,.4,0);bench.castShadow=true;group.add(bench);
    W.features.push({type:'workbench',x:-4,z:0,r:2.4,label:'Верстак — крафт',action:()=>openPanel('craft')});
    const npc=new THREE.Group();const nb=new THREE.Mesh(new THREE.BoxGeometry(.7,1.2,.5),MAT.npc);nb.position.y=1;npc.add(nb);const nh=new THREE.Mesh(new THREE.SphereGeometry(.3,12,10),new THREE.MeshLambertMaterial({color:0xf2c9a0}));nh.position.y=1.8;npc.add(nh);npc.position.set(4,0,0);group.add(npc);
    W.features.push({type:'merchant',x:4,z:0,r:2.4,label:'Торговец Марк — торговля',action:()=>openPanel('trade')});
    const fire=new THREE.Mesh(new THREE.ConeGeometry(.4,1,8),new THREE.MeshBasicMaterial({color:0xff9f43,transparent:true,opacity:.85}));fire.position.set(0,.5,-3);group.add(fire);const fl=new THREE.PointLight(0xff9f43,2,10);fl.position.set(0,1,-3);group.add(fl);
    W.features.push({type:'campfire',x:0,z:-3,r:2,label:'Костёр — приготовить еду',action:()=>{toast('🔥 Готовьте жареную рыбу и суп через крафт.');openPanel('craft');}});
    const tent=new THREE.Mesh(new THREE.ConeGeometry(1.6,2,4),new THREE.MeshLambertMaterial({color:0xc96f3b}));tent.position.set(0,1,4);tent.rotation.y=Math.PI/4;tent.castShadow=true;group.add(tent);
    W.features.push({type:'tent',x:0,z:4,r:2.4,label:'Палатка — отдохнуть',action:()=>{S.hp=stats().maxHp;S.stamina=stats().maxStamina;dayTime=.3;toast('⛺ Вы отдохнули до утра.');}});
  }

  /* Враги */
  loc.enemies.forEach(def=>{for(let i=0;i<def.count;i++){const p=randomPos(10,36);spawnEnemy(def.type,p.x,p.z,W,rnd);}});

  /* Опасности */
  if(loc.hazard==='poison'){
    for(let i=0;i<7;i++){const p=randomPos(8,34);const m=new THREE.Mesh(new THREE.CircleGeometry(2+rnd()*2,20),new THREE.MeshBasicMaterial({color:0x5aff6a,transparent:true,opacity:.22,side:THREE.DoubleSide}));m.rotation.x=-Math.PI/2;m.position.set(p.x,.04,p.z);group.add(m);W.hazards.push({type:'poison',x:p.x,z:p.z,r:2+rnd()*2});}
  }
  if(loc.hazard==='arcane'){
    for(let i=0;i<5;i++){const p=randomPos(8,34);const m=new THREE.Mesh(new THREE.RingGeometry(1.4,1.8,24),new THREE.MeshBasicMaterial({color:0xb48cff,transparent:true,opacity:.35,side:THREE.DoubleSide}));m.rotation.x=-Math.PI/2;m.position.set(p.x,.05,p.z);group.add(m);W.hazards.push({type:'arcane',x:p.x,z:p.z,r:1.8,phase:rnd()*TAU});}
  }

  /* Трава */
  const grass=new THREE.InstancedMesh(G.grass,MAT.grass,240);const mtx=new THREE.Matrix4(),q=new THREE.Quaternion(),sc=new THREE.Vector3(),p=new THREE.Vector3(),col=new THREE.Color();
  for(let i=0;i<240;i++){const a=rnd()*TAU,r=Math.sqrt(rnd())*40;p.set(Math.cos(a)*r,.17,Math.sin(a)*r);q.setFromEuler(new THREE.Euler((rnd()-.5)*.3,rnd()*6,(rnd()-.5)*.3));sc.setScalar(.7+rnd());mtx.compose(p,q,sc);grass.setMatrixAt(i,mtx);grass.setColorAt(i,col.setHSL(.3+rnd()*.06,.5,.3+rnd()*.12));}
  grass.instanceMatrix.needsUpdate=true;if(grass.instanceColor)grass.instanceColor.needsUpdate=true;group.add(grass);
  return W;
}
function spawnEnemy(type,x,z,W,rnd){
  const def=D.enemies[type];const g=new THREE.Group();
  const mat=new THREE.MeshLambertMaterial({color:def.color,emissive:def.color,emissiveIntensity:.35});
  const body=new THREE.Mesh(new THREE.SphereGeometry(def.size*.5,12,10),mat);body.position.y=def.size*.6;body.castShadow=true;g.add(body);
  const eye=new THREE.Mesh(new THREE.SphereGeometry(def.size*.12,8,8),new THREE.MeshLambertMaterial({color:0xff2a1a,emissive:0xff2a1a,emissiveIntensity:2}));eye.position.set(0,def.size*.7,def.size*.45);g.add(eye);
  g.add(glowSprite(def.color,def.size*2.4,.3));g.position.set(x,0,z);W.group.add(g);
  W.enemies.push({type,def,group:g,x,z,hp:def.hp,maxHp:def.hp,cd:0,phase:rnd()*TAU,tx:x,tz:z,retarget:0,alive:true});
}

/* ==================== ДОБЫЧА / ВРАГИ ==================== */
function gather(node){
  const st=stats();const def=node.def;
  if(def.tool&&st.gatherType!==def.tool&&def.minPower>0){toast('Нужен инструмент: '+({axe:'топор',pick:'кирка',sickle:'серп'}[def.tool]));return;}
  if(def.minPower>0&&st.gatherPower<def.minPower){toast('Инструмент слишком слаб (нужна сила '+def.minPower+')');return;}
  const bonusMult=1+st.luck*.01;
  let baseN=rndInt(def.base.min,def.base.max);
  if(def.tool&&st.gatherType===def.tool)baseN+=Math.max(0,st.gatherPower-1);
  addItem(def.base.item,baseN);S.counters.gather[def.base.item]=(S.counters.gather[def.base.item]||0)+baseN;
  let got=[item(def.base.item).icon+' ×'+baseN];
  def.bonus.forEach(b=>{if(Math.random()<b.chance*bonusMult){addItem(b.item,1);S.counters.gather[b.item]=(S.counters.gather[b.item]||0)+1;got.push(item(b.item).icon);}});
  node.active=false;node.group.visible=false;node.respawn=35+Math.random()*25;
  addXP(4+def.minPower*3);Sfx.pickup();toast('Добыто: '+got.join(' '));burst(node.x,.8,node.z,0xffd166,12,2.5,3,.7);
  renderAll();checkTutorial();
}
function damageEnemy(e,dmg){
  e.hp-=dmg;burst(e.x,1,e.z,0xff5a5f,10,3,4,.6);Sfx.hit();
  if(e.hp<=0){
    e.alive=false;e.group.visible=false;
    const st=stats();let got=[];
    e.def.loot.forEach(l=>{if(Math.random()<l.chance*(1+st.luck*.01)){addItem(l.item,1);got.push(item(l.item).icon);}});
    const coins=rndInt(e.def.coins[0],e.def.coins[1]);S.coins+=coins;addXP(e.def.xp);
    toast('☠️ '+e.def.name+' побеждён: '+coins+' 🪙 '+(got.join(' ')||'без трофеев'));
    burst(e.x,1,e.z,0xb48cff,20,4,3,1);
    world.respawns.push({type:'enemy',t:45,data:{type:e.type,x:e.x,z:e.z}});
    renderAll();
  }
}
function playerAttack(){
  if(attackCd>0)return;
  const st=stats();attackCd=.55;
  let target=null,best=2.6;
  for(const e of world.enemies){if(!e.alive)continue;const d=Math.hypot(e.x-player.x,e.z-player.z);if(d<best){best=d;target=e;}}
  hero.userData.armR.rotation.x=-2.2;
  if(target){damageEnemy(target,st.atk+rndInt(0,3));player.facing=Math.atan2(target.x-player.x,target.z-player.z);}
  else{Sfx.interact();toast('Удар в пустоту. Подойдите к врагу ближе.');}
}
function hurtPlayer(dmg,cause){
  if(player.invuln>0||state!=='playing')return;
  const st=stats();const real=Math.max(1,Math.round(dmg-st.def*.45));
  S.hp-=real;player.invuln=.7;Sfx.hurt();burst(player.x,1.4,player.z,0xff5a5f,14,3,4,.7);
  toast('-'+real+' HP · '+cause);
  if(S.hp<=0)die(cause);
}
function die(cause){
  S.hp=0;state='dead';Sfx.death();
  const lost=Math.floor(S.coins*.15);S.coins-=lost;
  $('deathText').textContent='Причина: '+cause+'. Потеряно '+lost+' монет. Снаряжение сохранено.';
  openPanel('death');
}
function respawn(){
  S.location='valley';S.visited.valley=true;S.hp=stats().maxHp;S.stamina=stats().maxStamina;S.poison=0;
  player.x=0;player.z=5;player.y=0;player.vx=player.vz=player.vy=0;
  world=buildLocation('valley');state='playing';closePanel();toast('Вы вернулись в безопасную долину.');
}
function travel(id){
  if(!locationUnlocked(id))return;
  if(id===S.location)return;
  $('transitionText').textContent=D.locations[id].name;
  $('transition').classList.add('show');Sfx.travel();
  setTimeout(()=>{
    S.location=id;S.visited[id]=true;player.x=0;player.z=5;player.y=0;player.vx=player.vz=player.vy=0;
    world=buildLocation(id);dayTime=.32;checkTutorial();renderAll();save();
    $('transition').classList.remove('show');toast('📍 '+D.locations[id].name);
  },600);
}

/* ==================== ВЗАИМОДЕЙСТВИЯ ==================== */
function updateInteractions(){
  nearestInteract=null;let best=1e9;
  for(const n of world.nodes){if(!n.active)continue;const d=Math.hypot(n.x-player.x,n.z-player.z);if(d<n.def.r+2.2&&d<best){best=d;nearestInteract={kind:'node',obj:n,label:nodeLabel(n)};}}
  for(const f of world.features){const d=Math.hypot(f.x-player.x,f.z-player.z);if(d<f.r&&d<best){best=d;nearestInteract={kind:'feature',obj:f,label:f.label};}}
  if(nearestInteract){$('promptText').textContent=nearestInteract.label;$('prompt').classList.add('show');$('btnInteract').classList.add('show');}
  else{$('prompt').classList.remove('show');$('btnInteract').classList.remove('show');}
  if(interactQueued){interactQueued=false;if(nearestInteract){Sfx.interact();if(nearestInteract.kind==='node')gather(nearestInteract.obj);else nearestInteract.obj.action();}}
}
function nodeLabel(n){
  const names={tree:'Дерево',rock:'Камень',bush:'Куст',ore:'Жила',crystal:'Кристалл',relic:'Реликвия'};
  const st=stats();
  if(n.def.tool&&n.def.minPower>0&&(st.gatherType!==n.def.tool||st.gatherPower<n.def.minPower))return names[n.type]+' — нужен '+({axe:'топор',pick:'кирка',sickle:'серп'}[n.def.tool])+' (сила '+n.def.minPower+')';
  return names[n.type]+' — добыть '+item(n.def.base.item).name;
}

/* ==================== ОБНОВЛЕНИЕ МИРА ==================== */
function updateWorld(dt,t){
  for(const n of world.nodes){if(!n.active){n.respawn-=dt;if(n.respawn<=0){n.active=true;n.group.visible=true;}}}
  const st=stats();
  for(const e of world.enemies){
    if(!e.alive)continue;
    e.cd=Math.max(0,e.cd-dt);
    const dp=Math.hypot(e.x-player.x,e.z-player.z);
    if(dp<9){e.tx=player.x;e.tz=player.z;}
    else{e.retarget-=dt;if(e.retarget<=0){e.retarget=2+Math.random()*3;const a=Math.random()*TAU,r=5+Math.random()*12;e.tx=e.x+Math.cos(a)*r;e.tz=e.z+Math.sin(a)*r;}}
    const dx=e.tx-e.x,dz=e.tz-e.z,d=Math.hypot(dx,dz)||1;
    if(d>.8){e.x+=dx/d*e.def.speed*dt;e.z+=dz/d*e.def.speed*dt;}
    e.group.position.set(e.x,Math.sin(t*3+e.phase)*.1,e.z);e.group.rotation.y=Math.atan2(dx,dz);
    if(dp<1.2&&e.cd<=0){e.cd=1.1;hurtPlayer(e.def.atk,e.def.name);if(e.def.poison)S.poison=Math.max(S.poison,6);}
  }
  for(let i=world.respawns.length-1;i>=0;i--){const r=world.respawns[i];r.t-=dt;if(r.t<=0){if(r.type==='enemy')spawnEnemy(r.data.type,r.data.x,r.data.z,world,Math.random);world.respawns.splice(i,1);}}
  for(const h of world.hazards){
    const d=Math.hypot(h.x-player.x,h.z-player.z);
    if(h.type==='poison'&&d<h.r){S.poison=Math.max(S.poison,5);}
    if(h.type==='arcane'){const pulse=(Math.sin(t*2+h.phase)+1)/2;if(d<h.r&&pulse>.8)hurtPlayer(8,'Лунная вспышка');}
  }
  if(world.loc.hazard==='cold'){
    const warmth=st.warmth+(S.warmthBuff>0?40:0);
    if(warmth<25){S.stamina=Math.max(0,S.stamina-6*dt);if(Math.random()<dt*.5)hurtPlayer(3,'Холод');}
  }
  if(S.poison>0){S.poison-=dt;const res=clamp(st.poisonResist,0,90);const dmg=2*(1-res/100)*dt;S.hp-=dmg;if(S.hp<=0)die('Яд');}
  if(S.warmthBuff>0)S.warmthBuff-=dt;
  if(attackCd>0)attackCd-=dt;
  if(player.invuln>0)player.invuln-=dt;
}

/* ==================== ИГРОК ==================== */
const camFwd=new THREE.Vector3(),camRight=new THREE.Vector3(),UP=new THREE.Vector3(0,1,0);
function updatePlayer(dt,t){
  let ix=(keys.KeyD||keys.ArrowRight?1:0)-(keys.KeyA||keys.ArrowLeft?1:0)+joy.x;
  let iz=(keys.KeyS||keys.ArrowDown?1:0)-(keys.KeyW||keys.ArrowUp?1:0)+joy.y;
  const il=Math.hypot(ix,iz);if(il>1){ix/=il;iz/=il;}
  const st=stats();
  const wantSprint=(keys.ShiftLeft||keys.ShiftRight||sprintTouch)&&il>0&&S.stamina>2;
  player.sprinting=wantSprint;
  if(wantSprint)S.stamina=clamp(S.stamina-18*dt,0,st.maxStamina);
  else S.stamina=clamp(S.stamina+9*dt,0,st.maxStamina);
  const spd=(wantSprint?7.4:4.3)+st.speed;
  camera.getWorldDirection(camFwd);camFwd.y=0;camFwd.normalize();camRight.crossVectors(camFwd,UP).normalize();
  const wx=camRight.x*ix+camFwd.x*-iz,wz=camRight.z*ix+camFwd.z*-iz;
  const k=1-Math.exp(-12*dt);player.vx+=(wx*spd-player.vx)*k;player.vz+=(wz*spd-player.vz)*k;
  player.x+=player.vx*dt;player.z+=player.vz*dt;player.moving=Math.hypot(player.vx,player.vz)>.5;
  const dc=Math.hypot(player.x,player.z);if(dc>40){player.x*=40/dc;player.z*=40/dc;}
  if(jumpQueued&&player.grounded){player.vy=9.4;player.grounded=false;Sfx.jump();burst(player.x,.15,player.z,0xc9b98a,8,2,4,.5);}
  jumpQueued=false;
  if(!player.grounded){player.vy-=24*dt;player.y+=player.vy*dt;if(player.y<=0){player.y=0;player.grounded=true;if(player.vy<-4){Sfx.land();player.landT=.18;}player.vy=0;}}
  if(player.moving){const target=Math.atan2(player.vx,player.vz);let d=target-player.facing;d=Math.atan2(Math.sin(d),Math.cos(d));player.facing+=d*Math.min(1,dt*12);}
  const P=hero.userData,runF=player.sprinting?1.5:1;if(player.moving&&player.grounded)player.walkPhase+=dt*9*runF;const s=Math.sin(player.walkPhase);
  if(player.grounded){const amp=player.moving?(player.sprinting?.85:.55):0;P.legL.rotation.x=s*amp;P.legR.rotation.x=-s*amp;P.armL.rotation.x=-s*amp*.8;P.armR.rotation.x=s*amp*.8;if(player.moving&&player.prevSin>0&&s<=0)Sfx.step();player.prevSin=s;}
  else{P.legL.rotation.x=.55;P.legR.rotation.x=-.35;P.armL.rotation.x=-2.5;P.armR.rotation.x=-2.5;}
  P.body.scale.y=1+Math.sin(t*2.2)*.015;P.tail.rotation.x=-.25-(player.moving?(player.sprinting?.75:.4):0)+Math.sin(t*6)*.12;
  if(player.landT>0){player.landT-=dt;const q=Math.max(player.landT,0)/.18;hero.scale.set(1+q*.12,1-q*.15,1+q*.12);}else hero.scale.set(1,1,1);
  hero.position.set(player.x,player.y+(player.moving&&player.grounded?Math.abs(s)*.07:0),player.z);hero.rotation.y=player.facing;
  hero.userData.lantern.intensity=st.light*.03;
  hero.visible=player.invuln>0?Math.floor(t*12)%2===0:true;
}

/* ==================== КАМЕРА / НЕБО ==================== */
const camTarget=new THREE.Vector3();
function updateCamera(dt){
  camYaw+=(camYawT-camYaw)*Math.min(1,dt*8);const dist=22;
  camTarget.set(player.x+Math.sin(camYaw)*dist,18,player.z+Math.cos(camYaw)*dist);
  camera.position.lerp(camTarget,1-Math.exp(-6*dt));camera.lookAt(player.x,player.y+1,player.z);
  const aspect=innerWidth/innerHeight;camera.left=-frustum*aspect/2;camera.right=frustum*aspect/2;camera.top=frustum/2;camera.bottom=-frustum/2;camera.updateProjectionMatrix();
  sun.position.set(player.x+12,18,player.z+8);sun.target.position.set(player.x,0,player.z);
}
let skyTimer=0;
function updateSky(dt){
  dayTime=(dayTime+dt/300)%1;const elev=Math.sin((dayTime-.25)*TAU),day=clamp(elev*1.5+.12,0,1);
  sun.intensity=.18+day*1.4;sun.color.set(0x7f9fd9).lerp(new THREE.Color(0xffd9a0),day);hemi.intensity=.22+day*.4;
  const loc=D.locations[S.location];const top=new THREE.Color(loc.skyNight).lerp(new THREE.Color(0x6db3d9),day);
  skyTimer-=dt;if(skyTimer<=0){skyTimer=.5;const c=document.createElement('canvas');c.width=256;c.height=256;const g=c.getContext('2d');const gr=g.createLinearGradient(0,0,0,256);gr.addColorStop(0,'#'+top.getHexString());gr.addColorStop(1,'#'+new THREE.Color(loc.skyDay).lerp(new THREE.Color(0xff9f43),clamp(1-Math.abs(elev)*3,0,1)*.4).getHexString());g.fillStyle=gr;g.fillRect(0,0,256,256);const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;scene.background=tex;}
}

/* ==================== ВВОД ==================== */
window.addEventListener('keydown',e=>{
  if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault();
  keys[e.code]=true;if(e.repeat)return;
  if(e.code==='Space'&&state==='playing'&&!activePanel)jumpQueued=true;
  if(e.code==='KeyE'&&state==='playing'&&!activePanel)interactQueued=true;
  if(e.code==='KeyF'&&state==='playing'&&!activePanel)attackQueued=true;
  if(e.code==='KeyI'&&state!=='intro'&&state!=='dead')openPanel(activePanel==='inv'?null:'inv');
  if(e.code==='KeyM'&&state!=='intro'&&state!=='dead'){selectedMap=S.location;openPanel(activePanel==='map'?null:'map');}
  if(e.code==='Escape'){if(activePanel&&activePanel!=='intro'&&activePanel!=='death')closePanel();else if(state==='playing'){state='paused';openPanel('pause');}else if(state==='paused'){state='playing';closePanel();}}
});
window.addEventListener('keyup',e=>{keys[e.code]=false;});
$('btnStart').addEventListener('click',()=>{if(hasSave){S=freshState();store.del(SAVE_KEY);}world=buildLocation('valley');startGame();});
$('btnContinue').addEventListener('click',()=>{world=buildLocation(S.location);startGame();});
$('btnResume').addEventListener('click',()=>{state='playing';closePanel();});
$('btnNewGame').addEventListener('click',()=>{S=freshState();store.del(SAVE_KEY);world=buildLocation('valley');state='playing';closePanel();toast('Новая игра.');});
$('btnRespawn').addEventListener('click',respawn);
$('btnInv').addEventListener('click',()=>openPanel(activePanel==='inv'?null:'inv'));
$('btnMap').addEventListener('click',()=>{selectedMap=S.location;openPanel(activePanel==='map'?null:'map');});
$('btnSound').addEventListener('click',()=>{Sfx.ensure();Sfx.setMuted(!Sfx.muted);});
$('btnPause').addEventListener('click',()=>{if(state==='playing'){state='paused';openPanel('pause');}else if(state==='paused'){state='playing';closePanel();}});
$('btnInvClose').addEventListener('click',closePanel);
$('btnCraftClose').addEventListener('click',closePanel);
$('btnTradeClose').addEventListener('click',closePanel);
$('btnMapClose').addEventListener('click',closePanel);
$('btnTravel').addEventListener('click',()=>{closePanel();travel(selectedMap);});
document.querySelectorAll('.trade-tab').forEach(b=>b.addEventListener('click',()=>{tradeTab=b.dataset.tab;document.querySelectorAll('.trade-tab').forEach(x=>x.classList.toggle('active',x===b));renderTrade();}));
$('btnJump').addEventListener('pointerdown',e=>{e.preventDefault();jumpQueued=true;});
$('btnInteract').addEventListener('pointerdown',e=>{e.preventDefault();interactQueued=true;});
$('btnAttack').addEventListener('pointerdown',e=>{e.preventDefault();attackQueued=true;});
const spBtn=$('btnSprint');spBtn.addEventListener('pointerdown',e=>{e.preventDefault();sprintTouch=true;});
['pointerup','pointercancel','pointerleave'].forEach(ev=>spBtn.addEventListener(ev,()=>sprintTouch=false));
const joyBase=$('joyBase'),joyKnob=$('joyKnob');
function joyMove(e){const r=joyBase.getBoundingClientRect();let dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2);const d=Math.hypot(dx,dy),max=40;if(d>max){dx=dx/d*max;dy=dy/d*max;}joy.x=dx/max;joy.y=dy/max;joyKnob.style.transform=`translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;}
joyBase.addEventListener('pointerdown',e=>{joy.id=e.pointerId;joyBase.setPointerCapture(e.pointerId);joyMove(e);});
joyBase.addEventListener('pointermove',e=>{if(e.pointerId===joy.id)joyMove(e);});
function joyEnd(e){if(e.pointerId===joy.id){joy.id=null;joy.x=joy.y=0;joyKnob.style.transform='translate(-50%,-50%)';}}
joyBase.addEventListener('pointerup',joyEnd);joyBase.addEventListener('pointercancel',joyEnd);
let dragging=false,lastX=0;
renderer.domElement.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'){dragging=true;lastX=e.clientX;}});
window.addEventListener('pointermove',e=>{if(dragging){camYawT-=(e.clientX-lastX)*.006;lastX=e.clientX;}});
window.addEventListener('pointerup',()=>dragging=false);
renderer.domElement.addEventListener('wheel',e=>{e.preventDefault();frustum=clamp(frustum+e.deltaY*.01,7,15);},{passive:false});
window.addEventListener('resize',()=>renderer.setSize(innerWidth,innerHeight));
window.addEventListener('blur',()=>{if(state==='playing'&&!activePanel){state='paused';openPanel('pause');}});

/* ==================== ЦИКЛ ==================== */
const clock=new THREE.Clock();let firstFrame=true;
function animate(){
  requestAnimationFrame(animate);const dt=Math.min(clock.getDelta(),.05),t=clock.elapsedTime;
  if(state==='playing'&&!activePanel){
    S.playTime+=dt;updatePlayer(dt,t);updateInteractions();updateWorld(dt,t);
    if(attackQueued){attackQueued=false;playerAttack();}
    renderHUD();renderQuest();saveTimer+=dt;if(saveTimer>3){saveTimer=0;save();}
  } else if(state==='intro'){camYawT+=dt*.05;}
  updateSky(dt);updateParticles(dt);updateCamera(dt);renderer.render(scene,camera);
  if(firstFrame){firstFrame=false;window.__fmReady=true;$('boot').classList.add('hide');setTimeout(()=>$('boot').remove(),600);}
}

/* ==================== СТАРТ ==================== */
if(hasSave){$('btnContinue').style.display='';$('introSaveInfo').textContent='Сохранение: уровень '+S.level+' · '+S.coins+' монет · '+D.locations[S.location].name;}
world=buildLocation(S.location);
player.x=0;player.z=5;
openPanel('intro');
renderAll();
animate();
