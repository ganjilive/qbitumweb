interface ExpertiseTileProps {
  title: string;
  description: string;
  icon: string;
}

const ICONS: Record<string, React.ReactNode> = {
  "🤖": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a094e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"/>
      <circle cx="12" cy="5" r="2"/>
      <path d="M12 7v4M8 15h.01M16 15h.01M7 11V9a5 5 0 0110 0v2"/>
    </svg>
  ),
  "🧠": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96-.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 013.32-3.97A2.5 2.5 0 019.5 2z"/>
      <path d="M14.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 004.96-.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 00-3.32-3.97A2.5 2.5 0 0014.5 2z"/>
    </svg>
  ),
  "☁️": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0fb8a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 113.43-13.1A5.5 5.5 0 0120.5 11h-3"/>
      <path d="M13 17l3 3 3-3"/>
      <path d="M16 20v-6"/>
    </svg>
  ),
  "📊": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a094e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
      <line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  ),
};

export default function ExpertiseTile({ title, description, icon }: ExpertiseTileProps) {
  return (
    <div className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col gap-5">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(124,111,208,0.1)", border: "1px solid rgba(124,111,208,0.2)" }}>
        {ICONS[icon] || <span className="text-2xl">{icon}</span>}
      </div>
      <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>{description}</p>
      <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-semibold transition-all" style={{ color: "#a094e8", fontFamily: "var(--font-dm-sans)" }}>
        <span>Learn more</span>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
