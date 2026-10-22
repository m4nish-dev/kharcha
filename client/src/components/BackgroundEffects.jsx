import React from 'react';

/**
 * Haikei-inspired organic SVG backgrounds and radiant atmospheric lighting.
 * Rendered behind content with pointer-events-none to ensure full accessibility.
 */
export default function BackgroundEffects() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {/* Radiant Top Glow (Forest Green & Mint) */}
      <div
        style={{
          position: 'absolute',
          top: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1000px',
          height: '650px',
          background:
            'radial-gradient(circle at 50% 30%, rgba(16, 185, 129, 0.16) 0%, rgba(6, 78, 59, 0.08) 45%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Atmospheric Lime Accent Orb */}
      <div
        style={{
          position: 'absolute',
          top: '400px',
          right: '-150px',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(163, 230, 53, 0.07) 0%, rgba(16, 185, 129, 0.04) 50%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Deep Teal Accent Orb (Left) */}
      <div
        style={{
          position: 'absolute',
          top: '900px',
          left: '-200px',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(13, 148, 136, 0.08) 0%, transparent 65%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Haikei Organic Top Waves (SVG Mesh) */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '800px',
          opacity: 0.25,
        }}
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H1440V460C1280 430 1150 510 980 490C800 470 710 390 520 420C340 450 200 560 0 520V0Z"
          fill="url(#haikei-grad-top)"
        />
        <defs>
          <linearGradient
            id="haikei-grad-top"
            x1="720"
            y1="0"
            x2="720"
            y2="600"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#10b981" stopOpacity="0.2" />
            <stop offset="0.6" stopColor="#064e3b" stopOpacity="0.08" />
            <stop offset="1" stopColor="#060907" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle Geometric Dot Grid Texture */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1400px',
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage:
            'radial-gradient(ellipse 60% 50% at 50% 20%, #000 60%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 60% 50% at 50% 20%, #000 60%, transparent 100%)',
        }}
      />
    </div>
  );
}
