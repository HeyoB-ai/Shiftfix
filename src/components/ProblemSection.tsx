import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PhoneCall, AlertCircle, CheckCircle2, Clock, Zap, ArrowRight, UserX, UserCheck } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-100 relative" id="probleem-sectie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Het dagelijkse knelpunt</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            {t.problem.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.problem.subtitle}
          </p>
        </div>

        {/* Visual Side-by-Side Comparison: Zonder ShiftFix vs Met ShiftFix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch mb-14">
          {/* Card: Zonder ShiftFix AI (The Stressful Friction Loop) */}
          <div
            id="comparison-without-shiftfix"
            className="rounded-3xl p-6 sm:p-8 bg-rose-50/40 border-2 border-rose-200/80 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/30 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-black">
                    <UserX className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">{t.problem.traditionalTitle}</h3>
                    <span className="text-xs text-rose-600 font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Gemiddeld 40-60 min per dienst
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
                  Chaotisch
                </span>
              </div>

              {/* Step by step pain timeline */}
              <div className="space-y-3 mb-6">
                {t.problem.traditionalSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 bg-white/70 p-2.5 rounded-xl border border-rose-100">
                    <span className="w-5 h-5 rounded-full bg-rose-200/80 text-rose-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✕
                    </span>
                    <span className="leading-snug">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-rose-200/80 bg-rose-100/60 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 px-6 sm:px-8 py-4 rounded-b-3xl">
              <p className="text-xs sm:text-sm font-bold text-rose-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{t.problem.traditionalResult}</span>
              </p>
            </div>
          </div>

          {/* Card: Met ShiftFix AI (The Smooth WhatsApp Automated Flow) */}
          <div
            id="comparison-with-shiftfix"
            className="rounded-3xl p-6 sm:p-8 bg-emerald-50/50 border-2 border-emerald-300 shadow-md shadow-emerald-600/5 flex flex-col justify-between relative overflow-hidden ring-2 ring-emerald-500/20"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/40 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black shadow-xs">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">{t.problem.shiftFixTitle}</h3>
                    <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                      <Zap className="w-3 h-3 text-emerald-600" /> Binnen 2 tot 5 minuten opgelost
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-xs">
                  Aanbevolen
                </span>
              </div>

              {/* Step by step automated timeline */}
              <div className="space-y-3 mb-6">
                {t.problem.shiftFixSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-800 bg-white p-2.5 rounded-xl border border-emerald-200 shadow-2xs">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-snug font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-300 bg-emerald-100/70 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 px-6 sm:px-8 py-4 rounded-b-3xl">
              <p className="text-xs sm:text-sm font-bold text-emerald-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{t.problem.shiftFixResult}</span>
              </p>
            </div>
          </div>
        </div>

        {/* 5-Second Takeaway Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1 block">
              De rode draad
            </span>
            <p className="text-lg sm:text-xl font-bold text-slate-100 leading-snug">
              “{t.problem.impactQuote}”
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>0 beluren nodig</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
