import React, { useState } from 'react';
import { 
  FileCheck2, 
  Stethoscope, 
  Truck, 
  RotateCcw, 
  AlertTriangle, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft,
  Share2,
  Scale,
  ShieldAlert,
  Building2
} from 'lucide-react';

interface TermsOfServicePageProps {
  onNavigate: (sectionId: string) => void;
}

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const sections = [
    { id: 'acceptance', label: '1. Agreement to Terms' },
    { id: 'account-profile', label: '2. User Accounts & Pet Profiles' },
    { id: 'veterinary-consent', label: '3. Clinical Services & Medical Consent' },
    { id: 'emergency-protocol', label: '4. Emergency Triage Protocol' },
    { id: 'commerce-pricing', label: '5. Product Orders, Pricing & VAT' },
    { id: 'prescription-items', label: '6. Prescription Diets & Medications' },
    { id: 'shipping-delivery', label: '7. Delivery across Kathmandu & Nepal' },
    { id: 'returns-refunds', label: '8. Returns, Exchanges & Cancellations' },
    { id: 'intellectual-property', label: '9. Intellectual Property' },
    { id: 'liability-disclaimer', label: '10. Limitation of Liability' },
    { id: 'governing-law', label: '11. Governing Law & Nepal Jurisdiction' },
    { id: 'contact-legal', label: '12. Legal Inquiries' },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const elem = document.getElementById(id);
    if (elem) {
      const yOffset = -90;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F7F6ED] min-h-screen text-[#203D40] pb-20">
      
      {/* ==============================================================
          HERO BANNER
          ============================================================== */}
      <section className="relative bg-[#173D31] text-[#F7F6ED] pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#24543D]/60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#FFD15C]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#DDEBD5]/80 mb-6">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-[#FFD15C]">Legal & Compliance</span>
            <span>/</span>
            <span className="text-white">Terms of Service</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#24543D] border border-[#DDEBD5]/20 text-xs font-bold uppercase tracking-widest text-[#FFD15C] mb-4">
              <FileCheck2 className="w-4 h-4 text-[#FFD15C]" />
              <span>Official Client Agreement</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              PawHaven Terms of Service
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-[#DDEBD5]/90 leading-relaxed font-normal mb-6">
              Clear, transparent guidelines governing your use of our Kathmandu veterinary clinic, online pet food shop, tele-triage, and doorstep fulfillment.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#DDEBD5]/75 border-t border-[#DDEBD5]/15 pt-5">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FFD15C]" />
                <span>Effective Date: <strong>October 2026</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#FFD15C]" />
                <span>PawHaven Nepal Pvt. Ltd. (Kathmandu)</span>
              </div>
              <button
                onClick={handleCopyLink}
                className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors text-xs"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Link Copied!' : 'Share Terms'}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ==============================================================
          KEY TERMS SUMMARY PILLARS
          ============================================================== */}
      <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-[#24543D]/10 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#DDEBD5] text-[#173D31] flex items-center justify-center shrink-0">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#203D40]">NVC Licensed Vets</h4>
              <p className="text-xs text-[#203D40]/75 mt-1 leading-snug">
                All clinical exams, vaccinations, and surgeries are performed strictly by certified doctors.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-[#24543D]/10 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#DDEBD5] text-[#173D31] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#203D40]">Valley-Wide Delivery</h4>
              <p className="text-xs text-[#203D40]/75 mt-1 leading-snug">
                Same-day &amp; scheduled dispatches across Kathmandu, Lalitpur, and Bhaktapur.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-[#24543D]/10 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#DDEBD5] text-[#173D31] flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#203D40]">7-Day Safe Returns</h4>
              <p className="text-xs text-[#203D40]/75 mt-1 leading-snug">
                Unopened, factory-sealed dry food and accessories are eligible for hassle-free replacement.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-[#24543D]/10 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#DDEBD5] text-[#173D31] flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#203D40]">Transparent Pricing</h4>
              <p className="text-xs text-[#203D40]/75 mt-1 leading-snug">
                All store and clinic prices are clearly listed in Nepali Rupees (NPR) with zero surprise fees.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==============================================================
          MAIN TERMS CONTENT & SIDEBAR
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Table of Contents Sticky Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl p-6 border border-[#24543D]/10 shadow-sm space-y-4">
              <div className="border-b border-[#24543D]/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#24543D]">
                  Navigation Index
                </span>
                <p className="text-xs text-[#203D40]/70 mt-0.5">
                  Browse by specific topic
                </p>
              </div>

              <nav className="space-y-1">
                {sections.map((sec) => {
                  const isActive = activeTab === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-[#173D31] text-[#FFD15C] font-semibold shadow-xs'
                          : 'text-[#203D40]/80 hover:bg-[#DDEBD5]/40 hover:text-[#173D31]'
                      }`}
                    >
                      <span className="truncate">{sec.label}</span>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? 'text-[#FFD15C] translate-x-1' : 'opacity-40'}`} />
                    </button>
                  );
                })}
              </nav>

              <div className="mt-6 pt-5 border-t border-[#24543D]/10 bg-[#F7F6ED] p-4 rounded-2xl">
                <span className="text-xs font-bold text-[#173D31] block mb-1">
                  Questions About These Terms?
                </span>
                <p className="text-xs text-[#203D40]/80 leading-relaxed">
                  Our front-desk team and legal counsel are at your service for any questions regarding clinic procedures or orders.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="mt-3 w-full py-2 px-3 rounded-xl bg-[#24543D] text-white hover:bg-[#173D31] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Inquire with PawHaven Desk</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Clauses (Right 8 columns) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Clause 1 */}
            <article id="acceptance" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Agreement to Terms
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>
                  These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally enforceable agreement between you (&ldquo;Client&rdquo;, &ldquo;Pet Parent&rdquo;, or &ldquo;User&rdquo;) and <strong>PawHaven Nepal Pvt. Ltd.</strong> governing access to our website, mobile interface, e-commerce catalog, and veterinary medical facilities in Kathmandu, Nepal.
                </p>
                <p>
                  By accessing the website, registering a profile, ordering merchandise, or scheduling clinical examinations, you expressly acknowledge and agree to abide by these Terms. If you disagree with any portion, please cease usage of our digital portal.
                </p>
              </div>
            </article>

            {/* Clause 2 */}
            <article id="account-profile" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  User Accounts &amp; Pet Profiles
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>
                  To book veterinary slots or maintain recurring orders, you may create an account. You agree to provide current, truthful, and complete details regarding yourself and your companion animals.
                </p>
                <div className="p-4 rounded-2xl bg-[#DDEBD5]/30 border border-[#24543D]/15 text-xs sm:text-sm text-[#173D31]">
                  <strong>Medical Vital:</strong> Inaccurate pet age, weight, or pre-existing medication disclosures can drastically compromise clinical dosing calculations. The pet parent assumes full responsibility for disclosing known allergies, adverse drug reactions, and behavioral triggers (such as fear aggression).
                </div>
              </div>
            </article>

            {/* Clause 3 */}
            <article id="veterinary-consent" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Clinical Services &amp; Medical Consent
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>
                  PawHaven delivers veterinary medicine under the ethics code of the Nepal Veterinary Council (NVC).
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#203D40]/80">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#24543D] shrink-0 mt-0.5" />
                    <span><strong>Informed Owner Consent:</strong> No invasive procedure, sedation, or surgery is undertaken without prior verbal or written consent, except in life-threatening resuscitation scenarios.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#24543D] shrink-0 mt-0.5" />
                    <span><strong>Pre-Anesthetic Diagnostics:</strong> To minimize surgical risks, pre-operative blood biochemistry is strongly recommended for senior pets (above 7 years of age).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#24543D] shrink-0 mt-0.5" />
                    <span><strong>Rabies &amp; Vector Precautions:</strong> Dogs and cats entering PawHaven clinic grounds must possess an active rabies immunization certificate, or receive one upon examination.</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* Clause 4 */}
            <article id="emergency-protocol" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Emergency Triage Protocol
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <div className="p-4 rounded-2xl bg-[#FFD15C]/15 border border-[#FFD15C]/40 text-xs sm:text-sm text-[#203D40]">
                  <div className="flex items-center gap-2 font-bold text-[#173D31] mb-1">
                    <AlertTriangle className="w-4 h-4 text-[#F59562]" />
                    Emergency Priority Notice
                  </div>
                  Our clinic strictly prioritizes critical emergency trauma cases (road accidents, acute toxic ingestions, gastric torsion, severe respiratory distress) over scheduled non-urgent wellness checks. We appreciate your patience should a scheduled checkup experience a slight triage delay to preserve an animal life.
                </div>
              </div>
            </article>

            {/* Clause 5 */}
            <article id="commerce-pricing" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Product Orders, Pricing &amp; VAT
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>
                  All retail prices displayed across the PawHaven shop are denominated in <strong>Nepali Rupees (NPR)</strong> and are inclusive of standard 13% Value Added Tax (VAT) where legally applicable.
                </p>
                <p>
                  We strive to maintain exact inventory counts. If an item becomes abruptly out of stock post-order, our dispatch desk will promptly notify you with the option of an immediate equivalent substitution or full refund.
                </p>
              </div>
            </article>

            {/* Clause 6 */}
            <article id="prescription-items" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Prescription Diets &amp; Veterinary Medicines
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>
                  Therapeutic prescription diets (e.g. cardiac, hepatic, renal, urinary foods) and pharmaceutical compounds (antibiotics, cardiac medications, analgesics) will only be dispensed upon presentation of a valid prescription issued by a licensed veterinarian.
                </p>
                <p className="text-xs text-[#203D40]/70">
                  Prescription orders without verifiable doctor authorization will be put on medical hold until our clinic contacts your prescribing doctor.
                </p>
              </div>
            </article>

            {/* Clause 7 */}
            <article id="shipping-delivery" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Delivery across Kathmandu &amp; Nepal
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-[#F7F6ED] border border-[#24543D]/10">
                    <span className="text-xs font-bold text-[#173D31] block mb-1">Kathmandu Valley</span>
                    <p className="text-xs text-[#203D40]/80">
                      Standard delivery takes 3 to 12 business hours. Orders placed before 1:00 PM qualify for same-day evening delivery.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F7F6ED] border border-[#24543D]/10">
                    <span className="text-xs font-bold text-[#173D31] block mb-1">Outside Valley (Nationwide)</span>
                    <p className="text-xs text-[#203D40]/80">
                      Dispatched via reputable surface/air couriers (Pokhara, Chitwan, Biratnagar, Butwal, etc.) within 2 to 4 business days.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Clause 8 */}
            <article id="returns-refunds" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Returns, Exchanges &amp; Cancellations
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>
                  We aim for your absolute satisfaction. In the event of an issue:
                </p>
                <ul className="text-xs sm:text-sm space-y-2 text-[#203D40]/80 list-disc list-inside">
                  <li><strong>7-Day Window:</strong> Items in brand-new, unopened, original packaging may be returned or exchanged within 7 calendar days of receipt.</li>
                  <li><strong>Strict Hygiene Exclusions:</strong> Opened food bags, opened treats, ingested chews, used cat litter boxes, hygiene grooming brushes, and prescription medications cannot be returned once delivered for animal health and biosafety reasons.</li>
                  <li><strong>Damaged / Incorrect Goods:</strong> If your bag arrives punctured or leaking during transit, inform us within 24 hours with photos for an immediate free replacement.</li>
                </ul>
              </div>
            </article>

            {/* Clause 9 */}
            <article id="intellectual-property" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Intellectual Property
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>
                  All proprietary content, brand logos, graphic marks, photography, veterinary articles, and website user interfaces are the exclusive intellectual property of PawHaven Nepal Pvt. Ltd. and are protected under copyright and trademark statutes of Nepal. Unauthorized republication or commercial cloning is strictly prohibited.
                </p>
              </div>
            </article>

            {/* Clause 10 */}
            <article id="liability-disclaimer" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Limitation of Liability
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>
                  While our clinical staff exercises the utmost standard of contemporary veterinary science, biological responses vary in animal medicine. PawHaven cannot guarantee identical therapeutic outcomes for every individual animal condition.
                </p>
                <div className="p-4 rounded-2xl bg-[#F7F6ED] border border-[#24543D]/10 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-[#24543D] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#203D40]/80">
                    Articles published on <em>The PawHaven Journal</em> are for general educational purposes and do not replace an in-person diagnostic physical examination by a licensed veterinarian.
                  </p>
                </div>
              </div>
            </article>

            {/* Clause 11 */}
            <article id="governing-law" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Governing Law &amp; Nepal Jurisdiction
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>
                  These Terms shall be interpreted in accordance with the laws of Nepal. Any unresolved claim or dispute arising from these Terms, clinical procedures, or retail sales shall be submitted to the exclusive jurisdiction of the competent courts of Kathmandu District, Nepal.
                </p>
              </div>
            </article>

            {/* Clause 12 */}
            <article id="contact-legal" className="bg-[#173D31] text-white rounded-3xl p-6 sm:p-8 shadow-md scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#FFD15C] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#FFFFFF]">
                  Legal Inquiries &amp; Official Notices
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#DDEBD5]/90 mb-5 leading-relaxed">
                Formal legal communications, corporate inquiries, or partnership notifications may be directed to our registered headquarters:
              </p>
              <div className="p-4 rounded-2xl bg-[#24543D]/60 border border-[#DDEBD5]/15 space-y-1 text-xs text-[#DDEBD5]/90">
                <p><strong className="text-white">PawHaven Nepal Pvt. Ltd.</strong></p>
                <p>Legal &amp; Regulatory Affairs Desk</p>
                <p>Baluwatar Ward No. 4, Kathmandu, Bagmati Province, Nepal</p>
                <p className="pt-2 text-white font-medium">Email: legal@pawhaven.com.np | Phone: +977-1-4422334</p>
              </div>
            </article>

          </div>

        </div>
      </section>

    </div>
  );
};

export default TermsOfServicePage;
