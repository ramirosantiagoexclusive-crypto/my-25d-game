import * as THREE from 'three';
import {BUILD,TROOPS,KIND,LORDS,FORMATIONS} from './data.js';
const TAU=Math.PI*2,cl=(v,a,b)=>Math.max(a,Math.min(b,v));
const G={box:new THREE.BoxGeometry(1,1,1),cyl:new THREE.CylinderGeometry(.5,.5,1,12),cone:new THREE.ConeGeometry(.5,1,12),
 pyr:new THREE.ConeGeometry(.72,1,4),sph:new THREE.SphereGeometry(.5,14,10),plane:new THREE.PlaneGeometry(1,1),
 ico:new THREE.DodecahedronGeometry(.5,0),ring:new THREE.RingGeometry(.42,.5,26),torus:new THREE.TorusGeometry(.5,.05,6,24,Math.PI)};
function tx(base,sp,rep=1,lines){const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d');
 g.fillStyle=base;g.fillRect(0,0,128,128);
 for(let i=0;i<sp;i++){g.fillStyle=`rgba(0,0,0,${Math.random()*.14})`;g.beginPath();g.arc(Math.random()*128,Math.random()*128,2+Math.random()*9,0,TAU);g.fill();}
 for(let i=0;i<340;i++){g.fillStyle=`rgba(255,255,255,${Math.random()*.09})`;g.fillRect(Math.random()*128,Math.random()*128,2,2);}
 if(lines){g.strokeStyle='rgba(0,0,0,.22)';g.lineWidth=2;for(let y=0;y<128;y+=16){g.beginPath();g.moveTo(0,y);g.lineTo(128,y);g.stroke();
  for(let x=(y/16%2)*16;x<128;x+=32){g.beginPath();g.moveTo(x,y);g.lineTo(x,y+16);g.stroke();}}}
 const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(rep,rep);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;}
const T={grass:tx('#5a7a42',150,40),wood:tx('#7a5230',60,2),plank:tx('#8a6242',40,2,true),stone:tx('#9c9c92',60,3,true),
 thatch:tx('#b09055',50,3),cloth:tx('#c9c2b0',30,2),dirt:tx('#8a7554',80,8),metal:tx('#9aa0a8',40,1),
 roofRed:tx('#8f4f3c',40,2),field:tx('#7a8f3a',80,4),pale:tx('#a8956a',30,2)};
const L=o=>new THREE.MeshLambertMaterial(o);
const M={grass:L({map:T.grass}),wood:L({map:T.wood}),plank:L({map:T.plank}),dark:L({map:T.plank,color:0x5e4227}),
 stone:L({map:T.stone}),thatch:L({map:T.thatch}),roof:L({map:T.roofRed}),dirt:L({map:T.dirt}),
 metal:L({map:T.metal}),skin:L({color:0xd8a882,map:T.cloth}),iron:L({color:0x9aa0a8,map:T.metal}),
 banner:L({color:0x2f6ea8,map:T.cloth,side:THREE.DoubleSide}),leaf:L({color:0x4a6b34,map:T.grass}),
 fire:new THREE.MeshBasicMaterial({color:0xff9f43,transparent:true,opacity:.9}),
 gold:L({color:0xc9a227,map:T.metal}),blood:new THREE.MeshBasicMaterial({color:0xa8382a}),
 arrow:new THREE.MeshBasicMaterial({color:0xd8c9a4}),field:L({map:T.field}),pale:L({map:T.pale,side:THREE.DoubleSide})};
const SHARED_G=new Set(Object.values(G)),SHARED_M=new Set(Object.values(M)),SHARED_T=new Set(Object.values(T));
const put=(p,g,m,x,y,z,a=1,b=1,c=1,ry=0,sh=true)=>{const o=new THREE.Mesh(g,m);o.position.set(x,y,z);o.scale.set(a,b,c);o.rotation.y=ry;o.castShadow=sh;p.add(o);return o;};
let R,scene,cam,world,units=[],hero,inter=[],props=[],fx=[],arrows=[],colliders=[],rects=[],fires=[];
let keys={},mouse={x:innerWidth/2,y:innerHeight/2},atkHeld=false,dodgeQ=false,order='attack',formation='line';
let mode='settlement',cfg=null,hooks=null,over=false,shake=0,started=false;
let enemyOrder='advance',enemyForm='line',enemyOrderTimer=0;
const P={x:0,z:0,face:0,hp:100,maxHp:100,atkCd:0,swing:0,dodge:0,dodgeCd:0,inv:0,moving:false,wp:0};
export function init(canvas,h){
 hooks=h;
 R=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:'high-performance'});
 R.setPixelRatio(Math.min(devicePixelRatio,2));R.setSize(innerWidth,innerHeight);
 R.shadowMap.enabled=true;R.shadowMap.type=THREE.PCFSoftShadowMap;R.toneMapping=THREE.ACESFilmicToneMapping;R.toneMappingExposure=1.1;
 scene=new THREE.Scene();scene.background=new THREE.Color(0x9db8c4);scene.fog=new THREE.Fog(0x9db8c4,52,140);
 cam=new THREE.OrthographicCamera(-1,1,1,-1,.1,300);
 scene.add(new THREE.HemisphereLight(0xcfe4ff,0x4a5a34,.72));
 const sun=new THREE.DirectionalLight(0xffe6bb,1.55);sun.position.set(26,38,18);sun.castShadow=true;
 sun.shadow.mapSize.set(1536,1536);Object.assign(sun.shadow.camera,{left:-46,right:46,top:46,bottom:-46,far:130});sun.shadow.bias=-.002;
 scene.add(sun,sun.target);scene.userData.sun=sun;
 const fill=new THREE.DirectionalLight(0x7fb0ff,.26);fill.position.set(-18,12,-20);scene.add(fill);
 addEventListener('keydown',kd);addEventListener('keyup',ku);addEventListener('pointermove',pm);
 canvas.addEventListener('pointerdown',pd);addEventListener('pointerup',pu);addEventListener('resize',rs);
 canvas.addEventListener('contextmenu',e=>e.preventDefault());started=true;rs();}
