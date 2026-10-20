import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="bg-[#173D31] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-[#DDEBD5]/30 flex items-center gap-3 max-w-sm">
        <div className="w-7 h-7 rounded-full bg-[#FFD15C] text-[#173D31] flex items-center justify-center shrink-0">
          <span className="css-checkmark" />
        </div>
        <p className="text-xs sm:text-sm font-semibold leading-tight text-left">
          {message}
        </p>
        <button
          onClick={onClose}
          className="text-[#DDEBD5]/70 hover:text-white ml-2 text-base font-bold"
          aria-label="Dismiss toast"
        >
          ×
        </button>
      </div>
    </div>
  );
};
