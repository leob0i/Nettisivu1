// src/app/en/about/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About – Leo Digital",
  description:
    "Leo Digital is your agile digital partner: websites, customer-service chatbots, and online stores. A clear process, fixed pricing, and modern execution.",
};

export default function AboutPageEN() {
  return (
    <main className="pb-20">
      {/* Hero – same background image and style */}
      <section id="hero" className="relative overflow-hidden border-b scroll-mt-24">
        <Image
          src="/services/about-hero.jpg"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="absolute inset-0 -z-10 object-cover object-center pointer-events-none"
        />
        <div
          className="absolute inset-0 z-0 bg-black/60 pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative z-10 py-16 min-h-[50vh] flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-extrabold">About us</h1>
          <p className="mt-3 max-w-3xl text-white/90">
            We’re a small, agile digital team building clear, fast, and sales-driven websites
            and smart customer-service chatbots — without surprises.
          </p>
          <div className="mt-6">
            <Link
              href="/#yhteys" // same anchor as the Finnish site
              className="rounded-md px-5 py-2.5 text-white bg-slate-900 hover:bg-slate-800"
            >
              Contact us
            </Link>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section id="content" className="py-12 scroll-mt-24">
        <Container>
          <div
            className="prose prose-slate md:prose-lg mx-auto max-w-3xl text-center
                       prose-p:leading-relaxed prose-li:leading-relaxed prose-p:my-4
                       [&_h2]:mt-10 md:[&_h2]:mt-14 [&_h2]:mb-2"
          >
            <p>
              We’re a small and agile digital team that designs and delivers clear, fast, and
              conversion-focused websites plus smart customer-service chatbots. Our process is
              straightforward: we listen to your goals, propose a fixed-price solution, and ship
              the work without surprises. Our aim is for your core message to be understood in
              seconds and contacting you to be effortless on every device.
            </p>

            <h2 className="font-semibold">How we work</h2>
            <p>
              Projects start with a short discovery, after which you’ll receive a draft, a timeline,
              and a total price. We use modern technologies (e.g., Next.js and Tailwind) so the end
              result is lightweight, fast, and easy to maintain.
            </p>
            <p>
              At launch we handle the domain, security, and basic SEO — and analytics if needed —
              so you can see where visitors come from and what they click. Multilingual support,
              privacy, and secure form handling are part of the package.
            </p>

            <h2 className="font-semibold">Customer-service chatbots</h2>
            <p>
              We build bots on your own knowledge base so the tone stays on-brand and answers are
              trustworthy. The bot complements your site by replying to repeating questions
              instantly, routing people to the right service, and capturing leads even when no one
              is online in chat.
            </p>

            <h2 className="font-semibold">Pricing & delivery</h2>
            <p>
              We keep communication and pricing clear. Standard sites are typically delivered
              quickly depending on your inputs, and pricing stays reasonable: most projects land
              around <strong>€249–€600</strong> depending on scope. Lightweight stores and
              WhatsApp- or site-chatbots are quoted separately.
            </p>
            <p>
              After launch you’ll get simple instructions for making small edits yourself, and we’ll
              support you whenever needed!
            </p>

            <h2 className="font-semibold">Next step</h2>
            <p>
              If you’d like a quick assessment and a mock view, send a message via the form on this
              page or on WhatsApp. We’ll get back promptly with a clear proposal including timeline
              and pricing.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/#yhteys" // same target as FI
              className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
            >
              Request a quick estimate
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
