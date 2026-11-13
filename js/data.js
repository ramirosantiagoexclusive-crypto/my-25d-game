export const GOODS={grain:{n:'Зерно',i:'🌾',p:8},timber:{n:'Брус',i:'🪵',p:14},stone:{n:'Камень',i:'🪨',p:16},iron:{n:'Железо',i:'⛓️',p:34},cloth:{n:'Сукно',i:'🧵',p:40},tools:{n:'Инструмент',i:'🔨',p:62},wine:{n:'Вино',i:'🍷',p:70}};
export const TROOPS={
 peasant:{n:'Крестьянин',t:1,hp:44,atk:9,arm:2,spd:3.2,wage:1,cost:24,up:'levy',uc:40,col:0x8a6a44,branch:'inf'},
 levy:{n:'Ополченец',t:2,hp:58,atk:13,arm:6,spd:3.2,wage:2,cost:0,up:'spearman',uc:90,col:0x7a8f52,branch:'inf'},
 hunter:{n:'Ловчий',t:2,hp:50,atk:12,arm:4,spd:3.4,wage:2,cost:0,up:'archer',uc:90,ranged:true,col:0x5f8f4a,branch:'arch'},
 spearman:{n:'Копейщик',t:3,hp:76,atk:17,arm:12,spd:3.0,wage:4,cost:0,up:'serjeant',uc:180,col:0x6d7480,branch:'inf'},
 archer:{n:'Лучник',t:3,hp:60,atk:16,arm:7,spd:3.1,wage:4,cost:0,up:'crossbow',uc:180,ranged:true,col:0x4f7f5f,branch:'arch'},
 serjeant:{n:'Сержант',t:4,hp:98,atk:23,arm:20,spd:3.0,wage:7,cost:0,up:'knight',uc:340,col:0x8f96a3,branch:'inf'},
 crossbow:{n:'Арбалетчик',t:4,hp:74,atk:24,arm:12,spd:2.9,wage:7,cost:0,ranged:true,col:0x5a6f7f,branch:'arch'},
 knight:{n:'Рыцарь',t:5,hp:135,atk:32,arm:32,spd:3.3,wage:12,cost:0,col:0xb9bcc4,branch:'cav'},
 scout:{n:'Разведчик',t:2,hp:52,atk:11,arm:5,spd:4.2,wage:3,cost:0,up:'rider',uc:120,col:0x9a7a4a,branch:'cav'},
 rider:{n:'Всадник',t:3,hp:82,atk:18,arm:10,spd:4.0,wage:6,cost:0,up:'knight',uc:280,col:0x8a6a3a,branch:'cav'},
 brigand:{n:'Разбойник',t:2,hp:54,atk:14,arm:5,spd:3.5,wage:0,cost:0,col:0x6b5a4a,branch:'inf'},
 raider:{n:'Головорез',t:3,hp:72,atk:19,arm:10,spd:3.4,wage:0,cost:0,col:0x5a4a3a,branch:'inf'},
 bandit_archer:{n:'Стрелок-разбойник',t:2,hp:48,atk:13,arm:4,spd:3.3,wage:0,cost:0,ranged:true,col:0x5a4a3a,branch:'arch'},
 bandit_rider:{n:'Налётчик',t:3,hp:70,atk:16,arm:8,spd:3.8,wage:0,cost:0,col:0x4a3a2a,branch:'cav'}};
export const BUILD={
 farm:{n:'Поля',i:'🌾',max:4,d:4,c:{gold:120,timber:14},out:{grain:5},dsc:'Кормит округу и растит люд'},
 lumber:{n:'Лесопилка',i:'🪓',max:3,d:4,c:{gold:140,timber:10,stone:4},out:{timber:3},dsc:'Брус для строек'},
 quarry:{n:'Каменоломня',i:'⛏️',max:3,d:5,c:{gold:160,timber:16},out:{stone:3},dsc:'Камень для стен'},
 mine:{n:'Рудник',i:'⚒️',max:2,d:6,c:{gold:220,timber:20,stone:12},out:{iron:2},dsc:'Железо для оружия'},
 workshop:{n:'Мастерская',i:'🔨',max:2,d:6,c:{gold:260,timber:18,stone:10,iron:6},out:{tools:1,cloth:1},dsc:'Инструмент и сукно'},
 market:{n:'Торг',i:'⚖️',max:2,d:5,c:{gold:200,timber:14,stone:8},tax:26,dsc:'Пошлины в казну'},
 tavern:{n:'Корчма',i:'🍺',max:1,d:4,c:{gold:150,timber:16},mor:6,rec:2,dsc:'Наёмники и дух войска'},
 smithy:{n:'Кузня',i:'🔥',max:1,d:5,c:{gold:230,stone:14,iron:8},arm:4,dsc:'Лучшее снаряжение гарнизона'},
 barracks:{n:'Казармы',i:'🛡️',max:3,d:6,c:{gold:280,timber:22,stone:16,iron:6},gar:3,rec:3,dsc:'Гарнизон и выучка'},
 stables:{n:'Конюшня',i:'🐎',max:2,d:6,c:{gold:320,timber:24,stone:10,iron:4},rec:2,cav:1,dsc:'Разводит коней для кавалерии'},
 church:{n:'Часовня',i:'⛪',max:1,d:6,c:{gold:240,timber:12,stone:26},pros:.4,mor:5,dsc:'Покой и рост округи'},
 walls:{n:'Стены',i:'🧱',max:3,d:8,c:{gold:340,stone:34,timber:14},def:22,dsc:'Крепость при осаде'},
 tower:{n:'Башни',i:'🗼',max:3,d:7,c:{gold:300,stone:28,iron:6},def:16,dsc:'Стрелки на стенах'},
 keep:{n:'Донжон',i:'🏯',max:1,d:12,c:{gold:620,stone:52,tools:10},def:40,pros:.6,dsc:'Сердце замка'}};
