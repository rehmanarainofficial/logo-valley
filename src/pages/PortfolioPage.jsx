import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import MultiStepForm from '../components/MultiStepForm';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const PortfolioPage = () => {
  const [selectedPkg, setSelectedPkg] = useState(null);

  const handleOpenForm = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <SEO 
        title="Portfolio Showcase"
        description="Explore the complete logo design and brand identity portfolio of Logo Valley Studio featuring Teerag, 104 Digital, and Boostix Media."
      />
      <Navbar onOpenQuoteModal={handleOpenForm} />

      <main>
        <h1 className="sr-only">Logo Design & Brand Identity Showcase Portfolio - Logo Valley Studio</h1>
        <Portfolio onOpenForm={handleOpenForm} isStandalonePage={true} />
        <MultiStepForm selectedPackage={selectedPkg} />
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
