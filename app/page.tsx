import Link from "next/link";
import type { Metadata } from "next";
import Banner from "@/components/Banner";
import TestimonialCard from "@/components/TestimonialCard";
import LogoMarquee from "@/components/LogoMarquee";
import ServicesAccordion from "@/components/ServicesAccordion";
import {
  TESTIMONIALS,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Qbitum Solutions — Product Studio for Startups & Scale-ups",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <Banner
        variant="hero"
        imageSrc="/images/banner-home.jpg"
        imageAlt="Qbitum — Product Studio"
        labelText="Qbitum Solutions"
        headline="Ship Faster. Scale Smarter."
        subtext="Whether you're launching a new product, scaling your engineering team, or fixing what's broken — Qbitum delivers the software expertise to get it done right."
        ctaHref="/contact"
        ctaLabel="Start a Conversation"
      />

      {/* ── LOGO MARQUEE ─────────────────────────────────────────────── */}
      <LogoMarquee />

      {/* ── ABOUT / STATS ────────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-8">About Qbitum</p>
          <p
            className="font-normal mb-20"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1.35rem, 2.4vw, 2rem)",
              color: "#f0f2f8",
              lineHeight: 1.5,
              maxWidth: "900px",
              letterSpacing: "-0.01em",
            }}
          >
            We are a product studio and engineering partner for startups and scale-ups.
            Whether you need to go from idea to MVP in weeks, embed a complete development
            team, or get expert advisory on architecture and design — Qbitum delivers the
            right capability for where you are now.
          </p>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-0"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            {[
              { value: "10+", label: "Years of engineering" },
              { value: "50+", label: "Products shipped" },
              { value: "3×", label: "Faster time to market" },
              { value: "24/7", label: "Dedicated support" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="py-10 px-8 flex flex-col gap-3"
                style={{
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <p
                  className="stat-value"
                  style={{
                    fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                    color: "#f0f2f8",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="mono text-xs uppercase tracking-widest"
                  style={{ color: "#4a5568" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD — Services Accordion ───────────────────────── */}
      <ServicesAccordion />


{/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ background: "#07080f", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">Social proof</p>
          <h2
            className="text-4xl font-bold mb-14"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.02em" }}
          >
            What People Say
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFE AT QBITUM ───────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#0d0f1a" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">People &amp; culture</p>
          <h2
            className="text-4xl font-bold leading-tight mb-16"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.02em" }}
          >
            Life at Qbitum
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
                color: "#f0f2f8",
                lineHeight: 1.35,
                letterSpacing: "-0.01em",
                fontWeight: 600,
              }}
            >
              We come from different places, different cultures, and very different ways of seeing the world.
            </p>
            <div>
              <p style={{ color: "#a0aab8", lineHeight: 1.85, fontSize: "1rem" }}>
                Across continents and time zones, our team brings together engineers, designers, and product thinkers
                from backgrounds as varied as the problems we solve. Some grew up writing code in university dorms.
                Others came through industry, freelance work, or entirely different fields altogether.
              </p>
              <p style={{ color: "#a0aab8", lineHeight: 1.85, fontSize: "1rem", marginTop: "1.25rem" }}>
                What pulled everyone into the same orbit wasn&apos;t a job listing — it was craft. A shared obsession
                with building things that actually work, that real people find useful, that hold up under pressure.
              </p>
              <p style={{ color: "#a0aab8", lineHeight: 1.85, fontSize: "1rem", marginTop: "1.25rem" }}>
                That&apos;s what life at Qbitum is. People who love making things, doing it together, and caring
                deeply about the quality of what they put into the world.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "4rem",
              paddingTop: "3rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
              }}
            >
              <span className="gradient-text">Building products</span>
              <span style={{ color: "#2a2d3a" }}> · </span>
              <span style={{ color: "#f0f2f8" }}>that people love.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-40"
        style={{ background: "#07080f", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Ambient glows */}
        <div
          className="glow-orb"
          style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(124,111,208,0.12) 0%, transparent 65%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        />
        <div className="absolute inset-0 neural-grid opacity-20" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
          <p className="section-label mb-6">Ready to build?</p>
          <h2
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              color: "#f0f2f8",
              letterSpacing: "-0.03em",
            }}
          >
            Let&apos;s work together
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{ color: "#8892a4", maxWidth: "480px", lineHeight: 1.7 }}
          >
            Whether you&apos;re launching a startup or scaling an enterprise, Qbitum&apos;s
            team is ready to turn your vision into reality.
          </p>
          <Link href="/contact" className="btn-glow px-10 py-4 text-sm inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