export const KIND={village:{n:'Деревня',i:'🏘️',slots:7,up:'town',uc:{gold:900,timber:70,stone:45,tools:8},ud:14},
 town:{n:'Город',i:'🏙️',slots:12,up:'castle',uc:{gold:1900,stone:110,timber:60,tools:22},ud:22},
 castle:{n:'Замок',i:'🏰',slots:11,up:null}};
export const LORDS={
 you:{n:'Вы',full:'Род Вороньего Камня',c:'#c9a227',crest:'🦅',aggr:.9,greed:1,skill:1},
 olgerd:{n:'Ольгерд',full:'Граф Ольгерд Дубравский',c:'#5f8f4a',crest:'🌳',aggr:1.05,greed:1,skill:1.05},
 radmila:{n:'Радмила',full:'Баронесса Радмила Глинищская',c:'#8fa8c4',crest:'🏺',aggr:.6,greed:1.2,skill:.95},
 bran:{n:'Бран',full:'Воевода Бран Рудный',c:'#a8382a',crest:'⚔️',aggr:1.5,greed:.85,skill:1.15},
 clement:{n:'Клемент',full:'Аббат Клемент Заречский',c:'#b9a37a',crest:'⛪',aggr:.45,greed:1,skill:.9},
 guido:{n:'Гвидо',full:'Купец Гвидо Бродский',c:'#c98f2a',crest:'⚖️',aggr:.85,greed:1.5,skill:1},
 dragan:{n:'Драган',full:'Бойл Драган Степной',c:'#7a9a5a',crest:'🐎',aggr:1.3,greed:.9,skill:1.1},
 mila:{n:'Мила',full:'Воевода Мила Речная',c:'#6a8fa8',crest:'🌊',aggr:.7,greed:1.1,skill:1.0},
 svein:{n:'Свейн',full:'Ярл Свейн Морской',c:'#5a7a8a',crest:'⚓',aggr:1.4,greed:.8,skill:1.2},
 rodrik:{n:'Родрик',full:'Барон Родрик Каменский',c:'#9a6a4a',crest:'⛰️',aggr:.8,greed:1.3,skill:.95}};
