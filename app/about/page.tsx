import Link from "next/link";
import type { Metadata } from "next";
import Banner from "@/components/Banner";
import ValueTile from "@/components/ValueTile";
import { COMPANY_HISTORY, CORE_VALUES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Qbitum Solutions — our history, culture, and the values that drive us.",
};

const CULTURE_TRAITS = [
  {
    title: "Curiosity",
    desc: "We ask better questions. A culture of learning drives every product decision we make.",
    icon: (
      <path d="M12 2a7 7 0 0 1 7 7c0 2.76-1.56 5.15-3.83 6.38L15 17H9l-.17-1.62C6.56 14.15 5 11.76 5 9a7 7 0 0 1 7-7zm3 17v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1h6z" fill="rgba(255,255,255,0.5)"/>
    ),
    accent: "#a094e8",
  },
  {
    title: "Ownership",
    desc: "Every engineer and designer takes full accountability for the outcomes they deliver.",
    icon: (
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z" fill="rgba(255,255,255,0.5)"/>
    ),
    accent: "#0fb8a0",
  },
  {
    title: "Excellence",
    desc: "Good enough isn't in our vocabulary. We ship work we're genuinely proud of.",
    icon: (
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="rgba(255,255,255,0.5)"/>
    ),
    accent: "#3b82f6",
  },
  {
    title: "Collaboration",
    desc: "Distributed teams, one direction. We build together across time zones and disciplines.",
    icon: (
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="rgba(255,255,255,0.5)"/>
    ),
    accent: "#a094e8",
  },
];

const MILESTONES = [
  { value: "2014", label: "Year founded" },
  { value: "10+", label: "Years of engineering" },
  { value: "50+", label: "Engineers globally" },
  { value: "Google", label: "for Startups Cloud Program" },
];

export default function AboutPage() {
  return (
    <>
      <Banner
        headline="From Idea to Impact"
        subtext="Expert-led product innovation, built with precision and purpose."
        imageSrc="/images/banner-about.jpg"
        imageAlt="Qbitum team"
      />

      {/* Company History */}
      <section className="py-24" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-5">Our story</p>
          <h2
            className="text-5xl font-bold leading-tight mb-8"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.025em" }}
          >
            Company History
          </h2>
          <p
            className="leading-relaxed"
            style={{ color: "#8892a4", fontSize: "1.05rem", maxWidth: "760px", lineHeight: 1.8 }}
          >
            {COMPANY_HISTORY}
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section style={{ background: "#07080f", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {MILESTONES.map((m, i) => (
              <div
                key={m.label}
                className="py-14 px-8 flex flex-col gap-3"
                style={{
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <span
                  className="stat-value"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#f0f2f8", lineHeight: 1 }}
                >
                  {m.value}
                </span>
                <span className="mono text-xs uppercase tracking-widest" style={{ color: "#4a5568" }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-24" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="divider-gradient mb-16" />
          <p
            className="font-bold leading-tight"
            style={{
              fontFamily: "var(--font-sans)",
              color: "#f0f2f8",
              maxWidth: "960px",
              fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
              letterSpacing: "-0.025em",
            }}
          >
            We partner with global brands, turning challenges into growth with
            world-class design, engineering, and AI expertise.
          </p>
          <div className="divider-gradient mt-16" />
        </div>
      </section>

      {/* Culture — fixed: no more title-left/text-right split */}
      <section className="py-24" style={{ background: "#0d0f1a" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">People &amp; culture</p>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.02em" }}
          >
            Our Culture
          </h2>
          <p
            className="leading-relaxed mb-14"
            style={{ color: "#8892a4", maxWidth: "580px", fontSize: "1rem", lineHeight: 1.75 }}
          >
            We believe great products are built by people who care. Our culture is shaped by curiosity,
            ownership, and a deep commitment to doing excellent work — wherever in the world our team
            members are based.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CULTURE_TRAITS.map((trait, i) => (
              <div
                key={trait.title}
                className="rounded-2xl p-8 flex flex-col gap-5 glass-card glass-card-hover relative overflow-hidden"
              >
                {/* Accent corner line */}
                <div
                  className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
                  style={{ borderTop: `1px solid ${trait.accent}33`, borderLeft: `1px solid ${trait.accent}33` }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${trait.accent}12`,
                    border: `1px solid ${trait.accent}30`,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24">{trait.icon}</svg>
                </div>
                <div>
                  <span className="mono text-xs block mb-2" style={{ color: "#4a5568" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8" }}
                  >
                    {trait.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8892a4" }}>
                    {trait.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-24" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">Core values</p>
          <h2
            className="text-4xl font-bold leading-tight mb-14"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.02em" }}
          >
            Our Guiding Principles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {CORE_VALUES.map((v) => (
              <ValueTile key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="relative overflow-hidden py-32"
        style={{ background: "#07080f", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="glow-orb"
          style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(15,184,160,0.1) 0%, transparent 65%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        />
        <div className="absolute inset-0 neural-grid opacity-15" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
          <p className="section-label mb-6">Let&apos;s connect</p>
          <h2
            className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.025em" }}
          >
            Ready to work together?
          </h2>
          <p
            className="mt-4 mb-10 mx-auto"
            style={{ color: "#8892a4", lineHeight: 1.7, maxWidth: "480px" }}
          >
            Whether you have a project in mind or just want to explore possibilities, we&apos;d love to hear from you.
          </p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-3 px-10 py-4 text-sm">
            Contact Us
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
