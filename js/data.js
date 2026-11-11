/* =====================================================================
   БАЗА КОНТЕНТА. В будущем онлайн-редактор сможет менять именно эти данные.
   ===================================================================== */
window.GAME_DATA = {
  rarities: {
    common:    { name:'Обычный',      color:'#9fb8a0', order:0 },
    uncommon:  { name:'Необычный',    color:'#7ee081', order:1 },
    rare:      { name:'Редкий',       color:'#6fc3ff', order:2 },
    epic:      { name:'Эпический',    color:'#b48cff', order:3 },
    legendary: { name:'Легендарный',  color:'#ffd166', order:4 },
    mythic:    { name:'Мифический',   color:'#ff5a7a', order:5 }
  },

  items: {
    /* --- Ресурсы --- */
    wood:           { name:'Древесина',        cat:'resource', rarity:'common',    icon:'🪵', value:2,   weight:1,   desc:'Основа почти любого крафта.' },
    stone:          { name:'Камень',           cat:'resource', rarity:'common',    icon:'🪨', value:2,   weight:1.2, desc:'Грубый камень для инструментов.' },
    fiber:          { name:'Волокно',          cat:'resource', rarity:'common',    icon:'🌾', value:1,   weight:0.3, desc:'Растительные волокна для веревок и ткани.' },
    herb:           { name:'Травы',            cat:'resource', rarity:'common',    icon:'🌿', value:3,   weight:0.2, desc:'Лечебные травы долины.' },
    coal:           { name:'Уголь',            cat:'resource', rarity:'uncommon',  icon:'⚫', value:5,   weight:0.8, desc:'Нужен для плавки и факелов.' },
    iron_ore:       { name:'Железная руда',    cat:'resource', rarity:'uncommon',  icon:'🔩', value:8,   weight:1.5, desc:'Добывается киркой в опасных местах.' },
    silver_ore:     { name:'Серебряная руда',  cat:'resource', rarity:'rare',      icon:'🥈', value:18,  weight:1.4, desc:'Редкая руда из топей и пиков.' },
    gold_ore:       { name:'Золотая руда',     cat:'resource', rarity:'epic',      icon:'🥇', value:35,  weight:1.6, desc:'Очень редкая руда Пепельных пиков.' },
    crystal_shard:  { name:'Осколок кристалла',cat:'resource', rarity:'rare',      icon:'💎', value:22,  weight:0.5, desc:'Светящийся осколок. Основа редких рецептов.' },
    shadow_essence: { name:'Эссенция тени',    cat:'resource', rarity:'epic',      icon:'🌑', value:45,  weight:0.2, desc:'Редкий след побеждённой тени. Шанс добычи мал.' },
    swamp_heart:    { name:'Сердце топи',      cat:'resource', rarity:'epic',      icon:'🫀', value:50,  weight:0.6, desc:'Добывается только из существ Гнилых топей.' },
    ember_core:     { name:'Ядро углей',       cat:'resource', rarity:'legendary', icon:'🔥', value:90,  weight:0.7, desc:'Легендарное ядро из Пепельных пиков.' },
    moon_dust:      { name:'Лунная пыль',      cat:'resource', rarity:'mythic',    icon:'🌙', value:160, weight:0.1, desc:'Мифическая пыль Лунных руин. Крайне редкая.' },
    ancient_relic:  { name:'Древняя реликвия', cat:'relic',    rarity:'mythic',    icon:'🏺', value:300, weight:2,   desc:'Реликвия забытой цивилизации. Почти не встречается.' },
    leather:        { name:'Кожа',             cat:'resource', rarity:'uncommon',  icon:'🟫', value:7,   weight:0.6, desc:'Прочная кожа для брони.' },
    bone:           { name:'Кость',            cat:'resource', rarity:'uncommon',  icon:'🦴', value:6,   weight:0.5, desc:'Крепкая кость для амулетов.' },
    feather:        { name:'Перо',             cat:'resource', rarity:'common',    icon:'🪶', value:2,   weight:0.1, desc:'Лёгкое перо.' },
    mushroom:       { name:'Гриб',             cat:'food',     rarity:'common',    icon:'🍄', value:3,   weight:0.3, desc:'Можно съесть или сварить суп.', use:{ stamina:12 } },
    apple:          { name:'Яблоко',           cat:'food',     rarity:'common',    icon:'🍎', value:3,   weight:0.3, desc:'Восстанавливает немного сил.', use:{ stamina:18 } },
    fish:           { name:'Рыба',             cat:'food',     rarity:'common',    icon:'🐟', value:5,   weight:0.6, desc:'Лучше приготовить у костра.', use:{ heal:6, stamina:10 } },

    /* --- Инструменты --- */
    stone_axe:      { name:'Каменный топор',   cat:'tool', slot:'tool', rarity:'common',   icon:'🪓', value:14,  weight:2,   desc:'Рубит деревья эффективнее.', gatherType:'axe',  gatherPower:1 },
    stone_pick:     { name:'Каменная кирка',   cat:'tool', slot:'tool', rarity:'common',   icon:'⛏️', value:16,  weight:2.2, desc:'Позволяет добывать руду.', gatherType:'pick', gatherPower:1 },
    iron_axe:       { name:'Железный топор',   cat:'tool', slot:'tool', rarity:'uncommon', icon:'🪓', value:40,  weight:2.4, desc:'Быстрее рубит и даёт больше древесины.', gatherType:'axe', gatherPower:2 },
    iron_pick:      { name:'Железная кирка',   cat:'tool', slot:'tool', rarity:'uncommon', icon:'⛏️', value:45,  weight:2.6, desc:'Добывает серебряную руду.', gatherType:'pick', gatherPower:2 },
    silver_sickle:  { name:'Серебряный серп',  cat:'tool', slot:'tool', rarity:'rare',     icon:'🌙', value:90,  weight:1.4, desc:'Собирает травы с повышенной удачей.', gatherType:'sickle', gatherPower:2, luck:5 },
    ember_pick:     { name:'Кирка углей',      cat:'tool', slot:'tool', rarity:'legendary',icon:'⛏️', value:260, weight:3,   desc:'Легендарная кирка для высшей руды.', gatherType:'pick', gatherPower:3, luck:10 },

    /* --- Оружие --- */
    wooden_club:    { name:'Деревянная дубина',cat:'weapon', slot:'weapon', rarity:'common',   icon:'🏏', value:12,  weight:2,   desc:'Простое оружие ближнего боя.', atk:3 },
    iron_sword:     { name:'Железный меч',      cat:'weapon', slot:'weapon', rarity:'uncommon', icon:'🗡️', value:55,  weight:2.5, desc:'Надёжный клинок.', atk:7 },
    silver_blade:   { name:'Серебряный клинок', cat:'weapon', slot:'weapon', rarity:'rare',     icon:'⚔️', value:130, weight:2.2, desc:'Эффективен против нежити.', atk:11, luck:3 },
    shadow_dagger:  { name:'Кинжал теней',      cat:'weapon', slot:'weapon', rarity:'epic',     icon:'🔪', value:240, weight:1.2, desc:'Быстрый и смертоносный.', atk:15, speed:0.6 },
    ember_axe:      { name:'Секира углей',      cat:'weapon', slot:'weapon', rarity:'legendary',icon:'🪓', value:420, weight:3.5, desc:'Пышет жаром Пепельных пиков.', atk:20, warmth:25 },
    moon_scepter:   { name:'Лунный скипетр',    cat:'weapon', slot:'weapon', rarity:'mythic',   icon:'🔱', value:800, weight:2,   desc:'Мифическое оружие руин.', atk:26, light:30, luck:5 },

    /* --- Броня --- */
    cloth_vest:     { name:'Тканевый жилет',   cat:'armor', slot:'armor', rarity:'common',   icon:'🧥', value:18,  weight:1.5, desc:'Минимальная защита.', def:2 },
    leather_armor:  { name:'Кожаная броня',    cat:'armor', slot:'armor', rarity:'uncommon', icon:'🦺', value:60,  weight:2.5, desc:'Тёплая и прочная.', def:5, warmth:8 },
    iron_mail:      { name:'Железная кольчуга',cat:'armor', slot:'armor', rarity:'rare',     icon:'🛡️', value:150, weight:4,   desc:'Тяжёлая, но надёжная.', def:8 },
    swamp_cloak:    { name:'Плащ топей',       cat:'armor', slot:'armor', rarity:'epic',     icon:'🧥', value:280, weight:2,   desc:'Защищает от яда.', def:10, poisonResist:45 },
    ember_plate:    { name:'Латы углей',       cat:'armor', slot:'armor', rarity:'legendary',icon:'🛡️', value:520, weight:5,   desc:'Согревает в ледяных ветрах.', def:14, coldResist:55, warmth:20 },
    moon_veil:      { name:'Лунная вуаль',     cat:'armor', slot:'armor', rarity:'mythic',   icon:'🥻', value:900, weight:1,   desc:'Мифическая защита руин.', def:18, luck:8, light:15 },

    /* --- Амулеты --- */
    lucky_pebble:   { name:'Счастливый камешек',cat:'charm', slot:'charm', rarity:'uncommon', icon:'🍀', value:35,  weight:0.2, desc:'Немного повышает удачу.', luck:4 },
    wolf_fang:      { name:'Клык волка',        cat:'charm', slot:'charm', rarity:'rare',     icon:'🦷', value:80,  weight:0.3, desc:'Даёт силу и удачу.', atk:3, luck:3 },
    firefly_charm:  { name:'Амулет светлячка',  cat:'charm', slot:'charm', rarity:'rare',     icon:'✨', value:110, weight:0.2, desc:'Свет и выносливость.', light:12, maxStamina:12 },
    swamp_talisman: { name:'Талисман топей',    cat:'charm', slot:'charm', rarity:'epic',     icon:'🧿', value:200, weight:0.4, desc:'Сильная защита от яда.', poisonResist:35, def:2 },
    ember_sigil:    { name:'Печать углей',      cat:'charm', slot:'charm', rarity:'legendary',icon:'🔥', value:380, weight:0.3, desc:'Жар и мощь.', atk:6, warmth:30 },
    moon_orb:       { name:'Лунная сфера',      cat:'charm', slot:'charm', rarity:'mythic',   icon:'🔮', value:700, weight:0.5, desc:'Мифическая удача и свет.', luck:15, light:25 },

    /* --- Свет --- */
    torch:          { name:'Факел',            cat:'light', slot:'light', rarity:'common',   icon:'🔥', value:15,  weight:1,   desc:'Освещает путь ночью.', light:18 },
    lantern:        { name:'Фонарь',           cat:'light', slot:'light', rarity:'uncommon', icon:'🏮', value:50,  weight:1.5, desc:'Яркий и надёжный.', light:28 },
    firefly_lantern:{ name:'Фонарь светлячков',cat:'light', slot:'light', rarity:'rare',     icon:'🏮', value:140, weight:1.2, desc:'Живой свет долины.', light:38, maxStamina:8 },
    ember_lantern:  { name:'Фонарь углей',     cat:'light', slot:'light', rarity:'legendary',icon:'🏮', value:350, weight:1.8, desc:'Согревает и освещает.', light:50, warmth:25 },

    /* --- Еда и зелья --- */
    bread:          { name:'Хлеб',             cat:'food',   rarity:'common',   icon:'🍞', value:8,   weight:0.4, desc:'Восстанавливает силы.', use:{ heal:8,  stamina:25 } },
    cooked_fish:    { name:'Жареная рыба',     cat:'food',   rarity:'uncommon', icon:'🍣', value:18,  weight:0.5, desc:'Сытная еда.', use:{ heal:22, stamina:35 } },
    mushroom_soup:  { name:'Грибной суп',      cat:'food',   rarity:'uncommon', icon:'🍲', value:22,  weight:0.7, desc:'Снимает отравление.', use:{ heal:18, stamina:30, curePoison:true } },
    healing_potion: { name:'Зелье лечения',    cat:'potion', rarity:'rare',     icon:'🧪', value:45,  weight:0.5, desc:'Быстро лечит.', use:{ heal:45 } },
    stamina_potion: { name:'Зелье бодрости',   cat:'potion', rarity:'rare',     icon:'⚗️', value:40,  weight:0.5, desc:'Возвращает силы.', use:{ stamina:70 } },
    antidote:       { name:'Противоядие',      cat:'potion', rarity:'uncommon', icon:'💊', value:30,  weight:0.3, desc:'Снимает яд.', use:{ curePoison:true } },
    warmth_potion:  { name:'Зелье тепла',      cat:'potion', rarity:'rare',     icon:'🔥', value:55,  weight:0.5, desc:'Временно согревает.', use:{ buffWarmth:40 } },

    /* --- Особые --- */
    valley_token:   { name:'Жетон путника',    cat:'quest', rarity:'rare', icon:'🎫', value:0, weight:0.1, desc:'Пропуск из стартовой долины в опасные земли. Не продаётся.' },
    map_fragment:   { name:'Фрагмент карты',   cat:'quest', rarity:'rare', icon:'🗺️', value:0, weight:0.1, desc:'Открывает отметки на большой карте. Не продаётся.' }
  },

  recipes: [
    { out:'stone_axe',      n:1, mats:{ wood:3, stone:2 },                       level:1 },
    { out:'stone_pick',     n:1, mats:{ wood:3, stone:3 },                       level:1 },
    { out:'wooden_club',    n:1, mats:{ wood:4 },                                level:1 },
    { out:'torch',          n:1, mats:{ wood:1, fiber:2, coal:1 },               level:1 },
    { out:'cloth_vest',     n:1, mats:{ fiber:8 },                               level:1 },
    { out:'valley_token',   n:1, mats:{ wood:6, stone:6, fiber:6 },              level:1 },
    { out:'cooked_fish',    n:1, mats:{ fish:1, coal:1 },                        level:1 },
    { out:'mushroom_soup',  n:1, mats:{ mushroom:2, herb:1, coal:1 },            level:1 },
    { out:'antidote',       n:1, mats:{ herb:3, mushroom:1 },                    level:1 },
    { out:'healing_potion', n:1, mats:{ herb:4, mushroom:2, crystal_shard:1 },   level:2 },
    { out:'stamina_potion', n:1, mats:{ herb:3, apple:2, crystal_shard:1 },      level:2 },
    { out:'warmth_potion',  n:1, mats:{ coal:3, herb:2, ember_core:1 },          level:3 },
    { out:'lucky_pebble',   n:1, mats:{ stone:6, crystal_shard:1 },              level:2 },
    { out:'wolf_fang',      n:1, mats:{ bone:4, leather:2, crystal_shard:1 },    level:2 },
    { out:'leather_armor',  n:1, mats:{ leather:5, fiber:4 },                    level:2 },
    { out:'iron_axe',       n:1, mats:{ iron_ore:4, wood:3, coal:2 },            level:2 },
    { out:'iron_pick',      n:1, mats:{ iron_ore:5, wood:3, coal:2 },            level:2 },
    { out:'iron_sword',     n:1, mats:{ iron_ore:5, wood:2, coal:3 },            level:2 },
    { out:'iron_mail',      n:1, mats:{ iron_ore:8, leather:3, coal:4 },         level:3 },
    { out:'lantern',        n:1, mats:{ iron_ore:3, coal:3, crystal_shard:1 },   level:2 },
    { out:'firefly_charm',  n:1, mats:{ crystal_shard:3, fiber:6, herb:3 },      level:2 },
    { out:'firefly_lantern',n:1, mats:{ crystal_shard:4, iron_ore:2, fiber:4 },  level:3 },
    { out:'silver_sickle',  n:1, mats:{ silver_ore:4, wood:2, crystal_shard:2 }, level:3 },
    { out:'silver_blade',   n:1, mats:{ silver_ore:6, crystal_shard:3, coal:3 }, level:3 },
    { out:'shadow_dagger',  n:1, mats:{ shadow_essence:4, silver_ore:3, bone:3 },level:3 },
    { out:'swamp_talisman', n:1, mats:{ swamp_heart:2, bone:3, herb:4 },         level:3 },
    { out:'swamp_cloak',    n:1, mats:{ swamp_heart:3, leather:5, fiber:6 },     level:4 },
    { out:'ember_pick',     n:1, mats:{ ember_core:2, iron_ore:6, crystal_shard:4 }, level:4 },
    { out:'ember_axe',      n:1, mats:{ ember_core:3, iron_ore:8, coal:8 },      level:4 },
    { out:'ember_plate',    n:1, mats:{ ember_core:3, iron_ore:10, leather:5 },  level:4 },
    { out:'ember_sigil',    n:1, mats:{ ember_core:2, gold_ore:3, bone:4 },      level:4 },
    { out:'ember_lantern',  n:1, mats:{ ember_core:2, gold_ore:2, crystal_shard:4 }, level:4 },
    { out:'moon_orb',       n:1, mats:{ moon_dust:2, gold_ore:4, crystal_shard:6 }, level:5 },
    { out:'moon_veil',      n:1, mats:{ moon_dust:3, silver_ore:6, crystal_shard:8 }, level:5 },
    { out:'moon_scepter',   n:1, mats:{ moon_dust:4, ancient_relic:1, gold_ore:5 }, level:6 }
  ],

  merchantStock: ['bread','apple','fish','torch','healing_potion','stamina_potion','antidote','cloth_vest','wooden_club','stone_axe','stone_pick'],

  enemies: {
    shadow_wisp: { name:'Тень', hp:24, atk:5, speed:2.7, xp:22, coins:[1,4], color:0x7a2bd6, size:0.7,
      loot:[{item:'shadow_essence',chance:0.07},{item:'bone',chance:0.25},{item:'fiber',chance:0.3}] },
    wolf:        { name:'Волк', hp:34, atk:7, speed:3.4, xp:30, coins:[2,5], color:0x5a5a66, size:0.9,
      loot:[{item:'leather',chance:0.35},{item:'bone',chance:0.3},{item:'wolf_fang',chance:0.04}] },
    bog_lurker:  { name:'Топяник', hp:46, atk:9, speed:2.4, xp:42, coins:[3,7], color:0x3f7a3a, size:1.0, poison:true,
      loot:[{item:'swamp_heart',chance:0.06},{item:'herb',chance:0.4},{item:'mushroom',chance:0.3}] },
    ash_golem:   { name:'Пепельный голем', hp:70, atk:13, speed:1.9, xp:60, coins:[5,10], color:0x8a4a2a, size:1.3,
      loot:[{item:'ember_core',chance:0.035},{item:'iron_ore',chance:0.5},{item:'coal',chance:0.5}] },
    frost_wraith:{ name:'Ледяной призрак', hp:52, atk:11, speed:3.1, xp:52, coins:[4,8], color:0x6fc3ff, size:0.9,
      loot:[{item:'crystal_shard',chance:0.12},{item:'silver_ore',chance:0.2},{item:'ember_core',chance:0.02}] },
    moon_sentinel:{name:'Лунный страж', hp:95, atk:17, speed:2.6, xp:90, coins:[8,15], color:0xb48cff, size:1.4,
      loot:[{item:'moon_dust',chance:0.025},{item:'ancient_relic',chance:0.006},{item:'gold_ore',chance:0.15},{item:'crystal_shard',chance:0.3}] }
  },

  locations: {
    valley: {
      name:'Долина Светлячков', danger:0, mapX:18, mapY:64, biome:'meadow',
      ground:[0x4c9a55,0x63b168], skyDay:0x9fd3c0, skyNight:0x0d1b33,
      desc:'Безопасный стартовый хаб. Здесь учатся добыче, крафту и торговле.',
      unlock:null,
      features:['workbench','merchant','campfire','tent'],
      nodes:[
        { type:'tree', count:12, tool:'axe', minPower:0, base:{item:'wood',min:1,max:2}, bonus:[{item:'fiber',chance:0.2},{item:'apple',chance:0.08}] },
        { type:'rock', count:9,  tool:'pick', minPower:0, base:{item:'stone',min:1,max:2}, bonus:[{item:'coal',chance:0.1}] },
        { type:'bush', count:12, tool:null, minPower:0, base:{item:'fiber',min:1,max:2}, bonus:[{item:'herb',chance:0.3},{item:'mushroom',chance:0.15},{item:'apple',chance:0.1}] },
        { type:'crystal', count:2, tool:'pick', minPower:2, base:{item:'crystal_shard',min:1,max:1}, bonus:[{item:'crystal_shard',chance:0.15}] }
      ],
      enemies:[], hazard:null
    },
    forest: {
      name:'Тёмный лес', danger:1, mapX:40, mapY:42, biome:'forest',
      ground:[0x2f5a3a,0x3f7048], skyDay:0x5f8f7a, skyNight:0x07140f,
      desc:'Первые опасности. Тени и волки. Источник кожи, костей и эссенции тени.',
      unlock:{ item:'valley_token', level:1 },
      features:[],
      nodes:[
        { type:'tree', count:18, tool:'axe', minPower:0, base:{item:'wood',min:1,max:3}, bonus:[{item:'fiber',chance:0.25},{item:'feather',chance:0.15}] },
        { type:'bush', count:10, tool:null, minPower:0, base:{item:'fiber',min:1,max:2}, bonus:[{item:'herb',chance:0.35},{item:'mushroom',chance:0.2}] },
        { type:'rock', count:6, tool:'pick', minPower:0, base:{item:'stone',min:1,max:2}, bonus:[{item:'coal',chance:0.18}] },
        { type:'ore', count:4, tool:'pick', minPower:1, base:{item:'iron_ore',min:1,max:1}, bonus:[{item:'coal',chance:0.25}] }
      ],
      enemies:[{type:'shadow_wisp',count:5},{type:'wolf',count:3}], hazard:null
    },
    swamp: {
      name:'Гнилые топи', danger:2, mapX:62, mapY:66, biome:'swamp',
      ground:[0x3f5a35,0x556b3a], skyDay:0x6f8f5a, skyNight:0x0a140a,
      desc:'Ядовитые лужи и топяники. Источник сердец топей и серебра.',
      unlock:{ level:2, visited:'forest' },
      features:[],
      nodes:[
        { type:'bush', count:12, tool:null, minPower:0, base:{item:'fiber',min:1,max:2}, bonus:[{item:'herb',chance:0.4},{item:'mushroom',chance:0.3}] },
        { type:'ore', count:6, tool:'pick', minPower:2, base:{item:'silver_ore',min:1,max:1}, bonus:[{item:'swamp_heart',chance:0.03}] },
        { type:'crystal', count:3, tool:'pick', minPower:2, base:{item:'crystal_shard',min:1,max:1}, bonus:[{item:'swamp_heart',chance:0.04}] }
      ],
      enemies:[{type:'bog_lurker',count:6}], hazard:'poison'
    },
    peaks: {
      name:'Пепельные пики', danger:3, mapX:74, mapY:30, biome:'peaks',
      ground:[0x6a5a4a,0x8a6a4a], skyDay:0x9f8f7a, skyNight:0x140a07,
      desc:'Холод и големы. Источник ядер углей и золота. Нужно тепло.',
      unlock:{ level:3, visited:'swamp' },
      features:[],
      nodes:[
        { type:'ore', count:8, tool:'pick', minPower:2, base:{item:'iron_ore',min:1,max:2}, bonus:[{item:'silver_ore',chance:0.12},{item:'gold_ore',chance:0.04}] },
        { type:'rock', count:8, tool:'pick', minPower:0, base:{item:'stone',min:1,max:2}, bonus:[{item:'coal',chance:0.35}] },
        { type:'crystal', count:3, tool:'pick', minPower:3, base:{item:'crystal_shard',min:1,max:1}, bonus:[{item:'gold_ore',chance:0.06}] }
      ],
      enemies:[{type:'ash_golem',count:4},{type:'frost_wraith',count:3}], hazard:'cold'
    },
    ruins: {
      name:'Лунные руины', danger:4, mapX:88, mapY:52, biome:'ruins',
      ground:[0x4a4a5a,0x5a5a6a], skyDay:0x7a7a9f, skyNight:0x070714,
      desc:'Высшая опасность. Лунные стражи, мифические материалы и реликвии.',
      unlock:{ level:5, visited:'peaks' },
      features:[],
      nodes:[
        { type:'crystal', count:6, tool:'pick', minPower:3, base:{item:'crystal_shard',min:1,max:2}, bonus:[{item:'moon_dust',chance:0.02},{item:'gold_ore',chance:0.08}] },
        { type:'ore', count:5, tool:'pick', minPower:3, base:{item:'silver_ore',min:1,max:1}, bonus:[{item:'gold_ore',chance:0.1},{item:'moon_dust',chance:0.015}] },
        { type:'relic', count:1, tool:'pick', minPower:3, base:{item:'ancient_relic',min:1,max:1}, bonus:[] }
      ],
      enemies:[{type:'moon_sentinel',count:5}], hazard:'arcane'
    }
  },

  tutorial: [
    { text:'Соберите 4 древесины и 3 камня у деревьев и камней (клавиша E).', type:'gather', need:{wood:4,stone:3} },
    { text:'Подойдите к верстаку и создайте каменный топор.', type:'have', need:{stone_axe:1} },
    { text:'Откройте рюкзак (I) и экипируйте топор в слот инструмента.', type:'equip', slot:'tool', item:'stone_axe' },
    { text:'Соберите волокно с кустов и продайте 2 волокна торговцу Марку.', type:'sell', need:{fiber:2} },
    { text:'Купите хлеб у торговца, чтобы узнать торговлю.', type:'buy', need:{bread:1} },
    { text:'Создайте Жетон путника на верстаке — это пропуск в опасные земли.', type:'have', need:{valley_token:1} },
    { text:'Откройте большую карту (M) и отправляйтесь в Тёмный лес.', type:'travel', target:'forest' }
  ]
};
