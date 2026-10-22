import React, { useState } from 'react';
import { User, Bell, Shield, Sliders, CheckCircle2, Download, RefreshCw, Key } from 'lucide-react';
import { mockUser, mockCashflowSummary } from '../../data/mockData.js';

export default function SettingsPage() {
  const [dailyReminder, setDailyReminder] = useState(true);
  const [billAlert, setBillAlert] = useState(true);
  const [weekendBoost, setWeekendBoost] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSave = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', maxWidth: '820px' }}>
      {savedNotice && (
        <div
          style={{
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid var(--mint)',
            borderRadius: 'var(--radius-sm)',
            padding: '0.75rem 1rem',
            color: 'var(--mint)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.88rem',
            fontWeight: 600,
          }}
        >
          <CheckCircle2 size={16} />
          <span>Preferences updated successfully!</span>
        </div>
      )}

      {/* ── PROFILE SECTION ─────────────────────────────────────────── */}
      <div className="glass-card" style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <User size={18} color="var(--mint)" />
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
            User Profile & Identity
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
              Full Name
            </label>
            <input
              type="text"
              readOnly
              value={mockUser.name}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xs)',
                color: '#ffffff',
                fontSize: '0.88rem',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
              Email Address
            </label>
            <input
              type="email"
              readOnly
              value={mockUser.email}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xs)',
                color: '#ffffff',
                fontSize: '0.88rem',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
              Default Currency
            </label>
            <div
              style={{
                padding: '0.65rem 0.85rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xs)',
                color: '#ffffff',
                fontSize: '0.88rem',
                fontWeight: 600,
              }}
            >
              Indian Rupee (₹ INR)
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
              Account Status
            </label>
            <div
              style={{
                padding: '0.65rem 0.85rem',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: 'var(--radius-xs)',
                color: 'var(--mint)',
                fontSize: '0.88rem',
                fontWeight: 600,
              }}
            >
              ● Demo Mode (Decoupled Mock Layer)
            </div>
          </div>
        </div>
      </div>

      {/* ── SPENDING ALGORITHM PREFERENCES ───────────────────────────── */}
      <div className="glass-card" style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <Sliders size={18} color="var(--mint)" />
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
            Daily Engine Preferences
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff' }}>
                Weekend Allowance Smoothing
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Allocate 20% higher daily budget on Friday-Sunday by tapering weekday pace.
              </div>
            </div>
            <input
              type="checkbox"
              checked={weekendBoost}
              onChange={(e) => setWeekendBoost(e.target.checked)}
              style={{ width: '18px', height: '18px', accentColor: 'var(--mint)', cursor: 'pointer' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff' }}>
                Daily Pacing Reset
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Time when unused daily allowance converts to savings or carries over.
              </div>
            </div>
            <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--mint)', background: 'rgba(255,255,255,0.04)', padding: '0.3rem 0.6rem', borderRadius: '4px' }}>
              12:00 AM IST
            </span>
          </div>
        </div>
      </div>

      {/* ── NOTIFICATIONS & NUDGES ───────────────────────────────────── */}
      <div className="glass-card" style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <Bell size={18} color="var(--mint)" />
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
            Notifications & Smart Nudges
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff' }}>
                Evening Spending Recap (09:00 PM)
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                A gentle one-sentence summary of today's pace and remaining allowance.
              </div>
            </div>
            <input
              type="checkbox"
              checked={dailyReminder}
              onChange={(e) => setDailyReminder(e.target.checked)}
              style={{ width: '18px', height: '18px', accentColor: 'var(--mint)', cursor: 'pointer' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff' }}>
                Bill Vault Alert (3 days before due date)
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Alert you before upcoming debits like rent or wifi leave your account.
              </div>
            </div>
            <input
              type="checkbox"
              checked={billAlert}
              onChange={(e) => setBillAlert(e.target.checked)}
              style={{ width: '18px', height: '18px', accentColor: 'var(--mint)', cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>

      {/* ── PRIVACY & CLIENT DATA SOVEREIGNTY ────────────────────────── */}
      <div className="glass-card" style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Shield size={18} color="var(--mint)" />
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
            Privacy & Data Sovereignty
          </h3>
        </div>

        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          Kharcha does not harvest transaction history, scrape SMS inboxes, or broker financial data to lending companies.
          All mock data shown here is strictly decoupled and safe.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            onClick={handleSave}
            className="btn-primary"
            style={{ fontSize: '0.85rem', padding: '0.65rem 1.25rem' }}
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
