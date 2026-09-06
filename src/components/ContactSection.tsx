import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, ArrowRight, CheckCircle2, Send, MapPin, Globe, AlertCircle, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [intent, setIntent] = useState('Technical Workshop (4-8 Hours Hands-on)');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'fallback'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const targetEmail = PERSONAL_INFO.email || 'abhinandan4dev@gmail.com';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage('PLEASE FILL ALL TRANSMISSION FIELDS TO PROCEED.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          _subject: `[Portfolio Inquiry] ${intent} — from ${name.trim()}`,
          intent: intent,
          message: message.trim(),
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || data.message)) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 10000);
      } else {
        // Fallback to mailto if API returned error
        setStatus('fallback');
      }
    } catch (err) {
      console.warn('Network / Ad-blocker error dispatching form, activating mailto fallback:', err);
      // If adblocker blocks formsubmit.co, activate fallback
      setStatus('fallback');
    }
  };

  const getDirectMailtoUrl = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${intent} — from ${name || 'Prospective Collaborator'}`);
    const body = encodeURIComponent(
      `Hello Abhinandan,\n\n` +
      `Name: ${name || 'N/A'}\n` +
      `Email: ${email || 'N/A'}\n` +
      `Engagement Topology: ${intent}\n\n` +
      `Message:\n${message || 'N/A'}\n\n` +
      `---\nDispatched from Technology Communicator Portfolio`
    );
    return `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="w-full py-24 sm:py-32 px-5 sm:px-8 lg:px-14 bg-[#F4F1E8]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Giant Typography & Direct Dispatch (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="font-mono text-xs text-[#2457FF] uppercase font-bold tracking-widest mb-3">
              [ 10 // DISPATCH &amp; COLLABORATION ]
            </span>

            <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[#0A0B0D] tracking-tighter leading-[0.95] mb-6">
              LET'S MAKE<br />
              SOMETHING<br />
              <span className="text-[#2457FF]">CLICK.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#4A4D53] max-w-lg leading-relaxed mb-8">
              Available for technical keynotes, intensive hands-on engineering workshops, CS curriculum architecture, and systems consulting globally.
            </p>

            <div className="flex flex-col gap-3 font-mono text-xs">
              <a
                href={`mailto:${targetEmail}`}
                className="font-display text-lg sm:text-xl md:text-2xl text-[#0A0B0D] font-bold hover:text-[#2457FF] transition-colors flex items-center gap-2 break-all"
                data-cursor="EMAIL"
              >
                <span>{targetEmail}</span>
                <ArrowRight className="w-5 h-5 text-[#2457FF] shrink-0" />
              </a>

              <div className="flex items-center gap-2 text-[#686B72]">
                <MapPin className="w-4 h-4 text-[#2457FF]" />
                <span>LOCATION: MYSURU, KARNATAKA, INDIA (IST / UTC +5:30)</span>
              </div>

              <div className="flex items-center gap-2 text-[#686B72]">
                <Globe className="w-4 h-4 text-[#2457FF]" />
                <span>COORDINATES: {PERSONAL_INFO.coordinates}</span>
              </div>
            </div>
          </div>

          {/* Right: Architectural Dispatch Form (6 Cols) */}
          <div className="lg:col-span-6 bg-[#FAF8F2] border border-[#0A0B0D] shadow-[8px_8px_0px_#0A0B0D] p-6 sm:p-10">
            <div className="flex items-center justify-between pb-3 border-b border-[#0A0B0D]/15 mb-6 font-mono text-xs">
              <span className="font-bold text-[#0A0B0D] uppercase">[ INQUIRY DISPATCH PROTOCOL ]</span>
              <span className="text-[#2457FF] font-bold">NODE: {targetEmail}</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label className="font-mono text-xs text-[#686B72] uppercase font-bold mb-1">
                  IDENTIFIER / FULL NAME *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Ramesh Rao / Engineering Dean"
                  required
                  className="p-3 bg-white text-[#0A0B0D] font-mono text-xs border border-[#0A0B0D] focus:border-[#2457FF] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-mono text-xs text-[#686B72] uppercase font-bold mb-1">
                  ELECTRONIC DISPATCH / SENDER EMAIL *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@institution.edu"
                  required
                  className="p-3 bg-white text-[#0A0B0D] font-mono text-xs border border-[#0A0B0D] focus:border-[#2457FF] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-mono text-xs text-[#686B72] uppercase font-bold mb-1">
                  ENGAGEMENT TOPOLOGY
                </label>
                <select
                  value={intent}
                  onChange={(e) => setIntent(e.target.value)}
                  className="p-3 bg-white text-[#0A0B0D] font-mono text-xs border border-[#0A0B0D] focus:border-[#2457FF] focus:outline-none transition-colors"
                >
                  <option>Technical Workshop (4-8 Hours Hands-on)</option>
                  <option>Keynote Address (Conference / Symposium)</option>
                  <option>Curriculum &amp; CS Education Advisory</option>
                  <option>Autonomous Systems &amp; Agent Architecture Build</option>
                  <option>Other Collaboration</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="font-mono text-xs text-[#686B72] uppercase font-bold mb-1">
                  TRANSMISSION SUMMARY / CONTEXT *
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your cohort size, schedule parameters, and systems scope..."
                  rows={4}
                  required
                  className="p-3 bg-white text-[#0A0B0D] font-mono text-xs border border-[#0A0B0D] focus:border-[#2457FF] focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 bg-[#0A0B0D] text-[#F4F1E8] hover:bg-[#2457FF] font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-[4px_4px_0px_rgba(10,11,13,0.3)] flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-50"
                data-cursor="DISPATCH"
              >
                {status === 'submitting' ? (
                  <span>DISPATCHING PACKET TO {targetEmail.toUpperCase()}...</span>
                ) : (
                  <>
                    <span>[ DISPATCH TRANSMISSION → ]</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-3.5 bg-[#EBF7EE] border border-[#008A2E] text-[#008A2E] font-mono text-xs font-bold flex flex-col gap-1 uppercase animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#008A2E]" />
                    <span>TRANSMISSION CONFIRMED. PACKET DISPATCHED TO {targetEmail.toUpperCase()}.</span>
                  </div>
                  <span className="text-[10px] text-[#008A2E]/80 font-normal pl-6">
                    Abhinandan has been notified directly at his inbox and will respond promptly.
                  </span>
                </div>
              )}

              {status === 'fallback' && (
                <div className="p-3.5 bg-[#FFF8E6] border border-[#B38600] text-[#0A0B0D] font-mono text-xs flex flex-col gap-2 animate-in fade-in">
                  <div className="flex items-center gap-2 font-bold text-[#8A6600] uppercase">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>NETWORK GATEWAY READY // COMPLETE DISPATCH VIA EMAIL CLIENT</span>
                  </div>
                  <p className="text-[11px] text-[#4A4D53] font-sans">
                    Click the direct button below to send your pre-filled inquiry directly to <strong>{targetEmail}</strong>:
                  </p>
                  <a
                    href={getDirectMailtoUrl()}
                    className="py-2.5 px-4 bg-[#0A0B0D] text-white hover:bg-[#2457FF] font-mono text-xs font-bold uppercase flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>OPEN IN MAIL CLIENT &amp; SEND →</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 bg-[#FDF2F2] border border-[#BA1A1A] text-[#BA1A1A] font-mono text-xs font-bold uppercase animate-in fade-in flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage || 'PLEASE FILL ALL TRANSMISSION FIELDS TO PROCEED.'}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
