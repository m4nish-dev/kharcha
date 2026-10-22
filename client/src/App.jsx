import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Public Landing Page
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';

// Finance Application Layout & Routes
import AppLayout from './components/layout/AppLayout.jsx';
import DashboardPage from './pages/app/DashboardPage.jsx';
import TransactionsPage from './pages/app/TransactionsPage.jsx';
import InsightsPage from './pages/app/InsightsPage.jsx';
import SavingsPage from './pages/app/SavingsPage.jsx';
import BillsPage from './pages/app/BillsPage.jsx';
import AICoachPage from './pages/app/AICoachPage.jsx';
import SettingsPage from './pages/app/SettingsPage.jsx';

export default function App() {
  return (
    <Routes>
      {/* 1. Public Visitor-Facing Landing Page */}
      <Route path="/" element={<Home />} />

      {/* 2. Finance Application Shell & Routes */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/savings" element={<SavingsPage />} />
        <Route path="/bills" element={<BillsPage />} />
        <Route path="/ai-coach" element={<AICoachPage />} />
        <Route path="/settings" element={<SettingsPage />} />

        {/* Backward-compatible redirects for legacy paths if any */}
        <Route path="/budget" element={<Navigate to="/dashboard" replace />} />
        <Route path="/analytics" element={<Navigate to="/insights" replace />} />
        <Route path="/goals" element={<Navigate to="/savings" replace />} />
        <Route path="/assistant" element={<Navigate to="/ai-coach" replace />} />
      </Route>

      {/* 3. Catch-all Not Found Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
