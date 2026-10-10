import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, HelpCircle } from 'lucide-react';
import { FARMER_SERVICES, FarmerService } from '../data/services';
import { getWhatsAppUrl } from '../data/business';
import { APP_IMAGES } from '../data/images';

export const FarmerServices: React.FC = () => {
  return (
    <section className="bg-stone-50 py-14 sm:py-20 border-b border-stone-200" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800">
            Field-Tested Knowledge
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 mb-3">
            Farmer Advisory & Support Services
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Good inputs require good agronomy. We don't just sell boxes over the counter—our team helps Nyeri smallholder farmers solve real problems in the field, from seedling emergence to milk yields.
          </p>
        </div>

        {/* 5 Distinct Service Sections as requested */}
        <div className="space-y-10">
          {FARMER_SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;
            const whatsappLink = getWhatsAppUrl(service.whatsappMessage);

            // Select matching generated photography or thematic visual
            let visualAsset = null;
            if (service.id === 'dairy-farming') {
              visualAsset = APP_IMAGES.dairy;
            } else if (service.id === 'crop-advisory' || service.id === 'pest-disease-management') {
              visualAsset = APP_IMAGES.crops;
            }

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm"
              >
                <div className={`grid grid-cols-1 ${visualAsset ? 'lg:grid-cols-12' : ''} gap-0`}>
                  {/* Visual column if available */}
                  {visualAsset && (
                    <div
                      className={`lg:col-span-5 relative min-h-[220px] lg:min-h-full ${
                        isReversed ? 'lg:order-last' : ''
                      }`}
                    >
                      <img
                        src={visualAsset}
                        alt={`${service.title} in Nyeri Kenya`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-stone-900/10" />
                    </div>
                  )}

                  {/* Content column */}
                  <div
                    className={`${
                      visualAsset ? 'lg:col-span-7' : 'w-full'
                    } p-6 sm:p-8 flex flex-col justify-between`}
                  >
                    <div>
                      {/* Editorial Index */}
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 mb-2">
                        <span>0{index + 1}.</span>
                        <span>{service.tagline}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                        {service.title}
                      </h3>

                      <p className="text-stone-600 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {/* What we help you with */}
                        <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                          <h4 className="text-xs uppercase font-bold text-stone-800 mb-2.5">
                            Key Advisory Areas
                          </h4>
                          <ul className="space-y-1.5 text-xs text-stone-600">
                            {service.keyTopics.map((topic, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Proven Inputs */}
                        <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                          <h4 className="text-xs uppercase font-bold text-stone-800 mb-2.5">
                            Relevant Stock
                          </h4>
                          <ul className="space-y-1.5 text-xs text-stone-600">
                            {service.recommendedInputs.map((input, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                                <span>{input}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Mandatory ending CTA: "Ask Us About This → WhatsApp" */}
                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="text-xs text-stone-500 font-medium">
                        Have a specific question or field issue right now?
                      </span>

                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 rounded-lg shadow-sm transition-all whitespace-nowrap"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-200" />
                        <span>Ask Us About This → WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
