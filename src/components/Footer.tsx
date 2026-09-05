import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';
import { LanguageSelector } from './LanguageSelector';
import { MessageSquare, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, scrollToSection } = useLanguage();

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700 pt-12 pb-8 text-xs" id="main-footer">
      {/* High-density summary bar inspired directly by the High Density theme */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 border-b border-slate-200 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Col 1: Sector Focus */}
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Sector Focus
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Horeca', 'Logistiek', 'Zorg', 'Retail', 'Schoonmaak', 'Beveiliging'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => scrollToSection('voor-wie')}
                  className="bg-slate-50 hover:bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 text-[11px] font-medium text-slate-600 transition-colors cursor-pointer"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Col 2: Calculator Snapshot */}
          <div className="lg:border-l lg:border-slate-200 lg:pl-6">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Besparings Calculator
            </div>
            <div className="flex items-center gap-3">
              <div className="text-lg font-black text-emerald-600 font-mono">
                € 1.450,-
              </div>
              <div className="text-[11px] text-slate-500 leading-tight">
                Gemiddelde besparing p/m<br />bij 10 ziekmeldingen
              </div>
            </div>
          </div>

          {/* Col 3: Pricing Snapshot */}
          <div className="lg:border-l lg:border-slate-200 lg:pl-6">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Tarieven
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-800">
              <span className="bg-slate-50 px-2 py-1 rounded border border-slate-200">
                Team: <b className="text-emerald-700">€19/m</b>
              </span>
              <span className="bg-emerald-50 px-2 py-1 rounded border border-emerald-200 text-emerald-950">
                Large: <b className="text-emerald-700">€59/m</b>
              </span>
            </div>
          </div>

          {/* Col 4: Support Status */}
          <div className="lg:border-l lg:border-slate-200 lg:pl-6 flex items-center justify-between sm:justify-start lg:justify-end gap-4">
            <div className="text-left lg:text-right">
              <div className="text-xs font-bold text-slate-900">ShiftFix AI Helpdesk</div>
              <div className="text-[11px] text-emerald-600 font-bold flex items-center gap-1.5 lg:justify-end">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                WhatsApp Ondersteuning Actief
              </div>
            </div>
            <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center shadow-xs">
              <MessageSquare className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Brand Info */}
          <div className="col-span-2 space-y-3">
            <Logo size="md" />
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed mt-2">
              {t.footer.tagline}
            </p>
            <div className="pt-2">
              <LanguageSelector />
            </div>
          </div>

          {/* Product Col */}
          <div>
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">
              {t.footer.productCol}
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('hoe-het-werkt')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  {t.nav.howItWorks}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('prijzen')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  {t.nav.pricing}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('roi-calculator')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  {t.nav.roi}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('demo')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  Demo aanvragen
                </button>
              </li>
            </ul>
          </div>

          {/* Sectoren Col */}
          <div>
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">
              {t.footer.sectorsCol}
            </div>
            <ul className="space-y-2">
              {['Horeca', 'Logistiek', 'Zorg & Welzijn', 'Retail', 'Schoonmaak', 'Beveiliging'].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => scrollToSection('voor-wie')}
                    className="hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijf Col */}
          <div>
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">
              {t.footer.companyCol}
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('privacy')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  {t.footer.privacy}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  {t.nav.faq}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('demo')}
                  className="hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  {t.footer.contact}
                </button>
              </li>
              <li className="text-slate-400">
                {t.footer.terms}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} ShiftFix AI. {t.footer.rights}
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>AI-ondersteunde personeelsplanning via WhatsApp</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
