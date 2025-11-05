export default function Contact() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Contact sales</h1>
          <p className="mt-3 text-slate-600">Tell us about your team and we’ll reach out shortly.</p>
        </div>

        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <form className="grid gap-4">
            <div className="grid gap-1">
              <label className="text-sm font-medium text-slate-700">Name</label>
              <input className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500" placeholder="Jane Doe" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm font-medium text-slate-700">Company</label>
              <input className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500" placeholder="Acme Inc." />
            </div>
            <div className="grid gap-1">
              <label className="text-sm font-medium text-slate-700">Work email</label>
              <input type="email" className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500" placeholder="you@company.com" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea rows={4} className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500" placeholder="Tell us about your goals..." />
            </div>
            <button type="button" className="mt-2 inline-flex w-full justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
