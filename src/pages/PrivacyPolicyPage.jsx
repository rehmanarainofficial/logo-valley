import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <SEO 
        title="Privacy Policy" 
        description="Official Privacy Policy of Logo Valley Studio. Learn how we collect, protect, and use your information." 
      />
      <Navbar />

      {/* Header Banner */}
      <div className="py-16 bg-[#141414] border-b border-[#C8A96E]/15 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A96E]/10 text-[#C8A96E] text-xs font-semibold tracking-wide mb-3">
            <ShieldCheck className="w-4 h-4" /> Legal & Security
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-serif-heading">
            Privacy <span className="gold-gradient-text">Policy</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-300">
            Last Updated: August 2026 • Logo Valley Studio
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <main className="py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-gray-300 leading-relaxed text-sm sm:text-base">
        
        <section className="space-y-4 bg-[#141414] p-8 rounded-2xl border border-white/5">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-heading text-[#C8A96E]">
            1. Information We Collect
          </h2>
          <p>
            At Logo Valley Studio ("Logo Valley", "we", "us"), we respect your privacy. When you request a custom logo quote or submit an inquiry through our multi-step brief form, we collect personal contact details including your Full Name, Email Address, WhatsApp/Phone Number, and Business Name.
          </p>
        </section>

        <section className="space-y-4 bg-[#141414] p-8 rounded-2xl border border-white/5">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-heading text-[#C8A96E]">
            2. How We Use Your Information
          </h2>
          <p>
            Your information is used exclusively to deliver custom logo design concepts, project revisions, invoice details, and customer support. We do not sell, rent, or trade your personal information to third parties.
          </p>
        </section>

        <section className="space-y-4 bg-[#141414] p-8 rounded-2xl border border-white/5">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-heading text-[#C8A96E]">
            3. Master Vector Files & Intellectual Property
          </h2>
          <p>
            Upon final payment and logo concept approval, 100% full legal copyright ownership of the design is transferred to your organization. Logo Valley retains the right to display approved design work in our portfolio showcase unless an NDA is signed prior to project commencement.
          </p>
        </section>

        <section className="space-y-4 bg-[#141414] p-8 rounded-2xl border border-white/5">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-heading text-[#C8A96E]">
            4. Data Security & Protection
          </h2>
          <p>
            We implement industry-standard SSL encryption and secure storage practices to protect your data against unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section className="space-y-4 bg-[#141414] p-8 rounded-2xl border border-white/5">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-heading text-[#C8A96E]">
            5. Contact Privacy Officer
          </h2>
          <p>
            If you have any questions regarding this Privacy Policy or wish to modify your stored information, please email our support team at <span className="text-[#C8A96E] font-semibold">support@logo-valley.com</span>.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
