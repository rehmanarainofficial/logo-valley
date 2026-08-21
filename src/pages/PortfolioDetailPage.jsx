import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolioData';
import Navbar from '../components/Navbar';
import MultiStepForm from '../components/MultiStepForm';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { ArrowLeft, CheckCircle, Calendar, User, Tag, ArrowRight, ShieldCheck } from 'lucide-react';

const PortfolioDetailPage = () => {
  const { id } = useParams();

  const item = portfolioItems.find((p) => p.id === id) || portfolioItems[0];
  const [activeImage, setActiveImage] = useState(item.coverImage);

  useEffect(() => {
    if (item) {
      setActiveImage(item.coverImage);
      window.scrollTo(0, 0);
    }
  }, [id, item]);

  if (!item) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-white mb-4 font-serif-heading">Case Study Not Found</h2>
        <Link to="/portfolios" className="px-6 py-3 gold-gradient-bg text-black font-bold rounded-full text-sm">
          Return to Portfolio Gallery
        </Link>
      </div>
    );
  }

  const handleOpenForm = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <SEO 
        title={`${item.title} Case Study`}
        description={`Explore deliverables, brand strategy, and vector assets for ${item.title} designed by Logo Valley Studio.`}
      />
      <Navbar onOpenQuoteModal={handleOpenForm} />

      {/* Case Study Header Banner */}
      <div className="py-12 bg-[#141414] border-b border-[#C8A96E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link
            to="/portfolios"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#C8A96E] hover:underline tracking-wide mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio Library
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C8A96E]/10 text-[#C8A96E] text-xs font-semibold tracking-wide mb-3">
                <Tag className="w-3.5 h-3.5" /> {item.category} Case Study
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading">
                {item.title}
              </h1>
            </div>

            <button
              onClick={handleOpenForm}
              className="px-6 py-3 rounded-full gold-gradient-bg text-black font-bold text-xs sm:text-sm tracking-wide hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Get Similar Brand Design</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Main Content & Gallery */}
      <main className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Display Image */}
        <div className="rounded-2xl border border-[#C8A96E]/20 bg-[#141414] p-4 shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
          <img
            src={activeImage}
            alt={item.title}
            className="max-h-[600px] w-auto object-contain rounded-xl shadow-lg transition-all duration-300"
          />
        </div>

        {/* Thumbnail Selector Grid */}
        {item.images && item.images.length > 1 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wide mb-4">
              Project Asset Gallery ({item.images.length} High-Res Views)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
              {item.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all p-1.5 bg-[#141414] h-24 flex items-center justify-center cursor-pointer ${
                    activeImage === img ? 'border-[#C8A96E] scale-105 shadow-lg shadow-[#C8A96E]/20' : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover rounded-lg" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Meta Info & Overview Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8 border-t border-white/10">
          
          {/* Left Metadata Column */}
          <div className="space-y-6 bg-[#141414] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-white font-serif-heading border-b border-white/10 pb-3">
              Project Specification
            </h3>

            <div>
              <span className="text-xs text-gray-400 tracking-wide block">Client Organization</span>
              <span className="text-base font-semibold text-white flex items-center gap-2 mt-1">
                <User className="w-4 h-4 text-[#C8A96E]" /> {item.client}
              </span>
            </div>

            <div>
              <span className="text-xs text-gray-400 tracking-wide block">Year Delivered</span>
              <span className="text-base font-semibold text-white flex items-center gap-2 mt-1">
                <Calendar className="w-4 h-4 text-[#C8A96E]" /> {item.year}
              </span>
            </div>

            <div>
              <span className="text-xs text-gray-400 tracking-wide block">Scope Tag</span>
              <span className="inline-block px-3 py-1 rounded-md bg-[#C8A96E]/10 text-[#C8A96E] text-xs font-semibold mt-1">
                {item.tag}
              </span>
            </div>

            {/* Brand Color Swatches */}
            {item.colorPalette && (
              <div>
                <span className="text-xs text-gray-400 tracking-wide block mb-2">Brand Palette Tokens</span>
                <div className="flex items-center gap-2">
                  {item.colorPalette.map((color, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div 
                        className="w-8 h-8 rounded-full border border-white/20 shadow-md"
                        style={{ backgroundColor: color }}
                      ></div>
                      <span className="text-[10px] text-gray-400 font-mono">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Case Study Overview */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white font-serif-heading mb-4">
                Brand Strategy & Execution Overview
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Deliverables Grid */}
            <div className="bg-[#141414] p-8 rounded-2xl border border-white/5 space-y-4">
              <h4 className="text-xl font-bold text-white font-serif-heading">
                Included Deliverables & Master Files
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {item.deliverables?.map((deliv, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-200">
                    <CheckCircle className="w-5 h-5 text-[#C8A96E] flex-shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Guarantee Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141414] via-[#1E1E1E] to-[#141414] border border-[#C8A96E]/30 flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-[#C8A96E] flex-shrink-0" />
              <div>
                <h5 className="font-bold text-white text-base">100% Vector Quality & Legal Rights</h5>
                <p className="text-xs text-gray-300 mt-0.5">
                  All logo marks delivered in full master vector formats (AI, EPS, SVG, PDF) with complete trademark copyright transfer.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Navigation */}
        <div className="pt-12 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
          <Link
            to="/portfolios"
            className="px-6 py-3 rounded-full bg-[#141414] text-white border border-white/10 hover:border-[#C8A96E] font-semibold text-xs tracking-wide transition-all"
          >
            ← View All Case Studies
          </Link>
          <button
            onClick={handleOpenForm}
            className="px-8 py-3.5 rounded-full gold-gradient-bg text-black font-bold text-xs tracking-wide hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Start Your Rebrand</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <MultiStepForm />
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioDetailPage;
