import * as THREE from 'three';
const TAU=Math.PI*2;
const cv=(s,d,r=1)=>{const c=document.createElement('canvas');c.width=c.height=s;d(c.getContext('2d'),s);const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(r,r);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;};
const nz=(g,s,b,sp,dt)=>{g.fillStyle=b;g.fillRect(0,0,s,s);for(let i=0;i<sp;i++){g.fillStyle=`rgba(0,0,0,${Math.random()*.12})`;g.beginPath();g.arc(Math.random()*s,Math.random()*s,2+Math.random()*10,0,TAU);g.fill();}for(let i=0;i<dt;i++){g.fillStyle=`rgba(255,255,255,${Math.random()*.1})`;g.fillRect(Math.random()*s,Math.random()*s,2,2);}};
export const TEX={
grass:cv(256,(g,s)=>{nz(g,s,'#4e9a55',150,700);for(let i=0;i<1100;i++){const x=Math.random()*s,y=Math.random()*s;g.strokeStyle=`rgba(${30+Math.random()*40},${110+Math.random()*70},${50+Math.random()*40},.5)`;g.beginPath();g.moveTo(x,y);g.lineTo(x+(Math.random()-.5)*3,y-4-Math.random()*4);g.stroke();}},60),
bark:cv(128,(g,s)=>{nz(g,s,'#7a5233',60,180);for(let i=0;i<34;i++){g.strokeStyle=`rgba(40,25,12,${.2+Math.random()*.3})`;g.lineWidth=1+Math.random()*2;const x=Math.random()*s;g.beginPath();g.moveTo(x,0);g.bezierCurveTo(x+8,s*.3,x-8,s*.6,x+4,s);g.stroke();}},2),
plank:cv(128,(g,s)=>{nz(g,s,'#8a6242',40,140);g.strokeStyle='rgba(40,25,12,.35)';g.lineWidth=2;for(let y=0;y<s;y+=14){g.beginPath();g.moveTo(0,y);g.lineTo(s,y);g.stroke();}},2),
leaf:cv(128,(g,s)=>{nz(g,s,'#3f9a52',80,340);for(let i=0;i<190;i++){g.fillStyle=`rgba(${60+Math.random()*60},${150+Math.random()*70},${70+Math.random()*40},.5)`;g.beginPath();g.ellipse(Math.random()*s,Math.random()*s,2+Math.random()*4,1+Math.random()*2,Math.random()*TAU,0,TAU);g.fill();}},2),
rock:cv(128,(g,s)=>{nz(g,s,'#8a9588',90,250);for(let i=0;i<22;i++){g.strokeStyle=`rgba(40,45,40,${.2+Math.random()*.3})`;g.beginPath();let x=Math.random()*s,y=Math.random()*s;g.moveTo(x,y);for(let k=0;k<4;k++){x+=(Math.random()-.5)*20;y+=(Math.random()-.5)*20;g.lineTo(x,y);}g.stroke();}},2),
stone:cv(128,(g,s)=>{nz(g,s,'#9c9c92',60,170);g.strokeStyle='rgba(0,0,0,.22)';g.lineWidth=2;for(let y=0;y<s;y+=16){g.beginPath();g.moveTo(0,y);g.lineTo(s,y);g.stroke();for(let x=(y/16%2)*16;x<s;x+=32){g.beginPath();g.moveTo(x,y);g.lineTo(x,y+16);g.stroke();}}},4),
cobble:cv(128,(g,s)=>{nz(g,s,'#8e8a80',40,140);for(let i=0;i<66;i++){const x=Math.random()*s,y=Math.random()*s;g.fillStyle=`rgba(${120+Math.random()*40},${118+Math.random()*36},${108+Math.random()*30},.9)`;g.beginPath();g.arc(x,y,5+Math.random()*5,0,TAU);g.fill();g.strokeStyle='rgba(50,48,44,.5)';g.stroke();}},14),
dirt:cv(128,(g,s)=>nz(g,s,'#8a7554',80,250),6),
thatch:cv(128,(g,s)=>{nz(g,s,'#b09055',40,170);for(let i=0;i<140;i++){g.strokeStyle=`rgba(${140+Math.random()*60},${110+Math.random()*50},${60+Math.random()*40},.6)`;const x=Math.random()*s,y=Math.random()*s;g.beginPath();g.moveTo(x,y);g.lineTo(x+2,y+8);g.stroke();}},3),
metal:cv(128,(g,s)=>{nz(g,s,'#9aa0a8',40,250);for(let i=0;i<48;i++){g.strokeStyle=`rgba(255,255,255,${.05+Math.random()*.1})`;const y=Math.random()*s;g.beginPath();g.moveTo(0,y);g.lineTo(s,y+2);g.stroke();}},1),
cloth:cv(128,(g,s)=>{nz(g,s,'#c9c2b0',30,170);g.strokeStyle='rgba(0,0,0,.08)';for(let i=0;i<s;i+=4){g.beginPath();g.moveTo(i,0);g.lineTo(i,s);g.stroke();g.beginPath();g.moveTo(0,i);g.lineTo(s,i);g.stroke();}},2),
skin:cv(128,(g,s)=>nz(g,s,'#b0b0b0',70,250),1),
bone:cv(128,(g,s)=>{nz(g,s,'#cdc7b4',50,170);for(let i=0;i<26;i++){g.strokeStyle='rgba(120,112,96,.3)';g.beginPath();g.arc(Math.random()*s,Math.random()*s,3+Math.random()*6,0,TAU);g.stroke();}},2),
bump:cv(128,(g,s)=>{g.fillStyle='#808080';g.fillRect(0,0,s,s);for(let i=0;i<1500;i++){const v=100+Math.random()*80;g.fillStyle=`rgb(${v},${v},${v})`;g.fillRect(Math.random()*s,Math.random()*s,2,2);}},5)};
export const glowTex=cv(128,g=>{const r=g.createRadialGradient(64,64,2,64,64,62);r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.35,'rgba(255,255,255,.45)');r.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=r;g.fillRect(0,0,128,128);});
export const G={box:new THREE.BoxGeometry(1,1,1),cyl:new THREE.CylinderGeometry(.5,.5,1,12),cone:new THREE.ConeGeometry(.5,1,12),pyr:new THREE.ConeGeometry(.72,1,4),sph:new THREE.SphereGeometry(.5,14,10),ico:new THREE.DodecahedronGeometry(.5,0),oct:new THREE.OctahedronGeometry(.5,0),plane:new THREE.PlaneGeometry(1,1),ring:new THREE.RingGeometry(.42,.5,24),torus:new THREE.TorusGeometry(.5,.05,6,22,Math.PI),grass:new THREE.ConeGeometry(.06,.4,5),flower:new THREE.SphereGeometry(.09,6,6)};
const L=o=>new THREE.MeshLambertMaterial(o);
export const MAT={
trunk:L({color:0x8a6240,map:TEX.bark,bumpMap:TEX.bump,bumpScale:.07}),plank:L({color:0x9a7048,map:TEX.plank}),darkwood:L({color:0x5e4227,map:TEX.plank}),
leaf:L({color:0x4fa85f,map:TEX.leaf}),leaf2:L({color:0x69bd74,map:TEX.leaf}),rock:L({color:0x9aa598,map:TEX.rock,bumpMap:TEX.bump,bumpScale:.12}),
stone:L({color:0xa9a99d,map:TEX.stone,bumpMap:TEX.bump,bumpScale:.09}),darkstone:L({color:0x6d6d66,map:TEX.stone}),
cobble:L({color:0x9c988c,map:TEX.cobble}),dirt:L({color:0x9a8460,map:TEX.dirt}),thatch:L({color:0xc0a065,map:TEX.thatch}),roof:L({color:0x8f4f3c,map:TEX.thatch}),
bone:L({color:0xd6cfbb,map:TEX.bone}),bush:L({color:0x57b067,map:TEX.leaf}),ore:L({color:0x7a7a86,map:TEX.rock}),coal:L({color:0x3a3a42,map:TEX.rock}),
coalShard:L({color:0x181820,emissive:0x1a1a22,emissiveIntensity:.4}),crystal:L({color:0x9ff5e2,emissive:0x2bd6b0,emissiveIntensity:1.2}),
metal:L({color:0x9096a0,map:TEX.metal}),flagBlue:L({color:0x2f6ea8,map:TEX.cloth,side:THREE.DoubleSide}),npc:L({color:0x3a7ca5,map:TEX.cloth}),
grass:L({color:0xffffff,map:TEX.grass}),flower:L({color:0xffffff}),stump:L({color:0x6a6a5a,map:TEX.rock}),
regrow:new THREE.MeshBasicMaterial({color:0x7ee081,transparent:true,opacity:.25,side:THREE.DoubleSide}),
fire:new THREE.MeshBasicMaterial({color:0xff9f43,transparent:true,opacity:.9}),
bulletP:new THREE.MeshBasicMaterial({color:0xffd166}),bulletE:new THREE.MeshBasicMaterial({color:0x8aff8a})};
export const SHARED_GEO=new Set(Object.values(G)),SHARED_MAT=new Set(Object.values(MAT)),SHARED_TEX=new Set([...Object.values(TEX),glowTex]);
export const put=(p,g,m,x,y,z,sx=1,sy=1,sz=1,ry=0,sh=true)=>{const o=new THREE.Mesh(g,m);o.position.set(x,y,z);o.scale.set(sx,sy,sz);o.rotation.y=ry;o.castShadow=sh;p.add(o);return o;};
export const inst=(p,g,m,list)=>{const im=new THREE.InstancedMesh(g,m,list.length),mx=new THREE.Matrix4(),q=new THREE.Quaternion(),s=new THREE.Vector3(),v=new THREE.Vector3();list.forEach((t,i)=>{v.set(t[0],t[1],t[2]);q.setFromEuler(new THREE.Euler(0,t[6]||0,0));s.set(t[3],t[4],t[5]);mx.compose(v,q,s);im.setMatrixAt(i,mx);});im.instanceMatrix.needsUpdate=true;im.castShadow=true;p.add(im);return im;};
export const disposeTree=root=>root.traverse(o=>{if(o.geometry&&!SHARED_GEO.has(o.geometry))o.geometry.dispose();const ms=Array.isArray(o.material)?o.material:o.material?[o.material]:[];ms.forEach(m=>{if(SHARED_MAT.has(m))return;['map','bumpMap','emissiveMap','alphaMap'].forEach(k=>{const t=m[k];if(t&&!SHARED_TEX.has(t))t.dispose();});m.dispose();});});
export const glowSprite=(c,s,o)=>{const x=new THREE.Sprite(new THREE.SpriteMaterial({map:glowTex,color:c,transparent:true,opacity:o,blending:THREE.AdditiveBlending,depthWrite:false}));x.scale.setScalar(s);return x;};
export const makeHpBar=()=>{const c=document.createElement('canvas');c.width=64;c.height=8;const t=new THREE.CanvasTexture(c);const s=new THREE.Sprite(new THREE.SpriteMaterial({map:t,transparent:true,depthTest:false}));s.scale.set(1.5,.19,1);return{spr:s,ctx:c.getContext('2d'),tex:t};};
export const updateHpBar=e=>{const b=e.hpBar;if(!b)return;const g=b.ctx;g.clearRect(0,0,64,8);g.fillStyle='rgba(0,0,0,.65)';g.fillRect(0,0,64,8);g.fillStyle=e.raid?'#ff9f43':e.ally?'#4de3c1':'#ff5a5f';g.fillRect(1,1,62*Math.max(0,Math.min(1,e.hp/e.maxHp)),6);b.tex.needsUpdate=true;};
export function buildEnemyModel(def){
 const g=new THREE.Group(),parts={legs:[],arms:[],float:false},flash=[];
 const C=new THREE.Color(def.color),body=L({color:C,map:TEX.skin,emissive:C,emissiveIntensity:.1});flash.push(body);
 const dark=L({color:C.clone().multiplyScalar(.5),map:TEX.skin}),white=L({color:0xffffff}),s=def.size;
 const add=(ge,m,x,y,z,a=1,b=1,c=1)=>put(g,ge,m,x*s,y*s,z*s,a*s,b*s,c*s);
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
 return{group:g,parts,flash};}
