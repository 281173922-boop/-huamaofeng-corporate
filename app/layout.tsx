import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Huamaofeng Trade | Corporate Website",
    template: "%s | Huamaofeng Trade",
  },
  description:
    "Quanzhou Taiwan Investment Zone Huamaofeng Trade Co., Ltd. — A legally registered company providing customer communication and engagement services.",
  keywords: ["Huamaofeng", "华茂丰", "泉州华茂丰", "customer communication"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Huamaofeng Trade Co., Ltd.",
    description:
      "A legally registered Chinese company providing professional customer communication and engagement services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <header className="border-b border-slate-200 bg-white">
          <nav className="page-container flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-900">
                Huamaofeng
              </span>
              <span className="hidden sm:inline text-sm text-slate-400 font-normal">
                Trade Co., Ltd.
              </span>
            </a>
            <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="/" className="hover:text-brand-600 transition-colors">
                Home
              </a>
              <a
                href="/about"
                className="hover:text-brand-600 transition-colors"
              >
                About
              </a>
              <a
                href="/contact"
                className="hover:text-brand-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="page-container py-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  Huamaofeng Trade
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Quanzhou Taiwan Investment Zone Huamaofeng Trade Co., Ltd.
                  <br />
                  A legally registered company in China.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  Pages
                </h3>
                <ul className="space-y-2 text-xs text-slate-500">
                  <li>
                    <a href="/" className="hover:text-brand-600 transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-brand-600 transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-brand-600 transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="hover:text-brand-600 transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-brand-600 transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  Compliance
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  This website serves as the official corporate presence for
                  business verification purposes.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200 text-center">
              <p className="text-xs text-slate-400">
                &copy; {new Date().getFullYear()} Quanzhou Taiwan Investment Zone Huamaofeng Trade Co., Ltd.
                All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
