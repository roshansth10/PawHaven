import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  parallax?: boolean;
  objectPosition?: string;
  priority?: boolean;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/3]',
  parallax = false,
  objectPosition = 'object-center',
  priority = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Subtle scale-down and opacity reveal when entering viewport
      gsap.fromTo(
        img,
        { scale: 1.06, opacity: priority ? 0.8 : 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: priority
            ? undefined
            : {
                trigger: container,
                start: 'top 85%',
                once: true,
              },
        }
      );

      // 2. Optional gentle desktop parallax
      if (parallax && window.innerWidth >= 1024) {
        gsap.to(img, {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, [parallax, priority]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#DDEBD5]/30 ${aspectRatio} ${className}`}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${objectPosition} will-change-transform transition-all`}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
};
