import {GOODS,TROOPS,BUILD,KIND,LORDS,WEAPONS,ARMORS,SEASONS,ROADS,FORMATIONS} from './data.js';
import * as SIM from './sim.js';
import * as SC from './scene.js';
const $=i=>document.getElementById(i),cl=(v,a,b)=>Math.max(a,Math.min(b,v));
let S=SIM.create(),view='scene',curSettle='keep',mapSel=null,battleArmy=null,acc=0,last=performance.now(),muted=false,AC=null,paused=false;
let mapPan={x:0,y:0},mapZoom=1,mapDrag=false,mapDragStart=null;
function sfx(k){if(muted)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)());
 const t=AC.currentTime,o=AC.createOscillator(),g=AC.createGain();o.connect(g);g.connect(AC.destination);
 const P={hit:[220,90,.09,'square',.14],swing:[520,240,.07,'sine',.07],hurt:[180,60,.2,'sawtooth',.16],
  kill:[300,110,.14,'square',.12],dodge:[700,300,.1,'sine',.08],coin:[880,1300,.08,'sine',.12],
  build:[200,420,.2,'square',.12],horn:[150,320,.45,'sawtooth',.16],ui:[600,700,.05,'sine',.07]}[k]||[440,440,.06,'sine',.08];
 o.type=P[3];o.frequency.setValueAtTime(P[0],t);o.frequency.exponentialRampToValueAtTime(P[1],t+P[2]);
 g.gain.setValueAtTime(P[4],t);g.gain.exponentialRampToValueAtTime(.001,t+P[2]);o.start(t);o.stop(t+P[2]+.02);}catch(e){}}
function toast(m){const e=$('toast');e.textContent=m;e.classList.add('on');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('on'),2400);}
function feed(m,c){const f=$('feed'),d=document.createElement('div');d.className='fe';d.style.borderLeftColor=c||'#c9a227';d.innerHTML=m;
 f.appendChild(d);while(f.children.length>5)f.removeChild(f.firstChild);setTimeout(()=>d.remove(),3600);}
let curFormation='line';
function cycleFormation(){const ks=Object.keys(FORMATIONS);curFormation=ks[(ks.indexOf(curFormation)+1)%ks.length];
 SC.setFormation(curFormation);updateBattleHud();sfx('ui');}
function updateBattleHud(){const f=$('bForm');if(f)f.textContent=FORMATIONS[curFormation].n;
 const o=$('bOrd');if(o)o.textContent={attack:'В атаку',hold:'Держать строй',advance:'Наступать',follow:'За мной',retreat:'Отход'}[SC.getFormation?order:order]||order;}
const hooks={sfx,interact:doInteract,order:o=>{order=o;const f=$('bOrd');if(f)f.textContent={attack:'В атаку',hold:'Держать строй',advance:'Наступать',follow:'За мной',retreat:'Отход'}[o];sfx('horn');},
 cycleFormation,battleEnd:(win,losses)=>endBattle(win,losses),settleInteract:null};
let order='attack';
SC.init($('view'),hooks);
SC.setFormation(curFormation);
enterSettlement('keep');
setTimeout(()=>$('ovHelp').classList.remove('hide'),350);
function enterSettlement(id){curSettle=id;view='scene';const s=S.settlements[id];
 S.player.x=s.x;S.player.y=s.y;S.player.tx=null;
 SC.loadSettlement(s,S.player.troops,null);
 $('place').querySelector('.n').textContent=s.n;
 $('place').querySelector('.s').textContent=`${KIND[s.kind].n} · ${LORDS[s.lord]?.n||'—'} · люд ${Math.round(s.pop)} · гарнизон ${s.gar}`;
 $('bHud').classList.remove('on');closeAll();toast(`Вы вошли в ${s.n}`);}
function exitToMap(){view='map';$('ovMap').classList.remove('hide');mapSel=curSettle;drawMap();renderMapSide();sfx('ui');}
function closeAll(){['ovDialog','ovParty','ovRealm','ovMap','ovHelp','ovSave'].forEach(i=>$(i).classList.add('hide'));}
function doInteract(){
 if(view!=='scene'||battleArmy)return;
 const it=SC.nearestInteract();if(!it)return;const s=S.settlements[curSettle];
 if(it.act==='gate'){exitToMap();return;}
 if(it.act==='steward')openSteward(s);
 else if(it.act==='recruit')openRecruit(s);
 else if(it.act==='merchant')openMerchant(s);
 else if(it.act==='tavern')openTavern(s);}
