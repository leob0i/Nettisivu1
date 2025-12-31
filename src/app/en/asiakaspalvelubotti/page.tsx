import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import ContactForm from "@/components/contact1";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.leodigital.fi"),
  alternates: {
    canonical: "/en/asiakaspalvelubotti",
  },

  title: "Customer Service Bot – Leo Digital",
  description:
    "Smart customer service bot for WhatsApp and your website. Pricing is a setup fee + monthly fee: Start 590 € + 89 €/mo, Growth 1 100 € + 89 €/mo, Pro 1 990 € + 199 €/mo. WhatsApp Coexistence available as an add-on.",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.leodigital.fi/en/asiakaspalvelubotti",
    siteName: "Leo Digital",
    title: "Customer Service Bot – Leo Digital",
    description:
      "Smart customer service bot for WhatsApp and your website. Pricing from 590 € + 89 €/mo. WhatsApp Coexistence available as an add-on.",
    images: [
      {
        url: "/og/asiakaspalvelubotti.png",
        width: 1200,
        height: 630,
        alt: "Customer Service Bot for WhatsApp and website – Leo Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Customer Service Bot – Leo Digital",
    description:
      "Smart customer service bot for WhatsApp and your website. Pricing from 590 € + 89 €/mo.",
    images: ["/og/asiakaspalvelubotti.png"],
  },
};


const badges = ["WhatsApp or website", "2-week free trial period"];

const highlights = [
  {
    title: "Replies 24/7",
    text: "Customers get answers instantly – even in the evenings and on weekends.",
  },
  {
    title: "Less repetition",
    text: "The bot handles the most common questions, so you can focus on the most important cases.",
  },
  {
    title: "Reliable",
    text: "The bot answers only based on your company’s own information and facts. Its tone is polite and clean.",
  },
];

const features = [
  {
    title: "FAQ first, AI as support",
    text: "The bot primarily answers based on your company’s own information and uses AI only to supplement and format the answer clearly.",
  },
  {
    title: "Understands real language",
    text: "Typos, spoken language, dialects, and short questions won’t break the conversation.",
  },
  {
    title: "Routes to a human intelligently",
    text: "When the situation is unclear or requires personal handling, the bot directs the customer to the right channel.",
  },
  {
    title: "Multilingual when needed",
    text: "We can configure the bot to detect the customer’s language and respond fluently in multiple languages.",
  },
];

const coexistenceHowItWorks = {
  title: "WhatsApp Coexistence model in practice",
  text: "When you want the bot and a human to serve customers using the same WhatsApp number, the Coexistence model can be enabled. The bot replies automatically during agreed hours and steps away from the conversation if it is not confident enough about the answer or if a human takes over the conversation. If needed, the bot can take the conversation back after an agreed delay. This enables smooth customer service without changing numbers or moving customer service to another channel.",
};

const useCases = [
  "Travel & activities",
  "Service businesses",
  "Online stores",
  "Driving schools",
  "Local consumer services",
  "B2B services",
];

const exampleQs = [
  "How much does this cost?",
  "When do you have available times?",
  "How does booking / cancellation work?",
  "Where is the meeting point?",
  "How fast do you deliver?",
  "How can I contact customer service?",
];

const included = [
  "Bot planning and implementation (Node.js + OpenAI)",
  "FAQ answer logic + smart fallback",
  "Channel integration according to the selected package",
  "Website chat UI customization to match your brand",
  "Assistance with the Meta Business Manager process (WhatsApp)",
  "Instructions and onboarding",
  "Delivery to your own server or development server",
  "1 test round + final polish",
];

const pricingTiers = [
  {
    name: "Start",
    badge: "Easy start",
    setup: "590 €",
    monthly: "89 € / mo",
    summary: "1 channel, basic FAQ and light maintenance",
    bullets: [
      "1 channel (WhatsApp or website)",
      "Basic FAQ + boundaries",
      "Brand-aligned tone of voice",
      "Light maintenance and content updates",
    ],
  },
  {
    name: "Growth",
    badge: "Popular choice",
    setup: "1 100 €",
    monthly: "89 € / mo",
    summary: "2 channels, broader customization and maintenance",
    bullets: [
      "2 channels (WhatsApp + website)",
      "Broader knowledge base",
      "More precise usage rules",
      "More regular maintenance",
    ],
  },
  {
    name: "Pro",
    badge: "For demanding use",
    setup: "1990 €",
    monthly: "199 € / mo",
    summary: "Multi-channel, broader features and priority support",
    bullets: [
      "Multi-channel solution",
      "Broader features",
      "Priority support",
      "Integrations can be agreed",
    ],
  },
];

