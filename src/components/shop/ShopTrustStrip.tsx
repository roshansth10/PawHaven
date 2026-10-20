import React from 'react';

export const ShopTrustStrip: React.FC = () => {
  const benefits = [
    {
      title: 'Thoughtful Selection',
      desc: 'Tested formulas, non-toxic toys, and pet-safe materials.',
      icon: (
        <span className="css-icon-shield text-[#24543D]" aria-hidden="true" />
      ),
    },
    {
      title: 'Veterinary Endorsed',
      desc: 'Selected in consultation with certified practicing vets.',
      icon: (
        <span className="css-icon-vet text-[#24543D]" aria-hidden="true" />
      ),
    },
    {
      title: 'Valley Express Dispatch',
      desc: 'Prompt same-day delivery throughout Kathmandu Valley.',
      icon: (
        <span className="css-icon-truck text-[#24543D]" aria-hidden="true">
          <span className="css-truck-body"></span>
          <span className="css-truck-cab"></span>
          <span className="css-truck-wheel css-truck-w1"></span>
          <span className="css-truck-wheel css-truck-w2"></span>
        </span>
      ),
    },
    {
      title: 'Friendly Guidance',
      desc: 'Support from experienced pet parents and nutrition pros.',
      icon: (
        <span className="css-icon-leaf text-[#24543D]" aria-hidden="true" />
      ),
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#DDEBD5]/60 flex items-center justify-center shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h4 className="text-base font-bold text-[#173D31] mb-1">
                  {benefit.title}
                </h4>
                <p className="text-xs text-[#203D40]/70 leading-relaxed font-normal">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
