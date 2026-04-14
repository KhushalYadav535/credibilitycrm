"use client";

import { motion } from "framer-motion";
import AutoHorizontalScroll from "@/components/auto-horizontal-scroll";
import TestimonialsSection from "@/components/testimonials-section";

export default function BFSIPage() {
  return (
    <div>
      <section className="section-wrap pt-14">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-8 md:p-12">
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold md:text-6xl">
            BFSI-grade customer interaction design
          </motion.h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Built for institutions where customer trust, compliance, and response speed must co-exist without compromise.
          </p>
        </div>
      </section>

      <section className="section-wrap pt-8">
        <div className="grid auto-rows-[180px] gap-5 md:grid-cols-3">
          <div className="card-3d glass-card p-6 md:row-span-2">
            <h2 className="text-2xl font-semibold">Pain Points</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>- Peak hour queue overload</li>
              <li>- Fragmented omnichannel context</li>
              <li>- Audit and script compliance gaps</li>
              <li>- Repeat-call driven cost expansion</li>
            </ul>
          </div>
          <div className="card-3d glass-card p-6 md:row-span-2">
            <h2 className="text-2xl font-semibold">Solution Mapping</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>- AI pre-resolution before agent intervention</li>
              <li>- Controlled human escalation with context handoff</li>
              <li>- Real-time quality and compliance monitoring</li>
              <li>- Outcome intelligence for leadership teams</li>
            </ul>
          </div>
          <div className="card-3d glass-card p-6">
            <p className="text-sm text-orange-300">Banks</p>
            <p className="mt-2 text-slate-200">Queue deflection and branch-aware handoffs.</p>
          </div>
          <div className="card-3d glass-card p-6">
            <p className="text-sm text-orange-300">NBFCs</p>
            <p className="mt-2 text-slate-200">Collections and customer verification at scale.</p>
          </div>
          <div className="card-3d glass-card p-6">
            <p className="text-sm text-orange-300">Insurance</p>
            <p className="mt-2 text-slate-200">Renewal, claim updates, and service assurance flows.</p>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-2">
          <aside className="card-3d glass-card h-fit p-7 lg:sticky lg:top-28">
            <p className="text-sm text-orange-300">Industry Storyline</p>
            <h2 className="mt-2 text-3xl font-semibold">Designed around regulated customer journeys</h2>
            <p className="mt-4 text-slate-300">
              Every stage is mapped for risk-managed responses, policy control, and premium customer experience.
            </p>
          </aside>
          <div className="space-y-5">
            {["Identity & Verification", "Service Resolution", "Payment & Collections", "Renewals & Retention"].map((lane) => (
              <article key={lane} className="card-3d glass-card min-h-[170px] p-6">
                <h3 className="text-2xl font-semibold">{lane}</h3>
                <p className="mt-3 text-slate-300">
                  Optimized with AI-led intent handling, compliance-safe scripting, and context-rich escalation for high
                  quality outcomes.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pt-2">
        <div className="glass-card p-6 md:p-8">
          <p className="text-sm text-orange-300">Industry Solution Tracks</p>
          <h2 className="mt-2 text-3xl font-semibold">Horizontal view of BFSI-specific execution lanes</h2>
          <AutoHorizontalScroll className="mt-6">
            {[
              "Retail Banking Service Ops",
              "NBFC Collections Intelligence",
              "Insurance Renewal Lifecycle",
              "Fraud & Dispute Triage",
            ].map((lane) => (
              <article key={lane} className="card-3d min-h-[220px] min-w-[82%] rounded-3xl border border-white/10 bg-black/20 p-6 md:min-w-[46%]">
                <h3 className="text-2xl font-semibold">{lane}</h3>
                <p className="mt-3 text-slate-300">
                  Configured with policy-aware interaction guardrails and premium customer experience design.
                </p>
              </article>
            ))}
          </AutoHorizontalScroll>
        </div>
      </section>
      <TestimonialsSection title="BFSI leaders on premium customer interaction" />
    </div>
  );
}
