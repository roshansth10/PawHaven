import React, { useState, useRef } from 'react';
import { VetHero } from './VetHero';
import { VetServices } from './VetServices';
import { VetEditorial } from './VetEditorial';
import { VetProcess } from './VetProcess';
import { VetTeam } from './VetTeam';
import { VetAppointmentForm } from './VetAppointmentForm';
import { VetFAQ } from './VetFAQ';
import { VetClosingCTA } from './VetClosingCTA';

interface VetPageProps {
  showToast: (msg: string) => void;
  onNavigateShop?: () => void;
}

export const VetPage: React.FC<VetPageProps> = ({ showToast, onNavigateShop }) => {
  const [selectedService, setSelectedService] = useState<string>('General checkups');
  const pageRef = useRef<HTMLDivElement>(null);

  const scrollToAppointment = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
      showToast(`Selected "${serviceName}" for appointment request.`);
    }
    const el = document.getElementById('appointment-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={pageRef} className="flex flex-col bg-[#F7F4EA] min-h-screen">
      {/* 1. Hero */}
      <VetHero
        onBookAppointment={() => scrollToAppointment()}
        onExploreServices={scrollToServices}
      />

      {/* 2. Services Index (Editorial 2-column, not repetitive icon cards) */}
      <VetServices onSelectService={scrollToAppointment} />

      {/* 3. Care Philosophy (With candid pet consultation photo) */}
      <VetEditorial />

      {/* 4. What to Expect (3 Steps preparation) */}
      <VetProcess />

      {/* 5. Team & Clinical Standards (Genuine clinic photography) */}
      <VetTeam />

      {/* 6. Appointment Request Form */}
      <VetAppointmentForm
        initialService={selectedService}
        showToast={showToast}
      />

      {/* 7. FAQ Accordion */}
      <VetFAQ />

      {/* 8. Restrained Final CTA */}
      <VetClosingCTA
        onBookAppointment={() => scrollToAppointment()}
        onExploreShop={onNavigateShop}
      />
    </div>
  );
};
