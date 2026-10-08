export function buildPastelCafeWorld(THREE,scene){
  const world=new THREE.Group(); world.name="PASTEL_LIVE_CAFE"; scene.add(world);
  const mat=(color,rough=.72,metal=0)=>new THREE.MeshStandardMaterial({color,roughness:rough,metalness:metal});
  const wood=mat(0x5b3b2b), dark=mat(0x17120f), cream=mat(0xd8c4ad), stone=mat(0x81776d), brass=mat(0xb8945a,.38,.65), glass=mat(0x6e8b91,.18,.12);
  const floor=new THREE.Mesh(new THREE.BoxGeometry(15,.18,12),mat(0x30231c)); floor.position.set(0,-1.12,-2.4); world.add(floor);
  const back=new THREE.Mesh(new THREE.BoxGeometry(15,6,.22),mat(0x211713)); back.position.set(0,1.85,-6.1); world.add(back);
  const counter=new THREE.Mesh(new THREE.BoxGeometry(6.6,1.25,1.05),wood); counter.position.set(0,-.28,-4.55); world.add(counter);
  const counterTop=new THREE.Mesh(new THREE.BoxGeometry(6.8,.12,1.15),stone); counterTop.position.set(0,.38,-4.55); world.add(counterTop);
  const menu=new THREE.Mesh(new THREE.BoxGeometry(4.7,1.55,.08),dark); menu.position.set(0,2.35,-5.94); world.add(menu);
  const menuGlow=mat(0xe6c995,.6,0); const title=new THREE.Mesh(new THREE.BoxGeometry(2.6,.06,.03),menuGlow); title.position.set(0,2.65,-5.88); world.add(title);
  for(let i=-2;i<=2;i++){const line=new THREE.Mesh(new THREE.BoxGeometry(1.25,.035,.03),mat(0xc9b79e));line.position.set(i*1.0,2.35+(Math.abs(i)%2)*.18,-5.88);world.add(line)}
  // Large rear windows: the outside stays abstract but bright and spatially believable.
  for(let i=-2;i<=2;i++){const win=new THREE.Mesh(new THREE.BoxGeometry(1.9,2.25,.05),glass);win.position.set(i*2.15,1.65,-5.96);world.add(win);const mull=new THREE.Mesh(new THREE.BoxGeometry(.045,2.25,.07),brass);mull.position.set(i*2.15,1.65,-5.88);world.add(mull)}
  // Tables and chairs.
  const people=[];
  function table(x,z){const g=new THREE.Group();const top=new THREE.Mesh(new THREE.CylinderGeometry(.72,.72,.09,32),stone);top.position.y=-.05;g.add(top);const stem=new THREE.Mesh(new THREE.CylinderGeometry(.07,.1,.9,12),dark);stem.position.y=-.5;g.add(stem);const foot=new THREE.Mesh(new THREE.CylinderGeometry(.42,.42,.06,24),dark);foot.position.y=-.95;g.add(foot);g.position.set(x,-.12,z);world.add(g);for(const a of [0,Math.PI/2,Math.PI,Math.PI*1.5]){const chair=new THREE.Mesh(new THREE.BoxGeometry(.45,.72,.45),wood);chair.position.set(x+Math.cos(a)*1.02,-.55,z+Math.sin(a)*1.02);chair.rotation.y=a;world.add(chair)}}
  table(-3,-2.2);table(3,-2.2);table(-3,-4.05);table(3,-4.05);
  // Warm pendant lamps.
  for(const x of [-4.4,-1.5,1.5,4.4]){const cord=new THREE.Mesh(new THREE.CylinderGeometry(.012,.012,1.15,8),dark);cord.position.set(x,4.25,-3.3);world.add(cord);const lamp=new THREE.Mesh(new THREE.SphereGeometry(.22,16,10),brass);lamp.position.set(x,3.62,-3.3);world.add(lamp);const glow=new THREE.PointLight(0xffd7a1,1.15,5);glow.position.set(x,3.55,-3.3);world.add(glow)}
  // Plants and counter details.
  for(const x of [-6.1,6.1]){const pot=new THREE.Mesh(new THREE.CylinderGeometry(.28,.22,.42,16),wood);pot.position.set(x,-.68,-5.05);world.add(pot);for(let j=0;j<7;j++){const leaf=new THREE.Mesh(new THREE.SphereGeometry(.16,8,6),mat(0x38513c));leaf.scale.set(.55,.18,1.1);leaf.position.set(x+(Math.random()-.5)*.45,-.35+Math.random()*.7,-5.05+(Math.random()-.5)*.3);leaf.rotation.z=Math.random()*Math.PI;world.add(leaf)}}
  function person(x,z,scale=.9,phase=0){const g=new THREE.Group();const skin=mat(0xb88d72),shirt=mat(0x332c28),pants=mat(0x171516);const torso=new THREE.Mesh(new THREE.CapsuleGeometry(.22,.55,5,10),shirt);torso.position.y=.15;g.add(torso);const head=new THREE.Mesh(new THREE.SphereGeometry(.19,12,10),skin);head.position.y=.75;g.add(head);for(const sx of [-.13,.13]){const leg=new THREE.Mesh(new THREE.CapsuleGeometry(.075,.42,4,8),pants);leg.position.set(sx,-.38,0);g.add(leg)}g.position.set(x,-.02,z);g.scale.setScalar(scale);g.userData.phase=phase;g.userData.baseX=x;g.userData.baseZ=z;world.add(g);people.push(g);return g}
  person(-3,-2.15,.86,.2);person(3,-2.15,.9,1.3);person(-3,-4.05,.82,2.4);person(3,-4.05,.88,3.2);person(-1.1,-4.5,.82,4.1);person(1.1,-4.8,.78,5.1);
  // A distant barista behind the counter creates depth without stealing focus from Host.
  person(0,-4.62,1.05,6.4);
  const ambient=new THREE.HemisphereLight(0xffe8cc,0x16100d,1.25); world.add(ambient);
  const rim=new THREE.DirectionalLight(0xf7d5ad,.9);rim.position.set(-4,4,2);world.add(rim);
  return {world,people,clock:()=>{const t=performance.now()*.001;for(const p of people){const ph=p.userData.phase;p.position.x=p.userData.baseX+Math.sin(t*.35+ph)*.035;p.position.z=p.userData.baseZ+Math.cos(t*.28+ph)*.018;p.rotation.y=Math.sin(t*.22+ph)*.035}}};
}
