import {BUILD,KIND,LORDS,SETTLEMENTS,SITES,GOODS,TROOPS,SEASONS,ROADS} from './data.js';
const cl=(v,a,b)=>Math.max(a,Math.min(b,v)),ri=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export const season=d=>SEASONS[Math.floor((d%120)/30)];
export function create(){
 const S={day:1,speed:1,mode:'scene',settlements:{},sites:SITES.map(s=>({...s})),armies:[],log:[],nid:1,
  player:{x:.5,y:.52,tx:null,ty:null,gold:600,food:60,renown:12,honor:10,hp:100,maxHp:100,morale:72,
   troops:{levy:6,hunter:3},weapon:1,armor:1,xp:0,lvl:1,prisoners:0,days:0},
  wars:{},battle:null,result:null};
 SETTLEMENTS.forEach(d=>{S.settlements[d.id]={...d,b:{...d.b},stock:{grain:70,timber:40,stone:30,iron:12,cloth:8,tools:6,wine:4},
  project:null,upgrade:null,recruits:ri(4,9),tax:'mid',unrest:.1};});
 Object.keys(LORDS).forEach(l=>{if(l==='you')return;S.armies.push(mkArmy(S,l,ri(14,26),S.settlements[Object.keys(S.settlements).find(k=>S.settlements[k].lord===l)].id));});
 for(let i=0;i<3;i++)spawnBandits(S);
 log(S,'🦅 Вы приняли Вороний Камень. Ворота открыты — земли ждут.','#c9a227');
 return S;}
function mkArmy(S,lord,size,at){const s=S.settlements[at]||{x:.5,y:.5};
 return{id:S.nid++,lord,x:s.x,y:s.y,tx:null,ty:null,size,mor:70,kind:'lord',target:null,raid:false,cd:0};}
export function spawnBandits(S){const a=Math.random()*6.283,r=.3+Math.random()*.16;
 S.armies.push({id:S.nid++,lord:'bandit',x:cl(.5+Math.cos(a)*r,.06,.94),y:cl(.5+Math.sin(a)*r,.06,.94),
  tx:null,ty:null,size:ri(6,16),mor:60,kind:'bandit',target:null,raid:true,cd:0});}
export function log(S,t,c){S.log.unshift({d:S.day,t,c:c||'#d8c9a6'});if(S.log.length>70)S.log.pop();}
export const partySize=S=>Object.values(S.player.troops).reduce((a,b)=>a+b,0);
export const partyPower=S=>Object.entries(S.player.troops).reduce((a,[k,n])=>a+n*(TROOPS[k].atk+TROOPS[k].arm*.6),0);
export const wage=S=>Object.entries(S.player.troops).reduce((a,[k,n])=>a+n*TROOPS[k].wage,0);
export const defPower=s=>Math.round(s.gar*13+s.b.walls*22+s.b.tower*16+s.b.keep*40+s.pop*.05);
export const armyPower=a=>Math.round(a.size*(a.kind==='bandit'?11:15)*(a.mor/80+.5));
export const slots=s=>KIND[s.kind].slots;
export const used=s=>Object.values(s.b).reduce((a,b)=>a+b,0);
export function canBuild(s,k){const B=BUILD[k];if((s.b[k]||0)>=B.max)return'Предел';if(used(s)>=slots(s))return'Нет места';
 if(s.project)return'Стройка идёт';for(const r in B.c){const have=r==='gold'?null:s.stock[r];if(r!=='gold'&&have<B.c[r])return'Мало '+GOODS[r].n;}return null;}
export function startBuild(S,id,k,gold){const s=S.settlements[id],err=canBuild(s,k);if(err)return err;
 const B=BUILD[k];if(gold<B.c.gold)return'Мало монет';
 for(const r in B.c)if(r!=='gold')s.stock[r]-=B.c[r];
 s.project={k,left:B.d,total:B.d};log(S,`🔨 ${s.n}: заложено — ${B.n}`,'#8fc46a');return null;}
export function startUpgrade(S,id,gold){const s=S.settlements[id],K=KIND[s.kind];if(!K.up)return'Предел';
 if(s.upgrade)return'Уже строится';if(gold<K.uc.gold)return'Мало монет';
 for(const r in K.uc)if(r!=='gold'&&s.stock[r]<K.uc[r])return'Мало '+GOODS[r].n;
 for(const r in K.uc)if(r!=='gold')s.stock[r]-=K.uc[r];
 s.upgrade={to:K.up,left:K.ud,total:K.ud};log(S,`🏗️ ${s.n} перестраивается в ${KIND[K.up].n.toLowerCase()}`,'#c9a227');return null;}
