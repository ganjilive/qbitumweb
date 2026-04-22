import { PARTNER_NAMES } from "@/lib/data";

export default function LogoMarquee() {
  const items = [...PARTNER_NAMES, ...PARTNER_NAMES];
  return (
    <div
      className="overflow-hidden py-6 marquee-fade"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "#07080f",
      }}
    >
      <div className="flex items-center animate-marquee" style={{ width: "max-content" }}>
        {items.map((name, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            <span
              className="mono px-8 text-xs uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.3)", whiteSpace: "nowrap" }}
            >
              {name}
            </span>
            <span
              className="flex-shrink-0"
              style={{ color: "rgba(255,255,255,0.12)", fontSize: "0.4rem" }}
            >
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
