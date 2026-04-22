interface ValueTileProps {
  title: string;
  description: string;
  icon: string;
}

const VALUE_ICONS: Record<string, { svg: React.ReactNode; color: string }> = {
  "💡": {
    color: "#a094e8",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a094e8" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.3 6L15 17H9l-.7-2C6.3 13.7 5 11.5 5 9a7 7 0 017-7z"/>
      </svg>
    ),
  },
  "🤝": {
    color: "#3b82f6",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
  "⭐": {
    color: "#0fb8a0",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0fb8a0" strokeWidth="1.5" strokeLinecap="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  "🌐": {
    color: "#a094e8",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a094e8" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
};

export default function ValueTile({ title, description, icon }: ValueTileProps) {
  const iconConfig = VALUE_ICONS[icon] || { color: "#a094e8", svg: null };

  return (
    <div
      className="glass-card glass-card-hover flex gap-6 items-start p-7 relative overflow-hidden"
      style={{ borderRadius: "4px" }}
    >
      {/* Subtle corner accent */}
      <div
        className="absolute top-0 left-0 w-14 h-14 pointer-events-none"
        style={{ borderTop: `1px solid ${iconConfig.color}30`, borderLeft: `1px solid ${iconConfig.color}30` }}
      />

      <div
        className="w-12 h-12 flex items-center justify-center flex-shrink-0"
        style={{
          background: `${iconConfig.color}12`,
          border: `1px solid ${iconConfig.color}30`,
          borderRadius: "3px",
        }}
      >
        {iconConfig.svg || <span className="text-xl">{icon}</span>}
      </div>

      <div className="flex-1">
        <h3
          className="text-base font-bold mb-2"
          style={{ fontFamily: "var(--font-sans)", color: "#f0f2f8" }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "#8892a4" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
