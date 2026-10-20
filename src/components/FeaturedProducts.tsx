import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { Product } from '../types';

interface FeaturedProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewAll: () => void;
  activeFilter?: string | null;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  onAddToCart,
  onViewAll,
  activeFilter,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  // Filter products if a category was clicked in category panel
  const displayedProducts = activeFilter
    ? products.filter(
        (p) =>
          p.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
          p.name.toLowerCase().includes(activeFilter.toLowerCase())
      )
    : products;

  // Use all products fallback if category filter returned 0
  const finalProducts =
    displayedProducts.length > 0 ? displayedProducts : products;

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced || !cardsContainerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsContainerRef.current?.querySelectorAll('.product-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [finalProducts]);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (!cardsContainerRef.current) return;
    const scrollAmount = 320;
    if (direction === 'prev') {
      cardsContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setScrollIndex((prev) => Math.max(0, prev - 1));
    } else {
      cardsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setScrollIndex((prev) => prev + 1);
    }
  };

  return (
    <section
      id="shop"
      ref={sectionRef}
      className="bg-[#F7F6ED] py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Left intro + Carousel controls right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-3 max-w-xl text-left">
            <span className="inline-block text-xs font-bold tracking-widest text-[#24543D] uppercase bg-[#DDEBD5] px-3.5 py-1 rounded-full border border-[#24543D]/20">
              FEATURED PRODUCTS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#203D40] tracking-tight leading-[1.15]">
              Top Picks for<br />
              Happy Pets
            </h2>

            <p className="text-base sm:text-lg text-[#203D40]/80 font-normal">
              High-quality food, toys, and essentials for your furry friends.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* View All Products button */}
            <button
              onClick={onViewAll}
              className="px-5 py-2.5 rounded-full border-2 border-[#24543D] text-[#24543D] hover:bg-[#24543D] hover:text-white font-bold text-xs sm:text-sm tracking-wide transition-all active:scale-95"
            >
              View All Products
            </button>

            {/* Carousel navigation buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => handleScroll('prev')}
                className="w-10 h-10 rounded-full bg-white border border-[#24543D]/20 flex items-center justify-center text-[#24543D] hover:bg-[#DDEBD5] transition-colors shadow-xs active:scale-90"
                aria-label="Previous products"
              >
                &larr;
              </button>
              <button
                onClick={() => handleScroll('next')}
                className="w-10 h-10 rounded-full bg-white border border-[#24543D]/20 flex items-center justify-center text-[#24543D] hover:bg-[#DDEBD5] transition-colors shadow-xs active:scale-90"
                aria-label="Next products"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Row / Grid */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 overflow-x-auto pb-4 pt-1 snap-x no-scrollbar"
        >
          {finalProducts.map((prod) => (
            <div
              key={prod.id}
              className="product-card group bg-[#FFFFFF] rounded-3xl p-5 sm:p-6 border border-[#24543D]/10 shadow-[0_4px_20px_-8px_rgba(32,61,64,0.08)] hover:shadow-[0_16px_32px_-8px_rgba(32,61,64,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative snap-center"
            >
              {/* Optional badge (Bestseller, Popular, Trending) */}
              {prod.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFD15C] text-[#203D40] shadow-xs">
                    {prod.badge}
                  </span>
                </div>
              )}

              {/* Product Photograph Container */}
              <div className="w-full h-56 sm:h-60 rounded-2xl bg-[#F7F6ED]/70 flex items-center justify-center p-4 overflow-hidden relative">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-500 drop-shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Product Info & Actions */}
              <div className="mt-4 sm:mt-5 text-left flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#24543D] uppercase tracking-wider block">
                    {prod.brand}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-[#203D40] group-hover:text-[#24543D] transition-colors mt-1 leading-snug line-clamp-1">
                    {prod.name}
                  </h3>

                  {/* Rating information with pure CSS stars */}
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="css-star-filled" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#203D40]">
                      {prod.rating}
                    </span>
                    <span className="text-[11px] text-[#203D40]/60">
                      ({prod.reviewCount})
                    </span>
                  </div>
                </div>

                {/* Price and Add to Cart Button */}
                <div className="flex items-center justify-between pt-4 mt-3 border-t border-[#24543D]/10">
                  <div>
                    <span className="text-lg sm:text-xl font-extrabold text-[#24543D] tracking-tight">
                      NPR {prod.price.toLocaleString()}
                    </span>
                    {prod.originalPrice && (
                      <span className="block text-xs text-[#203D40]/50 line-through">
                        NPR {prod.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Small green circular add-to-cart control built WITHOUT SVG */}
                  <button
                    onClick={() => onAddToCart(prod)}
                    className="w-10 h-10 rounded-full bg-[#24543D] text-[#F7F6ED] flex items-center justify-center hover:bg-[#173D31] active:scale-90 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-[#24543D] outline-none group/btn"
                    title={`Add ${prod.name} to cart`}
                    aria-label={`Add ${prod.name} to cart`}
                  >
                    <span className="css-icon-plus group-hover/btn:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
