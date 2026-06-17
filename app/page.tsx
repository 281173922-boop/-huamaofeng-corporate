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
              We are a small registered business based in China, focused on helping online
              sellers manage customer communication and post-purchase support.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                ✓ Legally Registered in China
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                ✓ Customer Support Services
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Scope — one sentence, no cards */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="page-container">
          <h2 className="section-title">What We Do</h2>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-4xl">
            We help small online businesses stay in touch with their customers, manage
            order follow-ups, and improve customer retention through simple messaging
            and support services.
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16">
        <div className="page-container">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            A simple process that helps businesses stay connected with their customers.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Share Information",
                description:
                  "Businesses share customer order information with us.",
              },
              {
                step: "2",
                title: "Organize Records",
                description:
                  "We organize and manage customer records.",
              },
              {
                step: "3",
                title: "Customer Follow-ups",
                description:
                  "We assist in customer communication and follow-ups.",
              },
              {
                step: "4",
                title: "Feedback",
                description:
                  "We help businesses understand customer responses and feedback.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-6 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement — real small business tone */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="page-container">
          <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-10">
            <h2 className="section-title">About Our Business</h2>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                We are a small registered business based in China, focused on helping
                online sellers manage customer communication and post-purchase support.
              </p>
              <p>
                We work with e-commerce sellers to help them stay connected with their
                customers, organize order information, and improve customer satisfaction
                through simple communication workflows.
              </p>
              <p>
                This website represents our official business presence and is used for
                company introduction and communication purposes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
