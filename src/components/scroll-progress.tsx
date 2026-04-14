"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const next = totalHeight <= 0 ? 0 : Math.min(1, window.scrollY / totalHeight);
      setProgress(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[120] h-[3px] w-full bg-transparent">
      <div
        className="h-full origin-left bg-gradient-to-r from-orange-500 via-orange-400 to-indigo-400 shadow-[0_0_12px_rgba(255,106,0,0.7)] transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
