import React from 'react';

export const VetProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Tell us about your pet',
      desc: 'Share your companion\u2019s breed, age, current diet, and the specific reason for your visit or questions.',
    },
    {
      num: '02',
      title: 'Request a visit',
      desc: 'Submit your preferred consultation date and time window using our streamlined online request form.',
    },
    {
      num: '03',
      title: 'Prepare for the consultation',
      desc: 'Gather any previous vaccination or medical records and note down any recent routine changes to discuss.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-xs font-bold text-[#204D3A] tracking-[0.2em] uppercase mb-2">
            APPOINTMENT PREPARATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#173D31] tracking-tight mb-4">
            What to expect
          </h2>
          <p className="text-sm sm:text-base text-[#203D40]/80 leading-relaxed font-normal">
            A straightforward process designed to make preparing for your visit simple, unhurried, and clear.
          </p>
        </div>

        {/* 3 Step Sequence: Horizontal progression on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative flex flex-col items-start pt-6 border-t-2 border-[#204D3A]/20"
            >
              {/* Step number badge */}
              <div className="text-xs font-mono font-bold text-[#204D3A] uppercase tracking-wider mb-3">
                Step {step.num}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#173D31] mb-2.5">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#203D40]/75 leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-12 p-4 rounded-2xl bg-[#F7F4EA] border border-[#204D3A]/10 text-xs text-[#203D40]/70">
          <strong className="text-[#173D31]">Before your visit:</strong> Please bring any prior medical notes or vaccination records if this is your companion&apos;s first visit with our clinical team.
        </div>

      </div>
    </section>
  );
};
