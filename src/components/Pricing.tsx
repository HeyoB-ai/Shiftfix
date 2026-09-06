import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const Pricing: React.FC = () => {
  const { t, scrollToSection } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200" id="prijzen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
            {t.pricing.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* 2-Plan Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto items-stretch">
          {/* Plan 1: Team */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                  {t.pricing.plan1.tierLabel}
                </span>
                <span className="text-xs text-slate-500 font-medium">{t.pricing.plan1.capacity}</span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2">
                {t.pricing.plan1.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                {t.pricing.plan1.description}
              </p>

              <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-slate-200">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">
                  €{t.pricing.plan1.price}
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  / {t.pricing.perMonth}
                </span>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                {t.pricing.plan1.featuresLabel}
              </div>

              <ul className="space-y-2.5">
                {t.pricing.plan1.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <button
                type="button"
                id="pricing-plan1-cta"
                onClick={() => scrollToSection('demo')}
                className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-sm shadow-2xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.pricing.plan1.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Plan 2: Large (Highlighted) */}
          <div className="bg-emerald-50/40 rounded-2xl p-6 sm:p-8 border-2 border-emerald-500 shadow-md shadow-emerald-500/5 flex flex-col justify-between relative">
            {/* Best for large orgs badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-extrabold uppercase px-4 py-1 rounded-full shadow-xs flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.pricing.badgeMostPopular}</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                  {t.pricing.plan2.tierLabel}
                </span>
                <span className="text-xs text-emerald-800 font-semibold">{t.pricing.plan2.capacity}</span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2">
                {t.pricing.plan2.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                {t.pricing.plan2.description}
              </p>

              <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-emerald-200">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">
                  €{t.pricing.plan2.price}
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  / {t.pricing.perMonth}
                </span>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                {t.pricing.plan2.featuresLabel}
              </div>

              <ul className="space-y-2.5">
                {t.pricing.plan2.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-200">
              <button
                type="button"
                id="pricing-plan2-cta"
                onClick={() => scrollToSection('demo')}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.pricing.plan2.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom guarantee */}
        <div className="mt-8 text-center flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>{t.pricing.cancelAnytime}</span>
        </div>
      </div>
    </section>
  );
};
