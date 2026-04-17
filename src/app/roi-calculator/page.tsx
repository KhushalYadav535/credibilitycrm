"use client";

import { useEffect, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { motion } from "framer-motion";
import AutoHorizontalScroll from "@/components/auto-horizontal-scroll";
import TestimonialsSection from "@/components/testimonials-section";
import SceneSection from "@/components/scene-section";

function round(value: number) {
  return Math.round(value);
}

export default function ROICalculatorPage() {
  const [callVolume, setCallVolume] = useState(20000);
  const [avgDuration, setAvgDuration] = useState(5);
  const [agentCost, setAgentCost] = useState(35000);
  const [resolutionRate, setResolutionRate] = useState(68);

  const result = useMemo(() => {
    const agentCapacity = 8 * 22 * 60;
    const totalCallMinutes = callVolume * avgDuration;
    const agentsRequired = totalCallMinutes / agentCapacity;
    const currentCost = agentsRequired * agentCost;
    const automationRate = 0.7;
    const newCallLoad = totalCallMinutes * (1 - automationRate);
    const newAgentsRequired = newCallLoad / agentCapacity;
    const newCost = newAgentsRequired * agentCost;
    const savings = currentCost - newCost;
    const roiPercent = currentCost === 0 ? 0 : (savings / currentCost) * 100;
    const efficiencyGain = roiPercent + (100 - resolutionRate) * 0.2;

    return {
      currentCost: round(currentCost),
      newCost: round(newCost),
      savings: round(savings),
      agentsReduced: round(agentsRequired - newAgentsRequired),
      roiPercent: round(roiPercent),
      efficiencyGain: round(efficiencyGain),
    };
  }, [callVolume, avgDuration, agentCost, resolutionRate]);

  const chartMax = Math.max(result.currentCost, result.newCost, 1);

  useEffect(() => {
    trackEvent("roi_calculation_updated", {
      call_volume: callVolume,
      duration: avgDuration,
      cost_per_agent: agentCost,
      resolution_rate: resolutionRate,
      roi_percent: result.roiPercent,
    });
  }, [callVolume, avgDuration, agentCost, resolutionRate, result.roiPercent]);

  return (
    <div>
      <SceneSection className="section-wrap pt-14">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-8 md:p-12">
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold md:text-6xl">
            ROI Calculator
          </motion.h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-300">
            Premium projection model for voice-led transformation. Adjust operational assumptions and see the financial
            impact instantly.
          </p>
        </div>
      </SceneSection>

      <section className="section-wrap pt-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-3d glass-card p-6">
            <h2 className="text-xl font-semibold">Input Parameters</h2>
            <div className="mt-5 space-y-5">
              <RangeField
                label="Monthly Call Volume"
                value={callVolume}
                min={1000}
                max={100000}
                step={500}
                onChange={setCallVolume}
              />
              <RangeField
                label="Avg Call Duration (mins)"
                value={avgDuration}
                min={1}
                max={20}
                step={1}
                onChange={setAvgDuration}
              />
              <RangeField
                label="Cost per Agent (monthly)"
                value={agentCost}
                min={10000}
                max={100000}
                step={1000}
                onChange={setAgentCost}
              />
              <RangeField
                label="Current Resolution Rate (%)"
                value={resolutionRate}
                min={20}
                max={100}
                step={1}
                onChange={setResolutionRate}
              />
            </div>
          </div>

          <div className="card-3d glass-card p-6">
            <h2 className="text-xl font-semibold">Output</h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Metric label="Estimated Savings" value={`₹${result.savings.toLocaleString()}`} />
              <Metric label="Reduced Agents" value={`${result.agentsReduced}`} />
              <Metric label="Efficiency Gain" value={`${result.efficiencyGain}%`} />
              <Metric label="ROI" value={`${result.roiPercent}%`} />
            </div>
            <div className="mt-8">
              <p className="mb-2 text-sm text-slate-300">Monthly Cost Comparison</p>
              <div className="space-y-4">
                <Bar label="Current Cost" value={result.currentCost} percent={(result.currentCost / chartMax) * 100} />
                <Bar label="Post AI Cost" value={result.newCost} percent={(result.newCost / chartMax) * 100} accent />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-2">
          <aside className="card-3d glass-card h-fit p-7 lg:sticky lg:top-28">
            <p className="text-sm text-orange-300">How to interpret ROI</p>
            <h2 className="mt-2 text-3xl font-semibold">Financial clarity for executive decision making</h2>
            <p className="mt-4 text-slate-300">
              Use this model to align ops leaders, transformation teams, and finance stakeholders on measurable value.
            </p>
          </aside>
          <div className="space-y-5">
            {[
              "Savings estimates are based on automated call load reduction.",
              "Agent requirement reflects monthly effort capacity assumptions.",
              "Efficiency gain combines direct cost and resolution improvement signals.",
              "Use case tuning can further improve outcomes beyond baseline projection.",
            ].map((point, idx) => (
              <article key={point} className="card-3d glass-card min-h-[150px] p-6">
                <p className="text-xs text-slate-400">Insight {idx + 1}</p>
                <p className="mt-2 text-lg text-slate-200">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pt-2">
        <div className="glass-card p-6 md:p-8">
          <p className="text-sm text-orange-300">ROI Scenario Gallery</p>
          <h2 className="mt-2 text-3xl font-semibold">Slide through high-impact operating scenarios</h2>
          <AutoHorizontalScroll className="mt-6">
            {[
              ["High Volume Service Desk", "Best for enterprise call centers handling multi-product customer requests."],
              ["Collections Acceleration", "Optimized for overdue reminders, payment intent capture, and escalation paths."],
              ["Renewal Conversion Ops", "Strong fit for insurance or policy businesses with recurring outreach needs."],
              ["Dispute Management", "Designed to reduce repeat calls and improve quality of high-friction conversations."],
            ].map(([title, text]) => (
              <article key={title} className="card-3d min-h-[220px] min-w-[82%] rounded-3xl border border-white/10 bg-black/20 p-6 md:min-w-[46%]">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-slate-300">{text}</p>
              </article>
            ))}
          </AutoHorizontalScroll>
        </div>
      </section>
      <TestimonialsSection title="ROI-focused teams share their transformation wins" />
    </div>
  );
}

function RangeField({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-300">{label}</span>
        <span className="font-medium text-white">{value.toLocaleString()}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-orange-500"
      />
      <input type="number" value={value} onChange={(e) => onChange(Number(e.target.value) || 0)} className="field mt-2" />
    </label>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}

function Bar({ label, value, percent, accent }: { label: string; value: number; percent: number; accent?: boolean }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span className="text-slate-300">{label}</span>
        <span className="text-white">₹{value.toLocaleString()}</span>
      </div>
      <div className="h-3 rounded-full bg-slate-800">
        <div className={`h-3 rounded-full ${accent ? "bg-orange-500" : "bg-indigo-500"}`} style={{ width: `${Math.max(percent, 4)}%` }} />
      </div>
    </div>
  );
}