const addons = [
  {
    name: "WhatsApp Coexistence add-on",
    setup: "+ 390 €",
    monthly: "+ 49 € / mo",
    summary:
      "Same number for human and bot, AUTO/HUMAN modes, business-hours logic, and safe handover to a human.",
    bullets: [
      "Human and bot on the same number",
      "AUTO/HUMAN modes",
      "Business-hours logic",
      "Handover to a human when the bot isn’t sure",
      "Takeback after an agreed delay",
    ],
  },
];

const faq = [
  {
    q: "Is this a traditional button bot?",
    a: "No. This is a modern AI-powered bot that responds naturally and uses your company’s own knowledge base.",
  },
  {
    q: "Can the bot’s tone of voice be customized?",
    a: "Yes. We build the bot’s communication style to match your brand – casual, formal, or sales-oriented.",
  },
  {
    q: "What if the bot is not sure about the answer?",
    a: "Then it directs the customer to a human or the right channel. The goal is to minimize guessing.",
  },
  {
    q: "Does this also work on a website?",
    a: "Yes. The bot can be implemented for a website, WhatsApp, or both depending on the package.",
  },
];

const card =
  "rounded-2xl border border-white/20 bg-white/[0.10] backdrop-blur p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]";

const softCard =
  "rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-white pb-20">
      {/* HERO */}
      <section id="hero" className="relative isolate scroll-mt-24">
        <Image
          src="/services/asiakaspalvelubotti-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
          className="absolute inset-0 z-0 object-cover object-center pointer-events-none select-none opacity-80"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/55 via-zinc-950/35 to-zinc-950/70 pointer-events-none"
        />

        {/* subtle accent glow */}
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),rgba(217,70,239,0.10),transparent_60%)] blur-2xl"
        />

        <Container className="relative z-20 pt-24 pb-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.08]">
                <span className="text-sky-300">Customer service bot</span> that
                replies <span className="text-sky-300">24/7</span> using your
                company’s own information
              </h1>

              <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
                A modern WhatsApp and website bot that reduces repetitive
                customer service work, improves response speed, and looks as
                professional as the best big brands.
              </p>

              {/* Note: left as-is as you provided (visible only in md->), so we don't break the layout */}
              <div className="mt-6 hidden md:flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#yhteys"
                  className="rounded-xl px-5 py-3 text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:opacity-95 text-center font-semibold shadow"
                >
                  Request a demo
                </Link>
                <Link
                  href="#hinnoittelu"
                  className="rounded-xl px-5 py-3 border border-white/15 bg-white/[0.04] hover:bg-white/10 text-white text-center font-semibold"
                >
                  View pricing
                </Link>
              </div>

              <div className="mt-7 inline-flex w-full sm:w-auto items-center justify-between sm:justify-start gap-3 rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3">
                <div className="text-sm text-white/75">Setup + monthly</div>
                <div className="text-lg font-extrabold text-white">
                  590 € + 89 € / mo
                </div>
                <div className="text-xs text-white/70">Start package</div>
              </div>
            </div>

            {/* Right: highlight cards */}
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {highlights.map((h) => (
                  <div key={h.title} className={card}>
                    <div className="text-lg font-bold text-white">{h.title}</div>
                    <p className="mt-2 text-white/75">{h.text}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/[0.05] bg-gradient-to-br from-indigo-500/20 via-white/[0.05] to-fuchsia-500/14 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]">
                <div className="text-sm text-white/75">Support</div>
                <div className="mt-1 text-xl font-bold text-white">
                  We’ll build a bot for your business that truly helps.
                </div>
                <p className="mt-2 text-white/75">
                  Continuous development and maintenance are included in all
                  packages. This ensures the bot is always up to date.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURES */}
      <section
        id="miten"
        className="py-12 sm:py-14 scroll-mt-24 border-t border-white/10"
      >
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              How does the bot work in practice?
            </h2>
            <p className="mt-2 text-white/70">
              Clear logic that keeps answers reliable and aligned with your
              brand.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className={softCard}>
                <div className="text-lg font-bold text-white">{f.title}</div>
                <p className="mt-2 text-white/75">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="text-lg font-bold text-white">
              {coexistenceHowItWorks.title}
            </div>
            <p className="mt-2 text-white/75">{coexistenceHowItWorks.text}</p>
          </div>
        </Container>
      </section>

      {/* WHO IS IT FOR */}
      <section
        id="kenelle"
        className="py-12 sm:py-14 scroll-mt-24 border-t border-white/10"
      >
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Who is this for?
          </h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            If you get repetitive questions or seasonal peaks overload your
            inbox, this is likely one of the fastest ROI investments.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {useCases.map((u) => (
              <span
                key={u}
                className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/90"
              >
                {u}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* EXAMPLE QUESTIONS */}
      <section
        id="esimerkit"
        className="py-12 sm:py-14 scroll-mt-24 border-t border-white/10"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Typical questions the bot handles
              </h2>
              <p className="mt-2 text-white/70">
                With these, the bot starts saving time from day one.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <ul className="space-y-2 text-white/80">
                {exampleQs.map((q) => (
                  <li key={q} className="flex gap-2">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT YOU GET */}
      <section
        id="paketti"
        className="py-12 sm:py-14 scroll-mt-24 border-t border-white/10"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                What’s included in the service
              </h2>
              <p className="mt-2 text-white/70">
                The content and channels depend on the package you choose.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <ul className="space-y-2 text-white/80">
                {included.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* PRICING */}
      <section
        id="hinnoittelu"
        className="py-14 scroll-mt-24 border-t border-white/10"
      >
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Pricing
            </h2>
            <p className="mt-2 text-white/70">
              Pricing is a setup fee + monthly fee. The website bot and WhatsApp
              bot can be implemented separately or as part of the same solution.
            </p>
          </div>

          {/* Mobile: swipe cards. Desktop: grid. */}
          <div className="mt-8 -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
            {pricingTiers.map((p) => (
              <div
                key={p.name}
                className="min-w-[85%] snap-center rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.06)] md:min-w-0"
              >
                <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                  {p.badge}
                </div>

                <h3 className="mt-4 text-2xl font-bold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-white/70">{p.summary}</p>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs font-semibold text-white/70">
                      Setup
                    </div>
                    <div className="text-2xl font-extrabold text-white">
                      {p.setup}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs font-semibold text-white/70">
                      Monthly
                    </div>
                    <div className="text-xl font-bold text-white">
                      {p.monthly}
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-1 text-sm text-white/80">
                  {p.bullets.map((b) => (
                    <div key={b}>• {b}</div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/#yhteys"
                    className="rounded-xl px-5 py-3 text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:opacity-95 text-center font-semibold block"
                  >
                    Request a demo
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Coexistence add-on */}
          <div className="mt-8">
            {addons.map((a) => (
              <div
                key={a.name}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="max-w-2xl">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {a.name}
                    </h3>
                    <p className="mt-2 text-white/75 text-sm">{a.summary}</p>
                    <div className="mt-4 grid gap-2 text-sm text-white/80">
                      {a.bullets.map((b) => (
                        <div key={b}>• {b}</div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full lg:w-auto lg:min-w-[260px]">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-xs font-semibold text-white/70">
                        Setup add-on
                      </div>
                      <div className="text-2xl font-extrabold text-white">
                        {a.setup}
                      </div>
                    </div>
                    <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-xs font-semibold text-white/70">
                        Monthly add-on
                      </div>
                      <div className="text-xl font-bold text-white">
                        {a.monthly}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 scroll-mt-24 border-t border-white/10">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">FAQ</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((f) => (
              <div key={f.q} className={softCard}>
                <div className="font-bold text-white">{f.q}</div>
                <p className="mt-2 text-white/75">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA + FORM */}
      <section id="cta" className="py-16 scroll-mt-24 border-t border-white/10">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/15 via-white/[0.04] to-fuchsia-500/10 px-6 sm:px-8 py-10 sm:py-12 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Want to see a demo for your specific industry?
                </h2>
                <p className="mt-2 text-white/75">
                  Request a free 2-week trial period and see how my customer
                  service bot helps your business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <Link
                  href="#yhteys"
                  className="rounded-xl px-6 py-3 bg-white text-zinc-950 hover:bg-zinc-100 text-center font-semibold"
                >
                  Request a demo
                </Link>
                <Link
                  href="/"
                  className="rounded-xl px-6 py-3 border border-white/15 bg-white/[0.04] hover:bg-white/10 text-center font-semibold text-white"
                >
                  Back to home
                </Link>
              </div>

              {/* Form inside the same box (a single #yhteys anchor) */}
              <div id="yhteys" className="lg:col-span-2 scroll-mt-24">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