function dialog(t,sub,html){$('dgT').textContent=t;$('dgS').textContent=sub;$('dgBody').innerHTML=html;$('ovDialog').classList.remove('hide');}
function openSteward(s){const mine=s.lord==='you';
 let h=`<div class="row"><span>Казна поселения</span><b>${Math.round(s.income||0)} 🪙 / 5 дней</b></div>
 <div class="row"><span>Ваша казна</span><b>${S.player.gold} 🪙</b></div>
 <div class="row"><span>Люд · достаток</span><b>${Math.round(s.pop)} · ${Math.round(s.pros)}</b></div>
 <div class="row"><span>Занято мест</span><b>${SIM.used(s)} / ${SIM.slots(s)}</b></div>`;
 if(s.project)h+=`<div class="card"><div class="ct">🔨 Строится: ${BUILD[s.project.k].n}</div><div class="cd">Осталось ${s.project.left} дн.</div></div>`;
 if(s.upgrade)h+=`<div class="card"><div class="ct">🏗️ Перестройка в ${KIND[s.upgrade.to].n}</div><div class="cd">Осталось ${s.upgrade.left} дн.</div></div>`;
 h+=`<div class="lbl">Запасы</div><div class="grid3">`;
 for(const g in GOODS)h+=`<div class="tag">${GOODS[g].i} ${GOODS[g].n}: ${Math.round(s.stock[g])}</div>`;h+=`</div>`;
 if(mine){const K=KIND[s.kind];
  if(K.up)h+=`<button class="btn gold" id="upg">🏗️ Перестроить в ${KIND[K.up].n} — ${K.uc.gold}🪙 + материалы (${K.ud} дн.)</button>`;
  h+=`<div class="lbl">Возвести</div>`;
  for(const k in BUILD){const B=BUILD[k],err=SIM.canBuild(s,k),cost=Object.entries(B.c).map(([r,n])=>r==='gold'?n+'🪙':GOODS[r].i+n).join(' ');
   h+=`<div class="card"><div class="ct"><span>${B.i} ${B.n} <small>${s.b[k]||0}/${B.max}</small></span><span style="font-size:11px">${cost}</span></div>
   <div class="cd">${B.dsc} · ${B.d} дн.</div><button class="btn sm" data-b="${k}" ${err||S.player.gold<B.c.gold?'disabled':''}>${err||'Заложить'}</button></div>`;}}
 else h+=`<div class="card"><div class="cd">Чужое владение. Захватите его в бою, чтобы строить здесь.</div></div>`;
 dialog('Управляющий',s.n,h);
 $('dgBody').querySelectorAll('[data-b]').forEach(b=>b.onclick=()=>{const e=SIM.startBuild(S,s.id,b.dataset.b,S.player.gold);
  if(e)toast(e);else{S.player.gold-=BUILD[b.dataset.b].c.gold;sfx('build');feed('🔨 Заложено: '+BUILD[b.dataset.b].n);}openSteward(s);});
 const u=$('upg');if(u)u.onclick=()=>{const e=SIM.startUpgrade(S,s.id,S.player.gold);if(e)toast(e);else{S.player.gold-=KIND[s.kind].uc.gold;sfx('build');}openSteward(s);};}
function openRecruit(s){const n=Math.min(s.recruits,60-SIM.partySize(S));
 const troopKey=s.kind==='village'?'peasant':s.kind==='town'?'levy':'spearman';
 const T=TROOPS[troopKey];
 const unitCost=s.kind==='village'?24:s.kind==='town'?38:52;
 let h=`<div class="row"><span>Готовы наняться</span><b>${s.recruits} чел.</b></div>
 <div class="row"><span>В вашем отряде</span><b>${SIM.partySize(S)} / 60</b></div>
 <div class="row"><span>Тип набора</span><b>${T.n}</b></div>
 <div class="row"><span>Цена за одного</span><b>${unitCost} 🪙</b></div>
 <div class="row"><span>Жалованье в день</span><b>${T.wage} 🪙 / чел.</b></div>
 <div class="row"><span>Боевая подготовка</span><b>Ур.${T.t} · HP ${T.hp} · удар ${T.atk} · броня ${T.arm}</b></div>`;
 if(s.lord!=='you')h+=`<div class="card"><div class="cd">Чужие люди идут неохотно: набор дороже.</div></div>`;
 h+=`<div class="lbl">Нанять</div><div style="display:flex;gap:6px;flex-wrap:wrap">`;
 [1,3,5,10].forEach(k=>h+=`<button class="btn sm" data-r="${k}" ${n<k?'disabled':''}>+${k} (${k*unitCost}🪙)</button>`);
 h+=`</div><button class="btn" id="rAll" ${n<1?'disabled':''}>Нанять всех (${n}) — ${n*unitCost}🪙</button>`;
 dialog('Старшина',s.n,h);
 const go=k=>{const r=SIM.recruit(S,s.id,k);if(r.err)toast(r.err);else{sfx('coin');feed(`👥 +${r.n} бойцов за ${r.cost}🪙`);SC.loadSettlement(s,S.player.troops,null);}openRecruit(s);};
 $('dgBody').querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>go(+b.dataset.r));
 $('rAll').onclick=()=>go(n);}
