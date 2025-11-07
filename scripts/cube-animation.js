try {
    // Ensure THREE is defined
    if (!window.THREE) {
        console.error('Three.js is not loaded. Please ensure the Three.js script is included.');
        throw new Error('Three.js not found');
    }

    // Course data for cubes
    const courses = [
        { title: 'R Programming Language', keywords: ['Data', 'Stats'] },
        { title: 'CUDA', keywords: ['GPU', 'Parallel'] },
        { title: 'Computer Vision', keywords: ['Vision', 'AI'] },
        { title: 'Neural Networks', keywords: ['Deep', 'Learning'] },
        { title: 'Fortran', keywords: ['Legacy', 'Code'] },
        { title: 'Binary Trees', keywords: ['Algorithms', 'Structures'] },
        { title: 'Deep Learning', keywords: ['AI', 'Advanced'] }
    ];

    // Function to create canvas texture for cube faces
    function createTexture(text, secondaryText, isSide = false) {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            console.error('Failed to get 2D context for canvas');
            return null;
        }
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--card-bg');
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
        ctx.font = isSide ? '16px Montserrat' : '20px Montserrat';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        if (isSide) {
            ctx.fillText(secondaryText, canvas.width / 2, canvas.height / 2);
        } else {
            ctx.fillText(text, canvas.width / 2, canvas.height / 2 - 20);
            ctx.font = '14px Montserrat';
            ctx.fillText('Coming soon', canvas.width / 2, canvas.height / 2 + 20);
        }
        return new THREE.CanvasTexture(canvas);
    }

    // Initialize cubes for each course card
    document.querySelectorAll('.course-card').forEach((card, index) => {
        const canvas = card.querySelector('.course-canvas');
        if (!canvas) {
            console.error(`Canvas not found for course card ${index}`);
            return;
        }
        const title = canvas.dataset.title;
        const keywords = canvas.dataset.keywords ? canvas.dataset.keywords.split(',') : ['Tech', 'Tech'];
        
        // Set up Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        camera.position.z = 2;

        // Create cube geometry
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const materials = [
            new THREE.MeshStandardMaterial({ map: createTexture(title, keywords[0], true), transparent: true, opacity: 0.8 }), // Right
            new THREE.MeshStandardMaterial({ map: createTexture(title, keywords[1] || keywords[0], true), transparent: true, opacity: 0.8 }), // Left
            new THREE.MeshStandardMaterial({ map: createTexture(title, 'Tech', true), transparent: true, opacity: 0.8 }), // Top
            new THREE.MeshStandardMaterial({ map: createTexture(title, 'Tech', true), transparent: true, opacity: 0.8 }), // Bottom
            new THREE.MeshStandardMaterial({ map: createTexture(title, 'Coming soon'), transparent: true, opacity: 0.8 }), // Front
            new THREE.MeshStandardMaterial({ map: createTexture('Coming soon', 'Learn Now', true), transparent: true, opacity: 0.8 }) // Back
        ];

        // Check if textures loaded correctly
        if (materials.some(mat => !mat.map)) {
            console.error(`Texture creation failed for course: ${title}`);
            return;
        }

        const cube = new THREE.Mesh(geometry, materials);
        scene.add(cube);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(2, 2, 2);
        scene.add(pointLight);

        let isHovered = false;
        let mouse = { x: 0, y: 0 };

        // Animation loop
        function animateCube() {
            try {
                if (!isHovered) {
                    cube.rotation.x += 0.01;
                    cube.rotation.y += 0.01;
                    // Simulate vertex jiggle using a simple sine wave on scale
                    cube.scale.set(
                        1 + Math.sin(Date.now() * 0.001) * 0.02,
                        1 + Math.sin(Date.now() * 0.001 + 1) * 0.02,
                        1 + Math.sin(Date.now() * 0.001 + 2) * 0.02
                    );
                }
                renderer.render(scene, camera);
                requestAnimationFrame(animateCube);
            } catch (error) {
                console.error(`Animation error for course ${title}:`, error);
            }
        }
        animateCube();

        // Hover interactions
        card.addEventListener('mouseenter', () => {
            isHovered = true;
            pointLight.intensity = 2;
            cube.scale.set(1.3, 1.3, 1.3);
        });
        card.addEventListener('mouseleave', () => {
            isHovered = false;
            pointLight.intensity = 1;
            cube.scale.set(1, 1, 1);
            cube.rotation.x = 0;
            cube.rotation.y = 0;
        });
        card.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
            cube.rotation.y = mouse.x * 0.5;
            cube.rotation.x = mouse.y * 0.5;
        });

        // Resize handling
        window.addEventListener('resize', () => {
            try {
                renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
                camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
                camera.updateProjectionMatrix();
            } catch (error) {
                console.error(`Resize error for course ${title}:`, error);
            }
        });
    });
} catch (error) {
    console.error('Cube animation initialization error:', error);
}
