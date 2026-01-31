import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion Instructions | Leo Digital",
  description:
    "Instructions for requesting deletion of personal data related to Leo Digital services and Meta/Facebook app connections.",
};

export default function DataDeletionPage() {
  const contactEmail = "leo@leodigital.fi";

  return (
    <main className="mx-auto max-w-3xl px-4 pt-24 pb-10">

      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">User Data Deletion Instructions</h1>
        <p className="mt-4 text-neutral-700">
          Leo Digital does not sell personal data. We only process data that is necessary to provide our services,
          keep systems secure, and comply with legal obligations.
        </p>
      </header>

      <section className="space-y-6 text-neutral-800 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold">1. How to request deletion</h2>
          <p className="mt-2">
            To request deletion of your personal data, email us at{" "}
            <a className="underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>{" "}
            with the subject line <strong>“Data Deletion Request”</strong>.
          </p>
          <ul className="mt-3 list-disc pl-5">
            <li>Your name and contact email/phone number used with our service</li>
            <li>Which service/project the request relates to (if known)</li>
            <li>Any identifiers you have (e.g., order reference), if applicable</li>
          </ul>
          <p className="mt-2 text-sm text-neutral-600">
            We aim to respond within a reasonable time and complete deletion where possible, except for data we must keep for
            legal, accounting, security, or dispute-handling purposes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">2. If you used Facebook/Meta login or connected a Meta app</h2>
          <p className="mt-2">
            If you connected a Meta/Facebook app to your account, you can also remove the app connection directly in your
            Facebook settings under <strong>Apps and Websites</strong>. Removing the app connection stops future data sharing.
          </p>
          <p className="mt-2 text-sm text-neutral-600">
  Meta allows providing either a Data Deletion Callback URL or a Data Deletion Instructions URL (this page) for apps.{" "}
  <a
    className="underline"
    href="https://developers.facebook.com/docs/development/create-an-app/app-dashboard/data-deletion-callback/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Meta documentation
  </a>
  .
</p>

        </div>

        <div>
          <h2 className="text-xl font-semibold">3. WhatsApp-related data</h2>
          <p className="mt-2">
            If our service involves WhatsApp (e.g., customer-service chatbots), we may process message content and metadata
            needed to deliver replies, manage conversation state, and provide support. We keep data minimised and do not share it
            with third parties except where required to run the service (e.g., hosting providers, Meta/WhatsApp infrastructure).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">4. What may be retained</h2>
          <p className="mt-2">
            Some information may need to be retained for legal obligations (e.g., accounting records), security logs, fraud prevention,
            or to resolve disputes. When retention is required, we restrict access and keep it only as long as necessary.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">5. Contact</h2>
          <p className="mt-2">
            Email: <a className="underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
          <p>
            If you are a business customer and need a signed Data Processing Agreement (DPA), request it via{" "}
            <a className="underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
