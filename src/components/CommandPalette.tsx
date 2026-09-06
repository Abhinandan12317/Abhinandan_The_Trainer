import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, X, Terminal, FileText, Cpu, Presentation, BookOpen, User, Mail, Command } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenAsk: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenAsk
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const actions = [
    {
      id: 'work',
      title: 'Go to Work & Proof Archive',
      section: '#proof',
      category: 'Navigation',
      icon: Presentation,
      shortcut: 'W',
      action: () => {
        const el = document.querySelector('#proof');
        el?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'speaking',
      title: 'Go to Speaking & Stage',
      section: '#speaking',
      category: 'Navigation',
      icon: Presentation,
      shortcut: 'S',
      action: () => {
        const el = document.querySelector('#speaking');
        el?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'teach',
      title: 'Go to How I Teach (4-Stage Compiler)',
      section: '#pedagogy',
      category: 'Navigation',
      icon: BookOpen,
      shortcut: 'T',
      action: () => {
        const el = document.querySelector('#pedagogy');
        el?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'techmap',
      title: 'Go to Verified Technology Map',
      section: '#techmap',
      category: 'Navigation',
      icon: Cpu,
      shortcut: 'M',
      action: () => {
        const el = document.querySelector('#techmap');
        el?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'lab',
      title: 'Go to The Lab (Systems & CI/CD Pipelines)',
      section: '#lab',
      category: 'Navigation',
      icon: Cpu,
      shortcut: 'L',
      action: () => {
        const el = document.querySelector('#lab');
        el?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'about',
      title: 'Go to About Abhinandan',
      section: '#about',
      category: 'Navigation',
      icon: User,
      shortcut: 'A',
      action: () => {
        const el = document.querySelector('#about');
        el?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'ask',
      title: 'Ask My Portfolio (CLI Shell)',
      section: '#ask',
      category: 'Interactive',
      icon: Terminal,
      shortcut: 'Q',
      action: () => {
        onOpenAsk();
        onClose();
      }
    },
    {
      id: 'resume',
      title: 'Download Resume / View PDF',
      section: 'Resume',
      category: 'Document',
      icon: FileText,
      shortcut: 'R',
      action: () => {
        onOpenResume();
        onClose();
      }
    },
    {
      id: 'invite',
      title: 'Invite Abhinandan to Speak / Teach',
      section: '#contact',
      category: 'Dispatch',
      icon: Mail,
      shortcut: 'I',
      action: () => {
        const el = document.querySelector('#contact');
        el?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    }
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          inputRef.current?.focus();
        }
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4 sm:px-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#F4F1E8] border border-[#0A0B0D] shadow-[8px_8px_0px_#0A0B0D] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* System Navigator Top Banner */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#0A0B0D]/20 bg-[#ECE8DC] font-mono text-[11px] text-[#0A0B0D]">
          <div className="flex items-center gap-2 font-bold uppercase">
            <Command className="w-3.5 h-3.5 text-[#2457FF]" />
            <span>SYSTEM NAVIGATOR // ACTION DISPATCHER</span>
          </div>
          <span className="text-[#686B72] text-[10px] hidden sm:inline">[ SHORTCUT: ⌘K / CTRL+K ]</span>
        </div>

        {/* Search header */}
        <div className="flex items-center px-4 py-3 border-b border-[#0A0B0D]/20 bg-white">
          <Search className="w-5 h-5 text-[#686B72] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type command or jump to section (e.g. 'Speaking', 'Docker', 'Resume')..."
            className="w-full font-mono text-sm bg-transparent border-none outline-none text-[#0A0B0D] placeholder-[#686B72]"
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#ECE8DC] text-[#686B72] hover:text-[#0A0B0D] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-[#686B72] font-mono text-xs uppercase">
              No matching commands. Try 'Work', 'Teach', 'Lab', or 'Resume'.
            </div>
          ) : (
            <div className="space-y-1">
              {filtered.map((action, i) => {
                const Icon = action.icon;
                const isSelected = i === selectedIndex;
                return (
                  <button
                    key={action.id}
                    onClick={action.action}
                    onMouseEnter={() => setSelectedIndex(i)}
                    className={`w-full text-left px-3 py-2.5 flex items-center justify-between border transition-all ${
                      isSelected
                        ? 'bg-[#0A0B0D] text-[#F4F1E8] border-[#0A0B0D]'
                        : 'bg-transparent text-[#0A0B0D] border-transparent hover:border-[#0A0B0D]/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-[#2457FF]' : 'text-[#686B72]'}`} />
                      <div className="flex flex-col">
                        <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                          {action.title}
                        </span>
                        <span className={`font-mono text-[10px] ${isSelected ? 'text-[#A0A2A8]' : 'text-[#686B72]'}`}>
                          {action.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-[10px] px-1.5 py-0.5 border ${
                        isSelected
                          ? 'border-[#333742] text-[#A0A2A8] bg-[#14161C]'
                          : 'border-[#0A0B0D]/20 text-[#686B72] bg-white'
                      }`}>
                        {action.shortcut}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#2457FF]' : 'text-[#686B72]'}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-[#0A0B0D]/20 bg-[#ECE8DC] flex items-center justify-between font-mono text-[10px] text-[#686B72] uppercase">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-[#2457FF] font-semibold">SYSTEM NAVIGATOR // COMMAND INDEX</span>
        </div>
      </div>
    </div>
  );
};
