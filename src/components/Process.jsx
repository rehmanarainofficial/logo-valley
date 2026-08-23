import React from 'react';
import { Hourglass } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const processSteps = [
  {
    step: "01",
    title: "Discovery & Brand Strategy",
    description: "We map your market position, target audience, and competitors before a single pixel is placed. Strategy drives every creative decision.",
    day: "DAY 1"
  },
  {
    step: "02",
    title: "Logo & Visual Identity Design",
    description: "Three distinct logo directions with full rationale — color palette, typography, and variations. All built to stand apart and scale across every touchpoint.",
    day: "DAY 2–3"
  },
  {
    step: "03",
    title: "Revisions & Refinement",
    description: "Unlimited rounds until every detail is perfect. We work with you, not just for you — your feedback shapes the final result.",
    day: "DAY 4–7"
  },
  {
    step: "04",
    title: "Full Brand System Delivery",
    description: "Brand guidelines PDF, every file format (AI, SVG, PNG, PDF), mockups, social templates, and everything else you need — handed over clean and organised.",
    day: "DAY 7–10"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-12 sm:py-24 bg-[#141414] relative border-y border-[#C8A96E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column (Main Copy from User Screenshot) */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="slide-left" delay={0}>
              <div>
                <span className="text-xs font-bold tracking-widest text-[#C8A96E] uppercase mb-3 block">
                  OUR PROCESS
                </span>
                
                <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading leading-tight">
                  How We Build <span className="gold-gradient-text">Brands That Win</span>
                </h2>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-[#C8A96E]">
                  From brief to brand in 7–10 days.
                </h3>

                <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                  No guesswork. No generic templates. Every logo and brand identity we build follows a proven process that's delivered results for 500+ companies — from bootstrapped startups to Series B funded teams.
                </p>

                {/* Average Client Result Callout Box */}
                <div className="mt-6 inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#C8A96E]/10 border border-[#C8A96E]/30 text-[#C8A96E] text-xs sm:text-sm font-medium">
                  <Hourglass className="w-4 h-4 text-[#C8A96E] flex-shrink-0" />
                  <span>Average client result: <strong>3.2× more leads in 90 days</strong></span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (Vertical Timeline matching Screenshot) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-3">
            {processSteps.map((item, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 120}>
                <div className="p-5 sm:p-6 rounded-2xl bg-[#0D0D0D] border border-white/5 hover:border-[#C8A96E]/30 transition-all duration-300 group flex items-start gap-4 sm:gap-6">
                  
                  {/* Step Number */}
                  <span className="text-3xl sm:text-4xl font-bold text-[#C8A96E]/40 group-hover:text-[#C8A96E] transition-colors font-serif-heading flex-shrink-0 pt-0.5">
                    {item.step}
                  </span>

                  <div className="flex-1">
                    {/* Step Title & Day Tag */}
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#C8A96E] transition-colors font-serif-heading">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded bg-[#C8A96E]/10 text-[#C8A96E] border border-[#C8A96E]/20 flex-shrink-0">
                        {item.day}
                      </span>
                    </div>

                    {/* Step Description */}
                    <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;
