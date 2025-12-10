import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";


export const metadata: Metadata = {
  title: "Customer Service Bot – Leo Digital",
  description:
    "An intelligent customer service bot for WhatsApp and your website. Pricing is setup fee + monthly fee: Start 590 € + 89 €/mo, Kasvu 1 100 € + 189 €/mo, Pro 2 200 € + 350 €/mo. WhatsApp Coexistence available as an add-on.",
};

const badges = [
  "WhatsApp or website",
  "2-week free trial",
];

const highlights = [
  {
    title: "Replies 24/7",
    text:
      "Customers get answers instantly – even in the evenings and on weekends.",
  },
  {
    title: "Less repetition",
    text:
      "The bot takes care of the most common questions, so you can focus on the most important cases.",
  },
  {
    title: "Sounds like your brand",
    text:
      "Tone of voice, language, and boundaries are built to match your company’s style.",
  },
];

const features = [
  {
    title: "FAQ first, AI as support",
    text:
      "The bot primarily answers based on your company’s own information and uses AI only to complement and structure the response clearly.",
  },
  {
    title: "Understands real language",
    text:
      "Typos, everyday speech, dialects, and short questions won’t break the conversation.",
  },
  {
    title: "Smart handoff to a human",
    text:
      "When a situation is unclear or requires personal handling, the bot routes the customer to the right channel.",
  },
  {
    title: "Multilingual when needed",
    text:
      "We can configure the bot to detect the customer’s language and respond fluently in multiple languages.",
  },
];

const coexistenceHowItWorks = {
  title: "WhatsApp Coexistence model in practice",
  text:
    "If you want both the bot and a person to serve customers using the same WhatsApp number, the Coexistence model can be enabled. The bot replies automatically during agreed hours and steps away from the conversation if it is not confident enough about an answer or if a human takes over. If needed, the bot can take the conversation back after an agreed delay. This enables smooth customer service without changing numbers or moving support to another channel.",
};

const useCases = [
  "Travel & activities",
  "Service businesses",
  "E-commerce",
  "Driving schools",
  "Local consumer services",
  "B2B services",
];

const exampleQs = [
  "How much does this cost?",
  "When do you have available times?",
  "How does booking / cancellation work?",
  "Where is the meeting location?",
  "How fast do you deliver?",
  "How can I reach customer support?",
];

const steps = [
  {
    step: "1",
    title: "Discovery",
    text:
      "We review your company’s most common customer questions, channels, and desired tone of voice.",
  },
  {
    step: "2",
    title: "Knowledge base & logic",
    text:
      "I build the bot to answer based on your company’s own information and define the boundaries.",
  },
  {
    step: "3",
    title: "Integration",
    text:
      "WhatsApp Business API or website chat – or both – implemented and ready to use.",
  },
  {
    step: "4",
    title: "Launch & guidance",
    text:
      "Guidance for using the bot, continuous development and maintenance. ",
  },
];

const included = [
  "Bot design and implementation (Node.js + OpenAI)",
  "FAQ answer logic + smart fallback",
  "Channel integration according to the selected package",
  "Website chat UI tailored to your brand",
  "Assistance with the Meta Business Manager process (WhatsApp)",
  "Instructions and onboarding",
  "Delivery to your own server or a development server",
  "1 test round + final polish",
];

const pricingTiers = [
  {
    name: "Start",
    badge: "Easy start",
    setup: "590 €",
    monthly: "89 € / kk",
    summary: "1 channel, basic FAQ and light maintenance",
    bullets: [
      "1 channel (WhatsApp or website)",
      "Basic FAQ + boundaries",
      "Brand-aligned tone of voice",
      "Light maintenance and content updates",
    ],
  },
  {
    name: "Kasvu",
    badge: "Popular choice",
    setup: "1 100 €",
    monthly: "89 € / kk",
    summary: "2 channels, broader tailoring and maintenance",
    bullets: [
      "2 channels (WhatsApp + website)",
      "Broader knowledge base",
      "More detailed usage rules",
      "More regular maintenance",
    ],
  },
  {
    name: "Pro",
    badge: "For demanding use",
    setup: "1990 €",
    monthly: "199 € / kk",
    summary: "Multi-channel, broader capabilities and priority support",
    bullets: [
      "Multi-channel solution",
      "Broader capabilities",
      "Priority support",
      "Integrations negotiable",
    ],
  },
];

const addons = [
  {
    name: "WhatsApp Coexistence add-on",
    setup: "+ 390 €",
    monthly: "+ 49 € / kk",
    summary:
      "One number for both human and bot, AUTO/HUMAN modes, working-hours logic, and a safe handoff to a human.",
    bullets: [
      "Human and bot on the same number",
      "AUTO/HUMAN modes",
      "Working-hours logic",
      "Handoff to a human when the bot is not confident",
      "Conversation take-back after an agreed delay",
    ],
  },
];

