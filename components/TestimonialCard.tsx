interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export default function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <div
      className="relative overflow-hidden flex flex-col gap-6 p-8"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "4px",
      }}
    >
      {/* Top corner accent */}
      <div
        className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
        style={{ borderTop: "1px solid rgba(124,111,208,0.3)", borderLeft: "1px solid rgba(124,111,208,0.3)" }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,111,208,0.06) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />

      {/* Quote icon */}
      <div className="flex items-start justify-between">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(124,111,208,0.35)">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>

        {/* Star rating */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="11" height="11" viewBox="0 0 12 12" fill="#7c6fd0" style={{ opacity: 0.7 }}>
              <path d="M6 1L7.5 4.5H11L8.2 6.8L9.2 10.5L6 8.3L2.8 10.5L3.8 6.8L1 4.5H4.5L6 1Z"/>
            </svg>
          ))}
        </div>
      </div>

      <p
        className="leading-relaxed flex-1"
        style={{ color: "#c0c8d8", fontSize: "0.95rem", lineHeight: 1.8 }}
      >
        {content}
      </p>

      <div
        className="flex items-center gap-4 pt-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="w-10 h-10 flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #7c6fd0, #3b82f6)",
            color: "white",
            borderRadius: "3px",
            fontFamily: "var(--font-sans)",
          }}
        >
          {name.charAt(0)}
        </div>
        <div>
          <p
            className="text-sm font-semibold"
            style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8" }}
          >
            {name}
          </p>
          <p
            className="mono text-xs mt-0.5"
            style={{ color: "#4a5568" }}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
