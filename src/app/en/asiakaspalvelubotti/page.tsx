import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Customer Service Bot – LeoDigital",
  description:
    "An intelligent customer service bot that answers 24/7, reduces support load and increases leads.",
};

export default function Page() {
  return (
    <main className="pb-20">
      {/* Hero – clear border-b */}
      <section id="hero" className="relative overflow-hidden border-b scroll-mt-24">
        {/* Full-bleed background image – NO overlay */}
        <Image
          src="/services/asiakaspalvelubotti-hero.jpg"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="absolute inset-0 -z-10 object-cover object-center pointer-events-none"
        />

        <Container className="py-16 min-h-[60vh] flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-extrabold">🤖 Intelligent Customer Service Bot</h1>
          <p className="mt-2 text-lg font-semibold">A turnkey solution for your business!</p>
          <p className="mt-3 text-white/90 max-w-2xl">
            We deliver a modern customer service bot for WhatsApp or your website — tailored to your needs.
            And yes, at one of the most affordable prices on the market!
          </p>
          <p className="mt-4 text-white/90 max-w-3xl">
            This is not a classic “did you mean…?” bot, but a truly intelligent, AI-powered assistant that
            understands typos, dialects, slang and complex questions. You can chat with the Leo Digital bot
            via the chat button in the bottom-right corner.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#yhteys"
              className="rounded-md px-5 py-2.5 text-white bg-slate-900 hover:bg-slate-800 text-center"
            >
              Request a demo
            </Link>
            <Link
              href="#miten"
              className="rounded-md px-5 py-2.5 border border-slate-300 hover:bg-white text-center"
            >
              See features
            </Link>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section id="miten" className="py-10 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">How does the bot work?</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Answers questions automatically based on your company’s own information.</li>
            <li>Complements answers with GPT-4o politely in natural language.</li>
            <li>Understands tone and situations, and escalates to a human or email when needed.</li>
            <li>Keeps improving over time — the bot is never “finished”.</li>
            <li>Yes, we can make it multilingual and auto-detect the customer’s language.</li>
          </ul>
        </Container>
      </section>

      {/* Collaboration */}
      <section id="yhteistyo" className="py-10 bg-slate-50 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">You’re involved from day one</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
            <li>You choose the tone — casual, formal, asking clarifications…</li>
            <li>You define special cases (e.g. how and when to route to a human).</li>
            <li>We decide together what memory and knowledge the bot learns (policies, schedules, cancellations…).</li>
          </ul>
          <p className="mt-4 text-slate-700">
            The result is a solution that fits your brand and service model perfectly.
          </p>
        </Container>
      </section>

      {/* Package */}
      <section id="paketti" className="py-10 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">What’s included in the fixed package</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Design & build with Node.js and OpenAI GPT-4o</li>
            <li>FAQ flow + AI fallback</li>
            <li>WhatsApp Business API (Meta) integration</li>
            <li>Click-to-chat link and QR code</li>
            <li>Assistance with Meta Business Manager setup</li>
            <li>Instructions and onboarding</li>
            <li>Deployable to your server or our dev server</li>
            <li>One test round before go-live, final polish</li>
          </ul>
        </Container>
      </section>

      {/* Trial */}
      <section id="testijakso" className="py-10 bg-slate-50 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">Trial period</h2>
          <p className="mt-3 text-slate-700">
            Once the bot is ready, we hand it over for ~2 weeks of testing.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Try the bot like your customers would</li>
            <li>Find situations and responses to fine-tune</li>
            <li>Make the final adjustments before launch</li>
          </ul>
        </Container>
      </section>

      {/* Pricing */}
      <section id="hinnoittelu" className="py-10 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">Pricing</h2>
          <p className="mt-3 text-slate-700">Turnkey package: €790 + VAT</p>
        </Container>
      </section>

      {/* Maintenance */}
      <section id="yllapito" className="py-10 bg-slate-50 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">Maintenance & continuous improvement</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Minimum: €50 / task</li>
            <li>Hourly: €20 / h</li>
            <li>We can also agree on ongoing maintenance & development.</li>
          </ul>
        </Container>
      </section>

      {/* Extra costs */}
      <section id="lisakulut" className="py-10 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">
            Possible extra costs (paid directly to providers; current rough estimates)
          </h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>OpenAI API: usage-based (typically a few euros per month)</li>
            <li>Meta / WhatsApp API: first 1000 conversations/month free, then ~€0.06 / conversation</li>
            <li>Server: your own server, or I can provide one for an additional fee</li>
          </ul>
        </Container>
      </section>

      {/* Customization */}
      <section id="raatalointi" className="py-16 bg-slate-50 scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold">Tailored to you</h2>
          <p className="mt-3 text-slate-700">
            Everything is built to match your brand — languages, tone of voice, visuals and any special requirements.
          </p>
          <h3 className="mt-6 text-xl font-semibold">If you want, the bot can later be taught to:</h3>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>Automatically read your website content</li>
            <li>Update information dynamically</li>
            <li>And more — I’ll go the extra mile for your satisfaction!</li>
          </ul>
          <p className="mt-4 text-slate-700">
            My competitive pricing combined with an AI-powered bot makes this one of the most effective support solutions on the market.
          </p>
        </Container>
      </section>

      {/* Why this bot */}
      <section id="miksi" className="py-16 border-t scroll-mt-24">
        <Container>
          <h2 className="text-2xl font-bold text-center">🤔 Why choose this bot?</h2>
          <ol className="mt-4 grid gap-6 sm:grid-cols-2">
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">1. Saves time and money immediately</div>
              <p className="text-slate-700 mt-1">Answers 24/7 — no evening or weekend shifts needed.</p>
            </li>
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">2. Pays for itself quickly</div>
              <p className="text-slate-700 mt-1">Often costs the same as one weekend shift — but works all the time.</p>
            </li>
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">3. Not a basic bot — it’s intelligent</div>
              <p className="text-slate-700 mt-1">Understands dialects, typos and slang. Sounds like your brand.</p>
            </li>
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">4. You control its behaviour</div>
              <p className="text-slate-700 mt-1">Choose the tone, actions and special cases — fully customized.</p>
            </li>
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">5. Continuously improving</div>
              <p className="text-slate-700 mt-1">Can learn to read your site, update dynamically and expand to new platforms.</p>
            </li>
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">6. Test before launch</div>
              <p className="text-slate-700 mt-1">During a one-to-two-week trial we iron out issues and polish the bot.</p>
            </li>
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">7. Fixed price — no surprises</div>
              <p className="text-slate-700 mt-1">Full package from €790 + VAT. Updates from €50 or €20/h.</p>
            </li>
            <li className="rounded-lg border bg-white p-5">
              <div className="font-semibold">8. One of the most affordable options</div>
              <p className="text-slate-700 mt-1">No hidden fees, no monthly charges — only usage-based costs.</p>
            </li>
          </ol>
        </Container>
      </section>
    </main>
  );
}
