import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            New: Internal linking suggestions
          </span>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Grow your SEO with AI-assisted content, not guesswork
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            SastrasAI analyzes your sitemap, surfaces high-impact keywords, and helps you draft, optimize, and schedule content in minutes.
          </p>

          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800"
            >
              Try it free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              See how it works
            </a>
          </div>

          <ul className="mt-6 grid gap-2 text-sm text-slate-600">
            <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> No credit card required</li>
            <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> TipTap editor with autosave</li>
            <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Mocked data, ready for real APIs later</li>
          </ul>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 -z-0 rounded-3xl bg-gradient-to-tr from-indigo-200/40 via-fuchsia-200/30 to-amber-200/40 blur-2xl" />
          <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1400&auto=format&fit=crop"
              alt="App preview"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
