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
      <path d="M12 2a7 7 0 0 1 7 7c0 2.76-1.56 5.15-3.83 6.38L15 17H9l-.17-1.62C6.56 14.15 5 11.76 5 9a7 7 0 0 1 7-7zm3 17v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1h6z" fill="#a094e8"/>
    ),
  },
  {
    title: "Ownership",
    desc: "Every engineer and designer takes full accountability for the outcomes they deliver.",
    icon: (
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z" fill="#0fb8a0"/>
    ),
  },
  {
    title: "Excellence",
    desc: "Good enough isn't in our vocabulary. We ship work we're genuinely proud of.",
    icon: (
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#3b82f6"/>
    ),
  },
  {
    title: "Collaboration",
    desc: "Distributed teams, one direction. We build together across time zones and disciplines.",
    icon: (
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="#a094e8"/>
    ),
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-up">
              <p className="section-label mb-5">Our story</p>
              <h2 className="text-5xl font-extrabold leading-tight" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
                Company <span className="gradient-text">History</span>
              </h2>
            </div>
            <div className="glass-card rounded-2xl p-8 animate-fade-up-delay-1">
              <p className="text-sm leading-relaxed" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
                {COMPANY_HISTORY}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20" style={{ background: "#0d0f1a" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map((m, i) => (
              <div key={m.label} className="glass-card rounded-2xl p-8 flex flex-col gap-3 text-center">
                <span className="text-4xl font-extrabold gradient-text" style={{ fontFamily: "var(--font-syne)" }}>
                  {m.value}
                </span>
                <span className="text-xs uppercase tracking-widest" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="relative py-24 overflow-hidden" style={{ background: "#07080f" }}>
        <div className="glow-orb" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(124,111,208,0.08) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="divider-gradient mb-16" />
          <p
            className="font-bold leading-tight"
            style={{
              fontFamily: "var(--font-syne)",
              color: "#f0f2f8",
              maxWidth: "960px",
              fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
            }}
          >
            We partner with global brands, turning challenges into growth with{" "}
            <span className="gradient-text">world-class design, engineering, and AI expertise.</span>
          </p>
          <div className="divider-gradient mt-16" />
        </div>
      </section>

      {/* Culture */}
      <section className="py-24" style={{ background: "#0d0f1a" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-14 mb-14 items-end">
            <div className="flex-shrink-0">
              <p className="section-label mb-4">People & culture</p>
              <h2 className="text-4xl font-extrabold" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
                Our Culture
              </h2>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)", maxWidth: "520px" }}>
              We believe great products are built by people who care. Our culture is shaped by curiosity, ownership, and a deep commitment to doing excellent work — wherever in the world our team members are based.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CULTURE_TRAITS.map((trait) => (
              <div key={trait.title} className="glass-card rounded-2xl p-8 flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24">{trait.icon}</svg>
                </div>
                <h3 className="text-base font-bold" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>{trait.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>{trait.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-24" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-12">
            <p className="section-label mb-4">Core values</p>
            <h2 className="text-4xl font-extrabold leading-tight" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
              Our Guiding <span className="gradient-text">Principles</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {CORE_VALUES.map((v) => (
              <ValueTile key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative py-24 overflow-hidden" style={{ background: "#0d0f1a" }}>
        <div className="glow-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(124,111,208,0.15) 0%, transparent 70%)", top: "-20%", right: "-5%" }} />
        <div className="glow-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(15,184,160,0.1) 0%, transparent 70%)", bottom: "-20%", left: "5%" }} />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="section-label mb-4">Let's connect</p>
            <h2 className="text-4xl font-extrabold leading-tight" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
              Ready to work <span className="gradient-text">together?</span>
            </h2>
            <p className="mt-4 text-sm max-w-md" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)", lineHeight: 1.7 }}>
              Whether you have a project in mind or just want to explore possibilities, we'd love to hear from you.
            </p>
          </div>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-3 px-8 py-4 text-sm flex-shrink-0">
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
