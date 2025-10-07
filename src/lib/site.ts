// src/lib/site.ts

export type NavItem = {
  label: string;
  href: string;
  target?: "_blank" | "_self"; // valinnainen
};

export type SiteConfig = {
  brand: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  businessId: string;
  nav: NavItem[];
};

export const SITE: SiteConfig = {
  brand: "Leo Digital",
  tagline: "Kaikki digitaaliset palvelut helposti ja fiksusti!",
  description:
    "Autamme pk-yrityksiä kasvamaan modernien verkkosivujen, verkkokaupan ja digimainonnan avulla.",
  phone: "",
  email: "leo@leodigital.fi",
  address: "",
  businessId: "",
  nav: [
    { label: "Palvelut", href: "/#palvelut" },
    { label: "Asiakaspalvelurobotti", href: "/asiakaspalvelubotti" }, // ei targetia → aukeaa samassa välilehdessä
    { label: "Meistä", href: "/#meista" },      // tämä on uusi
    { label: "Hinnasto", href: "/#hinnasto" },
  ],
};
