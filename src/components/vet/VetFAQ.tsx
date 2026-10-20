import React, { useState } from 'react';

export const VetFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What should I bring to an appointment?',
      a: 'Bring any prior medical, vaccination, or adoption records you have, as well as the names of current diets and supplements. Bringing along a familiar blanket or gentle reward treats helps soothe nervous pets in the waiting area.',
    },
    {
      q: 'How can I prepare my pet for a checkup?',
      a: 'Keep the morning calm and familiar. If your pet experiences travel anxiety or nausea, avoid large meals shortly before departure. Ensure dogs are on a secure leash and cats or small animals are in well-ventilated, secure carriers.',
    },
    {
      q: 'Can I request a preferred appointment date?',
      a: 'Yes, our request form allows you to select your preferred date and general time window (morning, afternoon, or evening). In real-world clinics, teams confirm precise arrival times based on doctor schedules and urgency.',
    },
    {
      q: 'What information should I share about my pet?',
      a: 'Helpful details include appetite or water intake shifts, energy levels, bathroom habits, changes in gait or posture, and any over-the-counter flea or tick treatments used. Even small everyday observations help guide thorough evaluations.',
    },
    {
      q: 'What should I do if my pet needs urgent attention?',
      a: 'If your pet experiences severe trauma, difficulty breathing, suspected poisoning, seizures, or extreme lethargy, do not wait for an online appointment response. Contact a dedicated 24-hour emergency veterinary hospital in your area right away.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FBFBF6] border-b border-black/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#24543D] uppercase tracking-widest mb-2">
            COMMON QUESTIONS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#173D31] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#203D40]/75 leading-relaxed font-normal">
            Helpful answers to guide your preparation for veterinary wellness visits.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-black/5 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#24543D]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-bold text-[#173D31] text-sm sm:text-base leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full bg-[#F7F6ED] flex items-center justify-center shrink-0 text-[#24543D] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <span className="css-chevron-down"></span>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-[#203D40]/80 leading-relaxed border-t border-black/5"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
