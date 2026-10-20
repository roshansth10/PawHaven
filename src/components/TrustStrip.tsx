import React from 'react';

interface TrustBenefitItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const TrustStrip: React.FC = () => {
  const benefits: TrustBenefitItem[] = [
    {
      title: 'Premium Products',
      desc: 'Top quality, trusted brands',
      icon: (
        <svg className="w-9 h-9 text-[#24543D] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 19c0-3.5 2.5-5.5 11-5.5s11 2 11 5.5" />
          <path d="M5 19h26v2c0 4.5-4.5 7-13 7S5 25.5 5 21v-2z" />
          <circle cx="18" cy="8" r="1.5" fill="currentColor" />
          <circle cx="13" cy="9.5" r="1.2" fill="currentColor" />
          <circle cx="23" cy="9.5" r="1.2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Expert Vets',
      desc: 'Experienced & compassionate',
      icon: (
        <svg className="w-9 h-9 text-[#24543D] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="11" r="4.5" />
          <path d="M9 29c0-5 4-7.5 9-7.5s9 2.5 9 7.5" />
          <path d="M14 17v3.5a4 4 0 0 0 8 0V17" />
          <circle cx="22" cy="21.5" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Fast & Reliable Delivery',
      desc: 'Across Nepal',
      icon: (
        <svg className="w-9 h-9 text-[#24543D] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 10h16v13H5z" />
          <path d="M21 14h6l4 4v5h-10z" />
          <circle cx="10" cy="25" r="3" />
          <circle cx="26" cy="25" r="3" />
          <line x1="2" y1="14" x2="4" y2="14" />
          <line x1="1" y1="17" x2="4" y2="17" />
        </svg>
      ),
    },
    {
      title: 'Pet Wellness Plans',
      desc: 'For a healthier future',
      icon: (
        <svg className="w-9 h-9 text-[#24543D] shrink-0" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="12" />
          <path d="M12 18l4 4 8-8" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-transparent py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-200/80">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3.5 px-3 sm:px-6 py-2"
            >
              {item.icon}
              <div className="text-left min-w-0">
                <h4 className="text-sm md:text-[15px] font-bold text-[#203D40] leading-snug whitespace-nowrap">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5A6F64] mt-0.5 whitespace-nowrap">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
