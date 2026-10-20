import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Product } from '../../types';
import { ShopHero } from './ShopHero';
import { ShopCategories } from './ShopCategories';
import { ShopPromoBanner } from './ShopPromoBanner';
import { ShopProductListing } from './ShopProductListing';
import { ShopTrustStrip } from './ShopTrustStrip';

interface ShopPageProps {
  onAddToCart: (product: Product, quantity?: number) => void;
  onBookVetAppointment: (serviceName?: string) => void;
  showToast: (msg: string) => void;
  initialCategory?: string | null;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onAddToCart,
  onBookVetAppointment,
  showToast,
  initialCategory = null,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);
  const pageContainerRef = useRef<HTMLDivElement>(null);

  // Sync initialCategory when it changes externally
  useEffect(() => {
    if (initialCategory !== undefined) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Entrance GSAP animation
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.shop-fade-in', {
        y: 16,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        clearProps: 'all',
      });
    }, pageContainerRef);

    return () => ctx.revert();
  }, []);

  const scrollToProducts = () => {
    const el = document.getElementById('shop-products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (cat: string | null) => {
    setSelectedCategory(cat);
    if (cat) {
      showToast(`Filtered by ${cat}`);
      scrollToProducts();
    } else {
      showToast('Showing all categories');
    }
  };

  const handleExploreDailyEssentials = () => {
    setSelectedCategory(null);
    showToast('Browsing our top daily essentials collection');
    scrollToProducts();
  };

  return (
    <div ref={pageContainerRef} className="flex flex-col bg-[#F7F6ED] min-h-screen">
      {/* 1. Shop Hero Section */}
      <div className="shop-fade-in">
        <ShopHero
          onBrowseClick={scrollToProducts}
          onVetCareClick={() => onBookVetAppointment('General Checkups')}
        />
      </div>

      {/* 2. Visual Category Strip with local photos */}
      <div className="shop-fade-in">
        <ShopCategories
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />
      </div>

      {/* 3. Promotional Lifestyle Banner */}
      <div className="shop-fade-in">
        <ShopPromoBanner onExploreClick={handleExploreDailyEssentials} />
      </div>

      {/* 4. Main Product Listing with Search, Filters, Sorting, Grid, Modals */}
      <div className="shop-fade-in">
        <ShopProductListing
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategorySelect}
          onAddToCart={onAddToCart}
          showToast={showToast}
        />
      </div>

      {/* 5. Trust and Benefits Strip */}
      <div className="shop-fade-in">
        <ShopTrustStrip />
      </div>
    </div>
  );
};
