import React, { useState, useRef, useEffect } from 'react';
import { TERMINAL_PRESETS, PERSONAL_INFO, PROJECTS, SPEAKING_EVENTS, TECHNOLOGIES } from '../data/portfolioData';
import { Terminal, Send, Trash2, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react';

interface TerminalMessage {
  id: string;
  sender: 'user' | 'system';
  text: string;
  timestamp: string;
}

export const AskPortfolio: React.FC = () => {
  const [messages, setMessages] = useState<TerminalMessage[]>([
    {
      id: 'init-1',
      sender: 'system',
      text: `[SYSTEM DAEMON V2.5 ONLINE]
Query terminal initialized for Abhinandan's verified engineering portfolio.
Ask any technical question or select an automated query preset below.
Data is grounded strictly in verified resume evidence.`,
      timestamp: '00:00:01'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [messages]);

  const dispatchQuery = (cmdText: string, explicitResponse?: string) => {
    const timestamp = new Date().toLocaleTimeString();

    // Add user message
    const userMsg: TerminalMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: cmdText,
      timestamp
    };

    let answer = explicitResponse;

    if (!answer) {
      // Deterministic search engine grounded in resume data
      const q = cmdText.toLowerCase();

      if (q.includes('teach') || q.includes('how') || q.includes('pedagogy') || q.includes('method')) {
        answer = `[PEDAGOGICAL FRAMEWORK RESPONSE]:
Abhinandan teaches using the 4-Stage Recursive Compiler:
1. WHY (Excavation): Simulate the production breakdown first so the need for architecture is felt.
2. SIMPLIFY (Physical Analogy): Translate abstract memory/threads into tangible mechanical machinery.
3. DEMONSTRATE (Live Terminal): Unguarded live terminal execution on screen. No sanitized slides.
4. BUILD (Autonomous Execution): Every participant constructs, tests, and deploys independently.
Creed: 'Technology is only useful when people can use it.'`;
      } else if (q.includes('gemini') || q.includes('workshop') || q.includes('gsa')) {
        answer = `[GOOGLE STUDENT AMBASSADOR WORKSHOP (2025)]:
- Role: Technical Workshop Facilitator & Speaker
- Location: ATME College of Engineering, Mysuru
- Duration: 4.0 Continuous Hands-on Hours
- Cohort: 40+ Engineering Undergraduates with individual laptops
- Curricula: Terminal fundamentals, Gemini CLI, Git version control, Vite, GitHub, and Vercel hosting.
- Result: 100% of participants built & deployed working projects.`;
      } else if (q.includes('project') || q.includes('built') || q.includes('fixora') || q.includes('devops') || q.includes('vidhipath')) {
        answer = `[VERIFIED TECHNICAL ARTIFACTS]:
1. FIXORA (2025): Autonomous AI-powered CI/CD self-healing engine that intercepts failed GitHub Actions, parses stack traces, applies LLM code patches, and submits verified PRs.
2. MEAN STACK DEVOPS (2025): Full CI/CD pipeline containerizing Angular, Express, MongoDB with Docker Compose, GitHub Actions, DockerHub, and AWS EC2 via SSH.
3. VIDHIPATH.AI (2025): MySQL-backed legal GenAI assistant with sliding-window chunking and semantic search, built during IEEE Computer Society Internship.`;
      } else if (q.includes('tech') || q.includes('skill') || q.includes('stack') || q.includes('language') || q.includes('docker') || q.includes('python')) {
        answer = `[VERIFIED TECHNICAL DOMAINS]:
- AI & Automation: Gemini, Gemini CLI, LLM APIs, AI-Assisted Development, n8n
- DevOps & Systems: Linux, Terminal, Git, GitHub, Docker, CI/CD, GitHub Actions
- Web & Runtimes: HTML, CSS, JavaScript, Vite, Node.js, Express.js
- Programming: Python, C, OOP Fundamentals
- Cloud & DB: AWS EC2, Vercel, MongoDB, MySQL`;
      } else if (q.includes('speak') || q.includes('stage') || q.includes('event') || q.includes('talk')) {
        answer = `[SPEAKING & LEADERSHIP RECORD]:
1. Google Student Ambassador: 4-Hour Hands-on Workshop Lead (40+ attendees)
2. IEEE Ignite: 15-Minute Technical Speaker on IEEE Relevance to Engineering (≈200 audience)
3. TechAvishkar 2.0: 24-Hour Hackathon Core Organising Committee & Host (≈200 participants, 20+ jurors)
4. IEEE Student Branch ATME: Secretary (Mar 2024 – Dec 2025)
5. IEEE Mini Project Symposium: Valedictory Speaker & Vayulekha Presentation`;
      } else if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('invite') || q.includes('phone')) {
        answer = `[CONTACT COORDINATES]:
- Email: ${PERSONAL_INFO.email}
- Location: ${PERSONAL_INFO.location}
- LinkedIn: ${PERSONAL_INFO.linkedin}
- GitHub: ${PERSONAL_INFO.github}
- Availability: Keynotes, Engineering Workshops & CS Education Advisory.`;
      } else if (q.includes('education') || q.includes('college') || q.includes('cgpa')) {
        answer = `[ACADEMIC BACKGROUND]:
- Degree: ${PERSONAL_INFO.education.degree}
- Institution: ${PERSONAL_INFO.education.institution}
- CGPA: ${PERSONAL_INFO.education.cgpa}
- Expected Graduation: ${PERSONAL_INFO.education.expectedYear}`;
      } else {
        answer = `[TELEMETRY LOOKUP FOR: "${cmdText}"]:
Abhinandan is a Technical Trainer, Technology Communicator, and CS Engineering student from Mysuru.
He specializes in demystifying complex technologies (Docker, Gemini CLI, CI/CD, and Full-Stack) through hands-on workshops and real systems architecture.
Try asking about: 'teach', 'gemini workshop', 'projects', 'tech stack', or 'speaking'.`;
      }
    }

    const systemMsg: TerminalMessage = {
      id: `system-${Date.now() + 1}`,
      sender: 'system',
      text: answer,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages((prev) => [...prev, userMsg, systemMsg]);
    setInputText('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    dispatchQuery(inputText.trim());
  };

  const clearTerminal = () => {
    setMessages([
      {
        id: `init-${Date.now()}`,
        sender: 'system',
        text: `Terminal buffer cleared. System ready for dispatch.`,
        timestamp: new Date().toLocaleTimeString()
      }
    ]);
  };

  return (
    <section id="ask" className="w-full py-20 sm:py-28 px-5 sm:px-8 lg:px-14 bg-[#F4F1E8] border-b border-[#0A0B0D]/15">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#2457FF] uppercase font-bold tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>[ 09 // EMULATED PORTFOLIO SHELL ]</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-[#0A0B0D] uppercase font-extrabold tracking-tight">
              ASK MY PORTFOLIO
            </h2>
          </div>
          <p className="font-mono text-xs text-[#686B72] uppercase mt-3 md:mt-0">
            DETERMINISTIC INTERACTIVE SHELL // ZERO HALLUCINATIONS
          </p>
        </div>

        {/* The Terminal Console */}
        <div className="bg-[#090A0C] text-[#F4F1E8] border border-[#0A0B0D] shadow-[6px_6px_0px_#0A0B0D] sm:shadow-[10px_10px_0px_#0A0B0D] p-4 sm:p-7 flex flex-col justify-between min-h-[440px] max-w-full overflow-hidden">
          {/* Shell Top Window Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-[#232733] font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
              <span className="text-[#A0A2A8] ml-2 uppercase truncate max-w-[200px] sm:max-w-none">abhinandan@mysuru-node:~$</span>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-[#2457FF] hidden sm:inline font-semibold">BASH / TTY1</span>
              <button
                onClick={clearTerminal}
                className="hover:text-red-400 text-[#A0A2A8] transition-colors p-1"
                title="Clear screen"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Output Log Stream */}
          <div
            ref={scrollRef}
            className="my-4 font-mono text-xs sm:text-[13px] leading-relaxed overflow-y-auto max-h-80 space-y-4 pr-2"
          >
            {messages.map((m) => (
              <div key={m.id} className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-[10px] text-[#686B72]">
                  <span>{m.sender === 'user' ? 'guest@terminal' : 'portfolio_daemon'}</span>
                  <span>{m.timestamp}</span>
                </div>
                {m.sender === 'user' ? (
                  <div className="text-[#2457FF] font-bold flex items-center gap-2 break-all">
                    <span>&gt;</span>
                    <span>{m.text}</span>
                  </div>
                ) : (
                  <div className="text-[#F4F1E8] pl-3 border-l-2 border-[#2457FF] whitespace-pre-wrap leading-relaxed break-words">
                    {m.text}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Suggested Preset Query Chips */}
          <div className="pt-3 border-t border-[#232733]">
            <div className="flex items-center justify-between mb-2 font-mono text-[10px] text-[#A0A2A8] uppercase">
              <span>AUTOMATED QUERY PRESETS:</span>
              <span className="hidden sm:inline">CLICK TO DISPATCH</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {TERMINAL_PRESETS.map((preset) => (
                <button
                  key={preset.cmd}
                  onClick={() => dispatchQuery(preset.display, preset.response)}
                  className="px-2.5 py-1 bg-[#14161C] hover:bg-[#2457FF] text-[#F4F1E8] border border-[#232733] font-mono text-[11px] sm:text-xs transition-colors"
                  data-cursor="RUN"
                >
                  $ {preset.display}
                </button>
              ))}
            </div>

            {/* Input Line Form */}
            <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#2457FF] font-bold shrink-0">
                <span className="hidden sm:inline">guest@abhinandan:</span>~$
              </span>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about Abhinandan's teaching method, projects, or speaking..."
                className="flex-1 min-w-0 bg-[#14161C] border border-[#232733] px-3 py-2 text-xs font-mono text-[#F4F1E8] focus:border-[#2457FF] focus:outline-none placeholder-[#686B72]"
              />
              <button
                type="submit"
                className="px-3.5 sm:px-4 py-2 bg-[#2457FF] hover:bg-[#1242E6] text-white font-mono text-xs font-bold uppercase transition-colors shrink-0 flex items-center gap-1.5"
                data-cursor="SEND"
              >
                <span>SEND</span>
                <CornerDownLeft className="w-3 h-3" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
