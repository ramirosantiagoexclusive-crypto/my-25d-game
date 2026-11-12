import {BUILD,POLICY,TAX,LORDS,SECTORS,SEASONS,ROADS} from './data.js';
const cl=(v,a,b)=>Math.max(a,Math.min(b,v)),ri=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export const season=d=>SEASONS[Math.floor((d%120)/30)];
export const villages=s=>cl(1+Math.floor(s.pop/38),1,9);
export const housing=s=>villages(s)*12+s.b.homestead*BUILD.homestead.house;
export const workers=s=>Math.max(0,Math.floor(s.pop*.62)-s.mil);
export const armyPower=(s,mil,gar)=>Math.round((mil*(1+s.b.barracks*.16)+gar*2.3)*(1+s.b.barracks*.08));
export const defense=s=>Math.round(s.gar*2.3+s.mil*(1+s.b.barracks*.16)+s.b.palisade*BUILD.palisade.def+s.pop*.06);
export function create(){
 const S={day:1,speed:1,sectors:{},armies:[],log:[],alerts:[],nextId:1,battle:null,stat:{raids:0,wins:0,losses:0}};
 for(const id in SECTORS){const d=SECTORS[id];
  S.sectors[id]={id,owner:d.lord,pop:d.pop,mil:0,gar:d.lord==='player'?4:ri(2,5),
   stock:{food:60,wood:50,stone:30,iron:10,cloth:8,coin:d.lord==='player'?120:70},
   b:Object.assign({homestead:0,farm:0,lumber:0,quarry:0,mine:0,workshop:0,market:0,barracks:0,palisade:0,chapel:0},d.b),
   project:null,unrest:.08,policy:d.lord==='player'?'subsist':(LORDS[d.lord].policy||'subsist'),tax:'mid',lastRaid:0};}
 log(S,'🦅 Вы приняли Вороний Камень. Подданные уже вышли на работу.','#c9a227');
 return S;}
export function log(S,t,c){S.log.unshift({d:S.day,t,c:c||'#d8c9a6'});if(S.log.length>60)S.log.pop();}
const rich=(s,k)=>SECTORS[s.id].rich[k]||1;
function allocate(s){
 const avail=workers(s),jobs={};let left=avail;
 let order=POLICY[s.policy].prio.filter(k=>BUILD[k].w>0);
 const need=s.pop*.11+s.mil*.06+s.gar*.13;
 if(s.stock.food<need*14)order=['farm',...order.filter(k=>k!=='farm')];
 for(const k of order){const cap=(s.b[k]||0)*BUILD[k].w,t=Math.min(left,cap);jobs[k]=t;left-=t;}
 jobs.build=left;return jobs;}
function pickProject(s){
 for(const k of POLICY[s.policy].prio){const B=BUILD[k];if((s.b[k]||0)>=B.max)continue;
  if(k==='homestead'&&housing(s)-s.pop>18)continue;
  if(k!=='homestead'&&housing(s)-s.pop<4&&s.pop>30)continue;
  const cost={};let ok=true;
  for(const r in B.cost){const n=Math.ceil(B.cost[r]*(1+(s.b[k]||0)*.22));cost[r]=n;if(s.stock[r]<n)ok=false;}
  if(!ok)continue;
  for(const r in cost)s.stock[r]-=cost[r];
  return{k,need:22+(s.b[k]||0)*10,prog:0};}
 return null;}
