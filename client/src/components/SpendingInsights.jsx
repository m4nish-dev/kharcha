import React, { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from 'recharts';
import { PieChart, TrendingDown, ArrowUpRight, Filter, Layers } from 'lucide-react';
import { formatCurrency } from '../constants/index.js';

const categoryData = [
  { name: 'Food & Dining', amount: 12400, percentage: '38%', color: '#10b981', transactions: 32, note: 'Swiggy & restaurants' },
  { name: 'Groceries', amount: 8500, percentage: '26%', color: '#34d399', transactions: 9, note: '14% under budget' },
  { name: 'Shopping', amount: 6500, percentage: '20%', color: '#f59e0b', transactions: 5, note: 'Amazon & apparel' },
  { name: 'Transport', amount: 5200, percentage: '16%', color: '#38bdf8', transactions: 24, note: 'Metro & fuel' },
];

const weeklyTrend = [
  { day: 'Mon', spend: 820 },
  { day: 'Tue', spend: 1450 },
  { day: 'Wed', spend: 690 },
  { day: 'Thu', spend: 2150 },
  { day: 'Fri', spend: 1800 },
  { day: 'Sat', spend: 2950 },
  { day: 'Sun', spend: 1650 },
];

export default function SpendingInsights() {
  const [activeCategory, setActiveCategory] = useState(categoryData[0]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: 'rgba(19, 29, 23, 0.95)',
            border: '1px solid var(--border-accent)',
            borderRadius: '12px',
            padding: '0.75rem 1rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
            fontSize: '0.85rem',
          }}
        >
          <div style={{ color: 'var(--text-white)', fontWeight: 700 }}>
            {payload[0].payload.day || payload[0].payload.name}
          </div>
          <div style={{ color: 'var(--mint)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
            {formatCurrency(payload[0].value)}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="insights" className="section-wrapper">
      <div className="landing-container">
        {/* Section Header */}
        <div style={{ maxWidth: '700px', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Layers size={14} />
            Deep Spend Clarity
          </div>
          <h2 className="section-title">
            See where every rupee went without wrestling spreadsheets.
          </h2>
          <p className="section-desc">
            No endless receipt categorisation. Kharcha groups your spending into human categories
            and highlights patterns before they derail your month.
          </p>
        </div>

        {/* 2-Column Insights Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Left: Weekly Trend Bar Chart */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.75rem',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                  Weekly Spend Velocity
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  This week • Total ₹11,510
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--mint)',
                  background: 'var(--mint-subtle)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                Safe Pace
              </span>
            </div>

            {/* Recharts Bar Container */}
            <div style={{ width: '100%', height: '240px', marginBottom: '1.5rem' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis
                    dataKey="day"
                    stroke="#647a6c"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#647a6c"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `₹${v}`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="spend" radius={[8, 8, 0, 0]}>
                    {weeklyTrend.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.spend > 2500 ? '#f59e0b' : '#10b981'}
                        fillOpacity={entry.spend > 2500 ? 0.9 : 0.75}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1rem',
              }}
            >
              <span>Daily target: ₹3,333</span>
              <span style={{ color: 'var(--mint)', fontWeight: 600 }}>0 over-limit days this week</span>
            </div>
          </div>

          {/* Right: Category Distribution Grid */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
              }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                Major Outflow Categories
              </h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                October 2026
              </span>
            </div>

            {/* Category Cards List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {categoryData.map((cat) => (
                <div
                  key={cat.name}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background:
                      activeCategory.name === cat.name
                        ? 'rgba(52, 211, 153, 0.08)'
                        : 'rgba(255, 255, 255, 0.03)',
                    border:
                      activeCategory.name === cat.name
                        ? '1px solid var(--border-accent)'
                        : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem 1.25rem',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <span
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: cat.color,
                        }}
                      />
                      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                        {cat.name}
                      </span>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#ffffff' }}>
                        {formatCurrency(cat.amount)}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                        ({cat.percentage})
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    <span>{cat.transactions} entries • {cat.note}</span>
                    <span style={{ color: cat.color }}>View breakdown →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
