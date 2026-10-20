import React from 'react';

export const AboutCommitments: React.FC = () => {
  const commitments = [
    {
      title: 'Clear Product Information',
      desc: 'Transparent ingredient disclosures, life-stage markers, and nutritional facts so you know exactly what is going into your pet\u2019s bowl.',
    },
    {
      title: 'Thoughtful Everyday Essentials',
      desc: 'Formulas and accessories curated with a strong preference for non-toxic materials, genuine freshness, and everyday durability.',
    },
    {
      title: 'Welcoming Pet-Care Guidance',
      desc: 'Helpful educational overviews and conversational checkup checklists designed to empower everyday care choices.',
    },
    {
      title: 'A Supportive Pet Parent Experience',
      desc: 'An approachable, respectful destination created to celebrate the rewarding journey of raising happy companion animals.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FBFBF6] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-xs font-bold text-[#24543D] uppercase tracking-widest mb-2">
            HOW WE SERVE YOU
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#173D31] tracking-tight mb-4">
            Our Brand Commitments
          </h2>
          <p className="text-sm sm:text-base text-[#203D40]/80 leading-relaxed font-normal">
            Grounded in mutual trust and respect for the pets who enrich our homes every day.
          </p>
        </div>

        {/* 4 Commitments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((c, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-black/5 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-[#DDEBD5] text-[#173D31] font-bold text-xs flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#173D31] mb-2">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#203D40]/75 leading-relaxed font-normal">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
