import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const VetEditorial: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);

  const pillars = [
    {
      num: '01',
      title: 'Listening carefully to pet owners',
      text: 'You observe your companion every day. We begin by hearing your experiences, routine notes, and any subtle behavioral shifts before drawing clinical conclusions.',
    },
    {
      num: '02',
      title: 'Explaining recommendations clearly',
      text: 'Medical jargon creates uncertainty. We explain diagnostics, nutrition alternatives, and medications in plain, actionable language so you feel fully informed.',
    },
    {
      num: '03',
      title: 'Considering comfort and individual pace',
      text: 'Every animal responds to clinical settings differently. Gentle pacing, low-stress handling, and calm pauses ensure checkups remain a safe experience.',
    },
    {
      num: '04',
      title: 'Supporting long-term, everyday wellness',
      text: 'True care extends far beyond the exam room. We focus on preventive routines, dental habits, and dietary stability that protect your pet for years to come.',
    },
  ];

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(textColRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
        y: 20,
        duration: 0.7,
        ease: 'power2.out',
        clearProps: 'all',
      });

      gsap.from(imageColRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
        y: 24,
        duration: 0.8,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-[#F7F4EA] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split: Left Image, Right Numbered Philosophy List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photography */}
          <div ref={imageColRef} className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-[#EAE7DC]">
              <img
                src="/images/vet/vet-consultation.jpg"
                alt="Gentle veterinarian consulting and caring for a companion animal"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="mt-3 px-1 text-xs text-[#203D40]/65 font-medium">
              Calm, unhurried consultations that respect your pet&apos;s comfort.
            </div>
          </div>

          {/* Right Column: Text & Editorial Flow */}
          <div ref={textColRef} className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="text-xs font-bold text-[#204D3A] tracking-[0.2em] uppercase mb-3">
              CARE PHILOSOPHY
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#173D31] tracking-tight leading-tight mb-5">
              Care that looks beyond the exam table.
            </h2>

            <p className="text-sm sm:text-base text-[#203D40]/80 leading-relaxed font-normal mb-8 max-w-xl">
              Understanding your pet&apos;s daily routine, appetite, and temperament helps us formulate compassionate, practical recommendations you can maintain with confidence at home.
            </p>

            {/* Clean Numbered Editorial List (Not cards!) */}
            <div className="w-full space-y-6">
              {pillars.map((item) => (
                <div key={item.num} className="pb-5 border-b border-[#204D3A]/10 last:border-b-0">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="text-xs font-mono font-bold text-[#204D3A]">
                      {item.num}.
                    </span>
                    <h3 className="text-base font-bold text-[#173D31]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#203D40]/75 leading-relaxed font-normal pl-6">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
