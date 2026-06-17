import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Huamaofeng Trade — a small operations team in China providing customer communication support for online sellers.",
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
              Company Information
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
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Quick Facts
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
                  <strong>Registered in:</strong> Fujian Province, China
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>
                  <strong>Our Focus:</strong> Customer communication support
                  and e-commerce assistance
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>
                  <strong>Compliance:</strong> We follow Chinese business
                  regulations and data protection requirements
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Team section */}
        <div className="mt-12 bg-white rounded-xl border border-slate-200 p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Our Operations Team
          </h2>
          <div className="space-y-3 text-slate-600 leading-relaxed">
            <p>
              We are a small operations team based in China focused on supporting
              online businesses with customer communication and order coordination.
            </p>
            <p>
              Our daily work includes handling customer messages, assisting with
              follow-ups, and helping online sellers manage communication workflows
              more efficiently.
            </p>
            <p>
              We work with international e-commerce sellers and focus on improving
              response speed and customer experience through structured communication
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
