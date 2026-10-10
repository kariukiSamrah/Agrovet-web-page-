import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/business';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = 'Hello Nyeri Farmers Agrovet, I would like to enquire about your products.';
  const whatsappUrl = getWhatsAppUrl(defaultMessage);

  return (
    <aside aria-label="WhatsApp enquiry options" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2">
      {/* Informative Tooltip (can be dismissed) */}
      {showTooltip && (
        <div className="bg-stone-900 text-white text-xs py-2 px-3 rounded-xl shadow-lg border border-stone-700 max-w-[210px] hidden sm:flex items-center justify-between gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-ping" />
            <span className="font-medium">Need quick advice or today's price?</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-white p-0.5 rounded"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nyeri Farmers Agrovet on WhatsApp"
        className="group flex items-center gap-2.5 bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white pl-3.5 pr-4 py-3 rounded-full shadow-xl hover:shadow-2xl border-2 border-white transition-all transform hover:-translate-y-0.5"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 text-white fill-white/20" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-emerald-900" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[11px] leading-tight text-emerald-100 font-medium">WhatsApp Agrovet</span>
          <span className="text-xs font-extrabold tracking-tight leading-none">Chat With Us</span>
        </div>
      </a>
    </aside>
  );
};
