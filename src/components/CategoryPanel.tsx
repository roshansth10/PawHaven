import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface CategoryPanelProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
}

interface CategoryItemData {
  id: string;
  name: string;
  bgColor: string;
  iconColor: string;
  icon: React.ReactNode;
}

export const CategoryPanel: React.FC<CategoryPanelProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced || !panelRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(panelRef.current, {
        y: 15,
        duration: 0.5,
        ease: 'power2.out',
      });
    }, panelRef);

    return () => ctx.revert();
  }, []);

  const categories: CategoryItemData[] = [
    {
      id: 'dog-food',
      name: 'Dog Food',
      bgColor: '#24543D',
      iconColor: '#FFFFFF',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 16c0-3.5 2.5-6 9-6s9 2.5 9 6" />
          <path d="M5 16h22v2.5c0 4-4 6.5-11 6.5S5 22.5 5 18.5V16z" />
          <path d="M12 10V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      ),
    },
    {
      id: 'cat-food',
      name: 'Cat Food',
      bgColor: '#FFD15C',
      iconColor: '#203D40',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 11l3 4h12l3-4v10c0 5-4 8-9 8s-9-3-9-8V11z" />
          <circle cx="12.5" cy="18" r="1.5" fill="currentColor" />
          <circle cx="19.5" cy="18" r="1.5" fill="currentColor" />
          <path d="M15 21.5l1 1 1-1" />
          <path d="M9 19l-4-1M9 21l-4 1M23 19l4-1M23 21l4 1" />
        </svg>
      ),
    },
    {
      id: 'treats',
      name: 'Treats & Snacks',
      bgColor: '#F59562',
      iconColor: '#FFFFFF',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 7a2.5 2.5 0 0 1 3.5 3.5l-1 1 1 1a2.5 2.5 0 0 1-3.5 3.5l-8 8a2.5 2.5 0 0 1-3.5-3.5l1-1-1-1a2.5 2.5 0 0 1 3.5-3.5l8-8z" />
        </svg>
      ),
    },
    {
      id: 'toys',
      name: 'Toys',
      bgColor: '#DDEBD5',
      iconColor: '#203D40',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="10" />
          <path d="M9 16c0-3.5 3-6.5 7-7" />
          <path d="M23 16c0 3.5-3 6.5-7 7" />
          <line x1="7" y1="21" x2="25" y2="11" />
        </svg>
      ),
    },
    {
      id: 'grooming',
      name: 'Grooming Supplies',
      bgColor: '#FFEBA5',
      iconColor: '#203D40',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 25v-8a4 4 0 0 1 8 0v1" />
          <path d="M18 18h4l1 3h-6z" />
          <line x1="20" y1="24" x2="20" y2="26" strokeWidth="2.5" />
          <line x1="22" y1="24" x2="23" y2="26" strokeWidth="2.5" />
          <line x1="18" y1="24" x2="17" y2="26" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      id: 'accessories',
      name: 'Accessories',
      bgColor: '#DDEBD5',
      iconColor: '#203D40',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="13" r="7" />
          <path d="M19 19c2 4 5 5 8 5" />
          <circle cx="27" cy="24" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 'vet-services',
      name: 'Vet Services',
      bgColor: '#FFD15C',
      iconColor: '#203D40',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="10" />
          <path d="M16 11v10M11 16h10" strokeWidth="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative z-30 w-full overflow-hidden">
      {/* Full-width pale sage band extending behind top half of category card */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[#EFF5EA] pointer-events-none -z-10" />

      {/* Category Container: Top edge touches/overlaps bottom of hero dog and cat photo by 1-2px */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-1 sm:-mt-1.5 md:-mt-2">
        <div
          ref={panelRef}
          className="bg-[#FCFCF9]/95 backdrop-blur-sm rounded-[28px] sm:rounded-[36px] p-5 sm:p-7 md:p-8 shadow-[0_12px_40px_-10px_rgba(32,61,64,0.07)] border border-black/[0.04]"
        >
          <div className="flex lg:grid lg:grid-cols-7 gap-4 sm:gap-6 items-center justify-between overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`group flex flex-col items-center text-center p-2 sm:p-3 rounded-2xl min-w-[90px] sm:min-w-[100px] lg:min-w-0 flex-1 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#24543D] hover:-translate-y-1 ${
                    isSelected ? 'scale-105' : ''
                  }`}
                  aria-pressed={isSelected}
                >
                  {/* ~64px circle with line icon */}
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-108 shadow-xs"
                    style={{
                      backgroundColor: cat.bgColor,
                      color: cat.iconColor,
                    }}
                  >
                    {cat.icon}
                  </div>

                  {/* Bold label centered below */}
                  <span className="mt-2.5 sm:mt-3 text-xs sm:text-[13px] font-bold text-[#203D40] group-hover:text-[#24543D] transition-colors leading-tight whitespace-nowrap">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
