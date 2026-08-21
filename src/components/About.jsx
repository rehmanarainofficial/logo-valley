import React from 'react';
import { Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-semibold tracking-wide mb-4">
              About Logo Valley Studio
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading leading-tight">
              We Don't Just Design Logos. <br />
              <span className="gold-gradient-text">We Build Timeless Brands.</span>
            </h2>
            
            <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
              At Logo Valley, we believe your logo is the single most important visual asset your business owns. It is the handshake before the meeting, the emblem of your reputation, and the foundation of customer loyalty.
            </p>

            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Our team of senior brand strategists, art directors, and vector illustrators combine psychological design principles with modern minimalist aesthetics to deliver identities that convert browsers into lifelong customers.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-[#141414] border border-white/5 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#C8A96E]/10 text-[#C8A96E]">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base">Strategic Positioning</h4>
                  <p className="text-xs text-gray-400 mt-1">Research-backed design tailored to your market niche.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-white/5 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#C8A96E]/10 text-[#C8A96E]">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base">100% Unique Vectors</h4>
                  <p className="text-xs text-gray-400 mt-1">No templates, no clipart. Pure hand-crafted marks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Image - Using about_image.png from Teeraj */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#141414] shadow-2xl">
              <img 
                src="/about_image.png" 
                alt="Logo Valley Studio Leadership & Creative Team" 
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-40"></div>
              
              {/* Floating Highlight Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-sm text-[#C8A96E]">Creative Leadership</h5>
                    <p className="text-xs text-gray-300">Handcrafting brand identities for global founders</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#C8A96E] bg-[#C8A96E]/20 px-3 py-1 rounded-full text-xs font-semibold">
                    <Award className="w-4 h-4" /> 10+ Yrs Exp
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
