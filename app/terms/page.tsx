import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Quanzhou Taiwan Investment Zone Huamaofeng Trade Co., Ltd.",
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="page-container">
        <h1 className="section-title">Terms of Service</h1>
        <p className="section-subtitle">
          Last updated: June 2026
        </p>

        <div className="mt-10 max-w-4xl text-sm">
          <p className="legal-text">
            These Terms of Service (&ldquo;Terms&rdquo;) govern the use of
            services provided by Quanzhou Taiwan Investment Zone Huamaofeng
            Trade Co., Ltd. (&ldquo;the Company,&rdquo; &ldquo;we,&rdquo; or
            &ldquo;our&rdquo;). By using our services, you agree to these Terms.
          </p>

          <p className="legal-text">
            This website is used to present company information and support
            business communication services. By using our services, users agree
            that we may contact them regarding order-related communication
            and support.
          </p>

          <h2 className="legal-heading">1. Service Scope</h2>
          <p className="legal-text">
            The Company provides customer communication services to businesses.
            Our services include helping businesses stay in touch with their
            customers, manage order follow-ups, and improve customer
            satisfaction through simple communication workflows.
          </p>

          <h2 className="legal-heading">2. Eligibility</h2>
          <p className="legal-text">
            Our services are available to businesses and legal entities. By
            using our services, you represent that you have the authority to
            bind your organization to these Terms and that your use of our
            services complies with all applicable laws and regulations.
          </p>

          <h2 className="legal-heading">3. Use of Services</h2>
          <p className="legal-text">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 mb-4">
            <li>Use our services for unsolicited marketing or spam</li>
            <li>Transmit any content that is illegal, harmful, or violates third-party rights</li>
            <li>Attempt to access systems or data without authorization</li>
            <li>Use our services in violation of any applicable data protection or privacy laws</li>
          </ul>

          <h2 className="legal-heading">4. Client Responsibilities</h2>
          <p className="legal-text">
            Clients using our services are responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 mb-4">
            <li>
              Ensuring they have obtained all necessary consents from their
              customers for communication purposes
            </li>
            <li>
              Providing accurate and lawful customer data
            </li>
            <li>
              Complying with all applicable laws in their jurisdiction
            </li>
            <li>
              Maintaining the confidentiality of their account credentials
            </li>
          </ul>

          <h2 className="legal-heading">5. Limitation of Liability</h2>
          <p className="legal-text">
            To the maximum extent permitted by law, the Company shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of or relating to the use of our
            services. Our total liability shall not exceed the amount paid by
            the client for the specific service giving rise to the claim.
          </p>

          <h2 className="legal-heading">6. Intellectual Property</h2>
          <p className="legal-text">
            All intellectual property rights in our services, including
            software, systems, and proprietary methodologies, remain the
            property of the Company. Nothing in these Terms grants you any
            rights to our intellectual property.
          </p>

          <h2 className="legal-heading">7. Termination</h2>
          <p className="legal-text">
            Either party may terminate the service agreement in accordance with
            the terms specified in the applicable service contract. Upon
            termination, each party shall return or destroy any confidential
            information belonging to the other party.
          </p>

          <h2 className="legal-heading">8. Governing Law</h2>
          <p className="legal-text">
            These Terms shall be governed by and construed in accordance with
            the laws of the People&apos;s Republic of China. Any disputes
            arising from these Terms shall be subject to the jurisdiction of
            the courts in Fujian Province, China.
          </p>

          <h2 className="legal-heading">9. Changes to Terms</h2>
          <p className="legal-text">
            We reserve the right to update these terms when necessary. Changes
            will be effective upon posting to this page. Continued use of our
            services after changes constitutes acceptance of the modified Terms.
          </p>

          <h2 className="legal-heading">10. Contact</h2>
          <p className="legal-text">
            For questions about these Terms, please contact us through the
            information provided on our Contact page.
          </p>
        </div>
      </div>
    </section>
  );
}
