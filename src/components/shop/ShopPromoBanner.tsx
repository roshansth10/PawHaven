import React from 'react';

interface ShopPromoBannerProps {
  onExploreClick: () => void;
}

export const ShopPromoBanner: React.FC<ShopPromoBannerProps> = ({ onExploreClick }) => {
  return (
    <section className="py-6 bg-[#F7F6ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#173D31] via-[#24543D] to-[#2E684C] text-white p-8 sm:p-12 lg:p-16 shadow-xl shadow-[#173D31]/10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-bold tracking-widest uppercase mb-4">
                Seasonal Spotlight
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-4 text-[#F7F6ED]">
                Made for Everyday Pet Moments
              </h2>

              <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-xl mb-8 font-normal">
                Whether it is morning grooming rituals, afternoon backyard training sessions, or cozy evening snuggles, discover thoughtfully crafted essentials designed to keep tails wagging and coats gleaming.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onExploreClick}
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#FFD15C] text-[#173D31] font-bold text-sm hover:bg-[#FFE08A] hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer shadow-md shadow-black/10"
                >
                  <span>Explore Daily Essentials</span>
                  <span className="css-arrow-right text-[#173D31]" aria-hidden="true"></span>
                </button>

                <div className="text-xs text-white/80 font-medium">
                  Free shipping on orders over Rs. 3,500 inside Valley
                </div>
              </div>

            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="/images/shop/promo-banner.jpg"
                  alt="Pet parent bonding with gentle companion outdoors"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Background Decorative Soft Blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#FFD15C]/10 rounded-full blur-2xl pointer-events-none"></div>

        </div>
      </div>
    </section>
  );
};
