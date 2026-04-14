"use client";

import { motion } from "framer-motion";
import AutoHorizontalScroll from "@/components/auto-horizontal-scroll";
import TestimonialsSection from "@/components/testimonials-section";

const useCases = [
  {
    title: "Loan Repayment Reminders",
    problem: "High delinquency due to delayed manual follow-ups.",
    flow: "AI voice nudges, payment intent capture, and agent escalation for exceptions.",
    outcome: "Up to 34% faster collections cycle.",
  },
  {
    title: "Policy Renewal Outreach",
    problem: "Missed renewal windows and low customer response rate.",
    flow: "Automated personalized reminders with branch and channel coordination.",
    outcome: "22% uplift in on-time renewals.",
  },
  {
    title: "Dispute Resolution",
    problem: "Multiple calls for one issue creates poor CSAT.",
    flow: "Intent-led triage and intelligent transfer with context packaging.",
    outcome: "40% reduction in repeat calls.",
  },
];

export default function UseCasesPage() {
  return (
    <div>
      <section className="section-wrap pt-14">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-8 md:p-12">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold md:text-6xl">
            Use Cases engineered for measurable BFSI outcomes
          </motion.h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Each use case is designed as a complete interaction journey: intent capture, policy-safe response, human
            fallback, and post-call optimization.
          </p>
        </div>
      </section>

      <section className="section-wrap pt-8">
        <div className="grid gap-5 md:grid-cols-3">
          {useCases.map((item) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -6, rotateX: 3, rotateY: -2 }}
              className="card-3d glass-card p-6"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-slate-300">
                <span className="text-white">Problem:</span> {item.problem}
              </p>
              <p className="mt-2 text-slate-300">
                <span className="text-white">AI Flow:</span> {item.flow}
              </p>
              <p className="mt-2 text-orange-300">{item.outcome}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-2">
          <aside className="card-3d glass-card h-fit p-7 lg:sticky lg:top-28">
            <p className="text-sm text-orange-300">Use Case Framework</p>
            <h2 className="mt-2 text-3xl font-semibold">From intent to impact in a single guided flow</h2>
            <p className="mt-4 text-slate-300">
              Credibility transforms disconnected operations into one cinematic response system where every call
              contributes to measurable customer and cost outcomes.
            </p>
          </aside>
          <div className="space-y-5">
            {["Intent Detection", "Dynamic Policy Routing", "Human Escalation", "Outcome Analytics"].map((step, idx) => (
              <article key={step} className="card-3d glass-card min-h-[170px] p-6">
                <p className="text-xs text-slate-400">Step {idx + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold">{step}</h3>
                <p className="mt-2 text-slate-300">
                  Designed to keep conversation quality high while reducing friction, repeat calls, and operational
                  overhead.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pt-2">
        <div className="glass-card p-6 md:p-8">
          <p className="text-sm text-orange-300">Cinematic Journey Tracks</p>
          <h2 className="mt-2 text-3xl font-semibold">Scroll through deployment-ready use case tracks</h2>
          <AutoHorizontalScroll className="mt-6">
            {[
              "Collections Recovery Loop",
              "Renewal Retention Engine",
              "Dispute Confidence Workflow",
              "Inbound Service Resolution Grid",
            ].map((item) => (
              <article key={item} className="card-3d min-h-[220px] min-w-[82%] rounded-3xl border border-white/10 bg-black/20 p-6 md:min-w-[46%]">
                <p className="text-xs text-slate-400">Premium Use Case</p>
                <h3 className="mt-3 text-2xl font-semibold">{item}</h3>
                <p className="mt-3 text-slate-300">
                  Designed with AI-first triage, policy-aware handling, and measurable business outcomes.
                </p>
              </article>
            ))}
          </AutoHorizontalScroll>
        </div>
      </section>
      <TestimonialsSection title="Use-case deployments delivering real impact" />
    </div>
  );
}
