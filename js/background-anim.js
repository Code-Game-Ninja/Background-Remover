// background-anim.js
// Matrix-style falling code animation for background

const canvas = document.getElementById('bg-anim-canvas');
const ctx = canvas.getContext('2d');

// Characters to use (Matrix style)
const matrixChars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 20;
let columns;
let drops;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
}

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = fontSize + 'px monospace';
  ctx.fillStyle = '#00ff99';
  for (let i = 0; i < columns; i++) {
    const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);
    if (Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
    if (drops[i] * fontSize > canvas.height) {
      drops[i] = 0;
    }
  }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
setInterval(drawMatrix, 50); 