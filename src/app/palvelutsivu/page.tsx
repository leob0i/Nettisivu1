import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Nettisivu ja ylläpito – kaikki digiasiat yhdestä paikasta | Leo Digital",
  description:
    "Ammattimaiset nettisivut, hakukonenäkyvyys, Google Maps -näkyvyys ja ylläpito yhdestä paikasta. Sinä keskityt bisnekseen – minä pidän digisi kunnossa. Alk. 399 € + 49 €/kk.",
  keywords: [
    "nettisivut yritykselle",
    "nettisivujen ylläpito",
    "hakukoneoptimointi",
    "SEO palvelu",
    "Google Maps näkyvyys",
    "nettisivut hinta",
    "yrityksen nettisivu",
    "web-kehitys",
  ],
  openGraph: {
    title: "Nettisivu ja ylläpito – kaikki digiasiat yhdestä paikasta | Leo Digital",
    description:
      "Sinä keskityt bisnekseen – minä pidän digisi kunnossa. Ammattimaisesti rakennettu nettisivu, SEO ja jatkuva ylläpito.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-black text-slate-100" id="top">
      {/* ── HERO ── */}
<section className="relative isolate overflow-hidden">

  {/* Background image */}
  <div className="absolute inset-0 z-0 pointer-events-none">

    <Image
      src="/services/website.jpg"
      alt="Leo Digital – nettisivut ja ylläpito"
      fill
      priority
      className="object-cover object-center"
      sizes="100vw"
    />

    {/* Dark overlay (valitse yksi vaihtoehto) */}

    {/* 1) Tasainen tumma */}
    {/* <div className="absolute inset-0 bg-black/65" /> */}

    {/* 2) Gradient (suositus herolle) */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/65 to-black" />

    {/* 3) Extra “kontrasti” tekstille (valinnainen) */}
    {/* <div className="absolute inset-0 bg-black/20 mix-blend-multiply" /> */}
  </div>

 <Container className="relative py-20 sm:py-32 min-h-[560px] sm:min-h-[680px] flex items-center">
    <div className="mx-auto max-w-6xl text-center">
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
        Ei jaksa itse digiä?<br />
        <span className="text-slate-300">Ei hätää, minä hoidan.</span>
      </h1>

    </div>
  </Container>
</section>


      {/* ── MIKSI? ── */}
      <section className="relative -mt-20 sm:-mt-28">
        <Container className="pt-8 sm:pt-10 pb-8 sm:pb-12">
 

  <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
    Sinä keskityt liiketoimintaan, minä pidän digisi kunnossa
  </h2>

  {/* Tekstit koko leveydelle (mobiili 1 palsta, desktop 2 palstaa) */}
 <div className="mt-8 grid lg:grid-cols-2 gap-x-8 gap-y-4 text-slate-300 leading-relaxed">
  <div className="space-y-5">
    <p>
      <span className="font-semibold text-slate-100">Ei pelkkä nettisivu.</span>{" "}
      Saat kokonaisuuden, joka pitää yrityksesi näkyvänä, uskottavana ja löydettävänä joka kuukausi –
      minä hoidan digin, sinä keskityt myyntiin ja arkeen.
    </p>

    <p>
      <span className="font-semibold text-slate-100">Huolellinen toteutus.</span>{" "}
      Ei geneerisiä valmispohjia: sivu rakennetaan nopeaksi, mobiiliystävälliseksi ja viimeistellyksi,
      jotta asiakkaan on helppo luottaa ja jättää yhteydenotto.
    </p>
  </div>

  <div className="space-y-5">
    <p>
      <span className="font-semibold text-slate-100">Google-näkyvyys oikein.</span>{" "}
      Hakusanat, sisältö ja rakenne hiotaan niin, että oikeat ihmiset löytävät sinut silloin kun he etsivät
      palvelua – ja että erotut kilpailijoista.
    </p>

    <p>
      <span className="font-semibold text-slate-100">Maps & arvostelut kuntoon.</span>{" "}
      Google-profiili laitetaan kuntoon, arvostelut tuodaan näkyvästi esiin ja palautteen jättäminen tehdään
      helpoksi (QR-koodi + selkeä ohje). Se kasvattaa luottamusta ja nostaa yhteydenottoja.
    </p>
  </div>

  <p className="lg:col-span-2 text-slate-400">
    <span className="font-semibold text-slate-200">Ylläpito ilman säätöä:</span>{" "}
    päivitykset, tietoturva, domain, SEO ja näkyvyyden kehittäminen pysyvät ajan tasalla. Halutessasi voit
    päivittää esimerkiksi aukioloajat tai kuukauden tarjouksen myös itse – ilman koodia.
  </p>
</div>
</Container>
      </section>

      {/* ── PAKETIT ── */}
      <section id="paketit">
  <Container className="pt-6 sm:pt-10 pb-16 sm:pb-24">
          

          <div className="grid md:grid-cols-2 gap-6">
            <PriceCard
              badge="Paketti 1"
              title="Nettisivu & näkyvyys"
              startPrice="499 €"
              monthly="49 €/kk"
              description="Täydellinen paketti pienelle tai keskikokoiselle yritykselle, joka haluaa ammattimaisen nettisivun ja Google-näkyvyyden ilman omaa vaivannäköä."
              bullets={[
                "Nettisivun suunnittelu ja toteutus alusta alkaen",
                "Mobiili- ja hakukoneystävällinen rakenne",
                "Hakukoneoptimointi oikeilla hakusanoilla",
                "Yhteydenottolomake ja some-linkit",
                "QR-koodi arvosteluja varten + arvostelut sivulle",
                "Google Maps -upotus ja yritysmerkintä",
                "Voit muokata valittuja tekstikenttiä itse",
                "Max. 8 osiota (lisäsivu 49 €, isommat erikseen)",
                "Ylläpito: domain, SEO, tuki ja tietoturva",
                
              ]}
              botNote="Sisältää jatkuvan teknisen ylläpidon ja pienet sisällölliset päivitykset. Laajemmat muutostyöt sovitaan erikseen."
            />

            <PriceCard
              badge="Paketti 2"
              title="Laaja kokonaisuus"
              startPrice="699 €"
              monthly="119 €/kk"
              featured
              description="Kasvavalle yritykselle, joka tarvitsee laajemman sivuston, monikielisyyden, analytiikan ja prioriteettipalvelun. Kaikki asiat järjestyksessä kellon ympäri."
              bullets={[
                "Kaikki Paketti 1:n sisältö",
                "Max. 12 sivua aloituksessa + uusia sivuja ylläpidossa",
                "Monikielinen sivu (esim. FI/EN)",
                "Räätälöity ulkoasu ja toiminnot",
                "Google Analytics -seuranta ja raportointi",
                "Sivun jatkuva kehitys ja parantelu",
                "Prioriteettituki – nopea vastaus aina",
                "Ylläpito: domain, SEO, tuki ja tietoturva",
              ]}
              botNote="Sisältää jatkuvan kehityksen ja priorisoidun tuen. Kiireelliset muutokset käsitellään etusijalla. Laajemmat projektit sovitaan erikseen."
              
            />
          </div>

          {/* Botti-infokortti */}
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-1">
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Lisäpalvelu</p>
                <h3 className="text-lg font-bold">🤖Asiakaspalvelubotti – 99 € (kertamaksu)</h3>
                <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                  Custom chat-widget ja Q&amp;A – Botti ohjeistaa asiakkaitasi 24/7 ja ohjaa heidät
                  yhteydenottoon tai varaukseen. Ei erillisiä ylläpitomaksuja.
                
                </p>
              </div>
              
            </div>
          </div>

         

          {/* UKK */}
          <div className="mt-10 grid lg:grid-cols-2 gap-4">
            <Faq
              q="Täytyykö minun tehdä jotain itse?"
              a="Tarvitsen ainoastaan yrityksesi tiedot ja mahdolliset mediat (kuva/video/logo jne.). Silloin minulla on jo käytännössä kaikki mitä tarvitsen. Loput riippuu sinusta, kuinka paljon haluat vaikuttaa sivun rakenteessa, hakusanoissa, yms..."
            />
            <Faq
              q="Milloin Google-näkyvyys alkaa näkyä tuloksissa?"
              a="Tekninen perusta saadaan kuntoon heti julkaisussa, mutta orgaaninen näkyvyys kehittyy yleensä viikkojen tai kuukausien aikana. Jatkuva ylläpito on se, mikä tekee sivusta pitkällä aikavälillä tuottavan."
            />
            <Faq
              q="Mitä tapahtuu, jos haluan lopettaa ylläpidon?"
              a="Sopimus on määräaikainen ensinmäiset 3kk, minkä jälkeen se muuttuu toistaiseksi voimassa olevaksi. Sivu ja domain ovat sinun. Voidaan sopia siirrosta tai jatkosta joustavasti – ei piiloehtoja."
            />
            
            <Faq
              q="Voiko sivun ulkoasun räätälöidä täysin?"
              a="Kyllä. Koska kaikki rakennetaan oikealla koodilla ilman valmispohjia, ulkoasu ja toiminnot tehdään juuri sinun brändisi ja tarpeidesi mukaan."
            />
           
          </div>


          
        </Container>
      </section>
      <Contact />
    </main>
  );
}

