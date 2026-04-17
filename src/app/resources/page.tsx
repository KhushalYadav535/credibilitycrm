"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AutoHorizontalScroll from "@/components/auto-horizontal-scroll";
import TestimonialsSection from "@/components/testimonials-section";
import SceneSection from "@/components/scene-section";

export default function ResourcesPage() {
  return (
    <div>
      <SceneSection className="section-wrap pt-14">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-8 md:p-12">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold md:text-6xl">
            Resources for modern BFSI customer leaders
          </motion.h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Premium knowledge hub with strategy briefs, execution frameworks, and outcome-led deployment stories.
          </p>
        </div>
      </SceneSection>

      <section className="section-wrap pt-8">
        <div className="mt-2 grid gap-5 md:grid-cols-2">
          <Link href="/resources/blogs" className="card-3d glass-card p-7 transition hover:-translate-y-1">
            <h2 className="text-2xl font-semibold">Blogs</h2>
            <p className="mt-2 text-slate-300">Insights on customer engagement, voice AI, and contact center operations.</p>
          </Link>
          <Link href="/resources/case-studies" className="card-3d glass-card p-7 transition hover:-translate-y-1">
            <h2 className="text-2xl font-semibold">Case Studies</h2>
            <p className="mt-2 text-slate-300">Outcome-led deployment stories across banks, NBFCs, and insurance teams.</p>
          </Link>
        </div>
      </section>

      <section className="section-wrap">
        <div className="glass-card p-8 md:p-10">
          <h2 className="text-3xl font-semibold">Featured research tracks</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["Voice CX Benchmarking", "Collections Transformation", "Compliance-safe AI Playbook"].map((item) => (
              <article key={item} className="card-3d rounded-2xl border border-white/10 bg-black/20 p-5">
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="mt-2 text-slate-300">Executive-grade analysis with practical implementation checkpoints.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pt-2">
        <div className="glass-card p-6 md:p-8">
          <p className="text-sm text-orange-300">Content Showcase</p>
          <h2 className="mt-2 text-3xl font-semibold">Explore premium content streams horizontally</h2>
          <AutoHorizontalScroll className="mt-6">
            {[
              "Executive strategy briefs",
              "Operator playbooks",
              "Industry benchmark notes",
              "Transformation case narratives",
            ].map((item) => (
              <article key={item} className="card-3d min-h-[200px] min-w-[82%] rounded-3xl border border-white/10 bg-black/20 p-6 md:min-w-[46%]">
                <h3 className="text-2xl font-semibold">{item}</h3>
                <p className="mt-3 text-slate-300">
                  Curated resources to help teams design, launch, and scale premium voice experiences.
                </p>
              </article>
            ))}
          </AutoHorizontalScroll>
        </div>
      </section>
      <TestimonialsSection title="Resources trusted by transformation leaders" />
    </div>
  );
}
