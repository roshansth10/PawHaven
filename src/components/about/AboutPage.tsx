import React, { useRef } from 'react';
import { AboutHero } from './AboutHero';
import { AboutStory } from './AboutStory';
import { AboutValues } from './AboutValues';
import { AboutDifference } from './AboutDifference';
import { AboutResponsible } from './AboutResponsible';
import { AboutClosingCTA } from './AboutClosingCTA';

interface AboutPageProps {
  onNavigateShop: () => void;
  onNavigateVet: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateShop,
  onNavigateVet,
}) => {
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={pageRef} className="flex flex-col bg-[#F7F4EA] min-h-screen">
      {/* 1. Asymmetrical Editorial Hero */}
      <AboutHero
        onShopClick={onNavigateShop}
        onVetClick={onNavigateVet}
      />

      {/* 2. Narrative Brand Story */}
      <AboutStory />

      {/* 3. Core Principles (Editorial numbered layout, not 4 cards) */}
      <AboutValues />

      {/* 4. Products & Care Together */}
      <AboutDifference
        onShopClick={onNavigateShop}
        onVetClick={onNavigateVet}
      />

      {/* 5. Responsible Pet Care in Real Life */}
      <AboutResponsible />

      {/* 6. Warm Closing CTA */}
      <AboutClosingCTA
        onShopClick={onNavigateShop}
        onVetClick={onNavigateVet}
      />
    </div>
  );
};
