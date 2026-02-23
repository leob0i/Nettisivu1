"use client";

import Link from "next/link";
import Container from "./container";
import { SITE } from "@/lib/site";
import { usePathname } from "next/navigation";
import { SITE_EN } from "@/lib/site.en";

export default function Hero() {
  const pathname = usePathname() || "/";
  const isEN = pathname === "/en" || pathname.startsWith("/en/");
  const T = isEN ? SITE_EN : SITE;

  const WA_NUMBER = "358452031377"; // wa.me vaatii pelkät numerot
  const WHATSAPP_LABEL = "+358 45 203 1377";

  return (
    <section className="relative overflow-hidden min-h-[100dvh] flex items-center bg-[url('/hero-poster.jpg')] bg-cover bg-center">
      {/* TAUSTAVIDEO */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero.kuva.png"
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

        {/* WhatsApp-nappi (Pyydä tarjous tilalle) */}
        <div className="mt-8 flex justify-center">
          <Link
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={isEN ? "Open WhatsApp" : "Avaa WhatsApp ja pyydä tarjous"}
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

        
      </Container>
    </section>
  );
}