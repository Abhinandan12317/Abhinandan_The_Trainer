import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowLeftRight, CheckCircle2, AlertTriangle, Sparkles, Layers, Cpu } from 'lucide-react';

interface ConceptComparison {
  id: string;
  topic: string;
  jargon: {
    title: string;
    text: string;
    consequence: string;
  };
  intuition: {
    title: string;
    analogy: string;
    explanation: string;
    outcome: string;
  };
}

const COMPARISONS: ConceptComparison[] = [
  {
    id: 'microservices',
    topic: 'Distributed Systems & Microservices',
    jargon: {
      title: 'OPAQUE SYSTEM JARGON',
      text: '"We leverage stateless containerized microservice orchestrators operating asynchronous event-driven pub/sub message brokers to minimize thread contention in distributed horizontal topologies."',
      consequence: 'Comprehension barrier: 84% of learners disengage and memorize without understanding.'
    },
    intuition: {
      title: 'PHYSICAL INTUITION (ANALOGY FIRST)',
      analogy: 'The Busy Restaurant Kitchen',
      explanation: '"Instead of one overloaded chef doing everything alone, we give each cook one specific job—one chops, one grills, one plates—and they pass order tickets along a conveyor belt so nobody ever waits or crashes."',
      outcome: 'Result: 100% visceral clarity. Learners immediately grasp separation of concerns and asynchronous queues.'
    }
  },
  {
    id: 'docker',
    topic: 'Docker & Containerization',
    jargon: {
      title: 'OPAQUE SYSTEM JARGON',
      text: '"An immutable userspace filesystem bundle isolated by Linux kernel control groups (cgroups) and namespaces communicating over virtual bridge network interfaces."',
      consequence: 'Learners struggle to distinguish virtual machines from container isolation.'
    },
    intuition: {
      title: 'PHYSICAL INTUITION (ANALOGY FIRST)',
      analogy: 'The Standardized Shipping Container',
      explanation: '"Before shipping containers, cranes had to individually pack barrels, crates, and loose sacks into ships. Docker is a standardized steel box: package your app with everything it needs, and any crane or port in the world can run it identically without caring what is inside."',
      outcome: 'Result: Participants successfully containerize multi-tier apps within the first 45 minutes.'
    }
  },
  {
    id: 'cicd',
    topic: 'Autonomous CI/CD & Self-Healing',
    jargon: {
      title: 'OPAQUE SYSTEM JARGON',
      text: '"Automated daemon webhooks dispatching ephemeral build runner containers executing static analysis AST linting followed by automated rollbacks on non-zero exit statuses."',
      consequence: 'Learners view CI/CD as an intimidating wall of YAML configuration.'
    },
    intuition: {
      title: 'PHYSICAL INTUITION (ANALOGY FIRST)',
      analogy: 'The Robotic Quality Assembly Line',
      explanation: '"Every time a craftsperson finishes a part, automated robotic lasers inspect it for hairline cracks. If a defect is detected, the assembly line pauses that piece, alerts the team, and never lets an imperfect part reach the customer."',
      outcome: 'Result: Students eagerly build GitHub Actions workflows with zero fear of terminal output.'
    }
  }
];

