import React from 'react';
import { SHOP_CATEGORIES, ShopCategory } from '../../data/shopProducts';

interface ShopCategoriesProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export const ShopCategories: React.FC<ShopCategoriesProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section className="py-10 bg-[#F7F6ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold text-[#24543D] uppercase tracking-wider mb-1">
              Browse Collections
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#173D31] tracking-tight">
              Shop by Category
            </h2>
          </div>

          {selectedCategory && (
            <button
              onClick={() => onSelectCategory(null)}
              className="text-xs font-bold text-[#24543D] hover:underline flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
            >
              <span>View all categories</span>
              <span className="css-arrow-right" aria-hidden="true"></span>
            </button>
          )}
        </div>

        {/* 7 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {SHOP_CATEGORIES.map((cat: ShopCategory) => {
            const isSelected = selectedCategory === cat.name || selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(isSelected ? null : cat.name)}
                className={`group flex flex-col text-left rounded-2xl p-3 transition-all duration-300 relative overflow-hidden cursor-pointer border ${
                  isSelected
                    ? 'bg-white border-[#24543D] ring-2 ring-[#24543D]/20 shadow-md'
                    : 'bg-white/80 hover:bg-white border-black/5 hover:border-[#24543D]/20 hover:shadow-sm'
                }`}
              >
                {/* Image Container with organic curve */}
                <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 bg-[#EBECE4] relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-[#24543D]/20 flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-[#24543D] text-white flex items-center justify-center shadow">
                        <span className="css-checkmark" aria-hidden="true"></span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1">
                  <span className={`text-sm font-bold leading-tight mb-1 transition-colors ${
                    isSelected ? 'text-[#24543D]' : 'text-[#173D31] group-hover:text-[#24543D]'
                  }`}>
                    {cat.name}
                  </span>
                  <span className="text-[11px] text-[#203D40]/60 font-medium">
                    {cat.itemCount} items
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
