import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PhoneChatMockup } from './PhoneChatMockup';
import { ArrowRight, Sparkles, CheckCircle2, Clock, Users2, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, scrollToSection } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-6 pb-12 lg:pt-10 lg:pb-16 bg-slate-50 border-b border-slate-200" id="hero">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Dense, high-impact copy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase w-fit border border-emerald-200/80 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
              {t.hero.title}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                id="hero-cta-demo"
                onClick={() => scrollToSection('demo')}
                className="group inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-full text-sm sm:text-base shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                id="hero-cta-how"
                onClick={() => scrollToSection('hoe-het-werkt')}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold px-5 py-3 rounded-full text-sm sm:text-base shadow-xs transition-colors cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </div>

            {/* 3 Core Value Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <Zap className="w-3.5 h-3.5 text-emerald-500" />
                <span>{t.hero.pillFast}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <Users2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>{t.hero.pillFair}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>{t.hero.pillNoCalls}</span>
              </div>
            </div>

            {/* High-density Stat Cards */}
            <div className="grid grid-cols-3 gap-3 pt-4 max-w-xl">
              <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-emerald-600">-85%</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-0.5">Minder planningstijd</div>
              </div>
              <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-emerald-600">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-0.5">Gelijke kansen</div>
              </div>
              <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-emerald-600">&lt; 2 min</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-0.5">Eerste reacties</div>
              </div>
            </div>

            {/* Target Sectors Quick Glance */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                {t.hero.sectorsLabel}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Horeca', 'Logistiek', 'Zorg', 'Retail', 'Schoonmaak', 'Beveiliging'].map((sector) => (
                  <span
                    key={sector}
                    className="bg-white text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-slate-200"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup with annotations */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-4 lg:mt-0">
            {/* Playful top arrow annotation */}
            <div className="hidden sm:flex items-center gap-1.5 absolute -top-8 right-6 text-emerald-800 font-handwriting text-xl rotate-[-4deg]">
              <span>Teamwork werkt beter met AI</span>
              <span className="text-2xl">↳</span>
            </div>

            <PhoneChatMockup />

            {/* Bottom handwritten motto */}
            <div className="mt-4 text-center font-handwriting text-emerald-800 text-xl font-bold">
              Blije teams. Sterkere organisaties.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
