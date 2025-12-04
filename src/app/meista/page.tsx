import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Minusta – Leo Digital",
  description:
    "Leo Digital on yhden hengen digikumppani. Kuka on Leo? Ja mikä on Leodigital?",
};

export default function MeistaPage() {
  return (
    <main className="pb-20">
      {/* Hero – taustakuva */}
      <section id="hero" className="relative overflow-hidden border-b scroll-mt-24">
        <Image
          src="/services/about-hero.jpg"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="absolute inset-0 -z-10 object-cover object-center pointer-events-none"
        />
        <div
          className="absolute inset-0 z-0 bg-black/60 pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10 py-16 min-h-[50vh] flex flex-col items-start justify-center text-left text-white">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white/70">
              Leo Apell
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              LeoDigital
            </h1>
            <p className="mt-3 text-white/90">
              Olen Leo Apell, Leo Digitalin perustaja ja tekijä. Autan pieniä ja
              keskisuuria yrityksiä saamaan enemmän irti digistä selkeiden
              verkkosivujen ja älykkäiden asiakaspalvelubottien avulla – ilman
              turhaa monimutkaisuutta.
            </p>
            <div className="mt-6">
              <Link
                href="/#yhteys"
                className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800"
              >
                Ota yhteyttä
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Sisältö */}
      <section id="content" className="py-12 scroll-mt-24">
        <Container>
          {/* Profiilikuva */}
          <div className="flex justify-center mb-8">
            <div className="relative h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
              <Image
                src="/leo-profile.jpg" // vaihda oman kuvan polkuun
                alt="Leo Apell, Leo Digitalin perustaja."
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div
            className="prose prose-slate md:prose-lg mx-auto max-w-3xl
                       text-center
                       prose-ul:list-inside prose-ol:list-inside
                       [&_h2]:mt-10 md:[&_h2]:mt-14 [&_h2]:mb-2"
          >
            <p>
              Olen yhden hengen digitoimisto, joka suunnittelee ja toteuttaa
              selkeitä, nopeita ja myyntiä tukevia verkkosivuja sekä
              asiakaspalvelubotteja. Tykkään tehdä asiat suoraviivaisesti:
              kuuntelen tavoitteet, ehdotan ratkaisun selkeällä hinnalla ja
              vien työn maaliin ilman yllätyksiä. Tavoitteeni on, että
              yrityksesi ydinviesti avautuu sekunneissa ja yhteydenotto on
              helppoa kaikilla laitteilla.
            </p>

            <h2 className="font-semibold">Miten työskentelen</h2>
            <p>
              Projektit alkavat lyhyellä kartoituksella, jonka perusteella
              saat luonnoksen, karkean rakenteen, aikatauluarvion ja
              hintahaarukan. Kun suunta on selvä, tarkennan sisällöt ja
              rakenteen ja sovitaan yhdessä mitä tehdään nyt ja mitä voidaan
              jättää myöhempään.
            </p>
            <p>
              Toteutuksessa hyödynnän moderneja teknologioita (esim. Next.js ja
              Tailwind), jotta lopputulos on kevyt, nopea ja helposti
              ylläpidettävä. Julkaisun yhteydessä autan domainin, suojauksen ja
              perus-SEO:n kanssa, jotta sivut ovat heti käyttövalmiit.
            </p>

            <h2 className="font-semibold">Asiakaspalvelubotit</h2>
            <p>
              Rakennan botit yrityksesi omaan tietoon pohjautuen, jotta
              vastausten sävy ja sisältö pysyvät brändisi mukaisina. Botti
              täydentää sivuja vastaamalla toistuviin kysymyksiin heti,
              ohjaamalla oikeaan palveluun ja keräämällä liidit talteen myös
              silloin, kun kukaan ei istu koneella.
            </p>
            <p>
              Botti voidaan liittää verkkosivuille, WhatsAppiin tai muuhun
              kanavaan, jota asiakkaasi oikeasti käyttävät. Käytän
              kustannustehokkaita ratkaisuja, jotta jatkuvat kulut pysyvät
              järkevinä myös pienemmillä yrityksillä.
            </p>

            <h2 className="font-semibold">Hinnoittelu & toimitus</h2>
            <p>
              Pidän viestinnän ja hinnoittelun selkeänä. Verkkosivut ja
              botit hinnoitellaan aina sivujen laajuuden ja sisällön mukaan.
              Useimmat projektit liikkuvat muutaman sadan euron haarukassa, ja
              tarkka hinta sovitaan etukäteen ennen työn aloitusta.
            </p>
            <p>
              Julkaisun jälkeen saat selkeät ohjeet pienten muutosten tekemiseen
              itse, ja autan mielelläni myös myöhemmin, kun tulee tarvetta
              päivittää sisältöjä tai laajentaa sivustoa.
            </p>

      <h2 className="font-semibold">Seuraava askel</h2>
      <p>
        Jos haluat nopean arvion ja mallinäkymän, lähetä viesti sivun lomakkeella tai WhatsAppissa.
        Palaamme pikaisesti ja toimitamme sinulle selkeän ehdotuksen aikatauluineen ja hintoineen.
      </p>
    </div>

   <div className="mt-8 text-center">
  <Link
    href="/#yhteys"
    className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
  >
    Pyydä nopea arvio
  </Link>
</div>
  </Container>
</section>

    </main>
  );
}
