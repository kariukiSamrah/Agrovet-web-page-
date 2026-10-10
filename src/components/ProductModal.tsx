import React, { useState } from 'react';
import { X, MessageSquare, Check, Phone, ShieldCheck, AlertCircle } from 'lucide-react';
import { Product } from '../data/products';
import { getProductWhatsAppMessage, getWhatsAppUrl, BUSINESS_INFO } from '../data/business';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const [selectedPack, setSelectedPack] = useState<string>(product.packSizes[0] || '');

  const whatsappMessage = getProductWhatsAppMessage(product.name, selectedPack);
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-start justify-between bg-stone-50">
          <div>
            <div className="flex items-center gap-2 text-xs text-stone-500 mb-1 font-medium">
              <span>{product.category}</span>
              {product.brand && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-800 font-semibold">{product.brand}</span>
                </>
              )}
            </div>
            <h3 className="text-xl font-bold text-stone-900 leading-snug">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Key Feature Callout */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-lg p-3.5 flex items-start gap-2.5 text-xs text-emerald-950">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Guaranteed Genuine: </span>
              <span>{product.keyFeature}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-2">
              Product Overview & Guidance
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Recommended Usage */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-1.5">
              Recommended For
            </h4>
            <p className="text-sm font-medium text-stone-900 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
              {product.popularFor}
            </p>
          </div>

          {/* Available Packaging Sizes */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                Available Packaging Sizes
              </h4>
              <span className="text-[11px] text-stone-400">Select to enquire</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.packSizes.map((pack) => (
                <button
                  key={pack}
                  type="button"
                  onClick={() => setSelectedPack(pack)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                    selectedPack === pack
                      ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm'
                      : 'bg-white text-stone-700 border-stone-300 hover:border-emerald-600'
                  }`}
                >
                  {pack}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Notice */}
          <div className="p-3 bg-amber-50/80 border border-amber-200/80 rounded-lg flex items-start gap-2 text-xs text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Pricing Notice: </span>
              <span>Contact for current price. Agricultural market prices fluctuate with seasonal supply; we provide today's direct in-store rate immediately on WhatsApp.</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phoneTel}`}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-200/70 hover:bg-stone-200 rounded-lg transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-800" />
            <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-sm transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask on WhatsApp ({selectedPack})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
