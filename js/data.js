export const RES={food:{n:'Провизия',i:'🌾'},wood:{n:'Древесина',i:'🪵'},stone:{n:'Камень',i:'🪨'},iron:{n:'Железо',i:'⛓️'},cloth:{n:'Сукно',i:'🧵'},coin:{n:'Монеты',i:'🪙'}};
export const BUILD={
 homestead:{n:'Дворы',i:'🏠',max:14,w:0,cost:{wood:18},house:6},
 farm:{n:'Поля',i:'🌾',max:12,w:3,cost:{wood:14},out:{food:1.15}},
 lumber:{n:'Лесопилки',i:'🪓',max:9,w:2,cost:{wood:10,stone:4},out:{wood:.95}},
 quarry:{n:'Каменоломни',i:'⛏️',max:9,w:2,cost:{wood:14},out:{stone:.85}},
 mine:{n:'Рудники',i:'⚒️',max:7,w:3,cost:{wood:18,stone:12},out:{iron:.55}},
 workshop:{n:'Мастерские',i:'🧵',max:7,w:2,cost:{wood:22,stone:8,iron:4},out:{cloth:.5}},
 market:{n:'Торг',i:'⚖️',max:5,w:1,cost:{wood:18,stone:8},out:{coin:.75}},
 barracks:{n:'Казармы',i:'🛡️',max:4,w:1,cost:{wood:26,stone:18,iron:8},mil:.16},
 palisade:{n:'Частокол',i:'🧱',max:6,w:0,cost:{wood:32},def:7},
 chapel:{n:'Часовня',i:'⛪',max:2,w:1,cost:{wood:16,stone:26},loy:.07}};
export const POLICY={
 subsist:{n:'Продовольствие',i:'🌾',prio:['farm','homestead','lumber','quarry','market','workshop','mine','chapel','barracks','palisade']},
 craft:{n:'Ремесло',i:'🔨',prio:['lumber','quarry','farm','mine','workshop','market','homestead','barracks','palisade','chapel']},
 war:{n:'Оборона',i:'🛡️',prio:['palisade','barracks','farm','homestead','lumber','quarry','chapel','market','mine','workshop']},
 growth:{n:'Расселение',i:'🏘️',prio:['homestead','farm','lumber','chapel','quarry','market','workshop','mine','barracks','palisade']}};
export const TAX={low:{n:'Щадящая',v:.6,loy:.05},mid:{n:'Обычная',v:1,loy:0},high:{n:'Тяжёлая',v:1.6,loy:-.07}};
export const LORDS={
 player:{n:'Род Вороньего Камня',short:'Вы',trait:'Лорд',color:'#c9a227',crest:'🦅',growth:1,aggr:.8,thrift:1,piety:.5,auto:true},
 olgerd:{n:'Граф Ольгерд',short:'Ольгерд',trait:'Хитрый',color:'#5f8f4a',crest:'🌳',growth:1.05,aggr:1.05,thrift:1,piety:.3,policy:'craft',desc:'Ждёт, пока сосед ослабнет, и бьёт первым.'},
 radmila:{n:'Баронесса Радмила',short:'Радмила',trait:'Расчётливая',color:'#8fa8c4',crest:'🏺',growth:1.15,aggr:.6,thrift:1.2,piety:.4,policy:'growth',desc:'Растит люд и дворы, воюет неохотно.'},
 bran:{n:'Воевода Бран',short:'Бран',trait:'Воинственный',color:'#a8382a',crest:'⚔️',growth:.85,aggr:1.5,thrift:.8,piety:.2,policy:'war',desc:'Держит большое ополчение и ходит в набеги часто.'},
 clement:{n:'Аббат Клемент',short:'Клемент',trait:'Набожный',color:'#b9a37a',crest:'⛪',growth:1.1,aggr:.4,thrift:1,piety:1.4,policy:'subsist',desc:'Часовни и покой; войны избегает.'},
 guido:{n:'Купец Гвидо',short:'Гвидо',trait:'Жадный',color:'#c98f2a',crest:'⚖️',growth:1,aggr:.85,thrift:1.5,piety:.2,policy:'craft',desc:'Копит монету, нанимает ратников вместо ополчения.'},
 hmur:{n:'Атаман Хмур',short:'Хмур',trait:'Разбойник',color:'#6b5a4a',crest:'🗡️',growth:.9,aggr:1.7,thrift:.6,piety:0,policy:'war',desc:'Живёт набегами, деревни не строит.'}};
