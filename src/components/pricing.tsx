"use client";





import { PRICING } from "@/lib/data";
import { usePathname } from "next/navigation";
import { PRICING_EN } from "@/lib/data.en";

type Plan = (typeof PRICING)[number] & { featured?: boolean };



function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
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
        ? "Clear, affordable packages — tailored to your needs."
        : "Verkkosivut ja verkkokaupat voidaan toteuttaa todella halvalla riippuen sivun sisällöstä ja laajuudesta. Kaikki paketit räätälöidään asikkaan tarpeiden mukaan. Kaikkiin paketteihin sisältyy 1 ilmainen korjauskierros."}
      </p>


      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((t) => (


          <div
            key={t.name}
       className={cn(
  "rounded-xl border bg-white p-6 shadow-sm flex flex-col [&:nth-child(2)]:ring-0 [&:nth-child(2)_a]:bg-transparent [&:nth-child(2)_a]:text-slate-900 [&:nth-child(2)_a]:border [&:nth-child(2)_a]:border-slate-300 [&:nth-child(2)_a]:hover:bg-slate-50",
  t.featured && "ring-2 ring-slate-900"
)}

          >
            <div className="flex items-end justify-between">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="text-right">
                <div className="text-2xl font-bold">{t.price}</div>
                <div className="text-xs text-slate-500">/{t.period}</div>
              </div>
            </div>
            <ul className="mt-4 space-y-1 text-sm text-slate-700 list-disc list-inside">
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a
              href="#yhteys"
              className={cn(
                "mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium !text-white !bg-blue-600 hover:!bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 !border-0",
                t.featured
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "border border-slate-300 hover:bg-slate-50"
              )}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
