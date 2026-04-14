export default function TermsPage() {
  return (
    <section className="section-wrap">
      <h1 className="text-4xl font-bold md:text-5xl">Terms of Service</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        These terms govern your access to and use of Credibility platform capabilities, including demo environments,
        analytics views, and interaction workflows.
      </p>
      <div className="mt-8 space-y-4">
        {[
          "Platform usage scope and responsibilities",
          "Service availability and support boundaries",
          "Security and compliance obligations",
          "Commercial and termination terms",
        ].map((item) => (
          <article key={item} className="card-3d glass-card p-6">
            <h2 className="text-xl font-semibold">{item}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
