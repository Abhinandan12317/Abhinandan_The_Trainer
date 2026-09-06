import React, { useState } from 'react';
import { TEACHING_STAGES } from '../data/portfolioData';
import { Terminal, Lightbulb, Play, Rocket, CheckCircle, HelpCircle } from 'lucide-react';

export const TeachingMethod: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = TEACHING_STAGES[activeStageIndex];

  const stageIcons = [HelpCircle, Lightbulb, Play, Rocket];

  return (
    <section id="pedagogy" className="w-full py-20 sm:py-28 px-5 sm:px-8 lg:px-14 bg-[#F4F1E8] border-b border-[#0A0B0D]/15">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs text-[#2457FF] uppercase tracking-widest font-bold">
              [ 02 // METHODOLOGY ENGINE ]
            </span>
            <span className="font-mono text-xs text-[#686B72] uppercase">
              INTERACTIVE PEDAGOGICAL COMPILER
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-[#0A0B0D] uppercase font-extrabold tracking-tight mt-2">
            THE 4-STAGE PEDAGOGICAL COMPILER
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#4A4D53] max-w-2xl mt-2 leading-relaxed">
            Select a compiler phase to inspect how opaque architectural abstractions are systematically unpacked into tangible engineering execution.
          </p>
        </div>

        {/* Phase Selector Tab Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6">
          {TEACHING_STAGES.map((stage, idx) => {
            const isSelected = idx === activeStageIndex;
            const Icon = stageIcons[idx];
            return (
              <button
                key={stage.number}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-3.5 sm:p-5 text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0A0B0D] text-[#F4F1E8] border-[#0A0B0D] shadow-[4px_4px_0px_#2457FF]'
                    : 'bg-[#ECE8DC] text-[#0A0B0D] border-[#0A0B0D]/20 hover:bg-[#E2DDD0] shadow-[2px_2px_0px_#0A0B0D]'
                }`}
                data-cursor={stage.title}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`font-mono text-[11px] sm:text-xs font-bold uppercase ${isSelected ? 'text-[#2457FF]' : 'text-[#686B72]'}`}>
                    PHASE {stage.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#2457FF]' : 'text-[#686B72]'}`} />
                </div>

                <span className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase mt-2 sm:mt-3">
                  {stage.title}
                </span>

                <span className={`font-mono text-[10px] sm:text-[11px] mt-1.5 break-words ${isSelected ? 'text-[#A0A2A8]' : 'text-[#686B72]'}`}>
                  [ {stage.concept} ]
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Architectural Display Panel */}
        <div className="bg-[#FAF8F2] border border-[#0A0B0D] shadow-[8px_8px_0px_#0A0B0D] p-5 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Narrative Column (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col">
              {/* Concept Indicator */}
              <div className="flex items-center gap-2 font-mono text-xs text-[#2457FF] uppercase font-bold mb-2">
                <span className="w-2 h-2 rounded-full bg-[#2457FF]"></span>
                <span>STAGE {activeStage.number} // {activeStage.concept}</span>
              </div>

              {/* Tagline Heading */}
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#0A0B0D] uppercase font-extrabold tracking-tight">
                {activeStage.tagline}
              </h3>

              {/* Detailed Explanation */}
              <p className="font-sans text-sm sm:text-base text-[#4A4D53] mt-3 sm:mt-4 leading-relaxed">
                {activeStage.description}
              </p>

              {/* Intuitive Physical Analogy Card */}
              <div className="mt-5 sm:mt-6 p-4 bg-[#ECE8DC] border border-[#0A0B0D]">
                <span className="font-mono text-xs text-[#2457FF] uppercase font-bold block mb-1">
                  [ INTUITIVE MENTAL MODEL ]
                </span>
                <p className="font-sans text-sm italic text-[#0A0B0D] leading-relaxed">
                  "{activeStage.analogy}"
                </p>
              </div>

              {/* Practical Concrete Example */}
              <div className="mt-3 p-3 bg-white border border-[#0A0B0D]/20 font-mono text-xs">
                <span className="text-[#686B72] uppercase block mb-1">[ AUDITORIUM CASE STUDY ]</span>
                <span className="text-[#0A0B0D]">{activeStage.concreteExample}</span>
              </div>
            </div>

            {/* Right Interactive Code / Terminal Screen (7 Cols) */}
            <div className="lg:col-span-7 bg-[#090A0C] text-[#F4F1E8] border border-[#0A0B0D] shadow-[6px_6px_0px_#2457FF] p-4 sm:p-6 flex flex-col justify-between min-h-[340px] max-w-full overflow-hidden">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#232630] font-mono text-[11px] sm:text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
                  <span className="text-[#A0A2A8] ml-2 uppercase">
                    STAGE_0{activeStageIndex + 1}.EXEC
                  </span>
                </div>
                <span className="text-[#2457FF] font-bold">INTERACTION LIVE</span>
              </div>

              {/* Code / Script Area */}
              <pre className="font-mono text-xs sm:text-[13px] text-[#E5E2DA] my-4 leading-relaxed whitespace-pre overflow-x-auto max-w-full p-3 bg-[#12141A] border border-[#232630]">
                {activeStage.codeSample}
              </pre>

              {/* Terminal Footer Telemetry */}
              <div className="pt-3 border-t border-[#232630] flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
                <span className="text-[#A0A2A8] flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#2457FF]" />
                  <span>[ {activeStage.statusBadge} ]</span>
                </span>
                <span className="text-[#2457FF] font-bold">
                  METRIC: {activeStage.metric}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
