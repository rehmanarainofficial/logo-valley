import React from 'react';
import { packagesData } from '../data/packagesData';
import { Check, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Packages = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-24 bg-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-semibold tracking-wide mb-4">
              Transparent Pricing
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading">
              Choose Your <span className="gold-gradient-text">Design Package</span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              Everything you need to elevate your business identity, from quick logo concepts to complete brand systems.
            </p>
          </div>
        </ScrollReveal>

        {/* Package Grid - Matching User Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {packagesData.map((pkg, idx) => (
            <ScrollReveal key={pkg.id} animation="fade-up" delay={idx * 200}>
              <div
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 h-full ${
                  pkg.theme === 'dark'
                    ? 'bg-[#141414] border-2 border-[#C8A96E] shadow-2xl shadow-[#C8A96E]/10 text-white'
                    : 'bg-[#F9F7F3] text-gray-900 border border-gray-200 shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 right-8">
                    <span className="px-4 py-1 rounded-full text-xs font-bold bg-[#C8A96E] text-black shadow-md">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Header */}
                  <h3 className={`text-2xl sm:text-3xl font-bold font-serif-heading ${
                    pkg.theme === 'dark' ? 'text-[#C8A96E]' : 'text-[#C8A96E]'
                  }`}>
                    {pkg.name}
                  </h3>
                  
                  <p className={`text-sm mt-2 leading-relaxed ${
                    pkg.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {pkg.subtitle}
                  </p>

                  <div className={`my-6 border-b ${
                    pkg.theme === 'dark' ? 'border-white/10' : 'border-gray-300'
                  }`}></div>

                  {/* Left Card Features (Starter) */}
                  {pkg.features && (
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-[#C8A96E] mt-0.5 flex-shrink-0" />
                          <span className={pkg.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Right Card Categorized Sections (Complete Brand Identity) */}
                  {pkg.categories && (
                    <div className="space-y-6 mb-8">
                      {pkg.note && (
                        <p className="text-xs italic text-[#C8A96E] font-medium">
                          {pkg.note}
                        </p>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {pkg.categories.map((cat, catIdx) => (
                          <div key={catIdx} className="space-y-2">
                            <h4 className="text-xs font-bold text-[#C8A96E] uppercase tracking-wider">
                              {cat.title}
                            </h4>
                            <ul className="space-y-2">
                              {cat.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-center gap-2 text-xs text-gray-300">
                                  <Check className="w-3.5 h-3.5 text-[#C8A96E] flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Package Footer */}
                <div className={`pt-6 border-t ${
                  pkg.theme === 'dark' ? 'border-white/10' : 'border-gray-300'
                }`}>
                  <div className="text-xs font-medium mb-4 flex items-center justify-between">
                    <span className={pkg.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Delivery Time:</span>
                    <span className="font-bold text-[#C8A96E]">{pkg.delivery}</span>
                  </div>

                  <button
                    onClick={() => onSelectPackage && onSelectPackage(pkg)}
                    className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      pkg.theme === 'dark'
                        ? 'gold-gradient-bg text-black hover:shadow-xl hover:shadow-[#C8A96E]/20 hover:scale-[1.02]'
                        : 'bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white'
                    }`}
                  >
                    <span>{pkg.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Packages;
