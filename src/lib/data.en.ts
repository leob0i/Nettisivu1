// src/lib/data.en.ts

// Voit käyttää samaa ClientLogo-tyyppiä kuin suomessa.
// Jos haluat tiukan tyypin tähän tiedostoon ilman importtia,
// avaa kommentti alla ja poista import.
// import type { ClientLogo } from "./data";

export const SERVICES_EN = [
  {
    title: "Websites & Online Stores",
    desc: "Visually impressive, SEO-friendly sites that your customers remember.",
    points: [
      "Designed together based on your needs",
      "Custom design (no templates)",
      "SEO (search visibility) is considered from day one.",
      "Everything is possible—based on your wishes",
    ],
    afterPoints:
      "All sites are built individually by coding—no templates. This gives a strong foundation for Google visibility and full freedom to implement the look exactly to your needs. The site can be modified and updated whenever you want.",
    img: "/services/website.jpg",
  },
  {
    title: "Customer Service Bot",
    desc: "A smart, AI-powered customer service bot that works 24/7.",
    points: [
      "Works 24/7",
      "Answers politely based on your company information",
      "Guides to a human or other channels when needed",
      "On WhatsApp, your website, Instagram, or anywhere",
    ],
    img: "/services/chat.jpg",
    href: "/asiakaspalvelubotti",
  },
  {
    title: "Social Media & Advertising",
    desc: "Posts, ads, and metrics in one package.",
    points: ["Planning", "Ongoing management", "Ad libraries", "Content calendars", "Reporting"],
    img: "/services/some.jpg",
  },
  {
    title: "Mobile Apps",
    desc: "iPhone and Android apps tailored to your needs.",
    points: [
      "For businesses",
      "For customers",
      "For communities, such as internal workplace communication",
      "Anything!",
    ],
    img: "/services/puhelin.jpg",
  },
] as const;

export const PORTFOLIO_EN = [
  { title: "Kivila Oy", tag: "Websites", href: "#", img: "/placeholder.svg" },
  { title: "Nordic Fit", tag: "Online Store", href: "#", img: "/placeholder.svg" },
  { title: "Cafe Lumi", tag: "Brand + Website", href: "#", img: "/placeholder.svg" },
] as const;

export const PRICING_EN = [
  {
    name: "Website – starter package",
    price: "299 €",
    period: "one-time",
    features: [
      "1–3 pages (home, services, contact)",
      "Custom design aligned with your brand",
      "Contact form → messages delivered directly to your email",
      "Basic SEO (headings, meta tags, site structure)",
      "Launch + short onboarding",
    ],
    fineprint: "Additional language (e.g. EN) from 45 € / language.",
    cta: "Request a quote",
  },
  {
    name: "Medium or large website",
    price: "From 399 €",
    period: "one-time",
    features: [
      "All the benefits of the starter package",
      "5+ pages (additional pages from 49 € / page)",
      "Structure for multiple services/locations",
      "Extended SEO + basic analytics",
      "Monthly Promo section (you update the text yourself)",
    ],
    fineprint: "Additional language (e.g. EN) from 49 € / language.",
    cta: "Request a quote",
    featured: true,
  },
  {
    name: "Take care of me",
    subtitle:
      "Maintenance package in addition to your website – your site stays up to date while you focus on business.",
    price: "199 €",
    period: "month (ongoing) + website separately",
    features: [
      "Continuous support",
      "Updates and new sections (within the package workload)",
      "Ongoing SEO improvements",
      "Domain management and maintenance",
      "Add-ons: customer service bot + self-updating images",
    ],
    fineprint: "Includes approximately 4 hours of work / month.",
    cta: "Request a quote",
  },
] as const;

// Jos haluat käyttää samoja logoja myös EN-sivulla,
// voit tuoda ne suoraan suomalaisesta tiedostosta näin:
// export { LOGOS } from "./data";
