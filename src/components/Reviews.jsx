import React, { useState, useEffect, useRef } from 'react';
import { reviewsData } from '../data/reviewsData';
import { Star, CheckCircle2, Video, Sparkles, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalReviews = reviewsData.length;

  // Responsive visible items count
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, totalReviews - visibleCount);

  // Auto-play slider interval
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const handleCardClick = (url) => {
    window.open(url || 'https://www.facebook.com/logovalley1/reviews', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reviews" className="py-24 bg-[#141414] relative border-y border-[#C8A96E]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-semibold tracking-wide mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Client Testimonials
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading">
              Don't Take <span className="gold-gradient-text">Our Word For It</span>
            </h2>
            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              Real clients, real results — video reviews and written feedback from brands we’ve built from the ground up.
            </p>
          </div>
        </ScrollReveal>

        {/* Video Review Showcase */}
        <div className="mt-16 mb-16">
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="max-w-4xl mx-auto rounded-3xl bg-[#0D0D0D] border border-[#C8A96E]/30 p-6 sm:p-8 shadow-2xl shadow-[#C8A96E]/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Video Embed Player (YouTube Short aq0e6h3Zjwg) */}
              <div className="md:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden border border-[#C8A96E]/40 shadow-xl bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/aq0e6h3Zjwg"
                    title="Client Video Testimonial - Logo Valley Studio"
                    className="w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Video Review Highlight Text */}
              <div className="md:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A96E]/15 text-[#C8A96E] text-xs font-semibold">
                  <Video className="w-3.5 h-3.5" /> Featured Video Review
                </div>

                <div className="flex items-center gap-1 text-[#C8A96E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C8A96E]" />
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white font-serif-heading">
                  "Working with Logo Valley completely transformed our business identity."
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed italic">
                  Watch how our custom logo design and 360° brand system helped generate qualified leads and elevate market authority.
                </p>

                <div className="pt-2 flex items-center gap-3 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full gold-gradient-bg p-[1px]">
                    <div className="w-full h-full bg-[#0D0D0D] rounded-full flex items-center justify-center text-xs font-bold text-[#C8A96E]">
                      LV
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Verified Studio Client</h4>
                    <p className="text-xs text-gray-400">Brand Identity & Logo Package</p>
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>

        {/* Facebook Reviews Interactive Carousel Slider (3 Cards per View on Desktop) */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="relative max-w-7xl mx-auto">
            
            {/* Carousel Section Header */}
            <div className="flex items-center justify-between mb-8 px-2">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-sm sm:text-base font-bold text-white">
                  Real Reviews from <a href="https://www.facebook.com/logovalley1/reviews" target="_blank" rel="noopener noreferrer" className="text-[#C8A96E] hover:underline">Facebook</a>
                </span>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-[#0D0D0D] border border-white/10 text-gray-300 hover:text-white hover:border-[#C8A96E] transition-all cursor-pointer"
                  title="Previous Reviews"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-[#0D0D0D] border border-white/10 text-gray-300 hover:text-white hover:border-[#C8A96E] transition-all cursor-pointer"
                  title="Next Reviews"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Slider Container with Touch Support */}
            <div
              className="overflow-hidden touch-pan-y"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
              >
                {reviewsData.map((item) => (
                  <div
                    key={item.id}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                  >
                    <div
                      onClick={() => handleCardClick(item.facebookUrl)}
                      className="relative p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-[#C8A96E]/60 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C8A96E]/10 h-full min-h-[320px]"
                    >
                      <div>
                        {/* Recommendation Badge & Link Icon */}
                        <div className="flex items-center justify-between text-gray-500 mb-4 gap-2">
                          <div className="flex items-center gap-1.5 text-[11px] text-[#C8A96E] bg-[#C8A96E]/10 px-2.5 py-1 rounded-full border border-[#C8A96E]/20 truncate">
                            <svg className="w-3.5 h-3.5 fill-[#1877F2] flex-shrink-0" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <span className="truncate">{item.recommendation}</span>
                          </div>

                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#C8A96E] transition-colors flex-shrink-0" />
                        </div>

                        {/* Star Rating */}
                        <div className="flex items-center gap-1 text-[#C8A96E] mb-3">
                          {[...Array(item.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#C8A96E]" />
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-sm text-gray-200 leading-relaxed italic my-2 line-clamp-4">
                          "{item.review}"
                        </p>
                      </div>

                      {/* Client Profile Footer */}
                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full gold-gradient-bg p-[1px] flex-shrink-0">
                            <div className="w-full h-full bg-[#0D0D0D] rounded-full flex items-center justify-center text-xs font-bold text-[#C8A96E]">
                              {item.avatarInitial}
                            </div>
                          </div>
                          <div className="overflow-hidden">
                            <h4 className="text-xs font-bold text-white group-hover:text-[#C8A96E] transition-colors truncate">
                              {item.clientName}
                            </h4>
                            <p className="text-[11px] text-gray-400 truncate">
                              {item.date}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-[10px] text-[#C8A96E] bg-[#C8A96E]/10 px-2 py-0.5 rounded-full border border-[#C8A96E]/20 flex-shrink-0">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Verified</span>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicator Dots */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {[...Array(maxIndex + 1)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#C8A96E]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                  title={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Reviews;
