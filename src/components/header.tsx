"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";
import Container from "./container";
import Image from "next/image";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
  <header className="sticky top-0 z-50 w-full backdrop-blur border-b border-white/10 bg-white/60">
  <Container className="flex h-16 items-center justify-between">
    <Link href="/" className="text-2xl sm:text-3xl font-bold tracking-tight whitespace-nowrap leading-none">
      <Image
        src="/logo.png"       
        alt="Leo Digital logo"
        width={45}
        height={45}
        className="inline-block align-middle mr-2"
        priority
      />
      <span className="align-middle">{SITE.brand}</span>
    </Link>

        {/* Desktop-navigaatio */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {SITE.nav.map((n) => {
  const linkProps =
    n.target === "_blank"
      ? ({ target: "_blank" as const, rel: "noopener noreferrer" })
      : ({});
  return (
    <Link
      key={n.href}
      href={n.href}
      {...linkProps}
      className="hover:text-slate-700"
    >
      {n.label}
    </Link>
  );
})}

          <a
            href="#yhteys"
            className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium hover:bg-slate-100"
          >
            Ota yhteyttä
          </a>
        </nav>

        {/* Mobiilinappi */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm"
          aria-label="Avaa valikko"
        >
          {open ? "✕" : "☰"}
        </button>
      </Container>

      {/* Mobiilivalikko */}
      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur border-t border-white/10">
          <Container className="py-3 flex flex-col gap-2">
            {SITE.nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                target={n.target}
                rel={n.target === "_blank" ? "noopener noreferrer" : undefined}
                className="py-2"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="#yhteys"
              className="mt-2 inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              Ota yhteyttä
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
