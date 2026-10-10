import React from 'react';
import { MapPin, Users, HeartHandshake, ShieldCheck } from 'lucide-react';
import { APP_IMAGES } from '../data/images';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';

export const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-14 sm:py-20 border-b border-stone-200" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Store Interior Image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm aspect-[4/3]">
              <img
                src={APP_IMAGES.store}
                alt="Inside Nyeri Farmers Agrovet shop on Kanisa Road"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Authentic location stamp */}
            <div className="mt-3 flex items-center gap-2 text-xs text-stone-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-emerald-800" />
              <span>Kanisa Road shop interior, Nyeri Town, Kenya</span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800">
                Rooted In Central Kenya
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 mb-4">
                Serving the Farmers of Nyeri County
              </h2>
            </div>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Nyeri Farmers Agrovet was founded with a straightforward conviction: smallholder farmers in Nyeri work too hard to risk their livelihoods on substandard seeds, poorly stored chemicals, or generic counter advice.
            </p>

            <p className="text-stone-600 text-sm leading-relaxed">
              Operating from our shop on Kanisa Road opposite the Municipal Market in Nyeri Town, we supply everyday farming families from Kieni, Mathira, Tetu, Mukurwe-ini, and Othaya. Whether you are tending two dairy cows in a zero-grazing unit, managing half an acre of potatoes, or running a poultry house, we treat your agricultural investment with the care it deserves.
            </p>

            <p className="text-stone-600 text-sm leading-relaxed">
              We focus on the fundamentals: keeping high-demand planting seeds sealed and dry, rotating animal health medicines to ensure fresh expiry dates, and taking time to explain proper spraying dosages and safety gear.
            </p>

            {/* Core commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
              <div className="p-3 bg-stone-50 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-emerald-800 mb-2" />
                <h4 className="font-bold text-xs text-stone-900 mb-1">Authentic Supply</h4>
                <p className="text-[11px] text-stone-600 leading-normal">
                  All seed and chemicals sourced only through approved official distributor channels.
                </p>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl">
                <Users className="w-5 h-5 text-emerald-800 mb-2" />
                <h4 className="font-bold text-xs text-stone-900 mb-1">Farmer-First Advice</h4>
                <p className="text-[11px] text-stone-600 leading-normal">
                  Practical guidance tailored to your elevation, soil type, and budget.
                </p>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl">
                <HeartHandshake className="w-5 h-5 text-emerald-800 mb-2" />
                <h4 className="font-bold text-xs text-stone-900 mb-1">Honest Dealings</h4>
                <p className="text-[11px] text-stone-600 leading-normal">
                  Transparent daily prices, accurate pack weights, and reliable customer service.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Hello Nyeri Farmers Agrovet, I read about your store and would like to connect.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
              >
                <span>Connect with our Nyeri shop team on WhatsApp →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
