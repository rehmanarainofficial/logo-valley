import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, User, Mail, Phone, Building, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const MultiStepForm = ({ selectedPackage, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    services: selectedPackage ? [selectedPackage.name] : ["Logo Design"],
    budget: "$100 - $300",
    name: "",
    phone: "",
    email: "",
    company: "",
    notes: ""
  });

  const availableServices = [
    "Logo Design",
    "Full Brand Identity",
    "Web Design & Development",
    "Packaging & Label Design",
    "Social Media Branding Kit",
    "Rebranding & Redesign"
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

  const handleNextStep = (e) => {
    e.preventDefault();
    if (formData.services.length === 0) {
      alert("Please select at least one service requirement.");
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in your Name, Email, and WhatsApp/Phone number.");
      return;
    }
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
                Request Your <span className="gold-gradient-text">Custom Design Quote</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-300">
                Fill out this quick 2-step brief to receive custom logo concepts in as fast as 24 hours.
              </p>
            </div>

            {!submitted ? (
              <div>
                {/* Progress Bar */}
                <div className="mt-8 mb-10 max-w-md mx-auto">
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-400 mb-2">
                    <span className={step >= 1 ? "text-[#C8A96E]" : ""}>Step 1: Service Selection</span>
                    <span className={step >= 2 ? "text-[#C8A96E]" : ""}>Step 2: Contact Details</span>
                  </div>
                  <div className="w-full h-2 bg-[#0D0D0D] rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="h-full gold-gradient-bg transition-all duration-500 ease-out" 
                      style={{ width: step === 1 ? '50%' : '100%' }}
                    ></div>
                  </div>
                </div>

                {/* STEP 1 FORM */}
                {step === 1 && (
                  <form onSubmit={handleNextStep} className="space-y-8 animate-in fade-in duration-300">
                    
                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-white mb-3">
                        1. Select the Services You Need (Select all that apply):
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                              <span className="text-sm font-medium">{service}</span>
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

                    {/* Budget Selector */}
                    <div>
                      <label className="block text-sm font-semibold text-white mb-3">
                        2. Estimated Investment Budget:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {budgetRanges.map((range, idx) => (
                          <div
                            key={idx}
                            onClick={() => setFormData({ ...formData, budget: range })}
                            className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                              formData.budget === range
                                ? 'bg-[#C8A96E] text-black font-bold border-[#C8A96E]'
                                : 'bg-[#0D0D0D] text-gray-300 border-white/10 hover:border-[#C8A96E]/40'
                            }`}
                          >
                            <span className="text-sm">{range}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Step 1 Next Button */}
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

                {/* STEP 2 FORM */}
                {step === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-300">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
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

                      {/* WhatsApp / Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-2">
                          WhatsApp / Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="tel"
                            required
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-white focus:border-[#C8A96E] focus:outline-none text-sm transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-white focus:border-[#C8A96E] focus:outline-none text-sm transition-colors"
                          />
                        </div>
                      </div>

                      {/* Business Name */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-2">
                          Business / Brand Name
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            placeholder="e.g. Teerag Clothing"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-white focus:border-[#C8A96E] focus:outline-none text-sm transition-colors"
                          />
                        </div>
                      </div>

                    </div>

                    {/* Notes / Details */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2">
                        Brief Requirements / Design Ideas
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                        <textarea
                          rows={3}
                          placeholder="Tell us any specific colors, slogans, or reference styles you like..."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-white focus:border-[#C8A96E] focus:outline-none text-sm transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Buttons Navigation */}
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
                        className="px-8 py-3.5 rounded-full gold-gradient-bg text-black font-bold text-sm tracking-wide hover:scale-105 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#C8A96E]/20"
                      >
                        <span>Submit Inquiry</span>
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
                  Your inquiry has been received! Our senior art director will review your brief and send initial concept proposals to <span className="text-[#C8A96E] font-semibold">{formData.email}</span> within 24 hours.
                </p>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#0D0D0D] text-[#C8A96E] border border-[#C8A96E]/30 hover:bg-[#C8A96E] hover:text-black font-semibold text-xs tracking-wide transition-all"
                  >
                    Submit Another Project Brief
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
