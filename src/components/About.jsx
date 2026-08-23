import React from 'react';
import { Target, Lightbulb, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column Requested by User */}
          <ScrollReveal animation="slide-left" delay={0}>
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-semibold tracking-wide mb-4">
                About Us
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading leading-tight">
                Hello! We are <br />
                <span className="gold-gradient-text">Marketing Exclusive</span>
              </h2>

              <p className="mt-4 text-[#C8A96E] text-lg sm:text-xl font-semibold leading-snug">
                We understand the frustration of feeling stuck while trying to grow your business
              </p>
              
              <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
               Tired of piecing together your brand with random logos and designs? We get it. That’s exactly why Logo Valley exists. We create logos and complete brand identities that look premium, feel consistent, and make your business stand out. Let’s build a brand people remember.
              </p>

              {/* Get In Touch Button */}
              <div className="mt-8">
                <button
                  onClick={scrollToContact}
                  className="px-8 py-4 rounded-full gold-gradient-bg text-black font-bold text-base tracking-wide hover:shadow-xl hover:shadow-[#C8A96E]/20 hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-pointer"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

           
            </div>
          </ScrollReveal>

          {/* Right Visual Image - Increased picture size */}
          <ScrollReveal animation="slide-right" delay={200}>
            <div className="relative flex justify-center">
              <div className="relative rounded-2xl overflow-hidden bg-[#141414] shadow-2xl w-full max-w-xl h-[560px] sm:h-[620px]">
                <img 
                  src="/about_image.png" 
                  alt="Marketing Exclusive Creative Leadership" 
                  className="w-full h-full rounded-2xl object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-40"></div>
                
                {/* Floating Highlight Card with LinkedIn SVG Link requested by user */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-bold text-xs sm:text-sm text-[#C8A96E]">Creative Leadership & Strategy</h5>
                      <p className="text-[11px] text-gray-300">Crafting high-converting brand presences</p>
                    </div>
                    
                    {/* LinkedIn SVG Link requested by user */}
                    <a 
                      href="https://www.linkedin.com/in/saimali-designs/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[#C8A96E] bg-[#C8A96E]/20 hover:bg-[#C8A96E] hover:text-black px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer shadow-md"
                      title="Connect on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

export default About;