const faq = [
  {
    q: "Is this a traditional button-based bot?",
    a:
      "No. This is a modern AI-assisted bot that responds naturally and relies on your company’s own knowledge base.",
  },
  {
    q: "Can the bot’s tone of voice be customized?",
    a:
      "Yes. We tailor the bot’s communication style to match your brand – relaxed, professional, or sales-focused.",
  },
  {
    q: "What if the bot is not sure about the answer?",
    a:
      "Then it routes the customer to a human or the right channel. The goal is to minimize guessing.",
  },
  {
    q: "Does this also work on a website?",
    a:
      "Yes. The bot can be implemented for your website, WhatsApp, or both depending on the package.",
  },
  
];

export default function Page() {
  return (
    <main className="relative min-h-screen pb-20 overflow-hidden bg-slate-50">
      {/* HERO */}
      <section id="hero" className="relative scroll-mt-24">
        {/* HERON TAUSTAKUVA */}
        <Image
          src="/services/asiakaspalvelubotti-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
          className="
            absolute inset-0 -z-0
            object-cover object-center
            pointer-events-none select-none
          "
        />

        {/* TUMMA OVERLAY – jotta kuva näkyy paremmin ja kontrasti paranee */}
        <div
          aria-hidden="true"
          className="
            absolute inset-0 -z-10
            bg-gradient-to-b
            from-slate-950/90 via-slate-950/70 to-slate-950/50
            pointer-events-none
          "
        />

        <Container className="relative z-20 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-sky-200 bg-white px-3 py-1 text-[10px] sm:text-xs font-semibold text-sky-700 shadow-sm"

                  >
                    {b}
                  </span>
                ))}
              </div>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
  A customer service bot that replies 24/7{" "}
  <span className="text-sky-200">
    with your company’s own information
  </span>
</h1>

<p className="mt-4 text-lg text-slate-100/90 max-w-xl drop-shadow-sm">
  A modern WhatsApp and website bot that reduces repetitive
  customer service work, improves response speed, and makes
  your company look as professional as the best major brands.
