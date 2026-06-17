import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Quanzhou Taiwan Investment Zone Huamaofeng Trade Co., Ltd. — official contact information.",
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="page-container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">
          For business inquiries, please reach out to us through the
          channels below.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Company Address
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Room 207, Building 2, No. 513 Luoyang Avenue
                <br />
                Luoyang Town, Quanzhou Taiwan Investment Zone
                <br />
                Fujian Province, 362121
                <br />
                China
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Contact Information
              </h2>
              <div className="space-y-3 text-slate-600">
                <div>
                  <span className="text-sm font-medium text-slate-900">
                    Email:
                  </span>
                  <p className="text-slate-500">
                    To be confirmed — will be updated once registered.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Note — natural, not verification-focused */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 h-fit">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              Our Company Details
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              All contact information listed here matches our official business
              registration records. If you need to reach us, please email us
              and we will get back to you as soon as possible.
            </p>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-xs text-slate-500">
                <strong>Company:</strong> 泉州台商投资区华茂丰贸易有限公司
                <br />
                <strong>Registered in:</strong> Fujian, China
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