function kd(e){if(['Space','KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown'].includes(e.code))e.preventDefault();
 keys[e.code]=true;if(e.repeat)return;if(e.code==='KeyQ')dodgeQ=true;
 if(e.code==='KeyE'&&hooks)hooks.interact();
 if(mode==='battle'){
  if(e.code==='Digit1'){order='attack';hooks.order(order);}
  if(e.code==='Digit2'){order='hold';hooks.order(order);}
  if(e.code==='Digit3'){order='advance';hooks.order(order);}
  if(e.code==='Digit4'){order='follow';hooks.order(order);}
  if(e.code==='Digit5'){order='retreat';hooks.order(order);}
  if(e.code==='KeyF'&&hooks)hooks.cycleFormation();}}
function ku(e){keys[e.code]=false;}
function pm(e){mouse.x=e.clientX;mouse.y=e.clientY;}
function pd(e){if(e.button===0)atkHeld=true;}
function pu(){atkHeld=false;}
function rs(){if(!R)return;R.setSize(innerWidth,innerHeight);const a=innerWidth/innerHeight,f=15;
 cam.left=-f*a;cam.right=f*a;cam.top=f;cam.bottom=-f;cam.updateProjectionMatrix();}
function clear(){if(world){scene.remove(world);world.traverse(o=>{if(o.geometry&&!SHARED_G.has(o.geometry)&&!G_PRIVATE.has(o.geometry))o.geometry.dispose();
  const ms=Array.isArray(o.material)?o.material:o.material?[o.material]:[];ms.forEach(m=>{if(!SHARED_M.has(m)){['map','bumpMap'].forEach(k=>{const t=m[k];if(t&&!SHARED_T.has(t))t.dispose();});m.dispose();}});});}
 units=[];inter=[];props=[];fx=[];arrows=[];colliders=[];rects=[];fires=[];hero=null;G_PRIVATE.clear();}
let G_PRIVATE=new Set();
function pGeo(g){G_PRIVATE.add(g);return g;}
function man(col,kind,scale=1){
 const g=new THREE.Group(),cm=L({color:col,map:T.cloth});
 put(g,G.box,cm,0,1.05,0,.58,.86,.38);put(g,G.box,M.dark,0,.62,0,.6,.12,.4);
 put(g,G.sph,M.skin,0,1.7,0,.42,.44,.42);put(g,G.sph,M.iron,0,1.82,0,.46,.3,.46);
 const lL=put(g,G.box,M.dark,-.15,.3,0,.17,.6,.17),lR=put(g,G.box,M.dark,.15,.3,0,.17,.6,.17);
 const aL=new THREE.Group(),aR=new THREE.Group();aL.position.set(-.37,1.42,0);aR.position.set(.37,1.42,0);
 put(aL,G.box,cm,0,-.28,0,.16,.56,.16);put(aR,G.box,cm,0,-.28,0,.16,.56,.16);g.add(aL,aR);
 if(kind==='ranged'){const b=put(aL,G.cyl,M.wood,0,-.5,.18,.08,.95,.08);b.rotation.x=.35;}
 else if(kind==='knight'){put(aL,G.box,M.iron,0,-.34,.2,.52,.72,.08);put(aR,G.box,M.iron,0,-.78,0,.1,1.15,.1);}
 else if(kind==='cavalry'){put(aR,G.box,M.iron,0,-.5,.15,.12,1.3,.12);const h=put(g,G.box,M.iron,0,.6,.5,.5,.3,.8);h.rotation.x=.2;}
 else{put(aR,G.cyl,M.wood,0,-.62,.1,.07,1.5,.07);put(aR,G.cone,M.iron,0,-1.4,.1,.14,.34,.14);}
 g.scale.setScalar(scale);g.userData={lL,lR,aL,aR,cm};return g;}
function horse(col){const g=new THREE.Group(),cm=L({color:col,map:T.cloth});
 put(g,G.box,cm,0,.95,0,.55,.55,1.5);put(g,G.sph,cm,0,1.05,.8,.4,.4,.45);
 put(g,G.box,M.dark,0,.55,.75,.25,.2,.2);put(g,G.cone,M.dark,0,.3,.45,.2,.6,.2);
 put(g,G.box,M.dark,-.3,.35,.5,.12,.7,.12);put(g,G.box,M.dark,.3,.35,.5,.12,.7,.12);
 put(g,G.box,M.dark,-.3,.35,-.5,.12,.7,.12);put(g,G.box,M.dark,.3,.35,-.5,.12,.7,.12);
 return g;}
