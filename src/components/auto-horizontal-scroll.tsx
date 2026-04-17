"use client";

import { useEffect, useRef } from "react";

type AutoHorizontalScrollProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AutoHorizontalScroll({
  children,
  className = "",
}: AutoHorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    let rafId = 0;
    let direction = 1;
    let isPaused = false;
    let internalScroll = element.scrollLeft;

    const step = () => {
      const maxScrollLeft = element.scrollWidth - element.clientWidth;
      if (maxScrollLeft > 0 && !isPaused) {
        if (Math.abs(internalScroll - element.scrollLeft) > 1) {
          internalScroll = element.scrollLeft;
        }
        
        internalScroll += direction * 0.65;
        
        if (internalScroll >= maxScrollLeft) {
          direction = -1;
          internalScroll = maxScrollLeft;
        } else if (internalScroll <= 0) {
          direction = 1;
          internalScroll = 0;
        }
        
        element.scrollLeft = internalScroll;
      } else {
        internalScroll = element.scrollLeft;
      }
      rafId = requestAnimationFrame(step);
    };

    const pause = () => {
      isPaused = true;
    };
    const resume = () => {
      isPaused = false;
    };

    element.addEventListener("mouseenter", pause);
    element.addEventListener("mouseleave", resume);
    element.addEventListener("focusin", pause);
    element.addEventListener("focusout", resume);
    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      element.removeEventListener("mouseenter", pause);
      element.removeEventListener("mouseleave", resume);
      element.removeEventListener("focusin", pause);
      element.removeEventListener("focusout", resume);
    };
  }, []);

  return (
    <div ref={containerRef} className={`h-showcase select-none ${className}`}>
      {children}
    </div>
  );
}
