import * as THREE from 'three';
import {UNITS} from './data.js';
const TAU=Math.PI*2,cl=(v,a,b)=>Math.max(a,Math.min(b,v));
let R,scene,cam,clock,raf=null,units=[],hero,keys={},mouse={x:0,y:0},atk=false,dodgeQ=false;
let onEnd=null,over=false,shake=0,parts=[],hp=100,maxHp=100,atkCd=0,dodge=0,dodgeCd=0,face=0,vy=0,ground=true;
const G={box:new THREE.BoxGeometry(1,1,1),cyl:new THREE.CylinderGeometry(.5,.5,1,10),cone:new THREE.ConeGeometry(.5,1,8),sph:new THREE.SphereGeometry(.5,12,9),pyr:new THREE.ConeGeometry(.72,1,4),plane:new THREE.PlaneGeometry(1,1)};
function tex(base,spots){const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d');
 g.fillStyle=base;g.fillRect(0,0,128,128);
 for(let i=0;i<spots;i++){g.fillStyle=`rgba(0,0,0,${Math.random()*.14})`;g.beginPath();g.arc(Math.random()*128,Math.random()*128,2+Math.random()*9,0,TAU);g.fill();}
 for(let i=0;i<400;i++){g.fillStyle=`rgba(255,255,255,${Math.random()*.08})`;g.fillRect(Math.random()*128,Math.random()*128,2,2);}
 const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.colorSpace=THREE.SRGBColorSpace;return t;}
const T={grass:tex('#5c7a42',150),wood:tex('#7a5230',60),stone:tex('#9a9a90',60),thatch:tex('#b09055',60),cloth:tex('#c9c2b0',30)};
T.grass.repeat.set(24,24);
const M={grass:new THREE.MeshLambertMaterial({map:T.grass}),wood:new THREE.MeshLambertMaterial({map:T.wood}),
 stone:new THREE.MeshLambertMaterial({map:T.stone}),thatch:new THREE.MeshLambertMaterial({map:T.thatch}),
 iron:new THREE.MeshLambertMaterial({color:0x9aa0a8}),skin:new THREE.MeshLambertMaterial({color:0xd8a882}),
 dark:new THREE.MeshLambertMaterial({color:0x3a2e21}),blood:new THREE.MeshBasicMaterial({color:0xa8382a})};
const put=(p,g,m,x,y,z,a=1,b=1,c=1,ry=0)=>{const o=new THREE.Mesh(g,m);o.position.set(x,y,z);o.scale.set(a,b,c);o.rotation.y=ry;o.castShadow=true;p.add(o);return o;};
function man(col,kind){
 const g=new THREE.Group(),cm=new THREE.MeshLambertMaterial({color:col,map:T.cloth});
 put(g,G.box,cm,0,1.05,0,.56,.85,.36);
 put(g,G.sph,M.skin,0,1.68,0,.42,.44,.42);
 put(g,G.sph,M.iron,0,1.8,0,.46,.3,.46);
 const lL=put(g,G.box,M.dark,-.14,.3,0,.16,.6,.16),lR=put(g,G.box,M.dark,.14,.3,0,.16,.6,.16);
 const aL=new THREE.Group(),aR=new THREE.Group();aL.position.set(-.36,1.4,0);aR.position.set(.36,1.4,0);
 put(aL,G.box,cm,0,-.28,0,.15,.55,.15);put(aR,G.box,cm,0,-.28,0,.15,.55,.15);g.add(aL,aR);
 if(kind==='archer'){const b=put(aL,G.cyl,M.wood,0,-.5,.2,.08,.9,.08);b.rotation.x=.4;}
 else if(kind==='knight'){put(aL,G.box,M.iron,0,-.35,.18,.5,.7,.08);put(aR,G.box,M.iron,0,-.75,0,.09,1.1,.09);}
 else put(aR,G.cyl,M.wood,0,-.6,.1,.07,1.5,.07);
 g.userData={lL,lR,aL,aR};return g;}
