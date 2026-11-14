(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Rn={grain:{n:"Зерно",i:"🌾",p:8},timber:{n:"Брус",i:"🪵",p:14},stone:{n:"Камень",i:"🪨",p:16},iron:{n:"Железо",i:"⛓️",p:34},cloth:{n:"Сукно",i:"🧵",p:40},tools:{n:"Инструмент",i:"🔨",p:62},wine:{n:"Вино",i:"🍷",p:70}},Ln={peasant:{n:"Крестьянин",t:1,hp:44,atk:9,arm:2,spd:3.2,wage:1,cost:24,up:"levy",uc:40,col:9071172,branch:"inf"},levy:{n:"Ополченец",t:2,hp:58,atk:13,arm:6,spd:3.2,wage:2,cost:0,up:"spearman",uc:90,col:8032082,branch:"inf"},hunter:{n:"Ловчий",t:2,hp:50,atk:12,arm:4,spd:3.4,wage:2,cost:0,up:"archer",uc:90,ranged:!0,col:6262602,branch:"arch"},spearman:{n:"Копейщик",t:3,hp:76,atk:17,arm:12,spd:3,wage:4,cost:0,up:"serjeant",uc:180,col:7173248,branch:"inf"},archer:{n:"Лучник",t:3,hp:60,atk:16,arm:7,spd:3.1,wage:4,cost:0,up:"crossbow",uc:180,ranged:!0,col:5209951,branch:"arch"},serjeant:{n:"Сержант",t:4,hp:98,atk:23,arm:20,spd:3,wage:7,cost:0,up:"knight",uc:340,col:9410211,branch:"inf"},crossbow:{n:"Арбалетчик",t:4,hp:74,atk:24,arm:12,spd:2.9,wage:7,cost:0,ranged:!0,col:5926783,branch:"arch"},knight:{n:"Рыцарь",t:5,hp:135,atk:32,arm:32,spd:3.3,wage:12,cost:0,col:12172484,branch:"cav"},scout:{n:"Разведчик",t:2,hp:52,atk:11,arm:5,spd:4.2,wage:3,cost:0,up:"rider",uc:120,col:10123850,branch:"cav"},rider:{n:"Всадник",t:3,hp:82,atk:18,arm:10,spd:4,wage:6,cost:0,up:"knight",uc:280,col:9071162,branch:"cav"},brigand:{n:"Разбойник",t:2,hp:54,atk:14,arm:5,spd:3.5,wage:0,cost:0,col:7035466,branch:"inf"},raider:{n:"Головорез",t:3,hp:72,atk:19,arm:10,spd:3.4,wage:0,cost:0,col:5917242,branch:"inf"},bandit_archer:{n:"Стрелок-разбойник",t:2,hp:48,atk:13,arm:4,spd:3.3,wage:0,cost:0,ranged:!0,col:5917242,branch:"arch"},bandit_rider:{n:"Налётчик",t:3,hp:70,atk:16,arm:8,spd:3.8,wage:0,cost:0,col:4864554,branch:"cav"}},An={farm:{n:"Поля",i:"🌾",max:4,d:4,c:{gold:120,timber:14},out:{grain:5},dsc:"Кормит округу и растит люд"},lumber:{n:"Лесопилка",i:"🪓",max:3,d:4,c:{gold:140,timber:10,stone:4},out:{timber:3},dsc:"Брус для строек"},quarry:{n:"Каменоломня",i:"⛏️",max:3,d:5,c:{gold:160,timber:16},out:{stone:3},dsc:"Камень для стен"},mine:{n:"Рудник",i:"⚒️",max:2,d:6,c:{gold:220,timber:20,stone:12},out:{iron:2},dsc:"Железо для оружия"},workshop:{n:"Мастерская",i:"🔨",max:2,d:6,c:{gold:260,timber:18,stone:10,iron:6},out:{tools:1,cloth:1},dsc:"Инструмент и сукно"},market:{n:"Торг",i:"⚖️",max:2,d:5,c:{gold:200,timber:14,stone:8},tax:26,dsc:"Пошлины в казну"},tavern:{n:"Корчма",i:"🍺",max:1,d:4,c:{gold:150,timber:16},mor:6,rec:2,dsc:"Наёмники и дух войска"},smithy:{n:"Кузня",i:"🔥",max:1,d:5,c:{gold:230,stone:14,iron:8},arm:4,dsc:"Лучшее снаряжение гарнизона"},barracks:{n:"Казармы",i:"🛡️",max:3,d:6,c:{gold:280,timber:22,stone:16,iron:6},gar:3,rec:3,dsc:"Гарнизон и выучка"},stables:{n:"Конюшня",i:"🐎",max:2,d:6,c:{gold:320,timber:24,stone:10,iron:4},rec:2,cav:1,dsc:"Разводит коней для кавалерии"},church:{n:"Часовня",i:"⛪",max:1,d:6,c:{gold:240,timber:12,stone:26},pros:.4,mor:5,dsc:"Покой и рост округи"},walls:{n:"Стены",i:"🧱",max:3,d:8,c:{gold:340,stone:34,timber:14},def:22,dsc:"Крепость при осаде"},tower:{n:"Башни",i:"🗼",max:3,d:7,c:{gold:300,stone:28,iron:6},def:16,dsc:"Стрелки на стенах"},keep:{n:"Донжон",i:"🏯",max:1,d:12,c:{gold:620,stone:52,tools:10},def:40,pros:.6,dsc:"Сердце замка"}},Qt={village:{n:"Деревня",i:"🏘️",slots:7,up:"town",uc:{gold:900,timber:70,stone:45,tools:8},ud:14},town:{n:"Город",i:"🏙️",slots:12,up:"castle",uc:{gold:1900,stone:110,timber:60,tools:22},ud:22},castle:{n:"Замок",i:"🏰",slots:11,up:null}},tt={you:{n:"Вы",full:"Род Вороньего Камня",c:"#c9a227",crest:"🦅",aggr:.9,greed:1,skill:1},olgerd:{n:"Ольгерд",full:"Граф Ольгерд Дубравский",c:"#5f8f4a",crest:"🌳",aggr:1.05,greed:1,skill:1.05},radmila:{n:"Радмила",full:"Баронесса Радмила Глинищская",c:"#8fa8c4",crest:"🏺",aggr:.6,greed:1.2,skill:.95},bran:{n:"Бран",full:"Воевода Бран Рудный",c:"#a8382a",crest:"⚔️",aggr:1.5,greed:.85,skill:1.15},clement:{n:"Клемент",full:"Аббат Клемент Заречский",c:"#b9a37a",crest:"⛪",aggr:.45,greed:1,skill:.9},guido:{n:"Гвидо",full:"Купец Гвидо Бродский",c:"#c98f2a",crest:"⚖️",aggr:.85,greed:1.5,skill:1},dragan:{n:"Драган",full:"Бойл Драган Степной",c:"#7a9a5a",crest:"🐎",aggr:1.3,greed:.9,skill:1.1},mila:{n:"Мила",full:"Воевода Мила Речная",c:"#6a8fa8",crest:"🌊",aggr:.7,greed:1.1,skill:1},svein:{n:"Свейн",full:"Ярл Свейн Морской",c:"#5a7a8a",crest:"⚓",aggr:1.4,greed:.8,skill:1.2},rodrik:{n:"Родрик",full:"Барон Родрик Каменский",c:"#9a6a4a",crest:"⛰️",aggr:.8,greed:1.3,skill:.95}},Kd=[{id:"keep",n:"Вороний Камень",kind:"castle",lord:"you",x:.5,y:.52,pop:340,pros:52,gar:14,b:{farm:2,lumber:1,quarry:1,barracks:1,walls:1,tower:1,keep:1}},{id:"lipy",n:"Липовка",kind:"village",lord:"you",x:.36,y:.66,pop:150,pros:40,gar:4,b:{farm:2,lumber:1}},{id:"dubrava",n:"Дубравы",kind:"town",lord:"olgerd",x:.2,y:.26,pop:520,pros:56,gar:20,b:{farm:2,lumber:2,market:1,workshop:1,walls:1,barracks:1}},{id:"sosnovka",n:"Сосновка",kind:"village",lord:"olgerd",x:.28,y:.14,pop:130,pros:36,gar:3,b:{farm:1,lumber:2}},{id:"glinishi",n:"Глинищи",kind:"town",lord:"radmila",x:.8,y:.28,pop:560,pros:60,gar:18,b:{farm:2,quarry:2,market:1,church:1,walls:1}},{id:"krutye",n:"Крутые Глины",kind:"village",lord:"radmila",x:.72,y:.16,pop:140,pros:38,gar:3,b:{farm:1,quarry:2}},{id:"rudnye",n:"Рудные Холмы",kind:"castle",lord:"bran",x:.85,y:.7,pop:280,pros:44,gar:26,b:{mine:2,quarry:1,barracks:2,walls:2,tower:1,keep:1}},{id:"zhelezny",n:"Железный Ручей",kind:"village",lord:"bran",x:.9,y:.82,pop:120,pros:35,gar:3,b:{mine:1,farm:1}},{id:"zarechye",n:"Заречье",kind:"town",lord:"clement",x:.48,y:.88,pop:600,pros:64,gar:14,b:{farm:3,church:1,market:1,tavern:1,walls:1}},{id:"tishina",n:"Тихая Заимка",kind:"village",lord:"clement",x:.42,y:.94,pop:110,pros:38,gar:2,b:{farm:2}},{id:"brod",n:"Каменный Брод",kind:"town",lord:"guido",x:.14,y:.7,pop:480,pros:58,gar:16,b:{farm:1,market:2,workshop:1,tavern:1,walls:1}},{id:"vereya",n:"Верея",kind:"village",lord:"guido",x:.06,y:.6,pop:100,pros:42,gar:2,b:{market:1,farm:1}},{id:"stepnoy",n:"Степной Острог",kind:"town",lord:"dragan",x:.62,y:.18,pop:440,pros:50,gar:18,b:{farm:2,stables:1,barracks:1,market:1,walls:1}},{id:"kurgan",n:"Курган",kind:"village",lord:"dragan",x:.7,y:.1,pop:120,pros:34,gar:3,b:{farm:1,stables:1}},{id:"rechnoy",n:"Речной Причал",kind:"town",lord:"mila",x:.34,y:.4,pop:460,pros:55,gar:16,b:{farm:2,market:1,tavern:1,walls:1,workshop:1}},{id:"ostrov",n:"Островок",kind:"village",lord:"mila",x:.28,y:.36,pop:110,pros:40,gar:3,b:{farm:1,lumber:1}},{id:"morskoy",n:"Морской Яр",kind:"castle",lord:"svein",x:.06,y:.16,pop:300,pros:48,gar:24,b:{farm:1,market:1,barracks:2,walls:2,tower:1,keep:1,stables:1}},{id:"fjord",n:"Фьорд",kind:"village",lord:"svein",x:.1,y:.06,pop:100,pros:32,gar:3,b:{farm:1,lumber:1}},{id:"kamenny",n:"Каменный Утёс",kind:"castle",lord:"rodrik",x:.92,y:.42,pop:310,pros:46,gar:22,b:{quarry:2,mine:1,barracks:2,walls:2,tower:1,keep:1}},{id:"utes",n:"Утёс",kind:"village",lord:"rodrik",x:.96,y:.52,pop:110,pros:36,gar:3,b:{quarry:1,farm:1}}],Rc=[{id:"site1",n:"Пустой Брод",x:.66,y:.44},{id:"site2",n:"Волчий Лог",x:.24,y:.46},{id:"site3",n:"Каменная Гряда",x:.68,y:.86},{id:"site4",n:"Тихая Роща",x:.4,y:.2},{id:"site5",n:"Северный Перевал",x:.58,y:.82}],Zd=[["keep","lipy"],["keep","dubrava"],["keep","glinishi"],["keep","rudnye"],["keep","zarechye"],["keep","brod"],["keep","rechnoy"],["dubrava","sosnovka"],["glinishi","krutye"],["brod","lipy"],["zarechye","rudnye"],["dubrava","brod"],["stepnoy","dubrava"],["stepnoy","glinishi"],["rechnoy","ostrov"],["morskoy","fjord"],["morskoy","brod"],["kamenny","rudnye"],["kamenny","zhelezny"],["zarechye","tishina"],["brod","vereya"],["stepnoy","kurgan"],["rechnoy","keep"],["zarechye","rechnoy"],["rudnye","zhelezny"]],er=[{n:"Дубина",atk:4,reach:2.1,spd:.46,c:0},{n:"Меч",atk:11,reach:2.4,spd:.38,c:180},{n:"Боевой топор",atk:17,reach:2.3,spd:.48,c:420},{n:"Полуторный меч",atk:24,reach:2.7,spd:.36,c:820},{n:"Клеймор лорда",atk:33,reach:2.9,spd:.4,c:1600}],tr=[{n:"Рубаха",arm:3,c:0},{n:"Стёганка",arm:9,c:160},{n:"Кольчуга",arm:18,c:460},{n:"Бригантина",arm:28,c:980},{n:"Латный доспех",arm:40,c:1900}],Jd=[{n:"Весна",i:"🌱",f:1.1},{n:"Лето",i:"☀️",f:1.25},{n:"Осень",i:"🍂",f:1.3},{n:"Зима",i:"❄️",f:.4}],bo={line:{n:"Линия",i:"─",desc:"Войско в ряд"},shieldwall:{n:"Щитовая стена",i:"🛡️",desc:"Плотный строй, медленно"},loose:{n:"Рассыпь",i:"╳",desc:"Свободный строй против стрел"},square:{n:"Каре",i:"⬜",desc:"Защита от конницы со всех сторон"},wedge:{n:"Клин",i:"▲",desc:"Прорыв в центр врага"}},jt=(n,e,t)=>Math.max(e,Math.min(t,n)),Pn=(n,e)=>n+Math.floor(Math.random()*(e-n+1)),Cc="voroniy_kamen_save",Pc=2,Ea=n=>Jd[Math.floor(n%120/30)];function Qd(){const n={day:1,speed:1,mode:"scene",settlements:{},sites:Rc.map(e=>({...e})),armies:[],log:[],nid:1,player:{x:.5,y:.52,tx:null,ty:null,gold:900,food:80,renown:12,honor:10,hp:100,maxHp:100,morale:80,troops:{levy:8,hunter:4,spearman:2},weapon:1,armor:1,xp:0,lvl:1,prisoners:0,days:0},wars:{},battle:null,result:null};Kd.forEach(e=>{n.settlements[e.id]={...e,b:{...e.b},stock:{grain:70,timber:40,stone:30,iron:12,cloth:8,tools:6,wine:4},project:null,upgrade:null,recruits:Pn(4,9),tax:"mid",unrest:.1}}),Object.keys(tt).forEach(e=>{if(e==="you")return;const t=Object.keys(n.settlements).filter(i=>n.settlements[i].lord===e);t.length&&n.armies.push(jd(n,e,Pn(14,26),t[0]))});for(let e=0;e<4;e++)Lc(n);return mt(n,"🦅 Вы приняли Вороний Камень. Ворота открыты — земли ждут.","#c9a227"),n}function jd(n,e,t,i){const r=n.settlements[i]||{x:.5,y:.5};return{id:n.nid++,lord:e,x:r.x,y:r.y,tx:null,ty:null,size:t,mor:70,kind:"lord",target:null,raid:!1,cd:0,order:"advance"}}function Lc(n){const e=Math.random()*6.283,t=.3+Math.random()*.16;n.armies.push({id:n.nid++,lord:"bandit",x:jt(.5+Math.cos(e)*t,.06,.94),y:jt(.5+Math.sin(e)*t,.06,.94),tx:null,ty:null,size:Pn(4,12),mor:60,kind:"bandit",target:null,raid:!0,cd:0,order:"charge"})}function mt(n,e,t){n.log.unshift({d:n.day,t:e,c:t||"#d8c9a6"}),n.log.length>70&&n.log.pop()}const Wn=n=>Object.values(n.player.troops).reduce((e,t)=>e+t,0),Sl=n=>Object.entries(n.player.troops).reduce((e,[t,i])=>e+i*(Ln[t].atk+Ln[t].arm*.6),0),Dc=n=>Object.entries(n.player.troops).reduce((e,[t,i])=>e+i*Ln[t].wage,0),Br=n=>Math.round(n.gar*13+n.b.walls*22+n.b.tower*16+n.b.keep*40+n.pop*.05),To=n=>Math.round(n.size*(n.kind==="bandit"?11:15)*(n.mor/80+.5)),Ao=n=>Qt[n.kind].slots,wo=n=>Object.values(n.b).reduce((e,t)=>e+t,0);function Ic(n,e){const t=An[e];if((n.b[e]||0)>=t.max)return"Предел";if(wo(n)>=Ao(n))return"Нет места";if(n.project)return"Стройка идёт";for(const i in t.c){const r=i==="gold"?null:n.stock[i];if(i!=="gold"&&r<t.c[i])return"Мало "+Rn[i].n}return null}function eu(n,e,t,i){const r=n.settlements[e],s=Ic(r,t);if(s)return s;const a=An[t];if(i<a.c.gold)return"Мало монет";for(const o in a.c)o!=="gold"&&(r.stock[o]-=a.c[o]);return r.project={k:t,left:a.d,total:a.d},mt(n,`🔨 ${r.n}: заложено — ${a.n}`,"#8fc46a"),null}function tu(n,e,t){const i=n.settlements[e],r=Qt[i.kind];if(!r.up)return"Предел";if(i.upgrade)return"Уже строится";if(t<r.uc.gold)return"Мало монет";for(const s in r.uc)if(s!=="gold"&&i.stock[s]<r.uc[s])return"Мало "+Rn[s].n;for(const s in r.uc)s!=="gold"&&(i.stock[s]-=r.uc[s]);return i.upgrade={to:r.up,left:r.ud,total:r.ud},mt(n,`🏗️ ${i.n} перестраивается в ${Qt[r.up].n.toLowerCase()}`,"#c9a227"),null}function Nc(n,e,t){const i=n.sites.findIndex(l=>l.id===e);if(i<0)return"Нет места";const r={gold:420,timber:44,stone:26};if(t<r.gold)return"Нужно 420 монет";const s=n.settlements.keep;if(s.stock.timber<r.timber||s.stock.stone<r.stone)return"Мало бруса и камня в столице";s.stock.timber-=r.timber,s.stock.stone-=r.stone;const a=n.sites[i],o="f"+n.nid++;return n.settlements[o]={id:o,n:a.n,kind:"village",lord:"you",x:a.x,y:a.y,pop:90,pros:30,gar:3,b:{farm:1,lumber:1},stock:{grain:40,timber:20,stone:10,iron:2,cloth:0,tools:0,wine:0},project:null,upgrade:null,recruits:5,tax:"mid",unrest:.05},n.sites.splice(i,1),mt(n,`🏘️ Основана ${a.n}! Люди идут на новое место`,"#c9a227"),null}function nu(n,e){const t=Ea(n.day),i=tt[e.lord]||tt.you;let r={grain:0,timber:0,stone:0,iron:0,cloth:0,tools:0,wine:0},s=0,a=0;for(const l in e.b){const c=An[l],d=e.b[l];if(d){if(c.out)for(const u in c.out)r[u]+=c.out[u]*d;c.tax&&(s+=c.tax*d),c.pros&&(a+=c.pros*d)}}r.grain=Math.round(r.grain*t.f*(e.pop/300+.5));for(const l in r)e.stock[l]=Math.min(400,e.stock[l]+r[l]);const o=Math.round(e.pop*.05+e.gar*.12);if(e.stock.grain>=o?(e.stock.grain-=o,e.pop+=Math.max(1,Math.round(e.pop*.006*(1+a*.1)*i.greed)),e.unrest=jt(e.unrest-.01,0,1)):(e.stock.grain=0,e.pop=Math.max(40,e.pop-Math.round(e.pop*.01)),e.unrest=jt(e.unrest+.03,0,1)),e.pros=jt(e.pros+(a*.2+(e.b.market?.4:0)-e.unrest*.6),8,100),s=Math.round(s+e.pop*.09*(e.tax==="high"?1.6:e.tax==="low"?.6:1)*(e.pros/60)),e.unrest=jt(e.unrest+(e.tax==="high"?.02:e.tax==="low"?-.015:0)-(e.b.church?.02:0),0,1),e.income=s,e.recruits=Math.min(14,e.recruits+(e.b.tavern?2:1)+(e.b.barracks||0)),e.gar=Math.min(Math.round(e.pop*.09)+(e.b.barracks||0)*3,e.gar+(Math.random()<.35?1:0)),e.project&&(e.project.left--,e.project.left<=0)){const l=e.project.k;e.b[l]=(e.b[l]||0)+1,e.project=null,e.lord==="you"&&mt(n,`✅ ${e.n}: возведено — ${An[l].n}`,"#8fc46a")}e.upgrade&&(e.upgrade.left--,e.upgrade.left<=0&&(e.kind=e.upgrade.to,e.upgrade=null,mt(n,`🏰 ${e.n} теперь ${Qt[e.kind].n.toLowerCase()}!`,e.lord==="you"?"#c9a227":"#e07a68"))),e.unrest>.8&&Math.random()<.08&&(e.pop=Math.round(e.pop*.9),e.gar=Math.max(0,e.gar-3),e.unrest=.4,mt(n,`🔥 ${e.n}: бунт! Гарнизон разбежался`,"#e07a68"))}function Uc(n,e,t,i){const r=e-n.x,s=t-n.y,a=Math.hypot(r,s);return a<=i?(n.x=e,n.y=t,!0):(n.x+=r/a*i,n.y+=s/a*i,!1)}function iu(n,e){if(e.cd>0){e.cd--;return}const t=Object.values(n.settlements).filter(s=>s.lord!==e.lord&&(e.kind==="bandit"||n.wars[e.lord+"|"+s.lord]));if(e.kind==="bandit"||Math.random()<.5){const s=t.sort((a,o)=>Math.hypot(a.x-e.x,a.y-e.y)-Math.hypot(o.x-e.x,o.y-e.y))[0];if(s){e.tx=s.x,e.ty=s.y,e.target=s.id,e.raid=e.kind==="bandit"||Math.random()<.55;return}}const i=Object.values(n.settlements).filter(s=>s.lord===e.lord),r=i[Pn(0,i.length-1)]||{x:.5,y:.5};e.tx=r.x+(Math.random()-.5)*.12,e.ty=r.y+(Math.random()-.5)*.12,e.target=null}function ru(n,e,t){if(To(e)>Br(t)*(.8+Math.random()*.5)){const r=Math.round(t.pop*.06);t.pop=Math.max(40,t.pop-r),t.pros=jt(t.pros-8,8,100);for(const a in t.stock)t.stock[a]=Math.round(t.stock[a]*.72);const s=Object.keys(t.b).filter(a=>t.b[a]>0&&a!=="walls"&&a!=="keep");s.length&&Math.random()<.5&&t.b[s[Pn(0,s.length-1)]]--,e.size=Math.max(3,e.size-Pn(0,2)),t.unrest=jt(t.unrest+.14,0,1),mt(n,`🔥 ${e.lord==="bandit"?"Разбойники":tt[e.lord].n} разорили ${t.n}`,"#e07a68")}else e.size=Math.round(e.size*.6),t.gar=Math.max(0,t.gar-Pn(1,3)),mt(n,`🛡️ ${t.n} отбил набег`,"#8fc46a");e.cd=8,e.target=null,e.tx=null}function su(n,e,t){var i;if(To(e)>Br(t)*1.05){const r=t.lord;t.lord=e.lord,t.gar=Math.max(2,Math.round(e.size*.35)),e.size=Math.round(e.size*.7),t.unrest=.5,t.pros=jt(t.pros-10,8,100),mt(n,`🏴 ${t.n} взят! ${((i=tt[r])==null?void 0:i.n)||"—"} изгнан, владеет ${tt[e.lord].n}`,e.lord==="you"?"#c9a227":"#e07a68")}else e.size=Math.round(e.size*.55),t.gar=Math.max(0,t.gar-Math.round(t.gar*.25)),mt(n,`🛡️ ${t.n} выстоял осаду ${tt[e.lord].n}`,"#8fc46a");e.cd=12,e.target=null,e.tx=null}function au(n){n.day++;const e=n.player;for(const s in n.settlements)nu(n,n.settlements[s]);const t=Dc(n),i=Math.max(1,Math.ceil(Wn(n)*.5));if(e.gold-=t,e.food>=i)e.food-=i,e.morale=jt(e.morale+1.2,0,100);else if(e.food=0,e.morale=jt(e.morale-5,0,100),Math.random()<.3){const s=Object.keys(e.troops).find(a=>e.troops[a]>0);s&&(e.troops[s]--,mt(n,"🌾 Голод: боец покинул отряд","#e07a68"))}if(e.gold<0){e.gold=0,e.morale=jt(e.morale-4,0,100);const s=Object.keys(e.troops).find(a=>e.troops[a]>0);s&&Math.random()<.4&&(e.troops[s]--,mt(n,"💸 Жалованья нет — боец ушёл","#c98f2a"))}if(e.morale<25&&Math.random()<.2){const s=Object.keys(e.troops).find(a=>e.troops[a]>0);s&&(e.troops[s]--,mt(n,"🏃 Дезертирство в отряде","#e07a68"))}e.hp=Math.min(e.maxHp,e.hp+3);const r=Object.values(n.settlements).filter(s=>s.lord==="you");if(n.day%5===0){let s=0;r.forEach(a=>s+=a.income||0),s&&(e.gold+=s,mt(n,`🪙 Подати с владений: +${s}`,"#c9a227"))}return n.day%9===0&&Object.keys(tt).forEach(s=>{if(s==="you"||!Object.values(n.settlements).filter(d=>d.lord===s).length)return;const o=Object.keys(tt).filter(d=>d!==s&&d!=="you"),l=o[Pn(0,o.length-1)],c=s+"|"+l;!n.wars[c]&&Math.random()<.3*tt[s].aggr?(n.wars[c]=!0,n.wars[l+"|"+s]=!0,mt(n,`⚔️ ${tt[s].n} объявил войну ${tt[l].n}`,"#e07a68")):n.wars[c]&&Math.random()<.14&&(delete n.wars[c],delete n.wars[l+"|"+s],mt(n,`🕊️ ${tt[s].n} и ${tt[l].n} заключили мир`,"#8fc46a"))}),n.armies.forEach(s=>{(!s.tx||Math.hypot(s.tx-s.x,s.ty-s.y)<.01)&&iu(n,s);const a=s.kind==="bandit"?.028:.022;if(Uc(s,s.tx,s.ty,a),s.mor=jt(s.mor+.5,30,95),s.target){const o=n.settlements[s.target];o&&o.lord!==s.lord&&Math.hypot(o.x-s.x,o.y-s.y)<.035&&(s.raid?ru(n,s,o):su(n,s,o))}s.size<4&&s.kind==="bandit"&&(s.dead=!0)}),n.armies=n.armies.filter(s=>!s.dead),n.day%7===0&&n.armies.filter(s=>s.kind==="bandit").length<6&&Lc(n),Object.values(n.settlements).forEach(s=>{if(s.lord!=="you"&&n.day%6===0){const a=n.armies.find(o=>o.lord===s.lord);a&&(a.size=Math.min(60,a.size+Pn(1,3)))}}),null}function ou(n,e){const t=n.player;if(t.tx==null)return null;const i=.055*e;Uc(t,t.tx,t.ty,i)&&(t.tx=null,t.ty=null);for(const r of n.armies)if((r.kind==="bandit"||r.lord!=="you")&&Math.hypot(r.x-t.x,r.y-t.y)<.032)return{type:"army",army:r};return null}function lu(n,e,t){const i=n.settlements[e];t=Math.min(t,i.recruits,Math.max(0,60-Wn(n)));const r=t*(i.kind==="village"?24:i.kind==="town"?38:52);if(n.player.gold<r)return{err:"Мало монет"};n.player.gold-=r,i.recruits-=t;const s=i.kind==="village"?"peasant":i.kind==="town"?"levy":"spearman";return n.player.troops[s]=(n.player.troops[s]||0)+t,mt(n,`👥 ${i.n}: нанято ${t} — ${Ln[s].n}`,"#8fa8c4"),{n:t,cost:r}}function cu(n,e){const t=Ln[e];return t.up?n.player.troops[e]||0?n.player.gold<t.uc?"Мало монет":(n.player.gold-=t.uc,n.player.troops[e]--,n.player.troops[t.up]=(n.player.troops[t.up]||0)+1,null):"Нет бойцов":"Некуда"}function Vs(n,e,t,i,r){const s=n.settlements[e],a=Rn[t].p,o=Math.round(a*(i?1.15:.82)*(1+(s.pros-50)/220));if(i){if(s.stock[t]<r)return"Нет товара";if(n.player.gold<o*r)return"Мало монет";n.player.gold-=o*r,s.stock[t]-=r,n.player.cargo=n.player.cargo||{},n.player.cargo[t]=(n.player.cargo[t]||0)+r}else{const l=n.player.cargo||{};if((l[t]||0)<r)return"Нет груза";l[t]-=r,n.player.gold+=o*r,s.stock[t]+=r}return{price:o}}function du(n,e,t,i){const r=n.player;for(const s in i)r.troops[s]=Math.max(0,(r.troops[s]||0)-(i[s]||0));if(Object.keys(r.troops).forEach(s=>{r.troops[s]||delete r.troops[s]}),t){const s=Pn(60,180)+e.size*6;r.gold+=s,r.renown+=Math.ceil(e.size/3),r.food+=Pn(6,20),r.prisoners+=Math.round(e.size*.25),r.morale=jt(r.morale+8,0,100),e.size=Math.round(e.size*.3),e.dead=e.size<4,e.mor=40,e.cd=10,e.tx=null,mt(n,`🏆 Победа! Добыча ${s}🪙, пленных ${Math.round(e.size*.25)}`,"#c9a227")}else r.morale=jt(r.morale-14,0,100),r.gold=Math.round(r.gold*.85),e.size=Math.round(e.size*.8),mt(n,"💀 Поражение. Отряд отступил, часть монет потеряна","#e07a68");r.hp=Math.max(20,r.hp)}function uu(n){const e=n.player.prisoners;if(!e)return 0;const t=e*22;return n.player.gold+=t,n.player.prisoners=0,mt(n,`⛓️ Пленные проданы: +${t}🪙`,"#c9a227"),t}const fu=["self","result","battle"];function Ro(n){try{const e=JSON.parse(JSON.stringify(n,(t,i)=>fu.includes(t)?void 0:i));return e._sv=Pc,localStorage.setItem(Cc,JSON.stringify(e)),!0}catch{return!1}}function hu(){try{const n=localStorage.getItem(Cc);if(!n)return null;const e=JSON.parse(n);return e._sv?pu(e):null}catch{return null}}function pu(n){if(!n._sv||n._sv<2){if(n.settlements)for(const e in n.settlements){const t=n.settlements[e];t.stock||(t.stock={grain:70,timber:40,stone:30,iron:12,cloth:8,tools:6,wine:4}),t.recruits||(t.recruits=5),t.unrest==null&&(t.unrest=.1),t.tax||(t.tax="mid"),t.project||(t.project=null),t.upgrade||(t.upgrade=null)}if(n.player){const e=n.player;e.cargo||(e.cargo={}),e.prisoners==null&&(e.prisoners=0),e.troops||(e.troops={levy:6,hunter:3}),e.weapon==null&&(e.weapon=1),e.armor==null&&(e.armor=1)}n.armies||(n.armies=[]),n.wars||(n.wars={}),n.sites||(n.sites=Rc.map(e=>({...e}))),n.log||(n.log=[]),n.nid||(n.nid=1),n._sv=Pc}return n}function mu(n){const e={...n,mode:"scene",battle:null,result:null};return e.settlements||(e.settlements={}),e.sites||(e.sites=[]),e.armies||(e.armies=[]),e.wars||(e.wars={}),e.log||(e.log=[]),e.player||(e.player={x:.5,y:.52,gold:900,food:80,renown:12,honor:10,hp:100,maxHp:100,morale:80,troops:{levy:8,hunter:4,spearman:2},weapon:1,armor:1,prisoners:0}),e.player.tx=null,e.player.ty=null,e}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Co="187",gu=0,yl=1,_u=2,ps=1,Fc=2,Er=3,Di=0,sn=1,Jt=2,nr=0,Ar=1,ba=2,El=3,bl=4,xu=5,Qi=100,vu=101,Mu=102,Su=103,yu=104,Eu=200,bu=201,Tu=202,Au=203,Oc=204,Bc=205,wu=206,Ru=207,Cu=208,Pu=209,Lu=210,Du=211,Iu=212,Nu=213,Uu=214,Ta=0,Aa=1,wa=2,Rr=3,Ra=4,Ca=5,Pa=6,La=7,Po=0,Fu=1,Ou=2,ri=0,zc=1,kc=2,Gc=3,Lo=4,Hc=5,Vc=6,Wc=7,Xc=300,ar=301,Cr=302,Ws=303,Xs=304,Es=1e3,ni=1001,Da=1002,zt=1003,Bu=1004,$r=1005,rn=1006,$s=1007,mi=1008,un=1009,$c=1010,qc=1011,Pr=1012,Do=1013,Xn=1014,zn=1015,$n=1016,Io=1017,No=1018,or=1020,Yc=35902,Kc=35899,Zc=1021,Jc=1022,kn=1023,xi=1026,gi=1027,Qc=1028,Uo=1029,Ii=1030,Fo=1031,Oo=1033,ms=33776,gs=33777,_s=33778,xs=33779,Ia=35840,Na=35841,Ua=35842,Fa=35843,Oa=36196,Ba=37492,za=37496,ka=37488,Ga=37489,bs=37490,Ha=37491,Va=37808,Wa=37809,Xa=37810,$a=37811,qa=37812,Ya=37813,Ka=37814,Za=37815,Ja=37816,Qa=37817,ja=37818,eo=37819,to=37820,no=37821,io=36492,ro=36494,so=36495,ao=36283,oo=36284,Ts=36285,lo=36286,zu=3200,co=0,ku=1,pi="",cn="srgb",As="srgb-linear",ws="linear",rt="srgb",qs=7680,Gu=519,Hu=512,Vu=513,Wu=514,jc=515,Xu=516,$u=517,ed=518,td=519,qu=35044,Tl="300 es",Cn=2e3,Lr=2001;function Yu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ku(){const n=Rs("canvas");return n.style.display="block",n}const Al={};function wl(...n){const e="THREE."+n.shift();console.log(e,...n)}function nd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ue(...n){n=nd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function je(...n){n=nd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function vs(...n){const e=n.join(" ");e in Al||(Al[e]=!0,Ue(...n))}function Zu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Ju={[Ta]:Ta,[wa]:Pa,[Ra]:Ra,[Rr]:Ca,[Aa]:Aa,[Pa]:wa,[La]:La,[Ca]:Rr};class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ys=Math.PI/180,uo=180/Math.PI;function zr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function Qu(n,e){return(n%e+e)%e}function Ks(n,e,t){return(1-t)*n+t*e}function ju(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bo(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ef(n,e){if(e.constructor===Float32Array)return n;const t=Bo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function tf(n,e){if(e.constructor===Float32Array)return n;const t=Bo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const al=class al{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};al.prototype.isVector2=!0;let Xe=al;class fr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],u=i[r+3],h=s[a+0],m=s[a+1],g=s[a+2],x=s[a+3];if(u!==x||l!==h||c!==m||d!==g){let p=l*h+c*m+d*g+u*x;p<0&&(h=-h,m=-m,g=-g,x=-x,p=-p);let f=1-o;if(p<.9995){const S=Math.acos(p),A=Math.sin(S);f=Math.sin(f*S)/A,o=Math.sin(o*S)/A,l=l*f+h*o,c=c*f+m*o,d=d*f+g*o,u=u*f+x*o}else{l=l*f+h*o,c=c*f+m*o,d=d*f+g*o,u=u*f+x*o;const S=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=S,c*=S,d*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],u=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+d*u+l*m-c*h,e[t+1]=l*g+d*h+c*u-o*m,e[t+2]=c*g+d*m+o*h-l*u,e[t+3]=d*g-o*u-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),u=o(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*d*u+c*m*g,this._y=c*m*u-h*d*g,this._z=c*d*g+h*m*u,this._w=c*d*u-h*m*g;break;case"YXZ":this._x=h*d*u+c*m*g,this._y=c*m*u-h*d*g,this._z=c*d*g-h*m*u,this._w=c*d*u+h*m*g;break;case"ZXY":this._x=h*d*u-c*m*g,this._y=c*m*u+h*d*g,this._z=c*d*g+h*m*u,this._w=c*d*u-h*m*g;break;case"ZYX":this._x=h*d*u-c*m*g,this._y=c*m*u+h*d*g,this._z=c*d*g-h*m*u,this._w=c*d*u+h*m*g;break;case"YZX":this._x=h*d*u+c*m*g,this._y=c*m*u+h*d*g,this._z=c*d*g-h*m*u,this._w=c*d*u-h*m*g;break;case"XZY":this._x=h*d*u-c*m*g,this._y=c*m*u-h*d*g,this._z=c*d*g+h*m*u,this._w=c*d*u+h*m*g;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=i+o+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ol=class ol{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*d,this.y=i+l*d+o*c-s*u,this.z=r+l*u+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zs.copy(this).projectOnVector(e),this.sub(Zs)}reflect(e){return this.sub(Zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ol.prototype.isVector3=!0;let O=ol;const Zs=new O,Rl=new fr,ll=class ll{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],m=i[5],g=i[8],x=r[0],p=r[3],f=r[6],S=r[1],A=r[4],E=r[7],w=r[2],T=r[5],_=r[8];return s[0]=a*x+o*S+l*w,s[3]=a*p+o*A+l*T,s[6]=a*f+o*E+l*_,s[1]=c*x+d*S+u*w,s[4]=c*p+d*A+u*T,s[7]=c*f+d*E+u*_,s[2]=h*x+m*S+g*w,s[5]=h*p+m*A+g*T,s[8]=h*f+m*E+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*s,m=c*s-a*l,g=t*u+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(r*c-d*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(d*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Js.makeScale(e,t)),this}rotate(e){return vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ll.prototype.isMatrix3=!0;let Oe=ll;const Js=new Oe,Cl=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nf(){const n={enabled:!0,workingColorSpace:As,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=ir(r.r),r.g=ir(r.g),r.b=ir(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pi?ws:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[As]:{primaries:e,whitePoint:i,transfer:ws,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Cl,fromXYZ:Pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const Ze=nf();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zi;class rf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zi===void 0&&(zi=Rs("canvas")),zi.width=e.width,zi.height=e.height;const r=zi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=si(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sf=0;class zo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=zr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qs(r[a].image)):s.push(Qs(r[a]))}else s=Qs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let af=0;const js=new O;class $t extends Ui{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=ni,r=ni,s=rn,a=mi,o=kn,l=un,c=$t.DEFAULT_ANISOTROPY,d=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=zr(),this.name="",this.source=new zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(js).x}get height(){return this.source.getSize(js).y}get depth(){return this.source.getSize(js).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Xc;$t.DEFAULT_ANISOTROPY=1;const cl=class cl{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],m=l[5],g=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,E=(m+1)/2,w=(f+1)/2,T=(d+h)/4,_=(u+x)/4,y=(g+p)/4;return A>E&&A>w?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=T/i,s=_/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=T/r,s=y/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=_/s,r=y/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-x)/S,this.z=(h-d)/S,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cl.prototype.isVector4=!0;let gt=cl;class of extends Ui{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new $t({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new zo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends of{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class id extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lf extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ns=class Ns{constructor(e,t,i,r,s,a,o,l,c,d,u,h,m,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,d,u,h,m,g,x,p)}set(e,t,i,r,s,a,o,l,c,d,u,h,m,g,x,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=u,f[14]=h,f[3]=m,f[7]=g,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ns().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ki.setFromMatrixColumn(e,0).length(),s=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*d,m=a*u,g=o*d,x=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,m=l*u,g=c*d,x=c*u;t[0]=h+x*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,m=l*u,g=c*d,x=c*u;t[0]=h-x*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,m=a*u,g=o*d,x=o*u;t[0]=l*d,t[4]=g*c-m,t[8]=h*c+x,t[1]=l*u,t[5]=x*c+h,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*d,t[4]=x-h*u,t[8]=g*u+m,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*u+g,t[10]=h-x*u}else if(e.order==="XZY"){const h=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+x,t[5]=a*d,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*d,t[10]=x*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cf,e,df)}lookAt(e,t,i){const r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),li.crossVectors(i,on),li.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),li.crossVectors(i,on)),li.normalize(),qr.crossVectors(on,li),r[0]=li.x,r[4]=qr.x,r[8]=on.x,r[1]=li.y,r[5]=qr.y,r[9]=on.y,r[2]=li.z,r[6]=qr.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],m=i[13],g=i[2],x=i[6],p=i[10],f=i[14],S=i[3],A=i[7],E=i[11],w=i[15],T=r[0],_=r[4],y=r[8],D=r[12],C=r[1],I=r[5],U=r[9],W=r[13],L=r[2],V=r[6],Q=r[10],G=r[14],re=r[3],q=r[7],te=r[11],ne=r[15];return s[0]=a*T+o*C+l*L+c*re,s[4]=a*_+o*I+l*V+c*q,s[8]=a*y+o*U+l*Q+c*te,s[12]=a*D+o*W+l*G+c*ne,s[1]=d*T+u*C+h*L+m*re,s[5]=d*_+u*I+h*V+m*q,s[9]=d*y+u*U+h*Q+m*te,s[13]=d*D+u*W+h*G+m*ne,s[2]=g*T+x*C+p*L+f*re,s[6]=g*_+x*I+p*V+f*q,s[10]=g*y+x*U+p*Q+f*te,s[14]=g*D+x*W+p*G+f*ne,s[3]=S*T+A*C+E*L+w*re,s[7]=S*_+A*I+E*V+w*q,s[11]=S*y+A*U+E*Q+w*te,s[15]=S*D+A*W+E*G+w*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],m=e[14],g=e[3],x=e[7],p=e[11],f=e[15],S=l*m-c*h,A=o*m-c*u,E=o*h-l*u,w=a*m-c*d,T=a*h-l*d,_=a*u-o*d;return t*(x*S-p*A+f*E)-i*(g*S-p*w+f*T)+r*(g*A-x*w+f*_)-s*(g*E-x*T+p*_)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-i*(s*d-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],m=e[11],g=e[12],x=e[13],p=e[14],f=e[15],S=t*o-i*a,A=t*l-r*a,E=t*c-s*a,w=i*l-r*o,T=i*c-s*o,_=r*c-s*l,y=d*x-u*g,D=d*p-h*g,C=d*f-m*g,I=u*p-h*x,U=u*f-m*x,W=h*f-m*p,L=S*W-A*U+E*I+w*C-T*D+_*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/L;return e[0]=(o*W-l*U+c*I)*V,e[1]=(r*U-i*W-s*I)*V,e[2]=(x*_-p*T+f*w)*V,e[3]=(h*T-u*_-m*w)*V,e[4]=(l*C-a*W-c*D)*V,e[5]=(t*W-r*C+s*D)*V,e[6]=(p*E-g*_-f*A)*V,e[7]=(d*_-h*E+m*A)*V,e[8]=(a*U-o*C+c*y)*V,e[9]=(i*C-t*U-s*y)*V,e[10]=(g*T-x*E+f*S)*V,e[11]=(u*E-d*T-m*S)*V,e[12]=(o*D-a*I-l*y)*V,e[13]=(t*I-i*D+r*y)*V,e[14]=(x*A-g*w-p*S)*V,e[15]=(d*w-u*A+h*S)*V,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,u=o+o,h=s*c,m=s*d,g=s*u,x=a*d,p=a*u,f=o*u,S=l*c,A=l*d,E=l*u,w=i.x,T=i.y,_=i.z;return r[0]=(1-(x+f))*w,r[1]=(m+E)*w,r[2]=(g-A)*w,r[3]=0,r[4]=(m-E)*T,r[5]=(1-(h+f))*T,r[6]=(p+S)*T,r[7]=0,r[8]=(g+A)*_,r[9]=(p-S)*_,r[10]=(1-(h+x))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=ki.set(r[0],r[1],r[2]).length();const o=ki.set(r[4],r[5],r[6]).length(),l=ki.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Sn.copy(this);const c=1/a,d=1/o,u=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=d,Sn.elements[5]*=d,Sn.elements[6]*=d,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Cn,l=!1){const c=this.elements,d=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),m=(i+r)/(i-r);let g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===Cn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Lr)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Cn,l=!1){const c=this.elements,d=2/(t-e),u=2/(i-r),h=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===Cn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Lr)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ns.prototype.isMatrix4=!0;let ut=Ns;const ki=new O,Sn=new ut,cf=new O(0,0,0),df=new O(1,1,1),li=new O,qr=new O,on=new O,Ll=new ut,Dl=new fr;class vi{constructor(e=0,t=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],u=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ll,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class ko{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uf=0;const Il=new O,Gi=new fr,Kn=new ut,Yr=new O,mr=new O,ff=new O,hf=new fr,Nl=new O(1,0,0),Ul=new O(0,1,0),Fl=new O(0,0,1),Ol={type:"added"},pf={type:"removed"},Hi={type:"childadded",child:null},ea={type:"childremoved",child:null};class kt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new O,t=new vi,i=new fr,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Oe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(Nl,e)}rotateY(e){return this.rotateOnAxis(Ul,e)}rotateZ(e){return this.rotateOnAxis(Fl,e)}translateOnAxis(e,t){return Il.copy(e).applyQuaternion(this.quaternion),this.position.add(Il.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nl,e)}translateY(e){return this.translateOnAxis(Ul,e)}translateZ(e){return this.translateOnAxis(Fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yr.copy(e):Yr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(mr,Yr,this.up):Kn.lookAt(Yr,mr,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),Gi.setFromRotationMatrix(Kn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ol),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pf),ea.child=e,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ol),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}kt.DEFAULT_UP=new O(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gn extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mf={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=Qu(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=na(a,s,e+1/3),this.g=na(a,s,e),this.b=na(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=cn){function i(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=rd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return Ze.workingToColorSpace(Wt.copy(this),e),Math.round(Je(Wt.r*255,0,255))*65536+Math.round(Je(Wt.g*255,0,255))*256+Math.round(Je(Wt.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Wt.copy(this),t);const i=Wt.r,r=Wt.g,s=Wt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=cn){Ze.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,r=Wt.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Kr);const i=Ks(ci.h,Kr.h,t),r=Ks(ci.s,Kr.s,t),s=Ks(ci.l,Kr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new $e;$e.NAMES=rd;class Go{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=i}clone(){return new Go(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gf extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yn=new O,Zn=new O,ia=new O,Jn=new O,Vi=new O,Wi=new O,Bl=new O,ra=new O,sa=new O,aa=new O,oa=new gt,la=new gt,ca=new gt;class wn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yn.subVectors(e,t),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){yn.subVectors(r,t),Zn.subVectors(i,t),ia.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(Zn),l=yn.dot(ia),c=Zn.dot(Zn),d=Zn.dot(ia),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,m=(c*l-o*d)*h,g=(a*d-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return oa.setScalar(0),la.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(e,t),la.fromBufferAttribute(e,i),ca.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(oa,s.x),a.addScaledVector(la,s.y),a.addScaledVector(ca,s.z),a}static isFrontFacing(e,t,i,r){return yn.subVectors(i,t),Zn.subVectors(e,t),yn.cross(Zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),yn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Vi.subVectors(r,i),Wi.subVectors(s,i),ra.subVectors(e,i);const l=Vi.dot(ra),c=Wi.dot(ra);if(l<=0&&c<=0)return t.copy(i);sa.subVectors(e,r);const d=Vi.dot(sa),u=Wi.dot(sa);if(d>=0&&u<=d)return t.copy(r);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),t.copy(i).addScaledVector(Vi,a);aa.subVectors(e,s);const m=Vi.dot(aa),g=Wi.dot(aa);if(g>=0&&m<=g)return t.copy(s);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Wi,o);const p=d*g-m*u;if(p<=0&&u-d>=0&&m-g>=0)return Bl.subVectors(s,r),o=(u-d)/(u-d+(m-g)),t.copy(r).addScaledVector(Bl,o);const f=1/(p+x+h);return a=x*f,o=h*f,t.copy(i).addScaledVector(Vi,a).addScaledVector(Wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class kr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(s,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),Jr.subVectors(this.max,gr),Xi.subVectors(e.a,gr),$i.subVectors(e.b,gr),qi.subVectors(e.c,gr),di.subVectors($i,Xi),ui.subVectors(qi,$i),bi.subVectors(Xi,qi);let t=[0,-di.z,di.y,0,-ui.z,ui.y,0,-bi.z,bi.y,di.z,0,-di.x,ui.z,0,-ui.x,bi.z,0,-bi.x,-di.y,di.x,0,-ui.y,ui.x,0,-bi.y,bi.x,0];return!da(t,Xi,$i,qi,Jr)||(t=[1,0,0,0,1,0,0,0,1],!da(t,Xi,$i,qi,Jr))?!1:(Qr.crossVectors(di,ui),t=[Qr.x,Qr.y,Qr.z],da(t,Xi,$i,qi,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qn=[new O,new O,new O,new O,new O,new O,new O,new O],En=new O,Zr=new kr,Xi=new O,$i=new O,qi=new O,di=new O,ui=new O,bi=new O,gr=new O,Jr=new O,Qr=new O,Ti=new O;function da(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ti.fromArray(n,s);const o=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),d=i.dot(Ti);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const St=new O,jr=new Xe;let _f=0;class Pi extends Ui{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_f++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qu,this.updateRanges=[],this.gpuType=zn,this.version=0,this._normalizationScale=e!==void 0?Bo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ef(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):tf(e,this.array)}}class sd extends Pi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ad extends Pi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ft extends Pi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const xf=new kr,_r=new O,ua=new O;class Ho{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_r,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(ua)),this.expandByPoint(_r.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vf=0;const gn=new ut,fa=new kt,Yi=new O,ln=new kr,xr=new kr,It=new O;class vn extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yu(e)?ad:sd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(ln.min,xr.min),ln.expandByPoint(It),It.addVectors(ln.max,xr.max),ln.expandByPoint(It)):(ln.expandByPoint(xr.min),ln.expandByPoint(xr.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)It.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(e,c),It.add(Yi)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Pi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new O,l[D]=new O;const d=new O,u=new O,h=new O,m=new Xe,g=new Xe,x=new Xe,p=new O,f=new O;function S(D,C,I){c[D]=c[C]=c[I]=1,d.fromBufferAttribute(i,D),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,I),m.fromBufferAttribute(s,D),g.fromBufferAttribute(s,C),x.fromBufferAttribute(s,I),u.sub(d),h.sub(d),g.sub(m),x.sub(m);const U=1/(g.x*x.y-x.x*g.y);isFinite(U)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(h,-g.y).multiplyScalar(U),f.copy(h).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(U),o[D].add(p),o[C].add(p),o[I].add(p),l[D].add(f),l[C].add(f),l[I].add(f))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,C=A.length;D<C;++D){const I=A[D],U=I.start,W=I.count;for(let L=U,V=U+W;L<V;L+=3)S(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const E=new O,w=new O,T=new O,_=new O;function y(D){T.fromBufferAttribute(r,D),_.copy(T);const C=o[D];E.copy(C),E.sub(T.multiplyScalar(T.dot(C))).normalize(),w.crossVectors(_,C);const U=w.dot(l[D])<0?-1:1;a.setXYZW(D,E.x,E.y,E.z,U)}for(let D=0,C=i.count;D<C;++D)c[D]&&y(D);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Pi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,d=new O,u=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*d;for(let f=0;f<d;f++)h[g++]=c[m++]}return new Pi(h,d,u)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const m=c[u];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let h=0,m=u.length;h<m;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ha=new O,Mf=new O,Sf=new Oe;class ti{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ha.subVectors(i,t).cross(Mf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(ha),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Sf.getNormalMatrix(e),r=this.coplanarPoint(ha).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let yf=0;class Gr extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=Ar,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=Bc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ti().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const jn=new O,pa=new O,es=new O,ts=new O;class od{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){pa.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(pa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(es),o=ts.dot(this.direction),l=-ts.dot(es),c=ts.lengthSq(),d=Math.abs(1-a*a);let u,h,m,g;if(d>0)if(u=a*l-o,h=a*o-l,g=s*d,u>=0)if(h>=-g)if(h<=g){const x=1/d;u*=x,h*=x,m=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),m=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(pa).addScaledVector(es,h),m}intersectSphere(e,t){if(e.radius<0)return null;jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,u=e.x-a.x,h=e.y-a.y,m=e.z-a.z,g=t.x-a.x,x=t.y-a.y,p=t.z-a.z,f=i.x-a.x,S=i.y-a.y,A=i.z-a.z,E=Math.abs(l),w=Math.abs(c),T=Math.abs(d);let _,y,D,C,I,U,W,L,V,Q,G,re;if(E>=w&&E>=T?(D=l,U=u,V=g,re=f,l>=0?(_=c,y=d,C=h,I=m,W=x,L=p,Q=S,G=A):(_=d,y=c,C=m,I=h,W=p,L=x,Q=A,G=S)):w>=T?(D=c,U=h,V=x,re=S,c>=0?(_=d,y=l,C=m,I=u,W=p,L=g,Q=A,G=f):(_=l,y=d,C=u,I=m,W=g,L=p,Q=f,G=A)):(D=d,U=m,V=p,re=A,d>=0?(_=l,y=c,C=u,I=h,W=g,L=x,Q=f,G=S):(_=c,y=l,C=h,I=u,W=x,L=g,Q=S,G=f)),D===0)return null;const q=_/D,te=y/D,ne=1/D,Te=C-q*U,ze=I-te*U,Z=W-q*V,xe=L-te*V,ye=Q-q*re,Pe=G-te*re,ve=ye*xe-Pe*Z,Ge=Te*Pe-ze*ye,vt=Z*ze-xe*Te;if(r){if(ve<0||Ge<0||vt<0)return null}else if((ve<0||Ge<0||vt<0)&&(ve>0||Ge>0||vt>0))return null;const De=ve+Ge+vt;if(De===0)return null;const nt=ne*(ve*U+Ge*V+vt*re);return(De>0?nt<0:nt>0)?null:this.at(nt/De,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rr extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zl=new ut,Ai=new od,ns=new Ho,kl=new O,is=new O,rs=new O,ss=new O,ma=new O,as=new O,Gl=new O,os=new O;class en extends kt{constructor(e=new vn,t=new rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){as.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],u=s[l];d!==0&&(ma.fromBufferAttribute(u,e),a?as.addScaledVector(ma,d):as.addScaledVector(ma.sub(t),d))}t.add(as)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(ns.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(ns,kl)===null||Ai.origin.distanceToSquared(kl)>(e.far-e.near)**2))&&(zl.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(zl),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const p=h[g],f=a[p.materialIndex],S=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,w=A;E<w;E+=3){const T=o.getX(E),_=o.getX(E+1),y=o.getX(E+2);r=ls(this,f,e,i,c,d,u,T,_,y),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){const S=o.getX(p),A=o.getX(p+1),E=o.getX(p+2);r=ls(this,a,e,i,c,d,u,S,A,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const p=h[g],f=a[p.materialIndex],S=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,w=A;E<w;E+=3){const T=E,_=E+1,y=E+2;r=ls(this,f,e,i,c,d,u,T,_,y),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){const S=p,A=p+1,E=p+2;r=ls(this,a,e,i,c,d,u,S,A,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Ef(n,e,t,i,r,s,a,o){let l;if(e.side===sn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Di,o),l===null)return null;os.copy(o),os.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(os);return c<t.near||c>t.far?null:{distance:c,point:os.clone(),object:n}}function ls(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,is),n.getVertexPosition(l,rs),n.getVertexPosition(c,ss);const d=Ef(n,e,t,i,is,rs,ss,Gl);if(d){const u=new O;wn.getBarycoord(Gl,is,rs,ss,u),r&&(d.uv=wn.getInterpolatedAttribute(r,o,l,c,u,new Xe)),s&&(d.uv1=wn.getInterpolatedAttribute(s,o,l,c,u,new Xe)),a&&(d.normal=wn.getInterpolatedAttribute(a,o,l,c,u,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new O,materialIndex:0};wn.getNormal(is,rs,ss,h.normal),d.face=h,d.barycoord=u}return d}class bf extends $t{constructor(e=null,t=1,i=1,r,s,a,o,l,c=zt,d=zt,u,h){super(null,a,o,l,c,d,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wi=new Ho,Tf=new Xe(.5,.5),cs=new O;class Dr{constructor(e=new ti,t=new ti,i=new ti,r=new ti,s=new ti,a=new ti){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],u=s[5],h=s[6],m=s[7],g=s[8],x=s[9],p=s[10],f=s[11],S=s[12],A=s[13],E=s[14],w=s[15];if(r[0].setComponents(c-a,m-d,f-g,w-S).normalize(),r[1].setComponents(c+a,m+d,f+g,w+S).normalize(),r[2].setComponents(c+o,m+u,f+x,w+A).normalize(),r[3].setComponents(c-o,m-u,f-x,w-A).normalize(),i)r[4].setComponents(l,h,p,E).normalize(),r[5].setComponents(c-l,m-h,f-p,w-E).normalize();else if(r[4].setComponents(c-l,m-h,f-p,w-E).normalize(),t===Cn)r[5].setComponents(c+l,m+h,f+p,w+E).normalize();else if(t===Lr)r[5].setComponents(l,h,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){wi.center.set(0,0,0);const t=Tf.distanceTo(e.center);return wi.radius=.7071067811865476+t,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(cs.x=r.normal.x>0?e.max.x:e.min.x,cs.y=r.normal.y>0?e.max.y:e.min.y,cs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Hl=new ut;class Vo{constructor(){this.coordinateSystem=Cn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];Hl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Dr),i[r].setFromProjectionMatrix(Hl,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Dr),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new Vo().copy(this)}}class ld extends $t{constructor(e=[],t=ar,i,r,s,a,o,l,c,d){super(e,t,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Af extends $t{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lr extends $t{constructor(e,t,i=Xn,r,s,a,o=zt,l=zt,c,d=xi,u=1){if(d!==xi&&d!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class cd extends lr{constructor(e,t=Xn,i=ar,r,s,a=zt,o=zt,l,c=xi){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dd extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fi extends vn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(u,2));function g(x,p,f,S,A,E,w,T,_,y,D){const C=E/_,I=w/y,U=E/2,W=w/2,L=T/2,V=_+1,Q=y+1;let G=0,re=0;const q=new O;for(let te=0;te<Q;te++){const ne=te*I-W;for(let Te=0;Te<V;Te++){const ze=Te*C-U;q[x]=ze*S,q[p]=ne*A,q[f]=L,c.push(q.x,q.y,q.z),q[x]=0,q[p]=0,q[f]=T>0?1:-1,d.push(q.x,q.y,q.z),u.push(Te/_),u.push(1-te/y),G+=1}}for(let te=0;te<y;te++)for(let ne=0;ne<_;ne++){const Te=h+ne+V*te,ze=h+ne+V*(te+1),Z=h+(ne+1)+V*(te+1),xe=h+(ne+1)+V*te;l.push(Te,ze,xe),l.push(ze,Z,xe),re+=6}o.addGroup(m,re,D),m+=re,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Us extends vn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],u=[],h=[],m=[];let g=0;const x=[],p=i/2;let f=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(m,2));function S(){const E=new O,w=new O;let T=0;const _=(t-e)/i;for(let y=0;y<=s;y++){const D=[],C=y/s,I=C*(t-e)+e;for(let U=0;U<=r;U++){const W=U/r,L=W*l+o,V=Math.sin(L),Q=Math.cos(L);w.x=I*V,w.y=-C*i+p,w.z=I*Q,u.push(w.x,w.y,w.z),E.set(V,_,Q).normalize(),h.push(E.x,E.y,E.z),m.push(W,1-C),D.push(g++)}x.push(D)}for(let y=0;y<r;y++)for(let D=0;D<s;D++){const C=x[D][y],I=x[D+1][y],U=x[D+1][y+1],W=x[D][y+1];(e>0||D!==0)&&(d.push(C,I,W),T+=3),(t>0||D!==s-1)&&(d.push(I,U,W),T+=3)}c.addGroup(f,T,0),f+=T}function A(E){const w=g,T=new Xe,_=new O;let y=0;const D=E===!0?e:t,C=E===!0?1:-1;for(let U=1;U<=r;U++)u.push(0,p*C,0),h.push(0,C,0),m.push(.5,.5),g++;const I=g;for(let U=0;U<=r;U++){const L=U/r*l+o,V=Math.cos(L),Q=Math.sin(L);_.x=D*Q,_.y=p*C,_.z=D*V,u.push(_.x,_.y,_.z),h.push(0,C,0),T.x=V*.5+.5,T.y=Q*.5*C+.5,m.push(T.x,T.y),g++}for(let U=0;U<r;U++){const W=w+U,L=I+U;E===!0?d.push(L,L+1,W):d.push(L+1,L,W),y+=3}c.addGroup(f,y,E===!0?1:2),f+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cs extends Us{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Cs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wo extends vn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),d(),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(s.slice(),3)),this.setAttribute("uv",new ft(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const A=new O,E=new O,w=new O;for(let T=0;T<t.length;T+=3)m(t[T+0],A),m(t[T+1],E),m(t[T+2],w),l(A,E,w,S)}function l(S,A,E,w){const T=w+1,_=[];for(let y=0;y<=T;y++){_[y]=[];const D=S.clone().lerp(E,y/T),C=A.clone().lerp(E,y/T),I=T-y;for(let U=0;U<=I;U++)U===0&&y===T?_[y][U]=D:_[y][U]=D.clone().lerp(C,U/I)}for(let y=0;y<T;y++)for(let D=0;D<2*(T-y)-1;D++){const C=Math.floor(D/2);D%2===0?(h(_[y][C+1]),h(_[y+1][C]),h(_[y][C])):(h(_[y][C+1]),h(_[y+1][C+1]),h(_[y+1][C]))}}function c(S){const A=new O;for(let E=0;E<s.length;E+=3)A.x=s[E+0],A.y=s[E+1],A.z=s[E+2],A.normalize().multiplyScalar(S),s[E+0]=A.x,s[E+1]=A.y,s[E+2]=A.z}function d(){const S=new O;for(let A=0;A<s.length;A+=3){S.x=s[A+0],S.y=s[A+1],S.z=s[A+2];const E=p(S)/2/Math.PI+.5,w=f(S)/Math.PI+.5;a.push(E,1-w)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const A=a[S+0],E=a[S+2],w=a[S+4],T=Math.max(A,E,w),_=Math.min(A,E,w);T>.9&&_<.1&&(A<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),w<.2&&(a[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function m(S,A){const E=S*3;A.x=e[E+0],A.y=e[E+1],A.z=e[E+2]}function g(){const S=new O,A=new O,E=new O,w=new O,T=new Xe,_=new Xe,y=new Xe;for(let D=0,C=0;D<s.length;D+=9,C+=6){S.set(s[D+0],s[D+1],s[D+2]),A.set(s[D+3],s[D+4],s[D+5]),E.set(s[D+6],s[D+7],s[D+8]),T.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),y.set(a[C+4],a[C+5]),w.copy(S).add(A).add(E).divideScalar(3);const I=p(w);x(T,C+0,S,I),x(_,C+2,A,I),x(y,C+4,E,I)}}function x(S,A,E,w){w<0&&S.x===1&&(a[A]=S.x-1),E.x===0&&E.z===0&&(a[A]=w/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.vertices,e.indices,e.radius,e.detail)}}class Xo extends Wo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xo(e.radius,e.detail)}}class Mi extends vn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,u=e/o,h=t/l,m=[],g=[],x=[],p=[];for(let f=0;f<d;f++){const S=f*h-a;for(let A=0;A<c;A++){const E=A*u-s;g.push(E,-S,0),x.push(0,0,1),p.push(A/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const A=S+c*f,E=S+c*(f+1),w=S+1+c*(f+1),T=S+1+c*f;m.push(A,E,T),m.push(E,w,T)}this.setIndex(m),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.widthSegments,e.heightSegments)}}class $o extends vn{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],d=[];let u=e;const h=(t-e)/r,m=new O,g=new Xe;for(let x=0;x<=r;x++){for(let p=0;p<=i;p++){const f=s+p/i*a;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,d.push(g.x,g.y)}u+=h}for(let x=0;x<r;x++){const p=x*(i+1);for(let f=0;f<i;f++){const S=f+p,A=S,E=S+i+1,w=S+i+2,T=S+1;o.push(A,E,T),o.push(E,w,T)}}this.setIndex(o),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class qo extends vn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new O,h=new O,m=[],g=[],x=[],p=[];for(let f=0;f<=i;f++){const S=[],A=f/i,E=a+A*o,w=e*Math.cos(E),T=Math.sqrt(e*e-w*w);let _=0;f===0&&a===0?_=.5/t:f===i&&l===Math.PI&&(_=-.5/t);for(let y=0;y<=t;y++){const D=y/t,C=r+D*s;u.x=-T*Math.cos(C),u.y=w,u.z=T*Math.sin(C),g.push(u.x,u.y,u.z),h.copy(u).normalize(),x.push(h.x,h.y,h.z),p.push(D+_,1-A),S.push(c++)}d.push(S)}for(let f=0;f<i;f++)for(let S=0;S<t;S++){const A=d[f][S+1],E=d[f][S],w=d[f+1][S],T=d[f+1][S+1];(f!==0||a>0)&&m.push(A,E,T),(f!==i-1||l<Math.PI)&&m.push(E,w,T)}this.setIndex(m),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yo extends vn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],d=[],u=[],h=new O,m=new O,g=new O;for(let x=0;x<=i;x++){const p=a+x/i*o;for(let f=0;f<=r;f++){const S=f/r*s;m.x=(e+t*Math.cos(p))*Math.cos(S),m.y=(e+t*Math.cos(p))*Math.sin(S),m.z=t*Math.sin(p),c.push(m.x,m.y,m.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),g.subVectors(m,h).normalize(),d.push(g.x,g.y,g.z),u.push(f/r),u.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=r;p++){const f=(r+1)*x+p-1,S=(r+1)*(x-1)+p-1,A=(r+1)*(x-1)+p,E=(r+1)*x+p;l.push(f,S,E),l.push(S,A,E)}this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Vl(r))r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Vl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=cr(n[t]);for(const r in i)e[r]=i[r]}return e}function Vl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function wf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ud(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Rf={clone:cr,merge:Kt};var Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(r.value);break;case"v2":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new O().fromArray(r.value);break;case"v4":this.uniforms[i].value=new gt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ut().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Lf extends Ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Df extends Gr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Po,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class If extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nf extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ko extends kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Uf extends Ko{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ga=new ut,Wl=new O,Xl=new O;class fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wl),Xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ga,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Lr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ds=new O,us=new fr,Nn=new O;class hd extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ds,us,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ds,us,Nn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ds,us,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ds,us,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fi=new O,$l=new Xe,ql=new Xe;class Tn extends hd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,$l,ql),t.subVectors(ql,$l)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ff extends fd{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0}}class Of extends Ko{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ff}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Zo extends hd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bf extends fd{constructor(){super(new Zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yl extends Ko{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Bf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ki=-90,Zi=1;class fo extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(Ki,Zi,e,t);r.layers=this.layers,this.add(r);const s=new Tn(Ki,Zi,e,t);s.layers=this.layers,this.add(s);const a=new Tn(Ki,Zi,e,t);a.layers=this.layers,this.add(a);const o=new Tn(Ki,Zi,e,t);o.layers=this.layers,this.add(o);const l=new Tn(Ki,Zi,e,t);l.layers=this.layers,this.add(l);const c=new Tn(Ki,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class zf extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Kl=new ut;class kf{constructor(e,t,i=0,r=1/0){this.ray=new od(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kl),this}intersectObject(e,t=!0,i=[]){return ho(e,this,i,t),i.sort(Zl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ho(e[r],this,i,t);return i.sort(Zl),i}}function Zl(n,e){return n.distance-e.distance}function ho(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)ho(s[a],e,t,!0)}}function Jl(n,e,t,i){const r=Gf(i);switch(t){case Zc:return n*e;case Qc:return n*e/r.components*r.byteLength;case Uo:return n*e/r.components*r.byteLength;case Ii:return n*e*2/r.components*r.byteLength;case Fo:return n*e*2/r.components*r.byteLength;case Jc:return n*e*3/r.components*r.byteLength;case kn:return n*e*4/r.components*r.byteLength;case Oo:return n*e*4/r.components*r.byteLength;case ms:case gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _s:case xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Na:case Fa:return Math.max(n,16)*Math.max(e,8)/4;case Ia:case Ua:return Math.max(n,8)*Math.max(e,8)/2;case Oa:case Ba:case ka:case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case za:case bs:case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $a:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Za:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case eo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case to:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case no:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case io:case ro:case so:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ao:case oo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ts:case lo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gf(n){switch(n){case un:case $c:return{byteLength:1,components:1};case Pr:case qc:case $n:return{byteLength:2,components:1};case Io:case No:return{byteLength:2,components:4};case Xn:case Do:case zn:return{byteLength:4,components:1};case Yc:case Kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pd(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Hf(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,d);else{u.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<u.length;m++){const g=u[h],x=u[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,u[h]=x)}u.length=h+1;for(let m=0,g=u.length;m<g;m++){const x=u[m];n.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,th=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ih=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ch=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ph=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_h=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",vh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,yh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Th=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ah=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ch=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ph=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ih=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Nh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Uh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wh=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$h=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,np=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,up=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Up=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Op=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,om=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,um=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Vf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:$f,alphatest_fragment:qf,alphatest_pars_fragment:Yf,aomap_fragment:Kf,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:Qf,begin_vertex:jf,beginnormal_vertex:eh,bsdfs:th,iridescence_fragment:nh,bumpmap_pars_fragment:ih,clipping_planes_fragment:rh,clipping_planes_pars_fragment:sh,clipping_planes_pars_vertex:ah,clipping_planes_vertex:oh,color_fragment:lh,color_pars_fragment:ch,color_pars_vertex:dh,color_vertex:uh,common:fh,defaultnormal_vertex:hh,displacementmap_pars_vertex:ph,displacementmap_vertex:mh,emissivemap_fragment:gh,emissivemap_pars_fragment:_h,colorspace_fragment:xh,colorspace_pars_fragment:vh,envmap_fragment:Mh,envmap_common_pars_fragment:Sh,envmap_pars_fragment:yh,envmap_pars_vertex:Eh,envmap_physical_pars_fragment:Nh,envmap_vertex:bh,fog_vertex:Th,fog_pars_vertex:Ah,fog_fragment:wh,fog_pars_fragment:Rh,gradientmap_pars_fragment:Ch,lightmap_pars_fragment:Ph,lights_lambert_fragment:Lh,lights_lambert_pars_fragment:Dh,lights_pars_begin:Ih,lights_toon_fragment:Uh,lights_toon_pars_fragment:Fh,lights_phong_fragment:Oh,lights_phong_pars_fragment:Bh,lights_physical_fragment:zh,lights_physical_pars_fragment:kh,lights_fragment_begin:Gh,lights_fragment_maps:Hh,lights_fragment_end:Vh,lightprobes_pars_fragment:Wh,logdepthbuf_fragment:Xh,logdepthbuf_pars_fragment:$h,logdepthbuf_pars_vertex:qh,logdepthbuf_vertex:Yh,map_fragment:Kh,map_pars_fragment:Zh,map_particle_fragment:Jh,map_particle_pars_fragment:Qh,metalnessmap_fragment:jh,metalnessmap_pars_fragment:ep,morphinstance_vertex:tp,morphcolor_vertex:np,morphnormal_vertex:ip,morphtarget_pars_vertex:rp,morphtarget_vertex:sp,normal_fragment_begin:ap,normal_fragment_maps:op,normal_pars_fragment:lp,normal_pars_vertex:cp,normal_vertex:dp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:pp,iridescence_pars_fragment:mp,opaque_fragment:gp,packing:_p,premultiplied_alpha_fragment:xp,project_vertex:vp,dithering_fragment:Mp,dithering_pars_fragment:Sp,roughnessmap_fragment:yp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:Tp,shadowmap_vertex:Ap,shadowmask_pars_fragment:wp,skinbase_vertex:Rp,skinning_pars_vertex:Cp,skinning_vertex:Pp,skinnormal_vertex:Lp,specularmap_fragment:Dp,specularmap_pars_fragment:Ip,tonemapping_fragment:Np,tonemapping_pars_fragment:Up,transmission_fragment:Fp,transmission_pars_fragment:Op,uv_pars_fragment:Bp,uv_pars_vertex:zp,uv_vertex:kp,worldpos_vertex:Gp,background_vert:Hp,background_frag:Vp,backgroundCube_vert:Wp,backgroundCube_frag:Xp,cube_vert:$p,cube_frag:qp,depth_vert:Yp,depth_frag:Kp,distance_vert:Zp,distance_frag:Jp,equirect_vert:Qp,equirect_frag:jp,linedashed_vert:em,linedashed_frag:tm,meshbasic_vert:nm,meshbasic_frag:im,meshlambert_vert:rm,meshlambert_frag:sm,meshmatcap_vert:am,meshmatcap_frag:om,meshnormal_vert:lm,meshnormal_frag:cm,meshphong_vert:dm,meshphong_frag:um,meshphysical_vert:fm,meshphysical_frag:hm,meshtoon_vert:pm,meshtoon_frag:mm,points_vert:gm,points_frag:_m,shadow_vert:xm,shadow_frag:vm,sprite_vert:Mm,sprite_frag:Sm},_e={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Bn={basic:{uniforms:Kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Kt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Kt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new $e(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Kt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Kt([_e.points,_e.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Kt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Kt([_e.common,_e.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Kt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Kt([_e.sprite,_e.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Kt([_e.common,_e.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Kt([_e.lights,_e.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Bn.physical={uniforms:Kt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const fs={r:0,b:0,g:0},ym=new ut,md=new Oe;md.set(-1,0,0,0,1,0,0,0,1);function Em(n,e,t,i,r,s){const a=new $e(0);let o=r===!0?0:1,l,c,d=null,u=0,h=null;function m(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){const E=S.backgroundBlurriness>0;A=e.get(A,E)}return A}function g(S){let A=!1;const E=m(S);E===null?p(a,o):E&&E.isColor&&(p(E,1),A=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(S,A){const E=m(A);E&&E.isCubeTexture?(c===void 0&&(c=new en(new Fi(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:cr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(md),c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==rt,(d!==E||u!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,u=E.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new en(new Mi(2,2),new Ni({name:"BackgroundMaterial",uniforms:cr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||u!==E.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=E,u=E.version,h=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,A){S.getRGB(fs,ud(n)),t.buffers.color.setClear(fs.r,fs.g,fs.b,A,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:x,dispose:f}}function bm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(I,U,W,L,V){let Q=!1;const G=u(I,L,W,U);s!==G&&(s=G,c(s.object)),Q=m(I,L,W,V),Q&&g(I,L,W,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,E(I,U,W,L),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function d(I){return n.deleteVertexArray(I)}function u(I,U,W,L){const V=L.wireframe===!0;let Q=i[U.id];Q===void 0&&(Q={},i[U.id]=Q);const G=I.isInstancedMesh===!0?I.id:0;let re=Q[G];re===void 0&&(re={},Q[G]=re);let q=re[W.id];q===void 0&&(q={},re[W.id]=q);let te=q[V];return te===void 0&&(te=h(l()),q[V]=te),te}function h(I){const U=[],W=[],L=[];for(let V=0;V<t;V++)U[V]=0,W[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:L,object:I,attributes:{},index:null}}function m(I,U,W,L){const V=s.attributes,Q=U.attributes;let G=0;const re=W.getAttributes();for(const q in re)if(re[q].location>=0){const ne=V[q];let Te=Q[q];if(Te===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(Te=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(Te=I.instanceColor)),ne===void 0||ne.attribute!==Te||Te&&ne.data!==Te.data)return!0;G++}return s.attributesNum!==G||s.index!==L}function g(I,U,W,L){const V={},Q=U.attributes;let G=0;const re=W.getAttributes();for(const q in re)if(re[q].location>=0){let ne=Q[q];ne===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));const Te={};Te.attribute=ne,ne&&ne.data&&(Te.data=ne.data),V[q]=Te,G++}s.attributes=V,s.attributesNum=G,s.index=L}function x(){const I=s.newAttributes;for(let U=0,W=I.length;U<W;U++)I[U]=0}function p(I){f(I,0)}function f(I,U){const W=s.newAttributes,L=s.enabledAttributes,V=s.attributeDivisors;W[I]=1,L[I]===0&&(n.enableVertexAttribArray(I),L[I]=1),V[I]!==U&&(n.vertexAttribDivisor(I,U),V[I]=U)}function S(){const I=s.newAttributes,U=s.enabledAttributes;for(let W=0,L=U.length;W<L;W++)U[W]!==I[W]&&(n.disableVertexAttribArray(W),U[W]=0)}function A(I,U,W,L,V,Q,G){G===!0?n.vertexAttribIPointer(I,U,W,V,Q):n.vertexAttribPointer(I,U,W,L,V,Q)}function E(I,U,W,L){x();const V=L.attributes,Q=W.getAttributes(),G=U.defaultAttributeValues;for(const re in Q){const q=Q[re];if(q.location>=0){let te=V[re];if(te===void 0&&(re==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),re==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),te!==void 0){const ne=te.normalized,Te=te.itemSize,ze=e.get(te);if(ze===void 0)continue;const Z=ze.buffer,xe=ze.type,ye=ze.bytesPerElement,Pe=xe===n.INT||xe===n.UNSIGNED_INT||te.gpuType===Do;if(te.isInterleavedBufferAttribute){const ve=te.data,Ge=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,vt=te.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let De=0;De<q.locationSize;De++)f(q.location+De,ve.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let De=0;De<q.locationSize;De++)p(q.location+De);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let De=0;De<q.locationSize;De++)A(q.location+De,Te/q.locationSize,xe,ne,Ge*ye,(vt+Te/q.locationSize*De)*ye,Pe)}else{if(te.isInstancedBufferAttribute){for(let ve=0;ve<q.locationSize;ve++)f(q.location+ve,te.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<q.locationSize;ve++)p(q.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let ve=0;ve<q.locationSize;ve++)A(q.location+ve,Te/q.locationSize,xe,ne,Te*ye,Te/q.locationSize*ve*ye,Pe)}}else if(G!==void 0){const ne=G[re];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(q.location,ne);break;case 3:n.vertexAttrib3fv(q.location,ne);break;case 4:n.vertexAttrib4fv(q.location,ne);break;default:n.vertexAttrib1fv(q.location,ne)}}}}S()}function w(){D();for(const I in i){const U=i[I];for(const W in U){const L=U[W];for(const V in L){const Q=L[V];for(const G in Q)d(Q[G].object),delete Q[G];delete L[V]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;const U=i[I.id];for(const W in U){const L=U[W];for(const V in L){const Q=L[V];for(const G in Q)d(Q[G].object),delete Q[G];delete L[V]}}delete i[I.id]}function _(I){for(const U in i){const W=i[U];for(const L in W){const V=W[L];if(V[I.id]===void 0)continue;const Q=V[I.id];for(const G in Q)d(Q[G].object),delete Q[G];delete V[I.id]}}}function y(I){for(const U in i){const W=i[U],L=I.isInstancedMesh===!0?I.id:0,V=W[L];if(V!==void 0){for(const Q in V){const G=V[Q];for(const re in G)d(G[re].object),delete G[re];delete V[Q]}delete W[L],Object.keys(W).length===0&&delete i[U]}}}function D(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function Tm(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let h=0;for(let m=0;m<d;m++)h+=c[m];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Am(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(_){return!(_!==kn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const y=_===$n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==un&&_!==zn&&!y&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ue("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ue("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:E,maxSamples:w,samples:T}}function wm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ti,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const m=u.length!==0||h||i!==0||r;return r=h,i=u.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,m){const g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!r||g===null||g.length===0||s&&!p)s?d(null):c();else{const S=s?0:i,A=S*4;let E=f.clippingState||null;l.value=E,E=d(g,h,A,m);for(let w=0;w!==A;++w)E[w]=t[w];f.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,m,g){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const f=m+x*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let A=0,E=m;A!==x;++A,E+=4)a.copy(u[A]).applyMatrix4(S,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}class Jo extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ld(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fi(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:nr});s.uniforms.tEquirect.value=t;const a=new en(r,s),o=t.minFilter;return t.minFilter===mi&&(t.minFilter=rn),new fo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ql=256,Rm=3,Cm=20,gd=256,_d=16,Pm=3,Lm=new O,Dm=new $e;class Ps{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fo(1,10,null),this._boxMesh=new en(new Fi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Lm}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,h=l.autoClearColor,m=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Dm));const p=new fo(i,r,d);return p.position.copy(o),p.update(l,e),l.autoClear=u,l.autoClearColor=h,l.autoClearDepth=m,l.autoClearStencil=g,e.background=x,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ql,ju(e))}_fromTexture(e,t){e.mapping===ar||e.mapping===Cr?this._setSize(e.image.length===0?Ql:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=jl(e,!1,!1),i=Math.log2(e)-Rm;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=jl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ar||e.mapping===Cr?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ec()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Im(),this._integrationMaterial=Nm());const t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/_d);for(let a=0;a<=i;a++){const o=Ps.lodToRoughness(a,i);if(a>i-Pm)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(gd*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Um());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function jl(n,e,t){return new Jo(n,{minFilter:mi,generateMipmaps:e,type:$n,colorSpace:As,depthBuffer:t})}function Hr(n,e,t){return new Ni({name:n,uniforms:e,vertexShader:We.cube_vert,fragmentShader:t,side:sn,blending:nr,depthTest:!1,depthWrite:!1})}function Im(){return Hr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${gd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Nm(){return Hr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:_d}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Um(){return Hr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Cm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ec(){return Hr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function tc(){return Hr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Fm(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,m=!1){return h==null?null:m?a(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===Ws||m===Xs)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const x=new Jo(g.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const m=h.mapping,g=m===Ws||m===Xs,x=m===ar||m===Cr;if(g||x){let p=t.get(h);const f=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Ps(n)),p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const S=h.image;return g&&S&&S.height>0||x&&S&&l(S)?(i===null&&(i=new Ps(n)),p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",d),p.texture):null}}}return h}function o(h,m){return m===Ws?h.mapping=ar:m===Xs&&(h.mapping=Cr),h}function l(h){let m=0;const g=6;for(let x=0;x<g;x++)h[x]!==void 0&&m++;return m===g}function c(h){const m=h.target;m.removeEventListener("dispose",c);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(h){const m=h.target;m.removeEventListener("dispose",d);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:u}}function Om(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vs("WebGLRenderer: "+i+" extension not supported."),r}}}function Bm(n,e,t,i){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);const x=s.get(g);x&&(e.remove(x),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return r[x.id]!==void 0||(x.addEventListener("dispose",o),r[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function d(g){const x=g.attributes;for(const p in x)e.update(x[p],n.ARRAY_BUFFER)}function u(g){const x=g.index,p=g.attributes.position;let f=0;if(p===void 0)return;const S=x!==null?x.array.length:p.array.length/3-1,A=p.count>=65535?ad:sd,E=new A(Math.ceil(S/3)*6,1),w=E.array;if(x!==null){const _=x.array;f=x.version;for(let y=0,D=0;y<S;y+=3){const C=_[y+0],I=_[y+1],U=_[y+2];w[D++]=C,w[D++]=I,w[D++]=I,w[D++]=U,w[D++]=U,w[D++]=C}}else{f=p.version;for(let _=0,y=0;_<S;_+=3){const D=_+0,C=_+1,I=_+2;w[y++]=D,w[y++]=C,w[y++]=C,w[y++]=I,w[y++]=I,w[y++]=D}}E.version=f;const T=s.get(g);T&&e.remove(T),s.set(g,E)}function h(g){const x=s.get(g);if(x){const p=g.index;p!==null&&x.version<p.version&&u(g)}else u(g);return s.get(g)}function m(){for(const g in r){const x=r[g].deref();x!==void 0&&l(x)}}return{get:c,update:d,getWireframeAttribute:h,dispose:m}}function zm(n,e,t){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,h){n.drawElements(i,h,s,u*a),t.update(h,i,1)}function c(u,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,u*a,m),t.update(h,i,m))}function d(u,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,u,0,m);let x=0;for(let p=0;p<m;p++)x+=h[p];t.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function km(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Gm(n,e,t){const i=new WeakMap,r=new gt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==u){let C=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var m=C;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),p===!0&&(E=3);let w=o.attributes.position.count*E,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const _=new Float32Array(w*T*4*u),y=new id(_,w,T,u);y.type=zn,y.needsUpdate=!0;const D=E*4;for(let I=0;I<u;I++){const U=f[I],W=S[I],L=A[I],V=w*T*4*I;for(let Q=0;Q<U.count;Q++){const G=Q*D;g===!0&&(r.fromBufferAttribute(U,Q),_[V+G+0]=r.x,_[V+G+1]=r.y,_[V+G+2]=r.z,_[V+G+3]=0),x===!0&&(r.fromBufferAttribute(W,Q),_[V+G+4]=r.x,_[V+G+5]=r.y,_[V+G+6]=r.z,_[V+G+7]=0),p===!0&&(r.fromBufferAttribute(L,Q),_[V+G+8]=r.x,_[V+G+9]=r.y,_[V+G+10]=r.z,_[V+G+11]=L.itemSize===4?r.w:1)}}h={count:u,texture:y,size:new Xe(w,T)},i.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Hm(n,e,t,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return h}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const Vm={[zc]:"LINEAR_TONE_MAPPING",[kc]:"REINHARD_TONE_MAPPING",[Gc]:"CINEON_TONE_MAPPING",[Lo]:"ACES_FILMIC_TONE_MAPPING",[Vc]:"AGX_TONE_MAPPING",[Wc]:"NEUTRAL_TONE_MAPPING",[Hc]:"CUSTOM_TONE_MAPPING"};function Wm(n,e,t,i,r,s){const a=new Vn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const d=new vn;d.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ft([0,2,0,0,2,0],2));const u=new Lf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new en(d,u),m=new Zo(-1,1,1,-1,0,1);let g=null,x=null,p=!1,f,S=null,A=[],E=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let _=0;_<A.length;_++){const y=A[_];y.setSize&&y.setSize(w,T)}},this.setEffects=function(w){A=w,E=A.length>0&&A[0].isRenderPass===!0;const T=a.width,_=a.height;A.length>0&&o===null&&(o=new Vn(T,_,{type:$n,depthBuffer:!1,stencilBuffer:!1}),l=new Vn(T,_,{type:$n,depthBuffer:!1,stencilBuffer:!1}));const y=r===!0&&A.some(D=>D.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new lr(T,_),s===!0&&(c.format=gi,c.type=or)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let D=0;D<A.length;D++){const C=A[D];C.setSize&&C.setSize(T,_),y&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,T){if(p||w.toneMapping===ri&&A.length===0)return!1;if(S=T,T!==null){const _=T.width,y=T.height;(a.width!==_||a.height!==y)&&this.setSize(_,y)}return E===!1&&w.setRenderTarget(a),f=w.toneMapping,w.toneMapping=ri,!0},this.hasRenderPass=function(){return E},this.end=function(w,T){w.toneMapping=f,p=!0;let _=a,y=o;for(let D=0;D<A.length;D++){const C=A[D];C.enabled!==!1&&(C.render(w,y,_,T),C.needsSwap!==!1&&(_=y,y=y===o?l:o))}if(g!==w.outputColorSpace||x!==w.toneMapping){g=w.outputColorSpace,x=w.toneMapping,u.defines={},Ze.getTransfer(g)===rt&&(u.defines.SRGB_TRANSFER="");const D=Vm[x];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(S),w.render(h,m),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),u.dispose()}}const xd=new $t,vd=new lr(1,1),Md=new cd(1),Sd=new id,yd=new lf,Ed=new ld,nc=[],ic=[],rc=new Float32Array(16),sc=new Float32Array(9),ac=new Float32Array(4);function hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=nc[r];if(s===void 0&&(s=new Float32Array(r),nc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fs(n,e){let t=ic[e];t===void 0&&(t=new Int32Array(e),ic[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Xm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function Ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function Km(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;ac.set(i),n.uniformMatrix2fv(this.addr,!1,ac),Ct(t,i)}}function Zm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;sc.set(i),n.uniformMatrix3fv(this.addr,!1,sc),Ct(t,i)}}function Jm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;rc.set(i),n.uniformMatrix4fv(this.addr,!1,rc),Ct(t,i)}}function Qm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function ng(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function Os(n){return n.version===0&&(n.compareFunction=td,n.needsUpdate=!0),n}function ag(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=Os(vd):s=xd,t.setTexture2D(e||s,r)}function og(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||yd,r)}function lg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=Os(Md):s=Ed,t.setTextureCube(e||s,r)}function cg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Sd,r)}function dg(n){switch(n){case 5126:return Xm;case 35664:return $m;case 35665:return qm;case 35666:return Ym;case 35674:return Km;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return jm;case 35668:case 35672:return eg;case 35669:case 35673:return tg;case 5125:return ng;case 36294:return ig;case 36295:return rg;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function ug(n,e){n.uniform1fv(this.addr,e)}function fg(n,e){const t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function hg(n,e){const t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function pg(n,e){const t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function mg(n,e){const t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gg(n,e){const t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _g(n,e){const t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xg(n,e){n.uniform1iv(this.addr,e)}function vg(n,e){n.uniform2iv(this.addr,e)}function Mg(n,e){n.uniform3iv(this.addr,e)}function Sg(n,e){n.uniform4iv(this.addr,e)}function yg(n,e){n.uniform1uiv(this.addr,e)}function Eg(n,e){n.uniform2uiv(this.addr,e)}function bg(n,e){n.uniform3uiv(this.addr,e)}function Tg(n,e){n.uniform4uiv(this.addr,e)}function Ag(n,e,t){const i=this.cache,r=e.length,s=Fs(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Os(vd):a=xd;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function wg(n,e,t){const i=this.cache,r=e.length,s=Fs(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||yd,s[a])}function Rg(n,e,t){const i=this.cache,r=e.length,s=Fs(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Os(Md):a=Ed;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function Cg(n,e,t){const i=this.cache,r=e.length,s=Fs(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Sd,s[a])}function Pg(n){switch(n){case 5126:return ug;case 35664:return fg;case 35665:return hg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return xg;case 35667:case 35671:return vg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return yg;case 36294:return Eg;case 36295:return bg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}class Lg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dg(t.type)}}class Dg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pg(t.type)}}class Ig{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function oc(n,e){n.seq.push(e),n.map[e.id]=e}function Ng(n,e,t){const i=n.name,r=i.length;for(_a.lastIndex=0;;){const s=_a.exec(i),a=_a.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){oc(t,c===void 0?new Lg(o,n,e):new Dg(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Ig(o),oc(t,u)),t=u}}}class Ms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Ng(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function lc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ug=37297;let Fg=0;function Og(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const cc=new Oe;function Bg(n){Ze._getMatrix(cc,Ze.workingColorSpace,n);const e=`mat3( ${cc.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case ws:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function dc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Og(n.getShaderSource(e),o)}else return s}function zg(n,e){const t=Bg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const kg={[zc]:"Linear",[kc]:"Reinhard",[Gc]:"Cineon",[Lo]:"ACESFilmic",[Vc]:"AgX",[Wc]:"Neutral",[Hc]:"Custom"};function Gg(n,e){const t=kg[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hs=new O;function Hg(){Ze.getLuminanceCoefficients(hs);const n=hs.x.toFixed(4),e=hs.y.toFixed(4),t=hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function Wg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function br(n){return n!==""}function uc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function fc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(n){return n.replace($g,qg)}function qg(n,e){const t=We[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return po(t)}const Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(n){return n.replace(Yg,Kg)}function Kg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Zg={[ps]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function Jg(n){return Zg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qg={[Cr]:"ENVMAP_MODE_REFRACTION"};function jg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Qg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e0={[Po]:"ENVMAP_BLENDING_MULTIPLY",[Fu]:"ENVMAP_BLENDING_MIX",[Ou]:"ENVMAP_BLENDING_ADD"};function t0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":e0[n.combine]||"ENVMAP_BLENDING_NONE"}function n0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Jg(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=jg(t),u=t0(t),h=Vg(t),m=Wg(s),g=r.createProgram();let x,p,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(br).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(br).join(`
`),p.length>0&&(p+=`
`)):(x=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?We.tonemapping_pars_fragment:"",t.toneMapping!==ri?Gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,zg("linearToOutputTexel",t.outputColorSpace),Hg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),a=po(a),a=uc(a,t),a=fc(a,t),o=po(o),o=uc(o,t),o=fc(o,t),a=hc(a),o=hc(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=f+x+a,A=f+p+o,E=lc(r,r.VERTEX_SHADER,S),w=lc(r,r.FRAGMENT_SHADER,A);r.attachShader(g,E),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(C){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(g)||"",U=r.getShaderInfoLog(E)||"",W=r.getShaderInfoLog(w)||"",L=I.trim(),V=U.trim(),Q=W.trim();let G=!0,re=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,E,w);else{const q=dc(r,E,"vertex"),te=dc(r,w,"fragment");je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+q+`
`+te)}else L!==""?Ue("WebGLProgram: Program Info Log:",L):(V===""||Q==="")&&(re=!1);re&&(C.diagnostics={runnable:G,programLog:L,vertexShader:{log:V,prefix:x},fragmentShader:{log:Q,prefix:p}})}r.deleteShader(E),r.deleteShader(w),_=new Ms(r,g),y=Xg(r,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(g,Ug)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}let i0=0;class r0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new s0(e),t.set(e,i)),i}}class s0{constructor(e){this.id=i0++,this.code=e,this.usedTimes=0}}function a0(n){return n===Ii||n===bs||n===Ts}function o0(n,e,t,i,r,s){const a=new ko,o=new r0,l=new Set,c=[],d=new Map,u=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,y,D,C,I,U){const W=C.fog,L=I.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,Q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||V,Q),re=h[_.type];let q=i.precision;_.precision!==null&&(q=i.getMaxPrecision(_.precision),q!==_.precision&&Ue("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));const te=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ne=te!==void 0?te.length:0;let Te=0;L.morphAttributes.position!==void 0&&(Te=1),L.morphAttributes.normal!==void 0&&(Te=2),L.morphAttributes.color!==void 0&&(Te=3);let ze,Z,xe,ye;if(re){const ge=Bn[re];ze=ge.vertexShader,Z=ge.fragmentShader}else{ze=_.vertexShader,Z=_.fragmentShader;const ge=o.getVertexShaderStage(_),it=o.getFragmentShaderStage(_);o.update(_,ge,it),xe=ge.id,ye=it.id}const Pe=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Ge=I.isInstancedMesh===!0,vt=I.isBatchedMesh===!0,De=!!_.map,nt=!!_.matcap,at=!!G,qe=at&&G.isPMREMTexture===!0,Ot=!!_.aoMap,Et=!!_.lightMap,tn=!!_.bumpMap&&_.wireframe===!1,ht=!!_.normalMap,In=!!_.displacementMap,Pt=!!_.emissiveMap,fn=!!_.metalnessMap,hn=!!_.roughnessMap,pn=_.anisotropy>0,N=_.clearcoat>0,mn=_.diffuseRoughness>0,ct=_.dispersion>0,dt=_.retroreflectivity>0,me=_.iridescence>0,bt=_.sheen>0,Le=_.transmission>0,Fe=pn&&!!_.anisotropyMap,b=N&&!!_.clearcoatMap,v=N&&!!_.clearcoatNormalMap,B=N&&!!_.clearcoatRoughnessMap,ie=mn&&!!_.diffuseRoughnessMap,ee=me&&!!_.iridescenceMap,le=me&&!!_.iridescenceThicknessMap,he=bt&&!!_.sheenColorMap,Y=bt&&!!_.sheenRoughnessMap,K=!!_.specularMap,de=!!_.specularColorMap,R=!!_.specularIntensityMap,J=Le&&!!_.transmissionMap,X=Le&&!!_.thicknessMap,ue=!!_.gradientMap,oe=!!_.alphaMap,ce=_.alphaTest>0,we=!!_.alphaHash,Ve=!!_.extensions;let ae=ri;_.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(ae=n.toneMapping);const Re=qe?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,He={shaderID:re,shaderType:_.type,shaderName:_.name,vertexShader:ze,fragmentShader:Z,defines:_.defines,customVertexShaderID:xe,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:vt,batchingColor:vt&&I._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&I.instanceColor!==null,instancingMorph:Ge&&I.morphTexture!==null,outputColorSpace:Pe===null?n.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:De,matcap:nt,envMap:at,envMapMode:at&&G.mapping,envMapPMREM:qe,envMapMaxLod:qe?Re.length-1:null,envMapSize:qe?Re[0].width:null,aoMap:Ot,lightMap:Et,bumpMap:tn,normalMap:ht,displacementMap:In,emissiveMap:Pt,normalMapObjectSpace:ht&&_.normalMapType===ku,normalMapTangentSpace:ht&&_.normalMapType===co,packedNormalMap:ht&&_.normalMapType===co&&a0(_.normalMap.format),metalnessMap:fn,roughnessMap:hn,anisotropy:pn,anisotropyMap:Fe,clearcoat:N,clearcoatMap:b,clearcoatNormalMap:v,clearcoatRoughnessMap:B,diffuseRoughness:mn,diffuseRoughnessMap:ie,dispersion:ct,retroreflection:dt,iridescence:me,iridescenceMap:ee,iridescenceThicknessMap:le,sheen:bt,sheenColorMap:he,sheenRoughnessMap:Y,specularMap:K,specularColorMap:de,specularIntensityMap:R,transmission:Le,transmissionMap:J,thicknessMap:X,gradientMap:ue,opaque:_.transparent===!1&&_.blending===Ar&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:ce,alphaHash:we,combine:_.combine,mapUv:De&&m(_.map.channel),aoMapUv:Ot&&m(_.aoMap.channel),lightMapUv:Et&&m(_.lightMap.channel),bumpMapUv:tn&&m(_.bumpMap.channel),normalMapUv:ht&&m(_.normalMap.channel),displacementMapUv:In&&m(_.displacementMap.channel),emissiveMapUv:Pt&&m(_.emissiveMap.channel),metalnessMapUv:fn&&m(_.metalnessMap.channel),roughnessMapUv:hn&&m(_.roughnessMap.channel),anisotropyMapUv:Fe&&m(_.anisotropyMap.channel),clearcoatMapUv:b&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&m(_.sheenRoughnessMap.channel),specularMapUv:K&&m(_.specularMap.channel),specularColorMapUv:de&&m(_.specularColorMap.channel),specularIntensityMapUv:R&&m(_.specularIntensityMap.channel),transmissionMapUv:J&&m(_.transmissionMap.channel),thicknessMapUv:X&&m(_.thicknessMap.channel),alphaMapUv:oe&&m(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ht||pn),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(De||oe),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&ht===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Te,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:U.filter(ge=>ge.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===rt,decodeVideoTextureEmissive:Pt&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Jt,flipSided:_.side===sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ve&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&_.extensions.multiDraw===!0||vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function x(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)y.push(D),y.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(p(y,_),f(y,_),y.push(n.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function p(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapPMREM),_.push(y.envMapMaxLod),_.push(y.envMapSize),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.diffuseRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.numLightProbeGrids),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function f(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){const y=h[_.type];let D;if(y){const C=Bn[y];D=Rf.clone(C.uniforms)}else D=_.uniforms;return D}function A(_,y){let D=d.get(y);return D!==void 0?++D.usedTimes:(D=new n0(n,y,_,r),c.push(D),d.set(y,D)),D}function E(_){if(--_.usedTimes===0){const y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:S,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:T}}function l0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function c0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function mc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,g,x,p,f){let S=n[e];return S===void 0?(S={id:h.id,object:h,geometry:m,material:g,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:p,group:f},n[e]=S):(S.id=h.id,S.object=h,S.geometry=m,S.material=g,S.materialVariant=a(h),S.groupOrder=x,S.renderOrder=h.renderOrder,S.z=p,S.group=f),e++,S}function l(h,m,g,x,p,f,S){S.reversedDepth===!0&&(p=-p);const A=o(h,m,g,x,p,f);g.transmission>0?i.push(A):g.transparent===!0?r.push(A):t.push(A)}function c(h,m,g,x,p,f){const S=o(h,m,g,x,p,f);g.transmission>0?i.unshift(S):g.transparent===!0?r.unshift(S):t.unshift(S)}function d(h,m){t.length>1&&t.sort(h||c0),i.length>1&&i.sort(m||mc),r.length>1&&r.sort(m||mc)}function u(){for(let h=e,m=n.length;h<m;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:u,sort:d}}function d0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new gc,n.set(i,[a])):r>=s.length?(a=new gc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function u0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new $e};break;case"SpotLight":t={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function f0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let h0=0;function p0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function m0(n){const e=new u0,t=f0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new ut,a=new ut;function o(c){let d=0,u=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,g=0,x=0,p=0,f=0,S=0,A=0,E=0,w=0,T=0,_=0,y=0,D=0,C=0;c.sort(p0);for(let U=0,W=c.length;U<W;U++){const L=c[U],V=L.color,Q=L.intensity,G=L.distance;let re=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ii?re=L.shadow.map.texture:re=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=V.r*Q,u+=V.g*Q,h+=V.b*Q;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],Q);C++}else if(L.isSunLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const te=L.shadow,ne=t.get(L);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),i.sunShadow[g]=ne,i.sunShadowMap[g]=re;const Te=te.getViewportCount();for(let ze=0;ze<Te;ze++)i.sunShadowMatrix[x+ze]=te.getMatrix(ze),i.sunShadowCascade[x+ze]=te._cascadeData[ze];x+=Te,g++}i.sun[m]=q,m++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const te=L.shadow,ne=t.get(L);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,i.directionalShadow[p]=ne,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=L.shadow.matrix,w++}i.directional[p]=q,p++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(V).multiplyScalar(Q),q.distance=G,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[S]=q;const te=L.shadow;if(L.map&&(i.spotLightMap[y]=L.map,y++,te.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[S]=te.matrix,L.castShadow){const ne=t.get(L);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,i.spotShadow[S]=ne,i.spotShadowMap[S]=re,_++}S++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(V).multiplyScalar(Q),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[A]=q,A++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const te=L.shadow,ne=t.get(L);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,ne.shadowCameraNear=te.camera.near,ne.shadowCameraFar=te.camera.far,i.pointShadow[f]=ne,i.pointShadowMap[f]=re,i.pointShadowMatrix[f]=L.shadow.matrix,T++}i.point[f]=q,f++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(Q),q.groundColor.copy(L.groundColor).multiplyScalar(Q),i.hemi[E]=q,E++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const I=i.hash;(I.sunLength!==m||I.directionalLength!==p||I.pointLength!==f||I.spotLength!==S||I.rectAreaLength!==A||I.hemiLength!==E||I.numSunShadows!==g||I.numDirectionalShadows!==w||I.numPointShadows!==T||I.numSpotShadows!==_||I.numSpotMaps!==y||I.numLightProbes!==C)&&(i.sun.length=m,i.directional.length=p,i.spot.length=S,i.rectArea.length=A,i.point.length=f,i.hemi.length=E,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+y-D,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,I.sunLength=m,I.directionalLength=p,I.pointLength=f,I.spotLength=S,I.rectAreaLength=A,I.hemiLength=E,I.numSunShadows=g,I.numDirectionalShadows=w,I.numPointShadows=T,I.numSpotShadows=_,I.numSpotMaps=y,I.numLightProbes=C,i.version=h0++)}function l(c,d){let u=0,h=0,m=0,g=0,x=0,p=0;const f=d.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){const E=c[S];if(E.isSunLight){const w=i.sun[u];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(f),u++}else if(E.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),h++}else if(E.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),g++}else if(E.isRectAreaLight){const w=i.rectArea[x];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(f),a.identity(),s.copy(E.matrixWorld),s.premultiply(f),a.extractRotation(s),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(f),m++}else if(E.isHemisphereLight){const w=i.hemi[p];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:i}}function _c(n){const e=new m0(n),t=[],i=[],r=[];function s(u){d.camera=u,t.length=0,i.length=0,r.length=0}function a(u){u.isLightProbeGrid?r.push(u):t.push(u)}function o(u){i.push(u)}function l(){e.setup(t),r.sort((u,h)=>u.priority-h.priority||u.id-h.id)}function c(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function g0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new _c(n),e.set(r,[o])):s>=a.length?(o=new _c(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const _0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,v0=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],M0=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],xc=new ut,vr=new O,xa=new O;function S0(n,e,t){let i=new Dr;const r=new Xe,s=new Xe,a=new gt,o=new If,l=new Nf,c={},d=t.maxTextureSize,u={[Di]:sn,[sn]:Di,[Jt]:Jt},h=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:_0,fragmentShader:x0}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new en(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ps;let f=this.type;this.render=function(T,_,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Fc&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ps);const D=n.getRenderTarget(),C=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),U=n.state;U.setBlending(nr),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const W=f!==this.type;W&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=T.length;L<V;L++){const Q=T[L],G=Q.shadow;if(G===void 0){Ue("WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const re=G.getFrameExtents();r.multiply(re),s.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/re.x),r.x=s.x*re.x,G.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/re.y),r.y=s.y*re.y,G.mapSize.y=s.y));const q=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||W===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Er){if(Q.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Vn(r.x,r.y,{format:Ii,type:$n,minFilter:rn,magFilter:rn,generateMipmaps:!1}),G.map.texture.name=Q.name+".shadowMap",G.map.depthTexture=new lr(r.x,r.y,zn),G.map.depthTexture.name=Q.name+".shadowMapDepth",G.map.depthTexture.format=xi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=zt,G.map.depthTexture.magFilter=zt}else Q.isPointLight?(G.map=new Jo(r.x),G.map.depthTexture=new cd(r.x,Xn)):(G.map=new Vn(r.x,r.y),G.map.depthTexture=new lr(r.x,r.y,Xn)),G.map.depthTexture.name=Q.name+".shadowMap",G.map.depthTexture.format=xi,this.type===ps?(G.map.depthTexture.compareFunction=q?ed:jc,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=zt,G.map.depthTexture.magFilter=zt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);const te=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Q.isPointLight!==!0&&G.updateMatrices(Q,y);const ne=G.camera.layers.mask&4294967294?G.camera.layers:y.layers;for(let Te=0;Te<te;Te++){const ze=G.getCamera(Te);if(Q.isPointLight){const Z=G.camera,xe=G.matrix,ye=Q.distance||Z.far;ye!==Z.far&&(Z.far=ye,Z.updateProjectionMatrix()),vr.setFromMatrixPosition(Q.matrixWorld),Z.position.copy(vr),xa.copy(Z.position),xa.add(v0[Te]),Z.up.copy(M0[Te]),Z.lookAt(xa),Z.updateMatrixWorld(),xe.makeTranslation(-vr.x,-vr.y,-vr.z),xc.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(xc,Z.coordinateSystem,Z.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,Te),n.clear();else{Te===0&&(n.setRenderTarget(G.map),n.clear());const Z=G.getViewport(Te);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),U.viewport(a)}i=G.getFrustum(Te),E(_,y,ze,Q,ne,this.type)}G.isPointLightShadow!==!0&&this.type===Er&&S(G,y),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(D,C,I)};function S(T,_){const y=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new Vn(r.x,r.y,{format:Ii,type:$n}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(_,null,y,h,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(_,null,y,m,x,null)}function A(T,_,y,D){let C=null;const I=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)C=I;else if(C=y.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const U=C.uuid,W=_.uuid;let L=c[U];L===void 0&&(L={},c[U]=L);let V=L[W];V===void 0&&(V=C.clone(),L[W]=V,_.addEventListener("dispose",w)),C=V}if(C.visible=_.visible,C.wireframe=_.wireframe,D===Er?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=n.properties.get(C);U.light=y}return C}function E(T,_,y,D,C,I){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Er)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const L=e.update(T),V=T.material;if(Array.isArray(V)){const Q=L.groups;for(let G=0,re=Q.length;G<re;G++){const q=Q[G],te=V[q.materialIndex];if(te&&te.visible){const ne=A(T,te,D,I);T.onBeforeShadow(n,T,_,y,L,ne,q),n.renderBufferDirect(y,null,L,ne,T,q),T.onAfterShadow(n,T,_,y,L,ne,q)}}}else if(V.visible){const Q=A(T,V,D,I);T.onBeforeShadow(n,T,_,y,L,Q,null),n.renderBufferDirect(y,null,L,Q,T,null),T.onAfterShadow(n,T,_,y,L,Q,null)}}const W=T.children;for(let L=0,V=W.length;L<V;L++)E(W[L],_,y,D,C,I)}function w(T){T.target.removeEventListener("dispose",w);for(const y in c){const D=c[y],C=T.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function y0(n,e){function t(){let R=!1;const J=new gt;let X=null;const ue=new gt(0,0,0,0);return{setMask:function(oe){X!==oe&&!R&&(n.colorMask(oe,oe,oe,oe),X=oe)},setLocked:function(oe){R=oe},setClear:function(oe,ce,we,Ve,ae){ae===!0&&(oe*=Ve,ce*=Ve,we*=Ve),J.set(oe,ce,we,Ve),ue.equals(J)===!1&&(n.clearColor(oe,ce,we,Ve),ue.copy(J))},reset:function(){R=!1,X=null,ue.set(-1,0,0,0)}}}function i(){let R=!1,J=!1,X=null,ue=null,oe=null;return{setReversed:function(ce){if(J!==ce){const we=e.get("EXT_clip_control");ce?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),J=ce;const Ve=oe;oe=null,this.setClear(Ve)}},getReversed:function(){return J},setTest:function(ce){ce?ve(n.DEPTH_TEST):Ge(n.DEPTH_TEST)},setMask:function(ce){X!==ce&&!R&&(n.depthMask(ce),X=ce)},setFunc:function(ce){if(J&&(ce=Ju[ce]),ue!==ce){switch(ce){case Ta:n.depthFunc(n.NEVER);break;case Aa:n.depthFunc(n.ALWAYS);break;case wa:n.depthFunc(n.LESS);break;case Rr:n.depthFunc(n.LEQUAL);break;case Ra:n.depthFunc(n.EQUAL);break;case Ca:n.depthFunc(n.GEQUAL);break;case Pa:n.depthFunc(n.GREATER);break;case La:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=ce}},setLocked:function(ce){R=ce},setClear:function(ce){oe!==ce&&(oe=ce,J&&(ce=1-ce),n.clearDepth(ce))},reset:function(){R=!1,X=null,ue=null,oe=null,J=!1}}}function r(){let R=!1,J=null,X=null,ue=null,oe=null,ce=null,we=null,Ve=null,ae=null;return{setTest:function(Re){R||(Re?ve(n.STENCIL_TEST):Ge(n.STENCIL_TEST))},setMask:function(Re){J!==Re&&!R&&(n.stencilMask(Re),J=Re)},setFunc:function(Re,He,ge){(X!==Re||ue!==He||oe!==ge)&&(n.stencilFunc(Re,He,ge),X=Re,ue=He,oe=ge)},setOp:function(Re,He,ge){(ce!==Re||we!==He||Ve!==ge)&&(n.stencilOp(Re,He,ge),ce=Re,we=He,Ve=ge)},setLocked:function(Re){R=Re},setClear:function(Re){ae!==Re&&(n.clearStencil(Re),ae=Re)},reset:function(){R=!1,J=null,X=null,ue=null,oe=null,ce=null,we=null,Ve=null,ae=null}}}const s=new t,a=new i,o=new r;let l={};const c=new WeakMap;let d={},u={},h={},m=new WeakMap,g=[],x=null,p=!1,f=null,S=null,A=null,E=null,w=null,T=null,_=null,y=new $e(0,0,0),D=0,C=!1,I=null,U=null,W=null,L=null,V=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,re=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=re>=2);let te=null,ne={};const Te=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),Z=new gt().fromArray(Te),xe=new gt().fromArray(ze);function ye(R,J,X,ue){const oe=new Uint8Array(4),ce=n.createTexture();n.bindTexture(R,ce),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<X;we++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(J+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return ce}const Pe={};Pe[n.TEXTURE_2D]=ye(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[n.TEXTURE_2D_ARRAY]=ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),a.setFunc(Rr),tn(!1),ht(yl),ve(n.CULL_FACE),Ot(nr);function ve(R){d[R]!==!0&&(n.enable(R),d[R]=!0)}function Ge(R){d[R]!==!1&&(n.disable(R),d[R]=!1)}function vt(R,J){return h[R]!==J?(n.bindFramebuffer(R,J),h[R]=J,R===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=J),R===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=J),!0):!1}function De(R,J){let X=g,ue=!1;if(R){X=m.get(J),X===void 0&&(X=[],m.set(J,X));const oe=R.textures;if(X.length!==oe.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,we=oe.length;ce<we;ce++)X[ce]=n.COLOR_ATTACHMENT0+ce;X.length=oe.length,ue=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,ue=!0);ue&&n.drawBuffers(X)}function nt(R){return x!==R?(n.useProgram(R),x=R,!0):!1}const at={[Qi]:n.FUNC_ADD,[vu]:n.FUNC_SUBTRACT,[Mu]:n.FUNC_REVERSE_SUBTRACT};at[Su]=n.MIN,at[yu]=n.MAX;const qe={[Eu]:n.ZERO,[bu]:n.ONE,[Tu]:n.SRC_COLOR,[Oc]:n.SRC_ALPHA,[Lu]:n.SRC_ALPHA_SATURATE,[Cu]:n.DST_COLOR,[wu]:n.DST_ALPHA,[Au]:n.ONE_MINUS_SRC_COLOR,[Bc]:n.ONE_MINUS_SRC_ALPHA,[Pu]:n.ONE_MINUS_DST_COLOR,[Ru]:n.ONE_MINUS_DST_ALPHA,[Du]:n.CONSTANT_COLOR,[Iu]:n.ONE_MINUS_CONSTANT_COLOR,[Nu]:n.CONSTANT_ALPHA,[Uu]:n.ONE_MINUS_CONSTANT_ALPHA};function Ot(R,J,X,ue,oe,ce,we,Ve,ae,Re){if(R===nr){p===!0&&(Ge(n.BLEND),p=!1);return}if(p===!1&&(ve(n.BLEND),p=!0),R!==xu){if(R!==f||Re!==C){if((S!==Qi||w!==Qi)&&(n.blendEquation(n.FUNC_ADD),S=Qi,w=Qi),Re)switch(R){case Ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ba:n.blendFunc(n.ONE,n.ONE);break;case El:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:je("WebGLState: Invalid blending: ",R);break}else switch(R){case Ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ba:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case El:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bl:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",R);break}A=null,E=null,T=null,_=null,y.set(0,0,0),D=0,f=R,C=Re}return}oe=oe||J,ce=ce||X,we=we||ue,(J!==S||oe!==w)&&(n.blendEquationSeparate(at[J],at[oe]),S=J,w=oe),(X!==A||ue!==E||ce!==T||we!==_)&&(n.blendFuncSeparate(qe[X],qe[ue],qe[ce],qe[we]),A=X,E=ue,T=ce,_=we),(Ve.equals(y)===!1||ae!==D)&&(n.blendColor(Ve.r,Ve.g,Ve.b,ae),y.copy(Ve),D=ae),f=R,C=!1}function Et(R,J){R.side===Jt?Ge(n.CULL_FACE):ve(n.CULL_FACE);let X=R.side===sn;J&&(X=!X),tn(X),R.blending===Ar&&R.transparent===!1?Ot(nr):Ot(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const ue=R.stencilWrite;o.setTest(ue),ue&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Pt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function tn(R){I!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),I=R)}function ht(R){R!==gu?(ve(n.CULL_FACE),R!==U&&(R===yl?n.cullFace(n.BACK):R===_u?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ge(n.CULL_FACE),U=R}function In(R){R!==W&&(G&&n.lineWidth(R),W=R)}function Pt(R,J,X){R?(ve(n.POLYGON_OFFSET_FILL),(L!==J||V!==X)&&(L=J,V=X,a.getReversed()&&(J=-J,X=-X),n.polygonOffset(J,X))):Ge(n.POLYGON_OFFSET_FILL)}function fn(R){R?ve(n.SCISSOR_TEST):Ge(n.SCISSOR_TEST)}function hn(R){R===void 0&&(R=n.TEXTURE0+Q-1),te!==R&&(n.activeTexture(R),te=R)}function pn(R,J,X){X===void 0&&(te===null?X=n.TEXTURE0+Q-1:X=te);let ue=ne[X];ue===void 0&&(ue={type:void 0,texture:void 0},ne[X]=ue),(ue.type!==R||ue.texture!==J)&&(te!==X&&(n.activeTexture(X),te=X),n.bindTexture(R,J||Pe[R]),ue.type=R,ue.texture=J)}function N(){const R=ne[te];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function mn(){try{n.compressedTexImage2D(...arguments)}catch(R){je("WebGLState:",R)}}function ct(){try{n.compressedTexImage3D(...arguments)}catch(R){je("WebGLState:",R)}}function dt(){try{n.texSubImage2D(...arguments)}catch(R){je("WebGLState:",R)}}function me(){try{n.texSubImage3D(...arguments)}catch(R){je("WebGLState:",R)}}function bt(){try{n.compressedTexSubImage2D(...arguments)}catch(R){je("WebGLState:",R)}}function Le(){try{n.compressedTexSubImage3D(...arguments)}catch(R){je("WebGLState:",R)}}function Fe(){try{n.texStorage2D(...arguments)}catch(R){je("WebGLState:",R)}}function b(){try{n.texStorage3D(...arguments)}catch(R){je("WebGLState:",R)}}function v(){try{n.texImage2D(...arguments)}catch(R){je("WebGLState:",R)}}function B(){try{n.texImage3D(...arguments)}catch(R){je("WebGLState:",R)}}function ie(R){return u[R]!==void 0?u[R]:n.getParameter(R)}function ee(R,J){u[R]!==J&&(n.pixelStorei(R,J),u[R]=J)}function le(R){Z.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Z.copy(R))}function he(R){xe.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),xe.copy(R))}function Y(R,J){let X=c.get(J);X===void 0&&(X=new WeakMap,c.set(J,X));let ue=X.get(R);ue===void 0&&(ue=n.getUniformBlockIndex(J,R.name),n.uniformBlockBinding(J,ue,ue),X.set(R,ue))}function K(R,J,X){const oe=c.get(J).get(R);l[oe]!==X&&(n.bindBufferBase(n.UNIFORM_BUFFER,oe,X),l[oe]=X)}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},u={},te=null,ne={},h={},l={},m=new WeakMap,g=[],x=null,p=!1,f=null,S=null,A=null,E=null,w=null,T=null,_=null,y=new $e(0,0,0),D=0,C=!1,I=null,U=null,W=null,L=null,V=null,Z.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ve,disable:Ge,bindFramebuffer:vt,drawBuffers:De,useProgram:nt,setBlending:Ot,setMaterial:Et,setFlipSided:tn,setCullFace:ht,setLineWidth:In,setPolygonOffset:Pt,setScissorTest:fn,activeTexture:hn,bindTexture:pn,unbindTexture:N,compressedTexImage2D:mn,compressedTexImage3D:ct,texImage2D:v,texImage3D:B,pixelStorei:ee,getParameter:ie,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:Fe,texStorage3D:b,texSubImage2D:dt,texSubImage3D:me,compressedTexSubImage2D:bt,compressedTexSubImage3D:Le,scissor:le,viewport:he,reset:de}}function E0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,d=new WeakMap,u=new Set;let h;const m=new WeakMap,g=new Set,x=new FinalizationRegistry(b=>g.delete(b));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(b,v){return p?new OffscreenCanvas(b,v):Rs("canvas")}function S(b,v,B){let ie=1;const ee=Fe(b);if((ee.width>B||ee.height>B)&&(ie=B/Math.max(ee.width,ee.height)),ie<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const le=Math.floor(ie*ee.width),he=Math.floor(ie*ee.height);h===void 0&&(h=f(le,he));const Y=v?f(le,he):h;return Y.width=le,Y.height=he,Y.getContext("2d").drawImage(b,0,0,le,he),Ue("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+le+"x"+he+")."),Y}else return"data"in b&&Ue("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function A(b){return b.generateMipmaps}function E(b){n.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(b,v,B,ie,ee,le=!1){if(b!==null){if(n[b]!==void 0)return n[b];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let he;ie&&(he=e.get("EXT_texture_norm16"),he||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===n.RED&&(B===n.FLOAT&&(Y=n.R32F),B===n.HALF_FLOAT&&(Y=n.R16F),B===n.UNSIGNED_BYTE&&(Y=n.R8),B===n.UNSIGNED_SHORT&&he&&(Y=he.R16_EXT),B===n.SHORT&&he&&(Y=he.R16_SNORM_EXT)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.R8UI),B===n.UNSIGNED_SHORT&&(Y=n.R16UI),B===n.UNSIGNED_INT&&(Y=n.R32UI),B===n.BYTE&&(Y=n.R8I),B===n.SHORT&&(Y=n.R16I),B===n.INT&&(Y=n.R32I)),v===n.RG&&(B===n.FLOAT&&(Y=n.RG32F),B===n.HALF_FLOAT&&(Y=n.RG16F),B===n.UNSIGNED_BYTE&&(Y=n.RG8),B===n.UNSIGNED_SHORT&&he&&(Y=he.RG16_EXT),B===n.SHORT&&he&&(Y=he.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RG8UI),B===n.UNSIGNED_SHORT&&(Y=n.RG16UI),B===n.UNSIGNED_INT&&(Y=n.RG32UI),B===n.BYTE&&(Y=n.RG8I),B===n.SHORT&&(Y=n.RG16I),B===n.INT&&(Y=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),B===n.UNSIGNED_INT&&(Y=n.RGB32UI),B===n.BYTE&&(Y=n.RGB8I),B===n.SHORT&&(Y=n.RGB16I),B===n.INT&&(Y=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),B===n.UNSIGNED_INT&&(Y=n.RGBA32UI),B===n.BYTE&&(Y=n.RGBA8I),B===n.SHORT&&(Y=n.RGBA16I),B===n.INT&&(Y=n.RGBA32I)),v===n.RGB&&(B===n.UNSIGNED_SHORT&&he&&(Y=he.RGB16_EXT),B===n.SHORT&&he&&(Y=he.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),v===n.RGBA){const K=le?ws:Ze.getTransfer(ee);B===n.FLOAT&&(Y=n.RGBA32F),B===n.HALF_FLOAT&&(Y=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Y=K===rt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&he&&(Y=he.RGBA16_EXT),B===n.SHORT&&he&&(Y=he.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(b,v){let B;return b?v===null||v===Xn||v===or?B=n.DEPTH24_STENCIL8:v===zn?B=n.DEPTH32F_STENCIL8:v===Pr&&(B=n.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Xn||v===or?B=n.DEPTH_COMPONENT24:v===zn?B=n.DEPTH_COMPONENT32F:v===Pr&&(B=n.DEPTH_COMPONENT16),B}function y(b,v){return A(b)===!0||b.isFramebufferTexture&&b.minFilter!==zt&&b.minFilter!==rn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function D(b){const v=new WeakRef(b);i.get(b).__ref=v,g.add(v),x.register(b,v,v)}function C(b){const v=i.get(b).__ref;v!==void 0&&(g.delete(v),x.unregister(v))}function I(b){W(b.target)}function U(b){L(b.target)}function W(b){b.removeEventListener("dispose",I),C(b),Q(b),b.isVideoTexture&&d.delete(b),b.isHTMLTexture&&u.delete(b)}function L(b){b.removeEventListener("dispose",U),C(b),re(b)}function V(){for(const b of g){const v=b.deref();v!==void 0&&(v.isRenderTarget===!0?L(v):W(v))}g.clear(),u.clear()}function Q(b){const v=i.get(b);if(v.__webglInit===void 0)return;const B=b.source,ie=m.get(B);if(ie){const ee=ie[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&G(b),Object.keys(ie).length===0&&m.delete(B)}i.remove(b)}function G(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const B=b.source,ie=m.get(B);delete ie[v.__cacheKey],a.memory.textures--}function re(b){const v=i.get(b);v.__depthDisposeCallback&&v.__depthDisposeCallback();const B=b.depthTexture;if(B&&B.renderTarget===b&&W(B),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(v.__webglFramebuffer[ee]))for(let le=0;le<v.__webglFramebuffer[ee].length;le++)n.deleteFramebuffer(v.__webglFramebuffer[ee][le]);else n.deleteFramebuffer(v.__webglFramebuffer[ee]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[ee])}else{if(Array.isArray(v.__webglFramebuffer))for(let ee=0;ee<v.__webglFramebuffer.length;ee++)n.deleteFramebuffer(v.__webglFramebuffer[ee]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ee=0;ee<v.__webglColorRenderbuffer.length;ee++)v.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[ee]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const ie=b.textures;for(let ee=0,le=ie.length;ee<le;ee++){const he=i.get(ie[ee]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(ie[ee])}i.remove(b)}let q=0;function te(){q=0}function ne(){return q}function Te(b){q=b}function ze(){const b=q;return b>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+r.maxTextures),q+=1,b}function Z(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.mipmapsAutoUpdate),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function xe(b,v){const B=i.get(b);if(b.isVideoTexture&&bt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const ie=b.image;if(ie===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(B,b,v);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function ye(b,v){const B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){Et(B,b,v);return}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function Pe(b,v){const B=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){Et(B,b,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function ve(b,v){const B=i.get(b);if(b.version>0&&B.__version!==b.version){tn(B,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const Ge={[Es]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[Da]:n.MIRRORED_REPEAT},vt={[zt]:n.NEAREST,[Bu]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[$s]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},De={[Hu]:n.NEVER,[td]:n.ALWAYS,[Vu]:n.LESS,[jc]:n.LEQUAL,[Wu]:n.EQUAL,[ed]:n.GEQUAL,[Xu]:n.GREATER,[$u]:n.NOTEQUAL};function nt(b,v){if(v.type===zn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===rn||v.magFilter===$s||v.magFilter===$r||v.magFilter===mi||v.minFilter===rn||v.minFilter===$s||v.minFilter===$r||v.minFilter===mi)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Ge[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Ge[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Ge[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,vt[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,vt[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,De[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===zt||v.minFilter!==$r&&v.minFilter!==mi||v.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function at(b,v){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",I),D(v));const ie=v.source;let ee=m.get(ie);ee===void 0&&(ee={},m.set(ie,ee));const le=Z(v);if(le!==b.__cacheKey){ee[le]===void 0&&(ee[le]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ee[le].usedTimes++;const he=ee[b.__cacheKey];he!==void 0&&(ee[b.__cacheKey].usedTimes--,he.usedTimes===0&&G(v)),b.__cacheKey=le,b.__webglTexture=ee[le].texture}return B}function qe(b,v,B){return Math.floor(Math.floor(b/B)/v)}function Ot(b,v,B,ie){const le=b.updateRanges;if(le.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,ie,v.data);else{le.sort((R,J)=>R.start-J.start);let he=0;for(let R=1;R<le.length;R++){const J=le[he],X=le[R],ue=J.start+J.count,oe=qe(X.start,v.width,4),ce=qe(J.start,v.width,4);X.start<=ue+1&&oe===ce&&qe(X.start+X.count-1,v.width,4)===oe?J.count=Math.max(J.count,X.start+X.count-J.start):(++he,le[he]=X)}le.length=he+1;const Y=t.getParameter(n.UNPACK_ROW_LENGTH),K=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let R=0,J=le.length;R<J;R++){const X=le[R],ue=Math.floor(X.start/4),oe=Math.ceil(X.count/4),ce=ue%v.width,we=Math.floor(ue/v.width),Ve=oe,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,we),t.texSubImage2D(n.TEXTURE_2D,0,ce,we,Ve,ae,B,ie,v.data)}b.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,K),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function Et(b,v,B){let ie=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ie=n.TEXTURE_3D);const ee=at(b,v),le=v.source;t.bindTexture(ie,b.__webglTexture,n.TEXTURE0+B);const he=i.get(le);if(le.version!==he.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ae=Ze.getPrimaries(Ze.workingColorSpace),Re=v.colorSpace===pi?null:Ze.getPrimaries(v.colorSpace),He=v.colorSpace===pi||ae===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let K=S(v.image,!1,r.maxTextureSize);K=Le(v,K);const de=s.convert(v.format,v.colorSpace),R=s.convert(v.type);let J=T(v.internalFormat,de,R,v.normalized,v.colorSpace,v.isVideoTexture);nt(ie,v);let X;const ue=v.mipmaps,oe=v.isVideoTexture!==!0,ce=he.__version===void 0||ee===!0,we=le.dataReady,Ve=y(v,K);if(v.isDepthTexture)J=_(v.format===gi,v.type),ce&&(oe?t.texStorage2D(n.TEXTURE_2D,1,J,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,J,K.width,K.height,0,de,R,null));else if(v.isDataTexture)if(ue.length>0){oe&&ce&&t.texStorage2D(n.TEXTURE_2D,Ve,J,ue[0].width,ue[0].height);for(let ae=0,Re=ue.length;ae<Re;ae++)X=ue[ae],oe?we&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,X.width,X.height,de,R,X.data):t.texImage2D(n.TEXTURE_2D,ae,J,X.width,X.height,0,de,R,X.data);v.generateMipmaps=!1}else oe?(ce&&t.texStorage2D(n.TEXTURE_2D,Ve,J,K.width,K.height),we&&Ot(v,K,de,R)):t.texImage2D(n.TEXTURE_2D,0,J,K.width,K.height,0,de,R,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){oe&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,J,ue[0].width,ue[0].height,K.depth);for(let ae=0,Re=ue.length;ae<Re;ae++)if(X=ue[ae],v.format!==kn)if(de!==null)if(oe){if(we)if(v.layerUpdates.size>0){const He=Jl(X.width,X.height,v.format,v.type);for(const ge of v.layerUpdates){const it=X.data.subarray(ge*He/X.data.BYTES_PER_ELEMENT,(ge+1)*He/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,ge,X.width,X.height,1,de,it)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,X.width,X.height,K.depth,de,X.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,J,X.width,X.height,K.depth,0,X.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,X.width,X.height,K.depth,de,R,X.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,J,X.width,X.height,K.depth,0,de,R,X.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{oe&&ce&&t.texStorage2D(n.TEXTURE_2D,Ve,J,ue[0].width,ue[0].height);for(let ae=0,Re=ue.length;ae<Re;ae++)X=ue[ae],v.format!==kn?de!==null?oe?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,X.width,X.height,de,X.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,J,X.width,X.height,0,X.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?we&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,X.width,X.height,de,R,X.data):t.texImage2D(n.TEXTURE_2D,ae,J,X.width,X.height,0,de,R,X.data)}else if(v.isDataArrayTexture)if(oe){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,J,K.width,K.height,K.depth),we)if(v.layerUpdates.size>0){const ae=Jl(K.width,K.height,v.format,v.type);for(const Re of v.layerUpdates){const He=K.data.subarray(Re*ae/K.data.BYTES_PER_ELEMENT,(Re+1)*ae/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,K.width,K.height,1,de,R,He)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,de,R,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,de,R,K.data);else if(v.isData3DTexture)oe?(ce&&t.texStorage3D(n.TEXTURE_3D,Ve,J,K.width,K.height,K.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,de,R,K.data)):t.texImage3D(n.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,de,R,K.data);else if(v.isFramebufferTexture){if(ce)if(oe)t.texStorage2D(n.TEXTURE_2D,Ve,J,K.width,K.height);else{let ae=K.width,Re=K.height;for(let He=0;He<Ve;He++)t.texImage2D(n.TEXTURE_2D,He,J,ae,Re,0,de,R,null),ae>>=1,Re>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),K.parentNode!==ae){ae.appendChild(K),u.add(v),ae.onpaint=Re=>{const He=Re.changedElements;for(const ge of u)He.includes(ge.image)&&(ge.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{const He=n.RGBA,ge=n.RGBA,it=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,He,ge,it,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ue.length>0){if(oe&&ce){const ae=Fe(ue[0]);t.texStorage2D(n.TEXTURE_2D,Ve,J,ae.width,ae.height)}for(let ae=0,Re=ue.length;ae<Re;ae++)X=ue[ae],oe?we&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,de,R,X):t.texImage2D(n.TEXTURE_2D,ae,J,de,R,X);v.generateMipmaps=!1}else if(oe){if(ce){const ae=Fe(K);t.texStorage2D(n.TEXTURE_2D,Ve,J,ae.width,ae.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,R,K)}else t.texImage2D(n.TEXTURE_2D,0,J,de,R,K);A(v)&&v.mipmapsAutoUpdate===!0&&E(ie),he.__version=le.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function tn(b,v,B){if(v.image.length!==6)return;const ie=at(b,v),ee=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+B);const le=i.get(ee);if(ee.version!==le.__version||ie===!0){t.activeTexture(n.TEXTURE0+B);const he=Ze.getPrimaries(Ze.workingColorSpace),Y=v.colorSpace===pi?null:Ze.getPrimaries(v.colorSpace),K=v.colorSpace===pi||he===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const de=v.isCompressedTexture||v.image[0].isCompressedTexture,R=v.image[0]&&v.image[0].isDataTexture,J=[];for(let ge=0;ge<6;ge++)!de&&!R?J[ge]=S(v.image[ge],!0,r.maxCubemapSize):J[ge]=R?v.image[ge].image:v.image[ge],J[ge]=Le(v,J[ge]);const X=J[0],ue=s.convert(v.format,v.colorSpace),oe=s.convert(v.type);let ce=T(v.internalFormat,ue,oe,v.normalized,v.colorSpace);const we=v.isVideoTexture!==!0,Ve=le.__version===void 0||ie===!0,ae=ee.dataReady;let Re=y(v,X);nt(n.TEXTURE_CUBE_MAP,v);let He;if(v.isDepthTexture){if(ce=_(v.format===gi,v.type),Ve)if(we)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ce,X.width,X.height);else for(let ge=0;ge<6;ge++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ce,X.width,X.height,0,ue,oe,null)}else if(de){we&&Ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,ce,X.width,X.height);for(let ge=0;ge<6;ge++){He=J[ge].mipmaps;for(let it=0;it<He.length;it++){const Lt=He[it];v.format!==kn?ue!==null?we?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it,0,0,Lt.width,Lt.height,ue,Lt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it,ce,Lt.width,Lt.height,0,Lt.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it,0,0,Lt.width,Lt.height,ue,oe,Lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it,ce,Lt.width,Lt.height,0,ue,oe,Lt.data)}}}else{if(He=v.mipmaps,we&&Ve){He.length>0&&Re++;const ge=Fe(J[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,ce,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(R){we?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,J[ge].width,J[ge].height,ue,oe,J[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ce,J[ge].width,J[ge].height,0,ue,oe,J[ge].data);for(let it=0;it<He.length;it++){const ai=He[it].image[ge].image;we?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it+1,0,0,ai.width,ai.height,ue,oe,ai.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it+1,ce,ai.width,ai.height,0,ue,oe,ai.data)}}else{we?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ue,oe,J[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ce,ue,oe,J[ge]);for(let it=0;it<He.length;it++){const Lt=He[it];we?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it+1,0,0,ue,oe,Lt.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,it+1,ce,ue,oe,Lt.image[ge])}}}A(v)&&v.mipmapsAutoUpdate===!0&&E(n.TEXTURE_CUBE_MAP),le.__version=ee.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ht(b,v,B,ie,ee,le){const he=s.convert(B.format,B.colorSpace),Y=s.convert(B.type),K=T(B.internalFormat,he,Y,B.normalized,B.colorSpace),de=i.get(v),R=i.get(B);if(R.__renderTarget=v,!de.__hasExternalTextures){const J=Math.max(1,v.width>>le),X=Math.max(1,v.height>>le);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,le,K,J,X,v.depth,0,he,Y,null):t.texImage2D(ee,le,K,J,X,0,he,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),me(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ee,R.__webglTexture,0,dt(v)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ee,R.__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function In(b,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const ie=v.depthTexture,ee=ie&&ie.isDepthTexture?ie.type:null,le=_(v.stencilBuffer,ee),he=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt(v),le,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt(v),le,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,le,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,b)}else{const ie=v.textures;for(let ee=0;ee<ie.length;ee++){const le=ie[ee],he=s.convert(le.format,le.colorSpace),Y=s.convert(le.type),K=T(le.internalFormat,he,Y,le.normalized,le.colorSpace);me(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt(v),K,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt(v),K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(b,v,B){const ie=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(v.depthTexture);ee.__renderTarget=v;const le=ie?v.depthTexture.image[0]:v.depthTexture.image;(!ee.__webglTexture||le.width!==v.width||le.height!==v.height)&&(le.width=v.width,le.height=v.height,v.depthTexture.needsUpdate=!0),ie?ve(v.depthTexture,0):xe(v.depthTexture,0);const he=ee.__webglTexture,Y=dt(v),K=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,de=v.depthTexture.format===gi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===xi)me(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,K,he,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,de,K,he,0);else if(v.depthTexture.format===gi)me(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,K,he,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,de,K,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fn(b){const v=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const ie=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ie){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ie.removeEventListener("dispose",ee)};ie.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=ie}if(b.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let ie=0;ie<6;ie++)Pt(v.__webglFramebuffer[ie],b,ie);else b.texture.mipmaps.length>0?Pt(v.__webglFramebuffer[0],b,0):Pt(v.__webglFramebuffer,b,0);else if(B){v.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ie]),v.__webglDepthbuffer[ie]===void 0)v.__webglDepthbuffer[ie]=n.createRenderbuffer(),In(v.__webglDepthbuffer[ie],b,!1);else{const ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,le)}}else if(b.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),In(v.__webglDepthbuffer,b,!1);else{const ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,le)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function hn(b,v,B){const ie=i.get(b);v!==void 0&&ht(ie.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&fn(b)}function pn(b){const v=b.texture,B=i.get(b),ie=i.get(v);b.addEventListener("dispose",U),D(b);const ee=b.textures,le=b.isWebGLCubeRenderTarget===!0,he=ee.length>1;if(he||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=v.version,a.memory.textures++),le){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let K=0;K<v.mipmaps.length;K++)B.__webglFramebuffer[Y][K]=n.createFramebuffer()}else B.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(v.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)B.__webglFramebuffer[Y]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(he)for(let Y=0,K=ee.length;Y<K;Y++){const de=i.get(ee[Y]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&me(b)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<ee.length;Y++){const K=ee[Y];B.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);const de=s.convert(K.format,K.colorSpace),R=s.convert(K.type),J=T(K.internalFormat,de,R,K.normalized,K.colorSpace,b.isXRRenderTarget===!0),X=dt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,X,J,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),In(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),nt(n.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)ht(B.__webglFramebuffer[Y][K],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else ht(B.__webglFramebuffer[Y],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);A(v)?E(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(he){for(let Y=0,K=ee.length;Y<K;Y++){const de=ee[Y],R=i.get(de);let J=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(J=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,R.__webglTexture),nt(J,de),ht(B.__webglFramebuffer,b,de,n.COLOR_ATTACHMENT0+Y,J,0),A(de)&&E(J)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,ie.__webglTexture),nt(Y,v),v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)ht(B.__webglFramebuffer[K],b,v,n.COLOR_ATTACHMENT0,Y,K);else ht(B.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,Y,0);A(v)?E(Y):v.mipmaps.length>0&&n.texParameteri(Y,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}b.depthBuffer&&fn(b)}function N(b){const v=b.textures;for(let B=0,ie=v.length;B<ie;B++){const ee=v[B];if(A(ee)&&ee.mipmapsAutoUpdate===!0){const le=w(b),he=i.get(ee).__webglTexture;t.bindTexture(le,he),E(le),t.unbindTexture()}}}const mn=[];function ct(b){if(b.samples>0){if(me(b)===!1){const v=b.textures,B=b.width,ie=b.height;let ee=n.COLOR_BUFFER_BIT;const le=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(b),Y=v.length>1;if(Y)for(let de=0;de<v.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let de=0;de<v.length;de++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[de]);const R=i.get(v[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,R,0)}n.blitFramebuffer(0,0,B,ie,0,0,B,ie,ee,n.NEAREST),l===!0&&(mn.length=0,mn.push(n.COLOR_ATTACHMENT0+de),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&mn.push(le),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let de=0;de<v.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,he.__webglColorRenderbuffer[de]);const R=i.get(v[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,R,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function dt(b){return Math.min(r.maxSamples,b.samples)}function me(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function bt(b){const v=a.render.frame;d.get(b)!==v&&(d.set(b,v),b.update())}function Le(b,v){const B=b.colorSpace,ie=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==As&&B!==pi&&(Ze.getTransfer(B)===rt?(ie!==kn||ee!==un)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",B)),v}function Fe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=ze,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=Te,this.setTexture2D=xe,this.setTexture2DArray=ye,this.setTexture3D=Pe,this.setTextureCube=ve,this.rebindTextures=hn,this.setupRenderTarget=pn,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=fn,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=me,this.dispose=V}function b0(n,e){function t(i,r=pi){let s;const a=Ze.getTransfer(r);if(i===un)return n.UNSIGNED_BYTE;if(i===Io)return n.UNSIGNED_SHORT_4_4_4_4;if(i===No)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$c)return n.BYTE;if(i===qc)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===Do)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===$n)return n.HALF_FLOAT;if(i===Zc)return n.ALPHA;if(i===Jc)return n.RGB;if(i===kn)return n.RGBA;if(i===xi)return n.DEPTH_COMPONENT;if(i===gi)return n.DEPTH_STENCIL;if(i===Qc)return n.RED;if(i===Uo)return n.RED_INTEGER;if(i===Ii)return n.RG;if(i===Fo)return n.RG_INTEGER;if(i===Oo)return n.RGBA_INTEGER;if(i===ms||i===gs||i===_s||i===xs)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ia||i===Na||i===Ua||i===Fa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ia)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Na)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ua)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oa||i===Ba||i===za||i===ka||i===Ga||i===bs||i===Ha)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Oa||i===Ba)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===za)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ka)return s.COMPRESSED_R11_EAC;if(i===Ga)return s.COMPRESSED_SIGNED_R11_EAC;if(i===bs)return s.COMPRESSED_RG11_EAC;if(i===Ha)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Va||i===Wa||i===Xa||i===$a||i===qa||i===Ya||i===Ka||i===Za||i===Ja||i===Qa||i===ja||i===eo||i===to||i===no)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Va)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$a)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ya)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ka)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Za)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ja)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ja)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===eo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===to)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===no)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===io||i===ro||i===so)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===io)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ro)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===so)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ao||i===oo||i===Ts||i===lo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ao)return s.COMPRESSED_RED_RGTC1_EXT;if(i===oo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ts)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const T0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class w0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new dd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ni({vertexShader:T0,fragmentShader:A0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new Mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R0 extends Ui{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,m=null,g=null;const x=typeof XRWebGLBinding<"u",p=new w0,f={},S=t.getContextAttributes();let A=null,E=null;const w=[],T=[],_=new Xe;let y=null,D=null;const C=new Tn;C.viewport=new gt;const I=new Tn;I.viewport=new gt;const U=[C,I],W=new zf;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let xe=w[Z];return xe===void 0&&(xe=new ta,w[Z]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(Z){let xe=w[Z];return xe===void 0&&(xe=new ta,w[Z]=xe),xe.getGripSpace()},this.getHand=function(Z){let xe=w[Z];return xe===void 0&&(xe=new ta,w[Z]=xe),xe.getHandSpace()};function Q(Z){const xe=T.indexOf(Z.inputSource);if(xe===-1)return;const ye=w[xe];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,c||a),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",re);for(let Z=0;Z<w.length;Z++){const xe=T[Z];xe!==null&&(T[Z]=null,w[Z].disconnect(xe))}L=null,V=null,p.reset();for(const Z in f)delete f[Z];if(e.setRenderTarget(A),m=null,h=null,u=null,r=null,E=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(_.width,_.height,!1),D!==null){const Z=D.camera;Z.fov=D.fov,Z.zoom=D.zoom,Z.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",G),r.addEventListener("inputsourceschange",re),S.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Pe=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?gi:xi,Pe=S.stencil?or:Xn);const Ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Ge),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new Vn(h.textureWidth,h.textureHeight,{format:kn,type:un,depthTexture:new lr(h.textureWidth,h.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Vn(m.framebufferWidth,m.framebufferHeight,{format:kn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function re(Z){for(let xe=0;xe<Z.removed.length;xe++){const ye=Z.removed[xe],Pe=T.indexOf(ye);Pe>=0&&(T[Pe]=null,w[Pe].disconnect(ye))}for(let xe=0;xe<Z.added.length;xe++){const ye=Z.added[xe];let Pe=T.indexOf(ye);if(Pe===-1){for(let Ge=0;Ge<w.length;Ge++)if(Ge>=T.length){T.push(ye),Pe=Ge;break}else if(T[Ge]===null){T[Ge]=ye,Pe=Ge;break}if(Pe===-1)break}const ve=w[Pe];ve&&ve.connect(ye)}}function q(Z,xe){xe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(xe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let xe=Z.near,ye=Z.far;p.texture!==null&&(p.depthNear>0&&(xe=p.depthNear),p.depthFar>0&&(ye=p.depthFar)),W.near=I.near=C.near=xe,W.far=I.far=C.far=ye,(L!==W.near||V!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),L=W.near,V=W.far),W.layers.mask=Z.layers.mask|6,C.layers.mask=W.layers.mask&-5,I.layers.mask=W.layers.mask&-3;const Pe=Z.parent,ve=W.cameras;q(W,Pe);for(let Ge=0;Ge<ve.length;Ge++)q(ve[Ge],Pe);W.projectionMatrix.copy(C.projectionMatrix),W.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&Z.isPerspectiveCamera&&(D={camera:Z,fov:Z.fov,zoom:Z.zoom}),te(Z,W,Pe)};function te(Z,xe,ye){ye===null?Z.matrix.copy(xe.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(xe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(xe.projectionMatrix),Z.projectionMatrixInverse.copy(xe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=uo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function(Z){return f[Z]};let ne=null;function Te(Z,xe){if(d=xe.getViewerPose(c||a),g=xe,d!==null){const ye=d.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Pe=!1;ye.length!==W.cameras.length&&(W.cameras.length=0,Pe=!0);for(let De=0;De<ye.length;De++){const nt=ye[De];let at=null;if(m!==null)at=m.getViewport(nt);else{const Ot=u.getViewSubImage(h,nt);at=Ot.viewport,De===0&&(e.setRenderTargetTextures(E,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(E))}let qe=U[De];qe===void 0&&(qe=new Tn,qe.layers.enable(De),qe.viewport=new gt,U[De]=qe),qe.matrix.fromArray(nt.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(nt.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(at.x,at.y,at.width,at.height),De===0&&(W.matrix.copy(qe.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Pe===!0&&W.cameras.push(qe)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=i.getBinding();const De=u.getDepthInformation(ye[0]);De&&De.isValid&&De.texture&&p.init(De,r.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let De=0;De<ye.length;De++){const nt=ye[De].camera;if(nt){let at=f[nt];at||(at=new dd,f[nt]=at);const qe=u.getCameraImage(nt);at.sourceTexture=qe}}}}for(let ye=0;ye<w.length;ye++){const Pe=T[ye],ve=w[ye];Pe!==null&&ve!==void 0&&ve.update(Pe,xe,c||a)}ne&&ne(Z,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),g=null}const ze=new pd;ze.setAnimationLoop(Te),this.setAnimationLoop=function(Z){ne=Z},this.dispose=function(){}}}const C0=new ut,bd=new Oe;bd.set(-1,0,0,0,1,0,0,0,1);function P0(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,ud(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,S,A,E){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(p,f):f.isMeshLambertMaterial?(s(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),d(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),x(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,S,A):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===sn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===sn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const S=e.get(f),A=S.envMap,E=S.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(C0.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(bd),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,S,A){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=A*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.diffuseRoughness>0&&(p.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===sn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function L0(n,e,t,i){let r={},s={};function a(S,A){const E=A.program;i.uniformBlockBinding(S,E,r[S.id])}function o(S,A){let E=r[S.id];E===void 0&&(g(S),E=l(S),r[S.id]=E,S.addEventListener("dispose",p));const w=A.program;i.updateUBOMapping(S,w);const T=e.render.frame;s[S.id]!==T&&(c(S),s[S.id]=T)}function l(S){const A=n.createBuffer(),E=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),A}function c(S){const A=r[S.id],E=S.uniforms,w=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let T=0,_=E.length;T<_;T++){const y=E[T];if(Array.isArray(y))for(let D=0,C=y.length;D<C;D++)d(y[D],T,D,w);else d(y,T,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,A,E,w){if(h(S,A,E,w)===!0){const T=S.__offset,_=S.value;if(Array.isArray(_)){let y=0;for(let D=0;D<_.length;D++){const C=_[D],I=x(C,!0);u(C,S.__data,y),y+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,S.__data)}}function u(S,A,E){typeof S=="number"||typeof S=="boolean"?A[E]=S:S.isMatrix3?(A[E]=S.elements[0],A[E+1]=S.elements[1],A[E+2]=S.elements[2],A[E+3]=0,A[E+4]=S.elements[3],A[E+5]=S.elements[4],A[E+6]=S.elements[5],A[E+7]=0,A[E+8]=S.elements[6],A[E+9]=S.elements[7],A[E+10]=S.elements[8],A[E+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-E),E):S.toArray(A,E)}function h(S,A,E,w){const T=S.value,_=A+"_"+E;if(Array.isArray(T)){w[_]===void 0&&(w[_]=[]);const y=w[_];let D=!1;for(let C=0;C<T.length;C++)m(T[C],y,C)===!0&&(D=!0);return D}return m(T,w,_)}function m(S,A,E){if(A[E]===void 0)return typeof S=="number"||typeof S=="boolean"?A[E]=S:ArrayBuffer.isView(S)?A[E]=S.slice():A[E]=S.clone(),!0;{const w=A[E];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return A[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(w.equals(S)===!1)return w.copy(S),!0}}return!1}function g(S){const A=S.uniforms;let E=0;const w=16;for(let _=0,y=A.length;_<y;_++){const D=Array.isArray(A[_])?A[_]:[A[_]];for(let C=0,I=D.length;C<I;C++){const U=D[C],W=Array.isArray(U.value)?U.value:[U.value],L=Array.isArray(A[_])||Array.isArray(U.value);let V=E;for(let G=0,re=W.length;G<re;G++){const q=W[G],te=x(q,L),ne=E%w,Te=ne%te.boundary,ze=ne+Te;E+=Te,ze!==0&&w-ze<te.storage&&(E+=w-ze),G===0&&(V=E),E+=te.storage}const Q=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new Q((E-V)/Float32Array.BYTES_PER_ELEMENT),U.__offset=V}}const T=E%w;return T>0&&(E+=w-T),S.__size=E,S.__cache={},this}function x(S,A){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=16,E.storage=48):S.isMatrix4?(E.boundary=16,E.storage=64):S.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function p(S){const A=S.target;A.removeEventListener("dispose",p),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function f(){for(const S in r)n.deleteBuffer(r[S]);r={},s={}}return{bind:a,update:o,dispose:f}}const D0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Un=null;function I0(){return Un===null&&(Un=new bf(D0,16,16,Ii,$n),Un.name="DFG_LUT",Un.minFilter=rn,Un.magFilter=rn,Un.wrapS=ni,Un.wrapT=ni,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class N0{constructor(e={}){const{canvas:t=Ku(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:m=un}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=m,p=new Set([Oo,Fo,Uo]),f=new Set([un,Xn,Pr,or,Io,No]),S=new Uint32Array(4),A=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let w=null,T=null;const _=[],y=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,U=null,W=null,L=null,V=null;this._outputColorSpace=cn;let Q=0,G=0,re=null,q=-1,te=null;const ne=new gt,Te=new gt;let ze=null;const Z=new $e(0);let xe=0,ye=t.width,Pe=t.height,ve=1,Ge=null,vt=null;const De=new gt(0,0,ye,Pe),nt=new gt(0,0,ye,Pe);let at=!1;const qe=new Dr,Ot=new Vo;let Et=!1,tn=!1;const ht=new ut,In=new O,Pt=new gt,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let hn=!1;function pn(){return re===null?ve:1}let N=i;function mn(M,P){return t.getContext(M,P)}let ct,dt,me,bt,Le,Fe,b,v,B,ie,ee,le,he,Y,K,de,R,J,X,ue,oe,ce,we;try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Co}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",ge,!1),N===null){const P="webgl2";if(N=mn(P,M),N===null)throw mn(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(M){throw t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),je("WebGLRenderer: "+M.message),M}function Ve(){ct=new Om(N),ct.init(),oe=new b0(N,ct),dt=new Am(N,ct,e,oe),me=new y0(N,ct),dt.reversedDepthBuffer&&h&&me.buffers.depth.setReversed(!0),W=N.createFramebuffer(),L=N.createFramebuffer(),V=N.createFramebuffer(),bt=new km(N),Le=new l0,Fe=new E0(N,ct,me,Le,dt,oe,bt),b=new Fm(C),v=new Hf(N),ce=new bm(N,v),B=new Bm(N,v,bt,ce),ie=new Hm(N,B,v,ce,bt),J=new Gm(N,dt,Fe),K=new wm(Le),ee=new o0(C,b,ct,dt,ce,K),le=new P0(C,Le),he=new d0,Y=new g0(ct),R=new Em(C,b,me,ie,g,l),de=new S0(C,ie,dt),we=new L0(N,bt,dt,me),X=new Tm(N,ct,bt),ue=new zm(N,ct,bt),bt.programs=ee.programs,C.capabilities=dt,C.extensions=ct,C.properties=Le,C.renderLists=he,C.shadowMap=de,C.state=me,C.info=bt}x!==un&&(D=new Wm(x,t.width,t.height,o,r,s));const ae=new R0(C,N);this.xr=ae,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=ct.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ct.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(M){M!==void 0&&(ve=M,this.setSize(ye,Pe,!1))},this.getSize=function(M){return M.set(ye,Pe)},this.setSize=function(M,P,H=!0){if(ae.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=M,Pe=P,t.width=Math.floor(M*ve),t.height=Math.floor(P*ve),H===!0&&(t.style.width=M+"px",t.style.height=P+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(ye*ve,Pe*ve).floor()},this.setDrawingBufferSize=function(M,P,H){ye=M,Pe=P,ve=H,t.width=Math.floor(M*H),t.height=Math.floor(P*H),this.setViewport(0,0,M,P)},this.setEffects=function(M){if(x===un){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let P=0;P<M.length;P++)if(M[P].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ne)},this.getViewport=function(M){return M.copy(De)},this.setViewport=function(M,P,H,F){M.isVector4?De.set(M.x,M.y,M.z,M.w):De.set(M,P,H,F),me.viewport(ne.copy(De).multiplyScalar(pn()).round())},this.getScissor=function(M){return M.copy(nt)},this.setScissor=function(M,P,H,F){M.isVector4?nt.set(M.x,M.y,M.z,M.w):nt.set(M,P,H,F),me.scissor(Te.copy(nt).multiplyScalar(pn()).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(M){me.setScissorTest(at=M)},this.setOpaqueSort=function(M){Ge=M},this.setTransparentSort=function(M){vt=M},this.getClearColor=function(M){return M.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(M=!0,P=!0,H=!0){let F=0;if(M){let z=!1;if(re!==null){const pe=re.texture.format;z=p.has(pe)}if(z){const pe=re.texture.type,Se=f.has(pe),fe=R.getClearColor(),Me=R.getClearAlpha(),Ae=fe.r,ke=fe.g,Ye=fe.b;Se?(S[0]=Ae,S[1]=ke,S[2]=Ye,S[3]=Me,N.clearBufferuiv(N.COLOR,0,S)):(A[0]=Ae,A[1]=ke,A[2]=Ye,A[3]=Me,N.clearBufferiv(N.COLOR,0,A))}else F|=N.COLOR_BUFFER_BIT}P&&(F|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),R.dispose(),he.dispose(),Y.dispose(),Fe.dispose(),Le.dispose(),b.dispose(),ie.dispose(),B.dispose(),ce.dispose(),we.dispose(),ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ul),ae.removeEventListener("sessionend",fl),Si.stop()};function Re(M){M.preventDefault(),wl("WebGLRenderer: Context Lost."),I=!0}function He(){wl("WebGLRenderer: Context Restored."),I=!1;const M=bt.autoReset,P=de.enabled,H=de.autoUpdate,F=de.needsUpdate,z=de.type;Ve(),bt.autoReset=M,de.enabled=P,de.autoUpdate=H,de.needsUpdate=F,de.type=z}function ge(M){je("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function it(M){const P=M.target;P.removeEventListener("dispose",it),Lt(P)}function Lt(M){ai(M),Le.remove(M)}function ai(M){const P=Le.get(M).programs;P!==void 0&&(P.forEach(function(H){ee.releaseProgram(H)}),M.isShaderMaterial&&ee.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,H,F,z,pe){P===null&&(P=fn);const Se=z.isMesh&&z.matrixWorld.determinantAffine()<0,fe=$d(M,P,H,F,z);me.setMaterial(F,Se);let Me=H.index,Ae=1;if(F.wireframe===!0){if(Me=B.getWireframeAttribute(H),Me===void 0)return;Ae=2}const ke=H.drawRange,Ye=H.attributes.position;let Ee=ke.start*Ae,Ke=(ke.start+ke.count)*Ae;pe!==null&&(Ee=Math.max(Ee,pe.start*Ae),Ke=Math.min(Ke,(pe.start+pe.count)*Ae)),Me!==null?(Ee=Math.max(Ee,0),Ke=Math.min(Ke,Me.count)):Ye!=null&&(Ee=Math.max(Ee,0),Ke=Math.min(Ke,Ye.count));const Mt=Ke-Ee;if(Mt<0||Mt===1/0)return;ce.setup(z,F,fe,H,Me);let lt,ot=X;if(Me!==null&&(lt=v.get(Me),ot=ue,ot.setIndex(lt)),z.isMesh)F.wireframe===!0?(me.setLineWidth(F.wireframeLinewidth*pn()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if(z.isLine){let Gt=F.linewidth;Gt===void 0&&(Gt=1),me.setLineWidth(Gt*pn()),z.isLineSegments?ot.setMode(N.LINES):z.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else z.isPoints?ot.setMode(N.POINTS):z.isSprite&&ot.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))ot.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Gt=z._multiDrawStarts,be=z._multiDrawCounts,qt=z._multiDrawCount,et=Me?v.get(Me).bytesPerElement:1,yi=Le.get(F).currentProgram.getUniforms();for(let Ht=0;Ht<qt;Ht++)yi.setValue(N,"_gl_DrawID",Ht),ot.render(Gt[Ht]/et,be[Ht])}else if(z.isInstancedMesh)ot.renderInstances(Ee,Mt,z.count);else if(H.isInstancedBufferGeometry){const Gt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,be=Math.min(H.instanceCount,Gt);ot.renderInstances(Ee,Mt,be)}else ot.render(Ee,Mt)};function dl(M,P,H,F){U!==null&&M.isNodeMaterial&&U.setObject(F,M),Et===!0&&K.setState(M,H,!1),M.transparent===!0&&M.side===Jt&&M.forceSinglePass===!1?(M.side=sn,M.needsUpdate=!0,pr(M,P,F),M.side=Di,M.needsUpdate=!0,pr(M,P,F),M.side=Jt):pr(M,P,F)}this.compile=function(M,P,H=null){H===null&&(H=M),U!==null&&U.renderStart(M,P,H),T=Y.get(H),T.init(P),y.push(T),H.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),M!==H&&M.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),tn=this.localClippingEnabled,Et=K.init(this.clippingPlanes,tn),Et===!0&&K.setGlobalState(this.clippingPlanes,P),U!==null&&de.render(T.state.shadowsArray,H,P);const F=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const pe=z.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){const fe=pe[Se];dl(fe,H,P,z),F.add(fe)}else dl(pe,H,P,z),F.add(pe)}),T=y.pop(),U!==null&&U.renderEnd(),F},this.compileAsync=function(M,P,H=null){const F=this.compile(M,P,H);return new Promise(z=>{function pe(){if(F.forEach(function(Se){const Me=Le.get(Se).currentProgram;(Me===void 0||Me.isReady())&&F.delete(Se)}),F.size===0){z(M);return}setTimeout(pe,10)}ct.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Gs=null;function Wd(M){Gs&&Gs(M)}function ul(){Si.stop()}function fl(){Si.start()}const Si=new pd;Si.setAnimationLoop(Wd),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(M){Gs=M,ae.setAnimationLoop(M),M===null?Si.stop():Si.start()},ae.addEventListener("sessionstart",ul),ae.addEventListener("sessionend",fl),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(M,P);const H=ae.enabled===!0&&ae.isPresenting===!0,F=D!==null&&(re===null||H)&&D.begin(C,re);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(P),P=ae.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,P,re),T=Y.get(M,y.length),T.init(P),T.state.textureUnits=Fe.getTextureUnits(),y.push(T),ht.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Ot.setFromArrayCamera(P):qe.setFromProjectionMatrix(ht,Cn,P.reversedDepth),tn=this.localClippingEnabled,Et=K.init(this.clippingPlanes,tn),w=he.get(M,_.length),w.init(),_.push(w),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&Hs(Se,P,-1/0,C.sortObjects)}Hs(M,P,0,C.sortObjects),w.finish(),U!==null&&U.updateLights(T.state.lightsArray),C.sortObjects===!0&&w.sort(Ge,vt),hn=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,hn&&R.addToRenderList(w,M),this.info.autoReset===!0&&this.info.reset(),Et===!0&&K.beginShadows();const z=T.state.shadowsArray;if(de.render(z,M,P),Et===!0&&K.endShadows(),(F&&D.hasRenderPass())===!1){const Se=w.opaque,fe=w.transmissive;if(T.setupLights(),P.isArrayCamera){const Me=P.cameras;if(fe.length>0)for(let Ae=0,ke=Me.length;Ae<ke;Ae++){const Ye=Me[Ae];pl(Se,fe,M,Ye)}hn&&R.render(M);for(let Ae=0,ke=Me.length;Ae<ke;Ae++){const Ye=Me[Ae];hl(w,M,Ye,Ye.viewport)}}else fe.length>0&&pl(Se,fe,M,P),hn&&R.render(M),hl(w,M,P)}re!==null&&G===0&&(Fe.updateMultisampleRenderTarget(re),Fe.updateRenderTargetMipmap(re)),F&&D.end(C),M.isScene===!0&&M.onAfterRender(C,M,P),ce.resetDefaultState(),q=-1,te=null,y.pop(),y.length>0?(T=y[y.length-1],Fe.setTextureUnits(T.state.textureUnits),Et===!0&&K.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,U!==null&&U.renderEnd()};function Hs(M,P,H,F){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){const Se=P.isArrayCamera?Ot:qe;if(!M.frustumCulled||M.intersectsFrustum(Se)){F&&Pt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ht);const fe=ie.update(M),Me=M.material;Me.visible&&w.push(M,fe,Me,H,Pt.z,null,P)}}else if(M.isMesh||M.isLine||M.isPoints){const Se=P.isArrayCamera?Ot:qe;if(!M.frustumCulled||M.intersectsFrustum(Se)){const fe=ie.update(M),Me=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pt.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Pt.copy(fe.boundingSphere.center)),Pt.applyMatrix4(M.matrixWorld).applyMatrix4(ht)),Array.isArray(Me)){const Ae=fe.groups;for(let ke=0,Ye=Ae.length;ke<Ye;ke++){const Ee=Ae[ke],Ke=Me[Ee.materialIndex];Ke&&Ke.visible&&w.push(M,fe,Ke,H,Pt.z,Ee,P)}}else Me.visible&&w.push(M,fe,Me,H,Pt.z,null,P)}}}const pe=M.children;for(let Se=0,fe=pe.length;Se<fe;Se++)Hs(pe[Se],P,H,F)}function hl(M,P,H,F){const{opaque:z,transmissive:pe,transparent:Se}=M;T.setupLightsView(H),Et===!0&&K.setGlobalState(C.clippingPlanes,H),F&&me.viewport(ne.copy(F)),z.length>0&&Wr(z,P,H),pe.length>0&&Wr(pe,P,H),Se.length>0&&Wr(Se,P,H),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function pl(M,P,H,F){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[F.id]===void 0){const Ee=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[F.id]=new Vn(1,1,{generateMipmaps:!0,type:Ee?$n:un,minFilter:mi,samples:Math.max(4,dt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const pe=T.state.transmissionRenderTarget[F.id],Se=F.viewport||ne;pe.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);const fe=C.getRenderTarget(),Me=C.getActiveCubeFace(),Ae=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(Z),xe=C.getClearAlpha(),xe<1&&C.setClearColor(16777215,.5),C.clear(),hn&&R.render(H);const ke=C.toneMapping;C.toneMapping=ri;const Ye=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),T.setupLightsView(F),Et===!0&&K.setGlobalState(C.clippingPlanes,F),Wr(M,H,F),Fe.updateMultisampleRenderTarget(pe),Fe.updateRenderTargetMipmap(pe),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Ke=0,Mt=P.length;Ke<Mt;Ke++){const lt=P[Ke],{object:ot,geometry:Gt,material:be,group:qt}=lt;if(be.side===Jt&&ot.layers.test(F.layers)){const et=be.side;be.side=sn,be.needsUpdate=!0,ml(ot,H,F,Gt,be,qt),be.side=et,be.needsUpdate=!0,Ee=!0}}Ee===!0&&(Fe.updateMultisampleRenderTarget(pe),Fe.updateRenderTargetMipmap(pe))}C.setRenderTarget(fe,Me,Ae),C.setClearColor(Z,xe),Ye!==void 0&&(F.viewport=Ye),C.toneMapping=ke}function Wr(M,P,H){const F=P.isScene===!0?P.overrideMaterial:null;for(let z=0,pe=M.length;z<pe;z++){const Se=M[z],{object:fe,geometry:Me,group:Ae}=Se;let ke=Se.material;ke.allowOverride===!0&&F!==null&&(ke=F),fe.layers.test(H.layers)&&ml(fe,P,H,Me,ke,Ae)}}function ml(M,P,H,F,z,pe){U!==null&&z.isNodeMaterial&&U.setObject(M,z),M.onBeforeRender(C,P,H,F,z,pe),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(C,P,H,F,M,pe),z.transparent===!0&&z.side===Jt&&z.forceSinglePass===!1?(z.side=sn,z.needsUpdate=!0,C.renderBufferDirect(H,P,F,z,M,pe),z.side=Di,z.needsUpdate=!0,C.renderBufferDirect(H,P,F,z,M,pe),z.side=Jt):C.renderBufferDirect(H,P,F,z,M,pe),M.onAfterRender(C,P,H,F,z,pe)}function gl(M){let P=0;for(const H of M)H.texture!==null&&P++;return P}function pr(M,P,H){P.isScene!==!0&&(P=fn);const F=Le.get(M),z=T.state.lights,pe=T.state.shadowsArray,Se=z.state.version,fe=ee.getParameters(M,z.state,pe,P,H,T.state.lightProbeGridArray),Me=ee.getProgramCacheKey(fe);let Ae=F.programs;F.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,F.fog=P.fog;const ke=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;F.envMap=b.get(M.envMap||F.environment,ke),F.envMapRotation=F.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",it),Ae=new Map,F.programs=Ae,F.programVariants=new Map);let Ye=Ae.get(Me);if(Ye!==void 0){if(F.currentProgram===Ye&&F.lightsStateVersion===Se)return xl(M,fe),Ye}else fe.uniforms=ee.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,H,fe),M.onBeforeCompile(fe,C),Ye=ee.acquireProgram(fe,Me),Ae.set(Me,Ye),F.uniforms=fe.uniforms;const Ee=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ee.clippingPlanes=K.uniform),xl(M,fe),F.needsLights=Yd(M),F.lightsStateVersion=Se,F.needsLights&&(Ee.ambientLightColor.value=z.state.ambient,Ee.lightProbe.value=z.state.probe,Ee.sunLights.value=z.state.sun,Ee.sunLightShadows.value=z.state.sunShadow,Ee.directionalLights.value=z.state.directional,Ee.directionalLightShadows.value=z.state.directionalShadow,Ee.spotLights.value=z.state.spot,Ee.spotLightShadows.value=z.state.spotShadow,Ee.rectAreaLights.value=z.state.rectArea,Ee.ltc_1.value=z.state.rectAreaLTC1,Ee.ltc_2.value=z.state.rectAreaLTC2,Ee.pointLights.value=z.state.point,Ee.pointLightShadows.value=z.state.pointShadow,Ee.hemisphereLights.value=z.state.hemi,Ee.sunShadowMatrix.value=z.state.sunShadowMatrix,Ee.sunShadowCascade.value=z.state.sunShadowCascade,Ee.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ee.spotLightMatrix.value=z.state.spotLightMatrix,Ee.spotLightMap.value=z.state.spotLightMap,Ee.pointShadowMatrix.value=z.state.pointShadowMatrix),F.numLightProbeGrids=gl(T.state.lightProbeGridArray),F.currentProgram=Ye,F.uniformsList=null,Ye}function Xd(M,P,H,F,z){const pe=Le.get(M),Se=pe.currentProgram.id+","+F+","+z;let fe=pe.programVariants.get(Se);return fe===void 0?(fe=pr(M,P,H),pe.programVariants.set(Se,fe)):(pe.currentProgram=fe,pe.uniformsList=null,pe.outputColorSpace=F,pe.toneMapping=z),fe}function _l(M){if(M.uniformsList===null){const P=M.currentProgram.getUniforms();M.uniformsList=Ms.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function xl(M,P){const H=Le.get(M);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function $d(M,P,H,F,z){P.isScene!==!0&&(P=fn),Fe.resetTextureUnits();const pe=P.fog,Se=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?P.environment:null,fe=re===null?C.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ze.workingColorSpace,Me=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Ae=b.get(F.envMap||Se,Me),ke=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ye=!!H.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ee=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,Mt=!!H.morphAttributes.color;let lt=ri;F.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(lt=C.toneMapping);const ot=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Gt=ot!==void 0?ot.length:0,be=Le.get(F),qt=T.state.lights;if(Et===!0&&(tn===!0||M!==te)){const pt=M===te&&F.id===q;K.setState(F,M,pt)}let et=!1,yi=!1;F.version===be.__version?be.needsLights&&be.lightsStateVersion!==qt.state.version||z.isBatchedMesh&&be.batching===!1||!z.isBatchedMesh&&be.batching===!0||z.isBatchedMesh&&be.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&be.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&be.instancing===!1||!z.isInstancedMesh&&be.instancing===!0||z.isSkinnedMesh&&be.skinning===!1||!z.isSkinnedMesh&&be.skinning===!0||z.isInstancedMesh&&be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&be.instancingMorph===!1&&z.morphTexture!==null||be.envMap!==Ae||F.fog===!0&&be.fog!==pe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==K.numPlanes||be.numIntersection!==K.numIntersection)||be.vertexAlphas!==ke||be.vertexTangents!==Ye||be.morphTargets!==Ee||be.morphNormals!==Ke||be.morphColors!==Mt||be.morphTargetsCount!==Gt||be.numLightProbeGrids!==gl(T.state.lightProbeGridArray)?et=!0:(be.outputColorSpace!==fe||be.toneMapping!==lt)&&(yi=!0):(et=!0,be.__version=F.version);let Ht=be.currentProgram;(et===!0||yi===!0)&&(Ht=yi===!0?Xd(F,P,z,fe,lt):pr(F,P,z),U&&F.isNodeMaterial&&U.onUpdateProgram(F,Ht,be));let Xr=!1,oi=!1,Ei=!1;const Qe=Ht.getUniforms(),Bt=be.uniforms;if(me.useProgram(Ht.program)&&(Xr=!0,oi=!0,Ei=!0),F.id!==q&&(q=F.id,oi=!0),Xr||te!==M){me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Qe.setValue(N,"projectionMatrix",M.projectionMatrix),Qe.setValue(N,"viewMatrix",M.matrixWorldInverse);const Dt=Qe.map.cameraPosition;Dt!==void 0&&Dt.setValue(N,In.setFromMatrixPosition(M.matrixWorld)),dt.logarithmicDepthBuffer&&Qe.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Qe.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),te!==M&&(te=M,oi=!0,Ei=!0)}if(be.needsLights&&(qt.state.sunShadowMap.length>0&&Qe.setValue(N,"sunShadowMap",qt.state.sunShadowMap,Fe),qt.state.directionalShadowMap.length>0&&Qe.setValue(N,"directionalShadowMap",qt.state.directionalShadowMap,Fe),qt.state.spotShadowMap.length>0&&Qe.setValue(N,"spotShadowMap",qt.state.spotShadowMap,Fe),qt.state.pointShadowMap.length>0&&Qe.setValue(N,"pointShadowMap",qt.state.pointShadowMap,Fe)),z.isSkinnedMesh){Qe.setOptional(N,z,"bindMatrix"),Qe.setOptional(N,z,"bindMatrixInverse");const pt=z.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),Qe.setValue(N,"boneTexture",pt.boneTexture,Fe))}z.isBatchedMesh&&(Qe.setOptional(N,z,"batchingTexture"),Qe.setValue(N,"batchingTexture",z._matricesTexture,Fe),Qe.setOptional(N,z,"batchingIdTexture"),Qe.setValue(N,"batchingIdTexture",z._indirectTexture,Fe),Qe.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&Qe.setValue(N,"batchingColorTexture",z._colorsTexture,Fe));const Mn=H.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&J.update(z,H,Ht),(oi||be.receiveShadow!==z.receiveShadow)&&(be.receiveShadow=z.receiveShadow,Qe.setValue(N,"receiveShadow",z.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&P.environment!==null&&(Bt.envMapIntensity.value=P.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=I0()),oi){if(Qe.setValue(N,"toneMappingExposure",C.toneMappingExposure),be.needsLights&&qd(Bt,Ei),pe&&F.fog===!0&&le.refreshFogUniforms(Bt,pe),le.refreshMaterialUniforms(Bt,F,ve,Pe,T.state.transmissionRenderTarget[M.id]),be.needsLights&&be.numLightProbeGrids>0){const pt=E;let Dt=0;for(const Yn of T.state.lightProbeGridArray)Yn.texture!==null&&(pt.textures[Dt]=Yn.texture,pt.min[Dt]=Yn.boundingBox.min,pt.max[Dt]=Yn.boundingBox.max,pt.resolution[Dt]=Yn.resolution,Dt++);for(const Yn in pt)pt[Yn].length=Dt;Bt.probesSH.value=pt.textures,Bt.probesMin.value=pt.min,Bt.probesMax.value=pt.max,Bt.probesResolution.value=pt.resolution}Ms.upload(N,_l(be),Bt,Fe)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ms.upload(N,_l(be),Bt,Fe),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Qe.setValue(N,"center",z.center),Qe.setValue(N,"modelViewMatrix",z.modelViewMatrix),Qe.setValue(N,"normalMatrix",z.normalMatrix),Qe.setValue(N,"modelMatrix",z.matrixWorld),F.uniformsGroups!==void 0){const pt=F.uniformsGroups;for(let Dt=0,Yn=pt.length;Dt<Yn;Dt++){const Ml=pt[Dt];we.update(Ml,Ht),we.bind(Ml,Ht)}}return Ht}function qd(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.sunLights.needsUpdate=P,M.sunLightShadows.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function Yd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(M,P,H){const F=Le.get(M);F.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Le.get(M.texture).__webglTexture=P,Le.get(M.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:H,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,P){const H=Le.get(M);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,H=0){re=M,Q=P,G=H;let F=null,z=!1,pe=!1;if(M){const fe=Le.get(M);if(fe.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(N.FRAMEBUFFER,fe.__webglFramebuffer),ne.copy(M.viewport),Te.copy(M.scissor),ze=M.scissorTest,me.viewport(ne),me.scissor(Te),me.setScissorTest(ze),q=-1;return}else if(fe.__webglFramebuffer===void 0)Fe.setupRenderTarget(M);else if(fe.__hasExternalTextures)Fe.rebindTextures(M,Le.get(M.texture).__webglTexture,Le.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ke=M.depthTexture;if(fe.__boundDepthTexture!==ke){if(ke!==null&&Le.has(ke)&&(M.width!==ke.image.width||M.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(M)}}const Me=M.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);const Ae=Le.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ae[P])?F=Ae[P][H]:F=Ae[P],z=!0):M.samples>0&&Fe.useMultisampledRTT(M)===!1?F=Le.get(M).__webglMultisampledFramebuffer:Array.isArray(Ae)?F=Ae[H]:F=Ae,ne.copy(M.viewport),Te.copy(M.scissor),ze=M.scissorTest}else ne.copy(De).multiplyScalar(ve).floor(),Te.copy(nt).multiplyScalar(ve).floor(),ze=at;if(H!==0&&(F=W),me.bindFramebuffer(N.FRAMEBUFFER,F)&&me.drawBuffers(M,F),me.viewport(ne),me.scissor(Te),me.setScissorTest(ze),z){const fe=Le.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,fe.__webglTexture,H)}else if(pe){const fe=P;for(let Me=0;Me<M.textures.length;Me++){const Ae=Le.get(M.textures[Me]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Me,Ae.__webglTexture,H,fe)}}else if(M!==null&&H!==0){const fe=Le.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,fe.__webglTexture,H)}q=-1};function vl(M){const P=Le.get(M);return(P.__readFormat!==M.format||P.__readType!==M.type)&&(P.__readFormat=M.format,P.__readType=M.type,P.__formatReadable=dt.textureFormatReadable(M.format),P.__typeReadable=dt.textureTypeReadable(M.type)),P}this.readRenderTargetPixels=function(M,P,H,F,z,pe,Se,fe=0){if(!(M&&M.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Me=Me[Se],Array.isArray(Me)&&(Me=Me[0])),Me){me.bindFramebuffer(N.FRAMEBUFFER,Me);try{const Ae=M.textures[fe],ke=Ae.format,Ye=Ae.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+fe);const Ee=vl(Ae);if(Ee.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-F&&H>=0&&H<=M.height-z&&N.readPixels(P,H,F,z,oe.convert(ke),oe.convert(Ye),pe)}finally{const Ae=re!==null?Le.get(re).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,P,H,F,z,pe,Se,fe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Me=Me[Se],Array.isArray(Me)&&(Me=Me[0])),Me)if(P>=0&&P<=M.width-F&&H>=0&&H<=M.height-z){me.bindFramebuffer(N.FRAMEBUFFER,Me);const Ae=M.textures[fe],ke=Ae.format,Ye=Ae.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+fe);const Ee=vl(Ae);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ke),N.bufferData(N.PIXEL_PACK_BUFFER,pe.byteLength,N.STREAM_READ),N.readPixels(P,H,F,z,oe.convert(ke),oe.convert(Ye),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Mt=re!==null?Le.get(re).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,Mt);const lt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Zu(N,lt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ke),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Ke),N.deleteSync(lt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,P=null,H=0){const F=Math.pow(2,-H),z=Math.floor(M.image.width*F),pe=Math.floor(M.image.height*F),Se=P!==null?P.x:0,fe=P!==null?P.y:0;Fe.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,Se,fe,z,pe),me.unbindTexture()},this.copyTextureToTexture=function(M,P,H=null,F=null,z=0,pe=0){let Se,fe,Me,Ae,ke,Ye,Ee,Ke,Mt;const lt=M.isCompressedTexture?M.mipmaps[pe]:M.image;if(H!==null)Se=H.max.x-H.min.x,fe=H.max.y-H.min.y,Me=H.isBox3?H.max.z-H.min.z:1,Ae=H.min.x,ke=H.min.y,Ye=H.isBox3?H.min.z:0;else{const Qe=Math.pow(2,-z);Se=Math.floor(lt.width*Qe),fe=Math.floor(lt.height*Qe),M.isDataArrayTexture?Me=lt.depth:M.isData3DTexture?Me=Math.floor(lt.depth*Qe):Me=1,Ae=0,ke=0,Ye=0}F!==null?(Ee=F.x,Ke=F.y,Mt=F.z):(Ee=0,Ke=0,Mt=0);const ot=oe.convert(P.format),Gt=oe.convert(P.type);let be;P.isData3DTexture?(Fe.setTexture3D(P,0),be=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Fe.setTexture2DArray(P,0),be=N.TEXTURE_2D_ARRAY):(Fe.setTexture2D(P,0),be=N.TEXTURE_2D),me.activeTexture(N.TEXTURE0),me.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),me.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),me.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);const qt=me.getParameter(N.UNPACK_ROW_LENGTH),et=me.getParameter(N.UNPACK_IMAGE_HEIGHT),yi=me.getParameter(N.UNPACK_SKIP_PIXELS),Ht=me.getParameter(N.UNPACK_SKIP_ROWS),Xr=me.getParameter(N.UNPACK_SKIP_IMAGES);me.pixelStorei(N.UNPACK_ROW_LENGTH,lt.width),me.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt.height),me.pixelStorei(N.UNPACK_SKIP_PIXELS,Ae),me.pixelStorei(N.UNPACK_SKIP_ROWS,ke),me.pixelStorei(N.UNPACK_SKIP_IMAGES,Ye);const oi=M.isDataArrayTexture||M.isData3DTexture,Ei=P.isDataArrayTexture||P.isData3DTexture;if(M.isDepthTexture){const Qe=Le.get(M),Bt=Le.get(P),Mn=Le.get(Qe.__renderTarget),pt=Le.get(Bt.__renderTarget);me.bindFramebuffer(N.READ_FRAMEBUFFER,Mn.__webglFramebuffer),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Dt=0;Dt<Me;Dt++)oi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.get(M).__webglTexture,z,Ye+Dt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.get(P).__webglTexture,pe,Mt+Dt)),N.blitFramebuffer(Ae,ke,Ae+Se,ke+fe,Ee,Ke,Ee+Se,Ke+fe,N.DEPTH_BUFFER_BIT,N.NEAREST);me.bindFramebuffer(N.READ_FRAMEBUFFER,null),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||Le.has(M)){const Qe=Le.get(M),Bt=Le.get(P);me.bindFramebuffer(N.READ_FRAMEBUFFER,L),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,V);for(let Mn=0;Mn<Me;Mn++)oi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Qe.__webglTexture,z,Ye+Mn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Qe.__webglTexture,z),Ei?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Bt.__webglTexture,pe,Mt+Mn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Bt.__webglTexture,pe),z!==0?N.blitFramebuffer(Ae,ke,Ae+Se,ke+fe,Ee,Ke,Ee+Se,Ke+fe,N.COLOR_BUFFER_BIT,N.NEAREST):Ei?N.copyTexSubImage3D(be,pe,Ee,Ke,Mt+Mn,Ae,ke,Se,fe):N.copyTexSubImage2D(be,pe,Ee,Ke,Ae,ke,Se,fe);me.bindFramebuffer(N.READ_FRAMEBUFFER,null),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ei?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(be,pe,Ee,Ke,Mt,Se,fe,Me,ot,Gt,lt.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(be,pe,Ee,Ke,Mt,Se,fe,Me,ot,lt.data):N.texSubImage3D(be,pe,Ee,Ke,Mt,Se,fe,Me,ot,Gt,lt):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,pe,Ee,Ke,Se,fe,ot,Gt,lt.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,pe,Ee,Ke,lt.width,lt.height,ot,lt.data):N.texSubImage2D(N.TEXTURE_2D,pe,Ee,Ke,Se,fe,ot,Gt,lt);me.pixelStorei(N.UNPACK_ROW_LENGTH,qt),me.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et),me.pixelStorei(N.UNPACK_SKIP_PIXELS,yi),me.pixelStorei(N.UNPACK_SKIP_ROWS,Ht),me.pixelStorei(N.UNPACK_SKIP_IMAGES,Xr),pe===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&N.generateMipmap(be),me.unbindTexture()},this.initRenderTarget=function(M){Le.get(M).__webglFramebuffer===void 0&&Fe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Fe.setTextureCube(M,0):M.isData3DTexture?Fe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Fe.setTexture2DArray(M,0):Fe.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){Q=0,G=0,re=null,me.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const Zt=Math.PI*2,Ir=(n,e,t)=>Math.max(e,Math.min(t,n)),Ce={box:new Fi(1,1,1),cyl:new Us(.5,.5,1,12),cone:new Cs(.5,1,12),pyr:new Cs(.72,1,4),sph:new qo(.5,14,10),plane:new Mi(1,1),ico:new Xo(.5,0),ring:new $o(.42,.5,26),torus:new Yo(.5,.05,6,24,Math.PI)};function bn(n,e,t=1,i){const r=document.createElement("canvas");r.width=r.height=128;const s=r.getContext("2d");s.fillStyle=n,s.fillRect(0,0,128,128);for(let o=0;o<e;o++)s.fillStyle=`rgba(0,0,0,${Math.random()*.14})`,s.beginPath(),s.arc(Math.random()*128,Math.random()*128,2+Math.random()*9,0,Zt),s.fill();for(let o=0;o<340;o++)s.fillStyle=`rgba(255,255,255,${Math.random()*.09})`,s.fillRect(Math.random()*128,Math.random()*128,2,2);if(i){s.strokeStyle="rgba(0,0,0,.22)",s.lineWidth=2;for(let o=0;o<128;o+=16){s.beginPath(),s.moveTo(0,o),s.lineTo(128,o),s.stroke();for(let l=o/16%2*16;l<128;l+=32)s.beginPath(),s.moveTo(l,o),s.lineTo(l,o+16),s.stroke()}}const a=new Af(r);return a.wrapS=a.wrapT=Es,a.repeat.set(t,t),a.colorSpace=cn,a.anisotropy=4,a}const yt={grass:bn("#5a7a42",150,40),wood:bn("#7a5230",60,2),plank:bn("#8a6242",40,2,!0),stone:bn("#9c9c92",60,3,!0),thatch:bn("#b09055",50,3),cloth:bn("#c9c2b0",30,2),dirt:bn("#8a7554",80,8),metal:bn("#9aa0a8",40,1),roofRed:bn("#8f4f3c",40,2),field:bn("#7a8f3a",80,4),pale:bn("#a8956a",30,2)},Tt=n=>new Df(n),Ie={grass:Tt({map:yt.grass}),wood:Tt({map:yt.wood}),plank:Tt({map:yt.plank}),dark:Tt({map:yt.plank,color:6177319}),stone:Tt({map:yt.stone}),thatch:Tt({map:yt.thatch}),roof:Tt({map:yt.roofRed}),dirt:Tt({map:yt.dirt}),metal:Tt({map:yt.metal}),skin:Tt({color:14198914,map:yt.cloth}),iron:Tt({color:10133672,map:yt.metal}),banner:Tt({color:3108520,map:yt.cloth,side:Jt}),leaf:Tt({color:4877108,map:yt.grass}),fire:new rr({color:16752451,transparent:!0,opacity:.9}),gold:Tt({color:13214247,map:yt.metal}),blood:new rr({color:11024426}),arrow:new rr({color:14207396}),field:Tt({map:yt.field}),pale:Tt({map:yt.pale,side:Jt})},U0=new Set(Object.values(Ce)),F0=new Set(Object.values(Ie)),O0=new Set(Object.values(yt)),Ne=(n,e,t,i,r,s,a=1,o=1,l=1,c=0,d=!0)=>{const u=new en(e,t);return u.position.set(i,r,s),u.scale.set(a,o,l),u.rotation.y=c,u.castShadow=d,n.add(u),u};let Fn,nn,Xt,Be,wt=[],dn,dr=[],Td=[],Ci=[],wr=[],qn=[],Vr=[],Qo=[],_n={},Ls={x:innerWidth/2,y:innerHeight/2},jo=!1,mo=!1,xn="attack",ii="settlement",go=null,Nt=null,Nr=!1,hi=0,Ad=!1,ei="advance",Ss=0;const j={x:0,z:0,face:0,hp:100,maxHp:100,atkCd:0,swing:0,dodge:0,dodgeCd:0,inv:0,moving:!1,wp:0};function B0(n,e){Nt=e,Fn=new N0({canvas:n,antialias:!0,powerPreference:"high-performance"}),Fn.setPixelRatio(Math.min(devicePixelRatio,2)),Fn.setSize(innerWidth,innerHeight),Fn.shadowMap.enabled=!0,Fn.shadowMap.type=Fc,Fn.toneMapping=Lo,Fn.toneMappingExposure=1.1,nn=new gf,nn.background=new $e(10336452),nn.fog=new Go(10336452,52,140),Xt=new Zo(-1,1,1,-1,.1,300),nn.add(new Uf(13624575,4872756,.72));const t=new Yl(16770747,1.55);t.position.set(26,38,18),t.castShadow=!0,t.shadow.mapSize.set(1536,1536),Object.assign(t.shadow.camera,{left:-46,right:46,top:46,bottom:-46,far:130}),t.shadow.bias=-.002,nn.add(t,t.target),nn.userData.sun=t;const i=new Yl(8368383,.26);i.position.set(-18,12,-20),nn.add(i),addEventListener("keydown",z0),addEventListener("keyup",k0),addEventListener("pointermove",G0),n.addEventListener("pointerdown",H0),addEventListener("pointerup",V0),addEventListener("resize",vc),n.addEventListener("contextmenu",r=>r.preventDefault()),Ad=!0,vc()}function z0(n){["Space","KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown"].includes(n.code)&&n.preventDefault(),_n[n.code]=!0,!n.repeat&&(n.code==="KeyQ"&&(mo=!0),n.code==="KeyE"&&Nt&&Nt.interact(),ii==="battle"&&(n.code==="Digit1"&&(xn="attack",Nt.order(xn)),n.code==="Digit2"&&(xn="hold",Nt.order(xn)),n.code==="Digit3"&&(xn="advance",Nt.order(xn)),n.code==="Digit4"&&(xn="follow",Nt.order(xn)),n.code==="Digit5"&&(xn="retreat",Nt.order(xn)),n.code==="KeyF"&&Nt&&Nt.cycleFormation()))}function k0(n){_n[n.code]=!1}function G0(n){Ls.x=n.clientX,Ls.y=n.clientY}function H0(n){n.button===0&&(jo=!0)}function V0(){jo=!1}function vc(){if(!Fn)return;Fn.setSize(innerWidth,innerHeight);const n=innerWidth/innerHeight,e=15;Xt.left=-e*n,Xt.right=e*n,Xt.top=e,Xt.bottom=-e,Xt.updateProjectionMatrix()}function wd(){Be&&(nn.remove(Be),Be.traverse(n=>{n.geometry&&!U0.has(n.geometry)&&!_o.has(n.geometry)&&n.geometry.dispose(),(Array.isArray(n.material)?n.material:n.material?[n.material]:[]).forEach(t=>{F0.has(t)||(["map","bumpMap"].forEach(i=>{const r=t[i];r&&!O0.has(r)&&r.dispose()}),t.dispose())})})),wt=[],dr=[],Td=[],Ci=[],wr=[],qn=[],Vr=[],Qo=[],dn=null,_o.clear()}let _o=new Set;function Rd(n){return _o.add(n),n}function Ur(n,e,t=1){const i=new Gn,r=Tt({color:n,map:yt.cloth});Ne(i,Ce.box,r,0,1.05,0,.58,.86,.38),Ne(i,Ce.box,Ie.dark,0,.62,0,.6,.12,.4),Ne(i,Ce.sph,Ie.skin,0,1.7,0,.42,.44,.42),Ne(i,Ce.sph,Ie.iron,0,1.82,0,.46,.3,.46);const s=Ne(i,Ce.box,Ie.dark,-.15,.3,0,.17,.6,.17),a=Ne(i,Ce.box,Ie.dark,.15,.3,0,.17,.6,.17),o=new Gn,l=new Gn;if(o.position.set(-.37,1.42,0),l.position.set(.37,1.42,0),Ne(o,Ce.box,r,0,-.28,0,.16,.56,.16),Ne(l,Ce.box,r,0,-.28,0,.16,.56,.16),i.add(o,l),e==="ranged"){const c=Ne(o,Ce.cyl,Ie.wood,0,-.5,.18,.08,.95,.08);c.rotation.x=.35}else if(e==="knight")Ne(o,Ce.box,Ie.iron,0,-.34,.2,.52,.72,.08),Ne(l,Ce.box,Ie.iron,0,-.78,0,.1,1.15,.1);else if(e==="cavalry"){Ne(l,Ce.box,Ie.iron,0,-.5,.15,.12,1.3,.12);const c=Ne(i,Ce.box,Ie.iron,0,.6,.5,.5,.3,.8);c.rotation.x=.2}else Ne(l,Ce.cyl,Ie.wood,0,-.62,.1,.07,1.5,.07),Ne(l,Ce.cone,Ie.iron,0,-1.4,.1,.14,.34,.14);return i.scale.setScalar(t),i.userData={lL:s,lR:a,aL:o,aR:l,cm:r},i}function xo(n,e,t,i){const r=new Gn;return Ne(r,Ce.box,Ie.plank,0,1.1,0,i?4.2:3.2,2.2,i?3.4:2.8),Ne(r,Ce.pyr,Ie.roof,0,2.9,0,i?5.4:4.2,1.6,i?4.4:3.6,Math.PI/4),Ne(r,Ce.box,Ie.dark,0,.85,i?1.72:1.42,.9,1.7,.12),Ne(r,Ce.box,Ie.dark,i?1.4:1.05,2.6,-.6,.5,1.6,.5),r.position.set(n,0,e),r.rotation.y=t,Be.add(r),Vr.push({x:n,z:e,hx:i?2.2:1.7,hz:i?1.8:1.5}),r}function Mc(n,e,t,i){Ne(Be,Ce.box,Ie.pale,n,.5,e,t,1,.08,i);for(let r=-t/2;r<=t/2;r+=1.5)Ne(Be,Ce.box,Ie.pale,n+Math.cos(i)*r,.5,e-Math.sin(i)*r,.06,1,.06,i);qn.push({x:n,z:e,r:Math.max(.5,t*.3)})}function Sc(n,e,t,i){Ne(Be,Ce.cyl,Ie.stone,n,t/2,e,i*2,t,i*2),Ne(Be,Ce.cone,Ie.roof,n,t+.9,e,i*2.5,1.8,i*2.5);for(let r=0;r<8;r++){const s=r/8*Zt;Ne(Be,Ce.box,Ie.stone,n+Math.cos(s)*i,t+.3,e+Math.sin(s)*i,.5,.6,.5,-s)}qn.push({x:n,z:e,r:i+.3})}function Mr(n,e,t,i){Ne(Be,Ce.box,Ie.stone,n,1.7,e,t,3.4,1,i);for(let r=-t/2+1;r<t/2;r+=2)Ne(Be,Ce.box,Ie.stone,n+Math.cos(i)*r,3.6,e-Math.sin(i)*r,.9,.5,1.1,i);Vr.push({x:n,z:e,hx:Math.abs(Math.cos(i))*t/2+.5,hz:Math.abs(Math.sin(i))*t/2+.5})}function Cd(n,e){Ne(Be,Ce.cyl,Ie.wood,n,1.2,e,.5,2.4,.5);for(let t=0;t<3;t++){const i=t/3*Zt;Ne(Be,Ce.sph,Ie.leaf,n+Math.cos(i)*.5,2.7+t*.4,e+Math.sin(i)*.5,3-t*.4,2.6-t*.3,3-t*.4)}qn.push({x:n,z:e,r:.7})}function yc(n,e){const t=Ne(Be,Ce.cone,Ie.fire,n,.5,e,.9,1.3,.9,0,!1),i=new Of(16752451,1.7,12);i.position.set(n,1.1,e),Be.add(i),Qo.push({f:t,l:i,x:n,z:e});for(let r=0;r<6;r++){const s=r/6*Zt;Ne(Be,Ce.ico,Ie.stone,n+Math.cos(s)*.85,.15,e+Math.sin(s)*.85,.35,.28,.35)}qn.push({x:n,z:e,r:.8})}function Sr(n,e,t){Ne(Be,Ce.cyl,Ie.dark,n,2.6,e,.14,5.2,.14);const i=Tt({color:new $e(t),map:yt.cloth,side:Jt});Ne(Be,Ce.box,i,n+.65,4.2,e,1.3,1.7,.05)}function W0(n,e,t,i){const r=new en(Rd(new Mi(t,i)),Ie.field);r.rotation.x=-Math.PI/2,r.position.set(n,.05,e),r.receiveShadow=!0,Be.add(r)}function yr(n,e,t,i,r,s){const a=Ur(t,s);a.position.set(n,0,e),a.rotation.y=Math.random()*Zt,Be.add(a);const o=new en(Ce.ring,new rr({color:13214247,transparent:!0,opacity:.5,side:Jt}));o.rotation.x=-Math.PI/2,o.position.set(n,.06,e),o.scale.setScalar(2.4),Be.add(o),dr.push({x:n,z:e,r:2.8,label:i,act:r,g:a,ring:o}),qn.push({x:n,z:e,r:.6})}function Ds(n,e,t){wd(),ii="settlement",Nr=!1,go={s:n},Nt.settleInteract=t,Be=new Gn,nn.add(Be);const i=new en(new Mi(220,220),Ie.grass);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,Be.add(i),Ne(Be,Ce.box,Ie.dirt,0,.04,0,9,.08,60,0,!1),Ne(Be,Ce.box,Ie.dirt,0,.045,0,52,.08,7,0,!1);const r=tt[n.lord]||tt.you,s=n.kind==="castle",a=n.kind==="town";if(n.b.farm)for(let u=0;u<Math.min(n.b.farm,3);u++){const h=u*2.1-2;W0(-28+h*8,20,6,8)}if(s||a){const u=s?24:22;Mr(0,-u,u*2,0),Mr(-u,0,u*2,Math.PI/2),Mr(u,0,u*2,Math.PI/2),Mr(-u/2-3,u,u-6,0),Mr(u/2+3,u,u-6,0),[[-u,-u],[u,-u],[-u,u],[u,u]].forEach(([h,m])=>Sc(h,m,s?7:5.5,2.1)),Ne(Be,Ce.box,Ie.stone,-4,2.2,u,1.6,4.4,1.8),Ne(Be,Ce.box,Ie.stone,4,2.2,u,1.6,4.4,1.8),Ne(Be,Ce.box,Ie.stone,0,4.6,u,9.6,1,2),Sr(-4,u+1.2,r.c),Sr(4,u+1.2,r.c)}n.b.keep&&(Ne(Be,Ce.box,Ie.stone,0,3.4,-13,11,6.8,8),Ne(Be,Ce.pyr,Ie.roof,0,7.8,-13,13,3,10,Math.PI/4),Vr.push({x:0,z:-13,hx:5.5,hz:4}),Sr(-6,-8,r.c),Sr(6,-8,r.c));const o=[[-13,-2],[13,-2],[-14,8],[14,8],[-8,14],[8,14],[-16,-12],[16,-12],[0,17],[-10,-16],[10,-16]];let l=0;const c=()=>o[l++%o.length];for(const u in n.b)if(!["walls","tower","keep","farm"].includes(u))for(let h=0;h<Math.min(n.b[u],3);h++){const[m,g]=c(),x=xo(m,g,Math.random()*Zt,u==="barracks"||u==="market");if(u==="church"&&(Ne(x,Ce.cyl,Ie.stone,0,4,0,1.2,3,1.2),Ne(x,Ce.cone,Ie.roof,0,6,0,1.6,2,1.6)),(u==="smithy"||u==="workshop")&&yc(m+2.6,g+1.8),u==="market"){const p=Tt({color:11024426,map:yt.cloth,side:Jt});Ne(x,Ce.box,p,0,2.6,1.8,3.6,.14,2)}u==="stables"&&(Ne(x,Ce.box,Ie.wood,m>0?m+3:m-3,.7,g,3,1.4,4,0),Ne(x,Ce.cone,Ie.thatch,m>0?m+3:m-3,1.8,g,3.5,1,4.5,Math.PI/4)),u==="tavern"&&Sr(m+3,g+1,r.c),Td.push({k:u,x:m,z:g})}if(n.b.walls&&!(s||a))for(let u=0;u<14;u++){const h=u/14*Zt;if(u===6||u===7)continue;const m=Math.cos(h)*20,g=Math.sin(h)*20;Ne(Be,Ce.box,Ie.stone,m,1.1,g,5.6,2.2,.4,-h+Math.PI/2),qn.push({x:m,z:g,r:2.4})}if(n.b.tower)for(let u=0;u<Math.min(n.b.tower,3);u++){const h=-Math.PI/2+u*2.1;Sc(Math.cos(h)*20,Math.sin(h)*20,5,1.7)}Mc(-18,-8,12,0),Mc(18,-8,12,0);for(let u=0;u<3;u++){const h=Math.random()*Zt,m=24+Math.random()*16,g=Math.cos(h)*m,x=Math.sin(h)*m;Ne(Be,Ce.ico,Rd(new Fi(1.5,1,1.2)),Ie.plank,g,.5,x,1,1,1,Math.random()*Zt),qn.push({x:g,z:x,r:.7})}for(let u=0;u<28;u++){const h=Math.random()*Zt,m=30+Math.random()*24;Cd(Math.cos(h)*m,Math.sin(h)*m)}yc(0,4),yr(-6,10,3832997,"Управляющий — стройка и казна","steward"),yr(6,10,9071172,"Старшина — набор войска","recruit"),yr(-11,4,13209386,"Купец — торг","merchant"),n.b.tavern&&yr(11,4,9391932,"Корчмарь — наёмники и слухи","tavern"),yr(0,26,7173248,"Ворота — выйти на карту земель","gate"),dr[dr.length-1].r=3.4,dn=Ur(13214247,"knight",1.06),dn.position.set(0,0,18),nn.add(dn),j.x=0,j.z=18,j.face=Math.PI,j.hp=go.hp||100,j.maxHp=100,j.dodge=0,j.dodgeCd=0,j.inv=0;let d=0;for(const u in e)for(let h=0;h<Math.min(e[u],8);h++){const m=Ln[u],g=m.branch==="cav",x=Ur(m.col,m.ranged?"ranged":m.t>=4?"knight":g?"cavalry":"spear"),p=Math.random()*Zt,f=3+Math.random()*3;x.position.set(j.x+Math.cos(p)*f,0,j.z+Math.sin(p)*f),Be.add(x),wt.push({g:x,side:1,type:u,d:m,hp:m.hp,max:m.hp,cd:Math.random(),ph:Math.random()*Zt,alive:!0,follow:!0,mor:80,branch:m.branch||"inf",ox:Math.cos(d)*3.4,oz:Math.sin(d)*3.4,fleeing:!1}),d++}Xt.position.set(j.x,34,j.z+22),Xt.lookAt(j.x,0,j.z)}function Pd(n,e,t,i){wd(),ii="battle",Nr=!1,go={raid:t},xn="attack",ei="advance",Ss=0,Li=0,Be=new Gn,nn.add(Be);const r=new en(new Mi(240,240),Ie.grass);r.rotation.x=-Math.PI/2,r.receiveShadow=!0,Be.add(r);for(let o=0;o<34;o++){const l=Math.random()*Zt,c=34+Math.random()*30;Cd(Math.cos(l)*c,Math.sin(l)*c)}for(let o=0;o<10;o++){const l=(Math.random()-.5)*70,c=(Math.random()-.5)*70;Ne(Be,Ce.ico,Ie.stone,l,.5,c,2.2,1.4,2.2,Math.random()*Zt),qn.push({x:l,z:c,r:1.1})}for(let o=0;o<4;o++)xo(-30+o*4,-34,Math.random());for(let o=0;o<3;o++)xo(26+o*4,32,Math.random());dn=Ur(13214247,"knight",1.08),dn.position.set(0,0,20),nn.add(dn),j.x=0,j.z=20,j.face=Math.PI,j.hp=i,j.maxHp=100,j.dodge=0,j.dodgeCd=0,j.inv=0;const s=(o,l,c,d)=>{const u=Ln[o]||Ln.levy,h=(u.branch||"inf")==="cav",m=Ur(l>0?u.col:t?5917242:9058860,u.ranged?"ranged":u.t>=4?"knight":h?"cavalry":"spear");m.position.set(c,0,d),Be.add(m),wt.push({g:m,side:l,type:o,d:u,hp:u.hp,max:u.hp,cd:Math.random(),ph:Math.random()*Zt,alive:!0,branch:u.branch||"inf",mor:l>0?Ld:80,ox:(Math.random()-.5)*14,oz:(Math.random()-.5)*6,fleeing:!1})};let a=0;for(const o in n)for(let l=0;l<n[o];l++)s(o,1,(a%7-3)*2.6,18+Math.floor(a/7)*2.6),a++;a=0;for(const o in e)for(let l=0;l<e[o];l++)s(o,-1,(a%8-3.5)*2.6,-18-Math.floor(a/8)*2.6),a++;Xt.position.set(0,36,42),Xt.lookAt(0,0,0)}let Ld=72;function Dd(n){Ld=n}function X0(){return j.hp}function Id(){return{ally:wt.filter(n=>n.alive&&n.side>0&&!n.fleeing).length,enemy:wt.filter(n=>n.alive&&n.side<0&&!n.fleeing).length}}function $0(){return wt.filter(n=>n.alive&&n.side<0).length}function q0(){const n={};return wt.forEach(e=>{e.side>0&&!e.alive&&(n[e.type]=(n[e.type]||0)+1)}),n}function Nd(){let n=null,e=1e9;for(const t of dr){const i=Math.hypot(t.x-j.x,t.z-j.z);i<t.r&&i<e&&(e=i,n=t)}return n}function sr(n,e,t,i,r){for(let s=0;s<i;s++){const a=new en(Ce.box,Ie.blood);a.scale.setScalar(.08+Math.random()*.09),a.position.set(n,e,t),Be.add(a),Ci.push({m:a,vx:(Math.random()-.5)*5,vy:2+Math.random()*4,vz:(Math.random()-.5)*5,t:0})}}function Y0(n,e,t,i,r){const s=new en(Ce.box,Ie.arrow);s.scale.set(.08,.08,.7),s.position.set(n,1.3,e),s.rotation.y=t,Be.add(s),wr.push({m:s,x:n,z:e,vx:Math.sin(t)*26,vz:Math.cos(t)*26,dmg:i,side:r,t:0})}function K0(){for(const t of qn){const i=j.x-t.x,r=j.z-t.z,s=Math.hypot(i,r),a=t.r+.5;if(s<a&&s>1e-4){const o=a-s;j.x+=i/s*o,j.z+=r/s*o}}for(const t of Vr){const i=j.x-t.x,r=j.z-t.z,s=Ir(i,-t.hx,t.hx),a=Ir(r,-t.hz,t.hz),o=i-s,l=r-a,c=Math.hypot(o,l);if(c<.5)if(c>1e-4){const d=.5-c;j.x+=o/c*d,j.z+=l/c*d}else{const d=t.hx-Math.abs(i),u=t.hz-Math.abs(r);d<u?j.x=t.x+Math.sign(i||1)*(t.hx+.5):j.z=t.z+Math.sign(r||1)*(t.hz+.5)}}const e=Math.hypot(j.x,j.z);e>78&&(j.x*=78/e,j.z*=78/e)}function Z0(n){if(Ss-=n,Ss<=0){Ss=4+Math.random()*4;const t=wt.filter(s=>s.alive&&s.side<0&&!s.fleeing).length,i=wt.filter(s=>s.alive&&s.side>0&&!s.fleeing).length,r=wt.filter(s=>s.alive&&s.side<0&&!s.fleeing&&s.branch==="cav").length;wt.filter(s=>s.alive&&s.side>0&&!s.fleeing&&s.branch==="cav").length,t<i*.6?ei="hold":r>2&&Math.random()<.4?ei="flank":i>t*1.5&&Math.random()<.15?ei="retreat":ei="advance"}wt.filter(t=>t.alive&&t.side<0&&!t.fleeing).forEach((t,i)=>{if(ei==="retreat"){t.fleeing=t.mor<20&&Li>3;return}if(ei==="hold"){t.holdPos=!0;return}if(t.holdPos=!1,ei==="flank"&&t.branch==="cav"){const r=wt.find(s=>s.alive&&s.side>0&&!s.fleeing&&s.branch==="arch");if(r){t.flankTarget=r;return}}t.flankTarget=null})}function J0(n,e,t,i){if(!n.alive||n.fleeing)return;if(n.mor<15&&!n.fleeing&&Li>2&&(n.fleeing=!0,n.g.rotation.y=Math.atan2(0-n.g.position.x,-n.side*80-n.g.position.z)),n.fleeing){const x=-n.side*80,p=0-n.g.position.x,f=x-n.g.position.z,S=Math.hypot(p,f)||1;n.g.position.x+=p/S*n.d.spd*1.5*e,n.g.position.z+=f/S*n.d.spd*1.5*e,n.g.userData.lL.rotation.x=Math.sin(t*14)*.7,n.g.userData.lR.rotation.x=-Math.sin(t*14)*.7;return}n.cd-=e;let r=null,s=1e9;const a=n.side<0;if(a){const g=Math.hypot(j.x-n.g.position.x,j.z-n.g.position.z);g<s&&ii==="battle"&&(s=g,r={hero:!0,x:j.x,z:j.z})}for(const g of i){if(!g.alive||g.fleeing||g.side===n.side)continue;const x=Math.hypot(g.g.position.x-n.g.position.x,g.g.position.z-n.g.position.z);x<s&&(s=x,r={u:g,x:g.g.position.x,z:g.g.position.z})}n.flankTarget&&n.flankTarget.alive&&!n.flankTarget.fleeing&&(r={u:n.flankTarget,x:n.flankTarget.g.position.x,z:n.flankTarget.g.position.z},s=Math.hypot(r.x-n.g.position.x,r.z-n.g.position.z));const o=a?ei:xn;if(ii==="settlement"||o==="retreat"||!r){const g=j.x+n.ox,x=j.z+n.oz,p=Math.hypot(g-n.g.position.x,x-n.g.position.z);p>1.2&&(n.g.position.x+=(g-n.g.position.x)/p*Math.min(p,n.d.spd*1.3*e),n.g.position.z+=(x-n.g.position.z)/p*Math.min(p,n.d.spd*1.3*e),n.g.rotation.y=Math.atan2(g-n.g.position.x,x-n.g.position.z),n.g.userData.lL.rotation.x=Math.sin(t*10+n.ph)*.5,n.g.userData.lR.rotation.x=-Math.sin(t*10+n.ph)*.5);return}if(o==="follow"){const g=j.x+n.ox,x=j.z+n.oz,p=Math.hypot(g-n.g.position.x,x-n.g.position.z);p>2&&(n.g.position.x+=(g-n.g.position.x)/p*n.d.spd*e,n.g.position.z+=(x-n.g.position.z)/p*n.d.spd*e,n.g.rotation.y=Math.atan2(g-n.g.position.x,x-n.g.position.z),n.g.userData.lL.rotation.x=Math.sin(t*10+n.ph)*.5,n.g.userData.lR.rotation.x=-Math.sin(t*10+n.ph)*.5);return}if((o==="hold"||n.holdPos)&&s>6){const g=j.x+n.ox,x=j.z+n.oz,p=Math.hypot(g-n.g.position.x,x-n.g.position.z);p>1&&(n.g.position.x+=(g-n.g.position.x)/p*n.d.spd*.6*e,n.g.position.z+=(x-n.g.position.z)/p*n.d.spd*.6*e);return}if(n.branch==="arch"&&o!=="hold"){const g=i.find(x=>x.alive&&!x.fleeing&&x.side!==n.side&&x.branch==="inf"&&Math.hypot(x.g.position.x-n.g.position.x,x.g.position.z-n.g.position.z)<5);if(g&&!n.rangedAway){const x=n.g.position.x-g.g.position.x,p=n.g.position.z-g.g.position.z,f=Math.hypot(x,p)||1;n.g.position.x+=x/f*n.d.spd*1.2*e,n.g.position.z+=p/f*n.d.spd*1.2*e;return}}const l=r.x-n.g.position.x,c=r.z-n.g.position.z,d=Math.hypot(l,c)||1;n.g.rotation.y=Math.atan2(l,c);const u=n.d.ranged?11:1.9,h=n.branch==="cav"&&d>5&&d<15,m=h?n.d.spd*1.4:n.d.spd;if(d>u*.85&&(n.g.position.x+=l/d*m*e,n.g.position.z+=c/d*m*e,n.g.userData.lL.rotation.x=Math.sin(t*10+n.ph)*.55,n.g.userData.lR.rotation.x=-Math.sin(t*10+n.ph)*.55),d<u&&n.cd<=0){n.cd=n.d.ranged?1.6:1.05,n.g.userData.aR.rotation.x=-1.9;const g=h?1.5:1;n.d.ranged?Y0(n.g.position.x,n.g.position.z,Math.atan2(l,c),n.d.atk*g,n.side):r.hero?j.inv<=0&&(j.hp-=Math.max(2,n.d.atk*g-Ud*.4),j.inv=.35,hi=.2,sr(j.x,1.2,j.z,5),Nt.sfx("hurt")):(r.u.hp-=Math.max(3,n.d.atk*g-r.u.d.arm*.4),sr(r.u.g.position.x,1.2,r.u.g.position.z,4),r.u.hp<=0&&(Mo(r.u),vo(r.u,i))),h&&(n.mor=Ir(n.mor+3,0,100))}n.g.userData.aR.rotation.x+=(-.3-n.g.userData.aR.rotation.x)*Math.min(1,e*8)}let Ud=3,Li=0;function vo(n,e){const t=n.side,i=e.filter(o=>o.alive&&o.side===t&&!o.fleeing),r=e.filter(o=>!o.alive&&o.side===t).length,s=i.length+r;if(s<3)return;const a=r/s;a>.4&&i.forEach(o=>{o.mor=Ir(o.mor-5,0,100)}),a>.6&&i.forEach(o=>{o.mor=Ir(o.mor-8,0,100),o.mor<15&&Li>3&&(o.fleeing=!0)})}const Ec=new kf,Q0=new ti(new O(0,1,0),0),bc=new Xe,va=new O;function Tc(n,e,t,i){if(!Ad||!dn)return;Ud=i,bc.set(Ls.x/innerWidth*2-1,-(Ls.y/innerHeight)*2+1),Ec.setFromCamera(bc,Xt),Ec.ray.intersectPlane(Q0,va)&&(j.face=Math.atan2(va.x-j.x,va.z-j.z));let r=(_n.KeyD||_n.ArrowRight?1:0)-(_n.KeyA||_n.ArrowLeft?1:0),s=(_n.KeyS||_n.ArrowDown?1:0)-(_n.KeyW||_n.ArrowUp?1:0);const a=Math.hypot(r,s);a>1&&(r/=a,s/=a);const o=_n.ShiftLeft||_n.ShiftRight;if(j.dodge>0)j.dodge-=n,j.x+=Math.sin(j.face)*15*n,j.z+=Math.cos(j.face)*15*n,dn.rotation.z=Math.sin((1-j.dodge/.3)*Math.PI)*1.1;else{dn.rotation.z=0;const g=(o?9.2:5.6)*(j.swing>0?.45:1);j.x+=r*g*n,j.z+=s*g*n}mo&&j.dodgeCd<=0&&(j.dodge=.3,j.dodgeCd=.8,j.inv=.36,Nt.sfx("dodge")),mo=!1,j.dodgeCd>0&&(j.dodgeCd-=n),j.inv>0&&(j.inv-=n),K0(),j.moving=a>0,j.moving&&(j.wp+=n*(o?14:10)),dn.position.set(j.x,0,j.z),dn.rotation.y=j.face;const l=dn.userData,c=Math.sin(j.wp),d=j.moving?o?.8:.55:0;if(l.lL.rotation.x=c*d,l.lR.rotation.x=-c*d,l.aL.rotation.x=-.3,l.aR.rotation.x=-.3,j.atkCd>0&&(j.atkCd-=n),j.swing>0){j.swing-=n;const g=1-j.swing/t.spd;if(l.aR.rotation.x=-2.3+g*3.4,l.aL.rotation.x=-.6,g>.35&&g<.55&&!j.hitDone){j.hitDone=!0;for(const x of wt){if(!x.alive||x.fleeing||x.side>0)continue;const p=x.g.position.x-j.x,f=x.g.position.z-j.z;Math.hypot(p,f)<t.reach+.6&&Math.abs(Math.atan2(Math.sin(Math.atan2(p,f)-j.face),Math.cos(Math.atan2(p,f)-j.face)))<1.1&&(x.hp-=t.atk+12,sr(x.g.position.x,1.2,x.g.position.z,7),hi=.16,Nt.sfx("hit"),x.hp<=0&&(Mo(x),vo(x,wt)))}}}else if(jo&&j.atkCd<=0&&ii==="battle"){j.atkCd=t.spd+.1,j.swing=t.spd,j.hitDone=!1,Nt.sfx("swing");const g=new en(Ce.torus,new rr({color:16771488,transparent:!0,opacity:.75,blending:ba,depthWrite:!1,side:Jt}));g.scale.setScalar(t.reach*1.7),g.position.set(j.x+Math.sin(j.face)*1.1,1.3,j.z+Math.cos(j.face)*1.1),g.rotation.set(Math.PI/2,0,-j.face),Be.add(g),Ci.push({m:g,t:0,arc:!0})}ii==="battle"&&Z0(n);for(const g of wt)J0(g,n,e,wt);for(let g=wr.length-1;g>=0;g--){const x=wr[g];x.t+=n,x.x+=x.vx*n,x.z+=x.vz*n,x.m.position.set(x.x,1.3,x.z);let p=x.t>1.6;if(x.side<0&&Math.hypot(x.x-j.x,x.z-j.z)<.6&&j.inv<=0&&(j.hp-=Math.max(2,x.dmg-i*.4),j.inv=.3,hi=.15,sr(j.x,1.3,j.z,4),Nt.sfx("hurt"),p=!0),!p){for(const f of wt)if(!(!f.alive||f.fleeing||f.side===x.side)&&Math.hypot(x.x-f.g.position.x,x.z-f.g.position.z)<.6){f.hp-=Math.max(3,x.dmg-f.d.arm*.4),sr(f.g.position.x,1.3,f.g.position.z,3),f.hp<=0&&(Mo(f),vo(f,wt)),p=!0;break}}p&&(Be.remove(x.m),wr.splice(g,1))}for(let g=Ci.length-1;g>=0;g--){const x=Ci[g];x.t+=n,x.arc?(x.m.material.opacity=.75*(1-x.t/.22),x.m.scale.multiplyScalar(1+n*3),x.t>.22&&(Be.remove(x.m),x.m.material.dispose(),Ci.splice(g,1))):(x.vy-=15*n,x.m.position.x+=x.vx*n,x.m.position.y+=x.vy*n,x.m.position.z+=x.vz*n,(x.t>.85||x.m.position.y<0)&&(Be.remove(x.m),x.m.material.dispose(),Ci.splice(g,1)))}Qo.forEach(g=>{const x=1+Math.sin(e*9+g.x)*.14;g.f.scale.set(.9*x,1.3*(1+Math.sin(e*11+g.z)*.16),.9*x),g.l.intensity=1.5+Math.sin(e*10+g.x)*.4}),dr.forEach(g=>{g.ring.material.opacity=.32+Math.sin(e*3+g.x)*.16});const u=j.x,h=j.z;Xt.position.lerp(new O(u,34,h+22),1-Math.exp(-7*n)),hi>0&&(hi=Math.max(0,hi-n*1.5),Xt.position.x+=(Math.random()-.5)*hi,Xt.position.z+=(Math.random()-.5)*hi),Xt.lookAt(u,1,h);const m=nn.userData.sun;if(m.position.set(u+26,38,h+18),m.target.position.set(u,0,h),ii==="battle"&&!Nr){Li+=n;const g=Id();Li>1.5&&g.enemy===0&&$0()===0?Ma(!0):(j.hp<=0||Li>3&&g.ally===0)&&Ma(!1)}ii==="settlement"&&j.hp<100&&(j.hp=Math.min(100,j.hp+n*4)),Fn.render(nn,Xt)}function Mo(n){n.alive=!1,n.g.rotation.x=-Math.PI/2,n.g.position.y=.3,sr(n.g.position.x,1,n.g.position.z,10),Nt.sfx("kill")}function Ma(n){Nr||(Nr=!0,Nt.battleEnd(n,q0()))}function j0(){return{hp:j.hp,max:j.maxHp}}const se=n=>document.getElementById(n),Dn=(n,e,t)=>Math.max(e,Math.min(t,n));let k=Qd(),_t="scene",el="keep",At=null,On=null,Sa=0,Ac=performance.now(),Tr=!1,Ji=null,Ut={x:0,y:0},Ft=1,tl=!1,ji=null,ur=!0;function st(n){if(!Tr)try{Ji=Ji||new(window.AudioContext||window.webkitAudioContext);const e=Ji.currentTime,t=Ji.createOscillator(),i=Ji.createGain();t.connect(i),i.connect(Ji.destination);const r={hit:[220,90,.09,"square",.14],swing:[520,240,.07,"sine",.07],hurt:[180,60,.2,"sawtooth",.16],kill:[300,110,.14,"square",.12],dodge:[700,300,.1,"sine",.08],coin:[880,1300,.08,"sine",.12],build:[200,420,.2,"square",.12],horn:[150,320,.45,"sawtooth",.16],ui:[600,700,.05,"sine",.07]}[n]||[440,440,.06,"sine",.08];t.type=r[3],t.frequency.setValueAtTime(r[0],e),t.frequency.exponentialRampToValueAtTime(r[1],e+r[2]),i.gain.setValueAtTime(r[4],e),i.gain.exponentialRampToValueAtTime(.001,e+r[2]),t.start(e),t.stop(e+r[2]+.02)}catch{}}function xt(n){const e=se("toast");e.textContent=n,e.classList.add("on"),clearTimeout(e._t),e._t=setTimeout(()=>e.classList.remove("on"),2400)}function Bs(n,e){const t=se("feed"),i=document.createElement("div");for(i.className="fe",i.style.borderLeftColor="#c9a227",i.innerHTML=n,t.appendChild(i);t.children.length>5;)t.removeChild(t.firstChild);setTimeout(()=>i.remove(),3600)}let Is="line";function e_(){const n=Object.keys(bo);Is=n[(n.indexOf(Is)+1)%n.length],t_(),st("ui")}function t_(){const n=se("bForm");n&&(n.textContent=bo[Is].n);const e=se("bOrd");e&&(e.textContent={attack:"В атаку",hold:"Держать строй",advance:"Наступать",follow:"За мной",retreat:"Отход"}[So]||So)}const n_={sfx:st,interact:i_,order:n=>{So=n;const e=se("bOrd");e&&(e.textContent={attack:"В атаку",hold:"Держать строй",advance:"Наступать",follow:"За мной",retreat:"Отход"}[n]),st("horn")},cycleFormation:e_,battleEnd:(n,e)=>o_(n,e),settleInteract:null};let So="attack";B0(se("view"),n_);zs("keep");setTimeout(()=>se("ovHelp").classList.remove("hide"),350);function zs(n){var t;el=n,_t="scene";const e=k.settlements[n];k.player.x=e.x,k.player.y=e.y,k.player.tx=null,Ds(e,k.player.troops,null),se("place").querySelector(".n").textContent=e.n,se("place").querySelector(".s").textContent=`${Qt[e.kind].n} · ${((t=tt[e.lord])==null?void 0:t.n)||"—"} · люд ${Math.round(e.pop)} · гарнизон ${e.gar}`,se("bHud").classList.remove("on"),Oi(),xt(`Вы вошли в ${e.n}`)}function nl(){_t="map",ur=!0,se("ovMap").classList.remove("hide"),At=el,Hn(),_i(),st("ui")}function Oi(){["ovDialog","ovParty","ovRealm","ovMap","ovHelp"].forEach(n=>se(n).classList.add("hide"))}function i_(){if(_t!=="scene"||On)return;const n=Nd();if(!n)return;const e=k.settlements[el];if(n.act==="gate"){nl();return}n.act==="steward"?yo(e):n.act==="recruit"?Fd(e):n.act==="merchant"?Ri(e):n.act==="tavern"&&ys(e)}function ks(n,e,t){se("dgT").textContent=n,se("dgS").textContent=e,se("dgBody").innerHTML=t,se("ovDialog").classList.remove("hide")}function yo(n){const e=n.lord==="you";let t=`<div class="row"><span>Казна поселения</span><b>${Math.round(n.income||0)} 🪙 / 5 дней</b></div>
 <div class="row"><span>Ваша казна</span><b>${k.player.gold} 🪙</b></div>
 <div class="row"><span>Люд · достаток</span><b>${Math.round(n.pop)} · ${Math.round(n.pros)}</b></div>
 <div class="row"><span>Занято мест</span><b>${wo(n)} / ${Ao(n)}</b></div>`;n.project&&(t+=`<div class="card"><div class="ct">🔨 Строится: ${An[n.project.k].n}</div><div class="cd">Осталось ${n.project.left} дн.</div></div>`),n.upgrade&&(t+=`<div class="card"><div class="ct">🏗️ Перестройка в ${Qt[n.upgrade.to].n}</div><div class="cd">Осталось ${n.upgrade.left} дн.</div></div>`),t+='<div class="lbl">Запасы</div><div class="grid3">';for(const r in Rn)t+=`<div class="tag">${Rn[r].i} ${Rn[r].n}: ${Math.round(n.stock[r])}</div>`;if(t+="</div>",e){const r=Qt[n.kind];r.up&&(t+=`<button class="btn gold" id="upg">🏗️ Перестроить в ${Qt[r.up].n} — ${r.uc.gold}🪙 + материалы (${r.ud} дн.)</button>`),t+='<div class="lbl">Возвести</div>';for(const s in An){const a=An[s],o=Ic(n,s),l=Object.entries(a.c).map(([c,d])=>c==="gold"?d+"🪙":Rn[c].i+d).join(" ");t+=`<div class="card"><div class="ct"><span>${a.i} ${a.n} <small>${n.b[s]||0}/${a.max}</small></span><span style="font-size:11px">${l}</span></div>
   <div class="cd">${a.dsc} · ${a.d} дн.</div><button class="btn sm" data-b="${s}" ${o||k.player.gold<a.c.gold?"disabled":""}>${o||"Заложить"}</button></div>`}}else t+='<div class="card"><div class="cd">Чужое владение. Захватите его в бою, чтобы строить здесь.</div></div>';ks("Управляющий",n.n,t),se("dgBody").querySelectorAll("[data-b]").forEach(r=>r.onclick=()=>{const s=eu(k,n.id,r.dataset.b,k.player.gold);s?xt(s):(k.player.gold-=An[r.dataset.b].c.gold,st("build"),Bs("🔨 Заложено: "+An[r.dataset.b].n)),yo(n)});const i=se("upg");i&&(i.onclick=()=>{const r=tu(k,n.id,k.player.gold);r?xt(r):(k.player.gold-=Qt[n.kind].uc.gold,st("build")),yo(n)})}function Fd(n){const e=Math.min(n.recruits,60-Wn(k)),t=n.kind==="village"?"peasant":n.kind==="town"?"levy":"spearman",i=Ln[t],r=n.kind==="village"?24:n.kind==="town"?38:52;let s=`<div class="row"><span>Готовы наняться</span><b>${n.recruits} чел.</b></div>
 <div class="row"><span>В вашем отряде</span><b>${Wn(k)} / 60</b></div>
 <div class="row"><span>Тип набора</span><b>${i.n}</b></div>
 <div class="row"><span>Цена за одного</span><b>${r} 🪙</b></div>
 <div class="row"><span>Жалованье в день</span><b>${i.wage} 🪙 / чел.</b></div>
 <div class="row"><span>Боевая подготовка</span><b>Ур.${i.t} · HP ${i.hp} · удар ${i.atk} · броня ${i.arm}</b></div>`;n.lord!=="you"&&(s+='<div class="card"><div class="cd">Чужие люди идут неохотно: набор дороже.</div></div>'),s+='<div class="lbl">Нанять</div><div style="display:flex;gap:6px;flex-wrap:wrap">',[1,3,5,10].forEach(o=>s+=`<button class="btn sm" data-r="${o}" ${e<o?"disabled":""}>+${o} (${o*r}🪙)</button>`),s+=`</div><button class="btn" id="rAll" ${e<1?"disabled":""}>Нанять всех (${e}) — ${e*r}🪙</button>`,ks("Старшина",n.n,s);const a=o=>{const l=lu(k,n.id,o);l.err?xt(l.err):(st("coin"),Bs(`👥 +${l.n} бойцов за ${l.cost}🪙`),Ds(n,k.player.troops,null)),Fd(n)};se("dgBody").querySelectorAll("[data-r]").forEach(o=>o.onclick=()=>a(+o.dataset.r)),se("rAll").onclick=()=>a(e)}function Ri(n){const e=k.player.cargo||{};let t=`<div class="row"><span>Ваша казна</span><b>${k.player.gold} 🪙</b></div><div class="lbl">Товары</div>`;for(const s in Rn){const a=Rn[s].p,o=Math.round(a*1.15*(1+(n.pros-50)/220)),l=Math.round(a*.82*(1+(n.pros-50)/220));t+=`<div class="card"><div class="ct"><span>${Rn[s].i} ${Rn[s].n}</span><span style="font-size:11px">куп ${o}🪙 · прод ${l}🪙</span></div>
  <div class="cd">На складе: ${Math.round(n.stock[s])} · у вас: ${e[s]||0}</div>
  <div class="cb"><button class="btn sm" data-buy="${s}" ${n.stock[s]<1||k.player.gold<o?"disabled":""}>Купить 1</button>
  <button class="btn sm" data-buy5="${s}" ${n.stock[s]<5||k.player.gold<o*5?"disabled":""}>×5</button>
  <button class="btn sm" data-sell="${s}" ${(e[s]||0)<1?"disabled":""}>Продать 1</button></div></div>`}t+='<div class="lbl">Снаряжение лорда</div>',er.forEach((s,a)=>{a<=k.player.weapon||(t+=`<div class="card"><div class="ct"><span>🗡️ ${s.n}</span><span>${s.c}🪙</span></div><div class="cd">Урон ${s.atk} · досягаемость ${s.reach}</div>
  <button class="btn sm" data-w="${a}" ${k.player.gold<s.c?"disabled":""}>Купить</button></div>`)}),tr.forEach((s,a)=>{a<=k.player.armor||(t+=`<div class="card"><div class="ct"><span>🛡️ ${s.n}</span><span>${s.c}🪙</span></div><div class="cd">Защита ${s.arm}</div>
  <button class="btn sm" data-a="${a}" ${k.player.gold<s.c?"disabled":""}>Купить</button></div>`)}),k.player.prisoners&&(t+=`<button class="btn gold" id="sellP">⛓️ Продать пленных (${k.player.prisoners}) — ${k.player.prisoners*22}🪙</button>`),ks("Купец",n.n+" · достаток "+Math.round(n.pros),t);const i=se("dgBody");i.querySelectorAll("[data-buy]").forEach(s=>s.onclick=()=>{const a=Vs(k,n.id,s.dataset.buy,!0,1);a.err?xt(a.err):st("coin"),Ri(n)}),i.querySelectorAll("[data-buy5]").forEach(s=>s.onclick=()=>{const a=Vs(k,n.id,s.dataset.buy5,!0,5);a.err?xt(a.err):st("coin"),Ri(n)}),i.querySelectorAll("[data-sell]").forEach(s=>s.onclick=()=>{const a=Vs(k,n.id,s.dataset.sell,!1,1);a.err?xt(a.err):st("coin"),Ri(n)}),i.querySelectorAll("[data-w]").forEach(s=>s.onclick=()=>{const a=+s.dataset.w;k.player.gold-=er[a].c,k.player.weapon=a,st("coin"),xt("Куплено: "+er[a].n),Ri(n)}),i.querySelectorAll("[data-a]").forEach(s=>s.onclick=()=>{const a=+s.dataset.a;k.player.gold-=tr[a].c,k.player.armor=a,st("coin"),xt("Куплено: "+tr[a].n),Ri(n)});const r=se("sellP");r&&(r.onclick=()=>{uu(k),st("coin"),Ri(n)})}function ys(n){let e=`<div class="card"><div class="ct">🍺 Наёмники</div><div class="cd">В корчме сидят люди с оружием. Дороже набора, но уже умеют биться.</div>
 <button class="btn sm" id="merc" ${k.player.gold<180?"disabled":""}>Нанять 3 сержантов — 180🪙</button></div>
 <div class="card"><div class="ct">🐎 Всадники</div><div class="cd">Конный разведчик — быстрый и маневренный боец.</div>
 <button class="btn sm" id="cav" ${k.player.gold<140?"disabled":""}>Нанять 2 разведчиков — 140🪙</button></div>
 <div class="card"><div class="ct">🍷 Угощение отряду</div><div class="cd">Поднимает дух войска.</div>
 <button class="btn sm" id="drink" ${k.player.gold<60?"disabled":""}>Угостить всех — 60🪙</button></div>
 <div class="lbl">Слухи</div>`;const t=Object.keys(k.wars).filter(r=>k.wars[r]).slice(0,4);e+=t.length?t.map(r=>{const[s,a]=r.split("|");return`<div class="card"><div class="cd">⚔️ ${tt[s].n} воюет с ${tt[a].n}</div></div>`}).join(""):'<div class="card"><div class="cd">Пока в землях тихо.</div></div>';const i=Object.values(k.settlements).sort((r,s)=>s.pros-r.pros)[0];e+=`<div class="card"><div class="cd">💰 Богаче всех ныне ${i.n} — достаток ${Math.round(i.pros)}.</div></div>`,ks("Корчмарь",n.n,e),se("merc").onclick=()=>{k.player.gold<180||(k.player.gold-=180,k.player.troops.serjeant=(k.player.troops.serjeant||0)+3,st("coin"),Ds(n,k.player.troops,null),ys(n))},se("cav").onclick=()=>{k.player.gold<140||(k.player.gold-=140,k.player.troops.scout=(k.player.troops.scout||0)+2,st("coin"),Ds(n,k.player.troops,null),ys(n))},se("drink").onclick=()=>{k.player.gold<60||(k.player.gold-=60,k.player.morale=Dn(k.player.morale+14,0,100),st("coin"),xt("Дух отряда вырос"),ys(n))}}function il(){const n=k.player;let e=`<div class="row"><span>Бойцов</span><b>${Wn(k)} / 60</b></div>
 <div class="row"><span>Жалованье в день</span><b>${Dc(k)} 🪙</b></div>
 <div class="row"><span>Провизия</span><b>${Math.round(n.food)} (нужно ${Math.ceil(Wn(k)*.5)}/день)</b></div>
 <div class="row"><span>Пленные</span><b>${n.prisoners}</b></div>
 <div class="row"><span>Оружие · доспех</span><b>${er[n.weapon].n} · ${tr[n.armor].n}</b></div><div class="lbl">Состав</div>`;const t=Object.keys(n.troops).filter(r=>n.troops[r]>0);t.length||(e+='<div class="card"><div class="cd">Отряда нет. Наймите людей у старшины.</div></div>');const i={inf:"Пехота",arch:"Стрелки",cav:"Конница"};t.forEach(r=>{const s=Ln[r];e+=`<div class="card"><div class="ct"><span>${s.n} <small>×${n.troops[r]}</small></span><span style="font-size:11px">${i[s.branch]||"Пехота"} · ур.${s.t} · ${s.wage}🪙/дн</span></div>
  <div class="cd">Здоровье ${s.hp} · удар ${s.atk} · доспех ${s.arm}${s.ranged?" · стрелок":""}${s.branch==="cav"?" · конница":""}</div>
  ${s.up?`<button class="btn sm" data-u="${r}" ${n.gold<s.uc?"disabled":""}>Обучить одного → ${Ln[s.up].n} (${s.uc}🪙)</button>`:""}</div>`}),se("ptS").textContent=`Слава ${n.renown} · честь ${n.honor} · уровень ${n.lvl}`,se("ptBody").innerHTML=e,se("ovParty").classList.remove("hide"),se("ptBody").querySelectorAll("[data-u]").forEach(r=>r.onclick=()=>{const s=cu(k,r.dataset.u);s?xt(s):(st("coin"),Bs("🎖️ Боец обучен")),il()})}function rl(){const n=Object.values(k.settlements).filter(t=>t.lord==="you");let e=`<div class="grid2"><div class="card"><div class="ct">🏰 Ваши владения</div><div class="cd">${n.length} поселений · подати ${n.reduce((t,i)=>t+(i.income||0),0)}🪙 / 5 дней</div></div>
 <div class="card"><div class="ct">📜 Войны</div><div class="cd">${Object.keys(k.wars).filter(t=>k.wars[t]).length/2||0} активных</div></div></div>`;e+='<div class="lbl">Поселения</div>',n.forEach(t=>{e+=`<div class="card"><div class="ct"><span>${Qt[t.kind].i} ${t.n}</span><span style="font-size:11px">${Qt[t.kind].n}</span></div>
  <div class="cd">Люд ${Math.round(t.pop)} · достаток ${Math.round(t.pros)} · гарнизон ${t.gar} · оборона ${Br(t)} · места ${wo(t)}/${Ao(t)}</div>
  <div class="cb">${Object.entries(t.b).filter(([,i])=>i).map(([i,r])=>`<span class="tag">${An[i].i}${r}</span>`).join("")}</div>
  ${t.project?`<div class="cd">🔨 ${An[t.project.k].n}: ${t.project.left} дн.</div>`:""}
  ${t.upgrade?`<div class="cd">🏗️ → ${Qt[t.upgrade.to].n}: ${t.upgrade.left} дн.</div>`:""}
  <button class="btn sm" data-go="${t.id}">Войти</button></div>`}),k.sites.length&&(e+='<div class="lbl">Пустые места — можно основать деревню (420🪙 + 44🪵 + 26🪨 из столицы)</div>',k.sites.forEach(t=>e+=`<div class="card"><div class="ct"><span>📍 ${t.n}</span></div>
   <div class="cd">Люди готовы идти сюда, если вы дадите брус и камень.</div>
   <button class="btn sm" data-f="${t.id}" ${k.player.gold<420?"disabled":""}>Основать деревню</button></div>`)),e+='<div class="lbl">Прочие державы</div>',Object.keys(tt).filter(t=>t!=="you").forEach(t=>{const i=Object.values(k.settlements).filter(s=>s.lord===t),r=k.armies.find(s=>s.lord===t);e+=`<div class="card"><div class="ct"><span style="color:${tt[t].c}">${tt[t].crest} ${tt[t].full}</span><span style="font-size:11px">${i.length} владений</span></div>
  <div class="cd">Войско в поле: ${r?r.size:0} чел. · ${i.map(s=>s.n).join(", ")||"изгнан"}</div></div>`}),se("rlBody").innerHTML=e,se("ovRealm").classList.remove("hide"),se("rlBody").querySelectorAll("[data-go]").forEach(t=>t.onclick=()=>{Oi(),zs(t.dataset.go)}),se("rlBody").querySelectorAll("[data-f]").forEach(t=>t.onclick=()=>{const i=Nc(k,t.dataset.f,k.player.gold);i?xt(i):(k.player.gold-=420,st("build"),Bs("🏘️ Новое поселение основано!")),rl()})}const an=se("mapC"),$=an.getContext("2d");function r_(){const n=an.parentElement.getBoundingClientRect();an.width=n.width*devicePixelRatio,an.height=n.height*devicePixelRatio,$.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0)}const Fr=()=>an.width/devicePixelRatio,Or=()=>an.height/devicePixelRatio;function Bi(){return Math.min(Fr(),Or())}function Od(){return Ft*Bi()}function Bd(){const n=Od();return Math.max(0,(Fr()-n)/2)}function zd(){const n=Od();return Math.max(0,(Or()-n)/2)}function Yt(n,e){const t=Bi();return{x:(n-Ut.x)*Ft*t+Bd(),y:(e-Ut.y)*Ft*t+zd()}}function Eo(n,e){const t=Bi();return{x:(n-Bd())/(Ft*t)+Ut.x,y:(e-zd())/(Ft*t)+Ut.y}}function sl(){const n=Bi(),e=Ft*n,t=Ft*n;if(e>=Fr()){const i=Fr()/(2*Ft*n);Ut.x=Dn(Ut.x,i-.5,.5-i)}else Ut.x=0;if(t>=Or()){const i=Or()/(2*Ft*n);Ut.y=Dn(Ut.y,i-.5,.5-i)}else Ut.y=0}function s_(){Ut.x=k.player.x,Ut.y=k.player.y,sl()}function Hn(){r_();const n=Fr(),e=Or();Bi(),ur&&s_(),$.save(),$.fillStyle="#1a1610",$.fillRect(0,0,n,e);const t=[Yt(0,0),Yt(1,0),Yt(1,1),Yt(0,1)],i=$.createLinearGradient(t[0].x,t[0].y,t[2].x,t[2].y);i.addColorStop(0,"#d8c9a4"),i.addColorStop(.55,"#c9b894"),i.addColorStop(1,"#bcab88"),$.fillStyle=i,$.beginPath(),$.moveTo(t[0].x,t[0].y);for(let a=1;a<4;a++)$.lineTo(t[a].x,t[a].y);$.closePath(),$.fill(),$.save(),$.beginPath(),$.moveTo(t[0].x,t[0].y);for(let a=1;a<4;a++)$.lineTo(t[a].x,t[a].y);$.closePath(),$.clip(),$.globalAlpha=.04;for(let a=0;a<260;a++){const o=Yt(a*137%100/100,a*97%100/100);$.fillStyle=a%2?"#6b5636":"#8a7a5e",$.fillRect(o.x,o.y,2,2)}$.globalAlpha=1,$.strokeStyle="rgba(90,70,45,.35)",$.lineWidth=2.5,Zd.forEach(([a,o])=>{const l=k.settlements[a],c=k.settlements[o];if(!l||!c)return;const d=Yt(l.x,l.y),u=Yt(c.x,c.y);$.setLineDash([7,4]),$.beginPath(),$.moveTo(d.x,d.y),$.lineTo(u.x,u.y),$.stroke()}),$.setLineDash([]),$.strokeStyle="rgba(90,70,45,.18)",$.lineWidth=1.5,$.setLineDash([2,6]),Object.values(k.settlements).forEach(a=>{const o=Object.values(k.settlements).filter(l=>l!==a).sort((l,c)=>Math.hypot(l.x-a.x,l.y-a.y)-Math.hypot(c.x-a.x,c.y-a.y))[0];if(o){const l=Yt(a.x,a.y),c=Yt(o.x,o.y);$.beginPath(),$.moveTo(l.x,l.y),$.lineTo(c.x,c.y),$.stroke()}}),$.setLineDash([]),k.sites.forEach(a=>{const o=Yt(a.x,a.y);$.strokeStyle="#7a6444",$.lineWidth=2,$.setLineDash([3,3]),$.beginPath(),$.arc(o.x,o.y,13,0,7),$.stroke(),$.setLineDash([]),$.font="13px serif",$.textAlign="center",$.textBaseline="middle",$.fillStyle="#5a4830",$.fillText("📍",o.x,o.y),$.font="10px PT Sans",$.fillText(a.n,o.x,o.y+22)}),Object.values(k.settlements).forEach(a=>{const o=Yt(a.x,a.y),l=tt[a.lord]||tt.you,c=a.kind==="village"?15:a.kind==="town"?20:22;$.globalAlpha=.15,$.fillStyle=l.c,$.beginPath(),$.arc(o.x,o.y,c+16,0,7),$.fill(),$.globalAlpha=1,$.fillStyle="#241c14",$.beginPath(),$.arc(o.x,o.y,c+3,0,7),$.fill(),$.fillStyle=l.c,$.beginPath(),$.arc(o.x,o.y,c,0,7),$.fill(),At===a.id&&($.strokeStyle="#fff3d0",$.lineWidth=3,$.beginPath(),$.arc(o.x,o.y,c+7,0,7),$.stroke()),$.font=`${c}px serif`,$.textAlign="center",$.textBaseline="middle",$.fillText(Qt[a.kind].i,o.x,o.y+1),$.font="bold 12px Alegreya,serif",$.fillStyle="#241c14",$.fillText(a.n,o.x,o.y+c+14),$.font="10px PT Sans",$.fillStyle="#5a4830",$.fillText(`${Math.round(a.pop)}👥 ${a.gar}🛡️`,o.x,o.y+c+26),(a.project||a.upgrade)&&($.fillStyle="#6f9450",$.fillRect(o.x-16,o.y+c+30,32,4))}),k.armies.forEach(a=>{const o=Yt(a.x,a.y),l=a.kind==="bandit"?"#6b5a4a":tt[a.lord].c;if(a.tx!=null){const c=Yt(a.tx,a.ty);$.strokeStyle=l,$.globalAlpha=.4,$.lineWidth=1.5,$.setLineDash([3,3]),$.beginPath(),$.moveTo(o.x,o.y),$.lineTo(c.x,c.y),$.stroke(),$.setLineDash([]),$.globalAlpha=1}$.fillStyle="#241c14",$.beginPath(),$.arc(o.x,o.y,11,0,7),$.fill(),$.fillStyle=l,$.beginPath(),$.arc(o.x,o.y,8.5,0,7),$.fill(),$.font="10px serif",$.fillStyle="#241c14",$.fillText(a.kind==="bandit"?"🗡️":"⚔️",o.x,o.y+1),$.font="bold 9px PT Sans",$.fillText(a.size,o.x,o.y+18)});const r=k.player,s=Yt(r.x,r.y);if(r.tx!=null){const a=Yt(r.tx,r.ty);$.strokeStyle="#c9a227",$.lineWidth=2,$.setLineDash([5,4]),$.beginPath(),$.moveTo(s.x,s.y),$.lineTo(a.x,a.y),$.stroke(),$.setLineDash([])}$.fillStyle="#241c14",$.beginPath(),$.arc(s.x,s.y,13,0,7),$.fill(),$.fillStyle="#c9a227",$.beginPath(),$.arc(s.x,s.y,10,0,7),$.fill(),$.font="13px serif",$.fillStyle="#241c14",$.fillText("🦅",s.x,s.y+1),$.restore(),$.restore(),$.font="italic 11px Alegreya,serif",$.fillStyle="rgba(90,70,45,.65)",$.textAlign="left",$.fillText(`День ${k.day} · ${Ea(k.day).i} ${Ea(k.day).n} · отряд ${Wn(k)} · zoom ${Ft.toFixed(1)}×`,12,e-12),$.textAlign="right",$.fillText("Колесо — зум · ПКМ тащить · ЛКМ — идти/выбрать",n-12,e-12),$.textAlign="left"}function _i(){var c;let n='<div class="speed" id="spd"><button data-s="0">❚❚</button><button data-s="1">▶</button><button data-s="2">▶▶</button><button data-s="4">▶▶▶</button></div>';if(n+=`<div class="card"><div class="ct">🦅 Ваш отряд</div><div class="cd">${Wn(k)} бойцов · сила ${Math.round(Sl(k))} · дух ${Math.round(k.player.morale)}</div>
 <div class="cd">🪙${k.player.gold} · 🌾${Math.round(k.player.food)} · 🏵️${k.player.renown}</div></div>`,n+=`<div class="card"><div class="ct">💾 Сохранение</div>
 <div class="cb"><button class="btn sm" id="mSave">Сохранить</button><button class="btn sm" id="mLoad">Загрузить</button></div></div>`,n+=`<div class="card"><div class="ct">🗺️ Навигация</div>
 <div class="cb"><button class="btn sm" id="mCenter">🦅 К отряду</button><button class="btn sm" id="mReset">Сброс зума</button></div></div>`,At&&k.settlements[At]){const d=k.settlements[At],u=d.lord==="you";n+=`<div class="card"><div class="ct"><span>${Qt[d.kind].i} ${d.n}</span></div>
  <div class="cd">${Qt[d.kind].n} · ${((c=tt[d.lord])==null?void 0:c.full)||"—"}</div>
  <div class="row"><span>Люд</span><b>${Math.round(d.pop)}</b></div>
  <div class="row"><span>Достаток</span><b>${Math.round(d.pros)}</b></div>
  <div class="row"><span>Гарнизон</span><b>${d.gar}</b></div>
  <div class="row"><span>Оборона</span><b>${Br(d)}</b></div>
  <button class="btn gold" id="mEnter">${u?"Войти":"Войти (чужое)"}</button>
  ${u?"":`<button class="btn red" id="mSiege" ${Math.hypot(d.x-k.player.x,d.y-k.player.y)>.09?"disabled":""}>⚔️ Осадить (сила ${Math.round(Sl(k))})${Math.hypot(d.x-k.player.x,d.y-k.player.y)>.09?" — подойдите ближе":""}</button>`}</div>`}else if(At&&At.army){const d=At.army;n+=`<div class="card"><div class="ct">${d.kind==="bandit"?"🗡️ Разбойники":tt[d.lord].full}</div>
  <div class="cd">${d.size} человек · сила ${To(d)} · дух ${Math.round(d.mor)}</div>
  <button class="btn red" id="mFight">⚔️ Атаковать</button></div>`}else if(At&&At.site){const d=At.site;n+=`<div class="card"><div class="ct">📍 ${d.n}</div><div class="cd">Пустое место. Можно основать деревню.</div>
  <button class="btn gold" id="mFound">Основать (420🪙 + 44🪵 + 26🪨)</button></div>`}n+=`<div class="lbl">Хроника</div><div id="log">${k.log.slice(0,22).map(d=>`<div style="color:${d.c}"><span>д.${d.d}</span>${d.t}</div>`).join("")}</div>`,se("mapSide").innerHTML=n,se("spd").querySelectorAll("button").forEach(d=>{d.classList.toggle("on",+d.dataset.s===k.speed),d.onclick=()=>{k.speed=+d.dataset.s,st("ui"),_i()}});const e=se("mSave");e&&(e.onclick=()=>{Ro(k)?(xt("Игра сохранена"),st("coin")):xt("Ошибка сохранения")});const t=se("mLoad");t&&(t.onclick=()=>{const d=hu();d?(k=mu(d),xt("Игра загружена"),st("ui"),Hn(),_i()):xt("Нет сохранения")});const i=se("mEnter");i&&(i.onclick=()=>{const d=k.settlements[At];if(Math.hypot(d.x-k.player.x,d.y-k.player.y)>.09){k.player.tx=d.x,k.player.ty=d.y,xt("Идём к "+d.n),_i();return}zs(d.id)});const r=se("mSiege");r&&(r.onclick=()=>{const d=k.settlements[At];a_(d)});const s=se("mFight");s&&(s.onclick=()=>Gd(At.army));const a=se("mFound");a&&(a.onclick=()=>{const d=Nc(k,At.site.id,k.player.gold);d?xt(d):(k.player.gold-=420,st("build"),At=null),Hn(),_i()});const o=se("mCenter");o&&(o.onclick=()=>{ur=!0,st("ui"),Hn()});const l=se("mReset");l&&(l.onclick=()=>{Ft=1,ur=!0,st("ui"),Hn()})}an.addEventListener("wheel",n=>{n.preventDefault();const e=n.deltaY<0?1.15:.87;Bi();const t=an.getBoundingClientRect(),i=n.clientX-t.left,r=n.clientY-t.top,s=Eo(i,r);Ft=Dn(Ft*e,.6,6),ur=!1;const a=Eo(i,r);Ut.x+=s.x-a.x,Ut.y+=s.y-a.y,sl(),Hn()},{passive:!1});an.addEventListener("contextmenu",n=>n.preventDefault());an.addEventListener("pointerdown",n=>{n.button===2&&(tl=!0,ur=!1,ji={x:n.clientX,y:n.clientY,px:Ut.x,py:Ut.y})});addEventListener("pointerup",()=>{tl=!1});an.addEventListener("pointermove",n=>{if(tl&&ji){an.getBoundingClientRect();const e=Bi();Ut.x=ji.px-(n.clientX-ji.x)/(Ft*e),Ut.y=ji.py-(n.clientY-ji.y)/(Ft*e),sl(),Hn()}});an.onclick=n=>{if(n.button!==0)return;const e=an.getBoundingClientRect(),t=n.clientX-e.left,i=n.clientY-e.top,r=Eo(t,i),s=r.x,a=r.y;let o=null,l=1e9;Object.values(k.settlements).forEach(c=>{const d=Math.hypot(c.x-s,c.y-a);d<.045/Ft&&d<l&&(l=d,o=c.id)}),k.armies.forEach(c=>{const d=Math.hypot(c.x-s,c.y-a);d<.035/Ft&&d<l&&(l=d,o={army:c})}),k.sites.forEach(c=>{const d=Math.hypot(c.x-s,c.y-a);d<.035/Ft&&d<l&&(l=d,o={site:c})}),o?(At=o,st("ui")):(k.player.tx=Dn(s,.03,.97),k.player.ty=Dn(a,.03,.97),At=null),Hn(),_i()};function kd(n,e){const t={};let i=n;if(e){const r=["levy","spearman","archer","serjeant","scout","rider","knight"],s=[3,3,2,2,1,1,.5];for(;i>0;){const a=Math.random();let o=0,l="levy";for(let c=0;c<r.length;c++)if(o+=s[c]/s.reduce((d,u)=>d+u,0),a<o){l=r[c];break}t[l]=(t[l]||0)+1,i--}}else{const r=["brigand","brigand","raider","bandit_archer","bandit_rider"];for(;i>0;){const s=r[Math.floor(Math.random()*r.length)];t[s]=(t[s]||0)+1,i--}}return t}function Gd(n){On=n,_t="battle",Oi();const e={...k.player.troops};Object.keys(e).length||(e.levy=1);const t=kd(Dn(n.size,3,26),n.kind!=="bandit");Dd(k.player.morale),se("bHud").classList.add("on"),se("bOrd").textContent="В атаку";const i=se("bForm");i&&(i.textContent=bo[Is].n),se("place").querySelector(".n").textContent="Сеча в поле",se("place").querySelector(".s").textContent=(n.kind==="bandit"?"Разбойники":tt[n.lord].n)+" · "+n.size+" чел.",Pd(e,t,n.kind==="bandit",k.player.hp),st("horn")}function a_(n){On={siege:n,id:-1,kind:"lord",lord:n.lord,size:n.gar,mor:80},_t="battle",Oi();const e={...k.player.troops};Object.keys(e).length||(e.levy=1);const t=kd(Dn(n.gar,4,26),!0);Dd(k.player.morale),se("bHud").classList.add("on"),se("place").querySelector(".n").textContent="Осада "+n.n,se("place").querySelector(".s").textContent="Гарнизон "+n.gar+" · оборона "+Br(n),Pd(e,t,!1,k.player.hp),st("horn")}function o_(n,e){se("bHud").classList.remove("on");const t=se("bmsg");t.querySelector(".m1").textContent=n?"Поле за вами":"Отряд отступил",t.querySelector(".m1").style.color=n?"#c9a227":"#e07a68",t.querySelector(".m2").textContent=n?"Неприятель бежал, добыча ваша":"Вы выжили, но войско поредело",t.classList.add("on"),setTimeout(()=>{var i;if(t.classList.remove("on"),k.player.hp=Dn(X0(),20,100),On&&On.siege){const r=On.siege;for(const s in e)k.player.troops[s]=Math.max(0,(k.player.troops[s]||0)-e[s]);if(Object.keys(k.player.troops).forEach(s=>{k.player.troops[s]||delete k.player.troops[s]}),n){const s=r.lord;r.lord="you",r.gar=Math.max(2,Math.round(Wn(k)*.3)),r.unrest=.5,k.player.renown+=14,k.player.gold+=200,mt(k,`🏴 ${r.n} взят! ${((i=tt[s])==null?void 0:i.n)||"—"} изгнан`,"#c9a227")}else k.player.morale=Dn(k.player.morale-12,0,100),mt(k,`🛡️ Осада ${r.n} отбита`,"#e07a68");On=null,zs(n?r.id:"keep")}else On&&(du(k,On,n,e),On=null,_t="map",se("ovMap").classList.remove("hide"),At=null,Hn(),_i());Hd()},3e3)}function Hd(){const n=k.player,e=j0();if(se("hpF").style.width=Dn(e.hp/e.max*100,0,100)+"%",se("hpT").textContent=Math.max(0,Math.round(e.hp)),se("morF").style.width=n.morale+"%",se("morT").textContent=Math.round(n.morale),se("hGold").textContent=n.gold,se("hParty").textContent=Wn(k),se("hFood").textContent=Math.round(n.food),se("hRen").textContent=n.renown,se("hDay").textContent=k.day,_t==="battle"){const t=Id();se("bAl").textContent=t.ally+" + вы",se("bEn").textContent=t.enemy}}se("bMap").onclick=()=>{_t!=="battle"&&(se("ovMap").classList.contains("hide")?nl():(Oi(),_t="scene"))};se("bParty").onclick=()=>{_t!=="battle"&&il()};se("bRealm").onclick=()=>{_t!=="battle"&&rl()};se("bSnd").onclick=()=>{Tr=!Tr,se("bSnd").textContent=Tr?"🔇":"",se("bSnd").classList.toggle("on",!Tr)};se("bHelp").onclick=()=>se("ovHelp").classList.remove("hide");var wc;(wc=se("bSave"))==null||wc.addEventListener("click",()=>{Ro(k)?(xt("Игра сохранена"),st("coin")):xt("Ошибка сохранения")});se("hpClose").onclick=()=>se("ovHelp").classList.add("hide");se("dgClose").onclick=()=>se("ovDialog").classList.add("hide");se("ptClose").onclick=()=>se("ovParty").classList.add("hide");se("rlClose").onclick=()=>se("ovRealm").classList.add("hide");se("mpClose").onclick=()=>{Oi(),_t="scene"};addEventListener("keydown",n=>{if(!n.repeat&&(n.code==="KeyM"&&_t!=="battle"&&(se("ovMap").classList.contains("hide")?nl():(Oi(),_t="scene")),n.code==="KeyP"&&_t!=="battle"&&il(),n.code==="KeyR"&&_t!=="battle"&&rl(),n.code==="KeyH"&&se("ovHelp").classList.remove("hide"),n.code==="KeyF5"&&(n.preventDefault(),Ro(k)&&(xt("Игра сохранена"),st("coin"))),n.code==="Escape")){const e=["ovDialog","ovParty","ovRealm","ovMap","ovHelp"].find(t=>!se(t).classList.contains("hide"));e&&(se(e).classList.add("hide"),e==="ovMap"&&(_t="scene"))}});addEventListener("blur",()=>{_t==="map"&&(k.speed=0)});let ya=0;function Vd(n){requestAnimationFrame(Vd);const e=Math.min((n-Ac)/1e3,.05);Ac=n;const t=["ovDialog","ovParty","ovRealm","ovHelp"].some(i=>!se(i).classList.contains("hide"));if(_t==="map"&&!t){for(Sa+=e*k.speed;Sa>=.06;){Sa-=.06;const i=ou(k,.06);if(i&&i.type==="army"){k.speed=0,Gd(i.army);break}Math.random()<.06&&au(k)}_t==="map"&&(Hn(),ya+=e,ya>.3&&(ya=0,_i()))}if(Tc(!t||_t==="battle"?e:0,n/1e3,er[k.player.weapon],tr[k.player.armor].arm),_t==="scene"){const i=Nd();se("prompt").classList.toggle("on",!!i),i&&(se("promptT").textContent=i.label)}else se("prompt").classList.remove("on");Hd()}requestAnimationFrame(Vd);
