import React from 'react';

interface AboutClosingCTAProps {
  onShopClick: () => void;
  onVetClick: () => void;
}

export const AboutClosingCTA: React.FC<AboutClosingCTAProps> = ({
  onShopClick,
  onVetClick,
}) => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F4EA] border-t border-[#204D3A]/10 text-[#203D40]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="text-xs font-bold text-[#204D3A] tracking-[0.2em] uppercase mb-4">
          HERE FOR YOUR PET
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#173D31] mb-5 leading-tight">
          Let&apos;s make every pet moment count.
        </h2>

        <p className="text-base sm:text-lg text-[#203D40]/80 max-w-xl mx-auto leading-relaxed font-normal mb-8">
          Discover vetted pet supplies and explore compassionate veterinary care designed to support your companion through every chapter of life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onShopClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#204D3A] text-white font-bold text-sm tracking-wide hover:bg-[#173D31] active:scale-[0.99] transition-all cursor-pointer shadow-md"
          >
            <span>Explore the Shop</span>
            <span className="font-mono text-sm leading-none">→</span>
          </button>

          <button
            onClick={onVetClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-[#204D3A] border border-[#204D3A]/25 font-semibold text-sm hover:bg-[#DDEBD5]/40 transition-colors cursor-pointer"
          >
            <span>Explore Veterinary Care</span>
          </button>
        </div>

      </div>
    </section>
  );
};
