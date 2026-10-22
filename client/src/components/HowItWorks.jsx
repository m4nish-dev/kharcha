import React from 'react';
import { Compass, Smartphone, ThumbsUp, ArrowRight, ShieldCheck, Check } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Understand your money',
    headline: 'Turn scary monthly totals into an effortless daily anchor.',
    desc: 'Enter your monthly take-home, lock away fixed bills and specify your savings dreams. Kharcha calculates your single, safe-to-spend daily allowance.',
    badge: '1-Minute Onboarding',
    iconColor: '#34d399',
  },
  {
    step: '02',
    title: 'Track your spending',
    headline: 'Log any kharcha in under 3 seconds with zero friction.',
    desc: 'Whether it’s a ₹20 chai, ₹600 groceries, or an Amazon splurge — simply tap, enter the amount, and watch your daily balance instantly adjust.',
    badge: 'Zero Spreadsheet Pain',
    iconColor: '#10b981',
  },
  {
    step: '03',
    title: 'Make better decisions',
    headline: 'Say yes to plans without recalculating your entire life.',
    desc: 'Before making any purchase, check Kharcha. If you have ₹1,200 remaining today, enjoy your dinner with complete clarity and zero post-purchase regret.',
    badge: 'Zero Guilt Living',
    iconColor: '#a3e635',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-wrapper">
      <div className="landing-container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '4rem' }}>
          <div className="section-tag">
            <Compass size={14} />
            The Kharcha Philosophy
          </div>
          <h2 className="section-title">
            Three simple steps to permanent financial peace of mind.
          </h2>
          <p className="section-desc">
            No 50-step budget courses. No guilt-tripping spreadsheets.
            Just a sensible daily compass that works with how human psychology actually behaves.
          </p>
        </div>

        {/* 3 Step Cards Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="glass-card"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                {/* Step Pill & Number */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: item.iconColor,
                      lineHeight: 1,
                    }}
                  >
                    {item.step}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: item.iconColor,
                    lineHeight: 1.4,
                    marginBottom: '1rem',
                  }}
                >
                  {item.headline}
                </p>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1.25rem',
                  marginTop: '2rem',
                }}
              >
                <Check size={16} color={item.iconColor} />
                <span>Designed for everyday Indian expenses</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
