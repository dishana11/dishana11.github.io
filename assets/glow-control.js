document.addEventListener('DOMContentLoaded', function () {
  const glow1 = document.querySelector('.glow-light');
  const glow2 = document.querySelector('.glow-light2');

  // Clear any ongoing animation
  glow1.style.animation = 'none';
  glow2.style.animation = 'none';

  function animateGlow() {
    // Reset animation by forcing reflow
    glow1.style.animation = 'none';
    glow1.offsetWidth; // Trigger reflow
    glow1.style.animation = 'lightflow 3s linear';

    glow2.style.animation = 'none';
    glow2.offsetWidth;
    glow2.style.animation = 'lightflow2 5s linear';

    // Stop after it's done so it doesn't loop endlessly
    setTimeout(() => {
      glow1.style.animation = 'none';
      glow2.style.animation = 'none';
    }, 5000); // longest animation duration
  }

  animateGlow(); // Run initially once

  setInterval(animateGlow, 12000); // Trigger every 12s
});
