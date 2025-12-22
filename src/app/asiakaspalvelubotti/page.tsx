import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import ContactForm from "@/components/contact1";

export const metadata: Metadata = {
  title: "Asiakaspalvelubotti – Leo Digital",
  description:
    "Älykäs asiakaspalvelubotti WhatsAppiin ja verkkosivulle. Hinnoittelu aloitusmaksu + kuukausimaksu: Start 590 € + 89 €/kk, Kasvu 1 100 € + 89 €/kk, Pro 1 990 € + 199 €/kk. WhatsApp Coexistence saatavilla lisäosana.",
};

const badges = ["WhatsApp tai verkkosivu", "2 viikon ilmainen testijakso"];

const highlights = [
  {
    title: "Vastaa 24/7",
    text: "Asiakkaat saavat vastaukset heti – myös iltaisin ja viikonloppuisin.",
  },
  {
    title: "Vähemmän toistoa",
    text: "Botti hoitaa yleisimmät kysymykset, joten sinä keskityt tärkeimpiin tapauksiin.",
  },
  {
    title: "Luotettava",
    text: "Botti vastaa vain yrityksesi omiin tietoihin ja faktoihin pohjautuen. Sen sävy on kohtelias ja siisti.",
  },
];

const features = [
  {
    title: "FAQ ensin, tekoäly tukena",
    text: "Botti vastaa ensisijaisesti yrityksesi omiin tietoihin pohjautuen ja käyttää tekoälyä vain täydentämään ja muotoilemaan vastauksen selkeäksi.",
  },
  {
    title: "Ymmärtää oikeaa kieltä",
    text: "Kirjoitusvirheet, puhekieli, murteet ja lyhyet kysymykset eivät kaada keskustelua.",
  },
  {
    title: "Ohjaa ihmiselle fiksusti",
    text: "Kun tilanne on epäselvä tai vaatii henkilökohtaista käsittelyä, botti ohjaa asiakkaan oikeaan kanavaan.",
  },
  {
    title: "Monikielinen tarvittaessa",
    text: "Voimme määrittää botin tunnistamaan asiakkaan kielen ja vastaamaan sujuvasti usealla kielellä.",
  },
];

const coexistenceHowItWorks = {
  title: "WhatsApp Coexistence -toimintamalli käytännössä",
  text: "Kun haluat, että botti ja ihminen palvelevat samalla WhatsApp-numerolla, voidaan ottaa käyttöön Coexistence-malli. Botti vastaa automaattisesti sovittuina aikoina ja ohjautuu pois keskustelusta, jos se ei ole riittävän varma vastauksesta tai jos ihminen ottaa keskustelun haltuun. Tarvittaessa botti voi ottaa keskustelun takaisin haltuun sovitun ajan jälkeen. Tämä mahdollistaa sujuvan asiakaspalvelun ilman numeron vaihtamista tai asiakaspalvelun siirtämistä toiseen kanavaan.",
};

const useCases = [
  "Matkailu & aktiviteetit",
  "Palveluyritykset",
  "Verkkokaupat",
  "Autokoulut",
  "Paikalliset kuluttajapalvelut",
  "B2B-palvelut",
];

const exampleQs = [
  "Paljonko tämä maksaa?",
  "Milloin on vapaita aikoja?",
  "Miten varaus / peruutus toimii?",
  "Missä tapaaminen on?",
  "Kuinka nopeasti toimitatte?",
  "Miten saan yhteyden asiakaspalveluun?",
];

const included = [
  "Botin suunnittelu ja toteutus (Node.js + OpenAI)",
  "FAQ-vastauslogiikka + älykäs fallback",
  "Kanavaintegraatio valitun paketin mukaan",
  "Verkkosivuchatin ulkoasun räätälöinti brändiin",
  "Meta Business Manager -prosessin avustus (WhatsApp)",
  "Ohjeet ja käyttöönotto",
  "Toimitus omalle serverille tai kehityspalvelimelle",
  "1 testikierros + viimeistely",
];

const pricingTiers = [
  {
    name: "Start",
    badge: "Helppo aloitus",
    setup: "590 €",
    monthly: "89 € / kk",
    summary: "1 kanava, perus-FAQ ja kevyt ylläpito",
    bullets: [
      "1 kanava (WhatsApp tai verkkosivu)",
      "Perus-FAQ + rajaukset",
      "Brändin mukainen sävy",
      "Kevyt ylläpito ja sisällön päivitykset",
    ],
  },
  {
    name: "Kasvu",
    badge: "Suosittu valinta",
    setup: "1 100 €",
    monthly: "89 € / kk",
    summary: "2 kanavaa, laajempi räätälöinti ja ylläpito",
    bullets: [
      "2 kanavaa (WhatsApp + verkkosivu)",
      "Laajempi tietopohja",
      "Tarkemmat käyttösäännöt",
      "Säännöllisempi ylläpito",
    ],
  },
  {
    name: "Pro",
    badge: "Vaativaan käyttöön",
    setup: "1990 €",
    monthly: "199 € / kk",
    summary: "Monikanava, laajemmat ominaisuudet ja prioriteettituki",
    bullets: [
      "Monikanavainen kokonaisuus",
      "Laajemmat ominaisuudet",
      "Prioriteettituki",
      "Sovittavissa integraatioita",
    ],
  },
];

