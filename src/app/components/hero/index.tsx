'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import * as THREE from 'three';

interface HeroSectionProps {
    companyName?: string;
    tagline?: string;
    description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    companyName = "TechFlow",
    tagline = "Build. Scale. Innovate.",
    description = "Empowering startups with AI-driven development tools and intelligent automation to transform ideas into scalable products 10x faster."
}) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const frameRef = useRef<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Animation trigger on mount
    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // 🎛️ CUSTOMIZATION PARAMETERS - Adjust these values:
        const particleCount = 9200;    // 🔢 Particle amount (800 → 1200 for more density)
        const tubeRadius = 0.89;       // 📏 Tube thickness (0.15 → 0.25 for thicker tube)
        const infinityScale = 8;       // 📐 Overall size (4 → 6 for much bigger)
        const particleColor = 0xffffff; // 🎨 Particle color (0xffffff = pure white)

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        renderer.setClearColor(0x000000, 0);
        rendererRef.current = renderer;
        mountRef.current.appendChild(renderer.domElement);

        // Camera setup
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        const aspect = width / height;
        const fov = 60;
        const near = 0.1;
        const far = 100;
        const dynamicCameraDistance = infinityScale * 2.5;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = dynamicCameraDistance;
        camera.lookAt(0, 0, 0);

        // Create 3D tube-like infinity sign with particles
        const infinityParticles: THREE.Mesh[] = [];

        // Infinity curve parameters
        const getInfinityPosition = (t: number, tubeOffset: number = 0, radialOffset: number = 0) => {
            const scale = infinityScale;
            const x = scale * Math.cos(t) / (1 + Math.sin(t) * Math.sin(t));
            const y = scale * Math.sin(t) * Math.cos(t) / (1 + Math.sin(t) * Math.sin(t));

            // Calculate tangent for tube orientation
            const dt = 0.01;
            const x1 = scale * Math.cos(t + dt) / (1 + Math.sin(t + dt) * Math.sin(t + dt));
            const y1 = scale * Math.sin(t + dt) * Math.cos(t + dt) / (1 + Math.sin(t + dt) * Math.sin(t + dt));

            const tangentX = x1 - x;
            const tangentY = y1 - y;
            const tangentLength = Math.sqrt(tangentX * tangentX + tangentY * tangentY);

            // Normal vectors for tube
            const normalX = -tangentY / tangentLength;
            const normalY = tangentX / tangentLength;

            // Add tube radius offset
            const tubeX = tubeOffset * Math.cos(radialOffset) * normalX;
            const tubeY = tubeOffset * Math.cos(radialOffset) * normalY;
            const tubeZ = tubeOffset * Math.sin(radialOffset);

            return {
                x: x + tubeX,
                y: y + tubeY,
                z: tubeZ
            };
        };

        // Create particles distributed in tube formation
        for (let i = 0; i < particleCount; i++) {
            const particleGeometry = new THREE.SphereGeometry(0.015, 6, 6);
            const particleMaterial = new THREE.MeshBasicMaterial({
                color: particleColor, // 🎨 Uses the white color variable
                transparent: true,
                opacity: 0.8 + Math.random() * 0.2 // Slight opacity variation
            });

            const particle = new THREE.Mesh(particleGeometry, particleMaterial);

            // Distribute particles along the infinity curve and within the tube
            const progressAlongCurve = (i / particleCount) * Math.PI * 4;
            const tubeRadialPosition = Math.random() * tubeRadius;
            const radialAngle = Math.random() * Math.PI * 2;

            const pos = getInfinityPosition(progressAlongCurve, tubeRadialPosition, radialAngle);
            particle.position.set(pos.x, pos.y, pos.z);

            // Store animation parameters
            (particle as any).t = progressAlongCurve;
            (particle as any).speed = 0.5 + Math.random() * 0.7;
            (particle as any).tubeRadius = tubeRadialPosition;
            (particle as any).radialAngle = radialAngle;
            (particle as any).radialSpeed = (Math.random() - 0.5) * 0.02;

            scene.add(particle);
            infinityParticles.push(particle);
        }

        // Animation loop
        const animate = () => {
            frameRef.current = requestAnimationFrame(animate);

            // Animate infinity particles in 3D tube
            infinityParticles.forEach((particle, index) => {
                const speed = (particle as any).speed;
                (particle as any).t += 0.008 * speed;
                (particle as any).radialAngle += (particle as any).radialSpeed;

                const t = (particle as any).t;
                const tubeRad = (particle as any).tubeRadius;
                const radialAngle = (particle as any).radialAngle;

                const pos = getInfinityPosition(t, tubeRad, radialAngle);

                particle.position.x = pos.x;
                particle.position.y = pos.y;
                particle.position.z = pos.z;

                // Subtle pulsing effect
                const scale = 0.8 + Math.sin(Date.now() * 0.002 + index * 0.05) * 0.3;
                particle.scale.setScalar(scale);

                // Keep particles white - remove color shifting
                // const hue = (0.7 + Math.sin(t * 0.5 + Date.now() * 0.0005) * 0.1) % 1;
                // const saturation = 0.8 + Math.sin(Date.now() * 0.001 + index * 0.1) * 0.2;
                // const lightness = 0.5 + Math.sin(Date.now() * 0.002 + t) * 0.2;
                // (particle.material as THREE.MeshBasicMaterial).color.setHSL(hue, saturation, lightness);
            });

            // Gentle camera movement with bounds awareness
            const cameraMovementScale = Math.max(0.3, infinityScale * 0.1); // Scale movement with infinity size
            camera.position.x = Math.sin(Date.now() * 0.0002) * cameraMovementScale;
            camera.position.y = Math.cos(Date.now() * 0.0003) * (cameraMovementScale * 0.6);
            camera.position.z = dynamicCameraDistance + Math.sin(Date.now() * 0.0001) * (cameraMovementScale * 0.3);
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        };

        animate();

        // Handle resize with dynamic camera adjustment
        const handleResize = () => {
            if (!mountRef.current || !rendererRef.current) return;

            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            rendererRef.current.setSize(width, height);

            // Adjust camera distance based on aspect ratio to prevent clipping
            const aspectRatio = width / height;
            const aspectAdjustment = aspectRatio < 1 ? (1 / aspectRatio) * 0.5 : 0;
            camera.position.z = dynamicCameraDistance + aspectAdjustment;
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && rendererRef.current) {
                mountRef.current.removeChild(rendererRef.current.domElement);
            }
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
        };
    }, []);

    return (
        <section className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div
                    className={`absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}
                ></div>
                <div
                    className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-800/8 rounded-full blur-3xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}
                ></div>
            </div>

            {/* Navigation */}
            <nav className="relative z-10 px-6 pt-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div
                        className={`flex items-center space-x-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                            }`}
                    >
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl flex items-center justify-center animate-pulse">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
                            {companyName}
                        </span>
                    </div>

                    <div
                        className={`hidden md:flex items-center space-x-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                            }`}
                    >
                        {['About', 'Team', 'Mission', 'Contact'].map((item, index) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105"
                                style={{
                                    animation: isVisible ? `slideInFromTop 0.6s ease-out ${0.1 * index + 0.5}s both` : 'none'
                                }}
                            >
                                {item}
                            </a>
                        ))}
                        <button
                            className="bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 animate-pulse"
                            style={{
                                animation: isVisible ? 'slideInFromTop 0.6s ease-out 0.8s both, pulse 2s infinite 1s' : 'none'
                            }}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="relative z-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 items-center min-h-[70vh]">

                        {/* Left Column - Content */}
                        <div className="space-y-8">
                            <div
                                className={`inline-flex items-center space-x-2 bg-purple-600/15 border border-purple-500/30 rounded-full px-4 py-2 text-sm backdrop-blur-sm transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                                    }`}
                            >
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                <span className="text-purple-200 font-medium">Next-Generation Startup Platform</span>
                            </div>

                            <div className="space-y-6">
                                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                                    {tagline.split('.').map((part, index) => (
                                        <div
                                            key={index}
                                            className={`block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                                }`}
                                            style={{
                                                transitionDelay: `${0.4 + index * 0.2}s`,
                                                animation: isVisible ? `slideInFromBottom 0.8s ease-out ${0.4 + index * 0.2}s both` : 'none'
                                            }}
                                        >
                                            {index === 1 ? (
                                                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                                                    {part}.
                                                </span>
                                            ) : (
                                                <span className="text-white">{part}{index < 2 ? '.' : ''}</span>
                                            )}
                                        </div>
                                    ))}
                                </h1>

                                <p
                                    className={`text-xl text-gray-100 max-w-lg leading-relaxed transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                        }`}
                                >
                                    {description}
                                </p>
                            </div>

                            <div
                                className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                            >
                                <button className="group bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3">
                                    <span>Start Your Journey</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>

                                <button className="group backdrop-blur-sm bg-white/5 border border-white/10 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-3">
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                    <span>Watch Demo</span>
                                </button>
                            </div>
                        </div>

                        {/* Right Column - 3D Animation */}
                        <div
                            className={`relative h-[600px] lg:h-[700px] z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                }`}
                        >
                            <div
                                ref={mountRef}
                                className="w-full h-full rounded-2xl"
                                style={{ background: 'transparent' }}
                            />

                            {/* Overlay gradient for better integration */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
            >
                <div className="w-6 h-10 border-2 border-purple-400/30 rounded-full flex justify-center animate-bounce">
                    <div className="w-1 h-3 bg-purple-400/60 rounded-full mt-2"></div>
                </div>
            </div>

            {/* Custom CSS Animations */}
            <style jsx>{`
                @keyframes slideInFromTop {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInFromBottom {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;