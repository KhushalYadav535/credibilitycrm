"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FlipCardProps {
  frontTitle: string;
  frontDesc: string;
  backTitle: string;
  backDesc: string;
}

export function FlipCard({ frontTitle, frontDesc, backTitle, backDesc }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="h-[200px] w-full perspective-[1000px] cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsFlipped(true); 
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsFlipped(false);
      }}
    >
      <motion.div
        className="relative h-full w-full transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden glass-card flex flex-col justify-center p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-xs uppercase tracking-widest text-slate-500 mb-2">The Problem</span>
          <h3 className="text-xl font-semibold">{frontTitle}</h3>
          <p className="mt-3 text-slate-300 text-sm">{frontDesc}</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden glass-card bg-indigo-500/10 flex flex-col justify-center p-6"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-xs uppercase tracking-widest text-orange-400 mb-2">Our Solution</span>
          <h3 className="text-xl font-semibold text-indigo-200">{backTitle}</h3>
          <p className="mt-3 text-slate-300 text-sm">{backDesc}</p>
        </div>
      </motion.div>
    </div>
  );
}
