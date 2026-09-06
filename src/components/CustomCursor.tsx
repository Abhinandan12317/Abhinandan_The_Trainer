import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target or any parent has data-cursor
      const target = e.target as HTMLElement | null;
      if (target) {
        const cursorEl = target.closest('[data-cursor]');
        if (cursorEl) {
          const text = cursorEl.getAttribute('data-cursor') || '';
          setCursorText(text);
          setIsHovered(true);
          return;
        }

        const isLink = target.closest('a, button');
        if (isLink) {
          setCursorText('');
          setIsHovered(true);
          return;
        }
      }

      setCursorText('');
      setIsHovered(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    >
      <div
        className={`flex items-center justify-center transition-all duration-200 ${
          cursorText
            ? 'px-3 py-1 bg-[#2457FF] text-white rounded-none border border-black shadow-[2px_2px_0px_#0A0B0D]'
            : isHovered
            ? 'w-8 h-8 rounded-full bg-[#2457FF]/30 border border-[#2457FF]'
            : 'w-3 h-3 rounded-full bg-[#0A0B0D]'
        }`}
      >
        {cursorText && (
          <span className="font-mono text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