function openMerchant(s){const cargo=S.player.cargo||{};
 let h=`<div class="row"><span>Ваша казна</span><b>${S.player.gold} 🪙</b></div><div class="lbl">Товары</div>`;
 for(const g in GOODS){const base=GOODS[g].p,buy=Math.round(base*1.15*(1+(s.pros-50)/220)),sell=Math.round(base*.82*(1+(s.pros-50)/220));
  h+=`<div class="card"><div class="ct"><span>${GOODS[g].i} ${GOODS[g].n}</span><span style="font-size:11px">куп ${buy}🪙 · прод ${sell}🪙</span></div>
  <div class="cd">На складе: ${Math.round(s.stock[g])} · у вас: ${cargo[g]||0}</div>
  <div class="cb"><button class="btn sm" data-buy="${g}" ${s.stock[g]<1||S.player.gold<buy?'disabled':''}>Купить 1</button>
  <button class="btn sm" data-buy5="${g}" ${s.stock[g]<5||S.player.gold<buy*5?'disabled':''}>×5</button>
  <button class="btn sm" data-sell="${g}" ${(cargo[g]||0)<1?'disabled':''}>Продать 1</button></div></div>`;}
 h+=`<div class="lbl">Снаряжение лорда</div>`;
 WEAPONS.forEach((w,i)=>{if(i<=S.player.weapon)return;
  h+=`<div class="card"><div class="ct"><span>🗡️ ${w.n}</span><span>${w.c}🪙</span></div><div class="cd">Урон ${w.atk} · досягаемость ${w.reach}</div>
  <button class="btn sm" data-w="${i}" ${S.player.gold<w.c?'disabled':''}>Купить</button></div>`;});
 ARMORS.forEach((a,i)=>{if(i<=S.player.armor)return;
  h+=`<div class="card"><div class="ct"><span>🛡️ ${a.n}</span><span>${a.c}🪙</span></div><div class="cd">Защита ${a.arm}</div>
  <button class="btn sm" data-a="${i}" ${S.player.gold<a.c?'disabled':''}>Купить</button></div>`;});
 if(S.player.prisoners)h+=`<button class="btn gold" id="sellP">⛓️ Продать пленных (${S.player.prisoners}) — ${S.player.prisoners*22}🪙</button>`;
 dialog('Купец',s.n+' · достаток '+Math.round(s.pros),h);
 const B=$('dgBody');
 B.querySelectorAll('[data-buy]').forEach(b=>b.onclick=()=>{const r=SIM.trade(S,s.id,b.dataset.buy,true,1);if(r.err)toast(r.err);else sfx('coin');openMerchant(s);});
 B.querySelectorAll('[data-buy5]').forEach(b=>b.onclick=()=>{const r=SIM.trade(S,s.id,b.dataset.buy5,true,5);if(r.err)toast(r.err);else sfx('coin');openMerchant(s);});
 B.querySelectorAll('[data-sell]').forEach(b=>b.onclick=()=>{const r=SIM.trade(S,s.id,b.dataset.sell,false,1);if(r.err)toast(r.err);else sfx('coin');openMerchant(s);});
 B.querySelectorAll('[data-w]').forEach(b=>b.onclick=()=>{const i=+b.dataset.w;S.player.gold-=WEAPONS[i].c;S.player.weapon=i;sfx('coin');toast('Куплено: '+WEAPONS[i].n);openMerchant(s);});
 B.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{const i=+b.dataset.a;S.player.gold-=ARMORS[i].c;S.player.armor=i;sfx('coin');toast('Куплено: '+ARMORS[i].n);openMerchant(s);});
 const sp=$('sellP');if(sp)sp.onclick=()=>{SIM.sellPrisoners(S);sfx('coin');openMerchant(s);};}
function openTavern(s){let h=`<div class="card"><div class="ct">🍺 Наёмники</div><div class="cd">В корчме сидят люди с оружием. Дороже набора, но уже умеют биться.</div>
 <button class="btn sm" id="merc" ${S.player.gold<180?'disabled':''}>Нанять 3 сержантов — 180🪙</button></div>
 <div class="card"><div class="ct">🐎 Всадники</div><div class="cd">Конный разведчик — быстрый и маневренный боец.</div>
 <button class="btn sm" id="cav" ${S.player.gold<140?'disabled':''}>Нанять 2 разведчиков — 140🪙</button></div>
 <div class="card"><div class="ct">🍷 Угощение отряду</div><div class="cd">Поднимает дух войска.</div>
 <button class="btn sm" id="drink" ${S.player.gold<60?'disabled':''}>Угостить всех — 60🪙</button></div>
 <div class="lbl">Слухи</div>`;
 const wars=Object.keys(S.wars).filter(k=>S.wars[k]).slice(0,4);
 h+=wars.length?wars.map(k=>{const[a,b]=k.split('|');return`<div class="card"><div class="cd">⚔️ ${LORDS[a].n} воюет с ${LORDS[b].n}</div></div>`;}).join(''):'<div class="card"><div class="cd">Пока в землях тихо.</div></div>';
 const rich=Object.values(S.settlements).sort((a,b)=>b.pros-a.pros)[0];
 h+=`<div class="card"><div class="cd">💰 Богаче всех ныне ${rich.n} — достаток ${Math.round(rich.pros)}.</div></div>`;
 dialog('Корчмарь',s.n,h);
 $('merc').onclick=()=>{if(S.player.gold<180)return;S.player.gold-=180;S.player.troops.serjeant=(S.player.troops.serjeant||0)+3;sfx('coin');SC.loadSettlement(s,S.player.troops,null);openTavern(s);};
 $('cav').onclick=()=>{if(S.player.gold<140)return;S.player.gold-=140;S.player.troops.scout=(S.player.troops.scout||0)+2;sfx('coin');SC.loadSettlement(s,S.player.troops,null);openTavern(s);};
 $('drink').onclick=()=>{if(S.player.gold<60)return;S.player.gold-=60;S.player.morale=cl(S.player.morale+14,0,100);sfx('coin');toast('Дух отряда вырос');openTavern(s);};}
