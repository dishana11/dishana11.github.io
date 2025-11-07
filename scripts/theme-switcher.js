const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check saved color on page load
const savedColor = localStorage.getItem('bg-color');
if (savedColor) {
    body.style.background = savedColor;
    toggleButton.textContent = savedColor === 'red' ? '🌙' : '☀️';
}

toggleButton.addEventListener('click', () => {
    const current = window.getComputedStyle(body).backgroundColor;
    
    // Convert RGB to color name (simple check)
    let newColor;
    if (current === 'rgb(255, 0, 0)') { // red
        newColor = 'black';
    } else {
        newColor = 'red';
    }

    body.style.background = newColor;
    toggleButton.textContent = newColor === 'red' ? '🌙' : '☀️';
    localStorage.setItem('bg-color', newColor);
});
