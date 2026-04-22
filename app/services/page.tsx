import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Banner from "@/components/Banner";
import ServiceTile from "@/components/ServiceTile";
import { COMPANY_HISTORY, SERVICES_LIST } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "From startups to enterprises, Qbitum drives innovation with product engineering, AI/ML, cloud, and dedicated teams.",
};

const EXPERTISE_CARDS = [
  {
    title: "Dedicated Teams",
    description: "Qbitum builds remote teams that work seamlessly with your in-house staff, giving you flexible, scalable support as your business grows.",
    image: "/images/dedicated-teams.jpg",
    accent: "#a094e8",
  },
  {
    title: "Product Engineering for Startups",
    description: "Our product engineering services turn bold ideas into reality — helping you build, scale, and succeed in competitive markets.",
    image: "/images/product-engineering.jpg",
    accent: "#0fb8a0",
  },
  {
    title: "Project Outsourcing",
    description: "Seamless, end-to-end software development tailored to your business — so you can focus on growth while we handle the tech.",
    image: "/images/product-outsourcing.jpg",
    accent: "#3b82f6",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Banner
        headline="Innovate. Optimize. Transform."
        subtext="From startups to enterprises, we deliver engineering that scales."
        imageSrc="/images/banner-services.jpg"
        imageAlt="Qbitum services"
      />

      {/* Stats row */}
      <section style={{ background: "#07080f", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {[
              { value: "7", label: "Services offered" },
              { value: "10+", label: "Years of delivery" },
              { value: "Google", label: "for Startups Alumni" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="py-14 px-8 flex flex-col gap-3"
                style={{
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <p
                  className="stat-value"
                  style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", color: "#f0f2f8", lineHeight: 1 }}
                >
                  {stat.value}
                </p>
                <p className="mono text-xs mt-1 uppercase tracking-widest" style={{ color: "#4a5568" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our story — fixed: no more 2-col label/text split */}
      <section className="py-24" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-5">Our story</p>
          <h2
            className="text-4xl font-bold mb-8"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.02em" }}
          >
            Built on a Decade of Delivery
          </h2>
          <p
            className="leading-relaxed"
            style={{ color: "#8892a4", fontSize: "1.05rem", maxWidth: "780px", lineHeight: 1.8 }}
          >
            {COMPANY_HISTORY}
          </p>
        </div>
      </section>

      {/* Service tiles */}
      <section className="py-20" style={{ background: "#0d0f1a", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">What we offer</p>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.02em" }}
          >
            All Services
          </h2>
          <p
            className="mb-14"
            style={{ color: "#8892a4", maxWidth: "520px", lineHeight: 1.7, fontSize: "1rem" }}
          >
            From startups to enterprises, we drive innovation tailored to your goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICES_LIST.map((s, i) => (
              <ServiceTile key={s.slug} slug={s.slug} title={s.title} shortDesc={s.shortDesc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise cards — replaces zigzag image+text layout */}
      <section className="py-24" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">Deep dives</p>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.02em" }}
          >
            Services &amp; Expertise
          </h2>
          <p
            className="mb-16"
            style={{ color: "#8892a4", maxWidth: "560px", lineHeight: 1.7, fontSize: "1rem" }}
          >
            Every engagement is shaped around your goals — from startup MVPs to enterprise-scale platforms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {EXPERTISE_CARDS.map((card, idx) => (
              <div
                key={card.title}
                className="glass-card glass-card-hover overflow-hidden flex flex-col"
                style={{ borderRadius: "4px" }}
              >
                {/* Image header */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ opacity: 0.75 }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom, transparent 30%, ${card.accent}18 70%, rgba(13,15,26,1) 100%)` }}
                  />
                  {/* Corner accent */}
                  <div
                    className="absolute top-4 left-4 w-4 h-4"
                    style={{ borderTop: `1px solid ${card.accent}70`, borderLeft: `1px solid ${card.accent}70` }}
                  />
                  <span className="mono text-xs absolute top-4 right-5" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col gap-4 flex-1">
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", lineHeight: 1.25 }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "#8892a4" }}
                  >
                    {card.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold mt-2"
                    style={{ color: card.accent, fontFamily: "var(--font-sans)" }}
                  >
                    Start a conversation
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="relative overflow-hidden py-36"
        style={{ background: "#07080f", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="glow-orb"
          style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        />
        <div className="absolute inset-0 neural-grid opacity-15" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
          <p className="section-label mb-6">Ready to build?</p>
          <h2
            className="font-bold mb-4"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.025em" }}
          >
            Ready to build something great?
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{ color: "#8892a4", maxWidth: "400px", lineHeight: 1.7 }}
          >
            Let&apos;s talk about your next project.
          </p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-3 px-10 py-4 text-sm">
            Start a conversation
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
