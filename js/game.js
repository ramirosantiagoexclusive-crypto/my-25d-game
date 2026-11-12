import {RES,BUILD,POLICY,TAX,LORDS,SECTORS,ROADS} from './data.js';
import * as SIM from './sim.js';
import * as BATTLE from './battle.js';
const $=i=>document.getElementById(i),cl=(v,a,b)=>Math.max(a,Math.min(b,v));
let S=SIM.create(),sel='keep',acc=0,last=performance.now(),cTarget=null,cRaid=false,pending=null;
let muted=false,AC=null;
function beep(f,d=.08,t='sine',v=.12){if(muted)return;try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();
 const o=AC.createOscillator(),g=AC.createGain();o.type=t;o.frequency.value=f;g.gain.setValueAtTime(v,AC.currentTime);
 g.gain.exponentialRampToValueAtTime(.001,AC.currentTime+d);o.connect(g);g.connect(AC.destination);o.start();o.stop(AC.currentTime+d);}catch(e){}}
$('snd').onclick=()=>{muted=!muted;$('snd').textContent=muted?'🔇':'🔊';};
$('help').onclick=()=>$('ovHelp').classList.remove('hide');
$('helpClose').onclick=()=>$('ovHelp').classList.add('hide');
document.querySelectorAll('#speed button').forEach(b=>b.onclick=()=>{S.speed=+b.dataset.s;
 document.querySelectorAll('#speed button').forEach(x=>x.classList.toggle('on',x===b));beep(520);});
const cv=$('map'),ctx=cv.getContext('2d');
function resize(){const r=cv.parentElement.getBoundingClientRect();cv.width=r.width*devicePixelRatio;cv.height=r.height*devicePixelRatio;
 ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);}
