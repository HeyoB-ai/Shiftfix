import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, TrendingUp, Clock, Euro, CheckCircle, ArrowRight } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const { t, scrollToSection } = useLanguage();

  // Inputs with realistic defaults
  const [absencesPerMonth, setAbsencesPerMonth] = useState<number>(10);
  const [callTimeMinutes, setCallTimeMinutes] = useState<number>(35);
  const [hourlyWage, setHourlyWage] = useState<number>(32);

  // Math:
  // Current time spent = absencesPerMonth * (callTimeMinutes / 60) hours
  // With ShiftFix AI, ~85% reduction (only ~3-5 mins supervision)
  const currentMonthlyHours = (absencesPerMonth * callTimeMinutes) / 60;
  const hoursSavedPerMonth = currentMonthlyHours * 0.85;
  const currentCostPerMonth = currentMonthlyHours * hourlyWage;
  const monthlyCostSaved = hoursSavedPerMonth * hourlyWage;
  const annualCostSaved = monthlyCostSaved * 12;

  // Comparison to Team plan (€19) or Large (€59)
  const subscriptionCost = absencesPerMonth > 25 ? 59 : 19;
  const netMonthlyProfit = monthlyCostSaved - subscriptionCost;
  const roiMultiplier = Math.max(1, Math.round(monthlyCostSaved / subscriptionCost));

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200" id="roi-calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
            <span className="flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" />
              Interactieve ROI Calculator
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.roi.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {t.roi.subtitle}
          </p>
        </div>

        {/* Realistic Problem Example Box */}
        <div className="max-w-4xl mx-auto mb-8 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">
              💡
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Rekenvoorbeeld uit de praktijk
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium mt-0.5">
                {t.roi.exampleText}
              </p>
            </div>
          </div>
          <div className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/80 whitespace-nowrap">
            {t.roi.calloutText}
          </div>
        </div>

        {/* Calculator Body Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Controls column */}
          <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                <span>Jouw situatie instellen</span>
                <span className="text-xs text-slate-400 font-normal">Verander de waarden</span>
              </h3>

              {/* Slider 1: Absences per month */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>{t.roi.labels.absencesPerMonth}</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 text-sm">
                    {absencesPerMonth} per maand
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="60"
                  value={absencesPerMonth}
                  onChange={(e) => setAbsencesPerMonth(Number(e.target.value))}
                  className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                  id="roi-absences-slider"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>2 meldingen</span>
                  <span>30 meldingen</span>
                  <span>60 meldingen</span>
                </div>
              </div>

              {/* Slider 2: Call time per absence */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>{t.roi.labels.callTimePerAbsence}</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 text-sm">
                    {callTimeMinutes} {t.roi.labels.minutes}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="75"
                  step="5"
                  value={callTimeMinutes}
                  onChange={(e) => setCallTimeMinutes(Number(e.target.value))}
                  className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                  id="roi-time-slider"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>10 min</span>
                  <span>40 min</span>
                  <span>75 min</span>
                </div>
              </div>

              {/* Slider 3: Hourly wage */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>{t.roi.labels.hourlyWage}</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 text-sm">
                    €{hourlyWage} {t.roi.labels.euroPerHour}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="65"
                  step="2"
                  value={hourlyWage}
                  onChange={(e) => setHourlyWage(Number(e.target.value))}
                  className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                  id="roi-wage-slider"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>€20/u</span>
                  <span>€40/u</span>
                  <span>€65/u</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 pt-3 border-t border-slate-100 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{t.roi.results.formulaExplanation}</span>
            </div>
          </div>

          {/* Results column (High Density visual card) */}
          <div className="lg:col-span-6 bg-white p-6 rounded-2xl border-2 border-emerald-500/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-0.5 rounded-full">
                  Geschatte Opbrengst
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Investering: €{subscriptionCost}/m
                </span>
              </div>

              {/* Big primary metric */}
              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200/80 mb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1 flex items-center gap-1">
                  <Euro className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{t.roi.results.monthlyCostSaved}</span>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-700 tracking-tight">
                  € {Math.round(monthlyCostSaved).toLocaleString('nl-NL')}
                  <span className="text-xs font-normal text-slate-500 ml-1.5">/ maand</span>
                </div>
                <div className="text-xs text-emerald-800 font-semibold mt-1">
                  Netto winst: € {Math.round(netMonthlyProfit).toLocaleString('nl-NL')} per maand
                </div>
              </div>

              {/* Grid of supporting numbers */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-600" />
                    <span>Bespaarde tijd</span>
                  </div>
                  <div className="text-xl font-extrabold text-slate-900 mt-0.5">
                    {hoursSavedPerMonth.toFixed(1)} uur
                  </div>
                  <div className="text-[10px] text-slate-400">per maand terug</div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-emerald-600" />
                    <span>Besparing p/jaar</span>
                  </div>
                  <div className="text-xl font-extrabold text-slate-900 mt-0.5">
                    € {Math.round(annualCostSaved).toLocaleString('nl-NL')}
                  </div>
                  <div className="text-[10px] text-emerald-700 font-bold">{roiMultiplier}x return on investment</div>
                </div>
              </div>
            </div>

            <button
              type="button"
              id="roi-cta-button"
              onClick={() => scrollToSection('demo')}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>Verzilver deze besparing nu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
