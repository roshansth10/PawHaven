import React from 'react';

export const AboutStory: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Split: Editorial Photo Left, Narrative Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Authentic Lifestyle Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-[#EAE7DC]">
              <img
                src="/images/about/about-story-care.jpg"
                alt="A person holding and comforting their companion pet at home"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="mt-3 px-1 text-xs text-[#203D40]/65 font-medium">
              Small acts of daily attention add up to lifelong pet health.
            </div>
          </div>

          {/* Right: Narrative Story */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="text-xs font-bold text-[#204D3A] tracking-[0.2em] uppercase mb-3">
              THE PAWHAVEN STORY
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#173D31] tracking-tight leading-tight mb-6">
              A simpler, more thoughtful way to care for pets.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#203D40]/80 leading-relaxed font-normal max-w-xl">
              <p>
                Caring for a pet is rarely about a single big decision. It is the steady accumulation of everyday choices: selecting a nutritious kibble that supports a sensitive stomach, finding an engaging chew toy that relieves stress, and knowing when to seek clinical guidance.
              </p>
              <p>
                Too often, pet parents must navigate scattered stores, confusing product labels, and impersonal advice. PawHaven was founded to bring transparent product curation and accessible veterinary perspectives together in one warm, welcoming place.
              </p>
              <p>
                We do not believe in complicated gimmicks or exaggerated promises. Our purpose is simple: to make caring for your companion clearer, calmer, and more joyful.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#204D3A]/15 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#203D40]/70 font-medium">
              <span>Grounded in authentic care for pet parents across Nepal</span>
              <span className="font-bold text-[#204D3A]">Kathmandu Valley &bull; Pet Store &amp; Veterinary Care</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
