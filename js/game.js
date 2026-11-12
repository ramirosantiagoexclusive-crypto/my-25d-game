import * as THREE from 'three';
import {TEX,G,MAT,SHARED_TEX,glowTex,put,inst,disposeTree,glowSprite,makeHpBar,updateHpBar,buildEnemyModel,buildAllyModel,makeStump,buildFortress,buildCamp,buildOutpost} from './assets.js';
const D=window.GAME_DATA,$=i=>document.getElementById(i),TAU=Math.PI*2;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),lerp=(a,b,t)=>a+(b-a)*t,ri=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const angDiff=(a,b)=>{const d=a-b;return Math.atan2(Math.sin(d),Math.cos(d));};
const store={get(k,d){try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v);}catch(e){return d;}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}},del(k){try{localStorage.removeItem(k);}catch(e){}}};
const rng=s=>{let a=s|0;return()=>{a=(a+0x6D2B79F5)|0;let t=Math.imul(a^(a>>>15),1|a);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296;};};
const KEY='fortress_v5',XP=[0,60,160,320,560,900,1400,2100,3000],STR=D.strategic;
const SAFE=132,GDUR=.55,MAXDROP=120,MAXY=6,CAP0=60,CAPL=8,DCOST=16,DDUR=.28,DCD=.7,MAXB=120;
const fresh=()=>({hp:100,stamina:100,coins:90,xp:0,level:1,inventory:{club:1,stone_axe:1,stone_pick:1},equipment:{tool:null,weapon:'club',gun:null,armor:null,charm:null},buffs:{luck:0,power:0,defense:0},location:'fortress',visited:{fortress:true},tutorialStep:0,tutorialDone:false,counters:{gather:{},sold:{},bought:{},clears:0},poison:0,playTime:0,score:0,strat:null});
let S=fresh();const saved=store.get(KEY,null),hasSave=!!saved;if(saved)S=Object.assign(fresh(),saved);
const IT=D.items,RAR=D.rarities,CAT=D.categories,item=i=>IT[i];
function counters(){if(!S.counters)S.counters={gather:{},sold:{},bought:{},clears:0};['gather','sold','bought'].forEach(k=>S.counters[k]=S.counters[k]||{});S.counters.clears=S.counters.clears||0;}
const fortMax=()=>STR.fortressMaxHP+(S.strat?.fortress?.walls||1)*40;
const maxPop=i=>(D.locations[i].maxPop||10)+Math.floor((S.strat.leaderLv[i]||1)*1.2);
function initStrat(){const t=S.strat=S.strat||{};t.pops=t.pops||{};t.owners=t.owners||{};t.leaderLv=t.leaderLv||{};
 STR.ring.forEach(i=>{t.pops[i]=t.pops[i]??D.locations[i].startPop??4;t.owners[i]=t.owners[i]||i;t.leaderLv[i]=t.leaderLv[i]||1;});
 t.fortress=Object.assign({walls:1,towers:0,barracks:1,workshop:1,farm:0},t.fortress||{});t.bots=t.bots||[];t.log=t.log||[];t.migrations=t.migrations||[];
 t.fortressHP=t.fortressHP??fortMax();t.migrateT=t.migrateT??STR.migrateEvery;t.regrowT=t.regrowT??STR.regrowEvery;t.leaderT=t.leaderT??STR.leaderGrace;t.farmT=t.farmT??30;
 t.raidCountdown=t.raidCountdown??-1;t.raidActive=!!t.raidActive;t.raidLeft=t.raidLeft||0;t.actorIdx=t.actorIdx||0;t.warTicks=t.warTicks||0;}
function norm(){const f=fresh();S.inventory=S.inventory||{};S.equipment=Object.assign(f.equipment,S.equipment||{});S.buffs=Object.assign(f.buffs,S.buffs||{});S.visited=Object.assign(f.visited,S.visited||{});counters();initStrat();
 if(!D.locations[S.location])S.location='fortress';['hp','stamina','coins','xp','level','poison','playTime','score','tutorialStep'].forEach(k=>{if(typeof S[k]!=='number')S[k]=f[k];});
 if(!item(S.equipment.weapon))S.equipment.weapon='club';S.strat.fortressHP=clamp(S.strat.fortressHP,0,fortMax());}
norm();
let world=null,state='intro',panel='intro',selMap='fortress',tab='buy',selInv=null,cFilter='all',iFilter='all';
let toastT=null,saveT=0,hudT=0,mapT=0,qInt=false,qJump=false,qDodge=false,touchSpr=false,holdM=false,holdG=false;
let fireCd=0,near=null,shake=0,hitstop=0,dirty=true,lastPrompt='',travT=null,errs=0,hTimes=[],fullT=0,mult=1,multT=0,towerCd=0;
const keys={},joy={x:0,y:0,id:null};let mx=innerWidth/2,my=innerHeight/2,ax=0,az=0;
const P={x:0,y:0,z:10,vx:0,vz:0,vy:0,ground:true,face:Math.PI,wp:0,ps:0,land:0,moving:false,sprint:false,inv:0,dg:0,dgCd:0,dgx:0,dgz:1,gt:0,gTgt:null,gDone:false,mt:0,mDur:.4,mHit:false,combo:0,cT:0,rec:0};
const rc=i=>RAR[item(i).rarity].color,cm=i=>CAT[item(i).cat]||CAT.resource;
const badge=i=>{const c=cm(i);return`<span class="cat-badge" style="color:${c.color};border-color:${c.color}66;background:${c.color}14">${c.icon} ${c.name}</span>`;};
const cnt=i=>S.inventory[i]||0,wOf=(i,n=1)=>(item(i)?.weight||0)*n;
const weight=()=>Math.round(Object.keys(S.inventory).reduce((a,i)=>a+wOf(i,cnt(i)),0)*10)/10;
const cap=()=>CAP0+(S.level-1)*CAPL;
const fits=(i,n=1)=>weight()+wOf(i,n)<=cap()+1e-6;
const add=(i,n=1)=>{if(item(i)){S.inventory[i]=cnt(i)+n;dirty=true;}};
const take=(i,n=1)=>{if(cnt(i)<n)return false;S.inventory[i]-=n;if(S.inventory[i]<=0)delete S.inventory[i];dirty=true;return true;};
const gun=()=>item(S.equipment.gun)?.gun||null;
const melee=()=>{const i=item(S.equipment.weapon);return i?.slot==='weapon'?i:{atk:5,reach:2.3,speed:.42,name:'Кулаки'};};
function stats(){const s={atk:2,def:0,gatherType:null,gatherPower:0,speed:0,luck:0,maxHp:100+(S.level-1)*12,maxStamina:100+(S.level-1)*6,poisonResist:0};
 for(const k in S.equipment){const i=item(S.equipment[k]);if(!i)continue;for(const a of['atk','def','speed','luck','maxStamina','poisonResist'])s[a]+=i[a]||0;if(i.slot==='tool'){s.gatherType=i.gatherType;s.gatherPower=i.gatherPower||1;}}
 s.atk+=S.buffs.power||0;s.def+=S.buffs.defense||0;s.luck+=S.buffs.luck||0;return s;}
