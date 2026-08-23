import React from 'react';
import { Phone } from 'lucide-react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="tel:+447426703249"
        className="group relative flex items-center gap-3 p-3 sm:px-4 sm:py-3 rounded-full bg-[#141414] border border-[#C8A96E]/50 text-white shadow-2xl shadow-[#C8A96E]/20 hover:border-[#C8A96E] hover:scale-105 transition-all duration-300 backdrop-blur-md"
        title="Call Us: +44 7426 703249"
      >
        {/* Pulse Aura Animation */}
        <span className="absolute -inset-0.5 rounded-full bg-[#C8A96E]/30 animate-ping opacity-75 pointer-events-none"></span>

        {/* Icon Circle */}
        <div className="relative w-10 h-10 rounded-full gold-gradient-bg p-[1px] flex-shrink-0">
          <div className="w-full h-full bg-[#0D0D0D] rounded-full flex items-center justify-center text-[#C8A96E] group-hover:bg-[#C8A96E] group-hover:text-black transition-colors">
            <Phone className="w-5 h-5" />
          </div>
        </div>

        {/* Phone Number Text (Hidden on small mobile, visible on sm+) */}
        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
            Call Studio
          </span>
          <span className="text-xs font-bold text-white group-hover:text-[#C8A96E] transition-colors font-mono">
            +44 7426 703249
          </span>
        </div>
      </a>
    </div>
  );
};

export default FloatingContact;
