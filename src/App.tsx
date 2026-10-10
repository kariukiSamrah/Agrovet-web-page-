/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopNoticeBar } from './components/TopNoticeBar';
import { Header } from './components/Header';
import { OfflineBanner } from './components/OfflineBanner';
import { Hero } from './components/Hero';
import { BenefitCards } from './components/BenefitCards';
import { PopularCategories } from './components/PopularCategories';
import { ProductCatalog } from './components/ProductCatalog';
import { FarmerServices } from './components/FarmerServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { StoreLocation } from './components/StoreLocation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CategoryType } from './data/products';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelectFromPopular = (category: CategoryType) => {
    setSelectedCategory(category);
    // Scroll directly to the products section so the farmer sees the filtered items immediately
    scrollToSection('products');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-emerald-100 selection:text-emerald-950">
      {/* Offline Status Alert */}
      <OfflineBanner />

      {/* 1. Top Notice Bar */}
      <TopNoticeBar />

      {/* 2. Header with clean 3-zone contract & PWA install action */}
      <Header onNavigate={scrollToSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onViewProducts={() => scrollToSection('products')}
          onViewLocation={() => scrollToSection('location')}
        />

        {/* 4. Three Benefit Cards (Genuine Farm Inputs, Animal Health Products, Practical Farming Support) */}
        <BenefitCards
          onSelectCategory={(cat) => handleCategorySelectFromPopular(cat as CategoryType)}
          onSelectService={() => scrollToSection('services')}
        />

        {/* 5. Popular Categories Grid */}
        <PopularCategories
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelectFromPopular}
        />

        {/* 6. Products Catalogue with Search & Filter */}
        <ProductCatalog
          initialCategory={selectedCategory}
          onCategoryChange={(cat) => setSelectedCategory(cat)}
        />

        {/* 7. Farmer Services (Crop advisory, Livestock health, Poultry support, Dairy farming, Pest & disease) */}
        <FarmerServices />

        {/* 8. Why Farmers Choose Us (4 concise benefits) */}
        <WhyChooseUs />

        {/* 9. About Section (Grounded Nyeri farming narrative) */}
        <AboutSection />

        {/* 10. Visit Our Store (Nyeri Town location, map placeholder, directions) */}
        <StoreLocation />

        {/* 11. Contact Form & Details */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* 13. Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