function equip(i){const t=item(i);if(!t?.slot||cnt(i)<=0)return;const o=S.equipment[t.slot];take(i,1);if(o)add(o,1);S.equipment[t.slot]=i;toast('Экипировано: '+t.name);gunVis();dirty=true;tut();save();}
function unequip(k){const i=S.equipment[k];if(!i)return;S.equipment[k]=null;add(i,1);gunVis();dirty=true;save();}
function xp(n){S.xp+=n;let l=1;XP.forEach((v,i)=>{if(S.xp>=v)l=i+1;});if(l>S.level){S.level=l;S.hp=stats().maxHp;toast('⭐ Уровень '+l);Sfx.level();dirty=true;}}
function use(i){const t=item(i);if(!t?.use||!take(i,1))return;const s=stats();if(t.use.heal)S.hp=clamp(S.hp+t.use.heal,0,s.maxHp);if(t.use.stamina)S.stamina=clamp(S.stamina+t.use.stamina,0,s.maxStamina);if(t.use.curePoison)S.poison=0;Sfx.eat();toast('Использовано: '+t.name);dirty=true;}
const sellP=i=>Math.max(1,Math.floor(item(i).value*.6)),buyP=i=>Math.ceil(item(i).value*2.5);
const full=()=>{const n=performance.now();if(n-fullT<2500)return;fullT=n;toast('🎒 Рюкзак полон!');Sfx.deny();};
const war=(t,c)=>{S.strat.log.unshift({text:t,color:c||'#a8c4a0'});S.strat.log.length=Math.min(9,S.strat.log.length);dirty=true;};
let quality=store.get('fq','medium'),fps=60,fAcc=0,fN=0,slow=0;
const Q={high:{px:2,sh:true,gr:1200,fl:280,en:40},medium:{px:1.5,sh:true,gr:700,fl:160,en:30},low:{px:1,sh:false,gr:300,fl:70,en:20}};
const Sfx={ctx:null,mst:null,muted:store.get('fmute',false),
ensure(){if(!this.ctx){try{const A=window.AudioContext||window.webkitAudioContext;this.ctx=new A();this.mst=this.ctx.createGain();this.mst.gain.value=this.muted?0:.7;this.mst.connect(this.ctx.destination);}catch(e){}}if(this.ctx?.state==='suspended')this.ctx.resume();},
mute(m){this.muted=m;store.set('fmute',m);if(this.mst)this.mst.gain.linearRampToValueAtTime(m?0:.7,this.ctx.currentTime+.1);$('icoSoundOn').style.display=m?'none':'';$('icoSoundOff').style.display=m?'':'none';},
t(f0,f1,d,ty,v){if(!this.ctx||this.muted)return;const s=this.ctx.currentTime,o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=ty;o.frequency.setValueAtTime(f0,s);o.frequency.exponentialRampToValueAtTime(Math.max(f1,1),s+d);g.gain.setValueAtTime(v,s);g.gain.exponentialRampToValueAtTime(.001,s+d);o.connect(g);g.connect(this.mst);o.start(s);o.stop(s+d+.02);},
n(d,f,v){if(!this.ctx||this.muted)return;const n=Math.floor(this.ctx.sampleRate*d),b=this.ctx.createBuffer(1,n,this.ctx.sampleRate),c=b.getChannelData(0);for(let i=0;i<n;i++)c[i]=(Math.random()*2-1)*(1-i/n);const s=this.ctx.createBufferSource();s.buffer=b;const fl=this.ctx.createBiquadFilter();fl.type='lowpass';fl.frequency.value=f;const g=this.ctx.createGain();g.gain.value=v;s.connect(fl);fl.connect(g);g.connect(this.mst);s.start();},
step(){this.n(.03,700,.05);},jump(){this.t(260,520,.12,'triangle',.14);},land(){this.n(.08,300,.2);},act(){this.t(420,640,.1,'sine',.13);},pick(){this.t(620,920,.12,'sine',.16);},eat(){this.n(.07,900,.12);},craft(){this.t(300,600,.15,'square',.1);},coin(){this.t(800,1200,.08,'sine',.14);},
swing(){this.n(.08,1600,.12);},mh(){this.n(.06,700,.18);this.t(180,90,.09,'square',.1);},shoot(){this.n(.06,2400,.2);this.t(340,110,.07,'square',.1);},boom(){this.n(.14,1300,.28);},dry(){this.t(200,150,.06,'square',.08);},dodge(){this.n(.12,900,.16);},chop(){this.n(.07,900,.2);},mine(){this.n(.06,1400,.22);},cut(){this.n(.05,2200,.14);},deny(){this.t(180,120,.12,'square',.1);},hit(){this.n(.06,600,.16);},kill(){this.t(300,120,.14,'square',.12);},hurt(){this.t(200,70,.25,'sawtooth',.18);},
level(){[523,659,784,1047].forEach((f,i)=>setTimeout(()=>this.t(f,f,.2,'triangle',.18),i*100));},death(){[330,247,196].forEach((f,i)=>setTimeout(()=>this.t(f,f*.9,.3,'triangle',.16),i*180));},travel(){this.t(200,800,.5,'sine',.15);},raid(){this.t(160,380,.4,'sawtooth',.16);},build(){this.t(180,420,.2,'square',.12);}};
Sfx.mute(Sfx.muted);
function toast(m){const e=$('toast');e.textContent=m;e.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>e.classList.remove('show'),2600);}
function feed(h,c){const f=$('lootFeed'),d=document.createElement('div');d.className='loot-line';d.style.borderColor=c||'var(--line)';d.style.color=c||'var(--text)';d.innerHTML=h;f.appendChild(d);while(f.children.length>5)f.removeChild(f.firstChild);setTimeout(()=>d.remove(),3100);}
const save=()=>store.set(KEY,S);
const err=e=>{console.error(e);errs++;if(errs===1)toast('⚠️ '+e.message);if(errs>40){state='paused';open('pause');}};
const OV={intro:$('overlayIntro'),pause:$('overlayPause'),inv:$('overlayInv'),craft:$('overlayCraft'),trade:$('overlayTrade'),map:$('overlayMap'),death:$('overlayDeath')};
function clearQ(){qInt=qJump=qDodge=touchSpr=holdM=holdG=false;for(const k in keys)keys[k]=false;joy.x=joy.y=0;joy.id=null;$('joyKnob').style.transform='translate(-50%,-50%)';}
function cancelG(){P.gt=0;P.gTgt=null;P.gDone=false;$('gatherProgress').classList.remove('show');}
function open(n){clearQ();cancelG();panel=n;Object.values(OV).forEach(o=>o.classList.add('hidden'));if(n&&OV[n])OV[n].classList.remove('hidden');dirty=true;renderAll();}
function close(){clearQ();panel=null;Object.values(OV).forEach(o=>o.classList.add('hidden'));}
function start(){Sfx.ensure();state='playing';close();toast('ЛКМ — бой · ПКМ — огнестрел · Q — уклон · E — добыча · M — карта');}
const st=document.createElement('style');
st.textContent=`#capChip{gap:7px}#capChip.full{border-color:var(--danger)}#capBar{width:56px;height:7px;border-radius:5px;background:#0d2114;border:1px solid #2c5237;overflow:hidden}#capFill{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--teal),var(--amber))}#capText{font-size:11px;min-width:52px;text-align:right}
#stratHud{position:fixed;top:70px;right:16px;z-index:19;display:flex;flex-direction:column;gap:8px;align-items:flex-end}.strat-chip{background:rgba(10,25,16,.85);border:1px solid rgba(120,200,140,.3);border-radius:12px;padding:8px 14px;font-size:12px;backdrop-filter:blur(6px);min-width:190px}.strat-chip .sc-label{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--dim)}.strat-chip .sc-bar{height:8px;border-radius:5px;background:#0d2114;border:1px solid #2c5237;overflow:hidden;margin-top:4px}.strat-chip .sc-bar>i{display:block;height:100%;width:0}
#threatFill{background:linear-gradient(90deg,#7ee081,#ffd166,#ff5a5f)}#fortFill{background:linear-gradient(90deg,#6fc3ff,#4de3c1)}#raidWarn{color:var(--danger);font-weight:700;font-size:12px;margin-top:4px;display:none}
#combatHud{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:23;display:flex;gap:14px;align-items:center;background:rgba(10,25,16,.86);border:1px solid rgba(120,200,140,.3);border-radius:16px;padding:10px 18px;backdrop-filter:blur(8px);font-size:13px}#combatHud .sh-sep{width:1px;height:26px;background:rgba(120,200,140,.25)}#combatHud .sh-label{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--dim);display:block}#combatHud .sh-val{font-family:'Unbounded';font-weight:700;font-size:15px}
#ammoVal{color:var(--amber)}#ammoVal.empty{color:var(--danger)}#meleeVal{color:var(--danger)}#gunVal{color:var(--amber)}#dodgeVal{color:var(--teal)}
#crosshair{position:fixed;width:26px;height:26px;pointer-events:none;z-index:40;transform:translate(-50%,-50%);opacity:.9}#crosshair:before,#crosshair:after{content:'';position:absolute;background:var(--amber)}#crosshair:before{left:50%;top:0;width:2px;height:100%;transform:translateX(-50%)}#crosshair:after{top:50%;left:0;height:2px;width:100%;transform:translateY(-50%)}#crosshair i{position:absolute;left:50%;top:50%;width:6px;height:6px;border:2px solid var(--amber);border-radius:50%;transform:translate(-50%,-50%)}
#gatherProgress{position:fixed;left:50%;bottom:150px;transform:translateX(-50%);z-index:26;width:240px;background:rgba(10,25,16,.92);border:1px solid var(--teal);border-radius:12px;padding:10px 14px;opacity:0;pointer-events:none;transition:.15s}#gatherProgress.show{opacity:1}#gatherProgress .gp-label{font-size:12px;font-weight:600;margin-bottom:6px;text-align:center}#gatherProgress .gp-track{height:7px;border-radius:5px;background:#0d2114;border:1px solid #2c5237;overflow:hidden}#gatherProgress .gp-track>i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--teal),var(--amber))}
#banner{position:fixed;top:20%;left:50%;transform:translate(-50%,-10px);z-index:28;text-align:center;opacity:0;pointer-events:none;transition:.35s}#banner.show{opacity:1;transform:translate(-50%,0)}#banner .b1{font-family:'Unbounded';font-weight:900;font-size:28px;text-shadow:0 3px 18px rgba(0,0,0,.8)}#banner .b2{font-size:13px;color:var(--amber);margin-top:4px}
.map-fort{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;z-index:2;cursor:pointer}.map-fort .mf-dot{width:62px;height:62px;border-radius:16px;margin:0 auto 6px;display:flex;align-items:center;justify-content:center;font-size:28px;border:2px solid var(--amber);background:linear-gradient(140deg,#24452c,#1a3624)}.map-fort.selected .mf-dot{border-color:var(--teal);box-shadow:0 0 26px rgba(77,227,193,.6)}.map-fort .mf-name{font-size:12px;font-weight:700}
.map-ring{position:absolute;transform:translate(-50%,-50%);width:124px;text-align:center;cursor:pointer;transition:.15s;z-index:2}.map-ring:hover{transform:translate(-50%,-50%) scale(1.06)}.map-ring .mr-dot{width:46px;height:46px;border-radius:50%;margin:0 auto 6px;display:flex;align-items:center;justify-content:center;font-size:20px;border:2px solid var(--line);background:var(--surface2)}.map-ring.cleared .mr-dot{border-color:var(--success)}.map-ring.selected .mr-dot{border-color:var(--teal)}.map-ring.current .mr-dot{border-color:var(--amber)}.map-ring .mr-name{font-size:11px;font-weight:700}.map-ring .mr-pop{font-size:10px;color:var(--dim)}.map-ring .mr-lead{font-size:9.5px;margin-top:2px}
.mig{position:absolute;width:9px;height:9px;border-radius:50%;box-shadow:0 0 8px currentColor;transform:translate(-50%,-50%);z-index:1;pointer-events:none}
#warLog{margin-top:10px;background:#0d2114;border:1px solid var(--line);border-radius:12px;padding:10px 12px;max-height:120px;overflow:auto;font-size:11.5px;line-height:1.6}#warLog .wt{font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--dim);margin-bottom:5px}
.upg,.botr{display:flex;align-items:center;gap:12px;background:var(--surface2);border:1px solid var(--line);border-radius:12px;padding:12px 14px;margin-bottom:8px}.upg .ui,.botr .bi{font-size:26px;width:36px;text-align:center}.upg .um,.botr .bm{flex:1;min-width:0}.upg .un,.botr .bn{font-weight:700;font-size:14px}.upg .ud,.botr .bd{font-size:11.5px;color:var(--dim);margin-top:3px}.upg .ul{font-size:11px;color:var(--amber);font-weight:700}
.hire{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin:10px 0}.hire button{flex:1;min-width:140px}.bmode{display:flex;gap:6px;margin-top:6px;flex-wrap:wrap;align-items:center}.bmode button{font-size:11px;padding:5px 10px}.bmode button.active{border-color:var(--teal);color:var(--teal)}.bmode select{font-size:11px;padding:5px 8px;background:var(--surface2);border:1px solid var(--line);color:var(--text);border-radius:8px}`;
document.head.appendChild(st);
const mk=(h,cls,par)=>{const e=document.createElement('div');if(cls)e.className=cls;e.innerHTML=h;(par||document.body).appendChild(e);return e;};
const capChip=mk('🎒 <span id="capText">0/60</span><div id="capBar"><i id="capFill"></i></div>','chip',document.querySelector('#hud .hud-group'));capChip.id='capChip';
mk(`<div class="strat-chip"><div class="sc-label">Угроза крепости</div><div class="sc-bar"><i id="threatFill"></i></div><div id="raidWarn"></div></div><div class="strat-chip"><div class="sc-label">Прочность крепости</div><div class="sc-bar"><i id="fortFill"></i></div></div>`,'',document.body).id='stratHud';
mk(`<div><span class="sh-label">Ближний бой</span><span class="sh-val" id="meleeVal">—</span></div><div class="sh-sep"></div><div><span class="sh-label">Огнестрел</span><span class="sh-val" id="gunVal">—</span></div><div class="sh-sep"></div><div><span class="sh-label">Патроны</span><span class="sh-val" id="ammoVal">0</span></div><div class="sh-sep"></div><div><span class="sh-label">Уклон</span><span class="sh-val" id="dodgeVal">Q</span></div>`,'',document.body).id='combatHud';
mk('<i></i>','',document.body).id='crosshair';
const banner=mk('<div class="b1"></div><div class="b2"></div>','',document.body);banner.id='banner';
const gUI=mk('<div class="gp-label"></div><div class="gp-track"><i></i></div>','',document.body);gUI.id='gatherProgress';
let banT=null;const showBanner=(a,b,c)=>{banner.querySelector('.b1').textContent=a;banner.querySelector('.b1').style.color=c||'var(--text)';banner.querySelector('.b2').textContent=b;banner.classList.add('show');clearTimeout(banT);banT=setTimeout(()=>banner.classList.remove('show'),2700);};
const bFort=mk('🏰','icon-btn',document.querySelector('#hud .hud-group:last-child'));bFort.style.pointerEvents='auto';bFort.title='Крепость';
const bBots=mk('🤖','icon-btn',document.querySelector('#hud .hud-group:last-child'));bBots.style.pointerEvents='auto';bBots.title='Отряд';
[bFort,bBots].forEach(b=>{b.style.cursor='pointer';b.style.display='flex';b.style.alignItems='center';b.style.justifyContent='center';});
const mkPanel=(id,t,e)=>{const o=mk(`<div class="panel wide"><div class="eyebrow">${e}</div><h2>${t}</h2><div class="pbody"></div><div class="btn-row"><button class="btn-ghost cb">Закрыть</button></div></div>`,'overlay hidden');o.id=id;o.querySelector('.cb').onclick=close;return o;};
OV.fort=mkPanel('oFort','Крепость','стройка и оборона');OV.bots=mkPanel('oBots','Отряд наёмников','найм и приказы');
const threat=()=>{let t=0,m=0;STR.ring.forEach(i=>{const o=S.strat.owners[i];if(o==='player')return;const L=D.leaders[o]||D.leaders[i];t+=(S.strat.pops[i]||0)*(L?L.aggression:1);m+=maxPop(i)*1.5;});return m>0?clamp(t/m*100,0,100):0;};
function hud(){const s=stats();$('hpFill').style.width=clamp(S.hp/s.maxHp*100,0,100)+'%';$('stFill').style.width=clamp(S.stamina/s.maxStamina*100,0,100)+'%';$('hpText').textContent=Math.ceil(S.hp);$('stText').textContent=Math.ceil(S.stamina);$('lvlText').textContent='Ур.'+S.level;
 const c=XP[S.level-1]||0,n=XP[S.level]||XP[XP.length-1];$('xpFill').style.width=clamp((S.xp-c)/(n-c)*100,0,100)+'%';$('coinText').textContent=S.coins;$('locText').textContent=D.locations[S.location].name;
 const w=weight(),cp=cap();$('capText').textContent=w.toFixed(1)+'/'+cp;$('capFill').style.width=clamp(w/cp*100,0,100)+'%';capChip.classList.toggle('full',w>=cp-.05);
 $('threatFill').style.width=threat()+'%';$('fortFill').style.width=clamp(S.strat.fortressHP/fortMax()*100,0,100)+'%';
 const r=$('raidWarn');if(S.strat.raidActive){r.style.display='block';r.textContent='🔥 НАБЕГ! '+S.strat.raidLeft;}else if(S.strat.raidCountdown>0){r.style.display='block';r.textContent='⚠️ Набег через '+Math.ceil(S.strat.raidCountdown)+'с';}else r.style.display='none';
 $('meleeVal').textContent=melee().name;$('gunVal').textContent=gun()?item(S.equipment.gun).name:'—';$('ammoVal').textContent=cnt('ammo');$('ammoVal').classList.toggle('empty',cnt('ammo')<=0);
 $('dodgeVal').textContent=P.dgCd>0?P.dgCd.toFixed(1)+'с':'Q';$('dodgeVal').style.color=P.dgCd>0?'var(--danger)':'var(--teal)';}
function quest(){counters();if(S.tutorialDone){$('questText').textContent='Держите сектора и укрепляйте крепость.';$('questProgress').textContent='Секторов: '+STR.ring.filter(i=>S.strat.owners[i]==='player').length+'/6';return;}
 const q=D.tutorial[S.tutorialStep];if(!q)return;$('questText').textContent=q.text;let p='';
 if(q.type==='gather')p=Object.entries(q.need).map(([i,n])=>(S.counters.gather[i]||0)+'/'+n+' '+item(i).name).join(' · ');
 else if(q.type==='haveAny')p=q.need.some(i=>cnt(i)>0||S.equipment.weapon===i)?'Готово':'Создайте оружие';
 else if(q.type==='equipSlot')p=S.equipment[q.slot]?'Готово':'Не экипировано';else if(q.type==='travelAny')p=S.location!=='fortress'?'Готово':'Вы в крепости';else if(q.type==='clearAny')p=S.counters.clears>0?'Готово':'Разбейте гарнизон';
 $('questProgress').textContent=p;}
function tut(){counters();if(S.tutorialDone)return;let g=0;while(!S.tutorialDone&&g++<20){const q=D.tutorial[S.tutorialStep];if(!q){S.tutorialDone=true;break;}let ok=false;
 if(q.type==='gather')ok=Object.entries(q.need).every(([i,n])=>(S.counters.gather[i]||0)>=n);else if(q.type==='haveAny')ok=q.need.some(i=>cnt(i)>0||S.equipment.weapon===i);
 else if(q.type==='equipSlot')ok=!!S.equipment[q.slot];else if(q.type==='travelAny')ok=S.location!=='fortress';else if(q.type==='clearAny')ok=S.counters.clears>0;
 if(!ok)break;S.tutorialStep++;Sfx.pick();toast('✅ Цель выполнена!');if(S.tutorialStep>=D.tutorial.length){S.tutorialDone=true;toast('🎓 Обучение завершено!');}}dirty=true;}
