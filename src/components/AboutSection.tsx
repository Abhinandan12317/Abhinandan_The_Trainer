import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Award, MapPin, Download, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="w-full py-20 sm:py-28 px-5 sm:px-8 lg:px-14 bg-[#FAF8F2] border-b border-[#0A0B0D]/15">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Giant Typography & Fragmented Identity (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="font-mono text-xs text-[#2457FF] uppercase font-bold tracking-widest mb-3">
              [ 08 // CURATOR IDENTITY ]
            </span>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-6xl font-extrabold uppercase text-[#0A0B0D] tracking-tight leading-[0.95] mb-6 sm:mb-8">
              WHO IS<br />
              ABHINANDAN?
            </h2>

            {/* Architectural Identity Fragment Bricks */}
            <div className="flex flex-col gap-2">
              <div className="p-4 bg-[#ECE8DC] border border-[#0A0B0D] shadow-[3px_3px_0px_#0A0B0D]">
                <span className="font-mono text-[10px] text-[#686B72] uppercase block">[ DISCIPLINE ]</span>
                <span className="font-display text-base sm:text-lg md:text-xl font-bold uppercase text-[#0A0B0D]">
                  COMPUTER SCIENCE ENGINEERING
                </span>
              </div>

              <div className="p-4 bg-[#ECE8DC] border border-[#0A0B0D] shadow-[3px_3px_0px_#0A0B0D]">
                <span className="font-mono text-[10px] text-[#2457FF] uppercase block font-bold">[ VOCATION ]</span>
                <span className="font-display text-base sm:text-lg md:text-xl font-bold uppercase text-[#0A0B0D]">
                  TECHNICAL TRAINER &amp; COMMUNICATOR
                </span>
              </div>

              <div className="p-4 bg-[#0A0B0D] text-[#F4F1E8] border border-[#0A0B0D] shadow-[3px_3px_0px_#2457FF]">
                <span className="font-mono text-[10px] text-[#A0A2A8] uppercase block">[ PRAXIS ]</span>
                <span className="font-display text-base sm:text-lg md:text-xl font-bold uppercase text-white">
                  AUTONOMOUS SYSTEMS BUILDER
                </span>
              </div>
            </div>
          </div>

          {/* Right: Academic & Leadership Dossier (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold uppercase text-[#0A0B0D] mb-4">
                THE PEDAGOGICAL MISSION
              </h3>

              <p className="font-sans text-base text-[#4A4D53] leading-relaxed mb-6">
                {PERSONAL_INFO.profileSummary}
              </p>

              {/* Factual Ledger Grid from Resume */}
              <div className="space-y-3 font-mono text-xs">
                {/* Education */}
                <div className="p-4 bg-[#F4F1E8] border border-[#0A0B0D]">
                  <div className="flex items-center gap-2 text-[#2457FF] font-bold uppercase mb-1">
                    <GraduationCap className="w-4 h-4 text-[#2457FF]" />
                    <span>EDUCATION // ACADEMIC FOUNDATION</span>
                  </div>
                  <div className="font-display text-base font-bold text-[#0A0B0D] uppercase mt-1">
                    {PERSONAL_INFO.education.degree}
                  </div>
                  <div className="text-[#686B72] mt-1 flex flex-wrap items-center justify-between">
                    <span>{PERSONAL_INFO.education.institution}</span>
                    <span className="font-bold text-[#0A0B0D]">CGPA: {PERSONAL_INFO.education.cgpa}</span>
                  </div>
                  <div className="text-[11px] text-[#686B72] mt-0.5">
                    Graduation: {PERSONAL_INFO.education.expectedYear}
                  </div>
                </div>

                {/* Certification */}
                <div className="p-4 bg-[#F4F1E8] border border-[#0A0B0D]">
                  <div className="flex items-center gap-2 text-[#2457FF] font-bold uppercase mb-1">
                    <Award className="w-4 h-4 text-[#2457FF]" />
                    <span>VERIFIED CERTIFICATION</span>
                  </div>
                  <div className="font-display text-base font-bold text-[#0A0B0D] uppercase mt-1">
                    {PERSONAL_INFO.certification.title} — {PERSONAL_INFO.certification.year}
                  </div>
                  <p className="text-[11px] text-[#4A4D53] font-sans mt-1">
                    Awarded for conducting high-impact student workshops, Gemini CLI instruction, and technical leadership across Mysuru.
                  </p>
                </div>

                {/* Location & Availability */}
                <div className="p-3 bg-[#ECE8DC] border border-[#0A0B0D]/20 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-[#686B72]">
                    <MapPin className="w-3.5 h-3.5 text-[#2457FF]" />
                    BASE: MYSURU, KARNATAKA
                  </span>
                  <span className="text-[#2457FF] font-bold uppercase">
                    AVAILABLE WORLDWIDE
                  </span>
                </div>
              </div>
            </div>

            {/* Resume Download Action */}
            <div className="mt-8 pt-6 border-t border-[#0A0B0D]/15 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="px-6 py-3 bg-[#0A0B0D] text-[#F4F1E8] hover:bg-[#2457FF] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-[4px_4px_0px_#0A0B0D] flex items-center gap-2"
                data-cursor="DOWNLOAD"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME ↓</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 bg-white hover:bg-[#ECE8DC] border border-[#0A0B0D] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                data-cursor="LINKEDIN"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 bg-white hover:bg-[#ECE8DC] border border-[#0A0B0D] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                data-cursor="GITHUB"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
