import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="pricing" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Simple pricing</h2>
              <p className="mt-3 text-slate-600">Start free. Upgrade when you’re ready.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Starter</h3>
                <p className="mt-1 text-sm text-slate-600">Perfect to explore the workflow.</p>
                <div className="mt-4 text-3xl font-bold">$0</div>
                <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                  <li>• 5 drafts / mo</li>
                  <li>• Keyword ideas</li>
                  <li>• Internal link suggestions</li>
                </ul>
                <a href="#get-started" className="mt-6 inline-flex w-full justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Get started</a>
              </div>
              <div className="rounded-2xl border-2 border-indigo-400 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">Most popular</div>
                <h3 className="mt-2 text-lg font-semibold">Growth</h3>
                <p className="mt-1 text-sm text-slate-600">For teams shipping content weekly.</p>
                <div className="mt-4 text-3xl font-bold">$29<span className="text-base font-medium text-slate-500">/mo</span></div>
                <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                  <li>• Unlimited drafts</li>
                  <li>• Scheduler & calendar</li>
                  <li>• Priority support</li>
                </ul>
                <a href="#get-started" className="mt-6 inline-flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">Upgrade</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
