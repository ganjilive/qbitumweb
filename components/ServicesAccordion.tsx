'use client';

import { useState } from 'react';
import { SERVICES_LIST } from '@/lib/data';

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative overflow-hidden pt-24 pb-4" style={{ background: '#07080f' }}>
      {/* Ambient glow */}
      <div
        className="glow-orb"
        style={{
          width: 800,
          height: 800,
          background: 'radial-gradient(circle, rgba(124,111,208,0.1) 0%, transparent 65%)',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8">
        <p className="section-label mb-6">What we build</p>
        <h2
          className="font-bold leading-tight mb-16"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(2.8rem, 5vw, 5rem)',
            letterSpacing: '-0.03em',
          }}
        >
          <span style={{ color: '#f0f2f8' }}>Our</span>{' '}
          <span className="gradient-text">Services</span>
        </h2>
      </div>

      {/* Service rows */}
      <div
        className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        {SERVICES_LIST.map((service, i) => {
          const isOpen = openIndex === i;
          const num = String(i + 1).padStart(2, '0');

          return (
            <div key={service.slug} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {/* Row trigger */}
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full text-left group"
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              >
                <div
                  className="flex items-center gap-3 sm:gap-8 py-10 transition-colors duration-200"
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                >
                  {/* Number */}
                  <span
                    className="gradient-text flex-shrink-0 font-bold select-none"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(2rem, 3vw, 3rem)',
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      width: '80px',
                    }}
                  >
                    {num}
                  </span>

                  {/* Title + short desc */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-bold mb-1 group-hover:text-white transition-colors duration-200"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
                        color: isOpen ? '#f0f2f8' : '#c8cfe0',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#8892a4', maxWidth: '560px' }}
                    >
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Chevron */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: isOpen ? 'rgba(15,184,160,0.1)' : 'rgba(255,255,255,0.03)',
                      transition: 'background 0.2s ease, border-color 0.2s ease',
                      borderColor: isOpen ? 'rgba(15,184,160,0.3)' : 'rgba(255,255,255,0.1)',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke={isOpen ? '#0fb8a0' : '#8892a4'}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Expanded panel */}
              <div
                style={{
                  maxHeight: isOpen ? '700px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="pb-12 pl-0 sm:pl-28">
                  <p
                    className="text-base mb-8"
                    style={{ color: '#c8cfe0', lineHeight: 1.85, maxWidth: '680px' }}
                  >
                    {service.fullDesc}
                  </p>
                  <ul
                    style={{
                      listStyle: 'none',
                      margin: 0,
                      padding: 0,
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                      gap: '10px 24px',
                    }}
                  >
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: '#8892a4' }}
                      >
                        <span style={{ color: '#0fb8a0', flexShrink: 0, marginTop: '2px' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
