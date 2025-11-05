export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p>
            <span className="font-semibold text-slate-900">SastrasAI</span> — ship content faster.
          </p>
          <nav className="flex items-center gap-5">
            <a href="#privacy" className="hover:text-slate-900">Privacy</a>
            <a href="#terms" className="hover:text-slate-900">Terms</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
        <p className="mt-4 text-xs">Demo UI. All data mocked and stored locally.</p>
      </div>
    </footer>
  );
}