function village(g,side){
 for(let i=0;i<7;i++){const x=side*(20+Math.random()*16),z=-24+i*7+Math.random()*4;
  put(g,G.box,M.wood,x,1,z,3.4,2,2.8,Math.random());put(g,G.pyr,M.thatch,x,2.7,z,4.4,1.5,3.8,Math.PI/4);}
 for(let i=0;i<14;i++){const a=Math.random()*TAU,r=30+Math.random()*14,x=Math.cos(a)*r,z=Math.sin(a)*r;
  put(g,G.cyl,M.wood,x,1.1,z,.5,2.2,.5);put(g,G.sph,new THREE.MeshLambertMaterial({color:0x4a6b34,map:T.grass}),x,3,z,3.4,3,3.4);}
 for(let i=0;i<11;i++){const x=-26+i*5.2;put(g,G.box,M.wood,x,.9,-32,4.4,1.8,.4);}
 put(g,G.box,M.stone,0,2.2,-38,10,4.4,7);put(g,G.pyr,M.thatch,0,5.4,-38,12,2.4,9,Math.PI/4);}
export function start(cfg,cb){
 onEnd=cb;over=false;units=[];parts=[];hp=maxHp=100+cfg.level*6;atkCd=dodge=dodgeCd=vy=0;ground=true;shake=0;
 const cv=document.getElementById('bcanvas');
 if(!R){R=new THREE.WebGLRenderer({canvas:cv,antialias:true});R.setPixelRatio(Math.min(devicePixelRatio,2));R.shadowMap.enabled=true;R.shadowMap.type=THREE.PCFSoftShadowMap;R.toneMapping=THREE.ACESFilmicToneMapping;}
 R.setSize(innerWidth,innerHeight);
 scene=new THREE.Scene();scene.background=new THREE.Color(0x9db8c4);scene.fog=new THREE.Fog(0x9db8c4,45,120);
 cam=new THREE.PerspectiveCamera(46,innerWidth/innerHeight,.1,300);
 scene.add(new THREE.HemisphereLight(0xcfe4ff,0x4a5a34,.75));
 const sun=new THREE.DirectionalLight(0xffe6bb,1.5);sun.position.set(24,34,16);sun.castShadow=true;
 sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-40,right:40,top:40,bottom:-40,far:110});scene.add(sun);
 const gr=new THREE.Mesh(new THREE.PlaneGeometry(200,200),M.grass);gr.rotation.x=-Math.PI/2;gr.receiveShadow=true;scene.add(gr);
 const world=new THREE.Group();scene.add(world);village(world,1);
 hero=man(0xc9a227,'knight');hero.position.set(0,0,16);scene.add(hero);
 const mk=(type,side,x,z)=>{const d=UNITS[type],g=man(side>0?d.col:(type==='brigand'?0x6b5a4a:0x8a3a2c),type);
  g.position.set(x,0,z);scene.add(g);
  units.push({g,type,d,side,hp:d.hp,max:d.hp,cd:Math.random(),ph:Math.random()*TAU,alive:true});};
 for(let i=0;i<cfg.allies;i++){const t=i%5===4?'archer':(i%7===6?'serjeant':'levy');mk(t,1,(Math.random()-.5)*16,14+Math.random()*8);}
 for(let i=0;i<cfg.enemies;i++){const t=cfg.raid?(i%4===3?'archer':'brigand'):(i%8===7?'knight':i%5===4?'archer':i%3===2?'serjeant':'levy');
  mk(t,-1,(Math.random()-.5)*22,-16-Math.random()*10);}
 clock=new THREE.Clock();document.getElementById('battle').classList.add('on');
 document.getElementById('bmsg').classList.remove('on');
 addEventListener('keydown',kd);addEventListener('keyup',ku);addEventListener('pointermove',pm);
 cv.addEventListener('pointerdown',pd);addEventListener('pointerup',pu);addEventListener('resize',rs);
 loop();}
