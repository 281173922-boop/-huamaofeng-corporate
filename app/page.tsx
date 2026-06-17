export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="page-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Quanzhou Taiwan Investment Zone
              <br />
              Huamaofeng Trade Co., Ltd.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed">
              We provide customer communication and engagement services for businesses worldwide.
              We help companies manage customer relationships and re-engagement through compliant
              and professional communication channels.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                ✓ Legally Registered in China
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                ✓ Compliant Business Operations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Scope */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="page-container">
          <h2 className="section-title">Business Scope</h2>
          <p className="section-subtitle">
            Our company is legally registered in China and operates within the
            following business areas.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Customer Communication",
                description:
                  "Professional customer outreach and re-engagement services through approved communication channels.",
              },
              {
                title: "Business Messaging",
                description:
                  "Enterprise-level messaging solutions for customer relationship management and engagement.",
              },
              {
                title: "Trade & Consulting",
                description:
                  "International trade consulting and business communication services for cross-border operations.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-16">
        <div className="page-container">
          <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-10">
            <h2 className="section-title">Corporate Statement</h2>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Quanzhou Taiwan Investment Zone Huamaofeng Trade Co., Ltd. is a legally
                registered company in Fujian Province, China. We are committed to
                operating in full compliance with all applicable laws and regulations.
              </p>
              <p>
                Our services are designed to help businesses manage customer
                communication and engagement in a professional, compliant, and
                effective manner. We do not engage in unsolicited marketing,
                spam, or any activities that violate data protection regulations.
              </p>
              <p>
                This website is used for corporate verification purposes,
                including WhatsApp Business API application and Meta Business
                Verification.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
