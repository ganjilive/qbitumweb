import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Qbitum Solutions.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "480px", background: "#07080f" }}>
        <div className="glow-orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(15,184,160,0.12) 0%, transparent 70%)", top: "-10%", right: "-5%" }} />
        <div className="glow-orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(124,111,208,0.12) 0%, transparent 70%)", bottom: "0%", left: "0%" }} />
        <div className="glow-orb" style={{ width: 350, height: 350, background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", top: "20%", left: "30%" }} />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 flex flex-col justify-center" style={{ minHeight: "480px" }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: "#0fb8a0" }} />
            <span className="section-label">Get in touch</span>
          </div>
          <h1 className="font-extrabold leading-tight" style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 5vw, 4.5rem)", color: "#f0f2f8" }}>
            Let&apos;s build something<br /><span className="gradient-text">great together</span>
          </h1>
          <p className="mt-4 text-sm" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)", maxWidth: "480px", lineHeight: 1.7 }}>
            Have a project in mind? We&apos;d love to hear about it. Drop us a message and a member of our team will respond within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            {["Response within 24h", "No commitment required", "Free initial consultation"].map((t) => (
              <span key={t} className="text-xs px-4 py-2 rounded-full" style={{ background: "rgba(15,184,160,0.1)", border: "1px solid rgba(15,184,160,0.2)", color: "#0fb8a0", fontFamily: "var(--font-dm-sans)" }}>
                ✓ {t}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to bottom, transparent, #07080f)" }} />
      </section>

      <section className="py-20" style={{ background: "#07080f" }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <p className="section-label mb-6">Send us a message</p>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 flex flex-col gap-8 pt-2">
              {[
                {
                  label: "Address",
                  value: "7/6 Bagatalle Rd\nColombo 00300",
                  icon: (
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#0fb8a0"/>
                  ),
                },
                {
                  label: "Email",
                  value: "info@qbitum.com",
                  href: "mailto:info@qbitum.com",
                  icon: (
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#a094e8"/>
                  ),
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/company/qbitum",
                  href: "https://linkedin.com/company/qbitum",
                  icon: (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#3b82f6"/>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-2xl p-6 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24">{item.icon}</svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#4a5568", fontFamily: "var(--font-syne)" }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="text-sm hover:text-white transition-colors whitespace-pre-line" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm whitespace-pre-line" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Quick response guarantee */}
              <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, rgba(124,111,208,0.12), rgba(15,184,160,0.08))", border: "1px solid rgba(124,111,208,0.2)" }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#0fb8a0", fontFamily: "var(--font-syne)" }}>Response time</p>
                <p className="text-3xl font-extrabold gradient-text" style={{ fontFamily: "var(--font-syne)" }}>Under 24h</p>
                <p className="text-xs mt-2" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>We respond to all inquiries within one business day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
