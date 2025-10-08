"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";
import Container from "./container";
import Image from "next/image";
import LanguageSwitcher from "@/components/language-switcher";
import { usePathname } from "next/navigation";
import { SITE_EN } from "@/lib/site.en";


export default function Header() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname() || "/";
  const isEN = pathname === "/en" || pathname.startsWith("/en/");
  const T = isEN ? SITE_EN : SITE; // T = nykyinen SITE valitulla kielellä


  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-white/10 bg-black/90">
      <Container className="flex h-16 items-center justify-between">
        <Link 
           href="/" className="text-2xl sm:text-3xl font-bold tracking-tight whitespace-nowrap leading-none text-white">
          <Image
            src="/logo.png"
            alt="Leo Digital logo"
            width={45}
            height={45}
            className="inline-block align-middle mr-2"
            priority
          />
          <span className="align-middle">{T.brand}</span>

        </Link>

        {/* Desktop-navigaatio */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {T.nav.map((n) => {

            const linkProps =
  "target" in n && n.target === "_blank"
    ? ({ target: "_blank" as const, rel: "noopener noreferrer" })
    : ({});

            return (
              <Link
                key={n.href}
                href={n.href}
                {...linkProps}
                className="text-slate-200 hover:text-white"
              >
                {n.label}
              </Link>
            );
          })}

            <a
             href="#yhteys" className="inline-flex items-center rounded-md border border-white/20 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10"
          >
            {isEN ? "Contact" : "Ota yhteyttä"}

          </a>

          {/* FI/EN kytkin (desktop) */}
          <div className="pl-3 ml-1 border-l border-slate-200">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobiilinappi */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2 text-sm text-white"
          aria-label="Avaa valikko"
        >
          {open ? "✕" : "☰"}
        </button>
      </Container>

      {/* Mobiilivalikko */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur border-t border-white/10 text-slate-100">
          <Container className="py-3 flex flex-col gap-2">
            {/* FI/EN kytkin myös valikon sisällä */}
            <div className="pb-2">
              <LanguageSwitcher />
            </div>

            {T.nav.map((n) => (

              <Link
                key={n.href}
                href={n.href}
                target={"target" in n ? n.target : undefined}
                rel={"target" in n && n.target === "_blank" ? "noopener noreferrer" : undefined}
                className="py-2 text-slate-100 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="#yhteys"
              className="mt-2 inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
                {isEN ? "Contact" : "Ota yhteyttä"}

            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
