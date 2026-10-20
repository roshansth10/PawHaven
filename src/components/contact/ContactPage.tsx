import React, { useRef } from 'react';
import { ContactHero } from './ContactHero';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import { ContactAlternatives } from './ContactAlternatives';
import { ContactClosingCTA } from './ContactClosingCTA';
import { scrollTo } from '../../lib/lenis';

interface ContactPageProps {
  onNavigateShop: () => void;
  onNavigateVet: () => void;
  onNavigateBlog: () => void;
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateShop,
  onNavigateVet,
  onNavigateBlog,
  onNavigateHome,
}) => {
  const formSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToForm = () => {
    if (formSectionRef.current) {
      scrollTo(formSectionRef.current, { offset: -80 });
    }
  };

  return (
    <div className="bg-[#F7F6ED] min-h-screen">
      {/* 1. Welcoming Hero */}
      <ContactHero />

      {/* 2. Responsive Form and Info Layout */}
      <section ref={formSectionRef} className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Contact Details (Left 5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ContactInfo />
            </div>

            {/* Direct Form (Right 7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Helpful Alternatives */}
      <ContactAlternatives
        onNavigateShop={onNavigateShop}
        onNavigateVet={onNavigateVet}
        onNavigateBlog={onNavigateBlog}
      />

      {/* 4. Warm Closing CTA */}
      <ContactClosingCTA
        onScrollToForm={handleScrollToForm}
      />
    </div>
  );
};
