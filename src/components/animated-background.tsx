"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#060b16]">
      <motion.div
        animate={{
          y: ["0%", "10%", "-5%", "0%"],
          x: ["0%", "-5%", "5%", "0%"],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[120px]"
      />
      <motion.div
        animate={{
          y: ["0%", "-10%", "10%", "0%"],
          x: ["0%", "5%", "-5%", "0%"],
          rotate: [0, -5, 5, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-[10%] top-[40%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]"
      />
    </div>
  );
}
