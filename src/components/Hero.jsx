import React from 'react';
import { ArrowRight, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({ onOpenForm }) => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-20 overflow-hidden bg-[#0D0D0D]">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#C8A96E]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-[#C8A96E]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -left-10 w-96 h-96 bg-[#E5C383]/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] border border-[#C8A96E]/30 text-[#C8A96E] text-xs sm:text-sm font-medium mb-8 shadow-lg shadow-[#C8A96E]/5 animate-pulse-glow">
          <Award className="w-4 h-4 text-[#C8A96E]" />
          <span>#1 Premier Logo & Brand Identity Studio</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]"></span>
          <span className="text-gray-300">100% Original Vector Guarantee</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-serif-heading max-w-5xl mx-auto leading-[1.15]">
          Transform Your Brand with <br className="hidden sm:inline" />
          <span className="gold-gradient-text">Iconic Custom Logo Design</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
          We craft distinctive, memorable logo marks and luxury brand identities that command attention, build consumer trust, and drive up to <span className="text-[#C8A96E] font-semibold">3.2x lead growth</span>.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onOpenForm || (() => scrollToSection('contact'))}
            className="w-full sm:w-auto px-8 py-4 rounded-full gold-gradient-bg text-black font-bold text-base tracking-wide hover:shadow-xl hover:shadow-[#C8A96E]/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Request Free Logo Concept</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <Link
            to="/portfolios"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#141414] text-white font-semibold text-base border border-[#C8A96E]/30 hover:border-[#C8A96E] hover:bg-[#1A1A1A] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Explore Portfolio Gallery</span>
          </Link>
        </div>

        {/* Features Checklist Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#C8A96E]" />
            <span>48-Hour Express Concepts</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#C8A96E]" />
            <span>Unlimited Revisions</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#C8A96E]" />
            <span>Full Master Vector Files</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#C8A96E]" />
            <span>100% Copyright Transfer</span>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-[#141414]/90 border border-white/5 hover:border-[#C8A96E]/30 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-[#C8A96E] font-serif-heading">500+</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Logos Designed</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#141414]/90 border border-white/5 hover:border-[#C8A96E]/30 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-[#C8A96E] font-serif-heading">98%</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Satisfaction Score</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#141414]/90 border border-white/5 hover:border-[#C8A96E]/30 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-[#C8A96E] font-serif-heading">15 Days</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Avg Lead Boost</div>
          </div>
          <div className="p-6 rounded-2xl bg-[#141414]/90 border border-white/5 hover:border-[#C8A96E]/30 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-[#C8A96E] font-serif-heading">24/7</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">VIP Studio Support</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
