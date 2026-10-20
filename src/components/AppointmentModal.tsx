import React, { useState } from 'react';
import { AppointmentData } from '../types';
import { VET_SERVICES } from '../data/mockProducts';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState<AppointmentData>({
    ownerName: '',
    phone: '',
    petName: '',
    petType: 'Dog',
    service: preselectedService || VET_SERVICES[0].name,
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.ownerName || !formData.phone || !formData.petName) return;

    // Persist demo state
    localStorage.setItem('pawhaven_demo_appointment', JSON.stringify(formData));
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-[#173D31]/50 backdrop-blur-xs transition-opacity"
      />

      <div
        data-lenis-prevent
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#24543D]/10 overflow-hidden z-10 animate-fadeIn my-8"
      >
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#DDEBD5]/50 border-b border-[#24543D]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#24543D] text-[#DDEBD5] flex items-center justify-center">
              <span className="css-icon-vet" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-[#203D40] leading-tight">
                Request Vet Appointment
              </h3>
              <span className="text-xs text-[#24543D] font-semibold">
                PawHaven Veterinary Care
              </span>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-9 h-9 rounded-full hover:bg-[#DDEBD5] flex items-center justify-center text-[#203D40] transition-colors"
            aria-label="Close appointment modal"
          >
            <span className="css-icon-close text-[#24543D]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#DDEBD5] text-[#24543D] mx-auto flex items-center justify-center">
                <span className="css-checkmark" style={{ width: '10px', height: '18px' }} />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-bold text-[#203D40]">
                  Appointment Request Received
                </h4>
                <p className="text-xs sm:text-sm text-[#203D40]/75 max-w-sm mx-auto">
                  Thank you, <strong>{formData.ownerName}</strong>! Our clinic coordinator will review your requested time for <strong>{formData.petName}</strong> and contact you via {formData.phone} to confirm.
                </p>
              </div>

              <div className="bg-[#F7F6ED] p-4 rounded-2xl border border-[#24543D]/10 text-left text-xs space-y-1.5 text-[#203D40]/80">
                <p><strong>Pet:</strong> {formData.petName} ({formData.petType})</p>
                <p><strong>Requested Service:</strong> {formData.service}</p>
                <p><strong>Requested Date:</strong> {formData.preferredDate || 'Earliest available'}</p>
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-8 py-3 rounded-full bg-[#24543D] text-white text-sm font-bold hover:bg-[#173D31] transition-all shadow-md"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#203D40] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    placeholder="e.g. Sujan Shrestha"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#24543D]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#24543D] bg-[#F7F6ED]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#203D40] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+977 98XXXXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#24543D]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#24543D] bg-[#F7F6ED]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#203D40] mb-1">
                    Pet&apos;s Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.petName}
                    onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                    placeholder="e.g. Bruno or Milo"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#24543D]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#24543D] bg-[#F7F6ED]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#203D40] mb-1">
                    Pet Type
                  </label>
                  <select
                    value={formData.petType}
                    onChange={(e) => setFormData({ ...formData, petType: e.target.value as 'Dog' | 'Cat' | 'Other' })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#24543D]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#24543D] bg-[#F7F6ED]/40"
                  >
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Other">Other Pet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203D40] mb-1">
                  Service Required
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#24543D]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#24543D] bg-[#F7F6ED]/40"
                >
                  {VET_SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#203D40] mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#24543D]/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#24543D] bg-[#F7F6ED]/40"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#24543D] hover:bg-[#173D31] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-95"
                >
                  Confirm Appointment Request
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