const addons = [
  {
    name: "WhatsApp Coexistence -lisäosa",
    setup: "+ 390 €",
    monthly: "+ 49 € / kk",
    summary:
      "Sama numero ihmiselle ja botille, AUTO/HUMAN-tilat, työaikalogiikka ja turvallinen siirto ihmiselle.",
    bullets: [
      "Ihminen ja botti samalla numerolla",
      "AUTO/HUMAN-tilat",
      "Työaikalogiikka",
      "Siirto ihmiselle kun botti ei ole varma",
      "Keskustelun takaisinotto sovitun viiveen jälkeen",
    ],
  },
];

const faq = [
  {
    q: "Onko tämä perinteinen nappibotti?",
    a: "Ei. Tämä on moderni tekoälyä hyödyntävä botti, joka vastaa luonnollisesti ja hyödyntää yrityksesi omaa tietopohjaa.",
  },
  {
    q: "Voiko botin äänensävyä muokata?",
    a: "Kyllä. Rakennamme botin viestintätyylin brändisi mukaiseksi – rento, asiallinen tai myyvä.",
  },
  {
    q: "Mitä jos botti ei ole varma vastauksesta?",
    a: "Silloin se ohjaa asiakkaan ihmiselle tai oikeaan kanavaan. Tarkoitus on minimoida arvailu.",
  },
  {
    q: "Toimiiko tämä myös verkkosivulla?",
    a: "Kyllä. Botti voidaan toteuttaa verkkosivulle, WhatsAppiin tai molempiin paketin mukaan.",
  },
];

const card =
  "rounded-2xl border border-white/20 bg-white/[0.10] backdrop-blur p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]";

