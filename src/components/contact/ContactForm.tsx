import React, { useState } from 'react';

type EnquiryReason =
  | 'General question'
  | 'Existing order'
  | 'Product information'
  | 'Veterinary care'
  | 'Other';

interface FormData {
  name: string;
  email: string;
  reason: EnquiryReason;
  orderNumber: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  orderNumber?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    reason: 'General question',
    orderNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (formData.reason === 'Existing order' && !formData.orderNumber.trim()) {
      errs.orderNumber = 'Please provide your order reference number (e.g., #PH-1042).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please include a message with at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || submitting) return;

    setSubmitting(true);

    // Simulate packaging and generate honest prefilled mail action
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleOpenEmailClient = () => {
    const targetEmail =
      formData.reason === 'Existing order'
        ? 'orders@pawhaven.np'
        : formData.reason === 'Veterinary care'
        ? 'clinic@pawhaven.np'
        : 'care@pawhaven.np';

    const subject = encodeURIComponent(
      `[PawHaven ${formData.reason}] Enquiry from ${formData.name}${
        formData.orderNumber ? ` (${formData.orderNumber})` : ''
      }`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nReason: ${formData.reason}\n${
        formData.orderNumber ? `Order Number: ${formData.orderNumber}\n` : ''
      }\nMessage:\n${formData.message}\n`
    );

    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      reason: 'General question',
      orderNumber: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 border border-[#24543D]/10 shadow-xs text-left">
      <div className="pb-6 border-b border-[#24543D]/10 mb-8 space-y-1">
        <span className="text-xs font-bold uppercase tracking-widest text-[#24543D] block">
          Send a Message
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#203D40] tracking-tight">
          How can we help you?
        </h2>
        <p className="text-xs sm:text-sm text-[#203D40]/75">
          Fill out the form below and we will follow up with personalized guidance.
        </p>
      </div>

      {submitted ? (
        <div className="py-8 space-y-6 text-center animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-[#DDEBD5] text-[#24543D] mx-auto flex items-center justify-center font-bold">
            <span className="css-checkmark" style={{ width: '10px', height: '18px' }} />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#203D40]">
              Message Prepared for Dispatch
            </h3>
            <p className="text-xs sm:text-sm text-[#203D40]/80 leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Your enquiry regarding{' '}
              <strong>{formData.reason}</strong> has been structured and routed to our{' '}
              <strong className="text-[#24543D]">
                {formData.reason === 'Existing order'
                  ? 'orders team'
                  : formData.reason === 'Veterinary care'
                  ? 'clinical team'
                  : 'care support team'}
              </strong>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F7F6ED] border border-[#24543D]/10 max-w-md mx-auto text-left text-xs space-y-2 text-[#203D40]/80">
            <p><strong>Sender:</strong> {formData.name} ({formData.email})</p>
            <p><strong>Topic:</strong> {formData.reason}</p>
            {formData.orderNumber && <p><strong>Order Ref:</strong> {formData.orderNumber}</p>}
            <p className="pt-1 text-[#203D40]/70 italic border-t border-gray-200">
              &ldquo;{formData.message}&rdquo;
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={handleOpenEmailClient}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#24543D] hover:bg-[#173D31] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Send via Email Application</span>
              <span className="font-mono text-sm leading-none">↗</span>
            </button>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#F7F6ED] hover:bg-[#DDEBD5] text-[#203D40] text-xs font-bold uppercase tracking-wider transition-all border border-[#24543D]/10"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label
                htmlFor="contact-name"
                className="text-xs font-bold text-[#203D40] uppercase tracking-wider block"
              >
                Your Name <span className="text-[#F59562]">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                placeholder="e.g., Alex Shrestha"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-[#203D40] bg-[#F7F6ED]/50 placeholder-[#203D40]/40 outline-none transition-all ${
                  errors.name
                    ? 'border-[#F59562] ring-2 ring-[#F59562]/20'
                    : 'border-[#24543D]/20 focus:border-[#24543D] focus:ring-2 focus:ring-[#24543D]/15'
                }`}
              />
              {errors.name && (
                <p className="text-[11px] font-semibold text-[#F59562] pt-0.5">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-email"
                className="text-xs font-bold text-[#203D40] uppercase tracking-wider block"
              >
                Email Address <span className="text-[#F59562]">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                placeholder="e.g., alex@example.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-[#203D40] bg-[#F7F6ED]/50 placeholder-[#203D40]/40 outline-none transition-all ${
                  errors.email
                    ? 'border-[#F59562] ring-2 ring-[#F59562]/20'
                    : 'border-[#24543D]/20 focus:border-[#24543D] focus:ring-2 focus:ring-[#24543D]/15'
                }`}
              />
              {errors.email && (
                <p className="text-[11px] font-semibold text-[#F59562] pt-0.5">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Reason for Enquiry */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact-reason"
              className="text-xs font-bold text-[#203D40] uppercase tracking-wider block"
            >
              Reason for Enquiry <span className="text-[#F59562]">*</span>
            </label>
            <select
              id="contact-reason"
              value={formData.reason}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  reason: e.target.value as EnquiryReason,
                });
              }}
              className="w-full px-4 py-3 rounded-xl border border-[#24543D]/20 text-sm text-[#203D40] bg-[#F7F6ED]/50 focus:border-[#24543D] focus:ring-2 focus:ring-[#24543D]/15 outline-none transition-all cursor-pointer"
            >
              <option value="General question">General question</option>
              <option value="Existing order">Existing order</option>
              <option value="Product information">Product information</option>
              <option value="Veterinary care">Veterinary care</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Conditional Field: Order Number (Shown ONLY when reason is 'Existing order') */}
          {formData.reason === 'Existing order' && (
            <div className="space-y-1.5 animate-fadeIn">
              <label
                htmlFor="contact-order-number"
                className="text-xs font-bold text-[#203D40] uppercase tracking-wider block"
              >
                Order Reference Number <span className="text-[#F59562]">*</span>
              </label>
              <input
                id="contact-order-number"
                type="text"
                value={formData.orderNumber}
                onChange={(e) => {
                  setFormData({ ...formData, orderNumber: e.target.value });
                  if (errors.orderNumber)
                    setErrors({ ...errors, orderNumber: undefined });
                }}
                placeholder="e.g., #PH-2849"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-[#203D40] bg-[#F7F6ED]/50 placeholder-[#203D40]/40 outline-none transition-all ${
                  errors.orderNumber
                    ? 'border-[#F59562] ring-2 ring-[#F59562]/20'
                    : 'border-[#24543D]/20 focus:border-[#24543D] focus:ring-2 focus:ring-[#24543D]/15'
                }`}
              />
              {errors.orderNumber && (
                <p className="text-[11px] font-semibold text-[#F59562] pt-0.5">
                  {errors.orderNumber}
                </p>
              )}
            </div>
          )}

          {/* Row 3: Message */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact-message"
              className="text-xs font-bold text-[#203D40] uppercase tracking-wider block"
            >
              Your Message <span className="text-[#F59562]">*</span>
            </label>
            <textarea
              id="contact-message"
              rows={5}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              placeholder="How can our veterinary and care staff assist you and your pet?"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#203D40] bg-[#F7F6ED]/50 placeholder-[#203D40]/40 outline-none transition-all resize-y ${
                errors.message
                  ? 'border-[#F59562] ring-2 ring-[#F59562]/20'
                  : 'border-[#24543D]/20 focus:border-[#24543D] focus:ring-2 focus:ring-[#24543D]/15'
              }`}
            />
            {errors.message && (
              <p className="text-[11px] font-semibold text-[#F59562] pt-0.5">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#24543D] hover:bg-[#173D31] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <span className="font-mono text-sm leading-none">→</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
