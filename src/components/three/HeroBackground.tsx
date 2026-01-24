"use client";

import { useEffect, useState } from "react";

// CSS-based animated background as fallback for Three.js compatibility issues
function AnimatedParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-violet-500/30 dark:bg-violet-400/20 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Orb 1 */}
      <div
        className="absolute w-64 h-64 rounded-full border border-violet-500/20 dark:border-violet-400/10 animate-spin-slow"
        style={{ left: '10%', top: '20%' }}
      />
      {/* Orb 2 */}
      <div
        className="absolute w-96 h-96 rounded-full border border-indigo-500/20 dark:border-indigo-400/10 animate-spin-reverse"
        style={{ right: '5%', top: '10%' }}
      />
      {/* Orb 3 */}
      <div
        className="absolute w-48 h-48 rounded-full border border-purple-500/20 dark:border-purple-400/10 animate-spin-slow"
        style={{ left: '50%', bottom: '20%' }}
      />
      {/* Gradient blobs */}
      <div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-violet-500/10 to-indigo-500/10 blur-3xl animate-pulse-slow"
        style={{ left: '20%', top: '30%' }}
      />
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl animate-pulse-slow"
        style={{ right: '10%', bottom: '20%', animationDelay: '2s' }}
      />
    </div>
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 to-white dark:from-gray-900 dark:to-gray-900" />
      <FloatingOrbs />
      <AnimatedParticles />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-gray-900" />
    </div>
  );
}
