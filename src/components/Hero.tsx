import React, { useState } from 'react';
import { ArrowRight, Sparkles, Terminal, CheckCircle2, Sliders, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onInvite: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onInvite }) => {
  const [comprehensionState, setComprehensionState] = useState<'opaque' | 'structured' | 'clicked'>('opaque');
  const [activeWordHover, setActiveWordHover] = useState<'complex' | 'tech' | 'click' | null>(null);

  const toggleComprehension = () => {
    if (comprehensionState === 'opaque') {
      setComprehensionState('structured');
    } else if (comprehensionState === 'structured') {
      setComprehensionState('clicked');
    } else {
      setComprehensionState('opaque');
    }
  };

  return (
    <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 lg:px-14 bg-grid-paper border-b border-[#0A0B0D]/10 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Monograph Top Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 font-mono text-[11px] sm:text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-0.5 bg-[#0A0B0D] text-[#F4F1E8] uppercase tracking-widest font-bold">
              [ ARCHIVAL MONOGRAPH // 2025 ]
            </span>
            <span className="px-2 py-0.5 bg-[#ECE8DC] text-[#686B72] uppercase tracking-wider border border-[#0A0B0D]/15">
              [ DOSSIER 01: SYSTEMS PEDAGOGY ]
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#2457FF] font-semibold tracking-wider uppercase text-[11px] sm:text-xs">
            <span className="w-2 h-2 rounded-full bg-[#2457FF] animate-pulse shrink-0"></span>
            <span className="hidden sm:inline">ACTIVE TRANSMISSION // {PERSONAL_INFO.coordinates}</span>
            <span className="sm:hidden">TRANSMISSION // MYSURU (IST)</span>
          </div>
        </div>

        {/* 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative max-w-full">
          {/* Main Typography Column (Full width on mobile/tablet, 7 Cols on Desktop) */}
          <div className="w-full lg:col-span-7 flex flex-col justify-between z-10 max-w-full overflow-hidden">
            {/* The Proportional, Balanced Headline */}
            <div className="flex flex-col select-none uppercase font-extrabold leading-[0.92] sm:leading-[0.88] max-w-full">
              {/* LINE 1: I MAKE */}
              <span className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#0A0B0D] tracking-tight whitespace-nowrap">
                I MAKE
              </span>

              {/* LINE 2: COMPLEX (Interactive fragmenting) */}
              <div
                className="relative inline-block my-1 cursor-pointer group max-w-full"
                onMouseEnter={() => setActiveWordHover('complex')}
                onMouseLeave={() => setActiveWordHover(null)}
                onClick={() => setComprehensionState(comprehensionState === 'opaque' ? 'structured' : 'opaque')}
                title="Click to fragment complexity"
                data-cursor="FRAGMENT"
              >
                <span className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl transition-all duration-300 tracking-tight whitespace-nowrap ${
                  comprehensionState === 'structured'
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#2457FF] via-[#0A0B0D] to-[#2457FF]'
                    : comprehensionState === 'clicked'
                    ? 'text-[#0A0B0D]'
                    : 'text-[#0A0B0D] group-hover:text-[#2457FF]'
                }`}>
                  COMPLEX
                </span>

                {/* Conceptual Sub-Decomposition Tags when active */}
                {(comprehensionState === 'structured' || activeWordHover === 'complex') && (
                  <div className="absolute -top-3 sm:-top-4 left-0 flex flex-wrap items-center gap-1.5 font-mono text-[9px] sm:text-[10px] text-[#2457FF] tracking-normal font-semibold animate-in fade-in z-20">
                    <span className="px-1.5 py-0.5 bg-white border border-[#2457FF] shadow-[2px_2px_0px_#2457FF]">
                      [ AST DECONSTRUCTION ]
                    </span>
                    <span className="px-1.5 py-0.5 bg-white border border-[#0A0B0D] text-[#0A0B0D]">
                      [ HEURISTIC ISOLATION ]
                    </span>
                  </div>
                )}
              </div>

              {/* LINE 3: TECHNOLOGY (Interactive node system) */}
              <div
                className="relative inline-block my-1 cursor-pointer group max-w-full"
                onMouseEnter={() => setActiveWordHover('tech')}
                onMouseLeave={() => setActiveWordHover(null)}
                onClick={() => setComprehensionState(comprehensionState === 'clicked' ? 'structured' : 'clicked')}
                title="Click to reveal system nodes"
                data-cursor="SYSTEM"
              >
                <span className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl transition-all duration-300 tracking-tight whitespace-nowrap ${
                  activeWordHover === 'tech'
                    ? 'text-[#2457FF]'
                    : 'text-[#0A0B0D]'
                }`}>
                  TECHNOLOGY
                </span>

                {/* Micro Node Links */}
                {(activeWordHover === 'tech' || comprehensionState === 'structured') && (
                  <div className="mt-1 flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-white animate-in fade-in">
                    <span className="px-2 py-0.5 bg-[#0A0B0D] border border-black">CLI</span>
                    <span className="text-[#2457FF]">→</span>
                    <span className="px-2 py-0.5 bg-[#2457FF]">CONTAINER</span>
                    <span className="text-[#2457FF]">→</span>
                    <span className="px-2 py-0.5 bg-[#0A0B0D] border border-black">PIPELINE</span>
                  </div>
                )}
              </div>

              {/* LINE 4: CLICK. */}
              <div className="flex flex-wrap items-baseline gap-3 sm:gap-6 mt-1">
                <span
                  className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight whitespace-nowrap transition-all duration-300 ${
                    comprehensionState === 'clicked'
                      ? 'text-[#2457FF] underline decoration-[#2457FF] decoration-4 sm:decoration-6 underline-offset-8'
                      : 'text-[#2457FF] hover:text-[#0A0B0D]'
                  }`}
                  data-cursor="CLICK"
                  onClick={() => setComprehensionState('clicked')}
                >
                  CLICK.
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#686B72] tracking-widest uppercase font-semibold">
                  // RECURSIVE CLARITY
                </span>
              </div>
            </div>

            {/* Interactive Comprehension Catalyst Bar */}
            <div className="mt-8 sm:mt-10 p-4 bg-[#ECE8DC] border border-[#0A0B0D]/20 shadow-[3px_3px_0px_#0A0B0D] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 font-mono text-xs text-[#0A0B0D] font-bold uppercase">
                  <Sliders className="w-3.5 h-3.5 text-[#2457FF]" />
                  <span>COMPREHENSION ENGINE</span>
                </div>
                <div className="font-mono text-[11px] text-[#686B72] mt-0.5">
                  {comprehensionState === 'opaque' && (
                    <span>STATE: <strong className="text-[#0A0B0D]">OPAQUE RAW CODE (0x4E2)</strong> — AWAITING INTUITIVE DECOMPOSITION</span>
                  )}
                  {comprehensionState === 'structured' && (
                    <span>STATE: <strong className="text-[#2457FF]">DECONSTRUCTED INTO PHYSICAL MENTAL MODEL</strong></span>
                  )}
                  {comprehensionState === 'clicked' && (
                    <span>STATE: <strong className="text-[#008A2E]">100% CRYSTAL CLARITY</strong> — COHORT FULLY SYNCHRONIZED</span>
                  )}
                </div>
              </div>

              <button
                onClick={toggleComprehension}
                className="w-full sm:w-auto px-4 py-2 bg-[#0A0B0D] text-[#F4F1E8] hover:bg-[#2457FF] font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center justify-center gap-2"
                data-cursor="SHIFT"
              >
                <span>[ SIMULATE COMPREHENSION SHIFT ]</span>
                <Sparkles className="w-3.5 h-3.5 text-[#F4F1E8]" />
              </button>
            </div>

            {/* Concise Mission Paragraph */}
            <p className="font-sans text-base sm:text-lg text-[#4A4D53] max-w-2xl mt-6 leading-relaxed">
              Deconstructing the opaque strata of modern computing: distributed container topologies, autonomous CI/CD agents, and GenAI workflows translated into crystal human intuitions.
            </p>

            {/* Direct CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#proof"
                onClick={onExploreWork}
                className="px-6 py-3.5 bg-[#0A0B0D] text-[#F4F1E8] hover:bg-[#2457FF] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-3 shadow-[4px_4px_0px_rgba(10,11,13,0.3)] hover:shadow-[4px_4px_0px_#2457FF]"
                data-cursor="EXPLORE"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={onInvite}
                className="px-6 py-3.5 bg-[#F4F1E8] text-[#0A0B0D] hover:bg-[#0A0B0D] hover:text-[#F4F1E8] border border-[#0A0B0D] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-[4px_4px_0px_#0A0B0D]"
                data-cursor="INVITE"
              >
                <span>INVITE ME TO SPEAK ↗</span>
              </a>
            </div>

            {/* Verified Resume Credentials Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-8 pt-6 border-t border-[#0A0B0D]/15 font-mono text-xs">
              <div className="p-2.5 bg-[#ECE8DC] border border-[#0A0B0D]/10">
                <span className="block text-[10px] text-[#686B72] uppercase">[ ROLE ]</span>
                <span className="font-bold text-[#0A0B0D]">TECHNICAL TRAINER</span>
              </div>
              <div className="p-2.5 bg-[#ECE8DC] border border-[#0A0B0D]/10">
                <span className="block text-[10px] text-[#686B72] uppercase">[ COHORT ]</span>
                <span className="font-bold text-[#0A0B0D]">40+ ENGINEERS</span>
              </div>
              <div className="p-2.5 bg-[#ECE8DC] border border-[#0A0B0D]/10">
                <span className="block text-[10px] text-[#686B72] uppercase">[ WORKSHOP ]</span>
                <span className="font-bold text-[#0A0B0D]">4.0 HR HANDS-ON</span>
              </div>
              <div className="p-2.5 bg-[#ECE8DC] border border-[#0A0B0D]/10">
                <span className="block text-[10px] text-[#686B72] uppercase">[ AMBASSADOR ]</span>
                <span className="font-bold text-[#2457FF]">GSA 2025</span>
              </div>
            </div>
          </div>

          {/* Right Visual Anchor: Art-Directed Photograph of Abhinandan Speaking (Hidden on mobile & tablet view) */}
          <div className="hidden lg:block lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Monospace Dossier Badges */}
            <div className="w-full flex items-center justify-between mb-2 font-mono text-xs text-[#686B72]">
              <span className="font-bold text-[#0A0B0D]">FIG. 01 — REPO KEYNOTE</span>
              <span>LAT 12.2958° N, MYSURU</span>
            </div>

            {/* Archival Frame with Hairline Border */}
            <div
              className="relative w-full overflow-hidden border border-[#0A0B0D] bg-[#0A0B0D] shadow-[6px_6px_0px_#0A0B0D] group"
              data-cursor="VIEW"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo8uShT7GJmxL-ji5fU0LVSXFJUu1jTOG7pJ7I_MCXe04MvreP9qBUuoSDvud1SaRciV3_2AuBz5zHlpcJ02_LaZDpQzCHUH8yw4Zizx5MqIYGIJjn-uoX6_eGCO_ROENaFWDZaCgjWQH4LCD0g-KFTcHiiC_38A8dkNO9jAEAEkmvjRJ22DW-arg4YRi-Zz0AY5f7oROZomAWheonqvnqmcTc5Jt2xcDoAbn4dR-T0OgGQ-ZfLZB2rirRHfn4lJccqA"
                alt="Abhinandan speaking at the podium delivering keynote in Mysuru"
                className="w-full h-auto object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 aspect-[3/4]"
              />

              {/* Film overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D]/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity"></div>

              {/* Bottom Documentary Placard */}
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#F4F1E8]/95 border border-[#0A0B0D] shadow-[2px_2px_0px_#0A0B0D] backdrop-blur-sm">
                <div className="flex items-center justify-between font-mono text-xs text-[#0A0B0D] uppercase">
                  <span className="font-extrabold tracking-wider">MYSURU KEYNOTE</span>
                  <span className="text-[#2457FF] font-bold">GSA COHORT</span>
                </div>
                <div className="font-mono text-[11px] text-[#686B72] mt-1">
                  TOPIC: GEMINI CLI ARCHITECTURE &amp; TERMINAL WORKFLOWS
                </div>
              </div>
            </div>

            {/* Overlapping Stamp: Verified Facts from Resume */}
            <div className="mt-3 p-3 bg-[#F4F1E8] border border-[#0A0B0D] shadow-[3px_3px_0px_#0A0B0D] font-mono text-[11px]">
              <div className="flex items-center justify-between text-[#0A0B0D] font-bold uppercase mb-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2457FF]" />
                  VERIFIED FACTUAL RECORD
                </span>
                <span className="text-[#686B72]">RESUME 2025</span>
              </div>
              <p className="text-[#4A4D53] leading-normal">
                "Conducted a 4-hour hands-on workshop for 40+ students on AI-assisted web development and deployment using Gemini CLI."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
