import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, LayoutDashboard } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'var(--bg-obsidian)',
        color: 'var(--text-primary)',
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '16px',
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--mint)',
          marginBottom: '1.5rem',
          fontFamily: 'var(--font-mono)',
          fontWeight: 800,
          fontSize: '1.5rem',
        }}
      >
        ₹
      </div>

      <h1
        style={{
          fontSize: 'clamp(3rem, 6vw, 4.5rem)',
          fontWeight: 800,
          color: '#ffffff',
          lineHeight: 1,
          marginBottom: '0.75rem',
          fontFamily: 'var(--font-mono)',
        }}
      >
        404
      </h1>

      <p
        style={{
          color: 'var(--text-secondary)',
          fontSize: '1.15rem',
          marginBottom: '0.5rem',
          fontWeight: 600,
        }}
      >
        Route Not Found
      </p>

      <p
        style={{
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          maxWidth: '420px',
          marginBottom: '2rem',
          lineHeight: 1.5,
        }}
      >
        The page you are looking for doesn't exist or has been relocated in the new multi-page structure.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        <Link
          to="/dashboard"
          className="btn-primary"
          style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
        >
          <LayoutDashboard size={16} />
          <span>Go to App Dashboard</span>
        </Link>

        <Link
          to="/"
          className="btn-secondary"
          style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
        >
          <Compass size={16} />
          <span>Public Website</span>
        </Link>
      </div>
    </div>
  );
}
