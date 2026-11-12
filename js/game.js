import * as THREE from 'three';

const D=window.GAME_DATA,$=id=>document.getElementById(id);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),lerp=(a,b,t)=>a+(b-a)*t,TAU=Math.PI*2;
const rndInt=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const angDiff=(a,b)=>{let d=a-b;return Math.atan2(Math.sin(d),Math.cos(d));};
const store={get(k,d){try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v);}catch(e){return d;}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}},del(k){try{localStorage.removeItem(k);}catch(e){}}};
function mulberry32(s){let a=s|0;return()=>{a=(a+0x6D2B79F5)|0;let t=Math.imul(a^(a>>>15),1|a);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296;};}

const SAVE_KEY='fortress_world_v3';
const XP_TABLE=[0,60,160,320,560,900,1400,2100,3000];
const SAFE_R=132,GATHER_DUR=.55,MAX_DROPS=120,MAX_YIELD=6,BASE_CAP=60,CAP_PER_LVL=8;
const DODGE_COST=16,DODGE_DUR=.28,DODGE_CD=.7,MAX_BULLETS=120,STR=D.strategic;

function freshState(){return{hp:100,stamina:100,coins:90,xp:0,level:1,inventory:{club:1,stone_axe:1,stone_pick:1},equipment:{tool:null,weapon:'club',gun:null,armor:null,charm:null},buffs:{luck:0,power:0,defense:0},location:'fortress',visited:{fortress:true},tutorialStep:0,tutorialDone:false,counters:{gather:{},sold:{},bought:{},clears:0},poison:0,playTime:0,score:0,strat:null};}
let S=freshState();const saved=store.get(SAVE_KEY,null),hasSave=!!saved;if(saved)S=Object.assign(freshState(),saved);
const ITEMS=D.items,RAR=D.rarities,CAT=D.categories;
const item=id=>ITEMS[id];
function ensureCounters(){if(!S.counters)S.counters={gather:{},sold:{},bought:{},clears:0};['gather','sold','bought'].forEach(k=>{if(!S.counters[k])S.counters[k]={};});if(typeof S.counters.clears!=='number')S.counters.clears=0;}
function fortressMaxHP(){return STR.fortressMaxHP+((S.strat?.fortress?.walls)||1)*40;}
function maxPop(id){return(D.locations[id].maxPop||10)+Math.floor((S.strat.leaderLv[id]||1)*1.2);}
function initStrat(){if(!S.strat)S.strat={};const st=S.strat;
 st.pops=st.pops||{};st.owners=st.owners||{};st.leaderLv=st.leaderLv||{};
 STR.ring.forEach(id=>{if(typeof st.pops[id]!=='number')st.pops[id]=D.locations[id].startPop||4;if(!st.owners[id])st.owners[id]=id;if(typeof st.leaderLv[id]!=='number')st.leaderLv[id]=1;});
 st.fortress=Object.assign({walls:1,towers:0,barracks:1,workshop:1,farm:0},st.fortress||{});
 st.bots=st.bots||[];st.log=st.log||[];st.migrations=st.migrations||[];
 if(typeof st.fortressHP!=='number')st.fortressHP=fortressMaxHP();
 st.migrateT=st.migrateT??STR.migrateEvery;st.regrowT=st.regrowT??STR.regrowEvery;st.leaderT=st.leaderT??STR.leaderGrace;st.farmT=st.farmT??30;
 st.raidCountdown=st.raidCountdown??-1;st.raidActive=!!st.raidActive;st.raidLeft=st.raidLeft||0;st.actorIdx=st.actorIdx||0;st.warTicks=st.warTicks||0;}
function normalizeState(){const f=freshState();S.inventory=S.inventory||{};S.equipment=Object.assign(f.equipment,S.equipment||{});S.buffs=Object.assign(f.buffs,S.buffs||{});S.visited=Object.assign(f.visited,S.visited||{});ensureCounters();initStrat();if(!D.locations[S.location])S.location='fortress';['hp','stamina','coins','xp','level','poison','playTime','score','tutorialStep'].forEach(k=>{if(typeof S[k]!=='number')S[k]=f[k];});if(!item(S.equipment.weapon))S.equipment.weapon='club';S.strat.fortressHP=clamp(S.strat.fortressHP,0,fortressMaxHP());}
normalizeState();

let world=null,state='intro',activePanel='intro',selectedMap='fortress',tradeTab='buy',selectedInv=null,craftFilter='all',invFilter='all';
let toastTimer=null,saveTimer=0,hudTimer=0,mapTimer=0,interactQueued=false,jumpQueued=false,dodgeQueued=false,sprintTouch=false,meleeHeld=false,gunHeld=false;
let fireCd=0,nearestInteract=null,shake=0,hitstop=0,uiDirty=true,lastPrompt='',travelWatchdog=null,errCount=0,harvestTimes=[],fullNoticeT=0,scoreMult=1,multT=0,towerCd=0;
const keys={},joy={x:0,y:0,id:null};let mouseX=innerWidth/2,mouseY=innerHeight/2,aimX=0,aimZ=0;
const player={x:0,y:0,z:10,vx:0,vz:0,vy:0,grounded:true,facing:Math.PI,walkPhase:0,prevSin:0,landT:0,moving:false,sprinting:false,invuln:0,dodgeT:0,dodgeCd:0,dodgeVX:0,dodgeVZ:1,gatherT:0,gatherTarget:null,gatherDone:false,meleeT:0,meleeDur:.4,meleeHit:false,combo:0,comboT:0,recoilT:0};

const rarityColor=id=>RAR[item(id).rarity].color;
const catMeta=id=>CAT[item(id).cat]||CAT.resource;
const catBadge=id=>{const c=catMeta(id);return`<span class="cat-badge" style="color:${c.color};border-color:${c.color}66;background:${c.color}14">${c.icon} ${c.name}</span>`;};
const count=id=>S.inventory[id]||0;
const weightOf=(id,n=1)=>(item(id)?.weight||0)*n;
function currentWeight(){let w=0;for(const id in S.inventory)w+=weightOf(id,count(id));return Math.round(w*10)/10;}
function capacity(){let c=BASE_CAP+(S.level-1)*CAP_PER_LVL;for(const s in S.equipment){const i=S.equipment[s];if(i&&item(i)?.capacity)c+=item(i).capacity;}return c;}
const canPickup=(id,n=1)=>currentWeight()+weightOf(id,n)<=capacity()+1e-6;
function addItem(id,n=1){if(!item(id))return;S.inventory[id]=count(id)+n;uiDirty=true;}
function takeItem(id,n=1){if(count(id)<n)return false;S.inventory[id]-=n;if(S.inventory[id]<=0)delete S.inventory[id];uiDirty=true;return true;}
const currentGun=()=>{const i=item(S.equipment.gun);return i?.gun||null;};
const currentMelee=()=>{const i=item(S.equipment.weapon);return i?.slot==='weapon'?i:{atk:5,reach:2.3,speed:.42,name:'Кулаки'};};
function stats(){const s={atk:2,def:0,gatherType:null,gatherPower:0,speed:0,luck:0,maxHp:100+(S.level-1)*12,maxStamina:100+(S.level-1)*6,poisonResist:0};for(const sl in S.equipment){const id=S.equipment[sl],it=item(id);if(!it)continue;for(const k of['atk','def','speed','luck','maxStamina','poisonResist'])s[k]+=it[k]||0;if(it.slot==='tool'){s.gatherType=it.gatherType;s.gatherPower=it.gatherPower||1;}}s.atk+=S.buffs.power||0;s.def+=S.buffs.defense||0;s.luck+=S.buffs.luck||0;return s;}
function equipItem(id){const it=item(id);if(!it?.slot||count(id)<=0)return;const old=S.equipment[it.slot];takeItem(id,1);if(old)addItem(old,1);S.equipment[it.slot]=id;toast('Экипировано: '+it.name);updateGunVisual();uiDirty=true;checkTutorial();save();}
function unequip(sl){const id=S.equipment[sl];if(!id)return;S.equipment[sl]=null;addItem(id,1);updateGunVisual();uiDirty=true;save();}
function addXP(n){S.xp+=n;let l=1;for(let i=0;i<XP_TABLE.length;i++)if(S.xp>=XP_TABLE[i])l=i+1;if(l>S.level){S.level=l;S.hp=stats().maxHp;toast('⭐ Уровень '+l+'!');Sfx.level();uiDirty=true;}}
function useItem(id){const it=item(id);if(!it?.use||!takeItem(id,1))return;const st=stats();if(it.use.heal)S.hp=clamp(S.hp+it.use.heal,0,st.maxHp);if(it.use.stamina)S.stamina=clamp(S.stamina+it.use.stamina,0,st.maxStamina);if(it.use.curePoison)S.poison=0;Sfx.eat();toast('Использовано: '+it.name);uiDirty=true;}
const sellPrice=id=>Math.max(1,Math.floor(item(id).value*.6));
const buyPrice=id=>Math.ceil(item(id).value*2.5);
function fullNotice(){const n=performance.now();if(n-fullNoticeT<2500)return;fullNoticeT=n;toast('🎒 Рюкзак полон!');Sfx.deny();}
function logWar(text,color){S.strat.log.unshift({text,color:color||'#a8c4a0'});if(S.strat.log.length>9)S.strat.log.pop();uiDirty=true;}

let quality=store.get('fortress_quality','medium'),fps=60,fpsAcc=0,fpsFrames=0,slowTime=0;
const QUAL={high:{pixel:2,shadow:true,grass:1200,flowers:280,enemies:40},medium:{pixel:1.5,shadow:true,grass:700,flowers:160,enemies:30},low:{pixel:1,shadow:false,grass:300,flowers:70,enemies:20}};

const Sfx={ctx:null,master:null,muted:store.get('fortress_muted',false),
ensure(){if(!this.ctx){try{const A=window.AudioContext||window.webkitAudioContext;this.ctx=new A();this.master=this.ctx.createGain();this.master.gain.value=this.muted?0:.7;this.master.connect(this.ctx.destination);}catch(e){}}if(this.ctx?.state==='suspended')this.ctx.resume();},
setMuted(m){this.muted=m;store.set('fortress_muted',m);if(this.master)this.master.gain.linearRampToValueAtTime(m?0:.7,this.ctx.currentTime+.1);$('icoSoundOn').style.display=m?'none':'';$('icoSoundOff').style.display=m?'':'none';},
tone(f0,f1,d,t,v){if(!this.ctx||this.muted)return;const s=this.ctx.currentTime,o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=t;o.frequency.setValueAtTime(f0,s);o.frequency.exponentialRampToValueAtTime(Math.max(f1,1),s+d);g.gain.setValueAtTime(v,s);g.gain.exponentialRampToValueAtTime(.001,s+d);o.connect(g);g.connect(this.master);o.start(s);o.stop(s+d+.02);},
noise(d,f,v){if(!this.ctx||this.muted)return;const n=Math.floor(this.ctx.sampleRate*d),b=this.ctx.createBuffer(1,n,this.ctx.sampleRate),c=b.getChannelData(0);for(let i=0;i<n;i++)c[i]=(Math.random()*2-1)*(1-i/n);const s=this.ctx.createBufferSource();s.buffer=b;const fl=this.ctx.createBiquadFilter();fl.type='lowpass';fl.frequency.value=f;const g=this.ctx.createGain();g.gain.value=v;s.connect(fl);fl.connect(g);g.connect(this.master);s.start();},
step(){this.noise(.03,700,.05);},jump(){this.tone(260,520,.12,'triangle',.14);},land(){this.noise(.08,300,.2);},interact(){this.tone(420,640,.1,'sine',.13);},pickup(){this.tone(620,920,.12,'sine',.16);},eat(){this.noise(.07,900,.12);},craft(){this.tone(300,600,.15,'square',.1);setTimeout(()=>this.tone(450,900,.15,'sine',.14),120);},coin(){this.tone(800,1200,.08,'sine',.14);},
swing(){this.noise(.08,1600,.12);this.tone(260,140,.08,'sine',.08);},meleeHit(){this.noise(.06,700,.18);this.tone(180,90,.09,'square',.1);},shoot(){this.noise(.06,2400,.2);this.tone(340,110,.07,'square',.1);},shotgun(){this.noise(.14,1300,.28);this.tone(160,60,.14,'square',.14);},dry(){this.tone(200,150,.06,'square',.08);},dodge(){this.noise(.12,900,.16);this.tone(420,180,.12,'sine',.1);},chop(){this.noise(.07,900,.2);this.tone(160,90,.1,'square',.1);},mine(){this.noise(.06,1400,.22);this.tone(240,120,.09,'square',.1);},cut(){this.noise(.05,2200,.14);},deny(){this.tone(180,120,.12,'square',.1);},hit(){this.noise(.06,600,.16);this.tone(200,100,.08,'sawtooth',.1);},kill(){this.tone(300,120,.14,'square',.12);this.noise(.1,900,.16);},hurt(){this.tone(200,70,.25,'sawtooth',.18);},level(){[523,659,784,1047].forEach((f,i)=>setTimeout(()=>this.tone(f,f,.2,'triangle',.18),i*100));},death(){[330,247,196].forEach((f,i)=>setTimeout(()=>this.tone(f,f*.9,.3,'triangle',.16),i*180));},travel(){this.tone(200,800,.5,'sine',.15);},raid(){this.tone(160,380,.4,'sawtooth',.16);setTimeout(()=>this.tone(200,460,.3,'sawtooth',.14),220);},build(){this.tone(180,420,.2,'square',.12);}};
Sfx.setMuted(Sfx.muted);

function toast(m){const e=$('toast');e.textContent=m;e.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>e.classList.remove('show'),2600);}
function lootFeed(html,color){const f=$('lootFeed'),d=document.createElement('div');d.className='loot-line';d.style.borderColor=color||'var(--line)';d.style.color=color||'var(--text)';d.innerHTML=html;f.appendChild(d);while(f.children.length>5)f.removeChild(f.firstChild);setTimeout(()=>d.remove(),3100);}
const save=()=>store.set(SAVE_KEY,S);
function reportErr(e){console.error(e);errCount++;if(errCount===1)toast('⚠️ '+e.message);if(errCount>40){state='paused';openPanel('pause');}}

const overlays={intro:$('overlayIntro'),pause:$('overlayPause'),inv:$('overlayInv'),craft:$('overlayCraft'),trade:$('overlayTrade'),map:$('overlayMap'),death:$('overlayDeath')};
function clearActionQueues(){interactQueued=jumpQueued=dodgeQueued=sprintTouch=meleeHeld=gunHeld=false;for(const k in keys)keys[k]=false;joy.x=joy.y=0;joy.id=null;$('joyKnob').style.transform='translate(-50%,-50%)';}
function cancelGather(){player.gatherT=0;player.gatherTarget=null;player.gatherDone=false;hideGatherProgress();}
function openPanel(n){clearActionQueues();cancelGather();activePanel=n;Object.values(overlays).forEach(o=>o.classList.add('hidden'));if(n&&overlays[n])overlays[n].classList.remove('hidden');uiDirty=true;renderAll();}
function closePanel(){clearActionQueues();activePanel=null;Object.values(overlays).forEach(o=>o.classList.add('hidden'));}
function startGame(){Sfx.ensure();state='playing';closePanel();toast('ЛКМ — бой, ПКМ — огнестрел, Q — уклон, E — добыча, M — карта');}

