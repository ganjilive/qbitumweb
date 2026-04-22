"use client";

import Link from "next/link";

interface ServiceTileProps {
  slug: string;
  title: string;
  shortDesc: string;
  index?: number;
}

const ACCENTS = [
  { border: "rgba(124,111,208,0.35)", glow: "rgba(124,111,208,0.08)", text: "#a094e8" },
  { border: "rgba(59,130,246,0.35)",  glow: "rgba(59,130,246,0.08)",  text: "#93c5fd" },
  { border: "rgba(15,184,160,0.35)",  glow: "rgba(15,184,160,0.08)",  text: "#5eead4" },
  { border: "rgba(124,111,208,0.35)", glow: "rgba(124,111,208,0.08)", text: "#a094e8" },
  { border: "rgba(59,130,246,0.35)",  glow: "rgba(59,130,246,0.08)",  text: "#93c5fd" },
  { border: "rgba(15,184,160,0.35)",  glow: "rgba(15,184,160,0.08)",  text: "#5eead4" },
  { border: "rgba(124,111,208,0.35)", glow: "rgba(124,111,208,0.08)", text: "#a094e8" },
];

export default function ServiceTile({ slug, title, shortDesc, index = 0 }: ServiceTileProps) {
  const accent = ACCENTS[index % ACCENTS.length];
  return (
    <Link href={`/services/${slug}`} className="block group">
      <div
        className="h-full flex flex-col gap-4 p-7 transition-all duration-300 relative overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "4px",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = accent.border;
          el.style.background = accent.glow;
          el.style.boxShadow = `0 0 40px ${accent.glow}`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(255,255,255,0.07)";
          el.style.background = "rgba(255,255,255,0.02)";
          el.style.boxShadow = "none";
        }}
      >
        {/* Corner accent */}
        <div
          className="absolute top-0 left-0 w-12 h-12 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ borderTop: `1px solid ${accent.text}50`, borderLeft: `1px solid ${accent.text}50` }}
        />

        <div className="flex items-start justify-between">
          <span className="mono text-xs" style={{ color: "#4a5568" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <svg
            width="14" height="14" viewBox="0 0 16 16" fill="none"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1 group-hover:translate-x-0 transition-transform"
            style={{ color: accent.text }}
          >
            <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h3
          className="text-base font-bold"
          style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8", lineHeight: 1.3 }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "#8892a4" }}
        >
          {shortDesc}
        </p>
        <span
          className="text-xs font-semibold transition-colors"
          style={{ color: accent.text, fontFamily: "var(--font-sans)" }}
        >
          Explore →
        </span>
      </div>
    </Link>
  );
}