export const SECTORS={
 keep:{n:'Вороний Камень',lord:'player',x:.5,y:.5,cap:true,biome:'keep',pop:70,rich:{food:1.1,wood:1,stone:1,iron:.8},
  b:{homestead:3,farm:4,lumber:2,quarry:1,mine:0,workshop:1,market:1,barracks:1,palisade:2,chapel:0}},
 dubrava:{n:'Дубравы',lord:'olgerd',x:.22,y:.26,biome:'forest',pop:58,rich:{food:.9,wood:1.5,stone:.7,iron:.6},
  b:{homestead:2,farm:3,lumber:3,quarry:1,mine:0,workshop:0,market:1,barracks:0,palisade:1,chapel:0}},
 glinishi:{n:'Глинищи',lord:'radmila',x:.78,y:.28,biome:'clay',pop:62,rich:{food:1,wood:.9,stone:1.5,iron:.8},
  b:{homestead:3,farm:3,lumber:1,quarry:3,mine:0,workshop:1,market:0,barracks:0,palisade:1,chapel:0}},
 rudnye:{n:'Рудные Холмы',lord:'bran',x:.85,y:.66,biome:'hills',pop:52,rich:{food:.7,wood:.9,stone:1.2,iron:1.7},
  b:{homestead:2,farm:2,lumber:1,quarry:2,mine:2,workshop:0,market:0,barracks:2,palisade:2,chapel:0}},
 zarechye:{n:'Заречье',lord:'clement',x:.5,y:.87,biome:'river',pop:66,rich:{food:1.6,wood:1,stone:.8,iron:.5},
  b:{homestead:3,farm:5,lumber:1,quarry:0,mine:0,workshop:0,market:1,barracks:0,palisade:0,chapel:1}},
 brod:{n:'Каменный Брод',lord:'guido',x:.15,y:.66,biome:'ford',pop:56,rich:{food:1,wood:1.1,stone:1.1,iron:.9},
  b:{homestead:2,farm:3,lumber:2,quarry:1,mine:0,workshop:1,market:2,barracks:1,palisade:1,chapel:0}},
 pustosh:{n:'Пустоши',lord:'hmur',x:.34,y:.13,biome:'waste',pop:44,rich:{food:.6,wood:1,stone:1,iron:1},
  b:{homestead:1,farm:2,lumber:1,quarry:1,mine:1,workshop:0,market:0,barracks:1,palisade:2,chapel:0}}};
export const ROADS=[['keep','dubrava'],['keep','glinishi'],['keep','rudnye'],['keep','zarechye'],['keep','brod'],['dubrava','pustosh'],['dubrava','brod'],['glinishi','rudnye'],['glinishi','pustosh'],['zarechye','brod'],['zarechye','rudnye']];
export const SEASONS=[{n:'Весна',i:'🌱',food:1.1},{n:'Лето',i:'☀️',food:1.25},{n:'Осень',i:'🍂',food:1.35},{n:'Зима',i:'❄️',food:.35}];
export const UNITS={
 levy:{n:'Ополченец',hp:44,atk:9,spd:3.1,rng:1.9,col:0x8a6a44},
 archer:{n:'Лучник',hp:32,atk:8,spd:3,rng:11,ranged:true,col:0x5f8f4a},
 serjeant:{n:'Ратник',hp:78,atk:14,spd:2.9,rng:2,col:0x6d7480},
 knight:{n:'Рыцарь',hp:120,atk:20,spd:3.2,rng:2.1,col:0xb9bcc4},
 brigand:{n:'Разбойник',hp:50,atk:11,spd:3.5,rng:1.9,col:0x6b5a4a}};
