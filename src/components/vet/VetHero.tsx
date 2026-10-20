import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface VetHeroProps {
  onBookAppointment: () => void;
  onExploreServices: () => void;
}

export const VetHero: React.FC<VetHeroProps> = ({
  onBookAppointment,
  onExploreServices,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
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
          copyRef.current,
          {
            y: 18,
            duration: 0.6,
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text & Action */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Small Editorial Eyebrow */}
            <div className="text-xs font-bold text-[#204D3A] tracking-[0.2em] uppercase mb-4">
              VETERINARY CARE
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-[#173D31] tracking-tight leading-[1.1] mb-6"
            >
              Care that puts your pet first.
            </h1>

            {/* Supporting Copy & CTAs */}
            <div ref={copyRef} className="w-full">
              <p className="text-base sm:text-lg text-[#203D40]/85 leading-relaxed max-w-xl mb-8 font-normal">
                From preventive checkups and gentle diagnostics to ongoing wellness advice, thoughtful veterinary care helps you make informed, confident decisions for the companion who depends on you.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-8">
                <button
                  onClick={onBookAppointment}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#204D3A] text-white font-bold text-sm tracking-wide hover:bg-[#173D31] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer shadow-md shadow-[#204D3A]/15"
                >
                  <span>Book an Appointment</span>
                  <span className="css-arrow-right" aria-hidden="true"></span>
                </button>

                <button
                  onClick={onExploreServices}
                  className="text-sm font-bold text-[#204D3A] hover:text-[#173D31] underline underline-offset-4 decoration-2 decoration-[#204D3A]/30 hover:decoration-[#204D3A] transition-all cursor-pointer self-center sm:self-auto"
                >
                  Explore Our Services &rarr;
                </button>
              </div>

              {/* Short Supporting Line */}
              <p className="text-xs sm:text-sm text-[#203D40]/70 font-medium">
                Care tailored to your companion&apos;s individual pace, routine, and comfort.
              </p>
            </div>

          </div>

          {/* Right: Authentic Photograph (No oversized blob or generic badge) */}
          <div ref={photoRef} className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-[#173D31]/10 border-4 border-white aspect-[4/3] bg-[#EAE7DC]">
              <img
                src="/images/vet/vet-hero-exam.jpg"
                alt="Veterinarian conducting a thorough examination of a dog on a clinic table"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Subtle caption marker */}
            <div className="mt-3 flex items-center justify-between text-[11px] text-[#203D40]/60 px-1 font-medium">
              <span>Patient, low-stress physical examination</span>
              <span>Preventive wellness focus</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
