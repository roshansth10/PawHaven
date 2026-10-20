import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  onShopClick: () => void;
  onBookVetClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onBookVetClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const animalsRef = useRef<HTMLDivElement>(null);
  const handwrittenRef = useRef<HTMLDivElement>(null);
  const trustBadgeRef = useRef<HTMLDivElement>(null);
  const doodlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(pillRef.current, {
        y: -10,
        duration: 0.4,
      })
        .from(
          headingRef.current,
          {
            y: 20,
            duration: 0.5,
          },
          '-=0.2'
        )
        .from(
          descRef.current,
          {
            y: 12,
            duration: 0.4,
          },
          '-=0.2'
        )
        .from(
          actionsRef.current,
          {
            y: 12,
            duration: 0.4,
          },
          '-=0.2'
        )
        // Dog and Cat entrance with playful bounce overshoot
        .from(
          animalsRef.current,
          {
            y: 35,
            scale: 0.96,
            duration: 0.7,
            ease: 'back.out(1.5)',
          },
          '-=0.25'
        )
        // Handwritten phrase independent pop & slight tilt settle
        .from(
          handwrittenRef.current,
          {
            x: 15,
            y: -10,
            rotation: 3,
            scale: 0.9,
            duration: 0.5,
            ease: 'back.out(1.8)',
          },
          '-=0.3'
        )
        // Doodles sparkle in
        .from(
          doodlesRef.current,
          {
            scale: 0.8,
            duration: 0.4,
          },
          '-=0.2'
        )
        // Trust badge scale & opacity pop
        .from(
          trustBadgeRef.current,
          {
            scale: 0.8,
            duration: 0.45,
            ease: 'back.out(1.8)',
          },
          '-=0.25'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#EFF5EA] pt-6 sm:pt-10 md:pt-12 pb-0 mb-0 overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end">
          
          {/* ==============================================================
              LEFT COLUMN: Pill, 3-line Headline, Description, Pill Buttons
              ============================================================== */}
          <div className="lg:col-span-5 z-10 space-y-5 sm:space-y-6 text-left min-w-0 pb-10 sm:pb-16 lg:pb-24">
            
            {/* Small flat pill tag */}
            <div ref={pillRef} className="inline-flex">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DDEBD5] text-[#24543D] text-xs font-semibold tracking-wide">
                <span>Healthy Pets</span>
                <span className="text-[#24543D]/60 text-xs">•</span>
                <span>Happy Lives</span>
              </div>
            </div>

            {/* Main Headline - split across 3 lines:
                Noticeably smaller (56-60px at 1440px wide; bold, not extra-bold) */}
            <h1
              ref={headingRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.12] select-none break-words"
            >
              <span className="block text-[#203D40]">
                Everything Your
              </span>
              <span className="block text-[#203D40]">
                Pet Needs,
              </span>
              <span className="block text-[#24543D]">
                Under One Roof
              </span>
            </h1>

            {/* Paragraph in muted gray-green */}
            <p
              ref={descRef}
              className="text-[#5A6F64] text-sm sm:text-base md:text-[17px] font-normal leading-relaxed max-w-md"
            >
              From premium pet food and supplies to trusted veterinary care — we&apos;re here for every wag, purr and happy moment.
            </p>

            {/* Action buttons (rounded pill design) */}
            <div
              ref={actionsRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1"
            >
              {/* Primary: Shop Now (filled dark-green pill with arrow icon) */}
              <button
                onClick={onShopClick}
                className="group px-7 py-3.5 rounded-full bg-[#24543D] hover:bg-[#173D31] text-[#FFFFFF] font-bold text-sm sm:text-base tracking-wide shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#24543D] outline-none"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary: Book a Vet Appointment (outlined pill) */}
              <button
                onClick={onBookVetClick}
                className="px-7 py-3.5 rounded-full bg-transparent hover:bg-[#24543D]/5 text-[#24543D] font-bold text-sm sm:text-base tracking-wide border border-[#24543D] transition-all duration-200 flex items-center justify-center active:scale-95 focus-visible:ring-2 focus-visible:ring-[#24543D] outline-none"
              >
                <span>Book a Vet Appointment</span>
              </button>
            </div>
          </div>

          {/* ==============================================================
              RIGHT COLUMN: Dog and Cat Cutout + Organic Blob + Script + Badge
              ============================================================== */}
          <div className="lg:col-span-7 relative flex items-end justify-center lg:justify-start min-w-0 pt-6 lg:pt-0 pb-0 mb-0">

            {/* ── BLOB: Irregular organic light-green shape ──────────────────
                Tall bump behind dog's head (reaches near top), sweeps right behind
                cat, and bulges lower-left behind dog's chest. z-index below photo. */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
              <svg
                viewBox="0 0 600 600"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full"
              >
                <path
                  fill="#d9e8d0"
                  d="M120 380 C60 330 40 250 110 220 C170 195 230 190 250 120 C262 70 290 20 340 15 C395 10 410 60 400 110 C395 150 430 170 480 200 C560 250 590 360 530 450 C480 530 380 580 280 575 C190 570 150 450 120 380 Z"
                />
              </svg>
            </div>

            {/* ── LEFT-OF-DOG DOODLE: 3 fanning dashes at dog's eye-to-nose height ── */}
            <div
              ref={doodlesRef}
              className="absolute inset-0 pointer-events-none hidden md:block"
              style={{ zIndex: 25 }}
              aria-hidden="true"
            >
              {/* Fan dashes — placed just left of the dog's face.
                  The photo occupies 78% of the right column, centered/left-aligned.
                  Dog occupies leftmost ~60% of photo. Doodle needs to be slightly to
                  the left of the dog's face, at mid-height of dog (~35-45% from top). */}
              <svg
                viewBox="0 0 50 70"
                width="50"
                height="70"
                fill="none"
                stroke="#1f4d3a"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="absolute"
                style={{ left: '1%', top: '28%' }}
              >
                <path d="M3 4 L33 12" />
                <path d="M1 32 L30 27" />
                <path d="M26 62 L40 40" />
              </svg>
            </div>

            {/* ── SMALL SPARKLE DOODLE: 3 fanning dashes above dog's right ear ──────
                Floats independently above the blob top-right area, clearly to the
                LEFT of the "Better Care" script, with ≥40px gap from that text.
                Center ≈ top: 8%, left: 60% of the right column container. */}
            <div
              className="absolute pointer-events-none select-none hidden md:block"
              style={{
                top: '6%',
                left: '63%',
                zIndex: 26,
                transform: 'scaleX(-1) rotate(-10deg)',
              }}
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 40"
                width="22"
                height="36"
                fill="none"
                stroke="#1f4d3a"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M5 4 L17 8" />
                <path d="M3 19 L15 20" />
                <path d="M6 35 L16 29" />
              </svg>
            </div>

            {/* ── SCRIPT TEXT + heart ──────────────────────────────────────────
                Smaller (24–26px), weight 400-500, rotated -12deg.
                Moved to sit over the upper-right area of the blob shape,
                above the cat's head and to the right of the dog. */}
            <div
              ref={handwrittenRef}
              className="absolute pointer-events-none select-none hidden md:block"
              style={{
                /* Upper right, inside blob area: right edge ~15% from container right */
                top: '5%',
                right: '14%',
                zIndex: 25,
                transform: 'rotate(-12deg)',
              }}
            >
              {/* Script text — Caveat 400-500, 24-26px, dark green */}
              <div
                className="font-caveat text-[#1f4d3a] leading-[1.25] text-left"
                style={{ fontSize: '25px', fontWeight: 450 }}
              >
                Better Care<br />
                for a Brighter<br />
                Tomorrow
              </div>

              {/* Outlined heart ~22px */}
              <div className="mt-1.5">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1f4d3a"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
            </div>

            {/* ── TRUST BADGE: Organic blob shape, ~115px, lower-right, no cat overlap ── */}
            <div
              ref={trustBadgeRef}
              className="absolute select-none shadow-md hidden md:flex flex-col items-center justify-center text-center p-3 text-white transition-transform hover:scale-105"
              style={{
                /* Organic blob border-radius, slight rotation */
                width: '115px',
                height: '115px',
                background: '#1f4d3a',
                borderRadius: '58% 42% 55% 45% / 50% 55% 45% 50%',
                transform: 'rotate(-8deg)',
                /* Far right, lower third: positioned so right edge stays in viewport.
                   cat is at roughly right 30% of photo (right 22% of right column),
                   so right: 0 keeps badge just outside cat area */
                bottom: '8%',
                right: '0%',
                zIndex: 25,
              }}
            >
              {/* White paw icon ~24px */}
              <svg width="24" height="24" viewBox="0 0 36 36" fill="currentColor" className="text-white mb-1 flex-shrink-0">
                <circle cx="8"  cy="9"  r="3.2" />
                <circle cx="15" cy="5"  r="3.2" />
                <circle cx="23" cy="5"  r="3.2" />
                <circle cx="29" cy="9"  r="3.2" />
                <path d="M18 31 C13 26 9 21 9 17 C9 13 12 10.5 15 10.5 C16.5 10.5 17.5 11.5 18 12 C18.5 11.5 19.5 10.5 21 10.5 C24 10.5 27 13 27 17 C27 21 23 26 18 31 Z" />
              </svg>
              <span className="text-[10px] font-normal text-white/90 leading-tight block">
                Trusted by
              </span>
              <span className="text-[12px] font-extrabold text-white leading-tight block">
                10,000+ Pet
              </span>
              <span className="text-[11px] font-semibold text-white/95 leading-tight block">
                Parents
              </span>
            </div>

            {/* ── PHOTO: Dog & Cat cutout — slightly larger so dog head reaches near top ── */}
            <div
              ref={animalsRef}
              className="relative flex items-end justify-center lg:justify-start select-none mb-0 pb-0"
              style={{
                zIndex: 10,
                /* Photo takes up ~75% of right column width, leaving room for badge at right edge */
                width: '75%',
                minWidth: '320px',
              }}
            >
              <img
                src="/images/heroimg.png"
                alt="Happy Golden Retriever dog and tabby cat"
                className="block w-full h-auto mb-0 pb-0"
                style={{ maxHeight: '720px', objectFit: 'contain', objectPosition: 'bottom' }}
                loading="eager"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
