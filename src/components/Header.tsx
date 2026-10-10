import React, { useState } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/business';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Zone 1: Single brand wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group text-left"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            N
          </div>
          <div>
            <span className="block font-extrabold text-base sm:text-lg tracking-tight text-stone-900 group-hover:text-emerald-800 transition-colors">
              Nyeri Farmers Agrovet
            </span>
            <span className="block text-[11px] text-stone-500 font-medium -mt-1">
              Kanisa Rd · Nyeri Town
            </span>
          </div>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-stone-700">
          <button
            onClick={() => handleNavClick('products')}
            className="hover:text-emerald-800 transition-colors cursor-pointer py-1 text-left"
          >
            Products
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="hover:text-emerald-800 transition-colors cursor-pointer py-1 text-left"
          >
            Farmer Services
          </button>
          <button
            onClick={() => handleNavClick('why-us')}
            className="hover:text-emerald-800 transition-colors cursor-pointer py-1 text-left"
          >
            Why Choose Us
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-emerald-800 transition-colors cursor-pointer py-1 text-left"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('location')}
            className="hover:text-emerald-800 transition-colors cursor-pointer py-1 text-left"
          >
            Visit Store
          </button>
        </nav>

        {/* Zone 3: Primary Action buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <PWAInstallButton variant="header" />

          <a
            href={`tel:${BUSINESS_INFO.phoneTel}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 hover:text-emerald-900 transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-700" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href={getWhatsAppUrl('Hello Nyeri Farmers Agrovet, I am browsing your website and would like to enquire about products in your Nyeri shop.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 active:scale-[0.98] transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-200 fill-emerald-200/20" />
            <span className="whitespace-nowrap">WhatsApp Us</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('products')}
              className="w-full text-left px-3 py-2.5 rounded-md text-stone-800 font-semibold hover:bg-stone-50"
            >
              Browse Products Catalogue
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="w-full text-left px-3 py-2.5 rounded-md text-stone-800 font-semibold hover:bg-stone-50"
            >
              Farmer Services & Advisory
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="w-full text-left px-3 py-2.5 rounded-md text-stone-800 font-semibold hover:bg-stone-50"
            >
              Why Farmers Choose Us
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="w-full text-left px-3 py-2.5 rounded-md text-stone-800 font-semibold hover:bg-stone-50"
            >
              About Our Agrovet
            </button>
            <button
              onClick={() => handleNavClick('location')}
              className="w-full text-left px-3 py-2.5 rounded-md text-stone-800 font-semibold hover:bg-stone-50"
            >
              Store Location & Directions
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left px-3 py-2.5 rounded-md text-stone-800 font-semibold hover:bg-stone-50"
            >
              Contact Us
            </button>
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <PWAInstallButton variant="menu" />
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-stone-100 text-stone-800 font-semibold rounded-lg text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Call Direct: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={getWhatsAppUrl('Hello Nyeri Farmers Agrovet, I would like to enquire about your products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-800 text-white font-semibold rounded-lg text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
