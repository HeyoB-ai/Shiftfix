import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChatCard } from '../types';
import { Phone, Video, MoreVertical, Send, CheckCheck, RotateCcw } from 'lucide-react';

/** AI-bericht met kop, regels en een optionele oproep met uitgelicht trefwoord. */
const AiCard: React.FC<{ card: ChatCard }> = ({ card }) => (
  <div className="space-y-1">
    <div className="font-bold text-emerald-800 text-[11px] flex items-center gap-1">
      <span>{card.icon}</span> {card.title}
    </div>

    {card.lines.length > 0 && (
      <p className="text-[11px] text-slate-800 font-medium">
        {card.lines.map((line, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <br />}
            {idx === 0 ? line : <span className="text-slate-600">{line}</span>}
          </React.Fragment>
        ))}
      </p>
    )}

    {card.highlight && (
      <p className="text-[10.5px] text-emerald-950 font-semibold">{card.highlight}</p>
    )}

    {card.volunteers && (
      <ol className="text-[11px] text-slate-800 font-medium list-decimal list-inside space-y-0.5 pl-0.5">
        {card.volunteers.map((entry) => {
          const match = entry.match(/^(.*?)\s*\((.*)\)$/);
          return (
            <li key={entry}>
              {match ? match[1] : entry}
              {match && <span className="text-[9px] text-slate-500"> ({match[2]})</span>}
            </li>
          );
        })}
      </ol>
    )}

    {card.footerBefore && (
      <div
        className={`pt-1 border-t border-emerald-200/60 text-slate-700 ${
          card.volunteers ? 'text-[10px] text-slate-600 italic' : 'text-[10.5px]'
        }`}
      >
        {card.footerBefore}
        {card.keyword && (
          <span className="font-extrabold text-emerald-900 bg-emerald-200/70 px-1 py-0.5 rounded">
            {card.keyword}
          </span>
        )}
        {card.footerAfter}
      </div>
    )}
  </div>
);

export const PhoneChatMockup: React.FC = () => {
  const { t } = useLanguage();
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [visibleCount, setVisibleCount] = useState<number>(7);
  const [isTyping, setIsTyping] = useState(false);

  const scenarios = t.chat.scenarios;
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
          title={t.chat.replayTitle}
          className="p-1 rounded-lg text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center gap-1 text-[11px] font-semibold cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">{t.chat.replayLabel}</span>
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
                    {t.chat.aiActiveBadge}
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
                {t.chat.todayLabel}
              </span>
            </div>

            {currentScenario.messages.slice(0, visibleCount).map((msg, idx) => {
              const body = msg.card ? <AiCard card={msg.card} /> : msg.text;

              if (msg.kind === 'ai') {
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
                        {msg.sender}
                      </span>
                      <span className="text-[9px] text-slate-500">{msg.time}</span>
                    </div>
                    <div className="text-slate-800">{body}</div>
                  </div>
                );
              }

              if (msg.kind === 'planner') {
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
                      {body}
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
                  <div>{body}</div>
                </div>
              );
            })}

            {isTyping && (
              <div className="bg-[#DCF8C6] p-2 rounded-xl self-end ml-auto max-w-[50%] shadow-xs flex items-center gap-1 text-[10px] text-emerald-800 font-medium animate-pulse">
                <span>{t.chat.typingLabel}</span>
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
              {t.chat.inputPlaceholder}
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
        <span>{t.chat.trustPill}</span>
      </div>
    </div>
  );
};
