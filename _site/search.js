document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const blogPosts = document.querySelectorAll('.blog-post-link');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        blogPosts.forEach(post => {
            const title = post.querySelector('h3').textContent.toLowerCase();
            const isVisible = title.includes(searchTerm);
            post.style.display = isVisible ? 'block' : 'none';
        });
    });
});
