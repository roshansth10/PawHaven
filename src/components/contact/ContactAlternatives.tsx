import React from 'react';

interface ContactAlternativesProps {
  onNavigateShop: () => void;
  onNavigateVet: () => void;
  onNavigateBlog: () => void;
}

export const ContactAlternatives: React.FC<ContactAlternativesProps> = ({
  onNavigateShop,
  onNavigateVet,
  onNavigateBlog,
}) => {
  return (
    <section className="py-14 sm:py-18 bg-[#F7F6ED] border-t border-[#24543D]/10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl space-y-2 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#24543D]">
            Helpful Pathways
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#203D40] tracking-tight">
            Looking for something specific?
          </h3>
          <p className="text-xs sm:text-sm text-[#203D40]/75">
            You might find what you need directly in our dedicated sections:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Shop */}
          <div
            onClick={onNavigateShop}
            className="p-6 rounded-2xl bg-white border border-[#24543D]/10 hover:border-[#24543D]/30 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-full bg-[#DDEBD5] text-[#24543D] flex items-center justify-center font-bold">
              <span className="css-icon-cart" />
            </div>
            <h4 className="text-base font-bold text-[#203D40] group-hover:text-[#24543D] transition-colors">
              Supplies &amp; Nutrition
            </h4>
            <p className="text-xs text-[#203D40]/75 leading-relaxed">
              Browse trusted diets, interactive toys, grooming shampoos, and everyday essentials with valley-wide delivery.
            </p>
            <div className="pt-1 flex items-center text-xs font-bold text-[#24543D] gap-1">
              <span>Visit Shop</span>
              <span className="font-mono text-sm leading-none group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 2: Vet Care */}
          <div
            onClick={onNavigateVet}
            className="p-6 rounded-2xl bg-white border border-[#24543D]/10 hover:border-[#24543D]/30 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-full bg-[#DDEBD5] text-[#24543D] flex items-center justify-center font-bold">
              <span className="css-cat-vet" />
            </div>
            <h4 className="text-base font-bold text-[#203D40] group-hover:text-[#24543D] transition-colors">
              Veterinary Clinic
            </h4>
            <p className="text-xs text-[#203D40]/75 leading-relaxed">
              Explore our clinical philosophy, preventative checkups, diagnostics, and transparent consultation protocols.
            </p>
            <div className="pt-1 flex items-center text-xs font-bold text-[#24543D] gap-1">
              <span>Explore Veterinary Care</span>
              <span className="font-mono text-sm leading-none group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 3: Blog */}
          <div
            onClick={onNavigateBlog}
            className="p-6 rounded-2xl bg-white border border-[#24543D]/10 hover:border-[#24543D]/30 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-full bg-[#DDEBD5] text-[#24543D] flex items-center justify-center font-bold">
              <span className="w-4 h-4 border-2 border-currentColor rounded-xs" />
            </div>
            <h4 className="text-base font-bold text-[#203D40] group-hover:text-[#24543D] transition-colors">
              The PawHaven Journal
            </h4>
            <p className="text-xs text-[#203D40]/75 leading-relaxed">
              Read practical advice on daily dog routines, feline behavioral habits, nutrition transitions, and gentle hygiene.
            </p>
            <div className="pt-1 flex items-center text-xs font-bold text-[#24543D] gap-1">
              <span>Read Journal Stories</span>
              <span className="font-mono text-sm leading-none group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
