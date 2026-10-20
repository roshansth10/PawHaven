import React from 'react';

export type BlogCategoryOption =
  | 'All stories'
  | 'Dog care'
  | 'Cat care'
  | 'Nutrition'
  | 'Health and wellness'
  | 'Everyday life';

interface BlogCategoriesProps {
  categories: BlogCategoryOption[];
  activeCategory: BlogCategoryOption;
  onSelectCategory: (category: BlogCategoryOption) => void;
  totalArticlesCount: number;
  filteredCount: number;
}

export const BlogCategories: React.FC<BlogCategoriesProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  totalArticlesCount,
  filteredCount,
}) => {
  return (
    <div className="py-6 sm:py-8 bg-[#F7F6ED] border-b border-[#24543D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          {/* Category Filter Buttons */}
          <div className="w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-none flex items-center gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => onSelectCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-[#24543D] ${
                    isActive
                      ? 'bg-[#24543D] text-white shadow-sm'
                      : 'bg-white/80 hover:bg-[#DDEBD5] text-[#203D40]/80 hover:text-[#24543D] border border-[#24543D]/10'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Current view indicator & reset */}
          <div className="text-xs text-[#203D40]/70 flex items-center gap-3 shrink-0 self-end sm:self-center">
            <span>
              Showing <strong className="text-[#24543D]">{filteredCount}</strong> of {totalArticlesCount} articles
            </span>
            {activeCategory !== 'All stories' && (
              <button
                onClick={() => onSelectCategory('All stories')}
                className="text-xs text-[#24543D] font-bold underline underline-offset-4 hover:text-[#173D31] transition-colors"
              >
                Reset filter
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
