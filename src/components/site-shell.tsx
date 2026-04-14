"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useMemo, useState } from "react";
import { MotionConfig, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { trackEvent } from "@/lib/analytics";
import { CustomCursor } from "./custom-cursor";
import { AnimatedBackground } from "./animated-background";
import { SmoothScroll } from "./smooth-scroll";
import { NoiseOverlay } from "./noise-overlay";

type DemoContextType = { openDemo: () => void };
const DemoContext = createContext<DemoContextType>({ openDemo: () => undefined });

export function useDemoModal() {
  return useContext(DemoContext);
}

const navItems = [
  { href: "/product", label: "Product" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/industries/bfsi", label: "BFSI" },
  { href: "/roi-calculator", label: "ROI Calculator" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

const footerSections = [
  {
    title: "Platform",
    links: [
      { href: "/product", label: "Product" },
      { href: "/use-cases", label: "Use Cases" },
      { href: "/industries/bfsi", label: "BFSI" },
      { href: "/roi-calculator", label: "ROI Calculator" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/resources", label: "Resources" },
      { href: "/resources/case-studies", label: "Case Studies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/resources/blogs", label: "Blogs" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/", label: "Home" },
    ],
  },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string>("");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const value = useMemo(() => ({ openDemo: () => setIsOpen(true) }), []);

  async function handleDemoSubmit(formData: FormData) {
    setIsSubmitting(true);
    setFormStatus("");

    const payload = {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      industry: String(formData.get("industry") || ""),
      message: String(formData.get("message") || ""),
      source: "demo-modal",
    };

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("submit_failed");
      setFormStatus("Thanks! Demo request submitted.");
      trackEvent("lead_submit", { source: "demo_modal" });
    } catch {
      setFormStatus("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <MotionConfig reducedMotion="never">
      <SmoothScroll />
      <NoiseOverlay />
      <CustomCursor />
      <AnimatedBackground />
      <DemoContext.Provider value={value}>
        <motion.header 
          variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl"
        >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
            <Image src="/credibility-logo.svg" alt="Credibility logo" width={28} height={28} priority />
            <span>Credibility</span>
          </Link>
          <nav className="hidden gap-6 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "text-orange-400" : "hover:text-white"}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => {
              setIsOpen(true);
              trackEvent("cta_click", { location: "header" });
            }}
            className="btn-primary"
          >
            Book Demo
          </button>
        </div>
        </motion.header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 bg-slate-950">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
                <Image src="/credibility-logo.svg" alt="Credibility logo" width={24} height={24} />
                <span>Credibility</span>
              </Link>
              <p className="mt-3 text-sm text-slate-400">
                AI Voice-driven Customer Interaction Layer for BFSI leaders.
              </p>
            </div>
            {footerSections.map((section) => (
              <div key={section.title}>
                <p className="text-sm font-semibold text-slate-200">{section.title}</p>
                <div className="mt-3 space-y-2">
                  {section.links.map((item) => (
                    <Link key={item.href} href={item.href} className="block text-sm text-slate-400 hover:text-white">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 text-xs text-slate-500">
              <p>© {new Date().getFullYear()} Santiently Innovations</p>
              <p>Built for premium customer engagement</p>
            </div>
          </div>
        </footer>
        <Link href="/contact" className="sticky-cta">
          Contact Sales
        </Link>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-5">
            <div className="glass-card w-full max-w-xl p-7">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Book a Personalized Demo</h3>
                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                  Close
                </button>
              </div>
              <form
                className="grid gap-4 md:grid-cols-2"
                action={async (formData) => {
                  await handleDemoSubmit(formData);
                }}
              >
                <input required name="name" placeholder="Name" className="field" />
                <input required name="company" placeholder="Company" className="field" />
                <input required name="email" type="email" placeholder="Email" className="field md:col-span-2" />
                <input name="phone" placeholder="Phone" className="field" />
                <select name="industry" className="field">
                  <option>BFSI</option>
                  <option>Fintech</option>
                  <option>NBFC</option>
                </select>
                <textarea name="message" placeholder="Message" className="field md:col-span-2" rows={4} />
                <button type="submit" disabled={isSubmitting} className="btn-primary md:col-span-2 disabled:opacity-70">
                  {isSubmitting ? "Submitting..." : "Submit Demo Request"}
                </button>
                {formStatus ? <p className="text-sm text-slate-200 md:col-span-2">{formStatus}</p> : null}
              </form>
            </div>
          </div>
        )}
      </DemoContext.Provider>
    </MotionConfig>
  );
}
