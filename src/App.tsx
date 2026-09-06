import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { CommandPalette } from './components/CommandPalette';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HumanManifesto } from './components/HumanManifesto';
import { TeachingMethod } from './components/TeachingMethod';
import { TechnologyMap } from './components/TechnologyMap';
import { SpeakingStage } from './components/SpeakingStage';
import { ProofOfWork } from './components/ProofOfWork';
import { TheLab } from './components/TheLab';
import { TechPeopleDivider } from './components/TechPeopleDivider';
import { AboutSection } from './components/AboutSection';
import { AskPortfolio } from './components/AskPortfolio';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedPhotoForProof, setSelectedPhotoForProof] = useState<{ url: string; caption: string } | null>(null);

  const handleViewPhotoFromStage = (photoUrl: string, caption: string) => {
    setSelectedPhotoForProof({ url: photoUrl, caption });
    const proofEl = document.getElementById('proof');
    proofEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenAskFromCommand = () => {
    const askEl = document.getElementById('ask');
    askEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F1E8] text-[#0A0B0D] font-sans selection:bg-[#2457FF] selection:text-white relative">
      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor />

      {/* Global Command Palette (⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenAsk={handleOpenAskFromCommand}
      />

      {/* Persistent Minimalist Navigation */}
      <Navigation
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Experience Stream */}
      <main className="w-full overflow-hidden">
        {/* 01. Hero Opening Experience: I MAKE COMPLEX TECHNOLOGY CLICK */}
        <Hero
          onExploreWork={() => {
            const el = document.getElementById('proof');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onInvite={() => {
            const el = document.getElementById('contact');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 02. The Human Side: I DON'T JUST EXPLAIN TECHNOLOGY */}
        <HumanManifesto />

        {/* 03. How I Teach: The 4-Stage Pedagogical Compiler */}
        <TeachingMethod />

        {/* 04. Technology Map: Connected directly to verified proof */}
        <TechnologyMap />

        {/* 05. The Stage: Auditorium, Keynotes & Workshops */}
        <SpeakingStage onViewPhoto={handleViewPhotoFromStage} />

        {/* 06. Proof of Work: Art-directed documentary photo wall & Story Mode */}
        <ProofOfWork
          externalSelectedPhoto={selectedPhotoForProof}
          onClearExternalPhoto={() => setSelectedPhotoForProof(null)}
        />

        {/* 07. The Lab: Fixora, MEAN Stack DevOps & VidhiPath.ai Architectures */}
        <TheLab />

        {/* 08. Technology ↔ People: Draggable cognitive bridge divider */}
        <TechPeopleDivider />

        {/* 09. About Abhinandan: Computer Science, Trainer, Builder */}
        <AboutSection onOpenResume={() => setResumeModalOpen(true)} />

        {/* 10. Ask My Portfolio: Deterministic CLI terminal shell */}
        <AskPortfolio />

        {/* 11. Contact & Dispatch: Let's make something click */}
        <ContactSection />
      </main>

      {/* 12. Monograph Footer */}
      <Footer
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Official Curriculum Vitae / Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