const style=document.createElement('style');
style.textContent=`
#capChip{gap:7px}#capChip.full{border-color:var(--danger)}#capBar{width:56px;height:7px;border-radius:5px;background:#0d2114;border:1px solid #2c5237;overflow:hidden}#capFill{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--teal),var(--amber))}#capText{font-size:11px;min-width:52px;text-align:right}
#stratHud{position:fixed;top:70px;right:16px;z-index:19;display:flex;flex-direction:column;gap:8px;align-items:flex-end}
.strat-chip{background:rgba(10,25,16,.85);border:1px solid rgba(120,200,140,.3);border-radius:12px;padding:8px 14px;font-size:12px;backdrop-filter:blur(6px);min-width:190px}
.strat-chip .sc-label{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--dim)}
.strat-chip .sc-bar{height:8px;border-radius:5px;background:#0d2114;border:1px solid #2c5237;overflow:hidden;margin-top:4px}
.strat-chip .sc-bar>i{display:block;height:100%;width:0}
#threatFill{background:linear-gradient(90deg,#7ee081,#ffd166,#ff5a5f)}#fortFill{background:linear-gradient(90deg,#6fc3ff,#4de3c1)}
#raidWarn{color:var(--danger);font-weight:700;font-size:12px;margin-top:4px;display:none}
#combatHud{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:23;display:flex;gap:14px;align-items:center;background:rgba(10,25,16,.86);border:1px solid rgba(120,200,140,.3);border-radius:16px;padding:10px 18px;backdrop-filter:blur(8px);font-size:13px}
#combatHud .sh-sep{width:1px;height:26px;background:rgba(120,200,140,.25)}#combatHud .sh-label{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--dim);display:block}#combatHud .sh-val{font-family:'Unbounded';font-weight:700;font-size:15px}
#ammoVal{color:var(--amber)}#ammoVal.empty{color:var(--danger)}#meleeVal{color:var(--danger)}#gunVal{color:var(--amber)}#dodgeVal{color:var(--teal)}
#crosshair{position:fixed;width:26px;height:26px;pointer-events:none;z-index:40;transform:translate(-50%,-50%);opacity:.9}#crosshair:before,#crosshair:after{content:'';position:absolute;background:var(--amber)}#crosshair:before{left:50%;top:0;width:2px;height:100%;transform:translateX(-50%)}#crosshair:after{top:50%;left:0;height:2px;width:100%;transform:translateY(-50%)}#crosshair i{position:absolute;left:50%;top:50%;width:6px;height:6px;border:2px solid var(--amber);border-radius:50%;transform:translate(-50%,-50%)}
#gatherProgress{position:fixed;left:50%;bottom:150px;transform:translateX(-50%);z-index:26;width:240px;background:rgba(10,25,16,.92);border:1px solid var(--teal);border-radius:12px;padding:10px 14px;opacity:0;pointer-events:none;transition:opacity .15s}#gatherProgress.show{opacity:1}#gatherProgress .gp-label{font-size:12px;font-weight:600;margin-bottom:6px;text-align:center}#gatherProgress .gp-track{height:7px;border-radius:5px;background:#0d2114;border:1px solid #2c5237;overflow:hidden}#gatherProgress .gp-track>i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--teal),var(--amber))}
#raidBanner{position:fixed;top:34%;left:50%;transform:translate(-50%,-50%) scale(.8);z-index:28;text-align:center;opacity:0;pointer-events:none;transition:.3s}#raidBanner.show{opacity:1;transform:translate(-50%,-50%) scale(1)}#raidBanner .rb-title{font-family:'Unbounded';font-weight:900;font-size:32px;color:var(--danger);text-shadow:0 0 24px rgba(255,90,95,.6)}#raidBanner .rb-sub{font-size:14px;margin-top:6px}
#locBanner{position:fixed;top:16%;left:50%;transform:translate(-50%,-10px);z-index:28;text-align:center;opacity:0;pointer-events:none;transition:.4s}#locBanner.show{opacity:1;transform:translate(-50%,0)}#locBanner .lb-name{font-family:'Unbounded';font-weight:900;font-size:26px;color:var(--text);text-shadow:0 3px 18px rgba(0,0,0,.8)}#locBanner .lb-sub{font-size:13px;color:var(--amber);margin-top:4px}
.map-fort{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;z-index:2;cursor:pointer}
.map-fort .mf-dot{width:62px;height:62px;border-radius:16px;margin:0 auto 6px;display:flex;align-items:center;justify-content:center;font-size:28px;border:2px solid var(--amber);background:linear-gradient(140deg,#24452c,#1a3624);box-shadow:0 0 24px rgba(255,209,102,.4)}
.map-fort.selected .mf-dot{border-color:var(--teal);box-shadow:0 0 26px rgba(77,227,193,.6)}
.map-fort .mf-name{font-size:12px;font-weight:700}
.map-ring{position:absolute;transform:translate(-50%,-50%);width:124px;text-align:center;cursor:pointer;transition:.15s;z-index:2}
.map-ring:hover{transform:translate(-50%,-50%) scale(1.06)}
.map-ring .mr-dot{width:46px;height:46px;border-radius:50%;margin:0 auto 6px;display:flex;align-items:center;justify-content:center;font-size:20px;border:2px solid var(--line);background:var(--surface2)}
.map-ring.cleared .mr-dot{border-color:var(--success);opacity:.8}
.map-ring.selected .mr-dot{border-color:var(--teal);box-shadow:0 0 16px rgba(77,227,193,.5)}
.map-ring.current .mr-dot{border-color:var(--amber)}
.map-ring .mr-name{font-size:11px;font-weight:700}.map-ring .mr-pop{font-size:10px;color:var(--dim)}.map-ring .mr-lead{font-size:9.5px;margin-top:2px}
.mig-dot{position:absolute;width:9px;height:9px;border-radius:50%;box-shadow:0 0 8px currentColor;transform:translate(-50%,-50%);z-index:1;pointer-events:none}
#warLog{margin-top:10px;background:#0d2114;border:1px solid var(--line);border-radius:12px;padding:10px 12px;max-height:120px;overflow:auto;font-size:11.5px;line-height:1.6}
#warLog .wl-title{font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--dim);margin-bottom:5px}
.upg-row,.bot-row{display:flex;align-items:center;gap:12px;background:var(--surface2);border:1px solid var(--line);border-radius:12px;padding:12px 14px;margin-bottom:8px}
.upg-row .u-icon,.bot-row .b-icon{font-size:26px;width:36px;text-align:center}
.upg-row .u-main,.bot-row .b-main{flex:1;min-width:0}
.upg-row .u-name,.bot-row .b-name{font-weight:700;font-size:14px}
.upg-row .u-desc,.bot-row .b-desc{font-size:11.5px;color:var(--dim);margin-top:3px;line-height:1.4}
.upg-row .u-lvl{font-size:11px;color:var(--amber);font-weight:700}
.bot-hire{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin:10px 0}.bot-hire button{flex:1;min-width:140px}
.bot-mode{display:flex;gap:6px;margin-top:6px;flex-wrap:wrap;align-items:center}.bot-mode button{font-size:11px;padding:5px 10px}.bot-mode button.active{border-color:var(--teal);color:var(--teal)}
.bot-mode select{font-size:11px;padding:5px 8px;background:var(--surface2);border:1px solid var(--line);color:var(--text);border-radius:8px}
`;
document.head.appendChild(style);
const capChip=document.createElement('div');capChip.className='chip';capChip.id='capChip';capChip.innerHTML='🎒 <span id="capText">0/60</span><div id="capBar"><i id="capFill"></i></div>';document.querySelector('#hud .hud-group').appendChild(capChip);
const stratHud=document.createElement('div');stratHud.id='stratHud';stratHud.innerHTML=`<div class="strat-chip"><div class="sc-label">Угроза крепости</div><div class="sc-bar"><i id="threatFill"></i></div><div id="raidWarn"></div></div><div class="strat-chip"><div class="sc-label">Прочность крепости</div><div class="sc-bar"><i id="fortFill"></i></div></div>`;document.body.appendChild(stratHud);
const combatHud=document.createElement('div');combatHud.id='combatHud';combatHud.innerHTML=`<div><span class="sh-label">Ближний бой</span><span class="sh-val" id="meleeVal">Дубина</span></div><div class="sh-sep"></div><div><span class="sh-label">Огнестрел</span><span class="sh-val" id="gunVal">—</span></div><div class="sh-sep"></div><div><span class="sh-label">Патроны</span><span class="sh-val" id="ammoVal">0</span></div><div class="sh-sep"></div><div><span class="sh-label">Уклон</span><span class="sh-val" id="dodgeVal">Q</span></div>`;document.body.appendChild(combatHud);
const crosshair=document.createElement('div');crosshair.id='crosshair';crosshair.innerHTML='<i></i>';document.body.appendChild(crosshair);
const raidBanner=document.createElement('div');raidBanner.id='raidBanner';raidBanner.innerHTML='<div class="rb-title"></div><div class="rb-sub"></div>';document.body.appendChild(raidBanner);
const locBanner=document.createElement('div');locBanner.id='locBanner';locBanner.innerHTML='<div class="lb-name"></div><div class="lb-sub"></div>';document.body.appendChild(locBanner);
const gatherUI=document.createElement('div');gatherUI.id='gatherProgress';gatherUI.innerHTML='<div class="gp-label"></div><div class="gp-track"><i></i></div>';document.body.appendChild(gatherUI);
const gpLabel=gatherUI.querySelector('.gp-label'),gpFill=gatherUI.querySelector('.gp-track>i');
function showGatherProgress(l,p){gpLabel.textContent=l;gpFill.style.width=clamp(p*100,0,100)+'%';gatherUI.classList.add('show');}
function hideGatherProgress(){gatherUI.classList.remove('show');gpFill.style.width='0%';}
let bannerT=null;
function showRaidBanner(t,s){raidBanner.querySelector('.rb-title').textContent=t;raidBanner.querySelector('.rb-sub').textContent=s;raidBanner.classList.add('show');clearTimeout(bannerT);bannerT=setTimeout(()=>raidBanner.classList.remove('show'),2600);}
function showLocBanner(n,s){locBanner.querySelector('.lb-name').textContent=n;locBanner.querySelector('.lb-sub').textContent=s;locBanner.classList.add('show');clearTimeout(bannerT);bannerT=setTimeout(()=>locBanner.classList.remove('show'),2800);}

const btnFort=document.createElement('button');btnFort.className='icon-btn';btnFort.title='Крепость';btnFort.textContent='🏰';document.querySelector('#hud .hud-group:last-child').appendChild(btnFort);
const btnBots=document.createElement('button');btnBots.className='icon-btn';btnBots.title='Отряд';btnBots.textContent='🤖';document.querySelector('#hud .hud-group:last-child').appendChild(btnBots);
function makePanel(id,title,eyebrow){const o=document.createElement('div');o.className='overlay hidden';o.id=id;o.innerHTML=`<div class="panel wide"><div class="eyebrow">${eyebrow}</div><h2>${title}</h2><div class="panel-body"></div><div class="btn-row"><button class="btn-ghost close-btn">Закрыть</button></div></div>`;document.body.appendChild(o);o.querySelector('.close-btn').addEventListener('click',closePanel);return o;}
overlays.fort=makePanel('overlayFort','Крепость','стройка и оборона');
overlays.bots=makePanel('overlayBots','Отряд наёмников','найм и приказы');
const fortPanel=overlays.fort,botPanel=overlays.bots;

function threat(){let t=0,m=0;STR.ring.forEach(id=>{const o=S.strat.owners[id];if(o==='player')return;const L=D.leaders[o]||D.leaders[id];t+=(S.strat.pops[id]||0)*(L?L.aggression:1);m+=maxPop(id)*1.5;});return m>0?clamp(t/m*100,0,100):0;}
function renderHUD(){const st=stats();$('hpFill').style.width=clamp(S.hp/st.maxHp*100,0,100)+'%';$('stFill').style.width=clamp(S.stamina/st.maxStamina*100,0,100)+'%';$('hpText').textContent=Math.ceil(S.hp);$('stText').textContent=Math.ceil(S.stamina);$('lvlText').textContent='Ур.'+S.level;const c=XP_TABLE[S.level-1]||0,n=XP_TABLE[S.level]||XP_TABLE.at(-1);$('xpFill').style.width=clamp((S.xp-c)/(n-c)*100,0,100)+'%';$('coinText').textContent=S.coins;$('locText').textContent=D.locations[S.location].name;
const w=currentWeight(),cap=capacity();$('capText').textContent=w.toFixed(1)+'/'+cap;$('capFill').style.width=clamp(w/cap*100,0,100)+'%';capChip.classList.toggle('full',w>=cap-.05);
$('threatFill').style.width=threat()+'%';$('fortFill').style.width=clamp(S.strat.fortressHP/fortressMaxHP()*100,0,100)+'%';
const rw=$('raidWarn');if(S.strat.raidActive){rw.style.display='block';rw.textContent='🔥 НАБЕГ! Врагов: '+S.strat.raidLeft;}else if(S.strat.raidCountdown>0){rw.style.display='block';rw.textContent='⚠️ Набег через '+Math.ceil(S.strat.raidCountdown)+'с';}else rw.style.display='none';
$('meleeVal').textContent=currentMelee().name;const g=currentGun();$('gunVal').textContent=g?item(S.equipment.gun).name:'—';$('ammoVal').textContent=count('ammo');$('ammoVal').classList.toggle('empty',count('ammo')<=0);$('dodgeVal').textContent=player.dodgeCd>0?player.dodgeCd.toFixed(1)+'с':'Q';$('dodgeVal').style.color=player.dodgeCd>0?'var(--danger)':'var(--teal)';}
function renderQuest(){ensureCounters();if(S.tutorialDone){const own=STR.ring.filter(i=>S.strat.owners[i]==='player').length;$('questText').textContent='Держите сектора под контролем и укрепляйте крепость.';$('questProgress').textContent='Секторов: '+own+'/6 · зачисток '+S.counters.clears;return;}const q=D.tutorial[S.tutorialStep];if(!q)return;$('questText').textContent=q.text;let p='';if(q.type==='gather')p=Object.entries(q.need).map(([i,n])=>(S.counters.gather[i]||0)+'/'+n+' '+item(i).name).join(' · ');else if(q.type==='haveAny')p=q.need.some(i=>count(i)>0||S.equipment.weapon===i)?'Готово':'Создайте оружие';else if(q.type==='equipSlot')p=S.equipment[q.slot]?'Готово':'Не экипировано';else if(q.type==='travelAny')p=S.location!=='fortress'?'Готово':'Вы в крепости';else if(q.type==='clearAny')p=S.counters.clears>0?'Готово':'Зачистите гарнизон';$('questProgress').textContent=p;}
function checkTutorial(){ensureCounters();if(S.tutorialDone)return;let g=0;while(!S.tutorialDone&&g++<20){const q=D.tutorial[S.tutorialStep];if(!q){S.tutorialDone=true;break;}let ok=false;if(q.type==='gather')ok=Object.entries(q.need).every(([i,n])=>(S.counters.gather[i]||0)>=n);else if(q.type==='haveAny')ok=q.need.some(i=>count(i)>0||S.equipment.weapon===i);else if(q.type==='equipSlot')ok=!!S.equipment[q.slot];else if(q.type==='travelAny')ok=S.location!=='fortress';else if(q.type==='clearAny')ok=S.counters.clears>0;if(!ok)break;S.tutorialStep++;Sfx.pickup();toast('✅ Цель выполнена!');if(S.tutorialStep>=D.tutorial.length){S.tutorialDone=true;toast('🎓 Обучение завершено!');}}uiDirty=true;}
function attrText(it){const nm={atk:'Атака',def:'Защита',reach:'Дальность',speed:'Скорость',gatherType:'Инструмент',gatherPower:'Сила добычи',luck:'Удача'};const l=[];for(const k in nm)if(it[k])l.push(nm[k]+': '+it[k]);if(it.gun){const g=it.gun;l.push('Урон: '+g.dmg+' · Темп: '+g.rate+'/с · Патронов: '+g.ammoCost);if(g.pellets>1)l.push('Дробь: '+g.pellets);if(g.pierce)l.push('Пробитие: '+g.pierce);}if(it.use){const u=[];if(it.use.heal)u.push('+'+it.use.heal+' HP');if(it.use.stamina)u.push('+'+it.use.stamina+' сил');if(it.use.curePoison)u.push('снимает яд');l.push(u.join(', '));}l.push('Ценность: '+it.value+' 🪙 · Вес: '+it.weight);return l.join('<br>');}
function buildFilters(){const cats=['all',...Object.keys(CAT)];const h=(cur,kind)=>cats.map(c=>`<button class="filter-btn ${cur===c?'active':''}" data-kind="${kind}" data-cat="${c}">${c==='all'?'Все':CAT[c].icon+' '+CAT[c].name}</button>`).join('');$('craftFilters').innerHTML=h(craftFilter,'craft');$('invFilters').innerHTML=h(invFilter,'inv');}
function renderInventory(){const st=stats(),w=currentWeight(),cap=capacity();$('statLine').innerHTML='⚔️ '+st.atk+' · 🛡️ '+st.def+' · 🍀 '+st.luck+'<br><span style="color:'+(w>=cap?'var(--danger)':'var(--teal)')+'">🎒 Вес: '+w.toFixed(1)+' / '+cap+'</span>';const sn={tool:'Инструмент',weapon:'Ближний бой',gun:'Огнестрел',armor:'Броня',charm:'Амулет'};$('equipSlots').innerHTML=Object.keys(S.equipment).map(s=>{const id=S.equipment[s],it=id?item(id):null;return`<div class="equip-slot" data-slot="${s}"><div class="es-label">${sn[s]}</div><div class="es-icon">${it?it.icon:'—'}</div><div class="es-name" style="color:${it?rarityColor(id):'var(--dim)'}">${it?it.name:'Пусто'}</div></div>`;}).join('');const ids=Object.keys(S.inventory).filter(i=>count(i)>0&&(invFilter==='all'||item(i).cat===invFilter)).sort((a,b)=>RAR[item(a).rarity].order-RAR[item(b).rarity].order);$('invGrid').innerHTML=ids.map(i=>{const it=item(i);return`<div class="inv-item" data-id="${i}" style="border-color:${rarityColor(i)}55"><div class="ii-count">×${count(i)}</div><div class="ii-icon">${it.icon}</div><div class="ii-name" style="color:${rarityColor(i)}">${it.name}</div><div class="ii-cat">${catBadge(i)}</div></div>`;}).join('')||'<div class="story">Пусто.</div>';renderInvDetail();}
function renderInvDetail(){const id=selectedInv,b=$('invDetail');if(!id||!item(id)||count(id)<=0){b.innerHTML='Выберите предмет.';return;}const it=item(id),cm=catMeta(id);let bt='';if(it.slot)bt+=`<button class="btn-primary" data-action="equip" data-id="${id}">Экипировать</button>`;if(it.use)bt+=`<button class="btn-ghost" data-action="use" data-id="${id}">Использовать</button>`;if(it.value>0)bt+=`<button class="btn-ghost" data-action="sell" data-id="${id}">Продать ${sellPrice(id)} 🪙</button>`;bt+=`<button class="btn-ghost" data-action="drop" data-id="${id}">Выбросить</button>`;b.innerHTML=`<div class="id-name" style="color:${rarityColor(id)}">${it.icon} ${it.name} <span style="font-size:11px;color:var(--dim)">(${RAR[it.rarity].name})</span> ${catBadge(id)}</div><div class="id-purpose">📌 ${cm.purpose}</div><div class="id-desc">${it.desc}</div><div class="id-attrs">${attrText(it)}</div><div class="btn-row" style="justify-content:flex-start;margin-top:10px">${bt}</div>`;}
function craftCost(r){const d=1-(S.strat.fortress.workshop||1)*.05,m={};Object.entries(r.mats).forEach(([i,n])=>m[i]=Math.max(1,Math.ceil(n*d)));return m;}
function renderCraft(){const list=D.recipes.filter(r=>craftFilter==='all'||item(r.out).cat===craftFilter);$('craftList').innerHTML=list.map(r=>{const idx=D.recipes.indexOf(r),it=item(r.out),canL=S.level>=r.level,mats=craftCost(r);const ms=Object.entries(mats).map(([i,n])=>`<span class="${count(i)>=n?'ok':'missing'}">${item(i).icon}${count(i)}/${n}</span>`).join(' ');const can=canL&&Object.entries(mats).every(([i,n])=>count(i)>=n);return`<div class="recipe"><div class="r-icon">${it.icon}</div><div class="r-main"><div class="r-name" style="color:${rarityColor(r.out)}">${it.name} <span style="font-size:10px;color:var(--dim)">ур.${r.level}</span> ${catBadge(r.out)}</div><div class="r-mats">${ms}</div></div><button class="btn-ghost" data-idx="${idx}" ${can?'':'disabled'}>Создать</button></div>`;}).join('')||'<div class="story">Нет рецептов.</div>';}
function craft(idx){const r=D.recipes[idx];if(!r)return;if(S.level<r.level){toast('Нужен уровень '+r.level);return;}const m=craftCost(r);if(!Object.entries(m).every(([i,n])=>count(i)>=n)){toast('Не хватает материалов');return;}Object.entries(m).forEach(([i,n])=>takeItem(i,n));addItem(r.out,r.n||1);addXP(12+RAR[item(r.out).rarity].order*8);Sfx.craft();toast('🛠️ Создано: '+item(r.out).name);burst(player.x,1.4,player.z,0xffd166,16,3,3,.8);uiDirty=true;checkTutorial();save();}
function recordTrade(kind,id,n){ensureCounters();const k=kind==='buy'?'bought':'sold';S.counters[k][id]=(S.counters[k][id]||0)+n;}
function renderTrade(){$('tradeCoins').textContent=S.coins;const ids=tradeTab==='buy'?D.merchantStock:Object.keys(S.inventory).filter(i=>count(i)>0&&item(i).value>0);$('tradeList').innerHTML=ids.map(i=>{const it=item(i),p=tradeTab==='buy'?buyPrice(i):sellPrice(i),can=tradeTab==='buy'?S.coins>=p:count(i)>0;return`<div class="trade-row"><div class="t-icon">${it.icon}</div><div class="t-main"><div class="t-name" style="color:${rarityColor(i)}">${it.name} ${catBadge(i)}</div><div class="t-sub">${RAR[it.rarity].name} · ${tradeTab==='buy'?'Цена':'Вы получите'} ${p} 🪙 ${tradeTab==='sell'?'· у вас '+count(i):''}</div></div><button class="btn-ghost" data-id="${i}" ${can?'':'disabled'}>${tradeTab==='buy'?'Купить':'Продать'}</button></div>`;}).join('')||'<div class="story">Нечего продавать.</div>';}
const upgradeCost=k=>{const u=D.fortressUpgrades[k],l=S.strat.fortress[k]||0;return Math.round(u.baseCost*Math.pow(u.growth,l)*(1-(S.strat.fortress.workshop||0)*.04));};
function renderFort(){const b=fortPanel.querySelector('.panel-body'),f=S.strat.fortress;let h=`<div class="story" style="font-size:13px">Прочность: <b style="color:var(--teal)">${Math.round(S.strat.fortressHP)}/${fortressMaxHP()}</b> · Монет: <b style="color:var(--amber)">${S.coins}</b> · Отряд: ${S.strat.bots.length}/${botCapacity()}</div>`;Object.entries(D.fortressUpgrades).forEach(([k,u])=>{const l=f[k]||0,c=upgradeCost(k),mx=l>=u.max;h+=`<div class="upg-row"><div class="u-icon">${u.icon}</div><div class="u-main"><div class="u-name">${u.name} <span class="u-lvl">ур.${l}/${u.max}</span></div><div class="u-desc">${u.effect}</div></div><button class="btn-ghost" data-upg="${k}" ${!mx&&S.coins>=c?'':'disabled'}>${mx?'Максимум':c+' 🪙'}</button></div>`;});b.innerHTML=h;b.querySelectorAll('[data-upg]').forEach(x=>x.addEventListener('click',()=>upgradeFort(x.dataset.upg)));}
function upgradeFort(k){const u=D.fortressUpgrades[k],l=S.strat.fortress[k]||0;if(l>=u.max)return;const c=upgradeCost(k);if(S.coins<c){toast('Не хватает монет');return;}S.coins-=c;S.strat.fortress[k]=l+1;if(k==='walls')S.strat.fortressHP=fortressMaxHP();Sfx.build();toast('🏗️ '+u.name+' → ур.'+(l+1));logWar('🏗️ '+u.name+' крепости улучшены до ур.'+(l+1),'#ffd166');uiDirty=true;renderFort();save();}
const botCapacity=()=>1+(S.strat.fortress.barracks||1);
const botStatus=b=>b.mode==='mission'?'В атаке на '+D.locations[b.target].name+' ('+Math.ceil(b.missionT)+'с)':b.mode==='follow'?'Идёт с вами':'В резерве (лечится)';
function renderBots(){const b=botPanel.querySelector('.panel-body');let h=`<div class="story" style="font-size:13px">Монет: <b style="color:var(--amber)">${S.coins}</b> · Отряд: ${S.strat.bots.length}/${botCapacity()}</div><div class="bot-hire">`;Object.entries(D.botTypes).forEach(([i,t])=>{h+=`<button class="btn-ghost" data-hire="${i}" ${S.coins>=t.cost&&S.strat.bots.length<botCapacity()?'':'disabled'}>${t.icon} ${t.name} · ${t.cost} 🪙</button>`;});h+='</div>';if(!S.strat.bots.length)h+='<div class="story">Отряда нет. Наймите бойцов.</div>';S.strat.bots.forEach((bot,i)=>{const t=D.botTypes[bot.type],p=bot.hp/t.hp*100,c=p>50?'var(--success)':p>25?'var(--amber)':'var(--danger)';h+=`<div class="bot-row"><div class="b-icon">${t.icon}</div><div class="b-main"><div class="b-name">${t.name} <span data-hp="${i}" style="color:${c}">${Math.round(bot.hp)}/${t.hp} HP</span></div><div class="b-desc" data-status="${i}">${botStatus(bot)}</div><div class="bot-mode"><button class="btn-ghost ${bot.mode==='follow'?'active':''}" data-mode="follow" data-i="${i}">Со мной</button><button class="btn-ghost ${bot.mode==='idle'?'active':''}" data-mode="idle" data-i="${i}">Резерв</button><select data-send="${i}"><option value="">Отправить в атаку…</option>${STR.ring.map(id=>`<option value="${id}">${D.locations[id].name} (${S.strat.pops[id]||0})</option>`).join('')}</select></div></div></div>`;});b.innerHTML=h;b.querySelectorAll('[data-hire]').forEach(x=>x.addEventListener('click',()=>hireBot(x.dataset.hire)));b.querySelectorAll('[data-mode]').forEach(x=>x.addEventListener('click',()=>setBotMode(+x.dataset.i,x.dataset.mode)));b.querySelectorAll('[data-send]').forEach(x=>x.addEventListener('change',()=>{if(x.value)dispatchBot(+x.dataset.send,x.value);}));}
function updateBotsLive(){if(activePanel!=='bots')return;const b=botPanel.querySelector('.panel-body');S.strat.bots.forEach((bot,i)=>{const t=D.botTypes[bot.type],hp=b.querySelector('[data-hp="'+i+'"]'),st=b.querySelector('[data-status="'+i+'"]');if(hp){const p=bot.hp/t.hp*100;hp.textContent=Math.round(bot.hp)+'/'+t.hp+' HP';hp.style.color=p>50?'var(--success)':p>25?'var(--amber)':'var(--danger)';}if(st)st.textContent=botStatus(bot);});}
function hireBot(t){const bt=D.botTypes[t];if(S.coins<bt.cost||S.strat.bots.length>=botCapacity())return;S.coins-=bt.cost;S.strat.bots.push({type:t,hp:bt.hp,mode:'follow',target:null,missionT:0});Sfx.coin();toast('🤖 Нанят: '+bt.name);syncAllies();uiDirty=true;renderBots();save();}
function setBotMode(i,m){const b=S.strat.bots[i];if(!b)return;b.mode=m;b.target=null;b.missionT=0;syncAllies();uiDirty=true;renderBots();save();}
function dispatchBot(i,t){const b=S.strat.bots[i];if(!b||!D.locations[t])return;b.mode='mission';b.target=t;b.missionT=18;toast('📤 '+D.botTypes[b.type].name+' → '+D.locations[t].name);syncAllies();uiDirty=true;renderBots();save();}
const ringPos=i=>{const a=-Math.PI/2+i/STR.ring.length*TAU;return{x:50+Math.cos(a)*38,y:50+Math.sin(a)*38};};
function renderMap(){const a=$('mapArea');let h=`<svg viewBox="0 0 100 100" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%">`;STR.ring.forEach((id,i)=>{const p=ringPos(i);h+=`<line x1="50" y1="50" x2="${p.x}" y2="${p.y}" stroke="rgba(168,196,160,.25)" stroke-width=".5" stroke-dasharray="2 2"/>`;});h+='</svg>';
h+=`<div class="map-fort ${selectedMap==='fortress'?'selected':''}" data-id="fortress"><div class="mf-dot">🏰</div><div class="mf-name">Крепость${S.location==='fortress'?' · вы здесь':''}</div><div class="mr-pop">HP ${Math.round(S.strat.fortressHP)}/${fortressMaxHP()}</div></div>`;
STR.ring.forEach((id,i)=>{const p=ringPos(i),pop=S.strat.pops[id]||0,own=S.strat.owners[id],L=D.leaders[own]||D.leaders[id],cl=own==='player'&&pop<=0;h+=`<div class="map-ring ${cl?'cleared':''} ${selectedMap===id?'selected':''} ${S.location===id?'current':''}" data-id="${id}" style="left:${p.x}%;top:${p.y}%"><div class="mr-dot" style="border-color:${cl?'var(--success)':L.color}">${cl?'✅':L.icon}</div><div class="mr-name">${D.locations[id].name}</div><div class="mr-pop">${cl?'под контролем':'гарнизон: '+pop}</div><div class="mr-lead" style="color:${L.color}">${own==='player'?'Ваш сектор':L.name+' · ур.'+S.strat.leaderLv[own]}</div></div>`;});
S.strat.migrations.forEach(m=>{const s=ringPos(STR.ring.indexOf(m.from)),e=m.to==='fortress'?{x:50,y:50}:ringPos(STR.ring.indexOf(m.to));h+=`<div class="mig-dot" style="left:${lerp(s.x,e.x,m.t)}%;top:${lerp(s.y,e.y,m.t)}%;background:${m.color};color:${m.color}"></div>`;});
a.innerHTML=h;
const l=D.locations[selectedMap]||D.locations.fortress;let d=`<b>${l.name}</b><br>${l.desc}<br>`;
if(selectedMap!=='fortress'){const pop=S.strat.pops[selectedMap]||0,own=S.strat.owners[selectedMap],L=D.leaders[own]||D.leaders[selectedMap];d+=`<span style="color:${L.color}">${own==='player'?'✅ Под вашим контролем':L.icon+' '+L.name+' ('+L.trait+') · ур.'+S.strat.leaderLv[own]}</span><br>`;if(own!=='player')d+=`<span style="color:var(--dim)">${L.method}</span><br>`;d+=`Поселение: ${l.camp.hall} · гарнизон ${pop}/${maxPop(selectedMap)} · оборона ${Math.round(sectorDefense(selectedMap))}<br>Ресурсы: ${[...new Set(Object.values(l.nodeDefs).map(n=>item(n.base.item).name))].join(', ')}<br>`;}
d+=`Угроза: ${Math.round(threat())}% · лимит секторов на лидера: ${STR.maxSectorsPerLeader}`;
d+=`<div id="warLog"><div class="wl-title">Хроника войны</div>${S.strat.log.length?S.strat.log.map(e=>`<div style="color:${e.color}">${e.text}</div>`).join(''):'<div style="color:var(--dim)">Пока тихо.</div>'}</div>`;
$('mapDetail').innerHTML=d;$('btnTravel').disabled=selectedMap===S.location;$('btnTravel').textContent=selectedMap==='fortress'?'Вернуться в крепость':'Отправиться';}
function renderPanels(){if(!uiDirty)return;if(activePanel==='inv')renderInventory();else if(activePanel==='craft')renderCraft();else if(activePanel==='trade')renderTrade();else if(activePanel==='map')renderMap();else if(activePanel==='fort')renderFort();else if(activePanel==='bots')renderBots();uiDirty=false;}
function renderAll(){uiDirty=true;renderHUD();renderQuest();buildFilters();renderPanels();}

