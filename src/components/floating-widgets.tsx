"use client";

import { motion } from "framer-motion";

export function FloatingWidgets() {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden perspective-[1000px]">
      
      {/* Widget 1: Intent Detection (Top Left) */}
      <motion.div
        animate={{ y: [0, -20, 0], rotateX: [10, 5, 10], rotateY: [-15, -10, -15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[5%] md:left-[10%] top-[15%] w-48 rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-xl shadow-2xl shadow-indigo-500/10"
      >
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-indigo-400 animate-pulse" />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Intent Detected</p>
            <p className="text-xs font-semibold text-white mt-0.5">Policy Renewal ✅</p>
          </div>
        </div>
      </motion.div>

      {/* Widget 2: Live Sentiment (Right Middle) */}
      <motion.div
        animate={{ y: [0, 25, 0], rotateX: [-10, -5, -10], rotateY: [15, 10, 15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[5%] md:right-[12%] top-[35%] w-40 rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-xl shadow-2xl shadow-emerald-500/10"
      >
        <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-2">Live Sentiment</p>
        <div className="flex items-end gap-1.5 h-6">
          <motion.div animate={{ height: ["40%", "80%", "40%"] }} transition={{ duration: 2, repeat: Infinity }} className="w-full bg-emerald-500/40 rounded-sm" />
          <motion.div animate={{ height: ["60%", "100%", "60%"] }} transition={{ duration: 2.3, repeat: Infinity }} className="w-full bg-emerald-400 rounded-sm shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <motion.div animate={{ height: ["30%", "70%", "30%"] }} transition={{ duration: 1.8, repeat: Infinity }} className="w-full bg-emerald-500/40 rounded-sm" />
          <motion.div animate={{ height: ["50%", "90%", "50%"] }} transition={{ duration: 2.1, repeat: Infinity }} className="w-full bg-emerald-500/40 rounded-sm" />
        </div>
      </motion.div>

      {/* Widget 3: Cost Saved (Bottom Leftish) */}
      <motion.div
        animate={{ y: [0, -15, 0], rotateX: [5, 10, 5], rotateY: [-5, 0, -5], scale: [0.95, 1, 0.95] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute left-[15%] md:left-[22%] bottom-[20%] w-44 rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-xl shadow-2xl shadow-orange-500/10"
      >
        <div className="flex justify-between items-center mb-1">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider">Est. Savings</p>
          <span className="text-[10px] text-emerald-400">+14%</span>
        </div>
        <p className="text-lg font-bold text-white tracking-tight">₹ 8,40,000</p>
      </motion.div>

    </div>
  );
}
