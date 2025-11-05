export default function Blog() {
  const posts = [
    {
      title: "AI-assisted content that actually ranks",
      excerpt: "A practical workflow for pairing human insight with AI speed.",
      date: "Oct 3, 2025",
    },
    {
      title: "From keyword to calendar in 15 minutes",
      excerpt: "Turn research into an actionable plan your team can ship.",
      date: "Sep 21, 2025",
    },
    {
      title: "Internal links: the underrated growth lever",
      excerpt: "How to build topical authority without adding more content.",
      date: "Aug 30, 2025",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Blog</h1>
          <p className="mt-3 text-slate-600">Insights on content ops, SEO, and writing with AI.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs text-slate-500">{p.date}</div>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
              <a href="#/blog" className="mt-4 inline-flex text-sm font-medium text-indigo-700 hover:underline">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
