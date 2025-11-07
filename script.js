document.addEventListener('DOMContentLoaded', () => {

    // --- THEME TOGGLE --- //
    // Select all theme toggle buttons on the page
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const html = document.documentElement;

    // Function to update the visibility of icons within a specific toggle button
    const updateIcons = (theme) => {
        themeToggles.forEach(toggle => {
            const moonIcon = toggle.querySelector('.moon-icon');
            const sunIcon = toggle.querySelector('.sun-icon');
            if (moonIcon && sunIcon) {
                if (theme === 'dark') {
                    moonIcon.classList.add('hidden');
                    sunIcon.classList.remove('hidden');
                } else {
                    moonIcon.classList.remove('hidden');
                    sunIcon.classList.add('hidden');
                }
            }
        });
    };

    // Function to apply the theme to the HTML element and update icons
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        updateIcons(theme);
    };

    // Check for saved theme in localStorage and apply it
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);

    // Add click event listener to all theme toggle buttons
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentTheme = html.classList.contains('dark') ? 'light' : 'dark';
            applyTheme(currentTheme);
            localStorage.setItem('theme', currentTheme);
        });
    });


    // --- EXPERIENCE SECTION TOGGLE --- //
    window.toggleDetails = function(id) {
        const element = document.getElementById(id);
        if (element) {
            element.classList.toggle('hidden');
        }
    };
});
