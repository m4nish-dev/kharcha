import React, { useState } from 'react';
import { Target, Plus, CheckCircle2, Palmtree, Smartphone, ShieldCheck, Sparkles } from 'lucide-react';
import { mockSavingsGoals } from '../../data/mockData.js';
import { formatCurrency } from '../../constants/index.js';

export default function SavingsPage() {
  const [goals, setGoals] = useState(mockSavingsGoals);

  const handleBoost = (id) => {
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id === id && g.saved < g.target) {
          return { ...g, saved: Math.min(g.target, g.saved + 1000) };
        }
        return g;
      })
    );
  };

  const totalSaved = goals.reduce((acc, g) => acc + g.saved, 0);
  const totalTarget = goals.reduce((acc, g) => acc + g.target, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* ── TOP STATS CARD ──────────────────────────────────────────── */}
      <div
        className="glass-card"
        style={{
          padding: '1.75rem 2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--mint)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Autonomous Capital Reserve
          </span>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              marginTop: '0.35rem',
            }}
          >
            {formatCurrency(totalSaved)}{' '}
            <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              / {formatCurrency(totalTarget)}
            </span>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Allocating ₹630/day automatically from your daily allowance pool
          </span>
        </div>

        <div
          style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem 1.25rem',
            textAlign: 'right',
          }}
        >
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
            Overall Goal Progress
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--mint)' }}>
            {Math.round((totalSaved / totalTarget) * 100)}%
          </div>
        </div>
      </div>

      {/* ── GOALS CARDS GRID ─────────────────────────────────────────── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {goals.map((goal) => {
          const percent = Math.min(100, Math.round((goal.saved / goal.target) * 100));

          return (
            <div
              key={goal.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: goal.color,
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-xs)',
                    }}
                  >
                    {goal.category}
                  </span>

                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '1.2rem', color: '#ffffff' }}>
                    {percent}%
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                  {goal.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 800, color: goal.color }}>
                    {formatCurrency(goal.saved)}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    of {formatCurrency(goal.target)}
                  </span>
                </div>

                {/* Progress bar */}
                <div
                  style={{
                    height: '8px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '999px',
                    overflow: 'hidden',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: `${percent}%`,
                      height: '100%',
                      backgroundColor: goal.color,
                      borderRadius: '999px',
                      transition: 'width 300ms ease',
                    }}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                  }}
                >
                  <span>{goal.status}</span>
                  <span>{goal.dailyAllocation > 0 ? `₹${goal.dailyAllocation}/day` : 'Preserved'}</span>
                </div>
              </div>

              {/* Action Button */}
              {percent < 100 ? (
                <button
                  onClick={() => handleBoost(goal.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    padding: '0.65rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: 'var(--mint)',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <Plus size={15} />
                  <span>Simulate +₹1,000 Allocation Boost</span>
                </button>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.65rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--mint)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2 size={16} />
                  <span>Goal 100% Achieved</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
