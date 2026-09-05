import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, CheckCircle2, ShieldCheck, Sparkles, Building2, Mail, Phone, User, MessageSquare } from 'lucide-react';

export const DemoForm: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    phone: '',
    employees: t.demo.fields.employeesOptions[0] || '1 - 25 medewerkers',
    sector: 'Horeca',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = t.demo.errors.nameRequired;
    }
    if (!formData.org.trim()) {
      errs.org = t.demo.errors.orgRequired;
    }
    if (!formData.email.trim()) {
      errs.email = t.demo.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t.demo.errors.emailInvalid;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift server processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      org: '',
      email: '',
      phone: '',
      employees: t.demo.fields.employeesOptions[0] || '1 - 25 medewerkers',
      sector: 'Horeca',
      message: '',
    });
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Persoonlijke Demonstratie</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.demo.title}
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {t.demo.subtitle}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm relative">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200" id="demo-success-state">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mx-auto shadow-md shadow-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  {t.demo.successTitle}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {t.demo.successMessage}
                </p>

                <div className="p-4 bg-white rounded-xl border border-slate-200 max-w-md mx-auto text-left text-xs text-slate-600 space-y-1">
                  <div className="font-bold text-slate-800">Aanvraag overzicht:</div>
                  <div>• Naam: <span className="font-semibold text-slate-900">{formData.name}</span></div>
                  <div>• Organisatie: <span className="font-semibold text-slate-900">{formData.org}</span></div>
                  <div>• E-mail: <span className="font-semibold text-slate-900">{formData.email}</span></div>
                  <div>• Sector: <span className="font-semibold text-slate-900">{formData.sector}</span></div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline cursor-pointer"
                  >
                    {t.demo.newRequestButton}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="demo-form" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5" htmlFor="demo-name">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t.demo.fields.name} *</span>
                    </label>
                    <input
                      id="demo-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder={t.demo.fields.namePlaceholder}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 transition-all ${
                        errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.name && <span className="text-[11px] text-rose-600 font-medium mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Organisation */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5" htmlFor="demo-org">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t.demo.fields.org} *</span>
                    </label>
                    <input
                      id="demo-org"
                      type="text"
                      value={formData.org}
                      onChange={(e) => {
                        setFormData({ ...formData, org: e.target.value });
                        if (errors.org) setErrors({ ...errors, org: '' });
                      }}
                      placeholder={t.demo.fields.orgPlaceholder}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 transition-all ${
                        errors.org ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.org && <span className="text-[11px] text-rose-600 font-medium mt-1 block">{errors.org}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5" htmlFor="demo-email">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t.demo.fields.email} *</span>
                    </label>
                    <input
                      id="demo-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder={t.demo.fields.emailPlaceholder}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 transition-all ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && <span className="text-[11px] text-rose-600 font-medium mt-1 block">{errors.email}</span>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5" htmlFor="demo-phone">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t.demo.fields.phone} <span className="text-slate-400 font-normal">{t.demo.fields.phoneOptional}</span></span>
                    </label>
                    <input
                      id="demo-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.demo.fields.phonePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Number of employees */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="demo-employees">
                      {t.demo.fields.employees}
                    </label>
                    <select
                      id="demo-employees"
                      value={formData.employees}
                      onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 transition-all cursor-pointer"
                    >
                      {t.demo.fields.employeesOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="demo-sector">
                      {t.demo.fields.sector}
                    </label>
                    <select
                      id="demo-sector"
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 transition-all cursor-pointer"
                    >
                      <option value="Horeca">Horeca</option>
                      <option value="Logistiek">Logistiek & Magazijn</option>
                      <option value="Zorg">Zorg & Welzijn</option>
                      <option value="Retail">Retail & Supermarkt</option>
                      <option value="Schoonmaak">Schoonmaak & Facilitair</option>
                      <option value="Beveiliging">Beveiliging</option>
                      <option value="Bezorgdienst">Bezorgdienst / Koeriers</option>
                      <option value="Evenementen">Evenementen & Productie</option>
                      <option value="Overig">Andere sector</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5" htmlFor="demo-message">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.demo.fields.message}</span>
                  </label>
                  <textarea
                    id="demo-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.demo.fields.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/40 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit button & Privacy notice */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="demo-submit-button"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>{t.demo.submitting}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.demo.submitButton}</span>
                      </>
                    )}
                  </button>
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 mt-3 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.demo.privacyNotice}</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
