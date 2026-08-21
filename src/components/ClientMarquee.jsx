import React from 'react';

const clientLogos = [
  { name: 'Teerag Apparel', logo: '/portfolio/Teerag/ChatGPT Image Jul 20, 2026, 02_23_15 PM.png' },
  { name: '104 Digital', logo: '/portfolio/104/ChatGPT Image Jul 20, 2026, 02_00_52 PM.png' },
  { name: 'Boostix Media', logo: '/portfolio/boostix/ChatGPT Image Jul 20, 2026, 01_51_42 PM.png' },
  { name: 'Logo Valley Signature', logo: '/portfolio/Horizontal Color@4x.png' },
  { name: 'Vertical Studio Mark', logo: '/portfolio/Vertical Color@4x.png' },
  { name: 'Teerag Clothing', logo: '/portfolio/Teerag/teerag (1)-04.jpg' }
];

const ClientMarquee = () => {
  return (
    <div className="w-full py-10 bg-[#141414] border-y border-[#C8A96E]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold">
          Trusted by 500+ Innovative Brands Worldwide
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden mask-linear-gradient">
        {/* Left/Right Fading Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#141414] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#141414] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-20 py-2">
          {/* Double array for seamless loop */}
          {[...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 px-6 py-3 rounded-xl bg-[#0D0D0D]/60 border border-white/5 hover:border-[#C8A96E]/30 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-[200px]"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-10 w-auto object-contain max-w-[120px]"
              />
              <span className="text-sm font-semibold text-gray-300 whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;
