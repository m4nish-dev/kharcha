import React, { useState } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  ArrowLeftRight,
  BarChart3,
  PiggyBank,
  CalendarClock,
  Sparkles,
  Settings,
  Menu,
  X,
  ExternalLink,
  Plus,
  ShieldCheck,
  Bell,
} from 'lucide-react';
import { APP_NAME, APP_TAGLINE } from '../../constants/index.js';
import { mockUser, mockCashflowSummary } from '../../data/mockData.js';
import { formatCurrency } from '../../constants/index.js';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/transactions', label: 'Transactions', icon: ArrowLeftRight },
  { path: '/insights', label: 'Insights', icon: BarChart3 },
  { path: '/savings', label: 'Savings', icon: PiggyBank },
  { path: '/bills', label: 'Bills & Subscriptions', icon: CalendarClock },
  { path: '/ai-coach', label: 'AI Coach', icon: Sparkles, badge: 'AI' },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export default function AppLayout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickLogOpen, setQuickLogOpen] = useState(false);
  const [quickAmount, setQuickAmount] = useState('');
  const [quickMerchant, setQuickMerchant] = useState('');
  const [quickLoggedNotice, setQuickLoggedNotice] = useState(false);

  // Map route to title and subtitle
  const pageMeta = {
    '/dashboard': {
      title: 'Daily Dashboard',
      subtitle: `Today's safe allowance: ${formatCurrency(mockCashflowSummary.dailyBudget)}`,
    },
    '/transactions': {
      title: 'Transactions & Ledger',
      subtitle: 'Complete history with category filters and search',
    },
    '/insights': {
      title: 'Spending Insights',
      subtitle: 'Velocity trends and category expense breakdown',
    },
    '/savings': {
      title: 'Autonomous Savings',
      subtitle: 'Goal pacing and scheduled daily micro-allocations',
    },
    '/bills': {
      title: 'Bills & Subscriptions',
      subtitle: 'Quarantined commitments before daily allowance',
    },
    '/ai-coach': {
      title: 'Kharcha AI Coach',
      subtitle: 'Plain-language answers to your real-life spending questions',
    },
    '/settings': {
      title: 'Settings & Privacy',
      subtitle: 'Preferences, notifications, and local-first data controls',
    },
  };

  const currentMeta = pageMeta[location.pathname] || {
    title: 'Kharcha',
    subtitle: 'Personal Money Companion',
  };

  const handleQuickLog = (e) => {
    e.preventDefault();
    if (quickAmount) {
      setQuickLoggedNotice(true);
      setTimeout(() => {
        setQuickLoggedNotice(false);
        setQuickLogOpen(false);
        setQuickAmount('');
        setQuickMerchant('');
      }, 1400);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: 'var(--bg-obsidian)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {/* ── DESKTOP PERSISTENT SIDEBAR ─────────────────────────────────── */}
      <aside
        style={{
          width: '260px',
          backgroundColor: '#0a0f0c',
          borderRight: '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          position: 'sticky',
          top: 0,
          height: '100vh',
          zIndex: 40,
          flexShrink: 0,
        }}
        className="app-desktop-sidebar"
      >
        {/* Brand Header */}
        <div
          style={{
            height: '4.5rem',
            display: 'flex',
            alignItems: 'center',
            padding: '0 1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <Link
            to="/dashboard"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#ffffff',
            }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background:
                  'linear-gradient(135deg, #10b981 0%, #064e3b 100%)',
                border: '1px solid rgba(52, 211, 153, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                fontSize: '1.1rem',
                color: '#ffffff',
                boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
              }}
            >
              ₹
            </div>
            <div>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  display: 'block',
                  lineHeight: 1.1,
                }}
              >
                {APP_NAME}
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontWeight: 600,
                  display: 'block',
                }}
              >
                Finance App
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Items */}
        <nav
          style={{
            flex: 1,
            padding: '1.25rem 0.85rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-muted)',
              padding: '0.25rem 0.75rem',
              marginBottom: '0.25rem',
            }}
          >
            Daily Management
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--mint)' : 'var(--text-secondary)',
                  backgroundColor: isActive
                    ? 'rgba(16, 185, 129, 0.12)'
                    : 'transparent',
                  border: isActive
                    ? '1px solid rgba(52, 211, 153, 0.25)'
                    : '1px solid transparent',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Icon
                    size={17}
                    color={isActive ? 'var(--mint)' : 'var(--text-muted)'}
                  />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: 'var(--mint)',
                      background: 'rgba(52, 211, 153, 0.15)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Sidebar Footer with User Profile & Public Site Link */}
        <div
          style={{
            padding: '1rem',
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: '#070b08',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {/* Public Landing Link */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              padding: '0.4rem 0.5rem',
              borderRadius: 'var(--radius-xs)',
              transition: 'color var(--transition-fast)',
            }}
          >
            <span>Public Website</span>
            <ExternalLink size={13} />
          </Link>

          {/* User Profile Capsule */}
          <Link
            to="/settings"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.6rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.2)',
                border: '1px solid var(--mint)',
                color: 'var(--mint)',
                fontSize: '0.8rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {mockUser.avatar}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {mockUser.name}
              </div>
              <div
                style={{
                  fontSize: '0.68rem',
                  color: 'var(--mint)',
                  fontWeight: 600,
                }}
              >
                Demo Ledger Mode
              </div>
            </div>
          </Link>
        </div>
      </aside>

      {/* ── MAIN CONTENT WORKSPACE ────────────────────────────────────── */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          position: 'relative',
        }}
      >
        {/* Top Header Bar */}
        <header
          style={{
            height: '4.5rem',
            backgroundColor: 'rgba(9, 14, 11, 0.85)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1.5rem',
            position: 'sticky',
            top: 0,
            zIndex: 30,
          }}
        >
          {/* Left: Mobile Toggle & Page Titles */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
              }}
              className="app-mobile-menu-btn"
              aria-label="Toggle App Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <div>
              <h1
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  lineHeight: 1.2,
                }}
              >
                {currentMeta.title}
              </h1>
              <span
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                }}
              >
                {currentMeta.subtitle}
              </span>
            </div>
          </div>

          {/* Right: Date & Quick Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* Demo Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--mint)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-full)',
              }}
              className="desktop-header-pill"
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--mint)',
                }}
              />
              Demo Data Ledger
            </div>

            {/* Quick Log Button */}
            <button
              onClick={() => setQuickLogOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'var(--mint)',
                color: '#052317',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '0.5rem 0.95rem',
                borderRadius: 'var(--radius-full)',
                boxShadow: '0 2px 10px rgba(16, 185, 129, 0.3)',
                transition: 'transform var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <Plus size={16} />
              <span>Log Kharcha</span>
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              top: '4.5rem',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(6, 9, 7, 0.98)',
              zIndex: 35,
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              overflowY: 'auto',
            }}
            className="app-mobile-drawer"
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              App Navigation
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--mint)' : '#ffffff',
                    background: isActive ? 'rgba(16, 185, 129, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                    border: isActive ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                  }}
                >
                  <Icon size={18} color={isActive ? 'var(--mint)' : 'var(--text-muted)'} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
            <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '1rem 0' }} />
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
              }}
            >
              <span>Back to Public Website</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        )}

        {/* ── ROUTE OUTLET CANVAS ────────────────────────────────────── */}
        <main
          style={{
            flex: 1,
            padding: '1.75rem 1.5rem 5rem 1.5rem',
            maxWidth: '1240px',
            width: '100%',
            margin: '0 auto',
          }}
          className="app-main-content"
        >
          <Outlet />
        </main>

        {/* ── MOBILE COMPACT BOTTOM NAVIGATION ───────────────────────── */}
        <nav
          style={{
            display: 'none',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4rem',
            backgroundColor: 'rgba(8, 13, 10, 0.95)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid var(--border-subtle)',
            zIndex: 30,
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '0 0.5rem',
          }}
          className="app-mobile-bottom-nav"
        >
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.2rem',
                  fontSize: '0.68rem',
                  color: isActive ? 'var(--mint)' : 'var(--text-muted)',
                  fontWeight: isActive ? 700 : 500,
                  padding: '0.3rem',
                }}
              >
                <Icon size={18} color={isActive ? 'var(--mint)' : 'var(--text-muted)'} />
                <span>{item.label.split(' ')[0]}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* ── QUICK LOG KHARCHA MODAL ──────────────────────────────────── */}
      {quickLogOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '1.5rem',
          }}
        >
          <div
            style={{
              background: '#101913',
              border: '1px solid var(--border-accent)',
              borderRadius: '24px',
              padding: '2rem',
              maxWidth: '440px',
              width: '100%',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9)',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem',
              }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                Quick Log Kharcha
              </h3>
              <button
                onClick={() => setQuickLogOpen(false)}
                style={{
                  color: 'var(--text-muted)',
                  padding: '0.25rem',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {quickLoggedNotice ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '2rem 1rem',
                  color: 'var(--mint)',
                  fontWeight: 700,
                }}
              >
                ✓ ₹{quickAmount} logged to today's allowance!
              </div>
            ) : (
              <form onSubmit={handleQuickLog}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Amount (₹ INR)
                  </label>
                  <input
                    type="number"
                    required
                    autoFocus
                    placeholder="e.g. 250"
                    value={quickAmount}
                    onChange={(e) => setQuickAmount(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#ffffff',
                      fontSize: '1.2rem',
                      fontFamily: 'var(--font-mono)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Merchant or Note
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Blue Tokai Cafe, Swiggy, Auto"
                    value={quickMerchant}
                    onChange={(e) => setQuickMerchant(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Confirm Entry
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ── RESPONSIVE CSS STYLES ────────────────────────────────────── */}
      <style>{`
        @media (max-width: 900px) {
          .app-desktop-sidebar {
            display: none !important;
          }
          .app-mobile-menu-btn {
            display: flex !important;
          }
          .app-mobile-bottom-nav {
            display: flex !important;
          }
          .desktop-header-pill {
            display: none !important;
          }
          .app-main-content {
            padding-bottom: 6rem !important;
          }
        }
        @media (min-width: 901px) {
          .app-mobile-menu-btn {
            display: none !important;
          }
          .app-mobile-bottom-nav {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
