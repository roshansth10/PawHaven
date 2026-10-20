import React from 'react';

export const VetTeam: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F7F4EA] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Authentic Clinical Team Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-[#EAE7DC]">
              <img
                src="/images/vet/vet-team.jpg"
                alt="Veterinary professionals collaborating attentively with an animal in a modern clinic"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="mt-3 px-1 text-xs text-[#203D40]/65 font-medium">
              Collaborative, calm clinical environment focused on gentle patient care.
            </div>
          </div>

          {/* Right: Thoughtful Human Copy on Observable Principles */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="text-xs font-bold text-[#204D3A] tracking-[0.2em] uppercase mb-3">
              CARE STANDARDS
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#173D31] tracking-tight leading-tight mb-5">
              The care and patience behind every visit.
            </h2>

            <p className="text-sm sm:text-base text-[#203D40]/80 leading-relaxed font-normal mb-8">
              We believe great veterinary care is defined as much by how animals are handled as by medical expertise. Our clinical approach is built on observable principles that protect your pet&apos;s peace of mind.
            </p>

            {/* Principles list */}
            <div className="space-y-4 w-full">
              <div className="p-4 rounded-2xl bg-white border border-[#204D3A]/10">
                <h3 className="text-sm font-bold text-[#173D31] mb-1">
                  Gentle, Low-Stress Handling
                </h3>
                <p className="text-xs text-[#203D40]/75 leading-relaxed font-normal">
                  Patience and gentle body language help anxious companions settle naturally during vital sign checks and blood draws.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#204D3A]/10">
                <h3 className="text-sm font-bold text-[#173D31] mb-1">
                  Unrushed Communication
                </h3>
                <p className="text-xs text-[#203D40]/75 leading-relaxed font-normal">
                  We walk you through exam findings step-by-step so you understand what is normal, what to monitor, and why specific care is advised.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#204D3A]/10">
                <h3 className="text-sm font-bold text-[#173D31] mb-1">
                  Practical At-Home Guidance
                </h3>
                <p className="text-xs text-[#203D40]/75 leading-relaxed font-normal">
                  Straightforward post-visit instructions empower you to administer treatments, monitor recovery, and adjust diets comfortably.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
