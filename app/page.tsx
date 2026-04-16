import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ExpertiseTile from "@/components/ExpertiseTile";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceTile from "@/components/ServiceTile";
import {
  EXPERTISE_TILES,
  HOME_SERVICES,
  INDUSTRIES,
  TESTIMONIALS,
  LIFE_IMAGES,
  SERVICES_LIST,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Qbitum Solutions — Product & Cloud Engineering for Startups",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh", background: "#07080f" }}>
        {/* Hero background image with heavy dark overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/banner-home.jpg"
            alt="Hero"
            fill
            className="object-cover"
            priority
            style={{ opacity: 0.12 }}
          />
        </div>

        {/* Ambient glow orbs */}
        <div className="glow-orb animate-pulse-glow" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(124,111,208,0.18) 0%, transparent 70%)", top: "-10%", left: "-5%" }} />
        <div className="glow-orb animate-pulse-glow" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(15,184,160,0.12) 0%, transparent 70%)", bottom: "-5%", right: "5%", animationDelay: "2s" }} />
        <div className="glow-orb" style={{ width: 300, height: 300, background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", top: "30%", right: "20%" }} />

        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid opacity-20" />

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 flex flex-col justify-center" style={{ minHeight: "100vh", paddingTop: "10vh", paddingBottom: "10vh" }}>
          {/* Label */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <div className="w-8 h-px" style={{ background: "#0fb8a0" }} />
            <span className="section-label">AI-Powered Engineering</span>
          </div>

          {/* Main headline */}
          <h1
            className="font-extrabold leading-[1.0] mb-8 animate-fade-up-delay-1"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
              maxWidth: "900px",
              color: "#f0f2f8",
            }}
          >
            Powering Startups{" "}
            <span className="gradient-text">with Cutting-Edge</span>{" "}
            Engineering.
          </h1>

          {/* Subtext */}
          <p
            className="text-lg mb-12 animate-fade-up-delay-2"
            style={{
              color: "#8892a4",
              maxWidth: "560px",
              lineHeight: 1.7,
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            We build world-class products, cloud infrastructure, and AI systems
            that help startups and enterprises move faster and scale smarter.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <Link href="/contact" className="btn-glow px-8 py-4 text-sm">
              Start a Project
            </Link>
            <Link href="/services" className="btn-outline-glow px-8 py-4 text-sm">
              Explore Services
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-10 mt-20 pt-10 animate-fade-up-delay-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {[
              { value: "10+", label: "Years of engineering" },
              { value: "50+", label: "Products shipped" },
              { value: "3×", label: "Faster time to market" },
              { value: "24/7", label: "Dedicated support" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold gradient-text-purple" style={{ fontFamily: "var(--font-syne)" }}>
                  {stat.value}
                </p>
                <p className="text-xs mt-1" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, transparent, #07080f)" }} />
      </section>

      {/* ── AI SERVICES GRID ─────────────────────────────────────────── */}
      <section className="py-28" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="section-label mb-4">What we build</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8", maxWidth: "480px" }}>
                AI Services &{" "}
                <span className="gradient-text">Expertise</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed lg:max-w-xs" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
              Accelerate your startup by harnessing the power of innovative cloud
              engineering and AI solutions built for scale.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {EXPERTISE_TILES.map((tile) => (
              <ExpertiseTile key={tile.title} {...tile} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-8"><div className="divider-gradient" /></div>

      {/* ── SERVICES & EXPERTISE ROWS ────────────────────────────────── */}
      <section className="py-28" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">How we deliver</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-16" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
            Services & Expertise
          </h2>
          <div className="flex flex-col gap-20">
            {HOME_SERVICES.map((service, i) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row items-center gap-14 ${service.imageLeft ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="relative w-full lg:w-[560px] h-[360px] rounded-2xl overflow-hidden flex-shrink-0"
                  style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                  <Image src={service.image} alt={service.title} fill className="object-cover" style={{ opacity: 0.85 }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(7,8,15,0.4), transparent)" }} />
                  {/* Number badge */}
                  <div className="absolute top-6 left-6 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "rgba(124,111,208,0.8)", fontFamily: "var(--font-syne)", color: "white" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                {/* Text */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "#a094e8", fontFamily: "var(--font-dm-sans)" }}
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES BENTO ───────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#0d0f1a" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="section-label mb-4">Full stack</p>
              <h2 className="text-4xl font-extrabold" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
                All Services
              </h2>
            </div>
            <Link href="/services" className="btn-outline-glow px-6 py-3 text-sm self-start">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICES_LIST.map((s, i) => (
              <ServiceTile key={s.slug} slug={s.slug} title={s.title} shortDesc={s.shortDesc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">Across sectors</p>
          <h2 className="text-4xl font-extrabold mb-14" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
            Industries
          </h2>
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.name}
                className="relative flex-shrink-0 w-[280px] lg:w-[340px] h-[460px] rounded-2xl overflow-hidden snap-start group cursor-pointer"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ opacity: 0.7 }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,8,15,0.95) 0%, rgba(7,8,15,0.3) 50%, transparent 100%)" }} />
                {/* Purple tint on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(to top, rgba(124,111,208,0.2), transparent)" }} />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-extrabold text-2xl" style={{ fontFamily: "var(--font-syne)" }}>{industry.name}</p>
                  <div className="mt-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-4 h-px" style={{ background: "#0fb8a0" }} />
                    <span className="text-xs" style={{ color: "#0fb8a0" }}>Explore</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="py-24 grid-lines" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">Social proof</p>
          <h2 className="text-4xl font-extrabold mb-14" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
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
          <div className="flex flex-col lg:flex-row items-start gap-14 mb-12">
            <div className="flex-1">
              <p className="section-label mb-4">People & culture</p>
              <h2 className="text-4xl font-extrabold leading-tight" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
                Life at Qbitum
              </h2>
            </div>
            <p className="flex-1 text-sm leading-relaxed self-end" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)", maxWidth: "480px" }}>
              We are a team of passionate, diverse, and innovative individuals who thrive
              in a collaborative environment. Growth, inclusivity, and continuous learning
              are at our core.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {LIFE_IMAGES.map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden group" style={{ height: "clamp(200px, 30vw, 400px)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <Image src={img} alt={`Life at Qbitum ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" style={{ opacity: 0.75 }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "rgba(124,111,208,0.12)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section className="py-20 px-8" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden px-12 py-20 text-center"
            style={{ background: "linear-gradient(135deg, rgba(124,111,208,0.15) 0%, rgba(13,15,26,0.9) 40%, rgba(15,184,160,0.12) 100%)", border: "1px solid rgba(124,111,208,0.2)" }}>
            {/* Glow orbs inside CTA */}
            <div className="glow-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(124,111,208,0.2) 0%, transparent 70%)", top: "50%", left: "0%", transform: "translate(-30%, -50%)" }} />
            <div className="glow-orb" style={{ width: 300, height: 300, background: "radial-gradient(circle, rgba(15,184,160,0.15) 0%, transparent 70%)", top: "50%", right: "0%", transform: "translate(30%, -50%)" }} />

            <div className="relative z-10">
              <p className="section-label mb-5">Ready to build?</p>
              <h2 className="text-4xl lg:text-6xl font-extrabold mb-6 gradient-text" style={{ fontFamily: "var(--font-syne)" }}>
                Let's work together
              </h2>
              <p className="text-sm mb-10 mx-auto" style={{ color: "#8892a4", maxWidth: "480px", fontFamily: "var(--font-dm-sans)", lineHeight: 1.7 }}>
                Whether you're launching a startup or scaling an enterprise, Qbitum's team
                is ready to turn your vision into reality.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn-glow px-10 py-4 text-sm">
                  Get in Touch
                </Link>
                <Link href="/about" className="btn-outline-glow px-10 py-4 text-sm">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
