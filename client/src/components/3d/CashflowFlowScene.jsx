import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowDown,
  ShieldCheck,
  Target,
  Sparkles,
  Zap,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { formatCurrency } from '../../constants/index.js';

export default function CashflowFlowScene() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Scroll linked transformations
  const conduitHeight = useTransform(scrollYProgress, [0.1, 0.45], ['0%', '100%']);
  const billsOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0.3, 1]);
  const savingsOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0.3, 1]);
  const dailyScale = useTransform(scrollYProgress, [0.45, 0.65], [0.92, 1]);
  const dailyGlow = useTransform(
    scrollYProgress,
    [0.45, 0.65],
    ['0 10px 25px rgba(0,0,0,0.5)', '0 25px 60px -10px rgba(16, 185, 129, 0.4)']
  );

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '840px',
        margin: '0 auto',
        padding: '3rem 1rem',
      }}
    >
      {/* ── STAGE 1: INFLOW STREAM NODE ──────────────────────────────── */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.65rem 1.4rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-medium)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
            }}
          />
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Step 1 • Monthly Inflow:
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: '#ffffff',
            }}
          >
            ₹95,000
          </span>
        </div>
      </div>

      {/* ── DUAL DIVERGENCE PIPELINE: FIXED BILLS & SAVINGS ──────────── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem',
          position: 'relative',
        }}
      >
        {/* Divergence Card A: Quarantined Bill Vault */}
        <motion.div
          style={{
            opacity: billsOpacity,
            background: 'linear-gradient(145deg, #181c19 0%, #101411 100%)',
            border: '1px solid rgba(248, 113, 113, 0.25)',
            borderRadius: '20px',
            padding: '1.5rem',
            boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.6)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(248, 113, 113, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f87171',
              }}
            >
              <Lock size={16} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f87171', textTransform: 'uppercase' }}>
                Quarantined Instantly
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                Fixed Rent & Bills
              </div>
            </div>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.5rem',
              fontWeight: 800,
              color: '#fca5a5',
              marginBottom: '0.4rem',
            }}
          >
            -₹38,000
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Locked away on Day 1. You cannot accidentally spend electricity or rent money.
          </p>
        </motion.div>

        {/* Divergence Card B: Autonomous Savings Target */}
        <motion.div
          style={{
            opacity: savingsOpacity,
            background: 'linear-gradient(145deg, #132219 0%, #0d1711 100%)',
            border: '1px solid rgba(52, 211, 153, 0.25)',
            borderRadius: '20px',
            padding: '1.5rem',
            boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.6)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--mint)',
              }}
            >
              <Target size={16} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--mint)', textTransform: 'uppercase' }}>
                Automated Allocation
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>
                Savings Goals
              </div>
            </div>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.5rem',
              fontWeight: 800,
              color: 'var(--mint)',
              marginBottom: '0.4rem',
            }}
          >
            -₹22,000
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Routed to your Goa trip & emergency buffer automatically before you see it.
          </p>
        </motion.div>
      </div>

      {/* ── STAGE 3: CRYSTALLIZATION INTO DAILY ALLOWANCE ────────────── */}
      <motion.div
        style={{
          scale: dailyScale,
          boxShadow: dailyGlow,
          background: 'linear-gradient(160deg, #132219 0%, #0c1611 60%, #080d0a 100%)',
          border: '1px solid rgba(52, 211, 153, 0.4)',
          borderRadius: '28px',
          padding: '2.25rem',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.3rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            background: 'var(--mint-subtle)',
            border: '1px solid var(--border-accent)',
            color: 'var(--mint)',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '1rem',
          }}
        >
          <Sparkles size={14} />
          The Final Crystallization
        </div>

        <h3
          style={{
            fontSize: '1.35rem',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '0.5rem',
          }}
        >
          Remaining ₹35,000 ÷ 31 Days =
        </h3>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(2.8rem, 6vw, 4.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'var(--mint)',
            lineHeight: 1,
            margin: '0.5rem 0 1rem 0',
            textShadow: '0 0 40px rgba(52, 211, 153, 0.4)',
          }}
        >
          ₹3,333 <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>/ day</span>
        </div>

        <p
          style={{
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          You don't need to juggle 50 spreadsheet columns. Spend under ₹3,333 today and
          your rent is paid, your Goa trip is funded, and your life is in order.
        </p>
      </motion.div>
    </div>
  );
}
