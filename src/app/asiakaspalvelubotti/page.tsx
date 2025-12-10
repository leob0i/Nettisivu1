import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";


export const metadata: Metadata = {
  title: "Asiakaspalvelubotti – Leo Digital",
  description:
    "Älykäs asiakaspalvelubotti WhatsAppiin ja verkkosivulle. Hinnoittelu aloitusmaksu + kuukausimaksu: Start 590 € + 89 €/kk, Kasvu 1 100 € + 189 €/kk, Pro 2 200 € + 350 €/kk. WhatsApp Coexistence saatavilla lisäosana.",
};

const badges = [
  "WhatsApp tai verkkosivu",
  "2 viikon ilmainen testijakso",
];

const highlights = [
  {
    title: "Vastaa 24/7",
    text:
      "Asiakkaat saavat vastaukset heti – myös iltaisin ja viikonloppuisin.",
  },
  {
    title: "Vähemmän toistoa",
    text:
      "Botti hoitaa yleisimmät kysymykset, joten sinä keskityt tärkeimpiin tapauksiin.",
  },
  {
    title: "Kuulostaa brändiltäsi",
    text:
      "Sävy, kieli ja rajaukset rakennetaan yrityksesi tyylin mukaan.",
  },
];

const features = [
  {
    title: "FAQ ensin, tekoäly tukena",
    text:
      "Botti vastaa ensisijaisesti yrityksesi omiin tietoihin pohjautuen ja käyttää tekoälyä vain täydentämään ja muotoilemaan vastauksen selkeäksi.",
  },
  {
    title: "Ymmärtää oikeaa kieltä",
    text:
      "Kirjoitusvirheet, puhekieli, murteet ja lyhyet kysymykset eivät kaada keskustelua.",
  },
  {
    title: "Ohjaa ihmiselle fiksusti",
    text:
      "Kun tilanne on epäselvä tai vaatii henkilökohtaista käsittelyä, botti ohjaa asiakkaan oikeaan kanavaan.",
  },
  {
    title: "Monikielinen tarvittaessa",
    text:
      "Voimme määrittää botin tunnistamaan asiakkaan kielen ja vastaamaan sujuvasti usealla kielellä.",
  },
];

const coexistenceHowItWorks = {
  title: "WhatsApp Coexistence -toimintamalli käytännössä",
  text:
    "Kun haluat, että botti ja ihminen palvelevat samalla WhatsApp-numerolla, voidaan ottaa käyttöön Coexistence-malli. Botti vastaa automaattisesti sovittuina aikoina ja ohjautuu pois keskustelusta, jos se ei ole riittävän varma vastauksesta tai jos ihminen ottaa keskustelun haltuun. Tarvittaessa botti voi ottaa keskustelun takaisin haltuun sovitun ajan jälkeen. Tämä mahdollistaa sujuvan asiakaspalvelun ilman numeron vaihtamista tai asiakaspalvelun siirtämistä toiseen kanavaan.",
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

const steps = [
  {
    step: "1",
    title: "Kartoitus",
    text:
      "Käydään läpi yrityksesi yleisimmät asiakaskysymykset, kanavat ja tavoiteltu sävy.",
  },
  {
    step: "2",
    title: "Tietopohja & logiikka",
    text:
      "Rakennan botin vastaamaan yrityksesi omien tietojen pohjalta ja määritän rajaukset.",
  },
  {
    step: "3",
    title: "Integraatio",
    text:
      "WhatsApp Business API tai verkkosivuchat – tai molemmat – käyttöönotto valmiiksi.",
  },
  {
    step: "4",
    title: "Julkaisu & opastus",
    text:
      "Opastus botin käyttöön, jatkuva kehitys ja ylläpito. ",
  },
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
    a:
      "Ei. Tämä on moderni tekoälyä hyödyntävä botti, joka vastaa luonnollisesti ja hyödyntää yrityksesi omaa tietopohjaa.",
  },
  {
    q: "Voiko botin äänensävyä muokata?",
    a:
      "Kyllä. Rakennamme botin viestintätyylin brändisi mukaiseksi – rento, asiallinen tai myyvä.",
  },
  {
    q: "Mitä jos botti ei ole varma vastauksesta?",
    a:
      "Silloin se ohjaa asiakkaan ihmiselle tai oikeaan kanavaan. Tarkoitus on minimoida arvailu.",
  },
  {
    q: "Toimiiko tämä myös verkkosivulla?",
    a:
      "Kyllä. Botti voidaan toteuttaa verkkosivulle, WhatsAppiin tai molempiin paketin mukaan.",
  },
  
];

