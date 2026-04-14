const caseStudies = [
  { title: "Tier-1 Bank", result: "31% reduction in average handle time." },
  { title: "Leading NBFC", result: "27% drop in inbound service cost in 90 days." },
  { title: "Insurance Provider", result: "2x faster claim status communication." },
];

export default function CaseStudiesPage() {
  return (
    <section className="section-wrap">
      <h1 className="text-4xl font-bold">Case Studies</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {caseStudies.map((item) => (
          <article key={item.title} className="glass-card p-6">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-orange-300">{item.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
