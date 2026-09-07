import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CalendarCheck } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showTagline = true, light = false }) => {
  const { t } = useLanguage();

  const iconSizes = {
    sm: 'w-7 h-7 rounded-xl p-1',
    md: 'w-9 h-9 rounded-xl p-1.5',
    lg: 'w-12 h-12 rounded-2xl p-2.5',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className="inline-flex items-center gap-2.5 select-none" id="brand-logo">
      <div
        className={`${iconSizes[size]} bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-md shadow-emerald-500/20 flex items-center justify-center transition-transform hover:scale-105`}
      >
        <CalendarCheck className="w-full h-full stroke-[2.25]" />
      </div>
      <div className="flex flex-col">
        <div className={`font-extrabold tracking-tight ${textSizes[size]} leading-none flex items-center gap-1`}>
          <span className={light ? 'text-white' : 'text-slate-900'}>ShiftFix</span>
          <span className="text-emerald-600 font-black">AI</span>
        </div>
        {showTagline && (
          <span
            className={`text-[9px] font-bold tracking-wider uppercase mt-0.5 ${
              light ? 'text-emerald-300' : 'text-slate-600'
            }`}
          >
            {t.nav.logoTagline}
          </span>
        )}
      </div>
    </div>
  );
};
