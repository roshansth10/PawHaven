import React from 'react';

export const AboutResponsible: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F7F4EA] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Authentic Outdoor Lifestyle Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-[#EAE7DC]">
              <img
                src="/images/about/about-responsible.jpg"
                alt="A pet and owner enjoying an active, healthy walk in fresh air"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="mt-3 px-1 text-xs text-[#203D40]/65 font-medium">
              Realistic, healthy habits that fit into your everyday routine.
            </div>
          </div>

          {/* Right: Thoughtful, Grounded Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="text-xs font-bold text-[#204D3A] tracking-[0.2em] uppercase mb-3">
              PRACTICAL NURTURING
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#173D31] tracking-tight leading-tight mb-5">
              Responsible pet care in real life.
            </h2>

            <p className="text-sm sm:text-base text-[#203D40]/80 leading-relaxed font-normal mb-6 max-w-xl">
              We know pet parents want to do the right thing, but conflicting information can make simple decisions feel overwhelming. We focus on practical, evidence-backed fundamentals: consistent portioning, clean water, regular exercise, dental attention, and routine checkups.
            </p>

            <p className="text-xs sm:text-sm text-[#203D40]/75 leading-relaxed font-normal mb-8 max-w-xl">
              Rather than promoting quick fixes or fad trends, our goal is to help you build reliable daily habits that keep tails wagging and give you peace of mind.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="p-4 rounded-2xl bg-white border border-[#204D3A]/10">
                <div className="text-xs font-bold text-[#173D31] mb-1">Clear Nutrition</div>
                <div className="text-[11px] text-[#203D40]/70">No vague mystery ingredients</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#204D3A]/10">
                <div className="text-xs font-bold text-[#173D31] mb-1">Gentle Handling</div>
                <div className="text-[11px] text-[#203D40]/70">Low-stress grooming &amp; exams</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#204D3A]/10">
                <div className="text-xs font-bold text-[#173D31] mb-1">Active Routines</div>
                <div className="text-[11px] text-[#203D40]/70">Mental play &amp; daily movement</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
