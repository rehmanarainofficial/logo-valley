import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Packages from '../components/Packages';
import MultiStepForm from '../components/MultiStepForm';
import Footer from '../components/Footer';
import { Tag, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "How many logo concepts will I receive?",
    a: "Depending on your selected package, you will receive between 4 to unlimited initial logo concepts within 24 to 48 hours."
  },
  {
    q: "What files are included in the final handover?",
    a: "You will receive full master print and web vector files: AI (Adobe Illustrator), EPS, SVG, PDF, along with High-Resolution PNG (Transparent) and JPG files."
  },
  {
    q: "Do I get full copyright ownership?",
    a: "Yes! 100% full legal copyright ownership transfer is guaranteed upon final logo approval."
  },
  {
    q: "How do unlimited revisions work?",
    a: "You can request any adjustments to colors, fonts, weights, layout, or icon style until you are completely satisfied with the result."
  }
];

const PackagesPage = () => {
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSelectPackage = (pkg) => {
    setSelectedPkg(pkg);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenForm = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar onOpenQuoteModal={handleOpenForm} />
      
      {/* Header Banner */}
      <div className="pt-16 pb-12 bg-[#141414] border-b border-[#C8A96E]/15 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-semibold uppercase tracking-wider mb-4">
            <Tag className="w-3.5 h-3.5" /> Pricing Plans & Options
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white font-serif-heading">
            Design Packages & <span className="gold-gradient-text">Transparent Pricing</span>
          </h1>
          <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Choose a package tailored to your business stage. Every plan includes full vector files, revisions, and ownership transfer.
          </p>
        </div>
      </div>

      <main>
        <Packages onSelectPackage={handleSelectPackage} />

        {/* FAQ Accordion Section */}
        <section className="py-20 bg-[#141414] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A96E]/10 text-[#C8A96E] text-xs font-semibold uppercase mb-3">
                <HelpCircle className="w-3.5 h-3.5" /> FAQs
              </div>
              <h2 className="text-3xl font-bold text-white font-serif-heading">
                Frequently Asked <span className="gold-gradient-text">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className="rounded-xl bg-[#0D0D0D] border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between font-semibold text-base text-white hover:text-[#C8A96E] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-[#C8A96E]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm text-gray-300 border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <MultiStepForm selectedPackage={selectedPkg} />
      </main>

      <Footer />
    </div>
  );
};

export default PackagesPage;
