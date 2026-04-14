"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TestimonialsSection from "@/components/testimonials-section";

const modules = [
  {
    title: "Voice AI Engine",
    description: "Intent detection, multilingual responses, and natural voice handling for high-volume BFSI support.",
  },
  {
    title: "Resolution Intelligence",
    description: "Tracks outcome quality, repeat calls, customer effort, and conversation-level performance.",
  },
  {
    title: "Ops Control Layer",
    description: "Policy-based escalation, audit logs, and compliance-safe response guardrails for regulated workflows.",
  },
];

const storySteps = [
  {
    step: "01",
    title: "Listen and identify intent in real time",
    text: "Every customer conversation is parsed for intent, urgency, and risk category before routing logic is applied.",
  },
  {
    step: "02",
    title: "Resolve instantly or escalate with context",
    text: "Routine issues are auto-resolved while complex cases are sent to agents with complete interaction context.",
  },
  {
    step: "03",
    title: "Measure outcomes and optimize continuously",
    text: "Each call contributes to quality analytics, model improvements, and operational decisioning dashboards.",
  },
];

const outcomes = [
  ["3.1x", "Faster first response"],
  ["70%", "Lower repetitive call load"],
  ["29%", "Customer satisfaction uplift"],
  ["43 FTE", "Equivalent agent capacity unlocked"],
];

const stickyNarrative = [
  {
    title: "Intent Graph Layer",
    text: "Maps spoken intent to action trees in milliseconds, so every caller enters the right journey from the first sentence.",
  },
  {
    title: "Compliance Intelligence",
    text: "Applies policy-aware conversation boundaries dynamically across products, geographies, and regulator-specific language constraints.",
  },
  {
    title: "Human Assist Copilot",
    text: "When escalation is required, agents receive summarized context, recommended script options, and confidence flags instantly.",
  },
  {
    title: "Executive Outcome Console",
    text: "Leaders track call quality, financial impact, and friction points in real time to optimize customer operations continuously.",
  },
];

const showcase = [
  {
    heading: "Collections Command Flow",
    copy: "Prioritizes risky accounts, runs smart reminder journeys, and routes sensitive conversations to trained teams.",
  },
  {
    heading: "Service Resolution Studio",
    copy: "Blends AI auto-resolution and agent intervention to reduce repeat call volume across customer service queues.",
  },
  {
    heading: "Renewal Experience Engine",
    copy: "Delivers personalized outreach loops that improve policy renewal conversion without aggressive call pressure.",
  },
  {
    heading: "Dispute Triage Intelligence",
    copy: "Detects high-friction intents early and creates escalation lanes with complete conversational evidence.",
  },
];

export default function ProductPage() {
  return (
    <div>
      <section className="section-wrap pt-14">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-8 md:p-12">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-300"
          >
            Product Experience
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl"
          >
            A cinematic AI voice layer built for high-stakes customer journeys
          </motion.h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Credibility orchestrates conversations, compliance, and operational intelligence in one premium interaction
            system. It sits on top of your existing stack and turns support calls into measurable business outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Book Product Demo
            </Link>
            <Link href="/roi-calculator" className="btn-secondary">
              See ROI Model
            </Link>
          </div>
        </div>
      </section>

      <section className="section-wrap pt-8">
        <div className="grid auto-rows-[190px] gap-5 md:grid-cols-4">
          <article className="card-3d glass-card p-7 md:col-span-2 md:row-span-2">
            <p className="text-sm text-orange-300">Core Architecture</p>
            <h2 className="mt-2 text-3xl font-semibold">Built to scale voice-led customer operations</h2>
            <p className="mt-4 text-slate-300">
              Real-time AI orchestration, compliant response frameworks, and intelligent agent handoff designed for BFSI
              contact centers.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
              <p>- Low-latency inference</p>
              <p>- Compliance-safe scripting</p>
              <p>- Intelligent fallback routing</p>
              <p>- Centralized decision controls</p>
            </div>
          </article>
          {modules.map((module) => (
            <article key={module.title} className="card-3d glass-card p-6">
              <h3 className="text-xl font-semibold">{module.title}</h3>
              <p className="mt-3 text-slate-300">{module.description}</p>
            </article>
          ))}
          <article className="card-3d glass-card p-6 md:col-span-2">
            <h3 className="text-lg font-semibold">Comparison Snapshot</h3>
            <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
              <p className="text-slate-400">Metric</p>
              <p className="text-slate-400">Traditional setup</p>
              <p className="text-slate-400">Credibility layer</p>
              <p>Resolution speed</p>
              <p className="text-slate-300">Agent availability bound</p>
              <p className="text-emerald-300">AI-first fast lane</p>
              <p>Compliance controls</p>
              <p className="text-slate-300">Manual checklist</p>
              <p className="text-emerald-300">Policy-engine enforcement</p>
              <p>Insights cadence</p>
              <p className="text-slate-300">Weekly reporting</p>
              <p className="text-emerald-300">Real-time call intelligence</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-wrap">
        <div className="glass-card p-8 md:p-10">
          <p className="text-sm text-orange-300">How It Works</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Designed as a premium journey, not a patchwork tool</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {storySteps.map((item) => (
              <motion.article
                key={item.step}
                whileHover={{ y: -6, rotateX: 2 }}
                className="card-3d rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <p className="text-sm font-semibold text-orange-300">{item.step}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-300">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pt-6">
        <div className="grid gap-5 md:grid-cols-4">
          {outcomes.map(([value, label]) => (
            <article key={label} className="card-3d glass-card p-6 text-center">
              <p className="text-3xl font-semibold text-white">{value}</p>
              <p className="mt-1 text-sm text-slate-300">{label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-2">
          <aside className="card-3d glass-card h-fit p-7 lg:sticky lg:top-28">
            <p className="text-sm text-orange-300">Sticky Product Story</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              One interaction layer. Multiple mission-critical customer journeys.
            </h2>
            <p className="mt-4 text-slate-300">
              Scroll this section to see how Credibility orchestrates intelligence from customer intent to executive
              outcomes. The product is designed as a control tower, not just an IVR replacement.
            </p>
          </aside>

          <div className="space-y-5">
            {stickyNarrative.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="card-3d glass-card min-h-[180px] p-6"
              >
                <p className="text-xs text-slate-400">Layer {index + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-300">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pt-2">
        <div className="glass-card p-6 md:p-8">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-sm text-orange-300">Cinematic Product Showcase</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Scroll sideways through premium solution tracks</h2>
            </div>
            <p className="hidden text-sm text-slate-400 md:block">Drag or shift+wheel</p>
          </div>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {showcase.map((item) => (
              <article
                key={item.heading}
                className="card-3d snap-start rounded-3xl border border-white/10 bg-black/20 p-7 min-h-[260px] min-w-[82%] md:min-w-[48%]"
              >
                <div className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  Premium Track
                </div>
                <h3 className="mt-4 text-2xl font-semibold">{item.heading}</h3>
                <p className="mt-3 max-w-xl text-slate-300">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-10 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.18),transparent_55%)]" />
          <h2 className="relative text-3xl font-semibold md:text-4xl">
            Build a premium voice-first customer experience your competitors cannot copy
          </h2>
          <p className="relative mx-auto mt-4 max-w-3xl text-slate-300">
            From collections to renewals and dispute handling, deploy one cinematic AI interaction layer that scales with
            your business.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Talk to Solutions Team
            </Link>
            <Link href="/use-cases" className="btn-secondary">
              Explore Use Cases
            </Link>
          </div>
        </div>
      </section>
      <TestimonialsSection title="Product teams trust Credibility outcomes" />
    </div>
  );
}
