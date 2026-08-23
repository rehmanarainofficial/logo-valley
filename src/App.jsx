import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';

// Code Splitting for Sub-Pages
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const PackagesPage = lazy(() => import('./pages/PackagesPage'));
const PortfolioDetailPage = lazy(() => import('./pages/PortfolioDetailPage'));

// Lightweight Loading Indicator Fallback
const PageFallback = () => (
  <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center p-4">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-2 border-[#C8A96E] border-t-transparent rounded-full animate-spin"></div>
      <span className="text-[#C8A96E] text-xs font-semibold tracking-wider font-mono">LOADING STUDIO...</span>
    </div>
  </div>
);

// Scroll helper to handle hash navigation or top scrolling
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolios" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;