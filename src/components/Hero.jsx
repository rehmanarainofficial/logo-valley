import React from 'react';
import { ArrowRight, Award, CheckCircle, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

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
        <ScrollReveal animation="fade-up" delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] border border-[#C8A96E]/30 text-[#C8A96E] text-xs sm:text-sm font-medium mb-8 shadow-lg shadow-[#C8A96E]/5">
            <Award className="w-4 h-4 text-[#C8A96E]" />
            <span>100+ Logos & Brand Identities Built</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E]"></span>
            <span className="text-gray-300">$70k+ Revenue Generated</span>
          </div>
        </ScrollReveal>

        {/* Main Heading requested by user */}
        <ScrollReveal animation="fade-up" delay={150}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-serif-heading max-w-5xl mx-auto leading-[1.15]">
            Attract More Clients And <span className="gold-gradient-text">Double Your Revenue</span> With a <span className="gold-gradient-text">Brand That Sells For You.</span>
          </h1>
        </ScrollReveal>

        {/* Sub Heading 1 & Sub Heading 2 */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="mt-6 space-y-3 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg font-semibold text-[#C8A96E]">
              Our clients average a 3.2× increase in qualified leads within 15 days of rebranding with us.
            </p>
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
              From logo to 360 branding presence. We build everything that makes clients trust you and choose you.
            </p>
          </div>
        </ScrollReveal>

        {/* Action Buttons requested by user */}
        <ScrollReveal animation="fade-up" delay={450}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/portfolios"
              className="w-full sm:w-auto px-8 py-4 rounded-full gold-gradient-bg text-black font-bold text-base tracking-wide hover:shadow-xl hover:shadow-[#C8A96E]/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/packages"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#141414] text-white font-semibold text-base border border-[#C8A96E]/30 hover:border-[#C8A96E] hover:bg-[#1A1A1A] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Package className="w-5 h-5 text-[#C8A96E]" />
              <span>View Packages</span>
            </Link>
          </div>
        </ScrollReveal>


      </div>
    </section>
  );
};

export default Hero;
