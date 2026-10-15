/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Showcase } from './components/Showcase';
import { CoreValues } from './components/CoreValues';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ServiceDetailModal, QuoteRequestModal, PrivacyPolicyModal } from './components/Modals';
import { ServiceItem } from './types';
import { Mail, MessageSquareText } from 'lucide-react';
import { COMPANY_INFO } from './data/constructionData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [prefilledServiceType, setPrefilledServiceType] = useState<string | undefined>(undefined);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleOpenQuoteWithService = (serviceTitle: string) => {
    setPrefilledServiceType(serviceTitle);
    setQuoteModalOpen(true);
  };

  const handleOpenGeneralQuote = () => {
    setPrefilledServiceType(undefined);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased">
      {/* 1. Header (Sticky Top Bar Contract) */}
      <Header onOpenQuoteModal={handleOpenGeneralQuote} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Giới thiệu doanh nghiệp */}
        <About />

        {/* 4. Dịch vụ thi công & tư vấn */}
        <Services onSelectService={(srv) => setSelectedService(srv)} />

        {/* 5. Quy trình làm việc 6 bước */}
        <Process />

        {/* 6. Dự án & Thư viện kiến trúc */}
        <Showcase />

        {/* 7. Tiêu chí hoạt động & Giá trị cốt lõi */}
        <CoreValues />

        {/* 8. Tư vấn xây dựng & Báo giá trực tiếp */}
        <ContactForm />
      </main>

      {/* 9. Footer */}
      <Footer
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        onOpenQuoteModal={handleOpenGeneralQuote}
      />

      {/* Floating Quick Action for Mobile / Tablet */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden">
        <a
          href="#contact"
          className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white px-4 py-2.5 rounded-full shadow-lg text-xs font-semibold"
          aria-label="Tư vấn nhanh"
        >
          <MessageSquareText className="w-4 h-4" />
          <span>Tư vấn ngay</span>
        </a>
      </div>

      {/* Dialog Modals */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForQuote={handleOpenQuoteWithService}
      />

      <QuoteRequestModal
        isOpen={quoteModalOpen}
        prefilledType={prefilledServiceType}
        onClose={() => setQuoteModalOpen(false)}
      />

      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
