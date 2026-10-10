import React from 'react';
import { CheckCircle2, MapPin, Sparkles, Truck, Phone } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: 'Genuine Products',
      description: 'Zero tolerance for counterfeit seeds or diluted chemicals. Every seed bag carries KEPHIS certification and tamper-proof batch seals from official distributors.',
      detail: 'Direct distributor partnerships with Kenya Seed, Yara, Syngenta, Twiga, and Unga.',
      icon: CheckCircle2,
    },
    {
      title: 'Local Availability',
      description: 'Strategically located in Nyeri Town on Kanisa Road. We maintain robust inventory before the rains start, so you never get turned away during peak planting or spraying periods.',
      detail: 'Open 6 days a week from 7:00 AM, plus Sunday morning hours.',
      icon: MapPin,
    },
    {
      title: 'Practical Advice',
      description: 'You get field-tested guidance from trained agricultural staff who know Nyeri’s volcanic soils, altitude variations, and common pest outbreaks like Fall Armyworm and potato blight.',
      detail: 'Accurate chemical mixing ratios, dosage charts & withdrawal period guidelines.',
      icon: Sparkles,
    },
    {
      title: 'Convenient Ordering',
      description: 'Order via WhatsApp or phone call. We pack your inputs in advance for fast store collection or coordinate dispatch via local matatu/boda-boda courier across Nyeri County.',
      detail: 'M-Pesa payment accepted. Reserve your bags ahead of planting day.',
      icon: Truck,
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-20 border-b border-stone-200" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800">
            Trust & Reliability
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 mb-4">
            Why Farmers Choose Us
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Farming in Nyeri requires reliable inputs and trusted relationships. We work every day to ensure local farmers get genuine results from every shilling invested in their soil and livestock.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-stone-50 rounded-xl p-6 border border-stone-200/90 flex flex-col justify-between hover:border-emerald-800/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-800/10 text-emerald-800 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="text-[11px] text-stone-500 font-medium pt-3 border-t border-stone-200">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Action Bar */}
        <div className="mt-10 p-5 rounded-xl bg-emerald-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-base text-white">Need an input reserved or price checked for today?</h4>
            <p className="text-xs text-emerald-200">WhatsApp or call us directly. We pack orders ready for collection or courier.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="px-4 py-2 text-xs font-semibold bg-emerald-800 text-emerald-100 hover:bg-emerald-700 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={getWhatsAppUrl('Hello Nyeri Farmers Agrovet, I would like to check prices and reserve inputs for collection.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold bg-white text-emerald-950 hover:bg-stone-100 rounded-lg transition-colors shadow-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
