import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download, Terminal, Command } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavigationProps {
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenResume,
  onOpenCommandPalette
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section for underline/indicator
      const sections = ['speaking', 'pedagogy', 'techmap', 'lab', 'about', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#proof', id: 'proof' },
    { label: 'SPEAKING', href: '#speaking', id: 'speaking' },
    { label: 'HOW I TEACH', href: '#pedagogy', id: 'pedagogy' },
    { label: 'TECH MAP', href: '#techmap', id: 'techmap' },
    { label: 'THE LAB', href: '#lab', id: 'lab' },
    { label: 'ABOUT', href: '#about', id: 'about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-2.5 bg-[#F4F1E8]/90 backdrop-blur-md border-b border-[#0A0B0D]/10 shadow-[0_4px_20px_rgba(10,11,13,0.03)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 flex items-center justify-between">
          {/* Identity Left */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2457FF]"
            data-cursor="TOP"
          >
            <span className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-[#0A0B0D] group-hover:text-[#2457FF] transition-colors uppercase leading-none">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#686B72] tracking-widest uppercase mt-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2457FF] animate-pulse"></span>
              TECHNOLOGY COMMUNICATOR // MYSURU
            </span>
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-mono text-xs font-semibold uppercase tracking-widest transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#0A0B0D]'
                      : 'text-[#686B72] hover:text-[#0A0B0D]'
                  }`}
                  data-cursor="GO"
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2457FF]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick System Navigator Button */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#ECE8DC] hover:bg-[#E2DDD0] border border-[#0A0B0D]/20 text-[#0A0B0D] font-mono text-[11px] transition-colors shadow-[2px_2px_0px_#0A0B0D]/20 active:translate-x-[1px] active:translate-y-[1px]"
              title="System Navigator (Cmd+K / Ctrl+K)"
              data-cursor="NAVIGATOR"
            >
              <Terminal className="w-3 h-3 text-[#2457FF]" />
              <span className="font-bold tracking-wider">SYSTEM NAVIGATOR</span>
              <span className="text-[10px] text-[#686B72] bg-white px-1 py-0.2 border border-[#0A0B0D]/20">⌘K</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#ECE8DC] hover:bg-[#0A0B0D] hover:text-[#F4F1E8] border border-[#0A0B0D] font-mono text-xs font-semibold uppercase tracking-wider transition-all"
              data-cursor="RESUME"
            >
              <span>RESUME</span>
              <Download className="w-3.5 h-3.5" />
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 bg-[#0A0B0D] text-[#F4F1E8] hover:bg-[#2457FF] border border-[#0A0B0D] font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-[2px_2px_0px_rgba(10,11,13,0.2)]"
              data-cursor="INVITE"
            >
              <span>INVITE ME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#0A0B0D] hover:bg-[#ECE8DC] border border-[#0A0B0D] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Editorial Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F4F1E8] flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-5">
            <div className="font-mono text-xs text-[#2457FF] uppercase tracking-widest border-b border-[#0A0B0D]/20 pb-2">
              [ MONOGRAPH NAVIGATION DIRECTORY ]
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0A0B0D] hover:text-[#2457FF] transition-colors flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="font-mono text-sm text-[#686B72] group-hover:text-[#2457FF]">
                  0{idx + 1}/
                </span>
              </a>
            ))}
          </div>

          <div className="pt-5 border-t border-[#0A0B0D]/20 flex flex-col gap-2.5 font-mono text-xs uppercase">
            {/* Direct Mobile Trigger for System Navigator */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full py-2.5 px-3 bg-white border border-[#0A0B0D] shadow-[2px_2px_0px_#0A0B0D] flex items-center justify-between font-mono text-xs font-bold text-[#0A0B0D]"
            >
              <span className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#2457FF]" />
                SYSTEM NAVIGATOR
              </span>
              <span className="text-[#2457FF]">[ SEARCH ACTIONS ↗ ]</span>
            </button>

            <div className="flex items-center justify-between text-[#686B72] text-[11px]">
              <span>LOCATION: MYSURU, KA</span>
              <span>IST (UTC +5:30)</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="py-2.5 bg-[#ECE8DC] text-[#0A0B0D] border border-[#0A0B0D] font-bold text-center text-xs"
              >
                RESUME ↓
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 bg-[#0A0B0D] text-[#F4F1E8] font-bold text-center text-xs"
              >
                INVITE TO SPEAK ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
