import React from 'react';
import { Sprout, Layers, Bug, HeartPulse, Egg, Milk, Wrench, ArrowRight } from 'lucide-react';
import { CategoryType } from '../data/products';

interface PopularCategoriesProps {
  onSelectCategory: (category: CategoryType) => void;
  selectedCategory: CategoryType;
}

interface CategoryItem {
  id: CategoryType;
  title: string;
  tagline: string;
  count: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORY_ITEMS: CategoryItem[] = [
  {
    id: 'Seeds',
    title: 'Seeds',
    tagline: 'Certified hybrid maize, beans, cabbages & vegetables',
    count: 'Certified KEPHIS',
    icon: Sprout,
  },
  {
    id: 'Fertilizers',
    title: 'Fertilizers',
    tagline: 'Basal planting DAP, CAN top-dress & foliar feeds',
    count: 'Planting & Topdress',
    icon: Layers,
  },
  {
    id: 'Crop Protection',
    title: 'Crop Protection',
    tagline: 'Fungicides for blight, armyworm insecticides & herbicides',
    count: 'Targeted Sprays',
    icon: Bug,
  },
  {
    id: 'Animal Health',
    title: 'Animal Health',
    tagline: 'Dewormers, tick dip concentrates, sprays & antibiotics',
    count: 'Veterinary Grade',
    icon: HeartPulse,
  },
  {
    id: 'Poultry',
    title: 'Poultry',
    tagline: 'Chick starter, growers, layer feed & soluble vitamins',
    count: 'Feeds & Health',
    icon: Egg,
  },
  {
    id: 'Dairy',
    title: 'Dairy',
    tagline: 'High yield dairy meal, mineral bricks & teat disinfectants',
    count: 'Lactation Boost',
    icon: Milk,
  },
  {
    id: 'Farm Equipment',
    title: 'Farm Equipment',
    tagline: 'Original Solo knapsack sprayers, pruning shears & drinkers',
    count: 'Field Hardware',
    icon: Wrench,
  },
];

export const PopularCategories: React.FC<PopularCategoriesProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  return (
    <section className="bg-stone-50 py-12 sm:py-16 border-b border-stone-200" id="categories-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800">
              Complete Agricultural Supply
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
              Popular Categories
            </h2>
          </div>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md">
            Click any department below to view available inputs, pack sizes, and ask for current in-store pricing on WhatsApp.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {CATEGORY_ITEMS.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`text-left p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-900 text-white border-emerald-950 shadow-md ring-2 ring-emerald-800/30'
                    : 'bg-white text-stone-900 border-stone-200/90 hover:border-emerald-700/60 hover:shadow-sm'
                }`}
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                      isSelected
                        ? 'bg-white/10 text-white'
                        : 'bg-emerald-800/10 text-emerald-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`font-bold text-base sm:text-lg mb-1 ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                    {cat.title}
                  </h3>
                  <p className={`text-xs line-clamp-2 leading-relaxed mb-3 ${isSelected ? 'text-emerald-100' : 'text-stone-500'}`}>
                    {cat.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-stone-100/10">
                  <span className={`text-[11px] font-medium ${isSelected ? 'text-emerald-200' : 'text-stone-400'}`}>
                    {cat.count}
                  </span>
                  <span className={`text-xs font-semibold flex items-center gap-1 ${isSelected ? 'text-emerald-200' : 'text-emerald-800'}`}>
                    <span>Browse</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            );
          })}

          {/* Quick All Products View */}
          <button
            onClick={() => onSelectCategory('All')}
            className={`text-left p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
              selectedCategory === 'All'
                ? 'bg-emerald-900 text-white border-emerald-950 shadow-md'
                : 'bg-emerald-50/60 text-emerald-950 border-emerald-200 hover:bg-emerald-100/60'
            }`}
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-800 text-white flex items-center justify-center mb-3">
                <span className="font-bold text-sm">ALL</span>
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-1">
                Full Catalogue
              </h3>
              <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                View all seeds, feeds, veterinary items and sprayers in one list.
              </p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] font-medium text-emerald-800">25+ Core Products</span>
              <span className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                <span>View All</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
