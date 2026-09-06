import React from 'react';
import { X, Download, Printer, ExternalLink, ShieldCheck, Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Abhinandan_The_Trainer.pdf';
    link.download = 'Abhinandan_The_Trainer.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const printWindow = window.open('/Abhinandan_The_Trainer.pdf', '_blank');
    if (!printWindow) {
      window.print();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[140] bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[92vh] flex flex-col bg-white border border-[#0A0B0D] shadow-[12px_12px_0px_#0A0B0D] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-3 sm:px-6 py-3 bg-[#F4F1E8] border-b border-[#0A0B0D] font-mono text-xs gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[#0A0B0D] font-bold uppercase min-w-0">
            <ShieldCheck className="w-4 h-4 text-[#2457FF] shrink-0" />
            <span className="truncate text-[11px] sm:text-xs">CURRICULUM VITAE // ABHINANDAN</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="px-2.5 sm:px-3 py-1 bg-white hover:bg-[#ECE8DC] border border-[#0A0B0D] flex items-center gap-1.5 uppercase font-bold text-[11px]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PRINT</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-2.5 sm:px-3 py-1 bg-[#2457FF] hover:bg-[#1242E6] text-white border border-[#2457FF] flex items-center gap-1.5 uppercase font-bold text-[11px]"
            >
              <Download className="w-3.5 h-3.5" />
              <span><span className="hidden sm:inline">DOWNLOAD </span>RESUME ↓</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[#ECE8DC] border border-[#0A0B0D] ml-1"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Formatted Paper Resume Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-12 font-sans bg-white text-[#1c1c17] leading-relaxed select-text">
          {/* Header */}
          <div className="text-center border-b border-gray-300 pb-5 mb-5">
            <div className="font-mono text-xs tracking-widest text-[#686B72] uppercase mb-1">
              TECHNICAL TRAINER | TECHNOLOGY COMMUNICATOR | COMPUTER SCIENCE EDUCATOR
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0A0B0D]">
              ABHINANDAN
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-2 text-xs text-[#686B72] font-mono">
              <span>Mysuru, Karnataka – 570023</span>
              <span>•</span>
              <span>+91-9482053968</span>
              <span>•</span>
              <a href="mailto:abhinandan4dev@gmail.com" className="text-[#2457FF] hover:underline">
                abhinandan4dev@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 mt-1 text-xs text-[#2457FF] font-mono">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/abhinandan-rk
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/Abhinandan12317
              </a>
              <a href={PERSONAL_INFO.portfolioUrl} target="_blank" rel="noreferrer" className="hover:underline">
                abhinandan-r-k.vercel.app
              </a>
            </div>
          </div>

          {/* Profile */}
          <div className="mb-6">
            <h2 className="font-display text-base font-bold uppercase tracking-wider text-[#0A0B0D] border-b border-gray-300 pb-1 mb-2">
              Profile
            </h2>
            <p className="text-sm text-gray-800 leading-relaxed">
              Computer Science Engineering student drawn to the space between <strong>technology and people</strong>: understanding how systems work, breaking complex ideas into intuitive concepts, and making them engaging enough to learn. Through IEEE leadership, technical workshops, and public speaking, I have worked with audiences ranging from student groups to <strong>200+ participants</strong>. My approach is simple: explain why a technology exists, build an intuitive analogy, demonstrate it practically, and let learners apply it themselves. My technical foundation spans programming, web development, DevOps, CI/CD, and Generative AI.
            </p>
          </div>

          {/* Technical Training Experience */}
          <div className="mb-6">
            <h2 className="font-display text-base font-bold uppercase tracking-wider text-[#0A0B0D] border-b border-gray-300 pb-1 mb-2">
              Technical Training Experience
            </h2>
            <div className="mb-3">
              <div className="flex items-center justify-between text-sm font-bold text-gray-900">
                <span>Google Student Ambassador (GSA)</span>
                <span className="font-mono text-xs">2025</span>
              </div>
              <div className="italic text-xs text-gray-700 mb-1">Technical Workshop Facilitator</div>
              <ul className="list-disc list-outside ml-5 text-sm space-y-1 text-gray-800">
                <li>
                  Conducted a <strong>4-hour hands-on workshop for 40+ students</strong> on AI-assisted web development and deployment using Gemini CLI.
                </li>
                <li>
                  Guided participants through Terminal, Gemini CLI, Git, Vite, GitHub, and Vercel, taking them from local development to building and deploying their own projects.
                </li>
              </ul>
            </div>
          </div>

          {/* Leadership & Speaking Experience */}
          <div className="mb-6">
            <h2 className="font-display text-base font-bold uppercase tracking-wider text-[#0A0B0D] border-b border-gray-300 pb-1 mb-2">
              Leadership &amp; Speaking Experience
            </h2>
            
            <div className="mb-3">
              <div className="flex items-center justify-between text-sm font-bold text-gray-900">
                <span>IEEE Student Branch, ATME College of Engineering</span>
                <span className="font-mono text-xs">Mar 2024 – Dec 2025</span>
              </div>
              <div className="italic text-xs text-gray-700 mb-1">Secretary</div>
              <p className="text-sm text-gray-800">
                Coordinated student teams, planning, timelines, communication, and execution of technical activities; regularly served as a speaker and host across IEEE events.
              </p>
            </div>

            <div className="mb-3">
              <div className="flex items-center justify-between text-sm font-bold text-gray-900">
                <span>TechAvishkar 2.0 – 24-Hour Hackathon</span>
                <span className="italic text-xs text-gray-700">Core Organising Committee</span>
              </div>
              <p className="text-sm text-gray-800">
                Helped plan and execute a 24-hour hackathon with <strong>≈200 participants and 20+ jurors</strong>; coordinated jury timelines and maintained participant engagement through late-night stages as host and audience leader.
              </p>
            </div>

            <div className="mb-3">
              <div className="flex items-center justify-between text-sm font-bold text-gray-900">
                <span>IEEE Ignite – IEEE Logo Launch</span>
                <span className="italic text-xs text-gray-700">Technical Speaker | ≈200 Audience</span>
              </div>
              <p className="text-sm text-gray-800">
                Delivered a 15-minute formal presentation on IEEE's relevance to engineering students and professionals, using student-relatable memes and humour to sustain attention and connect professional development with student experience.
              </p>
            </div>

            <div className="mb-3">
              <div className="flex items-center justify-between text-sm font-bold text-gray-900">
                <span>IEEE Mini Project Symposium &amp; AMC College Ideathon</span>
                <span className="italic text-xs text-gray-700">Volunteer &amp; External Speaker</span>
              </div>
              <p className="text-sm text-gray-800">
                Coordinated volunteers, registration, certificates, participant flow, and jury support at the symposium; spoke at its valedictory and delivered a 5-minute external presentation on Vayulekha.
              </p>
            </div>
          </div>

          {/* Technical Training Domains */}
          <div className="mb-6">
            <h2 className="font-display text-base font-bold uppercase tracking-wider text-[#0A0B0D] border-b border-gray-300 pb-1 mb-2">
              Technical Training Domains
            </h2>
            <div className="space-y-1.5 text-xs text-gray-800">
              <div>
                <strong className="text-gray-950 font-mono">Programming:</strong> Python, C, Programming Fundamentals, Basic OOP | <strong className="text-gray-950 font-mono">Web:</strong> HTML, CSS, JavaScript, Vite, Node.js, Express.js
              </div>
              <div>
                <strong className="text-gray-950 font-mono">DevOps &amp; Systems:</strong> Linux, Terminal, Git, GitHub, Docker, CI/CD, GitHub Actions, DevOps Fundamentals
              </div>
              <div>
                <strong className="text-gray-950 font-mono">AI &amp; Automation:</strong> Generative AI, Gemini, Gemini CLI, LLM APIs, AI-Assisted Development, AI Application Architecture, n8n
              </div>
              <div>
                <strong className="text-gray-950 font-mono">Cloud &amp; Databases:</strong> AWS Fundamentals, EC2, Vercel, MongoDB, MySQL
              </div>
            </div>
          </div>

          {/* Technical Projects */}
          <div className="mb-6">
            <h2 className="font-display text-base font-bold uppercase tracking-wider text-[#0A0B0D] border-b border-gray-300 pb-1 mb-2">
              Technical Projects
            </h2>

            <div className="mb-3">
              <div className="flex items-center justify-between text-sm font-bold text-gray-900">
                <span>MEAN Stack DevOps Deployment</span>
                <span className="font-mono text-xs">2025</span>
              </div>
              <p className="text-sm text-gray-800">
                Containerized MongoDB, Express, Angular, and Node.js using Docker Compose; built GitHub Actions CI/CD for DockerHub publishing and AWS EC2 deployment via SSH, with Nginx as reverse proxy.
              </p>
            </div>

            <div className="mb-3">
              <div className="flex items-center justify-between text-sm font-bold text-gray-900">
                <span>Fixora – Autonomous CI/CD Self-Healing Engine</span>
                <span className="font-mono text-xs">2025</span>
              </div>
              <p className="text-sm text-gray-800">
                Built an AI-powered repository repair workflow that analyzes errors, applies patches, creates isolated Git branches, and pushes fixes automatically.
              </p>
            </div>

            <div className="mb-3">
              <div className="flex items-center justify-between text-sm font-bold text-gray-900">
                <span>VidhiPath.ai – GenAI Assistant</span>
                <span className="font-mono text-xs">2025</span>
              </div>
              <p className="text-sm text-gray-800">
                Developed a MySQL-backed GenAI assistant with document processing and semantic search during the IEEE Computer Society Internship &amp; Mentorship Program.
              </p>
            </div>
          </div>

          {/* Education & Certification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="font-display text-base font-bold uppercase tracking-wider text-[#0A0B0D] border-b border-gray-300 pb-1 mb-2">
                Education
              </h2>
              <div className="text-sm font-bold text-gray-900">Bachelor of Engineering – Computer Science &amp; Engineering</div>
              <div className="text-xs text-gray-700">ATME College of Engineering, Mysuru</div>
              <div className="text-xs text-gray-700 font-mono mt-0.5">
                Expected 2027 | CGPA: <strong>8.48 / 10</strong>
              </div>
            </div>

            <div>
              <h2 className="font-display text-base font-bold uppercase tracking-wider text-[#0A0B0D] border-b border-gray-300 pb-1 mb-2">
                Certification
              </h2>
              <div className="text-sm font-bold text-gray-900">Google Student Ambassador</div>
              <div className="text-xs text-gray-700 font-mono mt-0.5">Year: 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
