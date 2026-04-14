const blogs = [
  "How AI voice reduces contact center load in BFSI",
  "Designing compliant customer conversations with GenAI",
  "Reducing repeat calls with intent-led call routing",
];

export default function BlogsPage() {
  return (
    <section className="section-wrap">
      <h1 className="text-4xl font-bold">Blogs</h1>
      <div className="mt-8 space-y-4">
        {blogs.map((blog) => (
          <article key={blog} className="glass-card p-6">
            <h2 className="text-xl font-semibold">{blog}</h2>
            <p className="mt-2 text-slate-300">SEO-friendly CMS-ready blog card structure with clean slug support.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
