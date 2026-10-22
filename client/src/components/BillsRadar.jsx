import React from 'react';
import { Calendar, Wifi, Home, Film, Zap, Dumbbell, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { formatCurrency } from '../constants/index.js';

const upcomingBills = [
  {
    id: 'wifi',
    name: 'Airtel Xstream Fiber',
    category: 'Broadband & Utilities',
    amount: 1179,
    dueDate: 'In 3 days (Oct 25)',
    icon: <Wifi size={18} color="#38bdf8" />,
    status: 'Due Soon',
    statusColor: '#f59e0b',
  },
  {
    id: 'rent',
    name: 'Apartment Rent & Society',
    category: 'Fixed Housing',
    amount: 24000,
    dueDate: 'In 9 days (Nov 1)',
    icon: <Home size={18} color="#34d399" />,
    status: 'Reserved in Vault',
    statusColor: 'var(--mint)',
  },
  {
    id: 'streaming',
    name: 'Netflix & Spotify Family',
    category: 'Digital Entertainment',
    amount: 848,
    dueDate: 'In 6 days (Oct 28)',
    icon: <Film size={18} color="#fb7185" />,
    status: 'Auto-Debit',
    statusColor: '#94a3b8',
  },
  {
    id: 'electricity',
    name: 'BESCOM Electricity Bill',
    category: 'Home Utilities',
    amount: 1820,
    dueDate: 'In 12 days (Nov 4)',
    icon: <Zap size={18} color="#facc15" />,
    status: 'Estimated',
    statusColor: '#94a3b8',
  },
];

export default function BillsRadar() {
  const totalBills = upcomingBills.reduce((acc, bill) => acc + bill.amount, 0);

  return (
    <section id="bills" className="section-wrapper">
      <div className="landing-container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Calendar size={14} />
            Subscription & Bill Shield
          </div>
          <h2 className="section-title">
            Never wake up to a surprise debit that empties your weekend plans.
          </h2>
          <p className="section-desc">
            Kharcha locks away upcoming bills before calculating your daily spending allowance.
            Your daily number is truly yours to burn.
          </p>
        </div>

        {/* 2-Column Bills Overview */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Bills Schedule List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {upcomingBills.map((bill) => (
              <div
                key={bill.id}
                className="glass-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {bill.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                      {bill.name}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {bill.dueDate} • {bill.category}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: '#ffffff',
                    }}
                  >
                    {formatCurrency(bill.amount)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: bill.statusColor,
                    }}
                  >
                    {bill.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Protected Vault Card */}
          <div
            style={{
              background: 'linear-gradient(145deg, #121d16 0%, #0a110d 100%)',
              border: '1px solid rgba(52, 211, 153, 0.28)',
              borderRadius: '28px',
              padding: '2.5rem',
              boxShadow: '0 25px 60px -15px rgba(0,0,0,0.85)',
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--mint)',
                marginBottom: '1.5rem',
              }}
            >
              <ShieldCheck size={28} />
            </div>

            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '0.5rem',
              }}
            >
              The Kharcha Bill Vault
            </h3>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '2rem',
              }}
            >
              Every rupee needed for rent, wifi, electricity and subscriptions is quarantined on the 1st of the month.
              Your daily budget only sees money you are truly free to spend.
            </p>

            <div
              style={{
                background: 'rgba(0, 0, 0, 0.45)',
                borderRadius: '18px',
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--border-subtle)',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                Quarantined Bill Reserves This Month
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--mint)',
                }}
              >
                {formatCurrency(totalBills)}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <CheckCircle2 size={16} color="var(--mint)" />
              <span>Zero late payment penalties • Zero accidental overdrafts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
