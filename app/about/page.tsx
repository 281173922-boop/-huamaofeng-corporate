import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Quanzhou Taiwan Investment Zone Huamaofeng Trade Co., Ltd. — our company profile, registration, and business operations.",
};

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="page-container">
        <h1 className="section-title">About Us</h1>

        {/* Company Info */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Company Profile
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong>Company Name:</strong> 泉州台商投资区华茂丰贸易有限公司
              </p>
              <p>
                <strong>English Name:</strong> Quanzhou Taiwan Investment Zone Huamaofeng
                Trade Co., Ltd.
              </p>
              <p>
                <strong>Company Type:</strong> Limited Liability Company (有限责任公司)
              </p>
              <p>
                <strong>Registered Country:</strong> People&apos;s Republic of China
              </p>
              <p>
                <strong>Registered Address:</strong> Room 207, Building 2, No. 513 Luoyang
                Avenue, Luoyang Town, Quanzhou Taiwan Investment Zone, Fujian Province, China
              </p>
              <p>
                <strong>Business Scope:</strong> International trade, apparel and
                accessory trading, customer communication services, and business
                consulting.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Registration Details
            </h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>
                  <strong>Legal Entity:</strong> Limited Liability Company
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>
                  <strong>Registration:</strong> Fujian Province, China
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>
                  <strong>Compliance:</strong> Full compliance with Chinese
                  business and data protection laws
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>
                  <strong>Purpose:</strong> Customer communication and
                  engagement services
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Statement */}
        <div className="mt-12 bg-white rounded-xl border border-slate-200 p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Our Commitment
          </h2>
          <div className="space-y-3 text-slate-600 leading-relaxed">
            <p>
              We are committed to providing professional customer communication
              services that comply with all applicable international and local
              regulations. Our operations are transparent, and we maintain high
              standards of data privacy and security.
            </p>
            <p>
              This corporate website serves as the official online presence of
              our company for verification and compliance purposes. All
              information provided here is accurate and matches our official
              business registration records.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
