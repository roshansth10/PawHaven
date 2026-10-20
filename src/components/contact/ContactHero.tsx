import React from 'react';
import { AnimatedText } from '../common/AnimatedText';
import { AnimatedImage } from '../common/AnimatedImage';

export const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-12 sm:pt-16 md:pt-20 pb-16 bg-[#FFFFFF] border-b border-[#24543D]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Left image, right text layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Image (Left 5 cols on desktop, stacks below on mobile) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative">
              <AnimatedImage
                src="/images/contact/contact-hero.jpg"
                alt="Pet owner sharing a warm, reassuring embrace with their companion dog"
                aspectRatio="aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5]"
                className="shadow-xl border border-[#24543D]/15"
                parallax={true}
                priority={true}
                objectPosition="object-[center_30%]"
              />

              <div className="absolute -bottom-4 right-4 sm:-bottom-5 sm:right-6 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-xl border border-[#24543D]/15 shadow-md max-w-xs text-left">
                <p className="text-[11px] font-bold text-[#24543D] uppercase tracking-wider">
                  Direct Support
                </p>
                <p className="text-xs text-[#203D40]/80 font-medium leading-snug">
                  Personalized attention for every pet and pet parent.
                </p>
              </div>
            </div>
          </div>

          {/* Copy column (Right 7 cols on desktop, shows first on mobile) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Decorative left-border rule on copy column */}
            <div className="pl-5 border-l-4 border-[#24543D] space-y-6">

              {/* Eyebrow: simple all-caps label in forest green */}
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#24543D]">
                  Let&apos;s Talk
                </span>
              </div>

              {/* Animated heading */}
              <AnimatedText
                text="Here for you and your favourite companion."
                as="h1"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#203D40] tracking-tight leading-[1.12]"
                triggerOnScroll={false}
              />

              <p className="text-base sm:text-lg text-[#203D40]/80 max-w-2xl leading-relaxed font-normal">
                Have a question about an order, our products, or your pet&apos;s care? Get in touch and we&apos;ll help you find the right next step.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs text-[#203D40]/70 font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#24543D]" />
                  Clinic enquiries &amp; consultations
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#24543D]" />
                  Order dispatch &amp; delivery help
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#24543D]" />
                  Product suitability guidance
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
