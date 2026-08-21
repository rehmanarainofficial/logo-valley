import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import MultiStepForm from '../components/MultiStepForm';
import Footer from '../components/Footer';
import { Sparkles } from 'lucide-react';

const PortfolioPage = () => {
  const [selectedPkg, setSelectedPkg] = useState(null);

  const handleOpenForm = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar onOpenQuoteModal={handleOpenForm} />
      
      {/* Header Banner */}
      <div className="pt-16 pb-12 bg-[#141414] border-b border-[#C8A96E]/15 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Full Showcase Library
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white font-serif-heading">
            Logo Valley <span className="gold-gradient-text">Portfolio Showcase</span>
          </h1>
          <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Browse our complete collection of custom logos, brand identity manuals, and high-converting graphic solutions.
          </p>
        </div>
      </div>

      <main>
        <Portfolio onOpenForm={handleOpenForm} isStandalonePage={true} />
        <MultiStepForm selectedPackage={selectedPkg} />
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
