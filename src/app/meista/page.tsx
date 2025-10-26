import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meistä – Leo Digital",
  description:
    "Leo Digital on ketterä digikumppani: verkkosivut, asiakaspalvelubotit ja verkkokaupat. Selkeä prosessi, kiinteä hinta ja moderni toteutus.",
};

export default function MeistaPage() {
  return (
    <main className="pb-20">
      {/* Hero – taustakuva, sama tyyli kuin botilla */}
      <section id="hero" className="relative overflow-hidden border-b scroll-mt-24">
        <Image
          src="/services/about-hero.jpg" // päivitetty taustakuva
          alt=""
          fill
          priority
          aria-hidden="true"
          className="absolute inset-0 -z-10 object-cover object-center pointer-events-none"
        />
            <div className="absolute inset-0 z-0 bg-black/60 pointer-events-none" aria-hidden="true" />

        <Container className="relative z-10 py-16 min-h-[50vh] flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-extrabold">Meistä</h1>
          <p className="mt-3 max-w-3xl text-white/90">
            Pieni ja ketterä digitiimi, joka suunnittelee ja toteuttaa selkeitä, nopeita ja myyntiä
            tukevia verkkosivuja sekä älykkäitä asiakaspalvelubotteja – ilman yllätyksiä.
          </p>
          <div className="mt-6">
            <Link
                href="/#yhteys"
               className="rounded-md px-5 py-2.5 text-white bg-slate-900 hover:bg-slate-800">
                Ota yhteyttä
            </Link>
          </div>
        </Container>
      </section>

      {/* Sisältö – tiiviisti jäsenneltynä, ilman aiempien osioiden toistoa */}
      <section id="content" className="py-12 scroll-mt-24">
  <Container>
<div
  className="prose prose-slate md:prose-lg mx-auto max-w-3xl
             text-center                 /* kaikki teksti keskelle */
             prose-ul:list-inside prose-ol:list-inside
             [&_h2]:mt-10 md:[&_h2]:mt-14 [&_h2]:mb-2"
>

      <p>
        Olemme pieni ja ketterä digitiimi, joka suunnittelee ja toteuttaa selkeitä, nopeita ja
        myyntiä tukevia verkkosivuja sekä älykkäitä asiakaspalvelubotteja. Teemme asiat
        suoraviivaisesti: kuuntelemme tavoitteet, ehdotamme ratkaisun kiinteällä hinnalla ja viemme
        työn maaliin ilman yllätyksiä. Tavoitteemme on, että yrityksesi ydinviesti avautuu
        sekunneissa ja yhteydenotto on helppoa kaikilla laitteilla.
      </p>

      <h2 className="font-semibold">Miten etenemme</h2>
      <p>
        Projektit alkavat lyhyellä kartoituksella, jonka perusteella saat luonnoksen, aikataulun ja
        kokonaishinnan. Toteutuksessa hyödynnämme moderneja teknologioita (esim. Next.js ja
        Tailwind), jotta lopputulos on kevyt, nopea ja helposti ylläpidettävä.
      </p>
      <p>
        Julkaisun yhteydessä hoidamme domainin, suojauksen ja perus-SEO:n sekä tarvittaessa
        analytiikan, jotta näet mistä kävijät tulevat ja mihin he klikkaavat. Monikielisyys,
        tietosuoja ja lomakkeiden turvallinen käsittely kuuluvat pakettiin.
      </p>

      <h2 className="font-semibold">Asiakaspalvelubotit</h2>
      <p>
        Rakennamme botit yrityksesi omaan tietoon pohjautuen, jotta vastausten sävy pysyy brändisi
        mukaisena ja tieto on luotettavaa. Botti täydentää sivuja vastaamalla toistuviin kysymyksiin
        välittömästi, ohjaamalla oikeaan palveluun ja keräämällä liidit talteen myös silloin, kun
        kukaan ei päivystä chatissa.
      </p>

      <h2 className="font-semibold">Hinnoittelu & toimitus</h2>
      <p>
        Pidämme viestinnän ja hinnoittelun selkeänä. Perussivustot valmistuvat tyypillisesti nopeasti
        lähtötiedoista riippuen, ja hinnat pysyvät järkevinä: useimmat projektit sijoittuvat noin
        <strong> 249–600 €</strong> -haarukkaan sisällön laajuuden mukaan. Kevyet verkkokaupat ja
        WhatsApp- tai sivubotit toteutamme erillisellä tarjouksella.
      </p>
      <p>
        Julkaisun jälkeen saat selkeät ohjeet pienten muutosten tekemiseen itse, ja autamme jatkossa
        ketterästi, kun tarvetta tulee.
      </p>

      <h2 className="font-semibold">Seuraava askel</h2>
      <p>
        Jos haluat nopean arvion ja mallinäkymän, lähetä viesti sivun lomakkeella tai WhatsAppissa.
        Palaamme pikaisesti ja toimitamme sinulle selkeän ehdotuksen aikatauluineen ja hintoineen.
      </p>
    </div>

<section id="privacy">
  <h2>Tietosuojakäytäntö</h2>
  <p>Päivitetty: 26.10.2025</p>
  <p>Keräämme lomakkeella nimen, sähköpostin ja puhelinnumeron tarjouksen tekemistä ja yhteydenpitoa varten. Emme myy tai luovuta tietoja kolmansille osapuolille. Säilytämme tiedot enintään 12 kk tai kunnes pyydät poistamista.</p>
  <p>Oikeutesi: tarkastaa, oikaista ja pyytää poistamista. Yhteys: leo@leodigital.fi • WhatsApp +358 452031377.</p>
</section>

    
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