function openParty(){const P=S.player;
 let h=`<div class="row"><span>Бойцов</span><b>${SIM.partySize(S)} / 60</b></div>
 <div class="row"><span>Жалованье в день</span><b>${SIM.wage(S)} 🪙</b></div>
 <div class="row"><span>Провизия</span><b>${Math.round(P.food)} (нужно ${Math.ceil(SIM.partySize(S)*.5)}/день)</b></div>
 <div class="row"><span>Пленные</span><b>${P.prisoners}</b></div>
 <div class="row"><span>Оружие · доспех</span><b>${WEAPONS[P.weapon].n} · ${ARMORS[P.armor].n}</b></div><div class="lbl">Состав</div>`;
 const ks=Object.keys(P.troops).filter(k=>P.troops[k]>0);
 if(!ks.length)h+=`<div class="card"><div class="cd">Отряда нет. Наймите людей у старшины.</div></div>`;
 const branchNames={inf:'Пехота',arch:'Стрелки',cav:'Конница'};
 ks.forEach(k=>{const T=TROOPS[k];
  h+=`<div class="card"><div class="ct"><span>${T.n} <small>×${P.troops[k]}</small></span><span style="font-size:11px">${branchNames[T.branch]||'Пехота'} · ур.${T.t} · ${T.wage}🪙/дн</span></div>
  <div class="cd">Здоровье ${T.hp} · удар ${T.atk} · доспех ${T.arm}${T.ranged?' · стрелок':''}${T.branch==='cav'?' · конница':''}</div>
  ${T.up?`<button class="btn sm" data-u="${k}" ${P.gold<T.uc?'disabled':''}>Обучить одного → ${TROOPS[T.up].n} (${T.uc}🪙)</button>`:''}</div>`;});
 $('ptS').textContent=`Слава ${P.renown} · честь ${P.honor} · уровень ${P.lvl}`;
 $('ptBody').innerHTML=h;$('ovParty').classList.remove('hide');
 $('ptBody').querySelectorAll('[data-u]').forEach(b=>b.onclick=()=>{const e=SIM.upgradeTroop(S,b.dataset.u);if(e)toast(e);else{sfx('coin');feed('🎖️ Боец обучен');}openParty();});}
function openRealm(){const own=Object.values(S.settlements).filter(s=>s.lord==='you');
 let h=`<div class="grid2"><div class="card"><div class="ct">🏰 Ваши владения</div><div class="cd">${own.length} поселений · подати ${own.reduce((a,s)=>a+(s.income||0),0)}🪙 / 5 дней</div></div>
 <div class="card"><div class="ct">📜 Войны</div><div class="cd">${Object.keys(S.wars).filter(k=>S.wars[k]).length/2||0} активных</div></div></div>`;
 h+=`<div class="lbl">Поселения</div>`;
 own.forEach(s=>{h+=`<div class="card"><div class="ct"><span>${KIND[s.kind].i} ${s.n}</span><span style="font-size:11px">${KIND[s.kind].n}</span></div>
  <div class="cd">Люд ${Math.round(s.pop)} · достаток ${Math.round(s.pros)} · гарнизон ${s.gar} · оборона ${SIM.defPower(s)} · места ${SIM.used(s)}/${SIM.slots(s)}</div>
  <div class="cb">${Object.entries(s.b).filter(([,n])=>n).map(([k,n])=>`<span class="tag">${BUILD[k].i}${n}</span>`).join('')}</div>
  ${s.project?`<div class="cd">🔨 ${BUILD[s.project.k].n}: ${s.project.left} дн.</div>`:''}
  ${s.upgrade?`<div class="cd">🏗️ → ${KIND[s.upgrade.to].n}: ${s.upgrade.left} дн.</div>`:''}
  <button class="btn sm" data-go="${s.id}">Войти</button></div>`;});
 if(S.sites.length){h+=`<div class="lbl">Пустые места — можно основать деревню (420🪙 + 44🪵 + 26🪨 из столицы)</div>`;
  S.sites.forEach(t=>h+=`<div class="card"><div class="ct"><span>📍 ${t.n}</span></div>
   <div class="cd">Люди готовы идти сюда, если вы дадите брус и камень.</div>
   <button class="btn sm" data-f="${t.id}" ${S.player.gold<420?'disabled':''}>Основать деревню</button></div>`);;}
 h+=`<div class="lbl">Прочие державы</div>`;
 Object.keys(LORDS).filter(l=>l!=='you').forEach(l=>{const ss=Object.values(S.settlements).filter(s=>s.lord===l);
  const a=S.armies.find(x=>x.lord===l);
  h+=`<div class="card"><div class="ct"><span style="color:${LORDS[l].c}">${LORDS[l].crest} ${LORDS[l].full}</span><span style="font-size:11px">${ss.length} владений</span></div>
  <div class="cd">Войско в поле: ${a?a.size:0} чел. · ${ss.map(s=>s.n).join(', ')||'изгнан'}</div></div>`;});
 $('rlBody').innerHTML=h;$('ovRealm').classList.remove('hide');
 $('rlBody').querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{closeAll();enterSettlement(b.dataset.go);});
 $('rlBody').querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{const e=SIM.foundSite(S,b.dataset.f,S.player.gold);
  if(e)toast(e);else{S.player.gold-=420;sfx('build');feed('🏘️ Новое поселение основано!');}openRealm();});}
