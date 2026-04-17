"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus("");

    const payload = {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      industry: String(formData.get("industry") || ""),
      message: String(formData.get("message") || ""),
      source: "contact-page",
    };

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("submit_failed");
      setStatus("Lead submitted successfully.");
      trackEvent("lead_submit", { source: "contact_page" });
    } catch {
      setStatus("Submission failed. Please retry.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="section-wrap">
      <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold md:text-5xl">
        Contact / Demo Request
      </motion.h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Share your current contact center setup and we will map where AI voice automation can create the highest ROI.
      </p>
      <form
        className="card-3d glass-card mt-8 grid gap-4 p-6 md:grid-cols-2"
        action={async (formData) => {
          await handleSubmit(formData);
        }}
      >
        <input className="field" name="name" placeholder="Name" required />
        <input className="field" name="company" placeholder="Company" required />
        <input className="field md:col-span-2" name="email" placeholder="Email" type="email" required />
        <input className="field" name="phone" placeholder="Phone" />
        <select className="field" name="industry">
          <option>Banking & Finance</option>
          <option>Healthcare</option>
          <option>Telecommunications</option>
          <option>Retail & E-commerce</option>
          <option>Utilities</option>
          <option>Other Enterprise</option>
        </select>
        <textarea className="field md:col-span-2" name="message" rows={5} placeholder="Message" />
        <button className="btn-primary md:col-span-2 disabled:opacity-70" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Submitting..." : "Submit Lead"}
        </button>
        {status ? <p className="text-sm text-slate-200 md:col-span-2">{status}</p> : null}
      </form>
    </section>
  );
}
