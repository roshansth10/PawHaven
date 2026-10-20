import React from 'react';

export const AboutValues: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Compassion first',
      statement: 'Every decision starts with the animal\u2019s physical comfort and emotional security.',
      description: 'Whether we are evaluating a grooming shampoo for sensitive skin or recommending a consultation approach, our guiding question is always how it impacts the pet\u2019s wellbeing.',
    },
    {
      num: '02',
      title: 'Thoughtful product selection',
      statement: 'Clear ingredients, non-toxic materials, and verifiable dietary value.',
      description: 'We prioritize foods with transparent formulations and toys that withstand enthusiastic play, helping pet parents avoid guesswork and filler.',
    },
    {
      num: '03',
      title: 'Informed pet-care decisions',
      statement: 'Empowering conversations between pet families and veterinary caregivers.',
      description: 'By providing clear information on nutrition, routine changes, and preventative care, we help pet parents ask better questions and feel confident in their choices.',
    },
    {
      num: '04',
      title: 'Lifelong wellbeing',
      statement: 'Supporting healthy habits that endure across all life stages.',
      description: 'From playful kittenhood and high-energy puppy training to senior comfort and joint care, we stand beside pets and their families throughout the journey.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F7F4EA] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <div className="text-xs font-bold text-[#204D3A] tracking-[0.2em] uppercase mb-2">
            CORE PRINCIPLES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#173D31] tracking-tight mb-4">
            What we believe
          </h2>
          <p className="text-sm sm:text-base text-[#203D40]/80 leading-relaxed font-normal">
            Four commitments that shape every product we recommend and every consultation we support.
          </p>
        </div>

        {/* Editorial Numbered Sections (Not 4 identical white cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {principles.map((p) => (
            <div
              key={p.num}
              className="pt-6 border-t-2 border-[#204D3A]/20 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#204D3A] tracking-widest block mb-2">
                  PRINCIPLE {p.num}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-[#173D31] mb-2">
                  {p.title}
                </h3>

                <p className="text-sm font-semibold text-[#173D31]/90 mb-3 leading-snug">
                  {p.statement}
                </p>

                <p className="text-xs sm:text-sm text-[#203D40]/75 leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