const mc=$('mapC'),mx=mc.getContext('2d');
function mapResize(){const r=mc.parentElement.getBoundingClientRect();mc.width=r.width*devicePixelRatio;mc.height=r.height*devicePixelRatio;mx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);}
const MW=()=>mc.width/devicePixelRatio,MH=()=>mc.height/devicePixelRatio;
function w2s(nx,ny){const w=MW(),h=MH(),vw=w/mapZoom,vh=h/mapZoom;
 const cx=nx*vw+mapPan.x*w,cy=ny*vh+mapPan.y*h;return{x:cx,y:cy};}
function s2w(sx,sy){const w=MW(),h=MH(),vw=w/mapZoom,vh=h/mapZoom;
 return{x:(sx-mapPan.x*w)/vw,y:(sy-mapPan.y*h)/vh};}
function drawMap(){mapResize();const w=MW(),h=MH();
 mx.save();mx.fillStyle='#bcab88';mx.fillRect(0,0,w,h);
 mx.translate(mapPan.x*w,mapPan.y*h);mx.scale(mapZoom,mapZoom);
 const vw=w/mapZoom,vh=h/mapZoom;
 const g=mx.createLinearGradient(0,0,vw,vh);g.addColorStop(0,'#d8c9a4');g.addColorStop(.55,'#c9b894');g.addColorStop(1,'#bcab88');
 mx.fillStyle=g;mx.fillRect(-mapPan.x*w,-mapPan.y*h,vw,vh);
 mx.globalAlpha=.04;for(let i=0;i<260;i++){mx.fillStyle=i%2?'#6b5636':'#8a7a5e';mx.fillRect((i*137)%vw,(i*97)%vh,2,2);}mx.globalAlpha=1;
 mx.strokeStyle='rgba(90,70,45,.35)';mx.lineWidth=2.5;
 ROADS.forEach(([a,b])=>{const sa=S.settlements[a],sb=S.settlements[b];if(!sa||!sb)return;
  mx.setLineDash([7,4]);mx.beginPath();mx.moveTo(sa.x*vw,sa.y*vh);mx.lineTo(sb.x*vw,sb.y*vh);mx.stroke();});
 mx.setLineDash([]);
 mx.strokeStyle='rgba(90,70,45,.18)';mx.lineWidth=1.5;mx.setLineDash([2,6]);
 Object.values(S.settlements).forEach(s=>{const near=Object.values(S.settlements).filter(o=>o!==s).sort((a,b)=>Math.hypot(a.x-s.x,a.y-s.y)-Math.hypot(b.x-s.x,b.y-s.y))[0];
  if(near){mx.beginPath();mx.moveTo(s.x*vw,s.y*vh);mx.lineTo(near.x*vw,near.y*vh);mx.stroke();}});
 mx.setLineDash([]);
 S.sites.forEach(t=>{const x=t.x*vw,y=t.y*vh;mx.strokeStyle='#7a6444';mx.lineWidth=2;mx.setLineDash([3,3]);
  mx.beginPath();mx.arc(x,y,13,0,7);mx.stroke();mx.setLineDash([]);mx.font='13px serif';mx.textAlign='center';mx.textBaseline='middle';
  mx.fillStyle='#5a4830';mx.fillText('📍',x,y);mx.font='10px PT Sans';mx.fillText(t.n,x,y+22);});
 Object.values(S.settlements).forEach(s=>{const x=s.x*vw,y=s.y*vh,L0=LORDS[s.lord]||LORDS.you,r=s.kind==='village'?15:s.kind==='town'?20:22;
  mx.globalAlpha=.15;mx.fillStyle=L0.c;mx.beginPath();mx.arc(x,y,r+16,0,7);mx.fill();mx.globalAlpha=1;
  mx.fillStyle='#241c14';mx.beginPath();mx.arc(x,y,r+3,0,7);mx.fill();
  mx.fillStyle=L0.c;mx.beginPath();mx.arc(x,y,r,0,7);mx.fill();
  if(mapSel===s.id){mx.strokeStyle='#fff3d0';mx.lineWidth=3;mx.beginPath();mx.arc(x,y,r+7,0,7);mx.stroke();}
  mx.font=`${r}px serif`;mx.textAlign='center';mx.textBaseline='middle';mx.fillText(KIND[s.kind].i,x,y+1);
  mx.font='bold 12px Alegreya,serif';mx.fillStyle='#241c14';mx.fillText(s.n,x,y+r+14);
  mx.font='10px PT Sans';mx.fillStyle='#5a4830';mx.fillText(`${Math.round(s.pop)}👥 ${s.gar}🛡️`,x,y+r+26);
  if(s.project||s.upgrade){mx.fillStyle='#6f9450';mx.fillRect(x-16,y+r+30,32,4);}});
 S.armies.forEach(a=>{const x=a.x*vw,y=a.y*vh,c=a.kind==='bandit'?'#6b5a4a':LORDS[a.lord].c;
  if(a.tx!=null){mx.strokeStyle=c;mx.globalAlpha=.4;mx.lineWidth=1.5;mx.setLineDash([3,3]);
   mx.beginPath();mx.moveTo(x,y);mx.lineTo(a.tx*vw,a.ty*vh);mx.stroke();mx.setLineDash([]);mx.globalAlpha=1;}
  mx.fillStyle='#241c14';mx.beginPath();mx.arc(x,y,11,0,7);mx.fill();
  mx.fillStyle=c;mx.beginPath();mx.arc(x,y,8.5,0,7);mx.fill();
  mx.font='10px serif';mx.fillStyle='#241c14';mx.fillText(a.kind==='bandit'?'🗡️':'⚔️',x,y+1);
  mx.font='bold 9px PT Sans';mx.fillText(a.size,x,y+18);});
 const P0=S.player,px=P0.x*vw,py=P0.y*vh;
 if(P0.tx!=null){mx.strokeStyle='#c9a227';mx.lineWidth=2;mx.setLineDash([5,4]);mx.beginPath();mx.moveTo(px,py);mx.lineTo(P0.tx*vw,P0.ty*vh);mx.stroke();mx.setLineDash([]);}
 mx.fillStyle='#241c14';mx.beginPath();mx.arc(px,py,13,0,7);mx.fill();
 mx.fillStyle='#c9a227';mx.beginPath();mx.arc(px,py,10,0,7);mx.fill();
 mx.font='13px serif';mx.fillStyle='#241c14';mx.fillText('🦅',px,py+1);
 mx.restore();
 mx.font='italic 11px Alegreya,serif';mx.fillStyle='rgba(90,70,45,.65)';mx.textAlign='left';
 mx.fillText(`День ${S.day} · ${SIM.season(S.day).i} ${SIM.season(S.day).n} · отряд ${SIM.partySize(S)} · zoom ${mapZoom.toFixed(1)}×`,12,h-12);
 mx.textAlign='right';mx.fillText('Колесо — зум · ПКМ тащить · ЛКМ — идти/выбрать',w-12,h-12);mx.textAlign='left';}
