// mythology.js

// Snow effect
const canvas = document.getElementById("snow-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let snowflakes = [];
const flakesCount = 150;

function createSnowflakes() {
  for (let i = 0; i < flakesCount; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      speedY: Math.random() * 2 + 1,
      speedX: Math.random() * 0.5 - 0.25,
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let flake of snowflakes) {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
  }
  ctx.fill();
  updateSnowflakes();
}

function updateSnowflakes() {
  for (let flake of snowflakes) {
    flake.y += flake.speedY;
    flake.x += flake.speedX;
    if (flake.y > canvas.height) {
      flake.y = 0;
      flake.x = Math.random() * canvas.width;
    }
  }
}

function animateSnow() {
  drawSnowflakes();
  requestAnimationFrame(animateSnow);
}

createSnowflakes();
animateSnow();
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Hero video cycling
const videos = [document.getElementById("video1"), document.getElementById("video2")];
let current = 0;

function playNextVideo() {
  videos[current].style.opacity = 1;
  videos[current].currentTime = 0;
  videos[current].play();

  videos[current].onended = () => {
    videos[current].style.opacity = 0;
    current = (current + 1) % videos.length;
    if (current === 0) {
      document.getElementById("bg-image").style.opacity = 1;
      setTimeout(playNextVideo, 2000);
    } else {
      playNextVideo();
    }
  };
}
playNextVideo();
