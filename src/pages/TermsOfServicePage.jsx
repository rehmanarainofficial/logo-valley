import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { FileText } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <SEO 
        title="Terms of Service" 
        description="Terms of Service and design agreement policies for Logo Valley Studio." 
      />
      <Navbar />

      {/* Header Banner */}
      <div className="py-16 bg-[#141414] border-b border-[#C8A96E]/15 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A96E]/10 text-[#C8A96E] text-xs font-semibold tracking-wide mb-3">
            <FileText className="w-4 h-4" /> Legal Terms
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-serif-heading">
            Terms of <span className="gold-gradient-text">Service</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-300">
            Last Updated: August 2026 • Logo Valley Studio Agreement
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <main className="py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-gray-300 leading-relaxed text-sm sm:text-base">
        
        <section className="space-y-4 bg-[#141414] p-8 rounded-2xl border border-white/5">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-heading text-[#C8A96E]">
            1. Scope of Design Services
          </h2>
          <p>
            Logo Valley Studio provides custom logo design, full brand identity guidelines, stationery design, packaging design, and web development services as specified in the selected package.
          </p>
        </section>

        <section className="space-y-4 bg-[#141414] p-8 rounded-2xl border border-white/5">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-heading text-[#C8A96E]">
            2. Revisions & Turnaround Times
          </h2>
          <p>
            Initial logo concept drafts are delivered within 24 to 48 business hours (or 3-5 days depending on the package scope). Revision requests are processed continuously until final design approval is granted.
          </p>
        </section>

        <section className="space-y-4 bg-[#141414] p-8 rounded-2xl border border-white/5">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-heading text-[#C8A96E]">
            3. Delivery of Master Vector Files
          </h2>
          <p>
            Upon project completion, final assets are delivered in editable vector formats (AI, EPS, SVG, PDF) along with high-resolution PNG and JPG images suitable for digital and print production.
          </p>
        </section>

        <section className="space-y-4 bg-[#141414] p-8 rounded-2xl border border-white/5">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-heading text-[#C8A96E]">
            4. Client Satisfaction & Money Back Policy
          </h2>
          <p>
            We strive for 100% client satisfaction. If initial design concepts do not meet your expectations prior to ordering revisions, a refund may be requested as per our studio refund policy.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