function attrs(t){const nm={atk:'Атака',def:'Защита',reach:'Дальность',speed:'Скорость',gatherType:'Инструмент',gatherPower:'Сила добычи',luck:'Удача'},l=[];
 for(const k in nm)if(t[k])l.push(nm[k]+': '+t[k]);if(t.gun)l.push('Урон '+t.gun.dmg+' · темп '+t.gun.rate+'/с · патронов '+t.gun.ammoCost);
 if(t.use){const u=[];if(t.use.heal)u.push('+'+t.use.heal+' HP');if(t.use.stamina)u.push('+'+t.use.stamina+' сил');if(t.use.curePoison)u.push('снимает яд');l.push(u.join(', '));}
 l.push('Цена '+t.value+' 🪙 · вес '+t.weight);return l.join('<br>');}
function filters(){const c=['all',...Object.keys(CAT)],h=(cu,k)=>c.map(x=>`<button class="filter-btn ${cu===x?'active':''}" data-kind="${k}" data-cat="${x}">${x==='all'?'Все':CAT[x].icon+' '+CAT[x].name}</button>`).join('');$('craftFilters').innerHTML=h(cFilter,'c');$('invFilters').innerHTML=h(iFilter,'i');}
function inv(){const s=stats(),w=weight(),c=cap();$('statLine').innerHTML=`⚔️ ${s.atk} · 🛡️ ${s.def} · 🍀 ${s.luck}<br><span style="color:${w>=c?'var(--danger)':'var(--teal)'}">🎒 ${w.toFixed(1)} / ${c}</span>`;
 const sn={tool:'Инструмент',weapon:'Ближний бой',gun:'Огнестрел',armor:'Броня',charm:'Амулет'};
 $('equipSlots').innerHTML=Object.keys(S.equipment).map(k=>{const i=S.equipment[k],t=i?item(i):null;return`<div class="equip-slot" data-slot="${k}"><div class="es-label">${sn[k]}</div><div class="es-icon">${t?t.icon:'—'}</div><div class="es-name" style="color:${t?rc(i):'var(--dim)'}">${t?t.name:'Пусто'}</div></div>`;}).join('');
 const ids=Object.keys(S.inventory).filter(i=>cnt(i)>0&&(iFilter==='all'||item(i).cat===iFilter)).sort((a,b)=>RAR[item(a).rarity].order-RAR[item(b).rarity].order);
 $('invGrid').innerHTML=ids.map(i=>`<div class="inv-item" data-id="${i}" style="border-color:${rc(i)}55"><div class="ii-count">×${cnt(i)}</div><div class="ii-icon">${item(i).icon}</div><div class="ii-name" style="color:${rc(i)}">${item(i).name}</div><div class="ii-cat">${badge(i)}</div></div>`).join('')||'<div class="story">Пусто.</div>';invD();}
function invD(){const i=selInv,b=$('invDetail');if(!i||!item(i)||cnt(i)<=0){b.innerHTML='Выберите предмет.';return;}const t=item(i);let x='';
 if(t.slot)x+=`<button class="btn-primary" data-a="equip" data-id="${i}">Экипировать</button>`;if(t.use)x+=`<button class="btn-ghost" data-a="use" data-id="${i}">Использовать</button>`;
 if(t.value>0)x+=`<button class="btn-ghost" data-a="sell" data-id="${i}">Продать ${sellP(i)} 🪙</button>`;x+=`<button class="btn-ghost" data-a="drop" data-id="${i}">Выбросить</button>`;
 b.innerHTML=`<div class="id-name" style="color:${rc(i)}">${t.icon} ${t.name} ${badge(i)}</div><div class="id-purpose">📌 ${cm(i).purpose}</div><div class="id-desc">${t.desc}</div><div class="id-attrs">${attrs(t)}</div><div class="btn-row" style="justify-content:flex-start;margin-top:10px">${x}</div>`;}
const cost=r=>{const d=1-(S.strat.fortress.workshop||1)*.05,m={};Object.entries(r.mats).forEach(([i,n])=>m[i]=Math.max(1,Math.ceil(n*d)));return m;};
function craftR(){const l=D.recipes.filter(r=>cFilter==='all'||item(r.out).cat===cFilter);
 $('craftList').innerHTML=l.map(r=>{const idx=D.recipes.indexOf(r),t=item(r.out),m=cost(r),ok=S.level>=r.level&&Object.entries(m).every(([i,n])=>cnt(i)>=n);
 const ms=Object.entries(m).map(([i,n])=>`<span class="${cnt(i)>=n?'ok':'missing'}">${item(i).icon}${cnt(i)}/${n}</span>`).join(' ');
 return`<div class="recipe"><div class="r-icon">${t.icon}</div><div class="r-main"><div class="r-name" style="color:${rc(r.out)}">${t.name} <span style="font-size:10px;color:var(--dim)">ур.${r.level}</span> ${badge(r.out)}</div><div class="r-mats">${ms}</div></div><button class="btn-ghost" data-idx="${idx}" ${ok?'':'disabled'}>Создать</button></div>`;}).join('')||'<div class="story">Нет рецептов.</div>';}
function craft(idx){const r=D.recipes[idx];if(!r)return;if(S.level<r.level)return toast('Нужен уровень '+r.level);const m=cost(r);
 if(!Object.entries(m).every(([i,n])=>cnt(i)>=n))return toast('Не хватает материалов');Object.entries(m).forEach(([i,n])=>take(i,n));
 add(r.out,r.n||1);xp(12+RAR[item(r.out).rarity].order*8);Sfx.craft();toast('🛠️ '+item(r.out).name);burst(P.x,1.4,P.z,0xffd166,16,3,3,.8);dirty=true;tut();save();}
const rec=(k,i,n)=>{counters();const a=k==='buy'?'bought':'sold';S.counters[a][i]=(S.counters[a][i]||0)+n;};
function trade(){$('tradeCoins').textContent=S.coins;const ids=tab==='buy'?D.merchantStock:Object.keys(S.inventory).filter(i=>cnt(i)>0&&item(i).value>0);
 $('tradeList').innerHTML=ids.map(i=>{const t=item(i),p=tab==='buy'?buyP(i):sellP(i),ok=tab==='buy'?S.coins>=p:cnt(i)>0;
 return`<div class="trade-row"><div class="t-icon">${t.icon}</div><div class="t-main"><div class="t-name" style="color:${rc(i)}">${t.name} ${badge(i)}</div><div class="t-sub">${tab==='buy'?'Цена':'Получите'} ${p} 🪙${tab==='sell'?' · у вас '+cnt(i):''}</div></div><button class="btn-ghost" data-id="${i}" ${ok?'':'disabled'}>${tab==='buy'?'Купить':'Продать'}</button></div>`;}).join('')||'<div class="story">Пусто.</div>';}
const uCost=k=>Math.round(D.fortressUpgrades[k].baseCost*Math.pow(D.fortressUpgrades[k].growth,S.strat.fortress[k]||0)*(1-(S.strat.fortress.workshop||0)*.04));
function fortP(){const b=OV.fort.querySelector('.pbody'),f=S.strat.fortress;
 let h=`<div class="story" style="font-size:13px">Прочность <b style="color:var(--teal)">${Math.round(S.strat.fortressHP)}/${fortMax()}</b> · 🪙 <b style="color:var(--amber)">${S.coins}</b> · отряд ${S.strat.bots.length}/${botCap()}</div>`;
 Object.entries(D.fortressUpgrades).forEach(([k,u])=>{const l=f[k]||0,c=uCost(k),mx=l>=u.max;h+=`<div class="upg"><div class="ui">${u.icon}</div><div class="um"><div class="un">${u.name} <span class="ul">ур.${l}/${u.max}</span></div><div class="ud">${u.effect}</div></div><button class="btn-ghost" data-u="${k}" ${!mx&&S.coins>=c?'':'disabled'}>${mx?'Макс':c+' 🪙'}</button></div>`;});
 b.innerHTML=h;b.querySelectorAll('[data-u]').forEach(x=>x.onclick=()=>upg(x.dataset.u));}
function upg(k){const u=D.fortressUpgrades[k],l=S.strat.fortress[k]||0;if(l>=u.max)return;const c=uCost(k);if(S.coins<c)return toast('Мало монет');
 S.coins-=c;S.strat.fortress[k]=l+1;if(k==='walls')S.strat.fortressHP=fortMax();Sfx.build();toast('🏗️ '+u.name+' ур.'+(l+1));war('🏗️ '+u.name+' → ур.'+(l+1),'#ffd166');dirty=true;fortP();save();}
const botCap=()=>1+(S.strat.fortress.barracks||1);
const bStat=b=>b.mode==='mission'?'Атакует '+D.locations[b.target].name+' ('+Math.ceil(b.missionT)+'с)':b.mode==='follow'?'Идёт с вами':'Резерв (лечится)';
function botsP(){const b=OV.bots.querySelector('.pbody');let h=`<div class="story" style="font-size:13px">🪙 <b style="color:var(--amber)">${S.coins}</b> · отряд ${S.strat.bots.length}/${botCap()}</div><div class="hire">`;
 Object.entries(D.botTypes).forEach(([i,t])=>h+=`<button class="btn-ghost" data-h="${i}" ${S.coins>=t.cost&&S.strat.bots.length<botCap()?'':'disabled'}>${t.icon} ${t.name} · ${t.cost}🪙</button>`);h+='</div>';
 if(!S.strat.bots.length)h+='<div class="story">Отряда нет.</div>';
 S.strat.bots.forEach((bo,i)=>{const t=D.botTypes[bo.type],p=bo.hp/t.hp*100,c=p>50?'var(--success)':p>25?'var(--amber)':'var(--danger)';
 h+=`<div class="botr"><div class="bi">${t.icon}</div><div class="bm"><div class="bn">${t.name} <span data-hp="${i}" style="color:${c}">${Math.round(bo.hp)}/${t.hp}</span></div><div class="bd" data-st="${i}">${bStat(bo)}</div><div class="bmode"><button class="btn-ghost ${bo.mode==='follow'?'active':''}" data-m="follow" data-i="${i}">Со мной</button><button class="btn-ghost ${bo.mode==='idle'?'active':''}" data-m="idle" data-i="${i}">Резерв</button><select data-s="${i}"><option value="">В атаку…</option>${STR.ring.map(x=>`<option value="${x}">${D.locations[x].name} (${S.strat.pops[x]||0})</option>`).join('')}</select></div></div></div>`;});
 b.innerHTML=h;b.querySelectorAll('[data-h]').forEach(x=>x.onclick=()=>hire(x.dataset.h));b.querySelectorAll('[data-m]').forEach(x=>x.onclick=()=>bMode(+x.dataset.i,x.dataset.m));b.querySelectorAll('[data-s]').forEach(x=>x.onchange=()=>{if(x.value)bSend(+x.dataset.s,x.value);});}
function botsLive(){if(panel!=='bots')return;const b=OV.bots.querySelector('.pbody');S.strat.bots.forEach((bo,i)=>{const t=D.botTypes[bo.type],h=b.querySelector('[data-hp="'+i+'"]'),s=b.querySelector('[data-st="'+i+'"]');
 if(h){const p=bo.hp/t.hp*100;h.textContent=Math.round(bo.hp)+'/'+t.hp;h.style.color=p>50?'var(--success)':p>25?'var(--amber)':'var(--danger)';}if(s)s.textContent=bStat(bo);});}
function hire(t){const b=D.botTypes[t];if(S.coins<b.cost||S.strat.bots.length>=botCap())return;S.coins-=b.cost;S.strat.bots.push({type:t,hp:b.hp,mode:'follow',target:null,missionT:0});Sfx.coin();toast('🤖 '+b.name);syncAlly();dirty=true;botsP();save();}
function bMode(i,m){const b=S.strat.bots[i];if(!b)return;b.mode=m;b.target=null;b.missionT=0;syncAlly();dirty=true;botsP();save();}
function bSend(i,t){const b=S.strat.bots[i];if(!b)return;b.mode='mission';b.target=t;b.missionT=18;toast('📤 → '+D.locations[t].name);syncAlly();dirty=true;botsP();save();}
const rPos=i=>{const a=-Math.PI/2+i/STR.ring.length*TAU;return{x:50+Math.cos(a)*38,y:50+Math.sin(a)*38};};
function mapR(){const a=$('mapArea');let h='<svg viewBox="0 0 100 100" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%">';
 STR.ring.forEach((i,k)=>{const p=rPos(k);h+=`<line x1="50" y1="50" x2="${p.x}" y2="${p.y}" stroke="rgba(168,196,160,.25)" stroke-width=".5" stroke-dasharray="2 2"/>`;});h+='</svg>';
 h+=`<div class="map-fort ${selMap==='fortress'?'selected':''}" data-id="fortress"><div class="mf-dot">🏰</div><div class="mf-name">Крепость${S.location==='fortress'?' · вы здесь':''}</div><div class="mr-pop">HP ${Math.round(S.strat.fortressHP)}/${fortMax()}</div></div>`;
 STR.ring.forEach((i,k)=>{const p=rPos(k),pop=S.strat.pops[i]||0,o=S.strat.owners[i],L=D.leaders[o]||D.leaders[i],cl=o==='player'&&pop<=0;
 h+=`<div class="map-ring ${cl?'cleared':''} ${selMap===i?'selected':''} ${S.location===i?'current':''}" data-id="${i}" style="left:${p.x}%;top:${p.y}%"><div class="mr-dot" style="border-color:${cl?'var(--success)':L.color}">${cl?'✅':L.icon}</div><div class="mr-name">${D.locations[i].name}</div><div class="mr-pop">${cl?'под контролем':'гарнизон '+pop}</div><div class="mr-lead" style="color:${L.color}">${o==='player'?'Ваш сектор':L.name+' ур.'+S.strat.leaderLv[o]}</div></div>`;});
 S.strat.migrations.forEach(m=>{const s=rPos(STR.ring.indexOf(m.from)),e=m.to==='fortress'?{x:50,y:50}:rPos(STR.ring.indexOf(m.to));h+=`<div class="mig" style="left:${lerp(s.x,e.x,m.t)}%;top:${lerp(s.y,e.y,m.t)}%;background:${m.color};color:${m.color}"></div>`;});
 a.innerHTML=h;const l=D.locations[selMap]||D.locations.fortress;let d=`<b>${l.name}</b><br>${l.desc}<br>`;
 if(selMap!=='fortress'){const o=S.strat.owners[selMap],L=D.leaders[o]||D.leaders[selMap];d+=`<span style="color:${L.color}">${o==='player'?'✅ Ваш сектор':L.icon+' '+L.name+' ('+L.trait+') ур.'+S.strat.leaderLv[o]}</span><br>`;
 if(o!=='player')d+=`<span style="color:var(--dim)">${L.method}</span><br>`;d+=`${l.camp.hall} · гарнизон ${S.strat.pops[selMap]||0}/${maxPop(selMap)} · оборона ${Math.round(defense(selMap))}<br>Ресурсы: ${[...new Set(Object.values(l.nodeDefs).map(n=>item(n.base.item).name))].join(', ')}<br>`;}
 d+=`Угроза ${Math.round(threat())}% · лимит секторов у лидера: ${STR.maxSectorsPerLeader}<div id="warLog"><div class="wt">Хроника войны</div>${S.strat.log.length?S.strat.log.map(e=>`<div style="color:${e.color}">${e.text}</div>`).join(''):'<div style="color:var(--dim)">Пока тихо.</div>'}</div>`;
 $('mapDetail').innerHTML=d;$('btnTravel').disabled=selMap===S.location;$('btnTravel').textContent=selMap==='fortress'?'Вернуться в крепость':'Отправиться';}
