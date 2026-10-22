import React from 'react';
import { Lock, EyeOff, ShieldCheck, Database, Check } from 'lucide-react';

const privacyPillars = [
  {
    icon: <EyeOff size={22} color="var(--mint)" />,
    title: 'Zero Data Brokerage',
    desc: 'Most "free" expense trackers quietly package your transaction history and sell leads to personal loan call centers. Kharcha will never sell or monetize your financial behavior.',
  },
  {
    icon: <Lock size={22} color="var(--mint)" />,
    title: 'You Hold The Ledger',
    desc: 'No invasive SMS scrapers reading your family messages. No opaque background sync. Every single kharcha entry is transparent, verifiable, and strictly under your command.',
  },
  {
    icon: <Database size={22} color="var(--mint)" />,
    title: 'Client-Isolated AI',
    desc: 'When you ask our AI money companion questions, prompts are processed via secure server-side Groq endpoints without retaining your private queries for model training.',
  },
];

export default function PrivacyControl() {
  return (
    <section id="privacy" className="section-wrapper" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="landing-container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Lock size={14} />
            Privacy & Trust
          </div>
          <h2 className="section-title">
            Your money is personal.{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Your data should be too.
            </span>
          </h2>
          <p className="section-desc">
            We built Kharcha for ourselves and our friends. That means no predatory lending ads,
            no shady data harvesting, and complete honesty about how your numbers are kept safe.
          </p>
        </div>

        {/* 3 Privacy Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {privacyPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-card"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  {pillar.icon}
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.75rem',
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8rem',
                  color: 'var(--mint)',
                  fontWeight: 600,
                  marginTop: '1.75rem',
                }}
              >
                <Check size={14} />
                <span>Strict commitment</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