export default function Page() {
  return (
    <main className="relative min-h-screen pb-20 overflow-hidden bg-slate-50">
      {/* HERO */}
      <section id="hero" className="relative scroll-mt-24">
        {/* HERON TAUSTAKUVA */}
        <Image
          src="/services/asiakaspalvelubotti-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
          className="
            absolute inset-0 -z-0
            object-cover object-center
            pointer-events-none select-none
          "
        />

        {/* TUMMA OVERLAY – jotta kuva näkyy paremmin ja kontrasti paranee */}
        <div
          aria-hidden="true"
          className="
            absolute inset-0 -z-10
            bg-gradient-to-b
            from-slate-950/90 via-slate-950/70 to-slate-950/50
            pointer-events-none
          "
        />

        <Container className="relative z-20 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-sky-200 bg-white px-3 py-1 text-[10px] sm:text-xs font-semibold text-sky-700 shadow-sm"

                  >
                    {b}
                  </span>
                ))}
              </div>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
  Asiakaspalvelubotti, joka vastaa 24/7{" "}
  <span className="text-sky-200">
    yrityksesi omilla tiedoilla
  </span>
</h1>

<p className="mt-4 text-lg text-slate-100/90 max-w-xl drop-shadow-sm">
  Moderni WhatsApp- ja verkkosivubotti, joka vähentää toistuvaa
  asiakaspalvelutyötä, parantaa vastausnopeutta ja näyttää
  yrityksesi yhtä ammattimaiselta kuin parhaat isot brändit.
