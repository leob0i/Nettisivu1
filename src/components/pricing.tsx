import { PRICING } from "@/lib/data";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-center">Hinnat</h2>
      <p className="mt-2 text-slate-600 max-w-2xl text-center mx-auto">Verkkosivut ja verkkokaupat voidaan toteuttaa todella halvalla riippuen sivun sisällöstä ja laajuudesta. Mutta yksinkertaisimmillaan hinnat voivat olla todella halpoja!</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRICING.map((t) => (
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
                "mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
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
