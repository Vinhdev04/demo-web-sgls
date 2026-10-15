import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../data/constructionData';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section for active indicator
      const sections = ['home', 'about', 'services', 'projects', 'process', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang chủ', href: '#home', id: 'home' },
    { label: 'Giới thiệu', href: '#about', id: 'about' },
    { label: 'Dịch vụ', href: '#services', id: 'services' },
    { label: 'Dự án', href: '#projects', id: 'projects' },
    { label: 'Quy trình', href: '#process', id: 'process' },
    { label: 'Liên hệ', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0f233a]/95 backdrop-blur-md shadow-md border-b border-slate-700/60 py-3'
          : 'bg-[#0f233a] border-b border-slate-800 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single Element / Top Bar Contract) */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-sm whitespace-nowrap shrink-0 group"
            title={COMPANY_INFO.fullName}
          >
            <div className="w-9 h-9 rounded bg-orange-600 flex items-center justify-center text-white font-bold shadow-sm group-hover:bg-orange-500 transition-colors">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
                {COMPANY_INFO.brandName}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-300 font-medium">
                Xây dựng dân dụng
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Single-line, no pills) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  activeSection === link.id
                    ? 'text-orange-400 border-orange-500'
                    : 'text-slate-200 border-transparent hover:text-white hover:border-slate-400'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action (Top Bar Contract) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-orange-600 rounded hover:bg-orange-500 active:bg-orange-700 transition-colors shadow-sm inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <span>Yêu cầu báo giá</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f233a] border-t border-slate-700/80 px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  activeSection === link.id
                    ? 'text-orange-400 bg-slate-800/80'
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-orange-600 rounded hover:bg-orange-500 active:bg-orange-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Yêu cầu báo giá</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
