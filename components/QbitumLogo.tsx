export default function QbitumLogo({ dark = false }: { dark?: boolean }) {
  const wordColor = dark ? "#1a1a2e" : "#f0f2f8";
  return (
    <svg
      width="160"
      height="36"
      viewBox="0 0 160 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Qbitum"
    >
      {/* Q lettermark */}
      <circle cx="16" cy="16" r="13" stroke="#7c6fd0" strokeWidth="2.5" fill="none" />
      <circle cx="16" cy="16" r="8" stroke="#0fb8a0" strokeWidth="1.5" fill="none" opacity="0.6" />
      <line x1="22" y1="22" x2="28" y2="28" stroke="#7c6fd0" strokeWidth="2.5" strokeLinecap="round" />
      {/* Wordmark */}
      <text
        x="38"
        y="23"
        fontFamily="Syne, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill={wordColor}
        letterSpacing="1"
      >
        QBITUM
      </text>
    </svg>
  );
}
