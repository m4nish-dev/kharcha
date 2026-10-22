import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { APP_NAME, APP_TAGLINE } from '../constants/index.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Daily Engine', href: '#overview' },
    { label: 'Insights', href: '#insights' },
    { label: 'AI Companion', href: '#assistant' },
    { label: 'Savings & Bills', href: '#goals' },
    { label: 'Privacy', href: '#privacy' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: scrolled
          ? 'rgba(6, 9, 7, 0.82)'
          : 'rgba(6, 9, 7, 0.3)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid transparent',
      }}
    >
      <div
        className="landing-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.75rem',
        }}
      >
        {/* Brand Wordmark & Icon */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: 'var(--text-white)',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '11px',
              background:
                'linear-gradient(135deg, #10b981 0%, #064e3b 100%)',
              border: '1px solid rgba(52, 211, 153, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)',
              position: 'relative',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                fontSize: '1.25rem',
                color: '#ffffff',
                textShadow: '0 1px 2px rgba(0,0,0,0.4)',
              }}
            >
              ₹
            </span>
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: '1.35rem',
                letterSpacing: '-0.03em',
                background:
                  'linear-gradient(180deg, #ffffff 0%, #e0e7e3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block',
                lineHeight: 1.1,
              }}
            >
              {APP_NAME}
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.04em',
                color: 'var(--text-muted)',
                fontWeight: 600,
                textTransform: 'uppercase',
                display: 'block',
              }}
            >
              {APP_TAGLINE}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--text-white)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--text-secondary)')
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.25rem',
          }}
          className="desktop-actions"
        >
          <Link
            to="/dashboard"
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              padding: '0.5rem 0.85rem',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'var(--text-white)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = 'var(--text-secondary)')
            }
          >
            Sign in
          </Link>

          <Link to="/dashboard" className="btn-primary">
            <span>Get Started</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-medium)',
            color: 'var(--text-primary)',
          }}
          className="mobile-toggle"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              backgroundColor: 'rgba(9, 14, 11, 0.98)',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '1.5rem 1.5rem 2rem 1.5rem',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    padding: '0.4rem 0',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <hr
                style={{
                  border: 'none',
                  borderTop: '1px solid var(--border-subtle)',
                  margin: '0.5rem 0',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                }}
              >
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-secondary"
                  style={{ justifyContent: 'center' }}
                >
                  Sign in
                </Link>
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary"
                  style={{ justifyContent: 'center' }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
