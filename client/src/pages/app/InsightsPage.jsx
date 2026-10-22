import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from 'recharts';
import { Layers, TrendingDown, ArrowDownRight, Award, Zap, AlertCircle } from 'lucide-react';
import {
  mockCategories,
  mockWeeklyTrend,
  mockCashflowSummary,
} from '../../data/mockData.js';
import { formatCurrency } from '../../constants/index.js';

export default function InsightsPage() {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: '#131d17',
            border: '1px solid var(--border-accent)',
            borderRadius: '10px',
            padding: '0.65rem 0.85rem',
            fontSize: '0.82rem',
          }}
        >
          <div style={{ color: '#ffffff', fontWeight: 700 }}>
            {payload[0].payload.day}
          </div>
          <div style={{ color: 'var(--mint)', fontFamily: 'var(--font-mono)' }}>
            {formatCurrency(payload[0].value)}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* ── METRICS SUMMARY ROW ─────────────────────────────────────── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
        }}
      >
        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
            Daily Burn Average
          </span>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginTop: '0.25rem' }}>
            {formatCurrency(1645)}
          </div>
          <span style={{ fontSize: '0.72rem', color: 'var(--mint)' }}>
            ↓ 18% below your ₹3,333 limit
          </span>
        </div>

        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
            Top Outflow Category
          </span>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginTop: '0.25rem' }}>
            Food & Dining
          </div>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
            38% of total spending (₹12,400)
          </span>
        </div>

        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
            Total Month Spend
          </span>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginTop: '0.25rem' }}>
            {formatCurrency(mockCashflowSummary.spentThisMonth)}
          </div>
          <span style={{ fontSize: '0.72rem', color: 'var(--mint)' }}>
            Healthy pace on Day 22
          </span>
        </div>

        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
            Projected Month-End Buffer
          </span>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--mint)', marginTop: '0.25rem' }}>
            +{formatCurrency(10350)}
          </div>
          <span style={{ fontSize: '0.72rem', color: 'var(--mint)' }}>
            Additional surplus to invest
          </span>
        </div>
      </div>

      {/* ── 2-COLUMN SECTION: VELOCITY CHART & CATEGORIES ───────────── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
        }}
      >
        {/* Weekly Velocity Chart */}
        <div className="glass-card" style={{ padding: '1.75rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                7-Day Velocity Pacing
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Target threshold: ₹3,333/day
              </span>
            </div>
            <span
              style={{
                fontSize: '0.7rem',
                color: 'var(--mint)',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '0.2rem 0.5rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
              }}
            >
              100% Within Safe Zone
            </span>
          </div>

          <div style={{ width: '100%', height: '230px', marginBottom: '1rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockWeeklyTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="day" stroke="#647a6c" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#647a6c" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v}`} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="spend" radius={[6, 6, 0, 0]}>
                  {mockWeeklyTrend.map((entry, index) => (
                    <Cell
                      key={`c-${index}`}
                      fill={entry.spend > 2500 ? '#f59e0b' : '#10b981'}
                      fillOpacity={0.85}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.85rem' }}>
            Highest spending day this week was Saturday (₹2,950) due to weekend socializing, easily absorbed by low weekday burn.
          </p>
        </div>

        {/* Category Distribution Breakdown */}
        <div className="glass-card" style={{ padding: '1.75rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.25rem',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                Category Allocation
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Distribution of October spend
              </span>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Total: {formatCurrency(34450)}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {mockCategories.map((cat) => (
              <div key={cat.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: cat.color }} />
                    <span style={{ fontWeight: 600, color: '#ffffff' }}>{cat.name}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>({cat.count} txns)</span>
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#ffffff' }}>
                      {formatCurrency(cat.amount)}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.4rem' }}>
                      ({cat.percentage}%)
                    </span>
                  </div>
                </div>

                <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '999px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${cat.percentage}%`,
                      height: '100%',
                      backgroundColor: cat.color,
                      borderRadius: '999px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
