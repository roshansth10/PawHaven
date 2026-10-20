import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AboutHeroProps {
  onShopClick: () => void;
  onVetClick: () => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ onShopClick, onVetClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.from(headlineRef.current, {
        y: 24,
        duration: 0.7,
      })
        .from(
          textRef.current,
          {
            y: 16,
            duration: 0.6,
          },
          '-=0.3'
        )
        .from(
          ctaRef.current,
          {
            y: 14,
            duration: 0.5,
          },
          '-=0.3'
        )
        .from(
          photoRef.current,
          {
            scale: 0.96,
            y: 20,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.5'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#F7F4EA] pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#204D3A]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Generous Text & Perspective */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="text-xs font-bold text-[#204D3A] tracking-[0.2em] uppercase mb-4">
              ABOUT PAWHAVEN
            </div>

            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#173D31] tracking-tight leading-[1.12] mb-6"
            >
              Better everyday care for the pets we love.
            </h1>

            <p
              ref={textRef}
              className="text-base sm:text-lg text-[#203D40]/85 leading-relaxed max-w-xl mb-8 font-normal"
            >
              PawHaven was created to unite two vital parts of life with animals: thoughtfully chosen everyday pet supplies and accessible, compassionate veterinary care. We exist to help pet parents feel informed, supported, and confident in every stage of their companion&apos;s life.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-8">
              <button
                onClick={onShopClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#204D3A] text-white font-bold text-sm tracking-wide hover:bg-[#173D31] active:scale-[0.99] transition-all cursor-pointer shadow-md shadow-[#204D3A]/15"
              >
                <span>Explore the Shop</span>
                <span className="css-arrow-right" aria-hidden="true"></span>
              </button>

              <button
                onClick={onVetClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#DDEBD5] text-[#173D31] font-semibold text-sm hover:bg-[#cde1c3] transition-colors cursor-pointer"
              >
                <span>Discover Veterinary Care</span>
              </button>
            </div>

            {/* Subtle Handwritten Phrase */}
            <div className="font-caveat text-xl sm:text-2xl text-[#204D3A] -rotate-3 select-none">
              ~ Because they&apos;re family.
            </div>
          </div>

          {/* Right Column: Authentic Editorial Photograph */}
          <div ref={photoRef} className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-[#EAE7DC]">
              <img
                src="/images/about/about-hero-bond.jpg"
                alt="A tender, candid outdoor moment between a happy pet and their companion"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="mt-3 px-1 text-xs text-[#203D40]/65 font-medium">
              Everyday companionship rooted in trust, nutrition, and comfort.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
