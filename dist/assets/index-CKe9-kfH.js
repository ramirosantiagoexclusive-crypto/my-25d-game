(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const Cn={grain:{n:"Зерно",i:"🌾",p:8},timber:{n:"Брус",i:"🪵",p:14},stone:{n:"Камень",i:"🪨",p:16},iron:{n:"Железо",i:"⛓️",p:34},cloth:{n:"Сукно",i:"🧵",p:40},tools:{n:"Инструмент",i:"🔨",p:62},wine:{n:"Вино",i:"🍷",p:70}},Dn={peasant:{n:"Крестьянин",t:1,hp:44,atk:9,arm:2,spd:3.2,wage:1,cost:24,up:"levy",uc:40,col:9071172,branch:"inf"},levy:{n:"Ополченец",t:2,hp:58,atk:13,arm:6,spd:3.2,wage:2,cost:0,up:"spearman",uc:90,col:8032082,branch:"inf"},hunter:{n:"Ловчий",t:2,hp:50,atk:12,arm:4,spd:3.4,wage:2,cost:0,up:"archer",uc:90,ranged:!0,col:6262602,branch:"arch"},spearman:{n:"Копейщик",t:3,hp:76,atk:17,arm:12,spd:3,wage:4,cost:0,up:"serjeant",uc:180,col:7173248,branch:"inf"},archer:{n:"Лучник",t:3,hp:60,atk:16,arm:7,spd:3.1,wage:4,cost:0,up:"crossbow",uc:180,ranged:!0,col:5209951,branch:"arch"},serjeant:{n:"Сержант",t:4,hp:98,atk:23,arm:20,spd:3,wage:7,cost:0,up:"knight",uc:340,col:9410211,branch:"inf"},crossbow:{n:"Арбалетчик",t:4,hp:74,atk:24,arm:12,spd:2.9,wage:7,cost:0,ranged:!0,col:5926783,branch:"arch"},knight:{n:"Рыцарь",t:5,hp:135,atk:32,arm:32,spd:3.3,wage:12,cost:0,col:12172484,branch:"cav"},scout:{n:"Разведчик",t:2,hp:52,atk:11,arm:5,spd:4.2,wage:3,cost:0,up:"rider",uc:120,col:10123850,branch:"cav"},rider:{n:"Всадник",t:3,hp:82,atk:18,arm:10,spd:4,wage:6,cost:0,up:"knight",uc:280,col:9071162,branch:"cav"},brigand:{n:"Разбойник",t:2,hp:54,atk:14,arm:5,spd:3.5,wage:0,cost:0,col:7035466,branch:"inf"},raider:{n:"Головорез",t:3,hp:72,atk:19,arm:10,spd:3.4,wage:0,cost:0,col:5917242,branch:"inf"},bandit_archer:{n:"Стрелок-разбойник",t:2,hp:48,atk:13,arm:4,spd:3.3,wage:0,cost:0,ranged:!0,col:5917242,branch:"arch"},bandit_rider:{n:"Налётчик",t:3,hp:70,atk:16,arm:8,spd:3.8,wage:0,cost:0,col:4864554,branch:"cav"}},wn={farm:{n:"Поля",i:"🌾",max:4,d:4,c:{gold:120,timber:14},out:{grain:5},dsc:"Кормит округу и растит люд"},lumber:{n:"Лесопилка",i:"🪓",max:3,d:4,c:{gold:140,timber:10,stone:4},out:{timber:3},dsc:"Брус для строек"},quarry:{n:"Каменоломня",i:"⛏️",max:3,d:5,c:{gold:160,timber:16},out:{stone:3},dsc:"Камень для стен"},mine:{n:"Рудник",i:"⚒️",max:2,d:6,c:{gold:220,timber:20,stone:12},out:{iron:2},dsc:"Железо для оружия"},workshop:{n:"Мастерская",i:"🔨",max:2,d:6,c:{gold:260,timber:18,stone:10,iron:6},out:{tools:1,cloth:1},dsc:"Инструмент и сукно"},market:{n:"Торг",i:"⚖️",max:2,d:5,c:{gold:200,timber:14,stone:8},tax:26,dsc:"Пошлины в казну"},tavern:{n:"Корчма",i:"🍺",max:1,d:4,c:{gold:150,timber:16},mor:6,rec:2,dsc:"Наёмники и дух войска"},smithy:{n:"Кузня",i:"🔥",max:1,d:5,c:{gold:230,stone:14,iron:8},arm:4,dsc:"Лучшее снаряжение гарнизона"},barracks:{n:"Казармы",i:"🛡️",max:3,d:6,c:{gold:280,timber:22,stone:16,iron:6},gar:3,rec:3,dsc:"Гарнизон и выучка"},stables:{n:"Конюшня",i:"🐎",max:2,d:6,c:{gold:320,timber:24,stone:10,iron:4},rec:2,cav:1,dsc:"Разводит коней для кавалерии"},church:{n:"Часовня",i:"⛪",max:1,d:6,c:{gold:240,timber:12,stone:26},pros:.4,mor:5,dsc:"Покой и рост округи"},walls:{n:"Стены",i:"🧱",max:3,d:8,c:{gold:340,stone:34,timber:14},def:22,dsc:"Крепость при осаде"},tower:{n:"Башни",i:"🗼",max:3,d:7,c:{gold:300,stone:28,iron:6},def:16,dsc:"Стрелки на стенах"},keep:{n:"Донжон",i:"🏯",max:1,d:12,c:{gold:620,stone:52,tools:10},def:40,pros:.6,dsc:"Сердце замка"}},jt={village:{n:"Деревня",i:"🏘️",slots:7,up:"town",uc:{gold:900,timber:70,stone:45,tools:8},ud:14},town:{n:"Город",i:"🏙️",slots:12,up:"castle",uc:{gold:1900,stone:110,timber:60,tools:22},ud:22},castle:{n:"Замок",i:"🏰",slots:11,up:null}},nt={you:{n:"Вы",full:"Род Вороньего Камня",c:"#c9a227",crest:"🦅",aggr:.9,greed:1,skill:1},olgerd:{n:"Ольгерд",full:"Граф Ольгерд Дубравский",c:"#5f8f4a",crest:"🌳",aggr:1.05,greed:1,skill:1.05},radmila:{n:"Радмила",full:"Баронесса Радмила Глинищская",c:"#8fa8c4",crest:"🏺",aggr:.6,greed:1.2,skill:.95},bran:{n:"Бран",full:"Воевода Бран Рудный",c:"#a8382a",crest:"⚔️",aggr:1.5,greed:.85,skill:1.15},clement:{n:"Клемент",full:"Аббат Клемент Заречский",c:"#b9a37a",crest:"⛪",aggr:.45,greed:1,skill:.9},guido:{n:"Гвидо",full:"Купец Гвидо Бродский",c:"#c98f2a",crest:"⚖️",aggr:.85,greed:1.5,skill:1},dragan:{n:"Драган",full:"Бойл Драган Степной",c:"#7a9a5a",crest:"🐎",aggr:1.3,greed:.9,skill:1.1},mila:{n:"Мила",full:"Воевода Мила Речная",c:"#6a8fa8",crest:"🌊",aggr:.7,greed:1.1,skill:1},svein:{n:"Свейн",full:"Ярл Свейн Морской",c:"#5a7a8a",crest:"⚓",aggr:1.4,greed:.8,skill:1.2},rodrik:{n:"Родрик",full:"Барон Родрик Каменский",c:"#9a6a4a",crest:"⛰️",aggr:.8,greed:1.3,skill:.95}},Kd=[{id:"keep",n:"Вороний Камень",kind:"castle",lord:"you",x:.5,y:.52,pop:340,pros:52,gar:14,b:{farm:2,lumber:1,quarry:1,barracks:1,walls:1,tower:1,keep:1}},{id:"lipy",n:"Липовка",kind:"village",lord:"you",x:.36,y:.66,pop:150,pros:40,gar:4,b:{farm:2,lumber:1}},{id:"dubrava",n:"Дубравы",kind:"town",lord:"olgerd",x:.2,y:.26,pop:520,pros:56,gar:20,b:{farm:2,lumber:2,market:1,workshop:1,walls:1,barracks:1}},{id:"sosnovka",n:"Сосновка",kind:"village",lord:"olgerd",x:.28,y:.14,pop:130,pros:36,gar:3,b:{farm:1,lumber:2}},{id:"glinishi",n:"Глинищи",kind:"town",lord:"radmila",x:.8,y:.28,pop:560,pros:60,gar:18,b:{farm:2,quarry:2,market:1,church:1,walls:1}},{id:"krutye",n:"Крутые Глины",kind:"village",lord:"radmila",x:.72,y:.16,pop:140,pros:38,gar:3,b:{farm:1,quarry:2}},{id:"rudnye",n:"Рудные Холмы",kind:"castle",lord:"bran",x:.85,y:.7,pop:280,pros:44,gar:26,b:{mine:2,quarry:1,barracks:2,walls:2,tower:1,keep:1}},{id:"zhelezny",n:"Железный Ручей",kind:"village",lord:"bran",x:.9,y:.82,pop:120,pros:35,gar:3,b:{mine:1,farm:1}},{id:"zarechye",n:"Заречье",kind:"town",lord:"clement",x:.48,y:.88,pop:600,pros:64,gar:14,b:{farm:3,church:1,market:1,tavern:1,walls:1}},{id:"tishina",n:"Тихая Заимка",kind:"village",lord:"clement",x:.42,y:.94,pop:110,pros:38,gar:2,b:{farm:2}},{id:"brod",n:"Каменный Брод",kind:"town",lord:"guido",x:.14,y:.7,pop:480,pros:58,gar:16,b:{farm:1,market:2,workshop:1,tavern:1,walls:1}},{id:"vereya",n:"Верея",kind:"village",lord:"guido",x:.06,y:.6,pop:100,pros:42,gar:2,b:{market:1,farm:1}},{id:"stepnoy",n:"Степной Острог",kind:"town",lord:"dragan",x:.62,y:.18,pop:440,pros:50,gar:18,b:{farm:2,stables:1,barracks:1,market:1,walls:1}},{id:"kurgan",n:"Курган",kind:"village",lord:"dragan",x:.7,y:.1,pop:120,pros:34,gar:3,b:{farm:1,stables:1}},{id:"rechnoy",n:"Речной Причал",kind:"town",lord:"mila",x:.34,y:.4,pop:460,pros:55,gar:16,b:{farm:2,market:1,tavern:1,walls:1,workshop:1}},{id:"ostrov",n:"Островок",kind:"village",lord:"mila",x:.28,y:.36,pop:110,pros:40,gar:3,b:{farm:1,lumber:1}},{id:"morskoy",n:"Морской Яр",kind:"castle",lord:"svein",x:.06,y:.16,pop:300,pros:48,gar:24,b:{farm:1,market:1,barracks:2,walls:2,tower:1,keep:1,stables:1}},{id:"fjord",n:"Фьорд",kind:"village",lord:"svein",x:.1,y:.06,pop:100,pros:32,gar:3,b:{farm:1,lumber:1}},{id:"kamenny",n:"Каменный Утёс",kind:"castle",lord:"rodrik",x:.92,y:.42,pop:310,pros:46,gar:22,b:{quarry:2,mine:1,barracks:2,walls:2,tower:1,keep:1}},{id:"utes",n:"Утёс",kind:"village",lord:"rodrik",x:.96,y:.52,pop:110,pros:36,gar:3,b:{quarry:1,farm:1}}],Rc=[{id:"site1",n:"Пустой Брод",x:.66,y:.44},{id:"site2",n:"Волчий Лог",x:.24,y:.46},{id:"site3",n:"Каменная Гряда",x:.68,y:.86},{id:"site4",n:"Тихая Роща",x:.4,y:.2},{id:"site5",n:"Северный Перевал",x:.58,y:.82}],Zd=[["keep","lipy"],["keep","dubrava"],["keep","glinishi"],["keep","rudnye"],["keep","zarechye"],["keep","brod"],["keep","rechnoy"],["dubrava","sosnovka"],["glinishi","krutye"],["brod","lipy"],["zarechye","rudnye"],["dubrava","brod"],["stepnoy","dubrava"],["stepnoy","glinishi"],["rechnoy","ostrov"],["morskoy","fjord"],["morskoy","brod"],["kamenny","rudnye"],["kamenny","zhelezny"],["zarechye","tishina"],["brod","vereya"],["stepnoy","kurgan"],["rechnoy","keep"],["zarechye","rechnoy"],["rudnye","zhelezny"]],er=[{n:"Дубина",atk:4,reach:2.1,spd:.46,c:0},{n:"Меч",atk:11,reach:2.4,spd:.38,c:180},{n:"Боевой топор",atk:17,reach:2.3,spd:.48,c:420},{n:"Полуторный меч",atk:24,reach:2.7,spd:.36,c:820},{n:"Клеймор лорда",atk:33,reach:2.9,spd:.4,c:1600}],tr=[{n:"Рубаха",arm:3,c:0},{n:"Стёганка",arm:9,c:160},{n:"Кольчуга",arm:18,c:460},{n:"Бригантина",arm:28,c:980},{n:"Латный доспех",arm:40,c:1900}],Jd=[{n:"Весна",i:"🌱",f:1.1},{n:"Лето",i:"☀️",f:1.25},{n:"Осень",i:"🍂",f:1.3},{n:"Зима",i:"❄️",f:.4}],Eo={line:{n:"Линия",i:"─",desc:"Войско в ряд"},shieldwall:{n:"Щитовая стена",i:"🛡️",desc:"Плотный строй, медленно"},loose:{n:"Рассыпь",i:"╳",desc:"Свободный строй против стрел"},square:{n:"Каре",i:"⬜",desc:"Защита от конницы со всех сторон"},wedge:{n:"Клин",i:"▲",desc:"Прорыв в центр врага"}},en=(n,e,t)=>Math.max(e,Math.min(t,n)),Ln=(n,e)=>n+Math.floor(Math.random()*(e-n+1)),Cc="voroniy_kamen_save",Pc=2,ya=n=>Jd[Math.floor(n%120/30)];function Qd(){const n={day:1,speed:1,mode:"scene",settlements:{},sites:Rc.map(e=>({...e})),armies:[],log:[],nid:1,player:{x:.5,y:.52,tx:null,ty:null,gold:600,food:60,renown:12,honor:10,hp:100,maxHp:100,morale:72,troops:{levy:6,hunter:3},weapon:1,armor:1,xp:0,lvl:1,prisoners:0,days:0},wars:{},battle:null,result:null};Kd.forEach(e=>{n.settlements[e.id]={...e,b:{...e.b},stock:{grain:70,timber:40,stone:30,iron:12,cloth:8,tools:6,wine:4},project:null,upgrade:null,recruits:Ln(4,9),tax:"mid",unrest:.1}}),Object.keys(nt).forEach(e=>{if(e==="you")return;const t=Object.keys(n.settlements).filter(r=>n.settlements[r].lord===e);t.length&&n.armies.push(jd(n,e,Ln(14,26),t[0]))});for(let e=0;e<4;e++)Lc(n);return gt(n,"🦅 Вы приняли Вороний Камень. Ворота открыты — земли ждут.","#c9a227"),n}function jd(n,e,t,r){const s=n.settlements[r]||{x:.5,y:.5};return{id:n.nid++,lord:e,x:s.x,y:s.y,tx:null,ty:null,size:t,mor:70,kind:"lord",target:null,raid:!1,cd:0,order:"advance"}}function Lc(n){const e=Math.random()*6.283,t=.3+Math.random()*.16;n.armies.push({id:n.nid++,lord:"bandit",x:en(.5+Math.cos(e)*t,.06,.94),y:en(.5+Math.sin(e)*t,.06,.94),tx:null,ty:null,size:Ln(6,16),mor:60,kind:"bandit",target:null,raid:!0,cd:0,order:"charge"})}function gt(n,e,t){n.log.unshift({d:n.day,t:e,c:t||"#d8c9a6"}),n.log.length>70&&n.log.pop()}const Xn=n=>Object.values(n.player.troops).reduce((e,t)=>e+t,0),Ml=n=>Object.entries(n.player.troops).reduce((e,[t,r])=>e+r*(Dn[t].atk+Dn[t].arm*.6),0),Dc=n=>Object.entries(n.player.troops).reduce((e,[t,r])=>e+r*Dn[t].wage,0),Br=n=>Math.round(n.gar*13+n.b.walls*22+n.b.tower*16+n.b.keep*40+n.pop*.05),bo=n=>Math.round(n.size*(n.kind==="bandit"?11:15)*(n.mor/80+.5)),To=n=>jt[n.kind].slots,Ao=n=>Object.values(n.b).reduce((e,t)=>e+t,0);function Ic(n,e){const t=wn[e];if((n.b[e]||0)>=t.max)return"Предел";if(Ao(n)>=To(n))return"Нет места";if(n.project)return"Стройка идёт";for(const r in t.c){const s=r==="gold"?null:n.stock[r];if(r!=="gold"&&s<t.c[r])return"Мало "+Cn[r].n}return null}function eu(n,e,t,r){const s=n.settlements[e],a=Ic(s,t);if(a)return a;const o=wn[t];if(r<o.c.gold)return"Мало монет";for(const l in o.c)l!=="gold"&&(s.stock[l]-=o.c[l]);return s.project={k:t,left:o.d,total:o.d},gt(n,`🔨 ${s.n}: заложено — ${o.n}`,"#8fc46a"),null}function tu(n,e,t){const r=n.settlements[e],s=jt[r.kind];if(!s.up)return"Предел";if(r.upgrade)return"Уже строится";if(t<s.uc.gold)return"Мало монет";for(const a in s.uc)if(a!=="gold"&&r.stock[a]<s.uc[a])return"Мало "+Cn[a].n;for(const a in s.uc)a!=="gold"&&(r.stock[a]-=s.uc[a]);return r.upgrade={to:s.up,left:s.ud,total:s.ud},gt(n,`🏗️ ${r.n} перестраивается в ${jt[s.up].n.toLowerCase()}`,"#c9a227"),null}function Nc(n,e,t){const r=n.sites.findIndex(c=>c.id===e);if(r<0)return"Нет места";const s={gold:420,timber:44,stone:26};if(t<s.gold)return"Нужно 420 монет";const a=n.settlements.keep;if(a.stock.timber<s.timber||a.stock.stone<s.stone)return"Мало бруса и камня в столице";a.stock.timber-=s.timber,a.stock.stone-=s.stone;const o=n.sites[r],l="f"+n.nid++;return n.settlements[l]={id:l,n:o.n,kind:"village",lord:"you",x:o.x,y:o.y,pop:90,pros:30,gar:3,b:{farm:1,lumber:1},stock:{grain:40,timber:20,stone:10,iron:2,cloth:0,tools:0,wine:0},project:null,upgrade:null,recruits:5,tax:"mid",unrest:.05},n.sites.splice(r,1),gt(n,`🏘️ Основана ${o.n}! Люди идут на новое место`,"#c9a227"),null}function nu(n,e){const t=ya(n.day),r=nt[e.lord]||nt.you;let s={grain:0,timber:0,stone:0,iron:0,cloth:0,tools:0,wine:0},a=0,o=0;for(const c in e.b){const d=wn[c],u=e.b[c];if(u){if(d.out)for(const f in d.out)s[f]+=d.out[f]*u;d.tax&&(a+=d.tax*u),d.pros&&(o+=d.pros*u)}}s.grain=Math.round(s.grain*t.f*(e.pop/300+.5));for(const c in s)e.stock[c]=Math.min(400,e.stock[c]+s[c]);const l=Math.round(e.pop*.05+e.gar*.12);if(e.stock.grain>=l?(e.stock.grain-=l,e.pop+=Math.max(1,Math.round(e.pop*.006*(1+o*.1)*r.greed)),e.unrest=en(e.unrest-.01,0,1)):(e.stock.grain=0,e.pop=Math.max(40,e.pop-Math.round(e.pop*.01)),e.unrest=en(e.unrest+.03,0,1)),e.pros=en(e.pros+(o*.2+(e.b.market?.4:0)-e.unrest*.6),8,100),a=Math.round(a+e.pop*.09*(e.tax==="high"?1.6:e.tax==="low"?.6:1)*(e.pros/60)),e.unrest=en(e.unrest+(e.tax==="high"?.02:e.tax==="low"?-.015:0)-(e.b.church?.02:0),0,1),e.income=a,e.recruits=Math.min(14,e.recruits+(e.b.tavern?2:1)+(e.b.barracks||0)),e.gar=Math.min(Math.round(e.pop*.09)+(e.b.barracks||0)*3,e.gar+(Math.random()<.35?1:0)),e.project&&(e.project.left--,e.project.left<=0)){const c=e.project.k;e.b[c]=(e.b[c]||0)+1,e.project=null,e.lord==="you"&&gt(n,`✅ ${e.n}: возведено — ${wn[c].n}`,"#8fc46a")}e.upgrade&&(e.upgrade.left--,e.upgrade.left<=0&&(e.kind=e.upgrade.to,e.upgrade=null,gt(n,`🏰 ${e.n} теперь ${jt[e.kind].n.toLowerCase()}!`,e.lord==="you"?"#c9a227":"#e07a68"))),e.unrest>.8&&Math.random()<.08&&(e.pop=Math.round(e.pop*.9),e.gar=Math.max(0,e.gar-3),e.unrest=.4,gt(n,`🔥 ${e.n}: бунт! Гарнизон разбежался`,"#e07a68"))}function Uc(n,e,t,r){const s=e-n.x,a=t-n.y,o=Math.hypot(s,a);return o<=r?(n.x=e,n.y=t,!0):(n.x+=s/o*r,n.y+=a/o*r,!1)}function iu(n,e){if(e.cd>0){e.cd--;return}const t=Object.values(n.settlements).filter(a=>a.lord!==e.lord&&(e.kind==="bandit"||n.wars[e.lord+"|"+a.lord]));if(e.kind==="bandit"||Math.random()<.5){const a=t.sort((o,l)=>Math.hypot(o.x-e.x,o.y-e.y)-Math.hypot(l.x-e.x,l.y-e.y))[0];if(a){e.tx=a.x,e.ty=a.y,e.target=a.id,e.raid=e.kind==="bandit"||Math.random()<.55;return}}const r=Object.values(n.settlements).filter(a=>a.lord===e.lord),s=r[Ln(0,r.length-1)]||{x:.5,y:.5};e.tx=s.x+(Math.random()-.5)*.12,e.ty=s.y+(Math.random()-.5)*.12,e.target=null}function ru(n,e,t){if(bo(e)>Br(t)*(.8+Math.random()*.5)){const s=Math.round(t.pop*.06);t.pop=Math.max(40,t.pop-s),t.pros=en(t.pros-8,8,100);for(const o in t.stock)t.stock[o]=Math.round(t.stock[o]*.72);const a=Object.keys(t.b).filter(o=>t.b[o]>0&&o!=="walls"&&o!=="keep");a.length&&Math.random()<.5&&t.b[a[Ln(0,a.length-1)]]--,e.size=Math.max(3,e.size-Ln(0,2)),t.unrest=en(t.unrest+.14,0,1),gt(n,`🔥 ${e.lord==="bandit"?"Разбойники":nt[e.lord].n} разорили ${t.n}`,"#e07a68")}else e.size=Math.round(e.size*.6),t.gar=Math.max(0,t.gar-Ln(1,3)),gt(n,`🛡️ ${t.n} отбил набег`,"#8fc46a");e.cd=8,e.target=null,e.tx=null}function su(n,e,t){var r;if(bo(e)>Br(t)*1.05){const s=t.lord;t.lord=e.lord,t.gar=Math.max(2,Math.round(e.size*.35)),e.size=Math.round(e.size*.7),t.unrest=.5,t.pros=en(t.pros-10,8,100),gt(n,`🏴 ${t.n} взят! ${((r=nt[s])==null?void 0:r.n)||"—"} изгнан, владеет ${nt[e.lord].n}`,e.lord==="you"?"#c9a227":"#e07a68")}else e.size=Math.round(e.size*.55),t.gar=Math.max(0,t.gar-Math.round(t.gar*.25)),gt(n,`🛡️ ${t.n} выстоял осаду ${nt[e.lord].n}`,"#8fc46a");e.cd=12,e.target=null,e.tx=null}function au(n){n.day++;const e=n.player;for(const a in n.settlements)nu(n,n.settlements[a]);const t=Dc(n),r=Math.max(1,Math.ceil(Xn(n)*.5));if(e.gold-=t,e.food>=r)e.food-=r,e.morale=en(e.morale+1.2,0,100);else if(e.food=0,e.morale=en(e.morale-5,0,100),Math.random()<.3){const a=Object.keys(e.troops).find(o=>e.troops[o]>0);a&&(e.troops[a]--,gt(n,"🌾 Голод: боец покинул отряд","#e07a68"))}if(e.gold<0){e.gold=0,e.morale=en(e.morale-4,0,100);const a=Object.keys(e.troops).find(o=>e.troops[o]>0);a&&Math.random()<.4&&(e.troops[a]--,gt(n,"💸 Жалованья нет — боец ушёл","#c98f2a"))}if(e.morale<25&&Math.random()<.2){const a=Object.keys(e.troops).find(o=>e.troops[o]>0);a&&(e.troops[a]--,gt(n,"🏃 Дезертирство в отряде","#e07a68"))}e.hp=Math.min(e.maxHp,e.hp+3);const s=Object.values(n.settlements).filter(a=>a.lord==="you");if(n.day%5===0){let a=0;s.forEach(o=>a+=o.income||0),a&&(e.gold+=a,gt(n,`🪙 Подати с владений: +${a}`,"#c9a227"))}return n.day%9===0&&Object.keys(nt).forEach(a=>{if(a==="you"||!Object.values(n.settlements).filter(u=>u.lord===a).length)return;const l=Object.keys(nt).filter(u=>u!==a&&u!=="you"),c=l[Ln(0,l.length-1)],d=a+"|"+c;!n.wars[d]&&Math.random()<.3*nt[a].aggr?(n.wars[d]=!0,n.wars[c+"|"+a]=!0,gt(n,`⚔️ ${nt[a].n} объявил войну ${nt[c].n}`,"#e07a68")):n.wars[d]&&Math.random()<.14&&(delete n.wars[d],delete n.wars[c+"|"+a],gt(n,`🕊️ ${nt[a].n} и ${nt[c].n} заключили мир`,"#8fc46a"))}),n.armies.forEach(a=>{(!a.tx||Math.hypot(a.tx-a.x,a.ty-a.y)<.01)&&iu(n,a);const o=a.kind==="bandit"?.028:.022;if(Uc(a,a.tx,a.ty,o),a.mor=en(a.mor+.5,30,95),a.target){const l=n.settlements[a.target];l&&l.lord!==a.lord&&Math.hypot(l.x-a.x,l.y-a.y)<.035&&(a.raid?ru(n,a,l):su(n,a,l))}a.size<4&&a.kind==="bandit"&&(a.dead=!0)}),n.armies=n.armies.filter(a=>!a.dead),n.day%7===0&&n.armies.filter(a=>a.kind==="bandit").length<6&&Lc(n),Object.values(n.settlements).forEach(a=>{if(a.lord!=="you"&&n.day%6===0){const o=n.armies.find(l=>l.lord===a.lord);o&&(o.size=Math.min(60,o.size+Ln(1,3)))}}),null}function ou(n,e){const t=n.player;if(t.tx==null)return null;const r=.055*e;Uc(t,t.tx,t.ty,r)&&(t.tx=null,t.ty=null);for(const s of n.armies)if((s.kind==="bandit"||s.lord!=="you")&&Math.hypot(s.x-t.x,s.y-t.y)<.032)return{type:"army",army:s};return null}function lu(n,e,t){const r=n.settlements[e];t=Math.min(t,r.recruits,Math.max(0,60-Xn(n)));const s=t*(r.kind==="village"?24:r.kind==="town"?38:52);if(n.player.gold<s)return{err:"Мало монет"};n.player.gold-=s,r.recruits-=t;const a=r.kind==="village"?"peasant":r.kind==="town"?"levy":"spearman";return n.player.troops[a]=(n.player.troops[a]||0)+t,gt(n,`👥 ${r.n}: нанято ${t} — ${Dn[a].n}`,"#8fa8c4"),{n:t,cost:s}}function cu(n,e){const t=Dn[e];return t.up?n.player.troops[e]||0?n.player.gold<t.uc?"Мало монет":(n.player.gold-=t.uc,n.player.troops[e]--,n.player.troops[t.up]=(n.player.troops[t.up]||0)+1,null):"Нет бойцов":"Некуда"}function Vs(n,e,t,r,s){const a=n.settlements[e],o=Cn[t].p,l=Math.round(o*(r?1.15:.82)*(1+(a.pros-50)/220));if(r){if(a.stock[t]<s)return"Нет товара";if(n.player.gold<l*s)return"Мало монет";n.player.gold-=l*s,a.stock[t]-=s,n.player.cargo=n.player.cargo||{},n.player.cargo[t]=(n.player.cargo[t]||0)+s}else{const c=n.player.cargo||{};if((c[t]||0)<s)return"Нет груза";c[t]-=s,n.player.gold+=l*s,a.stock[t]+=s}return{price:l}}function du(n,e,t,r){const s=n.player;for(const a in r)s.troops[a]=Math.max(0,(s.troops[a]||0)-(r[a]||0));if(Object.keys(s.troops).forEach(a=>{s.troops[a]||delete s.troops[a]}),t){const a=Ln(60,180)+e.size*6;s.gold+=a,s.renown+=Math.ceil(e.size/3),s.food+=Ln(6,20),s.prisoners+=Math.round(e.size*.25),s.morale=en(s.morale+8,0,100),e.size=Math.round(e.size*.3),e.dead=e.size<4,e.mor=40,e.cd=10,e.tx=null,gt(n,`🏆 Победа! Добыча ${a}🪙, пленных ${Math.round(e.size*.25)}`,"#c9a227")}else s.morale=en(s.morale-14,0,100),s.gold=Math.round(s.gold*.85),e.size=Math.round(e.size*.8),gt(n,"💀 Поражение. Отряд отступил, часть монет потеряна","#e07a68");s.hp=Math.max(20,s.hp)}function uu(n){const e=n.player.prisoners;if(!e)return 0;const t=e*22;return n.player.gold+=t,n.player.prisoners=0,gt(n,`⛓️ Пленные проданы: +${t}🪙`,"#c9a227"),t}const fu=["self","result","battle"];function wo(n){try{const e=JSON.parse(JSON.stringify(n,(t,r)=>fu.includes(t)?void 0:r));return e._sv=Pc,localStorage.setItem(Cc,JSON.stringify(e)),!0}catch{return!1}}function hu(){try{const n=localStorage.getItem(Cc);if(!n)return null;const e=JSON.parse(n);return e._sv?pu(e):null}catch{return null}}function pu(n){if(!n._sv||n._sv<2){if(n.settlements)for(const e in n.settlements){const t=n.settlements[e];t.stock||(t.stock={grain:70,timber:40,stone:30,iron:12,cloth:8,tools:6,wine:4}),t.recruits||(t.recruits=5),t.unrest==null&&(t.unrest=.1),t.tax||(t.tax="mid"),t.project||(t.project=null),t.upgrade||(t.upgrade=null)}if(n.player){const e=n.player;e.cargo||(e.cargo={}),e.prisoners==null&&(e.prisoners=0),e.troops||(e.troops={levy:6,hunter:3}),e.weapon==null&&(e.weapon=1),e.armor==null&&(e.armor=1)}n.armies||(n.armies=[]),n.wars||(n.wars={}),n.sites||(n.sites=Rc.map(e=>({...e}))),n.log||(n.log=[]),n.nid||(n.nid=1),n._sv=Pc}return n}function mu(n){const e={...n,mode:"scene",battle:null,result:null};return e.settlements||(e.settlements={}),e.sites||(e.sites=[]),e.armies||(e.armies=[]),e.wars||(e.wars={}),e.log||(e.log=[]),e.player||(e.player={x:.5,y:.52,gold:600,food:60,renown:12,honor:10,hp:100,maxHp:100,morale:72,troops:{levy:6,hunter:3},weapon:1,armor:1,prisoners:0}),e.player.tx=null,e.player.ty=null,e}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="187",gu=0,Sl=1,_u=2,ps=1,Fc=2,Er=3,Di=0,an=1,Qt=2,nr=0,Ar=1,Ea=2,yl=3,El=4,xu=5,Qi=100,vu=101,Mu=102,Su=103,yu=104,Eu=200,bu=201,Tu=202,Au=203,Oc=204,Bc=205,wu=206,Ru=207,Cu=208,Pu=209,Lu=210,Du=211,Iu=212,Nu=213,Uu=214,ba=0,Ta=1,Aa=2,Rr=3,wa=4,Ra=5,Ca=6,Pa=7,Co=0,Fu=1,Ou=2,si=0,zc=1,kc=2,Gc=3,Po=4,Hc=5,Vc=6,Wc=7,Xc=300,ar=301,Cr=302,Ws=303,Xs=304,Es=1e3,ii=1001,La=1002,kt=1003,Bu=1004,$r=1005,sn=1006,$s=1007,gi=1008,fn=1009,$c=1010,qc=1011,Pr=1012,Lo=1013,$n=1014,kn=1015,qn=1016,Do=1017,Io=1018,or=1020,Yc=35902,Kc=35899,Zc=1021,Jc=1022,Gn=1023,vi=1026,_i=1027,Qc=1028,No=1029,Ii=1030,Uo=1031,Fo=1033,ms=33776,gs=33777,_s=33778,xs=33779,Da=35840,Ia=35841,Na=35842,Ua=35843,Fa=36196,Oa=37492,Ba=37496,za=37488,ka=37489,bs=37490,Ga=37491,Ha=37808,Va=37809,Wa=37810,Xa=37811,$a=37812,qa=37813,Ya=37814,Ka=37815,Za=37816,Ja=37817,Qa=37818,ja=37819,eo=37820,to=37821,no=36492,io=36494,ro=36495,so=36283,ao=36284,Ts=36285,oo=36286,zu=3200,lo=0,ku=1,mi="",dn="srgb",As="srgb-linear",ws="linear",st="srgb",qs=7680,Gu=519,Hu=512,Vu=513,Wu=514,jc=515,Xu=516,$u=517,ed=518,td=519,qu=35044,bl="300 es",Pn=2e3,Lr=2001;function Yu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ku(){const n=Rs("canvas");return n.style.display="block",n}const Tl={};function Al(...n){const e="THREE."+n.shift();console.log(e,...n)}function nd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Fe(...n){n=nd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function et(...n){n=nd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function vs(...n){const e=n.join(" ");e in Tl||(Tl[e]=!0,Fe(...n))}function Zu(n,e,t){return new Promise(function(r,s){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const Ju={[ba]:ba,[Aa]:Ca,[wa]:wa,[Rr]:Ra,[Ta]:Ta,[Ca]:Aa,[Pa]:Pa,[Ra]:Rr};class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const s=r[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const s=r.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ys=Math.PI/180,co=180/Math.PI;function zr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[r&255]+Wt[r>>8&255]+Wt[r>>16&255]+Wt[r>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Qu(n,e){return(n%e+e)%e}function Ks(n,e,t){return(1-t)*n+t*e}function ju(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Oo(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ef(n,e){if(e.constructor===Float32Array)return n;const t=Oo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function tf(n,e){if(e.constructor===Float32Array)return n;const t=Oo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const sl=class sl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6],this.y=s[1]*t+s[4]*r+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Qe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),s=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*r-o*s+e.x,this.y=a*s+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sl.prototype.isVector2=!0;let $e=sl;class fr{constructor(e=0,t=0,r=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=s}static slerpFlat(e,t,r,s,a,o,l){let c=r[s+0],d=r[s+1],u=r[s+2],f=r[s+3],p=a[o+0],g=a[o+1],_=a[o+2],v=a[o+3];if(f!==v||c!==p||d!==g||u!==_){let m=c*p+d*g+u*_+f*v;m<0&&(p=-p,g=-g,_=-_,v=-v,m=-m);let h=1-l;if(m<.9995){const y=Math.acos(m),w=Math.sin(y);h=Math.sin(h*y)/w,l=Math.sin(l*y)/w,c=c*h+p*l,d=d*h+g*l,u=u*h+_*l,f=f*h+v*l}else{c=c*h+p*l,d=d*h+g*l,u=u*h+_*l,f=f*h+v*l;const y=1/Math.sqrt(c*c+d*d+u*u+f*f);c*=y,d*=y,u*=y,f*=y}}e[t]=c,e[t+1]=d,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,s,a,o){const l=r[s],c=r[s+1],d=r[s+2],u=r[s+3],f=a[o],p=a[o+1],g=a[o+2],_=a[o+3];return e[t]=l*_+u*f+c*g-d*p,e[t+1]=c*_+u*p+d*f-l*g,e[t+2]=d*_+u*g+l*p-c*f,e[t+3]=u*_-l*f-c*p-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,s){return this._x=e,this._y=t,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,s=e._y,a=e._z,o=e._order,l=Math.cos,c=Math.sin,d=l(r/2),u=l(s/2),f=l(a/2),p=c(r/2),g=c(s/2),_=c(a/2);switch(o){case"XYZ":this._x=p*u*f+d*g*_,this._y=d*g*f-p*u*_,this._z=d*u*_+p*g*f,this._w=d*u*f-p*g*_;break;case"YXZ":this._x=p*u*f+d*g*_,this._y=d*g*f-p*u*_,this._z=d*u*_-p*g*f,this._w=d*u*f+p*g*_;break;case"ZXY":this._x=p*u*f-d*g*_,this._y=d*g*f+p*u*_,this._z=d*u*_+p*g*f,this._w=d*u*f-p*g*_;break;case"ZYX":this._x=p*u*f-d*g*_,this._y=d*g*f+p*u*_,this._z=d*u*_-p*g*f,this._w=d*u*f+p*g*_;break;case"YZX":this._x=p*u*f+d*g*_,this._y=d*g*f+p*u*_,this._z=d*u*_-p*g*f,this._w=d*u*f-p*g*_;break;case"XZY":this._x=p*u*f-d*g*_,this._y=d*g*f-p*u*_,this._z=d*u*_+p*g*f,this._w=d*u*f+p*g*_;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,s=Math.sin(r);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],s=t[4],a=t[8],o=t[1],l=t[5],c=t[9],d=t[2],u=t[6],f=t[10],p=r+l+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-c)*g,this._y=(a-d)*g,this._z=(o-s)*g}else if(r>l&&r>f){const g=2*Math.sqrt(1+r-l-f);this._w=(u-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(a+d)/g}else if(l>f){const g=2*Math.sqrt(1+l-r-f);this._w=(a-d)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+f-r-l);this._w=(o-s)/g,this._x=(a+d)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const s=Math.min(1,t/r);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,s=e._y,a=e._z,o=e._w,l=t._x,c=t._y,d=t._z,u=t._w;return this._x=r*u+o*l+s*d-a*c,this._y=s*u+o*c+a*l-r*d,this._z=a*u+o*d+r*c-s*l,this._w=o*u-r*l-s*c-a*d,this._onChangeCallback(),this}slerp(e,t){let r=e._x,s=e._y,a=e._z,o=e._w,l=this.dot(e);l<0&&(r=-r,s=-s,a=-a,o=-o,l=-l);let c=1-t;if(l<.9995){const d=Math.acos(l),u=Math.sin(d);c=Math.sin(c*d)/u,t=Math.sin(t*d)/u,this._x=this._x*c+r*t,this._y=this._y*c+s*t,this._z=this._z*c+a*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+r*t,this._y=this._y*c+s*t,this._z=this._z*c+a*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),s=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const al=class al{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*s,this.y=a[1]*t+a[4]*r+a[7]*s,this.z=a[2]*t+a[5]*r+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,a=e.elements,o=1/(a[3]*t+a[7]*r+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*s+a[12])*o,this.y=(a[1]*t+a[5]*r+a[9]*s+a[13])*o,this.z=(a[2]*t+a[6]*r+a[10]*s+a[14])*o,this}applyQuaternion(e){const t=this.x,r=this.y,s=this.z,a=e.x,o=e.y,l=e.z,c=e.w,d=2*(o*s-l*r),u=2*(l*t-a*s),f=2*(a*r-o*t);return this.x=t+c*d+o*f-l*u,this.y=r+c*u+l*d-a*f,this.z=s+c*f+a*u-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*s,this.y=a[1]*t+a[5]*r+a[9]*s,this.z=a[2]*t+a[6]*r+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,s=e.y,a=e.z,o=t.x,l=t.y,c=t.z;return this.x=s*c-a*l,this.y=a*o-r*c,this.z=r*l-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Zs.copy(this).projectOnVector(e),this.sub(Zs)}reflect(e){return this.sub(Zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Qe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,s=this.z-e.z;return t*t+r*r+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const s=Math.sin(t)*e;return this.x=s*Math.sin(r),this.y=Math.cos(t)*e,this.z=s*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};al.prototype.isVector3=!0;let B=al;const Zs=new B,wl=new fr,ol=class ol{constructor(e,t,r,s,a,o,l,c,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,s,a,o,l,c,d)}set(e,t,r,s,a,o,l,c,d){const u=this.elements;return u[0]=e,u[1]=s,u[2]=l,u[3]=t,u[4]=a,u[5]=c,u[6]=r,u[7]=o,u[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,a=this.elements,o=r[0],l=r[3],c=r[6],d=r[1],u=r[4],f=r[7],p=r[2],g=r[5],_=r[8],v=s[0],m=s[3],h=s[6],y=s[1],w=s[4],b=s[7],R=s[2],A=s[5],x=s[8];return a[0]=o*v+l*y+c*R,a[3]=o*m+l*w+c*A,a[6]=o*h+l*b+c*x,a[1]=d*v+u*y+f*R,a[4]=d*m+u*w+f*A,a[7]=d*h+u*b+f*x,a[2]=p*v+g*y+_*R,a[5]=p*m+g*w+_*A,a[8]=p*h+g*b+_*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],d=e[7],u=e[8];return t*o*u-t*l*d-r*a*u+r*l*c+s*a*d-s*o*c}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],d=e[7],u=e[8],f=u*o-l*d,p=l*c-u*a,g=d*a-o*c,_=t*f+r*p+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(s*d-u*r)*v,e[2]=(l*r-s*o)*v,e[3]=p*v,e[4]=(u*t-s*c)*v,e[5]=(s*a-l*t)*v,e[6]=g*v,e[7]=(r*c-d*t)*v,e[8]=(o*t-r*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,s,a,o,l){const c=Math.cos(a),d=Math.sin(a);return this.set(r*c,r*d,-r*(c*o+d*l)+o+e,-s*d,s*c,-s*(-d*o+c*l)+l+t,0,0,1),this}scale(e,t){return vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Js.makeScale(e,t)),this}rotate(e){return vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<9;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ol.prototype.isMatrix3=!0;let Be=ol;const Js=new Be,Rl=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cl=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nf(){const n={enabled:!0,workingColorSpace:As,spaces:{},convert:function(s,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===st&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?ws:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[As]:{primaries:e,whitePoint:r,transfer:ws,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:r,transfer:st,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),n}const Je=nf();function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zi;class rf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{zi===void 0&&(zi=Rs("canvas")),zi.width=e.width,zi.height=e.height;const s=zi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),r=zi}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rs("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=ai(a[o]/255)*255;return r.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ai(t[r]/255)*255):t[r]=ai(t[r]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sf=0;class Bo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=zr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?a.push(Qs(s[o].image)):a.push(Qs(s[o]))}else a=Qs(s);r.url=a}return t||(e.images[this.uuid]=r),r}}function Qs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let af=0;const js=new B;class qt extends Ui{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,r=ii,s=ii,a=sn,o=gi,l=Gn,c=fn,d=qt.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=zr(),this.name="",this.source=new Bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(js).x}get height(){return this.source.getSize(js).y}get depth(){return this.source.getSize(js).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Xc;qt.DEFAULT_ANISOTROPY=1;const ll=class ll{constructor(e=0,t=0,r=0,s=1){this.x=e,this.y=t,this.z=r,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,s){return this.x=e,this.y=t,this.z=r,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*s+o[12]*a,this.y=o[1]*t+o[5]*r+o[9]*s+o[13]*a,this.z=o[2]*t+o[6]*r+o[10]*s+o[14]*a,this.w=o[3]*t+o[7]*r+o[11]*s+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,s,a;const c=e.elements,d=c[0],u=c[4],f=c[8],p=c[1],g=c[5],_=c[9],v=c[2],m=c[6],h=c[10];if(Math.abs(u-p)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(d+g+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(d+1)/2,b=(g+1)/2,R=(h+1)/2,A=(u+p)/4,x=(f+v)/4,E=(_+m)/4;return w>b&&w>R?w<.01?(r=0,s=.707106781,a=.707106781):(r=Math.sqrt(w),s=A/r,a=x/r):b>R?b<.01?(r=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),r=A/s,a=E/s):R<.01?(r=.707106781,s=.707106781,a=0):(a=Math.sqrt(R),r=x/a,s=E/a),this.set(r,s,a,t),this}let y=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-v)/y,this.z=(p-u)/y,this.w=Math.acos((d+g+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ll.prototype.isVector4=!0;let _t=ll;class of extends Ui{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];const s=r.count;for(let a=0;a<s;a++)this.textures[a]=new qt({width:e,height:t,depth:r.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=r,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends of{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class id extends qt{constructor(e=null,t=1,r=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lf extends qt{constructor(e=null,t=1,r=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ns=class Ns{constructor(e,t,r,s,a,o,l,c,d,u,f,p,g,_,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,s,a,o,l,c,d,u,f,p,g,_,v,m)}set(e,t,r,s,a,o,l,c,d,u,f,p,g,_,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=r,h[12]=s,h[1]=a,h[5]=o,h[9]=l,h[13]=c,h[2]=d,h[6]=u,h[10]=f,h[14]=p,h[3]=g,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ns().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),a=1/ki.setFromMatrixColumn(e,1).length(),o=1/ki.setFromMatrixColumn(e,2).length();return t[0]=r[0]*s,t[1]=r[1]*s,t[2]=r[2]*s,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,s=e.y,a=e.z,o=Math.cos(r),l=Math.sin(r),c=Math.cos(s),d=Math.sin(s),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const p=o*u,g=o*f,_=l*u,v=l*f;t[0]=c*u,t[4]=-c*f,t[8]=d,t[1]=g+_*d,t[5]=p-v*d,t[9]=-l*c,t[2]=v-p*d,t[6]=_+g*d,t[10]=o*c}else if(e.order==="YXZ"){const p=c*u,g=c*f,_=d*u,v=d*f;t[0]=p+v*l,t[4]=_*l-g,t[8]=o*d,t[1]=o*f,t[5]=o*u,t[9]=-l,t[2]=g*l-_,t[6]=v+p*l,t[10]=o*c}else if(e.order==="ZXY"){const p=c*u,g=c*f,_=d*u,v=d*f;t[0]=p-v*l,t[4]=-o*f,t[8]=_+g*l,t[1]=g+_*l,t[5]=o*u,t[9]=v-p*l,t[2]=-o*d,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const p=o*u,g=o*f,_=l*u,v=l*f;t[0]=c*u,t[4]=_*d-g,t[8]=p*d+v,t[1]=c*f,t[5]=v*d+p,t[9]=g*d-_,t[2]=-d,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,g=o*d,_=l*c,v=l*d;t[0]=c*u,t[4]=v-p*f,t[8]=_*f+g,t[1]=f,t[5]=o*u,t[9]=-l*u,t[2]=-d*u,t[6]=g*f+_,t[10]=p-v*f}else if(e.order==="XZY"){const p=o*c,g=o*d,_=l*c,v=l*d;t[0]=c*u,t[4]=-f,t[8]=d*u,t[1]=p*f+v,t[5]=o*u,t[9]=g*f-_,t[2]=_*f-g,t[6]=l*u,t[10]=v*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cf,e,df)}lookAt(e,t,r){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ci.crossVectors(r,ln),ci.lengthSq()===0&&(Math.abs(r.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ci.crossVectors(r,ln)),ci.normalize(),qr.crossVectors(ln,ci),s[0]=ci.x,s[4]=qr.x,s[8]=ln.x,s[1]=ci.y,s[5]=qr.y,s[9]=ln.y,s[2]=ci.z,s[6]=qr.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,a=this.elements,o=r[0],l=r[4],c=r[8],d=r[12],u=r[1],f=r[5],p=r[9],g=r[13],_=r[2],v=r[6],m=r[10],h=r[14],y=r[3],w=r[7],b=r[11],R=r[15],A=s[0],x=s[4],E=s[8],I=s[12],P=s[1],N=s[5],F=s[9],X=s[13],D=s[2],W=s[6],j=s[10],G=s[14],se=s[3],Y=s[7],ne=s[11],ie=s[15];return a[0]=o*A+l*P+c*D+d*se,a[4]=o*x+l*N+c*W+d*Y,a[8]=o*E+l*F+c*j+d*ne,a[12]=o*I+l*X+c*G+d*ie,a[1]=u*A+f*P+p*D+g*se,a[5]=u*x+f*N+p*W+g*Y,a[9]=u*E+f*F+p*j+g*ne,a[13]=u*I+f*X+p*G+g*ie,a[2]=_*A+v*P+m*D+h*se,a[6]=_*x+v*N+m*W+h*Y,a[10]=_*E+v*F+m*j+h*ne,a[14]=_*I+v*X+m*G+h*ie,a[3]=y*A+w*P+b*D+R*se,a[7]=y*x+w*N+b*W+R*Y,a[11]=y*E+w*F+b*j+R*ne,a[15]=y*I+w*X+b*G+R*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],s=e[8],a=e[12],o=e[1],l=e[5],c=e[9],d=e[13],u=e[2],f=e[6],p=e[10],g=e[14],_=e[3],v=e[7],m=e[11],h=e[15],y=c*g-d*p,w=l*g-d*f,b=l*p-c*f,R=o*g-d*u,A=o*p-c*u,x=o*f-l*u;return t*(v*y-m*w+h*b)-r*(_*y-m*R+h*A)+s*(_*w-v*R+h*x)-a*(_*b-v*A+m*x)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],u=e[10];return t*(o*u-l*d)-r*(a*u-l*c)+s*(a*d-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],d=e[7],u=e[8],f=e[9],p=e[10],g=e[11],_=e[12],v=e[13],m=e[14],h=e[15],y=t*l-r*o,w=t*c-s*o,b=t*d-a*o,R=r*c-s*l,A=r*d-a*l,x=s*d-a*c,E=u*v-f*_,I=u*m-p*_,P=u*h-g*_,N=f*m-p*v,F=f*h-g*v,X=p*h-g*m,D=y*X-w*F+b*N+R*P-A*I+x*E;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/D;return e[0]=(l*X-c*F+d*N)*W,e[1]=(s*F-r*X-a*N)*W,e[2]=(v*x-m*A+h*R)*W,e[3]=(p*A-f*x-g*R)*W,e[4]=(c*P-o*X-d*I)*W,e[5]=(t*X-s*P+a*I)*W,e[6]=(m*b-_*x-h*w)*W,e[7]=(u*x-p*b+g*w)*W,e[8]=(o*F-l*P+d*E)*W,e[9]=(r*P-t*F-a*E)*W,e[10]=(_*A-v*b+h*y)*W,e[11]=(f*b-u*A-g*y)*W,e[12]=(l*I-o*N-c*E)*W,e[13]=(t*N-r*I+s*E)*W,e[14]=(v*w-_*R-m*y)*W,e[15]=(u*R-f*w+p*y)*W,this}scale(e){const t=this.elements,r=e.x,s=e.y,a=e.z;return t[0]*=r,t[4]*=s,t[8]*=a,t[1]*=r,t[5]*=s,t[9]*=a,t[2]*=r,t[6]*=s,t[10]*=a,t[3]*=r,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,s))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),s=Math.sin(t),a=1-r,o=e.x,l=e.y,c=e.z,d=a*o,u=a*l;return this.set(d*o+r,d*l-s*c,d*c+s*l,0,d*l+s*c,u*l+r,u*c-s*o,0,d*c-s*l,u*c+s*o,a*c*c+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,s,a,o){return this.set(1,r,a,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,r){const s=this.elements,a=t._x,o=t._y,l=t._z,c=t._w,d=a+a,u=o+o,f=l+l,p=a*d,g=a*u,_=a*f,v=o*u,m=o*f,h=l*f,y=c*d,w=c*u,b=c*f,R=r.x,A=r.y,x=r.z;return s[0]=(1-(v+h))*R,s[1]=(g+b)*R,s[2]=(_-w)*R,s[3]=0,s[4]=(g-b)*A,s[5]=(1-(p+h))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(_+w)*x,s[9]=(m-y)*x,s[10]=(1-(p+v))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,r){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinantAffine();if(a===0)return r.set(1,1,1),t.identity(),this;let o=ki.set(s[0],s[1],s[2]).length();const l=ki.set(s[4],s[5],s[6]).length(),c=ki.set(s[8],s[9],s[10]).length();a<0&&(o=-o),yn.copy(this);const d=1/o,u=1/l,f=1/c;return yn.elements[0]*=d,yn.elements[1]*=d,yn.elements[2]*=d,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,t.setFromRotationMatrix(yn),r.x=o,r.y=l,r.z=c,this}makePerspective(e,t,r,s,a,o,l=Pn,c=!1){const d=this.elements,u=2*a/(t-e),f=2*a/(r-s),p=(t+e)/(t-e),g=(r+s)/(r-s);let _,v;if(c)_=a/(o-a),v=o*a/(o-a);else if(l===Pn)_=-(o+a)/(o-a),v=-2*o*a/(o-a);else if(l===Lr)_=-o/(o-a),v=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return d[0]=u,d[4]=0,d[8]=p,d[12]=0,d[1]=0,d[5]=f,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=_,d[14]=v,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,s,a,o,l=Pn,c=!1){const d=this.elements,u=2/(t-e),f=2/(r-s),p=-(t+e)/(t-e),g=-(r+s)/(r-s);let _,v;if(c)_=1/(o-a),v=o/(o-a);else if(l===Pn)_=-2/(o-a),v=-(o+a)/(o-a);else if(l===Lr)_=-1/(o-a),v=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return d[0]=u,d[4]=0,d[8]=0,d[12]=p,d[1]=0,d[5]=f,d[9]=0,d[13]=g,d[2]=0,d[6]=0,d[10]=_,d[14]=v,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<16;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Ns.prototype.isMatrix4=!0;let ft=Ns;const ki=new B,yn=new ft,cf=new B(0,0,0),df=new B(1,1,1),ci=new B,qr=new B,ln=new B,Pl=new ft,Ll=new fr;class Mi{constructor(e=0,t=0,r=0,s=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,s=this._order){return this._x=e,this._y=t,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const s=e.elements,a=s[0],o=s[4],l=s[8],c=s[1],d=s[5],u=s[9],f=s[2],p=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,d),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pl,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class zo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uf=0;const Dl=new B,Gi=new fr,Zn=new ft,Yr=new B,mr=new B,ff=new B,hf=new fr,Il=new B(1,0,0),Nl=new B(0,1,0),Ul=new B(0,0,1),Fl={type:"added"},pf={type:"removed"},Hi={type:"childadded",child:null},ea={type:"childremoved",child:null};class Gt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new B,t=new Mi,r=new fr,s=new B(1,1,1);function a(){r.setFromEuler(t,!1)}function o(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Be}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(Il,e)}rotateY(e){return this.rotateOnAxis(Nl,e)}rotateZ(e){return this.rotateOnAxis(Ul,e)}translateOnAxis(e,t){return Dl.copy(e).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Il,e)}translateY(e){return this.translateOnAxis(Nl,e)}translateZ(e){return this.translateOnAxis(Ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Yr.copy(e):Yr.set(e,t,r);const s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(mr,Yr,this.up):Zn.lookAt(Yr,mr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Zn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fl),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pf),ea.child=e,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fl),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*s,a[13]+=r-a[1]*t-a[5]*r-a[9]*s,a[14]+=s-a[2]*t-a[6]*r-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const a=this.children;for(let o=0,l=a.length;o<l;o++)a[o].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let d=0,u=c.length;d<u;d++){const f=c[d];a(e.shapes,f)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,d=this.material.length;c<d;c++)l.push(a(e.materials,this.material[c]));s.material=l}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(a(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),d=o(e.textures),u=o(e.images),f=o(e.shapes),p=o(e.skeletons),g=o(e.animations),_=o(e.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),d.length>0&&(r.textures=d),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),_.length>0&&(r.nodes=_)}return r.object=s,r;function o(l){const c=[];for(const d in l){const u=l[d];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const s=e.children[r];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Gt.DEFAULT_UP=new B(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hn extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mf={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let s=null,a=null,o=null;const l=this._targetRay,c=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,r),h=this._getHandJoint(d,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=d.joints["index-finger-tip"],f=d.joints["thumb-tip"],p=u.position.distanceTo(f.position),g=.02,_=.005;d.inputState.pinching&&p>g+_?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&p<=g-_&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,r),s===null&&a!==null&&(s=a),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(mf)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Hn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,r,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=r,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,r,s=Je.workingColorSpace){if(e=Qu(e,1),t=Qe(t,0,1),r=Qe(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,o=2*r-a;this.r=na(o,a,e+1/3),this.g=na(o,a,e),this.b=na(o,a,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=dn){function r(a){a!==void 0&&parseFloat(a)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return r(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const r=rd[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Je.workingToColorSpace(Xt.copy(this),e),Math.round(Qe(Xt.r*255,0,255))*65536+Math.round(Qe(Xt.g*255,0,255))*256+Math.round(Qe(Xt.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Xt.copy(this),t);const r=Xt.r,s=Xt.g,a=Xt.b,o=Math.max(r,s,a),l=Math.min(r,s,a);let c,d;const u=(l+o)/2;if(l===o)c=0,d=0;else{const f=o-l;switch(d=u<=.5?f/(o+l):f/(2-o-l),o){case r:c=(s-a)/f+(s<a?6:0);break;case s:c=(a-r)/f+2;break;case a:c=(r-s)/f+4;break}c/=6}return e.h=c,e.s=d,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=dn){Je.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,r=Xt.g,s=Xt.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(e,t,r){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Kr);const r=Ks(di.h,Kr.h,t),s=Ks(di.s,Kr.s,t),a=Ks(di.l,Kr.l,t);return this.setHSL(r,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*s,this.g=a[1]*t+a[4]*r+a[7]*s,this.b=a[2]*t+a[5]*r+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new qe;qe.NAMES=rd;class ko{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=r}clone(){return new ko(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gf extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const En=new B,Jn=new B,ia=new B,Qn=new B,Vi=new B,Wi=new B,Ol=new B,ra=new B,sa=new B,aa=new B,oa=new _t,la=new _t,ca=new _t;class Rn{constructor(e=new B,t=new B,r=new B){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,s){s.subVectors(r,t),En.subVectors(e,t),s.cross(En);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,r,s,a){En.subVectors(s,t),Jn.subVectors(r,t),ia.subVectors(e,t);const o=En.dot(En),l=En.dot(Jn),c=En.dot(ia),d=Jn.dot(Jn),u=Jn.dot(ia),f=o*d-l*l;if(f===0)return a.set(0,0,0),null;const p=1/f,g=(d*c-l*u)*p,_=(o*u-l*c)*p;return a.set(1-g-_,_,g)}static containsPoint(e,t,r,s){return this.getBarycoord(e,t,r,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,r,s,a,o,l,c){return this.getBarycoord(e,t,r,s,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Qn.x),c.addScaledVector(o,Qn.y),c.addScaledVector(l,Qn.z),c)}static getInterpolatedAttribute(e,t,r,s,a,o){return oa.setScalar(0),la.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(e,t),la.fromBufferAttribute(e,r),ca.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(oa,a.x),o.addScaledVector(la,a.y),o.addScaledVector(ca,a.z),o}static isFrontFacing(e,t,r,s){return En.subVectors(r,t),Jn.subVectors(e,t),En.cross(Jn).dot(s)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,s){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,r,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),En.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,s,a){return Rn.getInterpolation(e,this.a,this.b,this.c,t,r,s,a)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,s=this.b,a=this.c;let o,l;Vi.subVectors(s,r),Wi.subVectors(a,r),ra.subVectors(e,r);const c=Vi.dot(ra),d=Wi.dot(ra);if(c<=0&&d<=0)return t.copy(r);sa.subVectors(e,s);const u=Vi.dot(sa),f=Wi.dot(sa);if(u>=0&&f<=u)return t.copy(s);const p=c*f-u*d;if(p<=0&&c>=0&&u<=0&&c-u>0)return o=c/(c-u),t.copy(r).addScaledVector(Vi,o);aa.subVectors(e,a);const g=Vi.dot(aa),_=Wi.dot(aa);if(_>=0&&g<=_)return t.copy(a);const v=g*d-c*_;if(v<=0&&d>=0&&_<=0)return l=d/(d-_),t.copy(r).addScaledVector(Wi,l);const m=u*_-g*f;if(m<=0&&f-u>=0&&g-_>=0)return Ol.subVectors(a,s),l=(f-u)/(f-u+(g-_)),t.copy(s).addScaledVector(Ol,l);const h=1/(m+v+p);return o=v*h,l=p*h,t.copy(r).addScaledVector(Vi,o).addScaledVector(Wi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class kr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,l=a.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(a,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Zr.copy(r.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const s=e.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),Jr.subVectors(this.max,gr),Xi.subVectors(e.a,gr),$i.subVectors(e.b,gr),qi.subVectors(e.c,gr),ui.subVectors($i,Xi),fi.subVectors(qi,$i),Ti.subVectors(Xi,qi);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Ti.z,Ti.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Ti.z,0,-Ti.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Ti.y,Ti.x,0];return!da(t,Xi,$i,qi,Jr)||(t=[1,0,0,0,1,0,0,0,1],!da(t,Xi,$i,qi,Jr))?!1:(Qr.crossVectors(ui,fi),t=[Qr.x,Qr.y,Qr.z],da(t,Xi,$i,qi,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new B,new B,new B,new B,new B,new B,new B,new B],bn=new B,Zr=new kr,Xi=new B,$i=new B,qi=new B,ui=new B,fi=new B,Ti=new B,gr=new B,Jr=new B,Qr=new B,Ai=new B;function da(n,e,t,r,s){for(let a=0,o=n.length-3;a<=o;a+=3){Ai.fromArray(n,a);const l=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=e.dot(Ai),d=t.dot(Ai),u=r.dot(Ai);if(Math.max(-Math.max(c,d,u),Math.min(c,d,u))>l)return!1}return!0}const yt=new B,jr=new $e;let _f=0;class Li extends Ui{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_f++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=qu,this.updateRanges=[],this.gpuType=kn,this.version=0,this._normalizationScale=e!==void 0?Oo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[r+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this}setXYZW(e,t,r,s,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),s=this._normalize(s),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ef(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):tf(e,this.array)}}class sd extends Li{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ad extends Li{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ht extends Li{constructor(e,t,r){super(new Float32Array(e),t,r)}}const xf=new kr,_r=new B,ua=new B;class Go{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):xf.setFromPoints(e).getCenter(r);let s=0;for(let a=0,o=e.length;a<o;a++)s=Math.max(s,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),s=(r-this.radius)*.5;this.center.addScaledVector(_r,s/r),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(ua)),this.expandByPoint(_r.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vf=0;const _n=new ft,fa=new Gt,Yi=new B,cn=new kr,xr=new kr,Nt=new B;class Mn extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yu(e)?ad:sd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Be().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,r){return _n.makeTranslation(e,t,r),this.applyMatrix4(_n),this}scale(e,t,r){return _n.makeScale(e,t,r),this.applyMatrix4(_n),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s];r.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(r,3))}else{const r=Math.min(e.length,t.count);for(let s=0;s<r;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];cn.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const r=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const l=t[a];xr.setFromBufferAttribute(l),this.morphTargetsRelative?(Nt.addVectors(cn.min,xr.min),cn.expandByPoint(Nt),Nt.addVectors(cn.max,xr.max),cn.expandByPoint(Nt)):(cn.expandByPoint(xr.min),cn.expandByPoint(xr.max))}cn.getCenter(r);let s=0;for(let a=0,o=e.count;a<o;a++)Nt.fromBufferAttribute(e,a),s=Math.max(s,r.distanceToSquared(Nt));if(t)for(let a=0,o=t.length;a<o;a++){const l=t[a],c=this.morphTargetsRelative;for(let d=0,u=l.count;d<u;d++)Nt.fromBufferAttribute(l,d),c&&(Yi.fromBufferAttribute(e,d),Nt.add(Yi)),s=Math.max(s,r.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,s=t.normal,a=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==r.count)&&(o=new Li(new Float32Array(4*r.count),4),this.setAttribute("tangent",o));const l=[],c=[],d=new Uint8Array(r.count);for(let I=0;I<r.count;I++)l[I]=new B,c[I]=new B;const u=new B,f=new B,p=new B,g=new $e,_=new $e,v=new $e,m=new B,h=new B;function y(I,P,N){d[I]=d[P]=d[N]=1,u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,N),g.fromBufferAttribute(a,I),_.fromBufferAttribute(a,P),v.fromBufferAttribute(a,N),f.sub(u),p.sub(u),_.sub(g),v.sub(g);const F=1/(_.x*v.y-v.x*_.y);isFinite(F)&&(m.copy(f).multiplyScalar(v.y).addScaledVector(p,-_.y).multiplyScalar(F),h.copy(p).multiplyScalar(_.x).addScaledVector(f,-v.x).multiplyScalar(F),l[I].add(m),l[P].add(m),l[N].add(m),c[I].add(h),c[P].add(h),c[N].add(h))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,P=w.length;I<P;++I){const N=w[I],F=N.start,X=N.count;for(let D=F,W=F+X;D<W;D+=3)y(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const b=new B,R=new B,A=new B,x=new B;function E(I){A.fromBufferAttribute(s,I),x.copy(A);const P=l[I];b.copy(P),b.sub(A.multiplyScalar(A.dot(P))).normalize(),R.crossVectors(x,P);const F=R.dot(c[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,F)}for(let I=0,P=r.count;I<P;++I)d[I]&&E(I);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Li(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let p=0,g=r.count;p<g;p++)r.setXYZ(p,0,0,0);const s=new B,a=new B,o=new B,l=new B,c=new B,d=new B,u=new B,f=new B;if(e)for(let p=0,g=e.count;p<g;p+=3){const _=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,a),f.subVectors(s,a),u.cross(f),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,v),d.fromBufferAttribute(r,m),l.add(u),c.add(u),d.add(u),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(v,c.x,c.y,c.z),r.setXYZ(m,d.x,d.y,d.z)}else for(let p=0,g=t.count;p<g;p+=3)s.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,a),f.subVectors(s,a),u.cross(f),r.setXYZ(p+0,u.x,u.y,u.z),r.setXYZ(p+1,u.x,u.y,u.z),r.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(l,c){const d=l.array,u=l.itemSize,f=l.normalized,p=new d.constructor(c.length*u);let g=0,_=0;for(let v=0,m=c.length;v<m;v++){l.isInterleavedBufferAttribute?g=c[v]*l.data.stride+l.offset:g=c[v]*u;for(let h=0;h<u;h++)p[_++]=d[g++]}return new Li(p,u,f)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,r=this.index.array,s=this.attributes;for(const l in s){const c=s[l],d=e(c,r);t.setAttribute(l,d)}const a=this.morphAttributes;for(const l in a){const c=[],d=a[l];for(let u=0,f=d.length;u<f;u++){const p=d[u],g=e(p,r);c.push(g)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const d=o[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const c in r){const d=r[c];e.data.attributes[c]=d.toJSON(e.data)}const s={};let a=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],u=[];for(let f=0,p=d.length;f<p;f++){const g=d[f];u.push(g.toJSON(e.data))}u.length>0&&(s[c]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const s=e.attributes;for(const d in s){const u=s[d];this.setAttribute(d,u.clone(t))}const a=e.morphAttributes;for(const d in a){const u=[],f=a[d];for(let p=0,g=f.length;p<g;p++)u.push(f[p].clone(t));this.morphAttributes[d]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,u=o.length;d<u;d++){const f=o[d];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ha=new B,Mf=new B,Sf=new Be;class ni{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,s){return this.normal.set(e,t,r),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const s=ha.subVectors(r,t).cross(Mf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const s=e.delta(ha),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Sf.getNormalMatrix(e),s=this.coplanarPoint(ha).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let yf=0;class Gr extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=Ar,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=Bc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(r):s&&s.isVector2&&r&&r.isVector2||s&&s.isEuler&&r&&r.isEuler||s&&s.isVector3&&r&&r.isVector3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function s(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}if(t){const a=s(e.textures),o=s(e.images);a.length>0&&(r.textures=a),o.length>0&&(r.images=o)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new ni().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new $e().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const s=t.length;r=new Array(s);for(let a=0;a!==s;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ei=new B,pa=new B,es=new B,ts=new B;class od{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,r,s){pa.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(pa);const a=e.distanceTo(t)*.5,o=-this.direction.dot(es),l=ts.dot(this.direction),c=-ts.dot(es),d=ts.lengthSq(),u=Math.abs(1-o*o);let f,p,g,_;if(u>0)if(f=o*c-l,p=o*l-c,_=a*u,f>=0)if(p>=-_)if(p<=_){const v=1/u;f*=v,p*=v,g=f*(f+o*p+2*l)+p*(o*f+p+2*c)+d}else p=a,f=Math.max(0,-(o*p+l)),g=-f*f+p*(p+2*c)+d;else p=-a,f=Math.max(0,-(o*p+l)),g=-f*f+p*(p+2*c)+d;else p<=-_?(f=Math.max(0,-(-o*a+l)),p=f>0?-a:Math.min(Math.max(-a,-c),a),g=-f*f+p*(p+2*c)+d):p<=_?(f=0,p=Math.min(Math.max(-a,-c),a),g=p*(p+2*c)+d):(f=Math.max(0,-(o*a+l)),p=f>0?a:Math.min(Math.max(-a,-c),a),g=-f*f+p*(p+2*c)+d);else p=o>0?-a:a,f=Math.max(0,-(o*p+l)),g=-f*f+p*(p+2*c)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(pa).addScaledVector(es,p),g}intersectSphere(e,t){if(e.radius<0)return null;ei.subVectors(e.center,this.origin);const r=ei.dot(this.direction),s=ei.dot(ei)-r*r,a=e.radius*e.radius;if(s>a)return null;const o=Math.sqrt(a-s),l=r-o,c=r+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,s,a,o,l,c;const d=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return d>=0?(r=(e.min.x-p.x)*d,s=(e.max.x-p.x)*d):(r=(e.max.x-p.x)*d,s=(e.min.x-p.x)*d),u>=0?(a=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(a=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),r>o||a>s||((a>r||isNaN(r))&&(r=a),(o<s||isNaN(s))&&(s=o),f>=0?(l=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(l=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),r>c||l>s)||((l>r||r!==r)&&(r=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(r>=0?r:s,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,r,s,a){const o=this.origin,l=this.direction,c=l.x,d=l.y,u=l.z,f=e.x-o.x,p=e.y-o.y,g=e.z-o.z,_=t.x-o.x,v=t.y-o.y,m=t.z-o.z,h=r.x-o.x,y=r.y-o.y,w=r.z-o.z,b=Math.abs(c),R=Math.abs(d),A=Math.abs(u);let x,E,I,P,N,F,X,D,W,j,G,se;if(b>=R&&b>=A?(I=c,F=f,W=_,se=h,c>=0?(x=d,E=u,P=p,N=g,X=v,D=m,j=y,G=w):(x=u,E=d,P=g,N=p,X=m,D=v,j=w,G=y)):R>=A?(I=d,F=p,W=v,se=y,d>=0?(x=u,E=c,P=g,N=f,X=m,D=_,j=w,G=h):(x=c,E=u,P=f,N=g,X=_,D=m,j=h,G=w)):(I=u,F=g,W=m,se=w,u>=0?(x=c,E=d,P=f,N=p,X=_,D=v,j=h,G=y):(x=d,E=c,P=p,N=f,X=v,D=_,j=y,G=h)),I===0)return null;const Y=x/I,ne=E/I,ie=1/I,Ae=P-Y*F,ke=N-ne*F,J=X-Y*W,ve=D-ne*W,Ee=j-Y*se,Le=G-ne*se,Me=Ee*ve-Le*J,He=Ae*Le-ke*Ee,Mt=J*ke-ve*Ae;if(s){if(Me<0||He<0||Mt<0)return null}else if((Me<0||He<0||Mt<0)&&(Me>0||He>0||Mt>0))return null;const Ie=Me+He+Mt;if(Ie===0)return null;const it=ie*(Me*F+He*W+Mt*se);return(Ie>0?it<0:it>0)?null:this.at(it/Ie,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rr extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bl=new ft,wi=new od,ns=new Go,zl=new B,is=new B,rs=new B,ss=new B,ma=new B,as=new B,kl=new B,os=new B;class tn extends Gt{constructor(e=new Mn,t=new rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const s=t[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const r=this.geometry,s=r.attributes.position,a=r.morphAttributes.position,o=r.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(a&&l){as.set(0,0,0);for(let c=0,d=a.length;c<d;c++){const u=l[c],f=a[c];u!==0&&(ma.fromBufferAttribute(f,e),o?as.addScaledVector(ma,u):as.addScaledVector(ma.sub(t),u))}t.add(as)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ns.copy(r.boundingSphere),ns.applyMatrix4(a),wi.copy(e.ray).recast(e.near),!(ns.containsPoint(wi.origin)===!1&&(wi.intersectSphere(ns,zl)===null||wi.origin.distanceToSquared(zl)>(e.far-e.near)**2))&&(Bl.copy(a).invert(),wi.copy(e.ray).applyMatrix4(Bl),!(r.boundingBox!==null&&wi.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,r){let s;const a=this.geometry,o=this.material,l=a.index,c=a.attributes.position,d=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,p=a.groups,g=a.drawRange;if(l!==null)if(Array.isArray(o))for(let _=0,v=p.length;_<v;_++){const m=p[_],h=o[m.materialIndex],y=Math.max(m.start,g.start),w=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let b=y,R=w;b<R;b+=3){const A=l.getX(b),x=l.getX(b+1),E=l.getX(b+2);s=ls(this,h,e,r,d,u,f,A,x,E),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let m=_,h=v;m<h;m+=3){const y=l.getX(m),w=l.getX(m+1),b=l.getX(m+2);s=ls(this,o,e,r,d,u,f,y,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=p.length;_<v;_++){const m=p[_],h=o[m.materialIndex],y=Math.max(m.start,g.start),w=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let b=y,R=w;b<R;b+=3){const A=b,x=b+1,E=b+2;s=ls(this,h,e,r,d,u,f,A,x,E),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),v=Math.min(c.count,g.start+g.count);for(let m=_,h=v;m<h;m+=3){const y=m,w=m+1,b=m+2;s=ls(this,o,e,r,d,u,f,y,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Ef(n,e,t,r,s,a,o,l){let c;if(e.side===an?c=r.intersectTriangle(o,a,s,!0,l):c=r.intersectTriangle(s,a,o,e.side===Di,l),c===null)return null;os.copy(l),os.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(os);return d<t.near||d>t.far?null:{distance:d,point:os.clone(),object:n}}function ls(n,e,t,r,s,a,o,l,c,d){n.getVertexPosition(l,is),n.getVertexPosition(c,rs),n.getVertexPosition(d,ss);const u=Ef(n,e,t,r,is,rs,ss,kl);if(u){const f=new B;Rn.getBarycoord(kl,is,rs,ss,f),s&&(u.uv=Rn.getInterpolatedAttribute(s,l,c,d,f,new $e)),a&&(u.uv1=Rn.getInterpolatedAttribute(a,l,c,d,f,new $e)),o&&(u.normal=Rn.getInterpolatedAttribute(o,l,c,d,f,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const p={a:l,b:c,c:d,normal:new B,materialIndex:0};Rn.getNormal(is,rs,ss,p.normal),u.face=p,u.barycoord=f}return u}class bf extends qt{constructor(e=null,t=1,r=1,s,a,o,l,c,d=kt,u=kt,f,p){super(null,o,l,c,d,u,s,a,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ri=new Go,Tf=new $e(.5,.5),cs=new B;class Dr{constructor(e=new ni,t=new ni,r=new ni,s=new ni,a=new ni,o=new ni){this.planes=[e,t,r,s,a,o]}set(e,t,r,s,a,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(r),l[3].copy(s),l[4].copy(a),l[5].copy(o),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Pn,r=!1){const s=this.planes,a=e.elements,o=a[0],l=a[1],c=a[2],d=a[3],u=a[4],f=a[5],p=a[6],g=a[7],_=a[8],v=a[9],m=a[10],h=a[11],y=a[12],w=a[13],b=a[14],R=a[15];if(s[0].setComponents(d-o,g-u,h-_,R-y).normalize(),s[1].setComponents(d+o,g+u,h+_,R+y).normalize(),s[2].setComponents(d+l,g+f,h+v,R+w).normalize(),s[3].setComponents(d-l,g-f,h-v,R-w).normalize(),r)s[4].setComponents(c,p,m,b).normalize(),s[5].setComponents(d-c,g-p,h-m,R-b).normalize();else if(s[4].setComponents(d-c,g-p,h-m,R-b).normalize(),t===Pn)s[5].setComponents(d+c,g+p,h+m,R+b).normalize();else if(t===Lr)s[5].setComponents(c,p,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);const t=Tf.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,r=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const s=t[r];if(cs.x=s.normal.x>0?e.max.x:e.min.x,cs.y=s.normal.y>0?e.max.y:e.min.y,cs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Gl=new ft;class Ho{constructor(){this.coordinateSystem=Pn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let s=0;s<t.length;s++){const a=t[s];Gl.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),r[s]===void 0&&(r[s]=new Dr),r[s].setFromProjectionMatrix(Gl,a.coordinateSystem,a.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Dr),t[s].copy(r[s]);return this._count=e._count,this}clone(){return new Ho().copy(this)}}class ld extends qt{constructor(e=[],t=ar,r,s,a,o,l,c,d,u){super(e,t,r,s,a,o,l,c,d,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Af extends qt{constructor(e,t,r,s,a,o,l,c,d){super(e,t,r,s,a,o,l,c,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lr extends qt{constructor(e,t,r=$n,s,a,o,l=kt,c=kt,d,u=vi,f=1){if(u!==vi&&u!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:f};super(p,s,a,o,l,c,u,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class cd extends lr{constructor(e,t=$n,r=ar,s,a,o=kt,l=kt,c,d=vi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,r,s,a,o,l,c,d),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dd extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fi extends Mn{constructor(e=1,t=1,r=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:s,heightSegments:a,depthSegments:o};const l=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const c=[],d=[],u=[],f=[];let p=0,g=0;_("z","y","x",-1,-1,r,t,e,o,a,0),_("z","y","x",1,-1,r,t,-e,o,a,1),_("x","z","y",1,1,e,r,t,s,o,2),_("x","z","y",1,-1,e,r,-t,s,o,3),_("x","y","z",1,-1,e,t,r,s,a,4),_("x","y","z",-1,-1,e,t,-r,s,a,5),this.setIndex(c),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(f,2));function _(v,m,h,y,w,b,R,A,x,E,I){const P=b/x,N=R/E,F=b/2,X=R/2,D=A/2,W=x+1,j=E+1;let G=0,se=0;const Y=new B;for(let ne=0;ne<j;ne++){const ie=ne*N-X;for(let Ae=0;Ae<W;Ae++){const ke=Ae*P-F;Y[v]=ke*y,Y[m]=ie*w,Y[h]=D,d.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[h]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(Ae/x),f.push(1-ne/E),G+=1}}for(let ne=0;ne<E;ne++)for(let ie=0;ie<x;ie++){const Ae=p+ie+W*ne,ke=p+ie+W*(ne+1),J=p+(ie+1)+W*(ne+1),ve=p+(ie+1)+W*ne;c.push(Ae,ke,ve),c.push(ke,J,ve),se+=6}l.addGroup(g,se,I),g+=se,p+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Us extends Mn{constructor(e=1,t=1,r=1,s=32,a=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:s,heightSegments:a,openEnded:o,thetaStart:l,thetaLength:c};const d=this;s=Math.floor(s),a=Math.floor(a);const u=[],f=[],p=[],g=[];let _=0;const v=[],m=r/2;let h=0;y(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(p,3)),this.setAttribute("uv",new ht(g,2));function y(){const b=new B,R=new B;let A=0;const x=(t-e)/r;for(let E=0;E<=a;E++){const I=[],P=E/a,N=P*(t-e)+e;for(let F=0;F<=s;F++){const X=F/s,D=X*c+l,W=Math.sin(D),j=Math.cos(D);R.x=N*W,R.y=-P*r+m,R.z=N*j,f.push(R.x,R.y,R.z),b.set(W,x,j).normalize(),p.push(b.x,b.y,b.z),g.push(X,1-P),I.push(_++)}v.push(I)}for(let E=0;E<s;E++)for(let I=0;I<a;I++){const P=v[I][E],N=v[I+1][E],F=v[I+1][E+1],X=v[I][E+1];(e>0||I!==0)&&(u.push(P,N,X),A+=3),(t>0||I!==a-1)&&(u.push(N,F,X),A+=3)}d.addGroup(h,A,0),h+=A}function w(b){const R=_,A=new $e,x=new B;let E=0;const I=b===!0?e:t,P=b===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*P,0),p.push(0,P,0),g.push(.5,.5),_++;const N=_;for(let F=0;F<=s;F++){const D=F/s*c+l,W=Math.cos(D),j=Math.sin(D);x.x=I*j,x.y=m*P,x.z=I*W,f.push(x.x,x.y,x.z),p.push(0,P,0),A.x=W*.5+.5,A.y=j*.5*P+.5,g.push(A.x,A.y),_++}for(let F=0;F<s;F++){const X=R+F,D=N+F;b===!0?u.push(D,D+1,X):u.push(D+1,D,X),E+=3}d.addGroup(h,E,b===!0?1:2),h+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cs extends Us{constructor(e=1,t=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(0,e,t,r,s,a,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l}}static fromJSON(e){return new Cs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vo extends Mn{constructor(e=[],t=[],r=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:s};const a=[],o=[];l(s),d(r),u(),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(a.slice(),3)),this.setAttribute("uv",new ht(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(y){const w=new B,b=new B,R=new B;for(let A=0;A<t.length;A+=3)g(t[A+0],w),g(t[A+1],b),g(t[A+2],R),c(w,b,R,y)}function c(y,w,b,R){const A=R+1,x=[];for(let E=0;E<=A;E++){x[E]=[];const I=y.clone().lerp(b,E/A),P=w.clone().lerp(b,E/A),N=A-E;for(let F=0;F<=N;F++)F===0&&E===A?x[E][F]=I:x[E][F]=I.clone().lerp(P,F/N)}for(let E=0;E<A;E++)for(let I=0;I<2*(A-E)-1;I++){const P=Math.floor(I/2);I%2===0?(p(x[E][P+1]),p(x[E+1][P]),p(x[E][P])):(p(x[E][P+1]),p(x[E+1][P+1]),p(x[E+1][P]))}}function d(y){const w=new B;for(let b=0;b<a.length;b+=3)w.x=a[b+0],w.y=a[b+1],w.z=a[b+2],w.normalize().multiplyScalar(y),a[b+0]=w.x,a[b+1]=w.y,a[b+2]=w.z}function u(){const y=new B;for(let w=0;w<a.length;w+=3){y.x=a[w+0],y.y=a[w+1],y.z=a[w+2];const b=m(y)/2/Math.PI+.5,R=h(y)/Math.PI+.5;o.push(b,1-R)}_(),f()}function f(){for(let y=0;y<o.length;y+=6){const w=o[y+0],b=o[y+2],R=o[y+4],A=Math.max(w,b,R),x=Math.min(w,b,R);A>.9&&x<.1&&(w<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function p(y){a.push(y.x,y.y,y.z)}function g(y,w){const b=y*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function _(){const y=new B,w=new B,b=new B,R=new B,A=new $e,x=new $e,E=new $e;for(let I=0,P=0;I<a.length;I+=9,P+=6){y.set(a[I+0],a[I+1],a[I+2]),w.set(a[I+3],a[I+4],a[I+5]),b.set(a[I+6],a[I+7],a[I+8]),A.set(o[P+0],o[P+1]),x.set(o[P+2],o[P+3]),E.set(o[P+4],o[P+5]),R.copy(y).add(w).add(b).divideScalar(3);const N=m(R);v(A,P+0,y,N),v(x,P+2,w,N),v(E,P+4,b,N)}}function v(y,w,b,R){R<0&&y.x===1&&(o[w]=y.x-1),b.x===0&&b.z===0&&(o[w]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function h(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.vertices,e.indices,e.radius,e.detail)}}class Wo extends Vo{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,s=1/r,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-r,0,-s,r,0,s,-r,0,s,r,-s,-r,0,-s,r,0,s,-r,0,s,r,0,-r,0,-s,r,0,-s,-r,0,s,r,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wo(e.radius,e.detail)}}class Si extends Mn{constructor(e=1,t=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:s};const a=e/2,o=t/2,l=Math.floor(r),c=Math.floor(s),d=l+1,u=c+1,f=e/l,p=t/c,g=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const y=h*p-o;for(let w=0;w<d;w++){const b=w*f-a;_.push(b,-y,0),v.push(0,0,1),m.push(w/l),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let y=0;y<l;y++){const w=y+d*h,b=y+d*(h+1),R=y+1+d*(h+1),A=y+1+d*h;g.push(w,b,A),g.push(b,R,A)}this.setIndex(g),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xo extends Mn{constructor(e=.5,t=1,r=32,s=1,a=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:s,thetaStart:a,thetaLength:o},r=Math.max(3,r),s=Math.max(1,s);const l=[],c=[],d=[],u=[];let f=e;const p=(t-e)/s,g=new B,_=new $e;for(let v=0;v<=s;v++){for(let m=0;m<=r;m++){const h=a+m/r*o;g.x=f*Math.cos(h),g.y=f*Math.sin(h),c.push(g.x,g.y,g.z),d.push(0,0,1),_.x=(g.x/t+1)/2,_.y=(g.y/t+1)/2,u.push(_.x,_.y)}f+=p}for(let v=0;v<s;v++){const m=v*(r+1);for(let h=0;h<r;h++){const y=h+m,w=y,b=y+r+1,R=y+r+2,A=y+1;l.push(w,b,A),l.push(b,R,A)}}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class $o extends Mn{constructor(e=1,t=32,r=16,s=0,a=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:s,phiLength:a,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const c=Math.min(o+l,Math.PI);let d=0;const u=[],f=new B,p=new B,g=[],_=[],v=[],m=[];for(let h=0;h<=r;h++){const y=[],w=h/r,b=o+w*l,R=e*Math.cos(b),A=Math.sqrt(e*e-R*R);let x=0;h===0&&o===0?x=.5/t:h===r&&c===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){const I=E/t,P=s+I*a;f.x=-A*Math.cos(P),f.y=R,f.z=A*Math.sin(P),_.push(f.x,f.y,f.z),p.copy(f).normalize(),v.push(p.x,p.y,p.z),m.push(I+x,1-w),y.push(d++)}u.push(y)}for(let h=0;h<r;h++)for(let y=0;y<t;y++){const w=u[h][y+1],b=u[h][y],R=u[h+1][y],A=u[h+1][y+1];(h!==0||o>0)&&g.push(w,b,A),(h!==r-1||c<Math.PI)&&g.push(b,R,A)}this.setIndex(g),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qo extends Mn{constructor(e=1,t=.4,r=12,s=48,a=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:s,arc:a,thetaStart:o,thetaLength:l},r=Math.floor(r),s=Math.floor(s);const c=[],d=[],u=[],f=[],p=new B,g=new B,_=new B;for(let v=0;v<=r;v++){const m=o+v/r*l;for(let h=0;h<=s;h++){const y=h/s*a;g.x=(e+t*Math.cos(m))*Math.cos(y),g.y=(e+t*Math.cos(m))*Math.sin(y),g.z=t*Math.sin(m),d.push(g.x,g.y,g.z),p.x=e*Math.cos(y),p.y=e*Math.sin(y),_.subVectors(g,p).normalize(),u.push(_.x,_.y,_.z),f.push(h/s),f.push(v/r)}}for(let v=1;v<=r;v++)for(let m=1;m<=s;m++){const h=(s+1)*v+m-1,y=(s+1)*(v-1)+m-1,w=(s+1)*(v-1)+m,b=(s+1)*v+m;c.push(h,y,b),c.push(y,w,b)}this.setIndex(c),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function cr(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const s=n[t][r];if(Hl(s))s.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=s.clone();else if(Array.isArray(s))if(Hl(s[0])){const a=[];for(let o=0,l=s.length;o<l;o++)a[o]=s[o].clone();e[t][r]=a}else e[t][r]=s.slice();else e[t][r]=s}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const r=cr(n[t]);for(const s in r)e[s]=r[s]}return e}function Hl(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function wf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ud(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Rf={clone:cr,merge:Zt};var Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const s=e.uniforms[r];switch(this.uniforms[r]={},s.type){case"t":this.uniforms[r].value=t[s.value]||null;break;case"c":this.uniforms[r].value=new qe().setHex(s.value);break;case"v2":this.uniforms[r].value=new $e().fromArray(s.value);break;case"v3":this.uniforms[r].value=new B().fromArray(s.value);break;case"v4":this.uniforms[r].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[r].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[r].value=new ft().fromArray(s.value);break;default:this.uniforms[r].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Lf extends Ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Df extends Gr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Co,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class If extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nf extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yo extends Gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Uf extends Yo{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ga=new ft,Vl=new B,Wl=new B;class fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vl),Wl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,s){ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(ga,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,o=s?s.z/a.x:1,l=s?s.w/a.y:1,c=s?s.x/a.x:0,d=s?s.y/a.y:0;e.coordinateSystem===Lr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+d,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*l,0,.5*l+d,0,0,.5,.5,0,0,0,1),t.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ds=new B,us=new fr,Un=new B;class hd extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ds,us,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ds,us,Un.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(ds,us,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ds,us,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hi=new B,Xl=new $e,$l=new $e;class An extends hd{constructor(e=50,t=1,r=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Xl,$l),t.subVectors($l,Xl)}setViewOffset(e,t,r,s,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,r=2*t,s=this.aspect*r,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,d=o.fullHeight;a+=o.offsetX*s/c,t-=o.offsetY*r/d,s*=o.width/c,r*=o.height/d}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ff extends fd{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}}class Of extends Yo{constructor(e,t,r=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=s,this.shadow=new Ff}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ko extends hd{constructor(e=-1,t=1,r=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=r-e,o=r+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,o=a+d*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bf extends fd{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ql extends Yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Bf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ki=-90,Zi=1;class uo extends Gt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new An(Ki,Zi,e,t);s.layers=this.layers,this.add(s);const a=new An(Ki,Zi,e,t);a.layers=this.layers,this.add(a);const o=new An(Ki,Zi,e,t);o.layers=this.layers,this.add(o);const l=new An(Ki,Zi,e,t);l.layers=this.layers,this.add(l);const c=new An(Ki,Zi,e,t);c.layers=this.layers,this.add(c);const d=new An(Ki,Zi,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,s,a,o,l,c]=t;for(const d of t)this.remove(d);if(e===Pn)r.up.set(0,1,0),r.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Lr)r.up.set(0,-1,0),r.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,l,c,d,u]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(r,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(r,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),r.texture.mipmapsAutoUpdate=v,e.setRenderTarget(r,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,p,g),e.xr.enabled=_,r.texture.needsPMREMUpdate=!0}}class zf extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Yl=new ft;class kf{constructor(e,t,r=0,s=1/0){this.ray=new od(e,t),this.near=r,this.far=s,this.camera=null,this.layers=new zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yl),this}intersectObject(e,t=!0,r=[]){return fo(e,this,r,t),r.sort(Kl),r}intersectObjects(e,t=!0,r=[]){for(let s=0,a=e.length;s<a;s++)fo(e[s],this,r,t);return r.sort(Kl),r}}function Kl(n,e){return n.distance-e.distance}function fo(n,e,t,r){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&r===!0){const a=n.children;for(let o=0,l=a.length;o<l;o++)fo(a[o],e,t,!0)}}function Zl(n,e,t,r){const s=Gf(r);switch(t){case Zc:return n*e;case Qc:return n*e/s.components*s.byteLength;case No:return n*e/s.components*s.byteLength;case Ii:return n*e*2/s.components*s.byteLength;case Uo:return n*e*2/s.components*s.byteLength;case Jc:return n*e*3/s.components*s.byteLength;case Gn:return n*e*4/s.components*s.byteLength;case Fo:return n*e*4/s.components*s.byteLength;case ms:case gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _s:case xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ia:case Ua:return Math.max(n,16)*Math.max(e,8)/4;case Da:case Na:return Math.max(n,8)*Math.max(e,8)/2;case Fa:case Oa:case za:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ba:case bs:case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $a:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Za:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case eo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case to:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case no:case io:case ro:return Math.ceil(n/4)*Math.ceil(e/4)*16;case so:case ao:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ts:case oo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gf(n){switch(n){case fn:case $c:return{byteLength:1,components:1};case Pr:case qc:case qn:return{byteLength:2,components:1};case Do:case Io:return{byteLength:2,components:4};case $n:case Lo:case kn:return{byteLength:4,components:1};case Yc:case Kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pd(){let n=null,e=!1,t=null,r=null;function s(a,o){r=n.requestAnimationFrame(s),t(a,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Hf(n){const e=new WeakMap;function t(l,c){const d=l.array,u=l.usage,f=d.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,d,u),l.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)g=n.HALF_FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,c,d){const u=c.array,f=c.updateRanges;if(n.bindBuffer(d,l),f.length===0)n.bufferSubData(d,0,u);else{f.sort((g,_)=>g.start-_.start);let p=0;for(let g=1;g<f.length;g++){const _=f[p],v=f[g];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++p,f[p]=v)}f.length=p+1;for(let g=0,_=f.length;g<_;g++){const v=f[g];n.bufferSubData(d,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(n.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,t(l,c));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,c),d.version=l.version}}return{get:s,remove:a,update:o}}var Vf=`#ifdef USE_ALPHAHASH
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
}`,Xe={alphahash_fragment:Vf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:$f,alphatest_fragment:qf,alphatest_pars_fragment:Yf,aomap_fragment:Kf,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:Qf,begin_vertex:jf,beginnormal_vertex:eh,bsdfs:th,iridescence_fragment:nh,bumpmap_pars_fragment:ih,clipping_planes_fragment:rh,clipping_planes_pars_fragment:sh,clipping_planes_pars_vertex:ah,clipping_planes_vertex:oh,color_fragment:lh,color_pars_fragment:ch,color_pars_vertex:dh,color_vertex:uh,common:fh,defaultnormal_vertex:hh,displacementmap_pars_vertex:ph,displacementmap_vertex:mh,emissivemap_fragment:gh,emissivemap_pars_fragment:_h,colorspace_fragment:xh,colorspace_pars_fragment:vh,envmap_fragment:Mh,envmap_common_pars_fragment:Sh,envmap_pars_fragment:yh,envmap_pars_vertex:Eh,envmap_physical_pars_fragment:Nh,envmap_vertex:bh,fog_vertex:Th,fog_pars_vertex:Ah,fog_fragment:wh,fog_pars_fragment:Rh,gradientmap_pars_fragment:Ch,lightmap_pars_fragment:Ph,lights_lambert_fragment:Lh,lights_lambert_pars_fragment:Dh,lights_pars_begin:Ih,lights_toon_fragment:Uh,lights_toon_pars_fragment:Fh,lights_phong_fragment:Oh,lights_phong_pars_fragment:Bh,lights_physical_fragment:zh,lights_physical_pars_fragment:kh,lights_fragment_begin:Gh,lights_fragment_maps:Hh,lights_fragment_end:Vh,lightprobes_pars_fragment:Wh,logdepthbuf_fragment:Xh,logdepthbuf_pars_fragment:$h,logdepthbuf_pars_vertex:qh,logdepthbuf_vertex:Yh,map_fragment:Kh,map_pars_fragment:Zh,map_particle_fragment:Jh,map_particle_pars_fragment:Qh,metalnessmap_fragment:jh,metalnessmap_pars_fragment:ep,morphinstance_vertex:tp,morphcolor_vertex:np,morphnormal_vertex:ip,morphtarget_pars_vertex:rp,morphtarget_vertex:sp,normal_fragment_begin:ap,normal_fragment_maps:op,normal_pars_fragment:lp,normal_pars_vertex:cp,normal_vertex:dp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:pp,iridescence_pars_fragment:mp,opaque_fragment:gp,packing:_p,premultiplied_alpha_fragment:xp,project_vertex:vp,dithering_fragment:Mp,dithering_pars_fragment:Sp,roughnessmap_fragment:yp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:Tp,shadowmap_vertex:Ap,shadowmask_pars_fragment:wp,skinbase_vertex:Rp,skinning_pars_vertex:Cp,skinning_vertex:Pp,skinnormal_vertex:Lp,specularmap_fragment:Dp,specularmap_pars_fragment:Ip,tonemapping_fragment:Np,tonemapping_pars_fragment:Up,transmission_fragment:Fp,transmission_pars_fragment:Op,uv_pars_fragment:Bp,uv_pars_vertex:zp,uv_vertex:kp,worldpos_vertex:Gp,background_vert:Hp,background_frag:Vp,backgroundCube_vert:Wp,backgroundCube_frag:Xp,cube_vert:$p,cube_frag:qp,depth_vert:Yp,depth_frag:Kp,distance_vert:Zp,distance_frag:Jp,equirect_vert:Qp,equirect_frag:jp,linedashed_vert:em,linedashed_frag:tm,meshbasic_vert:nm,meshbasic_frag:im,meshlambert_vert:rm,meshlambert_frag:sm,meshmatcap_vert:am,meshmatcap_frag:om,meshnormal_vert:lm,meshnormal_frag:cm,meshphong_vert:dm,meshphong_frag:um,meshphysical_vert:fm,meshphysical_frag:hm,meshtoon_vert:pm,meshtoon_frag:mm,points_vert:gm,points_frag:_m,shadow_vert:xm,shadow_frag:vm,sprite_vert:Mm,sprite_frag:Sm},xe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},zn={basic:{uniforms:Zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Zt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Zt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Zt([xe.points,xe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Zt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Zt([xe.common,xe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Zt([xe.sprite,xe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:Zt([xe.common,xe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:Zt([xe.lights,xe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};zn.physical={uniforms:Zt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const fs={r:0,b:0,g:0},ym=new ft,md=new Be;md.set(-1,0,0,0,1,0,0,0,1);function Em(n,e,t,r,s,a){const o=new qe(0);let l=s===!0?0:1,c,d,u=null,f=0,p=null;function g(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const b=y.backgroundBlurriness>0;w=e.get(w,b)}return w}function _(y){let w=!1;const b=g(y);b===null?m(o,l):b&&b.isColor&&(m(b,1),w=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,w){const b=g(w);b&&b.isCubeTexture?(d===void 0&&(d=new tn(new Fi(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:cr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=b,d.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(md),d.material.toneMapped=Je.getTransfer(b.colorSpace)!==st,(u!==b||f!==b.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,u=b,f=b.version,p=n.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new tn(new Si(2,2),new Ni({name:"BackgroundMaterial",uniforms:cr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Je.getTransfer(b.colorSpace)!==st,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,p=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,w){y.getRGB(fs,ud(n)),t.buffers.color.setClear(fs.r,fs.g,fs.b,w,a)}function h(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),l=w,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:_,addToRenderList:v,dispose:h}}function bm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},s=p(null);let a=s,o=!1;function l(N,F,X,D,W){let j=!1;const G=f(N,D,X,F);a!==G&&(a=G,d(a.object)),j=g(N,D,X,W),j&&_(N,D,X,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,b(N,F,X,D),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function d(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function f(N,F,X,D){const W=D.wireframe===!0;let j=r[F.id];j===void 0&&(j={},r[F.id]=j);const G=N.isInstancedMesh===!0?N.id:0;let se=j[G];se===void 0&&(se={},j[G]=se);let Y=se[X.id];Y===void 0&&(Y={},se[X.id]=Y);let ne=Y[W];return ne===void 0&&(ne=p(c()),Y[W]=ne),ne}function p(N){const F=[],X=[],D=[];for(let W=0;W<t;W++)F[W]=0,X[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:D,object:N,attributes:{},index:null}}function g(N,F,X,D){const W=a.attributes,j=F.attributes;let G=0;const se=X.getAttributes();for(const Y in se)if(se[Y].location>=0){const ie=W[Y];let Ae=j[Y];if(Ae===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(Ae=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(Ae=N.instanceColor)),ie===void 0||ie.attribute!==Ae||Ae&&ie.data!==Ae.data)return!0;G++}return a.attributesNum!==G||a.index!==D}function _(N,F,X,D){const W={},j=F.attributes;let G=0;const se=X.getAttributes();for(const Y in se)if(se[Y].location>=0){let ie=j[Y];ie===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor));const Ae={};Ae.attribute=ie,ie&&ie.data&&(Ae.data=ie.data),W[Y]=Ae,G++}a.attributes=W,a.attributesNum=G,a.index=D}function v(){const N=a.newAttributes;for(let F=0,X=N.length;F<X;F++)N[F]=0}function m(N){h(N,0)}function h(N,F){const X=a.newAttributes,D=a.enabledAttributes,W=a.attributeDivisors;X[N]=1,D[N]===0&&(n.enableVertexAttribArray(N),D[N]=1),W[N]!==F&&(n.vertexAttribDivisor(N,F),W[N]=F)}function y(){const N=a.newAttributes,F=a.enabledAttributes;for(let X=0,D=F.length;X<D;X++)F[X]!==N[X]&&(n.disableVertexAttribArray(X),F[X]=0)}function w(N,F,X,D,W,j,G){G===!0?n.vertexAttribIPointer(N,F,X,W,j):n.vertexAttribPointer(N,F,X,D,W,j)}function b(N,F,X,D){v();const W=D.attributes,j=X.getAttributes(),G=F.defaultAttributeValues;for(const se in j){const Y=j[se];if(Y.location>=0){let ne=W[se];if(ne===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor)),ne!==void 0){const ie=ne.normalized,Ae=ne.itemSize,ke=e.get(ne);if(ke===void 0)continue;const J=ke.buffer,ve=ke.type,Ee=ke.bytesPerElement,Le=ve===n.INT||ve===n.UNSIGNED_INT||ne.gpuType===Lo;if(ne.isInterleavedBufferAttribute){const Me=ne.data,He=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,Mt=ne.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let Ie=0;Ie<Y.locationSize;Ie++)h(Y.location+Ie,Me.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ie=0;Ie<Y.locationSize;Ie++)m(Y.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Ie=0;Ie<Y.locationSize;Ie++)w(Y.location+Ie,Ae/Y.locationSize,ve,ie,He*Ee,(Mt+Ae/Y.locationSize*Ie)*Ee,Le)}else{if(ne.isInstancedBufferAttribute){for(let Me=0;Me<Y.locationSize;Me++)h(Y.location+Me,ne.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Me=0;Me<Y.locationSize;Me++)m(Y.location+Me);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Me=0;Me<Y.locationSize;Me++)w(Y.location+Me,Ae/Y.locationSize,ve,ie,Ae*Ee,Ae/Y.locationSize*Me*Ee,Le)}}else if(G!==void 0){const ie=G[se];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(Y.location,ie);break;case 3:n.vertexAttrib3fv(Y.location,ie);break;case 4:n.vertexAttrib4fv(Y.location,ie);break;default:n.vertexAttrib1fv(Y.location,ie)}}}}y()}function R(){I();for(const N in r){const F=r[N];for(const X in F){const D=F[X];for(const W in D){const j=D[W];for(const G in j)u(j[G].object),delete j[G];delete D[W]}}delete r[N]}}function A(N){if(r[N.id]===void 0)return;const F=r[N.id];for(const X in F){const D=F[X];for(const W in D){const j=D[W];for(const G in j)u(j[G].object),delete j[G];delete D[W]}}delete r[N.id]}function x(N){for(const F in r){const X=r[F];for(const D in X){const W=X[D];if(W[N.id]===void 0)continue;const j=W[N.id];for(const G in j)u(j[G].object),delete j[G];delete W[N.id]}}}function E(N){for(const F in r){const X=r[F],D=N.isInstancedMesh===!0?N.id:0,W=X[D];if(W!==void 0){for(const j in W){const G=W[j];for(const se in G)u(G[se].object),delete G[se];delete W[j]}delete X[D],Object.keys(X).length===0&&delete r[F]}}}function I(){P(),o=!0,a!==s&&(a=s,d(a.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:I,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:E,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Tm(n,e,t){let r;function s(c){r=c}function a(c,d){n.drawArrays(r,c,d),t.update(d,r,1)}function o(c,d,u){u!==0&&(n.drawArraysInstanced(r,c,d,u),t.update(d,r,u))}function l(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=d[g];t.update(p,r,1)}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=l}function Am(n,e,t,r){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Gn&&r.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(x){const E=x===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==fn&&x!==kn&&!E&&r.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const u=c(d);u!==d&&(Fe("WebGLRenderer:",d,"not supported, using",u,"instead."),d=u);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:b,maxSamples:R,samples:A}}function wm(n){const e=this;let t=null,r=0,s=!1,a=!1;const o=new ni,l=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||r!==0||s;return s=p,r=f.length,g},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){t=u(f,p,0)},this.setState=function(f,p,g){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!s||_===null||_.length===0||a&&!m)a?u(null):d();else{const y=a?0:r,w=y*4;let b=h.clippingState||null;c.value=b,b=u(_,p,w,g);for(let R=0;R!==w;++R)b[R]=t[R];h.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function d(){c.value!==t&&(c.value=t,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(f,p,g,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const h=g+v*4,y=p.matrixWorldInverse;l.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let w=0,b=g;w!==v;++w,b+=4)o.copy(f[w]).applyMatrix4(y,l),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}class Zo extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},s=[r,r,r,r,r,r];this.texture=new ld(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fi(5,5,5),a=new Ni({name:"CubemapFromEquirect",uniforms:cr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:an,blending:nr});a.uniforms.tEquirect.value=t;const o=new tn(s,a),l=t.minFilter;return t.minFilter===gi&&(t.minFilter=sn),new uo(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,r=!0,s=!0){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,r,s);e.setRenderTarget(a)}}const Jl=256,Rm=3,Cm=20,gd=256,_d=16,Pm=3,Lm=new B,Dm=new qe;class Ps{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new uo(1,10,null),this._boxMesh=new tn(new Fi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,s=100,a={}){const{size:o=256,position:l=Lm}=a,c=this._renderer;this._setSize(o);const d=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const f=c.autoClear,p=c.autoClearColor,g=c.autoClearDepth,_=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(Dm));const m=new uo(r,s,u);return m.position.copy(l),m.update(c,e),c.autoClear=f,c.autoClearColor=p,c.autoClearDepth=g,c.autoClearStencil=_,e.background=v,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(d,t)),this._applyPMREM(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Jl,ju(e))}_fromTexture(e,t){e.mapping===ar||e.mapping===Cr?this._setSize(e.image.length===0?Jl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Ql(e,!1,!1),r=Math.log2(e)-Rm;for(let s=0;s<=r;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Ql(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const s=this._boxMesh,a=this._cubeCamera;s.material=r,a.renderTarget=e,a.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),a.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ar||e.mapping===Cr?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=jl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Im(),this._integrationMaterial=Nm());const t=this._cubeSize,r=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(t/_d);for(let o=0;o<=r;o++){const l=Ps.lodToRoughness(o,r);if(o>r-Pm)a.roughness.value=l,this._renderCube(e,o,this._integrationMaterial);else{const c=l>0?Math.log2(t)+.5*Math.log2(6/(gd*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Um());const r=this._blurMaterial,s=r.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(e,0,r),s.envMap.value=e.texture,this._renderCube(a,0,r)}}function Ql(n,e,t){return new Zo(n,{minFilter:gi,generateMipmaps:e,type:qn,colorSpace:As,depthBuffer:t})}function Hr(n,e,t){return new Ni({name:n,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:t,side:an,blending:nr,depthTest:!1,depthWrite:!1})}function Im(){return Hr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function jl(){return Hr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ec(){return Hr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Fm(n){let e=new WeakMap,t=new WeakMap,r=null;function s(p,g=!1){return p==null?null:g?o(p):a(p)}function a(p){if(p&&p.isTexture){const g=p.mapping;if(g===Ws||g===Xs)if(e.has(p)){const _=e.get(p).texture;return l(_,p.mapping)}else{const _=p.image;if(_&&_.height>0){const v=new Zo(_.height);return v.fromEquirectangularTexture(n,p),e.set(p,v),p.addEventListener("dispose",d),l(v.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){const g=p.mapping,_=g===Ws||g===Xs,v=g===ar||g===Cr;if(_||v){let m=t.get(p);const h=m!==void 0?m.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==h)return r===null&&(r=new Ps(n)),m=_?r.fromEquirectangular(p,m):r.fromCubemap(p,m),m.texture.pmremVersion=p.pmremVersion,t.set(p,m),m.texture;if(m!==void 0)return m.texture;{const y=p.image;return _&&y&&y.height>0||v&&y&&c(y)?(r===null&&(r=new Ps(n)),m=_?r.fromEquirectangular(p):r.fromCubemap(p),m.texture.pmremVersion=p.pmremVersion,t.set(p,m),p.addEventListener("dispose",u),m.texture):null}}}return p}function l(p,g){return g===Ws?p.mapping=ar:g===Xs&&(p.mapping=Cr),p}function c(p){let g=0;const _=6;for(let v=0;v<_;v++)p[v]!==void 0&&g++;return g===_}function d(p){const g=p.target;g.removeEventListener("dispose",d);const _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function u(p){const g=p.target;g.removeEventListener("dispose",u);const _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:s,dispose:f}}function Om(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const s=n.getExtension(r);return e[r]=s,s}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const s=t(r);return s===null&&vs("WebGLRenderer: "+r+" extension not supported."),s}}}function Bm(n,e,t,r){const s={},a=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function l(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(const m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",l),delete s[_.id],o.unregister(_);const v=a.get(_);v&&(e.remove(v),a.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(_,v){return s[v.id]!==void 0||(v.addEventListener("dispose",l),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function u(_){const v=_.attributes;for(const m in v)e.update(v[m],n.ARRAY_BUFFER)}function f(_){const v=_.index,m=_.attributes.position;let h=0;if(m===void 0)return;const y=v!==null?v.array.length:m.array.length/3-1,w=m.count>=65535?ad:sd,b=new w(Math.ceil(y/3)*6,1),R=b.array;if(v!==null){const x=v.array;h=v.version;for(let E=0,I=0;E<y;E+=3){const P=x[E+0],N=x[E+1],F=x[E+2];R[I++]=P,R[I++]=N,R[I++]=N,R[I++]=F,R[I++]=F,R[I++]=P}}else{h=m.version;for(let x=0,E=0;x<y;x+=3){const I=x+0,P=x+1,N=x+2;R[E++]=I,R[E++]=P,R[E++]=P,R[E++]=N,R[E++]=N,R[E++]=I}}b.version=h;const A=a.get(_);A&&e.remove(A),a.set(_,b)}function p(_){const v=a.get(_);if(v){const m=_.index;m!==null&&v.version<m.version&&f(_)}else f(_);return a.get(_)}function g(){for(const _ in s){const v=s[_].deref();v!==void 0&&c(v)}}return{get:d,update:u,getWireframeAttribute:p,dispose:g}}function zm(n,e,t){let r;function s(f){r=f}let a,o;function l(f){a=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(r,p,a,f*o),t.update(p,r,1)}function d(f,p,g){g!==0&&(n.drawElementsInstanced(r,p,a,f*o,g),t.update(p,r,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,a,f,0,g);let v=0;for(let m=0;m<g;m++)v+=p[m];t.update(v,r,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=u}function km(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,o,l){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=l*(a/3);break;case n.LINES:t.lines+=l*(a/2);break;case n.LINE_STRIP:t.lines+=l*(a-1);break;case n.LINE_LOOP:t.lines+=l*a;break;case n.POINTS:t.points+=l*a;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:r}}function Gm(n,e,t){const r=new WeakMap,s=new _t;function a(o,l,c){const d=o.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=u!==void 0?u.length:0;let p=r.get(l);if(p===void 0||p.count!==f){let P=function(){E.dispose(),r.delete(l),l.removeEventListener("dispose",P)};var g=P;p!==void 0&&p.texture.dispose();const _=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,h=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],w=l.morphAttributes.color||[];let b=0;_===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let R=l.attributes.position.count*b,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const x=new Float32Array(R*A*4*f),E=new id(x,R,A,f);E.type=kn,E.needsUpdate=!0;const I=b*4;for(let N=0;N<f;N++){const F=h[N],X=y[N],D=w[N],W=R*A*4*N;for(let j=0;j<F.count;j++){const G=j*I;_===!0&&(s.fromBufferAttribute(F,j),x[W+G+0]=s.x,x[W+G+1]=s.y,x[W+G+2]=s.z,x[W+G+3]=0),v===!0&&(s.fromBufferAttribute(X,j),x[W+G+4]=s.x,x[W+G+5]=s.y,x[W+G+6]=s.z,x[W+G+7]=0),m===!0&&(s.fromBufferAttribute(D,j),x[W+G+8]=s.x,x[W+G+9]=s.y,x[W+G+10]=s.z,x[W+G+11]=D.itemSize===4?s.w:1)}}p={count:f,texture:E,size:new $e(R,A)},r.set(l,p),l.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<d.length;m++)_+=d[m];const v=l.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",d)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:a}}function Hm(n,e,t,r,s){let a=new WeakMap;function o(d){const u=s.render.frame,f=d.geometry,p=e.get(d,f);if(a.get(p)!==u&&(e.update(p),a.set(p,u)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),a.get(d)!==u&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),a.set(d,u))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==u&&(g.update(),a.set(g,u))}return p}function l(){a=new WeakMap}function c(d){const u=d.target;u.removeEventListener("dispose",c),r.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:l}}const Vm={[zc]:"LINEAR_TONE_MAPPING",[kc]:"REINHARD_TONE_MAPPING",[Gc]:"CINEON_TONE_MAPPING",[Po]:"ACES_FILMIC_TONE_MAPPING",[Vc]:"AGX_TONE_MAPPING",[Wc]:"NEUTRAL_TONE_MAPPING",[Hc]:"CUSTOM_TONE_MAPPING"};function Wm(n,e,t,r,s,a){const o=new Wn(e,t,{type:n,depthBuffer:s,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,c=null,d=null;const u=new Mn;u.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ht([0,2,0,0,2,0],2));const f=new Lf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new tn(u,f),g=new Ko(-1,1,1,-1,0,1);let _=null,v=null,m=!1,h,y=null,w=[],b=!1;this.setSize=function(R,A){o.setSize(R,A),l!==null&&l.setSize(R,A),c!==null&&c.setSize(R,A);for(let x=0;x<w.length;x++){const E=w[x];E.setSize&&E.setSize(R,A)}},this.setEffects=function(R){w=R,b=w.length>0&&w[0].isRenderPass===!0;const A=o.width,x=o.height;w.length>0&&l===null&&(l=new Wn(A,x,{type:qn,depthBuffer:!1,stencilBuffer:!1}),c=new Wn(A,x,{type:qn,depthBuffer:!1,stencilBuffer:!1}));const E=s===!0&&w.some(I=>I.needsDepthTexture===!0);E!==(o.depthTexture!==null)&&(E===!0&&d===null&&(d=new lr(A,x),a===!0&&(d.format=_i,d.type=or)),o.dispose(),o.depthTexture=E?d:null,o.resolveDepthBuffer=E,o.storeMultisampledDepthBuffer=E);for(let I=0;I<w.length;I++){const P=w[I];P.setSize&&P.setSize(A,x),E&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(d)}},this.begin=function(R,A){if(m||R.toneMapping===si&&w.length===0)return!1;if(y=A,A!==null){const x=A.width,E=A.height;(o.width!==x||o.height!==E)&&this.setSize(x,E)}return b===!1&&R.setRenderTarget(o),h=R.toneMapping,R.toneMapping=si,!0},this.hasRenderPass=function(){return b},this.end=function(R,A){R.toneMapping=h,m=!0;let x=o,E=l;for(let I=0;I<w.length;I++){const P=w[I];P.enabled!==!1&&(P.render(R,E,x,A),P.needsSwap!==!1&&(x=E,E=E===l?c:l))}if(_!==R.outputColorSpace||v!==R.toneMapping){_=R.outputColorSpace,v=R.toneMapping,f.defines={},Je.getTransfer(_)===st&&(f.defines.SRGB_TRANSFER="");const I=Vm[v];I&&(f.defines[I]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,R.setRenderTarget(y),R.render(p,g),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),u.dispose(),f.dispose()}}const xd=new qt,vd=new lr(1,1),Md=new cd(1),Sd=new id,yd=new lf,Ed=new ld,tc=[],nc=[],ic=new Float32Array(16),rc=new Float32Array(9),sc=new Float32Array(4);function hr(n,e,t){const r=n[0];if(r<=0||r>0)return n;const s=e*t;let a=tc[s];if(a===void 0&&(a=new Float32Array(s),tc[s]=a),e!==0){r.toArray(a,0);for(let o=1,l=0;o!==e;++o)l+=t,n[o].toArray(a,l)}return a}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Fs(n,e){let t=nc[e];t===void 0&&(t=new Int32Array(e),nc[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function Xm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function Ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function Km(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,r))return;sc.set(r),n.uniformMatrix2fv(this.addr,!1,sc),Pt(t,r)}}function Zm(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,r))return;rc.set(r),n.uniformMatrix3fv(this.addr,!1,rc),Pt(t,r)}}function Jm(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,r))return;ic.set(r),n.uniformMatrix4fv(this.addr,!1,ic),Pt(t,r)}}function Qm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function ng(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function Os(n){return n.version===0&&(n.compareFunction=td,n.needsUpdate=!0),n}function ag(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?a=Os(vd):a=xd,t.setTexture2D(e||a,s)}function og(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),t.setTexture3D(e||yd,s)}function lg(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s);let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Os(Md):a=Ed,t.setTextureCube(e||a,s)}function cg(n,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(n.uniform1i(this.addr,s),r[0]=s),t.setTexture2DArray(e||Sd,s)}function dg(n){switch(n){case 5126:return Xm;case 35664:return $m;case 35665:return qm;case 35666:return Ym;case 35674:return Km;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return jm;case 35668:case 35672:return eg;case 35669:case 35673:return tg;case 5125:return ng;case 36294:return ig;case 36295:return rg;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function ug(n,e){n.uniform1fv(this.addr,e)}function fg(n,e){const t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function hg(n,e){const t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function pg(n,e){const t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function mg(n,e){const t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gg(n,e){const t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _g(n,e){const t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xg(n,e){n.uniform1iv(this.addr,e)}function vg(n,e){n.uniform2iv(this.addr,e)}function Mg(n,e){n.uniform3iv(this.addr,e)}function Sg(n,e){n.uniform4iv(this.addr,e)}function yg(n,e){n.uniform1uiv(this.addr,e)}function Eg(n,e){n.uniform2uiv(this.addr,e)}function bg(n,e){n.uniform3uiv(this.addr,e)}function Tg(n,e){n.uniform4uiv(this.addr,e)}function Ag(n,e,t){const r=this.cache,s=e.length,a=Fs(t,s);Ct(r,a)||(n.uniform1iv(this.addr,a),Pt(r,a));let o;this.type===n.SAMPLER_2D_SHADOW?o=Os(vd):o=xd;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,a[l])}function wg(n,e,t){const r=this.cache,s=e.length,a=Fs(t,s);Ct(r,a)||(n.uniform1iv(this.addr,a),Pt(r,a));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||yd,a[o])}function Rg(n,e,t){const r=this.cache,s=e.length,a=Fs(t,s);Ct(r,a)||(n.uniform1iv(this.addr,a),Pt(r,a));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Os(Md):o=Ed;for(let l=0;l!==s;++l)t.setTextureCube(e[l]||o,a[l])}function Cg(n,e,t){const r=this.cache,s=e.length,a=Fs(t,s);Ct(r,a)||(n.uniform1iv(this.addr,a),Pt(r,a));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sd,a[o])}function Pg(n){switch(n){case 5126:return ug;case 35664:return fg;case 35665:return hg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return xg;case 35667:case 35671:return vg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return yg;case 36294:return Eg;case 36295:return bg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}class Lg{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=dg(t.type)}}class Dg{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pg(t.type)}}class Ig{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const l=s[a];l.setValue(e,t[l.id],r)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function ac(n,e){n.seq.push(e),n.map[e.id]=e}function Ng(n,e,t){const r=n.name,s=r.length;for(_a.lastIndex=0;;){const a=_a.exec(r),o=_a.lastIndex;let l=a[1];const c=a[2]==="]",d=a[3];if(c&&(l=l|0),d===void 0||d==="["&&o+2===s){ac(t,d===void 0?new Lg(l,n,e):new Dg(l,n,e));break}else{let f=t.map[l];f===void 0&&(f=new Ig(l),ac(t,f)),t=f}}}class Ms{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);Ng(l,c,this)}const s=[],a=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):a.push(o);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,r,s){const a=this.map[t];a!==void 0&&a.setValue(e,r,s)}setOptional(e,t,r){const s=t[r];s!==void 0&&this.setValue(e,r,s)}static upload(e,t,r,s){for(let a=0,o=t.length;a!==o;++a){const l=t[a],c=r[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){const r=[];for(let s=0,a=e.length;s!==a;++s){const o=e[s];o.id in t&&r.push(o)}return r}}function oc(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const Ug=37297;let Fg=0;function Og(n,e){const t=n.split(`
`),r=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=s;o<a;o++){const l=o+1;r.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return r.join(`
`)}const lc=new Be;function Bg(n){Je._getMatrix(lc,Je.workingColorSpace,n);const e=`mat3( ${lc.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case ws:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cc(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Og(n.getShaderSource(e),l)}else return a}function zg(n,e){const t=Bg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const kg={[zc]:"Linear",[kc]:"Reinhard",[Gc]:"Cineon",[Po]:"ACESFilmic",[Vc]:"AgX",[Wc]:"Neutral",[Hc]:"Custom"};function Gg(n,e){const t=kg[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hs=new B;function Hg(){Je.getLuminanceCoefficients(hs);const n=hs.x.toFixed(4),e=hs.y.toFixed(4),t=hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function Wg(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Xg(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const a=n.getActiveAttrib(e,s),o=a.name;let l=1;a.type===n.FLOAT_MAT2&&(l=2),a.type===n.FLOAT_MAT3&&(l=3),a.type===n.FLOAT_MAT4&&(l=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:l}}return t}function br(n){return n!==""}function dc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function uc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(n){return n.replace($g,qg)}function qg(n,e){const t=Xe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ho(t)}const Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(n){return n.replace(Yg,Kg)}function Kg(n,e,t,r){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function hc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Zg={[ps]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function Jg(n){return Zg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qg={[Cr]:"ENVMAP_MODE_REFRACTION"};function jg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Qg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e0={[Co]:"ENVMAP_BLENDING_MULTIPLY",[Fu]:"ENVMAP_BLENDING_MIX",[Ou]:"ENVMAP_BLENDING_ADD"};function t0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":e0[n.combine]||"ENVMAP_BLENDING_NONE"}function n0(n,e,t,r){const s=n.getContext(),a=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=Jg(t),d=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=jg(t),f=t0(t),p=Vg(t),g=Wg(a),_=s.createProgram();let v,m,h=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`)):(v=[hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),m=[hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Xe.tonemapping_pars_fragment:"",t.toneMapping!==si?Gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,zg("linearToOutputTexel",t.outputColorSpace),Hg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),o=ho(o),o=dc(o,t),o=uc(o,t),l=ho(l),l=dc(l,t),l=uc(l,t),o=fc(o),l=fc(l),t.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=h+v+o,w=h+m+l,b=oc(s,s.VERTEX_SHADER,y),R=oc(s,s.FRAGMENT_SHADER,w);s.attachShader(_,b),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(b)||"",X=s.getShaderInfoLog(R)||"",D=N.trim(),W=F.trim(),j=X.trim();let G=!0,se=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,b,R);else{const Y=cc(s,b,"vertex"),ne=cc(s,R,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+Y+`
`+ne)}else D!==""?Fe("WebGLProgram: Program Info Log:",D):(W===""||j==="")&&(se=!1);se&&(P.diagnostics={runnable:G,programLog:D,vertexShader:{log:W,prefix:v},fragmentShader:{log:j,prefix:m}})}s.deleteShader(b),s.deleteShader(R),x=new Ms(s,_),E=Xg(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,Ug)),I},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=R,this}let i0=0;class r0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new s0(e),t.set(e,r)),r}}class s0{constructor(e){this.id=i0++,this.code=e,this.usedTimes=0}}function a0(n){return n===Ii||n===bs||n===Ts}function o0(n,e,t,r,s,a){const o=new zo,l=new r0,c=new Set,d=[],u=new Map,f=r.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,E,I,P,N,F){const X=P.fog,D=N.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||W,j),se=p[x.type];let Y=r.precision;x.precision!==null&&(Y=r.getMaxPrecision(x.precision),Y!==x.precision&&Fe("WebGLProgram.getParameters:",x.precision,"not supported, using",Y,"instead."));const ne=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ie=ne!==void 0?ne.length:0;let Ae=0;D.morphAttributes.position!==void 0&&(Ae=1),D.morphAttributes.normal!==void 0&&(Ae=2),D.morphAttributes.color!==void 0&&(Ae=3);let ke,J,ve,Ee;if(se){const _e=zn[se];ke=_e.vertexShader,J=_e.fragmentShader}else{ke=x.vertexShader,J=x.fragmentShader;const _e=l.getVertexShaderStage(x),rt=l.getFragmentShaderStage(x);l.update(x,_e,rt),ve=_e.id,Ee=rt.id}const Le=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),He=N.isInstancedMesh===!0,Mt=N.isBatchedMesh===!0,Ie=!!x.map,it=!!x.matcap,ot=!!G,Ye=ot&&G.isPMREMTexture===!0,Bt=!!x.aoMap,bt=!!x.lightMap,nn=!!x.bumpMap&&x.wireframe===!1,pt=!!x.normalMap,Nn=!!x.displacementMap,Lt=!!x.emissiveMap,hn=!!x.metalnessMap,pn=!!x.roughnessMap,mn=x.anisotropy>0,U=x.clearcoat>0,gn=x.diffuseRoughness>0,dt=x.dispersion>0,ut=x.retroreflectivity>0,ge=x.iridescence>0,Tt=x.sheen>0,De=x.transmission>0,Oe=mn&&!!x.anisotropyMap,T=U&&!!x.clearcoatMap,M=U&&!!x.clearcoatNormalMap,z=U&&!!x.clearcoatRoughnessMap,re=gn&&!!x.diffuseRoughnessMap,te=ge&&!!x.iridescenceMap,ce=ge&&!!x.iridescenceThicknessMap,pe=Tt&&!!x.sheenColorMap,K=Tt&&!!x.sheenRoughnessMap,Z=!!x.specularMap,ue=!!x.specularColorMap,C=!!x.specularIntensityMap,Q=De&&!!x.transmissionMap,$=De&&!!x.thicknessMap,fe=!!x.gradientMap,le=!!x.alphaMap,de=x.alphaTest>0,Re=!!x.alphaHash,We=!!x.extensions;let oe=si;x.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(oe=n.toneMapping);const Ce=Ye?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ve={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:J,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Y,batching:Mt,batchingColor:Mt&&N._colorsTexture!==null,instancing:He,instancingColor:He&&N.instanceColor!==null,instancingMorph:He&&N.morphTexture!==null,outputColorSpace:Le===null?n.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ie,matcap:it,envMap:ot,envMapMode:ot&&G.mapping,envMapPMREM:Ye,envMapMaxLod:Ye?Ce.length-1:null,envMapSize:Ye?Ce[0].width:null,aoMap:Bt,lightMap:bt,bumpMap:nn,normalMap:pt,displacementMap:Nn,emissiveMap:Lt,normalMapObjectSpace:pt&&x.normalMapType===ku,normalMapTangentSpace:pt&&x.normalMapType===lo,packedNormalMap:pt&&x.normalMapType===lo&&a0(x.normalMap.format),metalnessMap:hn,roughnessMap:pn,anisotropy:mn,anisotropyMap:Oe,clearcoat:U,clearcoatMap:T,clearcoatNormalMap:M,clearcoatRoughnessMap:z,diffuseRoughness:gn,diffuseRoughnessMap:re,dispersion:dt,retroreflection:ut,iridescence:ge,iridescenceMap:te,iridescenceThicknessMap:ce,sheen:Tt,sheenColorMap:pe,sheenRoughnessMap:K,specularMap:Z,specularColorMap:ue,specularIntensityMap:C,transmission:De,transmissionMap:Q,thicknessMap:$,gradientMap:fe,opaque:x.transparent===!1&&x.blending===Ar&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:de,alphaHash:Re,combine:x.combine,mapUv:Ie&&g(x.map.channel),aoMapUv:Bt&&g(x.aoMap.channel),lightMapUv:bt&&g(x.lightMap.channel),bumpMapUv:nn&&g(x.bumpMap.channel),normalMapUv:pt&&g(x.normalMap.channel),displacementMapUv:Nn&&g(x.displacementMap.channel),emissiveMapUv:Lt&&g(x.emissiveMap.channel),metalnessMapUv:hn&&g(x.metalnessMap.channel),roughnessMapUv:pn&&g(x.roughnessMap.channel),anisotropyMapUv:Oe&&g(x.anisotropyMap.channel),clearcoatMapUv:T&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&g(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&g(x.diffuseRoughnessMap.channel),iridescenceMapUv:te&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:K&&g(x.sheenRoughnessMap.channel),specularMapUv:Z&&g(x.specularMap.channel),specularColorMapUv:ue&&g(x.specularColorMap.channel),specularIntensityMapUv:C&&g(x.specularIntensityMap.channel),transmissionMapUv:Q&&g(x.transmissionMap.channel),thicknessMapUv:$&&g(x.thicknessMap.channel),alphaMapUv:le&&g(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(pt||mn),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(Ie||le),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ae,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:F.filter(_e=>_e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,decodeVideoTexture:Ie&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===st,decodeVideoTextureEmissive:Lt&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qt,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:We&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&x.extensions.multiDraw===!0||Mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function v(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(E,x),h(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function m(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapPMREM),x.push(E.envMapMaxLod),x.push(E.envMapSize),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.diffuseRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.numLightProbeGrids),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function h(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.diffuseRoughness&&o.enable(25),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){const E=p[x.type];let I;if(E){const P=zn[E];I=Rf.clone(P.uniforms)}else I=x.uniforms;return I}function w(x,E){let I=u.get(E);return I!==void 0?++I.usedTimes:(I=new n0(n,E,x,s),d.push(I),u.set(E,I)),I}function b(x){if(--x.usedTimes===0){const E=d.indexOf(x);d[E]=d[d.length-1],d.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){l.remove(x)}function A(){l.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:y,acquireProgram:w,releaseProgram:b,releaseShaderCache:R,programs:d,dispose:A}}function l0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function r(o){n.delete(o)}function s(o,l,c){n.get(o)[l]=c}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:s,dispose:a}}function c0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function pc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mc(){const n=[];let e=0;const t=[],r=[],s=[];function a(){e=0,t.length=0,r.length=0,s.length=0}function o(p){let g=0;return p.isInstancedMesh&&(g+=2),p.isSkinnedMesh&&(g+=1),g}function l(p,g,_,v,m,h){let y=n[e];return y===void 0?(y={id:p.id,object:p,geometry:g,material:_,materialVariant:o(p),groupOrder:v,renderOrder:p.renderOrder,z:m,group:h},n[e]=y):(y.id=p.id,y.object=p,y.geometry=g,y.material=_,y.materialVariant=o(p),y.groupOrder=v,y.renderOrder=p.renderOrder,y.z=m,y.group=h),e++,y}function c(p,g,_,v,m,h,y){y.reversedDepth===!0&&(m=-m);const w=l(p,g,_,v,m,h);_.transmission>0?r.push(w):_.transparent===!0?s.push(w):t.push(w)}function d(p,g,_,v,m,h){const y=l(p,g,_,v,m,h);_.transmission>0?r.unshift(y):_.transparent===!0?s.unshift(y):t.unshift(y)}function u(p,g){t.length>1&&t.sort(p||c0),r.length>1&&r.sort(g||pc),s.length>1&&s.sort(g||pc)}function f(){for(let p=e,g=n.length;p<g;p++){const _=n[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:r,transparent:s,init:a,push:c,unshift:d,finish:f,sort:u}}function d0(){let n=new WeakMap;function e(r,s){const a=n.get(r);let o;return a===void 0?(o=new mc,n.set(r,[o])):s>=a.length?(o=new mc,a.push(o)):o=a[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function u0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new qe};break;case"SpotLight":t={position:new B,direction:new B,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function f0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let h0=0;function p0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function m0(n){const e=new u0,t=f0(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new B);const s=new B,a=new ft,o=new ft;function l(d){let u=0,f=0,p=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let g=0,_=0,v=0,m=0,h=0,y=0,w=0,b=0,R=0,A=0,x=0,E=0,I=0,P=0;d.sort(p0);for(let F=0,X=d.length;F<X;F++){const D=d[F],W=D.color,j=D.intensity,G=D.distance;let se=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ii?se=D.shadow.map.texture:se=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=W.r*j,f+=W.g*j,p+=W.b*j;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(D.sh.coefficients[Y],j);P++}else if(D.isSunLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,ie=t.get(D);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),r.sunShadow[_]=ie,r.sunShadowMap[_]=se;const Ae=ne.getViewportCount();for(let ke=0;ke<Ae;ke++)r.sunShadowMatrix[v+ke]=ne.getMatrix(ke),r.sunShadowCascade[v+ke]=ne._cascadeData[ke];v+=Ae,_++}r.sun[g]=Y,g++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,ie=t.get(D);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,r.directionalShadow[m]=ie,r.directionalShadowMap[m]=se,r.directionalShadowMatrix[m]=D.shadow.matrix,R++}r.directional[m]=Y,m++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(W).multiplyScalar(j),Y.distance=G,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,r.spot[y]=Y;const ne=D.shadow;if(D.map&&(r.spotLightMap[E]=D.map,E++,ne.updateMatrices(D),D.castShadow&&I++),r.spotLightMatrix[y]=ne.matrix,D.castShadow){const ie=t.get(D);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,r.spotShadow[y]=ie,r.spotShadowMap[y]=se,x++}y++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(W).multiplyScalar(j),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),r.rectArea[w]=Y,w++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const ne=D.shadow,ie=t.get(D);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,ie.shadowCameraNear=ne.camera.near,ie.shadowCameraFar=ne.camera.far,r.pointShadow[h]=ie,r.pointShadowMap[h]=se,r.pointShadowMatrix[h]=D.shadow.matrix,A++}r.point[h]=Y,h++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(j),Y.groundColor.copy(D.groundColor).multiplyScalar(j),r.hemi[b]=Y,b++}}w>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=p;const N=r.hash;(N.sunLength!==g||N.directionalLength!==m||N.pointLength!==h||N.spotLength!==y||N.rectAreaLength!==w||N.hemiLength!==b||N.numSunShadows!==_||N.numDirectionalShadows!==R||N.numPointShadows!==A||N.numSpotShadows!==x||N.numSpotMaps!==E||N.numLightProbes!==P)&&(r.sun.length=g,r.directional.length=m,r.spot.length=y,r.rectArea.length=w,r.point.length=h,r.hemi.length=b,r.sunShadow.length=_,r.sunShadowMap.length=_,r.sunShadowMatrix.length=v,r.sunShadowCascade.length=v,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.directionalShadowMatrix.length=R,r.pointShadow.length=A,r.pointShadowMap.length=A,r.pointShadowMatrix.length=A,r.spotShadow.length=x,r.spotShadowMap.length=x,r.spotLightMatrix.length=x+E-I,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=P,N.sunLength=g,N.directionalLength=m,N.pointLength=h,N.spotLength=y,N.rectAreaLength=w,N.hemiLength=b,N.numSunShadows=_,N.numDirectionalShadows=R,N.numPointShadows=A,N.numSpotShadows=x,N.numSpotMaps=E,N.numLightProbes=P,r.version=h0++)}function c(d,u){let f=0,p=0,g=0,_=0,v=0,m=0;const h=u.matrixWorldInverse;for(let y=0,w=d.length;y<w;y++){const b=d[y];if(b.isSunLight){const R=r.sun[f];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(h),f++}else if(b.isDirectionalLight){const R=r.directional[p];R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(h),p++}else if(b.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(h),_++}else if(b.isRectAreaLight){const R=r.rectArea[v];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),o.identity(),a.copy(b.matrixWorld),a.premultiply(h),o.extractRotation(a),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),g++}else if(b.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function gc(n){const e=new m0(n),t=[],r=[],s=[];function a(f){u.camera=f,t.length=0,r.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function l(f){r.push(f)}function c(){e.setup(t),s.sort((f,p)=>f.priority-p.priority||f.id-p.id)}function d(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:r,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:l}}function g0(n){let e=new WeakMap;function t(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new gc(n),e.set(s,[l])):a>=o.length?(l=new gc(n),o.push(l)):l=o[a],l}function r(){e=new WeakMap}return{get:t,dispose:r}}const _0=`void main() {
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
}`,v0=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],M0=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],_c=new ft,vr=new B,xa=new B;function S0(n,e,t){let r=new Dr;const s=new $e,a=new $e,o=new _t,l=new If,c=new Nf,d={},u=t.maxTextureSize,f={[Di]:an,[an]:Di,[Qt]:Qt},p=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:_0,fragmentShader:x0}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new Mn;_.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new tn(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ps;let h=this.type;this.render=function(A,x,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Fc&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ps);const I=n.getRenderTarget(),P=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(nr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const X=h!==this.type;X&&x.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(W=>W.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,W=A.length;D<W;D++){const j=A[D],G=j.shadow;if(G===void 0){Fe("WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const se=G.getFrameExtents();s.multiply(se),a.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/se.x),s.x=a.x*se.x,G.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/se.y),s.y=a.y*se.y,G.mapSize.y=a.y));const Y=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Y,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Er){if(j.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Wn(s.x,s.y,{format:Ii,type:qn,minFilter:sn,magFilter:sn,generateMipmaps:!1}),G.map.texture.name=j.name+".shadowMap",G.map.depthTexture=new lr(s.x,s.y,kn),G.map.depthTexture.name=j.name+".shadowMapDepth",G.map.depthTexture.format=vi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=kt,G.map.depthTexture.magFilter=kt}else j.isPointLight?(G.map=new Zo(s.x),G.map.depthTexture=new cd(s.x,$n)):(G.map=new Wn(s.x,s.y),G.map.depthTexture=new lr(s.x,s.y,$n)),G.map.depthTexture.name=j.name+".shadowMap",G.map.depthTexture.format=vi,this.type===ps?(G.map.depthTexture.compareFunction=Y?ed:jc,G.map.depthTexture.minFilter=sn,G.map.depthTexture.magFilter=sn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=kt,G.map.depthTexture.magFilter=kt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);const ne=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();j.isPointLight!==!0&&G.updateMatrices(j,E);const ie=G.camera.layers.mask&4294967294?G.camera.layers:E.layers;for(let Ae=0;Ae<ne;Ae++){const ke=G.getCamera(Ae);if(j.isPointLight){const J=G.camera,ve=G.matrix,Ee=j.distance||J.far;Ee!==J.far&&(J.far=Ee,J.updateProjectionMatrix()),vr.setFromMatrixPosition(j.matrixWorld),J.position.copy(vr),xa.copy(J.position),xa.add(v0[Ae]),J.up.copy(M0[Ae]),J.lookAt(xa),J.updateMatrixWorld(),ve.makeTranslation(-vr.x,-vr.y,-vr.z),_c.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(_c,J.coordinateSystem,J.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,Ae),n.clear();else{Ae===0&&(n.setRenderTarget(G.map),n.clear());const J=G.getViewport(Ae);o.set(a.x*J.x,a.y*J.y,a.x*J.z,a.y*J.w),F.viewport(o)}r=G.getFrustum(Ae),b(x,E,ke,j,ie,this.type)}G.isPointLightShadow!==!0&&this.type===Er&&y(G,E),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(I,P,N)};function y(A,x){const E=e.update(v);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null?A.mapPass=new Wn(s.x,s.y,{format:Ii,type:qn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),p.uniforms.shadow_pass.value=A.map.depthTexture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(x,null,E,p,v,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value.set(A.map.width,A.map.height),g.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(x,null,E,g,v,null)}function w(A,x,E,I){let P=null;const N=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)P=N;else if(P=E.isPointLight===!0?c:l,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const F=P.uuid,X=x.uuid;let D=d[F];D===void 0&&(D={},d[F]=D);let W=D[X];W===void 0&&(W=P.clone(),D[X]=W,x.addEventListener("dispose",R)),P=W}if(P.visible=x.visible,P.wireframe=x.wireframe,I===Er?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:f[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=n.properties.get(P);F.light=E}return P}function b(A,x,E,I,P,N){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===Er)&&(!A.frustumCulled||A.intersectsFrustum(r))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);const D=e.update(A),W=A.material;if(Array.isArray(W)){const j=D.groups;for(let G=0,se=j.length;G<se;G++){const Y=j[G],ne=W[Y.materialIndex];if(ne&&ne.visible){const ie=w(A,ne,I,N);A.onBeforeShadow(n,A,x,E,D,ie,Y),n.renderBufferDirect(E,null,D,ie,A,Y),A.onAfterShadow(n,A,x,E,D,ie,Y)}}}else if(W.visible){const j=w(A,W,I,N);A.onBeforeShadow(n,A,x,E,D,j,null),n.renderBufferDirect(E,null,D,j,A,null),A.onAfterShadow(n,A,x,E,D,j,null)}}const X=A.children;for(let D=0,W=X.length;D<W;D++)b(X[D],x,E,I,P,N)}function R(A){A.target.removeEventListener("dispose",R);for(const E in d){const I=d[E],P=A.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}}function y0(n,e){function t(){let C=!1;const Q=new _t;let $=null;const fe=new _t(0,0,0,0);return{setMask:function(le){$!==le&&!C&&(n.colorMask(le,le,le,le),$=le)},setLocked:function(le){C=le},setClear:function(le,de,Re,We,oe){oe===!0&&(le*=We,de*=We,Re*=We),Q.set(le,de,Re,We),fe.equals(Q)===!1&&(n.clearColor(le,de,Re,We),fe.copy(Q))},reset:function(){C=!1,$=null,fe.set(-1,0,0,0)}}}function r(){let C=!1,Q=!1,$=null,fe=null,le=null;return{setReversed:function(de){if(Q!==de){const Re=e.get("EXT_clip_control");de?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Q=de;const We=le;le=null,this.setClear(We)}},getReversed:function(){return Q},setTest:function(de){de?Me(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(de){$!==de&&!C&&(n.depthMask(de),$=de)},setFunc:function(de){if(Q&&(de=Ju[de]),fe!==de){switch(de){case ba:n.depthFunc(n.NEVER);break;case Ta:n.depthFunc(n.ALWAYS);break;case Aa:n.depthFunc(n.LESS);break;case Rr:n.depthFunc(n.LEQUAL);break;case wa:n.depthFunc(n.EQUAL);break;case Ra:n.depthFunc(n.GEQUAL);break;case Ca:n.depthFunc(n.GREATER);break;case Pa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=de}},setLocked:function(de){C=de},setClear:function(de){le!==de&&(le=de,Q&&(de=1-de),n.clearDepth(de))},reset:function(){C=!1,$=null,fe=null,le=null,Q=!1}}}function s(){let C=!1,Q=null,$=null,fe=null,le=null,de=null,Re=null,We=null,oe=null;return{setTest:function(Ce){C||(Ce?Me(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(Ce){Q!==Ce&&!C&&(n.stencilMask(Ce),Q=Ce)},setFunc:function(Ce,Ve,_e){($!==Ce||fe!==Ve||le!==_e)&&(n.stencilFunc(Ce,Ve,_e),$=Ce,fe=Ve,le=_e)},setOp:function(Ce,Ve,_e){(de!==Ce||Re!==Ve||We!==_e)&&(n.stencilOp(Ce,Ve,_e),de=Ce,Re=Ve,We=_e)},setLocked:function(Ce){C=Ce},setClear:function(Ce){oe!==Ce&&(n.clearStencil(Ce),oe=Ce)},reset:function(){C=!1,Q=null,$=null,fe=null,le=null,de=null,Re=null,We=null,oe=null}}}const a=new t,o=new r,l=new s;let c={};const d=new WeakMap;let u={},f={},p={},g=new WeakMap,_=[],v=null,m=!1,h=null,y=null,w=null,b=null,R=null,A=null,x=null,E=new qe(0,0,0),I=0,P=!1,N=null,F=null,X=null,D=null,W=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,se=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=se>=1):Y.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=se>=2);let ne=null,ie={};const Ae=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),J=new _t().fromArray(Ae),ve=new _t().fromArray(ke);function Ee(C,Q,$,fe){const le=new Uint8Array(4),de=n.createTexture();n.bindTexture(C,de),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<$;Re++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(Q+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return de}const Le={};Le[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),Me(n.DEPTH_TEST),o.setFunc(Rr),nn(!1),pt(Sl),Me(n.CULL_FACE),Bt(nr);function Me(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function He(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function Mt(C,Q){return p[C]!==Q?(n.bindFramebuffer(C,Q),p[C]=Q,C===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Q),C===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ie(C,Q){let $=_,fe=!1;if(C){$=g.get(Q),$===void 0&&($=[],g.set(Q,$));const le=C.textures;if($.length!==le.length||$[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Re=le.length;de<Re;de++)$[de]=n.COLOR_ATTACHMENT0+de;$.length=le.length,fe=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,fe=!0);fe&&n.drawBuffers($)}function it(C){return v!==C?(n.useProgram(C),v=C,!0):!1}const ot={[Qi]:n.FUNC_ADD,[vu]:n.FUNC_SUBTRACT,[Mu]:n.FUNC_REVERSE_SUBTRACT};ot[Su]=n.MIN,ot[yu]=n.MAX;const Ye={[Eu]:n.ZERO,[bu]:n.ONE,[Tu]:n.SRC_COLOR,[Oc]:n.SRC_ALPHA,[Lu]:n.SRC_ALPHA_SATURATE,[Cu]:n.DST_COLOR,[wu]:n.DST_ALPHA,[Au]:n.ONE_MINUS_SRC_COLOR,[Bc]:n.ONE_MINUS_SRC_ALPHA,[Pu]:n.ONE_MINUS_DST_COLOR,[Ru]:n.ONE_MINUS_DST_ALPHA,[Du]:n.CONSTANT_COLOR,[Iu]:n.ONE_MINUS_CONSTANT_COLOR,[Nu]:n.CONSTANT_ALPHA,[Uu]:n.ONE_MINUS_CONSTANT_ALPHA};function Bt(C,Q,$,fe,le,de,Re,We,oe,Ce){if(C===nr){m===!0&&(He(n.BLEND),m=!1);return}if(m===!1&&(Me(n.BLEND),m=!0),C!==xu){if(C!==h||Ce!==P){if((y!==Qi||R!==Qi)&&(n.blendEquation(n.FUNC_ADD),y=Qi,R=Qi),Ce)switch(C){case Ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ea:n.blendFunc(n.ONE,n.ONE);break;case yl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case El:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:et("WebGLState: Invalid blending: ",C);break}else switch(C){case Ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ea:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yl:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case El:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",C);break}w=null,b=null,A=null,x=null,E.set(0,0,0),I=0,h=C,P=Ce}return}le=le||Q,de=de||$,Re=Re||fe,(Q!==y||le!==R)&&(n.blendEquationSeparate(ot[Q],ot[le]),y=Q,R=le),($!==w||fe!==b||de!==A||Re!==x)&&(n.blendFuncSeparate(Ye[$],Ye[fe],Ye[de],Ye[Re]),w=$,b=fe,A=de,x=Re),(We.equals(E)===!1||oe!==I)&&(n.blendColor(We.r,We.g,We.b,oe),E.copy(We),I=oe),h=C,P=!1}function bt(C,Q){C.side===Qt?He(n.CULL_FACE):Me(n.CULL_FACE);let $=C.side===an;Q&&($=!$),nn($),C.blending===Ar&&C.transparent===!1?Bt(nr):Bt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),a.setMask(C.colorWrite);const fe=C.stencilWrite;l.setTest(fe),fe&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Lt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function nn(C){N!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),N=C)}function pt(C){C!==gu?(Me(n.CULL_FACE),C!==F&&(C===Sl?n.cullFace(n.BACK):C===_u?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),F=C}function Nn(C){C!==X&&(G&&n.lineWidth(C),X=C)}function Lt(C,Q,$){C?(Me(n.POLYGON_OFFSET_FILL),(D!==Q||W!==$)&&(D=Q,W=$,o.getReversed()&&(Q=-Q,$=-$),n.polygonOffset(Q,$))):He(n.POLYGON_OFFSET_FILL)}function hn(C){C?Me(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function pn(C){C===void 0&&(C=n.TEXTURE0+j-1),ne!==C&&(n.activeTexture(C),ne=C)}function mn(C,Q,$){$===void 0&&(ne===null?$=n.TEXTURE0+j-1:$=ne);let fe=ie[$];fe===void 0&&(fe={type:void 0,texture:void 0},ie[$]=fe),(fe.type!==C||fe.texture!==Q)&&(ne!==$&&(n.activeTexture($),ne=$),n.bindTexture(C,Q||Le[C]),fe.type=C,fe.texture=Q)}function U(){const C=ie[ne];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function gn(){try{n.compressedTexImage2D(...arguments)}catch(C){et("WebGLState:",C)}}function dt(){try{n.compressedTexImage3D(...arguments)}catch(C){et("WebGLState:",C)}}function ut(){try{n.texSubImage2D(...arguments)}catch(C){et("WebGLState:",C)}}function ge(){try{n.texSubImage3D(...arguments)}catch(C){et("WebGLState:",C)}}function Tt(){try{n.compressedTexSubImage2D(...arguments)}catch(C){et("WebGLState:",C)}}function De(){try{n.compressedTexSubImage3D(...arguments)}catch(C){et("WebGLState:",C)}}function Oe(){try{n.texStorage2D(...arguments)}catch(C){et("WebGLState:",C)}}function T(){try{n.texStorage3D(...arguments)}catch(C){et("WebGLState:",C)}}function M(){try{n.texImage2D(...arguments)}catch(C){et("WebGLState:",C)}}function z(){try{n.texImage3D(...arguments)}catch(C){et("WebGLState:",C)}}function re(C){return f[C]!==void 0?f[C]:n.getParameter(C)}function te(C,Q){f[C]!==Q&&(n.pixelStorei(C,Q),f[C]=Q)}function ce(C){J.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),J.copy(C))}function pe(C){ve.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ve.copy(C))}function K(C,Q){let $=d.get(Q);$===void 0&&($=new WeakMap,d.set(Q,$));let fe=$.get(C);fe===void 0&&(fe=n.getUniformBlockIndex(Q,C.name),n.uniformBlockBinding(Q,fe,fe),$.set(C,fe))}function Z(C,Q,$){const le=d.get(Q).get(C);c[le]!==$&&(n.bindBufferBase(n.UNIFORM_BUFFER,le,$),c[le]=$)}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},ne=null,ie={},p={},c={},g=new WeakMap,_=[],v=null,m=!1,h=null,y=null,w=null,b=null,R=null,A=null,x=null,E=new qe(0,0,0),I=0,P=!1,N=null,F=null,X=null,D=null,W=null,J.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:Me,disable:He,bindFramebuffer:Mt,drawBuffers:Ie,useProgram:it,setBlending:Bt,setMaterial:bt,setFlipSided:nn,setCullFace:pt,setLineWidth:Nn,setPolygonOffset:Lt,setScissorTest:hn,activeTexture:pn,bindTexture:mn,unbindTexture:U,compressedTexImage2D:gn,compressedTexImage3D:dt,texImage2D:M,texImage3D:z,pixelStorei:te,getParameter:re,updateUBOMapping:K,uniformBlockBinding:Z,texStorage2D:Oe,texStorage3D:T,texSubImage2D:ut,texSubImage3D:ge,compressedTexSubImage2D:Tt,compressedTexSubImage3D:De,scissor:ce,viewport:pe,reset:ue}}function E0(n,e,t,r,s,a,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new $e,u=new WeakMap,f=new Set;let p;const g=new WeakMap,_=new Set,v=new FinalizationRegistry(T=>_.delete(T));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(T,M){return m?new OffscreenCanvas(T,M):Rs("canvas")}function y(T,M,z){let re=1;const te=Oe(T);if((te.width>z||te.height>z)&&(re=z/Math.max(te.width,te.height)),re<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ce=Math.floor(re*te.width),pe=Math.floor(re*te.height);p===void 0&&(p=h(ce,pe));const K=M?h(ce,pe):p;return K.width=ce,K.height=pe,K.getContext("2d").drawImage(T,0,0,ce,pe),Fe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ce+"x"+pe+")."),K}else return"data"in T&&Fe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function w(T){return T.generateMipmaps}function b(T){n.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(T,M,z,re,te,ce=!1){if(T!==null){if(n[T]!==void 0)return n[T];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let pe;re&&(pe=e.get("EXT_texture_norm16"),pe||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===n.RED&&(z===n.FLOAT&&(K=n.R32F),z===n.HALF_FLOAT&&(K=n.R16F),z===n.UNSIGNED_BYTE&&(K=n.R8),z===n.UNSIGNED_SHORT&&pe&&(K=pe.R16_EXT),z===n.SHORT&&pe&&(K=pe.R16_SNORM_EXT)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.R8UI),z===n.UNSIGNED_SHORT&&(K=n.R16UI),z===n.UNSIGNED_INT&&(K=n.R32UI),z===n.BYTE&&(K=n.R8I),z===n.SHORT&&(K=n.R16I),z===n.INT&&(K=n.R32I)),M===n.RG&&(z===n.FLOAT&&(K=n.RG32F),z===n.HALF_FLOAT&&(K=n.RG16F),z===n.UNSIGNED_BYTE&&(K=n.RG8),z===n.UNSIGNED_SHORT&&pe&&(K=pe.RG16_EXT),z===n.SHORT&&pe&&(K=pe.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RG8UI),z===n.UNSIGNED_SHORT&&(K=n.RG16UI),z===n.UNSIGNED_INT&&(K=n.RG32UI),z===n.BYTE&&(K=n.RG8I),z===n.SHORT&&(K=n.RG16I),z===n.INT&&(K=n.RG32I)),M===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGB8UI),z===n.UNSIGNED_SHORT&&(K=n.RGB16UI),z===n.UNSIGNED_INT&&(K=n.RGB32UI),z===n.BYTE&&(K=n.RGB8I),z===n.SHORT&&(K=n.RGB16I),z===n.INT&&(K=n.RGB32I)),M===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),z===n.UNSIGNED_INT&&(K=n.RGBA32UI),z===n.BYTE&&(K=n.RGBA8I),z===n.SHORT&&(K=n.RGBA16I),z===n.INT&&(K=n.RGBA32I)),M===n.RGB&&(z===n.UNSIGNED_SHORT&&pe&&(K=pe.RGB16_EXT),z===n.SHORT&&pe&&(K=pe.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),M===n.RGBA){const Z=ce?ws:Je.getTransfer(te);z===n.FLOAT&&(K=n.RGBA32F),z===n.HALF_FLOAT&&(K=n.RGBA16F),z===n.UNSIGNED_BYTE&&(K=Z===st?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&pe&&(K=pe.RGBA16_EXT),z===n.SHORT&&pe&&(K=pe.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(T,M){let z;return T?M===null||M===$n||M===or?z=n.DEPTH24_STENCIL8:M===kn?z=n.DEPTH32F_STENCIL8:M===Pr&&(z=n.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===$n||M===or?z=n.DEPTH_COMPONENT24:M===kn?z=n.DEPTH_COMPONENT32F:M===Pr&&(z=n.DEPTH_COMPONENT16),z}function E(T,M){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==kt&&T.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function I(T){const M=new WeakRef(T);r.get(T).__ref=M,_.add(M),v.register(T,M,M)}function P(T){const M=r.get(T).__ref;M!==void 0&&(_.delete(M),v.unregister(M))}function N(T){X(T.target)}function F(T){D(T.target)}function X(T){T.removeEventListener("dispose",N),P(T),j(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&f.delete(T)}function D(T){T.removeEventListener("dispose",F),P(T),se(T)}function W(){for(const T of _){const M=T.deref();M!==void 0&&(M.isRenderTarget===!0?D(M):X(M))}_.clear(),f.clear()}function j(T){const M=r.get(T);if(M.__webglInit===void 0)return;const z=T.source,re=g.get(z);if(re){const te=re[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&G(T),Object.keys(re).length===0&&g.delete(z)}r.remove(T)}function G(T){const M=r.get(T);n.deleteTexture(M.__webglTexture);const z=T.source,re=g.get(z);delete re[M.__cacheKey],o.memory.textures--}function se(T){const M=r.get(T);M.__depthDisposeCallback&&M.__depthDisposeCallback();const z=T.depthTexture;if(z&&z.renderTarget===T&&X(z),T.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let ce=0;ce<M.__webglFramebuffer[te].length;ce++)n.deleteFramebuffer(M.__webglFramebuffer[te][ce]);else n.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)n.deleteFramebuffer(M.__webglFramebuffer[te]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const re=T.textures;for(let te=0,ce=re.length;te<ce;te++){const pe=r.get(re[te]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),r.remove(re[te])}r.remove(T)}let Y=0;function ne(){Y=0}function ie(){return Y}function Ae(T){Y=T}function ke(){const T=Y;return T>=s.maxTextures&&Fe("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,T}function J(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.mipmapsAutoUpdate),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function ve(T,M){const z=r.get(T);if(T.isVideoTexture&&Tt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){const re=T.image;if(re===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(z,T,M);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function Ee(T,M){const z=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){bt(z,T,M);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function Le(T,M){const z=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){bt(z,T,M);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function Me(T,M){const z=r.get(T);if(T.version>0&&z.__version!==T.version){nn(z,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}const He={[Es]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[La]:n.MIRRORED_REPEAT},Mt={[kt]:n.NEAREST,[Bu]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[$s]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},Ie={[Hu]:n.NEVER,[td]:n.ALWAYS,[Vu]:n.LESS,[jc]:n.LEQUAL,[Wu]:n.EQUAL,[ed]:n.GEQUAL,[Xu]:n.GREATER,[$u]:n.NOTEQUAL};function it(T,M){if(M.type===kn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===sn||M.magFilter===$s||M.magFilter===$r||M.magFilter===gi||M.minFilter===sn||M.minFilter===$s||M.minFilter===$r||M.minFilter===gi)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,He[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,He[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,He[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Mt[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Mt[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===kt||M.minFilter!==$r&&M.minFilter!==gi||M.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function ot(T,M){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",N),I(M));const re=M.source;let te=g.get(re);te===void 0&&(te={},g.set(re,te));const ce=J(M);if(ce!==T.__cacheKey){te[ce]===void 0&&(te[ce]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[ce].usedTimes++;const pe=te[T.__cacheKey];pe!==void 0&&(te[T.__cacheKey].usedTimes--,pe.usedTimes===0&&G(M)),T.__cacheKey=ce,T.__webglTexture=te[ce].texture}return z}function Ye(T,M,z){return Math.floor(Math.floor(T/z)/M)}function Bt(T,M,z,re){const ce=T.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,z,re,M.data);else{ce.sort((C,Q)=>C.start-Q.start);let pe=0;for(let C=1;C<ce.length;C++){const Q=ce[pe],$=ce[C],fe=Q.start+Q.count,le=Ye($.start,M.width,4),de=Ye(Q.start,M.width,4);$.start<=fe+1&&le===de&&Ye($.start+$.count-1,M.width,4)===le?Q.count=Math.max(Q.count,$.start+$.count-Q.start):(++pe,ce[pe]=$)}ce.length=pe+1;const K=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let C=0,Q=ce.length;C<Q;C++){const $=ce[C],fe=Math.floor($.start/4),le=Math.ceil($.count/4),de=fe%M.width,Re=Math.floor(fe/M.width),We=le,oe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,de),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re),t.texSubImage2D(n.TEXTURE_2D,0,de,Re,We,oe,z,re,M.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function bt(T,M,z){let re=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=n.TEXTURE_3D);const te=ot(T,M),ce=M.source;t.bindTexture(re,T.__webglTexture,n.TEXTURE0+z);const pe=r.get(ce);if(ce.version!==pe.__version||te===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const oe=Je.getPrimaries(Je.workingColorSpace),Ce=M.colorSpace===mi?null:Je.getPrimaries(M.colorSpace),Ve=M.colorSpace===mi||oe===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let Z=y(M.image,!1,s.maxTextureSize);Z=De(M,Z);const ue=a.convert(M.format,M.colorSpace),C=a.convert(M.type);let Q=A(M.internalFormat,ue,C,M.normalized,M.colorSpace,M.isVideoTexture);it(re,M);let $;const fe=M.mipmaps,le=M.isVideoTexture!==!0,de=pe.__version===void 0||te===!0,Re=ce.dataReady,We=E(M,Z);if(M.isDepthTexture)Q=x(M.format===_i,M.type),de&&(le?t.texStorage2D(n.TEXTURE_2D,1,Q,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Q,Z.width,Z.height,0,ue,C,null));else if(M.isDataTexture)if(fe.length>0){le&&de&&t.texStorage2D(n.TEXTURE_2D,We,Q,fe[0].width,fe[0].height);for(let oe=0,Ce=fe.length;oe<Ce;oe++)$=fe[oe],le?Re&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,$.width,$.height,ue,C,$.data):t.texImage2D(n.TEXTURE_2D,oe,Q,$.width,$.height,0,ue,C,$.data);M.generateMipmaps=!1}else le?(de&&t.texStorage2D(n.TEXTURE_2D,We,Q,Z.width,Z.height),Re&&Bt(M,Z,ue,C)):t.texImage2D(n.TEXTURE_2D,0,Q,Z.width,Z.height,0,ue,C,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){le&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,We,Q,fe[0].width,fe[0].height,Z.depth);for(let oe=0,Ce=fe.length;oe<Ce;oe++)if($=fe[oe],M.format!==Gn)if(ue!==null)if(le){if(Re)if(M.layerUpdates.size>0){const Ve=Zl($.width,$.height,M.format,M.type);for(const _e of M.layerUpdates){const rt=$.data.subarray(_e*Ve/$.data.BYTES_PER_ELEMENT,(_e+1)*Ve/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,_e,$.width,$.height,1,ue,rt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,$.width,$.height,Z.depth,ue,$.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Q,$.width,$.height,Z.depth,0,$.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,$.width,$.height,Z.depth,ue,C,$.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Q,$.width,$.height,Z.depth,0,ue,C,$.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{le&&de&&t.texStorage2D(n.TEXTURE_2D,We,Q,fe[0].width,fe[0].height);for(let oe=0,Ce=fe.length;oe<Ce;oe++)$=fe[oe],M.format!==Gn?ue!==null?le?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,$.width,$.height,ue,$.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Q,$.width,$.height,0,$.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Re&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,$.width,$.height,ue,C,$.data):t.texImage2D(n.TEXTURE_2D,oe,Q,$.width,$.height,0,ue,C,$.data)}else if(M.isDataArrayTexture)if(le){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,We,Q,Z.width,Z.height,Z.depth),Re)if(M.layerUpdates.size>0){const oe=Zl(Z.width,Z.height,M.format,M.type);for(const Ce of M.layerUpdates){const Ve=Z.data.subarray(Ce*oe/Z.data.BYTES_PER_ELEMENT,(Ce+1)*oe/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ce,Z.width,Z.height,1,ue,C,Ve)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ue,C,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,Z.width,Z.height,Z.depth,0,ue,C,Z.data);else if(M.isData3DTexture)le?(de&&t.texStorage3D(n.TEXTURE_3D,We,Q,Z.width,Z.height,Z.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ue,C,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Q,Z.width,Z.height,Z.depth,0,ue,C,Z.data);else if(M.isFramebufferTexture){if(de)if(le)t.texStorage2D(n.TEXTURE_2D,We,Q,Z.width,Z.height);else{let oe=Z.width,Ce=Z.height;for(let Ve=0;Ve<We;Ve++)t.texImage2D(n.TEXTURE_2D,Ve,Q,oe,Ce,0,ue,C,null),oe>>=1,Ce>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const oe=n.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),Z.parentNode!==oe){oe.appendChild(Z),f.add(M),oe.onpaint=Ce=>{const Ve=Ce.changedElements;for(const _e of f)Ve.includes(_e.image)&&(_e.needsUpdate=!0)},oe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{const Ve=n.RGBA,_e=n.RGBA,rt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ve,_e,rt,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(fe.length>0){if(le&&de){const oe=Oe(fe[0]);t.texStorage2D(n.TEXTURE_2D,We,Q,oe.width,oe.height)}for(let oe=0,Ce=fe.length;oe<Ce;oe++)$=fe[oe],le?Re&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ue,C,$):t.texImage2D(n.TEXTURE_2D,oe,Q,ue,C,$);M.generateMipmaps=!1}else if(le){if(de){const oe=Oe(Z);t.texStorage2D(n.TEXTURE_2D,We,Q,oe.width,oe.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,C,Z)}else t.texImage2D(n.TEXTURE_2D,0,Q,ue,C,Z);w(M)&&M.mipmapsAutoUpdate===!0&&b(re),pe.__version=ce.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function nn(T,M,z){if(M.image.length!==6)return;const re=ot(T,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);const ce=r.get(te);if(te.version!==ce.__version||re===!0){t.activeTexture(n.TEXTURE0+z);const pe=Je.getPrimaries(Je.workingColorSpace),K=M.colorSpace===mi?null:Je.getPrimaries(M.colorSpace),Z=M.colorSpace===mi||pe===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,C=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let _e=0;_e<6;_e++)!ue&&!C?Q[_e]=y(M.image[_e],!0,s.maxCubemapSize):Q[_e]=C?M.image[_e].image:M.image[_e],Q[_e]=De(M,Q[_e]);const $=Q[0],fe=a.convert(M.format,M.colorSpace),le=a.convert(M.type);let de=A(M.internalFormat,fe,le,M.normalized,M.colorSpace);const Re=M.isVideoTexture!==!0,We=ce.__version===void 0||re===!0,oe=te.dataReady;let Ce=E(M,$);it(n.TEXTURE_CUBE_MAP,M);let Ve;if(M.isDepthTexture){if(de=x(M.format===_i,M.type),We)if(Re)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,de,$.width,$.height);else for(let _e=0;_e<6;_e++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,de,$.width,$.height,0,fe,le,null)}else if(ue){Re&&We&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,de,$.width,$.height);for(let _e=0;_e<6;_e++){Ve=Q[_e].mipmaps;for(let rt=0;rt<Ve.length;rt++){const Dt=Ve[rt];M.format!==Gn?fe!==null?Re?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt,0,0,Dt.width,Dt.height,fe,Dt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt,de,Dt.width,Dt.height,0,Dt.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt,0,0,Dt.width,Dt.height,fe,le,Dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt,de,Dt.width,Dt.height,0,fe,le,Dt.data)}}}else{if(Ve=M.mipmaps,Re&&We){Ve.length>0&&Ce++;const _e=Oe(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,de,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(C){Re?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Q[_e].width,Q[_e].height,fe,le,Q[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,de,Q[_e].width,Q[_e].height,0,fe,le,Q[_e].data);for(let rt=0;rt<Ve.length;rt++){const oi=Ve[rt].image[_e].image;Re?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt+1,0,0,oi.width,oi.height,fe,le,oi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt+1,de,oi.width,oi.height,0,fe,le,oi.data)}}else{Re?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,fe,le,Q[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,de,fe,le,Q[_e]);for(let rt=0;rt<Ve.length;rt++){const Dt=Ve[rt];Re?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt+1,0,0,fe,le,Dt.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,rt+1,de,fe,le,Dt.image[_e])}}}w(M)&&M.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),ce.__version=te.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function pt(T,M,z,re,te,ce){const pe=a.convert(z.format,z.colorSpace),K=a.convert(z.type),Z=A(z.internalFormat,pe,K,z.normalized,z.colorSpace),ue=r.get(M),C=r.get(z);if(C.__renderTarget=M,!ue.__hasExternalTextures){const Q=Math.max(1,M.width>>ce),$=Math.max(1,M.height>>ce);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ce,Z,Q,$,M.depth,0,pe,K,null):t.texImage2D(te,ce,Z,Q,$,0,pe,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ge(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,te,C.__webglTexture,0,ut(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,te,C.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Nn(T,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){const re=M.depthTexture,te=re&&re.isDepthTexture?re.type:null,ce=x(M.stencilBuffer,te),pe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ge(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(M),ce,M.width,M.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(M),ce,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ce,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,T)}else{const re=M.textures;for(let te=0;te<re.length;te++){const ce=re[te],pe=a.convert(ce.format,ce.colorSpace),K=a.convert(ce.type),Z=A(ce.internalFormat,pe,K,ce.normalized,ce.colorSpace);ge(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(M),Z,M.width,M.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(M),Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(T,M,z){const re=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=r.get(M.depthTexture);te.__renderTarget=M;const ce=re?M.depthTexture.image[0]:M.depthTexture.image;(!te.__webglTexture||ce.width!==M.width||ce.height!==M.height)&&(ce.width=M.width,ce.height=M.height,M.depthTexture.needsUpdate=!0),re?Me(M.depthTexture,0):ve(M.depthTexture,0);const pe=te.__webglTexture,K=ut(M),Z=re?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,ue=M.depthTexture.format===_i?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===vi)ge(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,Z,pe,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ue,Z,pe,0);else if(M.depthTexture.format===_i)ge(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,Z,pe,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ue,Z,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function hn(T){const M=r.get(T),z=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const re=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",te)};re.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=re}if(T.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let re=0;re<6;re++)Lt(M.__webglFramebuffer[re],T,re);else T.texture.mipmaps.length>0?Lt(M.__webglFramebuffer[0],T,0):Lt(M.__webglFramebuffer,T,0);else if(z){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=n.createRenderbuffer(),Nn(M.__webglDepthbuffer[re],T,!1);else{const te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[re];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,ce)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Nn(M.__webglDepthbuffer,T,!1);else{const te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pn(T,M,z){const re=r.get(T);M!==void 0&&pt(re.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&hn(T)}function mn(T){const M=T.texture,z=r.get(T),re=r.get(M);T.addEventListener("dispose",F),I(T);const te=T.textures,ce=T.isWebGLCubeRenderTarget===!0,pe=te.length>1;if(pe||(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=M.version,o.memory.textures++),ce){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let Z=0;Z<M.mipmaps.length;Z++)z.__webglFramebuffer[K][Z]=n.createFramebuffer()}else z.__webglFramebuffer[K]=n.createFramebuffer()}else{if(M.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)z.__webglFramebuffer[K]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(pe)for(let K=0,Z=te.length;K<Z;K++){const ue=r.get(te[K]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&ge(T)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<te.length;K++){const Z=te[K];z.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[K]);const ue=a.convert(Z.format,Z.colorSpace),C=a.convert(Z.type),Q=A(Z.internalFormat,ue,C,Z.normalized,Z.colorSpace,T.isXRRenderTarget===!0),$=ut(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,$,Q,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,z.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Nn(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),it(n.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)pt(z.__webglFramebuffer[K][Z],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z);else pt(z.__webglFramebuffer[K],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);w(M)?b(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let K=0,Z=te.length;K<Z;K++){const ue=te[K],C=r.get(ue);let Q=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,C.__webglTexture),it(Q,ue),pt(z.__webglFramebuffer,T,ue,n.COLOR_ATTACHMENT0+K,Q,0),w(ue)&&b(Q)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,re.__webglTexture),it(K,M),M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)pt(z.__webglFramebuffer[Z],T,M,n.COLOR_ATTACHMENT0,K,Z);else pt(z.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,K,0);w(M)?b(K):M.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&hn(T)}function U(T){const M=T.textures;for(let z=0,re=M.length;z<re;z++){const te=M[z];if(w(te)&&te.mipmapsAutoUpdate===!0){const ce=R(T),pe=r.get(te).__webglTexture;t.bindTexture(ce,pe),b(ce),t.unbindTexture()}}}const gn=[];function dt(T){if(T.samples>0){if(ge(T)===!1){const M=T.textures,z=T.width,re=T.height;let te=n.COLOR_BUFFER_BIT;const ce=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=r.get(T),K=M.length>1;if(K)for(let ue=0;ue<M.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);const C=r.get(M[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,C,0)}n.blitFramebuffer(0,0,z,re,0,0,z,re,te,n.NEAREST),c===!0&&(gn.length=0,gn.push(n.COLOR_ATTACHMENT0+ue),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&gn.push(ce),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ue=0;ue<M.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);const C=r.get(M[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,C,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){const M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ut(T){return Math.min(s.maxSamples,T.samples)}function ge(T){const M=r.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(T){const M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function De(T,M){const z=T.colorSpace,re=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==As&&z!==mi&&(Je.getTransfer(z)===st?(re!==Gn||te!==fn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",z)),M}function Oe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(d.width=T.naturalWidth||T.width,d.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(d.width=T.displayWidth,d.height=T.displayHeight):(d.width=T.width,d.height=T.height),d}this.allocateTextureUnit=ke,this.resetTextureUnits=ne,this.getTextureUnits=ie,this.setTextureUnits=Ae,this.setTexture2D=ve,this.setTexture2DArray=Ee,this.setTexture3D=Le,this.setTextureCube=Me,this.rebindTextures=pn,this.setupRenderTarget=mn,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=hn,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ge,this.dispose=W}function b0(n,e){function t(r,s=mi){let a;const o=Je.getTransfer(s);if(r===fn)return n.UNSIGNED_BYTE;if(r===Do)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Io)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Yc)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Kc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===$c)return n.BYTE;if(r===qc)return n.SHORT;if(r===Pr)return n.UNSIGNED_SHORT;if(r===Lo)return n.INT;if(r===$n)return n.UNSIGNED_INT;if(r===kn)return n.FLOAT;if(r===qn)return n.HALF_FLOAT;if(r===Zc)return n.ALPHA;if(r===Jc)return n.RGB;if(r===Gn)return n.RGBA;if(r===vi)return n.DEPTH_COMPONENT;if(r===_i)return n.DEPTH_STENCIL;if(r===Qc)return n.RED;if(r===No)return n.RED_INTEGER;if(r===Ii)return n.RG;if(r===Uo)return n.RG_INTEGER;if(r===Fo)return n.RGBA_INTEGER;if(r===ms||r===gs||r===_s||r===xs)if(o===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ms)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_s)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ms)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_s)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Da||r===Ia||r===Na||r===Ua)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Da)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ia)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Na)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ua)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fa||r===Oa||r===Ba||r===za||r===ka||r===bs||r===Ga)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Fa||r===Oa)return o===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ba)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===za)return a.COMPRESSED_R11_EAC;if(r===ka)return a.COMPRESSED_SIGNED_R11_EAC;if(r===bs)return a.COMPRESSED_RG11_EAC;if(r===Ga)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ha||r===Va||r===Wa||r===Xa||r===$a||r===qa||r===Ya||r===Ka||r===Za||r===Ja||r===Qa||r===ja||r===eo||r===to)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ha)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Va)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wa)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xa)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$a)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qa)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ya)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ka)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Za)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ja)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qa)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ja)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===eo)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===to)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===no||r===io||r===ro)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===no)return o===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===io)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ro)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===so||r===ao||r===Ts||r===oo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===so)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ao)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ts)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===or?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const T0=`
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

}`;class w0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new dd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ni({vertexShader:T0,fragmentShader:A0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tn(new Si(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R0 extends Ui{constructor(e,t){super();const r=this;let s=null,a=1,o=null,l="local-floor",c=1,d=null,u=null,f=null,p=null,g=null,_=null;const v=typeof XRWebGLBinding<"u",m=new w0,h={},y=t.getContextAttributes();let w=null,b=null;const R=[],A=[],x=new $e;let E=null,I=null;const P=new An;P.viewport=new _t;const N=new An;N.viewport=new _t;const F=[P,N],X=new zf;let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ve=R[J];return ve===void 0&&(ve=new ta,R[J]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(J){let ve=R[J];return ve===void 0&&(ve=new ta,R[J]=ve),ve.getGripSpace()},this.getHand=function(J){let ve=R[J];return ve===void 0&&(ve=new ta,R[J]=ve),ve.getHandSpace()};function j(J){const ve=A.indexOf(J.inputSource);if(ve===-1)return;const Ee=R[ve];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,d||o),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",se);for(let J=0;J<R.length;J++){const ve=A[J];ve!==null&&(A[J]=null,R[J].disconnect(ve))}D=null,W=null,m.reset();for(const J in h)delete h[J];if(e.setRenderTarget(w),g=null,p=null,f=null,s=null,b=null,ke.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(x.width,x.height,!1),I!==null){const J=I.camera;J.fov=I.fov,J.zoom=I.zoom,J.updateProjectionMatrix(),I=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,r.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){l=J,r.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(J){d=J},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",G),s.addEventListener("inputsourceschange",se),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Le=null,Me=null;y.depth&&(Me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=y.stencil?_i:vi,Le=y.stencil?or:$n);const He={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};f=this.getBinding(),p=f.createProjectionLayer(He),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),b=new Wn(p.textureWidth,p.textureHeight,{format:Gn,type:fn,depthTexture:new lr(p.textureWidth,p.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{const Ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new Wn(g.framebufferWidth,g.framebufferHeight,{format:Gn,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),d=null,o=await s.requestReferenceSpace(l),ke.setContext(s),ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(J){for(let ve=0;ve<J.removed.length;ve++){const Ee=J.removed[ve],Le=A.indexOf(Ee);Le>=0&&(A[Le]=null,R[Le].disconnect(Ee))}for(let ve=0;ve<J.added.length;ve++){const Ee=J.added[ve];let Le=A.indexOf(Ee);if(Le===-1){for(let He=0;He<R.length;He++)if(He>=A.length){A.push(Ee),Le=He;break}else if(A[He]===null){A[He]=Ee,Le=He;break}if(Le===-1)break}const Me=R[Le];Me&&Me.connect(Ee)}}function Y(J,ve){ve===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ve.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ve=J.near,Ee=J.far;m.texture!==null&&(m.depthNear>0&&(ve=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),X.near=N.near=P.near=ve,X.far=N.far=P.far=Ee,(D!==X.near||W!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),D=X.near,W=X.far),X.layers.mask=J.layers.mask|6,P.layers.mask=X.layers.mask&-5,N.layers.mask=X.layers.mask&-3;const Le=J.parent,Me=X.cameras;Y(X,Le);for(let He=0;He<Me.length;He++)Y(Me[He],Le);X.projectionMatrix.copy(P.projectionMatrix),X.projectionMatrixInverse.copy(P.projectionMatrixInverse),I===null&&J.isPerspectiveCamera&&(I={camera:J,fov:J.fov,zoom:J.zoom}),ne(J,X,Le)};function ne(J,ve,Ee){Ee===null?J.matrix.copy(ve.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(ve.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ve.projectionMatrix),J.projectionMatrixInverse.copy(ve.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=co*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(J){c=J,p!==null&&(p.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(J){return h[J]};let ie=null;function Ae(J,ve){if(u=ve.getViewerPose(d||o),_=ve,u!==null){const Ee=u.views;g!==null&&(e.setRenderTargetFramebuffer(b,g.framebuffer),e.setRenderTarget(b));let Le=!1;Ee.length!==X.cameras.length&&(X.cameras.length=0,Le=!0);for(let Ie=0;Ie<Ee.length;Ie++){const it=Ee[Ie];let ot=null;if(g!==null)ot=g.getViewport(it);else{const Bt=f.getViewSubImage(p,it);ot=Bt.viewport,Ie===0&&(e.setRenderTargetTextures(b,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(b))}let Ye=F[Ie];Ye===void 0&&(Ye=new An,Ye.layers.enable(Ie),Ye.viewport=new _t,F[Ie]=Ye),Ye.matrix.fromArray(it.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(it.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ot.x,ot.y,ot.width,ot.height),Ie===0&&(X.matrix.copy(Ye.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Le===!0&&X.cameras.push(Ye)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=r.getBinding();const Ie=f.getDepthInformation(Ee[0]);Ie&&Ie.isValid&&Ie.texture&&m.init(Ie,s.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),f=r.getBinding();for(let Ie=0;Ie<Ee.length;Ie++){const it=Ee[Ie].camera;if(it){let ot=h[it];ot||(ot=new dd,h[it]=ot);const Ye=f.getCameraImage(it);ot.sourceTexture=Ye}}}}for(let Ee=0;Ee<R.length;Ee++){const Le=A[Ee],Me=R[Ee];Le!==null&&Me!==void 0&&Me.update(Le,ve,d||o)}ie&&ie(J,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),_=null}const ke=new pd;ke.setAnimationLoop(Ae),this.setAnimationLoop=function(J){ie=J},this.dispose=function(){}}}const C0=new ft,bd=new Be;bd.set(-1,0,0,0,1,0,0,0,1);function P0(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function r(m,h){h.color.getRGB(m.fogColor.value,ud(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,y,w,b){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(m,h):h.isMeshLambertMaterial?(a(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(m,h),p(m,h),h.isMeshPhysicalMaterial&&g(m,h,b)):h.isMeshMatcapMaterial?(a(m,h),_(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),v(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&l(m,h)):h.isPointsMaterial?c(m,h,y,w):h.isSpriteMaterial?d(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===an&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===an&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h),w=y.envMap,b=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(C0.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bd),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function l(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,y,w){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=w*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,y){m.ior.value=h.ior,h.diffuseRoughness>0&&(m.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=h.diffuseRoughnessMap,t(h.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:s}}function L0(n,e,t,r){let s={},a={};function o(y,w){const b=w.program;r.uniformBlockBinding(y,b,s[y.id])}function l(y,w){let b=s[y.id];b===void 0&&(_(y),b=c(y),s[y.id]=b,y.addEventListener("dispose",m));const R=w.program;r.updateUBOMapping(y,R);const A=e.render.frame;a[y.id]!==A&&(d(y),a[y.id]=A)}function c(y){const w=n.createBuffer(),b=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,b,R),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function d(y){const w=s[y.id],b=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let A=0,x=b.length;A<x;A++){const E=b[A];if(Array.isArray(E))for(let I=0,P=E.length;I<P;I++)u(E[I],A,I,R);else u(E,A,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(y,w,b,R){if(p(y,w,b,R)===!0){const A=y.__offset,x=y.value;if(Array.isArray(x)){let E=0;for(let I=0;I<x.length;I++){const P=x[I],N=v(P,!0);f(P,y.__data,E),E+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,y.__data)}}function f(y,w,b){typeof y=="number"||typeof y=="boolean"?w[b]=y:y.isMatrix3?(w[b]=y.elements[0],w[b+1]=y.elements[1],w[b+2]=y.elements[2],w[b+3]=0,w[b+4]=y.elements[3],w[b+5]=y.elements[4],w[b+6]=y.elements[5],w[b+7]=0,w[b+8]=y.elements[6],w[b+9]=y.elements[7],w[b+10]=y.elements[8],w[b+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-b),b):y.toArray(w,b)}function p(y,w,b,R){const A=y.value,x=w+"_"+b;if(Array.isArray(A)){R[x]===void 0&&(R[x]=[]);const E=R[x];let I=!1;for(let P=0;P<A.length;P++)g(A[P],E,P)===!0&&(I=!0);return I}return g(A,R,x)}function g(y,w,b){if(w[b]===void 0)return typeof y=="number"||typeof y=="boolean"?w[b]=y:ArrayBuffer.isView(y)?w[b]=y.slice():w[b]=y.clone(),!0;{const R=w[b];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return w[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function _(y){const w=y.uniforms;let b=0;const R=16;for(let x=0,E=w.length;x<E;x++){const I=Array.isArray(w[x])?w[x]:[w[x]];for(let P=0,N=I.length;P<N;P++){const F=I[P],X=Array.isArray(F.value)?F.value:[F.value],D=Array.isArray(w[x])||Array.isArray(F.value);let W=b;for(let G=0,se=X.length;G<se;G++){const Y=X[G],ne=v(Y,D),ie=b%R,Ae=ie%ne.boundary,ke=ie+Ae;b+=Ae,ke!==0&&R-ke<ne.storage&&(b+=R-ke),G===0&&(W=b),b+=ne.storage}const j=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new j((b-W)/Float32Array.BYTES_PER_ELEMENT),F.__offset=W}}const A=b%R;return A>0&&(b+=R-A),y.__size=b,y.__cache={},this}function v(y,w){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(y){const w=y.target;w.removeEventListener("dispose",m),n.deleteBuffer(s[w.id]),delete s[w.id],delete a[w.id]}function h(){for(const y in s)n.deleteBuffer(s[y]);s={},a={}}return{bind:o,update:l,dispose:h}}const D0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fn=null;function I0(){return Fn===null&&(Fn=new bf(D0,16,16,Ii,qn),Fn.name="DFG_LUT",Fn.minFilter=sn,Fn.magFilter=sn,Fn.wrapS=ii,Fn.wrapT=ii,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class N0{constructor(e={}){const{canvas:t=Ku(),context:r=null,depth:s=!0,stencil:a=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:g=fn}=e;this.isWebGLRenderer=!0;let _;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=r.getContextAttributes().alpha}else _=o;const v=g,m=new Set([Fo,Uo,No]),h=new Set([fn,$n,Pr,or,Do,Io]),y=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let R=null,A=null;const x=[],E=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,F=null,X=null,D=null,W=null;this._outputColorSpace=dn;let j=0,G=0,se=null,Y=-1,ne=null;const ie=new _t,Ae=new _t;let ke=null;const J=new qe(0);let ve=0,Ee=t.width,Le=t.height,Me=1,He=null,Mt=null;const Ie=new _t(0,0,Ee,Le),it=new _t(0,0,Ee,Le);let ot=!1;const Ye=new Dr,Bt=new Ho;let bt=!1,nn=!1;const pt=new ft,Nn=new B,Lt=new _t,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pn=!1;function mn(){return se===null?Me:1}let U=r;function gn(S,L){return t.getContext(S,L)}let dt,ut,ge,Tt,De,Oe,T,M,z,re,te,ce,pe,K,Z,ue,C,Q,$,fe,le,de,Re;try{const S={alpha:!0,depth:s,stencil:a,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ro}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",_e,!1),U===null){const L="webgl2";if(U=gn(L,S),U===null)throw gn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(S){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),et("WebGLRenderer: "+S.message),S}function We(){dt=new Om(U),dt.init(),le=new b0(U,dt),ut=new Am(U,dt,e,le),ge=new y0(U,dt),ut.reversedDepthBuffer&&p&&ge.buffers.depth.setReversed(!0),X=U.createFramebuffer(),D=U.createFramebuffer(),W=U.createFramebuffer(),Tt=new km(U),De=new l0,Oe=new E0(U,dt,ge,De,ut,le,Tt),T=new Fm(P),M=new Hf(U),de=new bm(U,M),z=new Bm(U,M,Tt,de),re=new Hm(U,z,M,de,Tt),Q=new Gm(U,ut,Oe),Z=new wm(De),te=new o0(P,T,dt,ut,de,Z),ce=new P0(P,De),pe=new d0,K=new g0(dt),C=new Em(P,T,ge,re,_,c),ue=new S0(P,re,ut),Re=new L0(U,Tt,ut,ge),$=new Tm(U,dt,Tt),fe=new zm(U,dt,Tt),Tt.programs=te.programs,P.capabilities=ut,P.extensions=dt,P.properties=De,P.renderLists=pe,P.shadowMap=ue,P.state=ge,P.info=Tt}v!==fn&&(I=new Wm(v,t.width,t.height,l,s,a));const oe=new R0(P,U);this.xr=oe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=dt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=dt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(S){S!==void 0&&(Me=S,this.setSize(Ee,Le,!1))},this.getSize=function(S){return S.set(Ee,Le)},this.setSize=function(S,L,V=!0){if(oe.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=S,Le=L,t.width=Math.floor(S*Me),t.height=Math.floor(L*Me),V===!0&&(t.style.width=S+"px",t.style.height=L+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(Ee*Me,Le*Me).floor()},this.setDrawingBufferSize=function(S,L,V){Ee=S,Le=L,Me=V,t.width=Math.floor(S*V),t.height=Math.floor(L*V),this.setViewport(0,0,S,L)},this.setEffects=function(S){if(v===fn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let L=0;L<S.length;L++)if(S[L].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ie)},this.getViewport=function(S){return S.copy(Ie)},this.setViewport=function(S,L,V,O){S.isVector4?Ie.set(S.x,S.y,S.z,S.w):Ie.set(S,L,V,O),ge.viewport(ie.copy(Ie).multiplyScalar(mn()).round())},this.getScissor=function(S){return S.copy(it)},this.setScissor=function(S,L,V,O){S.isVector4?it.set(S.x,S.y,S.z,S.w):it.set(S,L,V,O),ge.scissor(Ae.copy(it).multiplyScalar(mn()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(S){ge.setScissorTest(ot=S)},this.setOpaqueSort=function(S){He=S},this.setTransparentSort=function(S){Mt=S},this.getClearColor=function(S){return S.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(S=!0,L=!0,V=!0){let O=0;if(S){let k=!1;if(se!==null){const me=se.texture.format;k=m.has(me)}if(k){const me=se.texture.type,ye=h.has(me),he=C.getClearColor(),Se=C.getClearAlpha(),we=he.r,Ge=he.g,Ke=he.b;ye?(y[0]=we,y[1]=Ge,y[2]=Ke,y[3]=Se,U.clearBufferuiv(U.COLOR,0,y)):(w[0]=we,w[1]=Ge,w[2]=Ke,w[3]=Se,U.clearBufferiv(U.COLOR,0,w))}else O|=U.COLOR_BUFFER_BIT}L&&(O|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),C.dispose(),pe.dispose(),K.dispose(),Oe.dispose(),De.dispose(),T.dispose(),re.dispose(),z.dispose(),de.dispose(),Re.dispose(),te.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",dl),oe.removeEventListener("sessionend",ul),yi.stop()};function Ce(S){S.preventDefault(),Al("WebGLRenderer: Context Lost."),N=!0}function Ve(){Al("WebGLRenderer: Context Restored."),N=!1;const S=Tt.autoReset,L=ue.enabled,V=ue.autoUpdate,O=ue.needsUpdate,k=ue.type;We(),Tt.autoReset=S,ue.enabled=L,ue.autoUpdate=V,ue.needsUpdate=O,ue.type=k}function _e(S){et("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function rt(S){const L=S.target;L.removeEventListener("dispose",rt),Dt(L)}function Dt(S){oi(S),De.remove(S)}function oi(S){const L=De.get(S).programs;L!==void 0&&(L.forEach(function(V){te.releaseProgram(V)}),S.isShaderMaterial&&te.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,V,O,k,me){L===null&&(L=hn);const ye=k.isMesh&&k.matrixWorld.determinantAffine()<0,he=$d(S,L,V,O,k);ge.setMaterial(O,ye);let Se=V.index,we=1;if(O.wireframe===!0){if(Se=z.getWireframeAttribute(V),Se===void 0)return;we=2}const Ge=V.drawRange,Ke=V.attributes.position;let be=Ge.start*we,Ze=(Ge.start+Ge.count)*we;me!==null&&(be=Math.max(be,me.start*we),Ze=Math.min(Ze,(me.start+me.count)*we)),Se!==null?(be=Math.max(be,0),Ze=Math.min(Ze,Se.count)):Ke!=null&&(be=Math.max(be,0),Ze=Math.min(Ze,Ke.count));const St=Ze-be;if(St<0||St===1/0)return;de.setup(k,O,he,V,Se);let ct,lt=$;if(Se!==null&&(ct=M.get(Se),lt=fe,lt.setIndex(ct)),k.isMesh)O.wireframe===!0?(ge.setLineWidth(O.wireframeLinewidth*mn()),lt.setMode(U.LINES)):lt.setMode(U.TRIANGLES);else if(k.isLine){let Ht=O.linewidth;Ht===void 0&&(Ht=1),ge.setLineWidth(Ht*mn()),k.isLineSegments?lt.setMode(U.LINES):k.isLineLoop?lt.setMode(U.LINE_LOOP):lt.setMode(U.LINE_STRIP)}else k.isPoints?lt.setMode(U.POINTS):k.isSprite&&lt.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))lt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ht=k._multiDrawStarts,Te=k._multiDrawCounts,Yt=k._multiDrawCount,tt=Se?M.get(Se).bytesPerElement:1,Ei=De.get(O).currentProgram.getUniforms();for(let Vt=0;Vt<Yt;Vt++)Ei.setValue(U,"_gl_DrawID",Vt),lt.render(Ht[Vt]/tt,Te[Vt])}else if(k.isInstancedMesh)lt.renderInstances(be,St,k.count);else if(V.isInstancedBufferGeometry){const Ht=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Te=Math.min(V.instanceCount,Ht);lt.renderInstances(be,St,Te)}else lt.render(be,St)};function cl(S,L,V,O){F!==null&&S.isNodeMaterial&&F.setObject(O,S),bt===!0&&Z.setState(S,V,!1),S.transparent===!0&&S.side===Qt&&S.forceSinglePass===!1?(S.side=an,S.needsUpdate=!0,pr(S,L,O),S.side=Di,S.needsUpdate=!0,pr(S,L,O),S.side=Qt):pr(S,L,O)}this.compile=function(S,L,V=null){V===null&&(V=S),F!==null&&F.renderStart(S,L,V),A=K.get(V),A.init(L),E.push(A),V.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),S!==V&&S.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),A.setupLights(),F!==null&&F.updateLights(A.state.lightsArray),nn=this.localClippingEnabled,bt=Z.init(this.clippingPlanes,nn),bt===!0&&Z.setGlobalState(this.clippingPlanes,L),F!==null&&ue.render(A.state.shadowsArray,V,L);const O=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const me=k.material;if(me)if(Array.isArray(me))for(let ye=0;ye<me.length;ye++){const he=me[ye];cl(he,V,L,k),O.add(he)}else cl(me,V,L,k),O.add(me)}),A=E.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(S,L,V=null){const O=this.compile(S,L,V);return new Promise(k=>{function me(){if(O.forEach(function(ye){const Se=De.get(ye).currentProgram;(Se===void 0||Se.isReady())&&O.delete(ye)}),O.size===0){k(S);return}setTimeout(me,10)}dt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Gs=null;function Wd(S){Gs&&Gs(S)}function dl(){yi.stop()}function ul(){yi.start()}const yi=new pd;yi.setAnimationLoop(Wd),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(S){Gs=S,oe.setAnimationLoop(S),S===null?yi.stop():yi.start()},oe.addEventListener("sessionstart",dl),oe.addEventListener("sessionend",ul),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(S,L);const V=oe.enabled===!0&&oe.isPresenting===!0,O=I!==null&&(se===null||V)&&I.begin(P,se);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(L),L=oe.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,L,se),A=K.get(S,E.length),A.init(L),A.state.textureUnits=Oe.getTextureUnits(),E.push(A),pt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?Bt.setFromArrayCamera(L):Ye.setFromProjectionMatrix(pt,Pn,L.reversedDepth),nn=this.localClippingEnabled,bt=Z.init(this.clippingPlanes,nn),R=pe.get(S,x.length),R.init(),x.push(R),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&Hs(ye,L,-1/0,P.sortObjects)}Hs(S,L,0,P.sortObjects),R.finish(),F!==null&&F.updateLights(A.state.lightsArray),P.sortObjects===!0&&R.sort(He,Mt),pn=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,pn&&C.addToRenderList(R,S),this.info.autoReset===!0&&this.info.reset(),bt===!0&&Z.beginShadows();const k=A.state.shadowsArray;if(ue.render(k,S,L),bt===!0&&Z.endShadows(),(O&&I.hasRenderPass())===!1){const ye=R.opaque,he=R.transmissive;if(A.setupLights(),L.isArrayCamera){const Se=L.cameras;if(he.length>0)for(let we=0,Ge=Se.length;we<Ge;we++){const Ke=Se[we];hl(ye,he,S,Ke)}pn&&C.render(S);for(let we=0,Ge=Se.length;we<Ge;we++){const Ke=Se[we];fl(R,S,Ke,Ke.viewport)}}else he.length>0&&hl(ye,he,S,L),pn&&C.render(S),fl(R,S,L)}se!==null&&G===0&&(Oe.updateMultisampleRenderTarget(se),Oe.updateRenderTargetMipmap(se)),O&&I.end(P),S.isScene===!0&&S.onAfterRender(P,S,L),de.resetDefaultState(),Y=-1,ne=null,E.pop(),E.length>0?(A=E[E.length-1],Oe.setTextureUnits(A.state.textureUnits),bt===!0&&Z.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?R=x[x.length-1]:R=null,F!==null&&F.renderEnd()};function Hs(S,L,V,O){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){const ye=L.isArrayCamera?Bt:Ye;if(!S.frustumCulled||S.intersectsFrustum(ye)){O&&Lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pt);const he=re.update(S),Se=S.material;Se.visible&&R.push(S,he,Se,V,Lt.z,null,L)}}else if(S.isMesh||S.isLine||S.isPoints){const ye=L.isArrayCamera?Bt:Ye;if(!S.frustumCulled||S.intersectsFrustum(ye)){const he=re.update(S),Se=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Lt.copy(S.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Lt.copy(he.boundingSphere.center)),Lt.applyMatrix4(S.matrixWorld).applyMatrix4(pt)),Array.isArray(Se)){const we=he.groups;for(let Ge=0,Ke=we.length;Ge<Ke;Ge++){const be=we[Ge],Ze=Se[be.materialIndex];Ze&&Ze.visible&&R.push(S,he,Ze,V,Lt.z,be,L)}}else Se.visible&&R.push(S,he,Se,V,Lt.z,null,L)}}}const me=S.children;for(let ye=0,he=me.length;ye<he;ye++)Hs(me[ye],L,V,O)}function fl(S,L,V,O){const{opaque:k,transmissive:me,transparent:ye}=S;A.setupLightsView(V),bt===!0&&Z.setGlobalState(P.clippingPlanes,V),O&&ge.viewport(ie.copy(O)),k.length>0&&Wr(k,L,V),me.length>0&&Wr(me,L,V),ye.length>0&&Wr(ye,L,V),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function hl(S,L,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[O.id]===void 0){const be=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[O.id]=new Wn(1,1,{generateMipmaps:!0,type:be?qn:fn,minFilter:gi,samples:Math.max(4,ut.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const me=A.state.transmissionRenderTarget[O.id],ye=O.viewport||ie;me.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);const he=P.getRenderTarget(),Se=P.getActiveCubeFace(),we=P.getActiveMipmapLevel();P.setRenderTarget(me),P.getClearColor(J),ve=P.getClearAlpha(),ve<1&&P.setClearColor(16777215,.5),P.clear(),pn&&C.render(V);const Ge=P.toneMapping;P.toneMapping=si;const Ke=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),A.setupLightsView(O),bt===!0&&Z.setGlobalState(P.clippingPlanes,O),Wr(S,V,O),Oe.updateMultisampleRenderTarget(me),Oe.updateRenderTargetMipmap(me),dt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ze=0,St=L.length;Ze<St;Ze++){const ct=L[Ze],{object:lt,geometry:Ht,material:Te,group:Yt}=ct;if(Te.side===Qt&&lt.layers.test(O.layers)){const tt=Te.side;Te.side=an,Te.needsUpdate=!0,pl(lt,V,O,Ht,Te,Yt),Te.side=tt,Te.needsUpdate=!0,be=!0}}be===!0&&(Oe.updateMultisampleRenderTarget(me),Oe.updateRenderTargetMipmap(me))}P.setRenderTarget(he,Se,we),P.setClearColor(J,ve),Ke!==void 0&&(O.viewport=Ke),P.toneMapping=Ge}function Wr(S,L,V){const O=L.isScene===!0?L.overrideMaterial:null;for(let k=0,me=S.length;k<me;k++){const ye=S[k],{object:he,geometry:Se,group:we}=ye;let Ge=ye.material;Ge.allowOverride===!0&&O!==null&&(Ge=O),he.layers.test(V.layers)&&pl(he,L,V,Se,Ge,we)}}function pl(S,L,V,O,k,me){F!==null&&k.isNodeMaterial&&F.setObject(S,k),S.onBeforeRender(P,L,V,O,k,me),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(P,L,V,O,S,me),k.transparent===!0&&k.side===Qt&&k.forceSinglePass===!1?(k.side=an,k.needsUpdate=!0,P.renderBufferDirect(V,L,O,k,S,me),k.side=Di,k.needsUpdate=!0,P.renderBufferDirect(V,L,O,k,S,me),k.side=Qt):P.renderBufferDirect(V,L,O,k,S,me),S.onAfterRender(P,L,V,O,k,me)}function ml(S){let L=0;for(const V of S)V.texture!==null&&L++;return L}function pr(S,L,V){L.isScene!==!0&&(L=hn);const O=De.get(S),k=A.state.lights,me=A.state.shadowsArray,ye=k.state.version,he=te.getParameters(S,k.state,me,L,V,A.state.lightProbeGridArray),Se=te.getProgramCacheKey(he);let we=O.programs;O.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,O.fog=L.fog;const Ge=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;O.envMap=T.get(S.envMap||O.environment,Ge),O.envMapRotation=O.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,we===void 0&&(S.addEventListener("dispose",rt),we=new Map,O.programs=we,O.programVariants=new Map);let Ke=we.get(Se);if(Ke!==void 0){if(O.currentProgram===Ke&&O.lightsStateVersion===ye)return _l(S,he),Ke}else he.uniforms=te.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,V,he),S.onBeforeCompile(he,P),Ke=te.acquireProgram(he,Se),we.set(Se,Ke),O.uniforms=he.uniforms;const be=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(be.clippingPlanes=Z.uniform),_l(S,he),O.needsLights=Yd(S),O.lightsStateVersion=ye,O.needsLights&&(be.ambientLightColor.value=k.state.ambient,be.lightProbe.value=k.state.probe,be.sunLights.value=k.state.sun,be.sunLightShadows.value=k.state.sunShadow,be.directionalLights.value=k.state.directional,be.directionalLightShadows.value=k.state.directionalShadow,be.spotLights.value=k.state.spot,be.spotLightShadows.value=k.state.spotShadow,be.rectAreaLights.value=k.state.rectArea,be.ltc_1.value=k.state.rectAreaLTC1,be.ltc_2.value=k.state.rectAreaLTC2,be.pointLights.value=k.state.point,be.pointLightShadows.value=k.state.pointShadow,be.hemisphereLights.value=k.state.hemi,be.sunShadowMatrix.value=k.state.sunShadowMatrix,be.sunShadowCascade.value=k.state.sunShadowCascade,be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,be.spotLightMatrix.value=k.state.spotLightMatrix,be.spotLightMap.value=k.state.spotLightMap,be.pointShadowMatrix.value=k.state.pointShadowMatrix),O.numLightProbeGrids=ml(A.state.lightProbeGridArray),O.currentProgram=Ke,O.uniformsList=null,Ke}function Xd(S,L,V,O,k){const me=De.get(S),ye=me.currentProgram.id+","+O+","+k;let he=me.programVariants.get(ye);return he===void 0?(he=pr(S,L,V),me.programVariants.set(ye,he)):(me.currentProgram=he,me.uniformsList=null,me.outputColorSpace=O,me.toneMapping=k),he}function gl(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=Ms.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function _l(S,L){const V=De.get(S);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function $d(S,L,V,O,k){L.isScene!==!0&&(L=hn),Oe.resetTextureUnits();const me=L.fog,ye=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?L.environment:null,he=se===null?P.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Je.workingColorSpace,Se=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,we=T.get(O.envMap||ye,Se),Ge=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ke=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),be=!!V.morphAttributes.position,Ze=!!V.morphAttributes.normal,St=!!V.morphAttributes.color;let ct=si;O.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ct=P.toneMapping);const lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ht=lt!==void 0?lt.length:0,Te=De.get(O),Yt=A.state.lights;if(bt===!0&&(nn===!0||S!==ne)){const mt=S===ne&&O.id===Y;Z.setState(O,S,mt)}let tt=!1,Ei=!1;O.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==Yt.state.version||k.isBatchedMesh&&Te.batching===!1||!k.isBatchedMesh&&Te.batching===!0||k.isBatchedMesh&&Te.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Te.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Te.instancing===!1||!k.isInstancedMesh&&Te.instancing===!0||k.isSkinnedMesh&&Te.skinning===!1||!k.isSkinnedMesh&&Te.skinning===!0||k.isInstancedMesh&&Te.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Te.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Te.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Te.instancingMorph===!1&&k.morphTexture!==null||Te.envMap!==we||O.fog===!0&&Te.fog!==me||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Z.numPlanes||Te.numIntersection!==Z.numIntersection)||Te.vertexAlphas!==Ge||Te.vertexTangents!==Ke||Te.morphTargets!==be||Te.morphNormals!==Ze||Te.morphColors!==St||Te.morphTargetsCount!==Ht||Te.numLightProbeGrids!==ml(A.state.lightProbeGridArray)?tt=!0:(Te.outputColorSpace!==he||Te.toneMapping!==ct)&&(Ei=!0):(tt=!0,Te.__version=O.version);let Vt=Te.currentProgram;(tt===!0||Ei===!0)&&(Vt=Ei===!0?Xd(O,L,k,he,ct):pr(O,L,k),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Vt,Te));let Xr=!1,li=!1,bi=!1;const je=Vt.getUniforms(),zt=Te.uniforms;if(ge.useProgram(Vt.program)&&(Xr=!0,li=!0,bi=!0),O.id!==Y&&(Y=O.id,li=!0),Xr||ne!==S){ge.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),je.setValue(U,"projectionMatrix",S.projectionMatrix),je.setValue(U,"viewMatrix",S.matrixWorldInverse);const It=je.map.cameraPosition;It!==void 0&&It.setValue(U,Nn.setFromMatrixPosition(S.matrixWorld)),ut.logarithmicDepthBuffer&&je.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&je.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),ne!==S&&(ne=S,li=!0,bi=!0)}if(Te.needsLights&&(Yt.state.sunShadowMap.length>0&&je.setValue(U,"sunShadowMap",Yt.state.sunShadowMap,Oe),Yt.state.directionalShadowMap.length>0&&je.setValue(U,"directionalShadowMap",Yt.state.directionalShadowMap,Oe),Yt.state.spotShadowMap.length>0&&je.setValue(U,"spotShadowMap",Yt.state.spotShadowMap,Oe),Yt.state.pointShadowMap.length>0&&je.setValue(U,"pointShadowMap",Yt.state.pointShadowMap,Oe)),k.isSkinnedMesh){je.setOptional(U,k,"bindMatrix"),je.setOptional(U,k,"bindMatrixInverse");const mt=k.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),je.setValue(U,"boneTexture",mt.boneTexture,Oe))}k.isBatchedMesh&&(je.setOptional(U,k,"batchingTexture"),je.setValue(U,"batchingTexture",k._matricesTexture,Oe),je.setOptional(U,k,"batchingIdTexture"),je.setValue(U,"batchingIdTexture",k._indirectTexture,Oe),je.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&je.setValue(U,"batchingColorTexture",k._colorsTexture,Oe));const Sn=V.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Q.update(k,V,Vt),(li||Te.receiveShadow!==k.receiveShadow)&&(Te.receiveShadow=k.receiveShadow,je.setValue(U,"receiveShadow",k.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&L.environment!==null&&(zt.envMapIntensity.value=L.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=I0()),li){if(je.setValue(U,"toneMappingExposure",P.toneMappingExposure),Te.needsLights&&qd(zt,bi),me&&O.fog===!0&&ce.refreshFogUniforms(zt,me),ce.refreshMaterialUniforms(zt,O,Me,Le,A.state.transmissionRenderTarget[S.id]),Te.needsLights&&Te.numLightProbeGrids>0){const mt=b;let It=0;for(const Kn of A.state.lightProbeGridArray)Kn.texture!==null&&(mt.textures[It]=Kn.texture,mt.min[It]=Kn.boundingBox.min,mt.max[It]=Kn.boundingBox.max,mt.resolution[It]=Kn.resolution,It++);for(const Kn in mt)mt[Kn].length=It;zt.probesSH.value=mt.textures,zt.probesMin.value=mt.min,zt.probesMax.value=mt.max,zt.probesResolution.value=mt.resolution}Ms.upload(U,gl(Te),zt,Oe)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ms.upload(U,gl(Te),zt,Oe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&je.setValue(U,"center",k.center),je.setValue(U,"modelViewMatrix",k.modelViewMatrix),je.setValue(U,"normalMatrix",k.normalMatrix),je.setValue(U,"modelMatrix",k.matrixWorld),O.uniformsGroups!==void 0){const mt=O.uniformsGroups;for(let It=0,Kn=mt.length;It<Kn;It++){const vl=mt[It];Re.update(vl,Vt),Re.bind(vl,Vt)}}return Vt}function qd(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.sunLights.needsUpdate=L,S.sunLightShadows.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function Yd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(S,L,V){const O=De.get(S);O.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),De.get(S.texture).__webglTexture=L,De.get(S.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,L){const V=De.get(S);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,V=0){se=S,j=L,G=V;let O=null,k=!1,me=!1;if(S){const he=De.get(S);if(he.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(U.FRAMEBUFFER,he.__webglFramebuffer),ie.copy(S.viewport),Ae.copy(S.scissor),ke=S.scissorTest,ge.viewport(ie),ge.scissor(Ae),ge.setScissorTest(ke),Y=-1;return}else if(he.__webglFramebuffer===void 0)Oe.setupRenderTarget(S);else if(he.__hasExternalTextures)Oe.rebindTextures(S,De.get(S.texture).__webglTexture,De.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ge=S.depthTexture;if(he.__boundDepthTexture!==Ge){if(Ge!==null&&De.has(Ge)&&(S.width!==Ge.image.width||S.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(S)}}const Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);const we=De.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(we[L])?O=we[L][V]:O=we[L],k=!0):S.samples>0&&Oe.useMultisampledRTT(S)===!1?O=De.get(S).__webglMultisampledFramebuffer:Array.isArray(we)?O=we[V]:O=we,ie.copy(S.viewport),Ae.copy(S.scissor),ke=S.scissorTest}else ie.copy(Ie).multiplyScalar(Me).floor(),Ae.copy(it).multiplyScalar(Me).floor(),ke=ot;if(V!==0&&(O=X),ge.bindFramebuffer(U.FRAMEBUFFER,O)&&ge.drawBuffers(S,O),ge.viewport(ie),ge.scissor(Ae),ge.setScissorTest(ke),k){const he=De.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,he.__webglTexture,V)}else if(me){const he=L;for(let Se=0;Se<S.textures.length;Se++){const we=De.get(S.textures[Se]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Se,we.__webglTexture,V,he)}}else if(S!==null&&V!==0){const he=De.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,he.__webglTexture,V)}Y=-1};function xl(S){const L=De.get(S);return(L.__readFormat!==S.format||L.__readType!==S.type)&&(L.__readFormat=S.format,L.__readType=S.type,L.__formatReadable=ut.textureFormatReadable(S.format),L.__typeReadable=ut.textureTypeReadable(S.type)),L}this.readRenderTargetPixels=function(S,L,V,O,k,me,ye,he=0){if(!(S&&S.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye],Array.isArray(Se)&&(Se=Se[0])),Se){ge.bindFramebuffer(U.FRAMEBUFFER,Se);try{const we=S.textures[he],Ge=we.format,Ke=we.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he);const be=xl(we);if(be.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-O&&V>=0&&V<=S.height-k&&U.readPixels(L,V,O,k,le.convert(Ge),le.convert(Ke),me)}finally{const we=se!==null?De.get(se).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(S,L,V,O,k,me,ye,he=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye],Array.isArray(Se)&&(Se=Se[0])),Se)if(L>=0&&L<=S.width-O&&V>=0&&V<=S.height-k){ge.bindFramebuffer(U.FRAMEBUFFER,Se);const we=S.textures[he],Ge=we.format,Ke=we.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he);const be=xl(we);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.bufferData(U.PIXEL_PACK_BUFFER,me.byteLength,U.STREAM_READ),U.readPixels(L,V,O,k,le.convert(Ge),le.convert(Ke),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const St=se!==null?De.get(se).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,St);const ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Zu(U,ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,me),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ze),U.deleteSync(ct),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,L=null,V=0){const O=Math.pow(2,-V),k=Math.floor(S.image.width*O),me=Math.floor(S.image.height*O),ye=L!==null?L.x:0,he=L!==null?L.y:0;Oe.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,ye,he,k,me),ge.unbindTexture()},this.copyTextureToTexture=function(S,L,V=null,O=null,k=0,me=0){let ye,he,Se,we,Ge,Ke,be,Ze,St;const ct=S.isCompressedTexture?S.mipmaps[me]:S.image;if(V!==null)ye=V.max.x-V.min.x,he=V.max.y-V.min.y,Se=V.isBox3?V.max.z-V.min.z:1,we=V.min.x,Ge=V.min.y,Ke=V.isBox3?V.min.z:0;else{const je=Math.pow(2,-k);ye=Math.floor(ct.width*je),he=Math.floor(ct.height*je),S.isDataArrayTexture?Se=ct.depth:S.isData3DTexture?Se=Math.floor(ct.depth*je):Se=1,we=0,Ge=0,Ke=0}O!==null?(be=O.x,Ze=O.y,St=O.z):(be=0,Ze=0,St=0);const lt=le.convert(L.format),Ht=le.convert(L.type);let Te;L.isData3DTexture?(Oe.setTexture3D(L,0),Te=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Oe.setTexture2DArray(L,0),Te=U.TEXTURE_2D_ARRAY):(Oe.setTexture2D(L,0),Te=U.TEXTURE_2D),ge.activeTexture(U.TEXTURE0),ge.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),ge.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),ge.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const Yt=ge.getParameter(U.UNPACK_ROW_LENGTH),tt=ge.getParameter(U.UNPACK_IMAGE_HEIGHT),Ei=ge.getParameter(U.UNPACK_SKIP_PIXELS),Vt=ge.getParameter(U.UNPACK_SKIP_ROWS),Xr=ge.getParameter(U.UNPACK_SKIP_IMAGES);ge.pixelStorei(U.UNPACK_ROW_LENGTH,ct.width),ge.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct.height),ge.pixelStorei(U.UNPACK_SKIP_PIXELS,we),ge.pixelStorei(U.UNPACK_SKIP_ROWS,Ge),ge.pixelStorei(U.UNPACK_SKIP_IMAGES,Ke);const li=S.isDataArrayTexture||S.isData3DTexture,bi=L.isDataArrayTexture||L.isData3DTexture;if(S.isDepthTexture){const je=De.get(S),zt=De.get(L),Sn=De.get(je.__renderTarget),mt=De.get(zt.__renderTarget);ge.bindFramebuffer(U.READ_FRAMEBUFFER,Sn.__webglFramebuffer),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let It=0;It<Se;It++)li&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.get(S).__webglTexture,k,Ke+It),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.get(L).__webglTexture,me,St+It)),U.blitFramebuffer(we,Ge,we+ye,Ge+he,be,Ze,be+ye,Ze+he,U.DEPTH_BUFFER_BIT,U.NEAREST);ge.bindFramebuffer(U.READ_FRAMEBUFFER,null),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||De.has(S)){const je=De.get(S),zt=De.get(L);ge.bindFramebuffer(U.READ_FRAMEBUFFER,D),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,W);for(let Sn=0;Sn<Se;Sn++)li?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,je.__webglTexture,k,Ke+Sn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,je.__webglTexture,k),bi?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,zt.__webglTexture,me,St+Sn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,zt.__webglTexture,me),k!==0?U.blitFramebuffer(we,Ge,we+ye,Ge+he,be,Ze,be+ye,Ze+he,U.COLOR_BUFFER_BIT,U.NEAREST):bi?U.copyTexSubImage3D(Te,me,be,Ze,St+Sn,we,Ge,ye,he):U.copyTexSubImage2D(Te,me,be,Ze,we,Ge,ye,he);ge.bindFramebuffer(U.READ_FRAMEBUFFER,null),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else bi?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Te,me,be,Ze,St,ye,he,Se,lt,Ht,ct.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,me,be,Ze,St,ye,he,Se,lt,ct.data):U.texSubImage3D(Te,me,be,Ze,St,ye,he,Se,lt,Ht,ct):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,me,be,Ze,ye,he,lt,Ht,ct.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,me,be,Ze,ct.width,ct.height,lt,ct.data):U.texSubImage2D(U.TEXTURE_2D,me,be,Ze,ye,he,lt,Ht,ct);ge.pixelStorei(U.UNPACK_ROW_LENGTH,Yt),ge.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt),ge.pixelStorei(U.UNPACK_SKIP_PIXELS,Ei),ge.pixelStorei(U.UNPACK_SKIP_ROWS,Vt),ge.pixelStorei(U.UNPACK_SKIP_IMAGES,Xr),me===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&U.generateMipmap(Te),ge.unbindTexture()},this.initRenderTarget=function(S){De.get(S).__webglFramebuffer===void 0&&Oe.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Oe.setTextureCube(S,0):S.isData3DTexture?Oe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Oe.setTexture2DArray(S,0):Oe.setTexture2D(S,0),ge.unbindTexture()},this.resetState=function(){j=0,G=0,se=null,ge.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const Jt=Math.PI*2,Ir=(n,e,t)=>Math.max(e,Math.min(t,n)),Pe={box:new Fi(1,1,1),cyl:new Us(.5,.5,1,12),cone:new Cs(.5,1,12),pyr:new Cs(.72,1,4),sph:new $o(.5,14,10),plane:new Si(1,1),ico:new Wo(.5,0),ring:new Xo(.42,.5,26),torus:new qo(.5,.05,6,24,Math.PI)};function Tn(n,e,t=1,r){const s=document.createElement("canvas");s.width=s.height=128;const a=s.getContext("2d");a.fillStyle=n,a.fillRect(0,0,128,128);for(let l=0;l<e;l++)a.fillStyle=`rgba(0,0,0,${Math.random()*.14})`,a.beginPath(),a.arc(Math.random()*128,Math.random()*128,2+Math.random()*9,0,Jt),a.fill();for(let l=0;l<340;l++)a.fillStyle=`rgba(255,255,255,${Math.random()*.09})`,a.fillRect(Math.random()*128,Math.random()*128,2,2);if(r){a.strokeStyle="rgba(0,0,0,.22)",a.lineWidth=2;for(let l=0;l<128;l+=16){a.beginPath(),a.moveTo(0,l),a.lineTo(128,l),a.stroke();for(let c=l/16%2*16;c<128;c+=32)a.beginPath(),a.moveTo(c,l),a.lineTo(c,l+16),a.stroke()}}const o=new Af(s);return o.wrapS=o.wrapT=Es,o.repeat.set(t,t),o.colorSpace=dn,o.anisotropy=4,o}const Et={grass:Tn("#5a7a42",150,40),wood:Tn("#7a5230",60,2),plank:Tn("#8a6242",40,2,!0),stone:Tn("#9c9c92",60,3,!0),thatch:Tn("#b09055",50,3),cloth:Tn("#c9c2b0",30,2),dirt:Tn("#8a7554",80,8),metal:Tn("#9aa0a8",40,1),roofRed:Tn("#8f4f3c",40,2),field:Tn("#7a8f3a",80,4),pale:Tn("#a8956a",30,2)},At=n=>new Df(n),Ne={grass:At({map:Et.grass}),wood:At({map:Et.wood}),plank:At({map:Et.plank}),dark:At({map:Et.plank,color:6177319}),stone:At({map:Et.stone}),thatch:At({map:Et.thatch}),roof:At({map:Et.roofRed}),dirt:At({map:Et.dirt}),metal:At({map:Et.metal}),skin:At({color:14198914,map:Et.cloth}),iron:At({color:10133672,map:Et.metal}),banner:At({color:3108520,map:Et.cloth,side:Qt}),leaf:At({color:4877108,map:Et.grass}),fire:new rr({color:16752451,transparent:!0,opacity:.9}),gold:At({color:13214247,map:Et.metal}),blood:new rr({color:11024426}),arrow:new rr({color:14207396}),field:At({map:Et.field}),pale:At({map:Et.pale,side:Qt})},U0=new Set(Object.values(Pe)),F0=new Set(Object.values(Ne)),O0=new Set(Object.values(Et)),Ue=(n,e,t,r,s,a,o=1,l=1,c=1,d=0,u=!0)=>{const f=new tn(e,t);return f.position.set(r,s,a),f.scale.set(o,l,c),f.rotation.y=d,f.castShadow=u,n.add(f),f};let On,rn,$t,ze,Rt=[],un,dr=[],Td=[],Pi=[],wr=[],Yn=[],Vr=[],Jo=[],xn={},Ls={x:innerWidth/2,y:innerHeight/2},Qo=!1,po=!1,vn="attack",ri="settlement",mo=null,Ut=null,Nr=!1,pi=0,Ad=!1,ti="advance",Ss=0;const ee={x:0,z:0,face:0,hp:100,maxHp:100,atkCd:0,swing:0,dodge:0,dodgeCd:0,inv:0,moving:!1,wp:0};function B0(n,e){Ut=e,On=new N0({canvas:n,antialias:!0,powerPreference:"high-performance"}),On.setPixelRatio(Math.min(devicePixelRatio,2)),On.setSize(innerWidth,innerHeight),On.shadowMap.enabled=!0,On.shadowMap.type=Fc,On.toneMapping=Po,On.toneMappingExposure=1.1,rn=new gf,rn.background=new qe(10336452),rn.fog=new ko(10336452,52,140),$t=new Ko(-1,1,1,-1,.1,300),rn.add(new Uf(13624575,4872756,.72));const t=new ql(16770747,1.55);t.position.set(26,38,18),t.castShadow=!0,t.shadow.mapSize.set(1536,1536),Object.assign(t.shadow.camera,{left:-46,right:46,top:46,bottom:-46,far:130}),t.shadow.bias=-.002,rn.add(t,t.target),rn.userData.sun=t;const r=new ql(8368383,.26);r.position.set(-18,12,-20),rn.add(r),addEventListener("keydown",z0),addEventListener("keyup",k0),addEventListener("pointermove",G0),n.addEventListener("pointerdown",H0),addEventListener("pointerup",V0),addEventListener("resize",xc),n.addEventListener("contextmenu",s=>s.preventDefault()),Ad=!0,xc()}function z0(n){["Space","KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown"].includes(n.code)&&n.preventDefault(),xn[n.code]=!0,!n.repeat&&(n.code==="KeyQ"&&(po=!0),n.code==="KeyE"&&Ut&&Ut.interact(),ri==="battle"&&(n.code==="Digit1"&&(vn="attack",Ut.order(vn)),n.code==="Digit2"&&(vn="hold",Ut.order(vn)),n.code==="Digit3"&&(vn="advance",Ut.order(vn)),n.code==="Digit4"&&(vn="follow",Ut.order(vn)),n.code==="Digit5"&&(vn="retreat",Ut.order(vn)),n.code==="KeyF"&&Ut&&Ut.cycleFormation()))}function k0(n){xn[n.code]=!1}function G0(n){Ls.x=n.clientX,Ls.y=n.clientY}function H0(n){n.button===0&&(Qo=!0)}function V0(){Qo=!1}function xc(){if(!On)return;On.setSize(innerWidth,innerHeight);const n=innerWidth/innerHeight,e=15;$t.left=-e*n,$t.right=e*n,$t.top=e,$t.bottom=-e,$t.updateProjectionMatrix()}function wd(){ze&&(rn.remove(ze),ze.traverse(n=>{n.geometry&&!U0.has(n.geometry)&&!go.has(n.geometry)&&n.geometry.dispose(),(Array.isArray(n.material)?n.material:n.material?[n.material]:[]).forEach(t=>{F0.has(t)||(["map","bumpMap"].forEach(r=>{const s=t[r];s&&!O0.has(s)&&s.dispose()}),t.dispose())})})),Rt=[],dr=[],Td=[],Pi=[],wr=[],Yn=[],Vr=[],Jo=[],un=null,go.clear()}let go=new Set;function Rd(n){return go.add(n),n}function Ur(n,e,t=1){const r=new Hn,s=At({color:n,map:Et.cloth});Ue(r,Pe.box,s,0,1.05,0,.58,.86,.38),Ue(r,Pe.box,Ne.dark,0,.62,0,.6,.12,.4),Ue(r,Pe.sph,Ne.skin,0,1.7,0,.42,.44,.42),Ue(r,Pe.sph,Ne.iron,0,1.82,0,.46,.3,.46);const a=Ue(r,Pe.box,Ne.dark,-.15,.3,0,.17,.6,.17),o=Ue(r,Pe.box,Ne.dark,.15,.3,0,.17,.6,.17),l=new Hn,c=new Hn;if(l.position.set(-.37,1.42,0),c.position.set(.37,1.42,0),Ue(l,Pe.box,s,0,-.28,0,.16,.56,.16),Ue(c,Pe.box,s,0,-.28,0,.16,.56,.16),r.add(l,c),e==="ranged"){const d=Ue(l,Pe.cyl,Ne.wood,0,-.5,.18,.08,.95,.08);d.rotation.x=.35}else if(e==="knight")Ue(l,Pe.box,Ne.iron,0,-.34,.2,.52,.72,.08),Ue(c,Pe.box,Ne.iron,0,-.78,0,.1,1.15,.1);else if(e==="cavalry"){Ue(c,Pe.box,Ne.iron,0,-.5,.15,.12,1.3,.12);const d=Ue(r,Pe.box,Ne.iron,0,.6,.5,.5,.3,.8);d.rotation.x=.2}else Ue(c,Pe.cyl,Ne.wood,0,-.62,.1,.07,1.5,.07),Ue(c,Pe.cone,Ne.iron,0,-1.4,.1,.14,.34,.14);return r.scale.setScalar(t),r.userData={lL:a,lR:o,aL:l,aR:c,cm:s},r}function _o(n,e,t,r){const s=new Hn;return Ue(s,Pe.box,Ne.plank,0,1.1,0,r?4.2:3.2,2.2,r?3.4:2.8),Ue(s,Pe.pyr,Ne.roof,0,2.9,0,r?5.4:4.2,1.6,r?4.4:3.6,Math.PI/4),Ue(s,Pe.box,Ne.dark,0,.85,r?1.72:1.42,.9,1.7,.12),Ue(s,Pe.box,Ne.dark,r?1.4:1.05,2.6,-.6,.5,1.6,.5),s.position.set(n,0,e),s.rotation.y=t,ze.add(s),Vr.push({x:n,z:e,hx:r?2.2:1.7,hz:r?1.8:1.5}),s}function vc(n,e,t,r){Ue(ze,Pe.box,Ne.pale,n,.5,e,t,1,.08,r);for(let s=-t/2;s<=t/2;s+=1.5)Ue(ze,Pe.box,Ne.pale,n+Math.cos(r)*s,.5,e-Math.sin(r)*s,.06,1,.06,r);Yn.push({x:n,z:e,r:Math.max(.5,t*.3)})}function Mc(n,e,t,r){Ue(ze,Pe.cyl,Ne.stone,n,t/2,e,r*2,t,r*2),Ue(ze,Pe.cone,Ne.roof,n,t+.9,e,r*2.5,1.8,r*2.5);for(let s=0;s<8;s++){const a=s/8*Jt;Ue(ze,Pe.box,Ne.stone,n+Math.cos(a)*r,t+.3,e+Math.sin(a)*r,.5,.6,.5,-a)}Yn.push({x:n,z:e,r:r+.3})}function Mr(n,e,t,r){Ue(ze,Pe.box,Ne.stone,n,1.7,e,t,3.4,1,r);for(let s=-t/2+1;s<t/2;s+=2)Ue(ze,Pe.box,Ne.stone,n+Math.cos(r)*s,3.6,e-Math.sin(r)*s,.9,.5,1.1,r);Vr.push({x:n,z:e,hx:Math.abs(Math.cos(r))*t/2+.5,hz:Math.abs(Math.sin(r))*t/2+.5})}function Cd(n,e){Ue(ze,Pe.cyl,Ne.wood,n,1.2,e,.5,2.4,.5);for(let t=0;t<3;t++){const r=t/3*Jt;Ue(ze,Pe.sph,Ne.leaf,n+Math.cos(r)*.5,2.7+t*.4,e+Math.sin(r)*.5,3-t*.4,2.6-t*.3,3-t*.4)}Yn.push({x:n,z:e,r:.7})}function Sc(n,e){const t=Ue(ze,Pe.cone,Ne.fire,n,.5,e,.9,1.3,.9,0,!1),r=new Of(16752451,1.7,12);r.position.set(n,1.1,e),ze.add(r),Jo.push({f:t,l:r,x:n,z:e});for(let s=0;s<6;s++){const a=s/6*Jt;Ue(ze,Pe.ico,Ne.stone,n+Math.cos(a)*.85,.15,e+Math.sin(a)*.85,.35,.28,.35)}Yn.push({x:n,z:e,r:.8})}function Sr(n,e,t){Ue(ze,Pe.cyl,Ne.dark,n,2.6,e,.14,5.2,.14);const r=At({color:new qe(t),map:Et.cloth,side:Qt});Ue(ze,Pe.box,r,n+.65,4.2,e,1.3,1.7,.05)}function W0(n,e,t,r){const s=new tn(Rd(new Si(t,r)),Ne.field);s.rotation.x=-Math.PI/2,s.position.set(n,.05,e),s.receiveShadow=!0,ze.add(s)}function yr(n,e,t,r,s,a){const o=Ur(t,a);o.position.set(n,0,e),o.rotation.y=Math.random()*Jt,ze.add(o);const l=new tn(Pe.ring,new rr({color:13214247,transparent:!0,opacity:.5,side:Qt}));l.rotation.x=-Math.PI/2,l.position.set(n,.06,e),l.scale.setScalar(2.4),ze.add(l),dr.push({x:n,z:e,r:2.8,label:r,act:s,g:o,ring:l}),Yn.push({x:n,z:e,r:.6})}function Ds(n,e,t){wd(),ri="settlement",Nr=!1,mo={s:n},Ut.settleInteract=t,ze=new Hn,rn.add(ze);const r=new tn(new Si(220,220),Ne.grass);r.rotation.x=-Math.PI/2,r.receiveShadow=!0,ze.add(r),Ue(ze,Pe.box,Ne.dirt,0,.04,0,9,.08,60,0,!1),Ue(ze,Pe.box,Ne.dirt,0,.045,0,52,.08,7,0,!1);const s=nt[n.lord]||nt.you,a=n.kind==="castle",o=n.kind==="town";if(n.b.farm)for(let f=0;f<Math.min(n.b.farm,3);f++){const p=f*2.1-2;W0(-28+p*8,20,6,8)}if(a||o){const f=a?24:22;Mr(0,-f,f*2,0),Mr(-f,0,f*2,Math.PI/2),Mr(f,0,f*2,Math.PI/2),Mr(-f/2-3,f,f-6,0),Mr(f/2+3,f,f-6,0),[[-f,-f],[f,-f],[-f,f],[f,f]].forEach(([p,g])=>Mc(p,g,a?7:5.5,2.1)),Ue(ze,Pe.box,Ne.stone,-4,2.2,f,1.6,4.4,1.8),Ue(ze,Pe.box,Ne.stone,4,2.2,f,1.6,4.4,1.8),Ue(ze,Pe.box,Ne.stone,0,4.6,f,9.6,1,2),Sr(-4,f+1.2,s.c),Sr(4,f+1.2,s.c)}n.b.keep&&(Ue(ze,Pe.box,Ne.stone,0,3.4,-13,11,6.8,8),Ue(ze,Pe.pyr,Ne.roof,0,7.8,-13,13,3,10,Math.PI/4),Vr.push({x:0,z:-13,hx:5.5,hz:4}),Sr(-6,-8,s.c),Sr(6,-8,s.c));const l=[[-13,-2],[13,-2],[-14,8],[14,8],[-8,14],[8,14],[-16,-12],[16,-12],[0,17],[-10,-16],[10,-16]];let c=0;const d=()=>l[c++%l.length];for(const f in n.b)if(!["walls","tower","keep","farm"].includes(f))for(let p=0;p<Math.min(n.b[f],3);p++){const[g,_]=d(),v=_o(g,_,Math.random()*Jt,f==="barracks"||f==="market");if(f==="church"&&(Ue(v,Pe.cyl,Ne.stone,0,4,0,1.2,3,1.2),Ue(v,Pe.cone,Ne.roof,0,6,0,1.6,2,1.6)),(f==="smithy"||f==="workshop")&&Sc(g+2.6,_+1.8),f==="market"){const m=At({color:11024426,map:Et.cloth,side:Qt});Ue(v,Pe.box,m,0,2.6,1.8,3.6,.14,2)}f==="stables"&&(Ue(v,Pe.box,Ne.wood,g>0?g+3:g-3,.7,_,3,1.4,4,0),Ue(v,Pe.cone,Ne.thatch,g>0?g+3:g-3,1.8,_,3.5,1,4.5,Math.PI/4)),f==="tavern"&&Sr(g+3,_+1,s.c),Td.push({k:f,x:g,z:_})}if(n.b.walls&&!(a||o))for(let f=0;f<14;f++){const p=f/14*Jt;if(f===6||f===7)continue;const g=Math.cos(p)*20,_=Math.sin(p)*20;Ue(ze,Pe.box,Ne.stone,g,1.1,_,5.6,2.2,.4,-p+Math.PI/2),Yn.push({x:g,z:_,r:2.4})}if(n.b.tower)for(let f=0;f<Math.min(n.b.tower,3);f++){const p=-Math.PI/2+f*2.1;Mc(Math.cos(p)*20,Math.sin(p)*20,5,1.7)}vc(-18,-8,12,0),vc(18,-8,12,0);for(let f=0;f<3;f++){const p=Math.random()*Jt,g=24+Math.random()*16,_=Math.cos(p)*g,v=Math.sin(p)*g;Ue(ze,Pe.ico,Rd(new Fi(1.5,1,1.2)),Ne.plank,_,.5,v,1,1,1,Math.random()*Jt),Yn.push({x:_,z:v,r:.7})}for(let f=0;f<28;f++){const p=Math.random()*Jt,g=30+Math.random()*24;Cd(Math.cos(p)*g,Math.sin(p)*g)}Sc(0,4),yr(-6,10,3832997,"Управляющий — стройка и казна","steward"),yr(6,10,9071172,"Старшина — набор войска","recruit"),yr(-11,4,13209386,"Купец — торг","merchant"),n.b.tavern&&yr(11,4,9391932,"Корчмарь — наёмники и слухи","tavern"),yr(0,26,7173248,"Ворота — выйти на карту земель","gate"),dr[dr.length-1].r=3.4,un=Ur(13214247,"knight",1.06),un.position.set(0,0,18),rn.add(un),ee.x=0,ee.z=18,ee.face=Math.PI,ee.hp=mo.hp||100,ee.maxHp=100,ee.dodge=0,ee.dodgeCd=0,ee.inv=0;let u=0;for(const f in e)for(let p=0;p<Math.min(e[f],8);p++){const g=Dn[f],_=g.branch==="cav",v=Ur(g.col,g.ranged?"ranged":g.t>=4?"knight":_?"cavalry":"spear"),m=Math.random()*Jt,h=3+Math.random()*3;v.position.set(ee.x+Math.cos(m)*h,0,ee.z+Math.sin(m)*h),ze.add(v),Rt.push({g:v,side:1,type:f,d:g,hp:g.hp,max:g.hp,cd:Math.random(),ph:Math.random()*Jt,alive:!0,follow:!0,mor:80,branch:g.branch||"inf",ox:Math.cos(u)*3.4,oz:Math.sin(u)*3.4,fleeing:!1}),u++}$t.position.set(ee.x,34,ee.z+22),$t.lookAt(ee.x,0,ee.z)}function Pd(n,e,t,r){wd(),ri="battle",Nr=!1,mo={raid:t},vn="attack",ti="advance",Ss=0,ze=new Hn,rn.add(ze);const s=new tn(new Si(240,240),Ne.grass);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,ze.add(s);for(let o=0;o<34;o++){const l=Math.random()*Jt,c=34+Math.random()*30;Cd(Math.cos(l)*c,Math.sin(l)*c)}for(let o=0;o<10;o++){const l=(Math.random()-.5)*70,c=(Math.random()-.5)*70;Ue(ze,Pe.ico,Ne.stone,l,.5,c,2.2,1.4,2.2,Math.random()*Jt),Yn.push({x:l,z:c,r:1.1})}for(let o=0;o<4;o++)_o(-30+o*4,-34,Math.random());for(let o=0;o<3;o++)_o(26+o*4,32,Math.random());un=Ur(13214247,"knight",1.08),un.position.set(0,0,20),rn.add(un),ee.x=0,ee.z=20,ee.face=Math.PI,ee.hp=r,ee.maxHp=100,ee.dodge=0,ee.dodgeCd=0,ee.inv=0;const a=(o,l,c,d)=>{const u=Dn[o]||Dn.levy,f=(u.branch||"inf")==="cav",p=Ur(l>0?u.col:t?5917242:9058860,u.ranged?"ranged":u.t>=4?"knight":f?"cavalry":"spear");p.position.set(c,0,d),ze.add(p),Rt.push({g:p,side:l,type:o,d:u,hp:u.hp,max:u.hp,cd:Math.random(),ph:Math.random()*Jt,alive:!0,branch:u.branch||"inf",mor:l>0?Ld:80,ox:(Math.random()-.5)*14,oz:(Math.random()-.5)*6,fleeing:!1})};i=0;for(const o in n)for(let l=0;l<n[o];l++)a(o,1,(i%7-3)*2.6,18+Math.floor(i/7)*2.6),i++;i=0;for(const o in e)for(let l=0;l<e[o];l++)a(o,-1,(i%8-3.5)*2.6,-18-Math.floor(i/8)*2.6),i++;$t.position.set(0,36,42),$t.lookAt(0,0,0)}let Ld=72;function Dd(n){Ld=n}function X0(){return ee.hp}function Id(){return{ally:Rt.filter(n=>n.alive&&n.side>0&&!n.fleeing).length,enemy:Rt.filter(n=>n.alive&&n.side<0&&!n.fleeing).length}}function $0(){const n={};return Rt.forEach(e=>{e.side>0&&!e.alive&&(n[e.type]=(n[e.type]||0)+1)}),n}function Nd(){let n=null,e=1e9;for(const t of dr){const r=Math.hypot(t.x-ee.x,t.z-ee.z);r<t.r&&r<e&&(e=r,n=t)}return n}function sr(n,e,t,r,s){for(let a=0;a<r;a++){const o=new tn(Pe.box,Ne.blood);o.scale.setScalar(.08+Math.random()*.09),o.position.set(n,e,t),ze.add(o),Pi.push({m:o,vx:(Math.random()-.5)*5,vy:2+Math.random()*4,vz:(Math.random()-.5)*5,t:0})}}function q0(n,e,t,r,s){const a=new tn(Pe.box,Ne.arrow);a.scale.set(.08,.08,.7),a.position.set(n,1.3,e),a.rotation.y=t,ze.add(a),wr.push({m:a,x:n,z:e,vx:Math.sin(t)*26,vz:Math.cos(t)*26,dmg:r,side:s,t:0})}function Y0(){for(const t of Yn){const r=ee.x-t.x,s=ee.z-t.z,a=Math.hypot(r,s),o=t.r+.5;if(a<o&&a>1e-4){const l=o-a;ee.x+=r/a*l,ee.z+=s/a*l}}for(const t of Vr){const r=ee.x-t.x,s=ee.z-t.z,a=Ir(r,-t.hx,t.hx),o=Ir(s,-t.hz,t.hz),l=r-a,c=s-o,d=Math.hypot(l,c);if(d<.5)if(d>1e-4){const u=.5-d;ee.x+=l/d*u,ee.z+=c/d*u}else{const u=t.hx-Math.abs(r),f=t.hz-Math.abs(s);u<f?ee.x=t.x+Math.sign(r||1)*(t.hx+.5):ee.z=t.z+Math.sign(s||1)*(t.hz+.5)}}const e=Math.hypot(ee.x,ee.z);e>78&&(ee.x*=78/e,ee.z*=78/e)}function K0(n){if(Ss-=n,Ss<=0){Ss=4+Math.random()*4;const t=Rt.filter(a=>a.alive&&a.side<0&&!a.fleeing).length,r=Rt.filter(a=>a.alive&&a.side>0&&!a.fleeing).length,s=Rt.filter(a=>a.alive&&a.side<0&&!a.fleeing&&a.branch==="cav").length;Rt.filter(a=>a.alive&&a.side>0&&!a.fleeing&&a.branch==="cav").length,t<r*.6?ti="hold":s>2&&Math.random()<.4?ti="flank":r>t&&Math.random()<.3?ti="retreat":ti="advance"}Rt.filter(t=>t.alive&&t.side<0&&!t.fleeing).forEach((t,r)=>{if(ti==="retreat"){t.fleeing=t.mor<25;return}if(ti==="hold"){t.holdPos=!0;return}if(t.holdPos=!1,ti==="flank"&&t.branch==="cav"){const s=Rt.find(a=>a.alive&&a.side>0&&!a.fleeing&&a.branch==="arch");if(s){t.flankTarget=s;return}}t.flankTarget=null})}function Z0(n,e,t,r){if(!n.alive||n.fleeing)return;if(n.mor<20&&!n.fleeing&&(n.fleeing=!0,n.g.rotation.y=Math.atan2(0-n.g.position.x,-n.side*80-n.g.position.z)),n.fleeing){const v=-n.side*80,m=0-n.g.position.x,h=v-n.g.position.z,y=Math.hypot(m,h)||1;n.g.position.x+=m/y*n.d.spd*1.5*e,n.g.position.z+=h/y*n.d.spd*1.5*e,n.g.userData.lL.rotation.x=Math.sin(t*14)*.7,n.g.userData.lR.rotation.x=-Math.sin(t*14)*.7;return}n.cd-=e;let s=null,a=1e9;const o=n.side<0;if(o){const _=Math.hypot(ee.x-n.g.position.x,ee.z-n.g.position.z);_<a&&ri==="battle"&&(a=_,s={hero:!0,x:ee.x,z:ee.z})}for(const _ of r){if(!_.alive||_.fleeing||_.side===n.side)continue;const v=Math.hypot(_.g.position.x-n.g.position.x,_.g.position.z-n.g.position.z);v<a&&(a=v,s={u:_,x:_.g.position.x,z:_.g.position.z})}n.flankTarget&&n.flankTarget.alive&&!n.flankTarget.fleeing&&(s={u:n.flankTarget,x:n.flankTarget.g.position.x,z:n.flankTarget.g.position.z},a=Math.hypot(s.x-n.g.position.x,s.z-n.g.position.z));const l=o?ti:vn;if(ri==="settlement"||l==="retreat"||!s){const _=ee.x+n.ox,v=ee.z+n.oz,m=Math.hypot(_-n.g.position.x,v-n.g.position.z);m>1.2&&(n.g.position.x+=(_-n.g.position.x)/m*Math.min(m,n.d.spd*1.3*e),n.g.position.z+=(v-n.g.position.z)/m*Math.min(m,n.d.spd*1.3*e),n.g.rotation.y=Math.atan2(_-n.g.position.x,v-n.g.position.z),n.g.userData.lL.rotation.x=Math.sin(t*10+n.ph)*.5,n.g.userData.lR.rotation.x=-Math.sin(t*10+n.ph)*.5);return}if(l==="follow"){const _=ee.x+n.ox,v=ee.z+n.oz,m=Math.hypot(_-n.g.position.x,v-n.g.position.z);m>2&&(n.g.position.x+=(_-n.g.position.x)/m*n.d.spd*e,n.g.position.z+=(v-n.g.position.z)/m*n.d.spd*e,n.g.rotation.y=Math.atan2(_-n.g.position.x,v-n.g.position.z),n.g.userData.lL.rotation.x=Math.sin(t*10+n.ph)*.5,n.g.userData.lR.rotation.x=-Math.sin(t*10+n.ph)*.5);return}if((l==="hold"||n.holdPos)&&a>6){const _=ee.x+n.ox,v=ee.z+n.oz,m=Math.hypot(_-n.g.position.x,v-n.g.position.z);m>1&&(n.g.position.x+=(_-n.g.position.x)/m*n.d.spd*.6*e,n.g.position.z+=(v-n.g.position.z)/m*n.d.spd*.6*e);return}if(n.branch==="arch"&&l!=="hold"){const _=r.find(v=>v.alive&&!v.fleeing&&v.side!==n.side&&v.branch==="inf"&&Math.hypot(v.g.position.x-n.g.position.x,v.g.position.z-n.g.position.z)<5);if(_&&!n.rangedAway){const v=n.g.position.x-_.g.position.x,m=n.g.position.z-_.g.position.z,h=Math.hypot(v,m)||1;n.g.position.x+=v/h*n.d.spd*1.2*e,n.g.position.z+=m/h*n.d.spd*1.2*e;return}}const c=s.x-n.g.position.x,d=s.z-n.g.position.z,u=Math.hypot(c,d)||1;n.g.rotation.y=Math.atan2(c,d);const f=n.d.ranged?11:1.9,p=n.branch==="cav"&&u>5&&u<15,g=p?n.d.spd*1.4:n.d.spd;if(u>f*.85&&(n.g.position.x+=c/u*g*e,n.g.position.z+=d/u*g*e,n.g.userData.lL.rotation.x=Math.sin(t*10+n.ph)*.55,n.g.userData.lR.rotation.x=-Math.sin(t*10+n.ph)*.55),u<f&&n.cd<=0){n.cd=n.d.ranged?1.6:1.05,n.g.userData.aR.rotation.x=-1.9;const _=p?1.5:1;n.d.ranged?q0(n.g.position.x,n.g.position.z,Math.atan2(c,d),n.d.atk*_,n.side):s.hero?ee.inv<=0&&(ee.hp-=Math.max(2,n.d.atk*_-Ud*.4),ee.inv=.35,pi=.2,sr(ee.x,1.2,ee.z,5),Ut.sfx("hurt")):(s.u.hp-=Math.max(3,n.d.atk*_-s.u.d.arm*.4),sr(s.u.g.position.x,1.2,s.u.g.position.z,4),s.u.hp<=0&&(vo(s.u),xo(s.u,r))),p&&(n.mor=Ir(n.mor+3,0,100))}n.g.userData.aR.rotation.x+=(-.3-n.g.userData.aR.rotation.x)*Math.min(1,e*8)}let Ud=3;function xo(n,e){const t=n.side,r=e.filter(l=>l.alive&&l.side===t&&!l.fleeing),s=e.filter(l=>!l.alive&&l.side===t).length,a=r.length+s;if(a<2)return;const o=s/a;o>.3&&r.forEach(l=>{l.mor=Ir(l.mor-8,0,100)}),o>.5&&r.forEach(l=>{l.mor=Ir(l.mor-12,0,100),l.mor<25&&(l.fleeing=!0)})}const yc=new kf,J0=new ni(new B(0,1,0),0),Ec=new $e,va=new B;function bc(n,e,t,r){if(!Ad||!un)return;Ud=r,Ec.set(Ls.x/innerWidth*2-1,-(Ls.y/innerHeight)*2+1),yc.setFromCamera(Ec,$t),yc.ray.intersectPlane(J0,va)&&(ee.face=Math.atan2(va.x-ee.x,va.z-ee.z));let s=(xn.KeyD||xn.ArrowRight?1:0)-(xn.KeyA||xn.ArrowLeft?1:0),a=(xn.KeyS||xn.ArrowDown?1:0)-(xn.KeyW||xn.ArrowUp?1:0);const o=Math.hypot(s,a);o>1&&(s/=o,a/=o);const l=xn.ShiftLeft||xn.ShiftRight;if(ee.dodge>0)ee.dodge-=n,ee.x+=Math.sin(ee.face)*15*n,ee.z+=Math.cos(ee.face)*15*n,un.rotation.z=Math.sin((1-ee.dodge/.3)*Math.PI)*1.1;else{un.rotation.z=0;const _=(l?9.2:5.6)*(ee.swing>0?.45:1);ee.x+=s*_*n,ee.z+=a*_*n}po&&ee.dodgeCd<=0&&(ee.dodge=.3,ee.dodgeCd=.8,ee.inv=.36,Ut.sfx("dodge")),po=!1,ee.dodgeCd>0&&(ee.dodgeCd-=n),ee.inv>0&&(ee.inv-=n),Y0(),ee.moving=o>0,ee.moving&&(ee.wp+=n*(l?14:10)),un.position.set(ee.x,0,ee.z),un.rotation.y=ee.face;const c=un.userData,d=Math.sin(ee.wp),u=ee.moving?l?.8:.55:0;if(c.lL.rotation.x=d*u,c.lR.rotation.x=-d*u,c.aL.rotation.x=-.3,c.aR.rotation.x=-.3,ee.atkCd>0&&(ee.atkCd-=n),ee.swing>0){ee.swing-=n;const _=1-ee.swing/t.spd;if(c.aR.rotation.x=-2.3+_*3.4,c.aL.rotation.x=-.6,_>.35&&_<.55&&!ee.hitDone){ee.hitDone=!0;for(const v of Rt){if(!v.alive||v.fleeing||v.side>0)continue;const m=v.g.position.x-ee.x,h=v.g.position.z-ee.z;Math.hypot(m,h)<t.reach+.6&&Math.abs(Math.atan2(Math.sin(Math.atan2(m,h)-ee.face),Math.cos(Math.atan2(m,h)-ee.face)))<1.1&&(v.hp-=t.atk+12,sr(v.g.position.x,1.2,v.g.position.z,7),pi=.16,Ut.sfx("hit"),v.hp<=0&&(vo(v),xo(v,Rt)))}}}else if(Qo&&ee.atkCd<=0&&ri==="battle"){ee.atkCd=t.spd+.1,ee.swing=t.spd,ee.hitDone=!1,Ut.sfx("swing");const _=new tn(Pe.torus,new rr({color:16771488,transparent:!0,opacity:.75,blending:Ea,depthWrite:!1,side:Qt}));_.scale.setScalar(t.reach*1.7),_.position.set(ee.x+Math.sin(ee.face)*1.1,1.3,ee.z+Math.cos(ee.face)*1.1),_.rotation.set(Math.PI/2,0,-ee.face),ze.add(_),Pi.push({m:_,t:0,arc:!0})}ri==="battle"&&K0(n);for(const _ of Rt)Z0(_,n,e,Rt);for(let _=wr.length-1;_>=0;_--){const v=wr[_];v.t+=n,v.x+=v.vx*n,v.z+=v.vz*n,v.m.position.set(v.x,1.3,v.z);let m=v.t>1.6;if(v.side<0&&Math.hypot(v.x-ee.x,v.z-ee.z)<.6&&ee.inv<=0&&(ee.hp-=Math.max(2,v.dmg-r*.4),ee.inv=.3,pi=.15,sr(ee.x,1.3,ee.z,4),Ut.sfx("hurt"),m=!0),!m){for(const h of Rt)if(!(!h.alive||h.fleeing||h.side===v.side)&&Math.hypot(v.x-h.g.position.x,v.z-h.g.position.z)<.6){h.hp-=Math.max(3,v.dmg-h.d.arm*.4),sr(h.g.position.x,1.3,h.g.position.z,3),h.hp<=0&&(vo(h),xo(h,Rt)),m=!0;break}}m&&(ze.remove(v.m),wr.splice(_,1))}for(let _=Pi.length-1;_>=0;_--){const v=Pi[_];v.t+=n,v.arc?(v.m.material.opacity=.75*(1-v.t/.22),v.m.scale.multiplyScalar(1+n*3),v.t>.22&&(ze.remove(v.m),v.m.material.dispose(),Pi.splice(_,1))):(v.vy-=15*n,v.m.position.x+=v.vx*n,v.m.position.y+=v.vy*n,v.m.position.z+=v.vz*n,(v.t>.85||v.m.position.y<0)&&(ze.remove(v.m),v.m.material.dispose(),Pi.splice(_,1)))}Jo.forEach(_=>{const v=1+Math.sin(e*9+_.x)*.14;_.f.scale.set(.9*v,1.3*(1+Math.sin(e*11+_.z)*.16),.9*v),_.l.intensity=1.5+Math.sin(e*10+_.x)*.4}),dr.forEach(_=>{_.ring.material.opacity=.32+Math.sin(e*3+_.x)*.16});const f=ee.x,p=ee.z;$t.position.lerp(new B(f,34,p+22),1-Math.exp(-7*n)),pi>0&&(pi=Math.max(0,pi-n*1.5),$t.position.x+=(Math.random()-.5)*pi,$t.position.z+=(Math.random()-.5)*pi),$t.lookAt(f,1,p);const g=rn.userData.sun;if(g.position.set(f+26,38,p+18),g.target.position.set(f,0,p),ri==="battle"&&!Nr){const _=Id();_.enemy===0&&!Rt.some(v=>v.alive&&v.side<0)?Tc(!0):(ee.hp<=0||_.ally===0)&&Tc(!1)}ri==="settlement"&&ee.hp<100&&(ee.hp=Math.min(100,ee.hp+n*4)),On.render(rn,$t)}function vo(n){n.alive=!1,n.g.rotation.x=-Math.PI/2,n.g.position.y=.3,sr(n.g.position.x,1,n.g.position.z,10),Ut.sfx("kill")}function Tc(n){Nr||(Nr=!0,Ut.battleEnd(n,$0()))}function Q0(){return{hp:ee.hp,max:ee.maxHp}}const ae=n=>document.getElementById(n),In=(n,e,t)=>Math.max(e,Math.min(t,n));let H=Qd(),xt="scene",jo="keep",wt=null,Bn=null,Ma=0,Ac=performance.now(),Tr=!1,Ji=null,Ft={x:0,y:0},Ot=1,el=!1,ji=null,ur=!0;function at(n){if(!Tr)try{Ji=Ji||new(window.AudioContext||window.webkitAudioContext);const e=Ji.currentTime,t=Ji.createOscillator(),r=Ji.createGain();t.connect(r),r.connect(Ji.destination);const s={hit:[220,90,.09,"square",.14],swing:[520,240,.07,"sine",.07],hurt:[180,60,.2,"sawtooth",.16],kill:[300,110,.14,"square",.12],dodge:[700,300,.1,"sine",.08],coin:[880,1300,.08,"sine",.12],build:[200,420,.2,"square",.12],horn:[150,320,.45,"sawtooth",.16],ui:[600,700,.05,"sine",.07]}[n]||[440,440,.06,"sine",.08];t.type=s[3],t.frequency.setValueAtTime(s[0],e),t.frequency.exponentialRampToValueAtTime(s[1],e+s[2]),r.gain.setValueAtTime(s[4],e),r.gain.exponentialRampToValueAtTime(.001,e+s[2]),t.start(e),t.stop(e+s[2]+.02)}catch{}}function vt(n){const e=ae("toast");e.textContent=n,e.classList.add("on"),clearTimeout(e._t),e._t=setTimeout(()=>e.classList.remove("on"),2400)}function Bs(n,e){const t=ae("feed"),r=document.createElement("div");for(r.className="fe",r.style.borderLeftColor="#c9a227",r.innerHTML=n,t.appendChild(r);t.children.length>5;)t.removeChild(t.firstChild);setTimeout(()=>r.remove(),3600)}let Is="line";function j0(){const n=Object.keys(Eo);Is=n[(n.indexOf(Is)+1)%n.length],e_(),at("ui")}function e_(){const n=ae("bForm");n&&(n.textContent=Eo[Is].n);const e=ae("bOrd");e&&(e.textContent={attack:"В атаку",hold:"Держать строй",advance:"Наступать",follow:"За мной",retreat:"Отход"}[Mo]||Mo)}const t_={sfx:at,interact:n_,order:n=>{Mo=n;const e=ae("bOrd");e&&(e.textContent={attack:"В атаку",hold:"Держать строй",advance:"Наступать",follow:"За мной",retreat:"Отход"}[n]),at("horn")},cycleFormation:j0,battleEnd:(n,e)=>a_(n,e),settleInteract:null};let Mo="attack";B0(ae("view"),t_);zs("keep");setTimeout(()=>ae("ovHelp").classList.remove("hide"),350);function zs(n){var t;jo=n,xt="scene";const e=H.settlements[n];H.player.x=e.x,H.player.y=e.y,H.player.tx=null,Ds(e,H.player.troops,null),ae("place").querySelector(".n").textContent=e.n,ae("place").querySelector(".s").textContent=`${jt[e.kind].n} · ${((t=nt[e.lord])==null?void 0:t.n)||"—"} · люд ${Math.round(e.pop)} · гарнизон ${e.gar}`,ae("bHud").classList.remove("on"),Oi(),vt(`Вы вошли в ${e.n}`)}function tl(){xt="map",ur=!0,ae("ovMap").classList.remove("hide"),wt=jo,Vn(),xi(),at("ui")}function Oi(){["ovDialog","ovParty","ovRealm","ovMap","ovHelp"].forEach(n=>ae(n).classList.add("hide"))}function n_(){if(xt!=="scene"||Bn)return;const n=Nd();if(!n)return;const e=H.settlements[jo];if(n.act==="gate"){tl();return}n.act==="steward"?So(e):n.act==="recruit"?Fd(e):n.act==="merchant"?Ci(e):n.act==="tavern"&&ys(e)}function ks(n,e,t){ae("dgT").textContent=n,ae("dgS").textContent=e,ae("dgBody").innerHTML=t,ae("ovDialog").classList.remove("hide")}function So(n){const e=n.lord==="you";let t=`<div class="row"><span>Казна поселения</span><b>${Math.round(n.income||0)} 🪙 / 5 дней</b></div>
 <div class="row"><span>Ваша казна</span><b>${H.player.gold} 🪙</b></div>
 <div class="row"><span>Люд · достаток</span><b>${Math.round(n.pop)} · ${Math.round(n.pros)}</b></div>
 <div class="row"><span>Занято мест</span><b>${Ao(n)} / ${To(n)}</b></div>`;n.project&&(t+=`<div class="card"><div class="ct">🔨 Строится: ${wn[n.project.k].n}</div><div class="cd">Осталось ${n.project.left} дн.</div></div>`),n.upgrade&&(t+=`<div class="card"><div class="ct">🏗️ Перестройка в ${jt[n.upgrade.to].n}</div><div class="cd">Осталось ${n.upgrade.left} дн.</div></div>`),t+='<div class="lbl">Запасы</div><div class="grid3">';for(const s in Cn)t+=`<div class="tag">${Cn[s].i} ${Cn[s].n}: ${Math.round(n.stock[s])}</div>`;if(t+="</div>",e){const s=jt[n.kind];s.up&&(t+=`<button class="btn gold" id="upg">🏗️ Перестроить в ${jt[s.up].n} — ${s.uc.gold}🪙 + материалы (${s.ud} дн.)</button>`),t+='<div class="lbl">Возвести</div>';for(const a in wn){const o=wn[a],l=Ic(n,a),c=Object.entries(o.c).map(([d,u])=>d==="gold"?u+"🪙":Cn[d].i+u).join(" ");t+=`<div class="card"><div class="ct"><span>${o.i} ${o.n} <small>${n.b[a]||0}/${o.max}</small></span><span style="font-size:11px">${c}</span></div>
   <div class="cd">${o.dsc} · ${o.d} дн.</div><button class="btn sm" data-b="${a}" ${l||H.player.gold<o.c.gold?"disabled":""}>${l||"Заложить"}</button></div>`}}else t+='<div class="card"><div class="cd">Чужое владение. Захватите его в бою, чтобы строить здесь.</div></div>';ks("Управляющий",n.n,t),ae("dgBody").querySelectorAll("[data-b]").forEach(s=>s.onclick=()=>{const a=eu(H,n.id,s.dataset.b,H.player.gold);a?vt(a):(H.player.gold-=wn[s.dataset.b].c.gold,at("build"),Bs("🔨 Заложено: "+wn[s.dataset.b].n)),So(n)});const r=ae("upg");r&&(r.onclick=()=>{const s=tu(H,n.id,H.player.gold);s?vt(s):(H.player.gold-=jt[n.kind].uc.gold,at("build")),So(n)})}function Fd(n){const e=Math.min(n.recruits,60-Xn(H)),t=n.kind==="village"?"peasant":n.kind==="town"?"levy":"spearman",r=Dn[t],s=n.kind==="village"?24:n.kind==="town"?38:52;let a=`<div class="row"><span>Готовы наняться</span><b>${n.recruits} чел.</b></div>
 <div class="row"><span>В вашем отряде</span><b>${Xn(H)} / 60</b></div>
 <div class="row"><span>Тип набора</span><b>${r.n}</b></div>
 <div class="row"><span>Цена за одного</span><b>${s} 🪙</b></div>
 <div class="row"><span>Жалованье в день</span><b>${r.wage} 🪙 / чел.</b></div>
 <div class="row"><span>Боевая подготовка</span><b>Ур.${r.t} · HP ${r.hp} · удар ${r.atk} · броня ${r.arm}</b></div>`;n.lord!=="you"&&(a+='<div class="card"><div class="cd">Чужие люди идут неохотно: набор дороже.</div></div>'),a+='<div class="lbl">Нанять</div><div style="display:flex;gap:6px;flex-wrap:wrap">',[1,3,5,10].forEach(l=>a+=`<button class="btn sm" data-r="${l}" ${e<l?"disabled":""}>+${l} (${l*s}🪙)</button>`),a+=`</div><button class="btn" id="rAll" ${e<1?"disabled":""}>Нанять всех (${e}) — ${e*s}🪙</button>`,ks("Старшина",n.n,a);const o=l=>{const c=lu(H,n.id,l);c.err?vt(c.err):(at("coin"),Bs(`👥 +${c.n} бойцов за ${c.cost}🪙`),Ds(n,H.player.troops,null)),Fd(n)};ae("dgBody").querySelectorAll("[data-r]").forEach(l=>l.onclick=()=>o(+l.dataset.r)),ae("rAll").onclick=()=>o(e)}function Ci(n){const e=H.player.cargo||{};let t=`<div class="row"><span>Ваша казна</span><b>${H.player.gold} 🪙</b></div><div class="lbl">Товары</div>`;for(const a in Cn){const o=Cn[a].p,l=Math.round(o*1.15*(1+(n.pros-50)/220)),c=Math.round(o*.82*(1+(n.pros-50)/220));t+=`<div class="card"><div class="ct"><span>${Cn[a].i} ${Cn[a].n}</span><span style="font-size:11px">куп ${l}🪙 · прод ${c}🪙</span></div>
  <div class="cd">На складе: ${Math.round(n.stock[a])} · у вас: ${e[a]||0}</div>
  <div class="cb"><button class="btn sm" data-buy="${a}" ${n.stock[a]<1||H.player.gold<l?"disabled":""}>Купить 1</button>
  <button class="btn sm" data-buy5="${a}" ${n.stock[a]<5||H.player.gold<l*5?"disabled":""}>×5</button>
  <button class="btn sm" data-sell="${a}" ${(e[a]||0)<1?"disabled":""}>Продать 1</button></div></div>`}t+='<div class="lbl">Снаряжение лорда</div>',er.forEach((a,o)=>{o<=H.player.weapon||(t+=`<div class="card"><div class="ct"><span>🗡️ ${a.n}</span><span>${a.c}🪙</span></div><div class="cd">Урон ${a.atk} · досягаемость ${a.reach}</div>
  <button class="btn sm" data-w="${o}" ${H.player.gold<a.c?"disabled":""}>Купить</button></div>`)}),tr.forEach((a,o)=>{o<=H.player.armor||(t+=`<div class="card"><div class="ct"><span>🛡️ ${a.n}</span><span>${a.c}🪙</span></div><div class="cd">Защита ${a.arm}</div>
  <button class="btn sm" data-a="${o}" ${H.player.gold<a.c?"disabled":""}>Купить</button></div>`)}),H.player.prisoners&&(t+=`<button class="btn gold" id="sellP">⛓️ Продать пленных (${H.player.prisoners}) — ${H.player.prisoners*22}🪙</button>`),ks("Купец",n.n+" · достаток "+Math.round(n.pros),t);const r=ae("dgBody");r.querySelectorAll("[data-buy]").forEach(a=>a.onclick=()=>{const o=Vs(H,n.id,a.dataset.buy,!0,1);o.err?vt(o.err):at("coin"),Ci(n)}),r.querySelectorAll("[data-buy5]").forEach(a=>a.onclick=()=>{const o=Vs(H,n.id,a.dataset.buy5,!0,5);o.err?vt(o.err):at("coin"),Ci(n)}),r.querySelectorAll("[data-sell]").forEach(a=>a.onclick=()=>{const o=Vs(H,n.id,a.dataset.sell,!1,1);o.err?vt(o.err):at("coin"),Ci(n)}),r.querySelectorAll("[data-w]").forEach(a=>a.onclick=()=>{const o=+a.dataset.w;H.player.gold-=er[o].c,H.player.weapon=o,at("coin"),vt("Куплено: "+er[o].n),Ci(n)}),r.querySelectorAll("[data-a]").forEach(a=>a.onclick=()=>{const o=+a.dataset.a;H.player.gold-=tr[o].c,H.player.armor=o,at("coin"),vt("Куплено: "+tr[o].n),Ci(n)});const s=ae("sellP");s&&(s.onclick=()=>{uu(H),at("coin"),Ci(n)})}function ys(n){let e=`<div class="card"><div class="ct">🍺 Наёмники</div><div class="cd">В корчме сидят люди с оружием. Дороже набора, но уже умеют биться.</div>
 <button class="btn sm" id="merc" ${H.player.gold<180?"disabled":""}>Нанять 3 сержантов — 180🪙</button></div>
 <div class="card"><div class="ct">🐎 Всадники</div><div class="cd">Конный разведчик — быстрый и маневренный боец.</div>
 <button class="btn sm" id="cav" ${H.player.gold<140?"disabled":""}>Нанять 2 разведчиков — 140🪙</button></div>
 <div class="card"><div class="ct">🍷 Угощение отряду</div><div class="cd">Поднимает дух войска.</div>
 <button class="btn sm" id="drink" ${H.player.gold<60?"disabled":""}>Угостить всех — 60🪙</button></div>
 <div class="lbl">Слухи</div>`;const t=Object.keys(H.wars).filter(s=>H.wars[s]).slice(0,4);e+=t.length?t.map(s=>{const[a,o]=s.split("|");return`<div class="card"><div class="cd">⚔️ ${nt[a].n} воюет с ${nt[o].n}</div></div>`}).join(""):'<div class="card"><div class="cd">Пока в землях тихо.</div></div>';const r=Object.values(H.settlements).sort((s,a)=>a.pros-s.pros)[0];e+=`<div class="card"><div class="cd">💰 Богаче всех ныне ${r.n} — достаток ${Math.round(r.pros)}.</div></div>`,ks("Корчмарь",n.n,e),ae("merc").onclick=()=>{H.player.gold<180||(H.player.gold-=180,H.player.troops.serjeant=(H.player.troops.serjeant||0)+3,at("coin"),Ds(n,H.player.troops,null),ys(n))},ae("cav").onclick=()=>{H.player.gold<140||(H.player.gold-=140,H.player.troops.scout=(H.player.troops.scout||0)+2,at("coin"),Ds(n,H.player.troops,null),ys(n))},ae("drink").onclick=()=>{H.player.gold<60||(H.player.gold-=60,H.player.morale=In(H.player.morale+14,0,100),at("coin"),vt("Дух отряда вырос"),ys(n))}}function nl(){const n=H.player;let e=`<div class="row"><span>Бойцов</span><b>${Xn(H)} / 60</b></div>
 <div class="row"><span>Жалованье в день</span><b>${Dc(H)} 🪙</b></div>
 <div class="row"><span>Провизия</span><b>${Math.round(n.food)} (нужно ${Math.ceil(Xn(H)*.5)}/день)</b></div>
 <div class="row"><span>Пленные</span><b>${n.prisoners}</b></div>
 <div class="row"><span>Оружие · доспех</span><b>${er[n.weapon].n} · ${tr[n.armor].n}</b></div><div class="lbl">Состав</div>`;const t=Object.keys(n.troops).filter(s=>n.troops[s]>0);t.length||(e+='<div class="card"><div class="cd">Отряда нет. Наймите людей у старшины.</div></div>');const r={inf:"Пехота",arch:"Стрелки",cav:"Конница"};t.forEach(s=>{const a=Dn[s];e+=`<div class="card"><div class="ct"><span>${a.n} <small>×${n.troops[s]}</small></span><span style="font-size:11px">${r[a.branch]||"Пехота"} · ур.${a.t} · ${a.wage}🪙/дн</span></div>
  <div class="cd">Здоровье ${a.hp} · удар ${a.atk} · доспех ${a.arm}${a.ranged?" · стрелок":""}${a.branch==="cav"?" · конница":""}</div>
  ${a.up?`<button class="btn sm" data-u="${s}" ${n.gold<a.uc?"disabled":""}>Обучить одного → ${Dn[a.up].n} (${a.uc}🪙)</button>`:""}</div>`}),ae("ptS").textContent=`Слава ${n.renown} · честь ${n.honor} · уровень ${n.lvl}`,ae("ptBody").innerHTML=e,ae("ovParty").classList.remove("hide"),ae("ptBody").querySelectorAll("[data-u]").forEach(s=>s.onclick=()=>{const a=cu(H,s.dataset.u);a?vt(a):(at("coin"),Bs("🎖️ Боец обучен")),nl()})}function il(){const n=Object.values(H.settlements).filter(t=>t.lord==="you");let e=`<div class="grid2"><div class="card"><div class="ct">🏰 Ваши владения</div><div class="cd">${n.length} поселений · подати ${n.reduce((t,r)=>t+(r.income||0),0)}🪙 / 5 дней</div></div>
 <div class="card"><div class="ct">📜 Войны</div><div class="cd">${Object.keys(H.wars).filter(t=>H.wars[t]).length/2||0} активных</div></div></div>`;e+='<div class="lbl">Поселения</div>',n.forEach(t=>{e+=`<div class="card"><div class="ct"><span>${jt[t.kind].i} ${t.n}</span><span style="font-size:11px">${jt[t.kind].n}</span></div>
  <div class="cd">Люд ${Math.round(t.pop)} · достаток ${Math.round(t.pros)} · гарнизон ${t.gar} · оборона ${Br(t)} · места ${Ao(t)}/${To(t)}</div>
  <div class="cb">${Object.entries(t.b).filter(([,r])=>r).map(([r,s])=>`<span class="tag">${wn[r].i}${s}</span>`).join("")}</div>
  ${t.project?`<div class="cd">🔨 ${wn[t.project.k].n}: ${t.project.left} дн.</div>`:""}
  ${t.upgrade?`<div class="cd">🏗️ → ${jt[t.upgrade.to].n}: ${t.upgrade.left} дн.</div>`:""}
  <button class="btn sm" data-go="${t.id}">Войти</button></div>`}),H.sites.length&&(e+='<div class="lbl">Пустые места — можно основать деревню (420🪙 + 44🪵 + 26🪨 из столицы)</div>',H.sites.forEach(t=>e+=`<div class="card"><div class="ct"><span>📍 ${t.n}</span></div>
   <div class="cd">Люди готовы идти сюда, если вы дадите брус и камень.</div>
   <button class="btn sm" data-f="${t.id}" ${H.player.gold<420?"disabled":""}>Основать деревню</button></div>`)),e+='<div class="lbl">Прочие державы</div>',Object.keys(nt).filter(t=>t!=="you").forEach(t=>{const r=Object.values(H.settlements).filter(a=>a.lord===t),s=H.armies.find(a=>a.lord===t);e+=`<div class="card"><div class="ct"><span style="color:${nt[t].c}">${nt[t].crest} ${nt[t].full}</span><span style="font-size:11px">${r.length} владений</span></div>
  <div class="cd">Войско в поле: ${s?s.size:0} чел. · ${r.map(a=>a.n).join(", ")||"изгнан"}</div></div>`}),ae("rlBody").innerHTML=e,ae("ovRealm").classList.remove("hide"),ae("rlBody").querySelectorAll("[data-go]").forEach(t=>t.onclick=()=>{Oi(),zs(t.dataset.go)}),ae("rlBody").querySelectorAll("[data-f]").forEach(t=>t.onclick=()=>{const r=Nc(H,t.dataset.f,H.player.gold);r?vt(r):(H.player.gold-=420,at("build"),Bs("🏘️ Новое поселение основано!")),il()})}const on=ae("mapC"),q=on.getContext("2d");function i_(){const n=on.parentElement.getBoundingClientRect();on.width=n.width*devicePixelRatio,on.height=n.height*devicePixelRatio,q.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0)}const Fr=()=>on.width/devicePixelRatio,Or=()=>on.height/devicePixelRatio;function Bi(){return Math.min(Fr(),Or())}function Od(){return Ot*Bi()}function Bd(){const n=Od();return Math.max(0,(Fr()-n)/2)}function zd(){const n=Od();return Math.max(0,(Or()-n)/2)}function Kt(n,e){const t=Bi();return{x:(n-Ft.x)*Ot*t+Bd(),y:(e-Ft.y)*Ot*t+zd()}}function yo(n,e){const t=Bi();return{x:(n-Bd())/(Ot*t)+Ft.x,y:(e-zd())/(Ot*t)+Ft.y}}function rl(){const n=Bi(),e=Ot*n,t=Ot*n;if(e>=Fr()){const r=Fr()/(2*Ot*n);Ft.x=In(Ft.x,r-.5,.5-r)}else Ft.x=0;if(t>=Or()){const r=Or()/(2*Ot*n);Ft.y=In(Ft.y,r-.5,.5-r)}else Ft.y=0}function r_(){Ft.x=H.player.x,Ft.y=H.player.y,rl()}function Vn(){i_();const n=Fr(),e=Or();Bi(),ur&&r_(),q.save(),q.fillStyle="#1a1610",q.fillRect(0,0,n,e);const t=[Kt(0,0),Kt(1,0),Kt(1,1),Kt(0,1)],r=q.createLinearGradient(t[0].x,t[0].y,t[2].x,t[2].y);r.addColorStop(0,"#d8c9a4"),r.addColorStop(.55,"#c9b894"),r.addColorStop(1,"#bcab88"),q.fillStyle=r,q.beginPath(),q.moveTo(t[0].x,t[0].y);for(let o=1;o<4;o++)q.lineTo(t[o].x,t[o].y);q.closePath(),q.fill(),q.save(),q.beginPath(),q.moveTo(t[0].x,t[0].y);for(let o=1;o<4;o++)q.lineTo(t[o].x,t[o].y);q.closePath(),q.clip(),q.globalAlpha=.04;for(let o=0;o<260;o++){const l=Kt(o*137%100/100,o*97%100/100);q.fillStyle=o%2?"#6b5636":"#8a7a5e",q.fillRect(l.x,l.y,2,2)}q.globalAlpha=1,q.strokeStyle="rgba(90,70,45,.35)",q.lineWidth=2.5,Zd.forEach(([o,l])=>{const c=H.settlements[o],d=H.settlements[l];if(!c||!d)return;const u=Kt(c.x,c.y),f=Kt(d.x,d.y);q.setLineDash([7,4]),q.beginPath(),q.moveTo(u.x,u.y),q.lineTo(f.x,f.y),q.stroke()}),q.setLineDash([]),q.strokeStyle="rgba(90,70,45,.18)",q.lineWidth=1.5,q.setLineDash([2,6]),Object.values(H.settlements).forEach(o=>{const l=Object.values(H.settlements).filter(c=>c!==o).sort((c,d)=>Math.hypot(c.x-o.x,c.y-o.y)-Math.hypot(d.x-o.x,d.y-o.y))[0];if(l){const c=Kt(o.x,o.y),d=Kt(l.x,l.y);q.beginPath(),q.moveTo(c.x,c.y),q.lineTo(d.x,d.y),q.stroke()}}),q.setLineDash([]),H.sites.forEach(o=>{const l=Kt(o.x,o.y);q.strokeStyle="#7a6444",q.lineWidth=2,q.setLineDash([3,3]),q.beginPath(),q.arc(l.x,l.y,13,0,7),q.stroke(),q.setLineDash([]),q.font="13px serif",q.textAlign="center",q.textBaseline="middle",q.fillStyle="#5a4830",q.fillText("📍",l.x,l.y),q.font="10px PT Sans",q.fillText(o.n,l.x,l.y+22)}),Object.values(H.settlements).forEach(o=>{const l=Kt(o.x,o.y),c=nt[o.lord]||nt.you,d=o.kind==="village"?15:o.kind==="town"?20:22;q.globalAlpha=.15,q.fillStyle=c.c,q.beginPath(),q.arc(l.x,l.y,d+16,0,7),q.fill(),q.globalAlpha=1,q.fillStyle="#241c14",q.beginPath(),q.arc(l.x,l.y,d+3,0,7),q.fill(),q.fillStyle=c.c,q.beginPath(),q.arc(l.x,l.y,d,0,7),q.fill(),wt===o.id&&(q.strokeStyle="#fff3d0",q.lineWidth=3,q.beginPath(),q.arc(l.x,l.y,d+7,0,7),q.stroke()),q.font=`${d}px serif`,q.textAlign="center",q.textBaseline="middle",q.fillText(jt[o.kind].i,l.x,l.y+1),q.font="bold 12px Alegreya,serif",q.fillStyle="#241c14",q.fillText(o.n,l.x,l.y+d+14),q.font="10px PT Sans",q.fillStyle="#5a4830",q.fillText(`${Math.round(o.pop)}👥 ${o.gar}🛡️`,l.x,l.y+d+26),(o.project||o.upgrade)&&(q.fillStyle="#6f9450",q.fillRect(l.x-16,l.y+d+30,32,4))}),H.armies.forEach(o=>{const l=Kt(o.x,o.y),c=o.kind==="bandit"?"#6b5a4a":nt[o.lord].c;if(o.tx!=null){const d=Kt(o.tx,o.ty);q.strokeStyle=c,q.globalAlpha=.4,q.lineWidth=1.5,q.setLineDash([3,3]),q.beginPath(),q.moveTo(l.x,l.y),q.lineTo(d.x,d.y),q.stroke(),q.setLineDash([]),q.globalAlpha=1}q.fillStyle="#241c14",q.beginPath(),q.arc(l.x,l.y,11,0,7),q.fill(),q.fillStyle=c,q.beginPath(),q.arc(l.x,l.y,8.5,0,7),q.fill(),q.font="10px serif",q.fillStyle="#241c14",q.fillText(o.kind==="bandit"?"🗡️":"⚔️",l.x,l.y+1),q.font="bold 9px PT Sans",q.fillText(o.size,l.x,l.y+18)});const s=H.player,a=Kt(s.x,s.y);if(s.tx!=null){const o=Kt(s.tx,s.ty);q.strokeStyle="#c9a227",q.lineWidth=2,q.setLineDash([5,4]),q.beginPath(),q.moveTo(a.x,a.y),q.lineTo(o.x,o.y),q.stroke(),q.setLineDash([])}q.fillStyle="#241c14",q.beginPath(),q.arc(a.x,a.y,13,0,7),q.fill(),q.fillStyle="#c9a227",q.beginPath(),q.arc(a.x,a.y,10,0,7),q.fill(),q.font="13px serif",q.fillStyle="#241c14",q.fillText("🦅",a.x,a.y+1),q.restore(),q.restore(),q.font="italic 11px Alegreya,serif",q.fillStyle="rgba(90,70,45,.65)",q.textAlign="left",q.fillText(`День ${H.day} · ${ya(H.day).i} ${ya(H.day).n} · отряд ${Xn(H)} · zoom ${Ot.toFixed(1)}×`,12,e-12),q.textAlign="right",q.fillText("Колесо — зум · ПКМ тащить · ЛКМ — идти/выбрать",n-12,e-12),q.textAlign="left"}function xi(){var d;let n='<div class="speed" id="spd"><button data-s="0">❚❚</button><button data-s="1">▶</button><button data-s="2">▶▶</button><button data-s="4">▶▶▶</button></div>';if(n+=`<div class="card"><div class="ct">🦅 Ваш отряд</div><div class="cd">${Xn(H)} бойцов · сила ${Math.round(Ml(H))} · дух ${Math.round(H.player.morale)}</div>
 <div class="cd">🪙${H.player.gold} · 🌾${Math.round(H.player.food)} · 🏵️${H.player.renown}</div></div>`,n+=`<div class="card"><div class="ct">💾 Сохранение</div>
 <div class="cb"><button class="btn sm" id="mSave">Сохранить</button><button class="btn sm" id="mLoad">Загрузить</button></div></div>`,n+=`<div class="card"><div class="ct">🗺️ Навигация</div>
 <div class="cb"><button class="btn sm" id="mCenter">🦅 К отряду</button><button class="btn sm" id="mReset">Сброс зума</button></div></div>`,wt&&H.settlements[wt]){const u=H.settlements[wt],f=u.lord==="you";n+=`<div class="card"><div class="ct"><span>${jt[u.kind].i} ${u.n}</span></div>
  <div class="cd">${jt[u.kind].n} · ${((d=nt[u.lord])==null?void 0:d.full)||"—"}</div>
  <div class="row"><span>Люд</span><b>${Math.round(u.pop)}</b></div>
  <div class="row"><span>Достаток</span><b>${Math.round(u.pros)}</b></div>
  <div class="row"><span>Гарнизон</span><b>${u.gar}</b></div>
  <div class="row"><span>Оборона</span><b>${Br(u)}</b></div>
  <button class="btn gold" id="mEnter">${f?"Войти":"Войти (чужое)"}</button>
  ${f?"":`<button class="btn red" id="mSiege">⚔️ Осадить (сила ${Math.round(Ml(H))})</button>`}</div>`}else if(wt&&wt.army){const u=wt.army;n+=`<div class="card"><div class="ct">${u.kind==="bandit"?"🗡️ Разбойники":nt[u.lord].full}</div>
  <div class="cd">${u.size} человек · сила ${bo(u)} · дух ${Math.round(u.mor)}</div>
  <button class="btn red" id="mFight">⚔️ Атаковать</button></div>`}else if(wt&&wt.site){const u=wt.site;n+=`<div class="card"><div class="ct">📍 ${u.n}</div><div class="cd">Пустое место. Можно основать деревню.</div>
  <button class="btn gold" id="mFound">Основать (420🪙 + 44🪵 + 26🪨)</button></div>`}n+=`<div class="lbl">Хроника</div><div id="log">${H.log.slice(0,22).map(u=>`<div style="color:${u.c}"><span>д.${u.d}</span>${u.t}</div>`).join("")}</div>`,ae("mapSide").innerHTML=n,ae("spd").querySelectorAll("button").forEach(u=>{u.classList.toggle("on",+u.dataset.s===H.speed),u.onclick=()=>{H.speed=+u.dataset.s,at("ui"),xi()}});const e=ae("mSave");e&&(e.onclick=()=>{wo(H)?(vt("Игра сохранена"),at("coin")):vt("Ошибка сохранения")});const t=ae("mLoad");t&&(t.onclick=()=>{const u=hu();u?(H=mu(u),vt("Игра загружена"),at("ui"),Vn(),xi()):vt("Нет сохранения")});const r=ae("mEnter");r&&(r.onclick=()=>{const u=H.settlements[wt];if(Math.hypot(u.x-H.player.x,u.y-H.player.y)>.09){H.player.tx=u.x,H.player.ty=u.y,vt("Идём к "+u.n),xi();return}zs(u.id)});const s=ae("mSiege");s&&(s.onclick=()=>{const u=H.settlements[wt];s_(u)});const a=ae("mFight");a&&(a.onclick=()=>Gd(wt.army));const o=ae("mFound");o&&(o.onclick=()=>{const u=Nc(H,wt.site.id,H.player.gold);u?vt(u):(H.player.gold-=420,at("build"),wt=null),Vn(),xi()});const l=ae("mCenter");l&&(l.onclick=()=>{ur=!0,at("ui"),Vn()});const c=ae("mReset");c&&(c.onclick=()=>{Ot=1,ur=!0,at("ui"),Vn()})}on.addEventListener("wheel",n=>{n.preventDefault();const e=n.deltaY<0?1.15:.87;Bi();const t=on.getBoundingClientRect(),r=n.clientX-t.left,s=n.clientY-t.top,a=yo(r,s);Ot=In(Ot*e,.6,6),ur=!1;const o=yo(r,s);Ft.x+=a.x-o.x,Ft.y+=a.y-o.y,rl(),Vn()},{passive:!1});on.addEventListener("contextmenu",n=>n.preventDefault());on.addEventListener("pointerdown",n=>{n.button===2&&(el=!0,ur=!1,ji={x:n.clientX,y:n.clientY,px:Ft.x,py:Ft.y})});addEventListener("pointerup",()=>{el=!1});on.addEventListener("pointermove",n=>{if(el&&ji){on.getBoundingClientRect();const e=Bi();Ft.x=ji.px-(n.clientX-ji.x)/(Ot*e),Ft.y=ji.py-(n.clientY-ji.y)/(Ot*e),rl(),Vn()}});on.onclick=n=>{if(n.button!==0)return;const e=on.getBoundingClientRect(),t=n.clientX-e.left,r=n.clientY-e.top,s=yo(t,r),a=s.x,o=s.y;let l=null,c=1e9;Object.values(H.settlements).forEach(d=>{const u=Math.hypot(d.x-a,d.y-o);u<.045/Ot&&u<c&&(c=u,l=d.id)}),H.armies.forEach(d=>{const u=Math.hypot(d.x-a,d.y-o);u<.035/Ot&&u<c&&(c=u,l={army:d})}),H.sites.forEach(d=>{const u=Math.hypot(d.x-a,d.y-o);u<.035/Ot&&u<c&&(c=u,l={site:d})}),l?(wt=l,at("ui")):(H.player.tx=In(a,.03,.97),H.player.ty=In(o,.03,.97),wt=null),Vn(),xi()};function kd(n,e){const t={};let r=n;if(e){const s=["levy","spearman","archer","serjeant","scout","rider","knight"],a=[3,3,2,2,1,1,.5];for(;r>0;){const o=Math.random();let l=0,c="levy";for(let d=0;d<s.length;d++)if(l+=a[d]/a.reduce((u,f)=>u+f,0),o<l){c=s[d];break}t[c]=(t[c]||0)+1,r--}}else{const s=["brigand","brigand","raider","bandit_archer","bandit_rider"];for(;r>0;){const a=s[Math.floor(Math.random()*s.length)];t[a]=(t[a]||0)+1,r--}}return t}function Gd(n){Bn=n,xt="battle",Oi();const e={...H.player.troops};Object.keys(e).length||(e.levy=1);const t=kd(In(n.size,3,26),n.kind!=="bandit");Dd(H.player.morale),ae("bHud").classList.add("on"),ae("bOrd").textContent="В атаку";const r=ae("bForm");r&&(r.textContent=Eo[Is].n),ae("place").querySelector(".n").textContent="Сеча в поле",ae("place").querySelector(".s").textContent=(n.kind==="bandit"?"Разбойники":nt[n.lord].n)+" · "+n.size+" чел.",Pd(e,t,n.kind==="bandit",H.player.hp),at("horn")}function s_(n){Bn={siege:n,id:-1,kind:"lord",lord:n.lord,size:n.gar,mor:80},xt="battle",Oi();const e={...H.player.troops};Object.keys(e).length||(e.levy=1);const t=kd(In(n.gar,4,26),!0);Dd(H.player.morale),ae("bHud").classList.add("on"),ae("place").querySelector(".n").textContent="Осада "+n.n,ae("place").querySelector(".s").textContent="Гарнизон "+n.gar+" · оборона "+Br(n),Pd(e,t,!1,H.player.hp),at("horn")}function a_(n,e){ae("bHud").classList.remove("on");const t=ae("bmsg");t.querySelector(".m1").textContent=n?"Поле за вами":"Отряд отступил",t.querySelector(".m1").style.color=n?"#c9a227":"#e07a68",t.querySelector(".m2").textContent=n?"Неприятель бежал, добыча ваша":"Вы выжили, но войско поредело",t.classList.add("on"),setTimeout(()=>{var r;if(t.classList.remove("on"),H.player.hp=In(X0(),20,100),Bn&&Bn.siege){const s=Bn.siege;for(const a in e)H.player.troops[a]=Math.max(0,(H.player.troops[a]||0)-e[a]);if(Object.keys(H.player.troops).forEach(a=>{H.player.troops[a]||delete H.player.troops[a]}),n){const a=s.lord;s.lord="you",s.gar=Math.max(2,Math.round(Xn(H)*.3)),s.unrest=.5,H.player.renown+=14,H.player.gold+=200,gt(H,`🏴 ${s.n} взят! ${((r=nt[a])==null?void 0:r.n)||"—"} изгнан`,"#c9a227")}else H.player.morale=In(H.player.morale-12,0,100),gt(H,`🛡️ Осада ${s.n} отбита`,"#e07a68");Bn=null,zs(n?s.id:"keep")}else Bn&&(du(H,Bn,n,e),Bn=null,xt="map",ae("ovMap").classList.remove("hide"),wt=null,Vn(),xi());Hd()},2e3)}function Hd(){const n=H.player,e=Q0();if(ae("hpF").style.width=In(e.hp/e.max*100,0,100)+"%",ae("hpT").textContent=Math.max(0,Math.round(e.hp)),ae("morF").style.width=n.morale+"%",ae("morT").textContent=Math.round(n.morale),ae("hGold").textContent=n.gold,ae("hParty").textContent=Xn(H),ae("hFood").textContent=Math.round(n.food),ae("hRen").textContent=n.renown,ae("hDay").textContent=H.day,xt==="battle"){const t=Id();ae("bAl").textContent=t.ally+" + вы",ae("bEn").textContent=t.enemy}}ae("bMap").onclick=()=>{xt!=="battle"&&(ae("ovMap").classList.contains("hide")?tl():(Oi(),xt="scene"))};ae("bParty").onclick=()=>{xt!=="battle"&&nl()};ae("bRealm").onclick=()=>{xt!=="battle"&&il()};ae("bSnd").onclick=()=>{Tr=!Tr,ae("bSnd").textContent=Tr?"🔇":"",ae("bSnd").classList.toggle("on",!Tr)};ae("bHelp").onclick=()=>ae("ovHelp").classList.remove("hide");var wc;(wc=ae("bSave"))==null||wc.addEventListener("click",()=>{wo(H)?(vt("Игра сохранена"),at("coin")):vt("Ошибка сохранения")});ae("hpClose").onclick=()=>ae("ovHelp").classList.add("hide");ae("dgClose").onclick=()=>ae("ovDialog").classList.add("hide");ae("ptClose").onclick=()=>ae("ovParty").classList.add("hide");ae("rlClose").onclick=()=>ae("ovRealm").classList.add("hide");ae("mpClose").onclick=()=>{Oi(),xt="scene"};addEventListener("keydown",n=>{if(!n.repeat&&(n.code==="KeyM"&&xt!=="battle"&&(ae("ovMap").classList.contains("hide")?tl():(Oi(),xt="scene")),n.code==="KeyP"&&xt!=="battle"&&nl(),n.code==="KeyR"&&xt!=="battle"&&il(),n.code==="KeyH"&&ae("ovHelp").classList.remove("hide"),n.code==="KeyF5"&&(n.preventDefault(),wo(H)&&(vt("Игра сохранена"),at("coin"))),n.code==="Escape")){const e=["ovDialog","ovParty","ovRealm","ovMap","ovHelp"].find(t=>!ae(t).classList.contains("hide"));e&&(ae(e).classList.add("hide"),e==="ovMap"&&(xt="scene"))}});addEventListener("blur",()=>{xt==="map"&&(H.speed=0)});let Sa=0;function Vd(n){requestAnimationFrame(Vd);const e=Math.min((n-Ac)/1e3,.05);Ac=n;const t=["ovDialog","ovParty","ovRealm","ovHelp"].some(r=>!ae(r).classList.contains("hide"));if(xt==="map"&&!t){for(Ma+=e*H.speed;Ma>=.06;){Ma-=.06;const r=ou(H,.06);if(r&&r.type==="army"){H.speed=0,Gd(r.army);break}Math.random()<.06&&au(H)}xt==="map"&&(Vn(),Sa+=e,Sa>.3&&(Sa=0,xi()))}if(bc(!t||xt==="battle"?e:0,n/1e3,er[H.player.weapon],tr[H.player.armor].arm),xt==="scene"){const r=Nd();ae("prompt").classList.toggle("on",!!r),r&&(ae("promptT").textContent=r.label)}else ae("prompt").classList.remove("on");Hd()}requestAnimationFrame(Vd);