/* ==================== THREE ==================== */
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.domElement.id='gameCanvas3D';renderer.setPixelRatio(Math.min(devicePixelRatio,QUAL[quality].pixel));renderer.setSize(innerWidth,innerHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.12;document.body.appendChild(renderer.domElement);
const scene=new THREE.Scene();scene.fog=new THREE.Fog(0x9fc0d8,70,190);
let frustum=14,camYaw=Math.PI/4,camYawT=Math.PI/4;
const camera=new THREE.OrthographicCamera(-1,1,1,-1,.1,400);
const hemi=new THREE.HemisphereLight(0xcfeaff,0x4a6a3a,.62);scene.add(hemi);
const sun=new THREE.DirectionalLight(0xffe2b4,1.65);sun.castShadow=QUAL[quality].shadow;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-26;sun.shadow.camera.right=26;sun.shadow.camera.top=26;sun.shadow.camera.bottom=-26;sun.shadow.camera.far=95;sun.shadow.bias=-.0022;scene.add(sun);scene.add(sun.target);
const fill=new THREE.DirectionalLight(0x7fb0ff,.28);fill.position.set(-14,10,-16);scene.add(fill);
const skyC=document.createElement('canvas');skyC.width=skyC.height=256;const skyX=skyC.getContext('2d');const skyTex=new THREE.CanvasTexture(skyC);skyTex.colorSpace=THREE.SRGBColorSpace;scene.background=skyTex;
function paintSky(){const l=D.locations[S.location]||D.locations.fortress,t=new THREE.Color(l.sky||0x9fc0d8);const g=skyX.createLinearGradient(0,0,0,256);g.addColorStop(0,'#'+t.clone().multiplyScalar(.8).getHexString());g.addColorStop(.6,'#'+t.getHexString());g.addColorStop(1,'#'+t.clone().lerp(new THREE.Color(0xf0dfb8),.5).getHexString());skyX.fillStyle=g;skyX.fillRect(0,0,256,256);skyTex.needsUpdate=true;scene.fog.color.copy(t).lerp(new THREE.Color(0xf0dfb8),.25);}
function applyQuality(){const q=QUAL[quality];renderer.setPixelRatio(Math.min(devicePixelRatio,q.pixel));renderer.setSize(innerWidth,innerHeight);sun.castShadow=q.shadow;if(world){if(world.grass)world.grass.count=q.grass;if(world.flowers)world.flowers.count=q.flowers;}$('qualitySelect').value=quality;store.set('fortress_quality',quality);}

function makeTex(size,draw,rep=1){const c=document.createElement('canvas');c.width=c.height=size;draw(c.getContext('2d'),size);const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(rep,rep);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;}
function noiseFill(g,s,base,spots,dots){g.fillStyle=base;g.fillRect(0,0,s,s);for(let i=0;i<spots;i++){g.fillStyle=`rgba(0,0,0,${Math.random()*.12})`;g.beginPath();g.arc(Math.random()*s,Math.random()*s,2+Math.random()*10,0,TAU);g.fill();}for(let i=0;i<dots;i++){g.fillStyle=`rgba(255,255,255,${Math.random()*.1})`;g.fillRect(Math.random()*s,Math.random()*s,1+Math.random()*2,1+Math.random()*2);}}
const TEX={};
TEX.grass=makeTex(256,(g,s)=>{noiseFill(g,s,'#4e9a55',150,800);for(let i=0;i<1300;i++){const x=Math.random()*s,y=Math.random()*s;g.strokeStyle=`rgba(${30+Math.random()*40},${110+Math.random()*70},${50+Math.random()*40},.5)`;g.lineWidth=1;g.beginPath();g.moveTo(x,y);g.lineTo(x+(Math.random()-.5)*3,y-3-Math.random()*4);g.stroke();}},60);
TEX.bark=makeTex(128,(g,s)=>{noiseFill(g,s,'#7a5233',60,200);for(let i=0;i<40;i++){g.strokeStyle=`rgba(40,25,12,${.2+Math.random()*.3})`;g.lineWidth=1+Math.random()*2;const x=Math.random()*s;g.beginPath();g.moveTo(x,0);g.bezierCurveTo(x+8,s*.3,x-8,s*.6,x+4,s);g.stroke();}},2);
TEX.plank=makeTex(128,(g,s)=>{noiseFill(g,s,'#8a6242',40,150);g.strokeStyle='rgba(40,25,12,.35)';g.lineWidth=2;for(let y=0;y<s;y+=14){g.beginPath();g.moveTo(0,y);g.lineTo(s,y);g.stroke();}for(let i=0;i<26;i++){g.strokeStyle='rgba(60,40,20,.2)';g.beginPath();const y=Math.random()*s;g.moveTo(0,y);g.lineTo(s,y+2);g.stroke();}},2);
TEX.leaf=makeTex(128,(g,s)=>{noiseFill(g,s,'#3f9a52',80,400);for(let i=0;i<220;i++){g.fillStyle=`rgba(${60+Math.random()*60},${150+Math.random()*70},${70+Math.random()*40},.5)`;g.beginPath();g.ellipse(Math.random()*s,Math.random()*s,2+Math.random()*4,1+Math.random()*2,Math.random()*TAU,0,TAU);g.fill();}},2);
TEX.rock=makeTex(128,(g,s)=>{noiseFill(g,s,'#8a9588',90,300);for(let i=0;i<26;i++){g.strokeStyle=`rgba(40,45,40,${.2+Math.random()*.3})`;g.lineWidth=1;g.beginPath();let x=Math.random()*s,y=Math.random()*s;g.moveTo(x,y);for(let k=0;k<4;k++){x+=(Math.random()-.5)*20;y+=(Math.random()-.5)*20;g.lineTo(x,y);}g.stroke();}},2);
TEX.stone=makeTex(128,(g,s)=>{noiseFill(g,s,'#9c9c92',60,200);g.strokeStyle='rgba(0,0,0,.22)';g.lineWidth=2;for(let y=0;y<s;y+=16){g.beginPath();g.moveTo(0,y);g.lineTo(s,y);g.stroke();for(let x=(y/16%2)*16;x<s;x+=32){g.beginPath();g.moveTo(x,y);g.lineTo(x,y+16);g.stroke();}}},4);
TEX.cobble=makeTex(128,(g,s)=>{noiseFill(g,s,'#8e8a80',40,150);for(let i=0;i<70;i++){const x=Math.random()*s,y=Math.random()*s,r=5+Math.random()*5;g.fillStyle=`rgba(${120+Math.random()*40},${118+Math.random()*36},${108+Math.random()*30},.9)`;g.beginPath();g.arc(x,y,r,0,TAU);g.fill();g.strokeStyle='rgba(50,48,44,.5)';g.lineWidth=1.5;g.stroke();}},14);
TEX.dirt=makeTex(128,(g,s)=>{noiseFill(g,s,'#8a7554',80,300);},6);
TEX.thatch=makeTex(128,(g,s)=>{noiseFill(g,s,'#b09055',40,200);for(let i=0;i<160;i++){g.strokeStyle=`rgba(${140+Math.random()*60},${110+Math.random()*50},${60+Math.random()*40},.6)`;g.lineWidth=1;const x=Math.random()*s,y=Math.random()*s;g.beginPath();g.moveTo(x,y);g.lineTo(x+2,y+8);g.stroke();}},3);
TEX.metal=makeTex(128,(g,s)=>{noiseFill(g,s,'#9aa0a8',40,300);for(let i=0;i<60;i++){g.strokeStyle=`rgba(255,255,255,${.05+Math.random()*.1})`;g.lineWidth=1;const y=Math.random()*s;g.beginPath();g.moveTo(0,y);g.lineTo(s,y+2);g.stroke();}},1);
TEX.cloth=makeTex(128,(g,s)=>{noiseFill(g,s,'#c9c2b0',30,200);g.strokeStyle='rgba(0,0,0,.08)';g.lineWidth=1;for(let i=0;i<s;i+=4){g.beginPath();g.moveTo(i,0);g.lineTo(i,s);g.stroke();g.beginPath();g.moveTo(0,i);g.lineTo(s,i);g.stroke();}},2);
TEX.skin=makeTex(128,(g,s)=>{noiseFill(g,s,'#b0b0b0',70,300);},1);
TEX.bone=makeTex(128,(g,s)=>{noiseFill(g,s,'#cdc7b4',50,200);for(let i=0;i<30;i++){g.strokeStyle='rgba(120,112,96,.3)';g.lineWidth=1;g.beginPath();g.arc(Math.random()*s,Math.random()*s,3+Math.random()*6,0,TAU);g.stroke();}},2);
TEX.bump=makeTex(128,(g,s)=>{g.fillStyle='#808080';g.fillRect(0,0,s,s);for(let i=0;i<1800;i++){const v=100+Math.random()*80;g.fillStyle=`rgb(${v},${v},${v})`;g.fillRect(Math.random()*s,Math.random()*s,1+Math.random()*2,1+Math.random()*2);}},5);
const glowTex=makeTex(128,g=>{const r=g.createRadialGradient(64,64,2,64,64,62);r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.35,'rgba(255,255,255,.45)');r.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=r;g.fillRect(0,0,128,128);});
function glowSprite(c,s,o){const m=new THREE.SpriteMaterial({map:glowTex,color:c,transparent:true,opacity:o,blending:THREE.AdditiveBlending,depthWrite:false});const x=new THREE.Sprite(m);x.scale.setScalar(s);return x;}

