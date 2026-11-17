import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useLocation } from 'react-router-dom';

const ThreeBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    // Check if on home page (supports root and repository subpaths like GitHub Pages)
    const normalizedPath = location.pathname.toLowerCase().replace(/\/+$/, '');
    const isHomePage = normalizedPath === '' || normalizedPath === '/ranbidge-solutions-pvt-ltd';

    useEffect(() => {
        if (!mountRef.current) return;

        // --- SCENE SETUP ---
        const scene = new THREE.Scene();
        scene.background = null;

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 20;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        renderer.domElement.style.zIndex = '1';
        renderer.domElement.style.pointerEvents = 'none';

        mountRef.current.appendChild(renderer.domElement);

        // --- OBJECTS ---
        // === VOLUMETRIC ANIMATED PARTICLES FOR ALL PAGES ===
        const particlesGeometry = new THREE.BufferGeometry();
        const count = 1500;
        const posArray = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 60;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const material = new THREE.PointsMaterial({
            size: 0.12,
            color: '#3b82f6', // Bright Blue
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, material);
        scene.add(particlesMesh);

        // --- INTERACTION ---
        const mouse = { x: 0, y: 0 };
        const onMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', onMouseMove);

        // --- ANIMATION ---
        let animationFrameId: number;
        const clock = new THREE.Clock();
        const animate = () => {
            const time = clock.getElapsedTime();

            if (particlesMesh) {
                particlesMesh.rotation.y = time * 0.05;
                particlesMesh.rotation.x = time * 0.02;
            }

            // Camera Parallax
            camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
            camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // --- RESIZE ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // --- CLEANUP ---
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
            if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }

            if (particlesMesh) {
                particlesGeometry.dispose();
                material.dispose();
            }
            renderer.dispose();
        };
    }, []);

    // --- SCROLL BLUR LOGIC (HOME PAGE ONLY) ---
    useEffect(() => {
        if (!isHomePage) {
            if (mountRef.current) mountRef.current.style.filter = 'none';
            return;
        }

        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                if (mountRef.current) {
                    mountRef.current.style.filter = 'blur(8px) brightness(0.65)';
                }
            } else {
                if (mountRef.current) {
                    mountRef.current.style.filter = 'none';
                }
            }
        };

        if (mountRef.current) mountRef.current.style.filter = 'none';

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    return (
        <div
            ref={mountRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none transition-all duration-1000 ease-in-out bg-white"
        >
            {isHomePage && (
                <div
                    className="absolute inset-0 opacity-80 pointer-events-none bg-cover bg-center z-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')`
                    }}
                />
            )}
        </div>
    );
};

export default ThreeBackground;