export function foundSite(S,siteId,gold){const i=S.sites.findIndex(x=>x.id===siteId);if(i<0)return'Нет места';
 const cost={gold:420,timber:44,stone:26};if(gold<cost.gold)return'Нужно 420 монет';
 const st=S.settlements.keep;if(st.stock.timber<cost.timber||st.stock.stone<cost.stone)return'Мало бруса и камня в столице';
 st.stock.timber-=cost.timber;st.stock.stone-=cost.stone;
 const site=S.sites[i],id='f'+S.nid++;
 S.settlements[id]={id,n:site.n,kind:'village',lord:'you',x:site.x,y:site.y,pop:90,pros:30,gar:3,
  b:{farm:1,lumber:1},stock:{grain:40,timber:20,stone:10,iron:2,cloth:0,tools:0,wine:0},project:null,upgrade:null,recruits:5,tax:'mid',unrest:.05};
 S.sites.splice(i,1);log(S,`🏘️ Основана ${site.n}! Люди идут на новое место`,'#c9a227');return null;}
function settleTick(S,s){
 const se=season(S.day),L=LORDS[s.lord]||LORDS.you;
 let inc={grain:0,timber:0,stone:0,iron:0,cloth:0,tools:0,wine:0},tax=0,mor=0,pros=0;
 for(const k in s.b){const B=BUILD[k],n=s.b[k];if(!n)continue;
  if(B.out)for(const r in B.out)inc[r]+=B.out[r]*n;
  if(B.tax)tax+=B.tax*n;if(B.pros)pros+=B.pros*n;}
 inc.grain=Math.round(inc.grain*se.f*(s.pop/300+.5));
 for(const r in inc)s.stock[r]=Math.min(400,s.stock[r]+inc[r]);
 const eat=Math.round(s.pop*.05+s.gar*.12);
 if(s.stock.grain>=eat){s.stock.grain-=eat;s.pop+=Math.max(1,Math.round(s.pop*.006*(1+pros*.1)*L.greed));s.unrest=cl(s.unrest-.01,0,1);}
 else{s.stock.grain=0;s.pop=Math.max(40,s.pop-Math.round(s.pop*.01));s.unrest=cl(s.unrest+.03,0,1);}
 s.pros=cl(s.pros+(pros*.2+(s.b.market?.4:0)-s.unrest*.6),8,100);
 tax=Math.round(tax+s.pop*.09*(s.tax==='high'?1.6:s.tax==='low'?.6:1)*(s.pros/60));
 s.unrest=cl(s.unrest+(s.tax==='high'?.02:s.tax==='low'?-.015:0)-(s.b.church?.02:0),0,1);
 s.income=tax;s.recruits=Math.min(14,s.recruits+(s.b.tavern?2:1)+(s.b.barracks||0));
 s.gar=Math.min(Math.round(s.pop*.09)+(s.b.barracks||0)*3,s.gar+(Math.random()<.35?1:0));
 if(s.project){s.project.left--;if(s.project.left<=0){const k=s.project.k;s.b[k]=(s.b[k]||0)+1;s.project=null;
  if(s.lord==='you')log(S,`✅ ${s.n}: возведено — ${BUILD[k].n}`,'#8fc46a');}}
 if(s.upgrade){s.upgrade.left--;if(s.upgrade.left<=0){s.kind=s.upgrade.to;s.upgrade=null;
  log(S,`🏰 ${s.n} теперь ${KIND[s.kind].n.toLowerCase()}!`,s.lord==='you'?'#c9a227':'#e07a68');}}
 if(s.unrest>.8&&Math.random()<.08){s.pop=Math.round(s.pop*.9);s.gar=Math.max(0,s.gar-3);s.unrest=.4;
  log(S,`🔥 ${s.n}: бунт! Гарнизон разбежался`,'#e07a68');}}
function moveToward(o,tx,ty,step){const dx=tx-o.x,dy=ty-o.y,d=Math.hypot(dx,dy);
 if(d<=step){o.x=tx;o.y=ty;return true;}o.x+=dx/d*step;o.y+=dy/d*step;return false;}
function aiArmy(S,a){
 if(a.cd>0){a.cd--;return;}
 const foes=Object.values(S.settlements).filter(s=>s.lord!==a.lord&&(a.kind==='bandit'||S.wars[a.lord+'|'+s.lord]));
 if(a.kind==='bandit'||Math.random()<.5){
  const t=foes.sort((p,q)=>Math.hypot(p.x-a.x,p.y-a.y)-Math.hypot(q.x-a.x,q.y-a.y))[0];
  if(t){a.tx=t.x;a.ty=t.y;a.target=t.id;a.raid=a.kind==='bandit'||Math.random()<.55;return;}}
 const own=Object.values(S.settlements).filter(s=>s.lord===a.lord);
 const h=own[ri(0,own.length-1)]||{x:.5,y:.5};a.tx=h.x+(Math.random()-.5)*.12;a.ty=h.y+(Math.random()-.5)*.12;a.target=null;}
