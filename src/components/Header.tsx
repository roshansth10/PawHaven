import React, { useState } from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenAccount,
  onNavigate,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'vet', label: 'Veterinary Care' },
    { id: 'about', label: 'About Us' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBF6] border-b border-black/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo (Left) */}
        <div
          onClick={() => {
            handleNavClick('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer group flex items-center"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleNavClick('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          aria-label="PawHaven Home"
        >
          <img
            src="/images/logofinal.png"
            alt="PawHaven — Pet Store &amp; Veterinary Care"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            draggable={false}
          />
        </div>

        {/* Center Navigation (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 text-sm font-semibold transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#24543D] rounded ${
                  isActive
                    ? 'text-[#24543D] font-bold'
                    : 'text-[#203D40]/80 hover:text-[#24543D]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#24543D] rounded-full animate-fadeIn" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Three plain outline icons (Search, User, Cart) */}
        <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
          {/* Search Control */}
          <button
            onClick={onOpenSearch}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#203D40] hover:text-[#24543D] hover:bg-black/5 transition-colors focus-visible:ring-2 focus-visible:ring-[#24543D] outline-none"
            title="Search products & services"
            aria-label="Open search dialog"
          >
            <Search className="w-5 h-5 stroke-[1.8]" />
          </button>

          {/* User / Account Control */}
          <button
            onClick={onOpenAccount}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#203D40] hover:text-[#24543D] hover:bg-black/5 transition-colors focus-visible:ring-2 focus-visible:ring-[#24543D] outline-none"
            title="Account login"
            aria-label="Open account menu"
          >
            <User className="w-5 h-5 stroke-[1.8]" />
          </button>

          {/* Cart Control with small dark-green badge showing cartCount */}
          <button
            onClick={onOpenCart}
            className="relative w-9 h-9 rounded-full flex items-center justify-center text-[#203D40] hover:text-[#24543D] hover:bg-black/5 transition-colors focus-visible:ring-2 focus-visible:ring-[#24543D] outline-none"
            title="Shopping Cart"
            aria-label={`Shopping Cart with ${cartCount} items`}
          >
            <ShoppingCart className="w-5 h-5 stroke-[1.8]" />
            <span className="absolute -top-1 -right-1 bg-[#24543D] text-[#FFFFFF] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg flex flex-col items-center justify-center space-y-1 text-[#203D40] hover:bg-black/5 transition-colors focus-visible:ring-2 focus-visible:ring-[#24543D] outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`w-4 h-[2px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''
              }`}
            />
            <span
              className={`w-4 h-[2px] bg-current transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-4 h-[2px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBFBF6] border-b border-black/10 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-left transition-colors ${
                    isActive
                      ? 'bg-[#DDEBD5] text-[#24543D] font-bold'
                      : 'text-[#203D40] hover:bg-[#DDEBD5]/40'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#24543D]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-black/10 flex gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex-1 py-2.5 px-3 rounded-lg border border-[#24543D]/30 text-sm font-semibold text-[#24543D] flex items-center justify-center gap-2 hover:bg-[#DDEBD5]/40"
            >
              <Search className="w-4 h-4" />
              <span>Search Store</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="flex-1 py-2.5 px-3 rounded-lg bg-[#24543D] text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#173D31]"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Cart ({cartCount})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