export function buildAllyModel(color,skinMat){const g=new THREE.Group(),m=L({color,map:TEX.cloth}),d=L({color:0x2a3a4a,map:TEX.cloth});
 put(g,G.box,m,0,1,0,.6,.8,.4);put(g,G.sph,skinMat,0,1.7,0,.6,.6,.6);put(g,G.sph,MAT.metal,0,1.82,0,.66,.42,.66);
 const a=put(g,G.box,d,-.15,.25,0,.16,.5,.16),b=put(g,G.box,d,.15,.25,0,.16,.5,.16);
 const w=put(g,G.box,MAT.metal,.35,1.1,.2,.08,.6,.08);w.rotation.x=-.6;g.userData={legL:a,legR:b};return g;}
export function makeStump(type){const g=new THREE.Group();
 if(type==='tree')put(g,G.cyl,MAT.trunk,0,.17,0,.5,.35,.5);
 else if(type==='bush')for(let i=0;i<3;i++){const t=put(g,G.cone,MAT.trunk,(i-1)*.2,.2,0,.1,.4,.1);t.rotation.z=(i-1)*.4;}
 else for(let i=0;i<3;i++)put(g,G.ico,MAT.stump,(i-1)*.2,.1,(i%2)*.2-.1,.36,.3,.36);
 const r=new THREE.Mesh(G.ring,MAT.regrow);r.rotation.x=-Math.PI/2;r.position.y=.02;r.scale.setScalar(1.3);g.add(r);return g;}
