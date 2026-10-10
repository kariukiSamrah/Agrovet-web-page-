import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const TopNoticeBar: React.FC = () => {
  return (
    <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900/60 font-medium">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>{BUSINESS_INFO.location.street}, {BUSINESS_INFO.location.town}</span>
          <span className="hidden md:inline text-emerald-600">|</span>
          <span className="hidden md:inline text-emerald-300">Opposite Municipal Market</span>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6 text-xs">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Mon–Sat: 7:00 AM – 6:30 PM</span>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneTel}`}
            className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="font-semibold">{BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
