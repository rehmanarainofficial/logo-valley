import React from 'react';

const clientLogos = [
  { id: 1, src: '/trusted_logos/imgi_2_Artboard-1_3@4x-scaled.png', alt: 'Client Brand 1' },
  { id: 2, src: '/trusted_logos/imgi_3_Artboard-1_4@4x-scaled.png', alt: 'Client Brand 2' },
  { id: 3, src: '/trusted_logos/imgi_4_Artboard-1_2@4x-scaled.png', alt: 'Client Brand 3' },
  { id: 4, src: '/trusted_logos/imgi_5_Artboard-1_1@4x-scaled.png', alt: 'Client Brand 4' },
  { id: 5, src: '/trusted_logos/imgi_6_Artboard-1@4x-scaled.png', alt: 'Client Brand 5' },
  { id: 6, src: '/trusted_logos/imgi_7_Artboard-2-copy.png', alt: 'Client Brand 6' },
  { id: 7, src: '/trusted_logos/imgi_8_Artboard-2-copy_1.png', alt: 'Client Brand 7' },
  { id: 8, src: '/trusted_logos/imgi_9_Artboard-2-copy_2.png', alt: 'Client Brand 8' },
  { id: 9, src: '/trusted_logos/imgi_10_Artboard-2-copy_3.png', alt: 'Client Brand 9' },
  { id: 10, src: '/trusted_logos/imgi_11_Artboard-2_1.png', alt: 'Client Brand 10' },
  { id: 11, src: '/trusted_logos/imgi_12_Artboard-2_2.png', alt: 'Client Brand 11' },
  { id: 12, src: '/trusted_logos/imgi_13_Artboard-2_3.png', alt: 'Client Brand 12' },
  { id: 13, src: '/trusted_logos/imgi_14_Artboard-2_4.png', alt: 'Client Brand 13' },
  { id: 14, src: '/trusted_logos/imgi_15_Artboard-2_5.png', alt: 'Client Brand 14' },
  { id: 15, src: '/trusted_logos/imgi_16_Artboard-2_6.png', alt: 'Client Brand 15' }
];

const ClientMarquee = () => {
  return (
    <section className="w-full py-16 bg-[#F9F7F3] text-gray-900 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Sub-badge */}
        <span className="text-xs font-bold tracking-widest text-[#C8A96E] uppercase mb-3 block">
          TRUSTED BY
        </span>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 font-serif-heading max-w-4xl mx-auto leading-tight">
          We've Helped <span className="text-[#C8A96E]">200+ Businesses</span> Look Like The Best Brand In Their Industry
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-red-400 font-medium max-w-2xl mx-auto">
          From funded startups to established companies — brands that chose to look the part.
        </p>

        {/* Marquee Track with 15 Official Client Logos & Thin Vertical Dividers */}
        <div className="mt-12 relative w-full flex overflow-x-hidden border-t border-b border-gray-200 py-6">
          {/* Fading side edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F9F7F3] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F9F7F3] to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee flex items-center gap-0">
            {[...clientLogos, ...clientLogos].map((brand, idx) => (
              <div 
                key={idx}
                className="px-8 py-2 flex items-center justify-center min-w-[180px] sm:min-w-[220px] h-16 border-r border-gray-300 flex-shrink-0"
              >
                <img 
                  src={brand.src} 
                  alt={brand.alt} 
                  className="max-h-12 w-auto object-contain transition-opacity duration-300 opacity-90 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientMarquee;
