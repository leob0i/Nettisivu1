// src/lib/data.en.ts

// Voit käyttää samaa ClientLogo-tyyppiä kuin suomessa.
// Jos haluat tiukan tyypin tähän tiedostoon ilman importtia,
// avaa kommentti alla ja poista import.
// import type { ClientLogo } from "./data";

export const SERVICES_EN = [
  {
    title: "Websites & Online Stores",
    desc: "Fast, SEO-friendly sites that generate leads.",
    points: [
      "Co-designed to match your needs",
      "Custom visual design",
      "Single- or multi-page",
      "Anything is possible to your wishes",
    ],
    img: "/services/website.jpg",
  },
  {
    title: "Customer Service Bot",
    desc: "An AI-powered assistant that works 24/7.",
    points: [
      "Available 24/7",
      "Answers using your company information, politely",
      "Escalates to a human or other channels when needed",
      "Works on WhatsApp, website or anywhere",
    ],
    img: "/services/chat.jpg",
    href: "/asiakaspalvelubotti",
  },
  {
    title: "Social Media & Ads",
    desc: "Posts, ads and metrics in one package.",
    points: ["Planning", "Maintenance", "Ad libraries", "Content calendars", "Reporting"],
    img: "/services/some.jpg",
  },
  {
    title: "Mobile Apps",
    desc: "iPhone and Android apps tailored to your needs.",
    points: ["For companies", "For customers", "For communities/internal comms", "Anything!"],
    img: "/services/puhelin.jpg",
  },
] as const;

export const PORTFOLIO_EN = [
  { title: "Kivila Oy", tag: "Website", href: "#", img: "/placeholder.svg" },
  { title: "Nordic Fit", tag: "Online Store", href: "#", img: "/placeholder.svg" },
  { title: "Cafe Lumi", tag: "Brand + Website", href: "#", img: "/placeholder.svg" },
] as const;

export const PRICING_EN = [
  {
    name: "Small website",
    price: "249 €",
    period: "one-time",
    features: ["1 page", "Custom design", "SEO", "Contact form", "Launch & guidance"],
    cta: "Contact us for a quote!",
  },
  {
    name: "Medium-sized or large website",
    price: "Starting 390 €",
    period: "one-time",
    features: ["All the features of a small website", "Multi-page / blog", "Multilingual", "Extended SEO", "Basic analytics"],
    cta: "Contact us for a quote!",
    featured: true,
  },
  {
  name: "Customer Service Bot",
  price: "from 590 €",
  period: "start + 89€ monthly",
  features: [
    "From: 590 € + 89 €/mo",
    "1 channel (WhatsApp or website)",
    "Basic FAQ + boundaries",
    "Brand-aligned tone of voice",
    "Light maintenance and content updates",
    "Website chat UI tailored to your brand",
    "2-week free trial",
  ],
  cta: "Contact me and request a quote!",
},

] as const;

// Jos haluat käyttää samoja logoja myös EN-sivulla,
// voit tuoda ne suoraan suomalaisesta tiedostosta näin:
// export { LOGOS } from "./data";
