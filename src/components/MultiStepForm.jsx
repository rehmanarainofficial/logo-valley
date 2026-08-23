import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, User, Phone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const MultiStepForm = ({ selectedPackage }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    services: selectedPackage ? [selectedPackage.name] : ["🎯 Logo Design"],
    budget: "$100 - $300",
    name: "",
    phone: ""
  });

  const availableServices = [
    "🎯 Logo Design",
    "✨ Brand Identity",
    "🚀 360° Branding",
    "Not sure! See what's inside the package"
  ];

  const budgetRanges = [
    "Under $100",
    "$100 - $300",
    "$300 - $500",
    "$500+"
  ];

  const handleServiceToggle = (service) => {
    setFormData(prev => {
      const exists = prev.services.includes(service);
      if (exists) {
        return { ...prev, services: prev.services.filter(s => s !== service) };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const handleNextStep1 = (e) => {
    e.preventDefault();
    if (formData.services.length === 0) {
      alert("Please select what you need help with.");
      return;
    }
    setStep(2);
  };

  const handleNextStep2 = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Full Name and Contact Number.");
      return;
    }

    // Format WhatsApp Message
    const message = `*Logo Valley Project Inquiry Brief*\n\n` +
      `*Services Needed:* ${formData.services.join(', ')}\n` +
      `*Estimated Budget:* ${formData.budget}\n` +
      `*Full Name:* ${formData.name}\n` +
      `*Contact Number:* ${formData.phone}`;

    const targetWhatsAppUrl = `https://wa.me/923212805070?text=${encodeURIComponent(message)}`;
    
    // Redirect to WhatsApp
    window.open(targetWhatsAppUrl, '_blank', 'noopener,noreferrer');
    
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0D0D0D] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Wrapper with ScrollReveal */}
        <ScrollReveal animation="fade-up">
          <div className="relative rounded-3xl bg-[#141414] border border-[#C8A96E]/30 p-6 sm:p-12 shadow-2xl shadow-[#C8A96E]/10 overflow-hidden">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A96E]/10 border border-[#C8A96E]/30 text-[#C8A96E] text-xs font-semibold tracking-wide mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Start Your Project Today
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif-heading">
                Logo & Branding <span className="gold-gradient-text">Inquiry Form</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-300">
                Complete this quick 3-step brief to send your project details directly to our creative studio.
              </p>
            </div>

            {!submitted ? (
              <div>
                {/* Progress Bar (3 Steps) */}
                <div className="mt-8 mb-10 max-w-md mx-auto">
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-400 mb-2">
                    <span className={step >= 1 ? "text-[#C8A96E]" : ""}>Step 1: Services</span>
                    <span className={step >= 2 ? "text-[#C8A96E]" : ""}>Step 2: Budget</span>
                    <span className={step >= 3 ? "text-[#C8A96E]" : ""}>Step 3: Contact</span>
                  </div>
                  <div className="w-full h-2 bg-[#0D0D0D] rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="h-full gold-gradient-bg transition-all duration-500 ease-out" 
                      style={{ width: step === 1 ? '33.3%' : step === 2 ? '66.6%' : '100%' }}
                    ></div>
                  </div>
                </div>

                {/* STEP 1: SERVICE SELECTION */}
                {step === 1 && (
                  <form onSubmit={handleNextStep1} className="space-y-8 animate-in fade-in duration-300">
                    <div>
                      <label className="block text-base font-bold text-white mb-2 font-serif-heading">
                        What do you need help with?
                      </label>
                      <p className="text-xs text-gray-400 mb-4">
                        1. Select the Services You Need (Select all that apply):
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {availableServices.map((service, idx) => {
                          const isSelected = formData.services.includes(service);
                          return (
                            <div
                              key={idx}
                              onClick={() => handleServiceToggle(service)}
                              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                                isSelected
                                  ? 'bg-[#C8A96E]/15 border-[#C8A96E] text-white shadow-md'
                                  : 'bg-[#0D0D0D] border-white/10 text-gray-300 hover:border-[#C8A96E]/40'
                              }`}
                            >
                              <span className="text-sm font-semibold">{service}</span>
                              <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                                isSelected ? 'bg-[#C8A96E] border-[#C8A96E] text-black' : 'border-gray-500'
                              }`}>
                                {isSelected && <CheckCircle2 className="w-4 h-4 stroke-[3]" />}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="submit"
                        className="px-8 py-3.5 rounded-full gold-gradient-bg text-black font-bold text-sm tracking-wide hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <span>Continue to Step 2</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {/* STEP 2: BUDGET SELECTION */}
                {step === 2 && (
                  <form onSubmit={handleNextStep2} className="space-y-8 animate-in fade-in duration-300">
                    <div>
                      <label className="block text-base font-bold text-white mb-3 font-serif-heading">
                        2. Estimated Investment Budget:
                      </label>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {budgetRanges.map((range, idx) => (
                          <div
                            key={idx}
                            onClick={() => setFormData({ ...formData, budget: range })}
                            className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                              formData.budget === range
                                ? 'bg-[#C8A96E] text-black font-bold border-[#C8A96E] shadow-lg'
                                : 'bg-[#0D0D0D] text-gray-300 border-white/10 hover:border-[#C8A96E]/40'
                            }`}
                          >
                            <span className="text-sm">{range}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-3 rounded-full bg-[#0D0D0D] text-gray-300 hover:text-white border border-white/10 font-semibold text-xs tracking-wide flex items-center gap-2 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        className="px-8 py-3.5 rounded-full gold-gradient-bg text-black font-bold text-sm tracking-wide hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <span>Continue to Step 3</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {/* STEP 3: CONTACT INFO & WHATSAPP SUBMIT */}
                {step === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <h3 className="text-base font-bold text-white mb-4 font-serif-heading">
                        3. Contact Information:
                      </h3>

                      <div className="space-y-4 max-w-md mx-auto">
                        
                        {/* Full Name */}
                        <div>
                          <label className="block text-xs font-semibold text-gray-300 mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              type="text"
                              required
                              placeholder="e.g. John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-white focus:border-[#C8A96E] focus:outline-none text-sm transition-colors"
                            />
                          </div>
                        </div>

                        {/* Contact / WhatsApp Number */}
                        <div>
                          <label className="block text-xs font-semibold text-gray-300 mb-2">
                            Contact / WhatsApp Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              type="tel"
                              required
                              placeholder="+92 300 0000000 / +1 (555) 000-0000"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-white focus:border-[#C8A96E] focus:outline-none text-sm transition-colors"
                            />
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="pt-6 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3 rounded-full bg-[#0D0D0D] text-gray-300 hover:text-white border border-white/10 font-semibold text-xs tracking-wide flex items-center gap-2 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        className="px-8 py-3.5 rounded-full gold-gradient-bg text-black font-bold text-sm tracking-wide hover:scale-105 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#C8A96E]/20"
                      >
                        <span>Send to WhatsApp</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>

                  </form>
                )}

              </div>
            ) : (
              /* SUCCESS CONFIRMATION SCREEN */
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full gold-gradient-bg p-[1px] mx-auto">
                  <div className="w-full h-full bg-[#0D0D0D] rounded-full flex items-center justify-center text-[#C8A96E]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-heading">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto">
                  Your project brief has been formatted and opened in WhatsApp! Our creative team at <span className="text-[#C8A96E] font-semibold">+92 321 2805070</span> will respond to your message shortly.
                </p>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#0D0D0D] text-[#C8A96E] border border-[#C8A96E]/30 hover:bg-[#C8A96E] hover:text-black font-semibold text-xs tracking-wide transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default MultiStepForm;
