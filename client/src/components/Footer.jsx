import React from 'react';
import { APP_NAME, APP_TAGLINE, CURRENCY } from '../constants/index.js';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: '#050705',
        padding: '4.5rem 0 3rem 0',
        color: 'var(--text-secondary)',
        fontSize: '0.88rem',
      }}
    >
      <div className="landing-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand info */}
          <div style={{ maxWidth: '320px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--text-white)',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  background:
                    'linear-gradient(135deg, #10b981 0%, #064e3b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: '#ffffff',
                }}
              >
                ₹
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.03em',
                  color: '#ffffff',
                }}
              >
                {APP_NAME}
              </span>
            </div>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '1.25rem',
              }}
            >
              The daily money companion crafted for everyday people.
              Understand your spending, calculate safe daily limits, and reach your goals.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                color: 'var(--mint)',
                background: 'var(--mint-subtle)',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-full)',
              }}
            >
              <span>Locale: India ({CURRENCY.locale} • {CURRENCY.symbol})</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Experience
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="#how-it-works" style={{ color: 'var(--text-secondary)' }}>How it Works</a>
              <a href="#overview" style={{ color: 'var(--text-secondary)' }}>Daily Allowance Engine</a>
              <a href="#insights" style={{ color: 'var(--text-secondary)' }}>Spending Insights</a>
              <a href="#assistant" style={{ color: 'var(--text-secondary)' }}>AI Money Companion</a>
              <a href="#goals" style={{ color: 'var(--text-secondary)' }}>Autonomous Savings</a>
              <a href="#bills" style={{ color: 'var(--text-secondary)' }}>Bill Shield Radar</a>
            </div>
          </div>

          {/* Philosophy & Trust */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Trust & Philosophy
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="#privacy" style={{ color: 'var(--text-secondary)' }}>Zero Data Brokerage</a>
              <a href="#privacy" style={{ color: 'var(--text-secondary)' }}>Client-First Architecture</a>
              <a href="#privacy" style={{ color: 'var(--text-secondary)' }}>No Credit Card Required</a>
              <a href="#privacy" style={{ color: 'var(--text-secondary)' }}>Security & Isolation</a>
            </div>
          </div>

          {/* Technology & Community */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              Platform
            </h4>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.82rem', marginBottom: '1rem' }}>
              Built with React, Vite, Motion, and Express backend with Groq AI integration.
            </p>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
              Tagline: <em>{APP_TAGLINE}</em>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} {APP_NAME} — {APP_TAGLINE}. All rights reserved.
          </div>
          <div>
            Designed with deep care for personal financial sanity.
          </div>
        </div>
      </div>
    </footer>
  );
}