function hut(x,z,ry,big){const g=new THREE.Group();
 put(g,G.box,M.plank,0,1.1,0,big?4.2:3.2,2.2,big?3.4:2.8);
 put(g,G.pyr,M.roof,0,2.9,0,big?5.4:4.2,1.6,big?4.4:3.6,Math.PI/4);
 put(g,G.box,M.dark,0,.85,(big?1.72:1.42),.9,1.7,.12);
 put(g,G.box,M.dark,(big?1.4:1.05),2.6,-.6,.5,1.6,.5);
 g.position.set(x,0,z);g.rotation.y=ry;world.add(g);
 rects.push({x,z,hx:big?2.2:1.7,hz:big?1.8:1.5});return g;}
function fence(x,z,len,ry){put(world,G.box,M.pale,x,.5,z,len,1,.08,ry);
 for(let i=-len/2;i<=len/2;i+=1.5){put(world,G.box,M.pale,x+Math.cos(ry)*i,.5,z-Math.sin(ry)*i,.06,1,.06,ry);}
 colliders.push({x,z,r:Math.max(.5,len*.3)});}
function tower(x,z,h,r){put(world,G.cyl,M.stone,x,h/2,z,r*2,h,r*2);
 put(world,G.cone,M.roof,x,h+.9,z,r*2.5,1.8,r*2.5);
 for(let i=0;i<8;i++){const a=i/8*TAU;put(world,G.box,M.stone,x+Math.cos(a)*r,h+.3,z+Math.sin(a)*r,.5,.6,.5,-a);}
 colliders.push({x,z,r:r+.3});}
function wallSeg(x,z,len,ry){put(world,G.box,M.stone,x,1.7,z,len,3.4,1,ry);
 for(let i=-len/2+1;i<len/2;i+=2)put(world,G.box,M.stone,x+Math.cos(ry)*i,3.6,z-Math.sin(ry)*i,.9,.5,1.1,ry);
 rects.push({x,z,hx:Math.abs(Math.cos(ry))*len/2+.5,hz:Math.abs(Math.sin(ry))*len/2+.5});}
function tree(x,z){put(world,G.cyl,M.wood,x,1.2,z,.5,2.4,.5);
 for(let i=0;i<3;i++){const a=i/3*TAU;put(world,G.sph,M.leaf,x+Math.cos(a)*.5,2.7+i*.4,z+Math.sin(a)*.5,3-i*.4,2.6-i*.3,3-i*.4);}
 colliders.push({x,z,r:.7});}
function fire(x,z){const f=put(world,G.cone,M.fire,x,.5,z,.9,1.3,.9,0,false);
 const l=new THREE.PointLight(0xff9f43,1.7,12);l.position.set(x,1.1,z);world.add(l);fires.push({f,l,x,z});
 for(let i=0;i<6;i++){const a=i/6*TAU;put(world,G.ico,M.stone,x+Math.cos(a)*.85,.15,z+Math.sin(a)*.85,.35,.28,.35);}
 colliders.push({x,z,r:.8});}
function banner(x,z,col){put(world,G.cyl,M.dark,x,2.6,z,.14,5.2,.14);
 const m=L({color:new THREE.Color(col),map:T.cloth,side:THREE.DoubleSide});put(world,G.box,m,x+.65,4.2,z,1.3,1.7,.05);}
function cropField(x,z,w,d){const g=new THREE.Mesh(pGeo(new THREE.PlaneGeometry(w,d)),M.field);
 g.rotation.x=-Math.PI/2;g.position.set(x,.05,z);g.receiveShadow=true;world.add(g);}
function npc(x,z,col,label,act,kind){const g=man(col,kind);g.position.set(x,0,z);g.rotation.y=Math.random()*TAU;world.add(g);
 const ring=new THREE.Mesh(G.ring,new THREE.MeshBasicMaterial({color:0xc9a227,transparent:true,opacity:.5,side:THREE.DoubleSide}));
 ring.rotation.x=-Math.PI/2;ring.position.set(x,.06,z);ring.scale.setScalar(2.4);world.add(ring);
 inter.push({x,z,r:2.8,label,act,g,ring});colliders.push({x,z,r:.6});}
