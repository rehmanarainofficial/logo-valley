import React, { useState } from 'react';
import { X, CheckCircle, ExternalLink, Calendar, User, ArrowRight } from 'lucide-react';

const CaseStudyModal = ({ item, onClose, onSelectPackage }) => {
  const [selectedImg, setSelectedImg] = useState(item?.coverImage);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#141414] border border-[#C8A96E]/30 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0D0D0D]">
          <div>
            <span className="text-xs font-semibold text-[#C8A96E] uppercase tracking-wider">
              {item.category} Case Study
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-heading">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Main Large Preview */}
          <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0D0D0D] p-2 flex items-center justify-center min-h-[300px]">
            <img 
              src={selectedImg || item.coverImage} 
              alt={item.title} 
              className="max-h-[450px] w-auto object-contain rounded-lg shadow-xl"
            />
          </div>

          {/* Thumbnail Strip */}
          {item.images && item.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {item.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(img)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 w-20 h-20 bg-[#0D0D0D] p-1 ${
                    selectedImg === img ? 'border-[#C8A96E]' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover rounded" />
                </button>
              ))}
            </div>
          )}

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            
            {/* Meta Column */}
            <div className="space-y-4">
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block">Client</span>
                <span className="text-sm font-semibold text-white flex items-center gap-1.5 mt-0.5">
                  <User className="w-4 h-4 text-[#C8A96E]" /> {item.client}
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block">Year Delivered</span>
                <span className="text-sm font-semibold text-white flex items-center gap-1.5 mt-0.5">
                  <Calendar className="w-4 h-4 text-[#C8A96E]" /> {item.year}
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block">Tag</span>
                <span className="inline-block px-3 py-1 rounded-md bg-[#C8A96E]/10 text-[#C8A96E] text-xs font-semibold mt-1">
                  {item.tag}
                </span>
              </div>
            </div>

            {/* Description & Deliverables */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-base font-semibold text-white">Project Overview</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>

              <h4 className="text-base font-semibold text-white pt-2">Deliverables Provided</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.deliverables?.map((deliv, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#C8A96E] flex-shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0D0D0D] flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-gray-400">
            Want a similar brand identity for your business?
          </p>
          <button
            onClick={() => {
              onClose();
              if (onSelectPackage) onSelectPackage();
            }}
            className="px-6 py-2.5 rounded-lg gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <span>Get Similar Design</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CaseStudyModal;
