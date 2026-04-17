"use client";

import { motion } from "framer-motion";
import { fadeUp, motionTokens } from "@/lib/motion-system";

type SceneSectionProps = {
  className?: string;
  children: React.ReactNode;
};

export default function SceneSection({ className = "", children }: SceneSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: motionTokens.slow, ease: motionTokens.easing }}
      className={`relative ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 scene-wipe" />
      {children}
    </motion.section>
  );
}