export function loadSettlement(s,playerTroops,onInteract){
 clear();mode='settlement';over=false;cfg={s};hooks.settleInteract=onInteract;
 world=new THREE.Group();scene.add(world);
 const gr=new THREE.Mesh(new THREE.PlaneGeometry(220,220),M.grass);gr.rotation.x=-Math.PI/2;gr.receiveShadow=true;world.add(gr);
 put(world,G.box,M.dirt,0,.04,0,9,.08,60,0,false);put(world,G.box,M.dirt,0,.045,0,52,.08,7,0,false);
 const lord=LORDS[s.lord]||LORDS.you,castle=s.kind==='castle',town=s.kind==='town';
 if(s.b.farm)for(let i=0;i<Math.min(s.b.farm,3);i++){const a=i*2.1-2;cropField(-28+a*8,20,6,8);}
 if(castle||town){const R0=castle?24:22;
  wallSeg(0,-R0,R0*2,0);wallSeg(-R0,0,R0*2,Math.PI/2);wallSeg(R0,0,R0*2,Math.PI/2);
  wallSeg(-R0/2-3,R0,R0-6,0);wallSeg(R0/2+3,R0,R0-6,0);
  [[-R0,-R0],[R0,-R0],[-R0,R0],[R0,R0]].forEach(([x,z])=>tower(x,z,castle?7:5.5,2.1));
  put(world,G.box,M.stone,-4,2.2,R0,1.6,4.4,1.8);put(world,G.box,M.stone,4,2.2,R0,1.6,4.4,1.8);
  put(world,G.box,M.stone,0,4.6,R0,9.6,1,2);banner(-4,R0+1.2,lord.c);banner(4,R0+1.2,lord.c);}
 if(s.b.keep){put(world,G.box,M.stone,0,3.4,-13,11,6.8,8);put(world,G.pyr,M.roof,0,7.8,-13,13,3,10,Math.PI/4);
  rects.push({x:0,z:-13,hx:5.5,hz:4});banner(-6,-8,lord.c);banner(6,-8,lord.c);}
 const spots=[[-13,-2],[13,-2],[-14,8],[14,8],[-8,14],[8,14],[-16,-12],[16,-12],[0,17],[-10,-16],[10,-16]];
 let si=0;const place=()=>{const p=spots[si++%spots.length];return p;};
 for(const k in s.b){if(['walls','tower','keep','farm'].includes(k))continue;
  for(let i=0;i<Math.min(s.b[k],3);i++){const [x,z]=place();const g=hut(x,z,Math.random()*TAU,k==='barracks'||k==='market');
   if(k==='church'){put(g,G.cyl,M.stone,0,4,0,1.2,3,1.2);put(g,G.cone,M.roof,0,6,0,1.6,2,1.6);}
   if(k==='smithy'||k==='workshop')fire(x+2.6,z+1.8);
   if(k==='market'){const m=L({color:0xa8382a,map:T.cloth,side:THREE.DoubleSide});put(g,G.box,m,0,2.6,1.8,3.6,.14,2);}
   if(k==='stables'){put(g,G.box,M.wood,x>0?x+3:x-3,.7,z,3,1.4,4,0);put(g,G.cone,M.thatch,x>0?x+3:x-3,1.8,z,3.5,1,4.5,Math.PI/4);}
   if(k==='tavern')banner(x+3,z+1,lord.c);
   props.push({k,x,z});}}
 if(s.b.walls&&!(castle||town))for(let i=0;i<14;i++){const a=i/14*TAU;if(i===6||i===7)continue;
  const x=Math.cos(a)*20,z=Math.sin(a)*20;put(world,G.box,M.stone,x,1.1,z,5.6,2.2,.4,-a+Math.PI/2);colliders.push({x,z,r:2.4});}
 if(s.b.tower)for(let i=0;i<Math.min(s.b.tower,3);i++){const a=-Math.PI/2+i*2.1;tower(Math.cos(a)*20,Math.sin(a)*20,5,1.7);}
 fence(-18,-8,12,0);fence(18,-8,12,0);
 for(let i=0;i<3;i++){const a=Math.random()*TAU,r=24+Math.random()*16;const fx=Math.cos(a)*r,fz=Math.sin(a)*r;
  put(world,G.ico,pGeo(new THREE.BoxGeometry(1.5,1,1.2)),M.plank,fx,.5,fz,1,1,1,Math.random()*TAU);colliders.push({x:fx,z:fz,r:.7});}
 for(let i=0;i<28;i++){const a=Math.random()*TAU,r=30+Math.random()*24;tree(Math.cos(a)*r,Math.sin(a)*r);}
 fire(0,4);
 npc(-6,10,0x3a7ca5,'Управляющий — стройка и казна','steward');
 npc(6,10,0x8a6a44,'Старшина — набор войска','recruit');
 npc(-11,4,0xc98f2a,'Купец — торг','merchant');
 if(s.b.tavern)npc(11,4,0x8f4f3c,'Корчмарь — наёмники и слухи','tavern');
 npc(0,26,0x6d7480,'Ворота — выйти на карту земель','gate');
 inter[inter.length-1].r=3.4;
 hero=man(0xc9a227,'knight',1.06);hero.position.set(0,0,18);scene.add(hero);
 P.x=0;P.z=18;P.face=Math.PI;P.hp=cfg.hp||100;P.maxHp=100;P.dodge=0;P.dodgeCd=0;P.inv=0;
 let i=0;for(const k in playerTroops){for(let n=0;n<Math.min(playerTroops[k],8);n++){
  const T0=TROOPS[k],isCav=T0.branch==='cav',g=man(T0.col,T0.ranged?'ranged':(T0.t>=4?'knight':isCav?'cavalry':'spear'));
  const a=Math.random()*TAU,r=3+Math.random()*3;g.position.set(P.x+Math.cos(a)*r,0,P.z+Math.sin(a)*r);world.add(g);
  units.push({g,side:1,type:k,d:T0,hp:T0.hp,max:T0.hp,cd:Math.random(),ph:Math.random()*TAU,alive:true,follow:true,mor:80,
   branch:T0.branch||'inf',ox:Math.cos(i)*3.4,oz:Math.sin(i)*3.4,fleeing:false});i++;}}
 cam.position.set(P.x,34,P.z+22);cam.lookAt(P.x,0,P.z);}
