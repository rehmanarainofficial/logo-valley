import React, { useState } from 'react';
import { portfolioItems } from '../data/portfolioData';
import { Eye, Sparkles, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const categories = ["All", "Logo Design", "Branding", "Web Design"];

const Portfolio = ({ isStandalonePage = false }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleCardClick = (id) => {
    navigate(`/portfolio/${id}`);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Our Featured Case Studies
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading">
            Handcrafted <span className="gold-gradient-text">Brand Masterpieces</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            Explore our showcase of custom vector logos, complete brand guidelines, and high-converting identities crafted for industry leaders.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'gold-gradient-bg text-black shadow-lg shadow-[#C8A96E]/20 scale-105'
                  : 'bg-[#141414] text-gray-400 border border-white/10 hover:text-white hover:border-[#C8A96E]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="group relative rounded-2xl bg-[#141414] border border-white/5 hover:border-[#C8A96E]/50 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C8A96E]/10 flex flex-col justify-between"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#0D0D0D] p-4 flex items-center justify-center">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-5 py-2.5 rounded-full bg-[#C8A96E] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4" /> Open Full Case Study Page
                  </div>
                </div>

                {/* Tag Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-[#0D0D0D]/80 backdrop-blur-md border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-semibold">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                    <span>{item.client}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#C8A96E] transition-colors font-serif-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#C8A96E]">
                  <span>View Case Study & Deliverables</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All / CTA Link */}
        {!isStandalonePage && (
          <div className="mt-16 text-center">
            <Link
              to="/portfolios"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#141414] text-white font-semibold text-sm border border-[#C8A96E]/30 hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all"
            >
              <span>View Complete Portfolio Library</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;
