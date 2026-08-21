import React from 'react';

const clientLogos = [
  { name: 'Brand Partner 1', logo: '/client_logos/client_1.png' },
  { name: 'Brand Partner 2', logo: '/client_logos/client_2.png' },
  { name: 'Brand Partner 3', logo: '/client_logos/client_3.png' },
  { name: 'Brand Partner 4', logo: '/client_logos/client_4.png' },
  { name: 'Brand Partner 5', logo: '/client_logos/client_5.png' },
  { name: 'Brand Partner 6', logo: '/client_logos/client_6.png' }
];

const ClientMarquee = () => {
  return (
    <div className="w-full py-12 bg-[#0D0D0D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-sm font-semibold tracking-wider text-[#C8A96E]">
          Trusted by 500+ Innovative Brands Worldwide
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        {/* Left & Right Smooth Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track - CLEAN BORDERLESS LOGOS */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-20 py-4">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center px-4 py-2 opacity-80 hover:opacity-100 transition-opacity duration-300 min-w-[180px]"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-12 w-auto object-contain max-w-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;
