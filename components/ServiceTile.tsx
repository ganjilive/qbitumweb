"use client";

import Link from "next/link";

interface ServiceTileProps {
  slug: string;
  title: string;
  shortDesc: string;
  index?: number;
}

const ACCENT_COLORS = [
  { border: "rgba(124,111,208,0.3)", glow: "rgba(124,111,208,0.1)", text: "#a094e8", icon: "#7c6fd0" },
  { border: "rgba(59,130,246,0.3)", glow: "rgba(59,130,246,0.1)", text: "#93c5fd", icon: "#3b82f6" },
  { border: "rgba(15,184,160,0.3)", glow: "rgba(15,184,160,0.1)", text: "#5eead4", icon: "#0fb8a0" },
  { border: "rgba(124,111,208,0.3)", glow: "rgba(124,111,208,0.1)", text: "#a094e8", icon: "#7c6fd0" },
  { border: "rgba(59,130,246,0.3)", glow: "rgba(59,130,246,0.1)", text: "#93c5fd", icon: "#3b82f6" },
  { border: "rgba(15,184,160,0.3)", glow: "rgba(15,184,160,0.1)", text: "#5eead4", icon: "#0fb8a0" },
  { border: "rgba(124,111,208,0.3)", glow: "rgba(124,111,208,0.1)", text: "#a094e8", icon: "#7c6fd0" },
];

export default function ServiceTile({ slug, title, shortDesc, index = 0 }: ServiceTileProps) {
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
  return (
    <Link href={`/services/${slug}`} className="block group">
      <div
        className="rounded-2xl p-8 h-full flex flex-col gap-4 transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: `1px solid rgba(255,255,255,0.06)`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.border = `1px solid ${accent.border}`;
          (e.currentTarget as HTMLElement).style.background = accent.glow;
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${accent.glow}`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.06)";
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: `${accent.glow}`, border: `1px solid ${accent.border}` }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h3 className="text-base font-bold transition-colors" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>{shortDesc}</p>
        <div className="flex items-center gap-2 text-xs font-semibold mt-2 transition-all" style={{ color: accent.text, fontFamily: "var(--font-dm-sans)" }}>
          Explore
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  );
}
