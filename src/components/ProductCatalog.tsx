import React, { useState, useMemo } from 'react';
import { Search, MessageSquare, Filter, ShieldCheck, ChevronRight, Info, Check } from 'lucide-react';
import { Product, PRODUCTS, CATEGORIES, CategoryType } from '../data/products';
import { getProductWhatsAppMessage, getWhatsAppUrl } from '../data/business';
import { ProductModal } from './ProductModal';

interface ProductCatalogProps {
  initialCategory?: CategoryType;
  onCategoryChange?: (category: CategoryType) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  initialCategory = 'All',
  onCategoryChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProductForModal, setActiveProductForModal] = useState<Product | null>(null);

  // Sync when initialCategory prop changes from outside (e.g. PopularCategories click)
  React.useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const handleCategorySelect = (category: CategoryType) => {
    setSelectedCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.brand && item.brand.toLowerCase().includes(q)) ||
        item.popularFor.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="bg-white py-14 sm:py-20 border-b border-stone-200" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800">
            Current Farm Inputs & Health Inventory
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1 mb-3">
            Products Catalogue
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Browse our core stock of certified seeds, specialized fertilizers, veterinary medicines, dairy rations, and farm equipment available at our Nyeri Town store.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4 mb-8">
          {/* Live Search Bar */}
          <div className="relative max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by seed variety, chemical name, feed, or problem (e.g. armyworm, blight, dairy meal)..."
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-800/40 focus:border-emerald-800 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs (Functional segmented buttons per frontend-design skill) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-emerald-800 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 hover:text-stone-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter & Price Notice */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-6 border-b border-stone-200 gap-2 text-xs text-stone-500 font-medium">
          <div>
            Showing <span className="font-bold text-stone-900">{filteredProducts.length}</span> products in{' '}
            <span className="text-emerald-800 font-semibold">{selectedCategory}</span>
            {searchQuery && <span> matching "{searchQuery}"</span>}
          </div>
          <div className="flex items-center gap-1.5 text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md">
            <Info className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
            <span>Pricing note: All items clearly marked <strong>Contact for current price</strong>.</span>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 rounded-xl border border-stone-200 p-6">
            <h3 className="text-base font-bold text-stone-800 mb-1">No products found</h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto mb-4">
              We may still have this item in stock at our Kanisa Road store or can source it directly for you.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-semibold bg-stone-200 text-stone-800 rounded-lg hover:bg-stone-300 transition-colors"
              >
                Reset Filters
              </button>
              <a
                href={getWhatsAppUrl(`Hello Nyeri Farmers Agrovet, I am searching for "${searchQuery}" which I didn't see on the website. Do you have it?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-bold bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 transition-colors"
              >
                Ask via WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const defaultPack = product.packSizes[0] || '';
              const whatsappUrl = getWhatsAppUrl(
                getProductWhatsAppMessage(product.name, defaultPack)
              );

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-stone-200/90 hover:border-emerald-800/40 hover:shadow-sm transition-all flex flex-col justify-between overflow-hidden group"
                >
                  {/* Visual Header / Brand Bar */}
                  <div className="p-4 sm:p-5 pb-0">
                    {/* Unboxed Metadata per Zero-Pill Discipline */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2 font-medium">
                      <span>{product.category}</span>
                      {product.brand && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-emerald-800 font-semibold">{product.brand}</span>
                        </>
                      )}
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-700">In Stock</span>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 leading-snug group-hover:text-emerald-900 transition-colors mb-2">
                      {product.name}
                    </h3>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-3">
                      {product.description}
                    </p>

                    {/* Pack sizes and purpose */}
                    <div className="space-y-1.5 text-xs text-stone-500 pt-2 border-t border-stone-100">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-stone-700">Packs:</span>
                        <span className="text-stone-600">{product.packSizes.join(', ')}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-stone-700 shrink-0">Use:</span>
                        <span className="text-stone-600 truncate">{product.popularFor}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action & Price Row */}
                  <div className="p-4 sm:p-5 pt-4 bg-stone-50/70 border-t border-stone-100 mt-4">
                    {/* Price status clearly labelled as requested */}
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="text-stone-500 font-medium">Price:</span>
                      <span className="font-bold text-emerald-950 bg-emerald-100/70 text-[11px] px-2 py-0.5 rounded">
                        Contact for current price
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setActiveProductForModal(product)}
                        className="w-full py-2 px-3 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors cursor-pointer text-center"
                      >
                        Details
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-3 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-sm text-center"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-200" />
                        <span>Ask on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal for Details */}
        <ProductModal
          product={activeProductForModal}
          onClose={() => setActiveProductForModal(null)}
        />
      </div>
    </section>
  );
};
