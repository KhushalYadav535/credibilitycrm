"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimatedCounter({
  from = 0,
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  from?: number;
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(from, {
    bounce: 0,
    duration: 2500,
  });

  const displayValue = useTransform(springValue, (current) => {
    return prefix + current.toFixed(decimals) + suffix;
  });

  useEffect(() => {
    if (inView) {
      springValue.set(to);
    }
  }, [inView, springValue, to]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}
