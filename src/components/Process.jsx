import React from 'react';
import { processSteps } from '../data/processData';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Process = () => {
  return (
    <section id="process" className="py-24 bg-[#141414] relative border-y border-[#C8A96E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Proven 4-Step Methodology
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading">
              How We Bring Your <span className="gold-gradient-text">Brand to Life</span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              Our streamlined design process ensures maximum creative precision, fast turnaround times, and total alignment with your business vision.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 150}>
              <div className="relative p-8 rounded-2xl bg-[#0D0D0D] border border-white/5 hover:border-[#C8A96E]/40 transition-all duration-300 group hover:-translate-y-1 h-full">
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-bold text-[#C8A96E] font-serif-heading opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    {item.step}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#C8A96E]/10 flex items-center justify-center text-[#C8A96E]">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#C8A96E] transition-colors font-serif-heading">
                  {item.title}
                </h3>
                <div className="text-xs font-medium text-[#C8A96E] mt-1 tracking-wide">
                  {item.subtitle}
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Connecting Accent Line */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#C8A96E]/30" />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
