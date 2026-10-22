import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, PlusCircle, CheckCircle2, Sparkles, Palmtree, Smartphone, ShieldCheck } from 'lucide-react';
import { formatCurrency } from '../constants/index.js';

export default function SavingsGoals() {
  const [goaSaved, setGoaSaved] = useState(42000);
  const goaTarget = 50000;
  const goaPercentage = Math.min(100, Math.round((goaSaved / goaTarget) * 100));

  const handleBoost = () => {
    if (goaSaved < goaTarget) {
      setGoaSaved((prev) => Math.min(goaTarget, prev + 1000));
    }
  };

  const goals = [
    {
      id: 'goa',
      title: 'Monsoon Getaway to Goa',
      icon: <Palmtree size={22} color="var(--mint)" />,
      saved: goaSaved,
      target: goaTarget,
      percentage: goaPercentage,
      status: goaPercentage >= 100 ? 'Target Achieved! 🎉' : '18 days ahead of schedule',
      allocation: '₹280 / day routed automatically',
      interactive: true,
    },
    {
      id: 'phone',
      title: 'New Phone Upgrade',
      icon: <Smartphone size={22} color="#38bdf8" />,
      saved: 78000,
      target: 120000,
      percentage: 65,
      status: 'On track for Diwali launch',
      allocation: '₹4,200 / month pace',
      interactive: false,
    },
    {
      id: 'emergency',
      title: '3-Month Emergency Buffer',
      icon: <ShieldCheck size={22} color="#f59e0b" />,
      saved: 150000,
      target: 150000,
      percentage: 100,
      status: 'Fully Funded & Protected 🛡️',
      allocation: 'Capital preserved in liquid reserve',
      interactive: false,
    },
  ];

  return (
    <section id="goals" className="section-wrapper ivory-section">
      <div className="landing-container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Target size={14} />
            Autonomous Savings
          </div>
          <h2 className="section-title">
            Save for what excites you without cutting out coffee.
          </h2>
          <p className="section-desc">
            Traditional budgets ask you to sacrifice everything. Kharcha quietly allocates
            micro-savings from your daily allowance before you have a chance to spend it.
          </p>
        </div>

        {/* Goals Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="ivory-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div>
                {/* Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      background: 'rgba(16, 185, 129, 0.08)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {goal.icon}
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      fontSize: '1.25rem',
                      color: goal.percentage === 100 ? 'var(--emerald-dark)' : 'var(--ivory-text)',
                    }}
                  >
                    {goal.percentage}%
                  </span>
                </div>

                {/* Title & Numbers */}
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--ivory-text)',
                    marginBottom: '0.4rem',
                  }}
                >
                  {goal.title}
                </h3>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.4rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: 'var(--emerald-dark)',
                    }}
                  >
                    {formatCurrency(goal.saved)}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--ivory-muted-text)' }}>
                    of {formatCurrency(goal.target)}
                  </span>
                </div>

                {/* Progress bar */}
                <div
                  style={{
                    height: '10px',
                    borderRadius: '999px',
                    background: 'var(--ivory-muted)',
                    overflow: 'hidden',
                    marginBottom: '1rem',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${goal.percentage}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{
                      height: '100%',
                      background:
                        goal.percentage === 100
                          ? 'linear-gradient(90deg, #10b981 0%, #059669 100%)'
                          : 'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
                      borderRadius: '999px',
                    }}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.78rem',
                    color: 'var(--ivory-subtext)',
                    marginBottom: '1.5rem',
                  }}
                >
                  <span>{goal.status}</span>
                  <span style={{ fontWeight: 600 }}>{goal.allocation}</span>
                </div>
              </div>

              {/* Interactive Demo Action for Goa */}
              {goal.interactive ? (
                <button
                  onClick={handleBoost}
                  disabled={goal.saved >= goal.target}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)',
                    background:
                      goal.saved >= goal.target
                        ? 'rgba(16, 185, 129, 0.15)'
                        : 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: 'var(--emerald-dark)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <PlusCircle size={16} />
                  <span>
                    {goal.saved >= goal.target
                      ? 'Goal Complete! ✈️'
                      : 'Simulate +₹1,000 Daily Boost'}
                  </span>
                </button>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.82rem',
                    color: 'var(--ivory-muted-text)',
                  }}
                >
                  <CheckCircle2 size={15} color="var(--emerald-dark)" />
                  <span>Automated scheduled deduction</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
