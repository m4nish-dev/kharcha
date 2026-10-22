import React from 'react';
import BackgroundEffects from '../components/BackgroundEffects.jsx';
import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import CashflowFlowScene from '../components/3d/CashflowFlowScene.jsx';
import DailyOverview from '../components/DailyOverview.jsx';
import SpendingInsights from '../components/SpendingInsights.jsx';
import AIAssistantSection from '../components/AIAssistantSection.jsx';
import SavingsGoals from '../components/SavingsGoals.jsx';
import BillsRadar from '../components/BillsRadar.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import PrivacyControl from '../components/PrivacyControl.jsx';
import FinalCTA from '../components/FinalCTA.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: 'var(--bg-obsidian)',
        color: 'var(--text-primary)',
        overflowX: 'hidden',
      }}
    >
      {/* Organic Background SVGs and Lighting */}
      <BackgroundEffects />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main style={{ position: 'relative', zIndex: 1, flex: 1 }}>
        {/* 1. Dimensional 3D Hero */}
        <HeroSection />

        {/* 1.5 Scroll-Driven Storytelling: From Income to Daily Allowance */}
        <section style={{ position: 'relative', zIndex: 1, paddingTop: '1rem' }}>
          <CashflowFlowScene />
        </section>

        {/* 2. Section A: The Daily Allowance Engine (Warm Ivory Contrast) */}
        <DailyOverview />

        {/* 3. Section B: Spending Insights & Visualizations (Recharts) */}
        <SpendingInsights />

        {/* 4. Section C: AI Money Companion (Interactive Groq simulation) */}
        <AIAssistantSection />

        {/* 5. Section D: Autonomous Savings Goals (Warm Ivory Contrast) */}
        <SavingsGoals />

        {/* 6. Section E: Subscription & Bill Shield Radar */}
        <BillsRadar />

        {/* 7. Section F: How Kharcha Works (3-step Walkthrough) */}
        <HowItWorks />

        {/* 8. Section G: Privacy & Control */}
        <PrivacyControl />

        {/* 9. Section H: Final Illuminated CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
