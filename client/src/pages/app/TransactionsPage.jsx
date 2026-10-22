import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpDown, Calendar, Download, Tag } from 'lucide-react';
import { mockTransactions } from '../../data/mockData.js';
import { formatCurrency } from '../../constants/index.js';

const categories = [
  'All',
  'Food & Dining',
  'Groceries',
  'Shopping',
  'Transport',
  'Health',
];

export default function TransactionsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const filteredTransactions = useMemo(() => {
    return mockTransactions.filter((tx) => {
      const matchesSearch =
        tx.merchant.toLowerCase().includes(search.toLowerCase()) ||
        tx.note.toLowerCase().includes(search.toLowerCase()) ||
        tx.subCategory.toLowerCase().includes(search.toLowerCase());

      const matchesCat =
        selectedCategory === 'All' || tx.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [search, selectedCategory]);

  const totalFilteredAmount = useMemo(() => {
    return filteredTransactions.reduce((acc, tx) => acc + tx.amount, 0);
  }, [filteredTransactions]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* ── TOP CONTROL BAR: SEARCH & CATEGORY PILLS ──────────────────── */}
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '1.25rem',
          }}
        >
          {/* Search Box */}
          <div
            style={{
              position: 'relative',
              flex: '1 1 280px',
              maxWidth: '400px',
            }}
          >
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '0.85rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
              }}
            />
            <input
              type="text"
              placeholder="Search merchant, item, note..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem 0.65rem 2.4rem',
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                color: '#ffffff',
                fontSize: '0.88rem',
                outline: 'none',
              }}
            />
          </div>

          {/* Filter Stats Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
            }}
          >
            <span>
              Showing <strong>{filteredTransactions.length}</strong> entries
            </span>
            <span>•</span>
            <span>
              Total:{' '}
              <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--mint)' }}>
                {formatCurrency(totalFilteredAmount)}
              </strong>
            </span>
          </div>
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: selectedCategory === cat ? 'var(--mint)' : 'var(--text-muted)',
                background:
                  selectedCategory === cat
                    ? 'rgba(16, 185, 129, 0.14)'
                    : 'rgba(255, 255, 255, 0.03)',
                border:
                  selectedCategory === cat
                    ? '1px solid var(--border-accent)'
                    : '1px solid var(--border-subtle)',
                transition: 'all var(--transition-fast)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── TRANSACTIONS LIST TABLE ─────────────────────────────────── */}
      <div className="glass-card" style={{ padding: '1.25rem 1.5rem', overflowX: 'auto' }}>
        {filteredTransactions.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
            No transactions match your search "{search}".
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {filteredTransactions.map((tx) => (
              <div
                key={tx.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'background var(--transition-fast)',
                }}
              >
                {/* Left info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--mint)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    ₹
                  </div>
                  <div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                      {tx.merchant}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
                      {tx.note} • {tx.paymentMethod}
                    </div>
                  </div>
                </div>

                {/* Right info */}
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: '#ffffff',
                    }}
                  >
                    -{formatCurrency(tx.amount)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.2rem' }}>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {tx.dateLabel}, {tx.time}
                    </span>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        color: 'var(--mint)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        padding: '0.1rem 0.45rem',
                        borderRadius: 'var(--radius-xs)',
                      }}
                    >
                      {tx.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
