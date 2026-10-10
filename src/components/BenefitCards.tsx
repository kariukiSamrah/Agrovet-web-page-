import React from 'react';
import { ShieldCheck, HeartPulse, HelpCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/business';

interface BenefitCardsProps {
  onSelectCategory?: (category: string) => void;
  onSelectService?: (serviceId: string) => void;
}

export const BenefitCards: React.FC<BenefitCardsProps> = ({ onSelectCategory, onSelectService }) => {
  return (
    <section className="bg-white py-12 sm:py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-wider font-semibold text-emerald-800 mb-1">
            Built For Nyeri County Farmers
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            How We Support Your Farm's Productivity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Genuine Farm Inputs */}
          <div className="bg-stone-50 rounded-xl p-6 sm:p-7 border border-stone-200/90 hover:border-emerald-800/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-emerald-800/10 text-emerald-800 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Genuine Farm Inputs
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                We stock verified, KEPHIS-certified seeds, high-grade basal & top-dressing fertilizers, and vetted crop protection chemicals directly from registered manufacturers. No counterfeit seeds or diluted sprays.
              </p>
              <div className="text-xs text-stone-500 font-medium mb-6">
                Certified maize & vegetables · DAP/CAN · Blight & worm control
              </div>
            </div>

            <button
              onClick={() => onSelectCategory?.('Seeds')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors pt-3 border-t border-stone-200 cursor-pointer"
            >
              <span>Explore Seeds & Inputs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Animal Health Products */}
          <div className="bg-stone-50 rounded-xl p-6 sm:p-7 border border-stone-200/90 hover:border-emerald-800/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-emerald-800/10 text-emerald-800 flex items-center justify-center mb-5">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Animal Health Products
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Protect your dairy cows, sheep, goats, and poultry with genuine veterinary dewormers, acaricides for tick control, mastitis prevention washes, and high-protein feeds for maximum yield.
              </p>
              <div className="text-xs text-stone-500 font-medium mb-6">
                Dewormers · Triatix tick dip · Dairy meals · Poultry vitamins
              </div>
            </div>

            <button
              onClick={() => onSelectCategory?.('Animal Health')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors pt-3 border-t border-stone-200 cursor-pointer"
            >
              <span>View Animal Health Stock</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Practical Farming Support */}
          <div className="bg-stone-50 rounded-xl p-6 sm:p-7 border border-stone-200/90 hover:border-emerald-800/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-emerald-800/10 text-emerald-800 flex items-center justify-center mb-5">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Practical Farming Support
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                You don't just buy a product; you get experienced advice. We guide you on chemical mixing ratios, spray intervals, withdrawal periods, and the right seed varieties for your specific altitude in Nyeri.
              </p>
              <div className="text-xs text-stone-500 font-medium mb-6">
                Dosage guidance · Disease diagnosis · Direct WhatsApp assistance
              </div>
            </div>

            <a
              href={getWhatsAppUrl('Hello Nyeri Farmers Agrovet, I need agricultural advice for my farm.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors pt-3 border-t border-stone-200"
            >
              <span>Ask Our Agronomists</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