function panels(){if(!dirty)return;if(panel==='inv')inv();else if(panel==='craft')craftR();else if(panel==='trade')trade();else if(panel==='map')mapR();else if(panel==='fort')fortP();else if(panel==='bots')botsP();dirty=false;}
function renderAll(){dirty=true;hud();quest();filters();panels();}
const R=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});R.domElement.id='gameCanvas3D';R.setPixelRatio(Math.min(devicePixelRatio,Q[quality].px));R.setSize(innerWidth,innerHeight);R.shadowMap.enabled=true;R.shadowMap.type=THREE.PCFSoftShadowMap;R.toneMapping=THREE.ACESFilmicToneMapping;R.toneMappingExposure=1.12;document.body.appendChild(R.domElement);
const scene=new THREE.Scene();scene.fog=new THREE.Fog(0x9fc0d8,70,190);
let fr=14,yaw=Math.PI/4,yawT=Math.PI/4;const cam=new THREE.OrthographicCamera(-1,1,1,-1,.1,400);
const hemi=new THREE.HemisphereLight(0xcfeaff,0x4a6a3a,.62);scene.add(hemi);
const sun=new THREE.DirectionalLight(0xffe2b4,1.65);sun.castShadow=Q[quality].sh;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-26,right:26,top:26,bottom:-26,far:95});sun.shadow.bias=-.0022;scene.add(sun,sun.target);
const fl=new THREE.DirectionalLight(0x7fb0ff,.28);fl.position.set(-14,10,-16);scene.add(fl);
const skyC=document.createElement('canvas');skyC.width=skyC.height=256;const skyX=skyC.getContext('2d');const skyT=new THREE.CanvasTexture(skyC);skyT.colorSpace=THREE.SRGBColorSpace;scene.background=skyT;SHARED_TEX.add(skyT);
function sky(){const l=D.locations[S.location],t=new THREE.Color(l.sky||0x9fc0d8),g=skyX.createLinearGradient(0,0,0,256);
 g.addColorStop(0,'#'+t.clone().multiplyScalar(.8).getHexString());g.addColorStop(.6,'#'+t.getHexString());g.addColorStop(1,'#'+t.clone().lerp(new THREE.Color(0xf0dfb8),.5).getHexString());
 skyX.fillStyle=g;skyX.fillRect(0,0,256,256);skyT.needsUpdate=true;scene.fog.color.copy(t).lerp(new THREE.Color(0xf0dfb8),.25);}
function qual(){const q=Q[quality];R.setPixelRatio(Math.min(devicePixelRatio,q.px));R.setSize(innerWidth,innerHeight);sun.castShadow=q.sh;
 if(world){world.grass&&(world.grass.count=q.gr);world.flowers&&(world.flowers.count=q.fl);}$('qualitySelect').value=quality;store.set('fq',quality);}
const SK=(Array.isArray(window.SKINS)&&window.SKINS.length)?window.SKINS:[{id:'wanderer',colors:{},glow:2}];
const MM={helmet:new THREE.MeshLambertMaterial({color:0x2a2a33,map:TEX.metal}),eyes:new THREE.MeshLambertMaterial({color:0xff2a1a,emissive:0xff2a1a,emissiveIntensity:2}),jacket:new THREE.MeshLambertMaterial({color:0x4a7c33,map:TEX.cloth}),pants:new THREE.MeshLambertMaterial({color:0x4a3222,map:TEX.cloth}),boots:new THREE.MeshLambertMaterial({color:0x2b1c12,map:TEX.bark}),scarf:new THREE.MeshLambertMaterial({color:0xf2e3c2,map:TEX.cloth}),pack:new THREE.MeshLambertMaterial({color:0x6b4a33,map:TEX.bark}),skin:new THREE.MeshLambertMaterial({color:0xf2c9a0,map:TEX.skin})};
const hero=new THREE.Group();let gunG,gunM,muzzle,melM;
{put(hero,G.box,MM.jacket,0,1.35,0,.9,1.1,.6);put(hero,G.box,MM.boots,0,.85,0,.92,.14,.62);
 const head=put(hero,G.sph,MM.helmet,0,2.35,0,1.1,1.02,1.1);put(hero,G.sph,MM.skin,0,2.3,.28,.84,.72,.5);
 [-.18,.18].forEach(x=>put(hero,G.sph,MM.eyes,x,2.42,.6,.16,.16,.16));put(hero,G.box,MM.scarf,0,1.95,0,.95,.2,.65);put(hero,G.box,MM.pack,0,1.4,-.42,.55,.65,.28);
 const lL=new THREE.Group(),lR=new THREE.Group();lL.position.set(-.22,.85,0);lR.position.set(.22,.85,0);
 [lL,lR].forEach(l=>{put(l,G.box,MM.pants,0,-.4,0,.28,.8,.3);put(l,G.box,MM.boots,0,-.72,.08,.32,.18,.45);hero.add(l);});
 const aL=new THREE.Group(),aR=new THREE.Group();aL.position.set(-.58,1.75,.1);aR.position.set(.58,1.75,.1);
 [aL,aR].forEach(a=>{put(a,G.box,MM.jacket,0,-.35,0,.24,.7,.26);put(a,G.sph,MM.skin,0,-.62,.1,.28,.28,.28);hero.add(a);});
 melM=new THREE.MeshLambertMaterial({color:0xb0b0b8,map:TEX.metal});
 const mg=new THREE.Group();put(mg,G.box,MM.boots,0,-.1,0,.08,.5,.08);put(mg,G.box,melM,0,.45,0,.12,.7,.05);mg.position.set(0,-.6,.1);mg.rotation.x=.3;aR.add(mg);
 gunM=new THREE.MeshLambertMaterial({color:0x333340,map:TEX.metal,emissive:0x000000,emissiveIntensity:.3});
 gunG=new THREE.Group();put(gunG,G.box,gunM,0,0,.35,.22,.22,.7);const b=put(gunG,G.cyl,gunM,0,0,.85,.12,.5,.12);b.rotation.x=Math.PI/2;put(gunG,G.box,MM.boots,0,-.2,.2,.12,.3,.12);
 muzzle=glowSprite(0xffd166,1.2,0);muzzle.position.set(0,0,1.15);gunG.add(muzzle);gunG.position.set(.3,-.55,.55);gunG.rotation.x=-.1;gunG.visible=false;aL.add(gunG);
 const tl=new THREE.Group();tl.position.set(.28,1.95,-.32);put(tl,G.box,MM.scarf,0,-.28,0,.22,.6,.06);hero.add(tl);
 hero.userData={head,lL,lR,aL,aR,tl};}
scene.add(hero);
function skin(id){const s=SK.find(x=>x.id===id)||SK[0];store.set('fskin',s.id);for(const k in MM)if(s.colors?.[k])MM[k].color.set(s.colors[k]);MM.eyes.emissive.set(s.colors?.eyes||'#ff2a1a');MM.eyes.emissiveIntensity=s.glow??2;}
function gunVis(){const g=gun();gunG.visible=!!g;if(g){const c=new THREE.Color(g.color);gunM.color.copy(c).multiplyScalar(.6);gunM.emissive.copy(c);const b=S.equipment.gun!=='pistol';gunG.scale.set(b?1.3:1,b?1.3:1,b?1.25:1);}melM.color.set(S.equipment.weapon?rc(S.equipment.weapon):'#b0b0b8');}
skin(store.get('fskin','wanderer'));gunVis();
const PN=340,pp=new Float32Array(PN*3),pc=new Float32Array(PN*3),pv=new Float32Array(PN*3),pl=new Float32Array(PN),pm=new Float32Array(PN),pg=new Float32Array(PN),pb=new Float32Array(PN*3);
for(let i=0;i<PN;i++)pp[i*3+1]=-999;
const pGeo=new THREE.BufferGeometry();pGeo.setAttribute('position',new THREE.BufferAttribute(pp,3));pGeo.setAttribute('color',new THREE.BufferAttribute(pc,3));
const pts=new THREE.Points(pGeo,new THREE.PointsMaterial({map:glowTex,size:10,sizeAttenuation:false,vertexColors:true,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));pts.frustumCulled=false;scene.add(pts);
let pC=0;const tC=new THREE.Color();
function burst(x,y,z,c,n,sp,gr,life){tC.set(c);for(let k=0;k<n;k++){const i=pC;pC=(pC+1)%PN;const a=Math.random()*TAU,u=Math.random();
 pp[i*3]=x;pp[i*3+1]=y;pp[i*3+2]=z;pv[i*3]=Math.cos(a)*sp*(.3+Math.random()*.7);pv[i*3+1]=u*sp;pv[i*3+2]=Math.sin(a)*sp*(.3+Math.random()*.7);
 pl[i]=pm[i]=life*(.6+Math.random()*.6);pg[i]=gr;pb[i*3]=tC.r;pb[i*3+1]=tC.g;pb[i*3+2]=tC.b;}}
function parts(dt){for(let i=0;i<PN;i++){if(pl[i]<=0)continue;pl[i]-=dt;if(pl[i]<=0){pp[i*3+1]=-999;pc[i*3]=pc[i*3+1]=pc[i*3+2]=0;continue;}
 pv[i*3+1]-=pg[i]*dt;pp[i*3]+=pv[i*3]*dt;pp[i*3+1]+=pv[i*3+1]*dt;pp[i*3+2]+=pv[i*3+2]*dt;const f=pl[i]/pm[i];pc[i*3]=pb[i*3]*f;pc[i*3+1]=pb[i*3+1]*f;pc[i*3+2]=pb[i*3+2]*f;}
 pGeo.attributes.position.needsUpdate=true;pGeo.attributes.color.needsUpdate=true;}
function drop(i,x,y,z,n,src,dl=0){if(!item(i)||n<=0)return;const W=world;
 const m=W.drops.find(d=>!d.got&&d.item===i&&d.src===src&&Math.hypot(d.x-x,d.z-z)<3.5);if(m){m.n+=n;m.dl=Math.max(m.dl||0,dl);return;}
 if(W.drops.length>=MAXDROP){const o=W.drops[0];if(o&&grab(o)){W.group.remove(o.g);disposeTree(o.g);W.drops.shift();}else{const a=W.drops.find(d=>!d.got&&d.item===i);if(a){a.n+=n;return;}}}
 const c=new THREE.Color(rc(i)),g=new THREE.Group();
 const me=put(g,G.oct,new THREE.MeshLambertMaterial({color:c,emissive:c,emissiveIntensity:.9}),0,0,0,.36,.36,.36);
 const gl=glowSprite(c,1.2,.5);g.add(gl);g.position.set(x,y,z);W.group.add(g);
 const a=Math.random()*TAU,s=1.5+Math.random()*2;
 W.drops.push({item:i,n,src,x,y,z,vx:Math.cos(a)*s,vy:3+Math.random()*2,vz:Math.sin(a)*s,g,t:0,me,gl,got:false,dl,blocked:false});}
function grab(d){if(!d||d.got)return false;if(!fits(d.item,d.n)){full();d.blocked=true;return false;}d.got=true;add(d.item,d.n);
 if(d.src==='gather'){counters();S.counters.gather[d.item]=(S.counters.gather[d.item]||0)+d.n;}
 Sfx.pick();feed(item(d.item).icon+' +'+d.n+' '+item(d.item).name,rc(d.item));burst(d.x,d.y,d.z,rc(d.item),8,2,2,.5);tut();return true;}
function rmDrop(i){const d=world.drops[i];world.group.remove(d.g);disposeTree(d.g);world.drops.splice(i,1);}
function drops(dt){for(let i=world.drops.length-1;i>=0;i--){const d=world.drops[i];if(!d||d.got){rmDrop(i);continue;}
 d.t+=dt;d.dl=Math.max(0,(d.dl||0)-dt);
 if(d.t<.5){d.vy-=12*dt;d.x+=d.vx*dt;d.y+=d.vy*dt;d.z+=d.vz*dt;if(d.y<.25){d.y=.25;d.vy*=-.35;d.vx*=.7;d.vz*=.7;}}
 else{const dx=P.x-d.x,dz=P.z-d.z,di=Math.hypot(dx,dz)||1,ok=fits(d.item,d.n);d.blocked=!ok;
  if(ok&&d.dl<=0){const p=Math.min(di,(6+d.t*4)*dt);d.x+=dx/di*p;d.z+=dz/di*p;d.y+=(1-d.y)*Math.min(1,dt*6);if(di<.7&&grab(d)){rmDrop(i);continue;}}
  else d.y+=(.3-d.y)*Math.min(1,dt*4);}
 d.g.position.set(d.x,d.y+Math.sin(d.t*6)*.06,d.z);d.g.scale.setScalar(d.blocked?1+Math.sin(d.t*8)*.12:1);
 d.gl.material.color.set(d.blocked?0xff5a5f:rc(d.item));d.me.rotation.y+=dt*3;}}
const bul=[];
function shot(x,z,a,g,fp){if(bul.length>=MAXB)return;const m=new THREE.Mesh(G.sph,fp?MAT.bulletP:MAT.bulletE);m.scale.setScalar(fp?.18:.24);m.position.set(x,1.2,z);world.group.add(m);
 bul.push({m,x,z,vx:Math.sin(a)*g.speed,vz:Math.cos(a)*g.speed,dmg:g.dmg,pierce:g.pierce||0,life:1.4,fp,r:fp?.28:.35});}
function fire(){const g=gun();if(!g||fireCd>0)return;if(cnt('ammo')<g.ammoCost){Sfx.dry();toast('Нет патронов!');fireCd=.4;return;}
 take('ammo',g.ammoCost);fireCd=1/g.rate;P.rec=.18;const x=P.x+Math.sin(P.face)*1.1,z=P.z+Math.cos(P.face)*1.1;
 for(let i=0;i<g.pellets;i++)shot(x,z,P.face+(Math.random()-.5)*g.spread*2,g,true);
 muzzle.material.opacity=1;muzzle.material.color.set(g.color);burst(x,1.2,z,g.color,8,3,0,.18);shake=Math.max(shake,g.pellets>1?.22:.12);g.pellets>1?Sfx.boom():Sfx.shoot();}
function bullets(dt){for(let i=bul.length-1;i>=0;i--){const b=bul[i];b.life-=dt;b.x+=b.vx*dt;b.z+=b.vz*dt;b.m.position.set(b.x,1.2,b.z);
 let dead=b.life<=0||Math.hypot(b.x,b.z)>150;
 if(b.fp){for(const e of world.enemies){if(!e.alive)continue;if(Math.hypot(e.x-b.x,e.z-b.z)<e.def.size*.5+b.r){hurtE(e,b.dmg,true);if(--b.pierce<0){dead=true;break;}}}}
 else{if(Math.hypot(P.x-b.x,P.z-b.z)<.6){hurtP(b.dmg,'Плевок');dead=true;}if(!dead)for(const a of world.allies)if(Math.hypot(a.x-b.x,a.z-b.z)<.6){hurtA(a,b.dmg);dead=true;break;}}
 if(dead){world.group.remove(b.m);bul.splice(i,1);}}}
const fCache=new Map(),floats=[];
function fTex(t,c){const k=t+'|'+c;let x=fCache.get(k);if(x)return x;const cv=document.createElement('canvas');cv.width=128;cv.height=48;const g=cv.getContext('2d');
 g.font='bold 30px Rubik,sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillStyle='rgba(0,0,0,.6)';g.fillText(t,65,26);g.fillStyle=c;g.fillText(t,64,24);
 x=new THREE.CanvasTexture(cv);x.colorSpace=THREE.SRGBColorSpace;fCache.set(k,x);SHARED_TEX.add(x);
 if(fCache.size>80){const kk=fCache.keys().next().value,o=fCache.get(kk);fCache.delete(kk);SHARED_TEX.delete(o);o.dispose();}return x;}
function fText(t,c,x,y,z){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:fTex(String(t),c),transparent:true,depthTest:false}));s.scale.set(1.6,.6,1);s.position.set(x,y,z);world.group.add(s);floats.push({s,t:0});}
function updFloats(dt){for(let i=floats.length-1;i>=0;i--){const f=floats[i];f.t+=dt;f.s.position.y+=dt*1.4;f.s.material.opacity=1-f.t/.75;if(f.t>=.75){world.group.remove(f.s);f.s.material.dispose();floats.splice(i,1);}}}
function effects(dt){for(let i=world.fx.length-1;i>=0;i--){const e=world.fx[i];e.t+=dt;const p=e.t/.2;e.m.material.opacity=.8*(1-p);e.m.scale.setScalar(e.b*(1+p*1.2));if(p>=1){world.group.remove(e.m);e.m.material.dispose();world.fx.splice(i,1);}}}
const TOOL={axe:'топор',pick:'кирка',sickle:'серп'};
const req=n=>!n.def.tool||n.def.minPower<=0?null:{t:n.def.tool,p:n.def.minPower};
function canG(n){if(!n?.active||n.lock)return{ok:false,r:'Уже добыто'};if(P.gt>0)return{ok:false,r:'Занято'};const s=stats(),q=req(n);
 if(q){if(s.gatherType!==q.t)return{ok:false,r:'Нужен '+TOOL[q.t]};if(s.gatherPower<q.p)return{ok:false,r:TOOL[q.t]+' слаб ('+q.p+')'};}return{ok:true};}
