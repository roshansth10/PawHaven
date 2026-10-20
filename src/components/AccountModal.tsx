import React from 'react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#173D31]/40 backdrop-blur-xs transition-opacity"
      />

      <div
        data-lenis-prevent
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#24543D]/10 overflow-hidden z-10 p-6 animate-fadeIn text-left"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#24543D]/10">
          <div className="flex items-center gap-2.5">
            <span className="css-icon-user text-[#24543D]" />
            <h3 className="text-lg font-bold text-[#203D40]">
              Pet Parent Portal
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#DDEBD5] flex items-center justify-center text-[#203D40]"
          >
            <span className="css-icon-close text-[#24543D]" />
          </button>
        </div>

        <div className="py-5 space-y-4">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#DDEBD5]/50 border border-[#24543D]/10">
            <div className="w-12 h-12 rounded-full bg-[#24543D] text-white flex items-center justify-center font-bold text-lg">
              SS
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#203D40]">Sujan Shrestha</h4>
              <p className="text-xs text-[#203D40]/70">Pet Parent • Golden Retriever (Bruno)</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 rounded-xl bg-[#F7F6ED] border border-[#24543D]/10">
              <span className="text-lg font-extrabold text-[#24543D] block">450</span>
              <span className="text-[11px] font-semibold text-[#203D40]/70 uppercase">Paw Points</span>
            </div>
            <div className="p-3 rounded-xl bg-[#F7F6ED] border border-[#24543D]/10">
              <span className="text-lg font-extrabold text-[#24543D] block">Active</span>
              <span className="text-[11px] font-semibold text-[#203D40]/70 uppercase">Wellness Plan</span>
            </div>
          </div>

          <div className="text-xs text-[#203D40]/70 space-y-2 pt-1">
            <p className="flex items-center justify-between py-1 border-b border-gray-100">
              <span>Next Routine Vet Checkup</span>
              <strong className="text-[#24543D]">Nov 14, 2026</strong>
            </p>
            <p className="flex items-center justify-between py-1 border-b border-gray-100">
              <span>Primary Vet</span>
              <strong className="text-[#24543D]">Dr. Anisha Sharma</strong>
            </p>
          </div>

          <p className="text-[11px] text-[#203D40]/50 text-center pt-2">
            Manage your companion appointments, wellness plans, and nutrition orders.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-full bg-[#24543D] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#173D31] transition-all"
        >
          Close Portal
        </button>
      </div>
    </div>
  );
};
