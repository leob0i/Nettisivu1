"use client";

import { usePathname } from "next/navigation";

// src/components/about.tsx
export default function About() {
  const pathname = usePathname() || "/";
  const isEN = pathname === "/en" || pathname.startsWith("/en/");


  return (
    <div>
         <h2 className="text-2xl sm:text-3xl font-bold text-center">
        {isEN ? "About us" : "Meistä"}
        </h2>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto text-center">
        {isEN
        ? "We are a modern, agile team building customer service bots, websites, mobile apps—anything you need—with results and clarity first. We work reliably and tailor every project to your needs. Get in touch and ask for a quote!"
        : "Olemme uusi ja nuorekas yritys joka suunnittelee ja toteuttaa asiakaspalvelubotteja, verkkosivuja, mobiilisovelluksia tai mitä vain ketterästi, tulokset ja selkeys edellä! Toimimme luotettavasti sekä jokainen asikas on meille yksilö, ja siksi räätälöimme palvelumme juuri sinun tarpeisiisi sopivaksi. Ota rohkeasti yhteyttä ja pyydä tarjous!"}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="font-semibold">
              {isEN ? "How we work" : "Miten työskentelemme?"}
              </div>
          <ul className="mt-2 list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>{isEN ? "💬 First, we go through your needs and goals" : "💬 Aluksi käymme läpi tarpeesi ja toiveesi"}</li>
            <li>{isEN ? "🛠 We propose a technical approach and plan" : "🛠 Suunnittelemme ja esittelemme ehdotuksen teknisestä toteutuksesta"}</li>
            <li>{isEN ? "🚀 We start building and keep you in the loop—sharing and welcoming ideas" : "🚀 Aloitamme kehityksen ja pidämme sinut ajan tasalla, ehdotamme ja vastaanotamme ideoita!"}</li>
            <li>{isEN ? "✅ You get an affordable, turnkey solution. We can also agree on ongoing improvements, maintenance and add-ons—fully flexible to your needs." : "✅ Lopuksi saat valmiin ratkaisun edullisesti ja avaimet käteen -periaatteella! Tarvittaessa voidaan sopia myös jatkokehityksestä, ylläpidosta ja lisätoiminnoista, täysin joustavasti tarpeidesi mukaan!"}</li>
          </ul>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="font-semibold">
            {isEN ? "Why me?" : "Miksi minä?"}
            </div>
          <p className="mt-2 text-sm text-slate-700">
               {isEN
              ? "We work fast, reliably, and always at a competitive price! ✨ Feel free to reach out for a free estimate."
              : "Työskentelemme nopeasti, luotettavasti ja aina kilpailukykyisellä hinnalla!✨ Ota rohkeasti yhteyttä ja pyydä maksuton arvio!"}
          </p>
          <a
            href="#yhteys"
            className="mt-4 inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
          >
            {isEN ? "Get a free estimate!" : "Pyydä maksuton arvio!"}
          </a>
          <p className="mt-2 text-xs text-slate-500"> {isEN ? "I usually reply the same day." : "Vastaan yleensä saman päivän aikana."}</p>
        </div>
      </div>
    </div>
  );
}
