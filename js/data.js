/* =====================================================================
   БАЗА КОНТЕНТА «Долина Светлячков». ~115 предметов, глубокие цепочки крафта.
   В будущем онлайн-редактор сможет менять именно эти данные.
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
    /* ---------- Сырьё ---------- */
    wood:           { name:'Древесина',         cat:'resource', rarity:'common',    icon:'🪵', value:2,   weight:1,    desc:'Основа почти любого крафта.' },
    stone:          { name:'Камень',            cat:'resource', rarity:'common',    icon:'🪨', value:2,   weight:1.2,  desc:'Грубый камень для инструментов.' },
    fiber:          { name:'Волокно',           cat:'resource', rarity:'common',    icon:'🌾', value:1,   weight:0.3,  desc:'Растительные волокна для веревок и ткани.' },
    herb:           { name:'Травы',             cat:'resource', rarity:'common',    icon:'🌿', value:3,   weight:0.2,  desc:'Лечебные травы долины.' },
    berry:          { name:'Ягоды',             cat:'food',     rarity:'common',    icon:'🫐', value:2,   weight:0.2,  desc:'Мелкие лесные ягоды.', use:{ stamina:10 } },
    clay:           { name:'Глина',             cat:'resource', rarity:'common',    icon:'🟤', value:2,   weight:1,    desc:'Для кирпичей и форм.' },
    sand:           { name:'Песок',             cat:'resource', rarity:'common',    icon:'🟡', value:2,   weight:1,    desc:'Нужен для стекла.' },
    flint:          { name:'Кремень',           cat:'resource', rarity:'common',    icon:'🔺', value:3,   weight:0.6,  desc:'Острый скол для розжига.' },
    ash:            { name:'Пепел',             cat:'resource', rarity:'common',    icon:'🌫️', value:2,   weight:0.2,  desc:'Остаток костров Пепельных пиков.' },
    salt:           { name:'Соль',              cat:'resource', rarity:'common',    icon:'🧂', value:3,   weight:0.3,  desc:'Приправа и консервант.' },
    coal:           { name:'Уголь',             cat:'resource', rarity:'uncommon',  icon:'⚫', value:5,   weight:0.8,  desc:'Нужен для плавки и факелов.' },
    resin:          { name:'Смола',             cat:'resource', rarity:'uncommon',  icon:'🟠', value:5,   weight:0.4,  desc:'Липкая смола для клея и факелов.' },
    sulfur:         { name:'Сера',              cat:'resource', rarity:'uncommon',  icon:'🟨', value:6,   weight:0.5,  desc:'Алхимический порошок.' },
    copper_ore:     { name:'Медная руда',       cat:'resource', rarity:'uncommon',  icon:'🟧', value:7,   weight:1.4,  desc:'Первая руда для сплава.' },
    tin_ore:        { name:'Оловянная руда',    cat:'resource', rarity:'uncommon',  icon:'⬜', value:7,   weight:1.3,  desc:'Вторая половина бронзы.' },
    iron_ore:       { name:'Железная руда',     cat:'resource', rarity:'uncommon',  icon:'🔩', value:9,   weight:1.5,  desc:'Добывается киркой в опасных местах.' },
    silver_ore:     { name:'Серебряная руда',   cat:'resource', rarity:'rare',      icon:'🥈', value:18,  weight:1.4,  desc:'Редкая руда из топей и пиков.' },
    gold_ore:       { name:'Золотая руда',      cat:'resource', rarity:'epic',      icon:'🥇', value:35,  weight:1.6,  desc:'Очень редкая руда Пепельных пиков.' },
    crystal_shard:  { name:'Осколок кристалла', cat:'resource', rarity:'rare',      icon:'💎', value:22,  weight:0.5,  desc:'Светящийся осколок. Основа редких рецептов.' },
    pearl:          { name:'Жемчужина',         cat:'resource', rarity:'rare',      icon:'🫧', value:30,  weight:0.2,  desc:'Редкая находка у воды.' },
    spider_silk:    { name:'Паучий шёлк',       cat:'resource', rarity:'rare',      icon:'🕸️', value:26,  weight:0.2,  desc:'Прочнее стали при малом весе.' },
    venom_sac:      { name:'Ядовитый мешок',    cat:'resource', rarity:'rare',      icon:'🧪', value:28,  weight:0.3,  desc:'Из желёз топяных тварей.' },
    wolf_pelt:      { name:'Волчья шкура',      cat:'resource', rarity:'rare',      icon:'🐺', value:32,  weight:1.2,  desc:'Тёплая шкура матерого волка.' },
    shadow_essence: { name:'Эссенция тени',     cat:'resource', rarity:'epic',      icon:'🌑', value:45,  weight:0.2,  desc:'Редкий след побеждённой тени. Шанс добычи мал.' },
    swamp_heart:    { name:'Сердце топи',       cat:'resource', rarity:'epic',      icon:'🫀', value:50,  weight:0.6,  desc:'Добывается только из существ Гнилых топей.' },
    frost_shard:    { name:'Ледяной осколок',   cat:'resource', rarity:'epic',      icon:'🧊', value:48,  weight:0.4,  desc:'Не тает даже у костра.' },
    rune_stone:     { name:'Рунный камень',     cat:'resource', rarity:'epic',      icon:'🪬', value:55,  weight:1,    desc:'Камень с древней печатью.' },
    ember_core:     { name:'Ядро углей',        cat:'resource', rarity:'legendary', icon:'🔥', value:90,  weight:0.7,  desc:'Легендарное ядро из Пепельных пиков.' },
    star_fragment:  { name:'Звёздный фрагмент', cat:'resource', rarity:'mythic',    icon:'🌟', value:150, weight:0.2,  desc:'Осколок упавшей звезды.' },
    moon_dust:      { name:'Лунная пыль',       cat:'resource', rarity:'mythic',    icon:'🌙', value:160, weight:0.1,  desc:'Мифическая пыль Лунных руин. Крайне редкая.' },
    void_shard:     { name:'Осколок пустоты',   cat:'resource', rarity:'mythic',    icon:'🕳️', value:180, weight:0.1,  desc:'Поглощает свет вокруг себя.' },
    ancient_relic:  { name:'Древняя реликвия',  cat:'relic',    rarity:'mythic',    icon:'🏺', value:300, weight:2,    desc:'Реликвия забытой цивилизации. Почти не встречается.' },
    leather:        { name:'Кожа',              cat:'resource', rarity:'uncommon',  icon:'🟫', value:7,   weight:0.6,  desc:'Прочная кожа для брони.' },
    bone:           { name:'Кость',             cat:'resource', rarity:'uncommon',  icon:'🦴', value:6,   weight:0.5,  desc:'Крепкая кость для амулетов.' },
    feather:        { name:'Перо',              cat:'resource', rarity:'common',    icon:'🪶', value:2,   weight:0.1,  desc:'Лёгкое перо.' },
    mushroom:       { name:'Гриб',              cat:'food',     rarity:'common',    icon:'🍄', value:3,   weight:0.3,  desc:'Можно съесть или сварить суп.', use:{ stamina:12 } },
    apple:          { name:'Яблоко',            cat:'food',     rarity:'common',    icon:'🍎', value:3,   weight:0.3,  desc:'Восстанавливает немного сил.', use:{ stamina:18 } },
    fish:           { name:'Рыба',              cat:'food',     rarity:'common',    icon:'🐟', value:5,   weight:0.6,  desc:'Лучше приготовить у костра.', use:{ heal:6, stamina:10 } },
    meat:           { name:'Сырое мясо',        cat:'food',     rarity:'common',    icon:'🥩', value:5,   weight:0.7,  desc:'Готовится у костра.', use:{ heal:3, stamina:8 } },

    /* ---------- Полуфабрикаты ---------- */
    plank:          { name:'Доски',             cat:'material', rarity:'common',    icon:'🟫', value:5,   weight:1.2,  desc:'Обработанная древесина.' },
    rope:           { name:'Верёвка',           cat:'material', rarity:'common',    icon:'🪢', value:5,   weight:0.4,  desc:'Кручёное волокно.' },
    cloth:          { name:'Ткань',             cat:'material', rarity:'common',    icon:'🧵', value:6,   weight:0.4,  desc:'Ткань из волокна.' },
    leather_strip:  { name:'Полоски кожи',      cat:'material', rarity:'common',    icon:'➰', value:5,   weight:0.3,  desc:'Для ремней и рукоятей.' },
    bronze_ingot:   { name:'Бронзовый слиток',  cat:'material', rarity:'uncommon',  icon:'🥉', value:18,  weight:1.5,  desc:'Сплав меди и олова.' },
    iron_ingot:     { name:'Железный слиток',   cat:'material', rarity:'uncommon',  icon:'⬜', value:22,  weight:1.6,  desc:'Переплавленное железо.' },
    glass:          { name:'Стекло',            cat:'material', rarity:'uncommon',  icon:'🔷', value:14,  weight:0.8,  desc:'Плавленый песок.' },
    empty_vial:     { name:'Пустой флакон',     cat:'material', rarity:'common',    icon:'🫙', value:8,   weight:0.2,  desc:'Для зелий.' },
    silver_ingot:   { name:'Серебряный слиток', cat:'material', rarity:'rare',      icon:'🥈', value:45,  weight:1.4,  desc:'Очищенное серебро.' },
    gold_ingot:     { name:'Золотой слиток',    cat:'material', rarity:'epic',      icon:'🥇', value:85,  weight:1.6,  desc:'Благородный металл.' },
    ember_ingot:    { name:'Слиток углей',      cat:'material', rarity:'legendary', icon:'🟥', value:180, weight:1.8,  desc:'Металл, впитавший жар пиков.' },
    moon_ingot:     { name:'Лунный слиток',     cat:'material', rarity:'mythic',    icon:'🌙', value:320, weight:1.2,  desc:'Металл холодного лунного света.' },

    /* ---------- Инструменты ---------- */
    stone_axe:      { name:'Каменный топор',    cat:'tool', slot:'tool', rarity:'common',    icon:'🪓', value:14,  weight:2,   desc:'Рубит деревья эффективнее.', gatherType:'axe',  gatherPower:1 },
    stone_pick:     { name:'Каменная кирка',    cat:'tool', slot:'tool', rarity:'common',    icon:'⛏️', value:16,  weight:2.2, desc:'Позволяет добывать руду.', gatherType:'pick', gatherPower:1 },
    gathering_sickle:{name:'Травяной серп',     cat:'tool', slot:'tool', rarity:'common',    icon:'🌾', value:12,  weight:1,   desc:'Больше трав и ягод с кустов.', gatherType:'sickle', gatherPower:1 },
    copper_axe:     { name:'Медный топор',      cat:'tool', slot:'tool', rarity:'uncommon',  icon:'🪓', value:38,  weight:2.2, desc:'Надёжнее каменного.', gatherType:'axe', gatherPower:2 },
    copper_pick:    { name:'Медная кирка',      cat:'tool', slot:'tool', rarity:'uncommon',  icon:'⛏️', value:40,  weight:2.4, desc:'Добывает серебро.', gatherType:'pick', gatherPower:2 },
    bronze_axe:     { name:'Бронзовый топор',   cat:'tool', slot:'tool', rarity:'uncommon',  icon:'🪓', value:55,  weight:2.4, desc:'Крепкая бронза.', gatherType:'axe', gatherPower:2, luck:2 },
    bronze_pick:    { name:'Бронзовая кирка',   cat:'tool', slot:'tool', rarity:'uncommon',  icon:'⛏️', value:58,  weight:2.6, desc:'Крепкая бронза.', gatherType:'pick', gatherPower:2, luck:2 },
    iron_axe:       { name:'Железный топор',    cat:'tool', slot:'tool', rarity:'uncommon',  icon:'🪓', value:70,  weight:2.6, desc:'Быстрее рубит.', gatherType:'axe', gatherPower:3 },
    iron_pick:      { name:'Железная кирка',    cat:'tool', slot:'tool', rarity:'uncommon',  icon:'⛏️', value:75,  weight:2.8, desc:'Добывает золото.', gatherType:'pick', gatherPower:3 },
    silver_sickle:  { name:'Серебряный серп',   cat:'tool', slot:'tool', rarity:'rare',      icon:'🌙', value:110, weight:1.4, desc:'Собирает травы с повышенной удачей.', gatherType:'sickle', gatherPower:3, luck:6 },
    silver_pick:    { name:'Серебряная кирка',  cat:'tool', slot:'tool', rarity:'rare',      icon:'⛏️', value:130, weight:2.6, desc:'Для тонкой работы.', gatherType:'pick', gatherPower:3, luck:4 },
    gold_pick:      { name:'Золотая кирка',     cat:'tool', slot:'tool', rarity:'epic',      icon:'⛏️', value:240, weight:2.8, desc:'Притягивает удачу.', gatherType:'pick', gatherPower:4, luck:10 },
    master_sickle:  { name:'Серп мастера',      cat:'tool', slot:'tool', rarity:'epic',      icon:'🌾', value:220, weight:1.5, desc:'Лучший инструмент травника.', gatherType:'sickle', gatherPower:4, luck:12 },
    ember_pick:     { name:'Кирка углей',       cat:'tool', slot:'tool', rarity:'legendary', icon:'⛏️', value:420, weight:3,   desc:'Легендарная кирка для высшей руды.', gatherType:'pick', gatherPower:5, luck:14 },
    moon_pick:      { name:'Лунная кирка',      cat:'tool', slot:'tool', rarity:'mythic',    icon:'⛏️', value:760, weight:2.4, desc:'Добывает то, что скрыто от других.', gatherType:'pick', gatherPower:6, luck:20 },

    /* ---------- Оружие ---------- */
    wooden_club:    { name:'Деревянная дубина', cat:'weapon', slot:'weapon', rarity:'common',    icon:'🏏', value:12,  weight:2,   desc:'Простое оружие ближнего боя.', atk:3 },
    spear:          { name:'Копьё',             cat:'weapon', slot:'weapon', rarity:'common',    icon:'🔱', value:20,  weight:2.2, desc:'Длинное и дешёвое.', atk:4, speed:0.2 },
    copper_sword:   { name:'Медный меч',        cat:'weapon', slot:'weapon', rarity:'uncommon',  icon:'🗡️', value:45,  weight:2.3, desc:'Первый настоящий клинок.', atk:6 },
    bronze_sword:   { name:'Бронзовый меч',     cat:'weapon', slot:'weapon', rarity:'uncommon',  icon:'🗡️', value:60,  weight:2.4, desc:'Крепче медного.', atk:8 },
    staff_apprentice:{name:'Посох ученика',     cat:'weapon', slot:'weapon', rarity:'uncommon',  icon:'🪄', value:55,  weight:1.6, desc:'Слабая магия, но дальнобойнее.', atk:7, light:6 },
    war_hammer:     { name:'Боевой молот',      cat:'weapon', slot:'weapon', rarity:'rare',      icon:'🔨', value:120, weight:3.5, desc:'Медленный, но сокрушительный.', atk:13, speed:-0.3 },
    iron_sword:     { name:'Железный меч',      cat:'weapon', slot:'weapon', rarity:'uncommon',  icon:'🗡️', value:80,  weight:2.5, desc:'Надёжный клинок.', atk:10 },
    steel_sword:    { name:'Стальной меч',      cat:'weapon', slot:'weapon', rarity:'rare',      icon:'⚔️', value:160, weight:2.5, desc:'Отличная сталь.', atk:15 },
    silver_blade:   { name:'Серебряный клинок', cat:'weapon', slot:'weapon', rarity:'rare',      icon:'⚔️', value:190, weight:2.2, desc:'Эффективен против нежити.', atk:16, luck:3 },
    staff_fire:     { name:'Посох огня',        cat:'weapon', slot:'weapon', rarity:'rare',      icon:'🪄', value:200, weight:1.8, desc:'Пышет жаром.', atk:17, warmth:15, light:12 },
    gold_blade:     { name:'Золотой клинок',    cat:'weapon', slot:'weapon', rarity:'epic',      icon:'⚔️', value:320, weight:2.4, desc:'Роскошь и сила.', atk:20, luck:6 },
    shadow_dagger:  { name:'Кинжал теней',      cat:'weapon', slot:'weapon', rarity:'epic',      icon:'🔪', value:300, weight:1.2, desc:'Быстрый и смертоносный.', atk:19, speed:0.8 },
    frost_edge:     { name:'Ледяная кромка',    cat:'weapon', slot:'weapon', rarity:'epic',      icon:'🗡️', value:330, weight:2.3, desc:'Обмораживает врагов.', atk:21, coldResist:20 },
    staff_frost:    { name:'Посох стужи',       cat:'weapon', slot:'weapon', rarity:'epic',      icon:'🪄', value:340, weight:1.8, desc:'Власть над холодом.', atk:22, coldResist:30, light:10 },
    ember_axe:      { name:'Секира углей',      cat:'weapon', slot:'weapon', rarity:'legendary', icon:'🪓', value:560, weight:3.5, desc:'Пышет жаром Пепельных пиков.', atk:27, warmth:30 },
    void_blade:     { name:'Клинок пустоты',    cat:'weapon', slot:'weapon', rarity:'mythic',    icon:'🗡️', value:950, weight:2,   desc:'Режет саму реальность.', atk:34, luck:8 },
    moon_scepter:   { name:'Лунный скипетр',    cat:'weapon', slot:'weapon', rarity:'mythic',    icon:'🔱', value:1100,weight:2,   desc:'Мифическое оружие руин.', atk:32, light:35, luck:6 },

    /* ---------- Броня ---------- */
    cloth_vest:     { name:'Тканевый жилет',    cat:'armor', slot:'armor', rarity:'common',    icon:'🧥', value:18,  weight:1.5, desc:'Минимальная защита.', def:2 },
    padded_armor:   { name:'Стёганая броня',    cat:'armor', slot:'armor', rarity:'common',    icon:'🦺', value:30,  weight:2,   desc:'Мягкая, но держит удар.', def:4, maxStamina:5 },
    leather_armor:  { name:'Кожаная броня',     cat:'armor', slot:'armor', rarity:'uncommon',  icon:'🦺', value:70,  weight:2.5, desc:'Тёплая и прочная.', def:6, warmth:8 },
    copper_mail:    { name:'Медная кольчуга',   cat:'armor', slot:'armor', rarity:'uncommon',  icon:'🛡️', value:85,  weight:3.5, desc:'Первая металлическая броня.', def:8 },
    bronze_mail:    { name:'Бронзовая кольчуга',cat:'armor', slot:'armor', rarity:'uncommon',  icon:'🛡️', value:110, weight:3.8, desc:'Крепче медной.', def:10 },
    wolf_cloak:     { name:'Волчий плащ',       cat:'armor', slot:'armor', rarity:'rare',      icon:'🧥', value:170, weight:2,   desc:'Согревает в лесу.', def:9, warmth:18, speed:0.3 },
    iron_mail:      { name:'Железная кольчуга', cat:'armor', slot:'armor', rarity:'rare',      icon:'🛡️', value:200, weight:4,   desc:'Тяжёлая, но надёжная.', def:13 },
    steel_mail:     { name:'Стальная кольчуга', cat:'armor', slot:'armor', rarity:'rare',      icon:'🛡️', value:260, weight:4.2, desc:'Отличная защита.', def:16 },
    spider_silk_robe:{name:'Мантия из шёлка',   cat:'armor', slot:'armor', rarity:'epic',      icon:'🥻', value:380, weight:1.2, desc:'Лёгкая как перо.', def:14, speed:0.7, luck:5 },
    swamp_cloak:    { name:'Плащ топей',        cat:'armor', slot:'armor', rarity:'epic',      icon:'🧥', value:400, weight:2,   desc:'Защищает от яда.', def:15, poisonResist:50 },
    gold_plate:     { name:'Золотые латы',      cat:'armor', slot:'armor', rarity:'epic',      icon:'🛡️', value:450, weight:5,   desc:'Тяжёлая роскошь.', def:20, luck:4 },
    frost_guard:    { name:'Страж стужи',       cat:'armor', slot:'armor', rarity:'epic',      icon:'🛡️', value:470, weight:4.5, desc:'Не пропускает холод.', def:19, coldResist:45 },
    ember_plate:    { name:'Латы углей',        cat:'armor', slot:'armor', rarity:'legendary', icon:'🛡️', value:700, weight:5,   desc:'Согревает в ледяных ветрах.', def:25, coldResist:60, warmth:25 },
    void_mantle:    { name:'Мантия пустоты',    cat:'armor', slot:'armor', rarity:'mythic',    icon:'🥻', value:1200,weight:1,   desc:'Поглощает удары.', def:30, luck:10, speed:0.5 },
    moon_veil:      { name:'Лунная вуаль',      cat:'armor', slot:'armor', rarity:'mythic',    icon:'🥻', value:1300,weight:1,   desc:'Мифическая защита руин.', def:28, luck:9, light:20 },

    /* ---------- Амулеты ---------- */
    lucky_pebble:   { name:'Счастливый камешек',cat:'charm', slot:'charm', rarity:'uncommon', icon:'🍀', value:35,  weight:0.2, desc:'Немного повышает удачу.', luck:4 },
    copper_ring:    { name:'Медное кольцо',     cat:'charm', slot:'charm', rarity:'uncommon', icon:'💍', value:40,  weight:0.1, desc:'Простое кольцо.', def:1, luck:2 },
    wolf_fang:      { name:'Клык волка',        cat:'charm', slot:'charm', rarity:'rare',     icon:'🦷', value:90,  weight:0.3, desc:'Даёт силу и удачу.', atk:3, luck:3 },
    silver_ring:    { name:'Серебряное кольцо', cat:'charm', slot:'charm', rarity:'rare',     icon:'💍', value:120, weight:0.1, desc:'Кольцо удачи.', luck:6, def:2 },
    pearl_amulet:   { name:'Жемчужный амулет',  cat:'charm', slot:'charm', rarity:'rare',     icon:'📿', value:150, weight:0.2, desc:'Спокойствие и защита.', def:3, poisonResist:15 },
    firefly_charm:  { name:'Амулет светлячка',  cat:'charm', slot:'charm', rarity:'rare',     icon:'✨', value:140, weight:0.2, desc:'Свет и выносливость.', light:14, maxStamina:14 },
    gold_ring:      { name:'Золотое кольцо',    cat:'charm', slot:'charm', rarity:'epic',     icon:'💍', value:260, weight:0.1, desc:'Притягивает богатство.', luck:10 },
    venom_charm:    { name:'Амулет яда',        cat:'charm', slot:'charm', rarity:'epic',     icon:'🧿', value:280, weight:0.3, desc:'Обращает яд в силу.', atk:4, poisonResist:30 },
    swamp_talisman: { name:'Талисман топей',    cat:'charm', slot:'charm', rarity:'epic',     icon:'🧿', value:300, weight:0.4, desc:'Сильная защита от яда.', poisonResist:40, def:3 },
    frost_charm:    { name:'Амулет стужи',      cat:'charm', slot:'charm', rarity:'epic',     icon:'❄️', value:300, weight:0.3, desc:'Власть над холодом.', coldResist:35, atk:3 },
    ember_sigil:    { name:'Печать углей',      cat:'charm', slot:'charm', rarity:'legendary',icon:'🔥', value:520, weight:0.3, desc:'Жар и мощь.', atk:7, warmth:35 },
    star_charm:     { name:'Звёздный амулет',   cat:'charm', slot:'charm', rarity:'mythic',   icon:'🌟', value:900, weight:0.2, desc:'Удача самих звёзд.', luck:18, light:20 },
    moon_orb:       { name:'Лунная сфера',      cat:'charm', slot:'charm', rarity:'mythic',   icon:'🔮', value:950, weight:0.5, desc:'Мифическая удача и свет.', luck:16, light:28 },
    void_eye:       { name:'Око пустоты',       cat:'charm', slot:'charm', rarity:'mythic',   icon:'👁️', value:1000,weight:0.3, desc:'Видит скрытое.', luck:22, atk:5 },

    /* ---------- Свет ---------- */
    torch:          { name:'Факел',             cat:'light', slot:'light', rarity:'common',    icon:'🔥', value:15,  weight:1,   desc:'Освещает путь ночью.', light:18 },
    oil_lamp:       { name:'Масляная лампа',    cat:'light', slot:'light', rarity:'uncommon',  icon:'🪔', value:45,  weight:1.2, desc:'Ровный тёплый свет.', light:26, warmth:5 },
    lantern:        { name:'Фонарь',            cat:'light', slot:'light', rarity:'uncommon',  icon:'🏮', value:60,  weight:1.5, desc:'Яркий и надёжный.', light:30 },
    glass_lantern:  { name:'Стеклянный фонарь', cat:'light', slot:'light', rarity:'rare',      icon:'🏮', value:150, weight:1.3, desc:'Чистый яркий свет.', light:40 },
    firefly_lantern:{ name:'Фонарь светлячков', cat:'light', slot:'light', rarity:'rare',      icon:'🏮', value:170, weight:1.2, desc:'Живой свет долины.', light:42, maxStamina:10 },
    ember_lantern:  { name:'Фонарь углей',      cat:'light', slot:'light', rarity:'legendary', icon:'🏮', value:480, weight:1.8, desc:'Согревает и освещает.', light:55, warmth:30 },
    star_lantern:   { name:'Звёздный фонарь',   cat:'light', slot:'light', rarity:'mythic',    icon:'🏮', value:850, weight:1,   desc:'Свет далёких звёзд.', light:70, luck:10 },

    /* ---------- Еда и зелья ---------- */
    bread:          { name:'Хлеб',              cat:'food',   rarity:'common',   icon:'🍞', value:8,   weight:0.4, desc:'Восстанавливает силы.', use:{ heal:8,  stamina:25 } },
    cooked_fish:    { name:'Жареная рыба',      cat:'food',   rarity:'uncommon', icon:'🍣', value:18,  weight:0.5, desc:'Сытная еда.', use:{ heal:22, stamina:35 } },
    cooked_meat:    { name:'Жареное мясо',      cat:'food',   rarity:'uncommon', icon:'🍖', value:20,  weight:0.6, desc:'Сытное мясо.', use:{ heal:26, stamina:30 } },
    berry_pie:      { name:'Ягодный пирог',     cat:'food',   rarity:'uncommon', icon:'🥧', value:24,  weight:0.6, desc:'Сладкий и сытный.', use:{ heal:18, stamina:45 } },
    mushroom_soup:  { name:'Грибной суп',       cat:'food',   rarity:'uncommon', icon:'🍲', value:22,  weight:0.7, desc:'Снимает отравление.', use:{ heal:18, stamina:30, curePoison:true } },
    stew:           { name:'Похлёбка странника',cat:'food',   rarity:'rare',     icon:'🍲', value:40,  weight:0.8, desc:'Полное восстановление сил.', use:{ heal:35, stamina:60 } },
    healing_potion: { name:'Зелье лечения',     cat:'potion', rarity:'rare',     icon:'🧪', value:45,  weight:0.5, desc:'Быстро лечит.', use:{ heal:45 } },
    greater_healing:{ name:'Большое зелье лечения',cat:'potion',rarity:'epic',   icon:'🧪', value:110, weight:0.6, desc:'Сильное лечение.', use:{ heal:90 } },
    stamina_potion: { name:'Зелье бодрости',    cat:'potion', rarity:'rare',     icon:'⚗️', value:40,  weight:0.5, desc:'Возвращает силы.', use:{ stamina:70 } },
    greater_stamina:{ name:'Большое зелье бодрости',cat:'potion',rarity:'epic',  icon:'⚗️', value:100, weight:0.6, desc:'Полный заряд сил.', use:{ stamina:140 } },
    antidote:       { name:'Противоядие',       cat:'potion', rarity:'uncommon', icon:'💊', value:30,  weight:0.3, desc:'Снимает яд.', use:{ curePoison:true } },
    warmth_potion:  { name:'Зелье тепла',       cat:'potion', rarity:'rare',     icon:'🔥', value:55,  weight:0.5, desc:'Временно согревает.', use:{ buffWarmth:40 } },
    elixir_luck:    { name:'Эликсир удачи',     cat:'potion', rarity:'legendary',icon:'🍀', value:220, weight:0.5, desc:'Надолго повышает удачу.', use:{ buffLuck:20 } },
    elixir_power:   { name:'Эликсир силы',      cat:'potion', rarity:'legendary',icon:'💪', value:240, weight:0.5, desc:'Надолго повышает атаку.', use:{ buffPower:10 } },
    elixir_protection:{name:'Эликсир защиты',   cat:'potion', rarity:'legendary',icon:'🛡️', value:240, weight:0.5, desc:'Надолго повышает защиту.', use:{ buffDefense:10 } },
    phoenix_tear:   { name:'Слеза феникса',     cat:'potion', rarity:'mythic',   icon:'🪽', value:600, weight:0.1, desc:'Полностью восстанавливает и снимает всё плохое.', use:{ heal:999, stamina:999, curePoison:true } },

    /* ---------- Особые ---------- */
    valley_token:   { name:'Жетон путника',     cat:'quest', rarity:'rare', icon:'🎫', value:0, weight:0.1, desc:'Пропуск из стартовой долины в опасные земли. Не продаётся.' },
    map_fragment:   { name:'Фрагмент карты',    cat:'quest', rarity:'rare', icon:'🗺️', value:0, weight:0.1, desc:'Открывает отметки на большой карте. Не продаётся.' }
  },

  recipes: [
    /* Полуфабрикаты и плавка */
    { out:'plank',          n:2, mats:{ wood:2 },                              level:1 },
    { out:'rope',           n:1, mats:{ fiber:3 },                             level:1 },
    { out:'cloth',          n:1, mats:{ fiber:4 },                             level:1 },
    { out:'leather_strip',  n:2, mats:{ leather:1 },                           level:1 },
    { out:'empty_vial',     n:2, mats:{ glass:1 },                             level:2 },
    { out:'glass',          n:1, mats:{ sand:2, coal:1 },                      level:2 },
    { out:'bronze_ingot',   n:1, mats:{ copper_ore:2, tin_ore:1, coal:1 },     level:2 },
    { out:'iron_ingot',     n:1, mats:{ iron_ore:2, coal:1 },                  level:2 },
    { out:'silver_ingot',   n:1, mats:{ silver_ore:2, coal:2 },                level:3 },
    { out:'gold_ingot',     n:1, mats:{ gold_ore:2, coal:3 },                  level:4 },
    { out:'ember_ingot',    n:1, mats:{ ember_core:1, iron_ingot:2, coal:4 },  level:4 },
    { out:'moon_ingot',     n:1, mats:{ moon_dust:1, silver_ingot:2, crystal_shard:3 }, level:5 },

    /* Базовые инструменты и оружие */
    { out:'stone_axe',      n:1, mats:{ wood:3, stone:2 },                     level:1 },
    { out:'stone_pick',     n:1, mats:{ wood:3, stone:3 },                     level:1 },
    { out:'gathering_sickle',n:1,mats:{ wood:2, stone:1, fiber:2 },            level:1 },
    { out:'wooden_club',    n:1, mats:{ wood:4 },                              level:1 },
    { out:'spear',          n:1, mats:{ wood:3, flint:1, rope:1 },             level:1 },
    { out:'torch',          n:1, mats:{ wood:1, fiber:2, resin:1 },            level:1 },
    { out:'cloth_vest',     n:1, mats:{ cloth:3, rope:1 },                     level:1 },
    { out:'padded_armor',   n:1, mats:{ cloth:5, leather_strip:2 },            level:1 },
    { out:'valley_token',   n:1, mats:{ wood:6, stone:6, fiber:6 },            level:1 },

    /* Медь / бронза / железо */
    { out:'copper_axe',     n:1, mats:{ copper_ore:3, plank:2, rope:1 },       level:2 },
    { out:'copper_pick',    n:1, mats:{ copper_ore:3, plank:2, rope:1 },       level:2 },
    { out:'copper_sword',   n:1, mats:{ bronze_ingot:2, plank:1, leather_strip:1 }, level:2 },
    { out:'copper_mail',    n:1, mats:{ bronze_ingot:3, leather_strip:2 },     level:2 },
    { out:'copper_ring',    n:1, mats:{ bronze_ingot:1, crystal_shard:1 },     level:2 },
    { out:'bronze_axe',     n:1, mats:{ bronze_ingot:3, plank:2, rope:1 },     level:2 },
    { out:'bronze_pick',    n:1, mats:{ bronze_ingot:3, plank:2, rope:1 },     level:2 },
    { out:'bronze_sword',   n:1, mats:{ bronze_ingot:3, plank:1, leather_strip:1 }, level:2 },
    { out:'bronze_mail',    n:1, mats:{ bronze_ingot:4, leather_strip:3 },     level:2 },
    { out:'staff_apprentice',n:1,mats:{ plank:3, crystal_shard:1, rope:1 },    level:2 },
    { out:'iron_axe',       n:1, mats:{ iron_ingot:3, plank:2, rope:1 },       level:3 },
    { out:'iron_pick',      n:1, mats:{ iron_ingot:4, plank:2, rope:1 },       level:3 },
    { out:'iron_sword',     n:1, mats:{ iron_ingot:4, plank:1, leather_strip:2 }, level:3 },
    { out:'iron_mail',      n:1, mats:{ iron_ingot:6, leather_strip:4 },       level:3 },
    { out:'leather_armor',  n:1, mats:{ leather:5, leather_strip:3, rope:2 },  level:2 },
    { out:'oil_lamp',       n:1, mats:{ glass:1, resin:2, rope:1 },            level:2 },
    { out:'lantern',        n:1, mats:{ iron_ingot:2, glass:2, coal:2 },       level:3 },

    /* Еда и зелья */
    { out:'cooked_fish',    n:1, mats:{ fish:1, coal:1 },                      level:1 },
    { out:'cooked_meat',    n:1, mats:{ meat:1, coal:1, salt:1 },              level:1 },
    { out:'berry_pie',      n:1, mats:{ berry:4, bread:1 },                    level:1 },
    { out:'mushroom_soup',  n:1, mats:{ mushroom:2, herb:1, salt:1 },          level:1 },
    { out:'stew',           n:1, mats:{ cooked_meat:1, mushroom:1, herb:2, salt:1 }, level:2 },
    { out:'antidote',       n:1, mats:{ herb:3, mushroom:1, empty_vial:1 },    level:2 },
    { out:'healing_potion', n:1, mats:{ herb:4, mushroom:2, empty_vial:1 },    level:2 },
    { out:'stamina_potion', n:1, mats:{ herb:3, berry:3, empty_vial:1 },       level:2 },
    { out:'warmth_potion',  n:1, mats:{ sulfur:1, coal:2, resin:2, empty_vial:1 }, level:3 },
    { out:'greater_healing',n:1, mats:{ herb:6, crystal_shard:1, empty_vial:2 }, level:3 },
    { out:'greater_stamina',n:1, mats:{ berry:6, herb:4, crystal_shard:1, empty_vial:2 }, level:3 },

    /* Редкое снаряжение */
    { out:'lucky_pebble',   n:1, mats:{ stone:6, crystal_shard:1 },            level:2 },
    { out:'wolf_fang',      n:1, mats:{ bone:4, wolf_pelt:1, leather_strip:2 },level:2 },
    { out:'wolf_cloak',     n:1, mats:{ wolf_pelt:3, leather_strip:4, rope:2 },level:3 },
    { out:'silver_ring',    n:1, mats:{ silver_ingot:1, pearl:1 },             level:3 },
    { out:'pearl_amulet',   n:1, mats:{ pearl:2, silver_ingot:1, rope:1 },     level:3 },
    { out:'firefly_charm',  n:1, mats:{ crystal_shard:3, fiber:6, herb:3 },    level:2 },
    { out:'glass_lantern',  n:1, mats:{ glass:3, silver_ingot:1, coal:3 },     level:3 },
    { out:'firefly_lantern',n:1, mats:{ crystal_shard:4, glass:2, rope:2 },    level:3 },
    { out:'silver_sickle',  n:1, mats:{ silver_ingot:3, plank:2, crystal_shard:2 }, level:3 },
    { out:'silver_pick',    n:1, mats:{ silver_ingot:4, plank:2, rope:1 },     level:3 },
    { out:'silver_blade',   n:1, mats:{ silver_ingot:5, crystal_shard:3, leather_strip:2 }, level:3 },
    { out:'steel_sword',    n:1, mats:{ iron_ingot:6, coal:6, leather_strip:2 }, level:3 },
    { out:'steel_mail',     n:1, mats:{ iron_ingot:8, leather_strip:5, coal:6 }, level:3 },
    { out:'war_hammer',     n:1, mats:{ iron_ingot:7, plank:3, leather_strip:3 }, level:3 },
    { out:'staff_fire',     n:1, mats:{ plank:3, sulfur:3, coal:4, crystal_shard:2 }, level:3 },

    /* Эпическое */
    { out:'gold_pick',      n:1, mats:{ gold_ingot:4, ember_core:1, crystal_shard:4 }, level:4 },
    { out:'master_sickle',  n:1, mats:{ silver_ingot:3, spider_silk:3, pearl:2 }, level:4 },
    { out:'gold_blade',     n:1, mats:{ gold_ingot:5, crystal_shard:4, leather_strip:3 }, level:4 },
    { out:'gold_ring',      n:1, mats:{ gold_ingot:2, pearl:2, crystal_shard:2 }, level:4 },
    { out:'gold_plate',     n:1, mats:{ gold_ingot:7, leather_strip:6, crystal_shard:3 }, level:4 },
    { out:'shadow_dagger',  n:1, mats:{ shadow_essence:4, silver_ingot:3, bone:4 }, level:4 },
    { out:'frost_edge',     n:1, mats:{ frost_shard:4, silver_ingot:4, crystal_shard:3 }, level:4 },
    { out:'staff_frost',    n:1, mats:{ frost_shard:4, crystal_shard:4, plank:3 }, level:4 },
    { out:'spider_silk_robe',n:1,mats:{ spider_silk:6, cloth:6, rope:3 },       level:4 },
    { out:'swamp_cloak',    n:1, mats:{ swamp_heart:3, leather:6, spider_silk:3 }, level:4 },
    { out:'swamp_talisman', n:1, mats:{ swamp_heart:2, venom_sac:3, bone:4 },  level:4 },
    { out:'venom_charm',    n:1, mats:{ venom_sac:4, spider_silk:2, silver_ingot:1 }, level:4 },
    { out:'frost_guard',    n:1, mats:{ frost_shard:5, iron_ingot:6, wolf_pelt:2 }, level:4 },
    { out:'frost_charm',    n:1, mats:{ frost_shard:3, silver_ingot:2, pearl:1 }, level:4 },

    /* Легендарное */
    { out:'ember_pick',     n:1, mats:{ ember_ingot:3, gold_ingot:2, crystal_shard:5 }, level:5 },
    { out:'ember_axe',      n:1, mats:{ ember_ingot:4, gold_ingot:2, coal:10 }, level:5 },
    { out:'ember_plate',    n:1, mats:{ ember_ingot:5, leather_strip:8, wolf_pelt:3 }, level:5 },
    { out:'ember_sigil',    n:1, mats:{ ember_ingot:2, gold_ingot:3, sulfur:5 }, level:5 },
    { out:'ember_lantern',  n:1, mats:{ ember_ingot:2, glass:4, sulfur:4 },     level:5 },
    { out:'elixir_luck',    n:1, mats:{ pearl:3, star_fragment:1, empty_vial:1 }, level:5 },
    { out:'elixir_power',   n:1, mats:{ ember_core:2, bone:6, empty_vial:1 },   level:5 },
    { out:'elixir_protection',n:1,mats:{ frost_shard:3, iron_ingot:6, empty_vial:1 }, level:5 },

    /* Мифическое */
    { out:'moon_pick',      n:1, mats:{ moon_ingot:3, star_fragment:2, void_shard:1 }, level:6 },
    { out:'void_blade',     n:1, mats:{ void_shard:3, moon_ingot:2, shadow_essence:6 }, level:6 },
    { out:'moon_scepter',   n:1, mats:{ moon_ingot:3, ancient_relic:1, star_fragment:2 }, level:6 },
    { out:'void_mantle',    n:1, mats:{ void_shard:4, spider_silk:8, moon_ingot:2 }, level:6 },
    { out:'moon_veil',      n:1, mats:{ moon_ingot:3, spider_silk:6, pearl:4 }, level:6 },
    { out:'star_charm',     n:1, mats:{ star_fragment:3, gold_ingot:3, pearl:3 }, level:6 },
    { out:'moon_orb',       n:1, mats:{ moon_dust:3, moon_ingot:2, crystal_shard:8 }, level:6 },
    { out:'void_eye',       n:1, mats:{ void_shard:3, rune_stone:3, moon_ingot:2 }, level:6 },
    { out:'star_lantern',   n:1, mats:{ star_fragment:2, glass:5, moon_ingot:1 }, level:6 },
    { out:'phoenix_tear',   n:1, mats:{ phoenix_tear:0, star_fragment:2, ember_core:2, moon_dust:2, empty_vial:1 }, level:6 }
  ],

  merchantStock: ['bread','apple','fish','torch','healing_potion','stamina_potion','antidote','cloth_vest','wooden_club','stone_axe','stone_pick','gathering_sickle','empty_vial','salt'],

  enemies: {
    shadow_wisp: { name:'Тень', hp:24, atk:5, speed:2.7, xp:22, coins:[1,4], color:0x7a2bd6, size:0.7,
      loot:[{item:'shadow_essence',chance:0.07},{item:'bone',chance:0.25},{item:'fiber',chance:0.3}] },
    wolf:        { name:'Волк', hp:34, atk:7, speed:3.4, xp:30, coins:[2,5], color:0x5a5a66, size:0.9,
      loot:[{item:'leather',chance:0.4},{item:'meat',chance:0.5},{item:'bone',chance:0.3},{item:'wolf_pelt',chance:0.08},{item:'wolf_fang',chance:0.04}] },
    spider:      { name:'Лесной паук', hp:28, atk:6, speed:3.0, xp:26, coins:[1,4], color:0x3a3a2a, size:0.8, poison:true,
      loot:[{item:'spider_silk',chance:0.14},{item:'venom_sac',chance:0.08},{item:'bone',chance:0.2}] },
    bog_lurker:  { name:'Топяник', hp:46, atk:9, speed:2.4, xp:42, coins:[3,7], color:0x3f7a3a, size:1.0, poison:true,
      loot:[{item:'swamp_heart',chance:0.06},{item:'venom_sac',chance:0.12},{item:'herb',chance:0.4},{item:'mushroom',chance:0.3},{item:'pearl',chance:0.04}] },
    ash_golem:   { name:'Пепельный голем', hp:70, atk:13, speed:1.9, xp:60, coins:[5,10], color:0x8a4a2a, size:1.3,
      loot:[{item:'ember_core',chance:0.035},{item:'iron_ore',chance:0.5},{item:'coal',chance:0.5},{item:'sulfur',chance:0.25},{item:'ash',chance:0.4}] },
    frost_wraith:{ name:'Ледяной призрак', hp:52, atk:11, speed:3.1, xp:52, coins:[4,8], color:0x6fc3ff, size:0.9,
      loot:[{item:'frost_shard',chance:0.1},{item:'crystal_shard',chance:0.12},{item:'silver_ore',chance:0.2},{item:'ember_core',chance:0.02}] },
    moon_sentinel:{name:'Лунный страж', hp:95, atk:17, speed:2.6, xp:90, coins:[8,15], color:0xb48cff, size:1.4,
      loot:[{item:'moon_dust',chance:0.025},{item:'ancient_relic',chance:0.006},{item:'gold_ore',chance:0.15},{item:'crystal_shard',chance:0.3},{item:'rune_stone',chance:0.08}] },
    void_wisp:   { name:'Призрак пустоты', hp:80, atk:15, speed:3.3, xp:80, coins:[6,12], color:0x2a1a4a, size:1.0,
      loot:[{item:'void_shard',chance:0.03},{item:'star_fragment',chance:0.02},{item:'shadow_essence',chance:0.15},{item:'rune_stone',chance:0.1}] }
  },

  locations: {
    valley: {
      name:'Долина Светлячков', danger:0, mapX:18, mapY:64, biome:'meadow',
      ground:[0x4c9a55,0x63b168], skyDay:0x9fd3c0, skyNight:0x0d1b33,
      desc:'Безопасный стартовый хаб. Здесь учатся добыче, крафту и торговле.',
      unlock:null,
      features:['workbench','merchant','campfire','tent'],
      nodes:[
        { type:'tree', count:12, tool:'axe', minPower:0, base:{item:'wood',min:1,max:2}, bonus:[{item:'fiber',chance:0.2},{item:'apple',chance:0.08},{item:'resin',chance:0.1}] },
        { type:'rock', count:9,  tool:'pick', minPower:0, base:{item:'stone',min:1,max:2}, bonus:[{item:'flint',chance:0.15},{item:'clay',chance:0.12},{item:'coal',chance:0.06}] },
        { type:'bush', count:12, tool:null, minPower:0, base:{item:'fiber',min:1,max:2}, bonus:[{item:'herb',chance:0.3},{item:'mushroom',chance:0.15},{item:'apple',chance:0.1},{item:'berry',chance:0.2}] },
        { type:'bush', count:5, tool:'sickle', minPower:0, base:{item:'berry',min:1,max:2}, bonus:[{item:'herb',chance:0.3},{item:'feather',chance:0.1}] },
        { type:'rock', count:4, tool:null, minPower:0, base:{item:'sand',min:1,max:2}, bonus:[{item:'salt',chance:0.15},{item:'pearl',chance:0.015}] },
        { type:'crystal', count:2, tool:'pick', minPower:3, base:{item:'crystal_shard',min:1,max:1}, bonus:[{item:'crystal_shard',chance:0.15}] }
      ],
      enemies:[], hazard:null
    },
    forest: {
      name:'Тёмный лес', danger:1, mapX:40, mapY:42, biome:'forest',
      ground:[0x2f5a3a,0x3f7048], skyDay:0x5f8f7a, skyNight:0x07140f,
      desc:'Первые опасности. Тени, волки и пауки. Источник кожи, костей и эссенции тени.',
      unlock:{ item:'valley_token', level:1 },
      features:[],
      nodes:[
        { type:'tree', count:18, tool:'axe', minPower:0, base:{item:'wood',min:1,max:3}, bonus:[{item:'resin',chance:0.2},{item:'fiber',chance:0.25},{item:'feather',chance:0.15},{item:'apple',chance:0.08}] },
        { type:'bush', count:10, tool:null, minPower:0, base:{item:'fiber',min:1,max:2}, bonus:[{item:'herb',chance:0.35},{item:'mushroom',chance:0.2},{item:'berry',chance:0.25},{item:'spider_silk',chance:0.03}] },
        { type:'rock', count:6, tool:'pick', minPower:0, base:{item:'stone',min:1,max:2}, bonus:[{item:'coal',chance:0.18},{item:'flint',chance:0.15}] },
        { type:'ore', count:6, tool:'pick', minPower:1, base:{item:'copper_ore',min:1,max:2}, bonus:[{item:'tin_ore',chance:0.3},{item:'iron_ore',chance:0.08}] }
      ],
      enemies:[{type:'shadow_wisp',count:5},{type:'wolf',count:4},{type:'spider',count:3}], hazard:null
    },
    swamp: {
      name:'Гнилые топи', danger:2, mapX:62, mapY:66, biome:'swamp',
      ground:[0x3f5a35,0x556b3a], skyDay:0x6f8f5a, skyNight:0x0a140a,
      desc:'Ядовитые лужи и топяники. Источник сердец топей, яда и серебра.',
      unlock:{ level:2, visited:'forest' },
      features:[],
      nodes:[
        { type:'bush', count:12, tool:null, minPower:0, base:{item:'herb',min:1,max:2}, bonus:[{item:'mushroom',chance:0.3},{item:'fiber',chance:0.3},{item:'venom_sac',chance:0.02}] },
        { type:'ore', count:6, tool:'pick', minPower:2, base:{item:'silver_ore',min:1,max:1}, bonus:[{item:'swamp_heart',chance:0.03},{item:'pearl',chance:0.05}] },
        { type:'crystal', count:3, tool:'pick', minPower:2, base:{item:'crystal_shard',min:1,max:1}, bonus:[{item:'swamp_heart',chance:0.04},{item:'venom_sac',chance:0.05}] },
        { type:'rock', count:5, tool:null, minPower:0, base:{item:'clay',min:1,max:2}, bonus:[{item:'sulfur',chance:0.12},{item:'salt',chance:0.1}] }
      ],
      enemies:[{type:'bog_lurker',count:6},{type:'spider',count:4}], hazard:'poison'
    },
    peaks: {
      name:'Пепельные пики', danger:3, mapX:74, mapY:30, biome:'peaks',
      ground:[0x6a5a4a,0x8a6a4a], skyDay:0x9f8f7a, skyNight:0x140a07,
      desc:'Холод и големы. Источник ядер углей, золота и морозных осколков. Нужно тепло.',
      unlock:{ level:3, visited:'swamp' },
      features:[],
      nodes:[
        { type:'ore', count:8, tool:'pick', minPower:3, base:{item:'iron_ore',min:1,max:2}, bonus:[{item:'silver_ore',chance:0.12},{item:'gold_ore',chance:0.04},{item:'sulfur',chance:0.15}] },
        { type:'rock', count:8, tool:'pick', minPower:0, base:{item:'stone',min:1,max:2}, bonus:[{item:'coal',chance:0.35},{item:'ash',chance:0.3},{item:'flint',chance:0.15}] },
        { type:'crystal', count:4, tool:'pick', minPower:4, base:{item:'frost_shard',min:1,max:1}, bonus:[{item:'gold_ore',chance:0.06},{item:'ember_core',chance:0.015}] }
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
        { type:'crystal', count:6, tool:'pick', minPower:5, base:{item:'crystal_shard',min:1,max:2}, bonus:[{item:'moon_dust',chance:0.02},{item:'star_fragment',chance:0.012},{item:'gold_ore',chance:0.08}] },
        { type:'ore', count:5, tool:'pick', minPower:4, base:{item:'silver_ore',min:1,max:1}, bonus:[{item:'gold_ore',chance:0.1},{item:'moon_dust',chance:0.015},{item:'rune_stone',chance:0.04}] },
        { type:'relic', count:2, tool:'pick', minPower:5, base:{item:'rune_stone',min:1,max:1}, bonus:[{item:'ancient_relic',chance:0.04},{item:'void_shard',chance:0.01}] }
      ],
      enemies:[{type:'moon_sentinel',count:5},{type:'void_wisp',count:3}], hazard:'arcane'
    }
  },

  tutorial: [
    { text:'Соберите 4 древесины и 3 камня у деревьев и камней (клавиша E). Лут выпадет и сам притянется к вам.', type:'gather', need:{wood:4,stone:3} },
    { text:'Подойдите к верстаку и создайте каменный топор.', type:'have', need:{stone_axe:1} },
    { text:'Откройте рюкзак (I) и экипируйте топор в слот инструмента.', type:'equip', slot:'tool', item:'stone_axe' },
    { text:'Соберите волокно с кустов и продайте 2 волокна торговцу Марку.', type:'sell', need:{fiber:2} },
    { text:'Купите хлеб у торговца, чтобы узнать торговлю.', type:'buy', need:{bread:1} },
    { text:'Создайте Жетон путника на верстаке — это пропуск в опасные земли.', type:'have', need:{valley_token:1} },
    { text:'Откройте большую карту (M) и отправляйтесь в Тёмный лес.', type:'travel', target:'forest' }
  ]
};
