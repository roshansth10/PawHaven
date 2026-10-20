import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

interface VeterinarySectionProps {
  onBookAppointment: (serviceName?: string) => void;
}

export const VeterinarySection: React.FC<VeterinarySectionProps> = ({
  onBookAppointment,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const midColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (leftColRef.current) {
        gsap.from(leftColRef.current.children, {
          y: 15,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        });
      }

      if (midColRef.current) {
        const rows = midColRef.current.querySelectorAll('.service-row');
        gsap.from(rows, {
          x: -12,
          duration: 0.45,
          stagger: 0.06,
          scrollTrigger: {
            trigger: midColRef.current,
            start: 'top 90%',
          },
        });
      }

      if (rightColRef.current) {
        gsap.from(rightColRef.current, {
          scale: 0.98,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: rightColRef.current,
            start: 'top 90%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      id: 'checkups',
      name: 'General Checkups',
      icon: (
        <svg className="w-4 h-4 text-[#24543D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      id: 'vaccinations',
      name: 'Vaccinations',
      icon: (
        <svg className="w-4 h-4 text-[#24543D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 2 4 4" />
          <path d="m17 7 3-3" />
          <path d="M19 9 8.7 19.3c-.4.4-1 .6-1.6.6H3v-4.1c0-.6.2-1.2.6-1.6L13.9 3.9" />
          <path d="m5 19 3-3" />
        </svg>
      ),
    },
    {
      id: 'diagnostics',
      name: 'Diagnostics & Lab Tests',
      icon: (
        <svg className="w-4 h-4 text-[#24543D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31L4.15 20.3a2 2 0 0 0 1.7 2.7h12.3a2 2 0 0 0 1.7-2.7L14 9.31V2" />
          <path d="M8.5 2h7" />
          <path d="M7 16h10" />
        </svg>
      ),
    },
    {
      id: 'surgery',
      name: 'Surgery',
      icon: (
        <svg className="w-4 h-4 text-[#24543D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m19 5-8.5 8.5a2.12 2.12 0 0 1-3 0L5 11l-3 3 8 8 3-3-2.5-2.5a2.12 2.12 0 0 1 0-3L19 5Z" />
          <path d="m14 10 5 5" />
        </svg>
      ),
    },
    {
      id: 'dental',
      name: 'Dental Care',
      icon: (
        <svg className="w-4 h-4 text-[#24543D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 3c-2.5 0-4 2-4 5 0 3 1.5 6 3 10 1 2.5 2 3 3 3 1.5 0 2-2 3-5 1 3 1.5 5 3 5 1 0 2-.5 3-3 1.5-4 3-7 3-10 0-3-1.5-5-4-5-2 0-3 1.5-5 1.5S9 3 7 3Z" />
        </svg>
      ),
    },
    {
      id: 'emergency',
      name: 'Emergency Care',
      icon: (
        <svg className="w-4 h-4 text-[#24543D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4" />
          <path d="m4.93 4.93 2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M20 12h2" />
          <path d="m19.07 4.93-2.83 2.83" />
          <path d="M5 19a7 7 0 0 1 14 0H5Z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="vet"
      ref={sectionRef}
      className="relative bg-[#EFF5EA] overflow-hidden py-14 sm:py-16 lg:py-0 lg:h-[430px] flex items-center"
    >
      {/* Soft organic blur decoration on lower left */}
      <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-[#DDEBD5] blur-3xl pointer-events-none -z-0 opacity-70" />

      {/* SVG ClipPath Definition for the Organic Right Blob Mask:
          Left edge is curved and irregular (narrower at top-left, wider at bottom-left),
          right edge runs straight off the viewport. */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="vet-blob-mask" clipPathUnits="objectBoundingBox">
            <path d="M 0.22,0 
                     C 0.15,0.18 0.17,0.38 0.11,0.52 
                     C 0.04,0.68 0,0.82 0.03,0.92 
                     C 0.06,0.98 0.12,1 0.2,1 
                     L 1,1 
                     L 1,0 
                     Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Main Content Container: Left Column Text & Middle Column List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ==============================================================
              LEFT COLUMN: Plain Eyebrow, 2-line Heading, Description, Button
              ============================================================== */}
          <div ref={leftColRef} className="lg:col-span-4 lg:max-w-md space-y-4 text-left min-w-0">
            {/* Plain small uppercase green text, no pill background */}
            <span className="block text-xs font-bold tracking-widest text-[#24543D] uppercase">
              VETERINARY CARE
            </span>

            {/* Heading on exactly 2 lines: Compassionate Care / for Every Stage of Life */}
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-[#203D40] tracking-tight leading-[1.18]">
              Compassionate Care<br />
              for Every Stage of Life
            </h2>

            <p className="text-sm sm:text-base text-[#5A6F64] leading-relaxed font-normal">
              Our experienced veterinarians provide comprehensive care — from routine checkups to advanced treatments.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onBookAppointment()}
                className="group px-7 py-3.5 rounded-full bg-[#24543D] hover:bg-[#173D31] text-white font-bold text-sm sm:text-base tracking-wide shadow-xs hover:shadow-md transition-all flex items-center gap-2 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#24543D] outline-none"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* ==============================================================
              MIDDLE COLUMN: Simple List of 6 Rows with Consistent Spacing
              ============================================================== */}
          <div ref={midColRef} className="lg:col-span-3 space-y-4 sm:space-y-4.5 min-w-0">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => onBookAppointment(service.name)}
                className="service-row flex items-center gap-3.5 group cursor-pointer select-none transition-transform hover:translate-x-1"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') onBookAppointment(service.name); }}
              >
                {/* Small light-green circular icon */}
                <div className="w-8 h-8 rounded-full bg-[#DDEBD5] text-[#24543D] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                {/* Single-line label */}
                <span className="text-sm sm:text-[15px] font-semibold text-[#203D40] group-hover:text-[#24543D] transition-colors whitespace-nowrap">
                  {service.name}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile Right Column Image Display (stacked below on screens < lg) */}
          <div className="lg:hidden w-full h-[300px] sm:h-[360px] relative overflow-hidden rounded-3xl mt-4">
            <img
              src="/images/pet-and-vet.jpeg"
              alt="Veterinarian examining dog"
              className="w-full h-full object-cover scale-x-[-1]"
              style={{ objectPosition: 'center 20%' }}
              loading="lazy"
            />
          </div>

        </div>
      </div>

      {/* ==============================================================
          RIGHT COLUMN (Desktop): Bleeds to right edge of viewport, full height,
          clipped with large organic blob mask, vet on left, dog on right.
          ============================================================== */}
      <div
        ref={rightColRef}
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[48%] overflow-hidden z-0 pointer-events-none select-none"
        style={{
          clipPath: 'url(#vet-blob-mask)',
          WebkitClipPath: 'url(#vet-blob-mask)',
        }}
      >
        <img
          src="/images/pet-and-vet.jpeg"
          alt="Compassionate veterinarian examining dog in clinic"
          className="w-full h-full object-cover scale-x-[-1]"
          style={{ objectPosition: 'center 20%' }}
          loading="lazy"
        />
      </div>

      {/* Handwritten Script at Top Right: "Healthy Pets Start Here" + Heart
          Positioned on top of the image at the top right, fully visible and NOT clipped by mask. */}
      <div
        className="absolute top-5 right-6 sm:right-10 z-20 pointer-events-none select-none text-right"
        style={{ transform: 'rotate(5deg)' }}
      >
        <span className="font-caveat text-2xl sm:text-3xl font-medium text-[#24543D] block leading-none">
          Healthy Pets<br />
          Start Here
        </span>
        <div className="mt-1 flex justify-end pr-3">
          <svg
            className="w-4 h-4 text-[#24543D]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
      </div>

    </section>
  );
};
