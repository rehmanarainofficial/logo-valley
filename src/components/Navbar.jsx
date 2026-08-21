import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#A68547] via-[#C8A96E] to-[#E5C383] text-black py-2 px-4 text-xs md:text-sm font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
          <Sparkles className="w-4 h-4 fill-black animate-pulse" />
          <span>Our clients average a <strong>3.2x increase</strong> in qualified leads within 15 days of rebranding with us.</span>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
            className="hidden sm:inline-flex items-center underline font-bold hover:text-white transition-colors ml-2"
          >
            Claim Your Discount <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#C8A96E]/20 py-3 shadow-2xl' 
            : 'bg-[#0D0D0D]/90 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo - CLEAN WITHOUT BORDER BOX */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo_valley_logo.png" 
              alt="Logo Valley Studio" 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white font-serif-heading">
                Logo <span className="text-[#C8A96E]">Valley</span>
              </span>
              <span className="text-[10px] tracking-widest text-gray-400 -mt-1 font-semibold">
                Brand Design Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (No uppercase) */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-[#C8A96E] transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/portfolios" 
              className="text-gray-300 hover:text-[#C8A96E] transition-colors"
            >
              Portfolio
            </Link>
            <button 
              onClick={() => scrollToSection('process')} 
              className="text-gray-300 hover:text-[#C8A96E] transition-colors cursor-pointer"
            >
              Our Process
            </button>
            <Link 
              to="/packages" 
              className="text-gray-300 hover:text-[#C8A96E] transition-colors"
            >
              Packages
            </Link>
            <button 
              onClick={() => scrollToSection('reviews')} 
              className="text-gray-300 hover:text-[#C8A96E] transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-300 hover:text-[#C8A96E] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Action CTA Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenQuoteModal || (() => scrollToSection('contact'))}
              className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs sm:text-sm tracking-wide cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#E5C383] via-[#C8A96E] to-[#A68547] transition-all duration-300 group-hover:opacity-90"></span>
              <span className="relative block px-5 sm:px-6 py-2 bg-[#0D0D0D] rounded-full text-[#C8A96E] group-hover:text-black group-hover:bg-[#C8A96E] transition-all duration-300">
                Get Started
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg bg-[#141414] border border-[#C8A96E]/20"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#141414] border-b border-[#C8A96E]/20 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-[#C8A96E]"
            >
              Home
            </Link>
            <Link
              to="/portfolios"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-[#C8A96E]"
            >
              Portfolio Gallery
            </Link>
            <button
              onClick={() => scrollToSection('process')}
              className="block w-full text-left text-base font-medium text-gray-200 hover:text-[#C8A96E]"
            >
              Our Process
            </button>
            <Link
              to="/packages"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-[#C8A96E]"
            >
              Pricing & Packages
            </Link>
            <button
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left text-base font-medium text-gray-200 hover:text-[#C8A96E]"
            >
              Client Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-base font-medium text-gray-200 hover:text-[#C8A96E]"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
