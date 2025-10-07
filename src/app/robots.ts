// src/app/robots.ts
import type { MetadataRoute } from "next";
import { IS_INDEXABLE, SITE_URL } from "@/lib/env";

const allow = IS_INDEXABLE;

const robots = (): MetadataRoute.Robots => ({
  rules: allow
    ? [{ userAgent: "*", allow: "/" }]
    : [{ userAgent: "*", disallow: "/" }],
  sitemap: `${SITE_URL}/sitemap.xml`,
  host: SITE_URL,
});

export default robots;
