# Abhinandan — Technology Communicator & Technical Trainer

> *"I make complex technology click."*

Interactive portfolio, systems architecture laboratory, and documentary proof-of-work monograph for **Abhinandan** — Technical Trainer, Technology Communicator, and Computer Science Educator based in Mysuru, Karnataka, India.

---

## 🧭 Executive Overview

This web platform is an art-directed, high-performance portfolio engineered with an editorial, neo-brutalist aesthetic. It showcases technical workshops, speaking engagements, engineering leadership, and autonomous systems projects with verified real-world evidence.

### 🌟 Key Highlights & Feature Matrix

- **01 // The Human Manifesto**: Philosophy of pedagogical compilation — translating distributed computing, kernel tooling, and generative AI into intuitive mental models.
- **02 // How I Teach (4-Stage Pedagogical Compiler)**: Deconstructing the *Intuitive Analogy*, *Why It Exists*, *Live Practical Demonstration*, and *Autonomous Hands-on Application* learning cycle.
- **03 // Interactive Technology Map**: Interactive skill matrix spanning AI & Automation, DevOps & Systems, Full-Stack Web, Programming Languages, and Cloud Infrastructure.
- **04 // The Stage (Auditorium & Seminars)**: Event dossier detailing flagship keynotes, 4-hour hands-on workshops, and hackathon moderation with authentic photographs.
- **05 // Proof of Work (Documentary Archive)**: 13 authentic documentary plates with geotags, event provenance, interactive filter tabs, Story Mode, and high-resolution Lightbox inspection.
- **06 // The Lab**: Deep-dive system architectures for **Fixora** (AI CI/CD Self-Healing Engine), **MEAN Stack DevOps Automation**, and **VidhiPath.ai**.
- **07 // Curriculum Vitae & Resume**: Built-in resume viewer with instant one-click download for `Abhinandan_The_Trainer.pdf`.
- **08 // Command Palette (`⌘K` / `Ctrl+K`)**: Global keyboard navigation system for jumping across sections, launching modules, and searching topics.
- **09 // Inquiry Dispatch Protocol**: Functional contact gateway transmitting workshop and speaking invitations directly to `abhinandan4dev@gmail.com`.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS + Custom Neo-Brutalist Design Tokens
- **Icons**: Lucide React
- **Animations & Interactivity**: Custom Smooth Transitions, Lightbox Modal, Interactive Carousel, Global Command Palette

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm, pnpm, or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Abhinandan12317/Technology_Communicator.git
   cd Technology_Communicator
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment** *(Optional for AI integrations)*:
   ```bash
   cp .env.example .env.local
   ```
   Add your API keys if utilizing server-side AI integrations.

4. **Launch the development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` or the URL printed in your terminal.

---

## 📦 Scripts

- `npm run dev` — Start the local Vite development server
- `npm run build` — Compile TypeScript and generate the optimized production bundle in `dist/`
- `npm run preview` — Locally preview the production build
- `npm run lint` — Run TypeScript type checking (`tsc --noEmit`)

---

## 📂 Project Architecture

```
Technology_Communicator/
├── public/
│   ├── Abhinandan_The_Trainer.pdf  # Official downloadable Curriculum Vitae
│   └── Speaker_POW/                # Authentic documentary photographs
│       ├── GSA/                    # Google Student Ambassador workshop evidence
│       ├── IEEE_Ignite/            # IEEE Ignite keynote address evidence
│       ├── IEEE_SB_Secretary/      # IEEE Executive leadership evidence
│       └── TechAvishkar2.0_and_Symp/ # Hackathon & Symposium evidence
├── src/
│   ├── components/
│   │   ├── Navigation.tsx          # Top bar navigation & quick actions
│   │   ├── Hero.tsx                # Hero section & monograph header
│   │   ├── HumanManifesto.tsx      # Teaching philosophy & human bridge
│   │   ├── TeachingMethod.tsx      # 4-stage pedagogical compiler
│   │   ├── TechnologyMap.tsx       # Interactive technology ecosystem
│   │   ├── SpeakingStage.tsx       # Stage events & auditorium dossier
│   │   ├── ProofOfWork.tsx         # Filterable photographic wall & Story Mode
│   │   ├── TheLab.tsx              # Deep architectural project breakdowns
│   │   ├── TechPeopleDivider.tsx   # Interactive cognitive balance divider
│   │   ├── AboutSection.tsx        # Background, education, & resume trigger
│   │   ├── AskPortfolio.tsx        # Terminal Q&A assistant
│   │   ├── ContactSection.tsx      # Inquiry dispatch protocol with auto-reply & JSON ledger
│   │   ├── ResumeModal.tsx         # Full-screen CV viewer & PDF exporter
│   │   └── CommandPalette.tsx      # Global ⌘K command palette
│   ├── utils/
│   │   ├── emailService.ts         # Dual EmailJS & FormSubmit transmission engine
│   │   └── transmissionStorage.ts  # Client-side JSON audit storage & export utility
│   ├── data/
│   │   └── portfolioData.ts        # Single source of truth for events, projects, & photos
│   ├── types.ts                    # TypeScript interfaces & domain types
│   ├── vite-env.d.ts               # Vite environment type declarations
│   ├── App.tsx                     # Main layout & section orchestration
│   └── main.tsx                    # React application entry point
├── index.html                      # HTML shell & metadata
└── package.json                    # Project dependencies & scripts
```

---

## ⚡ EmailJS Auto-Reply Setup (Optional)

The inquiry dispatch protocol supports zero-config transmission out of the box via FormSubmit. To enable **instant client-side auto-reply emails** directly to the submitter's inbox using your Gmail account:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Add an **Email Service** connected to your Gmail (`abhinandan4dev@gmail.com`).
3. Create an **Email Template** (with variables `{{from_name}}`, `{{from_email}}`, `{{intent}}`, `{{message}}`, `{{transmission_id}}`).
4. Add the keys to your `.env` file (or deployment environment):
   ```env
   VITE_EMAILJS_SERVICE_ID="service_xxxxxxx"
   VITE_EMAILJS_TEMPLATE_ID="template_xxxxxxx"
   VITE_EMAILJS_PUBLIC_KEY="xxxxxxxxxxxxxxxxx"
   # Optional dedicated auto-reply template
   VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID="template_autoreply_xxxx"
   ```

---

## 📬 Contact & Inquiries

- **Lead**: Abhinandan
- **Role**: Technical Trainer & Technology Communicator
- **Email**: [abhinandan4dev@gmail.com](mailto:abhinandan4dev@gmail.com)
- **LinkedIn**: [linkedin.com/in/abhinandan-rk](https://linkedin.com/in/abhinandan-rk)
- **GitHub**: [github.com/Abhinandan12317](https://github.com/Abhinandan12317)
- **Portfolio**: [abhinandan-r-k.vercel.app](https://abhinandan-r-k.vercel.app)
