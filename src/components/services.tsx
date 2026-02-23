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

  const cards: Service[] = (DATA as Service[]).slice(0, 3);

  return (
    <div>
      <div className="mt-0 grid grid-cols-1 gap-0">
        {cards.map((s) => {
          const isBot =
            s.title === "Asiakaspalvelubotti" || s.title === "Customer Service Bot";

          const isKotisivutYllapito = s.title === "Kotisivut & ylläpito";

          // ✅ Button label (pyynnön mukaan “Ota yhteyttä” korttiin, joka ei ole botti)
          const btnLabel = isBot
            ? isEN
              ? "Learn more"
              : "Lue lisää"
            : isEN
              ? "Contact"
              : "Ota yhteyttä";

          const finalBtnLabel = isKotisivutYllapito
            ? "Lue lisää"
            : btnLabel;

          const finalHref = isKotisivutYllapito
            ? isEN
              ? "/en/palvelutsivu"
              : "/palvelutsivu"
            : s.href ?? "/#yhteys";

          return (
            <article
              key={s.title}
              className="relative overflow-hidden rounded-none border-0 shadow-none border-b border-white/10"
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
              <div className="relative z-10 px-5 sm:px-8 py-8 text-white flex flex-col min-h-[350px] md:min-h-[380px]">
                {/* Tekstialue keskelle + maksimi rivipituus */}
                <div className="flex-1 flex items-center">
                  <div className="w-full max-w-6xl mx-auto">
                    <div className="max-w-prose">
                      <h3 className="text-3xl sm:text-4xl font-semibold drop-shadow-sm">
                        {s.title}
                      </h3>
                      <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed">
                        {s.desc}
                      </p>

                      {Array.isArray(s.points) && s.points.filter(Boolean).length > 0 && (
                        <ul className="mt-5 space-y-2 text-base sm:text-base text-white/90 list-disc list-inside">
                          {s.points.filter(Boolean).map((p, idx) => (
                            <li key={`${s.title}-${idx}`}>{p}</li>
                          ))}
                        </ul>
                      )}

                      {s.afterPoints && (
                        <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/85">
                          {s.afterPoints}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTA: paikka sinisen ympyrän kohdalle (ei afterPointsin sisään) */}
                <Link
                  href={finalHref}
                  className="
    hidden sm:inline-flex
    absolute right-100 top-[85%] -translate-y-1/2
    items-center justify-center
    rounded-md border border-white/70 px-8 py-4
    text-lg font-medium text-white
    hover:bg-white/10
  "
                >
                  {finalBtnLabel}
                </Link>

                {/* Mobile: pidetään CTA siististi tekstin alla */}
                <div className="sm:hidden pt-6">
                  <Link
                    href={finalHref}
                    className="inline-flex items-center justify-center rounded-md border border-white/70 px-6 py-3 text-base font-medium text-white hover:bg-white/10"
                  >
                    {finalBtnLabel}
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