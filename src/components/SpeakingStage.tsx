import React, { useState, useRef } from 'react';
import { SPEAKING_EVENTS } from '../data/portfolioData';
import { SpeakerEvent } from '../types';
import { Presentation, Users, Clock, MapPin, Calendar, CheckCircle2, ArrowRight, ArrowLeft, Image as ImageIcon } from 'lucide-react';

interface SpeakingStageProps {
  onViewPhoto: (photoUrl: string, caption: string) => void;
}

export const SpeakingStage: React.FC<SpeakingStageProps> = ({ onViewPhoto }) => {
  const [selectedEventId, setSelectedEventId] = useState<string>('gsa-2025');
  const eventListRef = useRef<HTMLDivElement>(null);

  const currentEvent: SpeakerEvent = SPEAKING_EVENTS.find((e) => e.id === selectedEventId) || SPEAKING_EVENTS[0];
  const currentIndex = SPEAKING_EVENTS.findIndex((e) => e.id === selectedEventId);

  const handleNextEvent = () => {
    const nextIndex = (currentIndex + 1) % SPEAKING_EVENTS.length;
    setSelectedEventId(SPEAKING_EVENTS[nextIndex].id);
    if (eventListRef.current) {
      const targetChild = eventListRef.current.children[nextIndex] as HTMLElement;
      if (targetChild) {
        targetChild.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handlePrevEvent = () => {
    const prevIndex = (currentIndex - 1 + SPEAKING_EVENTS.length) % SPEAKING_EVENTS.length;
    setSelectedEventId(SPEAKING_EVENTS[prevIndex].id);
    if (eventListRef.current) {
      const targetChild = eventListRef.current.children[prevIndex] as HTMLElement;
      if (targetChild) {
        targetChild.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  return (
    <section id="speaking" className="w-full py-20 sm:py-28 px-5 sm:px-8 lg:px-14 bg-[#F4F1E8] border-b border-[#0A0B0D]/15">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#2457FF] uppercase font-bold tracking-widest">
              <Presentation className="w-3.5 h-3.5" />
              <span>[ 04 // AUDITORIUM &amp; SEMINARS ]</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-[#0A0B0D] uppercase font-extrabold tracking-tight">
              THE STAGE
            </h2>
          </div>
          <div className="font-mono text-xs text-[#686B72] uppercase mt-3 md:mt-0 flex items-center gap-3">
            <span>DOSSIER // SELECT EVENT SCENE</span>
            <span className="text-[#2457FF] font-bold">0{currentIndex + 1} / 0{SPEAKING_EVENTS.length}</span>
          </div>
        </div>

        {/* Horizontal Event Selector with (->) Button */}
        <div className="flex items-center gap-2 mb-6 max-w-full">
          {/* Scrollable Event Pills */}
          <div 
            ref={eventListRef}
            className="flex items-center gap-2 overflow-x-auto flex-1 min-w-0 pb-2 no-scrollbar scroll-smooth"
          >
            {SPEAKING_EVENTS.map((event, index) => {
              const isSelected = event.id === selectedEventId;
              return (
                <button
                  key={event.id}
                  onClick={() => setSelectedEventId(event.id)}
                  className={`px-3.5 py-2.5 text-left border transition-all whitespace-nowrap shrink-0 flex items-center gap-2.5 ${
                    isSelected
                      ? 'bg-[#0A0B0D] text-[#F4F1E8] border-[#0A0B0D] shadow-[3px_3px_0px_#2457FF]'
                      : 'bg-[#ECE8DC] text-[#0A0B0D] border-[#0A0B0D]/20 hover:border-[#0A0B0D]'
                  }`}
                  data-cursor="SCENE"
                >
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#2457FF]' : 'text-[#686B72]'}`}>
                    0{index + 1}/
                  </span>
                  <div className="flex flex-col">
                    <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-tight">
                      {event.organization}
                    </span>
                    <span className={`font-mono text-[10px] ${isSelected ? 'text-[#A0A2A8]' : 'text-[#686B72]'}`}>
                      {event.date} // {event.audience}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dedicated (->) Next Event Controls */}
          <div className="flex items-center gap-1.5 shrink-0 pb-2">
            <button
              onClick={handlePrevEvent}
              className="p-2 sm:px-2.5 sm:py-2.5 bg-[#ECE8DC] hover:bg-[#0A0B0D] text-[#0A0B0D] hover:text-[#F4F1E8] border border-[#0A0B0D] font-mono text-xs font-bold transition-all shadow-[2px_2px_0px_#0A0B0D] active:translate-x-[1px] active:translate-y-[1px]"
              title="Previous event (&lt;-)"
              data-cursor="PREV"
              aria-label="Previous event"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNextEvent}
              className="px-3 sm:px-3.5 py-2 sm:py-2.5 bg-[#2457FF] hover:bg-[#1242E6] text-white border border-[#0A0B0D] font-mono text-xs font-extrabold transition-all shadow-[3px_3px_0px_#0A0B0D] active:translate-x-[1px] active:translate-y-[1px] flex items-center gap-1.5"
              title="Next event (-&gt;)"
              data-cursor="NEXT"
              aria-label="Next event (-&gt;)"
            >
              <span className="hidden sm:inline">NEXT</span>
              <span>(-&gt;)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Main Stage Projection Viewport */}
        <div className="bg-[#FAF8F2] border border-[#0A0B0D] shadow-[8px_8px_0px_#0A0B0D] p-5 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Documentary Photographic Artifact (Hidden on mobile & tablet view) */}
            <div className="hidden lg:block lg:col-span-7 relative">
              <div
                className="relative border border-[#0A0B0D] shadow-[6px_6px_0px_#0A0B0D] overflow-hidden bg-[#0A0B0D] group cursor-pointer"
                onClick={() => onViewPhoto(currentEvent.photoUrl, currentEvent.photoCaption)}
                data-cursor="EXPAND"
              >
                <img
                  key={currentEvent.photoUrl}
                  src={currentEvent.photoUrl}
                  alt={currentEvent.title}
                  className="w-full h-auto object-cover filter contrast-120 group-hover:scale-105 transition-transform duration-700 aspect-[4/3]"
                />

                {/* Event Fig Badge */}
                <div className="absolute top-3 left-3 bg-[#F4F1E8]/90 border border-[#0A0B0D] px-2 py-0.5 font-mono text-[11px] text-[#0A0B0D] uppercase font-bold backdrop-blur-sm">
                  {currentEvent.figNumber} // LIVE AUDITORIUM EVIDENCE
                </div>

                {/* Bottom Photo Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 bg-[#F4F1E8]/95 border border-[#0A0B0D] backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs">
                  <span className="text-[#0A0B0D] font-bold text-[11px] sm:text-xs">{currentEvent.photoCaption}</span>
                  <span className="text-[#2457FF] font-bold shrink-0">[ EXPAND PHOTO ↗ ]</span>
                </div>
              </div>
            </div>

            {/* Right Event Narrative & Ledger (Full width on mobile/tablet, 5 Cols on desktop) */}
            <div className="w-full lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Event Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {currentEvent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#ECE8DC] border border-[#0A0B0D]/20 font-mono text-[10px] text-[#0A0B0D] uppercase font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Event Main Title */}
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#0A0B0D] uppercase font-extrabold tracking-tight leading-snug">
                  {currentEvent.title}
                </h3>

                {/* Subtitle */}
                <h4 className="font-mono text-xs sm:text-sm text-[#2457FF] uppercase font-bold mt-2">
                  {currentEvent.subtitle}
                </h4>

                {/* Structured Metadata Badges */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[#0A0B0D]/15 font-mono text-xs">
                  <div className="flex items-center gap-2 p-2 bg-[#ECE8DC] border border-[#0A0B0D]/10">
                    <Users className="w-3.5 h-3.5 text-[#2457FF]" />
                    <div className="flex flex-col">
                      <span className="text-[9px] text-[#686B72] uppercase">AUDIENCE</span>
                      <span className="font-bold text-[#0A0B0D]">{currentEvent.audience}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 bg-[#ECE8DC] border border-[#0A0B0D]/10">
                    <Clock className="w-3.5 h-3.5 text-[#2457FF]" />
                    <div className="flex flex-col">
                      <span className="text-[9px] text-[#686B72] uppercase">DURATION</span>
                      <span className="font-bold text-[#0A0B0D]">{currentEvent.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 bg-[#ECE8DC] border border-[#0A0B0D]/10">
                    <MapPin className="w-3.5 h-3.5 text-[#2457FF]" />
                    <div className="flex flex-col">
                      <span className="text-[9px] text-[#686B72] uppercase">LOCATION</span>
                      <span className="font-bold text-[#0A0B0D]">{currentEvent.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 bg-[#ECE8DC] border border-[#0A0B0D]/10">
                    <Calendar className="w-3.5 h-3.5 text-[#2457FF]" />
                    <div className="flex flex-col">
                      <span className="text-[9px] text-[#686B72] uppercase">DATE / STATUS</span>
                      <span className="font-bold text-[#0A0B0D]">{currentEvent.date}</span>
                    </div>
                  </div>
                </div>

                {/* Event Description */}
                <p className="font-sans text-sm text-[#4A4D53] mt-5 leading-relaxed">
                  {currentEvent.description}
                </p>

                {/* Key Takeaways */}
                <div className="mt-5 space-y-1.5 font-mono text-xs">
                  <span className="text-[#686B72] uppercase block font-bold mb-1">[ VERIFIED IMPACT METRICS ]</span>
                  {currentEvent.keyTakeaways.map((takeaway, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#2457FF] font-bold">↳</span>
                      <span className="text-[#0A0B0D]">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-[#0A0B0D]/15 flex items-center justify-between">
                <button
                  onClick={() => onViewPhoto(currentEvent.photoUrl, currentEvent.photoCaption)}
                  className="px-4 py-2 bg-[#0A0B0D] text-[#F4F1E8] hover:bg-[#2457FF] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
                  data-cursor="VIEW PROOF"
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>VIEW PROOF PHOTOGRAPHS →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