function raidSettle(S,a,s){
 const win=armyPower(a)>defPower(s)*(.8+Math.random()*.5);
 if(win){const kill=Math.round(s.pop*.06);s.pop=Math.max(40,s.pop-kill);s.pros=cl(s.pros-8,8,100);
  for(const r in s.stock)s.stock[r]=Math.round(s.stock[r]*.72);
  const ks=Object.keys(s.b).filter(k=>s.b[k]>0&&k!=='walls'&&k!=='keep');
  if(ks.length&&Math.random()<.5)s.b[ks[ri(0,ks.length-1)]]--;
  a.size=Math.max(3,a.size-ri(0,2));s.unrest=cl(s.unrest+.14,0,1);
  log(S,`🔥 ${a.lord==='bandit'?'Разбойники':LORDS[a.lord].n} разорили ${s.n}`,'#e07a68');}
 else{a.size=Math.round(a.size*.6);s.gar=Math.max(0,s.gar-ri(1,3));
  log(S,`🛡️ ${s.n} отбил набег`,'#8fc46a');}
 a.cd=8;a.target=null;a.tx=null;}
function siege(S,a,s){
 if(armyPower(a)>defPower(s)*1.05){const old=s.lord;s.lord=a.lord;s.gar=Math.max(2,Math.round(a.size*.35));
  a.size=Math.round(a.size*.7);s.unrest=.5;s.pros=cl(s.pros-10,8,100);
  log(S,`🏴 ${s.n} взят! ${LORDS[old]?.n||'—'} изгнан, владеет ${LORDS[a.lord].n}`,a.lord==='you'?'#c9a227':'#e07a68');}
 else{a.size=Math.round(a.size*.55);s.gar=Math.max(0,s.gar-Math.round(s.gar*.25));
  log(S,`🛡️ ${s.n} выстоял осаду ${LORDS[a.lord].n}`,'#8fc46a');}
 a.cd=12;a.target=null;a.tx=null;}
export function tick(S){
 S.day++;const P=S.player;
 for(const id in S.settlements)settleTick(S,S.settlements[id]);
 const w=wage(S),need=Math.max(1,Math.ceil(partySize(S)*.5));
 P.gold-=w;
 if(P.food>=need){P.food-=need;P.morale=cl(P.morale+1.2,0,100);}
 else{P.food=0;P.morale=cl(P.morale-5,0,100);if(Math.random()<.3){const k=Object.keys(P.troops).find(x=>P.troops[x]>0);
  if(k){P.troops[k]--;log(S,`🌾 Голод: боец покинул отряд`,'#e07a68');}}}
 if(P.gold<0){P.gold=0;P.morale=cl(P.morale-4,0,100);
  const k=Object.keys(P.troops).find(x=>P.troops[x]>0);if(k&&Math.random()<.4){P.troops[k]--;log(S,'💸 Жалованья нет — боец ушёл','#c98f2a');}}
 if(P.morale<25&&Math.random()<.2){const k=Object.keys(P.troops).find(x=>P.troops[x]>0);if(k){P.troops[k]--;log(S,'🏃 Дезертирство в отряде','#e07a68');}}
 P.hp=Math.min(P.maxHp,P.hp+3);
 const own=Object.values(S.settlements).filter(s=>s.lord==='you');
 if(S.day%5===0){let g=0;own.forEach(s=>g+=s.income||0);if(g){P.gold+=g;log(S,`🪙 Подати с владений: +${g}`,'#c9a227');}}
 if(S.day%9===0)Object.keys(LORDS).forEach(l=>{if(l==='you')return;
  const my=Object.values(S.settlements).filter(s=>s.lord===l).length;if(!my)return;
  const others=Object.keys(LORDS).filter(o=>o!==l&&o!=='you');const foe=others[ri(0,others.length-1)];
  const key=l+'|'+foe;if(!S.wars[key]&&Math.random()<.3* LORDS[l].aggr){S.wars[key]=true;S.wars[foe+'|'+l]=true;
   log(S,`⚔️ ${LORDS[l].n} объявил войну ${LORDS[foe].n}`,'#e07a68');}
  else if(S.wars[key]&&Math.random()<.14){delete S.wars[key];delete S.wars[foe+'|'+l];log(S,`🕊️ ${LORDS[l].n} и ${LORDS[foe].n} заключили мир`,'#8fc46a');}});
 S.armies.forEach(a=>{
  if(!a.tx||Math.hypot(a.tx-a.x,a.ty-a.y)<.01)aiArmy(S,a);
  const sp=a.kind==='bandit'?.028:.022;moveToward(a,a.tx,a.ty,sp);
  a.mor=cl(a.mor+.5,30,95);
  if(a.target){const s=S.settlements[a.target];
   if(s&&s.lord!==a.lord&&Math.hypot(s.x-a.x,s.y-a.y)<.035){a.raid?raidSettle(S,a,s):siege(S,a,s);}}
  if(a.size<4&&a.kind==='bandit')a.dead=true;});
 S.armies=S.armies.filter(a=>!a.dead);
 if(S.day%7===0&&S.armies.filter(a=>a.kind==='bandit').length<5)spawnBandits(S);
 Object.values(S.settlements).forEach(s=>{if(s.lord!=='you'&&S.day%6===0){const a=S.armies.find(x=>x.lord===s.lord);if(a)a.size=Math.min(60,a.size+ri(1,3));}});
 return null;}