function yieldOf(n){const s=stats(),d=n.def;let b=ri(d.base.min,d.base.max);if(d.tool&&s.gatherType===d.tool)b+=Math.max(0,s.gatherPower-1);b=clamp(b,1,MAXY);
 const o=[{i:d.base.item,n:b}],m=1+s.luck*.01;(d.bonus||[]).forEach(x=>{if(Math.random()<Math.min(.95,x.chance*m))o.push({i:x.item,n:1});});return o;}
function harvest(n){if(!n?.active||n.lock||n!==P.gTgt)return;const now=performance.now();hTimes=hTimes.filter(t=>now-t<1000);if(hTimes.length>=4)return;hTimes.push(now);
 n.lock=true;n.active=false;n.g.visible=false;n.st.visible=true;n.col.disabled=true;n.resp=35+Math.random()*25;
 yieldOf(n).forEach(d=>drop(d.i,n.x,.8,n.z,d.n,'gather'));
 n.def.tool==='axe'||n.type==='tree'?Sfx.chop():n.def.tool==='pick'?Sfx.mine():Sfx.cut();xp(4+(n.def.minPower||0)*3);burst(n.x,.8,n.z,0xffd166,12,2.5,3,.7);}
function gatherTick(dt){if(P.gt<=0)return;P.gt=Math.max(0,P.gt-dt);const p=1-P.gt/GDUR,n=P.gTgt;if(!n?.active){cancelG();return;}
 const nm={tree:'Рубим дерево',rock:'Добываем камень',bush:'Собираем',ore:'Добываем руду',crystal:'Кристалл',coal:'Уголь'};
 gUI.querySelector('.gp-label').textContent=nm[n.type]||'Добываем';gUI.querySelector('.gp-track>i').style.width=clamp(p*100,0,100)+'%';gUI.classList.add('show');
 if(!P.gDone&&p>=.5){P.gDone=true;harvest(n);}if(P.gt<=0)cancelG();}
function build(id){const loc=D.locations[id],rnd=rng(id.length*997+13);
 if(world){disposeTree(world.group);scene.remove(world.group);bul.length=0;floats.length=0;}
 const group=new THREE.Group();scene.add(group);
 const W={group,nodes:[],enemies:[],allies:[],features:[],hazards:[],drops:[],colliders:[],rects:[],fx:[],fires:[],outposts:[],loc,grass:null,flowers:null};
 const geo=new THREE.PlaneGeometry(320,320,56,56),ps=geo.attributes.position,cs=[],a=new THREE.Color(loc.ground[0]),b=new THREE.Color(loc.ground[1]),t=new THREE.Color();
 for(let i=0;i<ps.count;i++){const x=ps.getX(i),y=ps.getY(i),n=(Math.sin(x*.11)*Math.cos(y*.09)+1)/2;t.copy(a).lerp(b,n);cs.push(t.r,t.g,t.b);}
 geo.setAttribute('color',new THREE.Float32BufferAttribute(cs,3));
 const gr=new THREE.Mesh(geo,new THREE.MeshLambertMaterial({vertexColors:true,map:TEX.grass,bumpMap:TEX.bump,bumpScale:.05}));gr.rotation.x=-Math.PI/2;gr.receiveShadow=true;group.add(gr);
 const inC=(x,z)=>id!=='fortress'&&loc.camp&&Math.hypot(x,z)<loc.camp.r+4,inF=(x,z)=>id==='fortress'&&Math.abs(x)<24&&Math.abs(z)<24,inO=(x,z)=>W.outposts.some(o=>Math.hypot(x-o.x,z-o.z)<o.r);
 function node(type,x,z,def){const g=new THREE.Group();let r=.6;
  if(type==='tree'){put(g,G.cyl,MAT.trunk,0,.8,0,.5,1.6,.5);for(let i=0;i<3;i++){const q=i/3*TAU;put(g,G.sph,i%2?MAT.leaf2:MAT.leaf,Math.cos(q)*.5,2+i*.35,Math.sin(q)*.5,2*(.9-i*.12),1.7*(.9-i*.12),2*(.9-i*.12));}r=.7;}
  else if(type==='rock'||type==='ore'){put(g,G.ico,type==='ore'?MAT.ore:MAT.rock,0,.5,0,1.9,1.3,1.9,rnd()*TAU);if(type==='ore')put(g,G.oct,MAT.crystal,0,1,0,.5,.7,.5,.5);r=.85;}
  else if(type==='coal'){put(g,G.ico,MAT.coal,0,.45,0,1.7,1.1,1.7,rnd()*TAU);for(let i=0;i<3;i++)put(g,G.oct,MAT.coalShard,(rnd()-.5)*.8,.65,(rnd()-.5)*.8,.3,.4,.3);r=.75;}
  else if(type==='bush'){for(let i=0;i<3;i++)put(g,G.sph,MAT.bush,(i-1)*.4,.4,0,1.4*(.5+i*.1),1.2*(.5+i*.1),1.4*(.5+i*.1));r=.55;}
  else if(type==='crystal'){put(g,G.oct,MAT.crystal,0,.85,0,.9,1.7,.9);g.add(glowSprite(0x4de3c1,2,.4));r=.55;}
  g.position.set(x,0,z);group.add(g);const col={x,z,r,disabled:false};W.colliders.push(col);
  const sm=makeStump(type);sm.position.set(x,0,z);sm.visible=false;group.add(sm);
  W.nodes.push({type,x,z,def,g,st:sm,col,active:true,lock:false,resp:0});}
 const place=(ty,def,x,z)=>{if(inC(x,z)||inF(x,z)||inO(x,z))return;node(ty,x,z,def);};
 const hk={panel:open,toast,skin:MM.skin};
 if(id==='fortress'){buildFortress(W,rnd,hk);(loc.garden||[]).forEach(([ty,x,z])=>{const d=loc.nodeDefs[ty];if(d)node(ty,x,z,d);});}
 else{const ld=D.leaders[S.strat.owners[id]]||D.leaders[id];buildCamp(W,loc,ld,rnd,hk);buildOutpost(W,-52,32,rnd,ld);buildOutpost(W,50,-30,rnd,ld);}
 (loc.zones||[]).forEach(z=>{if(inC(z.x,z.z)||inF(z.x,z.z))return;put(group,G.box,MAT.dirt,z.x,.045,z.z,z.r*1.5,.06,z.r*1.5,rnd()*TAU,false);
  z.nodes.forEach(([ty,n])=>{const d=loc.nodeDefs[ty];if(!d)return;for(let i=0;i<n;i++){const q=rnd()*TAU,r=Math.sqrt(rnd())*z.r;place(ty,d,z.x+Math.cos(q)*r,z.z+Math.sin(q)*r);}});});
 (loc.scatter||[]).forEach(([ty,n])=>{const d=loc.nodeDefs[ty];if(!d)return;for(let i=0;i<n;i++){const q=rnd()*TAU,r=26+rnd()*70;place(ty,d,Math.cos(q)*r,Math.sin(q)*r);}});
 if(id!=='fortress'){const pop=S.strat.pops[id]||0,ty=loc.enemyTypes;
  for(let i=0;i<pop;i++){const q=rnd()*TAU,r=4+rnd()*(loc.camp.r+8);spawn(ty[i%ty.length],Math.cos(q)*r,Math.sin(q)*r,W,rnd,false);}
  for(let i=0;i<Math.min(4,Math.ceil(pop/3));i++){const q=rnd()*TAU;spawn(ty[i%ty.length],-52+Math.cos(q)*5,32+Math.sin(q)*5,W,rnd,false);}}
 if(loc.hazard==='poison')for(let i=0;i<12;i++){const q=rnd()*TAU,r=26+rnd()*66,x=Math.cos(q)*r,z=Math.sin(q)*r,rr=2.5+rnd()*3.5;
  const m=new THREE.Mesh(G.plane,new THREE.MeshBasicMaterial({color:0x5aff6a,transparent:true,opacity:.2,side:THREE.DoubleSide}));m.rotation.x=-Math.PI/2;m.scale.set(rr*2,rr*2,1);m.position.set(x,.05,z);group.add(m);W.hazards.push({x,z,r:rr});}
 const mm=new THREE.MeshLambertMaterial({color:new THREE.Color(loc.ground[0]).multiplyScalar(.5),map:TEX.rock});
 for(let i=0;i<54;i++){const q=i/54*TAU+rnd()*.1,r=124+rnd()*10,x=Math.cos(q)*r,z=Math.sin(q)*r,s=6+rnd()*7;
  put(group,G.cone,mm,x,s*.55,z,s*1.7,s*1.5,s*1.7,rnd()*TAU,false);W.colliders.push({x,z,r:s*.8});}
 const gs=new THREE.InstancedMesh(G.grass,MAT.grass,Q.high.gr),fs=new THREE.InstancedMesh(G.flower,MAT.flower,Q.high.fl);
 const mx=new THREE.Matrix4(),q=new THREE.Quaternion(),sc=new THREE.Vector3(),p=new THREE.Vector3(),c=new THREE.Color(),fc=[0xffd166,0xff7eb6,0xb48cff,0x6fc3ff,0xffffff];
 for(let i=0;i<Q.high.gr;i++){const A=rnd()*TAU,r=Math.sqrt(rnd())*112,x=Math.cos(A)*r,z=Math.sin(A)*r;
  if(inF(x,z)||inC(x,z))p.set(0,-99,0);else p.set(x,.17,z);q.setFromEuler(new THREE.Euler((rnd()-.5)*.3,rnd()*6,(rnd()-.5)*.3));sc.setScalar(.7+rnd());mx.compose(p,q,sc);gs.setMatrixAt(i,mx);gs.setColorAt(i,c.setHSL(.3+rnd()*.06,.55,.35+rnd()*.12));}
 for(let i=0;i<Q.high.fl;i++){const A=rnd()*TAU,r=Math.sqrt(rnd())*108,x=Math.cos(A)*r,z=Math.sin(A)*r;
  if(inF(x,z)||inC(x,z))p.set(0,-99,0);else p.set(x,.25,z);sc.setScalar(.7+rnd()*.8);mx.compose(p,q,sc);fs.setMatrixAt(i,mx);fs.setColorAt(i,c.set(fc[Math.floor(rnd()*5)]));}
 gs.instanceMatrix.needsUpdate=fs.instanceMatrix.needsUpdate=true;if(gs.instanceColor)gs.instanceColor.needsUpdate=true;if(fs.instanceColor)fs.instanceColor.needsUpdate=true;
 gs.count=Q[quality].gr;fs.count=Q[quality].fl;group.add(gs,fs);W.grass=gs;W.flowers=fs;world=W;sky();return W;}
