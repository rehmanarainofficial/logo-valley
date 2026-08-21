import React from 'react';
import { reviewsData } from '../data/reviewsData';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-[#141414] relative border-y border-[#C8A96E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-semibold tracking-wide mb-4">
            <MessageSquare className="w-3.5 h-3.5" /> Client Feedback & Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading">
            Loved by Founders, <span className="gold-gradient-text">Trusted by Leaders</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            See what our clients say about their brand identity transformation with Logo Valley Studio.
          </p>
        </div>

        {/* Custom Testimonial Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((item) => (
            <div
              key={item.id}
              className="relative p-8 rounded-2xl bg-[#0D0D0D] border border-white/5 hover:border-[#C8A96E]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#C8A96E]/5"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#C8A96E]/20 group-hover:text-[#C8A96E]/40 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-[#C8A96E] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C8A96E]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              {/* Client Profile Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gold-gradient-bg p-[1px]">
                    <div className="w-full h-full bg-[#0D0D0D] rounded-full flex items-center justify-center text-xs font-bold text-[#C8A96E]">
                      {item.avatarInitial}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#C8A96E] transition-colors">
                      {item.clientName}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {item.company}
                    </p>
                  </div>
                </div>

                {item.verified && (
                  <div className="flex items-center gap-1 text-[11px] text-[#C8A96E] bg-[#C8A96E]/10 px-2.5 py-1 rounded-full border border-[#C8A96E]/20">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
