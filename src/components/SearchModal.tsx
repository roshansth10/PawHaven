import React, { useState } from 'react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase())
      )
    : products;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#173D31]/40 backdrop-blur-xs transition-opacity"
      />

      <div
        data-lenis-prevent
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#24543D]/10 overflow-hidden z-10 animate-fadeIn"
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 bg-[#F7F6ED] border-b border-[#24543D]/10 flex items-center gap-3">
          <span className="css-icon-search text-[#24543D] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Royal Canin, Whiskas, Toys, Grooming..."
            className="w-full bg-transparent text-[#203D40] placeholder-[#203D40]/50 text-base sm:text-lg font-semibold focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#DDEBD5] flex items-center justify-center text-[#203D40] shrink-0 transition-colors"
            aria-label="Close search"
          >
            <span className="css-icon-close text-[#24543D]" />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-5 py-3 bg-white border-b border-[#24543D]/10 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
          <span className="text-[#203D40]/60 font-semibold shrink-0">Popular:</span>
          {['Royal Canin', 'Whiskas', 'Toy Ball', 'Brush', 'Dog Food'].map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-3 py-1 rounded-full bg-[#DDEBD5]/50 hover:bg-[#DDEBD5] text-[#24543D] font-bold shrink-0 transition-colors"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-4 sm:p-5 space-y-2.5">
          {filtered.length === 0 ? (
            <div className="text-center py-8 text-[#203D40]/60 text-sm">
              No matching products found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filtered.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  onSelectProduct(prod);
                  onClose();
                }}
                className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#F7F6ED] cursor-pointer transition-colors border border-transparent hover:border-[#24543D]/10"
              >
                <div className="w-14 h-14 rounded-xl bg-[#F7F6ED] p-1.5 flex items-center justify-center shrink-0 border border-[#24543D]/10 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <span className="text-[11px] font-bold text-[#24543D] uppercase">
                    {prod.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#203D40] truncate">
                    {prod.name}
                  </h4>
                  <span className="text-xs font-extrabold text-[#24543D]">
                    NPR {prod.price.toLocaleString()}
                  </span>
                </div>
                <span className="text-xs font-bold text-[#24543D] px-3 py-1.5 rounded-full bg-[#DDEBD5]/60 hover:bg-[#DDEBD5] transition-colors shrink-0">
                  Add +
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
