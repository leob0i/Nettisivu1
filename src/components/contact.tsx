"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const pathname = usePathname() || "/";
  const isEN = pathname === "/en" || pathname.startsWith("/en/");

  // ✅ VAIHDA NÄMÄ OMIIN
  const WHATSAPP_E164 = "358452031377"; // pelkät numerot (EI +)
  const WHATSAPP_LABEL = "+358 452031377";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");

    const form = e.currentTarget;
    const fd = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd, // ✅ multipart/form-data automaattisesti
      });

      setState(res.ok ? "ok" : "err");
      if (res.ok) form.reset();
    } catch {
      setState("err");
    }
  }

  return (
    <section id="yhteys" className="relative bg-slate-950 py-16 md:py-20">
      {/* Taustakuva */}
      <div className="absolute inset-0">
        <Image
          src="/kutistepussi.sivu.jpg" // ✅ vaihda oma taustakuva tarvittaessa
          alt={isEN ? "Contact background" : "Yhteys-taustakuva"}
          fill
          className="h-full w-full object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4">
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {isEN ? "Request a quote or ask a question" : "Pyydä tarjous tai kysy lisää"}
          </h2>

          <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
            {isEN
              ? "Tell us briefly what you need. You can attach an image, sketch, or PDF to help us estimate accurately. We’ll reply as soon as possible."
              : "Kerro lyhyesti mitä tarvitset. Voit liittää kuvan, luonnoksen tai PDF-tiedoston, jotta osaamme arvioida oikein. Vastaamme mahdollisimman pian!"}
          </p>

          {/* WhatsApp-nappi (ennen lomaketta) */}
          <div className="mt-6 flex justify-center">
            <Link
              href={`https://wa.me/${+358452031377}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isEN ? "Open WhatsApp" : "Avaa WhatsApp ja ota yhteyttä"}
              className="group inline-flex h-12 items-center gap-3 rounded-full bg-[#25D366] px-5 shadow-lg shadow-black/30 ring-1 ring-white/10 transition hover:bg-[#1EBE5D] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <svg
                viewBox="0 0 32 32"
                className="h-7 w-7 shrink-0 text-white"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  transform="translate(1.5 -0)"
                  d="M19.11 17.53c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.18.28-.74.9-.9 1.08-.17.18-.33.2-.6.06-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.56-1.94-.17-.28-.02-.43.13-.57.13-.13.28-.33.42-.49.14-.17.18-.28.28-.46.1-.18.05-.35-.02-.49-.07-.14-.64-1.55-.87-2.12-.23-.56-.46-.49-.64-.49h-.55c-.2 0-.49.07-.74.35-.26.28-.97.95-.97 2.32 0 1.37 1 2.69 1.14 2.88.14.18 1.97 3 4.77 4.2.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.64.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z"
                />
                <path
                  fill="currentColor"
                  d="M16.01 3.2c-7.03 0-12.75 5.7-12.75 12.7 0 2.23.6 4.41 1.73 6.33L3.2 28.8l6.75-1.77a12.8 12.8 0 0 0 6.06 1.54c7.03 0 12.75-5.7 12.75-12.7S23.04 3.2 16.01 3.2zm0 23.12c-1.93 0-3.82-.52-5.47-1.5l-.39-.23-4.01 1.05 1.07-3.9-.25-.4a10.51 10.51 0 0 1-1.61-5.57c0-5.8 4.75-10.52 10.66-10.52 5.9 0 10.66 4.72 10.66 10.52 0 5.8-4.76 10.55-10.66 10.55z"
                />
              </svg>

              <span className="flex flex-col leading-[1.05]">
                <span className="font-sans text-[15px] font-semibold tracking-tight text-white">
                  WhatsApp
                </span>
                <span className="font-sans text-[13px] font-semibold tracking-tight text-white/95 tabular-nums">
                  {WHATSAPP_LABEL}
                </span>
              </span>
            </Link>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="mt-10 space-y-6 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl backdrop-blur"
        >
          {/* hidden meta */}
          <input type="hidden" name="source" value={isEN ? "home / contact" : "etusivu / yhteys"} />
          <input type="hidden" name="redirect" value="/#yhteys" />

          {/* Honeypot */}
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="text" name="hp_company" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5 text-sm">
              <label
                htmlFor="name"
                className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
              >
                {isEN ? "Name" : "Nimi"}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-orange-500"
                placeholder={isEN ? "First Last" : "Etunimi Sukunimi"}
              />
            </div>

            <div className="space-y-1.5 text-sm">
              <label
                htmlFor="company"
                className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
              >
                {isEN ? "Company (optional)" : "Yritys (valinnainen)"}
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-orange-500"
                placeholder={isEN ? "Company name" : "Yrityksen nimi"}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5 text-sm">
              <label
                htmlFor="email"
                className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
              >
                {isEN ? "Email" : "Sähköposti"}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-orange-500"
                placeholder={isEN ? "name@company.com" : "nimi@yritys.fi"}
              />
            </div>

            <div className="space-y-1.5 text-sm">
              <label
                htmlFor="phone"
                className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
              >
                {isEN ? "Phone" : "Puhelin"}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-orange-500"
                placeholder={isEN ? "Phone number" : "Puhelinnumero"}
              />
            </div>
          </div>

          {/* Tiedoston liittäminen */}
          <div className="space-y-1.5 text-sm">
            <label
              htmlFor="attachment"
              className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
            >
              {isEN ? "Attachment (optional)" : "Liitä tiedosto (valinnainen)"}
            </label>
            <input
              id="attachment"
              name="attachment"
              type="file"
              accept="image/*,application/pdf"
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-50 file:mr-3 file:rounded-lg file:border-0 file:bg-orange-500 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-orange-600"
            />
            <p className="text-[11px] text-slate-400">
              {isEN ? "Attach an image or PDF. (max 2MB)" : "Voit liittää kuvan tai pdf-tiedoston. (max 2MB)"}
            </p>
          </div>

          <div className="space-y-1.5 text-sm">
            <label
              htmlFor="message"
              className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300"
            >
              {isEN ? "Message" : "Viesti"}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-amber-400"
              placeholder={
                isEN
                  ? "Describe what you need, sizes, timeline, and any details"
                  : "Kuvaile tarve, mitat, aikataulu ja mahdolliset lisätoiveet"
              }
            />
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] leading-relaxed text-slate-400">
              {isEN
                ? "By sending this form you agree that we may contact you."
                : "Lähettämällä lomakkeen hyväksyt, että otamme sinuun yhteyttä."}
            </p>

            <button
              type="submit"
              disabled={state === "sending"}
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-orange-600 disabled:opacity-60"
            >
              {state === "sending"
                ? isEN ? "Sending…" : "Lähetetään…"
                : isEN ? "Send request" : "Lähetä tarjouspyyntö"}
            </button>
          </div>

          {state === "ok" && (
            <p className="text-sm text-green-300">
              {isEN ? "Thanks! We’ll reply soon." : "Kiitos! Vastaamme pian."}
            </p>
          )}
          {state === "err" && (
            <p className="text-sm text-red-300">
              {isEN ? "Sending failed. Please try again." : "Lähetys epäonnistui. Yritä uudelleen."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
