export const SERVICES = [
  {
    title: "Verkkosivut & verkkokaupat",
    desc: "Nopeat, hakukoneystävälliset sivut, jotka tuottavat liidejä.",
    points: ["Suunnittelu yhdessä tarpeen mukaan", "Räätälöity ulkoasu", "Yksi tai useampi sivuinen", "Kaikki mahdollista toiveidesi mukaan"],
    img: "/services/website.jpg",
  },
  {
    title: "Asiakaspalvelubotti",
    desc: "Tekoälyllä varustettu älykäsasikaspalvelubotti joka toimii 24/7.",
    points: ["Toimii 24/7", "Vastaa yritysten tietojen mukaisesti ja kohteliaasti", "Ohjaa tarvittaessa ihmiselle tai toisiin kanaviin", "WhatsAppiin, nettisivulle tai minne vain"],
    img: "/services/chat.jpg",
    href: "/asiakaspalvelubotti",
  },
  {
    title: "Some & mainonta",
    desc: "Julkaisut, mainokset ja mittarit samassa paketissa.",
    points: ["suunnittelu", "ylläpito", "Mainosbibliot", "Sisältökalenterit", "Raportointi"],
    img: "/services/some.jpg",
  },
  {
    title: "Puhelinsovellukset",
    desc: "Iphone ja Androind sovellukset toiveidesi mukaan.",
    points: ["yrityksille", "asikkaille", "yhteisöille kuten työpaikan sisäinen kommunikointi", "mitä vain!"],
    img: "/services/puhelin.jpg",
  },
];

export const PORTFOLIO = [
  { title: "Kivila Oy", tag: "Verkkosivut", href: "#", img: "/placeholder.svg" },
  { title: "Nordic Fit", tag: "Verkkokauppa", href: "#", img: "/placeholder.svg" },
  { title: "Cafe Lumi", tag: "Brändi + sivut", href: "#", img: "/placeholder.svg" },
];

export const PRICING = [
  {
    name: "Pieni nettisivu",
    price: "249 €",
    period: "kerta",
    features: ["1 sivu", "Räätälöity ulkoasu", "Yhteydenotto lomake", "SEO", "Julkaisu & opastus"],
    cta: "Ota yhteyttä ja pyydä tarjous!",
  },
  {
    name: "Keskisuuri tai suuri nettisivu",
    price: "alk. 399 €",
    period: "kerta",
    features: ["Kaikki pienen paketin edut", "Monisivuinen / blogi", "Monikielisyys", "Perus-analytiikka", "Laajennettu SEO"],
    cta: "Ota yhteyttä ja pyydä tarjous!",
    featured: true,
  },
  {
    name: "Asiakaspalvelubotti",
    price: "alk. 790 €",
    period: "kerta",
    features: ["Ei kuukausimaksuja(OpenAI kk-maksun lisäksi)", "What's App, ohjeistus meta business käyttöönotossa.", "Nettisivulle räätälöity ulkoasu.", "1 ilmainen testikierros."],
    cta: "Ota yhteyttä ja pyydä tarjous!",
  },
];

// src/lib/data.ts
export type ClientLogo = { name: string; logo: string };

export const LOGOS: ClientLogo[] = [
  { name: "Rautaranta OY", logo: "/clients/Rautarantalogo.png" },
  // lisää muita tähän...
];
