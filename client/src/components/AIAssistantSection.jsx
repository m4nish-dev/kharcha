import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Sparkles, MessageSquare, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

const promptPresets = [
  {
    id: 'where-money-went',
    question: 'Where did my money go this week?',
    shortLabel: 'Where did my money go?',
    summary: 'Spent ₹11,510 total across 16 transactions',
    response: `You spent ₹11,510 this week across 16 transactions. Here is the realistic breakdown:

• Dining & Swiggy: ₹4,850 (4 orders + 1 dinner at Smoke House)
• Groceries: ₹3,120 (Nature’s Basket organic run)
• Transport: ₹1,640 (Metro card recharge & 3 Uber rides)
• Miscellaneous: ₹1,900 (Pharmacy & stationery)

The good news: You are ₹1,823 under your weekly target, so your weekend daily allowance remains at ₹3,333.`,
    tags: ['Weekly Review', 'Safe Pacing', 'Food: 42%'],
  },
  {
    id: 'can-i-afford',
    question: 'Can I afford a ₹4,500 dinner tonight at that rooftop restaurant?',
    shortLabel: 'Can I afford this?',
    summary: 'Yes, with a minor 2-day daily pace adjustment',
    response: `Yes, you can afford it, but it requires a quick pace adjustment:

• Today’s remaining allowance is ₹1,183.
• Spending ₹4,500 means an overage of ₹3,317 today.
• If you smooth this over Friday and Saturday, your daily allowance shifts to ₹2,227/day instead of ₹3,333/day.

Verdict: Enjoy the dinner! Your Goa trip savings target (₹22,000) and rent reserve will not be touched.`,
    tags: ['Safe to Spend', 'Temporary Adjustment', 'Zero Guilt'],
  },
  {
    id: 'how-much-save',
    question: 'How much can I realistically save next month for my emergency fund?',
    shortLabel: 'How much can I save next month?',
    summary: 'Target ₹24,500 without feeling constrained',
    response: `Based on your fixed ₹38,000 bills and average ₹95,000 monthly inflow:

• Baseline recommended savings: ₹22,000 (23% savings rate).
• If you cap weekend dining out to ₹8,000 (currently ₹11,500), you unlock an extra ₹3,500.
• Realistic optimal target: ₹25,500.

This pace will complete your 3-month Emergency Buffer in just 5 months!`,
    tags: ['Goal Accelerate', 'Emergency Fund', '26% Target'],
  },
];

export default function AIAssistantSection() {
  const [selectedPrompt, setSelectedPrompt] = useState(promptPresets[0]);

  return (
    <section id="assistant" className="section-wrapper">
      <div className="landing-container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            Kharcha Intelligence
          </div>
          <h2 className="section-title">
            Ask questions in plain language.{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get answers with zero financial jargon.
            </span>
          </h2>
          <p className="section-desc">
            No banking dashboards full of confusing ratios. Your AI companion understands your real-life
            cashflow and tells you what decisions actually mean for your lifestyle.
          </p>
        </div>

        {/* Interactive Chat Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Preset Questions */}
          <div>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              Select a sample prompt:
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {promptPresets.map((preset) => {
                const isSelected = selectedPrompt.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => setSelectedPrompt(preset)}
                    style={{
                      textAlign: 'left',
                      padding: '1.25rem 1.5rem',
                      borderRadius: 'var(--radius-lg)',
                      background: isSelected
                        ? 'linear-gradient(145deg, #132219 0%, #0d1812 100%)'
                        : 'rgba(255, 255, 255, 0.03)',
                      border: isSelected
                        ? '1px solid var(--border-strong)'
                        : '1px solid var(--border-subtle)',
                      boxShadow: isSelected
                        ? '0 12px 30px -8px rgba(16, 185, 129, 0.3)'
                        : 'none',
                      transition: 'all var(--transition-smooth)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: isSelected ? 'var(--mint)' : '#ffffff',
                        }}
                      >
                        {preset.shortLabel}
                      </span>
                      <ArrowRight
                        size={16}
                        color={isSelected ? 'var(--mint)' : 'var(--text-muted)'}
                      />
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {preset.question}
                    </p>
                  </button>
                );
              })}
            </div>

            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(16, 185, 129, 0.06)',
                border: '1px solid var(--border-accent)',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
              }}
            >
              ⚡ Powered by server-side Groq Llama 3.3 70B. Your API credentials never touch the browser.
            </div>
          </div>

          {/* Right Column: AI Conversation Simulation Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.25rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Simulation Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background:
                      'linear-gradient(135deg, #10b981 0%, #064e3b 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                  <Bot size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                    Kharcha AI Companion
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--mint)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--mint)' }} />
                    Live simulation
                  </div>
                </div>
              </div>

              <span
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.2rem 0.55rem',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                Illustrative Data
              </span>
            </div>

            {/* User Prompt Message */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '1rem 1.25rem',
                marginBottom: '1.5rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              "{selectedPrompt.question}"
            </div>

            {/* AI Response Stream Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPrompt.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'rgba(0, 0, 0, 0.35)',
                  border: '1px solid rgba(52, 211, 153, 0.2)',
                  borderRadius: '18px',
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.65,
                    color: 'var(--text-primary)',
                    whiteSpace: 'pre-line',
                    marginBottom: '1.25rem',
                  }}
                >
                  {selectedPrompt.response}
                </div>

                {/* Insight Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedPrompt.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--mint)',
                        background: 'var(--mint-subtle)',
                        border: '1px solid var(--border-accent)',
                        padding: '0.2rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              Press any prompt on the left to observe how Kharcha reasons about cashflow.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
