import React, { useState, useEffect } from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const savedSub = localStorage.getItem('pawhaven_subscribed');
    if (savedSub) {
      setSubscribed(true);
      setEmail(savedSub);
    }
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    localStorage.setItem('pawhaven_subscribed', email.trim());
    setSubscribed(true);
  };

  const handleNav = (section: string) => {
    onNavigate(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#173D31] text-[#F7F6ED] pt-16 sm:pt-20 pb-12 overflow-hidden footer-curved-top">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#24543D]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#24543D]/30 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==============================================================
            TOP PART: Handwritten Phrase Left + Newsletter Center
            ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-14 border-b border-[#DDEBD5]/15">
          
          {/* Left: Handwritten Brand Message "Because they're family" */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-2">
            <span className="font-caveat text-4xl sm:text-5xl md:text-6xl font-bold text-[#FFD15C] leading-none block -rotate-3 select-none">
              Because<br />
              they&apos;re family
            </span>
            <p className="text-xs sm:text-sm text-[#DDEBD5]/75 max-w-xs mx-auto lg:mx-0 font-medium pt-1">
              Dedicated to lifelong well-being, nutritious food, and compassionate medicine.
            </p>
          </div>

          {/* Center / Right: Newsletter Subscription Form */}
          <div className="lg:col-span-8 bg-[#24543D]/60 rounded-3xl p-6 sm:p-8 border border-[#DDEBD5]/20 backdrop-blur-xs">
            <div className="max-w-xl mx-auto text-center lg:text-left">
              <span className="text-xs font-bold text-[#FFD15C] uppercase tracking-widest block mb-1">
                Newsletter
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
                Join Our Pet Community
              </h3>
              <p className="text-sm text-[#DDEBD5]/80 mt-1">
                Get tips, offers and pet care updates straight to your inbox.
              </p>

              {subscribed ? (
                <div className="mt-5 p-4 rounded-2xl bg-[#DDEBD5]/15 border border-[#DDEBD5]/30 text-left flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFD15C] text-[#173D31] flex items-center justify-center font-bold">
                    <span className="css-checkmark" />
                  </div>
                  <div>
                    <span className="font-bold text-[#FFFFFF] text-sm block">
                      Welcome to the PawHaven family!
                    </span>
                    <span className="text-xs text-[#DDEBD5]/80">
                      Subscribed as <strong className="text-white">{email}</strong>.
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-5 space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3.5 rounded-full bg-[#173D31] border border-[#DDEBD5]/30 text-white placeholder-[#DDEBD5]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD15C] transition-all"
                    />
                    <button
                      type="submit"
                      className="px-7 py-3.5 rounded-full bg-[#FFD15C] hover:bg-[#ffe194] text-[#173D31] font-bold text-sm tracking-wide shadow-md transition-all active:scale-95 whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </div>
                  {errorMsg && (
                    <p className="text-xs text-[#F59562] font-semibold text-left pl-2">
                      {errorMsg}
                    </p>
                  )}
                  <p className="text-[11px] text-[#DDEBD5]/60 text-left pl-2">
                    We respect your privacy. No spam, only genuine pet care updates.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* ==============================================================
            MIDDLE PART: Footer Navigation & Brand Details
            ============================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 text-left">
          
          {/* Brand Info (Span 2 on mobile & tablet) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-3">
            <a
              href="https://dxcreativestudio.vercel.app/"
              className="cursor-pointer inline-block group"
              aria-label="DX Creative Studio"
            >
              <img
                src="/images/logofinal.png"
                alt="PawHaven — Pet Store &amp; Veterinary Care"
                className="h-10 sm:h-12 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
                style={{ filter: 'brightness(0) invert(1)' }}
                draggable={false}
              />
            </a>
            <p className="text-xs text-[#DDEBD5]/70 max-w-sm leading-relaxed">
              Nepal&apos;s premier destination for compassionate veterinary healthcare and trusted pet nutrition. Serving pet families across Kathmandu, Lalitpur, and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD15C]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#DDEBD5]/80 font-medium">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Shop Products
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('vet')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Veterinary Care
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Our Team
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-white transition-colors cursor-pointer text-left">
                  The PawHaven Journal
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Client Care & Legal */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD15C]">
              Client Care
            </h4>
            <ul className="space-y-2 text-xs text-[#DDEBD5]/80 font-medium">
              <li>
                <button onClick={() => handleNav('support')} className="hover:text-white transition-colors cursor-pointer text-left font-semibold text-[#FFD15C]/90">
                  Client Support Hub
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('terms')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('support')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Delivery &amp; Returns
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('support')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Emergency Triage Info
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD15C]">
              Categories
            </h4>
            <ul className="space-y-2 text-xs text-[#DDEBD5]/80 font-medium">
              <li><button onClick={() => handleNav('shop')} className="hover:text-white transition-colors cursor-pointer text-left">Dog Food</button></li>
              <li><button onClick={() => handleNav('shop')} className="hover:text-white transition-colors cursor-pointer text-left">Cat Food</button></li>
              <li><button onClick={() => handleNav('shop')} className="hover:text-white transition-colors cursor-pointer text-left">Chews &amp; Treats</button></li>
              <li><button onClick={() => handleNav('shop')} className="hover:text-white transition-colors cursor-pointer text-left">Toys &amp; Grooming</button></li>
              <li><button onClick={() => handleNav('shop')} className="hover:text-white transition-colors cursor-pointer text-left">Vet Essentials</button></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-2.5 col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD15C]">
              Clinic Hours
            </h4>
            <div className="text-xs text-[#DDEBD5]/80 space-y-1">
              <p>Mon – Sat: 8:00 AM – 7:30 PM</p>
              <p>Sunday: 9:00 AM – 5:00 PM</p>
              <p className="text-[#FFD15C] font-semibold pt-1">
                Emergency On-Call: 24/7
              </p>
              <p className="text-[11px] text-[#DDEBD5]/60 pt-1">
                Baluwatar-4, Kathmandu
              </p>
            </div>
          </div>

        </div>

        {/* ==============================================================
            BOTTOM BAR: Copyright, Legal Links & Designed & Developed By
            ============================================================== */}
        <div className="pt-6 border-t border-[#DDEBD5]/10 flex flex-col lg:flex-row items-center justify-between gap-4 text-[11px] text-[#DDEBD5]/70 text-center lg:text-left">
          
          {/* Copyright */}
          <p className="order-2 lg:order-1">
            © 2026 PawHaven. All rights reserved. Crafted with care across Nepal.
          </p>

          {/* Legal Navigation Buttons */}
          <div className="order-1 lg:order-2 flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1 font-medium">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-white cursor-pointer transition-colors outline-none focus-visible:underline"
            >
              Privacy Policy
            </button>
            <span className="opacity-40">•</span>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-white cursor-pointer transition-colors outline-none focus-visible:underline"
            >
              Terms of Service
            </button>
            <span className="opacity-40">•</span>
            <button
              onClick={() => handleNav('support')}
              className="hover:text-white cursor-pointer transition-colors outline-none focus-visible:underline"
            >
              Client Support
            </button>
          </div>

          {/* Designed & Developed by [logo white] */}
          <div className="order-3 flex items-center justify-center gap-2.5 text-xs text-[#DDEBD5]/80 pt-1 lg:pt-0">
            <span className="text-[11px] font-medium tracking-wide text-[#DDEBD5]/75">
              Designed &amp; Developed by
            </span>
            <img
              src="/images/logo white.png"
              alt="Designed &amp; Developed by"
              className="h-5 sm:h-6 md:h-7 w-auto object-contain hover:opacity-100 opacity-90 transition-opacity"
              onError={(e) => {
                // Safeguard against spaces in URL encoding in older webviews
                (e.target as HTMLImageElement).src = '/images/logo-white.png';
              }}
              draggable={false}
            />
          </div>

        </div>

      </div>
    </footer>
  );
};
