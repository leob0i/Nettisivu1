"use client";

import { PRICING } from "@/lib/data";
import { usePathname } from "next/navigation";
import { PRICING_EN } from "@/lib/data.en";

type Plan = (typeof PRICING)[number] & { featured?: boolean };

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Pilkkoo hinnan: esim. "alk. 399 €" -> { prefix:"alk.", amount:"399", euro:"€" }  */
function splitPrice(p: string) {
  const m = p.match(/^([^\d]*?)\s*(\d[\d\s.,]*)(?:\s*(€))?$/);
  if (!m) return { prefix: "", amount: p.trim(), euro: "" };
  const [, prefix, amount, euro] = m;
  return {
    prefix: prefix?.trim() || "",
    amount: amount?.trim() || "",
    euro: euro || "",
  };
}

export default function Pricing() {
  const pathname = usePathname() || "/";
  const isEN = pathname === "/en" || pathname.startsWith("/en/");
  const DATA = isEN ? PRICING_EN : PRICING;
  const plans: Plan[] = DATA as Plan[];

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-center">
        {isEN ? "Pricing" : "Hinnat"}
      </h2>

      <p className="mt-2 text-slate-600 max-w-2xl text-center mx-auto">
        {isEN
          ? "Websites and customer service bots are always priced based on the scope and content. The prices below are typical starting points for small and medium-sized businesses, and include one free revision round."
          : "Verkkosivut ja asiakaspalvelubotit hinnoitellaan aina sivujen laajuuden ja sisällön mukaan. Alla olevat hinnat ovat tyypillisiä alkaen-esimerkkejä pienille ja keskisuurille yrityksille. Kaikkiin paketteihin sisältyy yksi maksuton korjauskierros."}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((t) => {
          const { prefix, amount, euro } = splitPrice(t.price);

          return (
            <div
              key={t.name}
              className={cn(
                "rounded-xl border bg-white p-6 shadow-sm flex flex-col h-full [&:nth-child(2)]:ring-0 [&:nth-child(2)_a]:bg-transparent [&:nth-child(2)_a]:text-slate-900 [&:nth-child(2)_a]:border [&:nth-child(2)_a]:border-slate-300 [&:nth-child(2)_a]:hover:bg-slate-50",
                t.featured && "ring-2 ring-slate-900"
              )}
            >
              <div className="grid grid-cols-[1fr_160px] gap-4 items-start">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-tight">{t.name}</h3>

                  {/* ✅ Subtitle ei enää kasvata korttia: 1 rivi + tooltip */}
                  {t.subtitle && (
                    <p
                      className="mt-1 text-xs text-slate-600 truncate"
                      title={t.subtitle}
                    >
                      {t.subtitle}
                    </p>
                  )}
                </div>

                <div className="text-right w-[160px]">
                  <div className="flex items-baseline justify-end gap-2">
                    {prefix && <span className="text-sm text-black/60">{prefix}</span>}

                    <span className="whitespace-nowrap">
                      <span className="text-2xl font-bold leading-none">{amount}</span>
                      {euro && (
                        <span className="text-2xl font-bold leading-none">
                          &nbsp;{euro}
                        </span>
                      )}
                    </span>
                  </div>

                  <div className="mt-1 text-xs text-slate-500 whitespace-normal break-words leading-snug">
                    {t.period}
                  </div>
                </div>
              </div>

              <ul className="mt-4 space-y-1 text-sm text-slate-700 list-disc list-inside">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              {t.fineprint && (
                <p className="mt-4 text-xs text-slate-500">{t.fineprint}</p>
              )}

              <a
                href="#yhteys"
                className={cn(
                  "mt-auto pt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium !text-white !bg-blue-600 hover:!bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 !border-0",
                  t.featured
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "border border-slate-300 hover:bg-slate-50"
                )}
              >
                {t.cta}
              </a>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-slate-500 text-center max-w-2xl mx-auto">
        {isEN
          ? "All projects are priced case-by-case, and larger scopes are always quoted separately. Tell me briefly what you need and we’ll find a fair package and clear pricing for both sides."
          : "Kaikki työt toteutetaan tapauskohtaisesti, ja isommat kokonaisuudet hinnoitellaan aina erikseen. Kerro lyhyesti tarpeistasi, niin räätälöidään molemmille fiksu kokonaisuus ja selkeä hinta."}
      </p>
    </div>
  );
}
