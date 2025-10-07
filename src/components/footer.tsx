"use client";

import Container from "./container";
import { SITE } from "@/lib/site";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE_EN } from "@/lib/site.en";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname() || "/";
  const isEN = pathname === "/en" || pathname.startsWith("/en/");
  const T = isEN ? SITE_EN : SITE; // T = kielikohtainen SITE

  return (
    <footer className="mt-16 bg-black text-slate-200 border-t border-white/10">
      <Container className="py-6">
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
                {SITE.email && (
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-medium text-slate-100 hover:underline whitespace-nowrap"
                  >
                    {SITE.email}
                  </a>
                )}
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
      </Container>

      {/* poistettu border-t */}
      <div>
        <Container className="py-3 text-xs text-slate-400 flex items-center justify-between">
          <span>
            © {year} {T.brand}. {isEN ? "All rights reserved." : "Kaikki oikeudet pidätetään."}
          </span>
          <a href="#top" className="hover:underline text-slate-200">
            {isEN ? "Back to top ↑" : "Takaisin ylös ↑"}
          </a>
        </Container>
      </div>
    </footer>
  );
}
