import { Menu, Rocket, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-600 to-violet-500 text-white">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="text-slate-900">SastrasAI</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#blog" className="hover:text-slate-900">Blog</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#auth" className="text-sm text-slate-700 hover:text-slate-900">Log in</a>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
            aria-label="Get started"
          >
            Get started
          </a>
        </div>

        <button
          className="inline-flex items-center rounded-md p-2 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid gap-3 text-sm">
              <a href="#how" className="block rounded-md px-2 py-2 hover:bg-slate-50">How it works</a>
              <a href="#features" className="block rounded-md px-2 py-2 hover:bg-slate-50">Features</a>
              <a href="#pricing" className="block rounded-md px-2 py-2 hover:bg-slate-50">Pricing</a>
              <a href="#blog" className="block rounded-md px-2 py-2 hover:bg-slate-50">Blog</a>
              <div className="mt-2 flex items-center justify-between">
                <a href="#auth" className="text-slate-700">Log in</a>
                <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
                  <User className="h-4 w-4" />
                  Start
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
