import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Send, CheckCircle2, AlertCircle, WifiOff, Smartphone } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const ContactSection: React.FC = () => {
  const isOnline = useOnlineStatus();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [need, setNeed] = useState('Seeds & Planting Inputs');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!phone.trim()) {
      setError('Please provide your phone number.');
      return;
    }
    setError('');

    // Persist to local storage for offline reliability
    try {
      const existing = JSON.parse(localStorage.getItem('nyeri_staged_enquiries') || '[]');
      existing.push({
        name,
        phone,
        need,
        message,
        timestamp: new Date().toISOString(),
        offline: !isOnline,
      });
      localStorage.setItem('nyeri_staged_enquiries', JSON.stringify(existing));
    } catch {
      // Ignore localStorage errors
    }

    setSubmitted(true);
  };

  const enquiryText = `Hello Nyeri Farmers Agrovet, my name is ${name} (Phone: ${phone}). I need assistance with: [${need}]. Message: ${message || 'Please let me know current availability and pricing.'}`;
  
  const getForwardWhatsAppUrl = () => {
    return getWhatsAppUrl(enquiryText);
  };

  const getSmsUrl = () => {
    return `sms:${BUSINESS_INFO.phoneTel}?body=${encodeURIComponent(enquiryText)}`;
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setNeed('Seeds & Planting Inputs');
    setMessage('');
    setSubmitted(false);
    setError('');
  };

  return (
    <section className="bg-white py-14 sm:py-20 border-b border-stone-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 mb-3">
            Contact Nyeri Farmers Agrovet
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Have a question about product stock, today’s fertilizer prices, or need advice on a diseased crop? Contact us or send an enquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Box */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/90 space-y-4">
              <h3 className="font-bold text-base text-stone-900">
                Direct Channels
              </h3>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-stone-500 uppercase">WhatsApp (Fastest Response)</span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-900 hover:underline text-sm"
                  >
                    +254 712 345 678 (Chat Now)
                  </a>
                  <span className="block text-xs text-stone-500">Available Mon–Sat during store hours</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-stone-200 text-stone-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-stone-500 uppercase">Direct Voice Call</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="font-bold text-stone-900 hover:text-emerald-800 text-sm"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <span className="block text-xs text-stone-500">Alternative: {BUSINESS_INFO.phoneAltDisplay}</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-stone-200 text-stone-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-stone-500 uppercase">Physical Store</span>
                  <span className="font-bold text-stone-900 text-sm">
                    {BUSINESS_INFO.location.street}
                  </span>
                  <span className="block text-xs text-stone-500">
                    {BUSINESS_INFO.location.town}, {BUSINESS_INFO.location.county}, Kenya
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-stone-200 text-stone-800 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-stone-500 uppercase">Operating Hours</span>
                  <span className="block text-xs text-stone-700">Mon – Sat: 7:00 AM – 6:30 PM</span>
                  <span className="block text-xs text-stone-700">Sunday: 9:00 AM – 2:00 PM</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 border border-emerald-200/80 rounded-xl text-xs text-emerald-950">
              <span className="font-bold">M-Pesa Buy Goods & Services: </span>
              <span>We accept Lipa na M-Pesa at our counter and for pre-orders sent by matatu parcel across Nyeri County.</span>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">
                  {isOnline ? 'Enquiry Received!' : 'Enquiry Saved Offline on Device!'}
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  {isOnline ? (
                    <>Thank you, <strong>{name}</strong>. We received your request regarding <strong>{need}</strong>. For the quickest immediate quote or confirmation of stock, you can send it directly to our WhatsApp with one click:</>
                  ) : (
                    <>Thank you, <strong>{name}</strong>. Your enquiry regarding <strong>{need}</strong> has been saved on this device. Since you are currently offline, you can dispatch it immediately via standard cellular SMS or voice call:</>
                  )}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
                  {!isOnline ? (
                    <>
                      <a
                        href={getSmsUrl()}
                        className="w-full sm:w-auto px-5 py-3 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-lg text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                      >
                        <Smartphone className="w-4 h-4 text-amber-200" />
                        <span>Send via Cellular SMS (No Internet Needed)</span>
                      </a>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneTel}`}
                        className="w-full sm:w-auto px-5 py-3 bg-stone-800 hover:bg-stone-900 text-white font-bold rounded-lg text-sm flex items-center justify-center gap-2 transition-all"
                      >
                        <Phone className="w-4 h-4 text-emerald-400" />
                        <span>Call Store: {BUSINESS_INFO.phoneDisplay}</span>
                      </a>
                    </>
                  ) : (
                    <a
                      href={getForwardWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-lg text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-200" />
                      <span>Send Directly via WhatsApp</span>
                    </a>
                  )}

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-3 bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 font-semibold rounded-lg text-sm transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isOnline && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center gap-2 text-xs text-amber-900 font-medium">
                    <WifiOff className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Offline: Form will save to this device with cellular SMS/Call backup.</span>
                  </div>
                )}
                <div className="border-b border-stone-200 pb-3 mb-2">
                  <h3 className="text-lg font-bold text-stone-900">
                    Send an Enquiry
                  </h3>
                  <p className="text-xs text-stone-500">
                    We'll respond promptly with product availability and current daily pricing.
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700 font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Mwangi or Grace Wanjiru"
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-800/40 focus:border-emerald-800"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Phone Number (Safaricom / Airtel) *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0712 345 678"
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-800/40 focus:border-emerald-800"
                  />
                </div>

                {/* What do you need? */}
                <div>
                  <label htmlFor="contact-need" className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    What do you need? *
                  </label>
                  <select
                    id="contact-need"
                    value={need}
                    onChange={(e) => setNeed(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-800/40 focus:border-emerald-800"
                  >
                    <option value="Seeds & Planting Inputs">Seeds (Maize, Cabbage, Tomato, Vegetables)</option>
                    <option value="Fertilizers & Foliar Feeds">Fertilizers (DAP, CAN, YaraMila, Foliar)</option>
                    <option value="Crop Protection / Sprays">Crop Protection (Blight Fungicide, Armyworm Spray, Herbicides)</option>
                    <option value="Animal Health & Veterinary">Animal Health (Dewormers, Tick Dip, Antibiotics)</option>
                    <option value="Dairy Feeds & Minerals">Dairy Farming (Dairy Meal, Maclik Minerals, Teat Dip)</option>
                    <option value="Poultry Feeds & Medication">Poultry (Chick Mash, Growers, Layers, Vitamins)</option>
                    <option value="Farm Equipment / Sprayers">Farm Equipment (Solo Knapsack Sprayers, Pruners)</option>
                    <option value="General Agronomy Advice">General Farming Consultation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Your Message / Specific Products or Quantity
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe what you want to plant, number of cows/chickens, or specific bag sizes needed..."
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-800/40 focus:border-emerald-800"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-lg text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Farm Enquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
