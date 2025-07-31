// glow-control.js
// This script triggers the glow animation ONCE every 10 seconds for your homepage overlay effect

document.addEventListener('DOMContentLoaded', function() {
  const glow1 = document.querySelector('.glow-light');
  const glow2 = document.querySelector('.glow-light2');
  // Ensure animation is cleared initially
  glow1.style.animation = 'none';
  glow2.style.animation = 'none';

  function animateGlowOnce() {
    glow1.style.animation = 'lightflow 3.5s linear';
    glow2.style.animation = 'lightflow2 7s linear';
    // Remove animation after finished so it doesn't repeat
    setTimeout(() => {
      glow1.style.animation = 'none';
      glow2.style.animation = 'none';
    }, 7000); // longest animation duration
  }

  animateGlowOnce(); // Initial show
  setInterval(animateGlowOnce, 10000); // Every 10 seconds ONLY
});
