document.addEventListener('DOMContentLoaded', function () {
  const glow1 = document.querySelector('.glow-light');
  const glow2 = document.querySelector('.glow-light2');

  // Start with glow hidden
  glow1.style.opacity = '0';
  glow2.style.opacity = '0';

  function animateGlow() {
    // Show the glows and start animation
    glow1.style.opacity = '0.65';
    glow2.style.opacity = '0.35';

    // Reset animation by forcing reflow
    glow1.style.animation = 'none';
    glow1.offsetWidth; // Trigger reflow
    glow1.style.animation = 'lightflow 4s linear';

    glow2.style.animation = 'none';
    glow2.offsetWidth;
    glow2.style.animation = 'lightflow2 4s linear';

    // Hide the glows after animation finishes so nothing is visible for the next interval
    setTimeout(() => {
      glow1.style.animation = 'none';
      glow2.style.animation = 'none';

      glow1.style.opacity = '0';
      glow2.style.opacity = '0';
    }, 7000); // longest animation duration (7s for glow2)
  }

  animateGlow(); // Run initially once

  setInterval(animateGlow, 20000); // Trigger every 20s
});
