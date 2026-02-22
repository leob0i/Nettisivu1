// src/lib/data.ts

// -----------------------------
// Clients
// -----------------------------
export type ClientLogo = {
  name: string;
  logo: string;
  href: string;
};

export const LOGOS: ClientLogo[] = [
  {
    name: "Rautaranta OY",
    logo: "/clients/Rautarantalogo.png",
    href: "https://www.rautaranta.fi/",
  },
  {
    name: "Kelmutus",
    logo: "/clients/logo.kelmutus.png",
    href: "https://www.kelmutus.fi/",
  },
];

// -----------------------------
// Services
// -----------------------------
export type Service = {
  title: string;
  desc: string;
  points: string[];
  afterPoints?: string;
  img: string;
  href?: string;
};

export const SERVICES: Service[] = [
  {
    title: "Verkkosivut & verkkokaupat",
    desc: "Ei pelkkä nettisivu, vaan näkyvyys ja uusia asiakkaita tuovva ja mieleenpainuva kokonaisuus ",
    points: [
      "Suunnittelu yhdessä tarpeen mukaan",
      "Räätälöity ulkoasu (ei valmispohjia)",
      "SEO, eli hakukonenäkyvyys huomioidaan alusta alkaen.",
      "Kaikki mahdollista toiveidesi mukaan",
    ],
    afterPoints:
      "Kaikki sivut tehdään yksilöllisesti koodaten, ei valmispohjia. Tämä antaa hyvät lähtökohdat Google-näkyvyydelle ja täyden vapauden toteuttaa ulkoasu juuri sinun tarpeisiin. Sivua voidaan muokata ja päivittää aina kun haluat.",
    img: "/services/website.jpg",
  },

  {
  title: "Kotisivut ja ylläpito",
  desc: "Täysi ylläpito ja näkyvä kokonaisuus: SEO, Google Maps ja arvostelut + jatkuva ylläpito.",
  points: [
    "Custom-koodattu, nopea ja mobiiliystävällinen sivu",
    "Hakusanat & tekninen SEO alusta asti",
    "Google Maps -profiili kuntoon + Maps-upotus",
    "Arvostelut näkyviin + QR-koodi palautteelle",
    "Ylläpito: domain, tietoturva, tuki ja näkyvyyden kehitys",
  ],
  afterPoints:
    "Jätä kaikki digitaalinen näkyvyys ja ylläpito minulle, sä voit keskittyä liiketoimintaan ilman huolta digistä, samalla kun näkyvyytesi netissä on aina ajantasalla! ",
  img: "/services/website.jpg",
},
  {
    title: "Asiakaspalvelubotti",
    desc: "Tekoälyllä varustettu älykäs asiakaspalvelubotti joka toimii 24/7.",
    points: [
      "Toimii 24/7",
      "Vastaa yrityksen tietojen mukaisesti ja kohteliaasti",
      "Ohjaa tarvittaessa ihmiselle tai toisiin kanaviin",
      "WhatsAppiin, nettisivulle, Instagramiin tai minne vain",
    ],
    img: "/services/chat.jpg",
    href: "/asiakaspalvelubotti",
  },
  
  {
    title: "Puhelinsovellukset",
    desc: "iPhone- ja Android-sovellukset toiveidesi mukaan.",
    points: [
      "Yrityksille",
      "Asiakkaille",
      "Yhteisöille kuten työpaikan sisäinen kommunikointi",
      "Mitä vain!",
    ],
    img: "/services/puhelin.jpg",
  },
];

// -----------------------------
// Portfolio
// -----------------------------
export type PortfolioItem = {
  title: string;
  tag: string;
  href: string;
  img: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  { title: "Kivila Oy", tag: "Verkkosivut", href: "#", img: "/placeholder.svg" },
  { title: "Nordic Fit", tag: "Verkkokauppa", href: "#", img: "/placeholder.svg" },
  { title: "Cafe Lumi", tag: "Brändi + sivut", href: "#", img: "/placeholder.svg" },
];

// -----------------------------
// Pricing
// -----------------------------
export type PricingPlan = {
  name: string;
  subtitle?: string;
  price: string;
  period: string;
  features: string[];
  fineprint?: string;
  cta: string;
  featured?: boolean;
};

export const PRICING: PricingPlan[] = [
  {
    name: "Nettisivu – starttipaketti",
    price: "299 €",
    period: "kerta",
    features: [
      "1–3 sivua (etusivu, palvelut, yhteystiedot)",
      "Räätälöity ulkoasu yritysilmeen mukaan",
      "Yhteydenottolomake → viestit suoraan sähköpostiisi",
      "Perus-SEO (otsikot, metat, sivurakenne)",
      "Julkaisu + lyhyt opastus käyttöön",
    ],
    fineprint: "Lisäkieli (esim. EN) alk. 45 €/kieli.",
    cta: "Pyydä tarjous",
  },
  {
    name: "Keskisuuri tai suuri nettisivu",
    price: "alk. 399 €",
    period: "kerta",
    features: [
      "Kaikki starttipaketin edut",
      "5+ sivua (lisäsivut alk. 49 €/sivu)",
      "Rakenne useammalle palvelulle/toimipisteelle",
      "Laajennettu SEO + perusanalytiikka",
      "Monthly Promo -osio (päivität tekstiä itse)",
    ],
    fineprint: "Lisäkieli (esim. EN) alk. 49 €/kieli.",
    cta: "Pyydä tarjous",
    featured: true,
  },
  {
    name: "Take care of me",
    subtitle:
      "Ylläpitopaketti nettisivun lisäksi – sivut pysyvät ajantasalla, sinä keskityt bisnekseen.",
    price: "199 €",
    period: "kk (toistaiseksi) + nettisivu erikseen",
    features: [
      "Jatkuva tuki",
      "Päivitykset ja uudet osiot (paketin työmäärällä)",
      "Jatkuvat SEO-parannukset",
      "Domain-hallinta ja ylläpito",
      "Lisäpalvelut: asiakaspalvelubotti + kuvien omapäivitys",
    ],
    fineprint: "Sisältää noin 4 h työtä / kk.",
    cta: "Pyydä tarjous",
  },
];
