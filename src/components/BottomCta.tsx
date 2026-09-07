import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Sparkles, CheckCheck } from 'lucide-react';

export const BottomCta: React.FC = () => {
  const { t, scrollToSection } = useLanguage();

  return (
    <section className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden" id="bottom-cta">
      {/* Subtle radial emerald glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.bottomCta.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-2xl mx-auto">
          {t.bottomCta.title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          {t.bottomCta.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            id="bottom-cta-demo"
            onClick={() => scrollToSection('demo')}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold px-7 py-3.5 rounded-full text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
          >
            <span>{t.bottomCta.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            id="bottom-cta-pricing"
            onClick={() => scrollToSection('prijzen')}
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold px-6 py-3.5 rounded-full text-sm sm:text-base transition-colors cursor-pointer"
          >
            <span>{t.bottomCta.ctaSecondary}</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCheck className="w-4 h-4 text-emerald-400" />
            {t.bottomCta.noInstall}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCheck className="w-4 h-4 text-emerald-400" />
            {t.bottomCta.cancelMonthly}
          </span>
        </div>
      </div>
    </section>
  );
};
