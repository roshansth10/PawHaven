import React, { useState, useEffect } from 'react';
import { Product } from '../../types';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  isWishlisted = false,
  onToggleWishlist,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isSaved, setIsSaved] = useState(isWishlisted);

  useEffect(() => {
    setIsSaved(isWishlisted);
    setQuantity(1);
  }, [product, isWishlisted]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  const handleToggle = () => {
    setIsSaved(!isSaved);
    if (onToggleWishlist) onToggleWishlist(product);
  };

  const fullStars = Math.floor(product.rating);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-black/10 flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 hover:bg-[#F7F6ED] text-[#203D40] flex items-center justify-center shadow-sm transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <span className="css-icon-close" aria-hidden="true"></span>
        </button>

        {/* Product Image Frame */}
        <div className="w-full md:w-1/2 bg-[#F7F6ED] relative aspect-square md:aspect-auto flex items-center justify-center p-6 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-2xl max-h-[380px]"
          />
          {product.badge && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#24543D] text-white">
                {product.badge}
              </span>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Brand, Category & Pet Type */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#24543D] uppercase tracking-wider mb-2">
              <span>{product.brand}</span>
              <span>&bull;</span>
              <span>{product.category}</span>
              {product.petType && (
                <>
                  <span>&bull;</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#DDEBD5] text-[#173D31] text-[10px] font-bold">
                    For {product.petType}
                  </span>
                </>
              )}
            </div>

            {/* Title */}
            <h2 id="quick-view-title" className="text-xl sm:text-2xl font-bold text-[#173D31] leading-snug mb-3">
              {product.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < fullStars ? 'css-star-filled' : 'css-star-empty'}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-[#173D31]">{product.rating.toFixed(1)}</span>
              <span className="text-xs text-[#203D40]/60 font-medium">({product.reviewCount} reviews)</span>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 mb-4 pb-4 border-b border-black/5">
              <span className="text-2xl font-extrabold text-[#173D31]">
                Rs. {product.price.toLocaleString()}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <>
                  <span className="text-sm text-[#203D40]/40 line-through">
                    Rs. {product.originalPrice.toLocaleString()}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#DDEBD5] text-[#24543D] text-xs font-bold">
                    Save Rs. {(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-[#203D40]/80 leading-relaxed mb-6 font-normal">
              {product.description}
            </p>
          </div>

          <div>
            {/* Quantity Selector & Action Buttons */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center border border-black/10 rounded-xl bg-[#F7F6ED] p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[#173D31] hover:bg-white transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-sm text-[#173D31]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[#173D31] hover:bg-white transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAdd}
                className="flex-1 py-3 px-6 rounded-xl bg-[#24543D] text-white font-bold text-sm tracking-wide hover:bg-[#173D31] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#24543D]/20"
              >
                <span className="css-icon-plus" aria-hidden="true"></span>
                <span>Add to Cart &bull; Rs. {(product.price * quantity).toLocaleString()}</span>
              </button>

              {/* Wishlist toggle */}
              <button
                onClick={handleToggle}
                className="w-11 h-11 rounded-xl border border-black/10 flex items-center justify-center text-[#203D40] hover:text-[#F59562] transition-colors cursor-pointer"
                aria-label="Save to wishlist"
              >
                <span className={`css-heart ${isSaved ? 'text-[#F59562]' : 'text-gray-400'}`} aria-hidden="true"></span>
              </button>
            </div>

            {/* Trust Micro-notes */}
            <div className="pt-3 border-t border-black/5 text-[11px] text-[#203D40]/60 space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="css-checkmark text-[#24543D]" aria-hidden="true"></span>
                <span>Guaranteed genuine product with verified batch expiry</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="css-checkmark text-[#24543D]" aria-hidden="true"></span>
                <span>Prompt dispatch across Kathmandu, Lalitpur &amp; Bhaktapur</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