export const TechPeopleDivider: React.FC = () => {
  const [activeConceptIndex, setActiveConceptIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'both' | 'jargon' | 'intuition'>('both');

  const currentConcept = COMPARISONS[activeConceptIndex];

  return (
    <section className="w-full py-16 sm:py-24 px-5 sm:px-8 lg:px-14 bg-[#F4F1E8] border-b border-[#0A0B0D]/15 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-12">
          <span className="font-mono text-xs text-[#2457FF] uppercase tracking-widest font-bold mb-3">
            [ 07 // THE CORE CREED ]
          </span>

          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#0A0B0D] uppercase font-extrabold tracking-tight leading-snug mb-4">
            "TECHNOLOGY IS ONLY USEFUL WHEN PEOPLE CAN USE IT."
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#4A4D53] max-w-2xl leading-relaxed">
            A system that cannot be explained cannot be trusted, maintained, or scaled. True craftsmanship is the capacity to take high-dimensional software architecture and translate it into clear human intuition.
          </p>
        </div>

        {/* Interactive Cognitive Bridge Container */}
        <div className="max-w-4xl mx-auto bg-[#ECE8DC] border border-[#0A0B0D] shadow-[6px_6px_0px_#0A0B0D] p-4 sm:p-7">
          {/* Concept Switcher Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#0A0B0D]/15 gap-3 font-mono text-xs">
            <span className="text-[#0A0B0D] font-bold uppercase flex items-center gap-1.5">
              <ArrowLeftRight className="w-4 h-4 text-[#2457FF]" />
              <span>COGNITIVE TRANSLATION ENGINE</span>
            </span>

            {/* View Mode Filters */}
            <div className="flex items-center gap-1 bg-[#F4F1E8] p-1 border border-[#0A0B0D]/20 self-start sm:self-auto">
              <button
                onClick={() => setViewMode('both')}
                className={`px-2.5 py-1 text-[11px] font-bold uppercase transition-colors ${
                  viewMode === 'both' ? 'bg-[#0A0B0D] text-white' : 'text-[#686B72] hover:text-[#0A0B0D]'
                }`}
              >
                COMPARE
              </button>
              <button
                onClick={() => setViewMode('jargon')}
                className={`px-2.5 py-1 text-[11px] font-bold uppercase transition-colors ${
                  viewMode === 'jargon' ? 'bg-[#BA1A1A] text-white' : 'text-[#686B72] hover:text-[#0A0B0D]'
                }`}
              >
                JARGON
              </button>
              <button
                onClick={() => setViewMode('intuition')}
                className={`px-2.5 py-1 text-[11px] font-bold uppercase transition-colors ${
                  viewMode === 'intuition' ? 'bg-[#2457FF] text-white' : 'text-[#686B72] hover:text-[#0A0B0D]'
                }`}
              >
                INTUITION
              </button>
            </div>
          </div>

          {/* Topic Selectors */}
          <div className="flex flex-wrap gap-2 my-4">
            {COMPARISONS.map((comp, idx) => (
              <button
                key={comp.id}
                onClick={() => setActiveConceptIndex(idx)}
                className={`px-3 py-1.5 font-mono text-xs uppercase font-bold border transition-all ${
                  activeConceptIndex === idx
                    ? 'bg-[#0A0B0D] text-[#F4F1E8] border-[#0A0B0D] shadow-[2px_2px_0px_#2457FF]'
                    : 'bg-white text-[#4A4D53] border-[#0A0B0D]/20 hover:border-[#0A0B0D] hover:text-[#0A0B0D]'
                }`}
              >
                {comp.topic}
              </button>
            ))}
          </div>

          {/* Cards Grid: Perfectly responsive on Mobile, Tablet & PC with zero text leakage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {/* Left Card: Jargon */}
            {(viewMode === 'both' || viewMode === 'jargon') && (
              <div className={`p-5 bg-[#FDF8F7] border border-[#BA1A1A]/30 flex flex-col justify-between ${
                viewMode === 'jargon' ? 'md:col-span-2' : ''
              }`}>
                <div>
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-[#BA1A1A] mb-3">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>[ BEFORE: OPAQUE SYSTEM JARGON ]</span>
                  </div>
                  <p className="font-mono text-xs sm:text-sm text-[#45474A] leading-relaxed mb-4 break-words">
                    {currentConcept.jargon.text}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#BA1A1A]/20 font-mono text-[11px] text-[#BA1A1A] uppercase font-bold">
                  {currentConcept.jargon.consequence}
                </div>
              </div>
            )}

            {/* Right Card: Intuition */}
            {(viewMode === 'both' || viewMode === 'intuition') && (
              <div className={`p-5 bg-white border border-[#2457FF]/40 shadow-[3px_3px_0px_#2457FF] flex flex-col justify-between ${
                viewMode === 'intuition' ? 'md:col-span-2' : ''
              }`}>
                <div>
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-[#2457FF] mb-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>[ AFTER: PHYSICAL INTUITION ]</span>
                  </div>
                  <div className="font-mono text-xs font-bold text-[#0A0B0D] uppercase mb-2">
                    ANALOGY: {currentConcept.intuition.analogy}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#0A0B0D] font-medium leading-relaxed mb-4 break-words">
                    {currentConcept.intuition.explanation}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#2457FF]/20 font-mono text-[11px] text-[#2457FF] uppercase font-bold">
                  {currentConcept.intuition.outcome}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Pedagogical Note */}
          <div className="mt-4 pt-3 border-t border-[#0A0B0D]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[11px] text-[#686B72]">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#2457FF]" />
              <span>PEDAGOGICAL RULE: ANALOGY PRECEDES SYNTAX.</span>
            </span>
            <span className="text-[#0A0B0D] font-bold uppercase">
              ABHINANDAN TEACHING STANDARD
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
