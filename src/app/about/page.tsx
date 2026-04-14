"use client";

import { motion } from "framer-motion";
import AutoHorizontalScroll from "@/components/auto-horizontal-scroll";
import TestimonialsSection from "@/components/testimonials-section";

export default function AboutPage() {
  return (
    <div>
      <section className="section-wrap pt-14">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-8 md:p-12">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold md:text-6xl">
            About Credibility
          </motion.h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Built by Santiently Innovations, Credibility helps BFSI enterprises modernize voice-led customer engagement
            with measurable operational outcomes and premium customer experiences.
          </p>
        </div>
      </section>

      <section className="section-wrap pt-8">
        <div className="mt-2 grid gap-5 md:grid-cols-3">
          <article className="card-3d glass-card p-7">
            <h2 className="text-xl font-semibold">Mission</h2>
            <p className="mt-2 text-slate-300">Make customer interactions intelligent, scalable, and outcome-oriented.</p>
          </article>
          <article className="card-3d glass-card p-7">
            <h2 className="text-xl font-semibold">Vision</h2>
            <p className="mt-2 text-slate-300">Become the default AI voice interaction layer for modern financial services.</p>
          </article>
          <article className="card-3d glass-card p-7">
            <h2 className="text-xl font-semibold">Approach</h2>
            <p className="mt-2 text-slate-300">Use-case-first implementation with measurable ROI and compliance-aware design.</p>
          </article>
        </div>
      </section>

      <section className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-2">
          <aside className="card-3d glass-card h-fit p-7 lg:sticky lg:top-28">
            <p className="text-sm text-orange-300">Our Philosophy</p>
            <h2 className="mt-2 text-3xl font-semibold">Premium customer experience should be measurable</h2>
            <p className="mt-4 text-slate-300">
              We believe AI should not be added as a decorative layer. It should improve real customer outcomes and
              operational confidence for leadership teams.
            </p>
          </aside>
          <div className="space-y-5">
            {["Outcome-first product design", "Regulated-industry execution mindset", "Human + AI collaboration model", "Continuous learning operations"].map((item) => (
              <article key={item} className="card-3d glass-card min-h-[160px] p-6">
                <h3 className="text-2xl font-semibold">{item}</h3>
                <p className="mt-3 text-slate-300">
                  Integrated into every deployment so businesses scale experience quality, not just automation volume.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pt-2">
        <div className="glass-card p-6 md:p-8">
          <p className="text-sm text-orange-300">Our Storyline</p>
          <h2 className="mt-2 text-3xl font-semibold">Scroll through the principles we build on</h2>
          <AutoHorizontalScroll className="mt-6">
            {[
              "Trust-first design",
              "Regulated-market execution",
              "Outcome-backed innovation",
              "Premium experience discipline",
            ].map((item) => (
              <article key={item} className="card-3d min-h-[200px] min-w-[82%] rounded-3xl border border-white/10 bg-black/20 p-6 md:min-w-[46%]">
                <h3 className="text-2xl font-semibold">{item}</h3>
                <p className="mt-3 text-slate-300">
                  Embedded in every implementation to align customer delight with measurable operational impact.
                </p>
              </article>
            ))}
          </AutoHorizontalScroll>
        </div>
      </section>
      <TestimonialsSection title="Why enterprises partner with Credibility" />
    </div>
  );
}