export function playerMove(S,dt){
 const P=S.player;if(P.tx==null)return null;
 const sp=.055*dt;if(moveToward(P,P.tx,P.ty,sp)){P.tx=null;P.ty=null;}
 for(const a of S.armies){
  const hostile=a.kind==='bandit'||a.lord!=='you';
  if(hostile&&Math.hypot(a.x-P.x,a.y-P.y)<.032){return{type:'army',army:a};}}
 return null;}
export function recruit(S,id,n){const s=S.settlements[id];n=Math.min(n,s.recruits,Math.max(0,60-partySize(S)));
 const cost=n*(s.kind==='village'?24:s.kind==='town'?38:52);if(S.player.gold<cost)return{err:'Мало монет'};
 S.player.gold-=cost;s.recruits-=n;const k=s.kind==='village'?'peasant':s.kind==='town'?'levy':'spearman';
 S.player.troops[k]=(S.player.troops[k]||0)+n;log(S,`👥 ${s.n}: нанято ${n} — ${TROOPS[k].n}`,'#8fa8c4');return{n,cost};}
export function upgradeTroop(S,k){const T=TROOPS[k];if(!T.up)return'Некуда';const n=S.player.troops[k]||0;if(!n)return'Нет бойцов';
 if(S.player.gold<T.uc)return'Мало монет';S.player.gold-=T.uc;S.player.troops[k]--;
 S.player.troops[T.up]=(S.player.troops[T.up]||0)+1;return null;}
export function trade(S,id,good,buy,n){const s=S.settlements[id],base=GOODS[good].p;
 const price=Math.round(base*(buy?1.15:.82)*(1+(s.pros-50)/220));
 if(buy){if(s.stock[good]<n)return'Нет товара';if(S.player.gold<price*n)return'Мало монет';
  S.player.gold-=price*n;s.stock[good]-=n;S.player.cargo=S.player.cargo||{};S.player.cargo[good]=(S.player.cargo[good]||0)+n;}
 else{const c=S.player.cargo||{};if((c[good]||0)<n)return'Нет груза';c[good]-=n;S.player.gold+=price*n;s.stock[good]+=n;}
 return{price};}
export function applyBattle(S,army,win,losses){
 const P=S.player;
 for(const k in losses)P.troops[k]=Math.max(0,(P.troops[k]||0)-losses[k]);
 Object.keys(P.troops).forEach(k=>{if(!P.troops[k])delete P.troops[k];});
 if(win){const loot=ri(60,180)+army.size*6;P.gold+=loot;P.renown+=Math.ceil(army.size/3);P.food+=ri(6,20);
  P.prisoners+=Math.round(army.size*.25);P.morale=cl(P.morale+8,0,100);
  army.size=Math.round(army.size*.3);army.dead=army.size<4;army.mor=40;army.cd=10;army.tx=null;
  log(S,`🏆 Победа! Добыча ${loot}🪙, пленных ${Math.round(army.size*.25)}`,'#c9a227');}
 else{P.morale=cl(P.morale-14,0,100);P.gold=Math.round(P.gold*.85);army.size=Math.round(army.size*.8);
  log(S,'💀 Поражение. Отряд отступил, часть монет потеряна','#e07a68');}
 P.hp=Math.max(20,P.hp);}
export function sellPrisoners(S){const n=S.player.prisoners;if(!n)return 0;const g=n*22;S.player.gold+=g;S.player.prisoners=0;
 log(S,`⛓️ Пленные проданы: +${g}🪙`,'#c9a227');return g;}
