export default function PricingPage() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Pricing</h1>
          <p className="mt-3 text-slate-600">Transparent plans that scale with your team.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Starter</h3>
            <p className="mt-1 text-sm text-slate-600">Explore the workflow.</p>
            <div className="mt-4 text-3xl font-bold">$0</div>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li>• 5 drafts / mo</li>
              <li>• Keyword ideas</li>
              <li>• Internal links</li>
            </ul>
            <a href="#/auth" className="mt-6 inline-flex w-full justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Get started</a>
          </div>

          <div className="rounded-2xl border-2 border-indigo-400 bg-white p-6 shadow-sm">
            <div className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">Most popular</div>
            <h3 className="mt-2 text-lg font-semibold">Growth</h3>
            <p className="mt-1 text-sm text-slate-600">For teams shipping weekly.</p>
            <div className="mt-4 text-3xl font-bold">$29<span className="text-base font-medium text-slate-500">/mo</span></div>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li>• Unlimited drafts</li>
              <li>• Scheduler & calendar</li>
              <li>• Priority support</li>
            </ul>
            <a href="#/auth" className="mt-6 inline-flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">Upgrade</a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Enterprise</h3>
            <p className="mt-1 text-sm text-slate-600">Security and controls at scale.</p>
            <div className="mt-4 text-3xl font-bold">Custom</div>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li>• SSO & RBAC</li>
              <li>• Custom workflows</li>
              <li>• SLA & support</li>
            </ul>
            <a href="#/contact" className="mt-6 inline-flex w-full justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
