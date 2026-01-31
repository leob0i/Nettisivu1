import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Leo Digital",
  description:
    "Leo Digital terms of service. Service scope, delivery, pricing, payments, IP, liability, and data protection.",
};

export default function TermsPage() {
  const effectiveDate = "30 January 2026";

  return (
    <main className="mx-auto max-w-3xl px-4 pt-24 pb-10">

      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-neutral-600">Effective date: {effectiveDate}</p>
        <p className="mt-4 text-neutral-700">
          These Terms of Service (“Terms”) apply to services provided by Leo Digital (“we”, “us”).
          By ordering or using our services, you agree to these Terms.
        </p>
      </header>

      <section className="space-y-6 text-neutral-800 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold">1. Provider information</h2>
          <p className="mt-2">
            Provider: <strong>Leo Digital</strong>
            <br />
            Contact: <a className="underline" href="mailto:leo@leodigital.fi">leo@leodigital.fi</a>
            <br />
            Website: <a className="underline" href="https://www.leodigital.fi">leodigital.fi</a>
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Note: If you want, add your official business details here (e.g., business ID/Y-tunnus, legal name, postal address).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">2. Services</h2>
          <p className="mt-2">
            We provide digital services such as websites, chatbots, integrations, analytics/visibility improvements,
            and related consulting and support. The exact scope is defined case-by-case in a written proposal,
            order confirmation, or statement of work (“SOW”).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">3. Quotes, pricing, and changes</h2>
          <p className="mt-2">
            Prices, delivery timelines, and inclusions are always agreed case-by-case in writing.
            Any publicly shown examples or starting prices are indicative and not a binding offer unless confirmed in writing.
          </p>
          <p className="mt-2">
            If the scope changes after agreement, we will propose updated pricing/timeline before continuing the changed work.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">4. Customer responsibilities</h2>
          <p className="mt-2">
            You are responsible for providing accurate content, materials, approvals, and access needed to deliver the service
            (e.g., logos, copy, images, domain/DNS access, platform credentials). Delays in approvals or missing access may affect timelines.
          </p>
          <p className="mt-2">
            You confirm that you have rights to the content you provide and that it does not infringe third-party rights.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">5. Deliverables and acceptance</h2>
          <p className="mt-2">
            Deliverables are considered accepted when (a) you approve them in writing, (b) they are published/handed over at your request,
            or (c) you use them in production, unless otherwise agreed in the SOW.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">6. Payments and invoices</h2>
          <p className="mt-2">
            Payment terms are defined in the SOW/invoice. If not otherwise agreed, invoices are payable within 7–14 days.
            Late payments may delay delivery or ongoing support until resolved.
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            (Adjust the default payment terms above to match your real practice.)
          </p>
        </div>

        <div>
  <h2 className="text-xl font-semibold">7. Intellectual property</h2>
  <p className="mt-2">
    <strong>Websites and agreed customer-specific deliverables:</strong> Unless otherwise agreed, you own the final
    website deliverables created specifically for you after full payment. Third-party components (e.g., libraries,
    fonts, stock assets) remain subject to their own licenses.
  </p>
  <p className="mt-2">
    <strong>Chatbot backend / software / infrastructure:</strong> Our chatbot backend, source code, platform
    components, automations, and hosting setup remain the property of Leo Digital. We provide you a limited,
    non-exclusive, non-transferable right to use the service during the agreed service term (subscription/contract).
    Access to the hosted service may end when the service term ends or if the agreement is terminated, unless otherwise
    agreed in writing.
  </p>
  <p className="mt-2">
    If source code handover, self-hosting, or broader transfer rights are required, they must be agreed separately in
    writing (including pricing and scope).
  </p>
  <p className="mt-2">
    We may reuse general know-how, non-confidential techniques, and generic components that do not contain your
    confidential information.
  </p>
</div>


        <div>
          <h2 className="text-xl font-semibold">8. Third-party services</h2>
          <p className="mt-2">
            Services may rely on third-party platforms (e.g., hosting providers, Meta/WhatsApp, analytics tools).
            We are not responsible for third-party outages, policy changes, or actions taken by third parties.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">9. Data protection and confidentiality</h2>
          <p className="mt-2">
            We do not sell customer data. We only process personal data to provide the agreed services, maintain security,
            and comply with legal obligations. We do not share data with third parties unless required to deliver the service
            (e.g., hosting, email, messaging platforms) or required by law.
          </p>
          <p className="mt-2">
            If needed, we can sign a data processing agreement (DPA) for business customers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">10. Warranty and limitation of liability</h2>
          <p className="mt-2">
            We provide services with reasonable care and professional skill. However, we do not guarantee specific business results
            (e.g., ranking positions, sales, lead volume), because outcomes depend on external factors.
          </p>
          <p className="mt-2">
            To the maximum extent permitted by law, our liability is limited to the fees paid for the specific service that caused the claim.
            We are not liable for indirect or consequential damages.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">11. Termination</h2>
          <p className="mt-2">
            Either party may terminate according to the SOW. If not otherwise agreed, termination requires reasonable notice.
            You remain responsible for payment for work already delivered or completed up to the termination date.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">12. Governing law</h2>
          <p className="mt-2">
            These Terms are governed by the laws of Finland, unless mandatory consumer protection laws apply.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">13. Updates</h2>
          <p className="mt-2">
            We may update these Terms. The effective date above indicates the latest version.
          </p>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
          <p>
            Questions? Contact <a className="underline" href="mailto:leo@leodigital.fi">leo@leodigital.fi</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
