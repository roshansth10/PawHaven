import React from 'react';
import { AnimatedText } from '../common/AnimatedText';

export const BlogHero: React.FC = () => {
  return (
    <section className="relative pt-14 sm:pt-18 md:pt-22 pb-14 bg-[#F7F6ED] border-b border-[#24543D]/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Magazine masthead layout — full-width, left-aligned */}
        <div className="space-y-5">

          {/* Small all-caps label above the rule */}
          <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#24543D]">
            The PawHaven Journal
          </span>

          {/* Thin ornamental rule */}
          <hr className="border-0 border-t border-[#24543D]/30 w-full" />

          {/* Editorial headline */}
          <AnimatedText
            text="Little things that make their lives better."
            as="h1"
            className="text-4xl sm:text-5xl md:text-[60px] lg:text-[68px] font-extrabold text-[#203D40] tracking-tight leading-[1.08]"
            triggerOnScroll={false}
          />

          {/* Body copy */}
          <p className="text-base sm:text-lg text-[#203D40]/75 max-w-2xl leading-relaxed font-normal">
            Thoughtful advice for happier, healthier pets — from everyday routines to the moments that make having them special. Written with compassion and grounded in real pet-care practice.
          </p>

          {/* Three inline category bullets */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-8 text-xs text-[#203D40]/65 font-semibold uppercase tracking-wider pt-1">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#24543D] shrink-0" />
              Evidence-informed pet health
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#24543D] shrink-0" />
              Low-stress training &amp; living
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#24543D] shrink-0" />
              Nutrition &amp; daily enrichment
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
