import { Search, FileText, Link2, Calendar, Settings, Shield } from "lucide-react";

const features = [
  {
    title: "Semantic research",
    description: "Cluster keywords by intent and difficulty with built-in SERP analysis.",
    icon: Search,
  },
  {
    title: "Outline builder",
    description: "Structure posts with headings, talking points, and FAQs in one view.",
    icon: FileText,
  },
  {
    title: "Internal linking",
    description: "Auto-suggest relevant internal links to strengthen topic authority.",
    icon: Link2,
  },
  {
    title: "Content calendar",
    description: "Plan weekly sprints and see what’s shipping at a glance.",
    icon: Calendar,
  },
  {
    title: "Workflow automation",
    description: "Move drafts through review, edits, and approvals with custom stages.",
    icon: Settings,
  },
  {
    title: "Enterprise security",
    description: "SOC2-aware patterns and role-based access for peace of mind.",
    icon: Shield,
  },
];

export default function FeaturesPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold md:text-4xl">All features</h1>
          <p className="mt-3 text-slate-600">Everything you need to research, write, schedule, and publish.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600/10 text-indigo-700">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
