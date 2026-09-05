import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';
import { LanguageSelector } from './LanguageSelector';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const { t, scrollToSection } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.howItWorks, id: 'hoe-het-werkt' },
    { label: t.nav.forWhom, id: 'voor-wie' },
    { label: t.nav.benefits, id: 'voordelen' },
    { label: t.nav.pricing, id: 'prijzen' },
    { label: t.nav.roi, id: 'roi-calculator' },
    { label: t.nav.faq, id: 'faq' },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-[#FBFDFB]/90 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-left focus:outline-hidden"
          id="header-brand-button"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" id="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-link-${link.id}`}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className="px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/70 rounded-full transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right CTA and Language Selector */}
        <div className="hidden sm:flex items-center gap-3" id="header-actions">
          <LanguageSelector />
          <button
            type="button"
            id="header-demo-cta"
            onClick={() => handleNavClick('demo')}
            className="group inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all cursor-pointer"
          >
            <span>{t.nav.requestDemo}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          <LanguageSelector compact />
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className="w-full text-left px-3 py-2.5 text-sm font-bold text-slate-800 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <button
              type="button"
              id="mobile-demo-cta"
              onClick={() => handleNavClick('demo')}
              className="w-full justify-center flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-4 py-3 rounded-xl shadow-md transition-colors"
            >
              <span>{t.nav.requestDemo}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
