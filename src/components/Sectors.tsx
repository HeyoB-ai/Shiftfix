import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Utensils, Truck, HeartHandshake, ShoppingBag, Sparkles, Shield, Bike, Film, CheckCircle2 } from 'lucide-react';

export const Sectors: React.FC = () => {
  const { t } = useLanguage();
  const [activeSector, setActiveSector] = useState(0);

  const sectorIcons = [
    <Utensils className="w-5 h-5" key="1" />,
    <Truck className="w-5 h-5" key="2" />,
    <HeartHandshake className="w-5 h-5" key="3" />,
    <ShoppingBag className="w-5 h-5" key="4" />,
    <Sparkles className="w-5 h-5" key="5" />,
    <Shield className="w-5 h-5" key="6" />,
    <Bike className="w-5 h-5" key="7" />,
    <Film className="w-5 h-5" key="8" />,
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200" id="voor-wie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
            {t.sectors.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.sectors.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {t.sectors.subtitle}
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {t.sectors.items.map((sector, idx) => {
            const isSelected = activeSector === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveSector(idx)}
                className={`p-4 sm:p-5 rounded-2xl bg-white border transition-all cursor-pointer shadow-2xs flex flex-col justify-between ${
                  isSelected
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {sectorIcons[idx]}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      #{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {sector.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-slate-100">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                    {t.sectors.exampleShiftLabel}
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100 truncate">
                    {sector.exampleShift}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Universal Application Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-slate-700 font-medium">
            <strong className="text-slate-900 font-bold">{t.sectors.genericNoticeLabel}</strong> {t.sectors.genericNotice}
          </div>
        </div>
      </div>
    </section>
  );
};