/* ==== Единые примитивы (одна геометрия на все боксы/цилиндры) ==== */
const G={box:new THREE.BoxGeometry(1,1,1),cyl:new THREE.CylinderGeometry(.5,.5,1,12),cone:new THREE.ConeGeometry(.5,1,12),pyr:new THREE.ConeGeometry(.72,1,4),sph:new THREE.SphereGeometry(.5,14,10),ico:new THREE.DodecahedronGeometry(.5,0),oct:new THREE.OctahedronGeometry(.5,0),plane:new THREE.PlaneGeometry(1,1),ring:new THREE.RingGeometry(.42,.5,24),torus:new THREE.TorusGeometry(.5,.05,6,22,Math.PI),grass:new THREE.ConeGeometry(.06,.4,5),flower:new THREE.SphereGeometry(.09,6,6)};
const MAT={
 trunk:new THREE.MeshLambertMaterial({color:0x8a6240,map:TEX.bark,bumpMap:TEX.bump,bumpScale:.07}),
 plank:new THREE.MeshLambertMaterial({color:0x9a7048,map:TEX.plank,bumpMap:TEX.bump,bumpScale:.06}),
 darkwood:new THREE.MeshLambertMaterial({color:0x5e4227,map:TEX.plank}),
 leaf:new THREE.MeshLambertMaterial({color:0x4fa85f,map:TEX.leaf}),
 leaf2:new THREE.MeshLambertMaterial({color:0x69bd74,map:TEX.leaf}),
 rock:new THREE.MeshLambertMaterial({color:0x9aa598,map:TEX.rock,bumpMap:TEX.bump,bumpScale:.12}),
 stone:new THREE.MeshLambertMaterial({color:0xa9a99d,map:TEX.stone,bumpMap:TEX.bump,bumpScale:.09}),
 darkstone:new THREE.MeshLambertMaterial({color:0x6d6d66,map:TEX.stone}),
 cobble:new THREE.MeshLambertMaterial({color:0x9c988c,map:TEX.cobble,bumpMap:TEX.bump,bumpScale:.05}),
 dirt:new THREE.MeshLambertMaterial({color:0x9a8460,map:TEX.dirt}),
 thatch:new THREE.MeshLambertMaterial({color:0xc0a065,map:TEX.thatch}),
 roof:new THREE.MeshLambertMaterial({color:0x8f4f3c,map:TEX.thatch}),
 bone:new THREE.MeshLambertMaterial({color:0xd6cfbb,map:TEX.bone}),
 bush:new THREE.MeshLambertMaterial({color:0x57b067,map:TEX.leaf}),
 ore:new THREE.MeshLambertMaterial({color:0x7a7a86,map:TEX.rock}),
 coal:new THREE.MeshLambertMaterial({color:0x3a3a42,map:TEX.rock}),
 coalShard:new THREE.MeshLambertMaterial({color:0x181820,emissive:0x1a1a22,emissiveIntensity:.4}),
 crystal:new THREE.MeshLambertMaterial({color:0x9ff5e2,emissive:0x2bd6b0,emissiveIntensity:1.2}),
 metal:new THREE.MeshLambertMaterial({color:0x9096a0,map:TEX.metal}),
 clothBlue:new THREE.MeshLambertMaterial({color:0x2f6ea8,map:TEX.cloth,side:THREE.DoubleSide}),
 npc:new THREE.MeshLambertMaterial({color:0x3a7ca5,map:TEX.cloth}),
 grass:new THREE.MeshLambertMaterial({color:0xffffff,map:TEX.grass}),
 flower:new THREE.MeshLambertMaterial({color:0xffffff}),
 stump:new THREE.MeshLambertMaterial({color:0x6a6a5a,map:TEX.rock}),
 regrow:new THREE.MeshBasicMaterial({color:0x7ee081,transparent:true,opacity:.25,side:THREE.DoubleSide}),
 fire:new THREE.MeshBasicMaterial({color:0xff9f43,transparent:true,opacity:.9}),
 bulletP:new THREE.MeshBasicMaterial({color:0xffd166}),
 bulletE:new THREE.MeshBasicMaterial({color:0x8aff8a})
};
const SHARED_GEO=new Set(Object.values(G)),SHARED_MAT=new Set(Object.values(MAT)),SHARED_TEX=new Set([...Object.values(TEX),glowTex,skyTex]);
function disposeTree(root){root.traverse(o=>{if(o.geometry&&!SHARED_GEO.has(o.geometry))o.geometry.dispose();const ms=Array.isArray(o.material)?o.material:o.material?[o.material]:[];ms.forEach(m=>{if(SHARED_MAT.has(m))return;['map','bumpMap','emissiveMap','alphaMap'].forEach(k=>{const t=m[k];if(t&&!SHARED_TEX.has(t))t.dispose();});m.dispose();});});}
function put(p,geo,mat,x,y,z,sx=1,sy=1,sz=1,ry=0,shadow=true){const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.rotation.y=ry;m.castShadow=shadow;m.receiveShadow=false;p.add(m);return m;}
function inst(p,geo,mat,list,shadow=true){const im=new THREE.InstancedMesh(geo,mat,list.length),m=new THREE.Matrix4(),q=new THREE.Quaternion(),s=new THREE.Vector3(),v=new THREE.Vector3();list.forEach((t,i)=>{v.set(t[0],t[1],t[2]);q.setFromEuler(new THREE.Euler(0,t[6]||0,0));s.set(t[3],t[4],t[5]);m.compose(v,q,s);im.setMatrixAt(i,m);});im.instanceMatrix.needsUpdate=true;im.castShadow=shadow;p.add(im);return im;}

/* ==================== ГЕРОЙ ==================== */
const SKINS=(Array.isArray(window.SKINS)&&window.SKINS.length)?window.SKINS:[{id:'wanderer',colors:{helmet:'#2a2a33',eyes:'#ff2a1a',jacket:'#4a7c33',pants:'#4a3222',boots:'#2b1c12',scarf:'#f2e3c2',pack:'#6b4a33'},glow:2}];
const M={helmet:new THREE.MeshLambertMaterial({color:0x2a2a33,map:TEX.metal}),eyes:new THREE.MeshLambertMaterial({color:0xff2a1a,emissive:0xff2a1a,emissiveIntensity:2}),jacket:new THREE.MeshLambertMaterial({color:0x4a7c33,map:TEX.cloth}),pants:new THREE.MeshLambertMaterial({color:0x4a3222,map:TEX.cloth}),boots:new THREE.MeshLambertMaterial({color:0x2b1c12,map:TEX.bark}),scarf:new THREE.MeshLambertMaterial({color:0xf2e3c2,map:TEX.cloth}),pack:new THREE.MeshLambertMaterial({color:0x6b4a33,map:TEX.bark}),skin:new THREE.MeshLambertMaterial({color:0xf2c9a0,map:TEX.skin})};
SHARED_MAT.forEach(()=>{});Object.values(M).forEach(m=>SHARED_MAT.add(m));
const hero=new THREE.Group();let gunGroup,gunMat,muzzle,meleeMat;
{
 const body=put(hero,G.box,M.jacket,0,1.35,0,.9,1.1,.6);
 put(hero,G.box,M.boots,0,.85,0,.92,.14,.62);
 const head=put(hero,G.sph,M.helmet,0,2.35,0,1.1,1.02,1.1);
 put(hero,G.sph,M.skin,0,2.3,.28,.84,.72,.5);
 [-.18,.18].forEach(x=>put(hero,G.sph,M.eyes,x,2.42,.6,.16,.16,.16));
 put(hero,G.box,M.scarf,0,1.95,0,.95,.2,.65);
 put(hero,G.box,M.pack,0,1.4,-.42,.55,.65,.28);
 const legL=new THREE.Group(),legR=new THREE.Group();legL.position.set(-.22,.85,0);legR.position.set(.22,.85,0);
 [legL,legR].forEach(l=>{put(l,G.box,M.pants,0,-.4,0,.28,.8,.3);put(l,G.box,M.boots,0,-.72,.08,.32,.18,.45);hero.add(l);});
 const armL=new THREE.Group(),armR=new THREE.Group();armL.position.set(-.58,1.75,.1);armR.position.set(.58,1.75,.1);
 [armL,armR].forEach(a=>{put(a,G.box,M.jacket,0,-.35,0,.24,.7,.26);put(a,G.sph,M.skin,0,-.62,.1,.28,.28,.28);hero.add(a);});
 meleeMat=new THREE.MeshLambertMaterial({color:0xb0b0b8,map:TEX.metal});
 const mg=new THREE.Group();put(mg,G.box,M.boots,0,-.1,0,.08,.5,.08);put(mg,G.box,meleeMat,0,.45,0,.12,.7,.05);mg.position.set(0,-.6,.1);mg.rotation.x=.3;armR.add(mg);
 gunMat=new THREE.MeshLambertMaterial({color:0x333340,map:TEX.metal,emissive:0x000000,emissiveIntensity:.3});
 gunGroup=new THREE.Group();put(gunGroup,G.box,gunMat,0,0,.35,.22,.22,.7);const br=put(gunGroup,G.cyl,gunMat,0,0,.85,.12,.5,.12);br.rotation.x=Math.PI/2;put(gunGroup,G.box,M.boots,0,-.2,.2,.12,.3,.12);
 muzzle=glowSprite(0xffd166,1.2,0);muzzle.position.set(0,0,1.15);gunGroup.add(muzzle);
 gunGroup.position.set(.3,-.55,.55);gunGroup.rotation.x=-.1;gunGroup.visible=false;armL.add(gunGroup);
 const tail=new THREE.Group();tail.position.set(.28,1.95,-.32);put(tail,G.box,M.scarf,0,-.28,0,.22,.6,.06);hero.add(tail);
 hero.userData={body,head,legL,legR,armL,armR,tail};
}
scene.add(hero);
let currentSkin=store.get('fortress_skin','wanderer');
function applySkin(id){const s=SKINS.find(x=>x.id===id)||SKINS[0];currentSkin=s.id;store.set('fortress_skin',s.id);for(const k in M)if(s.colors?.[k])M[k].color.set(s.colors[k]);M.eyes.emissive.set(s.colors?.eyes||'#ff2a1a');M.eyes.emissiveIntensity=s.glow??2;}
function updateGunVisual(){const g=currentGun();gunGroup.visible=!!g;if(g){const c=new THREE.Color(g.color);gunMat.color.copy(c).multiplyScalar(.6);gunMat.emissive.copy(c);gunMat.emissiveIntensity=.25;const big=S.equipment.gun!=='pistol';gunGroup.scale.set(big?1.3:1,big?1.3:1,big?1.25:1);}meleeMat.color.set(S.equipment.weapon?rarityColor(S.equipment.weapon):'#b0b0b8');}
applySkin(currentSkin);updateGunVisual();

/* ==================== ЧАСТИЦЫ ==================== */
const P_MAX=340,pPos=new Float32Array(P_MAX*3),pCol=new Float32Array(P_MAX*3),pVel=new Float32Array(P_MAX*3),pLife=new Float32Array(P_MAX),pMax=new Float32Array(P_MAX),pGrav=new Float32Array(P_MAX),pBase=new Float32Array(P_MAX*3);
for(let i=0;i<P_MAX;i++)pPos[i*3+1]=-999;
const pGeo=new THREE.BufferGeometry();pGeo.setAttribute('position',new THREE.BufferAttribute(pPos,3));pGeo.setAttribute('color',new THREE.BufferAttribute(pCol,3));
const particles=new THREE.Points(pGeo,new THREE.PointsMaterial({map:glowTex,size:10,sizeAttenuation:false,vertexColors:true,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));particles.frustumCulled=false;scene.add(particles);let pCur=0;const tmpC=new THREE.Color();
function burst(x,y,z,c,n,sp,gr,life){tmpC.set(c);for(let k=0;k<n;k++){const i=pCur;pCur=(pCur+1)%P_MAX;const a=Math.random()*TAU,u=Math.random();pPos[i*3]=x;pPos[i*3+1]=y;pPos[i*3+2]=z;pVel[i*3]=Math.cos(a)*sp*(.3+Math.random()*.7);pVel[i*3+1]=u*sp;pVel[i*3+2]=Math.sin(a)*sp*(.3+Math.random()*.7);pLife[i]=pMax[i]=life*(.6+Math.random()*.6);pGrav[i]=gr;pBase[i*3]=tmpC.r;pBase[i*3+1]=tmpC.g;pBase[i*3+2]=tmpC.b;}}
function updateParticles(dt){for(let i=0;i<P_MAX;i++){if(pLife[i]<=0)continue;pLife[i]-=dt;if(pLife[i]<=0){pPos[i*3+1]=-999;pCol[i*3]=pCol[i*3+1]=pCol[i*3+2]=0;continue;}pVel[i*3+1]-=pGrav[i]*dt;pPos[i*3]+=pVel[i*3]*dt;pPos[i*3+1]+=pVel[i*3+1]*dt;pPos[i*3+2]+=pVel[i*3+2]*dt;const f=pLife[i]/pMax[i];pCol[i*3]=pBase[i*3]*f;pCol[i*3+1]=pBase[i*3+1]*f;pCol[i*3+2]=pBase[i*3+2]*f;}pGeo.attributes.position.needsUpdate=true;pGeo.attributes.color.needsUpdate=true;}

/* ==================== ПОСТРОЙКИ ==================== */
function wallRect(W,x,z,hx,hz,h,mat,ry=0){put(W.group,G.box,mat,x,h/2,z,hx*2,h,hz*2,ry);W.rects.push({x,z,hx,hz});}
function crenel(W,list){inst(W.group,G.box,MAT.stone,list);}
function buildFortress(W,rnd){
 const g=W.group,H=20,WH=2.6,WT=.55;
 put(g,G.box,MAT.cobble,0,.04,0,40,.08,40,0,false).receiveShadow=true;
 wallRect(W,0,-H,H,WT,WH,MAT.stone);
 wallRect(W,H,0,WT,H,WH,MAT.stone);
 wallRect(W,-H,0,WT,H,WH,MAT.stone);
 wallRect(W,-11.6,H,8.4,WT,WH,MAT.stone);
 wallRect(W,11.6,H,8.4,WT,WH,MAT.stone);
 const cr=[];
 for(let x=-19;x<=19;x+=2.2){cr.push([x,WH+.32,-H,1.1,.64,1.1]);cr.push([H,WH+.32,x,1.1,.64,1.1]);cr.push([-H,WH+.32,x,1.1,.64,1.1]);}
 for(let x=-19;x<=-4;x+=2.2)cr.push([x,WH+.32,H,1.1,.64,1.1]);
 for(let x=4;x<=19;x+=2.2)cr.push([x,WH+.32,H,1.1,.64,1.1]);
 crenel(W,cr);
 [[-H,-H],[H,-H],[-H,H],[H,H]].forEach(([x,z])=>{
  put(g,G.cyl,MAT.stone,x,1.9,z,4.4,3.8,4.4);
  put(g,G.cone,MAT.roof,x,4.6,z,5.4,1.7,5.4);
  put(g,G.box,MAT.clothBlue,x,3.2,z+2.3,1.1,1.6,.06);
  W.colliders.push({x,z,r:2.3});
 });
 put(g,G.box,MAT.stone,-3.6,1.8,H,1.3,3.6,1.5);put(g,G.box,MAT.stone,3.6,1.8,H,1.3,3.6,1.5);
 put(g,G.box,MAT.stone,0,3.9,H,8.6,.9,1.6);
 put(g,G.box,MAT.darkwood,-2.2,1.5,H+.6,2.6,3,.25,.5);put(g,G.box,MAT.darkwood,2.2,1.5,H+.6,2.6,3,.25,-.5);
 W.colliders.push({x:-3.6,z:H,r:1},{x:3.6,z:H,r:1});
 put(g,G.box,MAT.stone,0,1.7,-12,9,3.4,6.5);W.rects.push({x:0,z:-12,hx:4.5,hz:3.25});
 put(g,G.pyr,MAT.roof,0,4.4,-12,10.5,2.2,8,Math.PI/4);
 put(g,G.box,MAT.clothBlue,0,3.2,-8.6,1.6,2.2,.06);
 put(g,G.box,MAT.darkwood,0,1.1,-8.7,1.8,2.2,.2);
 W.features.push({x:0,z:-7,r:3,label:'Донжон — управление крепостью',action:()=>openPanel('fort')});
 put(g,G.box,MAT.plank,-13,1.2,-4,6.5,2.4,4.5);W.rects.push({x:-13,z:-4,hx:3.25,hz:2.25});
 put(g,G.pyr,MAT.thatch,-13,3.1,-4,7.6,1.6,5.6,Math.PI/4);
 W.features.push({x:-13,z:-.5,r:2.6,label:'Казармы — отряд наёмников',action:()=>openPanel('bots')});
 put(g,G.box,MAT.plank,13,1.1,-4,6,2.2,4.5);W.rects.push({x:13,z:-4,hx:3,hz:2.25});
 put(g,G.pyr,MAT.thatch,13,2.9,-4,7,1.5,5.6,Math.PI/4);
 put(g,G.box,MAT.darkwood,10.5,.5,-.6,2.2,1,1.1);W.colliders.push({x:10.5,z:-.6,r:1.2});
 W.features.push({x:10.5,z:.9,r:2.6,label:'Верстак — крафт',action:()=>openPanel('craft')});
 put(g,G.box,MAT.plank,-9,.55,9,3.4,1.1,1.6);W.rects.push({x:-9,z:9,hx:1.7,hz:.8});
 [[-10.6,8.2],[-7.4,8.2],[-10.6,9.8],[-7.4,9.8]].forEach(([x,z])=>put(g,G.cyl,MAT.darkwood,x,1.6,z,.16,2.2,.16));
 put(g,G.box,MAT.clothBlue,-9,2.8,9,4,.16,2.4);
 const npc=new THREE.Group();put(npc,G.box,MAT.npc,0,1,0,.7,1.2,.5);put(npc,G.sph,M.skin,0,1.8,0,.6,.6,.6);npc.position.set(-9,0,7.6);g.add(npc);
 W.features.push({x:-9,z:7.4,r:2.8,label:'Торговец — торговля',action:()=>openPanel('trade')});
 put(g,G.cyl,MAT.stone,9,.5,9,2.2,1,2.2);put(g,G.cyl,MAT.darkwood,9,1.6,9,.16,2.2,.16);put(g,G.pyr,MAT.thatch,9,2.9,9,2.6,.9,2.6,Math.PI/4);W.colliders.push({x:9,z:9,r:1.2});
 const fire=put(g,G.cone,MAT.fire,0,.6,3,1,1.3,1,0,false);const fl=new THREE.PointLight(0xff9f43,2.2,12);fl.position.set(0,1.2,3);g.add(fl);
 for(let i=0;i<8;i++){const a=i/8*TAU;put(g,G.ico,MAT.rock,Math.cos(a)*1.1,.16,3+Math.sin(a)*1.1,.4,.3,.4);}
 W.colliders.push({x:0,z:3,r:.9});W.features.push({x:0,z:3,r:2.4,label:'Костёр — готовить еду',action:()=>openPanel('craft')});
 W.fires=[{mesh:fire,light:fl,x:0,z:3}];
 put(g,G.box,MAT.plank,14,.9,13,.5,1.8,.5);put(g,G.box,MAT.darkwood,14,1.5,13,1.6,.2,.2);W.colliders.push({x:14,z:13,r:.7});
 W.features.push({x:14,z:13,r:2.2,label:'Манекен — тренировка',action:()=>toast('ЛКМ — комбо ближнего боя, ПКМ — огнестрел')});
 for(let i=0;i<7;i++){const x=-17+rnd()*6,z=2+rnd()*10;put(g,G.box,MAT.darkwood,x,.4,z,.9,.8,.9,rnd()*TAU);W.colliders.push({x,z,r:.6});}
 for(let i=0;i<5;i++){const x=15+rnd()*3,z=-14+rnd()*6;put(g,G.cyl,MAT.plank,x,.45,z,.8,.9,.8);W.colliders.push({x,z,r:.5});}
 put(g,G.box,MAT.dirt,0,.05,26,7,.06,14,0,false);
}
function buildCamp(W,loc,leader,rnd){
 const g=W.group,C=loc.camp,R=C.r,style=C.style;
 const wallMat=style==='stone'||style==='ruin'?MAT.darkstone:style==='bone'?MAT.bone:MAT.darkwood;
 const roofMat=style==='stone'||style==='ruin'?MAT.darkstone:style==='bone'?MAT.bone:MAT.thatch;
 put(g,G.box,MAT.dirt,0,.04,0,R*2.1,.08,R*2.1,0,false).receiveShadow=true;
 const segs=18,gate=[8,9];
 for(let i=0;i<segs;i++){
  if(gate.includes(i))continue;
  const a=i/segs*TAU,x=Math.cos(a)*R,z=Math.sin(a)*R,len=2*R*Math.tan(Math.PI/segs)*1.12;
  const h=style==='ruin'?1.6:2.2;
  put(g,G.box,wallMat,x,h/2,z,len,h,.5,-a+Math.PI/2);
  W.colliders.push({x,z,r:len*.45});
  if(style==='wood'||style==='stilt'||style==='scaffold'){const sp=put(g,G.cone,wallMat,x,h+.25,z,.5,.6,.5);sp.rotation.y=-a;}
 }
 const gp=[[Math.cos(8/segs*TAU)*R,Math.sin(8/segs*TAU)*R],[Math.cos(9.6/segs*TAU)*R,Math.sin(9.6/segs*TAU)*R]];
 gp.forEach(([x,z])=>{put(g,G.cyl,wallMat,x,1.6,z,.7,3.2,.7);put(g,G.cone,roofMat,x,3.5,z,1.1,.9,1.1);W.colliders.push({x,z,r:.7});});
 for(let t=0;t<C.towers;t++){
  const a=-Math.PI/2+(t+1)/(C.towers+1)*TAU,x=Math.cos(a)*(R-1.5),z=Math.sin(a)*(R-1.5);
  if(style==='stone'||style==='ruin'){put(g,G.cyl,MAT.darkstone,x,2,z,3,4,3);put(g,G.cone,roofMat,x,4.7,z,3.6,1.4,3.6);}
  else{[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]].forEach(([dx,dz])=>put(g,G.cyl,MAT.darkwood,x+dx,1.5,z+dz,.24,3,.24));
   put(g,G.box,wallMat,x,3.1,z,2.4,.25,2.4);put(g,G.pyr,roofMat,x,4.1,z,3,1.1,3,Math.PI/4);}
  put(g,G.box,new THREE.MeshLambertMaterial({color:new THREE.Color(leader.color),map:TEX.cloth,side:THREE.DoubleSide}),x,3.6,z+1.3,.9,1.3,.05);
  W.colliders.push({x,z,r:1.5});
 }
 const hallW=style==='ruin'?7:6,hallD=5;
 put(g,G.box,style==='bone'?MAT.bone:style==='stone'||style==='ruin'?MAT.darkstone:MAT.plank,0,1.5,-R*.42,hallW,3,hallD);
 W.rects.push({x:0,z:-R*.42,hx:hallW/2,hz:hallD/2});
 put(g,G.pyr,roofMat,0,3.9,-R*.42,hallW*1.25,2,hallD*1.3,Math.PI/4);
 put(g,G.box,MAT.darkwood,0,1.1,-R*.42+hallD/2+.05,1.6,2.2,.16);
 put(g,G.cyl,MAT.darkwood,0,3.2,-R*.42+hallD/2+1.2,.16,6.4,.16);
 put(g,G.box,new THREE.MeshLambertMaterial({color:new THREE.Color(leader.color),map:TEX.cloth,side:THREE.DoubleSide}),.7,5.2,-R*.42+hallD/2+1.2,1.5,1.9,.05);
 W.features.push({x:0,z:-R*.42+hallD/2+1.6,r:3,label:C.hall+' — логово лидера',action:()=>toast('Зачистите гарнизон, чтобы захватить сектор')});
 for(let i=0;i<C.huts;i++){
  const a=Math.PI*.15+i/C.huts*Math.PI*1.7,r=R*.55,x=Math.cos(a)*r,z=Math.sin(a)*r;
  if(Math.abs(x)<3&&z<-2)continue;
  const lift=style==='stilt'?.9:0;
  if(lift)[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]].forEach(([dx,dz])=>put(g,G.cyl,MAT.darkwood,x+dx,.45,z+dz,.18,.9,.18));
  put(g,G.box,style==='bone'?MAT.bone:MAT.plank,x,1+lift,z,2.4,2,2.2,rnd()*TAU);
  put(g,G.pyr,roofMat,x,2.5+lift,z,3.2,1.3,3,Math.PI/4);
  W.colliders.push({x,z,r:1.4});
 }
 W.fires=[];
 [[-R*.4,R*.35],[R*.4,R*.35]].forEach(([x,z])=>{
  const f=put(g,G.cone,MAT.fire,x,.5,z,.9,1.2,.9,0,false);const l=new THREE.PointLight(0xff9f43,1.8,10);l.position.set(x,1,z);g.add(l);
  for(let i=0;i<6;i++){const a=i/6*TAU;put(g,G.ico,MAT.rock,x+Math.cos(a)*.85,.14,z+Math.sin(a)*.85,.35,.26,.35);}
  W.fires.push({mesh:f,light:l,x,z});W.colliders.push({x,z,r:.8});
 });
 for(let i=0;i<8;i++){const a=rnd()*TAU,r=R*.3+rnd()*R*.5,x=Math.cos(a)*r,z=Math.sin(a)*r;
  if(style==='bone'){put(g,G.box,MAT.bone,x,.5,z,.7,1,.25,rnd()*TAU);put(g,G.sph,MAT.bone,x,1.1,z,.4,.4,.4);}
  else if(style==='ruin'){put(g,G.cyl,MAT.darkstone,x,.9,z,.8,1.8,.8);put(g,G.box,MAT.darkstone,x,1.9,z,1.1,.3,1.1,rnd());}
  else if(style==='scaffold'){put(g,G.box,MAT.darkwood,x,.45,z,1.1,.9,.9,rnd()*TAU);put(g,G.cyl,MAT.metal,x,.9,z,.5,.3,.5);}
  else if(style==='stone'){put(g,G.box,MAT.darkstone,x,.5,z,1.2,1,1.2,rnd()*TAU);}
  else{put(g,G.box,MAT.darkwood,x,.4,z,.9,.8,.9,rnd()*TAU);}
  W.colliders.push({x,z,r:.6});}
 put(g,G.box,MAT.dirt,0,.05,R+9,6,.06,20,0,false);
}
function buildOutpost(W,x,z,rnd,leader){
 const g=W.group,r=7;
 for(let i=0;i<10;i++){if(i===4||i===5)continue;const a=i/10*TAU,px=x+Math.cos(a)*r,pz=z+Math.sin(a)*r,len=2*r*Math.tan(Math.PI/10)*1.15;
  put(g,G.box,MAT.darkwood,px,.9,pz,len,1.8,.4,-a+Math.PI/2);W.colliders.push({x:px,z:pz,r:len*.45});}
 for(let i=0;i<3;i++){const a=rnd()*TAU,rr=rnd()*3.5,px=x+Math.cos(a)*rr,pz=z+Math.sin(a)*rr;
  put(g,G.box,MAT.plank,px,.85,pz,2,1.7,1.8,rnd()*TAU);put(g,G.pyr,MAT.thatch,px,2.1,pz,2.7,1.1,2.5,Math.PI/4);W.colliders.push({x:px,z:pz,r:1.2});}
 const f=put(g,G.cone,MAT.fire,x,.45,z,.8,1,.8,0,false);const l=new THREE.PointLight(0xff9f43,1.4,8);l.position.set(x,.9,z);g.add(l);W.fires.push({mesh:f,light:l,x,z});
 put(g,G.cyl,MAT.darkwood,x+2.5,2.2,z-2.5,.14,4.4,.14);
 put(g,G.box,new THREE.MeshLambertMaterial({color:new THREE.Color(leader.color),map:TEX.cloth,side:THREE.DoubleSide}),x+3.1,3.4,z-2.5,1.1,1.4,.05);
}

