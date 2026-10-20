import React, { useState } from 'react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
  isWishlisted = false,
  onToggleWishlist,
}) => {
  const [wishlistActive, setWishlistActive] = useState(isWishlisted);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextState = !wishlistActive;
    setWishlistActive(nextState);
    if (onToggleWishlist) {
      onToggleWishlist(product);
    }
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  // Render 5 stars cleanly
  const fullStars = Math.floor(product.rating);

  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-[#24543D]/20 shadow-sm hover:shadow-xl transition-all duration-300 relative">
      
      {/* Product Image Area */}
      <div 
        onClick={() => onQuickView(product)}
        className="relative w-full aspect-square bg-[#F7F6ED] overflow-hidden cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') onQuickView(product); }}
        aria-label={`View details for ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge (Top-Left) */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#24543D] text-white shadow-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Button (Top-Right) */}
        <button
          onClick={handleWishlistClick}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#203D40] hover:text-[#F59562] shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
          aria-label={wishlistActive ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <span className={`css-heart ${wishlistActive ? 'text-[#F59562]' : 'text-gray-400'}`} aria-hidden="true"></span>
        </button>

        {/* Quick View Button Hover Overlay (Desktop) */}
        <div className="absolute inset-x-3 bottom-3 z-10 hidden sm:flex opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full py-2.5 rounded-xl bg-white/95 backdrop-blur-xs text-[#173D31] text-xs font-bold hover:bg-[#24543D] hover:text-white shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="css-icon-eye" aria-hidden="true"></span>
            <span>Quick View</span>
          </button>
        </div>

      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between gap-1 text-[10px] sm:text-[11px] font-semibold text-[#203D40]/60 uppercase tracking-wider mb-1.5">
            <span className="truncate max-w-[50%]">{product.brand}</span>
            <span className="truncate max-w-[50%] text-right">{product.category}</span>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-bold text-[#173D31] text-sm sm:text-base leading-snug line-clamp-2 hover:text-[#24543D] transition-colors cursor-pointer mb-2"
          >
            {product.name}
          </h3>

          {/* Ratings row */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex items-center gap-0.5" aria-label={`Rating ${product.rating} out of 5`}>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={i < fullStars ? 'css-star-filled' : 'css-star-empty'}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-xs font-bold text-[#173D31]">{product.rating.toFixed(1)}</span>
            <span className="text-[11px] text-[#203D40]/50 font-medium">({product.reviewCount})</span>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="pt-3 border-t border-black/5 flex items-center justify-between gap-2 mt-auto">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-bold text-[#173D31]">
                Rs. {product.price.toLocaleString()}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-xs text-[#203D40]/40 line-through">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-[10px] text-[#24543D] font-bold">
                Save Rs. {(product.originalPrice - product.price).toLocaleString()}
              </span>
            )}
          </div>

          {/* Add to Cart button */}
          <button
            onClick={handleAddToCartClick}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#DDEBD5] text-[#173D31] font-bold text-xs hover:bg-[#24543D] hover:text-white active:scale-95 transition-all cursor-pointer shrink-0"
            aria-label={`Add ${product.name} to cart`}
          >
            <span className="css-icon-plus" aria-hidden="true"></span>
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>

      </div>

    </article>
  );
};