function spawn(type,x,z,W,rnd,raid){const def=D.enemies[type];if(!def||W.enemies.length>=Q[quality].en)return;
 const m=buildEnemyModel(def),g=m.group,hb=makeHpBar();hb.spr.position.set(0,def.size*1.7+.7,0);hb.spr.visible=false;g.add(hb.spr);g.position.set(x,0,z);W.group.add(g);
 W.enemies.push({type,def,g,parts:m.parts,fm:m.flash,hb,x,z,hp:def.hp,maxHp:def.hp,cd:0,sc:1+Math.random(),ph:rnd()*TAU,alive:true,flash:0,mp:0,raid:!!raid});}
function syncAlly(){if(!world)return;for(const a of world.allies){a.g.parent?.remove(a.g);disposeTree(a.g);}world.allies.length=0;
 S.strat.bots.forEach(bo=>{if(bo.mode!=='follow'||bo.hp<=0)return;const c=bo.type==='archer'?0x4de3c1:bo.type==='guard'?0x6fc3ff:0x7ee081;
  const g=buildAllyModel(c,MM.skin),A=Math.random()*TAU,r=2+Math.random()*2,x=P.x+Math.cos(A)*r,z=P.z+Math.sin(A)*r;g.position.set(x,0,z);world.group.add(g);
  const hb=makeHpBar();hb.spr.position.set(0,2.3,0);g.add(hb.spr);
  const al={bo,g,x,z,hp:bo.hp,maxHp:D.botTypes[bo.type].hp,cd:0,hb,mp:0,ally:true};updateHpBar(al);world.allies.push(al);});}
function hurtE(e,dmg,gp){if(!e?.alive)return;e.hp-=dmg;e.flash=.14;const dx=e.x-P.x,dz=e.z-P.z,d=Math.hypot(dx,dz)||1;e.x+=dx/d*.5;e.z+=dz/d*.5;
 updateHpBar(e);fText(dmg,gp?'#ffd166':'#ff9f43',e.x,2,e.z);burst(e.x,1,e.z,0xff5a5f,8,3,4,.5);Sfx.hit();
 if(e.hp<=0){e.alive=false;const s=stats();e.def.loot.forEach(l=>{if(Math.random()<l.chance*(1+s.luck*.01))drop(l.item,e.x,.8,e.z,1,'loot');});
  const c=ri(e.def.coins[0],e.def.coins[1]);S.coins+=c;xp(e.def.xp);multT=3;mult=Math.min(8,mult+(mult<2?.5:.25));S.score+=Math.round(100*mult);
  feed('☠️ '+e.def.name,'#ffd166');burst(e.x,1,e.z,e.def.color,24,4,3,1);Sfx.kill();
  if(e.raid){S.strat.raidLeft=Math.max(0,S.strat.raidLeft-1);if(!S.strat.raidLeft)endRaid(true);}
  else if(S.location!=='fortress'){S.strat.pops[S.location]=Math.max(0,(S.strat.pops[S.location]||0)-1);
   if(!S.strat.pops[S.location]){S.strat.owners[S.location]='player';S.counters.clears++;toast('✅ Сектор ваш!');war('🚩 Вы захватили '+D.locations[S.location].name,'#7ee081');tut();}}
  e.g.parent?.remove(e.g);disposeTree(e.g);const i=world.enemies.indexOf(e);if(i>=0)world.enemies.splice(i,1);dirty=true;}}
function hurtA(a,d){if(!a||a.hp<=0)return;a.hp-=d;a.bo.hp=a.hp;updateHpBar(a);burst(a.x,1,a.z,0x4de3c1,8,2,3,.5);
 if(a.hp<=0){a.bo.mode='idle';a.bo.hp=1;toast('🤖 Бот ранен');a.g.parent?.remove(a.g);disposeTree(a.g);const i=world.allies.indexOf(a);if(i>=0)world.allies.splice(i,1);dirty=true;}}
function hurtP(d,c){if(P.inv>0||state!=='playing')return;const s=stats(),r=Math.max(1,Math.round(d-s.def*.45));S.hp-=r;P.inv=.7;Sfx.hurt();shake=Math.max(shake,.3);
 fText('−'+r,'#ff5a5f',P.x,2.4,P.z);burst(P.x,1.4,P.z,0xff5a5f,14,3,4,.7);if(S.hp<=0){S.hp=0;state='dead';Sfx.death();const l=Math.floor(S.coins*.15);S.coins-=l;$('deathText').textContent='Причина: '+c+'. −'+l+' монет.';open('death');}}
function spawnPos(){const s=D.locations[S.location].spawn||[0,10];P.x=s[0];P.z=s[1];P.y=0;P.vx=P.vz=P.vy=0;P.face=Math.PI;hero.position.set(P.x,0,P.z);}
function travel(id){if(id===S.location)return;const prev=S.location;$('transitionText').textContent=D.locations[id].name;$('transition').classList.add('show');Sfx.travel();
 clearTimeout(travT);travT=setTimeout(()=>{$('transition').classList.remove('show');},6000);
 setTimeout(()=>{try{S.location=id;S.visited[id]=true;cancelG();mult=1;multT=0;build(id);spawnPos();syncAlly();qual();tut();dirty=true;save();
  const l=D.locations[id];showBanner(l.name,id==='fortress'?'Ваш дом':l.camp.hall+' · гарнизон '+(S.strat.pops[id]||0));}
  catch(e){console.error(e);S.location=prev;try{build(prev);spawnPos();syncAlly();qual();}catch(x){}toast('Ошибка: '+e.message);}
  finally{clearTimeout(travT);$('transition').classList.remove('show');}},600);}
const army=i=>STR.ring.reduce((a,s)=>a+(S.strat.owners[s]===i?(S.strat.pops[s]||0):0),0);
const holds=i=>STR.ring.filter(s=>S.strat.owners[s]===i).length;
function defense(i){const t=S.strat,o=t.owners[i],b=t.pops[i]||0;if(o==='player')return b+5+(t.fortress.walls||0)*2.5;
 const L=D.leaders[o]||D.leaders[i];return b+(t.leaderLv[o]||1)*2+(L.trait==='Оборонительный'?6:0);}
function raidStart(){const t=S.strat;t.raidActive=true;t.raidCountdown=-1;t.raidLeft=Math.round(6+threat()/9);
 showBanner('НАБЕГ НА КРЕПОСТЬ','Врагов: '+t.raidLeft,'var(--danger)');Sfx.raid();war('🔥 Набег: '+t.raidLeft+' врагов','#ff5a5f');if(S.location==='fortress')raidSpawn();}
function raidSpawn(){const n=Math.min(S.strat.raidLeft,Q[quality].en-world.enemies.length);
 for(let i=0;i<n;i++){const a=Math.random()*TAU,r=26+Math.random()*6;spawn('raider',Math.cos(a)*r,Math.sin(a)*r,world,Math.random,true);}}
function endRaid(ok){const t=S.strat;t.raidActive=false;t.raidLeft=0;t.raidCountdown=-1;
 if(ok){toast('🛡️ Набег отбит!');t.fortressHP=clamp(t.fortressHP+15,0,fortMax());war('🛡️ Набег отбит','#7ee081');}
 else{toast('💥 Крепость разграблена');S.coins=Math.floor(S.coins*.7);t.fortressHP=fortMax()*.5;war('💥 Крепость разграблена','#ff5a5f');}
 STR.ring.forEach(i=>{if(t.owners[i]!=='player')t.pops[i]=Math.max(0,(t.pops[i]||0)-(ok?2:3));});dirty=true;}
function strategy(dt){const t=S.strat;
 t.migrateT-=dt;if(t.migrateT<=0){t.migrateT=STR.migrateEvery;const src=STR.ring.filter(i=>t.owners[i]!=='player'&&(t.pops[i]||0)>=4);
  if(src.length){const f=src[Math.floor(Math.random()*src.length)],o=t.owners[f],near=STR.ring.filter(i=>i!==f&&t.owners[i]===o);
   if(near.length){const to=near[Math.floor(Math.random()*near.length)],am=Math.min(2,t.pops[f]-2);t.pops[f]-=am;t.migrations.push({from:f,to,amt:am,t:0,color:D.leaders[o].color});}}}
 t.regrowT-=dt;if(t.regrowT<=0){t.regrowT=STR.regrowEvery;STR.ring.forEach(i=>{const o=t.owners[i];if(o==='player')return;const L=D.leaders[o]||D.leaders[i];
  if((t.pops[i]||0)<maxPop(i)&&Math.random()<clamp(.28*L.growth,0,.7))t.pops[i]++;});dirty=true;}
 t.leaderT-=dt;if(t.leaderT<=0){t.leaderT=STR.leaderEvery;t.warTicks++;const ac=STR.ring[t.actorIdx%STR.ring.length];t.actorIdx++;const o=t.owners[ac];
  if(o!=='player'){const L=D.leaders[o]||D.leaders[ac],A=army(o),h=holds(o),from=STR.ring.find(s=>t.owners[s]===o&&(t.pops[s]||0)>3);
   if(from){const tg=h<STR.maxSectorsPerLeader?STR.ring.filter(s=>t.owners[s]!==o).sort((a,b)=>defense(a)-defense(b)):[];
    if(Math.random()<L.aggression*.2+(h>=STR.maxSectorsPerLeader?.25:0)&&A>10){const am=Math.min(3,t.pops[from]-3);t.pops[from]-=am;t.migrations.push({from,to:'fortress',amt:am,t:0,color:L.color});war(L.icon+' '+L.name+' идёт к крепости',L.color);}
    else if(tg.length&&A>defense(tg[0])*STR.captureEdge+5){const am=Math.min(4,t.pops[from]-3);t.pops[from]=Math.max(0,t.pops[from]-am-1);t.migrations.push({from,to:tg[0],amt:am,t:0,cap:true,att:o,color:L.color});war(L.icon+' '+L.name+' → '+D.locations[tg[0]].name,L.color);}
    else{const os=STR.ring.filter(s=>t.owners[s]===o);if(os.length){const s=os[Math.floor(Math.random()*os.length)];t.pops[s]=Math.min(maxPop(s),(t.pops[s]||0)+2);}}}
   if(t.warTicks%4===0&&Math.random()<.35)t.leaderLv[o]=Math.min(STR.leaderMaxLv,(t.leaderLv[o]||1)+1);}dirty=true;}
 for(let i=t.migrations.length-1;i>=0;i--){const m=t.migrations[i];m.t+=dt/3.5;if(m.t<1)continue;
  if(m.cap){if(m.amt*2.2>defense(m.to)*.5){t.owners[m.to]=m.att;t.pops[m.to]=Math.max(2,m.amt-1);t.leaderLv[m.att]=Math.min(STR.leaderMaxLv,(t.leaderLv[m.att]||1)+1);war('⚔️ '+D.leaders[m.att].name+' захватил '+D.locations[m.to].name,D.leaders[m.att].color);}
   else{t.pops[m.to]=Math.max(0,(t.pops[m.to]||0)-1);war('🛡️ '+D.locations[m.to].name+' отбил атаку','#7ee081');}}
  else if(m.to==='fortress')t.raidCountdown=Math.max(8,(t.raidCountdown>0?t.raidCountdown:STR.raidCountdown)-14);
  else{t.pops[m.to]=Math.min(maxPop(m.to),(t.pops[m.to]||0)+m.amt);if(t.owners[m.to]==='player'&&m.amt>=2)t.owners[m.to]=t.owners[m.from]||m.from;}
  t.migrations.splice(i,1);dirty=true;}
 t.farmT-=dt;if(t.farmT<=0){t.farmT=30;const inc=(t.fortress.farm||0)*6+STR.ring.filter(i=>t.owners[i]==='player').length*4;if(inc>0){S.coins+=inc;feed('🏰 Доход +'+inc+' 🪙','#ffd166');dirty=true;}}
 const th=threat();if(!t.raidActive){if(th>=STR.raidThreshold){if(t.raidCountdown<0){t.raidCountdown=STR.raidCountdown;war('⚠️ Готовится набег','#ffd166');}t.raidCountdown-=dt;if(t.raidCountdown<=0)raidStart();}else t.raidCountdown=-1;}
 if(t.raidActive){if(S.location==='fortress'){if(world.enemies.filter(e=>e.alive&&e.raid).length<Math.min(t.raidLeft,6))raidSpawn();}
  else{t.fortressHP-=dt*(t.raidLeft*.045)*(1-(t.fortress.walls||0)*.07);if(t.fortressHP<=0)endRaid(false);}}
 for(const b of t.bots){const bt=D.botTypes[b.type];if(b.mode==='idle')b.hp=Math.min(bt.hp,b.hp+dt*3);
  else if(b.mode==='mission'){b.missionT-=dt;if(b.missionT<=0){b.missionT=2.5;
   if((t.pops[b.target]||0)>0){t.pops[b.target]=Math.max(0,t.pops[b.target]-Math.max(1,Math.round(bt.atk*.12)));b.hp-=ri(4,10);
    if(!t.pops[b.target]){t.owners[b.target]='player';S.counters.clears++;toast('🚩 Отряд захватил '+D.locations[b.target].name);war('🚩 Отряд захватил '+D.locations[b.target].name,'#7ee081');b.mode='follow';b.target=null;tut();}}
   else{b.mode='follow';b.target=null;}
   if(b.hp<=0){b.hp=1;b.mode='idle';b.target=null;toast('🤖 Бот ранен');}dirty=true;}}}}
