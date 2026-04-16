import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES_LIST } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICES_LIST.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES_LIST.find((s) => s.slug === params.slug);
  if (!service) return {};
  return { title: service.title, description: service.shortDesc };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES_LIST.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "480px", background: "#07080f" }}>
        <div className="absolute inset-0">
          <Image src="/images/banner-services.jpg" alt="" fill className="object-cover" style={{ opacity: 0.1 }} />
        </div>
        <div className="glow-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(124,111,208,0.15) 0%, transparent 70%)", top: "-10%", left: "-5%" }} />
        <div className="glow-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(15,184,160,0.12) 0%, transparent 70%)", bottom: "-10%", right: "-5%" }} />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 flex flex-col justify-center" style={{ minHeight: "480px" }}>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-xs" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span style={{ color: "#a094e8" }}>{service.title}</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: "#0fb8a0" }} />
            <span className="section-label">Service</span>
          </div>
          <h1 className="font-extrabold leading-tight" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 5vw, 4rem)", color: "#f0f2f8", maxWidth: "700px" }}>
            {service.title}
          </h1>
          <p className="mt-4 text-sm max-w-lg" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)", lineHeight: 1.7 }}>
            {service.shortDesc}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to bottom, transparent, #07080f)" }} />
      </section>

      {/* Main content */}
      <section className="py-20" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-3xl">
            <div className="glass-card rounded-2xl p-10 mb-8">
              <p className="text-sm leading-relaxed" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
                {service.fullDesc}
              </p>
            </div>
            <Link href="/contact" className="btn-glow inline-flex items-center gap-3 px-8 py-4 text-sm">
              Start a project
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Qbitum */}
      <section className="py-20" style={{ background: "#0d0f1a" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">Why us</p>
          <h2 className="text-4xl font-extrabold mb-12" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
            Why <span className="gradient-text">Qbitum</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Proven Track Record",
                desc: "10+ years of delivery and Google for Startups recognition.",
                icon: (
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7l-9-5zm-1 14l-4-4 1.41-1.41L11 13.17l6.59-6.59L19 8l-8 8z" fill="#0fb8a0"/>
                ),
              },
              {
                title: "End-to-End Ownership",
                desc: "From strategy and architecture to deployment and ongoing support.",
                icon: (
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" fill="#a094e8"/>
                ),
              },
              {
                title: "Flexible Engagement",
                desc: "Dedicated teams, project outsourcing, or a hybrid model — whatever fits.",
                icon: (
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="#3b82f6"/>
                ),
              },
            ].map((card) => (
              <div key={card.title} className="glass-card rounded-2xl p-8 flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24">{card.icon}</svg>
                </div>
                <h3 className="text-base font-bold" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>{card.desc}</p>
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
            Ready to get <span className="gradient-text">started?</span>
          </h2>
          <p className="text-sm mb-8" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
            Let&apos;s talk about your project and find the right approach.
          </p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-3 px-8 py-4 text-sm">
            Get in touch
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <h3 className="text-2xl font-extrabold mb-8" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
            Other Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES_LIST.filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}
                  className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-3">
                  <h4 className="text-sm font-bold" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>{s.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>{s.shortDesc}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
