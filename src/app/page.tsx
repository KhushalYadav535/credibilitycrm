"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useDemoModal } from "@/components/site-shell";
import { trackEvent } from "@/lib/analytics";
import { TiltCard } from "@/components/tilt-card";
import { CinematicGrid } from "@/components/cinematic-grid";
import { CinematicButton } from "@/components/cinematic-button";
import { AiVisualizer } from "@/components/ai-visualizer";
import { FlipCard } from "@/components/flip-card";
import { AnimatedCounter } from "@/components/animated-counter";
import SceneSection from "@/components/scene-section";

const stats = [
  { label: "Resolution Speed", value: "3.1x" },
  { label: "Agent Cost Reduction", value: "Up to 70%" },
  { label: "CSAT Uplift", value: "+29%" },
];

const capabilities = [
  "AI call triage and intent routing",
  "Real-time compliance-safe scripting",
  "Voice automation with smart escalation",
  "Outcome analytics and feedback loops",
];

export default function Home() {
  const { openDemo } = useDemoModal();

  return (
    <div>
      <SceneSection className="luxury-hero relative">
        <CinematicGrid />
        <div className="section-wrap relative z-10 overflow-hidden text-center min-h-[90vh] flex flex-col justify-center">
          <motion.div
            animate={{ y: [0, -24, 0], x: [0, 16, 0], scale: [1, 1.2, 1], rotate: [0, 8, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-8 top-16 h-52 w-52 rounded-full bg-indigo-500/35 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -14, 0], scale: [1, 1.16, 1], rotate: [0, -10, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-6 top-28 h-60 w-60 rounded-full bg-orange-500/35 blur-3xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 w-fit rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs text-slate-200"
          >
            AI Voice Customer Engagement Platform
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="mb-4 text-4xl font-bold leading-tight md:text-6xl flex flex-wrap justify-center"
          >
            {["Turn", "every", "support", "call", "into"].map((word, i) => (
              <motion.span
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-block scanner-text"
            >
              measurable growth
            </motion.span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-300"
          >
            Credibility is not a CRM. It is an AI voice-driven customer interaction layer built for banks, NBFCs, and
            fintech leaders who need faster resolution, lower cost, and better CX.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.15 }}
          >
            <AiVisualizer />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <CinematicButton
              onClick={() => {
                openDemo();
                trackEvent("cta_click", { location: "hero_primary" });
              }}
            >
              Book Demo
            </CinematicButton>
            <Link href="/contact" className="btn-secondary">
              Talk to Expert
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3"
          >
            {stats.map((item) => (
              <TiltCard key={item.label} className="px-6 py-5 text-left h-full">
                <motion.div
                  animate={{ y: [0, -12, 0], rotateX: [0, 3, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                </motion.div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </SceneSection>

      <SceneSection className="section-wrap">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-5 md:grid-cols-3"
        >
          <FlipCard
            frontTitle="Long Wait Times"
            frontDesc="Customers wait too long and abandon support journeys."
            backTitle="Instant Response"
            backDesc="AI answers instantly, completely removing hold times."
          />
          <FlipCard
            frontTitle="High Agent Cost"
            frontDesc="Human-only contact center models stay expensive at scale."
            backTitle="Fractional Cost"
            backDesc="Scale horizontally without adding FTE payroll."
          />
          <FlipCard
            frontTitle="Inconsistent CX"
            frontDesc="Quality varies by shift, location, and training depth."
            backTitle="Perfect Consistency"
            backDesc="Always polite, empathetic, and compliant on every call."
          />
        </motion.div>
      </SceneSection>

      <SceneSection className="section-wrap">
        <div className="grid auto-rows-[180px] gap-5 md:grid-cols-3">
          <TiltCard className="p-6 md:col-span-2 md:row-span-2 flex flex-col justify-center relative overflow-hidden">
            <motion.div 
               animate={{ rotate: 360 }} 
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="absolute -right-20 -top-20 opacity-20 pointer-events-none"
            >
              <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#6366F1" d="M42.7,-73.4C56.2,-67.2,68.6,-57.4,78.2,-44.6C87.8,-31.8,94.5,-15.9,94.4,-0.1C94.3,15.8,87.3,31.5,77.5,44.5C67.7,57.5,55.1,67.7,41.2,74.7C27.3,81.7,13.6,85.5,-0.6,86.5C-14.9,87.6,-29.8,85.9,-42.6,79.5C-55.5,73.1,-66.4,62.1,-74.6,48.9C-82.8,35.6,-88.3,20,-88.7,4.3C-89.1,-11.5,-84.4,-23,-76.3,-33.5C-68.2,-44,-56.7,-53.5,-43.8,-60.1C-30.8,-66.7,-15.4,-70.4,1,-72.1C17.4,-73.9,34.8,-73.7,42.7,-73.4Z" transform="translate(100 100)" />
              </svg>
            </motion.div>

            <p className="text-sm text-orange-300 relative z-10">Capabilities</p>
            <h2 className="mt-2 text-3xl font-semibold relative z-10">Built for BFSI-grade customer interaction</h2>
            <motion.ul 
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
              className="mt-6 grid gap-4 text-slate-200 md:grid-cols-2 lg:grid-cols-2 relative z-10"
            >
              {capabilities.map((item) => (
                <motion.li 
                  key={item} 
                  variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                  className="flex items-center gap-3 rounded-xl bg-white/5 p-3 border border-white/10 transition-colors hover:bg-white/10"
                >
                  <div className="h-6 w-6 flex-shrink-0 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(255,106,0,0.8)]" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </TiltCard>
          <TiltCard className="p-6 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-semibold">Active</span>
            </div>
            <p className="text-sm text-slate-300">Use Case</p>
            <p className="mt-2 text-xl font-semibold">Collections Follow-ups</p>
            <p className="mt-2 text-sm text-slate-300">Automated reminder flows with intent and promise-to-pay capture.</p>
          </TiltCard>
          <TiltCard className="p-6 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-6 right-6 flex gap-0.5 items-end h-3">
              <motion.div animate={{ height: ["40%","100%","40%"] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-indigo-400 rounded-full" />
              <motion.div animate={{ height: ["80%","30%","80%"] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1 bg-indigo-400 rounded-full" />
              <motion.div animate={{ height: ["50%","90%","50%"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-indigo-400 rounded-full" />
            </div>
            <p className="text-sm text-slate-300">Use Case</p>
            <p className="mt-2 text-xl font-semibold">Policy Renewal</p>
            <p className="mt-2 text-sm text-slate-300">Voice campaigns that improve timely customer renewal actions.</p>
          </TiltCard>
          <TiltCard className="p-6 md:col-span-2">
            <p className="text-sm text-slate-300">ROI Preview</p>
            <p className="mt-1 text-xs text-slate-400">Illustrative estimate based on 50 agents and 10,000 calls/month.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 text-left">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-black/10 p-5 relative z-10 overflow-hidden group">
                <div className="absolute inset-0 bg-orange-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <p className="text-xs text-slate-400 uppercase tracking-wide">Avg monthly savings</p>
                <div className="mt-2 flex items-baseline gap-1 text-3xl font-bold text-white">
                  <span>₹</span>
                  <AnimatedCounter from={18.4} to={18.4} decimals={1} />
                  <span>L</span>
                </div>
                <div className="mt-4 h-1.5 w-full rounded-full bg-slate-800">
                  <motion.div 
                    initial={{ width: 0 }} whileInView={{ width: "76%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" 
                  />
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-black/10 p-5 relative z-10 overflow-hidden group">
                <div className="absolute inset-0 bg-indigo-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <p className="text-xs text-slate-400 uppercase tracking-wide">Agent load reduction</p>
                <div className="mt-2 flex items-baseline gap-1 text-3xl font-bold text-white">
                  <span>-</span>
                  <AnimatedCounter from={43} to={43} />
                  <span className="text-xl ml-1 text-slate-400 font-medium">FTE</span>
                </div>
                <div className="mt-4 h-1.5 w-full rounded-full bg-slate-800">
                  <motion.div 
                    initial={{ width: 0 }} whileInView={{ width: "43%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" 
                  />
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </SceneSection>

      <section className="section-wrap pt-4">
        <div className="glass-card overflow-hidden p-6">
          <p className="text-center text-sm text-slate-300">Trusted by forward-thinking operations teams</p>
          <div className="mt-5 marquee-track">
            <div className="marquee-content">
              {["Tier-1 Bank", "Digital NBFC", "InsurTech", "Retail Bank", "Fintech Lender", "Co-op Bank"].map((x) => (
                <span key={x} className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-slate-200">
                  {x}
                </span>
              ))}
            </div>
            <div className="marquee-content" aria-hidden>
              {["Tier-1 Bank", "Digital NBFC", "InsurTech", "Retail Bank", "Fintech Lender", "Co-op Bank"].map((x) => (
                <span
                  key={`${x}-2`}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-slate-200"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pt-8 pb-4">
        <div className="text-center">
          <p className="text-sm text-orange-300 uppercase tracking-wider font-semibold">Pricing</p>
          <p className="mt-2 text-slate-300 max-w-2xl mx-auto">
            Custom pricing based on call volume and deployment scope. We offer flexible Starter, Growth, and Enterprise tiers without buyer friction.
          </p>
        </div>
      </section>

      <section className="section-wrap">
        <div className="glass-card relative overflow-hidden p-10 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.16),transparent_55%)]" />
          <p className="text-sm text-orange-300">Ready to transform customer interactions?</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
            Launch AI voice journeys with measurable ROI in weeks.
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                openDemo();
                trackEvent("cta_click", { location: "final_cta" });
              }}
              className="btn-primary"
            >
              Book Executive Demo
            </button>
            <Link href="/roi-calculator" className="btn-secondary">
              Calculate ROI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
