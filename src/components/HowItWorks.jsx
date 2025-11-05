import { CheckCircle2, Sparkles, Workflow, ClipboardList, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Connect your sources",
      description: "Import outlines, briefs, and existing posts from your CMS or docs.",
      icon: ClipboardList,
    },
    {
      title: "Generate & refine",
      description: "Use AI to draft, expand, and improve with tone, SEO, and link suggestions.",
      icon: Sparkles,
    },
    {
      title: "Plan the calendar",
      description: "Drag-and-drop a weekly schedule and auto-assign tasks to teammates.",
      icon: Workflow,
    },
    {
      title: "Publish & measure",
      description: "One-click publish. Track rankings, traffic, and engagement across channels.",
      icon: Rocket,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold md:text-4xl">How it works</h1>
          <p className="mt-3 text-slate-600">From idea to published post in minutes. Here’s the flow.</p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, idx) => (
            <li key={s.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600/10 text-indigo-700">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-900 text-xs font-medium text-white">{idx + 1}</span>
                    <h3 className="font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{s.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex items-center justify-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          <p className="text-sm text-slate-600">No code required. Works with your existing stack.</p>
        </div>
      </div>
    </section>
  );
}
