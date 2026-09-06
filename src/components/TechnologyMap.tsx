import React, { useState } from 'react';
import { TECHNOLOGIES } from '../data/portfolioData';
import { TechnologyNode } from '../types';
import { Cpu, CheckCircle2, ShieldCheck, ArrowRight, ExternalLink, Network } from 'lucide-react';

export const TechnologyMap: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTechId, setActiveTechId] = useState<string>('gemini-cli');
  const [hoveredTechId, setHoveredTechId] = useState<string | null>(null);

  const categories = ['All', 'AI & Automation', 'DevOps & Systems', 'Web & Full-Stack', 'Cloud & DB', 'Programming'];

  const filteredTechnologies = selectedCategory === 'All'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter(t => t.category === selectedCategory);

  const activeTech: TechnologyNode = TECHNOLOGIES.find(t => t.id === activeTechId) || TECHNOLOGIES[0];

  return (
    <section id="techmap" className="w-full py-20 sm:py-28 px-5 sm:px-8 lg:px-14 bg-[#ECE8DC] border-b border-[#0A0B0D]/15">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#2457FF] uppercase font-bold tracking-widest">
              <Network className="w-3.5 h-3.5" />
              <span>[ 03 // SYSTEMS BLUEPRINT ]</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-[#0A0B0D] uppercase font-extrabold tracking-tight">
              ENGINEERED TECHNOLOGY MAP
            </h2>
          </div>
          <div className="font-mono text-xs text-[#686B72] uppercase mt-3 md:mt-0 max-w-sm text-left md:text-right">
            EVERY NODE CONNECTS TO VERIFIED PROOF-OF-WORK // ZERO EMPTY KEYWORDS OR SKILL BARS
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 font-mono text-xs font-bold uppercase transition-all border ${
                selectedCategory === cat
                  ? 'bg-[#0A0B0D] text-[#F4F1E8] border-[#0A0B0D] shadow-[2px_2px_0px_#2457FF]'
                  : 'bg-[#F4F1E8] text-[#0A0B0D] border-[#0A0B0D]/20 hover:border-[#0A0B0D]'
              }`}
              data-cursor={cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Node Cloud / Grid (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredTechnologies.map((tech) => {
                const isSelected = tech.id === activeTechId;
                const isHovered = tech.id === hoveredTechId;
                const isRelated = activeTech?.relatedTechs.includes(tech.name);

                return (
                  <div
                    key={tech.id}
                    onClick={() => setActiveTechId(tech.id)}
                    onMouseEnter={() => setHoveredTechId(tech.id)}
                    onMouseLeave={() => setHoveredTechId(null)}
                    className={`p-4 border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#0A0B0D] text-[#F4F1E8] border-[#0A0B0D] shadow-[4px_4px_0px_#2457FF]'
                        : isRelated
                        ? 'bg-white border-[#2457FF] text-[#0A0B0D] shadow-[2px_2px_0px_#2457FF]'
                        : 'bg-[#F4F1E8] text-[#0A0B0D] border-[#0A0B0D]/20 hover:border-[#0A0B0D] hover:shadow-[3px_3px_0px_#0A0B0D]'
                    }`}
                    data-cursor="PROOF"
                  >
                    <div>
                      <div className="flex items-center justify-between font-mono text-[10px] uppercase mb-2">
                        <span className={`px-1.5 py-0.5 border ${
                          isSelected
                            ? 'bg-[#181A22] text-[#A0A2A8] border-[#2B2D33]'
                            : 'bg-[#ECE8DC] text-[#686B72] border-[#0A0B0D]/10'
                        }`}>
                          {tech.category}
                        </span>
                        {isRelated && (
                          <span className="text-[#2457FF] font-bold">[ CONNECTED ]</span>
                        )}
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight">
                        {tech.name}
                      </h3>

                      <p className={`font-mono text-xs mt-1 break-words ${isSelected ? 'text-[#A0A2A8]' : 'text-[#686B72]'}`}>
                        {tech.level}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-current/10 flex items-center justify-between font-mono text-[11px]">
                      <span className={`${isSelected ? 'text-[#2457FF]' : 'text-[#0A0B0D]'} font-bold`}>
                        [ VIEW EVIDENCE → ]
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Inspection & Verified Proof Card (5 Cols sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-[#FAF8F2] border border-[#0A0B0D] shadow-[8px_8px_0px_#0A0B0D] p-5 sm:p-7">
              {/* Proof Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-[#0A0B0D]/15 font-mono text-xs">
                <span className="flex items-center gap-1.5 text-[#2457FF] font-bold uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#2457FF]" />
                  VERIFIED PROOF
                </span>
                <span className="px-2 py-0.5 bg-[#0A0B0D] text-[#F4F1E8] font-bold">
                  {activeTech.contextTag}
                </span>
              </div>

              {/* Title & Category */}
              <div className="mt-4">
                <span className="font-mono text-xs text-[#686B72] uppercase">
                  ACTIVE NODE:
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#0A0B0D] tracking-tight">
                  {activeTech.name}
                </h3>
                <span className="font-mono text-xs text-[#2457FF] font-semibold mt-1 block">
                  {activeTech.level}
                </span>
              </div>

              {/* Concrete Proof Narrative */}
              <div className="mt-6 p-4 bg-[#ECE8DC] border border-[#0A0B0D]">
                <span className="font-mono text-xs font-bold text-[#0A0B0D] uppercase block mb-1">
                  [ RESUME EVIDENCE ]
                </span>
                <div className="font-display text-lg font-bold text-[#0A0B0D] uppercase mb-2">
                  {activeTech.proofTitle}
                </div>
                <p className="font-sans text-sm text-[#4A4D53] leading-relaxed">
                  {activeTech.proofDescription}
                </p>
              </div>

              {/* Connected Ecosystem Topology */}
              <div className="mt-6 font-mono text-xs">
                <span className="text-[#686B72] uppercase block mb-2">
                  [ INTERCONNECTED TECHNOLOGIES ]
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeTech.relatedTechs.map((rel) => (
                    <button
                      key={rel}
                      onClick={() => {
                        const target = TECHNOLOGIES.find(t => t.name.toLowerCase().includes(rel.toLowerCase()));
                        if (target) setActiveTechId(target.id);
                      }}
                      className="px-2.5 py-1 bg-white border border-[#0A0B0D] hover:bg-[#2457FF] hover:text-white transition-colors"
                      data-cursor="NODE"
                    >
                      {rel} ↗
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-[#0A0B0D]/15">
                <a
                  href="#proof"
                  className="w-full py-2.5 bg-[#0A0B0D] text-[#F4F1E8] hover:bg-[#2457FF] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  data-cursor="STAGE"
                >
                  <span>SEE DOCUMENTARY EVIDENCE IN AUDITORIUM</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
