import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Lock, EyeOff, Server, CheckCircle2 } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-200/80" id="veiligheid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>AVG & Privacy First</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-3">
              {t.security.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.security.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.security.items.map((pt, idx) => {
              const icons = [
                <Lock className="w-5 h-5 text-emerald-600" key="lock" />,
                <EyeOff className="w-5 h-5 text-emerald-600" key="eye" />,
                <Server className="w-5 h-5 text-emerald-600" key="server" />,
                <CheckCircle2 className="w-5 h-5 text-emerald-600" key="check" />,
              ];

              return (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3">
                    {icons[idx] || <ShieldCheck className="w-5 h-5 text-emerald-600" />}
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-sm mb-1.5">{pt.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{pt.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
