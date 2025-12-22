"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import { usePathname } from "next/navigation";

type Status = "idle" | "sending" | "sent" | "error";

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (typeof err === "string") return err;
  return "";
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const pathname = usePathname() || "/";
  const isEN = pathname === "/en" || pathname.startsWith("/en/");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      channel: String(fd.get("channel") || "").trim(),
      message: String(fd.get("message") || "").trim(),

      // Honeypot:
      website: String(fd.get("website") || "").trim(),

      // Backward compatibility: jos vanha /api/contact odottaa vain näitä.
      subject: "Contact form",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: unknown = await res.json().catch(() => null);

      const apiError =
        data && typeof data === "object" && "error" in data
          ? String((data as Record<string, unknown>).error ?? "")
          : "";

      if (!res.ok) {
        throw new Error(apiError || (isEN ? "Sending failed." : "Lähetys epäonnistui."));
      }

      setStatus("sent");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      const msg = getErrorMessage(err);
      setError(msg || (isEN ? "An error occurred. Please try again." : "Tapahtui virhe. Kokeile uudelleen."));
    }
  }

  // Valinnainen: näytä WhatsApp-linkki jos puhelin löytyy SITE:stä, muuten käytä kovakoodattua fallbackia.
  const waNumber = (SITE?.phone || "+358452031377").replace(/[^\d+]/g, "");
  const waHref = `https://wa.me/${waNumber.replace("+", "")}`;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6">
      <div className="text-lg font-bold text-white">{isEN ? "Contact" : "Jätä yhteydenotto"}</div>
      <p className="mt-1 text-sm text-white/70">
        {isEN
          ? "I’ll reply quickly — and we can start a free 2-week trial."
          : "Vastaan nopeasti ja voimme käynnistää ilmaisen 2 viikon kokeilun."}
      </p>

      <form onSubmit={onSubmit} className="mt-5 grid gap-3 sm:grid-cols-2">
        {/* Honeypot (piilossa) */}
        <input name="website" tabIndex={-1} autoComplete="off" className="hidden" />

        <div>
          <label className="text-xs font-semibold text-white/70">{isEN ? "Name" : "Nimi"}</label>
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-1 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-indigo-500/40"
            placeholder={isEN ? "First Last" : "Etunimi Sukunimi"}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-white/70">{isEN ? "Email" : "Sähköposti"}</label>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-indigo-500/40"
            placeholder={isEN ? "name@company.com" : "nimi@yritys.fi"}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-white/70">
            {isEN ? "Company (optional)" : "Yritys (valinnainen)"}
          </label>
          <input
            name="company"
            className="mt-1 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-indigo-500/40"
            placeholder={isEN ? "Company name" : "Yrityksen nimi"}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-white/70">
            {isEN ? "Channel (optional)" : "Kanava (valinnainen)"}
          </label>

          <div className="relative mt-1">
            <select
              name="channel"
              className="w-full appearance-none rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 pr-10 text-white font-semibold outline-none focus:ring-2 focus:ring-indigo-500/40"
              defaultValue=""
            >
              <option value="" className="bg-zinc-950">
                {isEN ? "Select" : "Valitse"}
              </option>
              <option value="WhatsApp" className="bg-zinc-950">
                WhatsApp
              </option>
              <option value={isEN ? "Website" : "Verkkosivu"} className="bg-zinc-950">
                {isEN ? "Website" : "Verkkosivu"}
              </option>
              <option value={isEN ? "Both" : "Molemmat"} className="bg-zinc-950">
                {isEN ? "Both" : "Molemmat"}
              </option>
              <option value="Messenger" className="bg-zinc-950">
                Messenger
              </option>
              <option value="Instagram" className="bg-zinc-950">
                Instagram
              </option>
              <option value={isEN ? "Other" : "Muu"} className="bg-zinc-950">
                {isEN ? "Other" : "Muu"}
              </option>
            </select>

            {/* nuoli oikealle */}
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-white/70">{isEN ? "Message" : "Viesti"}</label>
          <textarea
            name="message"
            required
            rows={4}
            className="mt-1 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-indigo-500/40"
            placeholder={
              isEN
                ? "Briefly describe your industry and what you want the bot to handle."
                : "Kerro lyhyesti toimialasi ja mitä haluat botin hoitavan."
            }
          />
        </div>

        <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-white/80 hover:text-white hover:underline underline-offset-4"
          >
            {isEN ? `Or WhatsApp: ${SITE?.phone || "+358452031377"}` : `Tai WhatsApp: ${SITE?.phone || "+358452031377"}`}
          </a>

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white hover:opacity-95 disabled:opacity-60"
          >
            {status === "sending" ? (isEN ? "Sending..." : "Lähetetään...") : isEN ? "Send" : "Lähetä"}
          </button>
        </div>

        {status === "sent" && (
          <div className="sm:col-span-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/80">
            {isEN ? "Thanks! Message sent. I’ll get back to you soon." : "Kiitos! Viesti lähetetty. Palaan sinulle pian."}
          </div>
        )}

        {status === "error" && (
          <div className="sm:col-span-2 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-white/80">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
