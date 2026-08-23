import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolioData';
import Navbar from '../components/Navbar';
import MultiStepForm from '../components/MultiStepForm';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { ArrowLeft, CheckCircle, Calendar, User, Tag, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioDetailPage = () => {
  const { id } = useParams();

  const item = portfolioItems.find((p) => p.id === id) || portfolioItems[0];
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (item) {
      setActiveImgIndex(0);
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

  const galleryImages = item.images && item.images.length > 0 ? item.images : [item.coverImage];
  const totalImages = galleryImages.length;

  const handleNextImage = () => {
    setActiveImgIndex((prev) => (prev + 1) % totalImages);
  };

  const handlePrevImage = () => {
    setActiveImgIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  // Mobile Touch Swipe Handlers for Image Slider
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      handleNextImage();
    } else if (distance < -40) {
      handlePrevImage();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

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

      {/* Main Content & Gallery */}
      <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Navigation & Title Bar */}
        <div>
          <Link
            to="/portfolios"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#C8A96E] hover:underline tracking-wide mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio Library
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C8A96E]/10 text-[#C8A96E] text-xs font-semibold tracking-wide mb-2">
                <Tag className="w-3.5 h-3.5" /> {item.category} Case Study
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading">
                {item.title}
              </h1>
              {item.slogan && (
                <p className="mt-2 text-sm sm:text-base text-[#C8A96E] font-medium">
                  {item.slogan}
                </p>
              )}
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

        {/* Main Display Image Slider with Next/Prev & Touch Swipe */}
        <div 
          className="relative rounded-2xl border border-[#C8A96E]/20 bg-[#141414] p-4 sm:p-6 shadow-2xl overflow-hidden min-h-[420px] flex items-center justify-center group touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Image */}
          <img
            src={galleryImages[activeImgIndex]}
            alt={`${item.title} View ${activeImgIndex + 1}`}
            className="max-h-[620px] w-auto object-contain rounded-xl shadow-lg transition-all duration-300"
          />

          {/* Floating Next / Prev Buttons */}
          {totalImages > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0D0D0D]/80 border border-white/20 text-[#C8A96E] hover:bg-[#C8A96E] hover:text-black transition-all cursor-pointer shadow-lg backdrop-blur-md"
                title="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0D0D0D]/80 border border-white/20 text-[#C8A96E] hover:bg-[#C8A96E] hover:text-black transition-all cursor-pointer shadow-lg backdrop-blur-md"
                title="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter Badge */}
              <div className="absolute bottom-6 right-6 px-3.5 py-1.5 rounded-full bg-[#0D0D0D]/90 border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-bold tracking-wider backdrop-blur-md">
                {activeImgIndex + 1} / {totalImages}
              </div>
            </>
          )}
        </div>

        {/* Thumbnail Selector Grid */}
        {totalImages > 1 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wide mb-4">
              Project Asset Gallery ({totalImages} High-Res Views)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all p-1.5 bg-[#141414] h-24 flex items-center justify-center cursor-pointer ${
                    activeImgIndex === idx ? 'border-[#C8A96E] scale-105 shadow-lg shadow-[#C8A96E]/20' : 'border-white/10 opacity-70 hover:opacity-100'
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
