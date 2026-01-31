"use client";

import Container from "./container";
import { SITE } from "@/lib/site";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE_EN } from "@/lib/site.en";
import Link from "next/link";


export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname() || "/";
  const isEN = pathname === "/en" || pathname.startsWith("/en/");
  const T = isEN ? SITE_EN : SITE; // T = kielikohtainen SITE
  const instagram = isEN ? SITE_EN.INSTAGRAM_URL : SITE.INSTAGRAM_URL;

  return (
    <footer className="bg-black text-slate-200 border-t border-white/10 pt-10">

      {/* relative -> mahdollistaa oikean reunan keskitetyn overlayn */}
      <Container className="py-6 relative">
        {/* Rivi: logo | kaikki teksti */}
        <div className="grid grid-cols-[44px_1fr] items-center gap-x-4">
          <Image
            src="/logo.png"
            alt={`${T.brand} logo`}
            width={44}
            height={44}
            className="shrink-0 rounded"
            priority
          />

          {/* Kaikki teksti logon oikealle puolelle */}
          <div className="min-w-0">
            {/* Ylärivi: brändi vasemmalle, kontaktirivi oikealle */}
            <div className="flex items-center gap-4">
              <div className="font-semibold text-white">{T.brand}</div>

              {/* Desktop-kontaktirivi ilman emailia (email tulee oikean reunan overlayhin) */}
              <div className="hidden md:flex items-center gap-4 text-sm text-slate-300 ml-auto">
                {SITE.phone && (
                  <a
                    href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                    className="hover:underline whitespace-nowrap"
                  >
                    {SITE.phone}
                  </a>
                )}
                {SITE.address && <span className="truncate">{SITE.address}</span>}
                {SITE.businessId && <span className="text-slate-400">{SITE.businessId}</span>}
                {/* IG + Email renderöidään alla absoluuttiseen oikeaan reunaan */}
              </div>
            </div>

            {/* Tagline tiiviinä */}
            <p className="mt-1 text-sm text-slate-300 leading-snug line-clamp-2">
              {T.tagline}
            </p>

            {/* Mobiilissa kontaktit alle (tiiviinä) */}
            <div className="mt-2 grid gap-1 text-sm text-slate-300 md:hidden">
              {SITE.phone && (
                <a
                  href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                  className="hover:underline"
                >
                  {SITE.phone}
                </a>
              )}
              {SITE.email && (
                <a href={`mailto:${SITE.email}`} className="hover:underline">
                  {SITE.email}
                </a>
              )}
              {SITE.address && <div>{SITE.address}</div>}
              {SITE.businessId && <div className="text-slate-400">{SITE.businessId}</div>}
            </div>
          </div>
        </div>

        {/* Oikea reuna: IG-ikoni + email, pystykeskitettynä koko tämän lohkon korkeuteen */}
        {(instagram || SITE.email) && (
          <div className="pointer-events-auto absolute right-4 top-1/2 hidden md:flex -translate-y-1/2 items-center gap-3">
            {instagram ? (
              <a
  href={instagram}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  title="Instagram"
  className="inline-flex h-12 w-12 items-center justify-center rounded hover:bg-white/5 transition"
>
  <svg viewBox="0 0 256 256" aria-hidden="true" className="block h-8 w-8">
    <rect
      x="24"
      y="24"
      width="208"
      height="208"
      rx="56"
      ry="56"
      fill="none"
      stroke="currentColor"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="128"
      cy="128"
      r="50"
      fill="none"
      stroke="currentColor"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="196" cy="68" r="12" fill="currentColor" />
  </svg>
</a>
            ) : null}

            {SITE.email ? (
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex h-9 items-center font-medium text-slate-100 hover:underline whitespace-nowrap leading-none"
              >
                {SITE.email}
              </a>
            ) : null}
          </div>
        )}
      </Container>

      {/* poistettu border-t */}
      <div>
        <Container className="py-3 text-xs text-slate-400 flex items-center justify-between">
  <span>
    © {year} {T.brand}. {isEN ? "All rights reserved." : "Kaikki oikeudet pidätetään."}
  </span>

  <div className="flex items-center gap-4">
    <Link href="/terms" className="hover:underline text-slate-200">
      {isEN ? "Terms" : "Käyttöehdot"}
    </Link>

    <Link href="/data-deletion" className="hover:underline text-slate-200">
      {isEN ? "Data deletion" : "Tietojen poisto"}
    </Link>

    <a href="#top" className="hover:underline text-slate-200 whitespace-nowrap">
      {isEN ? "Back to top ↑" : "Takaisin ylös ↑"}
    </a>
  </div>
</Container>

      </div>
    </footer>
  );
}
