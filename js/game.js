import * as THREE from 'three';

// ========== СЦЕНА ==========
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);

// ========== ИЗОМЕТРИЧЕСКАЯ КАМЕРА ==========
const aspect = window.innerWidth / window.innerHeight;
const frustumSize = 10;
const camera = new THREE.OrthographicCamera(
    frustumSize * aspect / -2,
    frustumSize * aspect / 2,
    frustumSize / 2,
    frustumSize / -2,
    1,
    1000
);

camera.position.set(20, 20, 20);
camera.lookAt(0, 0, 0);

// ========== РЕНДЕРЕР ==========
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// ========== ОСВЕЩЕНИЕ ==========
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(10, 20, 10);
dirLight.castShadow = true;
scene.add(dirLight);

// ========== ЗЕМЛЯ ==========
const groundGeometry = new THREE.PlaneGeometry(50, 50);
const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x90EE90 });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const gridHelper = new THREE.GridHelper(50, 50, 0x000000, 0x000000);
gridHelper.material.opacity = 0.2;
gridHelper.material.transparent = true;
scene.add(gridHelper);

// ========== ПЕРСОНАЖ (из примитивов) ==========
const player = {
    mesh: null,
    x: 0,
    z: 0,
    speed: 0.05,
    sprintSpeed: 0.1,
    isSprinting: false
};

function createPlayer() {
    const group = new THREE.Group();
    
    // Тело (зеленая куртка)
    const bodyGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.5);
    const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x2d5016 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 1.2;
    body.castShadow = true;
    group.add(body);
    
    // Голова (черный шлем)
    const headGeometry = new THREE.SphereGeometry(0.4, 16, 16);
    const headMaterial = new THREE.MeshLambertMaterial({ color: 0x1a1a1a });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 2.1;
    head.castShadow = true;
    group.add(head);
    
    // Красные глаза
    const eyeGeometry = new THREE.SphereGeometry(0.08, 8, 8);
    const eyeMaterial = new THREE.MeshLambertMaterial({ color: 0xff3300, emissive: 0xff0000 });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.15, 2.15, 0.35);
    group.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.15, 2.15, 0.35);
    group.add(rightEye);
    
    // Руки (будут анимироваться)
    const armGeometry = new THREE.BoxGeometry(0.25, 0.9, 0.25);
    const armMaterial = new THREE.MeshLambertMaterial({ color: 0x2d5016 });
    
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.55, 1.3, 0);
    leftArm.castShadow = true;
    group.add(leftArm);
    
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.55, 1.3, 0);
    rightArm.castShadow = true;
    group.add(rightArm);
    
    // Ноги (будут анимироваться)
    const legGeometry = new THREE.BoxGeometry(0.3, 0.8, 0.3);
    const legMaterial = new THREE.MeshLambertMaterial({ color: 0x3d2817 });
    
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.2, 0.4, 0);
    leftLeg.castShadow = true;
    group.add(leftLeg);
    
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.2, 0.4, 0);
    rightLeg.castShadow = true;
    group.add(rightLeg);
    
    // Сохраняем ссылки на конечности для анимации
    group.userData = { leftArm, rightArm, leftLeg, rightLeg };
    
    return group;
}
// ========== УПРАВЛЕНИЕ ==========
const keys = {};

window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        player.isSprinting = true;
    }
});

window.addEventListener('keyup', (e) => {
    keys[e.code] = false;
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        player.isSprinting = false;
    }
});

// ========== ОБНОВЛЕНИЕ ==========
function updatePlayer() {
    const currentSpeed = player.isSprinting ? player.sprintSpeed : player.speed;
    let moveX = 0;
    let moveZ = 0;
    
    if (keys['ArrowLeft'] || keys['KeyA']) moveX -= 1;
    if (keys['ArrowRight'] || keys['KeyD']) moveX += 1;
    if (keys['ArrowUp'] || keys['KeyW']) moveZ -= 1;
    if (keys['ArrowDown'] || keys['KeyS']) moveZ += 1;
    
    if (moveX !== 0 && moveZ !== 0) {
        moveX *= 0.7071;
        moveZ *= 0.7071;
    }
    // Анимация ходьбы
if (moveX !== 0 || moveZ !== 0) {
    const time = Date.now() * 0.008;
    const swing = Math.sin(time) * 0.5;
    
    const parts = player.mesh.userData;
    parts.leftLeg.rotation.x = swing;
    parts.rightLeg.rotation.x = -swing;
    parts.leftArm.rotation.x = -swing;
    parts.rightArm.rotation.x = swing;
} else {
    // Возврат в исходное положение
    const parts = player.mesh.userData;
    parts.leftLeg.rotation.x = 0;
    parts.rightLeg.rotation.x = 0;
    parts.leftArm.rotation.x = 0;
    parts.rightArm.rotation.x = 0;
}
    player.x += moveX * currentSpeed;
    player.z += moveZ * currentSpeed;
    
    player.mesh.position.x = player.x;
    player.mesh.position.z = player.z;
    
    if (moveX !== 0 || moveZ !== 0) {
        const angle = Math.atan2(moveX, moveZ);
        player.mesh.rotation.y = angle;
    }
    
    const limit = 20;
    if (player.x < -limit) player.x = -limit;
    if (player.x > limit) player.x = limit;
    if (player.z < -limit) player.z = -limit;
    if (player.z > limit) player.z = limit;
}

function updateCamera() {
    camera.position.x = player.x + 20;
    camera.position.z = player.z + 20;
    camera.lookAt(player.x, 0, player.z);
}

// ========== ЦИКЛ ==========
function animate() {
    requestAnimationFrame(animate);
    updatePlayer();
    updateCamera();
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    const aspect = window.innerWidth / window.innerHeight;
    camera.left = frustumSize * aspect / -2;
    camera.right = frustumSize * aspect / 2;
    camera.top = frustumSize / 2;
    camera.bottom = frustumSize / -2;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
