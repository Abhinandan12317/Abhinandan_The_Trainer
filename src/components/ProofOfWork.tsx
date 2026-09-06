import React, { useState, useEffect } from 'react';
import { REAL_PHOTOS } from '../data/portfolioData';
import { DocumentaryPhoto } from '../types';
import { Camera, X, ChevronLeft, ChevronRight, Play, Maximize2, ShieldCheck, MapPin, Users, Calendar, Filter } from 'lucide-react';

interface ProofOfWorkProps {
  externalSelectedPhoto?: { url: string; caption: string } | null;
  onClearExternalPhoto?: () => void;
}

type EventFilterKey = 'all' | 'gsa' | 'ieee-ignite' | 'ieee-secretary' | 'techavishkar-symp';

export const ProofOfWork: React.FC<ProofOfWorkProps> = ({
  externalSelectedPhoto,
  onClearExternalPhoto
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<EventFilterKey>('all');
  const [storyModeActive, setStoryModeActive] = useState<boolean>(false);
  const [storyStep, setStoryStep] = useState<number>(0);

  // If external selected photo passed from SpeakingStage or other navigation
  useEffect(() => {
    if (externalSelectedPhoto) {
      const idx = REAL_PHOTOS.findIndex((p) => p.imageUrl === externalSelectedPhoto.url);
      if (idx !== -1) {
        setActivePhotoIndex(idx);
      } else {
        setActivePhotoIndex(0);
      }
    }
  }, [externalSelectedPhoto]);

  // Story mode sequence of milestone photos across verified events
  const storyChapters = [
    {
      title: "01 // THE CALL TO ORDER",
      subtitle: "GSA Mysuru Keynote Address",
      photo: REAL_PHOTOS[0],
      narrative: "Setting the foundation at ATME College of Engineering: shifting focus from rote syntax memorization to distributed systems architecture, local terminal tooling, and purposeful software engineering."
    },
    {
      title: "02 // OVER-THE-SHOULDER AUDITORIUM POV",
      subtitle: "40+ Active Laptops Synchronized",
      photo: REAL_PHOTOS[1],
      narrative: "Every student initialized their own environment. No passive listeners: laptops open, bash terminal shells active, and Gemini API keys configured locally across 40+ synchronized machines."
    },
    {
      title: "03 // ZERO-FAIL LIVE TERMINAL PROJECTION",
      subtitle: "Unguarded Command-Line Execution",
      photo: REAL_PHOTOS[2],
      narrative: "Deconstructing Gemini CLI and package management on the auditorium projection screen. Live execution and troubleshooting demonstrated in front of the workshop cohort."
    },
    {
      title: "04 // THE GRADUATING COHORT",
      subtitle: "40+ Engineers Upskilled & Deployed",
      photo: REAL_PHOTOS[3],
      narrative: "Within 240 minutes of rigorous practical training, every participant scaffolded, built, tested, and shipped autonomous web applications to live production URLs."
    },
    {
      title: "05 // IEEE IGNITE AUDITORIUM ADDRESS",
      subtitle: "≈200 Students & Faculty Engaged",
      photo: REAL_PHOTOS[4],
      narrative: "Delivered a high-energy formal presentation to 200+ attendees, utilizing relatable student memes to unpack technical societies and connect professional engineering standards to student life."
    },
    {
      title: "06 // ONSTAGE PEDAGOGY & EXPOSURE",
      subtitle: "Audience Connection & Keynote Oration",
      photo: REAL_PHOTOS[8],
      narrative: "Commanding the auditorium stage with wireless microphone, walking through the pillars of platform mastery, hands-on self-learning, and active student branch participation."
    },
    {
      title: "07 // IEEE EXECUTIVE LEADERSHIP",
      subtitle: "Student Branch Stewardship",
      photo: REAL_PHOTOS[10],
      narrative: "Guiding the IEEE ATMECE Student Branch leadership council and volunteer cohort across flagship hackathons, technical competitions, and regional section delegations."
    },
    {
      title: "08 // TECHAVISHKAR 24-HOUR HACKATHON",
      subtitle: "200+ Builders & Jury Moderation",
      photo: REAL_PHOTOS[11],
      narrative: "Orchestrating 24 uninterrupted hours of engineering velocity: coordinating 20+ industry jurors, conducting midnight energizers, and moderating stage announcements."
    },
    {
      title: "09 // IEEE MINI PROJECT SYMPOSIUM 2025",
      subtitle: "Regional Valedictory & Dais Address",
      photo: REAL_PHOTOS[12],
      narrative: "Addressing the IEEE Mini Project Symposium 2025 organized with CEDA and IEEE Bangalore/Mysore Sections with academic dignitaries and project teams."
    }
  ];

  // Filter categories
  const categories: { key: EventFilterKey; label: string; count: number }[] = [
    { key: 'all', label: 'ALL EVIDENCE', count: REAL_PHOTOS.length },
    { key: 'gsa', label: 'GSA WORKSHOP', count: REAL_PHOTOS.filter(p => p.eventId === 'gsa').length },
    { key: 'ieee-ignite', label: 'IEEE IGNITE', count: REAL_PHOTOS.filter(p => p.eventId === 'ieee-ignite').length },
    { key: 'ieee-secretary', label: 'IEEE LEADERSHIP', count: REAL_PHOTOS.filter(p => p.eventId === 'ieee-secretary').length },
    { key: 'techavishkar-symp', label: 'TECHAVISHKAR & SYMPOSIUM', count: REAL_PHOTOS.filter(p => p.eventId === 'techavishkar' || p.eventId === 'ieee-symposium').length }
  ];

  const filteredPhotos = REAL_PHOTOS.filter(photo => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'gsa') return photo.eventId === 'gsa';
    if (selectedCategory === 'ieee-ignite') return photo.eventId === 'ieee-ignite';
    if (selectedCategory === 'ieee-secretary') return photo.eventId === 'ieee-secretary';
    if (selectedCategory === 'techavishkar-symp') return photo.eventId === 'techavishkar' || photo.eventId === 'ieee-symposium';
    return true;
  });

  // Keyboard navigation for photo lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null && !storyModeActive) return;

      if (e.key === 'Escape') {
        setActivePhotoIndex(null);
        setStoryModeActive(false);
        if (onClearExternalPhoto) onClearExternalPhoto();
      } else if (e.key === 'ArrowRight') {
        if (storyModeActive) {
          setStoryStep((prev) => (prev + 1) % storyChapters.length);
        } else if (activePhotoIndex !== null) {
          setActivePhotoIndex((prev) => ((prev ?? 0) + 1) % REAL_PHOTOS.length);
        }
      } else if (e.key === 'ArrowLeft') {
        if (storyModeActive) {
          setStoryStep((prev) => (prev - 1 + storyChapters.length) % storyChapters.length);
        } else if (activePhotoIndex !== null) {
          setActivePhotoIndex((prev) => ((prev ?? 0) - 1 + REAL_PHOTOS.length) % REAL_PHOTOS.length);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, storyModeActive, storyChapters.length, onClearExternalPhoto]);

  return (
    <section id="proof" className="w-full py-20 sm:py-28 px-5 sm:px-8 lg:px-14 bg-[#ECE8DC] border-b border-[#0A0B0D]/15">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#2457FF] uppercase font-bold tracking-widest">
              <Camera className="w-3.5 h-3.5" />
              <span>[ 05 // DOCUMENTARY ARCHIVE ]</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-[#0A0B0D] uppercase font-extrabold tracking-tight">
              PROOF OF WORK
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 md:mt-0">
            <span className="font-mono text-xs text-[#686B72] uppercase">
              {REAL_PHOTOS.length} AUTHENTIC DOCUMENTARY PLATES // VERIFIED EVENTS
            </span>
            <button
              onClick={() => {
                setStoryStep(0);
                setStoryModeActive(true);
              }}
              className="px-4 py-2 bg-[#0A0B0D] text-[#F4F1E8] hover:bg-[#2457FF] font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-[3px_3px_0px_#2457FF] flex items-center gap-2 shrink-0"
              data-cursor="STORY"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>PLAY THE STORY →</span>
            </button>
          </div>
        </div>

        {/* Event Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#686B72] uppercase font-bold mr-1 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#2457FF]" />
            <span>EVENT DOSSIER:</span>
          </div>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#0A0B0D] text-[#F4F1E8] border-[#0A0B0D] shadow-[2px_2px_0px_#2457FF]'
                    : 'bg-[#FAF8F2] text-[#0A0B0D] border-[#0A0B0D]/20 hover:border-[#0A0B0D]'
                }`}
                data-cursor="FILTER"
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${isSelected ? 'bg-[#2457FF] text-white' : 'bg-[#ECE8DC] text-[#686B72]'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Photographic Wall */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start">
          {filteredPhotos.map((photo) => {
            const originalIndex = REAL_PHOTOS.findIndex((p) => p.id === photo.id);
            // Layout spans based on image aspect ratio and editorial importance
            let colSpan = "md:col-span-6";
            if (photo.id === 'pow-gsa-04' || photo.id === 'pow-secretary-02') {
              colSpan = "md:col-span-7"; // Group anchor shots
            } else if (photo.id === 'pow-ignite-02' || photo.id === 'pow-ignite-06') {
              colSpan = "md:col-span-7"; // Wide auditorium shot
            } else if (photo.id === 'pow-ignite-04' || photo.id === 'pow-ignite-05') {
              colSpan = "md:col-span-5"; // Vertical stage shots
            } else if (photo.id === 'pow-gsa-01' || photo.id === 'pow-secretary-01') {
              colSpan = "md:col-span-5"; // Portrait shots
            } else {
              colSpan = "md:col-span-6";
            }

            return (
              <div
                key={photo.id}
                className={`${colSpan} bg-[#FAF8F2] border border-[#0A0B0D] shadow-[6px_6px_0px_#0A0B0D] p-3 group cursor-pointer transition-transform duration-200 hover:-translate-y-0.5`}
                onClick={() => setActivePhotoIndex(originalIndex !== -1 ? originalIndex : 0)}
                data-cursor={`VIEW ${photo.fig}`}
              >
                <div className="relative overflow-hidden bg-[#0A0B0D] border border-[#0A0B0D]">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-auto object-cover filter contrast-110 group-hover:scale-102 transition-all duration-700 aspect-[4/3]"
                  />
                  <div className="absolute top-2 left-2 bg-[#F4F1E8]/90 border border-[#0A0B0D] px-2 py-0.5 font-mono text-[10px] text-[#0A0B0D] uppercase font-bold backdrop-blur-xs">
                    {photo.fig} // {photo.category || photo.event}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-[#0A0B0D]/85 text-[#F4F1E8] border border-[#232630] px-2 py-0.5 font-mono text-[10px] uppercase font-bold backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    EXPAND ↗
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex flex-wrap items-center justify-between gap-1 font-mono text-xs">
                    <span className="font-bold text-[#0A0B0D] uppercase tracking-tight">{photo.title}</span>
                    <span className="text-[#2457FF] font-semibold text-[11px]">[ {photo.date} ]</span>
                  </div>
                  <p className="font-sans text-xs text-[#4A4D53] mt-1.5 leading-relaxed">
                    {photo.caption}
                  </p>
                  <div className="flex items-center gap-3 mt-2.5 pt-2 border-t border-[#0A0B0D]/10 font-mono text-[10px] text-[#686B72]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#2457FF]" />
                      {photo.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-[#2457FF]" />
                      {photo.attendees}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Immersive PhotoViewer Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-[110] bg-[#0A0B0D]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => {
            setActivePhotoIndex(null);
            if (onClearExternalPhoto) onClearExternalPhoto();
          }}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between border-b border-[#232630] pb-4 text-[#F4F1E8] font-mono text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-[#2457FF] text-white font-bold">
                {REAL_PHOTOS[activePhotoIndex].fig}
              </span>
              <span className="font-bold uppercase tracking-wider">
                {REAL_PHOTOS[activePhotoIndex].title}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[#A0A2A8] hidden sm:inline">
                PLATE {activePhotoIndex + 1} OF {REAL_PHOTOS.length} // USE ARROW KEYS ← → // ESC TO CLOSE
              </span>
              <button
                onClick={() => {
                  setActivePhotoIndex(null);
                  if (onClearExternalPhoto) onClearExternalPhoto();
                }}
                className="p-1 hover:bg-[#232630] text-[#F4F1E8] transition-colors border border-[#232630]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Central Image Viewport with Nav Arrows */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhotoIndex((activePhotoIndex - 1 + REAL_PHOTOS.length) % REAL_PHOTOS.length)}
              className="absolute left-2 sm:left-6 z-10 p-3 bg-[#0A0B0D]/80 hover:bg-[#2457FF] text-white border border-[#232630] transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={REAL_PHOTOS[activePhotoIndex].imageUrl}
              alt={REAL_PHOTOS[activePhotoIndex].title}
              className="max-h-[72vh] max-w-full object-contain border border-[#232630] shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            />

            <button
              onClick={() => setActivePhotoIndex((activePhotoIndex + 1) % REAL_PHOTOS.length)}
              className="absolute right-2 sm:right-6 z-10 p-3 bg-[#0A0B0D]/80 hover:bg-[#2457FF] text-white border border-[#232630] transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Captions & Provenance Data */}
          <div
            className="border-t border-[#232630] pt-4 grid grid-cols-1 md:grid-cols-12 gap-4 text-[#F4F1E8] font-mono text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:col-span-8 flex flex-col">
              <span className="text-[#2457FF] font-bold uppercase mb-1">
                [ PROVENANCE &amp; CAPTION ]
              </span>
              <p className="text-[#D0CECB] font-sans text-sm leading-relaxed">
                {REAL_PHOTOS[activePhotoIndex].caption}
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col justify-end text-[11px] text-[#A0A2A8] space-y-1">
              <div>EVENT: <strong className="text-[#F4F1E8]">{REAL_PHOTOS[activePhotoIndex].event}</strong></div>
              <div>LOCATION: <strong className="text-[#F4F1E8]">{REAL_PHOTOS[activePhotoIndex].location}</strong></div>
              <div>DATE: <strong className="text-[#F4F1E8]">{REAL_PHOTOS[activePhotoIndex].date}</strong></div>
              <div>ATTENDEES: <strong className="text-[#2457FF]">{REAL_PHOTOS[activePhotoIndex].attendees}</strong></div>
            </div>
          </div>
        </div>
      )}

      {/* Cinematic Story Mode Modal */}
      {storyModeActive && (
        <div
          className="fixed inset-0 z-[120] bg-[#0A0B0D] flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-300"
          onClick={() => setStoryModeActive(false)}
        >
          {/* Story Progress Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#232630] text-white font-mono text-xs" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-[#2457FF] text-white font-bold">
                STORY MODE // CHAPTER 0{storyStep + 1} OF 0{storyChapters.length}
              </span>
              <span className="text-[#A0A2A8] uppercase tracking-wider">
                {storyChapters[storyStep].title}
              </span>
            </div>

            <button
              onClick={() => setStoryModeActive(false)}
              className="p-1 hover:bg-[#232630] text-white border border-[#232630]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chapter Content */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-6" onClick={(e) => e.stopPropagation()}>
            <div className="lg:col-span-7 flex items-center justify-center">
              <img
                src={storyChapters[storyStep].photo.imageUrl}
                alt={storyChapters[storyStep].title}
                className="max-h-[65vh] w-auto object-contain border border-[#232630] shadow-[0_0_40px_rgba(0,0,0,0.9)]"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center text-white">
              <span className="font-mono text-xs text-[#2457FF] font-bold uppercase tracking-widest mb-2">
                {storyChapters[storyStep].subtitle}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#F4F1E8] mb-4">
                {storyChapters[storyStep].title}
              </h3>
              <p className="font-sans text-base text-[#C7C6C9] leading-relaxed mb-8">
                {storyChapters[storyStep].narrative}
              </p>

              {/* Navigation controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setStoryStep((prev) => (prev - 1 + storyChapters.length) % storyChapters.length)}
                  disabled={storyStep === 0}
                  className="px-4 py-2 bg-[#1A1C22] disabled:opacity-30 text-white border border-[#232630] font-mono text-xs uppercase"
                >
                  ← PREVIOUS CHAPTER
                </button>
                <button
                  onClick={() => {
                    if (storyStep < storyChapters.length - 1) {
                      setStoryStep(storyStep + 1);
                    } else {
                      setStoryModeActive(false);
                    }
                  }}
                  className="px-5 py-2 bg-[#2457FF] hover:bg-[#1242E6] text-white font-mono text-xs font-bold uppercase tracking-wider"
                >
                  {storyStep < storyChapters.length - 1 ? 'NEXT CHAPTER →' : 'FINISH STORY ✕'}
                </button>
              </div>
            </div>
          </div>

          {/* Step dots */}
          <div className="flex items-center justify-center gap-2 pt-2" onClick={(e) => e.stopPropagation()}>
            {storyChapters.map((_, i) => (
              <button
                key={i}
                onClick={() => setStoryStep(i)}
                className={`h-1.5 transition-all ${
                  i === storyStep ? 'w-8 bg-[#2457FF]' : 'w-2 bg-[#232630]'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
