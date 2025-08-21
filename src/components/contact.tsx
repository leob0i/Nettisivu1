"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setState(res.ok ? "ok" : "err");
    if (res.ok) form.reset();
  }

  const inputBase =
    "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm " +
    "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/30";

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold">Ota yhteyttä</h2>
        <p className="mt-2 text-slate-600">
          Kerro tavoitteistasi – ehdotamme ratkaisun ja hinnan ilman sitoumusta.
        </p>
        <ul className="mt-6 space-y-2 text-sm">
          {SITE.phone && <li>📞 {SITE.phone}</li>}
          {SITE.email && <li>✉️ {SITE.email}</li>}
          {SITE.address && <li>📍 {SITE.address}</li>}
          {SITE.businessId && <li>🏢 {SITE.businessId}</li>}
        </ul>

      </div>

      <form onSubmit={handleSubmit} className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="grid gap-4">
          <label className="grid gap-1">
            <span className="text-sm">Nimi</span>
            <input
              name="name"
              autoComplete="name"
              required
              className={inputBase}
              placeholder="Etunimi Sukunimi"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm">Sähköposti</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              className={inputBase}
              placeholder="nimi@yritys.fi"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm">Viesti</span>
            <textarea
              name="message"
              required
              className={`${inputBase} min-h-[120px]`}
              placeholder="Kuvaile tarpeesi"
            />
          </label>

          <button
            disabled={state === "sending"}
            className="rounded-md bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {state === "sending" ? "Lähetetään…" : "Lähetä viesti"}
          </button>

          {state === "ok" && <p className="text-green-600 text-sm">Kiitos! Otamme yhteyttä pian.</p>}
          {state === "err" && <p className="text-red-600 text-sm">Virhe lähetyksessä. Yritä uudelleen.</p>}
        </div>
      </form>
    </div>
  );
}
