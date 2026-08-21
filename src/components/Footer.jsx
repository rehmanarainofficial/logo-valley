import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-gray-400 pt-16 pb-8 border-t border-[#C8A96E]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo_valley_logo.png" 
                alt="Logo Valley Studio" 
                className="h-10 w-auto object-contain" 
              />
              <span className="text-xl font-bold tracking-tight text-white font-serif-heading">
                Logo <span className="text-[#C8A96E]">Valley</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              Premier logo design and brand identity studio helping startups and enterprise brands build iconic visual authority and drive growth.
            </p>
            <div className="text-xs text-[#C8A96E] font-medium flex items-center gap-1.5 pt-2">
              <Sparkles className="w-4 h-4" /> 100% Vector Quality Guarantee
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-[#C8A96E] transition-colors">Home Landing</Link></li>
              <li><Link to="/portfolios" className="hover:text-[#C8A96E] transition-colors">Portfolio Gallery</Link></li>
              <li><a href="/#process" className="hover:text-[#C8A96E] transition-colors">Our Process</a></li>
              <li><Link to="/packages" className="hover:text-[#C8A96E] transition-colors">Design Packages</Link></li>
              <li><a href="/#reviews" className="hover:text-[#C8A96E] transition-colors">Client Reviews</a></li>
              <li><a href="/#contact" className="hover:text-[#C8A96E] transition-colors">Get Custom Quote</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><span className="hover:text-[#C8A96E]">Custom Logo Design</span></li>
              <li><span className="hover:text-[#C8A96E]">Full Brand Guidelines</span></li>
              <li><span className="hover:text-[#C8A96E]">Stationery & Print Design</span></li>
              <li><span className="hover:text-[#C8A96E]">Social Media Branding</span></li>
              <li><span className="hover:text-[#C8A96E]">Packaging & Label Design</span></li>
              <li><span className="hover:text-[#C8A96E]">Web Design & UI/UX</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Connect With Studio
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C8A96E] flex-shrink-0" />
                <span>support@logo-valley.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C8A96E] flex-shrink-0" />
                <span>+1 (800) 555-LOGO</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C8A96E] flex-shrink-0" />
                <span>Logo Valley Creative Headquarters</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Privacy & Terms Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Logo Valley Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#141414] border border-white/10 text-[#C8A96E] hover:bg-[#C8A96E] hover:text-black transition-all cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