export function loadBattle(allies,enemies,raid,hp){
 clear();mode='battle';over=false;cfg={raid};order='attack';formation='line';enemyOrder='advance';enemyForm='line';enemyOrderTimer=0;
 world=new THREE.Group();scene.add(world);
 const gr=new THREE.Mesh(new THREE.PlaneGeometry(240,240),M.grass);gr.rotation.x=-Math.PI/2;gr.receiveShadow=true;world.add(gr);
 for(let i=0;i<34;i++){const a=Math.random()*TAU,r=34+Math.random()*30;tree(Math.cos(a)*r,Math.sin(a)*r);}
 for(let i=0;i<10;i++){const x=(Math.random()-.5)*70,z=(Math.random()-.5)*70;
  put(world,G.ico,M.stone,x,.5,z,2.2,1.4,2.2,Math.random()*TAU);colliders.push({x,z,r:1.1});}
 for(let i=0;i<4;i++)hut(-30+i*4,-34,Math.random());
 for(let i=0;i<3;i++)hut(26+i*4,32,Math.random());
 hero=man(0xc9a227,'knight',1.08);hero.position.set(0,0,20);scene.add(hero);
 P.x=0;P.z=20;P.face=Math.PI;P.hp=hp;P.maxHp=100;P.dodge=0;P.dodgeCd=0;P.inv=0;
 const mk=(k,side,x,z)=>{const T0=TROOPS[k]||TROOPS.levy,isCav=(T0.branch||'inf')==='cav';
  const g=man(side>0?T0.col:(raid?0x5a4a3a:0x8a3a2c),T0.ranged?'ranged':(T0.t>=4?'knight':isCav?'cavalry':'spear'));
  g.position.set(x,0,z);world.add(g);
  units.push({g,side,type:k,d:T0,hp:T0.hp,max:T0.hp,cd:Math.random(),ph:Math.random()*TAU,alive:true,
   branch:T0.branch||'inf',mor:side>0?S_mor:80,ox:(Math.random()-.5)*14,oz:(Math.random()-.5)*6,fleeing:false});};
 let allyMor=72;i=0;for(const k in allies)for(let n=0;n<allies[k];n++){mk(k,1,(i%7-3)*2.6,18+Math.floor(i/7)*2.6);i++;}
 i=0;for(const k in enemies)for(let n=0;n<enemies[k];n++){mk(k,-1,(i%8-3.5)*2.6,-18-Math.floor(i/8)*2.6);i++;}
 cam.position.set(0,36,42);cam.lookAt(0,0,0);}
let S_mor=72;
export function setAllyMor(v){S_mor=v;}
export function setOrder(o){order=o;}
export function setFormation(f){formation=f;}
export function getFormation(){return formation;}
export function heroHp(){return P.hp;}
export function counts(){return{ally:units.filter(u=>u.alive&&u.side>0&&!u.fleeing).length,enemy:units.filter(u=>u.alive&&u.side<0&&!u.fleeing).length};}
export function losses(){const l={};units.forEach(u=>{if(u.side>0&&!u.alive)l[u.type]=(l[u.type]||0)+1;});return l;}
export function nearestInteract(){let best=null,bd=1e9;for(const it of inter){const d=Math.hypot(it.x-P.x,it.z-P.z);if(d<it.r&&d<bd){bd=d;best=it;}}return best;}
function burst(x,y,z,n,col){for(let i=0;i<n;i++){const m=new THREE.Mesh(G.box,col?new THREE.MeshBasicMaterial({color:col}):M.blood);
 m.scale.setScalar(.08+Math.random()*.09);m.position.set(x,y,z);world.add(m);
 fx.push({m,vx:(Math.random()-.5)*5,vy:2+Math.random()*4,vz:(Math.random()-.5)*5,t:0});}}
function arrow(x,z,ang,dmg,side){const m=new THREE.Mesh(G.box,M.arrow);m.scale.set(.08,.08,.7);m.position.set(x,1.3,z);m.rotation.y=ang;world.add(m);
 arrows.push({m,x,z,vx:Math.sin(ang)*26,vz:Math.cos(ang)*26,dmg,side,t:0});}
function collide(){const pr=.5;
 for(const c of colliders){const dx=P.x-c.x,dz=P.z-c.z,d=Math.hypot(dx,dz),m=c.r+pr;
  if(d<m&&d>1e-4){const p=m-d;P.x+=dx/d*p;P.z+=dz/d*p;}}
 for(const r of rects){const dx=P.x-r.x,dz=P.z-r.z,cx=cl(dx,-r.hx,r.hx),cz=cl(dz,-r.hz,r.hz),ox=dx-cx,oz=dz-cz,d=Math.hypot(ox,oz);
  if(d<pr){if(d>1e-4){const p=pr-d;P.x+=ox/d*p;P.z+=oz/d*p;}
   else{const ex=r.hx-Math.abs(dx),ez=r.hz-Math.abs(dz);if(ex<ez)P.x=r.x+Math.sign(dx||1)*(r.hx+pr);else P.z=r.z+Math.sign(dz||1)*(r.hz+pr);}}}
 const dc=Math.hypot(P.x,P.z);if(dc>78){P.x*=78/dc;P.z*=78/dc;}}
function formPos(u,idx,total,form,cx,cz,facing){
 const spread=2.2,depth=2.4;
 if(form==='line'){const cols=Math.min(total,8);const r=Math.floor(idx/cols),c=idx%cols;
  return{x:cx+(c-(cols-1)/2)*spread+u.ox*.3,z:cz+r*depth*(facing>0?-1:1)};}
 if(form==='shieldwall'){const cols=Math.min(total,6);const r=Math.floor(idx/cols),c=idx%cols;
  return{x:cx+(c-(cols-1)/2)*1.6+u.ox*.1,z:cz+r*1.8*(facing>0?-1:1)};}
 if(form==='loose'){const cols=Math.min(total,5);const r=Math.floor(idx/cols),c=idx%cols;
  return{x:cx+(c-(cols-1)/2)*3.5,z:cz+r*3.5*(facing>0?-1:1)};}
 if(form==='square'){const side=Math.ceil(Math.sqrt(total));const r=Math.floor(idx/side),c=idx%side;
  return{x:cx+(c-(side-1)/2)*2,z:cz+(r-(side-1)/2)*2};}
 if(form==='wedge'){const r=Math.floor(Math.sqrt(idx*2)),c=idx-r*(r+1)/2;
  return{x:cx+(c-r/2)*spread,z:cz+r*depth*(facing>0?-1:1)};}
 return{x:cx+u.ox,z:cz+u.oz};}