function renderMapSide(){
 let h=`<div class="speed" id="spd"><button data-s="0">❚❚</button><button data-s="1">▶</button><button data-s="2">▶▶</button><button data-s="4">▶▶▶</button></div>`;
 h+=`<div class="card"><div class="ct">🦅 Ваш отряд</div><div class="cd">${SIM.partySize(S)} бойцов · сила ${Math.round(SIM.partyPower(S))} · дух ${Math.round(S.player.morale)}</div>
 <div class="cd">🪙${S.player.gold} · 🌾${Math.round(S.player.food)} · 🏵️${S.player.renown}</div></div>`;
 h+=`<div class="card"><div class="ct">💾 Сохранение</div>
 <div class="cb"><button class="btn sm" id="mSave">Сохранить</button><button class="btn sm" id="mLoad">Загрузить</button></div></div>`;
 if(mapSel&&S.settlements[mapSel]){const s=S.settlements[mapSel],mine=s.lord==='you';
  h+=`<div class="card"><div class="ct"><span>${KIND[s.kind].i} ${s.n}</span></div>
  <div class="cd">${KIND[s.kind].n} · ${LORDS[s.lord]?.full||'—'}</div>
  <div class="row"><span>Люд</span><b>${Math.round(s.pop)}</b></div>
  <div class="row"><span>Достаток</span><b>${Math.round(s.pros)}</b></div>
  <div class="row"><span>Гарнизон</span><b>${s.gar}</b></div>
  <div class="row"><span>Оборона</span><b>${SIM.defPower(s)}</b></div>
  <button class="btn gold" id="mEnter">${mine?'Войти':'Войти (чужое)'}</button>
  ${!mine?`<button class="btn red" id="mSiege">⚔️ Осадить (сила ${Math.round(SIM.partyPower(S))})</button>`:''}</div>`;}
 else if(mapSel&&mapSel.army){const a=mapSel.army;
  h+=`<div class="card"><div class="ct">${a.kind==='bandit'?'🗡️ Разбойники':LORDS[a.lord].full}</div>
  <div class="cd">${a.size} человек · сила ${SIM.armyPower(a)} · дух ${Math.round(a.mor)}</div>
  <button class="btn red" id="mFight">⚔️ Атаковать</button></div>`;}
 else if(mapSel&&mapSel.site){const t=mapSel.site;
  h+=`<div class="card"><div class="ct">📍 ${t.n}</div><div class="cd">Пустое место. Можно основать деревню.</div>
  <button class="btn gold" id="mFound">Основать (420🪙 + 44🪵 + 26🪨)</button></div>`;}
 h+=`<div class="lbl">Хроника</div><div id="log">${S.log.slice(0,22).map(e=>`<div style="color:${e.c}"><span>д.${e.d}</span>${e.t}</div>`).join('')}</div>`;
 $('mapSide').innerHTML=h;
 $('spd').querySelectorAll('button').forEach(b=>{b.classList.toggle('on',+b.dataset.s===S.speed);
  b.onclick=()=>{S.speed=+b.dataset.s;sfx('ui');renderMapSide();};});
 const sv=$('mSave');if(sv)sv.onclick=()=>{if(SIM.save(S)){toast('Игра сохранена');sfx('coin');}else toast('Ошибка сохранения');};
 const ld=$('mLoad');if(ld)ld.onclick=()=>{const c=SIM.load();if(c){S=SIM.restore(c);toast('Игра загружена');sfx('ui');drawMap();renderMapSide();}else toast('Нет сохранения');};
 const en=$('mEnter');if(en)en.onclick=()=>{const s=S.settlements[mapSel];
  if(Math.hypot(s.x-S.player.x,s.y-S.player.y)>.09){S.player.tx=s.x;S.player.ty=s.y;toast('Идём к '+s.n);renderMapSide();return;}
  enterSettlement(s.id);};
 const sg=$('mSiege');if(sg)sg.onclick=()=>{const s=S.settlements[mapSel];startSiege(s);};
 const fi=$('mFight');if(fi)fi.onclick=()=>startBattle(mapSel.army);
 const fo=$('mFound');if(fo)fo.onclick=()=>{const e=SIM.foundSite(S,mapSel.site.id,S.player.gold);
  if(e)toast(e);else{S.player.gold-=420;sfx('build');mapSel=null;}drawMap();renderMapSide();};}
