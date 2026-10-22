import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="get-started" className="section-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Radiant Background Glow Behind CTA */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(6, 78, 59, 0.1) 45%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div className="landing-container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            background:
              'linear-gradient(145deg, #102117 0%, #09130d 50%, #060a08 100%)',
            border: '1px solid rgba(52, 211, 153, 0.35)',
            borderRadius: '36px',
            padding: ' clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)',
            textAlign: 'center',
            boxShadow:
              '0 35px 80px -20px rgba(0, 0, 0, 0.9), 0 0 60px -10px rgba(16, 185, 129, 0.2)',
            maxWidth: '960px',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Tag */}
          <div
            className="section-tag"
            style={{
              marginBottom: '1.75rem',
              display: 'inline-flex',
            }}
          >
            <Sparkles size={14} />
            Take Charge of Your Kharcha
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.2rem, 5vw, 3.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: '1.5rem',
            }}
          >
            Stop wondering where your money went.{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #34d399 0%, #a3e635 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Start deciding where it takes you.
            </span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              maxWidth: '620px',
              margin: '0 auto 2.5rem auto',
              lineHeight: 1.6,
            }}
          >
            Join everyday people across India who wake up each morning knowing
            their exact, stress-free daily spending limit.
          </p>

          {/* Interactive Email / Access Form */}
          <div style={{ maxWidth: '480px', margin: '0 auto 2.5rem auto' }}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-full)',
                      padding: '0.35rem 0.35rem 0.35rem 1.25rem',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        flex: '1 1 200px',
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        fontFamily: 'inherit',
                      }}
                    />
                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}
                    >
                      <span>Get Early Access</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid var(--mint)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.25rem 1.5rem',
                    color: 'var(--mint)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    fontSize: '1rem',
                    fontWeight: 700,
                  }}
                >
                  <CheckCircle2 size={20} />
                  <span>Welcome aboard! You're on the priority early access list.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div style={{ marginTop: '1.25rem' }}>
              <Link
                to="/dashboard"
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--mint)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  textDecoration: 'none',
                }}
              >
                <span>Or jump straight into the Demo App</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Trust Guarantees */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={16} color="var(--mint)" />
              <span>100% Client-First Privacy</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={16} color="var(--mint)" />
              <span>Free to explore demo</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Heart size={16} color="#fb7185" />
              <span>Crafted for Indian everyday living</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
