import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Bot, Users, UserCheck, ShieldCheck, Check } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const stepIcons = [
    <MessageSquare className="w-5 h-5 text-emerald-600" key="1" />,
    <Bot className="w-5 h-5 text-emerald-600" key="2" />,
    <Users className="w-5 h-5 text-emerald-600" key="3" />,
    <UserCheck className="w-5 h-5 text-emerald-600" key="4" />,
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200" id="hoe-het-werkt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
            Eenvoudig & Doelgericht
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.howItWorks.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-slate-200 group-hover:text-emerald-200 transition-colors font-mono">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                </div>

                <div className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mb-2">
                  {step.tag}
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5" />
                <span>{t.howItWorks.whatsappOnlyPill}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner: Zero new app, zero password, zero friction */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                {t.howItWorks.highlightTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {t.howItWorks.highlightSubtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {t.howItWorks.highlightPills.map((pill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200"
              >
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{pill}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
