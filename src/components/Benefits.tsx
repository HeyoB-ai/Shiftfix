import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PhoneOff, Users, HeartPulse, Zap, SlidersHorizontal, Smartphone } from 'lucide-react';

export const Benefits: React.FC = () => {
  const { t } = useLanguage();

  const benefitIcons = [
    <PhoneOff className="w-5 h-5 text-emerald-600" key="1" />,
    <Users className="w-5 h-5 text-emerald-600" key="2" />,
    <HeartPulse className="w-5 h-5 text-emerald-600" key="3" />,
    <Zap className="w-5 h-5 text-emerald-600" key="4" />,
    <SlidersHorizontal className="w-5 h-5 text-emerald-600" key="5" />,
    <Smartphone className="w-5 h-5 text-emerald-600" key="6" />,
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200" id="voordelen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
            Maximale Rust & Effectiviteit
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.benefits.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.benefits.items.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all shadow-2xs flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                  {benefitIcons[idx]}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center justify-between">
                  <span>{item.title}</span>
                  <span className="text-[10px] font-mono text-slate-400">0{idx + 1}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span className="text-emerald-700 font-semibold">{t.benefits.itemBadgeBenefit}</span>
                <span>{t.benefits.itemBadgeFriction}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
