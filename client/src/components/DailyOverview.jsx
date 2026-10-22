import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Sparkles, CheckCircle2, ArrowRight, Shield, Zap } from 'lucide-react';
import { formatCurrency } from '../constants/index.js';

export default function DailyOverview() {
  // Interactive Daily Engine parameters
  const [income, setIncome] = useState(95000);
  const [fixedBills, setFixedBills] = useState(38000);
  const [savingsTarget, setSavingsTarget] = useState(22000);

  // Computed values
  const discretionary = Math.max(0, income - fixedBills - savingsTarget);
  const dailyAllowance = Math.round(discretionary / 30);
  const spentTodaySample = Math.round(dailyAllowance * 0.58);
  const remainingToday = dailyAllowance - spentTodaySample;

  return (
    <section id="overview" className="section-wrapper ivory-section">
      <div className="landing-container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Zap size={14} />
            The Daily Allowance Engine
          </div>
          <h2 className="section-title">
            Stop budgeting for 30 days ahead.{' '}
            <span style={{ color: 'var(--emerald-dark)' }}>
              Know your single daily number.
            </span>
          </h2>
          <p className="section-desc">
            When you see ₹40,000 in your bank account, it feels like infinite money.
            Kharcha converts your monthly reality into a calm, realistic daily spending allowance.
          </p>
        </div>

        {/* Interactive Engine Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Controls Box (Left) */}
          <div
            className="ivory-card"
            style={{
              padding: '2.25rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.75rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--ivory-text)',
                }}
              >
                Try the Kharcha Formula
              </h3>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--emerald-dark)',
                  background: 'rgba(16, 185, 129, 0.1)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                Live Interactive Simulator
              </span>
            </div>

            {/* Slider 1: Monthly Income */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                }}
              >
                <label style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--ivory-subtext)' }}>
                  Monthly Inflow
                </label>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--ivory-text)' }}>
                  {formatCurrency(income)}
                </span>
              </div>
              <input
                type="range"
                min="30000"
                max="300000"
                step="5000"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--emerald)',
                  cursor: 'pointer',
                }}
              />
            </div>

            {/* Slider 2: Fixed Bills & Rent */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                }}
              >
                <label style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--ivory-subtext)' }}>
                  Fixed Bills & Rent
                </label>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#dc2626' }}>
                  -{formatCurrency(fixedBills)}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="150000"
                step="2000"
                value={fixedBills}
                onChange={(e) => setFixedBills(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#dc2626',
                  cursor: 'pointer',
                }}
              />
            </div>

            {/* Slider 3: Savings Target */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                }}
              >
                <label style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--ivory-subtext)' }}>
                  Target Monthly Savings
                </label>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--emerald-dark)' }}>
                  -{formatCurrency(savingsTarget)}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="100000"
                step="2000"
                value={savingsTarget}
                onChange={(e) => setSavingsTarget(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--emerald-dark)',
                  cursor: 'pointer',
                }}
              />
            </div>

            {/* Deductions Summary Row */}
            <div
              style={{
                background: 'var(--ivory-muted)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.85rem 1rem',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.85rem',
                color: 'var(--ivory-subtext)',
              }}
            >
              <span>Discretionary Pool (30 days):</span>
              <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--ivory-text)' }}>
                {formatCurrency(discretionary)}
              </strong>
            </div>
          </div>

          {/* Result Card (Right) */}
          <div
            style={{
              background: 'linear-gradient(145deg, #102117 0%, #08110c 100%)',
              color: '#ffffff',
              borderRadius: '28px',
              padding: '2.5rem',
              boxShadow: '0 25px 50px -12px rgba(6, 78, 59, 0.35)',
              border: '1px solid rgba(52, 211, 153, 0.3)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <Sparkles size={18} color="var(--mint)" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--mint)', textTransform: 'uppercase' }}>
                Your Calculated Daily Power
              </span>
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: 800,
                  color: 'var(--mint)',
                  lineHeight: 1,
                  marginBottom: '0.35rem',
                }}
              >
                {formatCurrency(dailyAllowance)}
              </div>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Safe to spend every single day with zero guilt
              </span>
            </div>

            {/* Daily Simulation Breakdown */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                padding: '1.25rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Simulated Spent Today</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: '#fca5a5' }}>{formatCurrency(spentTodaySample)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Remaining Today</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--mint)', fontWeight: 700 }}>
                  {formatCurrency(remainingToday)}
                </span>
              </div>

              {/* Progress bar */}
              <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '999px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: '58%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
                    borderRadius: '999px',
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <CheckCircle2 size={16} color="var(--mint)" />
              <span>Spend under {formatCurrency(dailyAllowance)} and your savings target is 100% guaranteed.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
