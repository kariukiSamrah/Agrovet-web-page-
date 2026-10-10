import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-14 pb-24 sm:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Purpose */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold text-base">
                N
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                Nyeri Farmers Agrovet
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Your dependable partner in Nyeri Town for genuine certified crop seeds, fertilizers, veterinary medicines, dairy rations, and farmer-first agronomic advisory.
            </p>
            <div className="text-xs text-emerald-400 font-medium">
              Serving: Nyeri Central · Kieni · Mathira · Tetu · Mukurwe-ini · Othaya
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-stone-200 tracking-wider">
              Departments
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Certified Seeds & Hybrid Maize
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Basal & Top-Dressing Fertilizers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Crop Protection & Blight Sprays
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Dairy Meals & Mineral Bricks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Veterinary Dewormers & Acaricides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Farmer Advisory Services
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Store Info & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-stone-200 tracking-wider">
              Shop Location & Hours
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Kanisa Road, Opposite Municipal Market, Nyeri Town, Kenya</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-stone-300 font-medium">Mon–Sat: 7:00 AM – 6:30 PM</span>
                  <span className="block">Sunday: 9:00 AM – 2:00 PM</span>
                </div>
              </div>
              <div className="text-emerald-400 font-semibold pt-1">
                Lipa Na M-Pesa Available
              </div>
            </div>
          </div>

          {/* Col 4: Contact Action */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-stone-200 tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center gap-2 text-stone-300 hover:text-white font-medium"
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>{BUSINESS_INFO.phoneDisplay} / {BUSINESS_INFO.phoneAltDisplay}</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-white font-medium"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp: +254 712 345 678</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Hello Nyeri Farmers Agrovet, I am checking prices for farm inputs today.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-2 px-3 text-center text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Nyeri Farmers Agrovet. All rights reserved. Kanisa Road, Nyeri Town, Kenya.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-stone-200 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