/* ── Komponentit ── */

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition-colors">
      <p className="font-semibold">{title}</p>
      <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function PriceCard({
  badge,
  title,
  startPrice,
  monthly,
  description,
  bullets,
  botNote,
  featured,
}: {
  badge: string;
  title: string;
  startPrice: string;
  monthly: string;
  description: string;
  bullets: string[];
  botNote?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border p-7 sm:p-8 flex flex-col",
        featured
          ? "border-white/25 bg-white/10"
          : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <span className="text-xs text-slate-400 uppercase tracking-widest">{badge}</span>
        
      </div>

      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-slate-300 text-sm leading-relaxed">{description}</p>

      <div className="mt-5 flex items-end gap-4">
        <div>
          <p className="text-xs text-slate-400">Aloitushinta</p>
          <p className="text-4xl font-extrabold tracking-tight">{startPrice}</p>
        </div>
        <div className="mb-1">
          <p className="text-xs text-slate-400">Sen jälkeen</p>
          <p className="text-sm font-semibold text-slate-400">{monthly}</p>
        </div>
      </div>

      <ul className="mt-6 space-y-3 text-slate-200 flex-1">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 text-sm">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      {botNote && (
        <p className="mt-5 text-xs text-slate-400 border-t border-white/10 pt-4 leading-relaxed">
          {botNote}
        </p>
      )}

      
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3 mb-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white text-black font-bold text-sm shrink-0">
          {n}
        </span>
        <p className="font-semibold">{title}</p>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="font-semibold text-sm">{q}</p>
      <p className="mt-3 text-slate-300 text-sm leading-relaxed">{a}</p>
    </div>
  );
}