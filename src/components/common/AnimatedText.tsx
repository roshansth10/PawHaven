import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  delay?: number;
  triggerOnScroll?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  as: Component = 'h2',
  className = '',
  delay = 0,
  triggerOnScroll = true,
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Respect user's reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const words = el.querySelectorAll('.word-inner');
    if (!words.length) return;

    const ctx = gsap.context(() => {
      if (triggerOnScroll) {
        gsap.fromTo(
          words,
          { y: '110%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.035,
            delay,
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }
        );
      } else {
        gsap.fromTo(
          words,
          { y: '110%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.035,
            delay,
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [text, delay, triggerOnScroll]);

  const words = text.split(' ');

  return (
    <Component
      ref={containerRef as React.Ref<any>}
      className={className}
      aria-label={text}
    >
      {words.map((word, idx) => (
        <span
          key={idx}
          className="inline-block overflow-hidden mr-[0.26em] align-top"
          aria-hidden="true"
        >
          <span className="word-inner inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
};