export function addFire(W,x,z,s){const f=put(W.group,G.cone,MAT.fire,x,.5*s,z,s,1.3*s,s,0,false);
 const l=new THREE.PointLight(0xff9f43,1.8,11);l.position.set(x,1,z);W.group.add(l);W.fires.push({mesh:f,light:l,x,z,s});}
export function buildFortress(W,rnd,hk){
 const g=W.group,H=20,WH=2.6,T=.55;
 put(g,G.box,MAT.cobble,0,.04,0,40,.08,40,0,false).receiveShadow=true;
 const wall=(x,z,hx,hz)=>{put(g,G.box,MAT.stone,x,WH/2,z,hx*2,WH,hz*2);W.rects.push({x,z,hx,hz});};
 wall(0,-H,H,T);wall(H,0,T,H);wall(-H,0,T,H);wall(-11.6,H,8.4,T);wall(11.6,H,8.4,T);
 const cr=[];for(let x=-19;x<=19;x+=2.2){cr.push([x,WH+.32,-H,1.1,.64,1.1],[H,WH+.32,x,1.1,.64,1.1],[-H,WH+.32,x,1.1,.64,1.1]);}
 for(let x=-19;x<=-4;x+=2.2)cr.push([x,WH+.32,H,1.1,.64,1.1]);
 for(let x=4;x<=19;x+=2.2)cr.push([x,WH+.32,H,1.1,.64,1.1]);
 inst(g,G.box,MAT.stone,cr);
 [[-H,-H],[H,-H],[-H,H],[H,H]].forEach(([x,z])=>{put(g,G.cyl,MAT.stone,x,1.9,z,4.4,3.8,4.4);put(g,G.cone,MAT.roof,x,4.6,z,5.4,1.7,5.4);put(g,G.box,MAT.flagBlue,x,3.2,z+2.3,1.1,1.6,.06);W.colliders.push({x,z,r:2.3});});
 put(g,G.box,MAT.stone,-3.6,1.8,H,1.3,3.6,1.5);put(g,G.box,MAT.stone,3.6,1.8,H,1.3,3.6,1.5);put(g,G.box,MAT.stone,0,3.9,H,8.6,.9,1.6);
 put(g,G.box,MAT.darkwood,-2.2,1.5,H+.6,2.6,3,.25,.5);put(g,G.box,MAT.darkwood,2.2,1.5,H+.6,2.6,3,.25,-.5);
 W.colliders.push({x:-3.6,z:H,r:1},{x:3.6,z:H,r:1});
 put(g,G.box,MAT.stone,0,1.7,-12,9,3.4,6.5);W.rects.push({x:0,z:-12,hx:4.5,hz:3.25});
 put(g,G.pyr,MAT.roof,0,4.4,-12,10.5,2.2,8,Math.PI/4);put(g,G.box,MAT.flagBlue,0,3.2,-8.6,1.6,2.2,.06);put(g,G.box,MAT.darkwood,0,1.1,-8.7,1.8,2.2,.2);
 W.features.push({x:0,z:-7,r:3,label:'Донжон — управление крепостью',action:()=>hk.panel('fort')});
 put(g,G.box,MAT.plank,-13,1.2,-4,6.5,2.4,4.5);W.rects.push({x:-13,z:-4,hx:3.25,hz:2.25});put(g,G.pyr,MAT.thatch,-13,3.1,-4,7.6,1.6,5.6,Math.PI/4);
 W.features.push({x:-13,z:-.5,r:2.6,label:'Казармы — отряд наёмников',action:()=>hk.panel('bots')});
 put(g,G.box,MAT.plank,13,1.1,-4,6,2.2,4.5);W.rects.push({x:13,z:-4,hx:3,hz:2.25});put(g,G.pyr,MAT.thatch,13,2.9,-4,7,1.5,5.6,Math.PI/4);
 put(g,G.box,MAT.darkwood,10.5,.5,-.6,2.2,1,1.1);W.colliders.push({x:10.5,z:-.6,r:1.2});
 W.features.push({x:10.5,z:.9,r:2.6,label:'Верстак — крафт',action:()=>hk.panel('craft')});
 put(g,G.box,MAT.plank,-9,.55,9,3.4,1.1,1.6);W.rects.push({x:-9,z:9,hx:1.7,hz:.8});
 [[-10.6,8.2],[-7.4,8.2],[-10.6,9.8],[-7.4,9.8]].forEach(([x,z])=>put(g,G.cyl,MAT.darkwood,x,1.6,z,.16,2.2,.16));
 put(g,G.box,MAT.flagBlue,-9,2.8,9,4,.16,2.4);
 const npc=new THREE.Group();put(npc,G.box,MAT.npc,0,1,0,.7,1.2,.5);put(npc,G.sph,hk.skin,0,1.8,0,.6,.6,.6);npc.position.set(-9,0,7.6);g.add(npc);
 W.features.push({x:-9,z:7.4,r:2.8,label:'Торговец — торговля',action:()=>hk.panel('trade')});
 put(g,G.cyl,MAT.stone,9,.5,9,2.2,1,2.2);put(g,G.cyl,MAT.darkwood,9,1.6,9,.16,2.2,.16);put(g,G.pyr,MAT.thatch,9,2.9,9,2.6,.9,2.6,Math.PI/4);W.colliders.push({x:9,z:9,r:1.2});
 addFire(W,0,3,1);for(let i=0;i<8;i++){const a=i/8*TAU;put(g,G.ico,MAT.rock,Math.cos(a)*1.1,.16,3+Math.sin(a)*1.1,.4,.3,.4);}
 W.colliders.push({x:0,z:3,r:.9});W.features.push({x:0,z:3,r:2.4,label:'Костёр — готовить еду',action:()=>hk.panel('craft')});
 put(g,G.box,MAT.plank,14,.9,13,.5,1.8,.5);put(g,G.box,MAT.darkwood,14,1.5,13,1.6,.2,.2);W.colliders.push({x:14,z:13,r:.7});
 W.features.push({x:14,z:13,r:2.2,label:'Манекен — тренировка',action:()=>hk.toast('ЛКМ — комбо, ПКМ — огнестрел')});
 for(let i=0;i<7;i++){const x=-17+rnd()*6,z=2+rnd()*10;put(g,G.box,MAT.darkwood,x,.4,z,.9,.8,.9,rnd()*TAU);W.colliders.push({x,z,r:.6});}
 for(let i=0;i<5;i++){const x=15+rnd()*3,z=-14+rnd()*6;put(g,G.cyl,MAT.plank,x,.45,z,.8,.9,.8);W.colliders.push({x,z,r:.5});}
 put(g,G.box,MAT.dirt,0,.05,26,7,.06,14,0,false);}
