"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass-card rounded-2xl p-12 text-center">
        <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{ background: "rgba(15,184,160,0.15)", border: "1px solid rgba(15,184,160,0.3)" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="#0fb8a0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>Message Sent</h3>
        <p className="text-sm" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
          Thanks for reaching out. We'll reply to <span style={{ color: "#a094e8" }}>{form.email}</span> within 24 hours.
        </p>
      </div>
    );
  }

  const inputStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px",
    padding: "14px 18px",
    color: "#f0f2f8",
    fontFamily: "var(--font-dm-sans)",
    fontSize: "0.875rem",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s ease",
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-syne)", color: "#f0f2f8" }}>
          Send a message
        </h2>
        <p className="text-sm" style={{ color: "#8892a4", fontFamily: "var(--font-dm-sans)" }}>
          We'll get back to you within one business day.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#8892a4", fontFamily: "var(--font-syne)" }}>Full Name</label>
        <input
          name="name" type="text" required value={form.name} onChange={handleChange}
          placeholder="John Smith"
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "rgba(124,111,208,0.5)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#8892a4", fontFamily: "var(--font-syne)" }}>Email Address</label>
        <input
          name="email" type="email" required value={form.email} onChange={handleChange}
          placeholder="john@company.com"
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "rgba(124,111,208,0.5)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#8892a4", fontFamily: "var(--font-syne)" }}>Message</label>
        <textarea
          name="message" required rows={5} value={form.message} onChange={handleChange}
          placeholder="Tell us about your project..."
          style={{ ...inputStyle, resize: "none" }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(124,111,208,0.5)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
        />
      </div>

      <button type="submit" className="btn-glow py-4 text-sm font-semibold">
        Send Message
      </button>
    </form>
  );
}
