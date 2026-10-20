import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VetServicesProps {
  onSelectService: (serviceName: string) => void;
}

interface ServiceData {
  number: string;
  title: string;
  description: string;
}

export const VetServices: React.FC<VetServicesProps> = ({ onSelectService }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const services: ServiceData[] = [
    {
      number: '01',
      title: 'General checkups',
      description: 'Comprehensive physical exams, heart and lung monitoring, temperature checks, and body condition scoring for dogs and cats.',
    },
    {
      number: '02',
      title: 'Vaccinations',
      description: 'Core immunization schedules, rabies protection, and lifestyle booster plans tailored to your pet\u2019s outdoor activities.',
    },
    {
      number: '03',
      title: 'Diagnostic testing',
      description: 'Gentle clinical bloodwork, fecal screenings, and microscopy to evaluate internal organ function and catch concerns early.',
    },
    {
      number: '04',
      title: 'Dental care',
      description: 'Oral health evaluations, tartar assessment, and home hygiene routines to safeguard teeth, gums, and systemic health.',
    },
    {
      number: '05',
      title: 'Surgery and treatment',
      description: 'Soft-tissue surgical care, wound management, and structured recovery guidance with pain management support.',
    },
    {
      number: '06',
      title: 'Senior pet care',
      description: 'Joint mobility reviews, cognitive support, and targeted comfort adjustments for aging companions in their golden years.',
    },
    {
      number: '07',
      title: 'Nutrition and wellness guidance',
      description: 'Dietary planning for food sensitivities, weight management strategies, and life-stage nutrition tailored to specific breeds.',
    },
    {
      number: '08',
      title: 'Preventive care',
      description: 'Flea, tick, and heartworm protection, seasonal wellness check-ins, and routine protocols designed to keep pets thriving.',
    },
  ];

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.service-row-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
        y: 16,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-16 md:py-24 bg-white border-b border-black/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Layout: Left Header Column & Right Services Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Sticky Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="text-xs font-bold text-[#204D3A] tracking-[0.2em] uppercase mb-3">
              OUR CLINICAL FOCUS
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-[#173D31] tracking-tight leading-[1.18] mb-5">
              Thoughtful care, from nose to tail.
            </h2>
            
            <p className="text-sm sm:text-base text-[#203D40]/80 leading-relaxed font-normal mb-8">
              We look at veterinary care as an ongoing partnership. Explore common areas of care below and find the right next step for your pet.
            </p>

            <div className="bg-[#F7F4EA] rounded-2xl p-5 border border-[#204D3A]/10 text-xs text-[#203D40]/80 space-y-2">
              <div className="font-bold text-[#173D31] uppercase tracking-wider text-[11px]">
                Transparent Consultations
              </div>
              <p>
                Every appointment includes dedicated time for your observations and open discussion of treatment options.
              </p>
            </div>
          </div>

          {/* Right Column: Refined Two-Column Service Index (Not repetitive cards) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {services.map((s) => (
                <div
                  key={s.number}
                  className="service-row-item pt-4 border-t border-[#204D3A]/15 flex flex-col justify-between group"
                >
                  <div>
                    {/* Number marker */}
                    <span className="text-xs font-mono font-bold text-[#204D3A] tracking-wider block mb-2">
                      {s.number}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#173D31] mb-2 group-hover:text-[#204D3A] transition-colors">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#203D40]/75 leading-relaxed font-normal mb-4">
                      {s.description}
                    </p>
                  </div>

                  {/* Clean text action */}
                  <button
                    onClick={() => onSelectService(s.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#204D3A] hover:text-[#173D31] self-start cursor-pointer transition-colors"
                  >
                    <span>Request this service</span>
                    <span className="css-arrow-right text-[#204D3A]" aria-hidden="true"></span>
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
