import React from 'react';
import { MapPin, Navigation, Clock, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';

export const StoreLocation: React.FC = () => {
  return (
    <section className="bg-stone-50 py-14 sm:py-20 border-b border-stone-200" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800">
            Physical Store
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 mb-3">
            Visit Our Store in Nyeri Town
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Conveniently situated right in the center of Nyeri Town for easy access whether you're arriving by matatu from Karatina, Othaya, Mukurwe-ini, or Kieni.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              {/* Location */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>Physical Address</span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-1">
                  {BUSINESS_INFO.location.street}
                </h3>
                <p className="text-sm text-stone-600">
                  {BUSINESS_INFO.location.town}, {BUSINESS_INFO.location.county}, Kenya
                </p>
                <div className="mt-2 text-xs text-stone-500 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                  <strong>Landmark: </strong> {BUSINESS_INFO.location.landmark}
                </div>
              </div>

              {/* Hours */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2.5">
                  <Clock className="w-4 h-4 text-emerald-700" />
                  <span>Store Hours</span>
                </div>
                <div className="space-y-1.5 text-xs text-stone-700">
                  {BUSINESS_INFO.hours.map((h, i) => (
                    <div key={i} className="flex items-center justify-between py-1 border-b border-stone-100 last:border-0">
                      <span className="font-medium text-stone-600">{h.days}</span>
                      <span className="font-semibold text-stone-900">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contacts */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>Call & WhatsApp</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500 text-xs">Primary Line:</span>
                    <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="font-bold text-stone-900 hover:text-emerald-800">
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500 text-xs">Alternative:</span>
                    <a href={`tel:${BUSINESS_INFO.phoneAltTel}`} className="font-semibold text-stone-700 hover:text-emerald-800">
                      {BUSINESS_INFO.phoneAltDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-stone-100 flex flex-col gap-2.5 mt-6">
              <a
                href={BUSINESS_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-lg text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4 text-emerald-200" />
                <span>Get Directions (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={getWhatsAppUrl('Hello Nyeri Farmers Agrovet, I am on my way to your shop on Kanisa Road and need directions.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200/80 text-stone-800 font-semibold rounded-lg text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-800" />
                <span>Ask for Directions on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Map Placeholder / Interactive Visual Guide */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
            {/* Map Header */}
            <div className="p-4 bg-stone-100 border-b border-stone-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-semibold text-stone-800">
                <MapPin className="w-4 h-4 text-emerald-800" />
                <span>Nyeri Central Business District & Market Area</span>
              </div>
              <span className="text-stone-500 text-[11px]">GPS: -0.4246, 36.9518</span>
            </div>

            {/* Stylized Town Map Graphic */}
            <div className="relative flex-1 bg-stone-200 min-h-[300px] flex items-center justify-center p-6 overflow-hidden">
              {/* Stylized Town Grid SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#a8a29e" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                {/* Street Lines */}
                <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#78716c" strokeWidth="6" />
                <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#78716c" strokeWidth="6" />
                <line x1="20%" y1="20%" x2="80%" y2="80%" stroke="#a8a29e" strokeWidth="4" />
              </svg>

              {/* Surrounding Landmark Labels */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xs px-2.5 py-1.5 rounded text-[11px] font-semibold text-stone-700 border border-stone-300 shadow-xs">
                To Nyeri Main Stage ➔
              </div>
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-xs px-2.5 py-1.5 rounded text-[11px] font-semibold text-stone-700 border border-stone-300 shadow-xs">
                Municipal Market Entrance
              </div>
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-xs px-2.5 py-1.5 rounded text-[11px] font-medium text-stone-600 border border-stone-300 shadow-xs">
                Kanisa Road
              </div>

              {/* Pinpoint Anchor for Nyeri Farmers Agrovet */}
              <div className="relative z-10 bg-white rounded-xl p-4 shadow-xl border-2 border-emerald-800 max-w-xs text-center animate-bounce-subtle">
                <div className="w-10 h-10 mx-auto rounded-full bg-emerald-800 text-white flex items-center justify-center mb-2 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-stone-900 text-sm">
                  Nyeri Farmers Agrovet
                </h4>
                <p className="text-xs text-stone-600 mt-0.5">
                  Kanisa Road (Opp. Municipal Market)
                </p>
                <div className="mt-3">
                  <a
                    href={BUSINESS_INFO.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 hover:text-emerald-950 underline"
                  >
                    Open Live GPS Navigation
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Transport Directions */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 text-xs text-stone-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span><strong>Coming by Matatu?</strong> Alight at Nyeri Main Stage, walk 200m down Kanisa Road toward the market.</span>
              <a
                href={BUSINESS_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-800 font-bold hover:underline shrink-0"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
