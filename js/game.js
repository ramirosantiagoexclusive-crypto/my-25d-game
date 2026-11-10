const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

// ========== ИГРОК (2.5D) ==========
const player = {
    x: 400,
    y: 300,
    width: 80,
    height: 130,
    speed: 3,
    sprintSpeed: 5,
    isSprinting: false,
    direction: 'down', // down, up, left, right
    isMoving: false
};

// Создаем аниматор
const animator = new SpriteAnimator(SPRITE_SHEET, SPRITE_SHEET.frameWidth, SPRITE_SHEET.frameHeight);

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

// ========== ОБНОВЛЕНИЕ ИГРОКА ==========
function updatePlayer() {
    const currentSpeed = player.isSprinting ? player.sprintSpeed : player.speed;
    let moveX = 0;
    let moveY = 0;
    
    // Движение во всех направлениях
    if (keys['ArrowLeft'] || keys['KeyA']) moveX -= 1;
    if (keys['ArrowRight'] || keys['KeyD']) moveX += 1;
    if (keys['ArrowUp'] || keys['KeyW']) moveY -= 1;
    if (keys['ArrowDown'] || keys['KeyS']) moveY += 1;
    
    // Нормализация диагонального движения
    if (moveX !== 0 && moveY !== 0) {
        moveX *= 0.7071;
        moveY *= 0.7071;
    }
    
    // Применяем движение
    player.x += moveX * currentSpeed;
    player.y += moveY * currentSpeed;
    
    // Определяем направление
    player.isMoving = (moveX !== 0 || moveY !== 0);
    
    if (player.isMoving) {
        if (Math.abs(moveX) > Math.abs(moveY)) {
            player.direction = moveX > 0 ? 'right' : 'left';
        } else {
            player.direction = moveY > 0 ? 'down' : 'up';
        }
    }
    
    // Границы экрана
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
    
    // Обновляем анимацию только при движении
    if (player.isMoving) {
        animator.update();
    }
}

// ========== ОТРИСОВКА ==========
function draw() {
    // Очищаем canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Рисуем фон (изометрическая сетка для эффекта 2.5D)
    drawIsometricGrid();
    
    // Рисуем тень под персонажем
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.beginPath();
    ctx.ellipse(
        player.x + player.width / 2,
        player.y + player.height - 10,
        player.width / 2,
        15,
        0, 0, Math.PI * 2
    );
    ctx.fill();
    
    // Рисуем персонажа
    animator.draw(ctx, player.x, player.y, player.width, player.height);
    
    // UI
    ctx.fillStyle = '#333';
    ctx.font = '16px Arial';
    ctx.fillText('WASD/Стрелки - движение | Shift - спринт', 10, 25);
    ctx.fillText(`Направление: ${player.direction}`, 10, 50);
}

// Рисуем изометрическую сетку для эффекта 2.5D
function drawIsometricGrid() {
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;
    
    const gridSize = 50;
    
    // Горизонтальные линии
    for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
    
    // Вертикальные линии
    for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
}

// ========== ИГРОВОЙ ЦИКЛ ==========
function gameLoop() {
    updatePlayer();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();