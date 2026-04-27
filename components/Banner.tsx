import Image from "next/image";
import Link from "next/link";

interface BannerProps {
  headline: string;
  imageSrc: string;
  imageAlt: string;
  subtext?: string;
  labelText?: string;
  ctaHref?: string;
  ctaLabel?: string;
  /** "hero" = full-viewport home-page scale. "banner" = interior page scale (default). */
  variant?: "hero" | "banner";
}

export default function Banner({
  headline,
  imageSrc,
  imageAlt,
  subtext,
  labelText = "Qbitum Solutions",
  ctaHref,
  ctaLabel,
  variant = "banner",
}: BannerProps) {
  const isHero = variant === "hero";

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: isHero ? "100vh" : "520px" }}
    >
      {/* Background image */}
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: isHero ? "rgba(7,8,15,0.65)" : "rgba(7,8,15,0.70)" }}
      />

      {/* Neural grid overlay */}
      <div className="absolute inset-0 neural-grid opacity-30" />

      {/* Ambient glow orbs */}
      <div
        className="glow-orb"
        style={{
          width: isHero ? 700 : 500,
          height: isHero ? 700 : 500,
          background: "radial-gradient(circle, rgba(124,111,208,0.18) 0%, transparent 65%)",
          top: "-15%",
          right: "-10%",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: isHero ? 500 : 350,
          height: isHero ? 500 : 350,
          background: "radial-gradient(circle, rgba(15,184,160,0.12) 0%, transparent 65%)",
          bottom: "5%",
          left: "-5%",
        }}
      />

      {/* Scan line sweep */}
      <div
        className="animate-scan"
        style={{
          background: "linear-gradient(to right, transparent, rgba(15,184,160,0.45), rgba(124,111,208,0.3), transparent)",
          zIndex: 3,
        }}
      />

      {/* Horizontal rule accents */}
      <div
        className="absolute left-8 right-8 pointer-events-none"
        style={{ top: isHero ? "12%" : "8%", height: "1px", background: "rgba(255,255,255,0.05)", zIndex: 2 }}
      />
      <div
        className="absolute left-8 right-8 pointer-events-none"
        style={{ bottom: isHero ? "12%" : "16%", height: "1px", background: "rgba(255,255,255,0.05)", zIndex: 2 }}
      />

      {/* Content */}
      <div
        className="absolute inset-0 flex items-center"
        style={{ zIndex: 4, paddingTop: isHero ? "10vh" : 0, paddingBottom: isHero ? "10vh" : 0 }}
      >
        <div className="max-w-[1440px] mx-auto px-8 w-full text-center">
          {/* Label with flanking lines */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up">
            <div className="h-px w-12 flex-shrink-0" style={{ background: "rgba(212,168,83,0.5)" }} />
            <span className="section-label">{labelText}</span>
            <div className="h-px w-12 flex-shrink-0" style={{ background: "rgba(212,168,83,0.5)" }} />
          </div>

          <h1
            className="font-bold animate-fade-up-delay-1"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: isHero
                ? "clamp(3.2rem, 7.5vw, 7rem)"
                : "clamp(2.2rem, 5vw, 4.5rem)",
              lineHeight: isHero ? 0.95 : 1.0,
              color: "#f0f2f8",
              letterSpacing: isHero ? "-0.03em" : "-0.02em",
            }}
          >
            {headline}
          </h1>

          {subtext && (
            <p
              className="mt-6 mx-auto animate-fade-up-delay-2"
              style={{
                color: "#8892a4",
                fontFamily: "var(--font-sans)",
                maxWidth: "520px",
                lineHeight: 1.8,
                fontSize: isHero ? "1.125rem" : "1rem",
              }}
            >
              {subtext}
            </p>
          )}

          {ctaHref && ctaLabel && (
            <div className="mt-10 animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={ctaHref} className="btn-glow px-10 py-4 text-sm">
                {ctaLabel}
              </Link>
              <Link
                href="/#services"
                className="btn-outline-glow px-8 py-4 text-sm"
              >
                Explore Services
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: isHero ? "180px" : "128px",
          background: "linear-gradient(to bottom, transparent, #07080f)",
          zIndex: 4,
        }}
      />
    </section>
  );
}
