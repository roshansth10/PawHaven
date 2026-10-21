import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  HeartHandshake, 
  Clock, 
  AlertCircle, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowLeft,
  Share2,
  Database,
  EyeOff
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (sectionId: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
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
    { id: 'introduction', label: '1. Introduction & Overview' },
    { id: 'information-collected', label: '2. Information We Collect' },
    { id: 'pet-health-records', label: '3. Pet Medical & Clinical Data' },
    { id: 'how-we-use-data', label: '4. How We Use Information' },
    { id: 'payment-security', label: '5. Payment & Transaction Security' },
    { id: 'third-parties', label: '6. Courier & Lab Disclosures' },
    { id: 'cookies-tracking', label: '7. Cookies & Session Storage' },
    { id: 'retention-security', label: '8. Data Retention & Safeguards' },
    { id: 'your-rights', label: '9. Your Rights as a Pet Parent' },
    { id: 'contact-officer', label: '10. Contact Privacy Officer' },
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
        {/* Ambient background glows */}
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
            <span className="text-[#FFD15C]">Legal & Transparency</span>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#24543D] border border-[#DDEBD5]/20 text-xs font-bold uppercase tracking-widest text-[#FFD15C] mb-4">
              <ShieldCheck className="w-4 h-4 text-[#FFD15C]" />
              <span>PawHaven Privacy Commitment</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Your Privacy &amp; Pet Data Protection Policy
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-[#DDEBD5]/90 leading-relaxed font-normal mb-6">
              We treat your companion&apos;s health records, prescription history, and personal shopping data with the highest standard of clinical confidentiality across Kathmandu Valley and Nepal.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#DDEBD5]/75 border-t border-[#DDEBD5]/15 pt-5">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FFD15C]" />
                <span>Last Updated: <strong>October 2026</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFD15C]" />
                <span>Applies to PawHaven Store, Clinic &amp; Mobile App</span>
              </div>
              <button
                onClick={handleCopyLink}
                className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors text-xs"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Link Copied!' : 'Share Policy'}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ==============================================================
          KEY PRINCIPLES / HIGHLIGHT PILLARS
          ============================================================== */}
      <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-[#24543D]/10 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#DDEBD5] text-[#173D31] flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#203D40]">Zero Data Selling</h4>
              <p className="text-xs text-[#203D40]/75 mt-1 leading-snug">
                We never monetize, rent, or sell your personal details or pet habits to third-party ad brokers.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-[#24543D]/10 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#DDEBD5] text-[#173D31] flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#203D40]">Vet Confidentiality</h4>
              <p className="text-xs text-[#203D40]/75 mt-1 leading-snug">
                Medical logs, surgeries, and diagnostics are only accessible by certified veterinarians on duty.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-[#24543D]/10 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#DDEBD5] text-[#173D31] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#203D40]">Encrypted Payments</h4>
              <p className="text-xs text-[#203D40]/75 mt-1 leading-snug">
                All transactions via eSewa, Khalti, and cards are tokenized and processed over TLS 1.3 encryption.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-[#24543D]/10 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#DDEBD5] text-[#173D31] flex items-center justify-center shrink-0">
              <EyeOff className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#203D40]">Parent Control</h4>
              <p className="text-xs text-[#203D40]/75 mt-1 leading-snug">
                Request complete export or deletion of your profile and pet medical logs anytime.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==============================================================
          MAIN CONTENT AREA (Sidebar Navigation + Detailed Clauses)
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Sticky Table of Contents (Desktop) & Chip bar (Mobile) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl p-6 border border-[#24543D]/10 shadow-sm space-y-4">
              <div className="border-b border-[#24543D]/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#24543D]">
                  Table of Contents
                </span>
                <p className="text-xs text-[#203D40]/70 mt-0.5">
                  Jump to any policy section
                </p>
              </div>

              <nav className="space-y-1">
                {sections.map((sec) => {
                  const isActive = activeTab === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
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
                  Need Help or Clarification?
                </span>
                <p className="text-xs text-[#203D40]/80 leading-relaxed">
                  Our privacy compliance team is available Sunday to Friday at Baluwatar, Kathmandu.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="mt-3 w-full py-2 px-3 rounded-xl bg-[#24543D] text-white hover:bg-[#173D31] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact Privacy Desk</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Detailed Document Body (Right 8 Columns) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Section 1 */}
            <article id="introduction" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Introduction &amp; Overview
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>
                  Welcome to <strong>PawHaven Pet Store &amp; Veterinary Care</strong> (&ldquo;PawHaven&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). We operate the veterinary clinic located at Baluwatar, Kathmandu, as well as the PawHaven digital commerce platform serving pet parents throughout Nepal.
                </p>
                <p>
                  This Privacy Policy delineates how we collect, process, maintain, and safeguard the personal information of human pet parents, as well as the medical records, dietary histories, and prescription logs of companion animals under our care.
                </p>
                <div className="p-4 rounded-2xl bg-[#DDEBD5]/30 border border-[#24543D]/15 text-xs sm:text-sm text-[#173D31]">
                  <strong>Key Commitment:</strong> By using our website, booking veterinary consultations, or purchasing supplies, you entrust us with vital information. We honor this trust through transparency and strict compliance with the Privacy Act, 2075 (2018) of Nepal.
                </div>
              </div>
            </article>

            {/* Section 2 */}
            <article id="information-collected" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>We collect data under three distinct categories necessary for providing safe veterinary medicine and swift pet supply delivery:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                  <div className="p-4 rounded-2xl bg-[#F7F6ED] border border-[#24543D]/10">
                    <h3 className="text-sm font-bold text-[#173D31] flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-[#24543D]" />
                      Pet Parent Identity
                    </h3>
                    <ul className="text-xs space-y-1 text-[#203D40]/80 list-disc list-inside">
                      <li>Full name and preferred title</li>
                      <li>Phone numbers (primary and emergency backup)</li>
                      <li>Delivery address within Kathmandu Valley or Nepal</li>
                      <li>Email address for invoices and health reminders</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F7F6ED] border border-[#24543D]/10">
                    <h3 className="text-sm font-bold text-[#173D31] flex items-center gap-2 mb-2">
                      <HeartHandshake className="w-4 h-4 text-[#24543D]" />
                      Companion Profile
                    </h3>
                    <ul className="text-xs space-y-1 text-[#203D40]/80 list-disc list-inside">
                      <li>Pet name, species (canine, feline, exotic), breed</li>
                      <li>Age, date of birth, sex, spay/neuter status</li>
                      <li>Weight history, microchip identifiers</li>
                      <li>Dietary preferences, active allergies &amp; sensitivities</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F6ED] border border-[#24543D]/10">
                  <h3 className="text-sm font-bold text-[#173D31] flex items-center gap-2 mb-2">
                    <Database className="w-4 h-4 text-[#24543D]" />
                    Order &amp; Diagnostic Telemetry
                  </h3>
                  <p className="text-xs text-[#203D40]/80 leading-relaxed">
                    Transaction records, itemized purchase histories, chosen payment methods (e.g. eSewa, Khalti, Fonepay, Cash on Delivery), and basic device telemetry (IP address, operating system, browser cookies) required to retain items in your cart.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 3 */}
            <article id="pet-health-records" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Pet Medical &amp; Clinical Confidentiality
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>
                  As an accredited veterinary practice, PawHaven maintains clinical electronic health records (EHR) for every animal receiving medical examinations, immunizations, diagnostic ultrasound, bloodwork, or surgery.
                </p>
                <div className="p-4 rounded-2xl bg-[#24543D]/5 border-l-4 border-[#24543D] space-y-2">
                  <h4 className="text-sm font-bold text-[#173D31]">Strict Veterinary Oath:</h4>
                  <p className="text-xs sm:text-sm text-[#203D40]/80">
                    Medical data is never shared with pet food advertisers, commercial breeders, or unauthorized insurance agents. Records are accessible strictly by our Nepal Veterinary Council (NVC) licensed practitioners and accredited diagnostic partners.
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-[#203D40]/75">
                  In case you relocate or transfer care to another veterinary hospital, you may request complete certified medical summaries and radiograph files free of charge.
                </p>
              </div>
            </article>

            {/* Section 4 */}
            <article id="how-we-use-data" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  How We Use Your Information
                </h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>Information gathered is utilized purely to optimize veterinary outcomes and retail reliability:</p>
                
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#203D40]/80">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#24543D] shrink-0 mt-0.5" />
                    <span><strong>Order Fulfillment:</strong> Dispatching food kibble, therapeutics, and accessories directly to addresses in Kathmandu, Lalitpur, Bhaktapur, and nationwide.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#24543D] shrink-0 mt-0.5" />
                    <span><strong>Health &amp; Vaccine Reminders:</strong> Automated SMS and WhatsApp notifications when your pet&apos;s annual DHPPiL, Rabies, or Tricat boosters are due.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#24543D] shrink-0 mt-0.5" />
                    <span><strong>Prescription Verification:</strong> Ensuring prescription diets (e.g. Royal Canin Renal or Urinary) and medications are legitimately prescribed before shipment.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#24543D] shrink-0 mt-0.5" />
                    <span><strong>Emergency Triage Coordination:</strong> Reaching pet parents immediately during postoperative recovery or urgent clinic follow-ups.</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* Section 5 */}
            <article id="payment-security" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Payment &amp; Transaction Security
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>
                  PawHaven integrates with regulated Nepali payment gateways including <strong>eSewa</strong>, <strong>Khalti</strong>, and <strong>Fonepay</strong>, as well as Cash on Delivery (COD).
                </p>
                <div className="p-4 rounded-2xl bg-[#F7F6ED] border border-[#24543D]/10 flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#24543D] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#203D40]/80">
                    <strong>Zero Card Retention:</strong> PawHaven servers never store your wallet passwords, transaction PINs, or debit/credit card CVV codes. All payments take place on the gateway provider&apos;s PCI-DSS compliant secure servers.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 6 */}
            <article id="third-parties" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Courier &amp; External Disclosures
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>
                  To fulfill deliveries and specialized diagnostics, we disclose only strictly necessary data to certified partners under confidentiality agreements:
                </p>
                <ul className="text-xs sm:text-sm space-y-2 text-[#203D40]/80 list-disc list-inside">
                  <li><strong>Delivery Couriers:</strong> Delivery riders receive only recipient name, destination address, and phone number to execute parcel handoff.</li>
                  <li><strong>Veterinary Reference Labs:</strong> Blood, urine, and biopsy samples sent to external veterinary pathology centers contain only pet initials and medical IDs.</li>
                  <li><strong>Statutory Authorities:</strong> Disclosures made solely where mandated by Nepalese veterinary epidemic reporting laws (e.g. rabies outbreak notifications).</li>
                </ul>
              </div>
            </article>

            {/* Section 7 */}
            <article id="cookies-tracking" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Cookies &amp; Session Storage
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>
                  PawHaven uses lightweight browser cookies and local storage tokens to:
                </p>
                <ul className="text-xs sm:text-sm space-y-1.5 text-[#203D40]/80 list-disc list-inside">
                  <li>Keep items preserved inside your cart while navigating between store pages.</li>
                  <li>Remember your preferred delivery ward or district inside Kathmandu Valley.</li>
                  <li>Safeguard against cross-site request forgery (CSRF) and bot attacks.</li>
                </ul>
                <p className="text-xs text-[#203D40]/70">
                  You can clear or disable cookies via your browser settings at any moment, though this may require you to re-add products to your cart.
                </p>
              </div>
            </article>

            {/* Section 8 */}
            <article id="retention-security" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Data Retention &amp; Safeguards
                </h2>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>
                  We store veterinary medical records for a minimum of 5 years in compliance with professional animal health documentation mandates in Nepal, enabling continuous lifetime wellness tracking.
                </p>
                <p>
                  Our server infrastructure utilizes SSL/TLS encryption in transit and AES-256 encryption at rest. Internal staff access is strictly partitioned on a need-to-know basis.
                </p>
              </div>
            </article>

            {/* Section 9 */}
            <article id="your-rights" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#DDEBD5] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#203D40]">
                  Your Rights as a Pet Parent
                </h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#203D40]/85 leading-relaxed">
                <p>You maintain fundamental rights regarding your stored data:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-[#F7F6ED] border border-[#24543D]/10">
                    <span className="text-xs font-bold text-[#173D31] block">Right of Access</span>
                    <span className="text-xs text-[#203D40]/80">Inspect full medical notes and purchase histories at any time.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F7F6ED] border border-[#24543D]/10">
                    <span className="text-xs font-bold text-[#173D31] block">Right of Rectification</span>
                    <span className="text-xs text-[#203D40]/80">Promptly update changed phone numbers, address, or pet weight.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F7F6ED] border border-[#24543D]/10">
                    <span className="text-xs font-bold text-[#173D31] block">Right to Opt-Out</span>
                    <span className="text-xs text-[#203D40]/80">Unsubscribe from non-essential newsletters and care alerts with one click.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F7F6ED] border border-[#24543D]/10">
                    <span className="text-xs font-bold text-[#173D31] block">Account Deletion</span>
                    <span className="text-xs text-[#203D40]/80">Request erasure of non-clinical account data when leaving our services.</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Section 10 */}
            <article id="contact-officer" className="bg-[#173D31] text-white rounded-3xl p-6 sm:p-8 shadow-md scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#FFD15C] text-[#173D31] flex items-center justify-center font-bold text-sm">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#FFFFFF]">
                  Contact Our Privacy Officer
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#DDEBD5]/90 mb-6 leading-relaxed">
                If you have questions, wish to access your pet&apos;s records, or need to lodge a data query, our Data Protection Liaison is ready to help:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-[#24543D]/60 p-4 rounded-2xl border border-[#DDEBD5]/15">
                  <Mail className="w-4 h-4 text-[#FFD15C] mb-2" />
                  <span className="block font-bold text-white mb-0.5">Direct Email</span>
                  <span className="text-[#DDEBD5]/80">privacy@pawhaven.com.np</span>
                </div>
                <div className="bg-[#24543D]/60 p-4 rounded-2xl border border-[#DDEBD5]/15">
                  <Phone className="w-4 h-4 text-[#FFD15C] mb-2" />
                  <span className="block font-bold text-white mb-0.5">Phone Support</span>
                  <span className="text-[#DDEBD5]/80">+977-1-4422334</span>
                </div>
                <div className="bg-[#24543D]/60 p-4 rounded-2xl border border-[#DDEBD5]/15">
                  <MapPin className="w-4 h-4 text-[#FFD15C] mb-2" />
                  <span className="block font-bold text-white mb-0.5">Physical Clinic</span>
                  <span className="text-[#DDEBD5]/80">Baluwatar-4, Kathmandu</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#DDEBD5]/15 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#DDEBD5]/70">
                  Response SLA: Under 48 business hours
                </span>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 rounded-full bg-[#FFD15C] hover:bg-[#ffe194] text-[#173D31] font-bold text-xs transition-all active:scale-95"
                >
                  Send Direct Inquiry
                </button>
              </div>
            </article>

          </div>

        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicyPage;