/* ==================== ВРАГИ / СОЮЗНИКИ ==================== */
function buildEnemyModel(def){
 const g=new THREE.Group(),parts={legs:[],arms:[],float:false},flash=[];
 const C=new THREE.Color(def.color),body=new THREE.MeshLambertMaterial({color:C,map:TEX.skin,emissive:C,emissiveIntensity:.1});flash.push(body);
 const dark=new THREE.MeshLambertMaterial({color:C.clone().multiplyScalar(.5),map:TEX.skin}),white=new THREE.MeshLambertMaterial({color:0xffffff}),s=def.size;
 const add=(geo,mat,x,y,z,sx=1,sy=1,sz=1)=>put(g,geo,mat,x*s,y*s,z*s,sx*s,sy*s,sz*s);
 const leg=(x,z)=>{const p=new THREE.Group();p.position.set(x*s,.4*s,z*s);put(p,G.box,dark,0,-.2,0,.14,.4,.14);g.add(p);parts.legs.push(p);};
 const arm=x=>{const p=new THREE.Group();p.position.set(x*s,1.2*s,0);put(p,G.box,body,0,-.35,0,.2,.7,.2);g.add(p);parts.arms.push(p);};
 if(def.kind==='spider'){add(G.sph,body,0,.5,0,1.2,.8,1.2);add(G.sph,dark,0,.5,.35,.6,.6,.6);for(let i=0;i<4;i++)add(G.sph,white,(i-1.5)*.12,.62,.55,.14,.14,.14);
  for(let i=0;i<8;i++){const sd=i<4?-1:1,k=i%4,p=new THREE.Group();p.position.set(sd*.3*s,.5*s,(k-1.5)*.2*s);const l=put(p,G.box,dark,sd*.28,0,0,.55,.06,.06);l.rotation.z=sd*(.4+k*.12);g.add(p);parts.legs.push(p);}}
 else if(def.kind==='wolf'){add(G.box,body,0,.7,0,1.1,.5,.5);add(G.sph,body,0,.9,.55,.6,.6,.6);add(G.box,dark,0,.82,.85,.22,.16,.28);add(G.cone,dark,-.14,1.1,.55,.18,.22,.18);add(G.cone,dark,.14,1.1,.55,.18,.22,.18);add(G.sph,white,-.12,.95,.78,.1,.1,.1);add(G.sph,white,.12,.95,.78,.1,.1,.1);leg(-.38,.2);leg(.38,.2);leg(-.38,-.2);leg(.38,-.2);}
 else if(def.kind==='golem'){add(G.box,body,0,1.3,0,1.1,1.2,.8);add(G.sph,dark,0,2.2,0,.7,.7,.7);add(G.sph,white,-.15,2.25,.3,.14,.14,.14);add(G.sph,white,.15,2.25,.3,.14,.14,.14);arm(-.85);arm(.85);leg(-.3,0);leg(.3,0);}
 else if(def.kind==='wraith'){parts.float=true;add(G.sph,body,0,1.1,0,1,1.5,1);add(G.sph,white,-.15,1.3,.4,.16,.16,.16);add(G.sph,white,.15,1.3,.4,.16,.16,.16);for(let i=0;i<4;i++){const t=add(G.cone,dark,(i-1.5)*.2,.4,0,.14,.7,.14);t.rotation.x=Math.PI;parts.legs.push(t);}g.add(glowSprite(def.color,2.2*s,.3));}
 else if(def.kind==='spitter'){add(G.sph,body,0,.7,0,1.1,.9,1.1);add(G.sph,dark,0,.9,.3,.6,.6,.6);add(G.sph,white,-.15,1.05,.45,.14,.14,.14);add(G.sph,white,.15,1.05,.45,.14,.14,.14);leg(-.25,0);leg(.25,0);}
 else if(def.kind==='brute'){add(G.sph,body,0,.9,0,1.4,1.4,1.2);add(G.sph,dark,0,1.6,.1,1.3,1.3,1.3);add(G.sph,white,-.15,1.65,.4,.18,.18,.18);add(G.sph,white,.15,1.65,.4,.18,.18,.18);arm(-.75);arm(.75);leg(-.3,0);leg(.3,0);}
 else{add(G.sph,body,0,.7,0,1.1,.95,1.1);add(G.sph,white,-.16,.85,.42,.18,.18,.18);add(G.sph,white,.16,.85,.42,.18,.18,.18);add(G.cone,dark,-.2,1.15,0,.16,.25,.16);add(G.cone,dark,.2,1.15,0,.16,.25,.16);leg(-.22,0);leg(.22,0);}
 return{group:g,parts,flash};
}
function makeHpBar(){const c=document.createElement('canvas');c.width=64;c.height=8;const x=c.getContext('2d'),t=new THREE.CanvasTexture(c);const s=new THREE.Sprite(new THREE.SpriteMaterial({map:t,transparent:true,depthTest:false}));s.scale.set(1.5,.19,1);return{spr:s,ctx:x,tex:t};}
function updateHpBar(e){const b=e.hpBar;if(!b)return;b.ctx.clearRect(0,0,64,8);b.ctx.fillStyle='rgba(0,0,0,.65)';b.ctx.fillRect(0,0,64,8);b.ctx.fillStyle=e.raid?'#ff9f43':e.ally?'#4de3c1':'#ff5a5f';b.ctx.fillRect(1,1,62*clamp(e.hp/e.maxHp,0,1),6);b.tex.needsUpdate=true;}
function buildAllyModel(bot){const g=new THREE.Group(),c=bot.type==='archer'?0x4de3c1:bot.type==='guard'?0x6fc3ff:0x7ee081;
 const mat=new THREE.MeshLambertMaterial({color:c,map:TEX.cloth}),dark=new THREE.MeshLambertMaterial({color:0x2a3a4a,map:TEX.cloth});
 put(g,G.box,mat,0,1,0,.6,.8,.4);put(g,G.sph,M.skin,0,1.7,0,.6,.6,.6);put(g,G.sph,MAT.metal,0,1.82,0,.66,.42,.66);
 const lL=put(g,G.box,dark,-.15,.25,0,.16,.5,.16),lR=put(g,G.box,dark,.15,.25,0,.16,.5,.16);
 const w=put(g,G.box,MAT.metal,.35,1.1,.2,.08,.6,.08);w.rotation.x=-.6;g.userData={legL:lL,legR:lR};return g;}
function syncAllies(){if(!world)return;for(const a of world.allies){a.group.parent?.remove(a.group);disposeTree(a.group);}world.allies.length=0;
 S.strat.bots.forEach(bot=>{if(bot.mode!=='follow'||bot.hp<=0)return;const g=buildAllyModel(bot),a=Math.random()*TAU,r=2+Math.random()*2,x=player.x+Math.cos(a)*r,z=player.z+Math.sin(a)*r;
  g.position.set(x,0,z);world.group.add(g);const hb=makeHpBar();hb.spr.position.set(0,2.3,0);g.add(hb.spr);
  const al={bot,group:g,x,z,hp:bot.hp,maxHp:D.botTypes[bot.type].hp,cd:0,hpBar:hb,movePhase:0,ally:true};updateHpBar(al);world.allies.push(al);});}

/* ==================== ЛУТ / ПУЛИ / ЭФФЕКТЫ ==================== */
function spawnDrop(id,x,y,z,n,src,delay=0){if(!item(id)||n<=0)return;
 const m=world.drops.find(d=>!d.collected&&d.item===id&&d.source===src&&Math.hypot(d.x-x,d.z-z)<3.5);
 if(m){m.n+=n;m.pickupDelay=Math.max(m.pickupDelay||0,delay);return;}
 if(world.drops.length>=MAX_DROPS){const o=world.drops[0];if(o&&collectDrop(o)){world.group.remove(o.group);disposeTree(o.group);world.drops.shift();}else{const a=world.drops.find(d=>!d.collected&&d.item===id);if(a){a.n+=n;return;}}}
 const it=item(id),c=new THREE.Color(rarityColor(id)),g=new THREE.Group();
 const me=put(g,G.oct,new THREE.MeshLambertMaterial({color:c,emissive:c,emissiveIntensity:.9}),0,0,0,.36*(1+RAR[it.rarity].order*.12),.36,.36);
 const gl=glowSprite(c,1.1+RAR[it.rarity].order*.2,.5);g.add(gl);g.position.set(x,y,z);world.group.add(g);
 const a=Math.random()*TAU,s=1.5+Math.random()*2;
 world.drops.push({item:id,n,source:src,x,y,z,vx:Math.cos(a)*s,vy:3+Math.random()*2,vz:Math.sin(a)*s,group:g,t:0,mesh:me,glow:gl,collected:false,pickupDelay:delay,blocked:false});}
function collectDrop(d){if(!d||d.collected)return false;if(!canPickup(d.item,d.n)){fullNotice();d.blocked=true;return false;}d.collected=true;addItem(d.item,d.n);
 if(d.source==='gather'){ensureCounters();S.counters.gather[d.item]=(S.counters.gather[d.item]||0)+d.n;}
 Sfx.pickup();lootFeed(item(d.item).icon+' +'+d.n+' '+item(d.item).name,rarityColor(d.item));burst(d.x,d.y,d.z,rarityColor(d.item),8,2,2,.5);checkTutorial();return true;}
function removeDrop(i){const d=world.drops[i];world.group.remove(d.group);disposeTree(d.group);world.drops.splice(i,1);}
function updateDrops(dt){for(let i=world.drops.length-1;i>=0;i--){const d=world.drops[i];if(!d||d.collected){removeDrop(i);continue;}
 d.t+=dt;d.pickupDelay=Math.max(0,(d.pickupDelay||0)-dt);
 if(d.t<.5){d.vy-=12*dt;d.x+=d.vx*dt;d.y+=d.vy*dt;d.z+=d.vz*dt;if(d.y<.25){d.y=.25;d.vy*=-.35;d.vx*=.7;d.vz*=.7;}}
 else{const dx=player.x-d.x,dz=player.z-d.z,di=Math.hypot(dx,dz)||1,sp=canPickup(d.item,d.n);d.blocked=!sp;
  if(sp&&d.pickupDelay<=0){const p=Math.min(di,(6+d.t*4)*dt);d.x+=dx/di*p;d.z+=dz/di*p;d.y+=(1-d.y)*Math.min(1,dt*6);if(di<.7&&collectDrop(d)){removeDrop(i);continue;}}
  else d.y+=(.3-d.y)*Math.min(1,dt*4);}
 d.group.position.set(d.x,d.y+Math.sin(d.t*6)*.06,d.z);d.group.scale.setScalar(d.blocked?1+Math.sin(d.t*8)*.12:1);
 d.glow.material.color.set(d.blocked?0xff5a5f:rarityColor(d.item));d.mesh.rotation.y+=dt*3;d.mesh.rotation.x+=dt*2;}}
function dropItem(id,n=1){if(count(id)<n)return;takeItem(id,n);spawnDrop(id,player.x+Math.sin(player.facing)*1.3,.8,player.z+Math.cos(player.facing)*1.3,n,'dropped',1.4);toast('Выброшено: '+item(id).name);uiDirty=true;save();}
const bullets=[];
function spawnBullet(x,z,a,gun,fp){if(bullets.length>=MAX_BULLETS)return;const m=new THREE.Mesh(fp?G.sph:G.sph,fp?MAT.bulletP:MAT.bulletE);m.scale.setScalar(fp?.18:.24);m.position.set(x,1.2,z);world.group.add(m);
 bullets.push({mesh:m,x,z,vx:Math.sin(a)*gun.speed,vz:Math.cos(a)*gun.speed,dmg:gun.dmg,pierce:gun.pierce||0,life:1.4,fromPlayer:fp,r:fp?.28:.35});}
function fireGun(){const g=currentGun();if(!g||fireCd>0)return;if(count('ammo')<g.ammoCost){Sfx.dry();toast('Нет патронов!');fireCd=.4;return;}
 takeItem('ammo',g.ammoCost);fireCd=1/g.rate;player.recoilT=.18;
 const mx=player.x+Math.sin(player.facing)*1.1,mz=player.z+Math.cos(player.facing)*1.1;
 for(let i=0;i<g.pellets;i++)spawnBullet(mx,mz,player.facing+(Math.random()-.5)*g.spread*2,g,true);
 muzzle.material.opacity=1;muzzle.material.color.set(g.color);burst(mx,1.2,mz,g.color,8,3,0,.18);burst(mx,1.2,mz,0xaaaaaa,4,1.5,-1,.5);
 const sd=player.facing+Math.PI/2;burst(player.x+Math.sin(sd)*.5,1.3,player.z+Math.cos(sd)*.5,0xd9a441,3,2,4,.5);
 shake=Math.max(shake,g.pellets>1?.22:.12);g.pellets>1?Sfx.shotgun():Sfx.shoot();}