function enemyCommander(dt){
 enemyOrderTimer-=dt;
 if(enemyOrderTimer<=0){enemyOrderTimer=4+Math.random()*4;
  const eAlive=units.filter(u=>u.alive&&u.side<0&&!u.fleeing).length;
  const aAlive=units.filter(u=>u.alive&&u.side>0&&!u.fleeing).length;
  const enemyCav=units.filter(u=>u.alive&&u.side<0&&!u.fleeing&&u.branch==='cav').length;
  const allyCav=units.filter(u=>u.alive&&u.side>0&&!u.fleeing&&u.branch==='cav').length;
  if(eAlive<aAlive*.6)enemyOrder='hold';
  else if(enemyCav>2&&Math.random()<.4){enemyOrder='flank';enemyForm='wedge';}
  else if(aAlive>eAlive&&Math.random()<.3)enemyOrder='retreat';
  else{enemyOrder='advance';enemyForm=['line','shieldwall','loose'][Math.floor(Math.random()*3)];}
  if(allyCav>1&&enemyForm!=='square'&&Math.random()<.4)enemyForm='square';}
 const eUnits=units.filter(u=>u.alive&&u.side<0&&!u.fleeing);
 eUnits.forEach((u,idx)=>{
  if(enemyOrder==='retreat'){u.fleeing=u.mor<25;return;}
  if(enemyOrder==='hold'){u.holdPos=true;return;}
  u.holdPos=false;
  if(enemyOrder==='flank'&&u.branch==='cav'){
   const tgt=units.find(o=>o.alive&&o.side>0&&!o.fleeing&&o.branch==='arch');
   if(tgt){u.flankTarget=tgt;return;}}
  u.flankTarget=null;});}
function unitAI(u,dt,t,allUnits){
 if(!u.alive||u.fleeing)return;
 if(u.mor<20&&!u.fleeing){u.fleeing=true;u.g.rotation.y=Math.atan2(0-u.g.position.x,(-u.side*80)-u.g.position.z);}
 if(u.fleeing){const fleeX=0,fleeZ=-u.side*80;const dx=fleeX-u.g.position.x,dz=fleeZ-u.g.position.z,d=Math.hypot(dx,dz)||1;
  u.g.position.x+=dx/d*u.d.spd*1.5*dt;u.g.position.z+=dz/d*u.d.spd*1.5*dt;
  u.g.userData.lL.rotation.x=Math.sin(t*14)*.7;u.g.userData.lR.rotation.x=-Math.sin(t*14)*.7;return;}
 u.cd-=dt;
 let tgt=null,best=1e9;
 const isEnemy=u.side<0;
 if(isEnemy){const dh=Math.hypot(P.x-u.g.position.x,P.z-u.g.position.z);if(dh<best&&mode==='battle'){best=dh;tgt={hero:true,x:P.x,z:P.z};}}
 for(const o of allUnits){if(!o.alive||o.fleeing||o.side===u.side)continue;
  const d=Math.hypot(o.g.position.x-u.g.position.x,o.g.position.z-u.g.position.z);if(d<best){best=d;tgt={u:o,x:o.g.position.x,z:o.g.position.z};}}
 if(u.flankTarget&&u.flankTarget.alive&&!u.flankTarget.fleeing){tgt={u:u.flankTarget,x:u.flankTarget.g.position.x,z:u.flankTarget.g.position.z};best=Math.hypot(tgt.x-u.g.position.x,tgt.z-u.g.position.z);}
 const myOrder=isEnemy?enemyOrder:order;
 const myForm=isEnemy?enemyForm:formation;
 if(mode==='settlement'||myOrder==='retreat'||!tgt){
  const tx=P.x+u.ox,tz=P.z+u.oz,d=Math.hypot(tx-u.g.position.x,tz-u.g.position.z);
  if(d>1.2){u.g.position.x+=(tx-u.g.position.x)/d*Math.min(d,u.d.spd*1.3*dt);u.g.position.z+=(tz-u.g.position.z)/d*Math.min(d,u.d.spd*1.3*dt);
   u.g.rotation.y=Math.atan2(tx-u.g.position.x,tz-u.g.position.z);
   u.g.userData.lL.rotation.x=Math.sin(t*10+u.ph)*.5;u.g.userData.lR.rotation.x=-Math.sin(t*10+u.ph)*.5;}
  return;}
 if(myOrder==='follow'){const tx=P.x+u.ox,tz=P.z+u.oz,d=Math.hypot(tx-u.g.position.x,tz-u.g.position.z);
  if(d>2){u.g.position.x+=(tx-u.g.position.x)/d*u.d.spd*dt;u.g.position.z+=(tz-u.g.position.z)/d*u.d.spd*dt;
   u.g.rotation.y=Math.atan2(tx-u.g.position.x,tz-u.g.position.z);
   u.g.userData.lL.rotation.x=Math.sin(t*10+u.ph)*.5;u.g.userData.lR.rotation.x=-Math.sin(t*10+u.ph)*.5;}return;}
 if((myOrder==='hold'||u.holdPos)&&best>6){const tx=P.x+u.ox,tz=P.z+u.oz,d=Math.hypot(tx-u.g.position.x,tz-u.g.position.z);
  if(d>1){u.g.position.x+=(tx-u.g.position.x)/d*u.d.spd*.6*dt;u.g.position.z+=(tz-u.g.position.z)/d*u.d.spd*.6*dt;}return;}
 if(u.branch==='arch'&&myOrder!=='hold'){
  const threat=allUnits.find(o=>o.alive&&!o.fleeing&&o.side!==u.side&&o.branch==='inf'&&
   Math.hypot(o.g.position.x-u.g.position.x,o.g.position.z-u.g.position.z)<5);
  if(threat&&!u.rangedAway){const dx=u.g.position.x-threat.g.position.x,dz=u.g.position.z-threat.g.position.z,d=Math.hypot(dx,dz)||1;
   u.g.position.x+=dx/d*u.d.spd*1.2*dt;u.g.position.z+=dz/d*u.d.spd*1.2*dt;return;}}
 const dx=tgt.x-u.g.position.x,dz=tgt.z-u.g.position.z,d=Math.hypot(dx,dz)||1;
 u.g.rotation.y=Math.atan2(dx,dz);
 const rng=u.d.ranged?11:1.9;
 const cavCharge=u.branch==='cav'&&d>5&&d<15;
 const spd=cavCharge?u.d.spd*1.4:u.d.spd;
 if(d>rng*.85){u.g.position.x+=dx/d*spd*dt;u.g.position.z+=dz/d*spd*dt;
  u.g.userData.lL.rotation.x=Math.sin(t*10+u.ph)*.55;u.g.userData.lR.rotation.x=-Math.sin(t*10+u.ph)*.55;}
 if(d<rng&&u.cd<=0){u.cd=u.d.ranged?1.6:1.05;u.g.userData.aR.rotation.x=-1.9;
  const dmgMul=cavCharge?1.5:1;
  if(u.d.ranged)arrow(u.g.position.x,u.g.position.z,Math.atan2(dx,dz),u.d.atk*dmgMul,u.side);
  else if(tgt.hero){if(P.inv<=0){P.hp-=Math.max(2,u.d.atk*dmgMul-ARMOR*.4);P.inv=.35;shake=.2;burst(P.x,1.2,P.z,5);hooks.sfx('hurt');}}
  else{tgt.u.hp-=Math.max(3,u.d.atk*dmgMul-tgt.u.d.arm*.4);burst(tgt.u.g.position.x,1.2,tgt.u.g.position.z,4);
   if(tgt.u.hp<=0){kill(tgt.u);checkMorale(tgt.u,allUnits);}}
  if(cavCharge)u.mor=cl(u.mor+3,0,100);}
 u.g.userData.aR.rotation.x+=(-.3-u.g.userData.aR.rotation.x)*Math.min(1,dt*8);}
