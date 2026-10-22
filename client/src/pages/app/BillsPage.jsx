import React from 'react';
import { CalendarClock, ShieldCheck, CheckCircle2, Wifi, Home, Film, Zap, Dumbbell, Clock } from 'lucide-react';
import { mockBills, mockCashflowSummary } from '../../data/mockData.js';
import { formatCurrency } from '../../constants/index.js';

export default function BillsPage() {
  const totalBillsAmount = mockBills.reduce((acc, b) => acc + b.amount, 0);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Wifi':
        return <Wifi size={18} color="#38bdf8" />;
      case 'Home':
        return <Home size={18} color="#34d399" />;
      case 'Film':
        return <Film size={18} color="#fb7185" />;
      case 'Zap':
        return <Zap size={18} color="#facc15" />;
      case 'Dumbbell':
        return <Dumbbell size={18} color="#c084fc" />;
      default:
        return <CalendarClock size={18} color="var(--mint)" />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* ── TOP VAULT HIGHLIGHT ─────────────────────────────────────── */}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <ShieldCheck size={18} color="var(--mint)" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--mint)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              The Quarantined Bill Vault
            </span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            {formatCurrency(totalBillsAmount)}
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
            Quarantined on the 1st of the month. Never touches your daily allowance.
          </p>
        </div>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem 1.25rem',
          }}
        >
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
            Next Payment Due
          </div>
          <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginTop: '0.2rem' }}>
            Airtel Fiber (₹1,179)
          </div>
          <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: 600 }}>
            Due in 3 days (Oct 25)
          </span>
        </div>
      </div>

      {/* ── BILLS TABLE LIST ────────────────────────────────────────── */}
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem' }}>
          Monthly Recurring Commitments ({mockBills.length})
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {mockBills.map((bill) => (
            <div
              key={bill.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getIcon(bill.icon)}
                </div>

                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                    {bill.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Due: {bill.dueDate} (in {bill.dueInDays} days) • {bill.category}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: '#ffffff',
                  }}
                >
                  {formatCurrency(bill.amount)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem', marginTop: '0.2rem' }}>
                  {bill.autoPay ? (
                    <span style={{ fontSize: '0.68rem', color: 'var(--mint)', fontWeight: 600 }}>
                      ● Auto-Pay Enabled
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.68rem', color: '#f59e0b', fontWeight: 600 }}>
                      ○ Manual Pay
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
