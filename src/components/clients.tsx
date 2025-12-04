"use client";



import Image from "next/image";
import { LOGOS, type ClientLogo } from "@/lib/data";
import { usePathname } from "next/navigation";


export default function Clients() {
  const pathname = usePathname() || "/";  // ✅ hookit aina ensimmäisenä funktion sisällä
  const isEN = pathname === "/en" || pathname.startsWith("/en/");

  if (!LOGOS?.length) return null;       


  return (
    <section aria-labelledby="clients-heading" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
       <div className="space-y-3 text-center">
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
    {isEN ? "Clients" : "Asiakkaat"}
  </p>

  <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
    {isEN ? "Companies that trust my work" : "Yritykset, jotka luottavat osaamiseeni"}
  </h2>

  <p className="mx-auto max-w-2xl text-base text-slate-600">
    {isEN
      ? "I have designed and delivered solutions for the following organizations. The logos represent projects and long-term partnerships."
      : "Olen suunnitellut ja toteuttanut ratkaisuja seuraaville organisaatioille. Logot kertovat toteutetuista projekteista ja pitkäaikaisista kumppanuuksista."}
  </p>
</div>


       {/* Jos vain yksi logo → iso ja keskelle, ilman korttipalkkia */}
{LOGOS.length === 1 ? (
  <div className="mt-8 sm:mt-10">
    <div className="flex items-center justify-center">
      <Image
        src={LOGOS[0].logo}
        alt={`${LOGOS[0].name} logo`}
        width={280}
        height={120}
        className="h-16 w-auto sm:h-20 opacity-90"
        loading="lazy"
        sizes="280px"
      />
    </div>
  </div>
) : (
  /* Muuten: käytä aiempaa ruudukkoa (ilman korttipalkkia) */
  <div className="mt-8 sm:mt-10">
    <ul
      role="list"
      className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
    >
      {LOGOS.map((client: ClientLogo) => (
        <li
          key={client.name}
          className="group flex items-center justify-center rounded-xl border border-transparent bg-slate-50/70 px-4 py-3 transition hover:border-slate-200 hover:bg-white"
          title={client.name}
        >
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            width={160}
            height={80}
            className="h-10 w-auto opacity-80 transition group-hover:opacity-100"
            loading="lazy"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 160px"
          />
        </li>
      ))}
    </ul>
  </div>
)}

      </div>
    </section>
  );
}
