// Mouse Shadow Effect
const shadowCanvas = document.querySelector('.mouse-shadow');
const shadowCtx = shadowCanvas.getContext('2d');
shadowCanvas.width = window.innerWidth;
shadowCanvas.height = window.innerHeight;
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    shadowCanvas.style.opacity = '0.3';
    drawShadow();
});

document.addEventListener('mouseleave', () => {
    shadowCanvas.style.opacity = '0';
});

function drawShadow() {
    shadowCtx.clearRect(0, 0, shadowCanvas.width, shadowCanvas.height);
    const gradient = shadowCtx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 200);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.5)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    shadowCtx.fillStyle = gradient;
    shadowCtx.fillRect(0, 0, shadowCanvas.width, shadowCanvas.height);
}

window.addEventListener('resize', () => {
    shadowCanvas.width = window.innerWidth;
    shadowCanvas.height = window.innerHeight;
});

// Fade-in Animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.course-card, .hero-content').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 + index * 100);
    });
});