function sectorTick(S,s){
 const jobs=allocate(s),se=season(S.day),L=LORDS[s.owner];
 const eff=cl(.55+(1-s.unrest)*.5,.35,1.1);
 s.stock.food+=s.pop*.035*rich(s,'food');
 for(const k in jobs){const B=BUILD[k];if(!B||!B.out)continue;
  for(const r in B.out){let v=jobs[k]*B.out[r]*eff;
   if(r!=='coin'&&r!=='cloth')v*=rich(s,r);
   if(r==='food')v*=se.food;
   if(r==='cloth')v*=1+s.b.workshop*.05;
   s.stock[r]+=v;}}
 s.stock.coin+=s.pop*.045*TAX[s.tax].v*(1+s.b.market*.12);
 const need=s.pop*.11+s.mil*.06+s.gar*.13;
 s.stock.food-=need;s.stock.coin-=s.mil*.022+s.gar*.085;
 if(s.stock.coin<0){s.stock.coin=0;if(s.gar>0&&Math.random()<.25){s.gar--;log(S,`💸 ${SECTORS[s.id].n}: ратник ушёл — казна пуста`,'#c98f2a');}}
 const house=housing(s);
 if(s.stock.food>0&&s.pop<house){const g=s.pop*.011*L.growth*(1-s.unrest)*cl(s.stock.food/(need*10),.2,1.4);s.pop+=Math.max(.05,g);}
 else if(s.stock.food<0){const d=Math.min(s.pop*.02,Math.abs(s.stock.food)*.7+.2);s.pop=Math.max(6,s.pop-d);s.stock.food=0;s.unrest=cl(s.unrest+.02,0,1);
  if(Math.random()<.05)log(S,`🥖 ${SECTORS[s.id].n}: голод, люд убывает`,'#a8382a');}
 if(s.pop>house*1.05){s.unrest=cl(s.unrest+.008,0,1);}
 s.unrest=cl(s.unrest+TAX[s.tax].loy*-.06-s.b.chapel*BUILD.chapel.loy*.06+.004,0,1);
 if(s.unrest>.82&&Math.random()<.06){const gone=Math.round(s.pop*.05);s.pop-=gone;s.mil=Math.max(0,s.mil-Math.round(gone*.4));s.unrest=.55;
  log(S,`🔥 ${SECTORS[s.id].n}: бунт! ${gone} душ ушло`,'#a8382a');}
 if(!s.project&&jobs.build>0)s.project=pickProject(s);
 if(s.project){s.project.prog+=jobs.build*.85*(1+s.b.workshop*.06);
  if(s.project.prog>=s.project.need){const k=s.project.k;s.b[k]=(s.b[k]||0)+1;s.project=null;
   if(s.owner==='player')log(S,`🔨 ${SECTORS[s.id].n}: возведено — ${BUILD[k].n} (${s.b[k]})`,'#8fc46a');}}
 s.mil=Math.min(s.mil,Math.floor(s.pop*.5));
 for(const r in s.stock)s.stock[r]=Math.max(0,s.stock[r]);
 s.jobs=jobs;}
function aiLord(S,id){
 const s=S.sectors[id],L=LORDS[s.owner];if(s.owner==='player')return;
 const needFood=s.stock.food<(s.pop*.11)*12;
 s.policy=needFood?'subsist':(s.unrest>.5?'growth':(L.policy||'subsist'));
 s.tax=s.stock.coin<25?'high':(s.unrest>.45?'low':'mid');
 const cap=Math.floor(s.pop*(L.aggr>.9?.34:.2));
 if(s.mil<cap&&s.stock.food>s.pop*.5)s.mil=Math.min(cap,s.mil+ri(1,3));
 if(s.mil>cap+3)s.mil-=ri(1,2);
 if(L.thrift>1.2&&s.stock.coin>90&&s.gar<8&&Math.random()<.4){s.gar++;s.stock.coin-=45;}
 if(S.day-s.lastRaid<16-L.aggr*4)return;
 const foes=ROADS.filter(r=>r.includes(id)).map(r=>r[0]===id?r[1]:r[0]).filter(t=>S.sectors[t].owner!==s.owner);
 if(!foes.length)return;
 foes.sort((a,b)=>defense(S.sectors[a])-defense(S.sectors[b]));
 const t=foes[0],my=armyPower(s,s.mil,s.gar),their=defense(S.sectors[t]);
 const raid=L.aggr>1.2||my<their*1.1;
 if(my<(raid?14:their*1.25))return;
 const mil=Math.min(s.mil,Math.max(6,Math.round(s.mil*(raid?.5:.8))));
 const gar=raid?0:Math.min(s.gar,Math.round(s.gar*.6));
 if(mil+gar<5)return;
 s.mil-=mil;s.gar-=gar;s.lastRaid=S.day;
 march(S,id,t,mil,gar,raid,false);}
export function march(S,from,to,mil,gar,raid,lead){
 const a=SECTORS[from],b=SECTORS[to];
 const dist=Math.round(2+Math.hypot(a.x-b.x,a.y-b.y)*7);
 const army={id:S.nextId++,owner:S.sectors[from].owner,from,to,mil,gar,raid,days:dist,total:dist,lead};
 S.armies.push(army);
 if(S.sectors[to].owner==='player'){
  S.alerts.push({id:army.id,t:raid?'Набег на '+b.n:'Войско идёт на '+b.n,s:`${LORDS[army.owner].short}: ${mil} ополчения, ${gar} ратников · ${dist} дн. пути`});
  log(S,`⚠️ ${LORDS[army.owner].n} ${raid?'шлёт набег':'идёт войной'} на ${b.n}`,'#e07a68');}
 else if(army.owner==='player')log(S,`🚩 Ваше войско выступило на ${b.n} (${mil+gar} чел.)`,'#c9a227');
 return army;}