let ARMOR=3;
function checkMorale(dead,allUnits){
 const side=dead.side;
 const sideUnits=allUnits.filter(u=>u.alive&&u.side===side&&!u.fleeing);
 const sideDead=allUnits.filter(u=>!u.alive&&u.side===side).length;
 const sideTotal=sideUnits.length+sideDead;
 if(sideTotal<2)return;
 const ratio=sideDead/sideTotal;
 if(ratio>.3){sideUnits.forEach(u=>{u.mor=cl(u.mor-8,0,100);});}
 if(ratio>.5){sideUnits.forEach(u=>{u.mor=cl(u.mor-12,0,100);if(u.mor<25)u.fleeing=true;});}}
const ray=new THREE.Raycaster(),plane=new THREE.Plane(new THREE.Vector3(0,1,0),0),nd=new THREE.Vector2(),hit=new THREE.Vector3();
export function update(dt,t,weapon,armor){
 if(!started||!hero)return;
 ARMOR=armor;
 nd.set(mouse.x/innerWidth*2-1,-(mouse.y/innerHeight)*2+1);ray.setFromCamera(nd,cam);
 if(ray.ray.intersectPlane(plane,hit))P.face=Math.atan2(hit.x-P.x,hit.z-P.z);
 let ix=(keys.KeyD||keys.ArrowRight?1:0)-(keys.KeyA||keys.ArrowLeft?1:0),iz=(keys.KeyS||keys.ArrowDown?1:0)-(keys.KeyW||keys.ArrowUp?1:0);
 const il=Math.hypot(ix,iz);if(il>1){ix/=il;iz/=il;}
 const run=keys.ShiftLeft||keys.ShiftRight;
 if(P.dodge>0){P.dodge-=dt;P.x+=Math.sin(P.face)*15*dt;P.z+=Math.cos(P.face)*15*dt;hero.rotation.z=Math.sin((1-P.dodge/.3)*Math.PI)*1.1;}
 else{hero.rotation.z=0;const sp=(run?9.2:5.6)*(P.swing>0?.45:1);P.x+=ix*sp*dt;P.z+=iz*sp*dt;}
 if(dodgeQ&&P.dodgeCd<=0){P.dodge=.3;P.dodgeCd=.8;P.inv=.36;hooks.sfx('dodge');}dodgeQ=false;
 if(P.dodgeCd>0)P.dodgeCd-=dt;if(P.inv>0)P.inv-=dt;
 collide();P.moving=il>0;
 if(P.moving)P.wp+=dt*(run?14:10);
 hero.position.set(P.x,0,P.z);hero.rotation.y=P.face;
 const U=hero.userData,sn=Math.sin(P.wp),am=P.moving?(run?.8:.55):0;
 U.lL.rotation.x=sn*am;U.lR.rotation.x=-sn*am;U.aL.rotation.x=-.3;U.aR.rotation.x=-.3;
 if(P.atkCd>0)P.atkCd-=dt;
 if(P.swing>0){P.swing-=dt;const p=1-P.swing/weapon.spd;
  U.aR.rotation.x=-2.3+p*3.4;U.aL.rotation.x=-.6;
  if(p>.35&&p<.55&&!P.hitDone){P.hitDone=true;
   for(const u of units){if(!u.alive||u.fleeing||u.side>0)continue;
    const dx=u.g.position.x-P.x,dz=u.g.position.z-P.z,d=Math.hypot(dx,dz);
    if(d<weapon.reach+.6&&Math.abs(Math.atan2(Math.sin(Math.atan2(dx,dz)-P.face),Math.cos(Math.atan2(dx,dz)-P.face)))<1.1){
     u.hp-=weapon.atk+12;burst(u.g.position.x,1.2,u.g.position.z,7);shake=.16;hooks.sfx('hit');
     if(u.hp<=0){kill(u);checkMorale(u,units);}}}}
 }
 else if(atkHeld&&P.atkCd<=0&&mode==='battle'){P.atkCd=weapon.spd+.1;P.swing=weapon.spd;P.hitDone=false;hooks.sfx('swing');
  const a=new THREE.Mesh(G.torus,new THREE.MeshBasicMaterial({color:0xffe9a0,transparent:true,opacity:.75,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide}));
  a.scale.setScalar(weapon.reach*1.7);a.position.set(P.x+Math.sin(P.face)*1.1,1.3,P.z+Math.cos(P.face)*1.1);a.rotation.set(Math.PI/2,0,-P.face);
  world.add(a);fx.push({m:a,t:0,arc:true});}
 if(mode==='battle')enemyCommander(dt);
 for(const u of units)unitAI(u,dt,t,units);
 for(let i=arrows.length-1;i>=0;i--){const a=arrows[i];a.t+=dt;a.x+=a.vx*dt;a.z+=a.vz*dt;a.m.position.set(a.x,1.3,a.z);
  let dead=a.t>1.6;
  if(a.side<0&&Math.hypot(a.x-P.x,a.z-P.z)<.6&&P.inv<=0){P.hp-=Math.max(2,a.dmg-armor*.4);P.inv=.3;shake=.15;burst(P.x,1.3,P.z,4);hooks.sfx('hurt');dead=true;}
  if(!dead)for(const u of units){if(!u.alive||u.fleeing||u.side===a.side)continue;
   if(Math.hypot(a.x-u.g.position.x,a.z-u.g.position.z)<.6){u.hp-=Math.max(3,a.dmg-u.d.arm*.4);burst(u.g.position.x,1.3,u.g.position.z,3);if(u.hp<=0){kill(u);checkMorale(u,units);}dead=true;break;}}
  if(dead){world.remove(a.m);arrows.splice(i,1);}}
 for(let i=fx.length-1;i>=0;i--){const f=fx[i];f.t+=dt;
  if(f.arc){f.m.material.opacity=.75*(1-f.t/.22);f.m.scale.multiplyScalar(1+dt*3);if(f.t>.22){world.remove(f.m);f.m.material.dispose();fx.splice(i,1);}}
  else{f.vy-=15*dt;f.m.position.x+=f.vx*dt;f.m.position.y+=f.vy*dt;f.m.position.z+=f.vz*dt;
   if(f.t>.85||f.m.position.y<0){world.remove(f.m);f.m.material.dispose();fx.splice(i,1);}}}
 fires.forEach(f=>{const k=1+Math.sin(t*9+f.x)*.14;f.f.scale.set(.9*k,1.3*(1+Math.sin(t*11+f.z)*.16),.9*k);f.l.intensity=1.5+Math.sin(t*10+f.x)*.4;});
 inter.forEach(i=>{i.ring.material.opacity=.32+Math.sin(t*3+i.x)*.16;});
 const cx=P.x,cz=P.z;
 cam.position.lerp(new THREE.Vector3(cx,34,cz+22),1-Math.exp(-7*dt));
 if(shake>0){shake=Math.max(0,shake-dt*1.5);cam.position.x+=(Math.random()-.5)*shake;cam.position.z+=(Math.random()-.5)*shake;}
 cam.lookAt(cx,1,cz);
 const sun=scene.userData.sun;sun.position.set(cx+26,38,cz+18);sun.target.position.set(cx,0,cz);
 if(mode==='battle'&&!over){const c=counts();
  if(c.enemy===0&&!units.some(u=>u.alive&&u.side<0))finish(true);
  else if(P.hp<=0||c.ally===0)finish(false);}
 if(mode==='settlement'&&P.hp<100)P.hp=Math.min(100,P.hp+dt*4);
 R.render(scene,cam);}
function kill(u){u.alive=false;u.g.rotation.x=-Math.PI/2;u.g.position.y=.3;burst(u.g.position.x,1,u.g.position.z,10);hooks.sfx('kill');}
function finish(win){if(over)return;over=true;hooks.battleEnd(win,losses());}
export function heroState(){return{hp:P.hp,max:P.maxHp};}
export function battleOver(){return over;}
export function currentMode(){return mode;}