</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#yhteys"
                  className="rounded-lg px-5 py-3 text-white bg-sky-900 hover:bg-sky-800 text-center font-semibold shadow"
                >
                  Pyydä demo
                </Link>
                <Link
                  href="#hinnoittelu"
                  className="rounded-lg px-5 py-3 border border-sky-300 hover:bg-white text-sky-900 text-center font-semibold"
                >
                  Katso hinnoittelu
                </Link>
              </div>

              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-sky-200 bg-white px-4 py-3 shadow-sm">
                <div className="text-sm text-sky-700">Aloitus + kuukausi</div>
                <div className="text-lg font-extrabold text-sky-950">
                  590 € + 89 € / kk
                </div>
                <div className="text-xs text-sky-600">
                  Start-paketti
                </div>
              </div>
            </div>

            {/* Oikea puoli: "glass" hyötykortit */}
            <div className="grid gap-4">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl border border-sky-200 bg-white/95 p-6 shadow-sm"
                >
                  <div className="text-lg font-bold text-sky-950">{h.title}</div>
                  <p className="mt-2 text-slate-700">{h.text}</p>
                </div>
              ))}

              <div className="rounded-2xl border border-sky-200 bg-sky-950 p-6 text-white shadow-sm">
                <div className="text-sm opacity-80">Tuki</div>
                <div className="mt-1 text-xl font-bold">
                  Rakennetaan yrityksellesi botti, joka oikeasti auttaa.
                </div>
                <p className="mt-2 text-white/85">
                  Jatkuva kehitys ja ylläpito sisältyy kaikkiin paketteihin. Se takaa että botti on kokoajan ajantasalla.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* OMINAISUUDET */}
      <section id="miten" className="py-12 scroll-mt-24">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-sky-950">
                Miten botti toimii käytännössä?
              </h2>
              <p className="mt-2 text-slate-700">
                Selkeä logiikka, joka pitää vastaukset luotettavina ja brändisi mukaisina.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-sky-200 bg-white/95 p-6 shadow-sm"
              >
                <div className="text-lg font-bold text-sky-950">{f.title}</div>
                <p className="mt-2 text-slate-700">{f.text}</p>
              </div>
            ))}
          </div>

          {/* Coexistence - pitkä laatikko muiden alle */}
          <div className="mt-6 rounded-2xl border border-sky-200 bg-white/95 p-6 shadow-sm">
            <div className="text-lg font-bold text-sky-950">
              {coexistenceHowItWorks.title}
            </div>
            <p className="mt-2 text-slate-700">
              {coexistenceHowItWorks.text}
            </p>
          </div>
        </Container>
      </section>

      {/* KENELLE SOPII */}
      <section id="kenelle" className="py-12 scroll-mt-24">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-950">
            Kenelle tämä sopii?
          </h2>
          <p className="mt-2 text-slate-700">
            Jos saat toistuvia kysymyksiä tai sesonki ruuhkauttaa viestit, tämä
            on todennäköisesti yksi nopeimmista ROI-investoinneista.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {useCases.map((u) => (
              <span
                key={u}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-sky-700 border border-sky-200 shadow-sm"
              >
                {u}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ESIMERKKIKYSYMYKSET */}
      <section id="esimerkit" className="py-12 scroll-mt-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-sky-950">
                Tyypillisiä kysymyksiä, jotka botti hoitaa
              </h2>
              <p className="mt-2 text-slate-700">
                Näillä botti alkaa säästää aikaa heti ensimmäisestä päivästä.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-200 bg-white/95 p-6 shadow-sm">
              <ul className="space-y-2 text-slate-700">
                {exampleQs.map((q) => (
                  <li key={q} className="flex gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-400" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* PROSESSI */}
      <section id="prosessi" className="py-12 bg-white/60 backdrop-blur-[2px] scroll-mt-24">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-950">
            Näin projekti etenee
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-sky-200 bg-white/95 p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-sky-600">
                  Vaihe {s.step}
                </div>
                <div className="mt-1 text-lg font-bold text-sky-950">{s.title}</div>
                <p className="mt-2 text-slate-700">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* MITÄ SAAT */}
      <section id="paketti" className="py-12 scroll-mt-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-sky-950">
                Mitä palveluun sisältyy
              </h2>
              <p className="mt-2 text-slate-700">
                Sisältö ja kanavat määräytyvät valitsemasi paketin mukaan.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-200 bg-white/95 p-6 shadow-sm">
              <ul className="space-y-2 text-slate-700">
                {included.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-400" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* HINNOITTELU */}
      <section id="hinnoittelu" className="py-14 bg-white/60 backdrop-blur-[2px] scroll-mt-24">
        <Container>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-950">
              Hinnoittelu
            </h2>
            <p className="mt-2 text-slate-700">
              Hinnoittelu on aloitusmaksu + kuukausimaksu. Verkkosivubotti ja WhatsApp-botti
              voidaan toteuttaa erikseen tai osana samaa kokonaisuutta.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingTiers.map((p) => (
              <div
                key={p.name}
                className="rounded-3xl border border-sky-200 bg-white p-8 shadow-sm"
              >
                <div className="inline-flex rounded-full bg-sky-950 px-3 py-1 text-xs font-semibold text-white">
                  {p.badge}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-sky-950">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {p.summary}
                </p>

                <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50 p-4">
                  <div className="text-xs font-semibold text-sky-600">Aloitus</div>
                  <div className="text-2xl font-extrabold text-sky-950">
                    {p.setup}
                  </div>
                </div>
                <div className="mt-3 rounded-2xl border border-sky-200 bg-sky-50 p-4">
                  <div className="text-xs font-semibold text-sky-600">Kuukausi</div>
                  <div className="text-xl font-bold text-sky-950">
                    {p.monthly}
                  </div>
                </div>

                <div className="mt-5 space-y-1 text-sm text-slate-700">
                  {p.bullets.map((b) => (
                    <div key={b}>• {b}</div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/#yhteys"
                    className="rounded-lg px-5 py-3 text-white bg-sky-900 hover:bg-sky-800 text-center font-semibold block"
                  >
                    Pyydä demo
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Coexistence-lisäosa */}
          <div className="mt-8 grid gap-6 lg:grid-cols-1">
            {addons.map((a) => (
              <div
                key={a.name}
                className="rounded-3xl border border-sky-200 bg-white p-8 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="max-w-2xl">
                    <h3 className="text-xl sm:text-2xl font-bold text-sky-950">
                      {a.name}
                    </h3>
                    <p className="mt-2 text-slate-700 text-sm">
                      {a.summary}
                    </p>

                    <div className="mt-4 grid gap-2 text-sm text-slate-700">
                      {a.bullets.map((b) => (
                        <div key={b}>• {b}</div>
                      ))}
                    </div>
                  </div>

                  <div className="min-w-[240px]">
                    <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
                      <div className="text-xs font-semibold text-sky-600">Aloituslisä</div>
                      <div className="text-2xl font-extrabold text-sky-950">
                        {a.setup}
                      </div>
                    </div>
                    <div className="mt-3 rounded-2xl border border-sky-200 bg-sky-50 p-4">
                      <div className="text-xs font-semibold text-sky-600">Kuukausilisä</div>
                      <div className="text-xl font-bold text-sky-950">
                        {a.monthly}
                      </div>
                    </div>

                    <div className="mt-4">
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 bg-white/60 backdrop-blur-[2px] scroll-mt-24">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-950">
            Usein kysytyt
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-sky-200 bg-white/95 p-6 shadow-sm"
              >
                <div className="font-bold text-sky-950">{f.q}</div>
                <p className="mt-2 text-slate-700">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* LOPPU CTA */}
      <section id="cta" className="py-16 scroll-mt-24">
        <Container>
          <div className="rounded-3xl border border-sky-200 bg-sky-950 px-8 py-12 text-white shadow-sm">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold">
                  Haluatko nähdä demon juuri sinun toimialallesi?
                </h2>
                <p className="mt-2 text-white/85">
                  Pyydä ilmainen 2 viikon kokeilujakso ja katso miten asiakaspalvelubottini auttaa juuri sinun yritystä.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <Link
                  href="/#yhteys"
                  className="rounded-lg px-6 py-3 bg-white text-sky-950 hover:bg-sky-50 text-center font-semibold"
                >
                  Pyydä demo
                </Link>
                <Link
                  href="/"
                  className="rounded-lg px-6 py-3 border border-white/30 hover:bg-white/10 text-center font-semibold"
                >
                  Takaisin etusivulle
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
