'use client';

import { useState } from 'react';
import { AiIllustration, MlIllustration, CloudIllustration, DataIllustration } from '@/components/TileIllustrations';
import { EXPERTISE_TILES, SERVICES_LIST } from '@/lib/data';

const ILLUSTRATIONS = [AiIllustration, MlIllustration, CloudIllustration, DataIllustration];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" style={{ background: '#07080f' }}>
      <div className="max-w-[1440px] mx-auto px-8 pb-10">
        <p className="section-label mb-4">What we build</p>
        <h2
          className="font-bold leading-tight mb-4"
          style={{
            fontFamily: 'var(--font-sans)',
            color: '#f0f2f8',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            letterSpacing: '-0.02em',
          }}
        >
          Our Services
        </h2>
        <p className="text-base mb-10" style={{ color: '#8892a4', maxWidth: '520px', lineHeight: 1.7 }}>
          Four focused services — from early-stage product build to team scaling and expert advisory.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {EXPERTISE_TILES.map((tile, i) => {
          const Illustration = ILLUSTRATIONS[i];
          const service = SERVICES_LIST[i];
          const isOpen = openIndex === i;

          return (
            <div
              key={tile.title}
              style={{
                borderRight:
                  i < EXPERTISE_TILES.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="relative overflow-hidden w-full"
                style={{
                  minHeight: '420px',
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  display: 'block',
                  textAlign: 'left',
                }}
              >
                <Illustration />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(7,8,15,0.98) 0%, rgba(7,8,15,0.55) 55%, rgba(7,8,15,0.15) 100%)',
                  }}
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tile.tags.map((tag) => (
                      <span key={tag} className="tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {tile.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#8892a4' }}>
                    {tile.description}
                  </p>
                  <div className="flex items-center gap-2" style={{ color: '#7c6fd0' }}>
                    <span
                      className="text-xs uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-mono, monospace)' }}
                    >
                      {isOpen ? 'Show less' : 'Learn more'}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        flexShrink: 0,
                      }}
                    >
                      <path
                        d="M3 5l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              <div
                style={{
                  maxHeight: isOpen ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderTop: isOpen ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <div className="p-8" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <p
                    className="text-sm mb-6"
                    style={{ color: '#c8cfe0', lineHeight: 1.85 }}
                  >
                    {service.fullDesc}
                  </p>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: '#8892a4' }}
                      >
                        <span style={{ color: '#2dd4bf', flexShrink: 0, marginTop: '1px' }}>✓</span>
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
