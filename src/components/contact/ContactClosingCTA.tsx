import React from 'react';
import { AnimatedText } from '../common/AnimatedText';

interface ContactClosingCTAProps {
  onScrollToForm: () => void;
}

export const ContactClosingCTA: React.FC<ContactClosingCTAProps> = ({
  onScrollToForm,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-[#F7F6ED] border-t border-[#24543D]/10 text-[#203D40] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#24543D] block">
          Get in Touch
        </span>

        <AnimatedText
          text="Every good relationship starts with a conversation."
          as="h2"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#203D40] tracking-tight leading-tight max-w-2xl mx-auto"
        />

        <p className="text-sm sm:text-base text-[#203D40]/75 max-w-lg mx-auto leading-relaxed font-normal">
          Whether you are preparing for a new puppy, seeking clinical advice, or simply checking on an order — our team is here to help.
        </p>

        <div className="pt-3 flex items-center justify-center">
          <button
            onClick={onScrollToForm}
            className="cursor-pointer px-8 py-3.5 rounded-full bg-[#24543D] hover:bg-[#173D31] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all active:scale-95 flex items-center gap-2 group"
          >
            <span>Send a Message</span>
            <span className="font-mono text-sm leading-none group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
