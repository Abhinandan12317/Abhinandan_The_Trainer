import React from 'react';
import { ArrowRight, Terminal, Laptop, Users } from 'lucide-react';

export const HumanManifesto: React.FC = () => {
  return (
    <section className="relative w-full bg-[#ECE8DC] py-20 sm:py-28 px-5 sm:px-8 lg:px-14 border-b border-[#0A0B0D]/15 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left: Documentary Over-the-Shoulder Photograph (Hidden on mobile & tablet view) */}
          <div className="hidden lg:block lg:col-span-7 relative">
            <div
              className="relative border border-[#0A0B0D] shadow-[8px_8px_0px_#0A0B0D] overflow-hidden bg-[#0A0B0D] group"
              data-cursor="VIEW"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXD3LLVgq-Kh339s074EWYquta49PEUuKM0fYc4cl0JdZWAuvBkpKxYE8_b0Jrs1rUmK9ntarKVoIUeCvPsHJfu9LWiql3sPJzMgcuGB5yvPBIp-GPT8RVWr4ijEYdtdAVBcPix6QZf6laW7RRemOS9tQbce0WE4HqpTMIr0rpeGnBt5SfpEe3I7C5zgvzRmnkTdcEMUSsVkcX2MhhREtaXbQoMHdoDuraDC83x-hI61PWKtd-L3HswHcwU_76s_jMQg"
                alt="Abhinandan's laptop terminal showing GEMINI ASCII banner facing 40+ attentive engineering students"
                className="w-full h-auto object-cover filter contrast-115 group-hover:scale-102 transition-transform duration-700 aspect-[16/10]"
              />

              {/* Top archival tag */}
              <div className="absolute top-3 left-3 bg-[#F4F1E8]/95 border border-[#0A0B0D] px-2.5 py-1 font-mono text-[11px] text-[#0A0B0D] uppercase font-bold backdrop-blur-sm">
                FIG. 02 // OVER-THE-SHOULDER AUDITORIUM POV
              </div>

              {/* Bottom live telemetric placard */}
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#F4F1E8]/95 border border-[#0A0B0D] backdrop-blur-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-mono text-xs text-[#0A0B0D] font-bold uppercase flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#2457FF]" />
                    [TERMINAL BUFFER: ASCII GEMINI 2.0]
                  </span>
                  <span className="font-mono text-xs text-[#2457FF] font-bold flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    40+ ACTIVE PARTICIPANT SCREENS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Manifesto (Full width on mobile/tablet, 5 Cols on desktop) */}
          <div className="w-full lg:col-span-5 flex flex-col justify-center">
            <div className="font-mono text-xs text-[#2457FF] uppercase font-bold tracking-widest mb-3">
              [ 01 // THE HUMAN EQUATION ]
            </div>

            <h2 className="font-display text-xl sm:text-2xl lg:text-4xl text-[#0A0B0D] uppercase font-extrabold tracking-tight leading-snug sm:leading-[0.95] mb-5">
              I DON'T JUST<br />
              EXPLAIN<br />
              TECHNOLOGY.<br />
              <span className="text-[#686B72] font-semibold">I MAKE IT<br />UNDERSTANDABLE.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#4A4D53] mb-6 sm:mb-8 leading-relaxed">
              The true bottleneck of technological adoption is never raw computational throughput—it is cognitive bandwidth. When an engineer grasps the internal mental model of a system, fear evaporates and architecture transforms into intuition.
            </p>

            {/* The 4-Stage Transmission Pipeline */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-[#0A0B0D] uppercase font-bold tracking-wider mb-1">
                COGNITIVE TRANSMISSION PIPELINE:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <a
                  href="#pedagogy"
                  className="p-2.5 sm:p-3 bg-[#F4F1E8] border border-[#0A0B0D] shadow-[2px_2px_0px_#0A0B0D] hover:bg-[#2457FF] hover:text-white group transition-all"
                  data-cursor="WHY"
                >
                  <span className="block font-mono text-[11px] sm:text-xs font-bold text-[#2457FF] group-hover:text-white">01</span>
                  <span className="font-mono text-[11px] sm:text-xs font-bold uppercase">WHY</span>
                </a>
                <a
                  href="#pedagogy"
                  className="p-2.5 sm:p-3 bg-[#F4F1E8] border border-[#0A0B0D] shadow-[2px_2px_0px_#0A0B0D] hover:bg-[#2457FF] hover:text-white group transition-all"
                  data-cursor="SIMPLIFY"
                >
                  <span className="block font-mono text-[11px] sm:text-xs font-bold text-[#2457FF] group-hover:text-white">02</span>
                  <span className="font-mono text-[11px] sm:text-xs font-bold uppercase">SIMPLIFY</span>
                </a>
                <a
                  href="#pedagogy"
                  className="p-2.5 sm:p-3 bg-[#F4F1E8] border border-[#0A0B0D] shadow-[2px_2px_0px_#0A0B0D] hover:bg-[#2457FF] hover:text-white group transition-all"
                  data-cursor="DEMO"
                >
                  <span className="block font-mono text-[11px] sm:text-xs font-bold text-[#2457FF] group-hover:text-white">03</span>
                  <span className="font-mono text-[11px] sm:text-xs font-bold uppercase">DEMO</span>
                </a>
                <a
                  href="#pedagogy"
                  className="p-2.5 sm:p-3 bg-[#0A0B0D] text-[#F4F1E8] border border-[#0A0B0D] shadow-[2px_2px_0px_#2457FF] hover:bg-[#2457FF] transition-all"
                  data-cursor="BUILD"
                >
                  <span className="block font-mono text-[11px] sm:text-xs font-bold text-[#F4F1E8]">04</span>
                  <span className="font-mono text-[11px] sm:text-xs font-bold uppercase">BUILD</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
