export const BUSINESS_INFO = {
  name: 'Nyeri Farmers Agrovet',
  tagline: 'Everything Your Farm Needs, In One Place.',
  phoneDisplay: '0712 345 678',
  phoneTel: '+254712345678',
  phoneAltDisplay: '0722 890 123',
  phoneAltTel: '+254722890123',
  whatsappNumber: '254712345678',
  location: {
    street: 'Kanisa Road, Opposite Municipal Market',
    town: 'Nyeri Town',
    county: 'Nyeri County',
    country: 'Kenya',
    landmark: 'Directly opposite the main Nyeri Municipal Market entrance, 2 minutes from Nyeri Main Stage.',
    googleMapsUrl: 'https://maps.google.com/?q=-0.4246,36.9518',
    coordinates: {
      lat: -0.4246,
      lng: 36.9518,
    },
  },
  hours: [
    { days: 'Monday – Friday', time: '7:00 AM – 6:30 PM' },
    { days: 'Saturday', time: '7:00 AM – 6:30 PM' },
    { days: 'Sunday', time: '9:00 AM – 2:00 PM' },
    { days: 'Public Holidays', time: '8:00 AM – 4:00 PM (Planting Season)' },
  ],
  servicesSummary: 'Certified Seeds · Fertilizers · Veterinary Drugs · Dairy Meals · Poultry Feeds · Knapsack Sprayers · Agronomy Advice',
  mpesaAccepted: 'M-Pesa Buy Goods Till & Cash Accepted',
};

/**
 * Generates an encoded WhatsApp direct link with contextual greeting
 */
export function getWhatsAppUrl(customText?: string): string {
  const defaultText = 'Hello Nyeri Farmers Agrovet, I would like to enquire about your products and services.';
  const message = customText && customText.trim() ? customText : defaultText;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats product inquiry message
 */
export function getProductWhatsAppMessage(productName: string, packSize?: string): string {
  if (packSize) {
    return `Hello Nyeri Farmers Agrovet, I am inquiring about ${productName} (${packSize}). Is it currently in stock and what is today's price?`;
  }
  return `Hello Nyeri Farmers Agrovet, I am inquiring about ${productName}. Is it currently in stock and what is today's price?`;
}
