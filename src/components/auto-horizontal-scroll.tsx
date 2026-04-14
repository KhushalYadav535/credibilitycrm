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

    const onWheel = (event: WheelEvent) => {
      const { deltaY } = event;
      if (Math.abs(deltaY) < 1) return;

      const maxScrollLeft = element.scrollWidth - element.clientWidth;
      if (maxScrollLeft <= 0) return;

      const isScrollingDown = deltaY > 0;
      const atStart = element.scrollLeft <= 0;
      const atEnd = element.scrollLeft >= maxScrollLeft - 1;

      const shouldLockVertical =
        (isScrollingDown && !atEnd) || (!isScrollingDown && !atStart);

      if (shouldLockVertical) {
        event.preventDefault();
        element.scrollLeft += deltaY * 1.05;
      }
    };

    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div ref={containerRef} className={`h-showcase ${className}`}>
      {children}
    </div>
  );
}
