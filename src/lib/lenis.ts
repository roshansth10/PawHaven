import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;
let tickerCallback: ((time: number) => void) | null = null;

export const initLenis = (): Lenis | null => {
  if (typeof window === 'undefined') return null;

  // If already initialized, return existing instance to prevent duplicates
  if (lenisInstance) return lenisInstance;

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    // Return null to allow browser native instantaneous scrolling
    return null;
  }

  try {
    lenisInstance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      infinite: false,
      autoRaf: false, // We control RAF via GSAP ticker
    });

    // Synchronise Lenis scroll updates with ScrollTrigger
    lenisInstance.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Synchronize Lenis with GSAP's animation ticker
    tickerCallback = (time: number) => {
      if (lenisInstance) {
        lenisInstance.raf(time * 1000);
      }
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return lenisInstance;
  } catch (err) {
    console.warn('Could not initialize Lenis smooth scrolling:', err);
    return null;
  }
};

export const getLenis = (): Lenis | null => {
  return lenisInstance;
};

export const destroyLenis = (): void => {
  if (tickerCallback) {
    gsap.ticker.remove(tickerCallback);
    tickerCallback = null;
  }
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
};

export const scrollTo = (
  target: number | string | HTMLElement,
  options?: {
    offset?: number;
    immediate?: boolean;
    duration?: number;
    onComplete?: () => void;
  }
): void => {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, options);
  } else if (typeof window !== 'undefined') {
    if (typeof target === 'number') {
      window.scrollTo({
        top: target,
        behavior: options?.immediate ? 'auto' : 'smooth',
      });
    } else if (typeof target === 'string') {
      const elem = document.querySelector(target);
      if (elem) {
        elem.scrollIntoView({ behavior: options?.immediate ? 'auto' : 'smooth' });
      }
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: options?.immediate ? 'auto' : 'smooth' });
    }
    options?.onComplete?.();
  }
};
