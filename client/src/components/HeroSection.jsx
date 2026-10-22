import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Compass, ShieldCheck, Sparkles, Check } from 'lucide-react';
import HeroVisual from './HeroVisual.jsx';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 4.75rem)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '2.5rem',
        paddingBottom: '4.5rem',
        overflow: 'hidden',
      }}
    >
      <div className="landing-container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '3.5rem',
          }}
        >
          {/* Left Column: Editorial Brand & Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div
              className="section-tag"
              style={{
                marginBottom: '1.5rem',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--mint)',
                  boxShadow: '0 0 8px var(--mint)',
                }}
              />
              YOUR MONEY, FINALLY MAKING SENSE
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2.4rem, 5vw, 4.25rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.08,
                color: '#ffffff',
                marginBottom: '1.5rem',
              }}
            >
              Know where your money goes.{' '}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #34d399 0%, #10b981 50%, #a3e635 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline',
                }}
              >
                Take control of where it takes you.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.28rem)',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                marginBottom: '2.25rem',
                maxWidth: '540px',
              }}
            >
              Your daily spending, smarter insights and better money decisions —
              all in one personal money companion crafted especially for everyday people.
            </p>

            {/* Primary & Secondary Actions */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              <Link to="/dashboard" className="btn-primary" style={{ fontSize: '1rem', padding: '0.95rem 2rem' }}>
                <span>Get Started</span>
                <ArrowRight size={18} />
              </Link>

              <a
                href="#storytelling"
                className="btn-secondary"
                style={{ fontSize: '1rem', padding: '0.95rem 1.85rem' }}
              >
                <Compass size={18} />
                <span>Explore Kharcha</span>
              </a>
            </div>

            {/* Privacy Reassurance Line */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'rgba(52, 211, 153, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--mint)',
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={14} />
              </div>
              <span>
                Your data stays strictly yours. Zero data selling to loan brokers or credit card advertisers.
              </span>
            </div>
          </motion.div>

          {/* Right Column: Physical 3D Object Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
