import React from 'react';
import { AnimatedText } from '../common/AnimatedText';

interface BlogClosingCTAProps {
  onNavigateShop: () => void;
  onNavigateVet: () => void;
}

export const BlogClosingCTA: React.FC<BlogClosingCTAProps> = ({
  onNavigateShop,
  onNavigateVet,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-[#F7F6ED] border-t-2 border-[#DDEBD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Horizontal layout: text left, buttons right on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* Left: heading + subtext */}
          <div className="space-y-3 max-w-xl">
            <AnimatedText
              text="Care that continues beyond the article."
              as="h2"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#24543D] tracking-tight leading-tight"
            />
            <p className="text-sm sm:text-base text-[#203D40]/70 leading-relaxed font-normal">
              Whether you need wholesome nutrition or expert veterinary guidance, we are here for every step of your companion&apos;s life.
            </p>
          </div>

          {/* Right: two restrained CTA links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:shrink-0">
            <button
              onClick={onNavigateShop}
              className="cursor-pointer px-7 py-3 rounded-full bg-[#24543D] hover:bg-[#173D31] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all active:scale-95 flex items-center gap-2 group"
            >
              <span>Visit Shop</span>
              <span className="font-mono text-sm leading-none group-hover:translate-x-0.5 transition-transform">→</span>
            </button>

            <button
              onClick={onNavigateVet}
              className="cursor-pointer px-7 py-3 rounded-full border border-[#24543D]/40 hover:border-[#24543D] text-[#24543D] font-bold text-xs uppercase tracking-wider transition-all active:scale-95 flex items-center gap-2 group"
            >
              <span>Veterinary Care</span>
              <span className="font-mono text-sm leading-none group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
