import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, TrendingUp, Lock } from 'lucide-react';
import { formatCurrency } from '../../constants/index.js';

export default function DimensionalVaultCard({
  title = 'Autonomous Capital Vault',
  totalSaved = 270000,
  totalTarget = 320000,
  growthRate = '+₹22,000 this month',
}) {
  const percentage = Math.min(100, Math.round((totalSaved / totalTarget) * 100));
  const numCoins = Math.min(8, Math.max(3, Math.round(percentage / 12)));

  return (
    <div
      style={{
        position: 'relative',
        background:
          'linear-gradient(145deg, #121f17 0%, #0d1711 50%, #080e0a 100%)',
        border: '1px solid rgba(52, 211, 153, 0.35)',
        borderRadius: '24px',
        padding: '2rem',
        boxShadow:
          '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px -10px rgba(16, 185, 129, 0.2)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        {/* Left: Financial Metrics */}
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--mint)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.75rem',
            }}
          >
            <ShieldCheck size={16} />
            <span>{title}</span>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '0.35rem',
            }}
          >
            {formatCurrency(totalSaved)}
          </div>

          <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Target: <strong>{formatCurrency(totalTarget)}</strong> ({percentage}% funded)
          </div>

          {/* Progress Bar */}
          <div
            style={{
              height: '8px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.08)',
              overflow: 'hidden',
              marginBottom: '1rem',
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
                borderRadius: '999px',
                boxShadow: '0 0 12px rgba(52, 211, 153, 0.5)',
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--mint)' }}>
            <TrendingUp size={15} />
            <span>{growthRate} • ₹630/day allocated automatically</span>
          </div>
        </div>

        {/* Right: Tactile 3D Physical Coin Stack Graphic */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '160px',
            position: 'relative',
            perspective: '800px',
          }}
        >
          {/* Subtle Ambient Radial Lighting */}
          <div
            style={{
              position: 'absolute',
              width: '180px',
              height: '180px',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              width: '120px',
              height: '130px',
              transform: 'rotateX(55deg) rotateZ(-25deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {Array.from({ length: numCoins }).map((_, index) => {
              const zOffset = index * 12;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    background:
                      'radial-gradient(circle at 35% 35%, #34d399 0%, #059669 50%, #064e3b 100%)',
                    border: '3px solid #6ee7b7',
                    boxShadow:
                      '0 10px 25px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.6)',
                    transform: `translateZ(${zOffset}px)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    fontSize: '2.5rem',
                    color: '#ffffff',
                    textShadow: '0 2px 5px rgba(0,0,0,0.4)',
                  }}
                >
                  ₹
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