function kd(e){keys[e.code]=true;if(e.code==='KeyQ')dodgeQ=true;if(['Space','KeyW','KeyA','KeyS','KeyD'].includes(e.code))e.preventDefault();}
function ku(e){keys[e.code]=false;}
function pm(e){mouse.x=e.clientX;mouse.y=e.clientY;}
function pd(e){if(e.button===0)atk=true;}
function pu(){atk=false;}
function rs(){if(!R)return;R.setSize(innerWidth,innerHeight);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();}
function burst(x,y,z,c,n){for(let i=0;i<n;i++){const m=new THREE.Mesh(G.box,M.blood);m.scale.setScalar(.09+Math.random()*.08);
 m.position.set(x,y,z);scene.add(m);parts.push({m,vx:(Math.random()-.5)*5,vy:2+Math.random()*4,vz:(Math.random()-.5)*5,t:0});}}
function finish(win){
 if(over)return;over=true;
 const bm=document.getElementById('bmsg');bm.querySelector('.m1').textContent=win?'Сеча выиграна':'Поле потеряно';
 bm.querySelector('.m1').style.color=win?'#c9a227':'#e07a68';
 bm.querySelector('.m2').textContent=win?'Неприятель бежал с поля':'Войско дрогнуло и отступило';
 bm.classList.add('on');
 setTimeout(()=>{cleanup();document.getElementById('battle').classList.remove('on');onEnd&&onEnd(win);},2100);}
function cleanup(){cancelAnimationFrame(raf);raf=null;
 removeEventListener('keydown',kd);removeEventListener('keyup',ku);removeEventListener('pointermove',pm);
 removeEventListener('pointerup',pu);removeEventListener('resize',rs);
 document.getElementById('bcanvas').removeEventListener('pointerdown',pd);
 scene.traverse(o=>{if(o.geometry&&!Object.values(G).includes(o.geometry))o.geometry.dispose();});
 units=[];parts=[];}