function updateBullets(dt){for(let i=bullets.length-1;i>=0;i--){const b=bullets[i];b.life-=dt;b.x+=b.vx*dt;b.z+=b.vz*dt;b.mesh.position.set(b.x,1.2,b.z);
 let dead=b.life<=0||Math.hypot(b.x,b.z)>150;
 if(b.fromPlayer){for(const e of world.enemies){if(!e.alive)continue;if(Math.hypot(e.x-b.x,e.z-b.z)<e.def.size*.5+b.r){damageEnemy(e,b.dmg,true);if(--b.pierce<0){dead=true;break;}}}}
 else{if(Math.hypot(player.x-b.x,player.z-b.z)<.6){hurtPlayer(b.dmg,'Плевок');dead=true;}if(!dead)for(const a of world.allies)if(Math.hypot(a.x-b.x,a.z-b.z)<.6){damageAlly(a,b.dmg);dead=true;break;}}
 if(dead){world.group.remove(b.mesh);bullets.splice(i,1);}}}
const floatCache=new Map(),floaters=[];
function floatTex(t,c){const k=t+'|'+c;let x=floatCache.get(k);if(x)return x;const cv=document.createElement('canvas');cv.width=128;cv.height=48;const g=cv.getContext('2d');g.font='bold 30px Rubik, sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillStyle='rgba(0,0,0,.6)';g.fillText(t,65,26);g.fillStyle=c;g.fillText(t,64,24);x=new THREE.CanvasTexture(cv);x.colorSpace=THREE.SRGBColorSpace;floatCache.set(k,x);SHARED_TEX.add(x);
 if(floatCache.size>80){const kk=floatCache.keys().next().value,o=floatCache.get(kk);floatCache.delete(kk);SHARED_TEX.delete(o);o.dispose();}return x;}
function spawnFloatText(t,c,x,y,z){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:floatTex(String(t),c),transparent:true,depthTest:false}));s.scale.set(1.6,.6,1);s.position.set(x,y,z);world.group.add(s);floaters.push({spr:s,t:0,dur:.75});}
function updateFloaters(dt){for(let i=floaters.length-1;i>=0;i--){const f=floaters[i];f.t+=dt;f.spr.position.y+=dt*1.4;f.spr.material.opacity=1-f.t/f.dur;if(f.t>=f.dur){world.group.remove(f.spr);f.spr.material.dispose();floaters.splice(i,1);}}}
function updateEffects(dt){for(let i=world.effects.length-1;i>=0;i--){const e=world.effects[i];e.t+=dt;const p=e.t/e.dur;e.mesh.material.opacity=.8*(1-p);e.mesh.scale.setScalar(e.base*(1+p*1.2));if(e.t>=e.dur){world.group.remove(e.mesh);e.mesh.material.dispose();world.effects.splice(i,1);}}}

/* ==================== ДОБЫЧА ==================== */
function makeStump(type){const g=new THREE.Group();
 if(type==='tree')put(g,G.cyl,MAT.trunk,0,.17,0,.5,.35,.5);
 else if(type==='bush')for(let i=0;i<3;i++){const t=put(g,G.cone,MAT.trunk,(i-1)*.2,.2,0,.1,.4,.1);t.rotation.z=(i-1)*.4;}
 else for(let i=0;i<3;i++)put(g,G.ico,MAT.stump,(i-1)*.2,.1,(i%2)*.2-.1,.36,.3,.36);
 const r=new THREE.Mesh(G.ring,MAT.regrow);r.rotation.x=-Math.PI/2;r.position.y=.02;r.scale.setScalar(1.3);g.add(r);return g;}
const TOOL_RU={axe:'топор',pick:'кирка',sickle:'серп'};
const toolReq=n=>!n.def.tool||n.def.minPower<=0?null:{type:n.def.tool,power:n.def.minPower};
function canGather(n){if(!n?.active||n.harvestLock)return{ok:false,reason:'Уже добыто'};if(player.gatherT>0)return{ok:false,reason:'Действие выполняется'};
 const st=stats(),r=toolReq(n);if(r){if(st.gatherType!==r.type)return{ok:false,reason:'Нужен '+TOOL_RU[r.type]};if(st.gatherPower<r.power)return{ok:false,reason:TOOL_RU[r.type]+' слаб (сила '+r.power+')'};}return{ok:true};}
function computeYield(n){const st=stats(),d=n.def;let b=rndInt(d.base.min,d.base.max);if(d.tool&&st.gatherType===d.tool)b+=Math.max(0,st.gatherPower-1);b=clamp(b,1,MAX_YIELD);
 const o=[{item:d.base.item,n:b}],m=1+st.luck*.01;(d.bonus||[]).forEach(x=>{if(Math.random()<Math.min(.95,x.chance*m))o.push({item:x.item,n:1});});return o;}
function harvestAllowed(){const n=performance.now();harvestTimes=harvestTimes.filter(t=>n-t<1000);if(harvestTimes.length>=4)return false;harvestTimes.push(n);return true;}
function harvestNode(n){if(!n?.active||n.harvestLock||n!==player.gatherTarget||!harvestAllowed())return;
 n.harvestLock=true;n.active=false;n.group.visible=false;n.stump.visible=true;n.collider.disabled=true;n.respawn=35+Math.random()*25;
 computeYield(n).forEach(d=>spawnDrop(d.item,n.x,.8,n.z,d.n,'gather'));
 n.def.tool==='axe'||n.type==='tree'?Sfx.chop():n.def.tool==='pick'?Sfx.mine():Sfx.cut();
 addXP(4+(n.def.minPower||0)*3);burst(n.x,.8,n.z,0xffd166,12,2.5,3,.7);}
function tryStartGather(n){const c=canGather(n);if(!c.ok){if(c.reason!=='Действие выполняется')toast(c.reason);Sfx.deny();return;}
 player.gatherT=GATHER_DUR;player.gatherTarget=n;player.gatherDone=false;player.facing=Math.atan2(n.x-player.x,n.z-player.z);Sfx.interact();}
function updateGatherAction(dt){if(player.gatherT<=0)return;player.gatherT=Math.max(0,player.gatherT-dt);
 const p=1-player.gatherT/GATHER_DUR,n=player.gatherTarget;if(!n?.active){cancelGather();return;}
 const nm={tree:'Рубим дерево',rock:'Добываем камень',bush:'Собираем',ore:'Добываем руду',crystal:'Добываем кристалл',coal:'Добываем уголь'};
 showGatherProgress(nm[n.type]||'Добываем',p);
 if(!player.gatherDone&&p>=.5){player.gatherDone=true;harvestNode(n);}
 if(player.gatherT<=0){player.gatherTarget=null;player.gatherDone=false;hideGatherProgress();}}

/* ==================== ЛОКАЦИЯ ==================== */
function clearWorld(){if(!world)return;disposeTree(world.group);bullets.length=0;floaters.length=0;}
function buildLocation(id){
 const loc=D.locations[id],rnd=mulberry32(id.length*997+13);
 if(world){clearWorld();scene.remove(world.group);}
 const group=new THREE.Group();scene.add(group);
 const W={group,nodes:[],enemies:[],allies:[],features:[],hazards:[],drops:[],colliders:[],rects:[],effects:[],fires:[],loc,grass:null,flowers:null};
 const geo=new THREE.PlaneGeometry(320,320,56,56),pos=geo.attributes.position,cols=[];
 const cA=new THREE.Color(loc.ground[0]),cB=new THREE.Color(loc.ground[1]),tc=new THREE.Color();
 for(let i=0;i<pos.count;i++){const x=pos.getX(i),y=pos.getY(i),n=(Math.sin(x*.11)*Math.cos(y*.09)+1)/2;tc.copy(cA).lerp(cB,n);cols.push(tc.r,tc.g,tc.b);}
 geo.setAttribute('color',new THREE.Float32BufferAttribute(cols,3));
 const gr=new THREE.Mesh(geo,new THREE.MeshLambertMaterial({vertexColors:true,map:TEX.grass,bumpMap:TEX.bump,bumpScale:.05}));gr.rotation.x=-Math.PI/2;gr.receiveShadow=true;group.add(gr);
 function addNode(type,x,z,def){
  const g=new THREE.Group();let r=.6;
  if(type==='tree'){put(g,G.cyl,MAT.trunk,0,.8,0,.5,1.6,.5);for(let i=0;i<3;i++){const a=i/3*TAU;put(g,G.sph,i%2?MAT.leaf2:MAT.leaf,Math.cos(a)*.5,2+i*.35,Math.sin(a)*.5,2*(.9-i*.12),1.7*(.9-i*.12),2*(.9-i*.12));}r=.7;}
  else if(type==='rock'||type==='ore'){put(g,type==='ore'?G.ico:G.ico,type==='ore'?MAT.ore:MAT.rock,0,.5,0,1.9,1.3,1.9,rnd()*TAU);if(type==='ore')put(g,G.oct,MAT.crystal,0,1,0,.5,.7,.5,.5);r=.85;}
  else if(type==='coal'){put(g,G.ico,MAT.coal,0,.45,0,1.7,1.1,1.7,rnd()*TAU);for(let i=0;i<3;i++)put(g,G.oct,MAT.coalShard,(rnd()-.5)*.8,.65,(rnd()-.5)*.8,.3,.4,.3);r=.75;}
  else if(type==='bush'){for(let i=0;i<3;i++)put(g,G.sph,MAT.bush,(i-1)*.4,.4,0,1.4*(.5+i*.1),1.2*(.5+i*.1),1.4*(.5+i*.1));r=.55;}
  else if(type==='crystal'){put(g,G.oct,MAT.crystal,0,.85,0,.9,1.7,.9);g.add(glowSprite(0x4de3c1,2,.4));r=.55;}
  g.position.set(x,0,z);group.add(g);
  const col={x,z,r,disabled:false};W.colliders.push(col);
  const st=makeStump(type);st.position.set(x,0,z);st.visible=false;group.add(st);
  W.nodes.push({type,x,z,def,group:g,stump,collider:col,active:true,harvestLock:false,respawn:0});
 }
 const inCamp=(x,z)=>id!=='fortress'&&loc.camp&&Math.hypot(x,z)<loc.camp.r+4;
 const inFort=(x,z)=>id==='fortress'&&Math.abs(x)<24&&Math.abs(z)<24;
 function place(type,def,x,z){if(inCamp(x,z)||inFort(x,z))return;addNode(type,x,z,def);}
 (loc.zones||[]).forEach(zn=>{
  put(group,G.box,MAT.dirt,zn.x,.045,zn.z,zn.r*1.5,.06,zn.r*1.5,rnd()*TAU,false);
  zn.nodes.forEach(([type,n])=>{const def=loc.nodeDefs[type];if(!def)return;
   for(let i=0;i<n;i++){const a=rnd()*TAU,r=Math.sqrt(rnd())*zn.r;place(type,def,zn.x+Math.cos(a)*r,zn.z+Math.sin(a)*r);}});
 });
 (loc.scatter||[]).forEach(([type,n])=>{const def=loc.nodeDefs[type];if(!def)return;
  for(let i=0;i<n;i++){const a=rnd()*TAU,r=26+rnd()*70;place(type,def,Math.cos(a)*r,Math.sin(a)*r);}});
 if(id==='fortress'){
  buildFortress(W,rnd);
  (loc.garden||[]).forEach(([type,x,z])=>{const def=loc.nodeDefs[type];if(def)addNode(type,x,z,def);});
 } else {
  const leader=D.leaders[S.strat.owners[id]]||D.leaders[id];
  buildCamp(W,loc,leader,rnd);
  buildOutpost(W,-52,32,rnd,leader);buildOutpost(W,50,-30,rnd,leader);
  const pop=S.strat.pops[id]||0,types=loc.enemyTypes||['grunt'];
  for(let i=0;i<pop;i++){const a=rnd()*TAU,r=4+rnd()*(loc.camp.r+8);spawnEnemy(types[i%types.length],Math.cos(a)*r,Math.sin(a)*r,W,rnd,false);}
  for(let i=0;i<Math.min(4,Math.ceil(pop/3));i++){const a=rnd()*TAU;spawnEnemy(types[i%types.length],-52+Math.cos(a)*5,32+Math.sin(a)*5,W,rnd,false);}
 }
 if(loc.hazard==='poison')for(let i=0;i<12;i++){const a=rnd()*TAU,r=26+rnd()*66,x=Math.cos(a)*r,z=Math.sin(a)*r,rr=2.5+rnd()*3.5;
  const m=new THREE.Mesh(G.plane,new THREE.MeshBasicMaterial({color:0x5aff6a,transparent:true,opacity:.2,side:THREE.DoubleSide}));m.rotation.x=-Math.PI/2;m.scale.set(rr*2,rr*2,1);m.position.set(x,.05,z);group.add(m);W.hazards.push({x,z,r:rr});}
 const mm=new THREE.MeshLambertMaterial({color:new THREE.Color(loc.ground[0]).multiplyScalar(.5),map:TEX.rock});
 for(let i=0;i<54;i++){const a=i/54*TAU+rnd()*.1,r=124+rnd()*10,x=Math.cos(a)*r,z=Math.sin(a)*r,s=6+rnd()*7;
  put(group,G.cone,mm,x,s*.55,z,s*1.7,s*1.5,s*1.7,rnd()*TAU,false);W.colliders.push({x,z,r:s*.8});}
 const grass=new THREE.InstancedMesh(G.grass,MAT.grass,QUAL.high.grass),flowers=new THREE.InstancedMesh(G.flower,MAT.flower,QUAL.high.flowers);
 const mtx=new THREE.Matrix4(),q=new THREE.Quaternion(),sc=new THREE.Vector3(),p=new THREE.Vector3(),cc=new THREE.Color();
 for(let i=0;i<QUAL.high.grass;i++){const a=rnd()*TAU,r=Math.sqrt(rnd())*112,x=Math.cos(a)*r,z=Math.sin(a)*r;
  if(inFort(x,z)||inCamp(x,z)){p.set(0,-99,0);}else p.set(x,.17,z);
  q.setFromEuler(new THREE.Euler((rnd()-.5)*.3,rnd()*6,(rnd()-.5)*.3));sc.setScalar(.7+rnd());mtx.compose(p,q,sc);grass.setMatrixAt(i,mtx);grass.setColorAt(i,cc.setHSL(.3+rnd()*.06,.55,.35+rnd()*.12));}
 const fc=[0xffd166,0xff7eb6,0xb48cff,0x6fc3ff,0xffffff];
 for(let i=0;i<QUAL.high.flowers;i++){const a=rnd()*TAU,r=Math.sqrt(rnd())*108,x=Math.cos(a)*r,z=Math.sin(a)*r;
  if(inFort(x,z)||inCamp(x,z))p.set(0,-99,0);else p.set(x,.25,z);
  sc.setScalar(.7+rnd()*.8);mtx.compose(p,q,sc);flowers.setMatrixAt(i,mtx);flowers.setColorAt(i,cc.set(fc[Math.floor(rnd()*fc.length)]));}
 grass.instanceMatrix.needsUpdate=true;flowers.instanceMatrix.needsUpdate=true;
 if(grass.instanceColor)grass.instanceColor.needsUpdate=true;if(flowers.instanceColor)flowers.instanceColor.needsUpdate=true;
 grass.count=QUAL[quality].grass;flowers.count=QUAL[quality].flowers;group.add(grass,flowers);W.grass=grass;W.flowers=flowers;
 paintSky();
 return W;
}
function spawnEnemy(type,x,z,W,rnd,raid){const def=D.enemies[type];if(!def||W.enemies.length>=QUAL[quality].enemies)return;
 const m=buildEnemyModel(def),g=m.group,hb=makeHpBar();hb.spr.position.set(0,def.size*1.7+.7,0);hb.spr.visible=false;g.add(hb.spr);
 g.position.set(x,0,z);W.group.add(g);
 W.enemies.push({type,def,group:g,parts:m.parts,flashMats:m.flash,hpBar:hb,x,z,hp:def.hp,maxHp:def.hp,cd:0,shootCd:1+Math.random(),phase:rnd()*TAU,alive:true,flash:0,movePhase:0,raid:!!raid});}

/* ==================== БОЙ ==================== */
function damageEnemy(e,dmg,gun){if(!e?.alive)return;e.hp-=dmg;e.flash=.14;
 const dx=e.x-player.x,dz=e.z-player.z,d=Math.hypot(dx,dz)||1;e.x+=dx/d*(gun?.4:.6);e.z+=dz/d*(gun?.4:.6);
 updateHpBar(e);spawnFloatText(dmg,gun?'#ffd166':'#ff9f43',e.x,2,e.z);burst(e.x,1,e.z,0xff5a5f,gun?12:8,3,4,.5);Sfx.hit();
 if(e.hp<=0){e.alive=false;const st=stats();
  e.def.loot.forEach(l=>{if(Math.random()<l.chance*(1+st.luck*.01))spawnDrop(l.item,e.x,.8,e.z,1,'loot');});
  const c=rndInt(e.def.coins[0],e.def.coins[1]);S.coins+=c;addXP(e.def.xp);multT=3;scoreMult=Math.min(8,scoreMult+(scoreMult<2?.5:.25));
  const pts=Math.round(100*scoreMult);S.score+=pts;lootFeed('☠️ '+e.def.name+' · +'+pts,'#ffd166');burst(e.x,1,e.z,e.def.color,24,4,3,1);Sfx.kill();
  if(e.raid){S.strat.raidLeft=Math.max(0,S.strat.raidLeft-1);if(S.strat.raidLeft<=0)endRaid(true);}
  else if(S.location!=='fortress'){S.strat.pops[S.location]=Math.max(0,(S.strat.pops[S.location]||0)-1);
   if(S.strat.pops[S.location]<=0){S.strat.owners[S.location]='player';S.counters.clears++;toast('✅ Гарнизон разбит — сектор ваш!');logWar('🚩 Вы захватили '+D.locations[S.location].name,'#7ee081');checkTutorial();}}
  removeEnemy(e);uiDirty=true;}}
function removeEnemy(e){if(!e)return;e.alive=false;e.group.parent?.remove(e.group);disposeTree(e.group);const i=world.enemies.indexOf(e);if(i>=0)world.enemies.splice(i,1);}
function damageAlly(a,d){if(!a||a.hp<=0)return;a.hp-=d;a.bot.hp=a.hp;updateHpBar(a);burst(a.x,1,a.z,0x4de3c1,8,2,3,.5);
 if(a.hp<=0){a.bot.mode='idle';a.bot.hp=1;toast('🤖 '+D.botTypes[a.bot.type].name+' ранен, отступил.');a.group.parent?.remove(a.group);disposeTree(a.group);const i=world.allies.indexOf(a);if(i>=0)world.allies.splice(i,1);uiDirty=true;}}
function hurtPlayer(d,cause){if(player.invuln>0||state!=='playing')return;const st=stats(),r=Math.max(1,Math.round(d-st.def*.45));
 S.hp-=r;player.invuln=.7;Sfx.hurt();shake=Math.max(shake,.3);spawnFloatText('−'+r,'#ff5a5f',player.x,2.4,player.z);burst(player.x,1.4,player.z,0xff5a5f,14,3,4,.7);if(S.hp<=0)die(cause);}
