import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Wallet,
  ShoppingBag,
  Gauge,
  Target,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

const Storytelling3DCanvas = React.lazy(() => import('./Storytelling3DCanvas.jsx'));

const STORY_SCENES = [
  {
    id: 'income',
    number: '01',
    badge: 'Stage 1 — Cash Inflow',
    title: 'Monthly Income Arrives',
    subtitle: 'Every rupee starts with purpose.',
    description:
      'A fresh salary or income credit enters your world. Instead of leaving it in one deceptive aggregate lump sum, Kharcha immediately maps its destination.',
    metricLabel: 'Monthly Inflow',
    metricValue: '₹1,00,000',
    metricSub: 'Fully accounted for on Day 1',
    icon: Wallet,
    color: '#34d399',
  },
  {
    id: 'spending',
    number: '02',
    badge: 'Stage 2 — Category Outflow',
    title: 'Spending Diverts into Clean Categories',
    subtitle: 'No surprises. No hidden leaks.',
    description:
      'Coins disperse towards essential living costs: groceries, utilities, food orders and shopping. You see the true breakdown before money disappears into the ether.',
    metricLabel: 'Core Living Costs',
    metricValue: '₹44,800',
    metricSub: 'Food, Groceries, Fixed Subscriptions',
    icon: ShoppingBag,
    color: '#38bdf8',
  },
  {
    id: 'understanding',
    number: '03',
    badge: 'Stage 3 — Daily Clarity',
    title: 'The Daily Spending Allowance',
    subtitle: 'One simple number. Zero math required.',
    description:
      'The core Kharcha engine reorganizes your flexible balance into a daily budget. If you stay under today’s allowance, your entire month is mathematically guaranteed to succeed.',
    metricLabel: 'Today’s Safe Burn Pace',
    metricValue: '₹3,333 / day',
    metricSub: '₹1,183 safe allowance remaining today',
    icon: Gauge,
    color: '#a3e635',
  },
  {
    id: 'savings',
    number: '04',
    badge: 'Stage 4 — Wealth Growth',
    title: 'Conscious Choices Build Savings',
    subtitle: 'Turn unspent daily allowance into real assets.',
    description:
      'Coins move automatically towards your savings goals and emergency reserves. What you save today compounds into freedom tomorrow.',
    metricLabel: 'Target Progress',
    metricValue: '₹1,50,000 Goal',
    metricSub: '64% funded • 3.2 months ahead of pace',
    icon: Target,
    color: '#f59e0b',
  },
];

/**
 * Lightweight CSS 3D fallback for non-WebGL devices or reduced motion.
 */