const ray=new THREE.Raycaster(),pl=new THREE.Plane(new THREE.Vector3(0,1,0),0),nd=new THREE.Vector2(),hit=new THREE.Vector3();
function loop(){
 raf=requestAnimationFrame(loop);
 const dt=Math.min(clock.getDelta(),.05),t=clock.elapsedTime;
 if(!over){
  nd.set(mouse.x/innerWidth*2-1,-(mouse.y/innerHeight)*2+1);ray.setFromCamera(nd,cam);
  if(ray.ray.intersectPlane(pl,hit))face=Math.atan2(hit.x-hero.position.x,hit.z-hero.position.z);
  let ix=(keys.KeyD?1:0)-(keys.KeyA?1:0),iz=(keys.KeyS?1:0)-(keys.KeyW?1:0);
  const l=Math.hypot(ix,iz)||1;ix/=l;iz/=l;
  const spd=(keys.ShiftLeft?9:5.4)*(dodge>0?2.6:1);
  if(dodge>0){dodge-=dt;hero.position.x+=Math.sin(face)*spd*dt;hero.position.z+=Math.cos(face)*spd*dt;hero.rotation.z=Math.sin((1-dodge/.3)*Math.PI)*1.1;}
  else{hero.rotation.z=0;hero.position.x+=ix*spd*dt;hero.position.z+=iz*spd*dt;}
  if(dodgeQ&&dodgeCd<=0){dodge=.3;dodgeCd=.85;}dodgeQ=false;
  if(dodgeCd>0)dodgeCd-=dt;
  hero.position.x=cl(hero.position.x,-44,44);hero.position.z=cl(hero.position.z,-40,40);
  hero.rotation.y=face;
  const mv=Math.abs(ix)+Math.abs(iz)>0;
  hero.userData.lL.rotation.x=mv?Math.sin(t*11)*.6:0;hero.userData.lR.rotation.x=mv?-Math.sin(t*11)*.6:0;
  if(atkCd>0)atkCd-=dt;
  if(atk&&atkCd<=0){atkCd=.42;hero.userData.aR.rotation.x=-2.2;
   for(const u of units){if(!u.alive||u.side>0)continue;
    const d=Math.hypot(u.g.position.x-hero.position.x,u.g.position.z-hero.position.z);
    if(d<2.6){u.hp-=26;burst(u.g.position.x,1.2,u.g.position.z,0xa8382a,7);shake=.18;
     if(u.hp<=0){u.alive=false;u.g.rotation.x=-Math.PI/2;u.g.position.y=.3;}}}}
  hero.userData.aR.rotation.x+=(-.2-hero.userData.aR.rotation.x)*Math.min(1,dt*9);
  for(const u of units){
   if(!u.alive)continue;u.cd-=dt;
   let tgt=null,best=1e9;
   if(u.side<0){const dh=Math.hypot(hero.position.x-u.g.position.x,hero.position.z-u.g.position.z);if(dh<best){best=dh;tgt={p:hero.position,hero:true};}}
   for(const o of units){if(!o.alive||o.side===u.side)continue;
    const d=Math.hypot(o.g.position.x-u.g.position.x,o.g.position.z-u.g.position.z);if(d<best){best=d;tgt={p:o.g.position,u:o};}}
   if(!tgt)continue;
   const dx=tgt.p.x-u.g.position.x,dz=tgt.p.z-u.g.position.z,d=Math.hypot(dx,dz)||1;
   u.g.rotation.y=Math.atan2(dx,dz);
   const stop=u.d.ranged?8:u.d.rng*.85;
   if(d>stop){u.g.position.x+=dx/d*u.d.spd*dt;u.g.position.z+=dz/d*u.d.spd*dt;
    u.g.userData.lL.rotation.x=Math.sin(t*10+u.ph)*.55;u.g.userData.lR.rotation.x=-Math.sin(t*10+u.ph)*.55;}
   if(d<u.d.rng&&u.cd<=0){u.cd=u.d.ranged?1.5:1.05;
    u.g.userData.aR.rotation.x=-1.8;
    if(tgt.hero){if(dodge<=0){hp-=u.d.atk;shake=.22;burst(hero.position.x,1.2,hero.position.z,0xa8382a,5);}}
    else{tgt.u.hp-=u.d.atk;burst(tgt.u.g.position.x,1.2,tgt.u.g.position.z,0xa8382a,4);
     if(tgt.u.hp<=0){tgt.u.alive=false;tgt.u.g.rotation.x=-Math.PI/2;tgt.u.g.position.y=.3;}}}
   u.g.userData.aR.rotation.x+=(-.2-u.g.userData.aR.rotation.x)*Math.min(1,dt*8);}
  const al=units.filter(u=>u.alive&&u.side>0).length,en=units.filter(u=>u.alive&&u.side<0).length;
  document.getElementById('bAlly').textContent=al+(hp>0?' + вы':'');
  document.getElementById('bEnemy').textContent=en;
  document.getElementById('bhpF').style.width=cl(hp/maxHp*100,0,100)+'%';
  if(en===0)finish(true);else if(hp<=0||al===0)finish(false);
 }
 for(let i=parts.length-1;i>=0;i--){const p=parts[i];p.t+=dt;p.vy-=14*dt;
  p.m.position.x+=p.vx*dt;p.m.position.y+=p.vy*dt;p.m.position.z+=p.vz*dt;
  if(p.t>.9||p.m.position.y<0){scene.remove(p.m);parts.splice(i,1);}}
 const cx=hero.position.x,cz=hero.position.z;
 cam.position.lerp(new THREE.Vector3(cx,17,cz+19),1-Math.exp(-6*dt));
 if(shake>0){shake=Math.max(0,shake-dt*1.4);cam.position.x+=(Math.random()-.5)*shake;cam.position.y+=(Math.random()-.5)*shake;}
 cam.lookAt(cx,1.4,cz-2);
 R.render(scene,cam);}