function die(c){S.hp=0;state='dead';Sfx.death();const l=Math.floor(S.coins*.15);S.coins-=l;$('deathText').textContent='Причина: '+c+'. Потеряно '+l+' монет.';openPanel('death');}
function respawn(){S.location='fortress';S.hp=stats().maxHp;S.stamina=stats().maxStamina;S.poison=0;resetPlayerPos();world=buildLocation('fortress');syncAllies();applyQuality();state='playing';closePanel();toast('Вы вернулись в крепость.');}
function resetPlayerPos(){const sp=D.locations[S.location].spawn||[0,10];player.x=sp[0];player.z=sp[1];player.y=0;player.vx=player.vz=player.vy=0;player.facing=Math.PI;hero.position.set(player.x,0,player.z);}
function hideTransition(){clearTimeout(travelWatchdog);travelWatchdog=null;$('transition').classList.remove('show');}
function travel(id){if(id===S.location)return;const prev=S.location;
 $('transitionText').textContent=D.locations[id].name;$('transition').classList.add('show');Sfx.travel();
 clearTimeout(travelWatchdog);travelWatchdog=setTimeout(()=>{$('transition').classList.remove('show');toast('Переход занял слишком много времени.');},6000);
 setTimeout(()=>{try{S.location=id;S.visited[id]=true;cancelGather();scoreMult=1;multT=0;
  world=buildLocation(id);resetPlayerPos();syncAllies();applyQuality();checkTutorial();uiDirty=true;save();
  const l=D.locations[id];showLocBanner(l.name,id==='fortress'?'Ваш дом':(l.camp?l.camp.hall+' · гарнизон '+(S.strat.pops[id]||0):''));
 }catch(e){console.error(e);S.location=prev;try{world=buildLocation(prev);resetPlayerPos();syncAllies();applyQuality();}catch(x){}toast('Ошибка перехода: '+e.message);}finally{hideTransition();}},600);}

/* ==================== СТРАТЕГИЯ (сбалансирована) ==================== */
const leaderArmy=id=>STR.ring.reduce((a,s)=>a+(S.strat.owners[s]===id?(S.strat.pops[s]||0):0),0);
const leaderSectors=id=>STR.ring.filter(s=>S.strat.owners[s]===id).length;
function sectorDefense(id){const st=S.strat,own=st.owners[id],base=st.pops[id]||0;
 if(own==='player')return base+5+(st.fortress.walls||0)*2.5;
 const L=D.leaders[own]||D.leaders[id];return base+(st.leaderLv[own]||1)*2+(L.trait==='Оборонительный'?6:0);}
function startRaid(){S.strat.raidActive=true;S.strat.raidCountdown=-1;S.strat.raidLeft=Math.round(6+threat()/9);
 showRaidBanner('НАБЕГ НА КРЕПОСТЬ','Врагов: '+S.strat.raidLeft);Sfx.raid();logWar('🔥 Набег на крепость: '+S.strat.raidLeft+' врагов','#ff5a5f');
 if(S.location==='fortress')spawnRaidEnemies();}
function spawnRaidEnemies(){const n=Math.min(S.strat.raidLeft,QUAL[quality].enemies-world.enemies.length);
 for(let i=0;i<n;i++){const a=Math.random()*TAU,r=26+Math.random()*6;spawnEnemy('raider',Math.cos(a)*r,Math.sin(a)*r,world,Math.random,true);}}
function endRaid(ok){S.strat.raidActive=false;S.strat.raidLeft=0;S.strat.raidCountdown=-1;
 if(ok){toast('🛡️ Набег отбит!');S.strat.fortressHP=clamp(S.strat.fortressHP+15,0,fortressMaxHP());logWar('🛡️ Набег отбит','#7ee081');}
 else{toast('💥 Крепость разграблена!');S.coins=Math.floor(S.coins*.7);S.strat.fortressHP=fortressMaxHP()*.5;logWar('💥 Крепость разграблена','#ff5a5f');}
 STR.ring.forEach(id=>{if(S.strat.owners[id]!=='player')S.strat.pops[id]=Math.max(0,(S.strat.pops[id]||0)-(ok?2:3));});uiDirty=true;}
function updateStrategic(dt){const st=S.strat;
 st.migrateT-=dt;
 if(st.migrateT<=0){st.migrateT=STR.migrateEvery;
  const src=STR.ring.filter(i=>st.owners[i]!=='player'&&(st.pops[i]||0)>=4);
  if(src.length){const from=src[Math.floor(Math.random()*src.length)],own=st.owners[from];
   const near=STR.ring.filter(i=>i!==from&&st.owners[i]===own);
   const to=near.length?near[Math.floor(Math.random()*near.length)]:null;
   if(to){const amt=Math.min(2,st.pops[from]-2);st.pops[from]-=amt;st.migrations.push({from,to,amt,t:0,color:D.leaders[own].color});}}}
 st.regrowT-=dt;
 if(st.regrowT<=0){st.regrowT=STR.regrowEvery;
  STR.ring.forEach(id=>{const own=st.owners[id];if(own==='player')return;const L=D.leaders[own]||D.leaders[id];
   if((st.pops[id]||0)<maxPop(id)&&Math.random()<clamp(.28*L.growth,0,.7))st.pops[id]++;});uiDirty=true;}
 st.leaderT-=dt;
 if(st.leaderT<=0){st.leaderT=STR.leaderEvery;st.warTicks++;
  const actor=STR.ring[st.actorIdx%STR.ring.length];st.actorIdx++;
  const own=st.owners[actor];
  if(own!=='player'){
   const L=D.leaders[own]||D.leaders[actor],army=leaderArmy(own),holds=leaderSectors(own);
   const from=STR.ring.find(s=>st.owners[s]===own&&(st.pops[s]||0)>3);
   if(from){
    const canExpand=holds<STR.maxSectorsPerLeader;
    const targets=canExpand?STR.ring.filter(s=>st.owners[s]!==own).sort((a,b)=>sectorDefense(a)-sectorDefense(b)):[];
    const raidChance=L.aggression*.2+(holds>=STR.maxSectorsPerLeader?.25:0);
    if(Math.random()<raidChance&&army>10){
     const amt=Math.min(3,st.pops[from]-3);st.pops[from]-=amt;
     st.migrations.push({from,to:'fortress',amt,t:0,color:L.color});
     logWar(L.icon+' '+L.name+' двинул войска к крепости',L.color);
    } else if(targets.length&&army>sectorDefense(targets[0])*STR.captureEdge+5){
     const t=targets[0],amt=Math.min(4,st.pops[from]-3);
     st.pops[from]=Math.max(0,st.pops[from]-amt-1);
     st.migrations.push({from,to:t,amt,t:0,capture:true,attacker:own,color:L.color});
     logWar(L.icon+' '+L.name+' идёт на '+D.locations[t].name,L.color);
    } else {
     const ownS=STR.ring.filter(s=>st.owners[s]===own);
     if(ownS.length){const s=ownS[Math.floor(Math.random()*ownS.length)];st.pops[s]=Math.min(maxPop(s),(st.pops[s]||0)+2);}
    }
   }
   if(st.warTicks%4===0&&Math.random()<.35)st.leaderLv[own]=Math.min(STR.leaderMaxLv,(st.leaderLv[own]||1)+1);
  }
  uiDirty=true;}
 for(let i=st.migrations.length-1;i>=0;i--){const m=st.migrations[i];m.t+=dt/3.5;if(m.t<1)continue;
  if(m.capture){const def=sectorDefense(m.to);
   if(m.amt*2.2>def*.5){st.owners[m.to]=m.attacker;st.pops[m.to]=Math.max(2,m.amt-1);st.leaderLv[m.attacker]=Math.min(STR.leaderMaxLv,(st.leaderLv[m.attacker]||1)+1);
    logWar('⚔️ '+D.leaders[m.attacker].name+' захватил '+D.locations[m.to].name,D.leaders[m.attacker].color);toast('⚔️ '+D.locations[m.to].name+' захвачен!');}
   else{st.pops[m.to]=Math.max(0,(st.pops[m.to]||0)-1);logWar('🛡️ '+D.locations[m.to].name+' отбил атаку','#7ee081');}}
  else if(m.to==='fortress'){st.raidCountdown=Math.max(8,(st.raidCountdown>0?st.raidCountdown:STR.raidCountdown)-14);}
  else{st.pops[m.to]=Math.min(maxPop(m.to),(st.pops[m.to]||0)+m.amt);if(st.owners[m.to]==='player'&&m.amt>=2)st.owners[m.to]=st.owners[m.from]||m.from;}
  st.migrations.splice(i,1);uiDirty=true;}
 st.farmT-=dt;
 if(st.farmT<=0){st.farmT=30;const inc=(st.fortress.farm||0)*6+STR.ring.filter(i=>st.owners[i]==='player').length*4;
  if(inc>0){S.coins+=inc;lootFeed('🏰 Доход +'+inc+' 🪙','#ffd166');uiDirty=true;}}
 const th=threat();
 if(!st.raidActive){if(th>=STR.raidThreshold){if(st.raidCountdown<0){st.raidCountdown=STR.raidCountdown;logWar('⚠️ Угроза высока — готовится набег','#ffd166');}st.raidCountdown-=dt;if(st.raidCountdown<=0)startRaid();}else st.raidCountdown=-1;}
 if(st.raidActive){if(S.location==='fortress'){if(world.enemies.filter(e=>e.alive&&e.raid).length<Math.min(st.raidLeft,6))spawnRaidEnemies();}
  else{st.fortressHP-=dt*(st.raidLeft*.045)*(1-(st.fortress.walls||0)*.07);if(st.fortressHP<=0)endRaid(false);}}
 for(const b of st.bots){const bt=D.botTypes[b.type];
  if(b.mode==='idle')b.hp=Math.min(bt.hp,b.hp+dt*3);
  else if(b.mode==='mission'){b.missionT-=dt;
   if(b.missionT<=0){b.missionT=2.5;
    if((st.pops[b.target]||0)>0){st.pops[b.target]=Math.max(0,st.pops[b.target]-Math.max(1,Math.round(bt.atk*.12)));b.hp-=rndInt(4,10);
     if(st.pops[b.target]<=0){st.owners[b.target]='player';S.counters.clears++;toast('🚩 Отряд захватил '+D.locations[b.target].name+'!');logWar('🚩 Отряд захватил '+D.locations[b.target].name,'#7ee081');b.mode='follow';b.target=null;checkTutorial();}}
    else{b.mode='follow';b.target=null;}
    if(b.hp<=0){b.hp=1;b.mode='idle';b.target=null;toast('🤖 Бот ранен, вернулся в резерв.');}
    uiDirty=true;}}}
}

/* ==================== МИР / ИГРОК ==================== */
function updateInteractions(){nearestInteract=null;let best=1e9;
 for(const n of world.nodes){if(!n.active||n.harvestLock)continue;const d=Math.hypot(n.x-player.x,n.z-player.z);if(d<2.7&&d<best){best=d;nearestInteract={kind:'node',obj:n,label:nodeLabel(n)};}}
 for(const f of world.features){const d=Math.hypot(f.x-player.x,f.z-player.z);if(d<f.r&&d<best){best=d;nearestInteract={kind:'feature',obj:f,label:f.label};}}
 const l=nearestInteract?nearestInteract.label:'';
 if(l!==lastPrompt){lastPrompt=l;$('promptText').textContent=l;$('prompt').classList.toggle('show',!!l);$('btnInteract').classList.toggle('show',!!l);}
 if(interactQueued){interactQueued=false;if(player.gatherT>0)return;
  if(nearestInteract){if(nearestInteract.kind==='node')tryStartGather(nearestInteract.obj);else{Sfx.interact();nearestInteract.obj.action();}}}}
function nodeLabel(n){const nm={tree:'Дерево',rock:'Камень',bush:'Куст',ore:'Жила',crystal:'Кристалл',coal:'Угольный пласт'},r=toolReq(n);
 if(r){const st=stats();if(st.gatherType!==r.type||st.gatherPower<r.power)return nm[n.type]+' — нужен '+TOOL_RU[r.type]+' (сила '+r.power+')';}
 return nm[n.type]+' — добыть '+item(n.def.base.item).name;}
function resolveCollisions(){const pr=.45;
 for(const c of world.colliders){if(c.disabled)continue;const dx=player.x-c.x,dz=player.z-c.z,d=Math.hypot(dx,dz),m=c.r+pr;
  if(d<m){if(d>1e-4){const p=m-d;player.x+=dx/d*p;player.z+=dz/d*p;}else player.x+=m;}}
 for(const r of world.rects){const dx=player.x-r.x,dz=player.z-r.z,cx=clamp(dx,-r.hx,r.hx),cz=clamp(dz,-r.hz,r.hz),ox=dx-cx,oz=dz-cz,d=Math.hypot(ox,oz);
  if(d<pr){if(d>1e-4){const p=pr-d;player.x+=ox/d*p;player.z+=oz/d*p;}
   else{const ex=r.hx-Math.abs(dx),ez=r.hz-Math.abs(dz);if(ex<ez)player.x=r.x+Math.sign(dx||1)*(r.hx+pr);else player.z=r.z+Math.sign(dz||1)*(r.hz+pr);}}}
 for(const e of world.enemies){if(!e.alive)continue;const r=e.def.size*.5+pr,dx=player.x-e.x,dz=player.z-e.z,d=Math.hypot(dx,dz);
  if(d<r){if(d>1e-4){const p=r-d;player.x+=dx/d*p;player.z+=dz/d*p;}else player.x+=r;}}
 const dc=Math.hypot(player.x,player.z);if(dc>SAFE_R){player.x*=SAFE_R/dc;player.z*=SAFE_R/dc;}}
function meleeAttack(){if(player.meleeT>0||player.dodgeT>0||player.gatherT>0)return;const m=currentMelee();
 player.combo=player.comboT>0?Math.min(player.combo+1,3):1;player.comboT=.9;player.meleeT=m.speed||.42;player.meleeDur=player.meleeT;player.meleeHit=false;Sfx.swing();
 const reach=(m.reach||2.3)*.85;
 const arc=new THREE.Mesh(G.torus,new THREE.MeshBasicMaterial({color:player.combo===3?0xffd166:0xffe9a0,transparent:true,opacity:.8,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide}));
 arc.scale.setScalar(reach*2);arc.position.set(player.x+Math.sin(player.facing)*1.2,1.3,player.z+Math.cos(player.facing)*1.2);arc.rotation.set(Math.PI/2,0,-player.facing);
 world.group.add(arc);world.effects.push({mesh:arc,t:0,dur:.2,base:reach*2});}
function resolveMelee(){const m=currentMelee(),st=stats(),reach=m.reach||2.3,half=player.combo===3?1.2:.9;let hit=false;
 for(const e of world.enemies){if(!e.alive)continue;const dx=e.x-player.x,dz=e.z-player.z,d=Math.hypot(dx,dz);
  if(d>reach||Math.abs(angDiff(Math.atan2(dx,dz),player.facing))>half)continue;
  const crit=Math.random()<.08+st.luck*.004;damageEnemy(e,Math.round((st.atk+(m.atk||5)+player.combo*2+rndInt(0,2))*(crit?1.8:1)),false);hit=true;}
 if(hit){hitstop=.05;shake=Math.max(shake,.15);Sfx.meleeHit();}}
function updateAllies(dt){for(const a of world.allies){const bt=D.botTypes[a.bot.type];a.cd=Math.max(0,a.cd-dt);
 let tg=null,best=1e9;for(const e of world.enemies){if(!e.alive)continue;const d=Math.hypot(e.x-a.x,e.z-a.z);if(d<best){best=d;tg=e;}}
 if(tg){const dx=tg.x-a.x,dz=tg.z-a.z,d=Math.hypot(dx,dz)||1,stop=bt.range*(bt.ranged?.75:.8);
  if(d>stop){a.x+=dx/d*bt.speed*dt;a.z+=dz/d*bt.speed*dt;}a.group.rotation.y=Math.atan2(dx,dz);
  if(d<bt.range&&a.cd<=0){a.cd=bt.ranged?1.1:.9;if(bt.ranged)spawnBullet(a.x,a.z,Math.atan2(dx,dz),{dmg:bt.atk,speed:26},true);else damageEnemy(tg,bt.atk,false);}}
 else{const dx=player.x-a.x,dz=player.z-a.z,d=Math.hypot(dx,dz)||1;if(d>3.5){a.x+=dx/d*bt.speed*dt;a.z+=dz/d*bt.speed*dt;}a.group.rotation.y=Math.atan2(dx,dz);}
 a.movePhase+=dt*bt.speed*2;a.group.position.set(a.x,Math.abs(Math.sin(a.movePhase))*.04,a.z);
 const u=a.group.userData;if(u.legL){u.legL.rotation.x=Math.sin(a.movePhase)*.5;u.legR.rotation.x=-Math.sin(a.movePhase)*.5;}}}
function updateWorld(dt,t){
 for(const n of world.nodes)if(!n.active){n.respawn-=dt;if(n.respawn<=0){n.active=true;n.harvestLock=false;n.group.visible=true;n.stump.visible=false;n.collider.disabled=false;}}
 for(const f of world.fires){const s=1+Math.sin(t*9+f.x)*.14;f.mesh.scale.set(s,1.3*(1+Math.sin(t*11+f.z)*.16),s);f.light.intensity=1.6+Math.sin(t*10+f.x)*.5;}
 const st=stats();
 for(let i=world.enemies.length-1;i>=0;i--){const e=world.enemies[i];if(!e?.alive)continue;
  e.cd=Math.max(0,e.cd-dt);e.shootCd-=dt;
  if(e.flash>0){e.flash=Math.max(0,e.flash-dt);const v=e.flash>0?1.8:.1;e.flashMats.forEach(m=>m.emissiveIntensity=v);}
  let tx=player.x,tz=player.z,td=Math.hypot(tx-e.x,tz-e.z),ta=null;
  for(const a of world.allies){const ad=Math.hypot(a.x-e.x,a.z-e.z);if(ad<td){td=ad;tx=a.x;tz=a.z;ta=a;}}
  const dx=tx-e.x,dz=tz-e.z,dp=Math.hypot(dx,dz)||1;
  e.hpBar.spr.visible=dp<15||e.hp<e.maxHp;
  if(e.def.ranged&&dp<16&&dp>5&&e.shootCd<=0){e.shootCd=1.7+Math.random()*.8;spawnBullet(e.x,e.z,Math.atan2(dx,dz),{dmg:e.def.atk,speed:15},false);}
  if(dp>(e.def.ranged?8:1.2)){e.x+=dx/dp*e.def.speed*dt;e.z+=dz/dp*e.def.speed*dt;}
  const dc=Math.hypot(e.x,e.z);if(dc>110){e.x*=110/dc;e.z*=110/dc;}
  e.movePhase+=dt*e.def.speed*2.2;
  e.group.position.set(e.x,e.parts.float?.35+Math.sin(t*2+e.phase)*.25:Math.abs(Math.sin(e.movePhase))*.06,e.z);
  e.group.rotation.y=Math.atan2(dx,dz);
  e.parts.legs.forEach((l,k)=>l.rotation.x=Math.sin(e.movePhase+k*Math.PI)*.5);
  e.parts.arms.forEach((a,k)=>a.rotation.x=Math.sin(e.movePhase+k*Math.PI)*.35);
  if(dp<1.3&&e.cd<=0){e.cd=1;if(ta)damageAlly(ta,e.def.atk);else{hurtPlayer(e.def.atk,e.def.name);if(e.def.poison)S.poison=Math.max(S.poison,6);}}}
 updateAllies(dt);
 for(const h of world.hazards)if(Math.hypot(h.x-player.x,h.z-player.z)<h.r)S.poison=Math.max(S.poison,5);
 if(S.poison>0){S.poison-=dt;S.hp-=2*(1-clamp(st.poisonResist,0,90)/100)*dt;if(S.hp<=0)die('Яд');}
 if(fireCd>0)fireCd-=dt;if(player.invuln>0)player.invuln-=dt;if(player.dodgeCd>0)player.dodgeCd-=dt;
 if(player.comboT>0)player.comboT-=dt;else player.combo=0;if(player.recoilT>0)player.recoilT-=dt;
 if(multT>0){multT-=dt;if(multT<=0)scoreMult=1;}
 muzzle.material.opacity=Math.max(0,muzzle.material.opacity-dt*8);
 if(S.location==='fortress'&&S.strat.raidActive&&(S.strat.fortress.towers||0)>0){towerCd-=dt;
  if(towerCd<=0){towerCd=1.3/S.strat.fortress.towers;let tg=null,best=1e9;
   for(const e of world.enemies){if(!e.alive||!e.raid)continue;const d=Math.hypot(e.x,e.z);if(d<best){best=d;tg=e;}}
   if(tg){const a=Math.atan2(tg.x,tg.z);spawnBullet(Math.sin(a)*18,Math.cos(a)*18,a,{dmg:20,speed:32},true);}}}
 updateDrops(dt);updateBullets(dt);updateFloaters(dt);updateEffects(dt);}
