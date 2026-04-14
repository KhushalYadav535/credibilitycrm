export default function PrivacyPage() {
  return (
    <section className="section-wrap">
      <h1 className="text-4xl font-bold md:text-5xl">Privacy Policy</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Credibility respects customer and enterprise data privacy. This page outlines how we collect, process, and
        protect information across our platform and communication touchpoints.
      </p>
      <div className="mt-8 space-y-4">
        {[
          "Data collection and usage principles",
          "Consent, retention, and deletion policies",
          "Security controls and access governance",
          "Contact process for privacy requests",
        ].map((item) => (
          <article key={item} className="card-3d glass-card p-6">
            <h2 className="text-xl font-semibold">{item}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
