const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Chargement d'un sprite de test (Nadia)
const nadia = new Image();
nadia.src = 'sprites/nadia.png';

// Boucle de jeu (simplifiée)
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillText("Bienvenue dans Nadia RPG !", 200, 50);
  ctx.drawImage(nadia, 100, 100, 64, 64);
  requestAnimationFrame(gameLoop);
}

nadia.onload = () => {
  gameLoop();
};
