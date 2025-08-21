import Container from "./container";
import { SITE } from "@/lib/site";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t bg-white/70 backdrop-blur">
      <Container className="py-6">
        {/* Rivi: logo | kaikki teksti */}
       <div className="grid grid-cols-[44px_1fr] items-center gap-x-4">


          <Image
            src="/logo.png"
            alt={`${SITE.brand} logo`}
            width={44}
            height={44}
            className="shrink-0 rounded"
            priority
          />

          {/* Kaikki teksti logon oikealle puolelle */}
          <div className="min-w-0">
            {/* Ylärivi: brändi vasemmalle, kontaktirivi oikealle (sähköposti viimeisenä -> aivan oikeaan reunaan) */}
            <div className="flex items-center gap-4">
              <div className="font-semibold text-slate-900">{SITE.brand}</div>

              <div className="hidden md:flex items-center gap-4 text-sm text-slate-600 ml-auto">
                {SITE.phone && (
                  <a
                    href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                    className="hover:underline whitespace-nowrap"
                  >
                    {SITE.phone}
                  </a>
                )}
                {SITE.address && <span className="truncate">{SITE.address}</span>}
                {SITE.businessId && <span className="text-slate-500">{SITE.businessId}</span>}
                {SITE.email && (
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-medium text-slate-800 hover:underline whitespace-nowrap"
                  >
                    {SITE.email}
                  </a>
                )}
              </div>
            </div>

            {/* Tagline tiiviinä */}
            <p className="mt-1 text-sm text-slate-600 leading-snug line-clamp-2">
              Autamme yrityksiä kasvamaan modernien verkkosivujen, digimainonnan ja muiden
              digitaalisten ratkaisujen avulla.
            </p>

            {/* Mobiilissa kontaktit alle (tiiviinä) */}
            <div className="mt-2 grid gap-1 text-sm text-slate-600 md:hidden">
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
              {SITE.businessId && <div className="text-slate-500">{SITE.businessId}</div>}
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t">
        <Container className="py-3 text-xs text-slate-500 flex items-center justify-between">
          <span>© {year} {SITE.brand}. Kaikki oikeudet pidätetään.</span>
          <a href="#top" className="hover:underline">Takaisin ylös ↑</a>
        </Container>
      </div>
    </footer>
  );
}
