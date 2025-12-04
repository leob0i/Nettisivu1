"use client";

import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/data";
import { usePathname } from "next/navigation";
import { SERVICES_EN } from "@/lib/data.en";

// Paikallinen tyyppi: lisätään optionaalinen href/img
type Service = (typeof SERVICES)[number] & {
  href?: string;
  img?: string;
};

export default function Services() {
  const pathname = usePathname() || "/";
  const isEN = pathname === "/en" || pathname.startsWith("/en/");
  const DATA = isEN ? SERVICES_EN : SERVICES;

const cards: Service[] = (DATA as Service[]).slice(0, 2);



  return (
    <div>
       <h2 className="text-2xl sm:text-3xl font-bold text-center">
  {isEN ? "Websites & customer service bots" : "Verkkosivut ja asiakaspalvelubotit"}
</h2>

       <p className="mt-2 text-slate-600 max-w-2xl text-center mx-auto">
  {isEN
    ? "I focus on two things: modern websites and smart customer service bots that bring real enquiries."
    : "Keskityn kahteen asiaan: moderneihin verkkosivuihin ja älykkäisiin asiakaspalvelubotteihin, jotka tuovat oikeita yhteydenottoja."}
</p>


      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {cards.map((s) => {
          // VAIN Asiakaspalvelubotti-korttiin eri teksti
          const btnLabel = (() => {
          const isBot =
          s.title === "Asiakaspalvelubotti" || s.title === "Customer Service Bot";
          if (isEN) return isBot ? "Learn more" : "Ask more!";
          return isBot ? "Lue lisää" : "Kysy lisää!";
          })();

          return (
            <article key={s.title} className="relative overflow-hidden rounded-2xl border shadow-sm">
              {/* Taustakuva */}
              <div className="relative !h-[280px] md:!h-[320px]">
                {s.img ? (
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(min-width:1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(15,23,42,0.2),rgba(2,6,23,0.6))]" />
                )}
                {/* Tumma overlay + kevyt liila sävy */}
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(124,58,237,0.16),rgba(0,0,0,0))]" />
              </div>

              {/* Tekstit + bulletit + CTA (ankkuroitu keskelle pystysuunnassa) */}
              <div className="pointer-events-none absolute inset-0 flex items-center">
                <div className="m-6 md:m-8 max-w-prose text-white">
                  <h3 className="text-2xl font-semibold drop-shadow-sm">{s.title}</h3>
                  <p className="mt-3 text-white/90">{s.desc}</p>

                  {Array.isArray(s.points) && s.points.length > 0 && (
                    <ul className="mt-3 space-y-1 text-sm text-white/90 list-disc list-inside">
                      {s.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6">
                    <Link
                      href={s.href ?? "/#yhteys"}
                      className="pointer-events-auto inline-flex items-center justify-center rounded-md border border-white/70 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                    >
                      {btnLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