function interact(){near=null;let best=1e9;
 for(const n of world.nodes){if(!n.active||n.lock)continue;const d=Math.hypot(n.x-P.x,n.z-P.z);if(d<2.7&&d<best){best=d;near={node:n};}}
 for(const f of world.features){const d=Math.hypot(f.x-P.x,f.z-P.z);if(d<f.r&&d<best){best=d;near={feat:f};}}
 let l='';if(near){if(near.node){const n=near.node,nm={tree:'Дерево',rock:'Камень',bush:'Куст',ore:'Жила',crystal:'Кристалл',coal:'Уголь'},q=req(n),s=stats();
  l=q&&(s.gatherType!==q.t||s.gatherPower<q.p)?nm[n.type]+' — нужен '+TOOL[q.t]+' ('+q.p+')':nm[n.type]+' — '+item(n.def.base.item).name;}else l=near.feat.label;}
 if(l!==lastPrompt){lastPrompt=l;$('promptText').textContent=l;$('prompt').classList.toggle('show',!!l);$('btnInteract').classList.toggle('show',!!l);}
 if(qInt){qInt=false;if(P.gt>0)return;if(near){if(near.node){const c=canG(near.node);if(!c.ok){if(c.r!=='Занято')toast(c.r);Sfx.deny();}else{P.gt=GDUR;P.gTgt=near.node;P.gDone=false;P.face=Math.atan2(near.node.x-P.x,near.node.z-P.z);Sfx.act();}}
  else{Sfx.act();near.feat.action();}}}}
function collide(){const pr=.45;
 for(const c of world.colliders){if(c.disabled)continue;const dx=P.x-c.x,dz=P.z-c.z,d=Math.hypot(dx,dz),m=c.r+pr;if(d<m){if(d>1e-4){const p=m-d;P.x+=dx/d*p;P.z+=dz/d*p;}else P.x+=m;}}
 for(const r of world.rects){const dx=P.x-r.x,dz=P.z-r.z,cx=clamp(dx,-r.hx,r.hx),cz=clamp(dz,-r.hz,r.hz),ox=dx-cx,oz=dz-cz,d=Math.hypot(ox,oz);
  if(d<pr){if(d>1e-4){const p=pr-d;P.x+=ox/d*p;P.z+=oz/d*p;}else{const ex=r.hx-Math.abs(dx),ez=r.hz-Math.abs(dz);if(ex<ez)P.x=r.x+Math.sign(dx||1)*(r.hx+pr);else P.z=r.z+Math.sign(dz||1)*(r.hz+pr);}}}
 for(const e of world.enemies){if(!e.alive)continue;const r=e.def.size*.5+pr,dx=P.x-e.x,dz=P.z-e.z,d=Math.hypot(dx,dz);if(d<r&&d>1e-4){const p=r-d;P.x+=dx/d*p;P.z+=dz/d*p;}}
 const dc=Math.hypot(P.x,P.z);if(dc>SAFE){P.x*=SAFE/dc;P.z*=SAFE/dc;}}
function meleeAtk(){if(P.mt>0||P.dg>0||P.gt>0)return;const m=melee();P.combo=P.cT>0?Math.min(P.combo+1,3):1;P.cT=.9;P.mt=m.speed||.42;P.mDur=P.mt;P.mHit=false;Sfx.swing();
 const b=(m.reach||2.3)*.85,a=new THREE.Mesh(G.torus,new THREE.MeshBasicMaterial({color:P.combo===3?0xffd166:0xffe9a0,transparent:true,opacity:.8,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide}));
 a.scale.setScalar(b*2);a.position.set(P.x+Math.sin(P.face)*1.2,1.3,P.z+Math.cos(P.face)*1.2);a.rotation.set(Math.PI/2,0,-P.face);world.group.add(a);world.fx.push({m:a,t:0,b:b*2});}
function meleeHit(){const m=melee(),s=stats(),re=m.reach||2.3,half=P.combo===3?1.2:.9;let hit=false;
 for(const e of world.enemies){if(!e.alive)continue;const dx=e.x-P.x,dz=e.z-P.z,d=Math.hypot(dx,dz);if(d>re||Math.abs(angDiff(Math.atan2(dx,dz),P.face))>half)continue;
  const cr=Math.random()<.08+s.luck*.004;hurtE(e,Math.round((s.atk+(m.atk||5)+P.combo*2+ri(0,2))*(cr?1.8:1)),false);hit=true;}
 if(hit){hitstop=.05;shake=Math.max(shake,.15);Sfx.mh();}}
function allies(dt){for(const a of world.allies){const bt=D.botTypes[a.bo.type];a.cd=Math.max(0,a.cd-dt);let tg=null,best=1e9;
 for(const e of world.enemies){if(!e.alive)continue;const d=Math.hypot(e.x-a.x,e.z-a.z);if(d<best){best=d;tg=e;}}
 if(tg){const dx=tg.x-a.x,dz=tg.z-a.z,d=Math.hypot(dx,dz)||1;if(d>bt.range*.8){a.x+=dx/d*bt.speed*dt;a.z+=dz/d*bt.speed*dt;}a.g.rotation.y=Math.atan2(dx,dz);
  if(d<bt.range&&a.cd<=0){a.cd=bt.ranged?1.1:.9;if(bt.ranged)shot(a.x,a.z,Math.atan2(dx,dz),{dmg:bt.atk,speed:26},true);else hurtE(tg,bt.atk,false);}}
 else{const dx=P.x-a.x,dz=P.z-a.z,d=Math.hypot(dx,dz)||1;if(d>3.5){a.x+=dx/d*bt.speed*dt;a.z+=dz/d*bt.speed*dt;}a.g.rotation.y=Math.atan2(dx,dz);}
 a.mp+=dt*bt.speed*2;a.g.position.set(a.x,Math.abs(Math.sin(a.mp))*.04,a.z);const u=a.g.userData;if(u.legL){u.legL.rotation.x=Math.sin(a.mp)*.5;u.legR.rotation.x=-Math.sin(a.mp)*.5;}}}
function updWorld(dt,t){for(const n of world.nodes)if(!n.active){n.resp-=dt;if(n.resp<=0){n.active=true;n.lock=false;n.g.visible=true;n.st.visible=false;n.col.disabled=false;}}
 for(const f of world.fires){const k=1+Math.sin(t*9+f.x)*.14;f.mesh.scale.set(f.s*k,f.s*1.3*(1+Math.sin(t*11+f.z)*.16),f.s*k);f.light.intensity=1.6+Math.sin(t*10+f.x)*.5;}
 const s=stats();
 for(let i=world.enemies.length-1;i>=0;i--){const e=world.enemies[i];if(!e?.alive)continue;e.cd=Math.max(0,e.cd-dt);e.sc-=dt;
  if(e.flash>0){e.flash=Math.max(0,e.flash-dt);const v=e.flash>0?1.8:.1;e.fm.forEach(m=>m.emissiveIntensity=v);}
  let tx=P.x,tz=P.z,td=Math.hypot(tx-e.x,tz-e.z),ta=null;
  for(const a of world.allies){const ad=Math.hypot(a.x-e.x,a.z-e.z);if(ad<td){td=ad;tx=a.x;tz=a.z;ta=a;}}
  const dx=tx-e.x,dz=tz-e.z,dp=Math.hypot(dx,dz)||1;e.hb.spr.visible=dp<15||e.hp<e.maxHp;
  if(e.def.ranged&&dp<16&&dp>5&&e.sc<=0){e.sc=1.7+Math.random()*.8;shot(e.x,e.z,Math.atan2(dx,dz),{dmg:e.def.atk,speed:15},false);}
  if(dp>(e.def.ranged?8:1.2)){e.x+=dx/dp*e.def.speed*dt;e.z+=dz/dp*e.def.speed*dt;}
  const dc=Math.hypot(e.x,e.z);if(dc>110){e.x*=110/dc;e.z*=110/dc;}
  e.mp+=dt*e.def.speed*2.2;e.g.position.set(e.x,e.parts.float?.35+Math.sin(t*2+e.ph)*.25:Math.abs(Math.sin(e.mp))*.06,e.z);e.g.rotation.y=Math.atan2(dx,dz);
  e.parts.legs.forEach((l,k)=>l.rotation.x=Math.sin(e.mp+k*Math.PI)*.5);e.parts.arms.forEach((a,k)=>a.rotation.x=Math.sin(e.mp+k*Math.PI)*.35);
  if(dp<1.3&&e.cd<=0){e.cd=1;if(ta)hurtA(ta,e.def.atk);else{hurtP(e.def.atk,e.def.name);if(e.def.poison)S.poison=Math.max(S.poison,6);}}}
 allies(dt);
 for(const h of world.hazards)if(Math.hypot(h.x-P.x,h.z-P.z)<h.r)S.poison=Math.max(S.poison,5);
 if(S.poison>0){S.poison-=dt;S.hp-=2*(1-clamp(s.poisonResist,0,90)/100)*dt;if(S.hp<=0)hurtP(999,'Яд');}
 if(fireCd>0)fireCd-=dt;if(P.inv>0)P.inv-=dt;if(P.dgCd>0)P.dgCd-=dt;if(P.cT>0)P.cT-=dt;else P.combo=0;if(P.rec>0)P.rec-=dt;
 if(multT>0){multT-=dt;if(multT<=0)mult=1;}
 muzzle.material.opacity=Math.max(0,muzzle.material.opacity-dt*8);
 if(S.location==='fortress'&&S.strat.raidActive&&(S.strat.fortress.towers||0)>0){towerCd-=dt;if(towerCd<=0){towerCd=1.3/S.strat.fortress.towers;
  let tg=null,best=1e9;for(const e of world.enemies){if(!e.alive||!e.raid)continue;const d=Math.hypot(e.x,e.z);if(d<best){best=d;tg=e;}}
  if(tg){const a=Math.atan2(tg.x,tg.z);shot(Math.sin(a)*18,Math.cos(a)*18,a,{dmg:20,speed:32},true);}}}
 drops(dt);bullets(dt);updFloats(dt);effects(dt);}
const ray=new THREE.Raycaster(),plane=new THREE.Plane(new THREE.Vector3(0,1,0),0),ndc=new THREE.Vector2(),hit=new THREE.Vector3();
function aim(){ndc.set(mx/innerWidth*2-1,-(my/innerHeight)*2+1);ray.setFromCamera(ndc,cam);
 if(ray.ray.intersectPlane(plane,hit)){ax=hit.x;az=hit.z;if(P.gt<=0)P.face=Math.atan2(ax-P.x,az-P.z);}
 const c=$('crosshair');c.style.left=mx+'px';c.style.top=my+'px';}
const fw=new THREE.Vector3(),rt=new THREE.Vector3(),UP=new THREE.Vector3(0,1,0);
function dodge(){if(P.dgCd>0||P.dg>0||S.stamina<DCOST||!P.ground||P.gt>0)return;S.stamina-=DCOST;P.dg=DDUR;P.dgCd=DCD;
 let ix=(keys.KeyD||keys.ArrowRight?1:0)-(keys.KeyA||keys.ArrowLeft?1:0)+joy.x,iz=(keys.KeyS||keys.ArrowDown?1:0)-(keys.KeyW||keys.ArrowUp?1:0)+joy.y;
 const l=Math.hypot(ix,iz);if(l>1){ix/=l;iz/=l;}
 if(l>.1){cam.getWorldDirection(fw);fw.y=0;fw.normalize();rt.crossVectors(fw,UP).normalize();P.dgx=rt.x*ix+fw.x*-iz;P.dgz=rt.z*ix+fw.z*-iz;}
 else{P.dgx=Math.sin(P.face);P.dgz=Math.cos(P.face);}
 const n=Math.hypot(P.dgx,P.dgz)||1;P.dgx/=n;P.dgz/=n;P.inv=Math.max(P.inv,DDUR+.06);Sfx.dodge();burst(P.x,.3,P.z,0x4de3c1,14,3,2,.5);}
