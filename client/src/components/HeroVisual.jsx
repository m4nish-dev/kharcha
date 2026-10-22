import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  Coffee,
  ShoppingCart,
  UtensilsCrossed,
  TrendingDown,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

export default function HeroVisual() {
  const containerRef = useRef(null);

  // Mouse tracking tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Restrained physical rotation angles
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-9, 9]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-stage"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '2.5rem 1rem',
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          position: 'relative',
          transition: 'transform 100ms ease-out',
        }}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Soft Ambient Directional Lighting Glow */}
        <div
          style={{
            position: 'absolute',
            inset: '-10%',
            background:
              'radial-gradient(circle at 50% 40%, rgba(16, 185, 129, 0.22) 0%, rgba(6, 78, 59, 0.08) 50%, transparent 70%)',
            filter: 'blur(40px)',
            transform: 'translateZ(-40px)',
            pointerEvents: 'none',
          }}
        />

        {/* ── CENTRAL PHYSICAL DAILY BUDGET CARD ──────────────────────── */}
        <div
          style={{
            position: 'relative',
            background:
              'linear-gradient(160deg, #131f17 0%, #0d1711 60%, #080d0a 100%)',
            border: '1px solid rgba(52, 211, 153, 0.28)',
            borderRadius: '28px',
            padding: '2.25rem 2rem',
            boxShadow:
              '0 30px 70px -15px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(0px)',
          }}
        >
          {/* Card Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--mint)',
                  boxShadow: '0 0 10px var(--mint)',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--mint)',
                }}
              >
                Today’s Safe Allowance
              </span>
            </div>

            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)',
              }}
            >
              Demo Data
            </div>
          </div>

          {/* Primary Budget Number */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.4rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: '#ffffff',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                }}
              >
                ₹3,333
              </span>
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                }}
              >
                / day
              </span>
            </div>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                marginTop: '0.35rem',
              }}
            >
              Calculated automatically from your monthly cashflow & savings targets
            </p>
          </div>

          {/* Progress Gauge Bar */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.45)',
              borderRadius: '16px',
              padding: '1.15rem 1.25rem',
              border: '1px solid var(--border-subtle)',
              marginBottom: '1.5rem',
            }}
          >
            {/* Split Metrics */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.85rem',
                marginBottom: '0.75rem',
              }}
            >
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  Spent Today
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    color: '#f87171',
                  }}
                >
                  ₹2,150
                </span>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  Remaining
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    color: 'var(--mint)',
                  }}
                >
                  ₹1,183
                </span>
              </div>
            </div>

            {/* Segmented Dual Bar */}
            <div
              style={{
                height: '10px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
              }}
            >
              {/* Spent portion (64.5%) */}
              <div
                style={{
                  width: '64.5%',
                  background:
                    'linear-gradient(90deg, #f87171 0%, #fb923c 100%)',
                  borderRadius: '9999px 0 0 9999px',
                }}
              />
              {/* Remaining portion (35.5%) */}
              <div
                style={{
                  width: '35.5%',
                  background:
                    'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
                  boxShadow: '0 0 12px rgba(52, 211, 153, 0.6)',
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '0.65rem',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              <span>64.5% of daily pace used</span>
              <span style={{ color: 'var(--mint)', fontWeight: 600 }}>Safe to spend tonight</span>
            </div>
          </div>

          {/* Micro Velocity Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '0.85rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={14} color="var(--mint)" />
              <span>Next reset in 3h 15m</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--mint)', fontWeight: 600 }}>
              <CheckCircle2 size={14} />
              <span>₹394 / hour allowance</span>
            </div>
          </div>
        </div>

        {/* ── FLOATING TRANSACTION 1: COFFEE (Top Left) ──────────────── */}
        <motion.div
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '-24px',
            left: '-28px',
            transform: 'translateZ(42px)',
            background: 'rgba(19, 29, 23, 0.94)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(52, 211, 153, 0.3)',
            borderRadius: '16px',
            padding: '0.85rem 1.15rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            boxShadow:
              '0 20px 40px -8px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.05)',
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'rgba(245, 158, 11, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fbbf24',
            }}
          >
            <Coffee size={18} />
          </div>
          <div>
            <div
              style={{
                fontSize: '0.88rem',
                fontWeight: 700,
                color: 'var(--text-white)',
                lineHeight: 1.2,
              }}
            >
              Blue Tokai Cafe
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              10:15 AM • Coffee
            </div>
          </div>
          <div
            style={{
              marginLeft: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.95rem',
              color: '#ffffff',
            }}
          >
            ₹250
          </div>
        </motion.div>

        {/* ── FLOATING TRANSACTION 2: GROCERIES (Bottom Right) ────────── */}
        <motion.div
          animate={{
            y: [3, -3, 3],
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.8,
          }}
          style={{
            position: 'absolute',
            bottom: '-28px',
            right: '-24px',
            transform: 'translateZ(50px)',
            background: 'rgba(19, 29, 23, 0.94)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(52, 211, 153, 0.3)',
            borderRadius: '16px',
            padding: '0.85rem 1.15rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            boxShadow:
              '0 25px 45px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
            zIndex: 12,
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--mint)',
            }}
          >
            <ShoppingCart size={18} />
          </div>
          <div>
            <div
              style={{
                fontSize: '0.88rem',
                fontWeight: 700,
                color: 'var(--text-white)',
                lineHeight: 1.2,
              }}
            >
              Nature’s Basket
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              4:20 PM • Groceries
            </div>
          </div>
          <div
            style={{
              marginLeft: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.95rem',
              color: '#ffffff',
            }}
          >
            ₹600
          </div>
        </motion.div>

        {/* ── FLOATING TRANSACTION 3: FOOD DELIVERY (Bottom Left) ─────── */}
        <motion.div
          animate={{
            y: [-2, 4, -2],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.4,
          }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '-36px',
            transform: 'translateZ(34px)',
            background: 'rgba(19, 29, 23, 0.94)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '14px',
            padding: '0.7rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 18px 35px -8px rgba(0, 0, 0, 0.7)',
            zIndex: 9,
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              background: 'rgba(239, 68, 68, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f87171',
            }}
          >
            <UtensilsCrossed size={16} />
          </div>
          <div>
            <div
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: 'var(--text-white)',
                lineHeight: 1.1,
              }}
            >
              Swiggy Gourmet
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              8:45 PM • Dinner
            </div>
          </div>
          <div
            style={{
              marginLeft: '0.6rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: '#ffffff',
            }}
          >
            ₹500
          </div>
        </motion.div>

        {/* ── TOP RIGHT: LAYERED SAVINGS INSIGHT CHIP ─────────────────── */}
        <motion.div
          animate={{
            y: [2, -2, 2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.4,
          }}
          style={{
            position: 'absolute',
            top: '40px',
            right: '-32px',
            transform: 'translateZ(38px)',
            background: 'rgba(15, 23, 18, 0.94)',
            border: '1px solid rgba(163, 230, 53, 0.3)',
            borderRadius: '14px',
            padding: '0.7rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            boxShadow: '0 18px 35px -8px rgba(0, 0, 0, 0.7)',
            zIndex: 11,
          }}
        >
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: 'rgba(163, 230, 53, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--lime)',
            }}
          >
            <Sparkles size={14} />
          </div>
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--lime)',
                display: 'block',
                lineHeight: 1.1,
              }}
            >
              Goa Trip Target
            </span>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
              84% saved • ₹8k remaining
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
