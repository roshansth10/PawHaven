import React from 'react';

interface AboutDifferenceProps {
  onShopClick: () => void;
  onVetClick: () => void;
}

export const AboutDifference: React.FC<AboutDifferenceProps> = ({
  onShopClick,
  onVetClick,
}) => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width editorial layout with wide photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Descriptive Concept */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="text-xs font-bold text-[#204D3A] tracking-[0.2em] uppercase mb-3">
              AN INTEGRATED APPROACH
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#173D31] tracking-tight leading-tight mb-6">
              Products and care, working together.
            </h2>

            <p className="text-sm sm:text-base text-[#203D40]/80 leading-relaxed font-normal mb-8">
              Nutritious food, reliable daily gear, and professional veterinary insights are not separate worlds—they are complementary pieces of your pet&apos;s daily wellbeing.
            </p>

            <div className="space-y-6 w-full">
              {/* Pillar 1: Essentials */}
              <div className="pb-6 border-b border-[#204D3A]/15">
                <h3 className="text-lg font-bold text-[#173D31] mb-2">
                  Everyday pet essentials
                </h3>
                <p className="text-xs sm:text-sm text-[#203D40]/75 leading-relaxed font-normal mb-3">
                  Wholesome kibble, grain-free wet recipes, durable toys, and gentle grooming solutions curated to support active routines and healthy coats.
                </p>
                <button
                  onClick={onShopClick}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#204D3A] hover:text-[#173D31] cursor-pointer"
                >
                  <span>Explore the Shop</span>
                  <span className="css-arrow-right text-[#204D3A]" aria-hidden="true"></span>
                </button>
              </div>

              {/* Pillar 2: Clinical Guidance */}
              <div className="pb-2">
                <h3 className="text-lg font-bold text-[#173D31] mb-2">
                  Compassionate clinical guidance
                </h3>
                <p className="text-xs sm:text-sm text-[#203D40]/75 leading-relaxed font-normal mb-3">
                  Routine checkups, preventive immunizations, and clinical care information to help you navigate changing pet needs as years go by.
                </p>
                <button
                  onClick={onVetClick}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#204D3A] hover:text-[#173D31] cursor-pointer"
                >
                  <span>Explore Veterinary Care</span>
                  <span className="css-arrow-right text-[#204D3A]" aria-hidden="true"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Fresh Authentic Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-[#EAE7DC]">
              <img
                src="/images/about/about-together.jpg"
                alt="Happy companion pet thriving with everyday attention and nurturing care"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="mt-3 px-1 text-xs text-[#203D40]/65 font-medium">
              Daily nurturing combined with trusted clinical guidance.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
