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

const EXPERTISE_ROWS = [
  {
    title: "Dedicated Teams",
    description: "Qbitum builds remote teams that work seamlessly with your in-house staff, giving you flexible, scalable support as your business grows.",
    image: "/images/dedicated-teams.jpg",
    imageLeft: false,
  },
  {
    title: "Product Engineering for Startups",
    description: "At Qbitum, we know startups face unique challenges. Our product engineering services turn bold ideas into reality — helping you build, scale, and succeed in competitive markets.",
    image: "/images/product-engineering.jpg",
    imageLeft: true,
  },
  {
    title: "Project Outsourcing",
    description: "Seamless, end-to-end software development tailored to your business — so you can focus on growth while we handle the tech.",
    image: "/images/product-outsourcing.jpg",
    imageLeft: false,
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

      {/* Intro */}
      <section className="relative overflow-hidden py-20" style={{ background: "#07080f" }}>
        <div className="glow-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(124,111,208,0.12) 0%, transparent 70%)", top: "-10%", left: "-5%" }} />
        <div className="glow-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(15,184,160,0.1) 0%, transparent 70%)", bottom: "-10%", right: "-5%" }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-8">By the numbers</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { value: "7", label: "Services offered" },
              { value: "10+", label: "Years of delivery" },
              { value: "Google", label: "for Startups Alumni" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-8 text-center">
                <p className="text-5xl font-extrabold gradient-text mb-2" style={{ fontFamily: "var(--font-syne)" }}>{stat.value}</p>
                <p className="text-xs uppercase tracking-widest" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="glass-card rounded-2xl p-8">
            <p className="text-sm leading-relaxed" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
              {COMPANY_HISTORY}
            </p>
          </div>
        </div>
      </section>

      {/* Service tiles */}
      <section className="py-20" style={{ background: "#0d0f1a" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-4">What we offer</p>
              <p className="text-2xl lg:text-3xl font-bold max-w-lg leading-snug" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
                From startups to enterprises, we drive innovation tailored to your goals.
              </p>
            </div>
          </div>
          <div className="mb-14">
            <h2 className="text-3xl font-extrabold mb-8" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
              Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {SERVICES_LIST.map((s, i) => (
                <ServiceTile key={s.slug} slug={s.slug} title={s.title} shortDesc={s.shortDesc} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise rows */}
      <section className="py-20" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">Deep dives</p>
          <h2 className="text-4xl font-extrabold mb-16" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
            Services & Expertise
          </h2>
          <div className="flex flex-col gap-20">
            {EXPERTISE_ROWS.map((row, idx) => (
              <div key={row.title} className={`flex flex-col lg:flex-row items-center gap-14 ${row.imageLeft ? "lg:flex-row-reverse" : ""}`}>
                <div className="relative w-full lg:w-[560px] h-[360px] rounded-2xl overflow-hidden flex-shrink-0"
                  style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                  <Image src={row.image} alt={row.title} fill className="object-cover" style={{ opacity: 0.8 }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(7,8,15,0.5), transparent)" }} />
                  <div className="absolute top-6 left-6 text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(124,111,208,0.7)", color: "white", fontFamily: "var(--font-syne)" }}>
                    0{idx + 1}
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>{row.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>{row.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden py-24" style={{ background: "linear-gradient(135deg, rgba(124,111,208,0.15), rgba(15,184,160,0.08))", borderTop: "1px solid rgba(124,111,208,0.2)" }}>
        <div className="glow-orb" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(124,111,208,0.1) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
            Ready to build something <span className="gradient-text">great?</span>
          </h2>
          <p className="text-sm mb-8" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
            Let&apos;s talk about your next project.
          </p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-3 px-8 py-4 text-sm">
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
