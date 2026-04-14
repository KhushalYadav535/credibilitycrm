"use client";

type TestimonialsSectionProps = {
  title?: string;
};

const testimonials = [
  {
    quote:
      "Credibility helped us redesign our voice support journey. Repeat calls dropped significantly in the first quarter.",
    name: "Ritika Sharma",
    role: "Head of Customer Operations, Retail Bank",
  },
  {
    quote:
      "The compliance-safe scripting and escalation controls gave our leadership team confidence from day one.",
    name: "Anand Verma",
    role: "CX Transformation Lead, NBFC",
  },
  {
    quote:
      "We moved from reactive support to intelligent customer engagement with measurable outcomes.",
    name: "Mehul Arora",
    role: "VP Service Excellence, Insurance Group",
  },
];

export default function TestimonialsSection({
  title = "What industry leaders say",
}: TestimonialsSectionProps) {
  return (
    <section className="section-wrap pt-2">
      <div className="glass-card p-6 md:p-8">
        <p className="text-sm text-orange-300">Testimonials</p>
        <h2 className="mt-2 text-3xl font-semibold">{title}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="card-3d rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <p className="text-slate-200">"{item.quote}"</p>
              <p className="mt-4 text-sm font-semibold text-white">{item.name}</p>
              <p className="text-xs text-slate-400">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
