import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ClientMarquee from '../components/ClientMarquee';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import Packages from '../components/Packages';
import Reviews from '../components/Reviews';
import MultiStepForm from '../components/MultiStepForm';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const HomePage = () => {
  const [selectedPkg, setSelectedPkg] = useState(null);

  const handleSelectPackage = (pkg) => {
    setSelectedPkg(pkg);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenForm = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <SEO 
        title="Logo Valley | Premium Logo Design & Brand Identity Studio"
        description="Logo Valley is a premier logo design and branding studio helping businesses build iconic visual identities and accelerate qualified leads by 3.2x."
      />
      <Navbar onOpenQuoteModal={handleOpenForm} />
      <main>
        <Hero onOpenForm={handleOpenForm} />
        <ClientMarquee />
        <About />
        <Portfolio onOpenForm={handleOpenForm} />
        <Process />
        <WhyChooseUs />
        <Packages onSelectPackage={handleSelectPackage} />
        <Reviews />
        <MultiStepForm selectedPackage={selectedPkg} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
