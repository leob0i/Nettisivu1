"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";
import Container from "./container";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE_EN } from "@/lib/site.en";

// Palvelut-linkin reitti – vaihda tarvittaessa
const PALVELUT_HREF = "/palvelutsivu";
const PALVELUT_HREF_EN = "/en/palvelutsivu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname() || "/";
  const isEN = pathname === "/en" || pathname.startsWith("/en/");
  const T = isEN ? SITE_EN : SITE;

  const navItems = T.nav
    .filter(
      (n) =>
        n.label !== (isEN ? "About" : "Meistä") &&
        n.label !== (isEN ? "Pricing" : "Hinnasto")
    )
    // Ylikirjoitetaan Palvelut / Services -linkin href
    .map((n) => {
      const isPalvelut = n.label === "Palvelut" || n.label === "Services";
      if (isPalvelut) {
        return { ...n, href: isEN ? PALVELUT_HREF_EN : PALVELUT_HREF };
      }
      return n;
    });

  let cleanPath = pathname;
  if (isEN) {
    cleanPath = cleanPath.replace(/^\/en/, "") || "/";
  }

  const fiPath = cleanPath === "/" ? "/" : cleanPath;
  const enPath = cleanPath === "/" ? "/en" : `/en${cleanPath}`;

  const contactLabel = isEN ? "Contact" : "Ota yhteyttä";

  const resolveHref = (href: string) => {
    if (
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    ) {
      return href;
    }

    if (isEN) {
      if (href === "/en" || href.startsWith("/en/") || href.startsWith("/en#")) {
        return href;
      }
      if (href === "/") return "/en";
      if (href.startsWith("/")) return `/en${href}`;
      if (href.startsWith("#")) return `/en${href}`;
      return href;
    } else {
      if (href === "/en" || href === "/en/") return "/";
      if (href.startsWith("/en/")) {
        const stripped = href.replace(/^\/en/, "");
        return stripped === "" ? "/" : stripped;
      }
      return href;
    }
  };

  const contactHref = resolveHref("#yhteys");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md backdrop-saturate-150">
      <div className="px-3 sm:px-4 lg:px-8 py-1.5 lg:py-2.5">
        {/* DESKTOP */}
        <Container className="hidden items-center md:flex">
          <div className="flex flex-1 items-center gap-4">
            <Link
              href={isEN ? "/en" : "/"}
              className="flex min-w-[80px] items-center justify-center px-4"
            >
              <div className="relative flex h-8 w-24 md:h-9 md:w-28 items-center justify-center overflow-visible">
                <Image
                  src="/logo.png"
                  alt="Leo Digital logo"
                  fill
                  className="object-contain scale-[1.6]"
                  sizes="120px"
                  priority
                />
              </div>
            </Link>

            <nav className="flex flex-1 items-center gap-4 text-[11px] font-medium text-slate-200 md:text-xs">
              {navItems.map((n) => {
                const resolvedHref = resolveHref(n.href);
                const linkProps =
                  "target" in n && n.target === "_blank"
                    ? ({ target: "_blank" as const, rel: "noopener noreferrer" })
                    : ({} as const);

                return (
                  <Link
                    key={resolvedHref + n.label}
                    href={resolvedHref}
                    {...linkProps}
                    className="transition-colors hover:text-amber-300"
                  >
                    {n.label}
                  </Link>
                );
              })}
              <a href={contactHref} className="transition-colors hover:text-amber-300">
                {contactLabel}
              </a>
            </nav>
          </div>

          <div className="flex flex-1 items-center justify-end gap-3">
            <div className="inline-flex items-center rounded-full bg-white/10 p-0.5 text-[10px] md:text-xs">
              <Link
                href={fiPath}
                className={`rounded-full px-2.5 py-0.5 transition ${
                  !isEN
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                FI
              </Link>
              <Link
                href={enPath}
                className={`rounded-full px-2.5 py-0.5 transition ${
                  isEN
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                EN
              </Link>
            </div>

            <a
              href={contactHref}
              className="rounded-full bg-amber-500 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-md transition-colors hover:bg-amber-400"
            >
              {isEN ? "Request quote" : "Pyydä tarjous"}
            </a>
          </div>
        </Container>

        {/* MOBIILI header */}
        <Container className="flex items-center justify-between gap-3 md:hidden">
          <Link href={isEN ? "/en" : "/"} className="flex items-center gap-2 -ml-6">
            <div className="relative flex h-7 w-24 items-center justify-center overflow-visible">
              <Image
                src="/logo.png"
                alt="Leo Digital logo"
                fill
                className="object-contain scale-[1.7]"
                sizes="96px"
                priority
              />
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <div className="inline-flex items-center rounded-full bg-white/10 p-0.5 text-[10px]">
              <Link
                href={fiPath}
                className={`rounded-full px-2 py-0.5 transition ${
                  !isEN ? "bg-white text-slate-900 shadow-sm" : "text-slate-200 hover:text-white"
                }`}
              >
                FI
              </Link>
              <Link
                href={enPath}
                className={`rounded-full px-2 py-0.5 transition ${
                  isEN ? "bg-white text-slate-900 shadow-sm" : "text-slate-200 hover:text-white"
                }`}
              >
                EN
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100"
              aria-label="Avaa valikko"
            >
              <span className="sr-only">Valikko</span>
              <div className="flex flex-col items-center justify-center gap-[4px]">
                <span
                  className={`block h-[2px] w-5 rounded-full bg-current transition-transform ${
                    mobileMenuOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full bg-current transition-opacity ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full bg-current transition-transform ${
                    mobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </Container>

        {/* MOBIILI: avautuva valikko */}
        <Container
          className={`md:hidden flex flex-col items-end gap-1 pb-3 text-sm text-slate-100 transition-all duration-200 ease-out origin-top-right ${
            mobileMenuOpen
              ? "mt-2 opacity-100 translate-y-0 max-h-96"
              : "mt-0 opacity-0 -translate-y-2 max-h-0 pointer-events-none overflow-hidden"
          }`}
        >
          {navItems.map((n) => {
            const resolvedHref = resolveHref(n.href);
            return (
              <Link
                key={resolvedHref + n.label}
                href={resolvedHref}
                target={"target" in n ? n.target : undefined}
                rel={
                  "target" in n && n.target === "_blank"
                    ? "noopener noreferrer"
                    : undefined
                }
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-[13px] font-medium text-slate-100/90 hover:bg-slate-800/80 hover:text-amber-300 text-right"
              >
                {n.label}
              </Link>
            );
          })}

          <a
            href={contactHref}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-1 rounded-lg px-3 py-2 text-[13px] font-medium text-slate-100/90 hover:bg-slate-800/80 hover:text-amber-300 text-right"
          >
            {contactLabel}
          </a>
        </Container>
      </div>
    </header>
  );
}