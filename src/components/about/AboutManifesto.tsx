import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutManifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      gsap.from([quoteRef.current, textRef.current], {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
        y: 20,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-28 bg-[#173D31] text-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Soft Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#DDEBD5] text-xs font-bold tracking-widest uppercase mb-8">
          OUR MANIFESTO
        </div>

        {/* Main Statement */}
        <h2
          ref={quoteRef}
          className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-[1.2] mb-6 text-[#F7F6ED]"
        >
          &ldquo;They&apos;re not just part of our lives.<br className="hidden sm:inline" /> They&apos;re part of our family.&rdquo;
        </h2>

        {/* Supporting text */}
        <p
          ref={textRef}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Every meal, every walk, every quiet moment, and every playful discovery is another reason to care a little more.
        </p>

        {/* Decorative Pure CSS Paw accent */}
        <div className="mt-10 flex justify-center text-[#FFD15C]">
          <span className="css-paw-sm text-[#FFD15C]" aria-hidden="true">
            <span className="css-paw-pad"></span>
            <span className="css-paw-toe css-paw-t1"></span>
            <span className="css-paw-toe css-paw-t2"></span>
            <span className="css-paw-toe css-paw-t3"></span>
            <span className="css-paw-toe css-paw-t4"></span>
          </span>
        </div>

      </div>

      {/* Subtle organic background curves */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFD15C]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>
    </section>
  );
};
