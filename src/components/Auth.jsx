import { useState } from "react";

export default function Auth() {
  const [mode, setMode] = useState("login");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-md">
          <div className="text-center">
            <h1 className="text-3xl font-bold md:text-4xl">{mode === "login" ? "Welcome back" : "Create your account"}</h1>
            <p className="mt-3 text-slate-600">{mode === "login" ? "Log in to continue your work" : "Start drafting with SastrasAI in minutes"}</p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <form className="grid gap-4">
              {mode === "signup" && (
                <div className="grid gap-1">
                  <label className="text-sm font-medium text-slate-700">Name</label>
                  <input className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500" placeholder="Jane Doe" />
                </div>
              )}
              <div className="grid gap-1">
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500" placeholder="you@company.com" />
              </div>
              <div className="grid gap-1">
                <label className="text-sm font-medium text-slate-700">Password</label>
                <input type="password" className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500" placeholder="••••••••" />
              </div>
              <button type="button" className="mt-2 inline-flex w-full justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
                {mode === "login" ? "Log in" : "Sign up"}
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-slate-600">
              {mode === "login" ? (
                <span>
                  New here? {" "}
                  <button className="font-medium text-indigo-700 hover:underline" onClick={() => setMode("signup")}>
                    Create an account
                  </button>
                </span>
              ) : (
                <span>
                  Already have an account? {" "}
                  <button className="font-medium text-indigo-700 hover:underline" onClick={() => setMode("login")}>
                    Log in
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
