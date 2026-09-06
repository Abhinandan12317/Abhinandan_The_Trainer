import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectData } from '../types';
import { Cpu, Terminal, ArrowRight, ShieldCheck, GitBranch, Server, Layers, X, ExternalLink, Code2 } from 'lucide-react';

export const TheLab: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('fixora');
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);
  const [deepDiveProject, setDeepDiveProject] = useState<ProjectData | null>(null);

  const activeProject: ProjectData = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  return (
    <section id="lab" className="w-full py-24 sm:py-32 px-5 sm:px-8 lg:px-14 bg-[#090A0C] text-[#F4F1E8] border-b border-[#232733] relative">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Lab Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#232733] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2457FF] animate-ping"></span>
              <span className="font-mono text-xs text-[#2457FF] uppercase font-bold tracking-widest">
                [ 06 // EXPERIMENTAL SYSTEMS LAB ]
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-[#F4F1E8] uppercase font-extrabold tracking-tight">
              THE LAB.
            </h2>
          </div>
          <p className="font-mono text-xs text-[#A0A2A8] uppercase max-w-md mt-4 md:mt-0 leading-relaxed">
            AUTONOMOUS ENGINES, CI/CD PIPELINES &amp; RETRIEVAL TOPOLOGIES COMPILED IN ISOLATION.
          </p>
        </div>

        {/* Project Switcher Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {PROJECTS.map((proj) => {
            const isSelected = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  setSelectedProjectId(proj.id);
                  setActivePipelineStep(0);
                }}
                className={`p-5 text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#14161C] border-[#2457FF] shadow-[4px_4px_0px_#2457FF]'
                    : 'bg-[#0E1015] border-[#232733] hover:border-[#383C4C]'
                }`}
                data-cursor="SYSTEM"
              >
                <div className="flex items-center justify-between w-full font-mono text-xs mb-3">
                  <span className={`px-2 py-0.5 font-bold uppercase ${isSelected ? 'bg-[#2457FF] text-white' : 'bg-[#1E212B] text-[#A0A2A8]'}`}>
                    {proj.codeName}
                  </span>
                  <span className="text-[#A0A2A8]">{proj.year}</span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-[#F4F1E8] tracking-tight">
                  {proj.title.split('—')[0]}
                </h3>

                <p className="font-mono text-xs text-[#A0A2A8] mt-2 line-clamp-1">
                  {proj.category}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Project Interactive Console */}
        <div className="bg-[#14161C] border border-[#232733] shadow-[12px_12px_0px_rgba(0,0,0,0.6)] p-5 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Top Project Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#232733]">
            <div className="flex flex-col">
              <span className="font-mono text-xs text-[#2457FF] uppercase font-bold tracking-wider">
                ACTIVE SYSTEM ARCHITECTURE // {activeProject.category}
              </span>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#F4F1E8] uppercase font-extrabold mt-1">
                {activeProject.title}
              </h3>
            </div>

            <button
              onClick={() => setDeepDiveProject(activeProject)}
              className="px-4 py-2 bg-[#2457FF] hover:bg-[#1544E6] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-[2px_2px_0px_#000] flex items-center gap-2"
              data-cursor="DEEP DIVE"
            >
              <span>DEEP DIVE DOSSIER</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Project Summary */}
          <p className="font-sans text-sm sm:text-base text-[#C7C6C9] max-w-4xl my-6 leading-relaxed">
            {activeProject.summary}
          </p>

          {/* Interactive Pipeline Architecture Diagram */}
          <div className="my-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3 font-mono text-xs text-[#2457FF] uppercase font-bold tracking-widest">
              <span>// PIPELINE TOPOLOGY (CLICK ANY NODE TO INSPECT RUNTIME STATE)</span>
              <span className="text-[#A0A2A8]">STEP 0{activePipelineStep + 1} OF 0{activeProject.pipelineSteps.length}</span>
            </div>

            {/* Pipeline Node Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {activeProject.pipelineSteps.map((step, idx) => {
                const isCurrent = idx === activePipelineStep;
                return (
                  <button
                    key={step.number}
                    onClick={() => setActivePipelineStep(idx)}
                    className={`p-3 text-left border transition-all flex flex-col justify-between ${
                      isCurrent
                        ? 'bg-[#2457FF] text-white border-[#2457FF] shadow-[2px_2px_0px_#FFF]'
                        : 'bg-[#0A0B0D] text-[#F4F1E8] border-[#232733] hover:border-[#2457FF]/60'
                    }`}
                    data-cursor={`STEP 0${idx + 1}`}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] mb-2">
                      <span className="font-bold opacity-80">{step.number}</span>
                      {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>}
                    </div>

                    <div className="font-display text-xs sm:text-sm font-bold uppercase tracking-tight">
                      {step.label}
                    </div>

                    <div className={`font-mono text-[9px] mt-1 ${isCurrent ? 'text-white/80' : 'text-[#A0A2A8]'}`}>
                      {step.sublabel}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Inspected Node Detail Box */}
            <div className="mt-4 p-4 bg-[#0A0B0D] border border-[#2457FF]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="px-2 py-0.5 bg-[#2457FF] text-white font-bold">
                  STEP {activeProject.pipelineSteps[activePipelineStep].number}
                </span>
                <span className="text-[#F4F1E8] font-bold uppercase">
                  {activeProject.pipelineSteps[activePipelineStep].label}:
                </span>
                <span className="text-[#A0A2A8]">
                  {activeProject.pipelineSteps[activePipelineStep].detail}
                </span>
              </div>
              <span className="text-[#2457FF] font-bold shrink-0">[ STATUS: OPERATIONAL ]</span>
            </div>
          </div>

          {/* Code / Output Terminal Sample */}
          <div className="bg-[#0A0B0D] border border-[#232733] p-4 font-mono text-xs max-w-full overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 mb-3 border-b border-[#232733] text-[#A0A2A8]">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#2457FF]" />
                <span className="text-[#F4F1E8] font-bold uppercase">DAEMON EXECUTION LOGS &amp; TELEMETRY</span>
              </div>
              <span>RUNTIME: PYTHON 3.12 / DOCKER ENGINE</span>
            </div>
            <pre className="text-[#A0A2A8] text-xs sm:text-[13px] leading-relaxed whitespace-pre overflow-x-auto max-w-full p-2 bg-[#050608]">
              {activeProject.sampleLogOrOutput}
            </pre>
          </div>

          {/* Stack Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="text-[#2457FF] font-bold uppercase">TECHNOLOGY STACK:</span>
            {activeProject.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-[#1E212B] text-[#C7C6C9] border border-[#2B2D33]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project Deep Dive Takeover Modal */}
      {deepDiveProject && (
        <div
          className="fixed inset-0 z-[130] bg-[#090A0C]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in"
          onClick={() => setDeepDiveProject(null)}
        >
          <div
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#14161C] border border-[#2457FF] shadow-[16px_16px_0px_#000] p-6 sm:p-10 text-[#F4F1E8]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#232733] pb-4">
              <div>
                <span className="font-mono text-xs text-[#2457FF] uppercase font-bold">
                  PROJECT DOSSIER // {deepDiveProject.category}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase mt-1">
                  {deepDiveProject.title}
                </h3>
              </div>
              <button
                onClick={() => setDeepDiveProject(null)}
                className="p-1 hover:bg-[#232630] border border-[#232630]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Sections */}
            <div className="my-6 space-y-6">
              <div>
                <h4 className="font-mono text-xs text-[#2457FF] font-bold uppercase mb-2">
                  [ 01 // THE PROBLEM ]
                </h4>
                <p className="font-sans text-sm text-[#C7C6C9] leading-relaxed">
                  {deepDiveProject.problem}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#2457FF] font-bold uppercase mb-2">
                  [ 02 // THE APPROACH ]
                </h4>
                <p className="font-sans text-sm text-[#C7C6C9] leading-relaxed">
                  {deepDiveProject.approach}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#2457FF] font-bold uppercase mb-2">
                  [ 03 // WHAT WAS BUILT ]
                </h4>
                <p className="font-sans text-sm text-[#C7C6C9] leading-relaxed">
                  {deepDiveProject.summary}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 font-mono text-xs">
                  {deepDiveProject.metrics.map((metric, i) => (
                    <div key={i} className="p-2.5 bg-[#0A0B0D] border border-[#232733] text-[#2457FF] font-bold">
                      ✓ {metric}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#2457FF] font-bold uppercase mb-2">
                  [ 04 // VERIFIED EVIDENCE FROM RESUME ]
                </h4>
                <div className="p-3 bg-[#0A0B0D] border border-[#232733] font-mono text-xs text-[#F4F1E8]">
                  {deepDiveProject.verifiedProof}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#232733] flex justify-end">
              <button
                onClick={() => setDeepDiveProject(null)}
                className="px-6 py-2 bg-[#2457FF] text-white font-mono text-xs font-bold uppercase"
              >
                CLOSE DOSSIER ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
