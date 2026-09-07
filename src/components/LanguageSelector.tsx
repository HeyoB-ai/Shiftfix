import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { ChevronDown, Globe, Check } from 'lucide-react';

const languageOptions: { code: Language; name: string; nativeName: string; flag: string }[] = [
  { code: 'nl', name: 'Nederlands', nativeName: 'Nederlands', flag: '🇳🇱' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', nativeName: 'Français', flag: '🇫🇷' },
];

export const LanguageSelector: React.FC<{ compact?: boolean; dark?: boolean }> = ({ compact = false, dark = false }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = languageOptions.find((opt) => opt.code === language) || languageOptions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef} id="language-selector">
      <button
        type="button"
        id="language-selector-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
          dark
            ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700'
            : 'bg-emerald-50/80 text-emerald-900 hover:bg-emerald-100/90 border border-emerald-200/80'
        }`}
      >
        <span className="text-sm leading-none">{currentOption.flag}</span>
        <span className="uppercase font-bold tracking-wider">{currentOption.code}</span>
        {!compact && <span className="hidden sm:inline text-slate-500 font-normal">| {currentOption.nativeName}</span>}
        <ChevronDown className={`w-3.5 h-3.5 text-emerald-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          id="language-dropdown-menu"
          className="absolute right-0 mt-1.5 w-44 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-900/10 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1 flex items-center gap-1">
            <Globe className="w-3 h-3 text-emerald-600" />
            <span>{t.footer.language}</span>
          </div>
          {languageOptions.map((opt) => (
            <button
              key={opt.code}
              id={`lang-option-${opt.code}`}
              type="button"
              onClick={() => {
                setLanguage(opt.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-emerald-50 transition-colors ${
                opt.code === language ? 'font-bold text-emerald-700 bg-emerald-50/60' : 'text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">{opt.flag}</span>
                <span>{opt.nativeName}</span>
              </div>
              {opt.code === language && <Check className="w-3.5 h-3.5 text-emerald-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
