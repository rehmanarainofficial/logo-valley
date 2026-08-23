import React from "react";
import {
  Target,
  Zap,
  Infinity as InfinityIcon,
  Package,
  Trophy,
  UserCheck,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    icon: UserCheck,
    title: "Transparency That Builds Trust",
    description:
      "We believe great branding starts with a transparent and collaborative process. Having worked with 100+ businesses, we keep you involved at every stage, with clear communication, regular updates, and detailed reports so you always know where your project stands.",
  },
  {
    icon: Trophy,
    title: "Value Driven",
    description:
      "We understand that every business has different needs and budgets. That’s why we keep our pricing clear and upfront, with packages designed to fit your goals. No hidden costs, no unnecessary add-ons, just the right branding solution for your business.",
  },
  {
    icon: Target,
    title: "Strategy First",
    description:
      "Every logo and brand decision is backed by market research and positioning — beauty with real business purpose.",
  },
  {
    icon: InfinityIcon,
    title: "Unlimited Revisions",
    description:
      "We work until every element — logo, colors, fonts, guidelines — is exactly right. No hidden fees, ever.",
  },
  {
    icon: Zap,
    title: "48-Hour Concepts",
    description:
      "Logo and brand concepts in 48 hours. Full project delivered in 7–10 business days — not weeks, not months.",
  },
  {
    icon: Package,
    title: "Complete Brand Kit",
    description:
      "Logo in every format + color system, typography stack, brand guidelines, and social templates. The full package.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header from User Screenshot */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-[#C8A96E] uppercase mb-3 block">
              WHY LOGO VALLEY
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-heading">
              The Studio{" "}
              <span className="gold-gradient-text">Brands Choose</span>
            </h2>

            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              Strategic thinking combined with exceptional craft — across logo
              design, brand identity, and full visual systems.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Feature Cards Grid matching Screenshot Copy */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="p-8 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#C8A96E]/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C8A96E]/5 h-full">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5C383] to-[#A68547] p-[1px] mb-6 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-[#0D0D0D] rounded-[11px] flex items-center justify-center text-[#C8A96E]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#C8A96E] transition-colors font-serif-heading">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
