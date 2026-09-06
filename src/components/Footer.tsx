import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, ArrowUpRight, Download, Terminal, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenCommandPalette }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#ECE8DC] border-t border-[#0A0B0D]/20">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-[#0A0B0D]/15">
          {/* Identity */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <span className="font-display text-2xl font-extrabold text-[#0A0B0D] uppercase tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <p className="font-sans text-sm text-[#4A4D53] max-w-sm leading-relaxed">
              Engineering clarity for distributed computing, systems architecture, and pedagogical rigor. Based in Mysuru, working worldwide.
            </p>
            <div className="font-mono text-xs text-[#2457FF] font-bold mt-2">
              CREED: "{PERSONAL_INFO.creed}"
            </div>
          </div>

          {/* Contact Coordinates */}
          <div className="md:col-span-4 flex flex-col gap-2 font-mono text-xs">
            <span className="text-[#686B72] uppercase font-bold tracking-widest mb-1">
              [ DIRECT DISPATCH CHANNELS ]
            </span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#0A0B0D] font-bold hover:text-[#2457FF] transition-colors break-all"
            >
              {PERSONAL_INFO.email}
            </a>
            <span className="text-[#686B72]">{PERSONAL_INFO.location}</span>
            <span className="text-[#686B72]">PGP FINGERPRINT: 4A89 9C02 EF11 B081</span>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-3 flex flex-col gap-2 md:items-end font-mono text-xs">
            <span className="text-[#686B72] uppercase font-bold tracking-widest mb-1">
              [ MONOGRAPH DIRECTORY ]
            </span>
            <a href="#proof" className="text-[#0A0B0D] hover:text-[#2457FF] uppercase transition-colors">
              ARCHIVAL PROOF →
            </a>
            <a href="#speaking" className="text-[#0A0B0D] hover:text-[#2457FF] uppercase transition-colors">
              KEYNOTES &amp; SEMINARS →
            </a>
            <a href="#pedagogy" className="text-[#0A0B0D] hover:text-[#2457FF] uppercase transition-colors">
              HOW I TEACH →
            </a>
            <a href="#lab" className="text-[#0A0B0D] hover:text-[#2457FF] uppercase transition-colors">
              SYSTEMS LAB →
            </a>
            <button
              onClick={onOpenResume}
              className="text-[#2457FF] font-bold hover:underline uppercase text-left md:text-right mt-1"
            >
              DOWNLOAD RESUME ↓
            </button>
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#686B72]">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2025 ABHINANDAN. ARCHIVAL RELEASE V4.2</span>
            <span>•</span>
            <span>{PERSONAL_INFO.coordinates}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCommandPalette}
              className="hover:text-[#0A0B0D] uppercase flex items-center gap-1.5 transition-colors font-bold"
            >
              <Terminal className="w-3.5 h-3.5 text-[#2457FF]" />
              <span>SYSTEM NAVIGATOR [⌘K]</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#F4F1E8] hover:bg-[#0A0B0D] hover:text-white border border-[#0A0B0D] transition-colors"
              title="Return to top"
              aria-label="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