const ray=new THREE.Raycaster(),gPlane=new THREE.Plane(new THREE.Vector3(0,1,0),0),ndc=new THREE.Vector2(),aimHit=new THREE.Vector3();
function updateAim(){ndc.set(mouseX/innerWidth*2-1,-(mouseY/innerHeight)*2+1);ray.setFromCamera(ndc,camera);
 if(ray.ray.intersectPlane(gPlane,aimHit)){aimX=aimHit.x;aimZ=aimHit.z;if(player.gatherT<=0)player.facing=Math.atan2(aimX-player.x,aimZ-player.z);}
 crosshair.style.left=mouseX+'px';crosshair.style.top=mouseY+'px';}
const camFwd=new THREE.Vector3(),camRight=new THREE.Vector3(),UP=new THREE.Vector3(0,1,0);
function tryDodge(){if(player.dodgeCd>0||player.dodgeT>0||S.stamina<DODGE_COST||!player.grounded||player.gatherT>0)return;
 S.stamina-=DODGE_COST;player.dodgeT=DODGE_DUR;player.dodgeCd=DODGE_CD;
 let ix=(keys.KeyD||keys.ArrowRight?1:0)-(keys.KeyA||keys.ArrowLeft?1:0)+joy.x,iz=(keys.KeyS||keys.ArrowDown?1:0)-(keys.KeyW||keys.ArrowUp?1:0)+joy.y;
 const il=Math.hypot(ix,iz);if(il>1){ix/=il;iz/=il;}
 if(il>.1){camera.getWorldDirection(camFwd);camFwd.y=0;camFwd.normalize();camRight.crossVectors(camFwd,UP).normalize();player.dodgeVX=camRight.x*ix+camFwd.x*-iz;player.dodgeVZ=camRight.z*ix+camFwd.z*-iz;}
 else{player.dodgeVX=Math.sin(player.facing);player.dodgeVZ=Math.cos(player.facing);}
 const l=Math.hypot(player.dodgeVX,player.dodgeVZ)||1;player.dodgeVX/=l;player.dodgeVZ/=l;
 player.invuln=Math.max(player.invuln,DODGE_DUR+.06);Sfx.dodge();burst(player.x,.3,player.z,0x4de3c1,14,3,2,.5);}
function updatePlayer(dt,t){
 let ix=(keys.KeyD||keys.ArrowRight?1:0)-(keys.KeyA||keys.ArrowLeft?1:0)+joy.x,iz=(keys.KeyS||keys.ArrowDown?1:0)-(keys.KeyW||keys.ArrowUp?1:0)+joy.y;
 const il=Math.hypot(ix,iz);if(il>1){ix/=il;iz/=il;}const st=stats();
 if(player.dodgeT>0){player.dodgeT-=dt;player.vx=player.dodgeVX*13;player.vz=player.dodgeVZ*13;player.x+=player.vx*dt;player.z+=player.vz*dt;hero.rotation.z=Math.sin((1-player.dodgeT/DODGE_DUR)*Math.PI)*.9;}
 else{hero.rotation.z=0;const busy=player.gatherT>0||player.meleeT>0;
  const spr=(keys.ShiftLeft||keys.ShiftRight||sprintTouch)&&il>0&&S.stamina>2&&!busy;player.sprinting=spr;
  S.stamina=clamp(S.stamina+(spr?-18:9)*dt,0,st.maxStamina);
  const spd=((spr?7.6:4.4)+st.speed)*(busy?.4:1);
  camera.getWorldDirection(camFwd);camFwd.y=0;camFwd.normalize();camRight.crossVectors(camFwd,UP).normalize();
  const wx=camRight.x*ix+camFwd.x*-iz,wz=camRight.z*ix+camFwd.z*-iz,k=1-Math.exp(-12*dt);
  player.vx+=(wx*spd-player.vx)*k;player.vz+=(wz*spd-player.vz)*k;player.x+=player.vx*dt;player.z+=player.vz*dt;}
 resolveCollisions();player.moving=Math.hypot(player.vx,player.vz)>.5;
 if(jumpQueued&&player.grounded&&player.dodgeT<=0&&player.gatherT<=0){player.vy=9.4;player.grounded=false;Sfx.jump();burst(player.x,.15,player.z,0xc9b98a,8,2,4,.5);}
 jumpQueued=false;
 if(!player.grounded){player.vy-=24*dt;player.y+=player.vy*dt;if(player.y<=0){player.y=0;player.grounded=true;if(player.vy<-4){Sfx.land();player.landT=.18;}player.vy=0;}}
 const P=hero.userData;
 if(player.moving&&player.grounded&&player.dodgeT<=0)player.walkPhase+=dt*9*(player.sprinting?1.5:1);
 const s=Math.sin(player.walkPhase),amp=player.moving?(player.sprinting?.85:.55):0;
 P.legL.rotation.x=s*amp;P.legR.rotation.x=-s*amp;P.armL.rotation.x=-.4;P.armR.rotation.x=-.4;
 if(player.moving&&player.grounded&&player.prevSin>0&&s<=0)Sfx.step();player.prevSin=s;
 P.body.scale.y=1.1*(1+Math.sin(t*2.2)*.015);P.head.position.y=2.35+Math.sin(t*2.2)*.02;
 P.tail.rotation.x=-.25-(player.moving?(player.sprinting?.75:.4):0)+Math.sin(t*6)*.12;
 if(player.gatherT>0){const p=1-player.gatherT/GATHER_DUR,sw=Math.sin(p*Math.PI);P.armR.rotation.x=-.4-sw*1.2;P.armL.rotation.x=-.4-sw*.6;}
 else if(player.meleeT>0){player.meleeT-=dt;const p=1-player.meleeT/player.meleeDur,wind=p<.3?p/.3:1,strike=p>=.3?Math.min(1,(p-.3)/.35):0,rec=p>.7?(p-.7)/.3:0,c=player.combo;
  P.armR.rotation.x=lerp(lerp(c===1?-2.2:c===2?-1.6:-2.8,c===3?1.4:.9,strike),-.4,rec);
  P.armL.rotation.x=c===2?lerp(-1.8,.8,strike):-.4-wind*.3;
  P.body.rotation.y=(c===2?-1:1)*(wind*.3*(1-strike)-strike*.28)*(1-rec);
  hero.rotation.y=player.facing+(c===2?-1:1)*Math.sin(p*Math.PI)*.22;
  if(!player.meleeHit&&p>=.42){player.meleeHit=true;resolveMelee();}}
 else{P.body.rotation.y=0;hero.rotation.y=player.facing;}
 if(currentGun()){const r=player.recoilT>0?player.recoilT/.18:0;gunGroup.position.z=.55-r*.25;gunGroup.rotation.x=-.1-r*.3;P.armL.rotation.x=-1.1-r*.2;}
 if(player.landT>0){player.landT-=dt;const q=Math.max(player.landT,0)/.18;hero.scale.set(1+q*.12,1-q*.15,1+q*.12);}else hero.scale.set(1,1,1);
 hero.position.set(player.x,player.y+((player.moving&&player.grounded&&player.dodgeT<=0)?Math.abs(s)*.07:0),player.z);
 hero.visible=player.invuln>0?Math.floor(t*12)%2===0:true;}
const camTarget=new THREE.Vector3();
function updateCamera(dt){camYaw+=(camYawT-camYaw)*Math.min(1,dt*8);
 const lx=lerp(player.x,aimX,.14),lz=lerp(player.z,aimZ,.14);
 camTarget.set(lx+Math.sin(camYaw)*30,23,lz+Math.cos(camYaw)*30);
 camera.position.lerp(camTarget,1-Math.exp(-6*dt));
 if(shake>0){shake=Math.max(0,shake-dt*1.6);camera.position.x+=(Math.random()-.5)*shake;camera.position.y+=(Math.random()-.5)*shake;}
 camera.lookAt(lx,player.y+1,lz);
 const a=innerWidth/innerHeight;camera.left=-frustum*a/2;camera.right=frustum*a/2;camera.top=frustum/2;camera.bottom=-frustum/2;camera.updateProjectionMatrix();
 sun.position.set(player.x+16,26,player.z+12);sun.target.position.set(player.x,0,player.z);}

/* ==================== ВВОД ==================== */
addEventListener('pointermove',e=>{mouseX=e.clientX;mouseY=e.clientY;});
addEventListener('keydown',e=>{if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault();
 if(state!=='playing'||activePanel)return;keys[e.code]=true;if(e.repeat)return;
 if(e.code==='Space')jumpQueued=true;if(e.code==='KeyE')interactQueued=true;if(e.code==='KeyQ')dodgeQueued=true;});
addEventListener('keyup',e=>{keys[e.code]=false;});
addEventListener('keydown',e=>{if(e.repeat)return;
 if(e.code==='KeyI'&&state!=='intro'&&state!=='dead')openPanel(activePanel==='inv'?null:'inv');
 if(e.code==='KeyM'&&state!=='intro'&&state!=='dead'){selectedMap=S.location;openPanel(activePanel==='map'?null:'map');}
 if(e.code==='Escape'){if(activePanel&&activePanel!=='intro'&&activePanel!=='death')closePanel();else if(state==='playing'){state='paused';openPanel('pause');}else if(state==='paused'){state='playing';closePanel();}}});
$('btnStart').addEventListener('click',()=>{if(hasSave){S=freshState();normalizeState();store.del(SAVE_KEY);}world=buildLocation('fortress');resetPlayerPos();syncAllies();applyQuality();startGame();showLocBanner('Крепость','Ваш дом · стройте и защищайте');});
$('btnContinue').addEventListener('click',()=>{world=buildLocation(S.location);resetPlayerPos();syncAllies();applyQuality();startGame();});
$('btnResume').addEventListener('click',()=>{state='playing';closePanel();});
$('btnNewGame').addEventListener('click',()=>{S=freshState();normalizeState();store.del(SAVE_KEY);world=buildLocation('fortress');resetPlayerPos();syncAllies();applyQuality();state='playing';closePanel();toast('Новая игра.');});
$('btnRespawn').addEventListener('click',respawn);
$('btnInv').addEventListener('click',()=>openPanel(activePanel==='inv'?null:'inv'));
$('btnMap').addEventListener('click',()=>{selectedMap=S.location;openPanel(activePanel==='map'?null:'map');});
btnFort.addEventListener('click',()=>openPanel(activePanel==='fort'?null:'fort'));
btnBots.addEventListener('click',()=>openPanel(activePanel==='bots'?null:'bots'));
$('btnSound').addEventListener('click',()=>{Sfx.ensure();Sfx.setMuted(!Sfx.muted);});
$('btnPause').addEventListener('click',()=>{if(state==='playing'){state='paused';openPanel('pause');}else if(state==='paused'){state='playing';closePanel();}});
$('btnInvClose').addEventListener('click',closePanel);$('btnCraftClose').addEventListener('click',closePanel);$('btnTradeClose').addEventListener('click',closePanel);$('btnMapClose').addEventListener('click',closePanel);
$('btnTravel').addEventListener('click',()=>{const t=selectedMap;closePanel();travel(t);});
$('qualitySelect').addEventListener('change',e=>{quality=e.target.value;applyQuality();toast('Качество: '+e.target.options[e.target.selectedIndex].text);});
document.querySelectorAll('.trade-tab').forEach(b=>b.addEventListener('click',()=>{tradeTab=b.dataset.tab;document.querySelectorAll('.trade-tab').forEach(x=>x.classList.toggle('active',x===b));renderTrade();}));
$('invGrid').addEventListener('click',e=>{const el=e.target.closest('.inv-item');if(el){selectedInv=el.dataset.id;renderInvDetail();}});
$('equipSlots').addEventListener('click',e=>{const el=e.target.closest('.equip-slot');if(el)unequip(el.dataset.slot);});
$('invDetail').addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(!b)return;const id=b.dataset.id;
 if(b.dataset.action==='equip')equipItem(id);else if(b.dataset.action==='use')useItem(id);else if(b.dataset.action==='drop')dropItem(id,1);
 else if(b.dataset.action==='sell'&&takeItem(id,1)){S.coins+=sellPrice(id);recordTrade('sell',id,1);Sfx.coin();toast('Продано: '+item(id).name);checkTutorial();save();}});
$('craftList').addEventListener('click',e=>{const b=e.target.closest('button[data-idx]');if(b&&!b.disabled)craft(+b.dataset.idx);});
$('tradeList').addEventListener('click',e=>{const b=e.target.closest('button[data-id]');if(!b||b.disabled)return;const id=b.dataset.id;
 if(tradeTab==='buy'){const p=buyPrice(id);if(S.coins>=p){S.coins-=p;addItem(id,1);recordTrade('buy',id,1);Sfx.coin();toast('Куплено: '+item(id).name);}}
 else{const p=sellPrice(id);if(takeItem(id,1)){S.coins+=p;recordTrade('sell',id,1);Sfx.coin();toast('Продано: '+item(id).name);}}
 checkTutorial();save();});
$('invFilters').addEventListener('click',e=>{const b=e.target.closest('.filter-btn');if(b){invFilter=b.dataset.cat;buildFilters();renderInventory();}});
$('craftFilters').addEventListener('click',e=>{const b=e.target.closest('.filter-btn');if(b){craftFilter=b.dataset.cat;buildFilters();renderCraft();}});
$('mapArea').addEventListener('click',e=>{const el=e.target.closest('.map-ring, .map-fort');if(el){selectedMap=el.dataset.id;renderMap();}});
$('btnJump').addEventListener('pointerdown',e=>{e.preventDefault();if(state==='playing'&&!activePanel)jumpQueued=true;});
$('btnInteract').addEventListener('pointerdown',e=>{e.preventDefault();if(state==='playing'&&!activePanel)interactQueued=true;});
$('btnAttack').addEventListener('pointerdown',e=>{e.preventDefault();if(state==='playing'&&!activePanel)meleeHeld=true;});
$('btnAttack').addEventListener('pointerup',()=>meleeHeld=false);
const spBtn=$('btnSprint');spBtn.addEventListener('pointerdown',e=>{e.preventDefault();sprintTouch=true;});
['pointerup','pointercancel','pointerleave'].forEach(ev=>spBtn.addEventListener(ev,()=>sprintTouch=false));
const joyBase=$('joyBase'),joyKnob=$('joyKnob');
function joyMove(e){const r=joyBase.getBoundingClientRect();let dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2);const d=Math.hypot(dx,dy),m=40;if(d>m){dx=dx/d*m;dy=dy/d*m;}joy.x=dx/m;joy.y=dy/m;joyKnob.style.transform=`translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;}
joyBase.addEventListener('pointerdown',e=>{joy.id=e.pointerId;joyBase.setPointerCapture(e.pointerId);joyMove(e);});
joyBase.addEventListener('pointermove',e=>{if(e.pointerId===joy.id)joyMove(e);});
function joyEnd(e){if(e.pointerId===joy.id){joy.id=null;joy.x=joy.y=0;joyKnob.style.transform='translate(-50%,-50%)';}}
joyBase.addEventListener('pointerup',joyEnd);joyBase.addEventListener('pointercancel',joyEnd);
renderer.domElement.addEventListener('pointerdown',e=>{if(state!=='playing'||activePanel)return;if(e.button===0)meleeHeld=true;if(e.button===2)gunHeld=true;});
addEventListener('pointerup',e=>{if(e.button===0)meleeHeld=false;if(e.button===2)gunHeld=false;});
renderer.domElement.addEventListener('contextmenu',e=>e.preventDefault());
renderer.domElement.addEventListener('wheel',e=>{e.preventDefault();frustum=clamp(frustum+e.deltaY*.012,8,26);},{passive:false});
addEventListener('resize',()=>renderer.setSize(innerWidth,innerHeight));
addEventListener('blur',()=>{clearActionQueues();cancelGather();if(state==='playing'&&!activePanel){state='paused';openPanel('pause');}});
document.addEventListener('visibilitychange',()=>{if(document.hidden){clearActionQueues();cancelGather();}});

/* ==================== ЦИКЛ ==================== */
const clock=new THREE.Clock();let firstFrame=true;
function simulate(dt,t,raw){S.playTime+=dt;updateAim();
 if(dodgeQueued){dodgeQueued=false;tryDodge();}
 if(meleeHeld)meleeAttack();if(gunHeld)fireGun();
 updatePlayer(dt,t);updateGatherAction(dt);updateInteractions();updateWorld(dt,t);updateStrategic(dt);
 hudTimer+=raw;if(hudTimer>.1){hudTimer=0;renderHUD();renderQuest();updateBotsLive();}
 mapTimer+=raw;if(activePanel==='map'&&mapTimer>.25){mapTimer=0;renderMap();}
 saveTimer+=raw;if(saveTimer>5){saveTimer=0;save();}}
function animate(){requestAnimationFrame(animate);
 const raw=Math.min(clock.getDelta(),.05),t=clock.elapsedTime;let dt=raw;if(hitstop>0){hitstop-=raw;dt=raw*.1;}
 fpsAcc+=raw;fpsFrames++;
 if(fpsAcc>=.5){fps=Math.round(fpsFrames/fpsAcc);fpsAcc=0;fpsFrames=0;$('fpsText').textContent=fps;
  if(fps<28){slowTime+=.5;if(slowTime>2.5&&quality!=='low'){quality=quality==='high'?'medium':'low';applyQuality();toast('⚙️ Качество снижено');slowTime=0;}}else slowTime=0;}
 if(state==='playing'&&!activePanel){try{simulate(dt,t,raw);}catch(e){reportErr(e);}}
 else if(state==='intro')camYawT+=dt*.05;
 try{renderPanels();updateParticles(raw);updateCamera(raw);renderer.render(scene,camera);}catch(e){console.error(e);}
 if(firstFrame){firstFrame=false;window.__fmReady=true;$('boot').classList.add('hide');setTimeout(()=>$('boot')?.remove(),600);}}

if(hasSave){$('btnContinue').style.display='';$('introSaveInfo').textContent='Сохранение: уровень '+S.level+' · '+S.coins+' монет · '+D.locations[S.location].name;}
world=buildLocation(S.location);resetPlayerPos();syncAllies();applyQuality();openPanel('intro');renderAll();animate();
