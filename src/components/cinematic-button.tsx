"use client";

import React from "react";
import { motion } from "framer-motion";

interface CinematicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function CinematicButton({ children, onClick, className = "" }: CinematicButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#060B16_0%,#FF6A00_50%,#6366F1_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-semibold text-white backdrop-blur-3xl transition-colors hover:bg-slate-900 border border-white/5">
        {children}
      </span>
    </motion.button>
  );
}
