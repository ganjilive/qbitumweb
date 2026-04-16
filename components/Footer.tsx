import Link from "next/link";
import QbitumLogo from "@/components/QbitumLogo";
import { FOOTER_COMPANY_LINKS, FOOTER_SOLUTION_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ background: "#07080f", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1440px] mx-auto px-8 pt-20 pb-10">
        {/* Top divider line */}
        <div className="divider-gradient mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <QbitumLogo />
            <p className="text-sm leading-relaxed" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
              Qbitum Solutions transforms businesses with cutting-edge cloud engineering,
              AI/ML, product development, and digital transformation.
            </p>
            {/* Newsletter */}
            <div className="flex rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.03)", color: "#f0f2f8", fontFamily: "var(--font-dm-sans)" }}
              />
              <button
                className="px-4 py-3 flex-shrink-0 transition-colors"
                style={{ background: "rgba(124,111,208,0.2)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="#a094e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#0fb8a0", fontFamily: "var(--font-syne)" }}>
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-white" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#0fb8a0", fontFamily: "var(--font-syne)" }}>
              Solutions
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_SOLUTION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-white" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#0fb8a0", fontFamily: "var(--font-syne)" }}>
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide mb-1" style={{ color: "#4a5568" }}>Address</p>
                <p className="text-sm" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>7/6 Bagatalle Rd,<br />Colombo 00300</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide mb-1" style={{ color: "#4a5568" }}>Email</p>
                <a href="mailto:info@qbitum.com" className="text-sm hover:text-white transition-colors" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
                  info@qbitum.com
                </a>
              </div>
              <a
                href="https://linkedin.com/company/qbitum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                style={{ color: "#8892a4" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="divider-gradient mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#4a5568", fontFamily: "var(--font-dm-sans)" }}>
            © {new Date().getFullYear()} Qbitum Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-xs transition-colors hover:text-white" style={{ color: "#4a5568" }}>Privacy Policy</Link>
            <Link href="/contact" className="text-xs transition-colors hover:text-white" style={{ color: "#4a5568" }}>Terms of Service</Link>
            <Link href="/contact" className="btn-glow px-4 py-2 text-xs">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
