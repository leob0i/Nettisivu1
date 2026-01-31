import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Leo Digital",
  description:
    "Privacy policy describing how Leo Digital processes personal data for websites, chatbots, and integrations.",
};

export default function PrivacyPage() {
  const effectiveDate = "30 January 2026";
  const contactEmail = "leo@leodigital.fi";

  return (
    <main className="mx-auto max-w-3xl px-4 pb-10 pt-24 md:pt-28">

      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-neutral-600">Effective date: {effectiveDate}</p>
        <p className="mt-4 text-neutral-700">
          This Privacy Policy explains how Leo Digital (“we”, “us”) processes personal data when you visit our website,
          contact us, or use services we provide (e.g., websites, chatbots, integrations).
        </p>
      </header>

      <section className="space-y-6 text-neutral-800 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold">1. Controller and contact</h2>
          <p className="mt-2">
            Controller: <strong>Leo Digital</strong>
            <br />
            Contact:{" "}
            <a className="underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">2. What data we collect</h2>
          <ul className="mt-2 list-disc pl-5">
            <li>
              <strong>Contact data</strong> you provide (e.g., name, email, phone, message content) via forms or email.
            </li>
            <li>
              <strong>Service-related data</strong> needed to deliver agreed services (e.g., project messages, configuration details,
              conversation state for chatbots).
            </li>
            <li>
              <strong>Technical data</strong> (e.g., IP address, device/browser info, basic logs) for security and performance.
            </li>
          </ul>
          <p className="mt-2 text-sm text-neutral-600">
            We do not intentionally collect sensitive personal data. Please avoid sending sensitive data unless it’s necessary and
            agreed for the service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">3. Purposes and legal bases</h2>
          <ul className="mt-2 list-disc pl-5">
            <li>
              <strong>Providing services</strong> and responding to inquiries (contract / legitimate interest).
            </li>
            <li>
              <strong>Security</strong>, fraud prevention, and troubleshooting (legitimate interest).
            </li>
            <li>
              <strong>Legal obligations</strong> (e.g., accounting) when applicable.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">4. Sharing of data</h2>
          <p className="mt-2">
            We do not sell personal data. We do not share personal data with third parties except:
          </p>
          <ul className="mt-2 list-disc pl-5">
            <li>
              <strong>Service providers</strong> needed to run the service (e.g., hosting, email delivery, analytics, messaging
              platforms like Meta/WhatsApp) under appropriate safeguards.
            </li>
            <li>
              <strong>Legal requirements</strong> if we are required to comply with law or lawful requests.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">5. Data retention</h2>
          <p className="mt-2">
            We keep personal data only as long as necessary for the purposes described above, unless we must retain certain
            information for legal, accounting, security, or dispute-handling reasons.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">6. International transfers</h2>
          <p className="mt-2">
            Some service providers may process data outside the EU/EEA. Where applicable, we use safeguards such as standard
            contractual clauses or equivalent mechanisms required by law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">7. Your rights</h2>
          <p className="mt-2">
            You may request access, correction, deletion, or restriction of your personal data, and object to certain processing
            where applicable. Contact us at{" "}
            <a className="underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
            .
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            If you believe your data is processed unlawfully, you may also contact your local data protection authority.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">8. WhatsApp / chatbot services</h2>
          <p className="mt-2">
            If we provide WhatsApp/chatbot solutions for business customers, message content and metadata may be processed to
            deliver replies, route to a human agent when needed, and maintain conversation context. Business customers determine
            what end-user content is collected in their customer support channels.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">9. Data deletion</h2>
          <p className="mt-2">
            You can request deletion by following our instructions here:{" "}
            <a className="underline" href="/data-deletion">
              leodigital.fi/data-deletion
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">10. Changes</h2>
          <p className="mt-2">
            We may update this Privacy Policy from time to time. The effective date above shows the latest version.
          </p>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
          <p>
            Questions? Email{" "}
            <a className="underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
