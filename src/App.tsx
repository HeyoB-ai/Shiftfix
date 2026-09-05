import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { Sectors } from './components/Sectors';
import { Pricing } from './components/Pricing';
import { RoiCalculator } from './components/RoiCalculator';
import { DemoForm } from './components/DemoForm';
import { FaqSection } from './components/FaqSection';
import { SecuritySection } from './components/SecuritySection';
import { BottomCta } from './components/BottomCta';
import { Footer } from './components/Footer';
import { ArrowUp, Calendar } from 'lucide-react';

const MainContent: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToDemo = () => {
    const el = document.getElementById('demo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Benefits />
        <Sectors />
        <Pricing />
        <RoiCalculator />
        <DemoForm />
        <FaqSection />
        <SecuritySection />
        <BottomCta />
      </main>
      <Footer />

      {/* Floating Bottom Quick Action */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <button
            type="button"
            onClick={scrollToDemo}
            className="hidden sm:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-4 py-3 rounded-full shadow-lg shadow-emerald-700/25 transition-all hover:scale-105"
            title="Vraag direct een demo aan"
          >
            <Calendar className="w-4 h-4" />
            <span>Vraag een demo</span>
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-11 h-11 bg-white hover:bg-slate-50 text-slate-700 hover:text-emerald-700 rounded-full border border-slate-200 shadow-md flex items-center justify-center transition-all hover:scale-105"
            title="Naar boven"
            aria-label="Scroll naar boven"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
