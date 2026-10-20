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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 text-left">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-3">
            <div
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer inline-block group"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onNavigate('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              aria-label="PawHaven Home"
            >
              <img
                src="/images/logofinal.png"
                alt="PawHaven — Pet Store &amp; Veterinary Care"
                className="h-10 sm:h-12 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
                style={{ filter: 'brightness(0) invert(1)' }}
                draggable={false}
              />
            </div>
            <p className="text-xs text-[#DDEBD5]/70 max-w-sm leading-relaxed">
              Nepal&apos;s premier destination for veterinary healthcare and trusted pet nutrition. Serving pet parents across Kathmandu, Lalitpur, and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD15C]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#DDEBD5]/80 font-medium">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-white transition-colors cursor-pointer">
                  Shop Products
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vet')} className="hover:text-white transition-colors cursor-pointer">
                  Veterinary Care
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Our Team
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors cursor-pointer">
                  The PawHaven Journal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
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
              <li><span className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('shop')}>Dog Food</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('shop')}>Cat Food</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('shop')}>Chews &amp; Treats</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('shop')}>Toys &amp; Grooming</span></li>
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
            </div>
          </div>

        </div>

        {/* ==============================================================
            BOTTOM BAR: Copyright & Disclaimer
            ============================================================== */}
        <div className="pt-6 border-t border-[#DDEBD5]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#DDEBD5]/60">
          <p>© 2026 PawHaven. All rights reserved. Crafted with care across Nepal.</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Client Support</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
