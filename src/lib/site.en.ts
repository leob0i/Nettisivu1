// src/lib/site.en.ts
export const SITE_EN = {
  brand: "Leo Digital",
  tagline:
    "We help companies grow with modern websites, digital marketing and tailored AI solutions.",
  contacts: {
    email: "leo@leodigital.fi",
    phone: "",
    address: "",
  },
  nav: [
    { label: "Services", href: "#palvelut" },
    { label: "Customer Service Bot", href: "/en/asiakaspalvelubotti" },
    { label: "About", href: "#meista" },
    { label: "Pricing", href: "#hinnasto" },],
} as const;

export type SiteEn = typeof SITE_EN;
