import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Quanzhou Taiwan Investment Zone Huamaofeng Trade Co., Ltd.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="page-container">
        <h1 className="section-title">Privacy Policy</h1>
        <p className="section-subtitle">
          Last updated: June 2026
        </p>

        <div className="mt-10 max-w-4xl text-sm">
          <p className="legal-text">
            Quanzhou Taiwan Investment Zone Huamaofeng Trade Co., Ltd.
            (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the Company&rdquo;) is
            committed to protecting the privacy of individuals whose data we
            process in the course of our business operations. This Privacy
            Policy explains how we collect, use, and protect personal data.
          </p>

          <h2 className="legal-heading">1. Data Controller</h2>
          <p className="legal-text">
            <strong>Company:</strong> 泉州台商投资区华茂丰贸易有限公司
            <br />
            <strong>Address:</strong> Room 207, Building 2, No. 513 Luoyang
            Avenue, Luoyang Town, Quanzhou Taiwan Investment Zone, Fujian
            Province, China
            <br />
            <strong>Email:</strong> To be confirmed
          </p>

          <h2 className="legal-heading">2. What Data We Collect</h2>
          <p className="legal-text">
            In the course of providing customer communication and engagement
            services, we may process the following categories of personal data:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 mb-4">
            <li>
              Contact information (name, phone number, email address) provided
              by our business clients for the purpose of customer outreach
            </li>
            <li>
              Communication records and correspondence exchanged through
              messaging platforms
            </li>
            <li>
              Basic business information about our clients and their customers
            </li>
          </ul>

          <h2 className="legal-heading">
            3. How We Use Your Data
          </h2>
          <p className="legal-text">
            We process personal data solely for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 mb-4">
            <li>
              Facilitating customer communication and re-engagement on behalf
              of our business clients
            </li>
            <li>
              Managing and responding to customer inquiries
            </li>
            <li>
              Maintaining records of business communications
            </li>
            <li>
              Complying with legal and regulatory obligations
            </li>
          </ul>

          <h2 className="legal-heading">4. Data Sharing</h2>
          <p className="legal-text">
            We do not sell, rent, or trade personal data to third parties.
            We do not share personal data with third parties except:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 mb-4">
            <li>As necessary to provide our services (e.g., through messaging platforms)</li>
            <li>When required by law or legal process</li>
            <li>With explicit consent from the data subject</li>
          </ul>

          <h2 className="legal-heading">5. Data Retention</h2>
          <p className="legal-text">
            We retain personal data only for as long as necessary to fulfill the
            purposes for which it was collected, or as required by applicable
            law. When data is no longer needed, it is securely deleted or
            anonymized.
          </p>

          <h2 className="legal-heading">6. Data Subject Rights</h2>
          <p className="legal-text">
            Individuals whose data we process have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 mb-4">
            <li>Request access to their personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of their personal data</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
          </ul>
          <p className="legal-text">
            To exercise any of these rights, please contact us using the
            information provided on our Contact page.
          </p>

          <h2 className="legal-heading">7. Data Security</h2>
          <p className="legal-text">
            We implement appropriate technical and organizational measures to
            protect personal data against unauthorized access, alteration,
            disclosure, or destruction.
          </p>

          <h2 className="legal-heading">
            8. Changes to This Policy
          </h2>
          <p className="legal-text">
            We may update this Privacy Policy from time to time. Changes will
            be posted on this page with an updated revision date.
          </p>

          <h2 className="legal-heading">9. Contact</h2>
          <p className="legal-text">
            If you have any questions about this Privacy Policy or wish to
            exercise your data rights, please contact us at the address listed
            on our Contact page.
          </p>
        </div>
      </div>
    </section>
  );
}
