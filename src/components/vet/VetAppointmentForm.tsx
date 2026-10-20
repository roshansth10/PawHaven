import React, { useState, useEffect } from 'react';

interface VetAppointmentFormProps {
  initialService?: string;
  showToast: (msg: string) => void;
}

const STORAGE_KEY = 'pawhaven_vet_draft';

export const VetAppointmentForm: React.FC<VetAppointmentFormProps> = ({
  initialService,
  showToast,
}) => {
  // Initialize from localStorage draft if available
  const [ownerName, setOwnerName] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved).ownerName || '' : '';
    } catch {
      return '';
    }
  });

  const [email, setEmail] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved).email || '' : '';
    } catch {
      return '';
    }
  });

  const [phone, setPhone] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved).phone || '' : '';
    } catch {
      return '';
    }
  });

  const [petName, setPetName] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved).petName || '' : '';
    } catch {
      return '';
    }
  });

  const [petType, setPetType] = useState<'Dog' | 'Cat' | 'Other'>('Dog');
  const [service, setService] = useState('General checkups');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (9:00 AM – 12:00 PM)');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync draft to localStorage on change
  useEffect(() => {
    try {
      const draft = { ownerName, email, phone, petName };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    } catch (e) {
      console.error(e);
    }
  }, [ownerName, email, phone, petName]);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  // Tomorrow's date string for min restriction
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!ownerName.trim()) errs.ownerName = 'Please enter your name.';
    if (!email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!phone.trim()) {
      errs.phone = 'Please provide a contact phone number.';
    } else if (phone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!petName.trim()) errs.petName = "Please enter your pet's name.";
    if (!date) errs.date = 'Please pick a preferred date.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please complete the required form fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Appointment request received! We will follow up shortly.');
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  const handleReset = () => {
    setOwnerName('');
    setEmail('');
    setPhone('');
    setPetName('');
    setDate('');
    setNotes('');
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="appointment-form" className="py-16 md:py-24 bg-white border-b border-black/5 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="text-xs font-bold text-[#204D3A] tracking-[0.2em] uppercase mb-2">
            CONSULTATION INQUIRY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#173D31] tracking-tight mb-4">
            Let&apos;s Find the Right Care for Your Pet.
          </h2>
          <p className="text-sm sm:text-base text-[#204D3A]/80 leading-relaxed font-normal">
            Tell us a little about your pet and the appointment you would like to request.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#F7F4EA] rounded-3xl p-6 sm:p-10 border border-[#204D3A]/10 shadow-sm">
          {isSubmitted ? (
            /* Success State */
            <div className="py-8 text-center animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-[#DDEBD5] text-[#204D3A] flex items-center justify-center mx-auto mb-5 font-bold">
                <span className="css-checkmark scale-125" aria-hidden="true"></span>
              </div>
              <h3 className="text-2xl font-bold text-[#173D31] mb-2">
                Appointment Request Received
              </h3>
              <p className="text-sm text-[#203D40]/80 max-w-md mx-auto leading-relaxed mb-6 font-normal">
                Thank you, <strong className="text-[#173D31]">{ownerName}</strong>. Your consultation inquiry for <strong className="text-[#173D31]">{petName}</strong> ({service}) on <strong className="text-[#173D31]">{date}</strong> ({timeSlot}) has been logged. Our clinic team will reach out to confirm your booking.
              </p>

              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#204D3A] text-white font-bold text-xs hover:bg-[#173D31] transition-all cursor-pointer shadow-sm"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Row 1: Owner Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="owner-name" className="block text-xs font-bold text-[#173D31] uppercase tracking-wider mb-2">
                    Your Full Name <span className="text-[#F59562]">*</span>
                  </label>
                  <input
                    id="owner-name"
                    type="text"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="e.g. Aarav Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#203D40] focus:outline-none focus:ring-2 focus:ring-[#204D3A] transition-all ${
                      errors.ownerName ? 'border-red-400 ring-1 ring-red-300' : 'border-black/10'
                    }`}
                  />
                  {errors.ownerName && (
                    <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.ownerName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="owner-email" className="block text-xs font-bold text-[#173D31] uppercase tracking-wider mb-2">
                    Email Address <span className="text-[#F59562]">*</span>
                  </label>
                  <input
                    id="owner-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. aarav@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#203D40] focus:outline-none focus:ring-2 focus:ring-[#204D3A] transition-all ${
                      errors.email ? 'border-red-400 ring-1 ring-red-300' : 'border-black/10'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone & Pet Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="owner-phone" className="block text-xs font-bold text-[#173D31] uppercase tracking-wider mb-2">
                    Phone Number <span className="text-[#F59562]">*</span>
                  </label>
                  <input
                    id="owner-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +977 9841234567"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#203D40] focus:outline-none focus:ring-2 focus:ring-[#204D3A] transition-all ${
                      errors.phone ? 'border-red-400 ring-1 ring-red-300' : 'border-black/10'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="pet-name" className="block text-xs font-bold text-[#173D31] uppercase tracking-wider mb-2">
                    Pet&apos;s Name <span className="text-[#F59562]">*</span>
                  </label>
                  <input
                    id="pet-name"
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="e.g. Milo"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#203D40] focus:outline-none focus:ring-2 focus:ring-[#204D3A] transition-all ${
                      errors.petName ? 'border-red-400 ring-1 ring-red-300' : 'border-black/10'
                    }`}
                  />
                  {errors.petName && (
                    <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.petName}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Pet Type & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#173D31] uppercase tracking-wider mb-2">
                    Pet Type <span className="text-[#F59562]">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Dog', 'Cat', 'Other'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPetType(type)}
                        className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                          petType === type
                            ? 'bg-[#204D3A] text-white border-[#204D3A]'
                            : 'bg-white text-[#203D40]/80 border-black/10 hover:border-[#204D3A]/30'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="vet-service-select" className="block text-xs font-bold text-[#173D31] uppercase tracking-wider mb-2">
                    Requested Service <span className="text-[#F59562]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="vet-service-select"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full appearance-none px-4 py-3 rounded-xl bg-white border border-black/10 text-sm text-[#203D40] focus:outline-none focus:ring-2 focus:ring-[#204D3A] cursor-pointer"
                    >
                      <option value="General checkups">General checkups</option>
                      <option value="Vaccinations">Vaccinations</option>
                      <option value="Diagnostic testing">Diagnostic testing</option>
                      <option value="Dental care">Dental care</option>
                      <option value="Surgery and treatment">Surgery and treatment</option>
                      <option value="Senior pet care">Senior pet care</option>
                      <option value="Nutrition and wellness guidance">Nutrition and wellness guidance</option>
                      <option value="Preventive care">Preventive care</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#203D40]/60">
                      <span className="css-chevron-down" aria-hidden="true"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="preferred-date" className="block text-xs font-bold text-[#173D31] uppercase tracking-wider mb-2">
                    Preferred Date <span className="text-[#F59562]">*</span>
                  </label>
                  <input
                    id="preferred-date"
                    type="date"
                    min={minDateString}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#203D40] focus:outline-none focus:ring-2 focus:ring-[#204D3A] transition-all cursor-pointer ${
                      errors.date ? 'border-red-400 ring-1 ring-red-300' : 'border-black/10'
                    }`}
                  />
                  {errors.date && (
                    <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferred-time" className="block text-xs font-bold text-[#173D31] uppercase tracking-wider mb-2">
                    Preferred Time Window <span className="text-[#F59562]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="preferred-time"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full appearance-none px-4 py-3 rounded-xl bg-white border border-black/10 text-sm text-[#203D40] focus:outline-none focus:ring-2 focus:ring-[#204D3A] cursor-pointer"
                    >
                      <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                      <option value="Evening (4:00 PM – 7:00 PM)">Evening (4:00 PM – 7:00 PM)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#203D40]/60">
                      <span className="css-chevron-down" aria-hidden="true"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 5: Notes */}
              <div>
                <label htmlFor="notes" className="block text-xs font-bold text-[#173D31] uppercase tracking-wider mb-2">
                  Additional Notes or Symptoms (Optional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share any routine notes, previous conditions, or questions for the doctor..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-sm text-[#203D40] focus:outline-none focus:ring-2 focus:ring-[#204D3A] resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#204D3A] text-white font-bold text-sm tracking-wide hover:bg-[#173D31] active:scale-[0.99] transition-all cursor-pointer shadow-md shadow-[#204D3A]/15 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Appointment Request</span>
                      <span className="css-arrow-right" aria-hidden="true"></span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

          {/* Disclaimers */}
          <div className="mt-8 pt-6 border-t border-[#204D3A]/10 text-xs text-[#203D40]/70 space-y-2">
            <p>
              <strong className="text-[#173D31]">Arrival guidance:</strong> Please arrive 10 minutes prior to your scheduled consultation time so your pet can settle calmly in our reception area.
            </p>
            <p className="text-[#203D40]/60">
              <strong className="text-[#173D31]">Urgent attention:</strong> For acute clinical emergencies such as heavy bleeding, breathing distress, sudden collapse, or toxin ingestion, contact a 24-hour emergency animal hospital directly.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
