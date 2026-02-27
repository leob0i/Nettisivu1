import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Website & Maintenance – all your digital needs in one place | Leo Digital",
  description:
    "Professional websites, search visibility, Google Maps visibility, and maintenance in one place. You focus on the business — I keep your digital presence in shape. From €399 + €49/mo.",
  keywords: [
    "business website",
    "website maintenance",
    "search engine optimization",
    "SEO service",
    "Google Maps visibility",
    "website pricing",
    "company website",
    "web development",
  ],
  openGraph: {
    title: "Website & Maintenance – all your digital needs in one place | Leo Digital",
    description:
      "You focus on the business — I keep your digital presence in shape. A professionally built website, SEO, and ongoing maintenance.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-black text-slate-100" id="top">
      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/services/website.jpg"
            alt="Leo Digital – websites and maintenance"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Dark overlay (choose one option) */}

          {/* 1) Solid dark */}
          {/* <div className="absolute inset-0 bg-black/65" /> */}

          {/* 2) Gradient (recommended for hero) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/65 to-black" />

          {/* 3) Extra “contrast” for text (optional) */}
          {/* <div className="absolute inset-0 bg-black/20 mix-blend-multiply" /> */}
        </div>

        <Container className="relative py-20 sm:py-32 min-h-[560px] sm:min-h-[680px] flex items-center">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Not up for handling your digital presence yourself?
              <br />
              <span className="text-slate-300">No worries — I’ve got it.</span>
            </h1>
          </div>
        </Container>
      </section>

      {/* ── WHY? ── */}
      <section className="relative -mt-20 sm:-mt-28">
        <Container className="pt-8 sm:pt-10 pb-8 sm:pb-12">
          <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
            You focus on the business — I keep your digital presence in shape
          </h2>

          {/* Full-width text (mobile 1 column, desktop 2 columns) */}
          <div className="mt-8 grid lg:grid-cols-2 gap-x-8 gap-y-4 text-slate-300 leading-relaxed">
            <div className="space-y-5">
              <p>
                <span className="font-semibold text-slate-100">Not just a website.</span>{" "}
                You get a complete setup that keeps your business visible, credible, and easy to find
                month after month — I handle the digital side, you focus on sales and day-to-day work.
              </p>

              <p>
                <span className="font-semibold text-slate-100">Carefully built.</span>{" "}
                No generic templates: your site is built to be fast, mobile-friendly, and polished, so
                it’s easy for customers to trust you and get in touch.
              </p>
            </div>

            <div className="space-y-5">
              <p>
                <span className="font-semibold text-slate-100">Search visibility done right.</span>{" "}
                Keywords, content, and structure are refined so the right people find you when they’re
                looking for your service — and so you stand out from competitors.
              </p>

              <p>
                <span className="font-semibold text-slate-100">Maps & reviews in order.</span>{" "}
                Your Google profile is set up properly, reviews are displayed clearly, and leaving
                feedback is made easy (QR code + clear instructions). This builds trust and increases
                enquiries.
              </p>
            </div>

            <p className="lg:col-span-2 text-slate-400">
              <span className="font-semibold text-slate-200">Maintenance without hassle:</span>{" "}
              updates, security, domain, SEO, and visibility improvements stay up to date. If you want,
              you can also update selected items yourself (for example opening hours or the monthly
              offer) — without code.
            </p>
          </div>
        </Container>
      </section>

      {/* ── PACKAGES ── */}
      <section id="paketit">
        <Container className="pt-6 sm:pt-10 pb-16 sm:pb-24">
          <div className="grid md:grid-cols-2 gap-6">
            <PriceCard
              badge="Package 1"
              title="Website & visibility"
              startPrice="499 €"
              monthly="49 €/mo"
              description="A complete package for a small or mid-sized business that wants a professional website and Google visibility without extra effort on your side."
              bullets={[
                "Website planning and development from scratch",
                "Mobile- and search-engine-friendly structure",
                "SEO with the right keywords",
                "Contact form and social links",
                "QR code for reviews + reviews displayed on the site",
                "Google Maps embed and business listing",
                "You can edit selected text fields yourself",
                "Up to 8 sections (additional page €49; larger changes quoted separately)",
                "Maintenance: domain, SEO, support, and security",
              ]}
              botNote="Includes ongoing technical maintenance and small content updates. Larger changes are agreed separately."
            />

            <PriceCard
              badge="Package 2"
              title="Extended solution"
              startPrice="799 €"
              monthly="119 €/mo"
              featured
              description="For a growing business that needs a larger website, multilingual support, analytics, and priority service. Everything in order around the clock."
              bullets={[
                "Everything included in Package 1",
                "Up to 12 pages at launch + new pages during maintenance",
                "Multilingual site (e.g. FI/EN)",
                "Custom design and functionality",
                "Google Analytics tracking and reporting",
                "Ongoing development and improvement",
                "Priority support — fast response every time",
                "Maintenance: domain, SEO, support, and security",
              ]}
              botNote="Includes ongoing development and prioritised support. Urgent changes are handled first. Larger projects are agreed separately."
            />
          </div>

          {/* Bot info card */}
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-1">
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Add-on</p>
                <h3 className="text-lg font-bold">🤖 Customer service bot – 99 € (one-time fee)</h3>
                <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                  Custom chat widget and Q&amp;A — the bot guides your customers 24/7 and directs them
                  to contact or booking. No separate maintenance fees.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-10 grid lg:grid-cols-2 gap-4">
            <Faq
              q="Do I need to do anything myself?"
              a="I only need your company details and any media (images/video/logo, etc.). With that, I already have practically everything I need. The rest depends on you — how much you want to influence the structure, keywords, and so on."
            />
            <Faq
              q="When will Google visibility start showing results?"
              a="The technical foundation is set up at launch, but organic visibility usually develops over weeks or months. Ongoing maintenance is what makes the site productive in the long run."
            />
            <Faq
              q="What happens if I want to stop the maintenance?"
              a="The agreement is fixed-term for the first 3 months, after which it becomes open-ended. The site and domain are yours. We can agree on a transfer or next steps flexibly — no hidden terms."
            />
            <Faq
              q="Can the design be fully customized?"
              a="Yes. Because everything is built with real code and without templates, the design and functionality can be made to match your brand and needs."
            />
          </div>
        </Container>
      </section>

      <Contact />
    </main>
  );
}