function applyRaid(S,a,win){
 const t=S.sectors[a.to],home=S.sectors[a.from];
 if(win){const stolen={};for(const r of ['food','wood','stone','iron','cloth','coin']){const v=Math.round(t.stock[r]*.28);t.stock[r]-=v;home.stock[r]+=v;stolen[r]=v;}
  const killed=Math.round(t.pop*ri(3,7)/100);t.pop=Math.max(6,t.pop-killed);
  const keys=Object.keys(t.b).filter(k=>t.b[k]>0);if(keys.length){const k=keys[ri(0,keys.length-1)];t.b[k]--;}
  t.unrest=cl(t.unrest+.15,0,1);a.mil=Math.max(0,a.mil-ri(0,Math.ceil(a.mil*.12)));
  log(S,`🔥 ${LORDS[a.owner].short} разорил ${SECTORS[a.to].n}: ${killed} душ, сожжено строение`,'#e07a68');
  if(a.owner==='player'){S.stat.raids++;log(S,`💰 Набег принёс добычу в ${SECTORS[a.from].n}`,'#c9a227');}}
 else{a.mil=Math.round(a.mil*.35);a.gar=Math.round(a.gar*.4);
  log(S,`🛡️ ${SECTORS[a.to].n} отбил набег ${LORDS[a.owner].short}`,'#8fc46a');}
 home.mil+=a.mil;home.gar+=a.gar;}
function applyConquest(S,a,win){
 const t=S.sectors[a.to],home=S.sectors[a.from];
 if(win){const old=LORDS[t.owner].short;t.owner=a.owner;t.mil=0;t.gar=Math.max(1,a.gar);
  t.pop=Math.max(8,Math.round(t.pop*.86));t.unrest=.45;t.project=null;
  t.policy=a.owner==='player'?'subsist':(LORDS[a.owner].policy||'subsist');
  const keys=Object.keys(t.b).filter(k=>t.b[k]>0&&k!=='palisade');if(keys.length)t.b[keys[ri(0,keys.length-1)]]--;
  home.mil+=Math.round(a.mil*.75);
  log(S,`🏴 ${SECTORS[a.to].n} пал! ${old} изгнан, теперь владеет ${LORDS[a.owner].short}`,a.owner==='player'?'#c9a227':'#e07a68');
  if(a.owner==='player')S.stat.wins++;else S.stat.losses++;}
 else{a.mil=Math.round(a.mil*.3);a.gar=Math.round(a.gar*.35);t.mil=Math.round(t.mil*.8);
  home.mil+=a.mil;home.gar+=a.gar;
  log(S,`🛡️ ${SECTORS[a.to].n} выстоял против ${LORDS[a.owner].short}`,'#8fc46a');
  if(a.owner==='player')S.stat.losses++;else S.stat.wins++;}}
export function resolve(S,a,playerWin){
 const def=defense(S.sectors[a.to]),att=armyPower(S.sectors[a.from],a.mil,a.gar);
 let win;
 if(playerWin===null||playerWin===undefined){const p=att/(att+def);win=Math.random()<cl(p*(a.raid?1.15:1),.08,.92);}
 else{const p=att/(att+def);win=Math.random()<cl(p*(playerWin?1.55:.6),.05,.97);}
 a.raid?applyRaid(S,a,win):applyConquest(S,a,win);
 S.armies=S.armies.filter(x=>x.id!==a.id);
 S.alerts=S.alerts.filter(x=>x.id!==a.id);}
export function tick(S){
 S.day++;
 for(const id in S.sectors)sectorTick(S,S.sectors[id]);
 if(S.day%4===0)for(const id in S.sectors)aiLord(S,id);
 for(let i=S.armies.length-1;i>=0;i--){const a=S.armies[i];a.days--;
  if(a.days<=0){
   const playerSide=a.owner==='player'||S.sectors[a.to].owner==='player';
   if(playerSide&&!a.resolved){S.battle=a;a.resolved=true;S.speed=0;return 'battle';}
   resolve(S,a,null);}}
 if(S.day%30===1&&S.day>1)log(S,`${season(S.day).i} Наступила ${season(S.day).n.toLowerCase()}`,'#b9a37a');
 return null;}
export function raise(S,id,n){const s=S.sectors[id];n=cl(n,0,Math.floor(s.pop*.5)-s.mil);s.mil+=n;
 if(n>0)log(S,`⚔️ ${SECTORS[id].n}: созвано ${n} ополчения`,'#8fa8c4');return n;}
export function disband(S,id,n){const s=S.sectors[id];n=cl(n,0,s.mil);s.mil-=n;if(n>0)log(S,`🌾 ${SECTORS[id].n}: ${n} ополченцев распущены по домам`,'#8fc46a');}
export function hire(S,id,n){const s=S.sectors[id];const cost=n*45;if(s.stock.coin<cost)return 0;
 s.stock.coin-=cost;s.gar+=n;log(S,`🛡️ ${SECTORS[id].n}: нанято ${n} ратников`,'#c9a227');return n;}
export function dismissGar(S,id,n){const s=S.sectors[id];n=cl(n,0,s.gar);s.gar-=n;}
export const totals=S=>{let pop=0,mil=0,gar=0,coin=0,land=0;for(const id in S.sectors){const s=S.sectors[id];if(s.owner!=='player')continue;pop+=Math.round(s.pop);mil+=s.mil;gar+=s.gar;coin+=Math.round(s.stock.coin);land++;}return{pop,mil,gar,coin,land};};
