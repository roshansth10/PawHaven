import React from 'react';

export const AboutCommunity: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text & Perspective */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="text-xs font-bold text-[#24543D] uppercase tracking-widest mb-2.5">
              THE PAWHAVEN COMMUNITY
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#173D31] tracking-tight mb-5 leading-snug">
              Created for Pet Parents, By People Who Understand.
            </h2>

            <p className="text-sm sm:text-base text-[#203D40]/80 leading-relaxed mb-6 font-normal">
              Whether you are welcoming an energetic new puppy, comforting a gentle senior cat, or balancing busy workdays with evening walks, we understand the joys and questions that come with everyday pet parenthood.
            </p>

            <p className="text-xs sm:text-sm text-[#203D40]/75 leading-relaxed mb-8 font-normal">
              PawHaven continues to grow as a shared community where questions are welcomed, thoughtful products are accessible, and every tail wag is celebrated.
            </p>

            {/* Quick Community Highlights */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-[#FBFBF6] rounded-2xl p-4 border border-black/5">
                <div className="text-xs font-bold text-[#173D31] mb-1">Authentic Connection</div>
                <div className="text-[11px] text-[#203D40]/70">Built on shared love for companion animals</div>
              </div>
              <div className="bg-[#FBFBF6] rounded-2xl p-4 border border-black/5">
                <div className="text-xs font-bold text-[#173D31] mb-1">Local Valley Care</div>
                <div className="text-[11px] text-[#203D40]/70">Serving families in Kathmandu and beyond</div>
              </div>
            </div>
          </div>

          {/* Right: Real Photograph */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative z-10 w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/images/about/about-community.jpg"
                alt="Happy pet parent sharing a tender bond with their beloved dog"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Soft decorative badge */}
            <div className="absolute -bottom-4 -right-2 sm:bottom-4 sm:-right-4 z-20 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-2xl shadow-lg border border-[#24543D]/10 flex items-center gap-2">
              <span className="css-heart text-[#24543D]" aria-hidden="true"></span>
              <span className="text-xs font-bold text-[#173D31]">For the love of pets</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
