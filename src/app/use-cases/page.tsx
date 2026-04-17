"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AutoHorizontalScroll from "@/components/auto-horizontal-scroll";
import SceneSection from "@/components/scene-section";
import { CinematicButton } from "@/components/cinematic-button";

const baseUseCases = [
  {
    id: "info",
    icon: "💬",
    title: "Product & Services Information",
    problem: "Customers struggle to get accurate, consistent answers about products.",
    flow: "Identifies intent, retrieves info from knowledge base, delivers natural response.",
    outcome: "60% less inbound volume",
    industries: "Banking, Insurance, Telecom, Healthcare, Retail, Utilities",
    bfsiContext: "Loan eligibility, FD rates, insurance coverage queries",
  },
  {
    id: "troubleshoot",
    icon: "🛠",
    title: "Troubleshooting",
    problem: "Technical issues require multiple transfers and repeat explanations.",
    flow: "Detects issue type through intent mapping, walks through structured steps.",
    outcome: "40% drop in repeat calls",
    industries: "Telecom, Banking, SaaS, Utilities, Consumer Electronics, Insurance",
    bfsiContext: "Failed transactions, net banking issues, claim status",
  },
  {
    id: "requests",
    icon: "📝",
    title: "Service Requests",
    problem: "High-volume, low-complexity requests consume disproportionate agent time.",
    flow: "Authenticates customer, captures structured details, triggers backend flow.",
    outcome: "70% zero-touch fulfillment",
    industries: "Banking, Insurance, Government, Utilities, Telecom, Healthcare",
    bfsiContext: "Statement requests, cheque book, KYC updates, nominee changes",
  },
  {
    id: "schedule",
    icon: "📅",
    title: "Scheduling",
    problem: "Appointment booking via phone is error-prone and often unavailable.",
    flow: "Checks availability, captures preferences, confirms and reminds.",
    outcome: "30% reduction in no-shows",
    industries: "Healthcare, Financial Advisory, Automotive, Real Estate, Education, Retail",
    bfsiContext: "Branch appointments, RM meetings, loan counselling sessions",
  },
  {
    id: "grievance",
    icon: "⚖",
    title: "Customer Grievance Redressal",
    problem: "Inconsistent complaints capture creates compliance and regulatory risk.",
    flow: "Captures grievance precisely, assigns reference, triggers TAT workflows.",
    outcome: "50% faster acknowledgement",
    industries: "Banking, Insurance, Telecom, Government, NBFCs, Cooperative Banks",
    bfsiContext: "RBI-compliant complaint capture, Internal Ombudsman routing",
  },
  {
    id: "leads",
    icon: "🎯",
    title: "Sales Lead Capture",
    problem: "Inbound interest calls drop when agents are unavailable, losing revenue.",
    flow: "Identifies purchase intent, qualifies lead, routes to sales in real-time.",
    outcome: "25% lift in lead conversion",
    industries: "Insurance, Banking, Real Estate, Automotive, EdTech, Retail",
    bfsiContext: "Loan enquiries, insurance interest, deposit scheme upsell",
  },
];

const testimonials = [
  {
    quote: "The four-layer architecture gave us a level of call orchestration we couldn't achieve with our previous IVR system.",
    name: "Head of Digital Infrastructure",
    role: "Regional Bank",
    tag: "Intent Routing",
  },
  {
    quote: "We were live within weeks. The integration with our existing CBS was smoother than any vendor deployment we had done before.",
    name: "VP Technology",
    role: "Insurance Group",
    tag: "API Integration",
  },
  {
    quote: "The Executive Outcome Console gave our leadership team visibility into customer interaction quality that we simply did not have before.",
    name: "Chief Operating Officer",
    role: "NBFC",
    tag: "Outcome Tracking",
  },
  {
    quote: "API integration was well-documented and the support team understood our infra constraints from day one.",
    name: "Head of IT Architecture",
    role: "Co-operative Bank",
    tag: "Platform Capability",
  }
];