mc.addEventListener('wheel',e=>{e.preventDefault();const f=e.deltaY<0?1.15:.87;mapZoom=cl(mapZoom*f,.6,4);drawMap();},{passive:false});
mc.addEventListener('contextmenu',e=>e.preventDefault());
mc.addEventListener('pointerdown',e=>{if(e.button===2){mapDrag=true;mapDragStart={x:e.clientX,y:e.clientY,px:mapPan.x,py:mapPan.y};}});
addEventListener('pointerup',()=>{mapDrag=false;});
mc.addEventListener('pointermove',e=>{if(mapDrag&&mapDragStart){const r=mc.getBoundingClientRect();
 mapPan.x=mapDragStart.px+(e.clientX-mapDragStart.x)/r.width/mapZoom;
 mapPan.y=mapDragStart.py+(e.clientY-mapDragStart.y)/r.height/mapZoom;
 mapPan.x=cl(mapPan.x,-1,1);mapPan.y=cl(mapPan.y,-1,1);drawMap();}});
mc.onclick=e=>{if(e.button!==0)return;const r=mc.getBoundingClientRect(),sx=(e.clientX-r.left)/r.width,sy=(e.clientY-r.top)/r.height;
 const wp=s2w(sx,sy);const x=wp.x,y=wp.y;
 let best=null,bd=1e9;
 Object.values(S.settlements).forEach(s=>{const d=Math.hypot(s.x-x,s.y-y);if(d<.045/mapZoom&&d<bd){bd=d;best=s.id;}});
 S.armies.forEach(a=>{const d=Math.hypot(a.x-x,a.y-y);if(d<.035/mapZoom&&d<bd){bd=d;best={army:a};}});
 S.sites.forEach(t=>{const d=Math.hypot(t.x-x,t.y-y);if(d<.035/mapZoom&&d<bd){bd=d;best={site:t};}});
 if(best){mapSel=best;sfx('ui');}else{S.player.tx=cl(x,.03,.97);S.player.ty=cl(y,.03,.97);mapSel=null;}
 drawMap();renderMapSide();};
function troopsFromSize(size,elite){const out={};let left=size;
 if(elite){const pool=['levy','spearman','archer','serjeant','scout','rider','knight'];
  const weights=[3,3,2,2,1,1,0.5];
  while(left>0){const r=Math.random();let acc=0,pick='levy';
  for(let i=0;i<pool.length;i++){acc+=weights[i]/weights.reduce((a,b)=>a+b,0);if(r<acc){pick=pool[i];break;}}
  out[pick]=(out[pick]||0)+1;left--;}}
 else{const pool=['brigand','brigand','raider','bandit_archer','bandit_rider'];
  while(left>0){const k=pool[Math.floor(Math.random()*pool.length)];out[k]=(out[k]||0)+1;left--;}}
 return out;}
function startBattle(army){battleArmy=army;view='battle';closeAll();
 const allies={...S.player.troops};if(!Object.keys(allies).length)allies.levy=1;
 const enemies=troopsFromSize(cl(army.size,3,26),army.kind!=='bandit');
 SC.setAllyMor(S.player.morale);
 $('bHud').classList.add('on');$('bOrd').textContent='В атаку';
 const bf=$('bForm');if(bf)bf.textContent=FORMATIONS[curFormation].n;
 $('place').querySelector('.n').textContent='Сеча в поле';
 $('place').querySelector('.s').textContent=(army.kind==='bandit'?'Разбойники':LORDS[army.lord].n)+' · '+army.size+' чел.';
 SC.loadBattle(allies,enemies,army.kind==='bandit',S.player.hp);sfx('horn');}
function startSiege(s){battleArmy={siege:s,id:-1,kind:'lord',lord:s.lord,size:s.gar,mor:80};view='battle';closeAll();
 const allies={...S.player.troops};if(!Object.keys(allies).length)allies.levy=1;
 const enemies=troopsFromSize(cl(s.gar,4,26),true);
 SC.setAllyMor(S.player.morale);
 $('bHud').classList.add('on');$('place').querySelector('.n').textContent='Осада '+s.n;
 $('place').querySelector('.s').textContent='Гарнизон '+s.gar+' · оборона '+SIM.defPower(s);
 SC.loadBattle(allies,enemies,false,S.player.hp);sfx('horn');}
