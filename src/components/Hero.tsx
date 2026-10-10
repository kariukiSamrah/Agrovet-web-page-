import React from 'react';
import { MessageSquare, ArrowDown, MapPin, Clock, Phone, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';
import { APP_IMAGES } from '../data/images';

interface HeroProps {
  onViewProducts: () => void;
  onViewLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProducts, onViewLocation }) => {
  return (
    <section className="relative bg-stone-900 text-white overflow-hidden">
      {/* Background Image with high-contrast darkening scrim for WCAG AA readability */}
      <div className="absolute inset-0 z-0">
        <img
          src={APP_IMAGES.hero}
          alt="Lush agricultural farming landscape in Nyeri County, Kenya"
          className="w-full h-full object-cover object-center scale-[1.02] filter brightness-[0.45] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-14 sm:pb-20">
        <div className="max-w-3xl">
          {/* Authentic Local Tag */}
          <div className="inline-flex items-center gap-2 mb-4 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Nyeri Town · Kanisa Road · Serving Central Kenya Farmers</span>
          </div>

          {/* Primary Headline exactly as requested */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5 [text-wrap:balance]">
            Everything Your Farm Needs, In One Place.
          </h1>

          {/* Supporting text exactly as requested */}
          <p className="text-base sm:text-xl text-stone-200 font-normal leading-relaxed mb-8 max-w-2xl">
            Quality farm inputs, animal-health products and practical agricultural solutions for farmers across Nyeri.
          </p>

          {/* Dual CTAs as requested */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <a
              href={getWhatsAppUrl('Hello Nyeri Farmers Agrovet, I would like to enquire about your products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
            >
              <MessageSquare className="w-5 h-5 text-emerald-200" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={onViewProducts}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-stone-100 bg-stone-800/80 hover:bg-stone-700/90 active:bg-stone-800 border border-stone-600/80 rounded-lg transition-all text-center cursor-pointer"
            >
              <span>View Products</span>
              <ArrowDown className="w-4 h-4 text-stone-300" />
            </button>
          </div>

          {/* Essential Quick Store Info: Location, Hours, Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-stone-700/80 text-xs sm:text-sm text-stone-300">
            <button
              onClick={onViewLocation}
              className="flex items-start gap-2.5 text-left hover:text-white transition-colors group cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-white group-hover:text-emerald-300">Store Location</span>
                <span className="text-stone-300 text-xs">Kanisa Rd, Opp. Municipal Market, Nyeri</span>
              </div>
            </button>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-white">Opening Hours</span>
                <span className="text-stone-300 text-xs">Mon–Sat: 7:00 AM – 6:30 PM (Sun: 9–2)</span>
              </div>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="flex items-start gap-2.5 hover:text-white transition-colors group"
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-white group-hover:text-emerald-300">Direct Phone</span>
                <span className="text-stone-300 text-xs">{BUSINESS_INFO.phoneDisplay} / M-Pesa Ready</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