export default function UseCasesPage() {
  const [activeIndustry, setActiveIndustry] = useState<"All" | "BFSI">("All");

  return (
    <div>
      <SceneSection className="luxury-hero relative">
        <div className="section-wrap relative z-10 overflow-hidden text-center min-h-[60vh] flex flex-col justify-center pb-20 pt-24">
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-96 w-96 rounded-full bg-orange-500/10 blur-[100px]" />
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-6">
            <div className="flex gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 p-1">
              <button 
                onClick={() => setActiveIndustry("All")}
                className={`px-4 py-1.5 text-sm rounded-full transition-all ${activeIndustry === "All" ? "bg-orange-500 text-white" : "text-amber-200/70 hover:text-amber-200"}`}
              >
                All Industries
              </button>
              <button 
                onClick={() => setActiveIndustry("BFSI")}
                className={`px-4 py-1.5 text-sm rounded-full transition-all ${activeIndustry === "BFSI" ? "bg-orange-500 text-white" : "text-amber-200/70 hover:text-amber-200"}`}
              >
                BFSI Lens
              </button>
            </div>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 18 }} transition={{ delay: 0.1 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold md:text-6xl text-white">
            Every customer conversation, handled intelligently
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} transition={{ delay: 0.2 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Credibility deploys across any industry where voice-led customer interaction drives revenue, retention, or resolution. Six core use cases. One unified AI platform.
          </motion.p>
        </div>
      </SceneSection>

      <section className="section-wrap -mt-20 relative z-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {baseUseCases.map((item, idx) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl p-6 transition-all hover:border-white/20 hover:bg-slate-800"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-xl border border-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-400">
                    <span className="font-semibold text-slate-300">Problem:</span> {item.problem}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    <span className="font-semibold text-slate-300">AI Flow:</span> {item.flow}
                  </p>
                  
                  {activeIndustry === "BFSI" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-3 rounded-lg bg-orange-500/10 p-3 border border-orange-500/20">
                      <p className="text-xs text-orange-200"><span className="font-semibold">BFSI Context:</span> {item.bfsiContext}</p>
                    </motion.div>
                  )}

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                      {item.outcome}
                    </span>
                  </div>
                  
                  <div className="mt-4 max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-24">
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">Applicable Industries</p>
                    <p className="mt-1 text-xs text-slate-400">{item.industries}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
        {activeIndustry === "BFSI" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-10 text-center">
                <Link href="/industries/bfsi" className="text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors">
                    Explore full BFSI deployment →
                </Link>
            </motion.div>
        )}
      </section>

      <section className="section-wrap pt-20">
        <div className="rounded-3xl bg-slate-100 p-10 md:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <p className="text-sm font-semibold tracking-wide text-amber-700 uppercase">How it works</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">From intent to outcome — how it works</h2>
          
          <div className="mt-10 flex flex-col md:flex-row gap-6 relative">
            <div className="absolute top-8 left-6 right-6 hidden h-0.5 bg-slate-300 md:block" />
            
            {[
              { title: "Intent Detection", desc: "Instantly parses caller language to understand true meaning, not just keywords." },
              { title: "Dynamic Policy Routing", desc: "Checks enterprise rules to see if the request can be auto-resolved." },
              { title: "Intelligent Action", desc: "AI fulfills the request via APIs or routes to an agent with full context." },
              { title: "Outcome Analytics", desc: "Logs the resolution status and updates the business intelligence dashboard." }
            ].map((step, idx) => (
              <div key={idx} className="flex-1 relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl shadow-slate-200 z-10 relative mb-5 text-xl font-bold text-slate-800">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 pb-10 overflow-hidden">
        <div className="section-wrap text-center mb-10">
          <p className="text-sm text-orange-300">What deployment teams say</p>
          <h2 className="mt-2 text-3xl font-semibold">Real impact across industries</h2>
        </div>
        
        <AutoHorizontalScroll>
          {testimonials.map((item, idx) => (
            <div key={idx} className="card-3d mx-3 min-w-[320px] max-w-[380px] rounded-2xl border border-white/10 bg-black/40 p-6 flex flex-col justify-between h-[240px]">
              <div>
                <span className="inline-block rounded border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] uppercase font-semibold text-amber-500 mb-3">
                  {item.tag}
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">"{item.quote}"</p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
                    <span className="text-slate-400 font-semibold">{item.name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </AutoHorizontalScroll>
      </section>

      <section className="section-wrap py-20">
        <div className="glass-card relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 text-center border border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none" />
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-5xl text-white">
            Ready to deploy an intelligent voice layer?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-slate-300">
            See exactly how Credibility handles complete conversations in your specific operational environment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 relative z-10">
            <Link href="/contact" className="rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-500 hover:shadow-emerald-500/40">
              Book a Use Case Walkthrough
            </Link>
            <Link href="/roi-calculator" className="btn-secondary">
              Calculate Your ROI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
