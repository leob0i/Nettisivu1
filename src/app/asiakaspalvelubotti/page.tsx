import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Asiakaspalvelubotti – LeoDigital",
  description:
    "Älykäs asiakaspalvelubotti, joka vastaa 24/7, vähentää tukikuormaa ja kasvattaa liidejä.",
};

export default function Page() {
  return (
    <main className="pb-20">
      {/* Hero – jätetään selkeä border-b */}
      <section id="hero" className="relative overflow-hidden border-b scroll-mt-24">
  {/* Taustakuva koko alueelle – EI overlayta */}
  <Image
    src="/services/asiakaspalvelubotti-hero.jpg"
    alt=""
    fill
    priority
    aria-hidden="true"
    className="absolute inset-0 -z-10 object-cover object-center pointer-events-none"
  />

  <Container className="py-16 min-h-[60vh] flex flex-col items-center justify-center text-center text-white">

          <h1 className="text-3xl sm:text-4xl font-extrabold">🤖 Älykäs asiakaspalvelubotti</h1>
          <p className="mt-2 text-lg font-semibold">Avaimet käteen -ratkaisuna yrityksellesi!</p>
          <p className="mt-3 text-white/90 max-w-2xl">
            Tarjoamme yrityksellesi modernin asiakaspalvelubotin, joka toimii WhatsAppissa tai
            verkkosivullanne, juuri teidän tarpeisiinne räätälöitynä! Ja varmasti markkinoiden halvimmalla hinnalla!
          </p>
          <p className="mt-4 text-white/90 max-w-3xl">
            Tämä ei ole perinteinen “tarkoititko tätä?” -tyylinen botti, vaan aidosti älykäs,
            tekoälyyn pohjautuva keskustelija, joka ymmärtää kirjoitusvirheitä, murteita, slangia ja
            monimutkaisia kysymyksiä. Voit jutella Leo Digital bottimme kanssa oikeassa alareunassa sijaitsevassa chat- painikkeesta. 
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#yhteys"
              className="rounded-md px-5 py-2.5 text-white bg-slate-900 hover:bg-slate-800 text-center"
            >
              Pyydä demo
            </Link>
            <Link
              href="#miten"
              className="rounded-md px-5 py-2.5 border border-slate-300 hover:bg-white text-center"
            >
              Katso ominaisuudet
            </Link>
          </div>
        </Container>
      </section>

      {/* Miten botti toimii? – ei viivaa, vain tila */}
      <section id="miten" className="py-10 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">Miten botti toimii?</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Vastata kysymyksiin automaattisesti yrityksesi omiin tietoihin pohjautuen.</li>
            <li>Täydentää tietoa GPT-4o-tekoälyn avulla, kohteliaasti ja luonnollisella kielellä</li>
            <li>
              Tunnistaa puheen sävyjä ja tilanteita, ja ohjata asiakasta oikealle henkilölle tai
              sähköpostiin erikoistilanteissa
            </li>
            <li>Oppia uutta myöhemmin, botti ei ole koskaan “valmis” vaan kehittyvä</li>
            <li>
              Ja kyllä! Voimme asettaa botin monikieliseksi joka tunnistaa automaattisesti asiakkaan
              kielen.
            </li>
          </ul>
        </Container>
      </section>

      {/* Asiakas mukana – kevyt taustaraita erottamaan ilman viivaa */}
      <section id="yhteistyo" className="py-10 bg-slate-50 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">Asiakas mukana kehityksessä alusta alkaen</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>
              Sinä päätät, millainen sävy botilla on – rento, asiallinen, kysyy takaisin?...
            </li>
            <li>
              Kerrot, miten haluat botin käyttäytyvän erikoistilanteissa (esim. ohjaus ihmiselle ja
              miten)
            </li>
            <li>
              Määrittelemme yhdessä, mitä muistia ja tietoa botti oppii – esim. varausehdot,
              aikataulut, peruutukset…
            </li>
          </ul>
          <p className="mt-4 text-slate-700">
            Lopputuloksena saat täysin brändiisi ja asiakaspalvelumalliisi sopivan ratkaisun!
          </p>
        </Container>
      </section>

      {/* Paketti – normaali tausta, ei viivaa */}
      <section id="paketti" className="py-10 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">Mitä kiinteään pakettiin sisältyy</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Botin suunnittelu ja rakentaminen Node.js:llä ja OpenAI GPT-4o:lla</li>
            <li>FAQ-vastauslogiikka + fallback tekoälyyn</li>
            <li>WhatsApp Business API -integraatio (Meta)</li>
            <li>Click-to-chat-linkki ja QR-koodi käyttöön</li>
            <li>Meta Business Manager -prosessin avustus</li>
            <li>Ohjeet ja käyttöönotto</li>
            <li>Käyttövalmis toimitus omalle serverille tai kehityspalvelimelle</li>
            <li>Yksi testikierros ennen julkaisua, viimeistely</li>
          </ul>
        </Container>
      </section>

      {/* Testijakso – kevyt taustaraita */}
      <section id="testijakso" className="py-10 bg-slate-50 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">Testijakso</h2>
          <p className="mt-3 text-slate-700">
            Botin valmistuessa luovutan sen käyttöösi n. 2 viikon testijaksoksi.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Voitte jutella botin kanssa kuten asiakkaat</li>
            <li>Löytää tilanteita tai vastauksia, joita voidaan hienosäätää</li>
            <li>Tehdä viimeiset muutokset ennen virallista käyttöä</li>
          </ul>
        </Container>
      </section>

      {/* Hinnoittelu – normaali tausta */}
      <section id="hinnoittelu" className="py-10 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">Hinnoittelu</h2>
          <p className="mt-3 text-slate-700">Avaimet käteen -paketti: 790 € + alv</p>
        </Container>
      </section>

      {/* Ylläpito – kevyt taustaraita */}
      <section id="yllapito" className="py-10 bg-slate-50 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">Ylläpito ja jatkokehitys:</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Minimi: 50 € / toimeksianto</li>
            <li>Tuntityö: 20 € / h</li>
            <li>Voimme myös sopia jatkuvasta ylläpidosta ja kehityksestä</li>
          </ul>
        </Container>
      </section>

      {/* Lisäkulut – normaali tausta */}
      <section id="lisakulut" className="py-10 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">
            Mahdollisia lisäkuluja: (asiakas maksaa suoraan palveluntarjoajille, hinnat ovat tämän
            hetkisiä arvioita)
          </h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>OpenAI API: käytön mukaan (yleensä muutamia euroja / kk)</li>
            <li>
              Meta / WhatsApp API: ensimmäiset 1000 keskustelua / kk ilmaiseksi, sen jälkeen n. 0,06
              € / keskustelu
            </li>
            <li>Serveri: asiakkaan oma palvelin tai tarjoan sen lisähintaan</li>
          </ul>
        </Container>
      </section>

      {/* Räätälöinti – kevyt taustaraita */}
      <section id="raatalointi" className="py-16 bg-slate-50 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">Räätälöity juuri sinulle!</h2>
          <p className="mt-3 text-slate-700">
            Kaikki rakennetaan yrityksesi näköiseksi, olipa kyse sitten kielivalinnoista,
            brändisävystä, visuaalisesta tyylistä tai erityisvaatimuksista.
          </p>
          <h3 className="mt-6 text-xl font-semibold">Jos haluat, botti voidaan myöhemmin opettaa:</h3>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Lukemaan yrityksesi verkkosivun sisältö automaattisesti</li>
            <li>Päivittämään tietoa dynaamisesti</li>
            <li>Tai mitä vain keksit, teen kaikkeni sinun tyytyväisyyden vuoksi!</li>
          </ul>
          <p className="mt-4 text-slate-700">
            Kilpailukykyinen hintani yhdistettynä tekoälypohjaiseen bottiin tekee tästä yhden
            tehokkaimmista asiakaspalveluratkaisuista markkinoilla.
          </p>
        </Container>
      </section>

      {/* Miksi valita – lisätään border-t korostukseksi (toinen ja viimeinen viiva) */}
      <section id="miksi" className="py-16 border-t scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold text-center">🤔 Miksi valita tämä botti?</h2>
          <ol className="mt-4 grid gap-6 sm:grid-cols-2">
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">1. Säästää aikaa ja rahaa heti</div>
              <p className="text-slate-700 mt-1">
                Botti vastaa automaattisesti 24/7 – ei tarvetta ilta- tai viikonloppupäivystykselle.
              </p>
            </li>
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">2. Maksaa itsensä takaisin nopeasti</div>
              <p className="text-slate-700 mt-1">
                Botti maksaa usein saman verran kuin yksi viikonloppuvuoro, mutta toimii aina!
              </p>
            </li>
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">3. Ei perusbotti – vaan älykäs</div>
              <p className="text-slate-700 mt-1">
                Ymmärtää murteet, virheet ja slangin. Kuulostaa brändillesi sopivalta.
              </p>
            </li>
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">4. Sinä päätät, miten botti käyttäytyy</div>
              <p className="text-slate-700 mt-1">
                Valitset sävyn, toiminnan ja erikoistilanteet, täysin räätälöity.
              </p>
            </li>
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">5. Botti kehittyy jatkuvasti</div>
              <p className="text-slate-700 mt-1">
                Voidaan opettaa lukemaan verkkosivuja, päivittymään, kasvamaan, eri alustoille tai kokonaan uusia ominaisuusksia.
              </p>
            </li>
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">6. Testikäyttö ennen julkaisua</div>
              <p className="text-slate-700 mt-1">
                 Viikon testijakson aikana kartoitamme mahdollisia virhetilanteita ja hiomme botista juuri täydellisen sinun tarpeillesi..
              </p>
            </li>
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">7. Kiinteä hinta – ei yllätyksiä</div>
              <p className="text-slate-700 mt-1">
                Koko paketti alk.790 € + alv. Päivitykset alk. 50 € tai 20 €/h.
              </p>
            </li>
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">8. Markkinoiden edullisin ratkaisu!</div>
              <p className="text-slate-700 mt-1">
                Ei piilokuluja, ei kuukausimaksuja – vain käyttöön perustuvat maksut.
              </p>
            </li>
          </ol>
        </Container>
      </section>
    </main>
  );
}
