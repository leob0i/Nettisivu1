"use client";

import { usePathname } from "next/navigation";

type Review = {
  name: string;
  text: string;
};

const REVIEW_FI: Review = {
  name: "Rautaranta", // ← vaihda tähän asiakkaan nimi / yritys
  text: "Leo teki homman selkeästi ja sovitussa aikataulussa. Lopputulos oli enemmän kuin odotimme! Iso suositus Leolle ja Leodigitalille!",
};

const REVIEW_EN: Review = {
  name: "Rautaranta", // ← jos haluat englanniksi, muokkaa tämä
  text: "Leo did the job clearly and within the agreed schedule. The end result was more than we expected! A big recommendation to Leo and Leodigital!",
};

export default function Testimonials() {
  const pathname = usePathname() || "/";
  const isEN = pathname === "/en" || pathname.startsWith("/en/");
  const R = isEN ? REVIEW_EN : REVIEW_FI;

  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
          {isEN ? "Reviews" : "Arvostelut"}
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          {isEN
            ? "What clients say about working with me"
            : "Mitä asiakas kertoo yhteistyöstä"}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          {isEN
            ? "A concrete example of the kind of feedback I aim for in every project."
            : "Yksi esimerkki siitä, millaiseen palautteeseen pyrin jokaisessa projektissa."}
        </p>
      </div>

      {/* Yksi iso kortti, keskitettynä */}
      <div className="max-w-xl mx-auto">
        <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-1 text-amber-500 text-sm">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed flex-1">
            “{R.text}”
          </p>
          <div className="mt-4">
            <p className="text-sm font-semibold text-slate-900">
              {R.name}
            </p>
            {/* Ei enää rolea */}
          </div>
        </article>
      </div>
    </section>
  );
}
