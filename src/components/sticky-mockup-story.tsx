"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Intent Graph Layer",
    text: "Maps spoken intent to action trees in milliseconds so every caller enters the right journey from the first sentence.",
    metric: "Intent Match Accuracy 96%",
  },
  {
    title: "Policy & Guardrail Intelligence",
    text: "Applies organisation-specific conversation boundaries dynamically — across products, channels, and industry-specific operational or regulatory constraints — ensuring every interaction stays within defined guardrails.",
    metric: "Policy-safe Responses 99.3%",
  },
  {
    title: "Human Assist Copilot",
    text: "Escalates complex conversations with pre-summarized context, confidence flags, and recommended script paths.",
    metric: "Agent Handle Time -34%",
  },
  {
    title: "Executive Outcome Console",
    text: "Turns customer interactions into board-level dashboards with real-time quality and financial outcome indicators.",
    metric: "Ops Visibility Real-time",
  },
];

export default function StickyMockupStory() {
  const [active, setActive] = useState(0);
  const current = useMemo(() => items[active], [active]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <aside className="card-3d glass-card h-fit self-start p-7 lg:sticky lg:top-28">
        <p className="text-sm text-orange-300">Sticky Product Story</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">One interaction layer. Multiple mission-critical journeys.</h2>
        <p className="mt-4 text-slate-300">{current.text}</p>
        <motion.div
          key={current.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
        >
          {current.metric}
        </motion.div>
      </aside>

      <div className="space-y-5">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            onViewportEnter={() => setActive(index)}
            className={`card-3d min-h-[180px] p-6 ${active === index ? "glass-card border-orange-400/40" : "glass-card"}`}
          >
            <p className="text-xs text-slate-400">Layer {index + 1}</p>
            <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-slate-300">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
