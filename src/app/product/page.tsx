"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AutoHorizontalScroll from "@/components/auto-horizontal-scroll";
import SceneSection from "@/components/scene-section";
import StickyMockupStory from "@/components/sticky-mockup-story";

const modules = [
  {
    title: "Voice AI Engine",
    description: "Intent detection, multilingual responses, and natural voice handling for high-volume enterprise customer support.",
  },
  {
    title: "Resolution Intelligence",
    description: "Tracks outcome quality, repeat calls, customer effort, and conversation-level performance.",
  },
  {
    title: "Ops Control Layer",
    description: "Policy-based escalation, audit logs, and policy-aware response guardrails for regulated workflows.",
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

const showcase = [
  {
    heading: "Service Resolution Studio",
    copy: "Blends AI auto-resolution and agent intervention to reduce repeat call volume across any customer service operation.",
  },
  {
    heading: "Grievance & Dispute Command",
    copy: "Captures complaints with structured precision, assigns reference numbers, triggers resolution workflows, and keeps customers informed at every stage — fully auditable.",
  },
  {
    heading: "Sales Lead Capture Engine",
    copy: "Detects inbound purchase intent, qualifies leads through structured conversation, and routes hot prospects to sales in real time — with zero drop during off-hours.",
  },
  {
    heading: "Scheduling & Appointment Flow",
    copy: "Handles booking, rescheduling, and cancellation requests across any service channel — 24/7, without additional staffing.",
  },
];

const testimonials = [
  {
    quote: "The four-layer architecture gave us a level of call orchestration we couldn't achieve with our previous IVR system. The intent routing alone transformed our inbound operation.",
    name: "Head of Digital Infrastructure, Regional Bank",
  },
  {
    quote: "We were live within weeks. The integration with our existing CBS was smoother than any vendor deployment we had done before.",
    name: "VP Technology, Insurance Group",
  },
  {
    quote: "The Executive Outcome Console gave our leadership team visibility into customer interaction quality that we simply did not have before.",
    name: "Chief Operating Officer, NBFC",
  },
  {
    quote: "API integration was well-documented and the support team understood our infra constraints from day one. Credibility sits cleanly on top of our existing stack without requiring a rip-and-replace.",
    name: "Head of IT Architecture, Co-operative Bank",
  }
];

export default function ProductPage() {
  return (
    <div>
      <SceneSection className="section-wrap pt-14">
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
            Credibility orchestrates conversations, operational intelligence, and measurable customer outcomes in one premium interaction system. It sits on top of your existing stack and turns support calls into measurable business outcomes.
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
      </SceneSection>

      <SceneSection className="section-wrap pt-8">
        <div className="grid auto-rows-[190px] gap-5 md:grid-cols-4">
          <article className="card-3d glass-card p-7 md:col-span-2 md:row-span-2">
            <p className="text-sm text-orange-300">Core Architecture</p>
            <h2 className="mt-2 text-3xl font-semibold">Built to scale voice-led customer operations</h2>
            <p className="mt-4 text-slate-300">
              Real-time AI orchestration, policy-aware response frameworks, and intelligent agent handoff designed for high-volume customer contact operations.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
              <p>- Low-latency inference</p>
              <p>- Policy-aware scripting</p>
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
          <article className="card-3d glass-card p-6 md:col-span-2 overflow-auto">
            <h3 className="text-lg font-semibold">Comparison Snapshot</h3>
            <div className="mt-4 grid grid-cols-3 gap-y-3 gap-x-2 text-sm min-w-[500px]">
              <p className="text-slate-400 font-semibold border-b border-white/10 pb-2">Metric</p>
              <p className="text-slate-400 font-semibold border-b border-white/10 pb-2">Traditional setup</p>
              <p className="text-slate-400 font-semibold border-b border-white/10 pb-2">Credibility layer</p>
              
              <p>First response time</p>
              <p className="text-slate-300">Agent availability bound</p>
              <p className="text-emerald-400 font-medium">Sub-second AI response</p>
              
              <p>Policy controls</p>
              <p className="text-slate-300">Manual checklist</p>
              <p className="text-emerald-400 font-medium">Policy-engine enforcement</p>
              
              <p>Insights cadence</p>
              <p className="text-slate-300">Weekly reporting</p>
              <p className="text-emerald-400 font-medium">Real-time call intelligence</p>

              <p>Scalability</p>
              <p className="text-slate-300">Linear headcount growth</p>
              <p className="text-emerald-400 font-medium">Horizontal AI scaling</p>

              <p>Escalation quality</p>
              <p className="text-slate-300">Cold transfer, context lost</p>
              <p className="text-emerald-400 font-medium">Full context handoff to agent</p>

              <p>Operating hours</p>
              <p className="text-slate-300">Business hours only</p>
              <p className="text-emerald-400 font-medium">24/7 always-on coverage</p>
            </div>
          </article>
        </div>
      </SceneSection>

      {/* Dashboard Mockup - Option A */}
      <SceneSection className="section-wrap pt-8">
        <div className="glass-card overflow-hidden p-8 md:p-12 relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-950">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          
          <div className="relative z-10 isometric-perspective mx-auto mt-4 max-w-4xl transform-gpu rotate-x-[20deg] rotate-y-[-10deg] rotate-z-[2deg] rounded-3xl border border-white/15 bg-slate-950 shadow-2xl shadow-indigo-500/20">
            {/* Mockup header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/50 p-4 px-6">
              <div className="flex gap-4 items-center">
                <div className="h-4 w-4 rounded bg-indigo-500" />
                <div className="h-6 w-32 rounded bg-slate-800" />
                <div className="h-6 w-24 rounded bg-slate-800/50 ml-4" />
                <div className="h-6 w-24 rounded bg-slate-800/50" />
              </div>
              <div className="h-8 w-8 rounded-full bg-slate-700" />
            </div>
            {/* Mockup content */}
            <div className="p-6 grid grid-cols-4 gap-6">
              <div className="col-span-1 space-y-4">
                <div className="h-28 rounded-xl bg-orange-500/10 border border-orange-500/20 p-4 flex flex-col justify-between">
                  <div className="text-xs text-orange-400/80 font-medium">CALL VOLUME</div>
                  <div className="text-3xl font-semibold text-white">42.1K</div>
                </div>
                <div className="h-28 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 flex flex-col justify-between">
                  <div className="text-xs text-emerald-400/80 font-medium">RESOLUTION RATE</div>
                  <div className="text-3xl font-semibold text-white">89%</div>
                </div>
                <div className="h-28 rounded-xl bg-indigo-500/10 border border-indigo-500/20 p-4 flex flex-col justify-between">
                  <div className="text-xs text-indigo-400/80 font-medium">CSAT SCORE</div>
                  <div className="text-3xl font-semibold text-white">4.8</div>
                </div>
              </div>
              <div className="col-span-3 rounded-xl border border-white/10 bg-slate-900/50 p-6 relative overflow-hidden flex flex-col">
                 <div className="text-sm font-medium text-slate-400">Interaction Outcome Trend</div>
                 <div className="flex-1 mt-4 relative">
                    <div className="absolute inset-0 flex items-end">
                        <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full text-indigo-400 stroke-current fill-indigo-400/20">
                          <path d="M0 40 L0 30 L10 25 L20 28 L30 15 L40 18 L50 8 L60 12 L70 5 L80 10 L90 2 L100 6 L100 40 Z" />
                        </svg>
                    </div>
                 </div>
              </div>
            </div>

            {/* Floating Callouts */}
            <div className="absolute -left-8 top-[30%] hidden md:flex items-center gap-3">
                <div className="bg-amber-400 text-slate-950 font-semibold px-3 py-1.5 rounded text-xs shadow-lg">Call Volume Trends</div>
                <div className="w-12 h-px bg-amber-400 border-t border-dashed border-amber-400" />
            </div>
            <div className="absolute -right-8 top-[50%] hidden md:flex items-center gap-3">
                <div className="w-12 h-px bg-amber-400 border-t border-dashed border-amber-400" />
                <div className="bg-amber-400 text-slate-950 font-semibold px-3 py-1.5 rounded text-xs shadow-lg">CSAT & Resolution</div>
            </div>
            <div className="absolute left-[35%] -bottom-6 hidden md:flex flex-col items-center gap-2">
                <div className="bg-amber-400 text-slate-950 font-semibold px-3 py-1.5 rounded text-xs shadow-lg">Real-time Metrics Tracking</div>
                <div className="w-px h-8 bg-amber-400 border-l border-dashed border-amber-400" />
            </div>
          </div>
          <p className="mt-20 text-center text-sm text-slate-400 italic">Illustrative view of the Credibility Outcome Console</p>
        </div>
      </SceneSection>

      <SceneSection className="section-wrap">
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
      </SceneSection>

      <SceneSection className="section-wrap pt-6">
        <div className="grid gap-5 md:grid-cols-4">
          {outcomes.map(([value, label]) => (
            <article key={label} className="card-3d glass-card p-6 text-center">
              <p className="text-3xl font-semibold text-white">{value}</p>
              <p className="mt-1 text-sm text-slate-300">{label}</p>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/use-cases" className="text-amber-500 font-semibold uppercase tracking-widest text-xs hover:text-amber-400 transition-colors bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20">
            See how this works for your industry →
          </Link>
        </div>
      </SceneSection>

      <SceneSection className="section-wrap">
        <StickyMockupStory />
        <div className="flex flex-wrap justify-center gap-4 mt-8 rounded-[2rem] bg-indigo-950/20 p-8 border border-white/10">
            <Link href="/contact" className="btn-primary">Talk to our solutions team</Link>
            <Link href="/use-cases" className="btn-secondary">Explore deployment use cases</Link>
        </div>
      </SceneSection>

      <SceneSection className="section-wrap pt-10">
        <div className="glass-card p-6 md:p-8">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-sm text-orange-300">Cinematic Product Showcase</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Scroll sideways through premium solution tracks</h2>
            </div>
            <p className="hidden text-sm text-slate-400 md:block">Drag or shift+wheel</p>
          </div>
          <AutoHorizontalScroll className="mt-0">
            {showcase.map((item) => (
              <article
                key={item.heading}
                className="card-3d snap-start rounded-3xl border border-white/10 bg-black/20 p-7 min-h-[260px] min-w-[82%] md:min-w-[48%]"
              >
                <div className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  Platform Edition
                </div>
                <h3 className="mt-4 text-2xl font-semibold">{item.heading}</h3>
                <p className="mt-3 max-w-xl text-slate-300">{item.copy}</p>
              </article>
            ))}
          </AutoHorizontalScroll>
        </div>
      </SceneSection>

      <SceneSection className="section-wrap">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-10 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.18),transparent_55%)]" />
          <h2 className="relative mx-auto max-w-3xl text-3xl font-semibold md:text-4xl">
            Build a premium voice-first customer experience your competitors cannot copy
          </h2>
          <p className="relative mx-auto mt-4 max-w-3xl text-slate-300">
            From service resolution to lead capture and grievance redressal, deploy one AI voice interaction layer that scales across your entire customer operation.
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
      </SceneSection>

      <section className="section-wrap py-10">
        <p className="text-sm text-orange-300 mb-6 font-semibold uppercase tracking-widest text-center">Technical & Operational Voices</p>
        <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
                <div key={i} className="glass-card p-6 flex flex-col justify-between">
                    <p className="text-slate-200 italic mb-6">"{t.quote}"</p>
                    <div className="flex gap-4 items-center">
                        <div className="h-10 w-10 flex-shrink-0 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-400">
                            {t.name.split(',')[0][0]}
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">{t.name.split(',')[0]}</p>
                            <p className="text-slate-400 text-xs mt-0.5">{t.name.split(',')[1]?.trim()}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
