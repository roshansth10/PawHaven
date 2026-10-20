import React from 'react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#24543D]/10 text-left space-y-8 shadow-xs">
      
      {/* Block 1: Contact Routes */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#24543D]" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#24543D]">
            Direct Channels
          </h3>
        </div>

        <div className="space-y-4 pt-1">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#203D40] block">General Enquiries</span>
            <p className="text-xs text-[#203D40]/70">
              For questions regarding our care approach, services, or general support.
            </p>
            <a
              href="mailto:care@pawhaven.np"
              className="text-xs font-bold text-[#24543D] hover:underline block pt-0.5"
            >
              care@pawhaven.np
            </a>
          </div>

          <div className="h-px bg-[#24543D]/10" />

          <div className="space-y-1">
            <span className="text-xs font-bold text-[#203D40] block">Order &amp; Product Assistance</span>
            <p className="text-xs text-[#203D40]/70">
              For active order status, nutrition advice, or delivery updates in the valley.
            </p>
            <a
              href="mailto:orders@pawhaven.np"
              className="text-xs font-bold text-[#24543D] hover:underline block pt-0.5"
            >
              orders@pawhaven.np
            </a>
          </div>

          <div className="h-px bg-[#24543D]/10" />

          <div className="space-y-1">
            <span className="text-xs font-bold text-[#203D40] block">Veterinary Consultations</span>
            <p className="text-xs text-[#203D40]/70">
              For medical checkups, wellness plans, and vaccination schedules.
            </p>
            <a
              href="mailto:clinic@pawhaven.np"
              className="text-xs font-bold text-[#24543D] hover:underline block pt-0.5"
            >
              clinic@pawhaven.np
            </a>
          </div>
        </div>
      </div>

      {/* Block 2: Hours & Care Windows */}
      <div className="space-y-3 pt-2 border-t border-[#24543D]/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FFD15C]" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#24543D]">
            Care Hours &amp; Response
          </h3>
        </div>

        <div className="text-xs text-[#203D40]/80 space-y-1.5 font-medium">
          <div className="flex items-center justify-between py-1 border-b border-gray-100">
            <span>Monday – Saturday</span>
            <strong className="text-[#203D40]">8:00 AM – 7:30 PM</strong>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-gray-100">
            <span>Sunday</span>
            <strong className="text-[#203D40]">9:00 AM – 5:00 PM</strong>
          </div>
          <div className="flex items-center justify-between py-1 text-[#24543D]">
            <span>Email Response Window</span>
            <strong>Within 24 business hours</strong>
          </div>
        </div>
      </div>

      {/* Block 3: Urgent / Emergency Notice */}
      <div className="p-4 rounded-2xl bg-[#DDEBD5]/40 border border-[#24543D]/15 space-y-1">
        <span className="text-xs font-bold text-[#24543D] uppercase tracking-wider block">
          Urgent Medical Notice
        </span>
        <p className="text-xs text-[#203D40]/80 leading-relaxed">
          If your pet is experiencing acute breathing distress, suspected poisoning, or sudden trauma, please bring them immediately to an emergency veterinary hospital rather than waiting for an online response.
        </p>
      </div>

    </div>
  );
};
