import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#C8A96E]/20 py-3 shadow-2xl"
            : "bg-[#0D0D0D]/90 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo_valley_logo.png"
              alt="Logo Valley Studio"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xl font-bold tracking-tight text-white font-serif-heading">
              Logo <span className="text-[#C8A96E]">Valley</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-semibold tracking-wide transition-colors ${
                location.pathname === "/"
                  ? "text-[#C8A96E]"
                  : "text-gray-300 hover:text-[#C8A96E]"
              }`}
            >
              Home
            </Link>

            <Link
              to="/portfolios"
              className={`text-sm font-semibold tracking-wide transition-colors ${
                location.pathname === "/portfolios"
                  ? "text-[#C8A96E]"
                  : "text-gray-300 hover:text-[#C8A96E]"
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/packages"
              className={`text-sm font-semibold tracking-wide transition-colors ${
                location.pathname === "/packages"
                  ? "text-[#C8A96E]"
                  : "text-gray-300 hover:text-[#C8A96E]"
              }`}
            >
              Packages
            </Link>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-sm font-semibold text-gray-300 hover:text-[#C8A96E] transition-colors cursor-pointer"
            >
              Reviews
            </button>
          </div>

          {/* Desktop Call to Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 rounded-full gold-gradient-bg text-black font-bold text-xs tracking-wide hover:shadow-lg hover:shadow-[#C8A96E]/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>Start your brand</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0D0D0D] border-b border-[#C8A96E]/20 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-white hover:text-[#C8A96E] py-2"
            >
              Home
            </Link>
            <Link
              to="/portfolios"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-gray-300 hover:text-[#C8A96E] py-2"
            >
              Portfolio
            </Link>
            <Link
              to="/packages"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-gray-300 hover:text-[#C8A96E] py-2"
            >
              Packages
            </Link>
            <button
              onClick={() => scrollToSection("reviews")}
              className="block w-full text-left text-base font-semibold text-gray-300 hover:text-[#C8A96E] py-2"
            >
              Reviews
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-3 rounded-full gold-gradient-bg text-black font-bold text-sm tracking-wide text-center cursor-pointer"
              >
                Start your brand
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
