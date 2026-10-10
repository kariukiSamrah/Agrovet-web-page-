export interface FarmerService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyTopics: string[];
  recommendedInputs: string[];
  whatsappMessage: string;
  imageKey?: 'crop' | 'dairy' | 'poultry' | 'vet' | 'pest';
}

export const FARMER_SERVICES: FarmerService[] = [
  {
    id: 'crop-advisory',
    title: 'Crop Advisory',
    tagline: 'Practical agronomy for Nyeri soils and highland rainfall patterns',
    description: 'Get practical, soil-grounded guidance before you plant. We advise on certified seed selection matching your elevation (from low-rainfall Kieni plains to wet Tetu/Othaya slopes), spacing, basal fertilizer placement, and timely top-dressing to maximize your harvest.',
    keyTopics: [
      'Certified seed variety matching for altitude & season',
      'Basal DAP vs compound fertilizer placement at planting',
      'Timely CAN top-dressing schedule (knee-high stage)',
      'Soil acidity & agricultural lime application advice',
    ],
    recommendedInputs: [
      'DK 777 & H614D certified hybrid maize',
      'Gloria F1 cabbage & Anna F1 tomato seeds',
      'YaraMila Chawa & Soluble foliar sprays',
    ],
    whatsappMessage: 'Hello Nyeri Farmers Agrovet, I need crop advisory advice for my farm in Nyeri. What do you recommend?',
    imageKey: 'crop',
  },
  {
    id: 'livestock-health',
    title: 'Livestock Health Products',
    tagline: 'Preventive deworming, tick control, and herd wellness',
    description: 'Healthy animals mean steady farm income. We stock genuine veterinary dewormers, acaricides, antibiotics, and wound treatments. Our staff explains proper dosages, administration routes, and withdrawal periods to protect your animals and food safety.',
    keyTopics: [
      'Quarterly deworming rotation for cattle, sheep & goats',
      'Acaricide dipping / spraying rotation to beat tick resistance',
      'Foot rot prevention during muddy rains in Central Kenya',
      'Safe withdrawal periods for meat and milk',
    ],
    recommendedInputs: [
      'Albendazole 10% & Levamisole drench',
      'Triatix D.D. Amitraz tick dip concentrate',
      'Alamycin antibiotic wound spray',
      'Multivitamin injectable solutions',
    ],
    whatsappMessage: 'Hello Nyeri Farmers Agrovet, I would like to consult on livestock health products and deworming for my animals.',
    imageKey: 'vet',
  },
  {
    id: 'poultry-support',
    title: 'Poultry Support',
    tagline: 'From day-old chick brooding to peak laying performance',
    description: 'Whether you raise improved Kienyeji (KARI, Kuroiler, Kenbro), commercial broilers, or layers, we supply quality chick starter, grower, and layer feeds alongside vital brooder supplements, vaccine advisory, and coccidiosis treatments.',
    keyTopics: [
      'Brooder temperature management & anti-stress vitamins',
      'Vaccination schedule guidance (Gumboro, Newcastle, Fowl Pox)',
      'Coccidiosis prevention in deep litter systems',
      'Egg drop prevention & shell calcium supplementation',
    ],
    recommendedInputs: [
      'Vitalyte & Aliseryl anti-stress soluble powders',
      'Pembe & Unga starter, grower and layers mash',
      'Bell drinkers, tube feeders & brooding lamps',
    ],
    whatsappMessage: 'Hello Nyeri Farmers Agrovet, I need poultry support and advice on chicken feeds/medications.',
    imageKey: 'poultry',
  },
  {
    id: 'dairy-farming',
    title: 'Dairy Farming',
    tagline: 'High-yield nutrition, mineral licks, and mastitis prevention',
    description: 'Dairy is the backbone of Nyeri smallholders. We support zero-grazing and semi-intensive dairy farmers with high-protein dairy meal, mineral bricks, steaming-up rations for pregnant heifers, and post-milking teat dips to keep your somatic cell counts low.',
    keyTopics: [
      'Steaming up protocol in the final 6 weeks of gestation',
      'Calf early weaning programs to preserve milk income',
      'Daily mineral supplementation to prevent silent heat & milk fever',
      'Post-milking teat dipping & hygienic milking hygiene',
    ],
    recommendedInputs: [
      'High Yield 16% dairy lactation meal',
      'Maclik Super mineral bricks & powders',
      'Calf early weaner pellets',
      'Iodine teat dip concentrates & strip cups',
    ],
    whatsappMessage: 'Hello Nyeri Farmers Agrovet, I want to ask about dairy cow feeds, minerals, and mastitis prevention.',
    imageKey: 'dairy',
  },
  {
    id: 'pest-disease-management',
    title: 'Pest & Disease Management',
    tagline: 'Accurate problem identification and effective spray programs',
    description: 'Do not guess when crops show leaf spots or pest damage. Bring a sample or photos to our shop or WhatsApp. We help diagnose Fall Armyworm, tomato early/late blight, aphids, whiteflies, and Coffee Berry Disease (CBD), recommending the exact curative or preventive chemical.',
    keyTopics: [
      'Fall Armyworm & Tuta Absoluta chemical rotation',
      'Early vs late blight diagnosis in potatoes & tomatoes',
      'Coffee Berry Disease (CBD) & Leaf Rust spray calendar',
      'Safe sprayer calibration, water pH & personal safety (PPE)',
    ],
    recommendedInputs: [
      'Ridomil Gold & Nordox 75 WG copper fungicides',
      'Coragen 200 SC & Thunder insecticides',
      'Solo 425 16-litre knapsack sprayers & spare nozzles',
    ],
    whatsappMessage: 'Hello Nyeri Farmers Agrovet, I need help identifying and treating a pest or crop disease on my farm.',
    imageKey: 'pest',
  },
];