addEventListener('resize',resize);setTimeout(resize,60);
const W=()=>cv.width/devicePixelRatio,H=()=>cv.height/devicePixelRatio;
const pos=id=>({x:SECTORS[id].x*W(),y:SECTORS[id].y*H()});
function drawMap(){
 const w=W(),h=H();ctx.clearRect(0,0,w,h);
 const g=ctx.createLinearGradient(0,0,w,h);g.addColorStop(0,'#d8c9a4');g.addColorStop(.5,'#c9b894');g.addColorStop(1,'#bfae8a');
 ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
 ctx.globalAlpha=.06;for(let i=0;i<220;i++){ctx.fillStyle=i%2?'#6b5636':'#8a7a5e';
  ctx.fillRect((i*137)%w,(i*89)%h,2,2);}ctx.globalAlpha=1;
 ctx.strokeStyle='rgba(90,70,45,.35)';ctx.lineWidth=3;ctx.setLineDash([7,6]);
 ROADS.forEach(([a,b])=>{const p=pos(a),q=pos(b);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();});
 ctx.setLineDash([]);
 for(const id in S.sectors){const s=S.sectors[id],p=pos(id),L=LORDS[s.owner],v=SIM.villages(s);
  ctx.globalAlpha=.16;ctx.fillStyle=L.color;ctx.beginPath();ctx.arc(p.x,p.y,44+v*3,0,7);ctx.fill();ctx.globalAlpha=1;
  for(let i=0;i<v;i++){const a=i/v*6.283,r=30;const hx=p.x+Math.cos(a)*r,hy=p.y+Math.sin(a)*r;
   ctx.fillStyle='#7a5230';ctx.fillRect(hx-4,hy-3,8,6);ctx.fillStyle='#b09055';
   ctx.beginPath();ctx.moveTo(hx-6,hy-3);ctx.lineTo(hx,hy-9);ctx.lineTo(hx+6,hy-3);ctx.closePath();ctx.fill();}
  const R0=SECTORS[id].cap?27:22;
  ctx.fillStyle='#241c14';ctx.beginPath();ctx.arc(p.x,p.y,R0+3,0,7);ctx.fill();
  ctx.fillStyle=L.color;ctx.beginPath();ctx.arc(p.x,p.y,R0,0,7);ctx.fill();
  if(id===sel){ctx.strokeStyle='#fff3d0';ctx.lineWidth=3;ctx.beginPath();ctx.arc(p.x,p.y,R0+7,0,7);ctx.stroke();}
  ctx.font=`${SECTORS[id].cap?21:17}px serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(L.crest,p.x,p.y+1);
  ctx.font='bold 13px Alegreya,serif';ctx.fillStyle='#241c14';
  ctx.fillText(SECTORS[id].n,p.x,p.y+R0+15);
  ctx.font='11px PT Sans,sans-serif';ctx.fillStyle='#5a4830';
  ctx.fillText(`👥${Math.round(s.pop)}  ⚔️${s.mil+s.gar}  🛡️${SIM.defense(s)}`,p.x,p.y+R0+29);
  if(s.project){ctx.fillStyle='rgba(36,28,20,.5)';ctx.fillRect(p.x-24,p.y+R0+34,48,5);
   ctx.fillStyle='#6f9450';ctx.fillRect(p.x-24,p.y+R0+34,48*cl(s.project.prog/s.project.need,0,1),5);}}
 S.armies.forEach(a=>{const p=pos(a.from),q=pos(a.to),t=1-a.days/a.total;
  const x=p.x+(q.x-p.x)*t,y=p.y+(q.y-p.y)*t,L=LORDS[a.owner];
  ctx.strokeStyle=L.color;ctx.lineWidth=2;ctx.setLineDash([4,4]);
  ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();ctx.setLineDash([]);
  ctx.fillStyle='#241c14';ctx.beginPath();ctx.arc(x,y,13,0,7);ctx.fill();
  ctx.fillStyle=a.raid?'#e07a68':L.color;ctx.beginPath();ctx.arc(x,y,10,0,7);ctx.fill();
  ctx.font='12px serif';ctx.fillStyle='#241c14';ctx.fillText(a.raid?'🔥':'⚔️',x,y+1);
  ctx.font='bold 10px PT Sans';ctx.fillStyle='#241c14';ctx.fillText(a.mil+a.gar+' · '+a.days+'д',x,y+22);});
 ctx.font='italic 12px Alegreya,serif';ctx.fillStyle='rgba(90,70,45,.6)';ctx.textAlign='left';
 ctx.fillText('Земли Вороньего Камня · '+SIM.season(S.day).i+' '+SIM.season(S.day).n,14,h-14);}
cv.onclick=e=>{const r=cv.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
 let best=null,bd=1e9;for(const id in S.sectors){const p=pos(id),d=Math.hypot(p.x-x,p.y-y);if(d<40&&d<bd){bd=d;best=id;}}
 if(best){sel=best;beep(660,.05);render();}};
cv.onmousemove=e=>{const r=cv.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;const tip=$('mapTip');
 let best=null,bd=1e9;for(const id in S.sectors){const p=pos(id),d=Math.hypot(p.x-x,p.y-y);if(d<40&&d<bd){bd=d;best=id;}}
 if(best){const s=S.sectors[best];tip.innerHTML=`<b>${SECTORS[best].n}</b><br>${LORDS[s.owner].n}<br>👥 ${Math.round(s.pop)} · 🏘️ ${SIM.villages(best)} деревень<br>⚔️ ${s.mil} ополчения, ${s.gar} ратников`;
  tip.style.left=Math.min(x+14,r.width-240)+'px';tip.style.top=(y+14)+'px';tip.style.opacity=1;}else tip.style.opacity=0;};
cv.onmouseleave=()=>$('mapTip').style.opacity=0;
function render(){
 const T=SIM.totals(S);
 $('date').textContent=`День ${S.day} · ${SIM.season(S.day).i} ${SIM.season(S.day).n}`;
 $('hCoin').textContent=T.coin;$('hPop').textContent=T.pop;$('hMil').textContent=T.mil+T.gar;$('hLand').textContent=T.land;
 const s=S.sectors[sel],L=LORDS[s.owner],mine=s.owner==='player',jobs=s.jobs||{};
 let h=`<div class="card"><h2>${SECTORS[sel].n}</h2><div class="lord">${L.crest} ${L.n}${L.desc?' — '+L.desc:''}</div>`;
 h+=`<div class="row"><span>👥 Жители</span><b>${Math.round(s.pop)} / ${SIM.housing(s)}</b></div>`;
 h+=`<div class="row"><span>🏘️ Деревни · дворы</span><b>${SIM.villages(s)} · ${s.b.homestead}</b></div>`;
 h+=`<div class="row"><span>🛠️ Работники</span><b>${SIM.workers(s)}</b></div>`;
 h+=`<div class="row"><span>⚔️ Ополчение / ратники</span><b>${s.mil} / ${s.gar}</b></div>`;
 h+=`<div class="row"><span>🛡️ Оборона</span><b>${SIM.defense(s)}</b></div>`;
 h+=`<div class="lbl">Запасы</div><div class="grid">`;
 for(const r in RES)h+=`<div class="res">${RES[r].i} ${Math.round(s.stock[r])}</div>`;
 h+=`</div><div class="lbl">Промыслы (работники)</div><div class="blds">`;
 for(const k in BUILD)if(s.b[k])h+=`<div class="bld">${BUILD[k].i} ${BUILD[k].n} ${s.b[k]}${BUILD[k].w?` · ${jobs[k]||0}👷`:''}</div>`;
 h+=`</div>`;
 if(s.project)h+=`<div class="lbl">Строится: ${BUILD[s.project.k].n}</div><div class="bar"><i style="width:${cl(s.project.prog/s.project.need*100,0,100)}%;background:#6f9450"></i></div>`;
 h+=`<div class="lbl">Смута</div><div class="bar"><i style="width:${s.unrest*100}%;background:${s.unrest>.6?'#a8382a':'#c9a227'}"></i></div>`;
 h+=`</div>`;
 if(mine){
  h+=`<div class="card"><div class="lbl" style="margin-top:0">Уклад сектора</div><div class="seg" id="pol">`;
  for(const k in POLICY)h+=`<button data-p="${k}" class="${s.policy===k?'on':''}">${POLICY[k].i}<br>${POLICY[k].n}</button>`;
  h+=`</div><div class="lbl">Подать</div><div class="seg" id="tax">`;
  for(const k in TAX)h+=`<button data-t="${k}" class="${s.tax===k?'on':''}">${TAX[k].n}</button>`;
  h+=`</div></div>`;
  const maxRaise=Math.max(0,Math.floor(s.pop*.5)-s.mil);
  h+=`<div class="card"><div class="lbl" style="margin-top:0">Ополчение · ${s.mil}</div>
   <input type="range" id="levy" min="0" max="${maxRaise}" value="${Math.min(6,maxRaise)}">
   <div style="font-size:12px;text-align:center;margin-top:3px">Созвать <b id="levyN">${Math.min(6,maxRaise)}</b> душ (уйдут с промыслов)</div>
   <button class="btn" id="btnRaise" ${maxRaise?'':'disabled'}>⚔️ Созвать ополчение</button>
   <button class="btn sm" id="btnDisband" ${s.mil?'':'disabled'}>🌾 Распустить 5</button>
   <div class="lbl">Дружина · ${s.gar} ратников (45🪙 каждый)</div>
   <button class="btn sm" id="btnHire" ${s.stock.coin>=45?'':'disabled'}>🛡️ Нанять 1</button>
   <button class="btn sm" id="btnDismiss" ${s.gar?'':'disabled'}>Распустить 1</button>
   <button class="btn gold" id="btnCampaign">🚩 Военный совет</button></div>`;}
 else{const my=SIM.totals(S);
  h+=`<div class="card"><div class="lbl" style="margin-top:0">Разведка</div>
   <div class="row"><span>Наша сила в поле</span><b>${my.mil+my.gar*2}</b></div>
   <div class="row"><span>Их оборона</span><b>${SIM.defense(s)}</b></div>
   <button class="btn gold" id="btnCampaign">🚩 Поход на ${SECTORS[sel].n}</button></div>`;}
 $('side').innerHTML=h;
 if(mine){
  $('pol').onclick=e=>{const b=e.target.closest('[data-p]');if(b){s.policy=b.dataset.p;beep(600);render();}};
  $('tax').onclick=e=>{const b=e.target.closest('[data-t]');if(b){s.tax=b.dataset.t;beep(600);render();}};
  const lv=$('levy');lv.oninput=()=>$('levyN').textContent=lv.value;
  $('btnRaise').onclick=()=>{SIM.raise(S,sel,+lv.value);beep(420,.12,'square');render();};
  $('btnDisband').onclick=()=>{SIM.disband(S,sel,5);beep(340);render();};
  $('btnHire').onclick=()=>{SIM.hire(S,sel,1);beep(720,.1);render();};
  $('btnDismiss').onclick=()=>{SIM.dismissGar(S,sel,1);render();};}
 $('btnCampaign').onclick=()=>openCampaign();
 $('log').innerHTML=S.log.slice(0,26).map(e=>`<div class="le" style="color:${e.c}"><span>д.${e.d}</span>${e.t}</div>`).join('');
 $('alerts').innerHTML=S.alerts.map(a=>`<div class="alert"><div class="at">⚠️ ${a.t}</div><div class="as">${a.s}</div>
  <button class="btn red sm" data-int="${a.id}">Выступить навстречу</button></div>`).join('');
 $('alerts').querySelectorAll('[data-int]').forEach(b=>b.onclick=()=>{
  const army=S.armies.find(x=>x.id===+b.dataset.int);if(!army)return;
  const home=S.sectors[army.to];
  askBattle(army,`Сеча у ${SECTORS[army.to].n}`,`${LORDS[army.owner].n} ведёт ${army.mil+army.gar} человек. Ваши: ${home.mil} ополчения и ${home.gar} ратников.`);});
 drawMap();}
function openCampaign(){
 const mine=Object.keys(S.sectors).filter(i=>S.sectors[i].owner==='player');
 $('cFrom').innerHTML=mine.map(i=>`<option value="${i}" ${i===sel?'selected':''}>${SECTORS[i].n} — ${S.sectors[i].mil} ополч., ${S.sectors[i].gar} ратн.</option>`).join('');
 cTarget=SECTORS[sel].owner==='player'?null:sel;cRaid=false;
 document.querySelectorAll('#cType button').forEach(b=>b.classList.toggle('on',b.dataset.r==='0'));
 updCampaign();$('ovCampaign').classList.remove('hide');}
function updCampaign(){
 const from=$('cFrom').value,s=S.sectors[from];
 $('cTargets').innerHTML=Object.keys(S.sectors).filter(i=>S.sectors[i].owner!=='player')
  .map(i=>`<button data-t="${i}" class="${cTarget===i?'on':''}"><span>${LORDS[S.sectors[i].owner].crest} ${SECTORS[i].n}</span><span>🛡️ ${SIM.defense(S.sectors[i])}</span></button>`).join('');
 $('cTargets').querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{cTarget=b.dataset.t;updCampaign();});
 const cm=$('cMil'),cg=$('cGar');cm.max=s.mil;cg.max=s.gar;
 cm.value=Math.min(+cm.value||Math.round(s.mil*.7),s.mil);cg.value=Math.min(+cg.value||Math.round(s.gar*.6),s.gar);
 $('cMilN').textContent=cm.value;$('cGarN').textContent=cg.value;
 const ok=cTarget&&(+cm.value+ +cg.value)>0;
 $('cLead').disabled=!ok;$('cAuto').disabled=!ok;
 $('cSub').textContent=cTarget?`На ${SECTORS[cTarget].n} · сила ${SIM.armyPower(s,+cm.value,+cg.value)} против обороны ${SIM.defense(S.sectors[cTarget])}`:'Выберите цель';}
$('cFrom').onchange=updCampaign;$('cMil').oninput=updCampaign;$('cGar').oninput=updCampaign;
document.querySelectorAll('#cType button').forEach(b=>b.onclick=()=>{cRaid=b.dataset.r==='1';
 document.querySelectorAll('#cType button').forEach(x=>x.classList.toggle('on',x===b));beep(500);});
$('cCancel').onclick=()=>$('ovCampaign').classList.add('hide');
function launch(lead){
 const from=$('cFrom').value,mil=+$('cMil').value,gar=+$('cGar').value,s=S.sectors[from];
 s.mil-=mil;s.gar-=gar;$('ovCampaign').classList.add('hide');
 const a=SIM.march(S,from,cTarget,mil,gar,cRaid,lead);
 if(lead){a.days=1;}
 beep(300,.2,'sawtooth');render();}
$('cLead').onclick=()=>launch(true);$('cAuto').onclick=()=>launch(false);
function askBattle(army,title,text){
 pending=army;$('baT').textContent=title;$('baP').textContent=text;$('ovBattleAsk').classList.remove('hide');}
$('baLead').onclick=()=>{const a=pending;$('ovBattleAsk').classList.add('hide');runBattle(a);};
$('baAuto').onclick=()=>{const a=pending;$('ovBattleAsk').classList.add('hide');
 const playerAttacks=a.owner==='player';SIM.resolve(S,a,null);afterBattle();};
function runBattle(a){
 const playerAttacks=a.owner==='player';
 const home=playerAttacks?S.sectors[a.from]:S.sectors[a.to];
 const foe=playerAttacks?S.sectors[a.to]:S.sectors[a.from];
 const allies=cl(playerAttacks?a.mil+a.gar:home.mil+home.gar,3,16);
 const enemies=cl(playerAttacks?Math.round(SIM.defense(foe)/6):a.mil+a.gar,3,18);
 BATTLE.start({allies,enemies,raid:a.raid,level:1},win=>{
  SIM.resolve(S,a,playerAttacks?win:!win);afterBattle();});}
function afterBattle(){pending=null;S.alerts=S.alerts.filter(x=>S.armies.some(a=>a.id===x.id));S.speed=1;
 document.querySelectorAll('#speed button').forEach(x=>x.classList.toggle('on',x.dataset.s==='1'));render();}
function frame(now){
 requestAnimationFrame(frame);
 const dt=Math.min((now-last)/1000,.25);last=now;
 if(S.speed>0&&!pending&&$('battle').classList.contains('on')===false){
  acc+=dt*S.speed*1.6;
  while(acc>=1){acc-=1;const ev=SIM.tick(S);
   if(ev==='battle'){const a=S.battle;S.battle=null;
    const def=S.sectors[a.to].owner==='player';
    askBattle(a,def?`Оборона ${SECTORS[a.to].n}`:`Штурм ${SECTORS[a.to].n}`,
     `${LORDS[a.owner].n}: ${a.mil} ополчения, ${a.gar} ратников. ${a.raid?'Это набег — жгут деревни.':'Идут на захват земель.'}`);
    beep(180,.35,'sawtooth',.16);break;}}}
 render();}
resize();render();requestAnimationFrame(frame);
setTimeout(()=>$('ovHelp').classList.remove('hide'),400);
