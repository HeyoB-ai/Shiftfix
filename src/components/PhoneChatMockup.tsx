import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Video, MoreVertical, Send, CheckCheck, RotateCcw } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  sector: string;
  members: string;
  groupTitle: string;
  messages: {
    sender: string;
    avatar: string;
    avatarColor: string;
    isAI?: boolean;
    isPlanner?: boolean;
    time: string;
    text: string | React.ReactNode;
    badge?: string;
  }[];
}

export const PhoneChatMockup: React.FC = () => {
  const { language } = useLanguage();
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [visibleCount, setVisibleCount] = useState<number>(7);
  const [isTyping, setIsTyping] = useState(false);

  // Scenarios localized or contextualized
  const scenarios: Scenario[] = [
    {
      id: 'horeca',
      name: 'Horeca',
      sector: 'Bistro Zonnewind',
      members: '11 leden • Keuken, Bediening, Management',
      groupTitle: 'Bistro Zonnewind 🌿',
      messages: [
        {
          sender: 'Sanne',
          avatar: 'S',
          avatarColor: 'bg-rose-500',
          time: '08:11',
          text: language === 'nl' 
            ? 'Goedemorgen, ik ben ziek en kan vanavond helaas niet werken.'
            : language === 'de'
            ? 'Guten Morgen, ich bin leider krank und kann heute Abend nicht arbeiten.'
            : language === 'es'
            ? 'Buenos días, estoy enferma y no podré venir esta noche.'
            : language === 'fr'
            ? 'Bonjour, je suis malade et ne pourrai pas venir ce soir.'
            : 'Good morning, I am sick and won’t be able to work tonight.',
        },
        {
          sender: 'ShiftFix AI',
          avatar: '🌿',
          avatarColor: 'bg-emerald-600',
          isAI: true,
          time: '08:12',
          text: language === 'nl'
            ? '🌿 Beterschap Sanne. Welke dienst zou je vandaag precies werken?'
            : language === 'de'
            ? '🌿 Gute Besserung Sanne. Welche Schicht hättest du heute gearbeitet?'
            : language === 'es'
            ? '🌿 Que te mejores Sanne. ¿Qué turno tenías programado para hoy?'
            : language === 'fr'
            ? '🌿 Bon rétablissement Sanne. Quel shift devais-tu effectuer aujourd’hui ?'
            : '🌿 Get well soon Sanne. Which shift were you scheduled to work today?',
        },
        {
          sender: 'Sanne',
          avatar: 'S',
          avatarColor: 'bg-rose-500',
          time: '08:12',
          text: '18:00 - 23:00, bediening.',
        },
        {
          sender: 'ShiftFix AI',
          avatar: '🌿',
          avatarColor: 'bg-emerald-600',
          isAI: true,
          badge: 'DIENST VRIJGEKOMEN',
          time: '08:12',
          text: (
            <div className="space-y-1">
              <div className="font-bold text-emerald-800 text-[11px] flex items-center gap-1">
                <span>🍽️</span> {language === 'nl' ? 'DIENST VRIJGEKOMEN' : 'SHIFT AVAILABLE'}
              </div>
              <p className="text-[11px] text-slate-800 font-medium">
                {language === 'nl' ? 'Vanavond 18:00 - 23:00' : 'Tonight 18:00 - 23:00'}<br />
                <span className="text-slate-600">{language === 'nl' ? 'Functie: bediening' : 'Role: Service Staff'}</span>
              </p>
              <div className="pt-1 border-t border-emerald-200/60 text-[10.5px] text-slate-700">
                {language === 'nl' 
                  ? 'Wie kan of wil deze dienst overnemen? Reageer met '
                  : 'Who can take over this shift? Reply with '}
                <span className="font-extrabold text-emerald-900 bg-emerald-200/70 px-1 py-0.5 rounded">IK KAN</span>
                {language === 'nl' ? ' als je beschikbaar bent.' : ' if available.'}
              </div>
            </div>
          ),
        },
        {
          sender: 'Milan',
          avatar: 'M',
          avatarColor: 'bg-blue-600',
          time: '08:15',
          text: 'IK KAN',
        },
        {
          sender: 'Noor',
          avatar: 'N',
          avatarColor: 'bg-amber-600',
          time: '08:16',
          text: language === 'nl' ? 'Ik kan ook.' : language === 'de' ? 'Ich kann auch.' : 'I can also.',
        },
        {
          sender: 'ShiftFix AI',
          avatar: '🌿',
          avatarColor: 'bg-emerald-600',
          isAI: true,
          time: '08:18',
          text: (
            <div className="space-y-1">
              <div className="font-bold text-emerald-800 text-[11px] flex items-center gap-1">
                <span>📋</span> {language === 'nl' ? 'BESCHIKBAAR VOOR DEZE DIENST' : 'AVAILABLE VOLUNTEERS'}
              </div>
              <ol className="text-[11px] text-slate-800 font-medium list-decimal list-inside space-y-0.5 pl-0.5">
                <li>Milan <span className="text-[9px] text-slate-500">(08:15)</span></li>
                <li>Noor <span className="text-[9px] text-slate-500">(08:16)</span></li>
              </ol>
              <p className="text-[10px] text-slate-600 pt-1 border-t border-emerald-200/50 italic">
                {language === 'nl' 
                  ? 'Planning: geef commando wie de dienst overneemt.' 
                  : 'Management: confirm who takes the shift.'}
              </p>
            </div>
          ),
        },
        {
          sender: 'Lisa (Planning)',
          avatar: 'L',
          avatarColor: 'bg-purple-600',
          isPlanner: true,
          time: '08:20',
          text: 'toewijzen Milan',
        },
        {
          sender: 'ShiftFix AI',
          avatar: '🌿',
          avatarColor: 'bg-emerald-600',
          isAI: true,
          time: '08:21',
          text: (
            <div className="space-y-1">
              <div className="font-bold text-emerald-800 text-[11px] flex items-center gap-1">
                <span>✅</span> {language === 'nl' ? 'DIENST INGEVULD' : 'SHIFT ASSIGNED'}
              </div>
              <p className="text-[11px] text-slate-800 font-medium">
                {language === 'nl' ? 'Vanavond 18:00 - 23:00' : 'Tonight 18:00 - 23:00'}
              </p>
              <p className="text-[10.5px] text-emerald-950 font-semibold">
                {language === 'nl' 
                  ? 'Milan neemt deze dienst over. Bedankt voor het inspringen!'
                  : 'Milan takes this shift. Thanks for stepping in!'}
              </p>
            </div>
          ),
        },
      ],
    },
    {
      id: 'zorg',
      name: 'Zorg & Welzijn',
      sector: 'Zorgpost Meander',
      members: '18 leden • Dag- en avondzorg',
      groupTitle: 'Zorgteam Meander 🏥',
      messages: [
        {
          sender: 'Karin',
          avatar: 'K',
          avatarColor: 'bg-rose-500',
          time: '06:14',
          text: 'Goedemorgen team, met spoed geveld door de griep. Kan niet komen vandaag.',
        },
        {
          sender: 'ShiftFix AI',
          avatar: '🌿',
          avatarColor: 'bg-emerald-600',
          isAI: true,
          time: '06:15',
          text: '🌿 Beterschap Karin. Welke dienst stond er voor jou gepland?',
        },
        {
          sender: 'Karin',
          avatar: 'K',
          avatarColor: 'bg-rose-500',
          time: '06:15',
          text: 'Dagdienst 07:30 - 15:30 (Verzorgende IG).',
        },
        {
          sender: 'ShiftFix AI',
          avatar: '🌿',
          avatarColor: 'bg-emerald-600',
          isAI: true,
          time: '06:15',
          text: (
            <div className="space-y-1">
              <div className="font-bold text-emerald-800 text-[11px] flex items-center gap-1">
                <span>🏥</span> DIENST VRIJGEKOMEN
              </div>
              <p className="text-[11px] text-slate-800">
                Vandaag 07:30 - 15:30 (Verzorgende IG)<br />
                Reageer met <span className="font-bold text-emerald-900 bg-emerald-200/80 px-1 py-0.5 rounded">IK KAN</span>
              </p>
            </div>
          ),
        },
        {
          sender: 'Daan',
          avatar: 'D',
          avatarColor: 'bg-blue-600',
          time: '06:18',
          text: 'IK KAN',
        },
        {
          sender: 'Teamleider',
          avatar: 'T',
          avatarColor: 'bg-purple-600',
          isPlanner: true,
          time: '06:20',
          text: 'toewijzen Daan',
        },
        {
          sender: 'ShiftFix AI',
          avatar: '🌿',
          avatarColor: 'bg-emerald-600',
          isAI: true,
          time: '06:20',
          text: '✅ DIENST INGEVULD. Daan pakt de dagdienst op. Geweldig teamwork!',
        },
      ],
    },
    {
      id: 'logistiek',
      name: 'Logistiek',
      sector: 'DistriHub West',
      members: '24 leden • Magazijn & Chauffeurs',
      groupTitle: 'DistriHub Orderpickers 📦',
      messages: [
        {
          sender: 'Bram',
          avatar: 'B',
          avatarColor: 'bg-amber-600',
          time: '05:30',
          text: 'Beste planning, ik lig plat met zware migraine.',
        },
        {
          sender: 'ShiftFix AI',
          avatar: '🌿',
          avatarColor: 'bg-emerald-600',
          isAI: true,
          time: '05:31',
          text: '🌿 Beterschap Bram. Welke dienst betrof dit?',
        },
        {
          sender: 'Bram',
          avatar: 'B',
          avatarColor: 'bg-amber-600',
          time: '05:31',
          text: 'Vroege dienst 06:00 - 14:30 (Heftruck).',
        },
        {
          sender: 'ShiftFix AI',
          avatar: '🌿',
          avatarColor: 'bg-emerald-600',
          isAI: true,
          time: '05:31',
          text: '📦 SPOEDDIENST: Vandaag 06:00 - 14:30 Heftruck. Reageer met IK KAN.',
        },
        {
          sender: 'Sem',
          avatar: 'S',
          avatarColor: 'bg-teal-600',
          time: '05:34',
          text: 'IK KAN',
        },
        {
          sender: 'Coördinator',
          avatar: 'C',
          avatarColor: 'bg-purple-600',
          isPlanner: true,
          time: '05:36',
          text: 'toewijzen Sem',
        },
        {
          sender: 'ShiftFix AI',
          avatar: '🌿',
          avatarColor: 'bg-emerald-600',
          isAI: true,
          time: '05:36',
          text: '✅ DIENST INGEVULD: Sem start om 06:00. Rooster bijgewerkt.',
        },
      ],
    },
  ];

  const currentScenario = scenarios[activeScenarioIdx];

  const handleReplay = () => {
    setVisibleCount(2);
    setIsTyping(true);
    let step = 2;
    const interval = setInterval(() => {
      step++;
      setVisibleCount(step);
      if (step >= currentScenario.messages.length) {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 900);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[360px] sm:max-w-[390px] mx-auto" id="phone-chat-mockup">
      {/* High-density scenario switcher */}
      <div className="w-full flex items-center justify-between gap-1 mb-3 bg-white p-1 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex gap-1">
          {scenarios.map((sc, idx) => (
            <button
              key={sc.id}
              type="button"
              onClick={() => {
                setActiveScenarioIdx(idx);
                setVisibleCount(sc.messages.length);
                setIsTyping(false);
              }}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors cursor-pointer ${
                activeScenarioIdx === idx
                  ? 'bg-emerald-500 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {sc.name}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={handleReplay}
          title="Replay sequence"
          className="p-1 rounded-lg text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center gap-1 text-[11px] font-semibold cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">Replay</span>
        </button>
      </div>

      {/* Realistic Smartphone Frame */}
      <div className="w-full bg-slate-900 rounded-[44px] p-2.5 sm:p-3 border-[6px] sm:border-[8px] border-slate-800 shadow-2xl relative select-none">
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-5 sm:h-6 bg-slate-900 rounded-full z-30 flex items-center justify-end px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800/90 border border-slate-700/50"></div>
        </div>

        {/* Screen Container */}
        <div className="w-full h-[520px] sm:h-[550px] bg-[#EFEAE2] rounded-[32px] sm:rounded-[36px] flex flex-col overflow-hidden relative border border-slate-700/30">
          {/* Status Bar */}
          <div className="bg-[#075E54] pt-2 px-5 pb-1 flex items-center justify-between text-white text-[10px] font-semibold z-20">
            <span>09:24</span>
            <div className="flex items-center gap-1.5 opacity-90">
              <span className="text-[9px]">5G</span>
              <div className="w-4 h-2 border border-white rounded-[2px] p-px flex items-center">
                <div className="w-2.5 h-full bg-white rounded-[1px]"></div>
              </div>
            </div>
          </div>

          {/* WhatsApp Group Header */}
          <div className="bg-[#075E54] px-3.5 py-2 flex items-center justify-between text-white shadow-md z-10">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-emerald-700/90 border border-emerald-400/40 flex items-center justify-center text-white text-xs font-black shrink-0">
                🌿
              </div>
              <div className="min-w-0">
                <div className="font-bold text-xs truncate leading-tight flex items-center gap-1.5">
                  <span>{currentScenario.groupTitle}</span>
                  <span className="bg-emerald-800/80 text-[8px] font-extrabold uppercase px-1 rounded text-emerald-200">
                    AI Active
                  </span>
                </div>
                <div className="text-[9.5px] text-emerald-100/90 truncate font-normal">
                  {currentScenario.members}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-emerald-100 shrink-0">
              <Video className="w-4 h-4" />
              <Phone className="w-3.5 h-3.5" />
              <MoreVertical className="w-4 h-4" />
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-2.5 sm:p-3 overflow-y-auto space-y-2 text-[11px] leading-snug">
            {/* Timestamp pill */}
            <div className="flex justify-center my-1">
              <span className="bg-white/80 backdrop-blur-xs text-slate-500 text-[9px] font-semibold px-2.5 py-0.5 rounded-md shadow-2xs uppercase tracking-wider">
                Vandaag
              </span>
            </div>

            {currentScenario.messages.slice(0, visibleCount).map((msg, idx) => {
              if (msg.isAI) {
                return (
                  <div
                    key={idx}
                    className="bg-[#DCF8C6] border-l-3 border-emerald-600 p-2 sm:p-2.5 rounded-xl rounded-tr-xs self-end ml-auto max-w-[88%] shadow-xs text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-200"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-bold text-[10px] text-emerald-800 flex items-center gap-1">
                        <span className="w-3.5 h-3.5 rounded bg-emerald-600 text-white flex items-center justify-center text-[9px] font-bold">
                          ✓
                        </span>
                        ShiftFix AI
                      </span>
                      <span className="text-[9px] text-slate-500">{msg.time}</span>
                    </div>
                    <div className="text-slate-800">{msg.text}</div>
                  </div>
                );
              }

              if (msg.isPlanner) {
                return (
                  <div
                    key={idx}
                    className="bg-purple-50 border border-purple-200 p-2 rounded-xl rounded-tl-xs self-start max-w-[82%] shadow-xs text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-200"
                  >
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="font-bold text-[10px] text-purple-700">{msg.sender}</span>
                      <span className="text-[9px] text-slate-400">{msg.time}</span>
                    </div>
                    <div className="font-mono text-purple-900 font-bold bg-purple-100/70 px-1.5 py-0.5 rounded text-[10px] inline-block">
                      {msg.text}
                    </div>
                  </div>
                );
              }

              // Normal employee message
              return (
                <div
                  key={idx}
                  className="bg-white p-2 rounded-xl rounded-tl-xs self-start max-w-[80%] shadow-xs text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-200"
                >
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className="font-bold text-[10px] text-orange-600">{msg.sender}</span>
                    <span className="text-[9px] text-slate-400">{msg.time}</span>
                  </div>
                  <div>{msg.text}</div>
                </div>
              );
            })}

            {isTyping && (
              <div className="bg-[#DCF8C6] p-2 rounded-xl self-end ml-auto max-w-[50%] shadow-xs flex items-center gap-1 text-[10px] text-emerald-800 font-medium animate-pulse">
                <span>ShiftFix AI typt</span>
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-100">.</span>
                <span className="animate-bounce delay-200">.</span>
              </div>
            )}
          </div>

          {/* Bottom Chat Input Bar */}
          <div className="bg-[#F0F2F5] px-2 py-1.5 border-t border-slate-200 flex items-center gap-1.5 shrink-0">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-slate-500 font-bold text-base hover:bg-slate-200 cursor-pointer">
              +
            </div>
            <div className="flex-1 bg-white rounded-full px-3 py-1 text-[11px] text-slate-400 border border-slate-200/80 truncate">
              {language === 'nl' ? 'Reageer met IK KAN...' : 'Type a message...'}
            </div>
            <div className="w-7 h-7 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center text-white text-xs shadow-xs cursor-pointer transition-colors">
              <Send className="w-3.5 h-3.5 translate-x-px" />
            </div>
          </div>
        </div>
      </div>

      {/* Trust pill underneath */}
      <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-slate-500 bg-white/90 px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
        <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span>Gewoon binnen de vertrouwde WhatsApp-groep</span>
      </div>
    </div>
  );
};
