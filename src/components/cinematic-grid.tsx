"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CinematicGrid() {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string; duration: number }>>([]);

  useEffect(() => {
    const particleCount = 20;
    const items = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 7,
      scale: 0.2 + Math.random() * 0.8,
    }));
    setParticles(items);
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none perspective-[1000px]">
      {/* 3D Moving Base Grid */}
      <div 
        className="absolute w-[200%] h-[150%] left-[-50%] top-[30%] origin-top opacity-30" 
        style={{ transform: "rotateX(75deg)" }}
      >
        <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_80%,transparent)] animate-grid-scroll" />
      </div>

      {/* Radiant Core Glow behind text */}
      <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-orange-500/10 blur-[100px]" />

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute h-1 w-1 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{ left: p.left, top: p.top }}
          animate={{
            y: ["0px", "-100px", "0px"],
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
