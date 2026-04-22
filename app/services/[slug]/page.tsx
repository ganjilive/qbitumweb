import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Banner from "@/components/Banner";
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
      <Banner
        imageSrc="/images/banner-services.jpg"
        imageAlt={service.title}
        labelText="Service"
        headline={service.title}
        subtext={service.shortDesc}
      />

      {/* Breadcrumb */}
      <div
        className="max-w-[1440px] mx-auto px-8 py-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="flex items-center gap-2 mono text-xs"
          style={{ color: "#4a5568" }}
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>/</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>/</span>
          <span style={{ color: "#8892a4" }}>{service.title}</span>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="max-w-3xl">
            <p className="section-label mb-5">Overview</p>
            <div
              className="glass-card p-10 mb-8"
              style={{ borderRadius: "4px", borderLeft: "2px solid rgba(15,184,160,0.4)" }}
            >
              <p
                className="leading-relaxed"
                style={{ color: "#c8d0dc", fontSize: "1.05rem", lineHeight: 1.85 }}
              >
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
          <h2
            className="text-4xl font-bold mb-14"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.02em" }}
          >
            Why Qbitum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Proven Track Record",
                desc: "10+ years of delivery and Google for Startups recognition.",
                accent: "#a094e8",
                icon: <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7l-9-5zm-1 14l-4-4 1.41-1.41L11 13.17l6.59-6.59L19 8l-8 8z" fill="currentColor"/>,
              },
              {
                title: "End-to-End Ownership",
                desc: "From strategy and architecture to deployment and ongoing support.",
                accent: "#0fb8a0",
                icon: <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" fill="currentColor"/>,
              },
              {
                title: "Flexible Engagement",
                desc: "Dedicated teams, project outsourcing, or a hybrid model — whatever fits.",
                accent: "#3b82f6",
                icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>,
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className="glass-card glass-card-hover flex flex-col gap-5 p-8 relative overflow-hidden"
                style={{ borderRadius: "4px" }}
              >
                <div
                  className="absolute top-0 left-0 w-14 h-14 pointer-events-none"
                  style={{ borderTop: `1px solid ${card.accent}33`, borderLeft: `1px solid ${card.accent}33` }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${card.accent}15`, border: `1px solid ${card.accent}35`, color: card.accent }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24">{card.icon}</svg>
                </div>
                <span className="mono text-xs" style={{ color: "#4a5568" }}>{String(i + 1).padStart(2, "0")}</span>
                <h3
                  className="text-base font-bold"
                  style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8892a4" }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-32"
        style={{ background: "#07080f", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="glow-orb"
          style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(124,111,208,0.12) 0%, transparent 65%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        />
        <div className="absolute inset-0 neural-grid opacity-15" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 text-center">
          <p className="section-label mb-6">Ready to build?</p>
          <h2
            className="font-bold mb-4"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "-0.025em" }}
          >
            Ready to get started?
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{ color: "#8892a4", maxWidth: "400px", lineHeight: 1.7 }}
          >
            Let&apos;s talk about your project and find the right approach.
          </p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-3 px-10 py-4 text-sm">
            Get in touch
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20" style={{ background: "#0d0f1a" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="section-label mb-4">Explore more</p>
          <h3
            className="text-2xl font-bold mb-10"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", letterSpacing: "-0.01em" }}
          >
            Other Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES_LIST.filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="glass-card glass-card-hover flex flex-col gap-3 p-6"
                  style={{ borderRadius: "4px" }}
                >
                  <h4
                    className="text-sm font-bold"
                    style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8" }}
                  >
                    {s.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "#8892a4" }}>
                    {s.shortDesc}
                  </p>
                  <span className="text-xs mt-2" style={{ color: "#a094e8" }}>View service →</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
