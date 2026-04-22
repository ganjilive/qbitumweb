"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import QbitumLogo from "@/components/QbitumLogo";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50" style={{
      background: "rgba(7, 8, 15, 0.8)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <QbitumLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
              style={{
                fontFamily: "var(--font-sans)",
                color: pathname === link.href ? "#a094e8" : "#8892a4",
              }}
            >
              <span className="hover:text-white transition-colors">{link.label}</span>
              {pathname === link.href && (
                <span className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="mailto:info@qbitum.com"
            className="text-sm text-[#8892a4] hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            info@qbitum.com
          </a>
          <Link
            href="/contact"
            className="btn-glow px-5 py-2.5 text-sm"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile button */}
        <button
          className="lg:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white/70 transition-transform origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white/70 transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white/70 transition-transform origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden px-8 pb-6 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm border-b"
              style={{
                color: pathname === link.href ? "#a094e8" : "#8892a4",
                borderColor: "rgba(255,255,255,0.05)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-glow inline-block mt-5 px-5 py-2.5 text-sm">
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
