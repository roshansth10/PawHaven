import React, { useState, useMemo } from 'react';
import { Product } from '../../types';
import { SHOP_PRODUCTS } from '../../data/shopProducts';
import { ProductCard } from './ProductCard';
import { QuickViewModal } from './QuickViewModal';

interface ShopProductListingProps {
  selectedCategory: string | null;
  onCategoryChange: (cat: string | null) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  showToast: (msg: string) => void;
}

export const ShopProductListing: React.FC<ShopProductListingProps> = ({
  selectedCategory,
  onCategoryChange,
  onAddToCart,
  showToast,
}) => {
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPetType, setSelectedPetType] = useState<'All' | 'Dog' | 'Cat'>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [selectedPriceTier, setSelectedPriceTier] = useState<string>('All');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('featured');

  // Mobile Filter Drawer
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Quick View State
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  // Wishlist State (stored in component / could be local storage)
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pawhaven_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(product.id);
      const next = exists ? prev.filter((id) => id !== product.id) : [...prev, product.id];
      try {
        localStorage.setItem('pawhaven_wishlist', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      showToast(exists ? `Removed ${product.name} from wishlist.` : `Saved ${product.name} to wishlist!`);
      return next;
    });
  };

  // Distinct Brands from data
  const brands = useMemo(() => {
    const list = Array.from(new Set(SHOP_PRODUCTS.map((p) => p.brand))).sort();
    return ['All', ...list];
  }, []);

  // Distinct Categories from data
  const categories = useMemo(() => {
    const list = Array.from(new Set(SHOP_PRODUCTS.map((p) => p.category))).sort();
    return ['All', ...list];
  }, []);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return SHOP_PRODUCTS.filter((product) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesCategory && !matchesDesc) {
          return false;
        }
      }

      // 2. Pet Type
      if (selectedPetType !== 'All') {
        if (product.petType && product.petType !== 'Both' && product.petType !== selectedPetType) {
          return false;
        }
      }

      // 3. Category
      if (selectedCategory && selectedCategory !== 'All') {
        const match =
          product.category.toLowerCase() === selectedCategory.toLowerCase() ||
          product.category.toLowerCase().includes(selectedCategory.toLowerCase());
        if (!match) return false;
      }

      // 4. Brand
      if (selectedBrand !== 'All') {
        if (product.brand !== selectedBrand) return false;
      }

      // 5. Price Tier
      if (selectedPriceTier === 'under-1000') {
        if (product.price >= 1000) return false;
      } else if (selectedPriceTier === '1000-2500') {
        if (product.price < 1000 || product.price > 2500) return false;
      } else if (selectedPriceTier === '2500-5000') {
        if (product.price < 2500 || product.price > 5000) return false;
      } else if (selectedPriceTier === 'above-5000') {
        if (product.price <= 5000) return false;
      }

      // 6. Stock
      if (inStockOnly && !product.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') {
        return a.price - b.price;
      }
      if (sortBy === 'price-high') {
        return b.price - a.price;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      // 'featured' default
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [
    searchQuery,
    selectedPetType,
    selectedCategory,
    selectedBrand,
    selectedPriceTier,
    inStockOnly,
    sortBy,
  ]);

  const activeFilterCount =
    (selectedCategory && selectedCategory !== 'All' ? 1 : 0) +
    (selectedPetType !== 'All' ? 1 : 0) +
    (selectedBrand !== 'All' ? 1 : 0) +
    (selectedPriceTier !== 'All' ? 1 : 0) +
    (inStockOnly ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedPetType('All');
    onCategoryChange(null);
    setSelectedBrand('All');
    setSelectedPriceTier('All');
    setInStockOnly(false);
  };

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setQuickViewOpen(true);
  };

  const handleQuickViewAddToCart = (product: Product, quantity: number) => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
  };

  return (
    <section id="shop-products" className="py-12 bg-[#F7F6ED] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Controls Bar: Search & Sort & Mobile Filter Trigger */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-black/5 mb-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input with CSS Search Icon */}
            <div className="relative flex-1 max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#203D40]/50">
                <span className="css-icon-search" aria-hidden="true"></span>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dog food, cat treats, grooming supplies, toys..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#F7F6ED] text-[#203D40] text-sm focus:outline-none focus:ring-2 focus:ring-[#24543D] placeholder:text-[#203D40]/40 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#203D40]/60 hover:text-[#203D40] cursor-pointer"
                  aria-label="Clear search"
                >
                  <span className="text-xs font-bold bg-[#EBECE4] rounded-full w-5 h-5 flex items-center justify-center">
                    &times;
                  </span>
                </button>
              )}
            </div>

            {/* Right Group: Sort & Mobile Filter Toggle */}
            <div className="flex items-center gap-3 justify-between md:justify-end">
              
              {/* Mobile Filter Trigger Button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#DDEBD5] text-[#173D31] font-bold text-xs hover:bg-[#24543D] hover:text-white transition-colors cursor-pointer"
              >
                <span className="css-icon-filter" aria-hidden="true"></span>
                <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
              </button>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2">
                <label htmlFor="shop-sort" className="text-xs font-bold text-[#203D40]/70 shrink-0">
                  Sort:
                </label>
                <div className="relative">
                  <select
                    id="shop-sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none pl-3 pr-8 py-2 rounded-xl bg-[#F7F6ED] text-[#173D31] font-semibold text-xs border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#24543D] cursor-pointer"
                  >
                    <option value="featured">Featured Curations</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Customer Rating</option>
                    <option value="name">Product Name: A to Z</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-[#203D40]/60">
                    <span className="css-chevron-down" aria-hidden="true"></span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Active Filter Chips / Pills */}
          {activeFilterCount > 0 && (
            <div className="mt-4 pt-3 border-t border-black/5 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#203D40]/60 mr-1">Active filters:</span>
              
              {selectedCategory && selectedCategory !== 'All' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDEBD5] text-[#173D31] text-xs font-semibold">
                  <span>Category: {selectedCategory}</span>
                  <button
                    onClick={() => onCategoryChange(null)}
                    className="hover:text-red-600 font-bold ml-1 cursor-pointer"
                    aria-label="Remove category filter"
                  >
                    &times;
                  </button>
                </span>
              )}

              {selectedPetType !== 'All' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDEBD5] text-[#173D31] text-xs font-semibold">
                  <span>Pet: {selectedPetType}</span>
                  <button
                    onClick={() => setSelectedPetType('All')}
                    className="hover:text-red-600 font-bold ml-1 cursor-pointer"
                    aria-label="Remove pet filter"
                  >
                    &times;
                  </button>
                </span>
              )}

              {selectedBrand !== 'All' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDEBD5] text-[#173D31] text-xs font-semibold">
                  <span>Brand: {selectedBrand}</span>
                  <button
                    onClick={() => setSelectedBrand('All')}
                    className="hover:text-red-600 font-bold ml-1 cursor-pointer"
                    aria-label="Remove brand filter"
                  >
                    &times;
                  </button>
                </span>
              )}

              {selectedPriceTier !== 'All' && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDEBD5] text-[#173D31] text-xs font-semibold">
                  <span>Price filtered</span>
                  <button
                    onClick={() => setSelectedPriceTier('All')}
                    className="hover:text-red-600 font-bold ml-1 cursor-pointer"
                    aria-label="Remove price filter"
                  >
                    &times;
                  </button>
                </span>
              )}

              {inStockOnly && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDEBD5] text-[#173D31] text-xs font-semibold">
                  <span>In Stock</span>
                  <button
                    onClick={() => setInStockOnly(false)}
                    className="hover:text-red-600 font-bold ml-1 cursor-pointer"
                    aria-label="Remove in-stock filter"
                  >
                    &times;
                  </button>
                </span>
              )}

              {searchQuery.trim() && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DDEBD5] text-[#173D31] text-xs font-semibold">
                  <span>&quot;{searchQuery}&quot;</span>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="hover:text-red-600 font-bold ml-1 cursor-pointer"
                    aria-label="Remove search query"
                  >
                    &times;
                  </button>
                </span>
              )}

              <button
                onClick={resetAllFilters}
                className="text-xs font-bold text-[#24543D] hover:underline ml-2 cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Main Grid: Desktop Sidebar Filter + Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Left Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 bg-white rounded-2xl p-6 border border-black/5 shadow-sm sticky top-28 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-black/5">
              <h3 className="font-bold text-[#173D31] text-base flex items-center gap-2">
                <span className="css-icon-filter text-[#24543D]" aria-hidden="true"></span>
                <span>Refine Products</span>
              </h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={resetAllFilters}
                  className="text-xs font-semibold text-[#24543D] hover:underline cursor-pointer"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Pet Type Filter */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#203D40]/60 mb-2.5 block">
                Pet Companion
              </label>
              <div className="flex rounded-xl bg-[#F7F6ED] p-1 gap-1">
                {(['All', 'Dog', 'Cat'] as const).map((pet) => (
                  <button
                    key={pet}
                    onClick={() => setSelectedPetType(pet)}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      selectedPetType === pet
                        ? 'bg-[#24543D] text-white shadow-xs'
                        : 'text-[#203D40]/70 hover:text-[#173D31]'
                    }`}
                  >
                    {pet === 'All' ? 'All Pets' : `${pet}s`}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#203D40]/60 mb-2.5 block">
                Category
              </label>
              <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
                <button
                  onClick={() => onCategoryChange(null)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center justify-between ${
                    !selectedCategory || selectedCategory === 'All'
                      ? 'bg-[#DDEBD5] text-[#173D31] font-bold'
                      : 'text-[#203D40]/80 hover:bg-[#F7F6ED]'
                  }`}
                >
                  <span>All Categories</span>
                  <span className="text-[11px] text-[#203D40]/50">{SHOP_PRODUCTS.length}</span>
                </button>
                {categories.filter((c) => c !== 'All').map((cat) => {
                  const isSelected = selectedCategory === cat;
                  const count = SHOP_PRODUCTS.filter((p) => p.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => onCategoryChange(isSelected ? null : cat)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#DDEBD5] text-[#173D31] font-bold'
                          : 'text-[#203D40]/80 hover:bg-[#F7F6ED]'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className="text-[11px] text-[#203D40]/50">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#203D40]/60 mb-2.5 block">
                Brand
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#F7F6ED] text-xs text-[#173D31] font-medium border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#24543D] cursor-pointer"
              >
                <option value="All">All Brands</option>
                {brands.filter((b) => b !== 'All').map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Tier Filter */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#203D40]/60 mb-2.5 block">
                Price (NPR)
              </label>
              <div className="space-y-1.5">
                {[
                  { id: 'All', label: 'All Prices' },
                  { id: 'under-1000', label: 'Under Rs. 1,000' },
                  { id: '1000-2500', label: 'Rs. 1,000 &mdash; Rs. 2,500' },
                  { id: '2500-5000', label: 'Rs. 2,500 &mdash; Rs. 5,000' },
                  { id: 'above-5000', label: 'Above Rs. 5,000' },
                ].map((tier) => (
                  <label
                    key={tier.id}
                    className="flex items-center gap-2.5 text-xs text-[#203D40]/80 cursor-pointer select-none hover:text-[#173D31]"
                  >
                    <input
                      type="radio"
                      name="price-tier-desktop"
                      checked={selectedPriceTier === tier.id}
                      onChange={() => setSelectedPriceTier(tier.id)}
                      className="accent-[#24543D] w-3.5 h-3.5"
                    />
                    <span dangerouslySetInnerHTML={{ __html: tier.label }}></span>
                  </label>
                ))}
              </div>
            </div>

            {/* In-Stock Filter */}
            <div className="pt-2 border-t border-black/5">
              <label className="flex items-center gap-2.5 text-xs font-semibold text-[#173D31] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="accent-[#24543D] w-4 h-4 rounded"
                />
                <span>In Stock Items Only</span>
              </label>
            </div>

          </aside>

          {/* Product Grid Area (Right) */}
          <div className="lg:col-span-9 flex flex-col">
            
            {/* Header info row */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs sm:text-sm font-semibold text-[#203D40]/70">
                Showing <strong className="text-[#173D31] font-bold">{filteredProducts.length}</strong> of {SHOP_PRODUCTS.length} products
              </div>
              {filteredProducts.length === 0 && (
                <button
                  onClick={resetAllFilters}
                  className="text-xs font-bold text-[#24543D] hover:underline cursor-pointer"
                >
                  Clear all search &amp; filter tags
                </button>
              )}
            </div>

            {/* Grid of Product Cards */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={(p) => {
                      onAddToCart(p);
                      showToast(`Added ${p.name} to cart!`);
                    }}
                    onQuickView={openQuickView}
                    isWishlisted={wishlistIds.includes(product.id)}
                    onToggleWishlist={toggleWishlist}
                  />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-white rounded-3xl p-10 sm:p-14 text-center border border-black/5 shadow-sm max-w-lg mx-auto w-full">
                <div className="w-16 h-16 rounded-full bg-[#DDEBD5] text-[#24543D] flex items-center justify-center mx-auto mb-5">
                  <span className="css-icon-search text-xl" aria-hidden="true"></span>
                </div>
                <h3 className="text-xl font-bold text-[#173D31] mb-2">
                  No Pet Products Found
                </h3>
                <p className="text-sm text-[#203D40]/70 leading-relaxed mb-6 font-normal">
                  We could not find any products matching your current filters or search query. Try broadening your criteria or reset filters.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#24543D] text-white font-bold text-xs hover:bg-[#173D31] transition-colors cursor-pointer shadow-md"
                >
                  Reset All Filters
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Mobile Filters Slide-in Drawer */}
      {mobileFiltersOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setMobileFiltersOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Filter products"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-white h-full shadow-2xl flex flex-col p-6 overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-black/5 mb-6">
              <h3 className="font-bold text-[#173D31] text-lg flex items-center gap-2">
                <span className="css-icon-filter text-[#24543D]" aria-hidden="true"></span>
                <span>Filters &bull; {filteredProducts.length} items</span>
              </h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-8 h-8 rounded-full bg-[#F7F6ED] text-[#203D40] flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
                aria-label="Close filters drawer"
              >
                <span className="css-icon-close" aria-hidden="true"></span>
              </button>
            </div>

            {/* Pet Type */}
            <div className="mb-6">
              <label className="text-xs font-bold uppercase tracking-wider text-[#203D40]/60 mb-2 block">
                Pet Companion
              </label>
              <div className="flex rounded-xl bg-[#F7F6ED] p-1 gap-1">
                {(['All', 'Dog', 'Cat'] as const).map((pet) => (
                  <button
                    key={pet}
                    onClick={() => setSelectedPetType(pet)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                      selectedPetType === pet
                        ? 'bg-[#24543D] text-white shadow-xs'
                        : 'text-[#203D40]/70'
                    }`}
                  >
                    {pet === 'All' ? 'All Pets' : `${pet}s`}
                  </button>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className="mb-6">
              <label className="text-xs font-bold uppercase tracking-wider text-[#203D40]/60 mb-2 block">
                Category
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => onCategoryChange(null)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer ${
                    !selectedCategory || selectedCategory === 'All'
                      ? 'bg-[#DDEBD5] text-[#173D31]'
                      : 'hover:bg-[#F7F6ED] text-[#203D40]'
                  }`}
                >
                  All Categories
                </button>
                {categories.filter((c) => c !== 'All').map((cat) => (
                  <button
                    key={cat}
                    onClick={() => onCategoryChange(selectedCategory === cat ? null : cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#DDEBD5] text-[#173D31]'
                        : 'hover:bg-[#F7F6ED] text-[#203D40]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand */}
            <div className="mb-6">
              <label className="text-xs font-bold uppercase tracking-wider text-[#203D40]/60 mb-2 block">
                Brand
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-[#F7F6ED] text-xs font-medium border border-black/5"
              >
                <option value="All">All Brands</option>
                {brands.filter((b) => b !== 'All').map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Tier */}
            <div className="mb-6">
              <label className="text-xs font-bold uppercase tracking-wider text-[#203D40]/60 mb-2 block">
                Price Range
              </label>
              <div className="space-y-2">
                {[
                  { id: 'All', label: 'All Prices' },
                  { id: 'under-1000', label: 'Under Rs. 1,000' },
                  { id: '1000-2500', label: 'Rs. 1,000 - Rs. 2,500' },
                  { id: '2500-5000', label: 'Rs. 2,500 - Rs. 5,000' },
                  { id: 'above-5000', label: 'Above Rs. 5,000' },
                ].map((tier) => (
                  <label key={tier.id} className="flex items-center gap-2 text-xs font-medium text-[#203D40]">
                    <input
                      type="radio"
                      name="price-tier-mobile"
                      checked={selectedPriceTier === tier.id}
                      onChange={() => setSelectedPriceTier(tier.id)}
                      className="accent-[#24543D]"
                    />
                    <span>{tier.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* In-Stock */}
            <div className="mb-8 pt-2 border-t border-black/5">
              <label className="flex items-center gap-2 text-xs font-semibold text-[#173D31]">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="accent-[#24543D] w-4 h-4 rounded"
                />
                <span>In Stock Items Only</span>
              </label>
            </div>

            {/* Drawer Actions */}
            <div className="mt-auto pt-4 border-t border-black/5 flex items-center gap-3">
              <button
                onClick={resetAllFilters}
                className="flex-1 py-3 rounded-xl bg-[#F7F6ED] text-[#173D31] font-bold text-xs hover:bg-[#EBECE4] transition-colors cursor-pointer"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-3 rounded-xl bg-[#24543D] text-white font-bold text-xs hover:bg-[#173D31] transition-colors cursor-pointer"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
        onAddToCart={handleQuickViewAddToCart}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={toggleWishlist}
      />

    </section>
  );
};
