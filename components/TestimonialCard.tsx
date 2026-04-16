interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export default function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <div className="glass-card rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden">
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 animate-pulse-glow"
        style={{ background: "radial-gradient(circle, #7c6fd0, transparent)", transform: "translate(30%, -30%)" }} />

      {/* Quote mark */}
      <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(124,111,208,0.3)">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>

      <p className="text-sm leading-relaxed" style={{ color: "#c8d0dc", fontFamily: "var(--font-dm-sans)" }}>
        {content}
      </p>

      <div className="flex items-center gap-4 mt-auto" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem" }}>
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #7c6fd0, #3b82f6)", color: "white", fontFamily: "var(--font-syne)" }}>
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>{name}</p>
          <p className="text-xs mt-0.5" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>{role}</p>
        </div>
        {/* Rating */}
        <div className="ml-auto flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#7c6fd0">
              <path d="M6 1L7.5 4.5H11L8.2 6.8L9.2 10.5L6 8.3L2.8 10.5L3.8 6.8L1 4.5H4.5L6 1Z"/>
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
