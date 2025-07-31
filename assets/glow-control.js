// assets/glow-control.js

document.addEventListener('DOMContentLoaded', function() {
  const glow1 = document.querySelector('.glow-light');
  const glow2 = document.querySelector('.glow-light2');
  // Remove the CSS infinite animation so we can trigger manually
  glow1.style.animation = 'none';
  glow2.style.animation = 'none';

  function animateGlow() {
    glow1.style.animation = 'lightflow 3.5s linear';
    glow2.style.animation = 'lightflow2 7s linear';
    // Remove animation after it's done so it can retrigger
    setTimeout(() => {
      glow1.style.animation = 'none';
      glow2.style.animation = 'none';
    }, 7000); // longest animation duration
  }
  animateGlow(); // Initial
  setInterval(animateGlow, 10000); // 10 seconds gap
});