export const SETTLEMENTS=[
 {id:'keep',n:'Вороний Камень',kind:'castle',lord:'you',x:.5,y:.52,pop:340,pros:52,gar:14,b:{farm:2,lumber:1,quarry:1,barracks:1,walls:1,tower:1,keep:1}},
 {id:'lipy',n:'Липовка',kind:'village',lord:'you',x:.36,y:.66,pop:150,pros:40,gar:4,b:{farm:2,lumber:1}},
 {id:'dubrava',n:'Дубравы',kind:'town',lord:'olgerd',x:.2,y:.26,pop:520,pros:56,gar:20,b:{farm:2,lumber:2,market:1,workshop:1,walls:1,barracks:1}},
 {id:'sosnovka',n:'Сосновка',kind:'village',lord:'olgerd',x:.28,y:.14,pop:130,pros:36,gar:3,b:{farm:1,lumber:2}},
 {id:'glinishi',n:'Глинищи',kind:'town',lord:'radmila',x:.8,y:.28,pop:560,pros:60,gar:18,b:{farm:2,quarry:2,market:1,church:1,walls:1}},
 {id:'krutye',n:'Крутые Глины',kind:'village',lord:'radmila',x:.72,y:.16,pop:140,pros:38,gar:3,b:{farm:1,quarry:2}},
 {id:'rudnye',n:'Рудные Холмы',kind:'castle',lord:'bran',x:.85,y:.7,pop:280,pros:44,gar:26,b:{mine:2,quarry:1,barracks:2,walls:2,tower:1,keep:1}},
 {id:'zhelezny',n:'Железный Ручей',kind:'village',lord:'bran',x:.9,y:.82,pop:120,pros:35,gar:3,b:{mine:1,farm:1}},
 {id:'zarechye',n:'Заречье',kind:'town',lord:'clement',x:.48,y:.88,pop:600,pros:64,gar:14,b:{farm:3,church:1,market:1,tavern:1,walls:1}},
 {id:'tishina',n:'Тихая Заимка',kind:'village',lord:'clement',x:.42,y:.94,pop:110,pros:38,gar:2,b:{farm:2}},
 {id:'brod',n:'Каменный Брод',kind:'town',lord:'guido',x:.14,y:.7,pop:480,pros:58,gar:16,b:{farm:1,market:2,workshop:1,tavern:1,walls:1}},
 {id:'vereya',n:'Верея',kind:'village',lord:'guido',x:.06,y:.6,pop:100,pros:42,gar:2,b:{market:1,farm:1}},
 {id:'stepnoy',n:'Степной Острог',kind:'town',lord:'dragan',x:.62,y:.18,pop:440,pros:50,gar:18,b:{farm:2,stables:1,barracks:1,market:1,walls:1}},
 {id:'kurgan',n:'Курган',kind:'village',lord:'dragan',x:.7,y:.1,pop:120,pros:34,gar:3,b:{farm:1,stables:1}},
 {id:'rechnoy',n:'Речной Причал',kind:'town',lord:'mila',x:.34,y:.4,pop:460,pros:55,gar:16,b:{farm:2,market:1,tavern:1,walls:1,workshop:1}},
 {id:'ostrov',n:'Островок',kind:'village',lord:'mila',x:.28,y:.36,pop:110,pros:40,gar:3,b:{farm:1,lumber:1}},
 {id:'morskoy',n:'Морской Яр',kind:'castle',lord:'svein',x:.06,y:.16,pop:300,pros:48,gar:24,b:{farm:1,market:1,barracks:2,walls:2,tower:1,keep:1,stables:1}},
 {id:'fjord',n:'Фьорд',kind:'village',lord:'svein',x:.1,y:.06,pop:100,pros:32,gar:3,b:{farm:1,lumber:1}},
 {id:'kamenny',n:'Каменный Утёс',kind:'castle',lord:'rodrik',x:.92,y:.42,pop:310,pros:46,gar:22,b:{quarry:2,mine:1,barracks:2,walls:2,tower:1,keep:1}},
 {id:'utes',n:'Утёс',kind:'village',lord:'rodrik',x:.96,y:.52,pop:110,pros:36,gar:3,b:{quarry:1,farm:1}}];
export const SITES=[
 {id:'site1',n:'Пустой Брод',x:.66,y:.44},
 {id:'site2',n:'Волчий Лог',x:.24,y:.46},
 {id:'site3',n:'Каменная Гряда',x:.68,y:.86},
 {id:'site4',n:'Тихая Роща',x:.4,y:.2},
 {id:'site5',n:'Северный Перевал',x:.58,y:.82}];
export const ROADS=[['keep','lipy'],['keep','dubrava'],['keep','glinishi'],['keep','rudnye'],['keep','zarechye'],['keep','brod'],['keep','rechnoy'],
 ['dubrava','sosnovka'],['glinishi','krutye'],['brod','lipy'],['zarechye','rudnye'],['dubrava','brod'],
 ['stepnoy','dubrava'],['stepnoy','glinishi'],['rechnoy','ostrov'],['morskoy','fjord'],['morskoy','brod'],
 ['kamenny','rudnye'],['kamenny','zhelezny'],['zarechye','tishina'],['brod','vereya'],['stepnoy','kurgan'],
 ['rechnoy','keep'],['zarechye','rechnoy'],['rudnye','zhelezny']];
export const WEAPONS=[
 {n:'Дубина',atk:4,reach:2.1,spd:.46,c:0},
 {n:'Меч',atk:11,reach:2.4,spd:.38,c:180},
 {n:'Боевой топор',atk:17,reach:2.3,spd:.48,c:420},
 {n:'Полуторный меч',atk:24,reach:2.7,spd:.36,c:820},
 {n:'Клеймор лорда',atk:33,reach:2.9,spd:.4,c:1600}];
export const ARMORS=[
 {n:'Рубаха',arm:3,c:0},{n:'Стёганка',arm:9,c:160},{n:'Кольчуга',arm:18,c:460},
 {n:'Бригантина',arm:28,c:980},{n:'Латный доспех',arm:40,c:1900}];
export const SEASONS=[{n:'Весна',i:'🌱',f:1.1},{n:'Лето',i:'☀️',f:1.25},{n:'Осень',i:'🍂',f:1.3},{n:'Зима',i:'❄️',f:.4}];
export const FORMATIONS={
 line:{n:'Линия',i:'─',desc:'Войско в ряд'},
 shieldwall:{n:'Щитовая стена',i:'🛡️',desc:'Плотный строй, медленно'},
 loose:{n:'Рассыпь',i:'╳',desc:'Свободный строй против стрел'},
 square:{n:'Каре',i:'⬜',desc:'Защита от конницы со всех сторон'},
 wedge:{n:'Клин',i:'▲',desc:'Прорыв в центр врага'}};
