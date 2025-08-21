import Container from "./container";
import { SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* TAUSTAVIDEO */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* LIILA GRADIENTTI */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(168,85,247,0.15),rgba(255,255,255,0))]" />

      {/* TUMMA OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-black/40" />

      {/* SISÄLTÖ (→ teksti valkoiseksi) */}
      <Container className="relative z-30 pt-16 sm:pt-24 pb-12 sm:pb-20 text-center text-white">
        <span className="inline-block rounded-full border border-white/60 bg-black/20 px-3 py-1 text-xs">
          {SITE.tagline}
        </span>
        <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight">
          Tee verkkosivuistasi kasvun moottori
        </h1>
        <p className="mt-4 text-white/85 max-w-2xl mx-auto">
          Suunnittelemme, toteutamme ja optimoimme sivut, jotka tuovat liidejä ja myyntiä –
          ilman monimutkaisuutta. Sekä muut digitaaliset ratkaisut!
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#yhteys"
            className="rounded-md px-5 py-2.5 text-white bg-slate-900 hover:bg-slate-800"
          >
            Pyydä tarjous
          </a>
        </div>
        <p className="mt-6 text-sm text-white/70">
          {[SITE.phone, SITE.email].filter(Boolean).join(" · ")}
        </p>
      </Container>
    </section>
  );
}