</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#yhteys"
                  className="rounded-lg px-5 py-3 text-white bg-sky-900 hover:bg-sky-800 text-center font-semibold shadow"
                >
                  Request a demo
                </Link>
                <Link
                  href="#hinnoittelu"
                  className="rounded-lg px-5 py-3 border border-sky-300 hover:bg-white text-sky-900 text-center font-semibold"
                >
                  See pricing
                </Link>
              </div>

              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-sky-200 bg-white px-4 py-3 shadow-sm">
                <div className="text-sm text-sky-700">Setup + monthly</div>
                <div className="text-lg font-extrabold text-sky-950">
                  590 € + 89 € / kk
                </div>
                <div className="text-xs text-sky-600">
                  Start package
                </div>
              </div>
            </div>

            {/* Oikea puoli: "glass" hyötykortit */}
            <div className="grid gap-4">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl border border-sky-200 bg-white/95 p-6 shadow-sm"
                >
                  <div className="text-lg font-bold text-sky-950">{h.title}</div>
                  <p className="mt-2 text-slate-700">{h.text}</p>
                </div>
              ))}

              <div className="rounded-2xl border border-sky-200 bg-sky-950 p-6 text-white shadow-sm">
                <div className="text-sm opacity-80">Support</div>
                <div className="mt-1 text-xl font-bold">
                  We build a bot for your company that truly helps.
                </div>
                <p className="mt-2 text-white/85">
                  Continuous development and maintenance are included in all packages. This ensures the bot stays up to date at all times.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* OMINAISUUDET */}
      <section id="miten" className="py-12 scroll-mt-24">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-sky-950">
                How does the bot work in practice?
              </h2>
              <p className="mt-2 text-slate-700">
                Clear logic that keeps answers reliable and aligned with your brand.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-sky-200 bg-white/95 p-6 shadow-sm"
              >
                <div className="text-lg font-bold text-sky-950">{f.title}</div>
                <p className="mt-2 text-slate-700">{f.text}</p>
              </div>
            ))}
          </div>

          {/* Coexistence - pitkä laatikko muiden alle */}
          <div className="mt-6 rounded-2xl border border-sky-200 bg-white/95 p-6 shadow-sm">
            <div className="text-lg font-bold text-sky-950">
              {coexistenceHowItWorks.title}
            </div>
            <p className="mt-2 text-slate-700">
              {coexistenceHowItWorks.text}
            </p>
          </div>
        </Container>
      </section>

      {/* KENELLE SOPII */}
      <section id="kenelle" className="py-12 scroll-mt-24">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-950">
            Who is this for?
          </h2>
          <p className="mt-2 text-slate-700">
            If you receive recurring questions or seasonal peaks overload your inbox,
            this is likely one of the fastest ROI investments you can make.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {useCases.map((u) => (
              <span
                key={u}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-sky-700 border border-sky-200 shadow-sm"
              >
                {u}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ESIMERKKIKYSYMYKSET */}
      <section id="esimerkit" className="py-12 scroll-mt-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-sky-950">
                Typical questions the bot handles
              </h2>
              <p className="mt-2 text-slate-700">
                With these, the bot starts saving time from day one.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-200 bg-white/95 p-6 shadow-sm">
              <ul className="space-y-2 text-slate-700">
                {exampleQs.map((q) => (
                  <li key={q} className="flex gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-400" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* PROSESSI */}
      <section id="prosessi" className="py-12 bg-white/60 backdrop-blur-[2px] scroll-mt-24">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-950">
            This is how the project progresses
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-sky-200 bg-white/95 p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-sky-600">
                  Step {s.step}
                </div>
                <div className="mt-1 text-lg font-bold text-sky-950">{s.title}</div>
                <p className="mt-2 text-slate-700">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* MITÄ SAAT */}
      <section id="paketti" className="py-12 scroll-mt-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-sky-950">
                What’s included
              </h2>
              <p className="mt-2 text-slate-700">
                Content and channels are determined by the package you choose.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-200 bg-white/95 p-6 shadow-sm">
              <ul className="space-y-2 text-slate-700">
                {included.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-400" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* HINNOITTELU */}
      <section id="hinnoittelu" className="py-14 bg-white/60 backdrop-blur-[2px] scroll-mt-24">
        <Container>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-950">
              Pricing
            </h2>
            <p className="mt-2 text-slate-700">
              Pricing is a setup fee + monthly fee. The website bot and WhatsApp bot
              can be implemented separately or as part of the same solution.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingTiers.map((p) => (
              <div
                key={p.name}
                className="rounded-3xl border border-sky-200 bg-white p-8 shadow-sm"
              >
                <div className="inline-flex rounded-full bg-sky-950 px-3 py-1 text-xs font-semibold text-white">
                  {p.badge}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-sky-950">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {p.summary}
                </p>

                <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50 p-4">
                  <div className="text-xs font-semibold text-sky-600">Setup</div>
                  <div className="text-2xl font-extrabold text-sky-950">
                    {p.setup}
                  </div>
                </div>
                <div className="mt-3 rounded-2xl border border-sky-200 bg-sky-50 p-4">
                  <div className="text-xs font-semibold text-sky-600">Monthly</div>
                  <div className="text-xl font-bold text-sky-950">
                    {p.monthly}
                  </div>
                </div>

                <div className="mt-5 space-y-1 text-sm text-slate-700">
                  {p.bullets.map((b) => (
                    <div key={b}>• {b}</div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/#yhteys"
                    className="rounded-lg px-5 py-3 text-white bg-sky-900 hover:bg-sky-800 text-center font-semibold block"
                  >
                    Request a demo
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Coexistence-lisäosa */}
          <div className="mt-8 grid gap-6 lg:grid-cols-1">
            {addons.map((a) => (
              <div
                key={a.name}
                className="rounded-3xl border border-sky-200 bg-white p-8 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="max-w-2xl">
                    <h3 className="text-xl sm:text-2xl font-bold text-sky-950">
                      {a.name}
                    </h3>
                    <p className="mt-2 text-slate-700 text-sm">
                      {a.summary}
                    </p>

                    <div className="mt-4 grid gap-2 text-sm text-slate-700">
                      {a.bullets.map((b) => (
                        <div key={b}>• {b}</div>
                      ))}
                    </div>
                  </div>

                  <div className="min-w-[240px]">
                    <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
                      <div className="text-xs font-semibold text-sky-600">Setup add-on</div>
                      <div className="text-2xl font-extrabold text-sky-950">
                        {a.setup}
                      </div>
                    </div>
                    <div className="mt-3 rounded-2xl border border-sky-200 bg-sky-50 p-4">
                      <div className="text-xs font-semibold text-sky-600">Monthly add-on</div>
                      <div className="text-xl font-bold text-sky-950">
                        {a.monthly}
                      </div>
                    </div>

                    <div className="mt-4">
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 bg-white/60 backdrop-blur-[2px] scroll-mt-24">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-950">
            Frequently asked questions
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-sky-200 bg-white/95 p-6 shadow-sm"
              >
                <div className="font-bold text-sky-950">{f.q}</div>
                <p className="mt-2 text-slate-700">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* LOPPU CTA */}
      <section id="cta" className="py-16 scroll-mt-24">
        <Container>
          <div className="rounded-3xl border border-sky-200 bg-sky-950 px-8 py-12 text-white shadow-sm">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold">
                  Want to see a demo for your industry?
                </h2>
                <p className="mt-2 text-white/85">
                  Request a free 2-week trial and see how my customer service bot helps your business.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <Link
                  href="/#yhteys"
                  className="rounded-lg px-6 py-3 bg-white text-sky-950 hover:bg-sky-50 text-center font-semibold"
                >
                  Request a demo
                </Link>
                <Link
                  href="/"
                  className="rounded-lg px-6 py-3 border border-white/30 hover:bg-white/10 text-center font-semibold"
                >
                  Back to homepage
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