export function buildCamp(W,loc,ld,rnd,hk){
 const g=W.group,C=loc.camp,R=C.r,st=C.style;
 const wm=st==='stone'||st==='ruin'?MAT.darkstone:st==='bone'?MAT.bone:MAT.darkwood;
 const rm=st==='stone'||st==='ruin'?MAT.darkstone:st==='bone'?MAT.bone:MAT.thatch;
 const fm=L({color:new THREE.Color(ld.color),map:TEX.cloth,side:THREE.DoubleSide});
 put(g,G.box,MAT.dirt,0,.04,0,R*2.1,.08,R*2.1,0,false).receiveShadow=true;
 const segs=18;
 for(let i=0;i<segs;i++){if(i===4||i===5)continue;const a=i/segs*TAU,x=Math.cos(a)*R,z=Math.sin(a)*R,len=2*R*Math.tan(Math.PI/segs)*1.14,h=st==='ruin'?1.7:2.2;
  put(g,G.box,wm,x,h/2,z,len,h,.5,-a+Math.PI/2);W.colliders.push({x,z,r:len*.46});
  if(st==='wood'||st==='stilt'||st==='scaffold')put(g,G.cone,wm,x,h+.25,z,.5,.6,.5,-a);}
 [3.55,5.45].forEach(k=>{const a=k/segs*TAU,x=Math.cos(a)*R,z=Math.sin(a)*R;put(g,G.cyl,wm,x,1.6,z,.7,3.2,.7);put(g,G.cone,rm,x,3.5,z,1.1,.9,1.1);W.colliders.push({x,z,r:.7});});
 for(let t=0;t<C.towers;t++){const a=-Math.PI/2+(t+1)/(C.towers+1)*TAU,x=Math.cos(a)*(R-1.5),z=Math.sin(a)*(R-1.5);
  if(st==='stone'||st==='ruin'){put(g,G.cyl,MAT.darkstone,x,2,z,3,4,3);put(g,G.cone,rm,x,4.7,z,3.6,1.4,3.6);}
  else{[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]].forEach(([dx,dz])=>put(g,G.cyl,MAT.darkwood,x+dx,1.5,z+dz,.24,3,.24));put(g,G.box,wm,x,3.1,z,2.4,.25,2.4);put(g,G.pyr,rm,x,4.1,z,3,1.1,3,Math.PI/4);}
  put(g,G.box,fm,x,3.6,z+1.3,.9,1.3,.05);W.colliders.push({x,z,r:1.5});}
 const hw=st==='ruin'?7:6,hd=5,hz=-R*.42;
 put(g,G.box,st==='bone'?MAT.bone:st==='stone'||st==='ruin'?MAT.darkstone:MAT.plank,0,1.5,hz,hw,3,hd);W.rects.push({x:0,z:hz,hx:hw/2,hz:hd/2});
 put(g,G.pyr,rm,0,3.9,hz,hw*1.25,2,hd*1.3,Math.PI/4);put(g,G.box,MAT.darkwood,0,1.1,hz+hd/2+.05,1.6,2.2,.16);
 put(g,G.cyl,MAT.darkwood,0,3.2,hz+hd/2+1.2,.16,6.4,.16);put(g,G.box,fm,.7,5.2,hz+hd/2+1.2,1.5,1.9,.05);
 W.features.push({x:0,z:hz+hd/2+1.6,r:3,label:C.hall+' — логово лидера',action:()=>hk.toast('Разбейте гарнизон, чтобы захватить сектор')});
 for(let i=0;i<C.huts;i++){const a=Math.PI*.15+i/C.huts*Math.PI*1.7,r=R*.55,x=Math.cos(a)*r,z=Math.sin(a)*r;
  if(Math.abs(x)<3.4&&z<0)continue;const lift=st==='stilt'?.9:0;
  if(lift)[[-.6,-.6],[.6,-.6],[-.6,.6],[.6,.6]].forEach(([dx,dz])=>put(g,G.cyl,MAT.darkwood,x+dx,.45,z+dz,.18,.9,.18));
  put(g,G.box,st==='bone'?MAT.bone:MAT.plank,x,1+lift,z,2.4,2,2.2,rnd()*TAU);put(g,G.pyr,rm,x,2.5+lift,z,3.2,1.3,3,Math.PI/4);W.colliders.push({x,z,r:1.4});}
 [[-R*.42,R*.36],[R*.42,R*.36]].forEach(([x,z])=>{addFire(W,x,z,.9);for(let i=0;i<6;i++){const a=i/6*TAU;put(g,G.ico,MAT.rock,x+Math.cos(a)*.85,.14,z+Math.sin(a)*.85,.35,.26,.35);}W.colliders.push({x,z,r:.8});});
 for(let i=0;i<8;i++){const a=rnd()*TAU,r=R*.3+rnd()*R*.5,x=Math.cos(a)*r,z=Math.sin(a)*r;if(Math.abs(x)<3.4&&z<0)continue;
  if(st==='bone'){put(g,G.box,MAT.bone,x,.5,z,.7,1,.25,rnd()*TAU);put(g,G.sph,MAT.bone,x,1.1,z,.4,.4,.4);}
  else if(st==='ruin'){put(g,G.cyl,MAT.darkstone,x,.9,z,.8,1.8,.8);put(g,G.box,MAT.darkstone,x,1.9,z,1.1,.3,1.1,rnd());}
  else if(st==='scaffold'){put(g,G.box,MAT.darkwood,x,.45,z,1.1,.9,.9,rnd()*TAU);put(g,G.cyl,MAT.metal,x,.9,z,.5,.3,.5);}
  else if(st==='stone')put(g,G.box,MAT.darkstone,x,.5,z,1.2,1,1.2,rnd()*TAU);
  else put(g,G.box,MAT.darkwood,x,.4,z,.9,.8,.9,rnd()*TAU);
  W.colliders.push({x,z,r:.6});}
 put(g,G.box,MAT.dirt,0,.05,R+9,6,.06,20,0,false);}