function endBattle(win,losses){
 $('bHud').classList.remove('on');const bm=$('bmsg');
 bm.querySelector('.m1').textContent=win?'Поле за вами':'Отряд отступил';
 bm.querySelector('.m1').style.color=win?'#c9a227':'#e07a68';
 bm.querySelector('.m2').textContent=win?'Неприятель бежал, добыча ваша':'Вы выжили, но войско поредело';
 bm.classList.add('on');
 setTimeout(()=>{bm.classList.remove('on');
  S.player.hp=cl(SC.heroHp(),20,100);
  if(battleArmy&&battleArmy.siege){const s=battleArmy.siege;
   for(const k in losses)S.player.troops[k]=Math.max(0,(S.player.troops[k]||0)-losses[k]);
   Object.keys(S.player.troops).forEach(k=>{if(!S.player.troops[k])delete S.player.troops[k];});
   if(win){const old=s.lord;s.lord='you';s.gar=Math.max(2,Math.round(SIM.partySize(S)*.3));s.unrest=.5;
    S.player.renown+=14;S.player.gold+=200;SIM.log(S,`🏴 ${s.n} взят! ${LORDS[old]?.n||'—'} изгнан`,'#c9a227');}
   else{S.player.morale=cl(S.player.morale-12,0,100);SIM.log(S,`🛡️ Осада ${s.n} отбита`,'#e07a68');}
   battleArmy=null;enterSettlement(win?s.id:'keep');}
  else if(battleArmy){SIM.applyBattle(S,battleArmy,win,losses);battleArmy=null;view='map';$('ovMap').classList.remove('hide');mapSel=null;drawMap();renderMapSide();}
  renderHud();},2000);}
function renderHud(){const P=S.player,st=SC.heroState();
 $('hpF').style.width=cl(st.hp/st.max*100,0,100)+'%';$('hpT').textContent=Math.max(0,Math.round(st.hp));
 $('morF').style.width=P.morale+'%';$('morT').textContent=Math.round(P.morale);
 $('hGold').textContent=P.gold;$('hParty').textContent=SIM.partySize(S);$('hFood').textContent=Math.round(P.food);
 $('hRen').textContent=P.renown;$('hDay').textContent=S.day;
 if(view==='battle'){const c=SC.counts();$('bAl').textContent=c.ally+' + вы';$('bEn').textContent=c.enemy;}}
$('bMap').onclick=()=>{if(view==='battle')return;if($('ovMap').classList.contains('hide'))exitToMap();else{closeAll();view='scene';}};
$('bParty').onclick=()=>{if(view==='battle')return;openParty();};
$('bRealm').onclick=()=>{if(view==='battle')return;openRealm();};
$('bSnd').onclick=()=>{muted=!muted;$('bSnd').textContent=muted?'🔇':'';$('bSnd').classList.toggle('on',!muted);};
$('bHelp').onclick=()=>$('ovHelp').classList.remove('hide');
$('bSave')?.addEventListener('click',()=>{if(SIM.save(S)){toast('Игра сохранена');sfx('coin');}else toast('Ошибка сохранения');});
$('hpClose').onclick=()=>$('ovHelp').classList.add('hide');
$('dgClose').onclick=()=>$('ovDialog').classList.add('hide');
$('ptClose').onclick=()=>$('ovParty').classList.add('hide');
$('rlClose').onclick=()=>$('ovRealm').classList.add('hide');
$('mpClose').onclick=()=>{closeAll();view='scene';};
addEventListener('keydown',e=>{if(e.repeat)return;
 if(e.code==='KeyM'&&view!=='battle'){if($('ovMap').classList.contains('hide'))exitToMap();else{closeAll();view='scene';}}
 if(e.code==='KeyP'&&view!=='battle')openParty();
 if(e.code==='KeyR'&&view!=='battle')openRealm();
 if(e.code==='KeyH')$('ovHelp').classList.remove('hide');
 if(e.code==='KeyF5'){e.preventDefault();if(SIM.save(S)){toast('Игра сохранена');sfx('coin');}}
 if(e.code==='Escape'){const open=['ovDialog','ovParty','ovRealm','ovMap','ovHelp'].find(i=>!$(i).classList.contains('hide'));
  if(open){$(open).classList.add('hide');if(open==='ovMap')view='scene';}}});
addEventListener('blur',()=>{if(view==='map')S.speed=0;});
let mapDrawAcc=0;
function frame(now){requestAnimationFrame(frame);
 const dt=Math.min((now-last)/1000,.05);last=now;
 const modalOpen=['ovDialog','ovParty','ovRealm','ovHelp'].some(i=>!$(i).classList.contains('hide'));
 if(view==='map'&&!modalOpen){
  acc+=dt*S.speed;
  while(acc>=.06){acc-=.06;
   const ev=SIM.playerMove(S,.06);
   if(ev&&ev.type==='army'){S.speed=0;startBattle(ev.army);break;}
   if(Math.random()<.06){SIM.tick(S);}}
  if(view==='map'){drawMap();mapDrawAcc+=dt;if(mapDrawAcc>.3){mapDrawAcc=0;renderMapSide();}}}
 if(!modalOpen||view==='battle')SC.update(dt,now/1000,WEAPONS[S.player.weapon],ARMORS[S.player.armor].arm);
 else SC.update(0,now/1000,WEAPONS[S.player.weapon],ARMORS[S.player.armor].arm);
 if(view==='scene'){const it=SC.nearestInteract();
  $('prompt').classList.toggle('on',!!it);if(it)$('promptT').textContent=it.label;}
 else $('prompt').classList.remove('on');
 renderHud();}
requestAnimationFrame(frame);
