import React from 'react';

interface PawHavenLogoProps {
  /** Slightly smaller sizing for header use */
  compact?: boolean;
  /** Inverted colours for dark (footer) backgrounds: white text, yellow paw */
  inverted?: boolean;
}

export const PawHavenLogo: React.FC<PawHavenLogoProps> = ({
  compact = false,
  inverted = false,
}) => {
  const iconSize = compact ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-10 h-10';
  const iconColor = inverted ? 'text-[#FFD15C]' : 'text-[#24543D]';
  const titleSize = compact
    ? 'text-xl sm:text-2xl font-bold tracking-tight leading-none'
    : 'text-2xl font-bold tracking-tight leading-none';
  const titleColor = inverted ? 'text-[#FFFFFF]' : 'text-[#203D40]';
  const subtitleColor = inverted ? 'text-[#DDEBD5]/80' : 'text-[#203D40]/70';
  const subtitleSize = compact ? 'text-[11px] sm:text-xs' : 'text-xs';

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none shrink-0">
      {/* Paw-inside-a-heart icon */}
      <div
        className={`${iconSize} ${iconColor} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
      >
        <svg className="w-full h-full" viewBox="0 0 36 36" fill="currentColor" aria-hidden="true">
          {/* Paw toes forming top crown of the heart */}
          <circle cx="8" cy="8.5" r="3" />
          <circle cx="14" cy="5" r="3.2" />
          <circle cx="22" cy="5" r="3.2" />
          <circle cx="28" cy="8.5" r="3" />
          {/* Heart-shaped main pad below */}
          <path d="M18 31.5 C12.5 26 7 20.5 7 15 C7 10.8 10 7.8 14 7.8 C16.4 7.8 17.4 9 18 9.8 C18.6 9 19.6 7.8 22 7.8 C26 7.8 29 10.8 29 15 C29 20.5 23.5 26 18 31.5 Z" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`${titleSize} ${titleColor}`}>PawHaven</span>
        <span className={`${subtitleSize} ${subtitleColor} font-normal leading-none mt-1`}>
          Pet Store &amp; Veterinary Care
        </span>
      </div>
    </div>
  );
};