export function buildOutpost(W,x,z,rnd,ld){
 const g=W.group,r=7;W.outposts.push({x,z,r:r+3});
 const fm=L({color:new THREE.Color(ld.color),map:TEX.cloth,side:THREE.DoubleSide});
 put(g,G.box,MAT.dirt,x,.045,z,r*2,.07,r*2,0,false);
 for(let i=0;i<10;i++){if(i===2||i===3)continue;const a=i/10*TAU,px=x+Math.cos(a)*r,pz=z+Math.sin(a)*r,len=2*r*Math.tan(Math.PI/10)*1.18;
  put(g,G.box,MAT.darkwood,px,.9,pz,len,1.8,.4,-a+Math.PI/2);W.colliders.push({x:px,z:pz,r:len*.47});}
 for(let i=0;i<3;i++){const a=rnd()*TAU,rr=rnd()*3.2,px=x+Math.cos(a)*rr,pz=z+Math.sin(a)*rr;
  put(g,G.box,MAT.plank,px,.85,pz,2,1.7,1.8,rnd()*TAU);put(g,G.pyr,MAT.thatch,px,2.1,pz,2.7,1.1,2.5,Math.PI/4);W.colliders.push({x:px,z:pz,r:1.2});}
 addFire(W,x,z,.8);put(g,G.cyl,MAT.darkwood,x+2.5,2.2,z-2.5,.14,4.4,.14);put(g,G.box,fm,x+3.1,3.4,z-2.5,1.1,1.4,.05);}
