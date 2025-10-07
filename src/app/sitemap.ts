// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/+$/, "");

  // Lisää tähän listaan kaikki julkiset sivusi:
  const routes = [
    "/",                          // FI etusivu
    "/asiakaspalvelubotti",       // FI bottisivu
    "/en",                        // EN etusivu
    "/en/asiakaspalvelubotti",    // EN bottisivu
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" || path === "/en" ? 1.0 : 0.8,
  }));
}