const softCard =
  "rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-white pb-20">
      {/* HERO */}
      <section id="hero" className="relative isolate scroll-mt-24">
        <Image
          src="/services/asiakaspalvelubotti-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
          className="absolute inset-0 z-0 object-cover object-center pointer-events-none select-none opacity-80"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/55 via-zinc-950/35 to-zinc-950/70 pointer-events-none"
        />

        {/* subtle accent glow */}
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),rgba(217,70,239,0.10),transparent_60%)] blur-2xl"
        />

        <Container className="relative z-20 py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
                <span className="text-sky-300">Asiakaspalvelubotti</span>, joka
                vastaa <span className="text-sky-300">24/7</span> yrityksesi
                omilla tiedoilla
              </h1>

              <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
                Moderni WhatsApp- ja verkkosivubotti, joka vähentää toistuvaa
                asiakaspalvelutyötä, parantaa vastausnopeutta ja näyttää
                yrityksesi yhtä ammattimaiselta kuin parhaat isot brändit.
              </p>

             

              {/* Huom: jätetty ennalleen kuten annoit (näkyy vasta md->), ettei rikota ulkoasua */}
              <div className="mt-6 hidden md:flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#yhteys"
                  className="rounded-xl px-5 py-3 text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:opacity-95 text-center font-semibold shadow"
                >
                  Pyydä demo
                </Link>
                <Link
                  href="#hinnoittelu"
                  className="rounded-xl px-5 py-3 border border-white/15 bg-white/[0.04] hover:bg-white/10 text-white text-center font-semibold"
                >
                  Katso hinnoittelu
                </Link>
              </div>

              <div className="mt-7 inline-flex w-full sm:w-auto items-center justify-between sm:justify-start gap-3 rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3">
                <div className="text-sm text-white/75">Aloitus + kuukausi</div>
                <div className="text-lg font-extrabold text-white">
                  590 € + 89 € / kk
                </div>
                <div className="text-xs text-white/70">Start-paketti</div>
              </div>
            </div>

            {/* Right: highlight cards */}
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {highlights.map((h) => (
                  <div key={h.title} className={card}>
                    <div className="text-lg font-bold text-white">{h.title}</div>
                    <p className="mt-2 text-white/75">{h.text}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/[0.05] bg-gradient-to-br from-indigo-500/20 via-white/[0.05] to-fuchsia-500/14 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]">
                <div className="text-sm text-white/75">Tuki</div>
                <div className="mt-1 text-xl font-bold text-white">
                  Rakennetaan yrityksellesi botti, joka oikeasti auttaa.
                </div>
                <p className="mt-2 text-white/75">
                  Jatkuva kehitys ja ylläpito sisältyy kaikkiin paketteihin. Se
                  takaa että botti on kokoajan ajantasalla.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* OMINAISUUDET */}
      <section
        id="miten"
        className="py-12 sm:py-14 scroll-mt-24 border-t border-white/10"
      >
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Miten botti toimii käytännössä?
            </h2>
            <p className="mt-2 text-white/70">
              Selkeä logiikka, joka pitää vastaukset luotettavina ja brändisi
              mukaisina.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className={softCard}>
                <div className="text-lg font-bold text-white">{f.title}</div>
                <p className="mt-2 text-white/75">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="text-lg font-bold text-white">
              {coexistenceHowItWorks.title}
            </div>
            <p className="mt-2 text-white/75">{coexistenceHowItWorks.text}</p>
          </div>
        </Container>
      </section>

      {/* KENELLE SOPII */}
      <section
        id="kenelle"
        className="py-12 sm:py-14 scroll-mt-24 border-t border-white/10"
      >
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Kenelle tämä sopii?
          </h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            Jos saat toistuvia kysymyksiä tai sesonki ruuhkauttaa viestit, tämä
            on todennäköisesti yksi nopeimmista ROI-investoinneista.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {useCases.map((u) => (
              <span
                key={u}
                className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/90"
              >
                {u}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ESIMERKKIKYSYMYKSET */}
      <section
        id="esimerkit"
        className="py-12 sm:py-14 scroll-mt-24 border-t border-white/10"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Tyypillisiä kysymyksiä, jotka botti hoitaa
              </h2>
              <p className="mt-2 text-white/70">
                Näillä botti alkaa säästää aikaa heti ensimmäisestä päivästä.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <ul className="space-y-2 text-white/80">
                {exampleQs.map((q) => (
                  <li key={q} className="flex gap-2">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* MITÄ SAAT */}
      <section
        id="paketti"
        className="py-12 sm:py-14 scroll-mt-24 border-t border-white/10"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Mitä palveluun sisältyy
              </h2>
              <p className="mt-2 text-white/70">
                Sisältö ja kanavat määräytyvät valitsemasi paketin mukaan.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <ul className="space-y-2 text-white/80">
                {included.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* HINNOITTELU */}
      <section
        id="hinnoittelu"
        className="py-14 scroll-mt-24 border-t border-white/10"
      >
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Hinnoittelu
            </h2>
            <p className="mt-2 text-white/70">
              Hinnoittelu on aloitusmaksu + kuukausimaksu. Verkkosivubotti ja
              WhatsApp-botti voidaan toteuttaa erikseen tai osana samaa
              kokonaisuutta.
            </p>
          </div>

          {/* Mobile: swipe cards. Desktop: grid. */}
          <div className="mt-8 -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
            {pricingTiers.map((p) => (
              <div
                key={p.name}
                className="min-w-[85%] snap-center rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.06)] md:min-w-0"
              >
                <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                  {p.badge}
                </div>

                <h3 className="mt-4 text-2xl font-bold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-white/70">{p.summary}</p>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs font-semibold text-white/70">
                      Aloitus
                    </div>
                    <div className="text-2xl font-extrabold text-white">
                      {p.setup}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs font-semibold text-white/70">
                      Kuukausi
                    </div>
                    <div className="text-xl font-bold text-white">
                      {p.monthly}
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-1 text-sm text-white/80">
                  {p.bullets.map((b) => (
                    <div key={b}>• {b}</div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/#yhteys"
                    className="rounded-xl px-5 py-3 text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:opacity-95 text-center font-semibold block"
                  >
                    Pyydä demo
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Coexistence-lisäosa */}
          <div className="mt-8">
            {addons.map((a) => (
              <div
                key={a.name}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="max-w-2xl">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {a.name}
                    </h3>
                    <p className="mt-2 text-white/75 text-sm">{a.summary}</p>
                    <div className="mt-4 grid gap-2 text-sm text-white/80">
                      {a.bullets.map((b) => (
                        <div key={b}>• {b}</div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full lg:w-auto lg:min-w-[260px]">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-xs font-semibold text-white/70">
                        Aloituslisä
                      </div>
                      <div className="text-2xl font-extrabold text-white">
                        {a.setup}
                      </div>
                    </div>
                    <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-xs font-semibold text-white/70">
                        Kuukausilisä
                      </div>
                      <div className="text-xl font-bold text-white">
                        {a.monthly}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 scroll-mt-24 border-t border-white/10">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Usein kysytyt
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((f) => (
              <div key={f.q} className={softCard}>
                <div className="font-bold text-white">{f.q}</div>
                <p className="mt-2 text-white/75">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* LOPPU CTA + LOMAKE */}
      <section id="cta" className="py-16 scroll-mt-24 border-t border-white/10">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/15 via-white/[0.04] to-fuchsia-500/10 px-6 sm:px-8 py-10 sm:py-12 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Haluatko nähdä demon juuri sinun toimialallesi?
                </h2>
                <p className="mt-2 text-white/75">
                  Pyydä ilmainen 2 viikon kokeilujakso ja katso miten
                  asiakaspalvelubottini auttaa juuri sinun yritystä.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <Link
                  href="#yhteys"
                  className="rounded-xl px-6 py-3 bg-white text-zinc-950 hover:bg-zinc-100 text-center font-semibold"
                >
                  Pyydä demo
                </Link>
                <Link
                  href="/"
                  className="rounded-xl px-6 py-3 border border-white/15 bg-white/[0.04] hover:bg-white/10 text-center font-semibold text-white"
                >
                  Takaisin etusivulle
                </Link>
              </div>

              {/* Lomake samaan laatikkoon (yksi ainoa #yhteys-ankkuri) */}
              <div id="yhteys" className="lg:col-span-2 scroll-mt-24">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
