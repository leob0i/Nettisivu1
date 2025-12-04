"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function About() {
  const pathname = usePathname() || "/";
  const isEN = pathname === "/en" || pathname.startsWith("/en/");

  return (
    <section className="space-y-10">
      {/* Yläosa: kuva + esittelyteksti */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        {/* Profiilikuva */}
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-slate-100 md:h-28 md:w-28 mx-auto md:mx-0">
          <Image
            src="/leo-profile.jpg" // vaihda jos eri nimi/polku
            alt={
              isEN
                ? "Leo Apell, founder of Leo Digital."
                : "Leo Apell, Leo Digitalin perustaja."
            }
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Tekstit */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            {isEN ? "Leo Digital · About" : "Leo Digital · Meistä"}
          </p>

          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {isEN
              ? "Hi, I’m Leo Apell – the person behind the websites and bots"
              : "Hei, olen Leo Apell – tekijä sivujen ja bottien taustalla"}
          </h2>

          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            {isEN
              ? "I help small and medium-sized businesses get more out of their digital channels – without unnecessary complexity. I design and build websites, customer service bots and other digital solutions from start to finish myself, so communication stays direct and clear."
              : "Autan pieniä ja keskisuuria yrityksiä saamaan enemmän irti digitaalisista kanavista – ilman turhaa monimutkaisuutta. Suunnittelen ja toteutan verkkosivuja, asiakaspalvelubotteja ja muuta digitaalista tekemistä alusta loppuun itse, jotta kommunikaatio pysyy suorana ja selkeänä."}
          </p>

          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            {isEN
              ? "I enjoy challenges and projects where I can bring my creativity to the screen, especially when creating visually striking complete experiences."
              : "Tykkään haasteista ja projekteista, joissa saan tuoda luovuuteni ruudulle, erityisesti näyttävien kokonaisuusksien toteutuksessa."}
          </p>
        </div>
      </div>

      {/* Keskiosa: Miten työskentelen + Miksi juuri minä */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h3 className="mb-3 text-sm font-semibold text-slate-900 sm:text-base">
            {isEN ? "How I work" : "Miten työskentelen"}
          </h3>
          <ul className="space-y-1.5 text-sm text-slate-700">
            <li>
              {isEN
                ? "• First, a short chat about your goals and current situation"
                : "• Aluksi lyhyt keskustelu tavoitteista ja nykytilanteesta"}
            </li>
            <li>
              {isEN
                ? "• I propose a clear solution and price upfront"
                : "• Ehdotan selkeän ratkaisun ja hinnan etukäteen"}
            </li>
            <li>
              {isEN
                ? "• I build the project step by step and keep you updated"
                : "• Toteutan projektin vaiheittain ja pidän sinut ajan tasalla"}
            </li>
            <li>
              {isEN
                ? "• Finally, launch, basic guidance and the option for further development"
                : "• Lopuksi julkaisu, perusopastus ja mahdollisuus jatkokehitykseen"}
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6 space-y-3">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
            {isEN ? "Why work with me?" : "Miksi juuri minä?"}
          </h3>
          <p className="text-sm text-slate-700">
            {isEN
              ? "Every solution I build is as practical as possible, easy to maintain and genuinely useful! …And it also looks great!"
              : "Jokainen ratkaisuni on mahdollisimman käytännönläheinen, helppo ylläpitää ja tuo oikeasti hyötyä! ...Ja myös näyttävä!"}
          </p>
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">
              {isEN
                ? "Every project is unique and a well-functioning whole."
                : "Jokainen projekti on omansa ja hyvin toimiva kokonaisuus."}
            </span>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
              {isEN
                ? "Payment 50% upfront and 50% on delivery."
                : "Maksu 50% ja 50% loput luovutuksen yhteydessä."}
            </span>
          </div>
        </div>
      </div>

      {/* Alalaita: CTA-napit */}
      <div className="flex flex-wrap gap-3">
        <Link
          href="#yhteys"
          className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500"
        >
          {isEN ? "Request a free quote" : "Pyydä maksuton arvio"}
        </Link>
      </div>
    </section>
  );
}