function updPlayer(dt,t){let ix=(keys.KeyD||keys.ArrowRight?1:0)-(keys.KeyA||keys.ArrowLeft?1:0)+joy.x,iz=(keys.KeyS||keys.ArrowDown?1:0)-(keys.KeyW||keys.ArrowUp?1:0)+joy.y;
 const l=Math.hypot(ix,iz);if(l>1){ix/=l;iz/=l;}const s=stats();
 if(P.dg>0){P.dg-=dt;P.vx=P.dgx*13;P.vz=P.dgz*13;P.x+=P.vx*dt;P.z+=P.vz*dt;hero.rotation.z=Math.sin((1-P.dg/DDUR)*Math.PI)*.9;}
 else{hero.rotation.z=0;const busy=P.gt>0||P.mt>0,sp=(keys.ShiftLeft||keys.ShiftRight||touchSpr)&&l>0&&S.stamina>2&&!busy;P.sprint=sp;
  S.stamina=clamp(S.stamina+(sp?-18:9)*dt,0,s.maxStamina);const v=((sp?7.6:4.4)+s.speed)*(busy?.4:1);
  cam.getWorldDirection(fw);fw.y=0;fw.normalize();rt.crossVectors(fw,UP).normalize();
  const wx=rt.x*ix+fw.x*-iz,wz=rt.z*ix+fw.z*-iz,k=1-Math.exp(-12*dt);P.vx+=(wx*v-P.vx)*k;P.vz+=(wz*v-P.vz)*k;P.x+=P.vx*dt;P.z+=P.vz*dt;}
 collide();P.moving=Math.hypot(P.vx,P.vz)>.5;
 if(qJump&&P.ground&&P.dg<=0&&P.gt<=0){P.vy=9.4;P.ground=false;Sfx.jump();}qJump=false;
 if(!P.ground){P.vy-=24*dt;P.y+=P.vy*dt;if(P.y<=0){P.y=0;P.ground=true;if(P.vy<-4){Sfx.land();P.land=.18;}P.vy=0;}}
 const U=hero.userData;if(P.moving&&P.ground&&P.dg<=0)P.wp+=dt*9*(P.sprint?1.5:1);
 const sn=Math.sin(P.wp),am=P.moving?(P.sprint?.85:.55):0;
 U.lL.rotation.x=sn*am;U.lR.rotation.x=-sn*am;U.aL.rotation.x=-.4;U.aR.rotation.x=-.4;
 if(P.moving&&P.ground&&P.ps>0&&sn<=0)Sfx.step();P.ps=sn;
 U.head.position.y=2.35+Math.sin(t*2.2)*.02;U.tl.rotation.x=-.25-(P.moving?(P.sprint?.75:.4):0)+Math.sin(t*6)*.12;
 if(P.gt>0){const p=1-P.gt/GDUR,w=Math.sin(p*Math.PI);U.aR.rotation.x=-.4-w*1.2;U.aL.rotation.x=-.4-w*.6;}
 else if(P.mt>0){P.mt-=dt;const p=1-P.mt/P.mDur,wi=p<.3?p/.3:1,sk=p>=.3?Math.min(1,(p-.3)/.35):0,rc2=p>.7?(p-.7)/.3:0,c=P.combo;
  U.aR.rotation.x=lerp(lerp(c===1?-2.2:c===2?-1.6:-2.8,c===3?1.4:.9,sk),-.4,rc2);U.aL.rotation.x=c===2?lerp(-1.8,.8,sk):-.4-wi*.3;
  hero.rotation.y=P.face+(c===2?-1:1)*Math.sin(p*Math.PI)*.22;if(!P.mHit&&p>=.42){P.mHit=true;meleeHit();}}
 else hero.rotation.y=P.face;
 if(gun()){const r=P.rec>0?P.rec/.18:0;gunG.position.z=.55-r*.25;gunG.rotation.x=-.1-r*.3;U.aL.rotation.x=-1.1-r*.2;}
 if(P.land>0){P.land-=dt;const q=Math.max(P.land,0)/.18;hero.scale.set(1+q*.12,1-q*.15,1+q*.12);}else hero.scale.set(1,1,1);
 hero.position.set(P.x,P.y+((P.moving&&P.ground&&P.dg<=0)?Math.abs(sn)*.07:0),P.z);
 hero.visible=P.inv>0?Math.floor(t*12)%2===0:true;}
const ct=new THREE.Vector3();
function camera(dt){yaw+=(yawT-yaw)*Math.min(1,dt*8);const lx=lerp(P.x,ax,.14),lz=lerp(P.z,az,.14);
 ct.set(lx+Math.sin(yaw)*30,23,lz+Math.cos(yaw)*30);cam.position.lerp(ct,1-Math.exp(-6*dt));
 if(shake>0){shake=Math.max(0,shake-dt*1.6);cam.position.x+=(Math.random()-.5)*shake;cam.position.y+=(Math.random()-.5)*shake;}
 cam.lookAt(lx,P.y+1,lz);const a=innerWidth/innerHeight;cam.left=-fr*a/2;cam.right=fr*a/2;cam.top=fr/2;cam.bottom=-fr/2;cam.updateProjectionMatrix();
 sun.position.set(P.x+16,26,P.z+12);sun.target.position.set(P.x,0,P.z);}
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;});
addEventListener('keydown',e=>{if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault();
 if(state==='playing'&&!panel){keys[e.code]=true;if(!e.repeat){if(e.code==='Space')qJump=true;if(e.code==='KeyE')qInt=true;if(e.code==='KeyQ')qDodge=true;}}
 if(e.repeat)return;
 if(e.code==='KeyI'&&state!=='intro'&&state!=='dead')open(panel==='inv'?null:'inv');
 if(e.code==='KeyM'&&state!=='intro'&&state!=='dead'){selMap=S.location;open(panel==='map'?null:'map');}
 if(e.code==='Escape'){if(panel&&panel!=='intro'&&panel!=='death')close();else if(state==='playing'){state='paused';open('pause');}else if(state==='paused'){state='playing';close();}}});
addEventListener('keyup',e=>{keys[e.code]=false;});
$('btnStart').onclick=()=>{if(hasSave){S=fresh();norm();store.del(KEY);}build('fortress');spawnPos();syncAlly();qual();start();showBanner('Крепость','Ваш дом');};
$('btnContinue').onclick=()=>{build(S.location);spawnPos();syncAlly();qual();start();};
$('btnResume').onclick=()=>{state='playing';close();};
$('btnNewGame').onclick=()=>{S=fresh();norm();store.del(KEY);build('fortress');spawnPos();syncAlly();qual();state='playing';close();};
$('btnRespawn').onclick=()=>{S.location='fortress';S.hp=stats().maxHp;S.stamina=stats().maxStamina;S.poison=0;build('fortress');spawnPos();syncAlly();qual();state='playing';close();};
$('btnInv').onclick=()=>open(panel==='inv'?null:'inv');
$('btnMap').onclick=()=>{selMap=S.location;open(panel==='map'?null:'map');};
bFort.onclick=()=>open(panel==='fort'?null:'fort');bBots.onclick=()=>open(panel==='bots'?null:'bots');
$('btnSound').onclick=()=>{Sfx.ensure();Sfx.mute(!Sfx.muted);};
$('btnPause').onclick=()=>{if(state==='playing'){state='paused';open('pause');}else if(state==='paused'){state='playing';close();}};
['btnInvClose','btnCraftClose','btnTradeClose','btnMapClose'].forEach(i=>$(i).onclick=close);
$('btnTravel').onclick=()=>{const t=selMap;close();travel(t);};
$('qualitySelect').onchange=e=>{quality=e.target.value;qual();};
document.querySelectorAll('.trade-tab').forEach(b=>b.onclick=()=>{tab=b.dataset.tab;document.querySelectorAll('.trade-tab').forEach(x=>x.classList.toggle('active',x===b));trade();});
$('invGrid').onclick=e=>{const x=e.target.closest('.inv-item');if(x){selInv=x.dataset.id;invD();}};
$('equipSlots').onclick=e=>{const x=e.target.closest('.equip-slot');if(x)unequip(x.dataset.slot);};
$('invDetail').onclick=e=>{const b=e.target.closest('[data-a]');if(!b)return;const i=b.dataset.id;
 if(b.dataset.a==='equip')equip(i);else if(b.dataset.a==='use')use(i);
 else if(b.dataset.a==='drop'){if(cnt(i)>0){take(i,1);drop(i,P.x+Math.sin(P.face)*1.3,.8,P.z+Math.cos(P.face)*1.3,1,'dropped',1.4);}}
 else if(b.dataset.a==='sell'&&take(i,1)){S.coins+=sellP(i);rec('sell',i,1);Sfx.coin();tut();save();}};
$('craftList').onclick=e=>{const b=e.target.closest('button[data-idx]');if(b&&!b.disabled)craft(+b.dataset.idx);};
$('tradeList').onclick=e=>{const b=e.target.closest('button[data-id]');if(!b||b.disabled)return;const i=b.dataset.id;
 if(tab==='buy'){const p=buyP(i);if(S.coins>=p){S.coins-=p;add(i,1);rec('buy',i,1);Sfx.coin();}}
 else if(take(i,1)){S.coins+=sellP(i);rec('sell',i,1);Sfx.coin();}tut();save();};
$('invFilters').onclick=e=>{const b=e.target.closest('.filter-btn');if(b){iFilter=b.dataset.cat;filters();inv();}};
$('craftFilters').onclick=e=>{const b=e.target.closest('.filter-btn');if(b){cFilter=b.dataset.cat;filters();craftR();}};
$('mapArea').onclick=e=>{const x=e.target.closest('.map-ring,.map-fort');if(x){selMap=x.dataset.id;mapR();}};
$('btnJump').onpointerdown=e=>{e.preventDefault();if(state==='playing'&&!panel)qJump=true;};
$('btnInteract').onpointerdown=e=>{e.preventDefault();if(state==='playing'&&!panel)qInt=true;};
$('btnAttack').onpointerdown=e=>{e.preventDefault();if(state==='playing'&&!panel)holdM=true;};
$('btnAttack').onpointerup=()=>holdM=false;
$('btnSprint').onpointerdown=e=>{e.preventDefault();touchSpr=true;};
['pointerup','pointercancel','pointerleave'].forEach(v=>$('btnSprint').addEventListener(v,()=>touchSpr=false));
const jb=$('joyBase'),jk=$('joyKnob');
const jm=e=>{const r=jb.getBoundingClientRect();let dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2);const d=Math.hypot(dx,dy);if(d>40){dx=dx/d*40;dy=dy/d*40;}joy.x=dx/40;joy.y=dy/40;jk.style.transform=`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px))`;};
jb.onpointerdown=e=>{joy.id=e.pointerId;jb.setPointerCapture(e.pointerId);jm(e);};
jb.onpointermove=e=>{if(e.pointerId===joy.id)jm(e);};
const je=e=>{if(e.pointerId===joy.id){joy.id=null;joy.x=joy.y=0;jk.style.transform='translate(-50%,-50%)';}};
jb.onpointerup=je;jb.onpointercancel=je;
R.domElement.addEventListener('pointerdown',e=>{if(state!=='playing'||panel)return;if(e.button===0)holdM=true;if(e.button===2)holdG=true;});
addEventListener('pointerup',e=>{if(e.button===0)holdM=false;if(e.button===2)holdG=false;});
R.domElement.addEventListener('contextmenu',e=>e.preventDefault());
R.domElement.addEventListener('wheel',e=>{e.preventDefault();fr=clamp(fr+e.deltaY*.012,8,26);},{passive:false});
addEventListener('resize',()=>R.setSize(innerWidth,innerHeight));
addEventListener('blur',()=>{clearQ();cancelG();if(state==='playing'&&!panel){state='paused';open('pause');}});
const clock=new THREE.Clock();let first=true;
function sim(dt,t,raw){S.playTime+=dt;aim();if(qDodge){qDodge=false;dodge();}if(holdM)meleeAtk();if(holdG)fire();
 updPlayer(dt,t);gatherTick(dt);interact();updWorld(dt,t);strategy(dt);
 hudT+=raw;if(hudT>.1){hudT=0;hud();quest();botsLive();}
 mapT+=raw;if(panel==='map'&&mapT>.25){mapT=0;mapR();}
 saveT+=raw;if(saveT>5){saveT=0;save();}}
function loop(){requestAnimationFrame(loop);const raw=Math.min(clock.getDelta(),.05),t=clock.elapsedTime;let dt=raw;if(hitstop>0){hitstop-=raw;dt=raw*.1;}
 fAcc+=raw;fN++;if(fAcc>=.5){fps=Math.round(fN/fAcc);fAcc=0;fN=0;$('fpsText').textContent=fps;
  if(fps<28){slow+=.5;if(slow>2.5&&quality!=='low'){quality=quality==='high'?'medium':'low';qual();slow=0;}}else slow=0;}
 if(state==='playing'&&!panel){try{sim(dt,t,raw);}catch(e){err(e);}}else if(state==='intro')yawT+=dt*.05;
 try{panels();parts(raw);camera(raw);R.render(scene,cam);}catch(e){console.error(e);}
 if(first){first=false;window.__fmReady=true;$('boot').classList.add('hide');setTimeout(()=>$('boot')?.remove(),600);}}
if(hasSave){$('btnContinue').style.display='';$('introSaveInfo').textContent='Ур. '+S.level+' · '+S.coins+' 🪙 · '+D.locations[S.location].name;}
build(S.location);spawnPos();syncAlly();qual();open('intro');renderAll();loop();
