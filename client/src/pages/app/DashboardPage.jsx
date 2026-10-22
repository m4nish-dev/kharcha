import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Sparkles,
  ArrowDownRight,
  ArrowUpRight,
  ShieldCheck,
  Target,
} from 'lucide-react';
import {
  mockCashflowSummary,
  mockTransactions,
  mockSavingsGoals,
  mockBills,
} from '../../data/mockData.js';
import { formatCurrency } from '../../constants/index.js';

export default function DashboardPage() {
  const recentTransactions = mockTransactions.slice(0, 4);
  const urgentBill = mockBills.find((b) => b.dueInDays <= 3) || mockBills[0];
  const primaryGoal = mockSavingsGoals[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* ── TOP HERO: DAILY ALLOWANCE HERO CARD ──────────────────────── */}
      <div
        style={{
          background:
            'linear-gradient(145deg, #121f17 0%, #0d1711 50%, #080e0a 100%)',
          border: '1px solid rgba(52, 211, 153, 0.28)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem 2rem',
          boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          {/* Daily Gauge */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--mint)',
                  boxShadow: '0 0 8px var(--mint)',
                }}
              />
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--mint)',
                }}
              >
                Today’s Spending Pace
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.5rem',
                marginBottom: '0.5rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {formatCurrency(mockCashflowSummary.dailyBudget)}
              </span>
              <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                daily allowance
              </span>
            </div>

            <div
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                marginBottom: '1.25rem',
              }}
            >
              Remaining safe to spend today:{' '}
              <strong style={{ color: 'var(--mint)', fontFamily: 'var(--font-mono)' }}>
                {formatCurrency(mockCashflowSummary.remainingToday)}
              </strong>
            </div>

            {/* Pacing progress bar */}
            <div
              style={{
                height: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '999px',
                overflow: 'hidden',
                display: 'flex',
                marginBottom: '0.65rem',
              }}
            >
              <div
                style={{
                  width: '64.5%',
                  background: 'linear-gradient(90deg, #f87171 0%, #fb923c 100%)',
                }}
              />
              <div
                style={{
                  width: '35.5%',
                  background: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              <span>Spent: {formatCurrency(mockCashflowSummary.spentToday)} (64.5%)</span>
              <span style={{ color: 'var(--mint)', fontWeight: 600 }}>
                ₹{mockCashflowSummary.hourlySafeRate}/hr safe rate
              </span>
            </div>
          </div>

          {/* Quick Cashflow Pulse Pill Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
            }}
          >
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
              }}
            >
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                Monthly Inflow
              </span>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginTop: '0.2rem' }}>
                {formatCurrency(mockCashflowSummary.monthlyIncome)}
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--mint)' }}>Salary credited</span>
            </div>

            <div
              style={{
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
              }}
            >
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                Quarantined Bills
              </span>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: '#fca5a5', marginTop: '0.2rem' }}>
                -{formatCurrency(mockCashflowSummary.fixedBills)}
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Reserved in vault</span>
            </div>

            <div
              style={{
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
              }}
            >
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                Savings Target
              </span>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--mint)', marginTop: '0.2rem' }}>
                {formatCurrency(mockCashflowSummary.monthlySavingsTarget)}
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--mint)' }}>23% savings rate</span>
            </div>

            <div
              style={{
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
              }}
            >
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                Month Pacing
              </span>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginTop: '0.2rem' }}>
                Day 22 / 31
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--mint)' }}>9 days to payday</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2-COLUMN SECTION: RECENT TRANSACTIONS + RADAR HIGHLIGHTS ──── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
        }}
      >
        {/* Left: Recent Transactions Table / Rows */}
        <div className="glass-card" style={{ padding: '1.75rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.25rem',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                Today & Recent Activity
              </h3>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Latest verified entries
              </span>
            </div>
            <Link
              to="/transactions"
              style={{
                fontSize: '0.8rem',
                color: 'var(--mint)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              <span>View all ({mockTransactions.length})</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Compact Transaction Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {recentTransactions.map((tx) => (
              <div
                key={tx.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 0.95rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>
                    {tx.merchant}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    {tx.dateLabel} • {tx.time} • {tx.subCategory}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: '#ffffff',
                    }}
                  >
                    -{formatCurrency(tx.amount)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      color: 'var(--mint)',
                      background: 'rgba(16, 185, 129, 0.1)',
                      padding: '0.1rem 0.4rem',
                      borderRadius: 'var(--radius-xs)',
                    }}
                  >
                    {tx.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Goals & Upcoming Bill Snapshot */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Urgent Bill Radar Snapshot */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={16} color="#f59e0b" />
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>
                  Upcoming Bill Due
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: '#f59e0b',
                  background: 'rgba(245, 158, 11, 0.12)',
                  padding: '0.15rem 0.5rem',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                Due in {urgentBill.dueInDays} days
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>
                {urgentBill.name}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.1rem', color: '#ffffff' }}>
                {formatCurrency(urgentBill.amount)}
              </span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Quarantined in vault on 1st Oct • Will not impact your today's allowance.
            </p>

            <Link
              to="/bills"
              style={{
                fontSize: '0.78rem',
                color: 'var(--mint)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <span>Manage all recurring bills →</span>
            </Link>
          </div>

          {/* Savings Goal Snapshot */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Target size={16} color="var(--mint)" />
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>
                  Top Savings Priority
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--mint)' }}>
                {Math.round((primaryGoal.saved / primaryGoal.target) * 100)}%
              </span>
            </div>

            <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.4rem' }}>
              {primaryGoal.title}
            </div>

            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--mint)', fontFamily: 'var(--font-mono)' }}>
                {formatCurrency(primaryGoal.saved)}
              </strong>{' '}
              of {formatCurrency(primaryGoal.target)} ({primaryGoal.status})
            </div>

            {/* Progress bar */}
            <div
              style={{
                height: '6px',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '999px',
                overflow: 'hidden',
                marginBottom: '0.85rem',
              }}
            >
              <div
                style={{
                  width: `${(primaryGoal.saved / primaryGoal.target) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
                }}
              />
            </div>

            <Link
              to="/savings"
              style={{
                fontSize: '0.78rem',
                color: 'var(--mint)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <span>View all 3 savings goals →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
