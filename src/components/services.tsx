"use client";

import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/data";
import { usePathname } from "next/navigation";
import { SERVICES_EN } from "@/lib/data.en";

// Paikallinen tyyppi: lisätään optionaalinen href/img + afterPoints
type Service = (typeof SERVICES)[number] & {
  href?: string;
  img?: string;
  afterPoints?: string; // ✅ pointtien alle tuleva teksti
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
          const isBot =
            s.title === "Asiakaspalvelubotti" || s.title === "Customer Service Bot";

          // ✅ Button label (pyynnön mukaan “Ota yhteyttä” korttiin, joka ei ole botti)
          const btnLabel = isBot
            ? isEN
              ? "Learn more"
              : "Lue lisää"
            : isEN
              ? "Contact"
              : "Ota yhteyttä";

          return (
            <article
              key={s.title}
              className="relative overflow-hidden rounded-2xl border shadow-sm"
            >
              {/* ✅ Tausta + overlayt ABSOLUUTTINA, sisältö normaalina (kortti voi kasvaa) */}
              <div className="absolute inset-0">
                {s.img ? (
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(min-width:1024px) 50vw, 100vw"
                    className="object-cover"
                    priority={false}
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(15,23,42,0.2),rgba(2,6,23,0.6))]" />
                )}

                {/* Tumma overlay + kevyt liila sävy */}
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(124,58,237,0.16),rgba(0,0,0,0))]" />
              </div>

              {/* ✅ Sisältö: flex-col + min height -> nappi pysyy alhaalla oikealla */}
              <div className="relative z-10 p-4 md:p-5 text-white flex flex-col min-h-[350px] md:min-h-[380px]">

                <div>
                  <h3 className="text-2xl font-semibold drop-shadow-sm">{s.title}</h3>
                  <p className="mt-3 text-white/90">{s.desc}</p>

                  {Array.isArray(s.points) && s.points.filter(Boolean).length > 0 && (
                    <ul className="mt-4 space-y-1 text-sm text-white/90 list-disc list-inside">
                      {s.points.filter(Boolean).map((p, idx) => (
                        <li key={`${s.title}-${idx}`}>{p}</li>
                      ))}
                    </ul>
                  )}

                  {/* ✅ Teksti pointtien alle */}
                  {s.afterPoints && (
                    <p className="mt-4 text-sm leading-relaxed text-white/85">
                      {s.afterPoints}
                    </p>
                  )}
                </div>

                {/* ✅ CTA oikeaan alakulmaan */}
                <div className="mt-auto pt-6 flex justify-end">
                  <Link
                    href={s.href ?? "/#yhteys"}
                    className="inline-flex items-center justify-center rounded-md border border-white/70 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                  >
                    {btnLabel}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
