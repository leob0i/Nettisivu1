import { PORTFOLIO } from "@/lib/data";

export default function Portfolio() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold">Referenssit</h2>
      <p className="mt-2 text-slate-600 max-w-2xl">
        Nostoja projekteista, joissa yhdistyvät laatu ja tulokset.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className="group block overflow-hidden rounded-xl border bg-white shadow-sm"
          >
            <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 grid place-items-center text-slate-400">
              <span className="text-sm">placeholder</span>
            </div>
            <div className="p-5">
              <div className="text-xs text-slate-500">{p.tag}</div>
              <div className="mt-1 font-semibold group-hover:underline">{p.title}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
