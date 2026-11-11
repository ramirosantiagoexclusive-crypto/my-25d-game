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
const SAVE_KEY='rpg_valley_save_v7';
const XP_TABLE=[0,60,160,320,560,900,1400,2100,3000];
const WORLD_R=100, SAFE_R=118;
const GATHER_DUR=.55, ACTION_CD=.62, MAX_ACTIVE_DROPS=120, MAX_YIELD=6;
const BASE_CAPACITY=60, CAP_PER_LEVEL=8;
function freshState(){
  return {
    hp:100, stamina:100, coins:20, xp:0, level:1,
    inventory:{}, equipment:{tool:null,weapon:null,armor:null,charm:null,light:null},
    buffs:{luck:0,power:0,defense:0},
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
function ensureCounters(){ if(!S.counters)S.counters={}; ['gather','sold','bought'].forEach(k=>{if(!S.counters[k])S.counters[k]={};}); }
function normalizeState(){
  const f=freshState();
  S.inventory=S.inventory||{};
  S.equipment=Object.assign(f.equipment,S.equipment||{});
  S.buffs=Object.assign(f.buffs,S.buffs||{});
  S.visited=Object.assign(f.visited,S.visited||{});
  ensureCounters();
  if(typeof S.tutorialStep!=='number')S.tutorialStep=0;
  if(typeof S.tutorialDone!=='boolean')S.tutorialDone=false;
  if(!D.locations[S.location])S.location='valley';
  ['hp','stamina','coins','xp','level','poison','warmthBuff','playTime'].forEach(k=>{if(typeof S[k]!=='number')S[k]=f[k];});
}
normalizeState();

let world=null, state='intro', activePanel='intro';
let selectedMap='valley', tradeTab='buy', selectedInv=null;
let craftFilter='all', invFilter='all';
let toastTimer=null, saveTimer=0, hudTimer=0, skyTimer=0;
let attackQueued=false, interactQueued=false, jumpQueued=false, sprintTouch=false;
let attackCd=0, actionCd=0, dayTime=.32, nearestInteract=null, shake=0;
let uiDirty=true, lastPrompt='', travelWatchdog=null;
let harvestTimes=[], fullNoticeT=0;
const keys={}, joy={x:0,y:0,id:null};
const player={x:0,y:0,z:5,vx:0,vz:0,vy:0,grounded:true,facing:Math.PI,walkPhase:0,prevSin:0,landT:0,moving:false,sprinting:false,invuln:0,attackT:0,attackDur:.42,attackHitDone:false,attackTarget:null,gatherT:0,gatherTarget:null,gatherDone:false};

/* ==================== КАЧЕСТВО ==================== */
let quality=store.get('rpg_quality','medium');
let fps=60, fpsAcc=0, fpsFrames=0, slowTime=0;
const QUAL={
  high:  {pixel:2,   shadow:true,  grass:900, decor:260, rocks:140},
  medium:{pixel:1.5, shadow:true,  grass:520, decor:150, rocks:80},
  low:   {pixel:1,   shadow:false, grass:240, decor:70,  rocks:40}
};
function applyQuality(){
  const q=QUAL[quality];
  renderer.setPixelRatio(Math.min(devicePixelRatio,q.pixel));
  renderer.setSize(innerWidth,innerHeight);
  sun.castShadow=q.shadow;
  if(world){
    if(world.grass)world.grass.count=q.grass;
    if(world.decorTrunks)world.decorTrunks.count=q.decor;
    if(world.decorFoliage)world.decorFoliage.count=q.decor;
    if(world.decorRocks)world.decorRocks.count=q.rocks;
  }
  $('qualitySelect').value=quality;
  store.set('rpg_quality',quality);
}

/* ==================== ПРЕДМЕТЫ / ВЕС ==================== */
const ITEMS=D.items, RAR=D.rarities, CAT=D.categories;
function item(id){ return ITEMS[id]; }
function rarityColor(id){ return RAR[item(id).rarity].color; }
function catMeta(id){ return CAT[item(id).cat]||CAT.resource; }
function catBadge(id){ const c=catMeta(id);return `<span class="cat-badge" style="color:${c.color};border-color:${c.color}66;background:${c.color}14">${c.icon} ${c.name}</span>`; }
function count(id){ return S.inventory[id]||0; }
function weightOf(id,n=1){ return (item(id)?.weight||0)*n; }
function currentWeight(){ let w=0; for(const id in S.inventory) w+=weightOf(id,count(id)); return Math.round(w*10)/10; }
function capacity(){ let c=BASE_CAPACITY+(S.level-1)*CAP_PER_LEVEL; for(const sl in S.equipment){const id=S.equipment[sl];if(id&&item(id)&&item(id).capacity)c+=item(id).capacity;} return c; }
function canPickup(id,n=1){ return currentWeight()+weightOf(id,n)<=capacity()+1e-6; }
function addItem(id,n=1){ if(!item(id))return; S.inventory[id]=count(id)+n; uiDirty=true; }
function takeItem(id,n=1){ if(count(id)<n)return false; S.inventory[id]-=n; if(S.inventory[id]<=0)delete S.inventory[id]; uiDirty=true; return true; }
function equipItem(id){
  const it=item(id); if(!it||!it.slot||count(id)<=0)return;
  const old=S.equipment[it.slot]; takeItem(id,1); if(old)addItem(old,1);
  S.equipment[it.slot]=id; toast('Экипировано: '+it.name); updateHandVisual(); uiDirty=true; checkTutorial(); save();
}
function unequip(slot){ const id=S.equipment[slot]; if(!id)return; S.equipment[slot]=null; addItem(id,1); updateHandVisual(); uiDirty=true; save(); }
function stats(){
  const s={atk:2,def:0,gatherType:null,gatherPower:0,speed:0,luck:0,maxHp:100+(S.level-1)*12,maxStamina:100+(S.level-1)*6,light:0,warmth:0,poisonResist:0,coldResist:0};
  for(const slot in S.equipment){ const id=S.equipment[slot]; if(!id)continue; const it=item(id); if(!it)continue;
    for(const k of ['atk','def','speed','luck','maxStamina','light','warmth','poisonResist','coldResist']) s[k]+=it[k]||0;
    if(it.slot==='tool'){ s.gatherType=it.gatherType; s.gatherPower=it.gatherPower||1; } }
  if(S.buffs.power>0)s.atk+=S.buffs.power;
  if(S.buffs.defense>0)s.def+=S.buffs.defense;
  if(S.buffs.luck>0)s.luck+=S.buffs.luck;
  return s;
}
function addXP(n){
  S.xp+=n; let lvl=1;
  for(let i=0;i<XP_TABLE.length;i++) if(S.xp>=XP_TABLE[i]) lvl=i+1;
  if(lvl>S.level){ S.level=lvl; S.hp=stats().maxHp; toast('⭐ Уровень '+lvl+'! Вместимость рюкзака выросла.'); Sfx.level(); uiDirty=true; }
}
function useItem(id){
  const it=item(id); if(!it||!it.use||!takeItem(id,1))return;
  const st=stats();
  if(it.use.heal)S.hp=clamp(S.hp+it.use.heal,0,st.maxHp);
  if(it.use.stamina)S.stamina=clamp(S.stamina+it.use.stamina,0,st.maxStamina);
  if(it.use.curePoison)S.poison=0;
  if(it.use.buffWarmth)S.warmthBuff=60;
  if(it.use.buffLuck)S.buffs.luck=20;
  if(it.use.buffPower)S.buffs.power=10;
  if(it.use.buffDefense)S.buffs.defense=10;
  Sfx.eat(); toast('Использовано: '+it.name); uiDirty=true;
}
function sellPrice(id){ return Math.max(1,Math.floor(item(id).value*0.6)); }
function buyPrice(id){ return Math.ceil(item(id).value*2.5); }
function fullNotice(){ const now=performance.now(); if(now-fullNoticeT<2500)return; fullNoticeT=now; toast('🎒 Рюкзак полон! Продайте, съешьте или выбросьте лишнее.'); Sfx.deny(); }

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
  coin(){this.tone(800,1200,.08,'sine',.14);},swing(){this.noise(.09,1800,.12);this.tone(300,150,.1,'sine',.08);},
  chop(){this.noise(.07,900,.2);this.tone(160,90,.1,'square',.1);},
  mine(){this.noise(.06,1400,.22);this.tone(240,120,.09,'square',.1);},
  cut(){this.noise(.05,2200,.14);},
  deny(){this.tone(180,120,.12,'square',.1);},
  hit(){this.noise(.08,500,.2);this.tone(180,90,.12,'sawtooth',.12);},hurt(){this.tone(200,70,.25,'sawtooth',.18);},
  level(){[523,659,784,1047].forEach((f,i)=>setTimeout(()=>this.tone(f,f,.2,'triangle',.18),i*100));},
  death(){[330,247,196].forEach((f,i)=>setTimeout(()=>this.tone(f,f*.9,.3,'triangle',.16),i*180));},
  travel(){this.tone(200,800,.5,'sine',.15);}
};
Sfx.setMuted(Sfx.muted);

/* ==================== UI ==================== */
function toast(msg){ const el=$('toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2400); }
function lootFeed(html,color){ const feed=$('lootFeed');const div=document.createElement('div');div.className='loot-line';div.style.borderColor=color||'var(--line)';div.style.color=color||'var(--text)';div.innerHTML=html;feed.appendChild(div);while(feed.children.length>5)feed.removeChild(feed.firstChild);setTimeout(()=>{if(div.parentNode)div.parentNode.removeChild(div);},3100); }
function save(){ store.set(SAVE_KEY,S); }

/* Индикатор веса рюкзака */
const capStyle=document.createElement('style');
capStyle.textContent=`
#capChip{gap:7px}
#capChip.full{border-color:var(--danger);box-shadow:0 0 14px rgba(255,90,95,.35)}
#capChip.full #capFill{background:linear-gradient(90deg,#ff5a5f,#ff9f43)}
#capBar{width:56px;height:7px;border-radius:5px;background:#0d2114;border:1px solid #2c5237;overflow:hidden}
#capFill{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--teal),var(--amber));transition:width .15s}
#capText{font-size:11px;min-width:52px;text-align:right}
`;
document.head.appendChild(capStyle);
const capChip=document.createElement('div');
capChip.className='chip';capChip.id='capChip';
capChip.innerHTML='🎒 <span id="capText">0/60</span><div id="capBar"><i id="capFill"></i></div>';
document.querySelector('#hud .hud-group').appendChild(capChip);

function renderHUD(){
  const st=stats();
  $('hpFill').style.width=clamp(S.hp/st.maxHp*100,0,100)+'%';
  $('stFill').style.width=clamp(S.stamina/st.maxStamina*100,0,100)+'%';
  $('hpText').textContent=Math.ceil(S.hp);$('stText').textContent=Math.ceil(S.stamina);
  $('lvlText').textContent='Ур.'+S.level;
  const cur=XP_TABLE[S.level-1]||0,next=XP_TABLE[S.level]||XP_TABLE[XP_TABLE.length-1];
  $('xpFill').style.width=clamp((S.xp-cur)/(next-cur)*100,0,100)+'%';
  $('coinText').textContent=S.coins;$('locText').textContent=D.locations[S.location].name;
  const w=currentWeight(),cap=capacity();
  $('capText').textContent=w.toFixed(1)+'/'+cap;
  $('capFill').style.width=clamp(w/cap*100,0,100)+'%';
  capChip.classList.toggle('full',w>=cap-0.05);
}
function counterKey(type){ return type==='sell'?'sold':type==='buy'?'bought':'gather'; }
function renderQuest(){
  ensureCounters();
  if(S.tutorialDone){ $('questText').textContent='Свободное исследование. Редкие предметы добываются в опасных землях.'; $('questProgress').textContent='Уровень '+S.level+' · '+S.coins+' монет'; return; }
  const q=D.tutorial[S.tutorialStep]; if(!q){$('questText').textContent='';$('questProgress').textContent='';return;}
  $('questText').textContent=q.text; let prog='';
  if(q.type==='gather'||q.type==='sell'||q.type==='buy'){ const ck=counterKey(q.type); prog=Object.entries(q.need).map(([id,n])=>(S.counters[ck][id]||0)+'/'+n+' '+item(id).name).join(' · '); }
  else if(q.type==='have') prog=Object.entries(q.need).map(([id,n])=>count(id)+'/'+n+' '+item(id).name).join(' · ');
  else if(q.type==='equip') prog=S.equipment[q.slot]===q.item?'Готово':'Не экипировано';
  else if(q.type==='travel') prog=S.location===q.target?'Готово':'Вы в долине';
  $('questProgress').textContent=prog;
}
function checkTutorial(){
  ensureCounters();
  if(S.tutorialDone)return;
  let guard=0;
  while(!S.tutorialDone && guard++<20){
    const q=D.tutorial[S.tutorialStep];
    if(!q){S.tutorialDone=true;break;}
    let ok=false;
    if(q.type==='gather'||q.type==='sell'||q.type==='buy'){ const ck=counterKey(q.type); ok=Object.entries(q.need).every(([id,n])=>(S.counters[ck][id]||0)>=n); }
    else if(q.type==='have') ok=Object.entries(q.need).every(([id,n])=>count(id)>=n);
    else if(q.type==='equip') ok=S.equipment[q.slot]===q.item;
    else if(q.type==='travel') ok=S.location===q.target;
    if(!ok)break;
    S.tutorialStep++; Sfx.pickup(); toast('✅ Цель выполнена!');
    if(S.tutorialStep>=D.tutorial.length){S.tutorialDone=true;toast('🎓 Обучение завершено!');}
  }
  uiDirty=true;
}
function attrText(it){
  const names={atk:'Атака',def:'Защита',gatherType:'Инструмент',gatherPower:'Сила добычи',speed:'Скорость',luck:'Удача',maxStamina:'Выносливость',light:'Свет',warmth:'Тепло',poisonResist:'Защита от яда',coldResist:'Защита от холода'};
  const lines=[]; for(const k in names) if(it[k])lines.push(names[k]+': '+it[k]);
  if(it.use){const u=[];if(it.use.heal)u.push('+'+it.use.heal+' HP');if(it.use.stamina)u.push('+'+it.use.stamina+' сил');if(it.use.curePoison)u.push('снимает яд');if(it.use.buffWarmth)u.push('+тепло');if(it.use.buffLuck)u.push('+удача');if(it.use.buffPower)u.push('+атака');if(it.use.buffDefense)u.push('+защита');lines.push(u.join(', '));}
  lines.push('Ценность: '+it.value+' 🪙 · Вес: '+it.weight); return lines.join('<br>');
}
function buildFilters(){
  const cats=['all',...Object.keys(CAT)];
  const html=(cur,kind)=>cats.map(c=>`<button class="filter-btn ${cur===c?'active':''}" data-kind="${kind}" data-cat="${c}">${c==='all'?'Все':CAT[c].icon+' '+CAT[c].name}</button>`).join('');
  $('craftFilters').innerHTML=html(craftFilter,'craft');
  $('invFilters').innerHTML=html(invFilter,'inv');
}
function renderInventory(){
  const st=stats(),w=currentWeight(),cap=capacity();
  $('statLine').innerHTML='⚔️ '+st.atk+' · 🛡️ '+st.def+' · 🍀 '+st.luck+' · 💡 '+st.light+' · 🔥 '+st.warmth+' · ☠️ '+st.poisonResist+'% · ❄️ '+st.coldResist+'%<br><span style="color:'+(w>=cap?'var(--danger)':'var(--teal)')+'">🎒 Вес: '+w.toFixed(1)+' / '+cap+'</span>';
  const slotNames={tool:'Инструмент',weapon:'Оружие',armor:'Броня',charm:'Амулет',light:'Свет'};
  $('equipSlots').innerHTML=Object.keys(S.equipment).map(slot=>{ const id=S.equipment[slot];const it=id?item(id):null;
    return `<div class="equip-slot" data-slot="${slot}"><div class="es-label">${slotNames[slot]}</div><div class="es-icon">${it?it.icon:'—'}</div><div class="es-name" style="color:${it?rarityColor(id):'var(--dim)'}">${it?it.name:'Пусто'}</div></div>`; }).join('');
  const ids=Object.keys(S.inventory).filter(id=>count(id)>0&&(invFilter==='all'||item(id).cat===invFilter)).sort((a,b)=>RAR[item(a).rarity].order-RAR[item(b).rarity].order);
  $('invGrid').innerHTML=ids.map(id=>{ const it=item(id);
    return `<div class="inv-item" data-id="${id}" style="border-color:${rarityColor(id)}55"><div class="ii-count">×${count(id)}</div><div class="ii-icon">${it.icon}</div><div class="ii-name" style="color:${rarityColor(id)}">${it.name}</div><div class="ii-cat">${catBadge(id)}</div></div>`; }).join('')||'<div class="story">В этой категории пусто.</div>';
  renderInvDetail();
}
function renderInvDetail(){
  const id=selectedInv,box=$('invDetail');
  if(!id||!item(id)||count(id)<=0){box.innerHTML='Выберите предмет, чтобы увидеть его назначение и атрибуты.';return;}
  const it=item(id),cm=catMeta(id);
  let buttons='';
  if(it.slot)buttons+=`<button class="btn-primary" data-action="equip" data-id="${id}">Экипировать</button>`;
  if(it.use)buttons+=`<button class="btn-ghost" data-action="use" data-id="${id}">Использовать</button>`;
  if(it.value>0)buttons+=`<button class="btn-ghost" data-action="sell" data-id="${id}">Продать за ${sellPrice(id)} 🪙</button>`;
  buttons+=`<button class="btn-ghost" data-action="drop" data-id="${id}">Выбросить 1</button>`;
  box.innerHTML=`<div class="id-name" style="color:${rarityColor(id)}">${it.icon} ${it.name} <span style="font-size:11px;color:var(--dim)">(${RAR[it.rarity].name})</span> ${catBadge(id)}</div><div class="id-purpose">📌 ${cm.purpose}</div><div class="id-desc">${it.desc}</div><div class="id-attrs">${attrText(it)}</div><div class="btn-row" style="justify-content:flex-start;margin-top:10px">${buttons}</div>`;
}
function renderCraft(){
  const list=D.recipes.filter(r=>craftFilter==='all'||item(r.out).cat===craftFilter);
  $('craftList').innerHTML=list.map(r=>{ const idx=D.recipes.indexOf(r);const it=item(r.out);const canLevel=S.level>=r.level;
    const mats=Object.entries(r.mats).map(([id,n])=>`<span class="${count(id)>=n?'ok':'missing'}">${item(id).icon}${count(id)}/${n}</span>`).join(' ');
    const can=canLevel&&Object.entries(r.mats).every(([id,n])=>count(id)>=n);
    return `<div class="recipe"><div class="r-icon">${it.icon}</div><div class="r-main"><div class="r-name" style="color:${rarityColor(r.out)}">${it.name} <span style="font-size:10px;color:var(--dim)">ур.${r.level}</span> ${catBadge(r.out)}</div><div class="r-mats">${mats}</div></div><button class="btn-ghost" data-idx="${idx}" ${can?'':'disabled'}>Создать</button></div>`; }).join('')||'<div class="story">В этой категории нет рецептов.</div>';
}
function craft(idx){
  const r=D.recipes[idx]; if(!r)return;
  if(S.level<r.level){toast('Нужен уровень '+r.level);return;}
  if(!Object.entries(r.mats).every(([id,n])=>count(id)>=n)){toast('Не хватает материалов');return;}
  Object.entries(r.mats).forEach(([id,n])=>takeItem(id,n));
  addItem(r.out,r.n||1); addXP(12+RAR[item(r.out).rarity].order*8); Sfx.craft();
  toast('🛠️ Создано: '+item(r.out).name); burst(player.x,1.4,player.z,0xffd166,16,3,3,.8); uiDirty=true; checkTutorial(); save();
}
function recordTrade(kind,id,n){ ensureCounters(); const key=kind==='buy'?'bought':'sold'; S.counters[key][id]=(S.counters[key][id]||0)+n; }
function renderTrade(){
  $('tradeCoins').textContent=S.coins;
  const ids=tradeTab==='buy'?D.merchantStock:Object.keys(S.inventory).filter(id=>count(id)>0&&item(id).value>0);
  $('tradeList').innerHTML=ids.map(id=>{ const it=item(id);const price=tradeTab==='buy'?buyPrice(id):sellPrice(id);const can=tradeTab==='buy'?S.coins>=price:count(id)>0;
    return `<div class="trade-row"><div class="t-icon">${it.icon}</div><div class="t-main"><div class="t-name" style="color:${rarityColor(id)}">${it.name} ${catBadge(id)}</div><div class="t-sub">${RAR[it.rarity].name} · ${tradeTab==='buy'?'Цена':'Вы получите'} ${price} 🪙 ${tradeTab==='sell'?'· у вас '+count(id):''}</div></div><button class="btn-ghost" data-id="${id}" ${can?'':'disabled'}>${tradeTab==='buy'?'Купить':'Продать'}</button></div>`; }).join('')||'<div class="story">Нечего продавать.</div>';
}
function locationUnlocked(id){ const u=D.locations[id].unlock; if(!u)return true;
  if(u.item&&count(u.item)<=0)return false; if(u.level&&S.level<u.level)return false; if(u.visited&&!S.visited[u.visited])return false; return true; }
function unlockText(id){ const u=D.locations[id].unlock;if(!u)return 'Открыто';const p=[];if(u.item)p.push('иметь '+item(u.item).name);if(u.level)p.push('уровень '+u.level);if(u.visited)p.push('посетить '+D.locations[u.visited].name);return 'Нужно: '+p.join(', '); }
function renderMap(){
  const area=$('mapArea');let svg='<svg viewBox="0 0 100 100" preserveAspectRatio="none">';
  const order=['valley','forest','swamp','peaks','ruins'];
  for(let i=0;i<order.length-1;i++){const a=D.locations[order[i]],b=D.locations[order[i+1]];svg+=`<line x1="${a.mapX}" y1="${a.mapY}" x2="${b.mapX}" y2="${b.mapY}" stroke="rgba(168,196,160,.35)" stroke-width=".7" stroke-dasharray="2 2"/>`;}
  svg+='</svg>';
  area.innerHTML=svg+Object.entries(D.locations).map(([id,l])=>{ const unlocked=locationUnlocked(id),current=S.location===id,sel=selectedMap===id;
    return `<div class="map-node ${unlocked?'':'locked'} ${current?'current':''} ${sel?'selected':''}" data-id="${id}" style="left:${l.mapX}%;top:${l.mapY}%"><div class="mn-dot">${unlocked?locIcon(id):'🔒'}</div><div class="mn-name">${l.name}</div><div class="mn-danger">${l.danger?'☠️'.repeat(l.danger):'🏠 хаб'}</div></div>`; }).join('');
  const l=D.locations[selectedMap],unlocked=locationUnlocked(selectedMap);
  const resources=[...new Set(l.nodes.flatMap(n=>[n.base.item,...n.bonus.map(b=>b.item)]))].slice(0,8).map(id=>item(id).icon+' '+item(id).name).join(', ');
  const enemies=l.enemies.length?l.enemies.map(e=>D.enemies[e.type].name).join(', '):'нет';
  $('mapDetail').innerHTML=`<b>${l.name}</b> · опасность ${l.danger}/4<br>${l.desc}<br><span style="color:var(--dim)">Ресурсы: ${resources}<br>Враги: ${enemies}<br>${unlocked?'✅ Открыто':'🔒 '+unlockText(selectedMap)}</span>`;
  $('btnTravel').disabled=!unlocked||selectedMap===S.location;
}
function locIcon(id){return{valley:'🏠',forest:'🌲',swamp:'🐸',peaks:'🌋',ruins:'🌙'}[id]||'📍';}
function renderPanels(){
  if(!uiDirty)return;
  if(activePanel==='inv')renderInventory();
  if(activePanel==='craft')renderCraft();
  if(activePanel==='trade')renderTrade();
  if(activePanel==='map')renderMap();
  uiDirty=false;
}
function renderAll(){ uiDirty=true; renderHUD(); renderQuest(); buildFilters(); renderPanels(); }

/* ==================== ПРОГРЕСС ДОБЫЧИ ==================== */
const gatherStyle=document.createElement('style');
gatherStyle.textContent=`
#gatherProgress{position:fixed;left:50%;bottom:140px;transform:translateX(-50%);z-index:26;width:240px;
  background:rgba(10,25,16,.92);border:1px solid var(--teal);border-radius:12px;padding:10px 14px;
  opacity:0;pointer-events:none;transition:opacity .15s;box-shadow:0 0 22px rgba(77,227,193,.25)}
#gatherProgress.show{opacity:1}
#gatherProgress .gp-label{font-size:12px;font-weight:600;margin-bottom:6px;text-align:center;color:var(--text)}
#gatherProgress .gp-track{height:7px;border-radius:5px;background:#0d2114;border:1px solid #2c5237;overflow:hidden}
#gatherProgress .gp-track>i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--teal),var(--amber));transition:width .05s linear}
`;
document.head.appendChild(gatherStyle);
const gatherUI=document.createElement('div');
gatherUI.id='gatherProgress';
gatherUI.innerHTML='<div class="gp-label"></div><div class="gp-track"><i></i></div>';
document.body.appendChild(gatherUI);
const gpLabel=gatherUI.querySelector('.gp-label'),gpFill=gatherUI.querySelector('.gp-track>i');
function showGatherProgress(label,p){gpLabel.textContent=label;gpFill.style.width=clamp(p*100,0,100)+'%';gatherUI.classList.add('show');}
function hideGatherProgress(){gatherUI.classList.remove('show');gpFill.style.width='0%';}

/* ==================== ПАНЕЛИ ==================== */
const overlays={intro:$('overlayIntro'),pause:$('overlayPause'),inv:$('overlayInv'),craft:$('overlayCraft'),trade:$('overlayTrade'),map:$('overlayMap'),death:$('overlayDeath')};
function clearActionQueues(){interactQueued=false;attackQueued=false;jumpQueued=false;sprintTouch=false;for(const k in keys)keys[k]=false;joy.x=joy.y=0;joy.id=null;$('joyKnob').style.transform='translate(-50%,-50%)';}
function cancelGather(){player.gatherT=0;player.gatherTarget=null;player.gatherDone=false;hideGatherProgress();}
function openPanel(name){clearActionQueues();cancelGather();activePanel=name;Object.values(overlays).forEach(o=>o.classList.add('hidden'));if(name&&overlays[name])overlays[name].classList.remove('hidden');renderAll();}
function closePanel(){clearActionQueues();activePanel=null;Object.values(overlays).forEach(o=>o.classList.add('hidden'));}
function startGame(){Sfx.ensure();state='playing';closePanel();toast('Следуйте цели слева сверху.');}

/* ==================== THREE ==================== */
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
renderer.domElement.id='gameCanvas3D';
renderer.setPixelRatio(Math.min(devicePixelRatio,QUAL[quality].pixel));
renderer.setSize(innerWidth,innerHeight);
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;
document.body.appendChild(renderer.domElement);
const scene=new THREE.Scene();
scene.fog=new THREE.Fog(0x7fb08a,45,140);
let frustum=12,camYaw=Math.PI/4,camYawT=Math.PI/4;
const camera=new THREE.OrthographicCamera(-1,1,1,-1,.1,260);
const hemi=new THREE.HemisphereLight(0xbfe8ff,0x3e5a3a,.5);scene.add(hemi);
const sun=new THREE.DirectionalLight(0xffd9a0,1.5);sun.castShadow=QUAL[quality].shadow;sun.shadow.mapSize.set(1024,1024);
sun.shadow.camera.left=-20;sun.shadow.camera.right=20;sun.shadow.camera.top=20;sun.shadow.camera.bottom=-20;sun.shadow.camera.far=80;sun.shadow.bias=-.002;
scene.add(sun);scene.add(sun.target);
const fill=new THREE.DirectionalLight(0x4de3c1,.22);fill.position.set(-10,8,-12);scene.add(fill);
const skyCanvas=document.createElement('canvas');skyCanvas.width=256;skyCanvas.height=256;
const skyCtx=skyCanvas.getContext('2d');
const skyTex=new THREE.CanvasTexture(skyCanvas);skyTex.colorSpace=THREE.SRGBColorSpace;
scene.background=skyTex;
function glowTexture(){const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d');const r=g.createRadialGradient(64,64,2,64,64,62);r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.35,'rgba(255,255,255,.45)');r.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=r;g.fillRect(0,0,128,128);return new THREE.CanvasTexture(c);}
const glowTex=glowTexture();
function glowSprite(color,scale,opacity){const m=new THREE.SpriteMaterial({map:glowTex,color,transparent:true,opacity,blending:THREE.AdditiveBlending,depthWrite:false});const s=new THREE.Sprite(m);s.scale.setScalar(scale);return s;}

/* ==================== ГЕРОЙ ==================== */
const SKINS=(Array.isArray(window.SKINS)&&window.SKINS.length)?window.SKINS:[{id:'wanderer',colors:{helmet:'#15151c',eyes:'#ff2a1a',jacket:'#4a7c33',pants:'#4a3222',boots:'#2b1c12',scarf:'#f2e3c2',pack:'#6b4a33'},glow:2}];
const M={helmet:new THREE.MeshLambertMaterial({color:0x15151c}),eyes:new THREE.MeshLambertMaterial({color:0xff2a1a,emissive:0xff2a1a,emissiveIntensity:2}),jacket:new THREE.MeshLambertMaterial({color:0x4a7c33}),pants:new THREE.MeshLambertMaterial({color:0x4a3222}),boots:new THREE.MeshLambertMaterial({color:0x2b1c12}),scarf:new THREE.MeshLambertMaterial({color:0xf2e3c2}),pack:new THREE.MeshLambertMaterial({color:0x6b4a33})};
function makeLimb(w,h,d,mat,x,y,z){const p=new THREE.Group();p.position.set(x,y,z);const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.y=-h/2+.05;m.castShadow=true;p.add(m);return p;}
const hero=new THREE.Group();let handMat,handGroup,handHead;
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
  handMat=new THREE.MeshLambertMaterial({color:0xcccccc,emissive:0x000000,emissiveIntensity:.4});
  handGroup=new THREE.Group();
  const handle=new THREE.Mesh(new THREE.BoxGeometry(.07,.62,.07),new THREE.MeshLambertMaterial({color:0x5a3a22}));handle.position.y=.1;
  handHead=new THREE.Mesh(new THREE.BoxGeometry(.12,.75,.04),handMat);handHead.position.y=.62;
  handGroup.add(handle,handHead);handGroup.position.set(0,-.72,.16);handGroup.rotation.x=.35;handGroup.visible=false;armR.add(handGroup);
  hero.add(legL,legR,armL,armR,tail);hero.userData={body,legL,legR,armL,armR,tail,eyeLight,lantern};
}
hero.position.set(player.x,0,player.z);hero.rotation.y=player.facing;scene.add(hero);
let currentSkin=store.get('rpg_skin','wanderer');
function applySkin(id){const s=SKINS.find(x=>x.id===id)||SKINS[0];currentSkin=s.id;store.set('rpg_skin',s.id);for(const k in M)if(s.colors[k])M[k].color.set(s.colors[k]);M.eyes.emissive.set(s.colors.eyes||'#ff2a1a');M.eyes.emissiveIntensity=s.glow??2;hero.userData.eyeLight.color.set(s.colors.eyes||'#ff2a1a');}
function updateHandVisual(){
  const wid=S.equipment.weapon,tid=S.equipment.tool,id=wid||tid;
  if(!id){handGroup.visible=false;return;}
  const it=item(id);handGroup.visible=true;
  const col=new THREE.Color(rarityColor(id));handMat.color.copy(col);handMat.emissive.copy(col);handMat.emissiveIntensity=.3+RAR[it.rarity].order*.14;
  handHead.rotation.z=0;
  if(it.slot==='tool'){
    if(it.gatherType==='axe'){handHead.scale.set(2.6,.5,2.2);handHead.position.set(.12,.42,0);}
    else if(it.gatherType==='pick'){handHead.scale.set(2.8,.28,1.4);handHead.position.set(0,.5,0);}
    else{handHead.scale.set(1.8,.35,1.2);handHead.position.set(.1,.45,0);handHead.rotation.z=.5;}
  } else {
    if(it.name.includes('Секира')||it.name.includes('молот')){handHead.scale.set(2.4,.6,2);handHead.position.set(.1,.4,0);}
    else{handHead.scale.set(1,1,1);handHead.position.set(0,.62,0);}
  }
}
applySkin(currentSkin);updateHandVisual();

/* ==================== ЧАСТИЦЫ ==================== */
const P_MAX=220,pPos=new Float32Array(P_MAX*3),pCol=new Float32Array(P_MAX*3),pVel=new Float32Array(P_MAX*3),pLife=new Float32Array(P_MAX),pMax=new Float32Array(P_MAX),pGrav=new Float32Array(P_MAX),pBase=new Float32Array(P_MAX*3);
for(let i=0;i<P_MAX;i++)pPos[i*3+1]=-999;
const pGeo=new THREE.BufferGeometry();pGeo.setAttribute('position',new THREE.BufferAttribute(pPos,3));pGeo.setAttribute('color',new THREE.BufferAttribute(pCol,3));
const particles=new THREE.Points(pGeo,new THREE.PointsMaterial({map:glowTex,size:9,sizeAttenuation:false,vertexColors:true,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));
particles.frustumCulled=false;scene.add(particles);let pCursor=0;const tmpC=new THREE.Color();
function burst(x,y,z,color,count,speed,grav,life){tmpC.set(color);for(let n=0;n<count;n++){const i=pCursor;pCursor=(pCursor+1)%P_MAX;const a=Math.random()*TAU,up=Math.random();pPos[i*3]=x;pPos[i*3+1]=y;pPos[i*3+2]=z;pVel[i*3]=Math.cos(a)*speed*(.3+Math.random()*.7);pVel[i*3+1]=up*speed;pVel[i*3+2]=Math.sin(a)*speed*(.3+Math.random()*.7);pLife[i]=pMax[i]=life*(.6+Math.random()*.6);pGrav[i]=grav;pBase[i*3]=tmpC.r;pBase[i*3+1]=tmpC.g;pBase[i*3+2]=tmpC.b;}}
function updateParticles(dt){for(let i=0;i<P_MAX;i++){if(pLife[i]<=0)continue;pLife[i]-=dt;if(pLife[i]<=0){pPos[i*3+1]=-999;pCol[i*3]=pCol[i*3+1]=pCol[i*3+2]=0;continue;}pVel[i*3+1]-=pGrav[i]*dt;pPos[i*3]+=pVel[i*3]*dt;pPos[i*3+1]+=pVel[i*3+1]*dt;pPos[i*3+2]+=pVel[i*3+2]*dt;const f=pLife[i]/pMax[i];pCol[i*3]=pBase[i*3]*f;pCol[i*3+1]=pBase[i*3+1]*f;pCol[i*3+2]=pBase[i*3+2]*f;}pGeo.attributes.position.needsUpdate=true;pGeo.attributes.color.needsUpdate=true;}

/* ==================== ГЕОМЕТРИИ ==================== */
const G={trunk:new THREE.CylinderGeometry(.2,.3,1.4,7),cone:[new THREE.ConeGeometry(1.5,1.7,7),new THREE.ConeGeometry(1.15,1.45,7),new THREE.ConeGeometry(.78,1.2,7)],rock:new THREE.DodecahedronGeometry(1,0),bush:new THREE.SphereGeometry(.7,8,6),ore:new THREE.DodecahedronGeometry(.8,0),crystal:new THREE.OctahedronGeometry(.6,0),relic:new THREE.BoxGeometry(.8,1.2,.8),grass:new THREE.ConeGeometry(.06,.38,5),drop:new THREE.OctahedronGeometry(.18,0),mountain:new THREE.ConeGeometry(7,16,6),decorTrunk:new THREE.CylinderGeometry(.16,.24,1.6,6),decorFoliage:new THREE.ConeGeometry(1.1,2.6,6)};
const MAT={trunk:new THREE.MeshLambertMaterial({color:0x6b4a33}),leaf:new THREE.MeshLambertMaterial({color:0x2f7a44}),rock:new THREE.MeshLambertMaterial({color:0x7d8a77}),bush:new THREE.MeshLambertMaterial({color:0x3f8f4f}),ore:new THREE.MeshLambertMaterial({color:0x5a5a66}),crystal:new THREE.MeshLambertMaterial({color:0x9ff5e2,emissive:0x2bd6b0,emissiveIntensity:1.2}),relic:new THREE.MeshLambertMaterial({color:0xb48cff,emissive:0xb48cff,emissiveIntensity:.8}),wood:new THREE.MeshLambertMaterial({color:0x8a5a3a}),npc:new THREE.MeshLambertMaterial({color:0x3a7ca5}),grass:new THREE.MeshLambertMaterial({color:0xffffff})};

/* ==================== МОДЕЛИ ВРАГОВ ==================== */
function buildEnemyModel(type,def){
  const g=new THREE.Group(),parts={legs:[],arms:[],shards:[],tendrils:[],float:false},flashMats=[];
  const C=new THREE.Color(def.color);
  const body=new THREE.MeshLambertMaterial({color:C,emissive:C,emissiveIntensity:.22});flashMats.push(body);
  const dark=new THREE.MeshLambertMaterial({color:C.clone().multiplyScalar(.45)});
  const glow=new THREE.MeshLambertMaterial({color:0xff3b30,emissive:0xff3b30,emissiveIntensity:2.4});
  const B=(w,h,d,m,x,y,z)=>{const q=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);q.position.set(x,y,z);q.castShadow=true;g.add(q);return q;};
  const Sph=(r,m,x,y,z)=>{const q=new THREE.Mesh(new THREE.SphereGeometry(r,12,10),m);q.position.set(x,y,z);q.castShadow=true;g.add(q);return q;};
  const K=(r,h,m,x,y,z)=>{const q=new THREE.Mesh(new THREE.ConeGeometry(r,h,8),m);q.position.set(x,y,z);q.castShadow=true;g.add(q);return q;};
  const limb=(w,h,d,m,x,y,z)=>{const p=new THREE.Group();p.position.set(x,y,z);const q=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);q.position.y=-h/2;q.castShadow=true;p.add(q);g.add(p);return p;};
  if(type==='wolf'){
    B(1.1,.5,.5,body,0,.72,0);B(.42,.36,.42,body,0,.9,.62);B(.22,.16,.28,dark,0,.82,.92);
    K(.09,.22,dark,-.14,1.14,.62);K(.09,.22,dark,.14,1.14,.62);
    Sph(.05,glow,-.12,.96,.84);Sph(.05,glow,.12,.96,.84);
    [[-.38,.2],[.38,.2],[-.38,-.2],[.38,-.2]].forEach(([x,z])=>parts.legs.push(limb(.12,.55,.12,dark,x,.55,z)));
    const tail=B(.1,.1,.55,body,0,.82,-.62);tail.rotation.x=.7;
  } else if(type==='spider'){
    Sph(.42,body,0,.55,-.1);Sph(.26,dark,0,.5,.35);
    [-.12,-.04,.04,.12].forEach(x=>Sph(.035,glow,x,.62,.55));
    for(let i=0;i<8;i++){const side=i<4?-1:1;const k=i%4;const p=new THREE.Group();p.position.set(side*.3,.55,(k-1.5)*.22);const l=new THREE.Mesh(new THREE.BoxGeometry(.5,.06,.06),dark);l.position.x=side*.25;l.rotation.z=side*(.4+k*.12);p.add(l);g.add(p);parts.legs.push(p);}
  } else if(type==='bog_lurker'){
    const b=Sph(.62,body,0,.95,0);b.scale.y=1.25;Sph(.36,dark,0,1.75,.1);
    Sph(.07,glow,-.13,1.8,.42);Sph(.07,glow,.13,1.8,.42);
    parts.arms.push(limb(.2,1.0,.2,body,-.7,1.5,0));parts.arms.push(limb(.2,1.0,.2,body,.7,1.5,0));
    for(let i=0;i<4;i++){const v=K(.05,.5,dark,(Math.random()-.5)*.8,1.2+Math.random()*.6,(Math.random()-.5)*.5);v.rotation.z=(Math.random()-.5);parts.tendrils.push(v);}
  } else if(type==='ash_golem'){
    B(1.1,1.2,.8,body,0,1.35,0);
    Sph(.22,new THREE.MeshLambertMaterial({color:0xff9f43,emissive:0xff6a00,emissiveIntensity:2}),0,1.35,.42);
    B(.5,.45,.5,dark,0,2.25,0);Sph(.06,glow,-.12,2.3,.26);Sph(.06,glow,.12,2.3,.26);
    parts.arms.push(limb(.3,1.1,.3,body,-.85,1.9,0));parts.arms.push(limb(.3,1.1,.3,body,.85,1.9,0));
    parts.legs.push(limb(.32,.8,.32,dark,-.3,.8,0));parts.legs.push(limb(.32,.8,.32,dark,.3,.8,0));
  } else if(type==='moon_sentinel'){
    B(.72,1.6,.5,body,0,1.5,0);Sph(.36,dark,0,2.55,0);B(.5,.1,.52,glow,0,2.55,.2);
    B(.5,.7,.06,new THREE.MeshLambertMaterial({color:0xb48cff,emissive:0xb48cff,emissiveIntensity:1.4}),0,1.5,.27);
    parts.arms.push(limb(.2,1.1,.2,body,-.6,2.1,0));parts.arms.push(limb(.2,1.1,.2,body,.6,2.1,0));
    parts.legs.push(limb(.22,.9,.22,dark,-.2,.9,0));parts.legs.push(limb(.22,.9,.22,dark,.2,.9,0));
    B(.12,1.0,.7,dark,-.78,1.5,.1);
    const spear=new THREE.Mesh(new THREE.CylinderGeometry(.04,.04,2.2,6),dark);spear.position.set(.8,1.6,.1);g.add(spear);
    K(.12,.3,glow,.8,2.75,.1);
  } else {
    parts.float=true;
    if(type==='frost_wraith'){
      const core=new THREE.Mesh(new THREE.OctahedronGeometry(.6,0),new THREE.MeshLambertMaterial({color:0x9fdcff,emissive:0x6fc3ff,emissiveIntensity:1.1}));core.position.y=1.1;core.scale.y=1.6;core.castShadow=true;g.add(core);flashMats.push(core.material);
      Sph(.07,glow,-.14,1.35,.4);Sph(.07,glow,.14,1.35,.4);
      for(let i=0;i<5;i++){const s=new THREE.Mesh(new THREE.OctahedronGeometry(.16,0),body);g.add(s);parts.shards.push(s);}
    } else if(type==='void_wisp'){
      Sph(.42,new THREE.MeshLambertMaterial({color:0x120a1e,emissive:0x2a1a4a,emissiveIntensity:.8}),0,1.1,0);
      Sph(.1,new THREE.MeshLambertMaterial({color:0xff5a7a,emissive:0xff2a5a,emissiveIntensity:2.5}),0,1.15,.38);
      for(let i=0;i<6;i++){const s=new THREE.Mesh(new THREE.OctahedronGeometry(.14,0),new THREE.MeshLambertMaterial({color:0xb48cff,emissive:0x8a5cf5,emissiveIntensity:1.4}));g.add(s);parts.shards.push(s);}
      for(let i=0;i<3;i++){const t=K(.06,.7,dark,(i-1)*.25,.5,0);t.rotation.x=Math.PI;parts.tendrils.push(t);}
    } else {
      const cloak=K(.55,1.3,dark,0,.95,0);cloak.rotation.x=Math.PI;Sph(.3,dark,0,1.55,0);
      Sph(.07,glow,-.12,1.6,.26);Sph(.07,glow,.12,1.6,.26);
      for(let i=0;i<4;i++){const t=K(.06,.6,dark,(i-1.5)*.2,.35,0);t.rotation.x=Math.PI;parts.tendrils.push(t);}
    }
    g.add(glowSprite(def.color,def.size*2.6,.35));
  }
  return {group:g,parts,flashMats};
}

/* ==================== ЛУТ / ВЕС ==================== */
function spawnDrop(itemId,x,y,z,n,source,pickupDelay=0){
  if(!item(itemId)||n<=0)return;
  const merge=world.drops.find(d=>!d.collected&&d.item===itemId&&d.source===source&&Math.hypot(d.x-x,d.z-z)<3.5);
  if(merge){merge.n+=n;merge.pickupDelay=Math.max(merge.pickupDelay||0,pickupDelay);return;}
  if(world.drops.length>=MAX_ACTIVE_DROPS){
    const old=world.drops[0];
    if(old&&collectDrop(old)){world.group.remove(old.group);world.drops.shift();}
    else{const any=world.drops.find(d=>!d.collected&&d.item===itemId);if(any){any.n+=n;return;}}
  }
  const it=item(itemId),color=new THREE.Color(rarityColor(itemId));
  const g=new THREE.Group();
  const mesh=new THREE.Mesh(G.drop,new THREE.MeshLambertMaterial({color,emissive:color,emissiveIntensity:.9}));
  mesh.scale.setScalar(1+RAR[it.rarity].order*.12);g.add(mesh);
  const glow=glowSprite(color,1.1+RAR[it.rarity].order*.2,.5);g.add(glow);
  g.position.set(x,y,z);world.group.add(g);
  const a=Math.random()*TAU,sp=1.5+Math.random()*2;
  world.drops.push({item:itemId,n,source,x,y,z,vx:Math.cos(a)*sp,vy:3+Math.random()*2,vz:Math.sin(a)*sp,group:g,t:0,mesh,glow,collected:false,pickupDelay,blocked:false});
}
function collectDrop(d){
  if(!d||d.collected)return false;
  if(!canPickup(d.item,d.n)){fullNotice();d.blocked=true;return false;}
  d.collected=true;
  addItem(d.item,d.n);
  if(d.source==='gather'){ensureCounters();S.counters.gather[d.item]=(S.counters.gather[d.item]||0)+d.n;}
  Sfx.pickup();lootFeed(item(d.item).icon+' +'+d.n+' '+item(d.item).name,rarityColor(d.item));burst(d.x,d.y,d.z,rarityColor(d.item),8,2,2,.5);checkTutorial();
  return true;
}
function updateDrops(dt){
  for(let i=world.drops.length-1;i>=0;i--){
    const d=world.drops[i];
    if(!d||d.collected){world.group.remove(d.group);world.drops.splice(i,1);continue;}
    d.t+=dt;d.pickupDelay=Math.max(0,(d.pickupDelay||0)-dt);
    if(d.t<.5){d.vy-=12*dt;d.x+=d.vx*dt;d.y+=d.vy*dt;d.z+=d.vz*dt;if(d.y<.25){d.y=.25;d.vy*=-.35;d.vx*=.7;d.vz*=.7;}}
    else{
      const dx=player.x-d.x,dz=player.z-d.z,dist=Math.hypot(dx,dz)||1;
      const space=canPickup(d.item,d.n);
      d.blocked=!space;
      if(space&&d.pickupDelay<=0){
        const pull=Math.min(dist,(6+d.t*4)*dt);
        d.x+=dx/dist*pull;d.z+=dz/dist*pull;d.y+=(1-d.y)*Math.min(1,dt*6);
        if(dist<.7){if(collectDrop(d)){world.group.remove(d.group);world.drops.splice(i,1);continue;}}
      } else {
        d.y+=(.3-d.y)*Math.min(1,dt*4);
      }
    }
    const pulse=d.blocked?1+Math.sin(d.t*8)*.12:1;
    d.group.position.set(d.x,d.y+Math.sin(d.t*6)*.06,d.z);
    d.group.scale.setScalar(pulse);
    d.glow.material.color.set(d.blocked?0xff5a5f:rarityColor(d.item));
    d.mesh.rotation.y+=dt*3;d.mesh.rotation.x+=dt*2;
  }
}
function dropItem(id,n=1){
  if(count(id)<n)return;
  takeItem(id,n);
  const x=player.x+Math.sin(player.facing)*1.3,z=player.z+Math.cos(player.facing)*1.3;
  spawnDrop(id,x,.8,z,n,'dropped',1.4);
  toast('Выброшено: '+item(id).name);
  uiDirty=true;save();
}
function spawnSlash(){ const geo=new THREE.TorusGeometry(1.05,.05,6,20,Math.PI*.85);const mat=new THREE.MeshBasicMaterial({color:0xffe9a0,transparent:true,opacity:.85,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide});const m=new THREE.Mesh(geo,mat);const fx=player.x+Math.sin(player.facing)*1.25,fz=player.z+Math.cos(player.facing)*1.25;m.position.set(fx,1.35,fz);m.rotation.set(Math.PI/2,0,-player.facing);world.group.add(m);world.effects.push({mesh:m,t:0,dur:.22}); }
function updateEffects(dt){ for(let i=world.effects.length-1;i>=0;i--){const e=world.effects[i];e.t+=dt;const p=e.t/e.dur;e.mesh.material.opacity=.85*(1-p);e.mesh.scale.setScalar(1+p*1.4);if(e.t>=e.dur){world.group.remove(e.mesh);e.mesh.geometry.dispose();e.mesh.material.dispose();world.effects.splice(i,1);}} }

/* ==================== ОСТАТОК ==================== */
function makeStump(type){
  const g=new THREE.Group();const gray=new THREE.MeshLambertMaterial({color:0x6a6a5a});
  if(type==='tree'){const s=new THREE.Mesh(new THREE.CylinderGeometry(.22,.28,.35,7),MAT.trunk);s.position.y=.17;s.castShadow=true;g.add(s);}
  else if(type==='bush'){for(let i=0;i<3;i++){const t=new THREE.Mesh(new THREE.ConeGeometry(.05,.4,5),MAT.trunk);t.position.set((i-1)*.2,.2,0);t.rotation.z=(i-1)*.4;g.add(t);}}
  else{for(let i=0;i<3;i++){const r=new THREE.Mesh(new THREE.DodecahedronGeometry(.18,0),gray);r.position.set((Math.random()-.5)*.5,.1,(Math.random()-.5)*.5);g.add(r);}}
  const ring=new THREE.Mesh(new THREE.RingGeometry(.5,.6,20),new THREE.MeshBasicMaterial({color:0x7ee081,transparent:true,opacity:.25,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.02;g.add(ring);return g;
}

/* ==================== ИНСТРУМЕНТЫ / ДОБЫЧА ==================== */
const TOOL_RU={axe:'топор',pick:'кирка',sickle:'серп'};
function toolRequirement(node){ const def=node.def; if(!def.tool||def.minPower<=0)return null; return {type:def.tool,power:def.minPower}; }
function canGather(node){
  if(!node||!node.active||node.harvestLock)return {ok:false,reason:'Ресурс уже добыт'};
  if(player.gatherT>0||actionCd>0)return {ok:false,reason:'Действие ещё выполняется'};
  const st=stats(),req=toolRequirement(node);
  if(req){
    if(st.gatherType!==req.type)return {ok:false,reason:'Нужен '+TOOL_RU[req.type]};
    if(st.gatherPower<req.power)return {ok:false,reason:TOOL_RU[req.type]+' слишком слаб (сила '+req.power+')'};
  }
  return {ok:true};
}
function computeYield(node){
  const st=stats(),def=node.def;
  let base=rndInt(def.base.min,def.base.max);
  if(def.tool&&st.gatherType===def.tool)base+=Math.max(0,st.gatherPower-1);
  base=clamp(base,1,MAX_YIELD);
  const out=[{item:def.base.item,n:base}];
  const mult=1+st.luck*.01;
  def.bonus.forEach(b=>{if(Math.random()<Math.min(.95,b.chance*mult))out.push({item:b.item,n:1});});
  return out;
}
function harvestAllowed(){
  const now=performance.now();
  harvestTimes=harvestTimes.filter(t=>now-t<1000);
  if(harvestTimes.length>=4)return false;
  harvestTimes.push(now);
  return true;
}
function harvestNode(node){
  if(!node||!node.active||node.harvestLock||node!==player.gatherTarget||!harvestAllowed())return;
  node.harvestLock=true; node.active=false;
  node.group.visible=false; node.stump.visible=true; node.collider.disabled=true;
  node.respawn=35+Math.random()*25;
  const def=node.def;
  computeYield(node).forEach(d=>spawnDrop(d.item,node.x,.8,node.z,d.n,'gather'));
  if(def.tool==='axe'||node.type==='tree')Sfx.chop();
  else if(def.tool==='pick'||node.type==='rock'||node.type==='ore'||node.type==='crystal')Sfx.mine();
  else Sfx.cut();
  addXP(4+(def.minPower||0)*3);
  burst(node.x,.8,node.z,0xffd166,12,2.5,3,.7);
  toast('Добыча выпала — подберите предметы');
}
function tryStartGather(node){
  const check=canGather(node);
  if(!check.ok){if(check.reason!=='Действие ещё выполняется')toast(check.reason);Sfx.deny();return;}
  player.gatherT=GATHER_DUR; player.gatherTarget=node; player.gatherDone=false; actionCd=ACTION_CD;
  player.facing=Math.atan2(node.x-player.x,node.z-player.z);
  Sfx.swing();
}
function updateGatherAction(dt){
  if(player.gatherT<=0)return;
  player.gatherT=Math.max(0,player.gatherT-dt);
  const p=1-player.gatherT/GATHER_DUR;
  const node=player.gatherTarget;
  if(!node||!node.active){cancelGather();return;}
  const names={tree:'Рубим дерево',rock:'Добываем камень',bush:'Собираем',ore:'Добываем руду',crystal:'Добываем кристалл',relic:'Извлекаем реликвию'};
  showGatherProgress(names[node.type]||'Добываем',p);
  if(!player.gatherDone&&p>=.5){player.gatherDone=true;harvestNode(node);}
  if(player.gatherT<=0){player.gatherTarget=null;player.gatherDone=false;hideGatherProgress();}
}

/* ==================== ПОСТРОЙКА ЛОКАЦИИ ==================== */
function buildLocation(id){
  const loc=D.locations[id],rnd=mulberry32(id.length*999+S.level);
  if(world)scene.remove(world.group);
  const group=new THREE.Group();scene.add(group);
  const W={group,nodes:[],enemies:[],features:[],hazards:[],respawns:[],drops:[],effects:[],colliders:[],loc,grass:null,decorTrunks:null,decorFoliage:null,decorRocks:null};
  const geo=new THREE.PlaneGeometry(260,260,48,48),pos=geo.attributes.position,colors=[];
  const cA=new THREE.Color(loc.ground[0]),cB=new THREE.Color(loc.ground[1]),tmp=new THREE.Color();
  for(let i=0;i<pos.count;i++){const x=pos.getX(i),y=pos.getY(i);const n=(Math.sin(x*.15)*Math.cos(y*.13)+1)/2;tmp.copy(cA).lerp(cB,n);colors.push(tmp.r,tmp.g,tmp.b);}
  geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  const ground=new THREE.Mesh(geo,new THREE.MeshLambertMaterial({vertexColors:true}));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;group.add(ground);
  scene.fog.color.set(loc.skyDay);

  function addNode(type,x,z,def){
    const g=new THREE.Group();let r=.6;
    if(type==='tree'){const t=new THREE.Mesh(G.trunk,MAT.trunk);t.position.y=.7;t.castShadow=true;g.add(t);G.cone.forEach((cg,i)=>{const m=new THREE.Mesh(cg,MAT.leaf);m.position.y=1.7+i;m.castShadow=true;g.add(m);});r=.7;}
    else if(type==='rock'||type==='ore'){const m=new THREE.Mesh(type==='ore'?G.ore:G.rock,type==='ore'?MAT.ore:MAT.rock);m.position.y=.5;m.scale.set(1,.7,1);m.castShadow=true;g.add(m);if(type==='ore'){const c=new THREE.Mesh(G.crystal,MAT.crystal);c.scale.setScalar(.35);c.position.y=1;c.rotation.y=.5;g.add(c);}r=.8;}
    else if(type==='bush'){for(let i=0;i<3;i++){const m=new THREE.Mesh(G.bush,MAT.bush);m.scale.setScalar(.5+i*.1);m.position.set((i-1)*.4,.4,0);m.castShadow=true;g.add(m);}r=.5;}
    else if(type==='crystal'){const m=new THREE.Mesh(G.crystal,MAT.crystal);m.position.y=.8;m.scale.y=1.5;m.castShadow=true;g.add(m);g.add(glowSprite(0x4de3c1,2,.4));r=.5;}
    else if(type==='relic'){const m=new THREE.Mesh(G.relic,MAT.relic);m.position.y=.6;m.castShadow=true;g.add(m);g.add(glowSprite(0xb48cff,2.4,.5));r=.6;}
    g.position.set(x,0,z);group.add(g);
    const col={x,z,r,disabled:false};W.colliders.push(col);
    const stump=makeStump(type);stump.position.set(x,0,z);stump.visible=false;group.add(stump);
    W.nodes.push({type,x,z,def,group:g,stump,collider:col,active:true,harvestLock:false,respawn:0});
  }
  function randomPos(minR,maxR){let x,z,tries=0;do{const a=rnd()*TAU,r=minR+rnd()*(maxR-minR);x=Math.cos(a)*r;z=Math.sin(a)*r;tries++;}while(tries<40&&Math.hypot(x,z)<8);return{x,z};}
  loc.nodes.forEach(def=>{for(let i=0;i<def.count;i++){const p=randomPos(14,92);addNode(def.type,p.x,p.z,def);}});

  if(id==='valley'){
    const find=t=>loc.nodes.find(n=>n.type===t);
    [['tree',7,9],['tree',-8,11],['tree',12,-5],['rock',9,7],['rock',-10,-7],['rock',4,-12],['bush',-6,8],['bush',10,3],['bush',-12,2],['bush',2,13]].forEach(([t,x,z])=>{const d=find(t);if(d)addNode(t,x,z,d);});
    const ring=new THREE.Mesh(new THREE.RingGeometry(5.4,5.7,40),new THREE.MeshBasicMaterial({color:0xc9b98a,transparent:true,opacity:.35,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.02;group.add(ring);
  }

  const mcol=new THREE.Color(loc.ground[0]).multiplyScalar(.55);
  const mm=new THREE.MeshLambertMaterial({color:mcol});
  for(let i=0;i<48;i++){const a=i/48*TAU+rnd()*.12,rr=104+rnd()*8;const x=Math.cos(a)*rr,z=Math.sin(a)*rr;
    const m=new THREE.Mesh(G.mountain,mm);const s=.7+rnd()*.7;m.scale.set(s,s*(.8+rnd()*.6),s);m.position.set(x,7*s,z);m.rotation.y=rnd()*TAU;group.add(m);
    W.colliders.push({x,z,r:6.5*s,disabled:false});}

  if(id==='valley'){
    const bench=new THREE.Mesh(new THREE.BoxGeometry(2,.8,1),MAT.wood);bench.position.set(-4,.4,0);bench.castShadow=true;group.add(bench);
    W.features.push({type:'workbench',x:-4,z:0,r:2.4,label:'Верстак — крафт',action:()=>openPanel('craft')});W.colliders.push({x:-4,z:0,r:1.1});
    const npc=new THREE.Group();const nb=new THREE.Mesh(new THREE.BoxGeometry(.7,1.2,.5),MAT.npc);nb.position.y=1;npc.add(nb);const nh=new THREE.Mesh(new THREE.SphereGeometry(.3,12,10),new THREE.MeshLambertMaterial({color:0xf2c9a0}));nh.position.y=1.8;npc.add(nh);npc.position.set(4,0,0);group.add(npc);
    W.features.push({type:'merchant',x:4,z:0,r:2.4,label:'Торговец Марк — торговля',action:()=>openPanel('trade')});W.colliders.push({x:4,z:0,r:.6});
    const fire=new THREE.Mesh(new THREE.ConeGeometry(.4,1,8),new THREE.MeshBasicMaterial({color:0xff9f43,transparent:true,opacity:.85}));fire.position.set(0,.5,-3);group.add(fire);const fl=new THREE.PointLight(0xff9f43,2,10);fl.position.set(0,1,-3);group.add(fl);
    W.features.push({type:'campfire',x:0,z:-3,r:2,label:'Костёр — приготовить еду',action:()=>{toast('🔥 Готовьте еду через крафт.');openPanel('craft');}});W.colliders.push({x:0,z:-3,r:.7});
    const tent=new THREE.Mesh(new THREE.ConeGeometry(1.6,2,4),new THREE.MeshLambertMaterial({color:0xc96f3b}));tent.position.set(0,1,4);tent.rotation.y=Math.PI/4;tent.castShadow=true;group.add(tent);
    W.features.push({type:'tent',x:0,z:4,r:2.4,label:'Палатка — отдохнуть',action:()=>{S.hp=stats().maxHp;S.stamina=stats().maxStamina;dayTime=.3;toast('⛺ Вы отдохнули до утра.');}});W.colliders.push({x:0,z:4,r:1.4});
  }

  loc.enemies.forEach(def=>{for(let i=0;i<def.count;i++){const p=randomPos(18,90);spawnEnemy(def.type,p.x,p.z,W,rnd);}});

  if(loc.hazard==='poison'){for(let i=0;i<12;i++){const p=randomPos(16,88);const rr=2+rnd()*3;const m=new THREE.Mesh(new THREE.CircleGeometry(rr,20),new THREE.MeshBasicMaterial({color:0x5aff6a,transparent:true,opacity:.22,side:THREE.DoubleSide}));m.rotation.x=-Math.PI/2;m.position.set(p.x,.04,p.z);group.add(m);W.hazards.push({type:'poison',x:p.x,z:p.z,r:rr});}}
  if(loc.hazard==='arcane'){for(let i=0;i<9;i++){const p=randomPos(16,88);const m=new THREE.Mesh(new THREE.RingGeometry(1.4,1.8,24),new THREE.MeshBasicMaterial({color:0xb48cff,transparent:true,opacity:.35,side:THREE.DoubleSide}));m.rotation.x=-Math.PI/2;m.position.set(p.x,.05,p.z);group.add(m);W.hazards.push({type:'arcane',x:p.x,z:p.z,r:1.8,phase:rnd()*TAU});}}

  const grass=new THREE.InstancedMesh(G.grass,MAT.grass,QUAL.high.grass);
  const mtx=new THREE.Matrix4(),q=new THREE.Quaternion(),sc=new THREE.Vector3(),p=new THREE.Vector3(),col=new THREE.Color();
  for(let i=0;i<QUAL.high.grass;i++){const a=rnd()*TAU,r=Math.sqrt(rnd())*96;p.set(Math.cos(a)*r,.17,Math.sin(a)*r);q.setFromEuler(new THREE.Euler((rnd()-.5)*.3,rnd()*6,(rnd()-.5)*.3));sc.setScalar(.7+rnd());mtx.compose(p,q,sc);grass.setMatrixAt(i,mtx);grass.setColorAt(i,col.setHSL(.3+rnd()*.06,.5,.3+rnd()*.12));}
  grass.instanceMatrix.needsUpdate=true;if(grass.instanceColor)grass.instanceColor.needsUpdate=true;grass.count=QUAL[quality].grass;group.add(grass);W.grass=grass;

  const decorN=QUAL.high.decor,rockN=QUAL.high.rocks;
  const trunks=new THREE.InstancedMesh(G.decorTrunk,MAT.trunk,decorN);
  const foliage=new THREE.InstancedMesh(G.decorFoliage,MAT.leaf,decorN);
  const rocks=new THREE.InstancedMesh(G.rock,MAT.rock,rockN);
  for(let i=0;i<decorN;i++){
    const a=rnd()*TAU,r=22+rnd()*72,x=Math.cos(a)*r,z=Math.sin(a)*r,s=.7+rnd()*.8;
    p.set(x,.8*s,z);q.setFromEuler(new THREE.Euler(0,rnd()*6,0));sc.set(s,s,s);mtx.compose(p,q,sc);trunks.setMatrixAt(i,mtx);
    p.set(x,2.2*s,z);sc.set(s,s,s);mtx.compose(p,q,sc);foliage.setMatrixAt(i,mtx);
    W.colliders.push({x,z,r:.5*s,disabled:false});
  }
  for(let i=0;i<rockN;i++){const a=rnd()*TAU,r=20+rnd()*74,x=Math.cos(a)*r,z=Math.sin(a)*r,s=.3+rnd()*.6;p.set(x,.3*s,z);q.setFromEuler(new THREE.Euler(rnd(),rnd()*6,rnd()));sc.set(s,s*.7,s);mtx.compose(p,q,sc);rocks.setMatrixAt(i,mtx);W.colliders.push({x,z,r:.6*s,disabled:false});}
  trunks.instanceMatrix.needsUpdate=true;foliage.instanceMatrix.needsUpdate=true;rocks.instanceMatrix.needsUpdate=true;
  trunks.count=QUAL[quality].decor;foliage.count=QUAL[quality].decor;rocks.count=QUAL[quality].rocks;
  group.add(trunks,foliage,rocks);W.decorTrunks=trunks;W.decorFoliage=foliage;W.decorRocks=rocks;
  return W;
}
function spawnEnemy(type,x,z,W,rnd){
  const def=D.enemies[type];const model=buildEnemyModel(type,def);const g=model.group;
  g.position.set(x,0,z);W.group.add(g);
  W.enemies.push({type,def,group:g,parts:model.parts,flashMats:model.flashMats,x,z,hp:def.hp,maxHp:def.hp,cd:0,phase:rnd()*TAU,tx:x,tz:z,retarget:0,alive:true,flash:0,movePhase:0});
}

/* ==================== БОЙ ==================== */
function damageEnemy(e,dmg){
  e.hp-=dmg;e.flash=.18;const dx=e.x-player.x,dz=e.z-player.z,dd=Math.hypot(dx,dz)||1;e.x+=dx/dd*.55;e.z+=dz/dd*.55;
  burst(e.x,1,e.z,0xff5a5f,10,3,4,.6);Sfx.hit();shake=Math.max(shake,.18);lootFeed('−'+dmg+' '+e.def.name,'#ff9f43');
  if(e.hp<=0){e.alive=false;e.group.visible=false;const st=stats();
    e.def.loot.forEach(l=>{if(Math.random()<l.chance*(1+st.luck*.01))spawnDrop(l.item,e.x,.8,e.z,1,'loot');});
    const coins=rndInt(e.def.coins[0],e.def.coins[1]);S.coins+=coins;addXP(e.def.xp);lootFeed('☠️ '+e.def.name+' · +'+coins+' 🪙','#ffd166');burst(e.x,1,e.z,0xb48cff,20,4,3,1);
    world.respawns.push({type:'enemy',t:45,data:{type:e.type,x:e.x,z:e.z}});uiDirty=true;}
}
function playerAttack(){
  if(attackCd>0||player.attackT>0||player.gatherT>0||actionCd>0)return;
  attackCd=.5;actionCd=ACTION_CD;player.attackT=player.attackDur;player.attackHitDone=false;
  let target=null,best=2.7;for(const e of world.enemies){if(!e.alive)continue;const d=Math.hypot(e.x-player.x,e.z-player.z);if(d<best){best=d;target=e;}}
  if(target)player.facing=Math.atan2(target.x-player.x,target.z-player.z);player.attackTarget=target;spawnSlash();Sfx.swing();
}
function resolveAttackHit(){ const t=player.attackTarget;if(t&&t.alive&&Math.hypot(t.x-player.x,t.z-player.z)<3.1){const st=stats();const crit=Math.random()<.08+st.luck*.004;const dmg=Math.round((st.atk+rndInt(0,3))*(crit?1.8:1));damageEnemy(t,dmg);if(crit)lootFeed('💥 Крит!','#ffd166');} }
function hurtPlayer(dmg,cause){ if(player.invuln>0||state!=='playing')return;const st=stats();const real=Math.max(1,Math.round(dmg-st.def*.45));S.hp-=real;player.invuln=.7;Sfx.hurt();shake=Math.max(shake,.3);burst(player.x,1.4,player.z,0xff5a5f,14,3,4,.7);lootFeed('−'+real+' HP · '+cause,'#ff5a5f');if(S.hp<=0)die(cause); }
function die(cause){ S.hp=0;state='dead';Sfx.death();const lost=Math.floor(S.coins*.15);S.coins-=lost;$('deathText').textContent='Причина: '+cause+'. Потеряно '+lost+' монет. Снаряжение сохранено.';openPanel('death'); }
function respawn(){ S.location='valley';S.visited.valley=true;S.hp=stats().maxHp;S.stamina=stats().maxStamina;S.poison=0;player.x=0;player.z=5;player.y=0;player.vx=player.vz=player.vy=0;cancelGather();world=buildLocation('valley');applyQuality();state='playing';closePanel();toast('Вы вернулись в долину.'); }
function hideTransition(){ clearTimeout(travelWatchdog); travelWatchdog=null; $('transition').classList.remove('show'); }
function travel(id){
  if(!locationUnlocked(id)||id===S.location)return;
  const prev=S.location;
  $('transitionText').textContent=D.locations[id].name;
  $('transition').classList.add('show');
  Sfx.travel();
  clearTimeout(travelWatchdog);
  travelWatchdog=setTimeout(()=>{ $('transition').classList.remove('show'); toast('Переход занял слишком много времени. Попробуйте ещё раз.'); },5000);
  setTimeout(()=>{
    try{
      S.location=id;S.visited[id]=true;
      player.x=0;player.z=5;player.y=0;player.vx=player.vz=player.vy=0;
      cancelGather();
      world=buildLocation(id);
      applyQuality();
      dayTime=.32;
      checkTutorial();
      uiDirty=true;save();
      toast('📍 '+D.locations[id].name);
    }catch(err){
      console.error(err);
      S.location=prev;
      try{world=buildLocation(prev);applyQuality();}catch(e){console.error(e);}
      toast('Ошибка перехода: '+err.message);
    }finally{
      hideTransition();
    }
  },600);
}

/* ==================== ВЗАИМОДЕЙСТВИЯ ==================== */
function updateInteractions(){
  nearestInteract=null;let best=1e9;
  for(const n of world.nodes){if(!n.active||n.harvestLock)continue;const d=Math.hypot(n.x-player.x,n.z-player.z);if(d<2.6&&d<best){best=d;nearestInteract={kind:'node',obj:n,label:nodeLabel(n)};}}
  for(const f of world.features){const d=Math.hypot(f.x-player.x,f.z-player.z);if(d<f.r&&d<best){best=d;nearestInteract={kind:'feature',obj:f,label:f.label};}}
  const label=nearestInteract?nearestInteract.label:'';
  if(label!==lastPrompt){lastPrompt=label;$('promptText').textContent=label;$('prompt').classList.toggle('show',!!label);$('btnInteract').classList.toggle('show',!!label);}
  if(interactQueued){
    interactQueued=false;
    if(player.gatherT>0||actionCd>0)return;
    if(nearestInteract){
      if(nearestInteract.kind==='node')tryStartGather(nearestInteract.obj);
      else {Sfx.interact();nearestInteract.obj.action();}
    }
  }
}
function nodeLabel(n){
  const names={tree:'Дерево',rock:'Камень',bush:'Куст',ore:'Жила',crystal:'Кристалл',relic:'Реликвия'};
  const req=toolRequirement(n);
  if(req){const st=stats();if(st.gatherType!==req.type||st.gatherPower<req.power)return names[n.type]+' — нужен '+TOOL_RU[req.type]+' (сила '+req.power+')';}
  return names[n.type]+' — добыть '+item(n.def.base.item).name;
}

/* ==================== КОЛЛИЗИЯ ==================== */
function resolveCollisions(){
  const pr=.45;
  for(const c of world.colliders){ if(c.disabled)continue;const dx=player.x-c.x,dz=player.z-c.z,d=Math.hypot(dx,dz),min=c.r+pr;
    if(d<min){if(d>.0001){const push=min-d;player.x+=dx/d*push;player.z+=dz/d*push;}else player.x+=min;} }
  for(const e of world.enemies){if(!e.alive)continue;const r=e.def.size*.5+pr;const dx=player.x-e.x,dz=player.z-e.z,d=Math.hypot(dx,dz);
    if(d<r){if(d>.0001){const push=r-d;player.x+=dx/d*push;player.z+=dz/d*push;}else player.x+=r;} }
  const dc=Math.hypot(player.x,player.z);if(dc>SAFE_R){player.x*=SAFE_R/dc;player.z*=SAFE_R/dc;}
}

/* ==================== МИР ==================== */
function updateWorld(dt,t){
  for(const n of world.nodes){if(!n.active){n.respawn-=dt;if(n.respawn<=0){n.active=true;n.harvestLock=false;n.group.visible=true;n.stump.visible=false;n.collider.disabled=false;}}}
  const st=stats();
  for(const e of world.enemies){
    if(!e.alive)continue;e.cd=Math.max(0,e.cd-dt);
    if(e.flash>0){e.flash=Math.max(0,e.flash-dt);const v=e.flash>0?2.2:.22;e.flashMats.forEach(m=>m.emissiveIntensity=v);}
    const dp=Math.hypot(e.x-player.x,e.z-player.z);
    if(dp<11){e.tx=player.x;e.tz=player.z;}else{e.retarget-=dt;if(e.retarget<=0){e.retarget=2+Math.random()*3;const a=Math.random()*TAU,r=5+Math.random()*14;e.tx=e.x+Math.cos(a)*r;e.tz=e.z+Math.sin(a)*r;}}
    const dx=e.tx-e.x,dz=e.tz-e.z,d=Math.hypot(dx,dz)||1;let moved=false;
    if(d>.8){e.x+=dx/d*e.def.speed*dt;e.z+=dz/d*e.def.speed*dt;moved=true;}
    const dc=Math.hypot(e.x,e.z);if(dc>94){e.x*=94/dc;e.z*=94/dc;e.tx=0;e.tz=0;}
    e.movePhase+=dt*(moved?e.def.speed*2.4:1);
    const y=e.parts.float?.35+Math.sin(t*2+e.phase)*.25:(e.type==='wolf'||e.type==='spider'?Math.abs(Math.sin(e.movePhase))*.04:0);
    e.group.position.set(e.x,y,e.z);e.group.rotation.y=Math.atan2(dx,dz);
    if(e.parts.legs.length)e.parts.legs.forEach((l,i)=>l.rotation.x=Math.sin(e.movePhase+i*Math.PI)*.5);
    if(e.parts.arms.length)e.parts.arms.forEach((a,i)=>a.rotation.x=Math.sin(e.movePhase+i*Math.PI)*.35);
    if(e.parts.shards.length)e.parts.shards.forEach((s,i)=>{const a=t*1.6+i*TAU/e.parts.shards.length;s.position.set(Math.cos(a)*.7,1.1+Math.sin(t*2+i)*.2,Math.sin(a)*.7);s.rotation.y+=dt*2;});
    if(e.parts.tendrils.length)e.parts.tendrils.forEach((td,i)=>td.rotation.x=Math.PI+Math.sin(t*3+i)*.25);
    if(dp<1.2&&e.cd<=0){e.cd=1.1;hurtPlayer(e.def.atk,e.def.name);if(e.def.poison)S.poison=Math.max(S.poison,6);}
  }
  for(let i=world.respawns.length-1;i>=0;i--){const r=world.respawns[i];r.t-=dt;if(r.t<=0){if(r.type==='enemy')spawnEnemy(r.data.type,r.data.x,r.data.z,world,Math.random);world.respawns.splice(i,1);}}
  for(const h of world.hazards){const d=Math.hypot(h.x-player.x,h.z-player.z);
    if(h.type==='poison'&&d<h.r)S.poison=Math.max(S.poison,5);
    if(h.type==='arcane'){const pulse=(Math.sin(t*2+h.phase)+1)/2;if(d<h.r&&pulse>.8)hurtPlayer(8,'Лунная вспышка');}}
  if(world.loc.hazard==='cold'){const warmth=st.warmth+(S.warmthBuff>0?40:0);if(warmth<25){S.stamina=Math.max(0,S.stamina-6*dt);if(Math.random()<dt*.5)hurtPlayer(3,'Холод');}}
  if(S.poison>0){S.poison-=dt;const res=clamp(st.poisonResist,0,90);S.hp-=2*(1-res/100)*dt;if(S.hp<=0)die('Яд');}
  if(S.warmthBuff>0)S.warmthBuff-=dt;
  for(const k in S.buffs){if(S.buffs[k]>0)S.buffs[k]=Math.max(0,S.buffs[k]-dt*.1);}
  if(attackCd>0)attackCd-=dt;
  if(actionCd>0)actionCd-=dt;
  if(player.invuln>0)player.invuln-=dt;
  updateDrops(dt);updateEffects(dt);
}

/* ==================== ИГРОК ==================== */
const camFwd=new THREE.Vector3(),camRight=new THREE.Vector3(),UP=new THREE.Vector3(0,1,0);
function updatePlayer(dt,t){
  let ix=(keys.KeyD||keys.ArrowRight?1:0)-(keys.KeyA||keys.ArrowLeft?1:0)+joy.x;
  let iz=(keys.KeyS||keys.ArrowDown?1:0)-(keys.KeyW||keys.ArrowUp?1:0)+joy.y;
  const il=Math.hypot(ix,iz);if(il>1){ix/=il;iz/=il;}
  const st=stats();
  const busy=player.gatherT>0||player.attackT>0;
  const wantSprint=(keys.ShiftLeft||keys.ShiftRight||sprintTouch)&&il>0&&S.stamina>2&&!busy;
  player.sprinting=wantSprint;
  if(wantSprint)S.stamina=clamp(S.stamina-18*dt,0,st.maxStamina);else S.stamina=clamp(S.stamina+9*dt,0,st.maxStamina);
  const spd=((wantSprint?7.4:4.3)+st.speed)*(busy?.35:1);
  camera.getWorldDirection(camFwd);camFwd.y=0;camFwd.normalize();camRight.crossVectors(camFwd,UP).normalize();
  const wx=camRight.x*ix+camFwd.x*-iz,wz=camRight.z*ix+camFwd.z*-iz;
  const k=1-Math.exp(-12*dt);player.vx+=(wx*spd-player.vx)*k;player.vz+=(wz*spd-player.vz)*k;
  player.x+=player.vx*dt;player.z+=player.vz*dt;resolveCollisions();player.moving=Math.hypot(player.vx,player.vz)>.5;
  if(jumpQueued&&player.grounded&&!busy){player.vy=9.4;player.grounded=false;Sfx.jump();burst(player.x,.15,player.z,0xc9b98a,8,2,4,.5);}
  jumpQueued=false;
  if(!player.grounded){player.vy-=24*dt;player.y+=player.vy*dt;if(player.y<=0){player.y=0;player.grounded=true;if(player.vy<-4){Sfx.land();player.landT=.18;}player.vy=0;}}
  if(player.moving&&!busy){const target=Math.atan2(player.vx,player.vz);let d=target-player.facing;d=Math.atan2(Math.sin(d),Math.cos(d));player.facing+=d*Math.min(1,dt*12);}
  const P=hero.userData,runF=player.sprinting?1.5:1;if(player.moving&&player.grounded)player.walkPhase+=dt*9*runF;const s=Math.sin(player.walkPhase);
  if(player.grounded){const amp=player.moving?(player.sprinting?.85:.55):0;P.legL.rotation.x=s*amp;P.legR.rotation.x=-s*amp;P.armL.rotation.x=-s*amp*.8;P.armR.rotation.x=s*amp*.8;if(player.moving&&player.prevSin>0&&s<=0)Sfx.step();player.prevSin=s;}
  else{P.legL.rotation.x=.55;P.legR.rotation.x=-.35;P.armL.rotation.x=-2.5;P.armR.rotation.x=-2.5;}
  P.body.scale.y=1+Math.sin(t*2.2)*.015;P.tail.rotation.x=-.25-(player.moving?(player.sprinting?.75:.4):0)+Math.sin(t*6)*.12;

  if(player.gatherT>0){
    const p=1-player.gatherT/GATHER_DUR;
    const swing=Math.sin(p*Math.PI);
    const strike=p>=.45?Math.min(1,(p-.45)/.25):0;
    P.armR.rotation.x=lerp(-2.1,.9,strike)-swing*.15;
    P.armL.rotation.x=-.5-swing*.3;
    P.body.rotation.y=-swing*.22;
    hero.rotation.y=player.facing;
  } else if(player.attackT>0){
    player.attackT-=dt;const p=1-player.attackT/player.attackDur;const wind=p<.35?p/.35:1;const strike=p>=.35?Math.min(1,(p-.35)/.4):0;const recover=p>.75?(p-.75)/.25:0;
    P.armR.rotation.x=lerp(lerp(-2.4,1.1,strike),.2,recover);P.armL.rotation.x=-.6-wind*.4;P.body.rotation.y=(wind*.35)*(1-strike)*(1-recover)-strike*.25*(1-recover);hero.rotation.y=player.facing+Math.sin(p*Math.PI)*.25;
    if(!player.attackHitDone&&p>=.45){player.attackHitDone=true;resolveAttackHit();}
  } else {P.body.rotation.y=0;hero.rotation.y=player.facing;}

  if(player.landT>0){player.landT-=dt;const q=Math.max(player.landT,0)/.18;hero.scale.set(1+q*.12,1-q*.15,1+q*.12);}else hero.scale.set(1,1,1);
  hero.position.set(player.x,player.y+(player.moving&&player.grounded?Math.abs(s)*.07:0),player.z);
  hero.userData.lantern.intensity=st.light*.03;hero.visible=player.invuln>0?Math.floor(t*12)%2===0:true;
}

/* ==================== КАМЕРА / НЕБО ==================== */
const camTarget=new THREE.Vector3();
function updateCamera(dt){ camYaw+=(camYawT-camYaw)*Math.min(1,dt*8);const dist=26;
  camTarget.set(player.x+Math.sin(camYaw)*dist,20,player.z+Math.cos(camYaw)*dist);camera.position.lerp(camTarget,1-Math.exp(-6*dt));
  if(shake>0){shake=Math.max(0,shake-dt*1.6);camera.position.x+=(Math.random()-.5)*shake;camera.position.y+=(Math.random()-.5)*shake;}
  camera.lookAt(player.x,player.y+1,player.z);
  const aspect=innerWidth/innerHeight;camera.left=-frustum*aspect/2;camera.right=frustum*aspect/2;camera.top=frustum/2;camera.bottom=-frustum/2;camera.updateProjectionMatrix();
  sun.position.set(player.x+14,22,player.z+10);sun.target.position.set(player.x,0,player.z); }
function updateSky(dt){ dayTime=(dayTime+dt/300)%1;const elev=Math.sin((dayTime-.25)*TAU),day=clamp(elev*1.5+.12,0,1);
  sun.intensity=.18+day*1.4;sun.color.set(0x7f9fd9).lerp(new THREE.Color(0xffd9a0),day);hemi.intensity=.22+day*.4;
  const loc=D.locations[S.location],top=new THREE.Color(loc.skyNight).lerp(new THREE.Color(0x6db3d9),day);
  skyTimer-=dt;if(skyTimer<=0){skyTimer=.5;const gr=skyCtx.createLinearGradient(0,0,0,256);gr.addColorStop(0,'#'+top.getHexString());gr.addColorStop(1,'#'+new THREE.Color(loc.skyDay).lerp(new THREE.Color(0xff9f43),clamp(1-Math.abs(elev)*3,0,1)*.4).getHexString());skyCtx.fillStyle=gr;skyCtx.fillRect(0,0,256,256);skyTex.needsUpdate=true;} }

/* ==================== ВВОД ==================== */
window.addEventListener('keydown',e=>{
  if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault();
  if(state!=='playing'||activePanel)return;
  keys[e.code]=true;
  if(e.repeat)return;
  if(e.code==='Space')jumpQueued=true;
  if(e.code==='KeyE')interactQueued=true;
  if(e.code==='KeyF')attackQueued=true;
});
window.addEventListener('keyup',e=>{keys[e.code]=false;});
window.addEventListener('keydown',e=>{
  if(e.repeat)return;
  if(e.code==='KeyI'&&state!=='intro'&&state!=='dead')openPanel(activePanel==='inv'?null:'inv');
  if(e.code==='KeyM'&&state!=='intro'&&state!=='dead'){selectedMap=S.location;openPanel(activePanel==='map'?null:'map');}
  if(e.code==='Escape'){if(activePanel&&activePanel!=='intro'&&activePanel!=='death')closePanel();else if(state==='playing'){state='paused';openPanel('pause');}else if(state==='paused'){state='playing';closePanel();}}
});
$('btnStart').addEventListener('click',()=>{if(hasSave){S=freshState();store.del(SAVE_KEY);}world=buildLocation('valley');applyQuality();startGame();});
$('btnContinue').addEventListener('click',()=>{world=buildLocation(S.location);applyQuality();startGame();});
$('btnResume').addEventListener('click',()=>{state='playing';closePanel();});
$('btnNewGame').addEventListener('click',()=>{S=freshState();store.del(SAVE_KEY);world=buildLocation('valley');applyQuality();state='playing';closePanel();toast('Новая игра.');});
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
$('qualitySelect').addEventListener('change',e=>{quality=e.target.value;applyQuality();toast('Качество: '+e.target.options[e.target.selectedIndex].text);});
document.querySelectorAll('.trade-tab').forEach(b=>b.addEventListener('click',()=>{tradeTab=b.dataset.tab;document.querySelectorAll('.trade-tab').forEach(x=>x.classList.toggle('active',x===b));renderTrade();}));
$('invGrid').addEventListener('click',e=>{const el=e.target.closest('.inv-item');if(el){selectedInv=el.dataset.id;renderInvDetail();}});
$('equipSlots').addEventListener('click',e=>{const el=e.target.closest('.equip-slot');if(el)unequip(el.dataset.slot);});
$('invDetail').addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(!b)return;const id=b.dataset.id;
  if(b.dataset.action==='equip')equipItem(id);
  if(b.dataset.action==='use')useItem(id);
  if(b.dataset.action==='drop')dropItem(id,1);
  if(b.dataset.action==='sell'&&takeItem(id,1)){S.coins+=sellPrice(id);recordTrade('sell',id,1);Sfx.coin();toast('Продано: '+item(id).name);checkTutorial();save();}});
$('craftList').addEventListener('click',e=>{const b=e.target.closest('button[data-idx]');if(b&&!b.disabled)craft(parseInt(b.dataset.idx));});
$('tradeList').addEventListener('click',e=>{const b=e.target.closest('button[data-id]');if(!b||b.disabled)return;const id=b.dataset.id;
  if(tradeTab==='buy'){const p=buyPrice(id);if(S.coins>=p){S.coins-=p;addItem(id,1);recordTrade('buy',id,1);Sfx.coin();toast('Куплено: '+item(id).name);}}
  else{const p=sellPrice(id);if(takeItem(id,1)){S.coins+=p;recordTrade('sell',id,1);Sfx.coin();toast('Продано: '+item(id).name);}}
  checkTutorial();save();});
$('invFilters').addEventListener('click',e=>{const b=e.target.closest('.filter-btn');if(b){invFilter=b.dataset.cat;buildFilters();renderInventory();}});
$('craftFilters').addEventListener('click',e=>{const b=e.target.closest('.filter-btn');if(b){craftFilter=b.dataset.cat;buildFilters();renderCraft();}});
$('mapArea').addEventListener('click',e=>{const el=e.target.closest('.map-node');if(el){selectedMap=el.dataset.id;renderMap();}});
$('btnJump').addEventListener('pointerdown',e=>{e.preventDefault();if(state==='playing'&&!activePanel)jumpQueued=true;});
$('btnInteract').addEventListener('pointerdown',e=>{e.preventDefault();if(state==='playing'&&!activePanel)interactQueued=true;});
$('btnAttack').addEventListener('pointerdown',e=>{e.preventDefault();if(state==='playing'&&!activePanel)attackQueued=true;});
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
renderer.domElement.addEventListener('wheel',e=>{e.preventDefault();frustum=clamp(frustum+e.deltaY*.01,7,22);},{passive:false});
window.addEventListener('resize',()=>renderer.setSize(innerWidth,innerHeight));
window.addEventListener('blur',()=>{clearActionQueues();cancelGather();if(state==='playing'&&!activePanel){state='paused';openPanel('pause');}});
document.addEventListener('visibilitychange',()=>{if(document.hidden){clearActionQueues();cancelGather();}});

/* ==================== ЦИКЛ ==================== */
const clock=new THREE.Clock();let firstFrame=true,loopErrorShown=false;
function animate(){
  requestAnimationFrame(animate);
  const dt=Math.min(clock.getDelta(),.05),t=clock.elapsedTime;
  try{
    fpsAcc+=dt;fpsFrames++;
    if(fpsAcc>=.5){fps=Math.round(fpsFrames/fpsAcc);fpsAcc=0;fpsFrames=0;$('fpsText').textContent=fps;
      if(fps<28){slowTime+=.5;if(slowTime>2.5&&quality!=='low'){quality=quality==='high'?'medium':'low';applyQuality();toast('⚙️ Качество снижено для плавности');slowTime=0;}}else slowTime=0;}
    if(state==='playing'&&!activePanel){
      S.playTime+=dt;
      updatePlayer(dt,t);
      updateGatherAction(dt);
      updateInteractions();
      updateWorld(dt,t);
      if(attackQueued){attackQueued=false;playerAttack();}
      hudTimer+=dt;if(hudTimer>.12){hudTimer=0;renderHUD();renderQuest();}
      saveTimer+=dt;if(saveTimer>3){saveTimer=0;save();}
    } else if(state==='intro'){camYawT+=dt*.05;}
    renderPanels();
    updateSky(dt);updateParticles(dt);updateCamera(dt);renderer.render(scene,camera);
    if(firstFrame){firstFrame=false;window.__fmReady=true;$('boot').classList.add('hide');setTimeout(()=>$('boot').remove(),600);}
  }catch(err){
    console.error(err);
    if(!loopErrorShown){loopErrorShown=true;toast('Ошибка движка: '+err.message);}
  }
}

/* ==================== СТАРТ ==================== */
if(hasSave){$('btnContinue').style.display='';$('introSaveInfo').textContent='Сохранение: уровень '+S.level+' · '+S.coins+' монет · '+D.locations[S.location].name;}
world=buildLocation(S.location);player.x=0;player.z=5;applyQuality();openPanel('intro');renderAll();animate();
