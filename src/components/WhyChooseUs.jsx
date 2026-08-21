import React from 'react';
import { ShieldCheck, RefreshCw, FileCode, Clock, UserCheck, Award, Check } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: "100% Unique Custom Concepts",
    description: "Every logo mark is designed from scratch by senior illustrators. Zero stock clipart or AI templates."
  },
  {
    icon: RefreshCw,
    title: "Unlimited Design Revisions",
    description: "We refine colors, typography, weights, and alignment until you are 100% in love with your final logo."
  },
  {
    icon: FileCode,
    title: "Full Master Vector Files",
    description: "Receive AI, EPS, SVG, PDF, and high-resolution PNG/JPG files ready for print, web, and billboards."
  },
  {
    icon: Clock,
    title: "24-48 Hours Express Delivery",
    description: "Get your initial logo concept draft delivered in as fast as 24 to 48 business hours."
  },
  {
    icon: Award,
    title: "100% Copyright Ownership",
    description: "Complete legal transfer of all trademark rights and intellectual property ownership to your brand."
  },
  {
    icon: UserCheck,
    title: "Dedicated Art Director",
    description: "A single point of contact senior manager coordinating your design revisions and questions."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-semibold uppercase tracking-wider mb-4">
            Why Logo Valley
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading">
            The Premier Choice for <span className="gold-gradient-text">Serious Businesses</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            We eliminate design uncertainty with transparent pricing, iron-clad guarantees, and agency-grade execution.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#C8A96E]/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C8A96E]/5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5C383] to-[#A68547] p-[1px] mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-[#0D0D0D] rounded-[11px] flex items-center justify-center text-[#C8A96E]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#C8A96E] transition-colors font-serif-heading">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
