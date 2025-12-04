"use client";

import Container from "./container";
import { SITE } from "@/lib/site";
import { usePathname } from "next/navigation";
import { SITE_EN } from "@/lib/site.en";


export default function Hero() {
    const pathname = usePathname() || "/";
  const isEN = pathname === "/en" || pathname.startsWith("/en/");
  const T = isEN ? SITE_EN : SITE;

  return (
    <section className="relative overflow-hidden">
      {/* TAUSTAVIDEO */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* LIILA GRADIENTTI */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(168,85,247,0.15),rgba(255,255,255,0))]" />

      {/* TUMMA OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-black/40" />

      {/* SISÄLTÖ (→ teksti valkoiseksi) */}
      <Container className="relative z-30 pt-16 sm:pt-24 pb-12 sm:pb-20 text-center text-white">
        
         <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight">
  {isEN
    ? "Turn your website and customer service into a growth engine"
    : "Tee verkkosivuista ja asiakaspalvelusta yrityksesi kasvun moottori"}
</h1>

           <p className="mt-4 text-white/85 max-w-2xl mx-auto">
  {isEN
    ? "I design and build modern websites and smart customer service bots that bring real enquiries — without unnecessary complexity."
    : "Suunnittelen ja toteutan moderneja verkkosivuja sekä älykkäitä asiakaspalvelubotteja, jotka tuovat oikeita yhteydenottoja – ilman turhaa monimutkaisuutta."}
</p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#yhteys"
            className="rounded-md px-5 py-2.5 text-white bg-slate-900 hover:bg-slate-800"
          >
              {isEN ? "Request a quote" : "Pyydä tarjous"}

          </a>
        </div>
        <p className="mt-6 text-sm text-white/70">
          {[SITE.phone, SITE.email].filter(Boolean).join(" · ")}
        </p>
      </Container>
    </section>
  );
}
