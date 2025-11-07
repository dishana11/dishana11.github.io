// Search functionality
const searchToggle = document.getElementById('search-toggle');
const searchContainer = document.getElementById('search-container');
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-bar');
const themeToggle = document.getElementById('theme-toggle');

searchToggle.addEventListener('click', () => {
    // Toggle display between 'flex' and 'none'
    searchContainer.style.display = searchContainer.style.display === 'none' || searchContainer.style.display === '' ? 'flex' : 'none';
    if(searchContainer.style.display === 'flex') {
        searchInput.focus();
    }
});

function performSearch(query) {
    // Replace the alert with your actual search logic, e.g., redirecting the user
    console.log(`Searching for: ${query}`);
    // Example redirection (as in original code):
    // window.location.href = `/search.html?q=${encodeURIComponent(query)}`; 
}

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if(query) performSearch(query);
});

searchInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        const query = searchInput.value.trim();
        if(query) performSearch(query);
    }
});


// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

mobileToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    mobileToggle.textContent = navbarMenu.classList.contains('active') ? '✕' : '☰';
    
    // Close search container when mobile menu opens
    if(navbarMenu.classList.contains('active')) {
        searchContainer.style.display = 'none';
    }
});

// Theme toggle (basic implementation)
themeToggle.addEventListener('click', () => {
    // Add your theme toggle logic here (e.g., toggling a 'dark-mode' class on the body)
    console.log('Theme toggle clicked');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideNavbar = event.target.closest('.navbar');
    if (!isClickInsideNavbar && navbarMenu.classList.contains('active')) {
        navbarMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
    }
});