/* ── Components ── */

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition-colors">
      <p className="font-semibold">{title}</p>
      <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function PriceCard({
  badge,
  title,
  startPrice,
  monthly,
  description,
  bullets,
  botNote,
  featured,
}: {
  badge: string;
  title: string;
  startPrice: string;
  monthly: string;
  description: string;
  bullets: string[];
  botNote?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border p-7 sm:p-8 flex flex-col",
        featured ? "border-white/25 bg-white/10" : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <span className="text-xs text-slate-400 uppercase tracking-widest">{badge}</span>
      </div>

      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-slate-300 text-sm leading-relaxed">{description}</p>

      <div className="mt-5 flex items-end gap-4">
        <div>
          <p className="text-xs text-slate-400">Starting price</p>
          <p className="text-4xl font-extrabold tracking-tight">{startPrice}</p>
        </div>
        <div className="mb-1">
          <p className="text-xs text-slate-400">After that</p>
          <p className="text-sm font-semibold text-slate-400">{monthly}</p>
        </div>
      </div>

      <ul className="mt-6 space-y-3 text-slate-200 flex-1">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 text-sm">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      {botNote && (
        <p className="mt-5 text-xs text-slate-400 border-t border-white/10 pt-4 leading-relaxed">
          {botNote}
        </p>
      )}
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3 mb-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white text-black font-bold text-sm shrink-0">
          {n}
        </span>
        <p className="font-semibold">{title}</p>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="font-semibold text-sm">{q}</p>
      <p className="mt-3 text-slate-300 text-sm leading-relaxed">{a}</p>
    </div>
  );
}