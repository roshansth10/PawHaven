import React, { useState, useMemo } from 'react';
import { 
  Search, 
  PhoneCall, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Truck, 
  Stethoscope, 
  RotateCcw, 
  CreditCard, 
  HeartHandshake, 
  FileText, 
  ChevronDown, 
  AlertCircle, 
  CheckCircle2, 
  Send, 
  ArrowLeft,
  LifeBuoy,
  Clock,
  Sparkles,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface ClientSupportPageProps {
  onNavigate: (sectionId: string) => void;
  onBookAppointment: (serviceName?: string) => void;
  showToast: (msg: string) => void;
}

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const ClientSupportPage: React.FC<ClientSupportPageProps> = ({
  onNavigate,
  onBookAppointment,
  showToast,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-1');

  // Support ticket form state
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petSpecies: 'Dog',
    category: 'Order & Delivery Inquiry',
    priority: 'Normal',
    message: '',
    hasAttachment: false,
  });

  const [ticketSubmitted, setTicketSubmitted] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Categories list
  const categories = [
    { id: 'all', label: 'All Topics', icon: HelpCircle },
    { id: 'delivery', label: 'Orders & Delivery', icon: Truck },
    { id: 'vet', label: 'Veterinary & Emergency', icon: Stethoscope },
    { id: 'returns', label: 'Returns & Refunds', icon: RotateCcw },
    { id: 'nutrition', label: 'Nutrition & Diet', icon: HeartHandshake },
    { id: 'payment', label: 'Payments & Billing', icon: CreditCard },
  ];

  // FAQ Database
  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'delivery',
      question: 'How fast is pet food and supply delivery in Kathmandu Valley?',
      answer:
        'Orders placed before 1:00 PM are delivered same-day (within 3 to 6 hours) across Kathmandu, Lalitpur, and Bhaktapur. Orders placed after 1:00 PM arrive the next morning. Express 2-hour delivery is also available for urgent nutritional or prescription supplies in central Kathmandu.',
    },
    {
      id: 'faq-2',
      category: 'delivery',
      question: 'Do you deliver pet products outside Kathmandu Valley?',
      answer:
        'Yes! We deliver nationwide across Nepal via express domestic couriers to Pokhara, Chitwan, Biratnagar, Butwal, Dharan, and other major hubs. Delivery outside the valley typically takes 2 to 4 business days.',
    },
    {
      id: 'faq-3',
      category: 'vet',
      question: 'What should I do during an after-hours pet emergency?',
      answer:
        'PawHaven operates a 24/7 emergency veterinary triage helpline (+977 980-1234567). If your pet exhibits sudden collapse, breathing difficulty, suspected toxic ingestion (such as rat bait or human medicines), or severe trauma, call us immediately. Our on-duty emergency veterinary officer will prepare the trauma suite at our Baluwatar clinic before your arrival.',
    },
    {
      id: 'faq-4',
      category: 'vet',
      question: 'How do I book an in-person or home-visit veterinary consultation?',
      answer:
        'You can book directly through the PawHaven website by tapping "Book Appointment" in the header or veterinary care tab, calling our clinic reception at +977-1-4422334, or dropping by during regular consultation hours (Mon-Sat 8:00 AM – 7:30 PM, Sun 9:00 AM – 5:00 PM).',
    },
    {
      id: 'faq-5',
      category: 'returns',
      question: 'What is PawHaven\'s return and exchange policy?',
      answer:
        'We offer a 7-day hassle-free return or exchange for unopened, original factory-sealed dry kibble bags, unused toys, harnesses, beds, and grooming tools. For animal health safety, opened food packages, chewed items, and prescription pharmaceutical compounds cannot be returned.',
    },
    {
      id: 'faq-6',
      category: 'nutrition',
      question: 'How can I safely switch my pet to a new dog or cat food brand?',
      answer:
        'To prevent stomach upset or diarrhea, transition gradually over 7 to 10 days: Days 1–3 (25% new food, 75% old food), Days 4–6 (50% new food, 50% old food), Days 7–9 (75% new food, 25% old food), Day 10+ (100% new food). You can also chat with our pet nutrition counselors for custom puppy or senior pet advice.',
    },
    {
      id: 'faq-7',
      category: 'payment',
      question: 'What payment methods do you accept online and at the clinic?',
      answer:
        'We accept all major Nepali digital payment methods including eSewa, Khalti, Fonepay QR, domestic Debit/Credit cards, bank direct transfer, and Cash on Delivery (COD) across Kathmandu Valley.',
    },
    {
      id: 'faq-8',
      category: 'nutrition',
      question: 'Do I need a prescription to buy prescription veterinary diets (e.g., Royal Canin Renal or Urinary)?',
      answer:
        'Yes. Veterinary therapeutic diets are medically formulated for specific physiological conditions. Our checkout team will ask for a quick photo of your veterinarian\'s recommendation before dispatching your first therapeutic bag.',
    },
  ];

  // Filtered FAQs based on category & search term
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === 'all' || faq.category === activeCategory;
      const matchesQuery =
        !searchQuery.trim() ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [faqs, activeCategory, searchQuery]);

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketForm.name.trim() || !ticketForm.phone.trim() || !ticketForm.message.trim()) {
      showToast('Please fill in your name, phone number, and message.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      const generatedId = `PAW-KTM-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketSubmitted(generatedId);
      setSubmitting(false);
      showToast(`Support Ticket #${generatedId} logged successfully!`);
    }, 800);
  };

  const handleResetTicket = () => {
    setTicketSubmitted(null);
    setTicketForm({
      name: '',
      email: '',
      phone: '',
      petName: '',
      petSpecies: 'Dog',
      category: 'Order & Delivery Inquiry',
      priority: 'Normal',
      message: '',
      hasAttachment: false,
    });
  };

  return (
    <div className="bg-[#F7F6ED] min-h-screen text-[#203D40] pb-24">
      
      {/* ==============================================================
          HERO BANNER & SEARCH HUB
          ============================================================== */}
      <section className="relative bg-[#173D31] text-[#F7F6ED] pt-12 sm:pt-16 pb-20 sm:pb-24 overflow-hidden">
        {/* Ambient lighting blobs */}
        <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#24543D]/60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#FFD15C]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#DDEBD5]/80 mb-6">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-[#FFD15C]">Support &amp; Help Desk</span>
            <span>/</span>
            <span className="text-white">Client Support</span>
          </div>

          <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#24543D] border border-[#DDEBD5]/20 text-xs font-bold uppercase tracking-widest text-[#FFD15C] mb-4">
              <LifeBuoy className="w-4 h-4 text-[#FFD15C]" />
              <span>Dedicated Pet Parent Assistance</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              How Can Our PawHaven Team Help You Today?
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-[#DDEBD5]/90 leading-relaxed font-normal mb-8">
              Whether you need to track a food delivery across Kathmandu, reschedule a veterinary checkup, or discuss a diet transition for your furry family member, we are here for you.
            </p>

            {/* Live Search Input */}
            <div className="relative max-w-2xl mx-auto md:mx-0">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-[#24543D]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search orders, delivery times, vaccines, returns, prescription diets..."
                  className="w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-2xl bg-white text-[#203D40] placeholder-[#203D40]/50 text-sm sm:text-base shadow-xl border-2 border-transparent focus:border-[#FFD15C] focus:outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-xs font-semibold text-[#24543D] hover:text-[#173D31] bg-[#DDEBD5] px-2 py-1 rounded-md"
                  >
                    Clear
                  </button>
                )}
              </div>
              <p className="text-[11px] text-[#DDEBD5]/70 mt-2 text-left pl-2">
                Popular searches: <em>Kathmandu delivery time, emergency vet, cancel appointment, return dry food, eSewa payment</em>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==============================================================
          24/7 VETERINARY EMERGENCY HOTLINE CALLOUT
          ============================================================== */}
      <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#24543D] to-[#173D31] rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#FFD15C]/30 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FFD15C] text-[#173D31] flex items-center justify-center shrink-0 shadow-md">
              <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#F59562] text-white text-[10px] font-extrabold uppercase tracking-widest">
                  24/7 Emergency
                </span>
                <span className="text-xs text-[#DDEBD5]/90 font-medium">
                  Veterinary Trauma &amp; Poison Triage
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-extrabold text-white mt-1">
                Immediate Critical Pet Helpline: +977 980-1234567
              </h2>
              <p className="text-xs sm:text-sm text-[#DDEBD5]/80 mt-1 max-w-xl">
                For vehicular accidents, acute breathing distress, poisoning, or severe bloat. On-duty doctors stand ready at Baluwatar, Kathmandu.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="tel:+9779801234567"
              className="flex-1 sm:flex-initial text-center px-6 py-3 rounded-full bg-[#FFD15C] hover:bg-[#ffe194] text-[#173D31] font-extrabold text-sm shadow-md transition-transform active:scale-95 whitespace-nowrap"
            >
              Call Hotline Now
            </a>
            <button
              onClick={() => onBookAppointment('Emergency & Triage Check')}
              className="flex-1 sm:flex-initial text-center px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-colors whitespace-nowrap"
            >
              Book Triage Slot
            </button>
          </div>
        </div>
      </section>

      {/* ==============================================================
          QUICK TOPIC CARDS GRID
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#24543D] block mb-1">
            Browse By Service Category
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#203D40]">
            What do you need assistance with?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Orders & Delivery */}
          <div 
            onClick={() => {
              setActiveCategory('delivery');
              const el = document.getElementById('faq-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#24543D]/10 hover:border-[#24543D]/30 shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#DDEBD5] text-[#173D31] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#203D40] group-hover:text-[#24543D] transition-colors">
              Orders &amp; Dispatch
            </h3>
            <p className="text-xs sm:text-sm text-[#203D40]/75 mt-2 leading-relaxed">
              Track live delivery status in Kathmandu Valley, update recipient address, or request express same-day courier dispatch.
            </p>
            <span className="inline-flex items-center text-xs font-bold text-[#24543D] mt-4 gap-1 group-hover:gap-1.5 transition-all">
              <span>View delivery FAQs</span>
              <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
            </span>
          </div>

          {/* Card 2: Vet Clinic & Appointments */}
          <div 
            onClick={() => onBookAppointment()}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#24543D]/10 hover:border-[#24543D]/30 shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#DDEBD5] text-[#173D31] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#203D40] group-hover:text-[#24543D] transition-colors">
              Vet Appointments
            </h3>
            <p className="text-xs sm:text-sm text-[#203D40]/75 mt-2 leading-relaxed">
              Schedule or reschedule general checkups, dental cleanings, surgeries, diagnostic ultrasounds, or home vaccination visits.
            </p>
            <span className="inline-flex items-center text-xs font-bold text-[#24543D] mt-4 gap-1 group-hover:gap-1.5 transition-all">
              <span>Book consultation slot</span>
              <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
            </span>
          </div>

          {/* Card 3: Returns & Refunds */}
          <div 
            onClick={() => {
              setActiveCategory('returns');
              const el = document.getElementById('faq-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#24543D]/10 hover:border-[#24543D]/30 shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#DDEBD5] text-[#173D31] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#203D40] group-hover:text-[#24543D] transition-colors">
              Returns &amp; Replacements
            </h3>
            <p className="text-xs sm:text-sm text-[#203D40]/75 mt-2 leading-relaxed">
              Report damaged kibble bags, exchange leash or collar sizing, and initiate standard 7-day unopened returns.
            </p>
            <span className="inline-flex items-center text-xs font-bold text-[#24543D] mt-4 gap-1 group-hover:gap-1.5 transition-all">
              <span>Return guidelines</span>
              <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
            </span>
          </div>

          {/* Card 4: Pet Diets & Prescriptions */}
          <div 
            onClick={() => onNavigate('shop')}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#24543D]/10 hover:border-[#24543D]/30 shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#DDEBD5] text-[#173D31] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#203D40] group-hover:text-[#24543D] transition-colors">
              Diet &amp; Nutrition Counsel
            </h3>
            <p className="text-xs sm:text-sm text-[#203D40]/75 mt-2 leading-relaxed">
              Verify prescription therapeutic food orders, get food transition advice, or check hypoallergenic kibble formulas.
            </p>
            <span className="inline-flex items-center text-xs font-bold text-[#24543D] mt-4 gap-1 group-hover:gap-1.5 transition-all">
              <span>Browse nutrition catalog</span>
              <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
            </span>
          </div>

          {/* Card 5: Payment & Billing */}
          <div 
            onClick={() => {
              setActiveCategory('payment');
              const el = document.getElementById('faq-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#24543D]/10 hover:border-[#24543D]/30 shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#DDEBD5] text-[#173D31] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#203D40] group-hover:text-[#24543D] transition-colors">
              Payments &amp; Invoicing
            </h3>
            <p className="text-xs sm:text-sm text-[#203D40]/75 mt-2 leading-relaxed">
              Assistance with eSewa, Khalti, or Fonepay QR payment receipts, official VAT clinic invoices, and corporate accounts.
            </p>
            <span className="inline-flex items-center text-xs font-bold text-[#24543D] mt-4 gap-1 group-hover:gap-1.5 transition-all">
              <span>Payment assistance</span>
              <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
            </span>
          </div>

          {/* Card 6: Direct Clinic Help Desk */}
          <div 
            onClick={() => onNavigate('contact')}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#24543D]/10 hover:border-[#24543D]/30 shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#DDEBD5] text-[#173D31] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#203D40] group-hover:text-[#24543D] transition-colors">
              Baluwatar Help Desk
            </h3>
            <p className="text-xs sm:text-sm text-[#203D40]/75 mt-2 leading-relaxed">
              Visit our flagship clinic in Baluwatar-4, Kathmandu. Open 7 days a week for in-person support and medical pickups.
            </p>
            <span className="inline-flex items-center text-xs font-bold text-[#24543D] mt-4 gap-1 group-hover:gap-1.5 transition-all">
              <span>View location &amp; hours</span>
              <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
            </span>
          </div>

        </div>
      </section>

      {/* ==============================================================
          FREQUENTLY ASKED QUESTIONS (ACCORDION WITH CATEGORY FILTERS)
          ============================================================== */}
      <section id="faq-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#24543D] block mb-1">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#203D40]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#203D40]/75 mt-1">
            Instant answers to pet parents&apos; most common questions.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#173D31] text-[#FFD15C] shadow-sm'
                    : 'bg-white text-[#203D40]/80 hover:bg-[#DDEBD5]/50 border border-[#24543D]/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Accordions List */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 text-center border border-[#24543D]/10">
              <AlertCircle className="w-8 h-8 text-[#F59562] mx-auto mb-2" />
              <h4 className="text-base font-bold text-[#203D40]">No matching answers found</h4>
              <p className="text-xs text-[#203D40]/70 mt-1 max-w-sm mx-auto">
                Try searching with another keyword or submit a support ticket below for direct veterinary response.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 px-4 py-2 rounded-full bg-[#24543D] text-white text-xs font-bold"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#24543D]/10 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#203D40] hover:text-[#24543D] transition-colors"
                  >
                    <span className="flex-1">{faq.question}</span>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'bg-[#173D31] text-[#FFD15C] rotate-180' : 'bg-[#F7F6ED] text-[#203D40]'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#203D40]/80 leading-relaxed border-t border-[#24543D]/5 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* ==============================================================
          SUBMIT A SUPPORT TICKET / INQUIRY FORM
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#24543D]/10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Form info & Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#24543D] block mb-1">
                  Online Help Desk
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#203D40]">
                  Submit a Support Ticket
                </h2>
                <p className="text-xs sm:text-sm text-[#203D40]/75 mt-2 leading-relaxed">
                  Have a specific question about an order, prescription verification, or clinic record? Fill in the details and our support desk in Kathmandu will reply promptly.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-3 pt-2">
                <a
                  href="https://wa.me/9779801234567?text=Hello%20PawHaven%2C%20I%20need%20support%20with%20my%20pet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#DDEBD5]/40 hover:bg-[#DDEBD5] border border-[#24543D]/10 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#24543D] text-[#FFD15C] flex items-center justify-center font-bold">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#173D31] block">Instant WhatsApp Support</span>
                      <span className="text-[11px] text-[#203D40]/70">Average reply: &lt; 15 mins</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#24543D] group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="mailto:support@pawhaven.com.np"
                  className="p-3.5 rounded-2xl bg-[#DDEBD5]/40 hover:bg-[#DDEBD5] border border-[#24543D]/10 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#24543D] text-[#FFD15C] flex items-center justify-center font-bold">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#173D31] block">Email Support Desk</span>
                      <span className="text-[11px] text-[#203D40]/70">support@pawhaven.com.np</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#24543D] group-hover:translate-x-0.5 transition-transform" />
                </a>

                <div className="p-3.5 rounded-2xl bg-[#F7F6ED] border border-[#24543D]/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#173D31] text-[#FFD15C] flex items-center justify-center font-bold shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#173D31] block">Clinic Desk Hours</span>
                    <span className="text-[11px] text-[#203D40]/70">Mon – Sat: 8:00 AM – 7:30 PM | Sun: 9:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Ticket Form or Confirmation */}
            <div className="lg:col-span-7 bg-[#F7F6ED] p-6 sm:p-8 rounded-3xl border border-[#24543D]/10">
              {ticketSubmitted ? (
                <div className="text-center py-8 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#DDEBD5] text-[#173D31] flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8 text-[#24543D]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#24543D] block">
                    Ticket Received
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#203D40]">
                    Support Ticket #{ticketSubmitted}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#203D40]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{ticketForm.name}</strong>. Our Kathmandu client support coordinator has received your message regarding <strong>{ticketForm.petName || 'your pet'}</strong>. A confirmation SMS/Email has been dispatched to <strong>{ticketForm.phone}</strong>.
                  </p>
                  <div className="p-4 rounded-2xl bg-white border border-[#24543D]/10 max-w-sm mx-auto text-xs text-[#203D40]/80 text-left space-y-1">
                    <p><strong>Priority:</strong> {ticketForm.priority}</p>
                    <p><strong>Topic:</strong> {ticketForm.category}</p>
                    <p><strong>Estimated Response:</strong> Within 2 to 4 business hours</p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={handleResetTicket}
                      className="px-6 py-2.5 rounded-full bg-[#24543D] text-white hover:bg-[#173D31] font-bold text-xs transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleTicketSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#173D31] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={ticketForm.name}
                        onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#24543D]/20 text-xs text-[#203D40] focus:ring-2 focus:ring-[#24543D] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#173D31] mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={ticketForm.phone}
                        onChange={(e) => setTicketForm({ ...ticketForm, phone: e.target.value })}
                        placeholder="+977 98XXXXXXXX"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#24543D]/20 text-xs text-[#203D40] focus:ring-2 focus:ring-[#24543D] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#173D31] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={ticketForm.email}
                        onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#24543D]/20 text-xs text-[#203D40] focus:ring-2 focus:ring-[#24543D] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#173D31] mb-1">
                        Pet&apos;s Name &amp; Species
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={ticketForm.petName}
                          onChange={(e) => setTicketForm({ ...ticketForm, petName: e.target.value })}
                          placeholder="e.g. Bruno"
                          className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-[#24543D]/20 text-xs text-[#203D40] focus:ring-2 focus:ring-[#24543D] focus:outline-none"
                        />
                        <select
                          value={ticketForm.petSpecies}
                          onChange={(e) => setTicketForm({ ...ticketForm, petSpecies: e.target.value })}
                          className="px-3 py-2.5 rounded-xl bg-white border border-[#24543D]/20 text-xs text-[#203D40] focus:ring-2 focus:ring-[#24543D] focus:outline-none"
                        >
                          <option value="Dog">Dog</option>
                          <option value="Cat">Cat</option>
                          <option value="Rabbit">Rabbit</option>
                          <option value="Bird">Bird</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#173D31] mb-1">
                        Topic Category
                      </label>
                      <select
                        value={ticketForm.category}
                        onChange={(e) => setTicketForm({ ...ticketForm, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#24543D]/20 text-xs text-[#203D40] focus:ring-2 focus:ring-[#24543D] focus:outline-none"
                      >
                        <option value="Order & Delivery Inquiry">Order &amp; Delivery Inquiry</option>
                        <option value="Veterinary Consultation Booking">Veterinary Consultation Booking</option>
                        <option value="Prescription Diet Verification">Prescription Diet Verification</option>
                        <option value="Return / Damage Claim">Return / Damage Claim</option>
                        <option value="Billing & eSewa Payment">Billing &amp; eSewa Payment</option>
                        <option value="Other Medical Assistance">Other Medical Assistance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#173D31] mb-1">
                        Urgency Level
                      </label>
                      <select
                        value={ticketForm.priority}
                        onChange={(e) => setTicketForm({ ...ticketForm, priority: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#24543D]/20 text-xs text-[#203D40] focus:ring-2 focus:ring-[#24543D] focus:outline-none"
                      >
                        <option value="Normal">Normal (Standard inquiry)</option>
                        <option value="High Priority">High Priority (Delivery delayed / Vaccine due)</option>
                        <option value="Urgent Clinical">Urgent Clinical (Requires same-day vet contact)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#173D31] mb-1">
                      Message &amp; Case Notes *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={ticketForm.message}
                      onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                      placeholder="Please include order number, symptoms, preferred appointment time, or any specific instructions..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#24543D]/20 text-xs text-[#203D40] focus:ring-2 focus:ring-[#24543D] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-[#203D40]/80">
                      <input
                        type="checkbox"
                        checked={ticketForm.hasAttachment}
                        onChange={(e) => setTicketForm({ ...ticketForm, hasAttachment: e.target.checked })}
                        className="rounded text-[#24543D] focus:ring-[#24543D]"
                      />
                      <span>I have a prescription/photo to share via WhatsApp</span>
                    </label>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-3 rounded-full bg-[#24543D] hover:bg-[#173D31] text-white font-bold text-xs transition-all flex items-center gap-2 shadow-sm active:scale-95 disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{submitting ? 'Submitting...' : 'Submit Support Ticket'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ClientSupportPage;
