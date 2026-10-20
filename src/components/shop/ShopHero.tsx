import React from 'react';

interface ShopHeroProps {
  onBrowseClick: () => void;
  onVetCareClick: () => void;
}

export const ShopHero: React.FC<ShopHeroProps> = ({ onBrowseClick, onVetCareClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F5ED] via-[#F7F6ED] to-[#F7F6ED] pt-8 pb-12 md:pt-14 md:pb-16 border-b border-[#24543D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Editorial Intro */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDEBD5] text-[#173D31] text-xs font-bold tracking-wide uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#24543D]"></span>
              Curated Pet Supplies &bull; Kathmandu Valley
            </div>

            {/* Editorial Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#173D31] tracking-tight leading-[1.12] mb-5">
              Wholesome Nutrition &amp; Joyful Play for Every Companion
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg text-[#203D40]/80 leading-relaxed max-w-2xl mb-8 font-normal">
              Explore our premium assortment of veterinarian-tested dry and wet foods, wholesome dehydrated treats, stimulating interactive toys, and gentle grooming care crafted for your pets&apos; happiest days.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onBrowseClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#24543D] text-white font-bold text-sm tracking-wide shadow-md shadow-[#24543D]/20 hover:bg-[#173D31] hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>Browse All Products</span>
                <span className="css-arrow-right" aria-hidden="true"></span>
              </button>

              <button
                onClick={onVetCareClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#DDEBD5]/70 text-[#173D31] font-semibold text-sm hover:bg-[#DDEBD5] transition-colors cursor-pointer"
              >
                <span>Veterinary Consultation</span>
              </button>
            </div>

            {/* Trust Micro-Statement */}
            <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-[#24543D]/10 text-xs text-[#203D40]/70 font-medium">
              <div className="flex items-center gap-2">
                <span className="css-checkmark text-[#24543D]" aria-hidden="true"></span>
                <span>100% Authentic Brands</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="css-checkmark text-[#24543D]" aria-hidden="true"></span>
                <span>Same-Day Kathmandu Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="css-checkmark text-[#24543D]" aria-hidden="true"></span>
                <span>Doctor Tested &amp; Approved</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0">
            {/* Organic Sage Backing Blob */}
            <div className="absolute inset-0 -m-4 bg-[#DDEBD5]/80 rounded-[48%_52%_58%_42%/54%_46%_54%_46%] -rotate-3 scale-95 transition-transform duration-700 pointer-events-none" />

            {/* Main Lifestyle Hero Photo */}
            <div className="relative z-10 w-full max-w-[460px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-[#173D31]/15 border-4 border-white">
              <img
                src="/images/shop/shop-hero.jpg"
                alt="Happy dog and kitten resting together peacefully"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-5 -left-2 sm:bottom-4 sm:-left-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-[#24543D]/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFD15C]/40 flex items-center justify-center text-[#173D31]">
                <span className="css-paw-sm text-[#173D31]" aria-hidden="true">
                  <span className="css-paw-pad"></span>
                  <span className="css-paw-toe css-paw-t1"></span>
                  <span className="css-paw-toe css-paw-t2"></span>
                  <span className="css-paw-toe css-paw-t3"></span>
                  <span className="css-paw-toe css-paw-t4"></span>
                </span>
              </div>
              <div>
                <div className="text-xs font-bold text-[#173D31] leading-tight">10,000+ Happy Pets</div>
                <div className="text-[11px] text-[#203D40]/70 font-medium">Loved by Nepali pet parents</div>
              </div>
            </div>

            {/* Handwritten Caveat Accent */}
            <div className="hidden sm:block absolute -top-4 -right-2 z-20 font-caveat text-xl md:text-2xl text-[#24543D] rotate-6 bg-white/90 px-3 py-1 rounded-xl shadow-sm border border-[#24543D]/10">
              Only genuine care ~
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
