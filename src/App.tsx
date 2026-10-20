import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryPanel } from './components/CategoryPanel';
import { TrustStrip } from './components/TrustStrip';
import { VeterinarySection } from './components/VeterinarySection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ShopPage } from './components/shop/ShopPage';
import { VetPage } from './components/vet/VetPage';
import { AboutPage } from './components/about/AboutPage';
import { BlogPage } from './components/blog/BlogPage';
import { ContactPage } from './components/contact/ContactPage';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { AppointmentModal } from './components/AppointmentModal';
import { AccountModal } from './components/AccountModal';
import { Toast } from './components/Toast';
import { Product, CartItem } from './types';
import { FEATURED_PRODUCTS } from './data/mockProducts';
import { initLenis, destroyLenis, scrollTo } from './lib/lenis';

// Register GSAP plugins safely
gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  // Initialize Lenis smooth scrolling with ScrollTrigger synchronization
  useEffect(() => {
    initLenis();
    return () => {
      destroyLenis();
    };
  }, []);

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('pawhaven_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const getSectionFromPath = (pathname: string): string => {
    if (pathname === '/shop') return 'shop';
    if (pathname === '/veterinary-care' || pathname === '/vet') return 'vet';
    if (pathname === '/about' || pathname === '/about-us') return 'about';
    if (pathname === '/blog' || pathname.startsWith('/blog')) return 'blog';
    if (pathname === '/contact' || pathname === '/contact-us') return 'contact';
    return 'home';
  };

  const [activeSection, setActiveSection] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return getSectionFromPath(window.location.pathname);
    }
    return 'home';
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Sync with browser back/forward buttons & update page title
  useEffect(() => {
    const handlePopState = () => {
      const nextSec = getSectionFromPath(window.location.pathname);
      setActiveSection(nextSec);
      scrollTo(0, { immediate: true });
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (activeSection === 'shop') {
        document.title = 'PawHaven — Premium Pet Supplies & Nutrition';
      } else if (activeSection === 'vet') {
        document.title = 'PawHaven — Compassionate Veterinary Care';
      } else if (activeSection === 'about') {
        document.title = 'PawHaven — About Us & Brand Story';
      } else if (activeSection === 'blog') {
        document.title = 'The PawHaven Journal — Pet Care Advice & Stories';
      } else if (activeSection === 'contact') {
        document.title = 'Contact Us — PawHaven Pet Store & Veterinary Care';
      } else {
        document.title = 'PawHaven — Pet Store & Veterinary Care';
      }
    }
  }, [activeSection]);

  // Modals & Drawers state
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  // Toast state
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setToastVisible(true);
  };

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('pawhaven_cart', JSON.stringify(cartItems));
    } catch (err) {
      console.error('Failed to save cart to localStorage', err);
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${quantity > 1 ? `${quantity}x ` : ''}${product.name} to cart!`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart.');
  };

  const handleCheckout = () => {
    setCartOpen(false);
    showToast('Order confirmed for Kathmandu dispatch!');
  };

  const handleBookAppointment = (serviceName?: string) => {
    setSelectedService(serviceName);
    setAppointmentOpen(true);
  };

  const handleCategorySelect = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      showToast('Showing all featured products');
    } else {
      setSelectedCategory(categoryId);
      const catMap: Record<string, string> = {
        'dog-food': 'Dog Food',
        'cat-food': 'Cat Food',
        'treats': 'Treats',
        'toys': 'Toys',
        'grooming': 'Grooming',
        'accessories': 'Accessories',
        'vet-services': 'Vet Services',
      };
      showToast(`Filtered by ${catMap[categoryId] || categoryId}`);
      if (categoryId === 'vet-services') {
        const vetElem = document.getElementById('vet');
        if (vetElem) {
          scrollTo(vetElem, { offset: -80 });
        }
        return;
      }
      const shopElem = document.getElementById('shop');
      if (shopElem) {
        scrollTo(shopElem, { offset: -80 });
      }
    }
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const pathMap: Record<string, string> = {
      home: '/',
      shop: '/shop',
      vet: '/veterinary-care',
      about: '/about',
      blog: '/blog',
      contact: '/contact',
    };
    const targetPath = pathMap[sectionId] || '/';
    window.history.pushState(null, '', targetPath);
    scrollTo(0, { immediate: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6ED] text-[#203D40] selection:bg-[#DDEBD5] selection:text-[#173D31] overflow-x-hidden">
      {/* 1. Header & Navigation */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAccount={() => setAccountOpen(true)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {activeSection === 'shop' ? (
          /* Dedicated Complete Shop Page at /shop */
          <ShopPage
            onAddToCart={handleAddToCart}
            onBookVetAppointment={handleBookAppointment}
            showToast={showToast}
            initialCategory={selectedCategory}
          />
        ) : activeSection === 'vet' ? (
          /* Dedicated Complete Veterinary Care Page at /veterinary-care */
          <VetPage
            showToast={showToast}
            onNavigateShop={() => handleNavigate('shop')}
          />
        ) : activeSection === 'about' ? (
          /* Dedicated Complete About Us Page at /about */
          <AboutPage
            onNavigateShop={() => handleNavigate('shop')}
            onNavigateVet={() => handleNavigate('vet')}
          />
        ) : activeSection === 'blog' ? (
          /* Dedicated Complete Blog Page at /blog */
          <BlogPage
            onNavigateShop={() => handleNavigate('shop')}
            onNavigateVet={() => handleNavigate('vet')}
          />
        ) : activeSection === 'contact' ? (
          /* Dedicated Complete Contact Page at /contact */
          <ContactPage
            onNavigateShop={() => handleNavigate('shop')}
            onNavigateVet={() => handleNavigate('vet')}
            onNavigateBlog={() => handleNavigate('blog')}
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : (
          /* Homepage Sections */
          <>
            {/* 2. Hero Section */}
            <Hero
              onShopClick={() => handleNavigate('shop')}
              onBookVetClick={() => handleBookAppointment()}
            />

            {/* 3. Pet Category Panel */}
            <CategoryPanel
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />

            {/* 4. Trust and Benefits Strip */}
            <TrustStrip />

            {/* 5. Veterinary Care Section */}
            <VeterinarySection
              onBookAppointment={handleBookAppointment}
            />

            {/* 6. Featured Products Section */}
            <FeaturedProducts
              products={FEATURED_PRODUCTS}
              onAddToCart={handleAddToCart}
              onViewAll={() => handleNavigate('shop')}
              activeFilter={selectedCategory}
            />
          </>
        )}
      </main>

      {/* 7. Newsletter & Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals & Interactive Overlays */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={FEATURED_PRODUCTS}
        onSelectProduct={(product) => {
          handleAddToCart(product);
        }}
      />

      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
        preselectedService={selectedService}
      />

      <AccountModal
        isOpen={accountOpen}
        onClose={() => setAccountOpen(false)}
      />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
};

export default App;
