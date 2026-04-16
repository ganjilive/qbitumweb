import Image from "next/image";

interface BannerProps {
  headline: string;
  imageSrc: string;
  imageAlt: string;
  subtext?: string;
}

export default function Banner({ headline, imageSrc, imageAlt, subtext }: BannerProps) {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
      {/* Multi-layer dark overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(7,8,15,0.92) 0%, rgba(13,15,26,0.85) 50%, rgba(7,8,15,0.75) 100%)" }} />
      {/* Colored accent overlay */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(124,111,208,0.15) 0%, transparent 60%)" }} />
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[1440px] mx-auto px-8 w-full">
          {/* Accent line */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <div className="w-8 h-px" style={{ background: "#0fb8a0" }} />
            <span className="section-label">Qbitum Solutions</span>
          </div>
          <h1
            className="font-extrabold leading-[1.05] animate-fade-up-delay-1"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              maxWidth: "800px",
              color: "#f0f2f8",
            }}
          >
            {headline}
          </h1>
          {subtext && (
            <p className="mt-6 text-lg max-w-xl animate-fade-up-delay-2" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
              {subtext}
            </p>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, transparent, #07080f)" }} />
    </section>
  );
}
