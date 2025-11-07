try {
    if (!window.THREE) {
        console.error('Three.js is not loaded. Please ensure the Three.js script is included.');
        throw new Error('Three.js not found');
    }

    const backgroundCanvas = document.getElementById('background-canvas');
    if (!backgroundCanvas) {
        console.error('Background canvas not found');
        throw new Error('Background canvas not found');
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: backgroundCanvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 1;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
        uniforms: {
            u_time: { value: 0 },
            u_mouse: { value: new THREE.Vector2(0, 0) },
            u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            u_color1: { value: new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--particle-color1')) },
            u_color2: { value: new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--particle-color2')) }
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float u_time;
            uniform vec2 u_mouse;
            uniform vec2 u_resolution;
            uniform vec3 u_color1;
            uniform vec3 u_color2;
            varying vec2 vUv;
            float noise(vec2 p) {
                return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
            }
            void main() {
                vec2 uv = vUv;
                vec2 mouse = u_mouse / u_resolution;
                float dist = length(uv - mouse);
                float ripple = sin(dist * 10.0 - u_time * 2.0) * 0.1;
                float n = noise(uv * 3.0 + u_time * 0.2);
                vec3 color = mix(u_color1, u_color2, n + ripple);
                gl_FragColor = vec4(color, 0.6);
            }
        `,
        transparent: true
    });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    function animateBackground() {
        try {
            material.uniforms.u_time.value += 0.05;
            renderer.render(scene, camera);
            requestAnimationFrame(animateBackground);
        } catch (error) {
            console.error('Background animation error:', error);
        }
    }
    animateBackground();

    document.addEventListener('mousemove', (e) => {
        material.uniforms.u_mouse.value.set(e.clientX, e.clientY);
    });

    window.addEventListener('resize', () => {
        try {
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        } catch (error) {
            console.error('Background resize error:', error);
        }
    });
} catch (error) {
    console.error('Background initialization error:', error);
}
