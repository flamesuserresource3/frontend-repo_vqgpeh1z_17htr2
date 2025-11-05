import { Calendar, FileText, Link2, Search, Settings } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Onboarding & Sitemap",
    desc: "Validate your sitemap and detect niches to personalize recommendations.",
  },
  {
    icon: FileText,
    title: "Rich Editor",
    desc: "Write with TipTap, get readability hints, and autosave drafts locally.",
  },
  {
    icon: Link2,
    title: "Internal Links",
    desc: "Approve or reject smart in-editor link suggestions to boost SEO.",
  },
  {
    icon: Calendar,
    title: "Content Calendar",
    desc: "Plan, schedule, and drag-reschedule posts with a clean month view.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Everything you need for AI-assisted SEO</h2>
          <p className="mt-3 text-slate-600">A streamlined toolkit for discovery, creation, and publishing—no spreadsheets required.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="mb-3 inline-flex rounded-md bg-slate-900/90 p-2 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 sm:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Fine-tune to your brand</h3>
            <p className="mt-1 text-slate-600">Choose tone, length, and linking mode. Preferences are stored locally and are easy to swap to real APIs later.</p>
          </div>
          <div className="flex items-center justify-end">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm">
              <Settings className="h-4 w-4" />
              Content preferences
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