function StorytellingFallback({ currentScene }) {
  const active = STORY_SCENES[currentScene] || STORY_SCENES[0];
  const Icon = active.icon;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${active.color}33 0%, rgba(0,0,0,0.6) 80%)`,
          border: `2px solid ${active.color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 0 35px ${active.color}40`,
          marginBottom: '1.5rem',
        }}
      >
        <Icon size={46} color={active.color} />
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '1.8rem',
          fontWeight: 800,
          color: '#ffffff',
          marginBottom: '0.4rem',
        }}
      >
        {active.metricValue}
      </div>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        {active.metricSub}
      </div>
    </div>
  );
}

export default function Storytelling3DSection() {
  const [activeScene, setActiveScene] = useState(0);
  const [hasWebGL, setHasWebGL] = useState(true);
  const sectionRef = useRef(null);

  // Check WebGL support once on mount
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  const current = STORY_SCENES[activeScene];

  return (
    <section
      id="storytelling"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '5rem 0 6rem',
        backgroundColor: '#0a100d',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        overflow: 'hidden',
      }}
    >
      {/* Background radial atmosphere */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background:
            'radial-gradient(ellipse, rgba(16, 185, 129, 0.08) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      <div className="landing-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>
          <div
            className="section-tag"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
            }}
          >
            <Sparkles size={14} color="var(--mint)" />
            <span>HOW MONEY TRANSFORMS IN KHARCHA</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--text-white)',
              lineHeight: 1.15,
              marginBottom: '0.85rem',
            }}
          >
            Watch your cashflow find its natural rhythm.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Scroll or select a stage below to see how raw income dissolves into calm, controllable daily spending and predictable wealth.
          </p>
        </div>

        {/* Scene Navigation Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          {STORY_SCENES.map((scene, idx) => {
            const isActive = activeScene === idx;
            return (
              <button
                key={scene.id}
                onClick={() => setActiveScene(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.1rem',
                  borderRadius: '999px',
                  background: isActive
                    ? 'rgba(16, 185, 129, 0.18)'
                    : 'rgba(255, 255, 255, 0.04)',
                  border: isActive
                    ? '1px solid var(--mint)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 0 20px rgba(52, 211, 153, 0.25)' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: isActive ? 'var(--mint)' : 'var(--text-muted)',
                  }}
                >
                  {scene.number}
                </span>
                <span>{scene.title.split(' ')[0]} {scene.title.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Responsive Dimensional Stage */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            minHeight: '440px',
          }}
        >
          {/* Left: 3D Canvas Viewport */}
          <div
            style={{
              position: 'relative',
              height: '420px',
              borderRadius: '24px',
              background:
                'radial-gradient(circle at 50% 50%, rgba(19, 31, 23, 0.8) 0%, rgba(10, 16, 13, 0.95) 100%)',
              border: '1px solid rgba(52, 211, 153, 0.2)',
              boxShadow:
                '0 30px 60px -15px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {hasWebGL ? (
              <Suspense fallback={<StorytellingFallback currentScene={activeScene} />}>
                <Storytelling3DCanvas currentScene={activeScene} />
              </Suspense>
            ) : (
              <StorytellingFallback currentScene={activeScene} />
            )}

            {/* Live Interactive Scene Pill Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1.25rem',
                right: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.6rem 1rem',
                borderRadius: '12px',
                background: 'rgba(0, 0, 0, 0.55)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.78rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: current.color,
                    boxShadow: `0 0 8px ${current.color}`,
                  }}
                />
                <span style={{ color: '#ffffff', fontWeight: 600 }}>{current.badge}</span>
              </div>
              <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                3D Scene {activeScene + 1}/4
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative Card */}
          <div style={{ position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  padding: '2.5rem 2.25rem',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                }}
              >
                {/* Eyebrow */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: current.color,
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '0.85rem',
                  }}
                >
                  <current.icon size={16} />
                  <span>{current.badge}</span>
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 1.95rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    marginBottom: '0.5rem',
                  }}
                >
                  {current.title}
                </h3>

                <div
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--mint)',
                    fontWeight: 600,
                    marginBottom: '1.25rem',
                  }}
                >
                  {current.subtitle}
                </div>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '2rem',
                  }}
                >
                  {current.description}
                </p>

                {/* Metric Display Box */}
                <div
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '16px',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.75rem',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {current.metricLabel}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.65rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        marginTop: '0.2rem',
                      }}
                    >
                      {current.metricValue}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--mint)',
                      maxWidth: '160px',
                      textAlign: 'right',
                    }}
                  >
                    {current.metricSub}
                  </div>
                </div>

                {/* Navigation Next button */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <button
                    onClick={() => setActiveScene((prev) => (prev + 1) % STORY_SCENES.length)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'none',
                      border: 'none',
                      color: 'var(--mint)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <span>
                      {activeScene < 3 ? `Next: Stage ${activeScene + 2}` : 'Back to Stage 1'}
                    </span>
                    <ArrowRight size={16} />
                  </button>

                  <div style={{ display: 'flex', gap: '0.35rem' }}>
                    {STORY_SCENES.map((_, i) => (
                      <span
                        key={i}
                        onClick={() => setActiveScene(i)}
                        style={{
                          width: activeScene === i ? '20px' : '6px',
                          height: '6px',
                          borderRadius: '999px',
                          backgroundColor:
                            activeScene === i ? 'var(--mint)' : 'rgba(255, 255, 255, 0.2)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
