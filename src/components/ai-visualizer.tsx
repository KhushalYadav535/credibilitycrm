"use client";

import { motion } from "framer-motion";

export function AiVisualizer() {
  // Array of 15 bars
  const bars = Array.from({ length: 15 });

  return (
    <div className="flex items-center justify-center gap-1.5 h-16 mt-8 mb-4">
      {bars.map((_, i) => {
        // Randomize the animation delays and heights so it looks like organic voice data
        const heightVariants = {
          animate: {
            height: ["20%", "100%", "40%", "80%", "20%"],
            opacity: [0.6, 1, 0.6],
          },
        };

        return (
          <motion.div
            key={i}
            variants={heightVariants}
            animate="animate"
            transition={{
              duration: 1.2 + Math.random() * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 1.5,
            }}
            className="w-1.5 md:w-2 rounded-full bg-gradient-to-t from-orange-400 to-indigo-500 shadow-[0_0_12px_rgba(255,106,0,0.6)]"
            style={{ 
              height: "20%",
              // Make outer edges smaller to form a pill/wave shape overall
              transform: `scaleY(${1 - Math.abs(i - 7) * 0.08})`
            }}
          />
        );
      })}
    </div>
  );
}
