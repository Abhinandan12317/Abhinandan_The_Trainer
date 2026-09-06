import { SpeakerEvent, ProjectData, TechnologyNode, DocumentaryPhoto } from '../types';

export const PERSONAL_INFO = {
  name: "ABHINANDAN",
  title: "Technology Communicator & Technical Trainer",
  subtitles: ["Technical Trainer", "Technology Communicator", "Computer Science Educator", "Developer & Builder"],
  location: "Mysuru, Karnataka, India – 570023",
  phone: "+91-9482053968",
  email: "abhinandan4dev@gmail.com",
  linkedin: "https://linkedin.com/in/abhinandan-rk",
  github: "https://github.com/Abhinandan12317",
  portfolioUrl: "https://abhinandan-r-k.vercel.app",
  coordinates: "LAT 12.2958° N, LON 76.6394° E",
  statement: "I MAKE COMPLEX TECHNOLOGY CLICK.",
  humanStatement: "I DON'T JUST EXPLAIN TECHNOLOGY. I MAKE IT UNDERSTANDABLE.",
  creed: "TECHNOLOGY IS ONLY USEFUL WHEN PEOPLE CAN USE IT.",
  profileSummary: "Computer Science Engineering student drawn to the space between technology and people: understanding how systems work, breaking complex ideas into intuitive concepts, and making them engaging enough to learn. Through IEEE leadership, technical workshops, and public speaking, I have worked with audiences ranging from student groups to 200+ participants. My approach is simple: explain why a technology exists, build an intuitive analogy, demonstrate it practically, and let learners apply it themselves. My technical foundation spans programming, web development, DevOps, CI/CD, and Generative AI.",
  education: {
    degree: "Bachelor of Engineering — Computer Science & Engineering",
    institution: "ATME College of Engineering, Mysuru",
    expectedYear: "Expected 2027",
    cgpa: "8.48 / 10"
  },
  certification: {
    title: "Google Student Ambassador (GSA)",
    year: "2025"
  }
};

export const REAL_PHOTOS: DocumentaryPhoto[] = [
  // --- GSA WORKSHOP (4 Photos) ---
  {
    id: "pow-gsa-01",
    title: "Keynote Delivery at Podium",
    fig: "FIG. 01",
    caption: "Abhinandan delivering keynote on Gemini CLI architecture, terminal workflows, and AI systems at ATME College of Engineering auditorium podium.",
    event: "Google Student Ambassador Keynote",
    eventId: "gsa",
    category: "GSA Workshop",
    location: "Mysuru, Karnataka",
    date: "Oct 2025",
    attendees: "40+ Hands-on Engineers",
    imageUrl: "/Speaker_POW/GSA/GSA (1).jpeg",
    aspectRatio: "3/4",
    aspectClass: "aspect-[3/4]"
  },
  {
    id: "pow-gsa-02",
    title: "Auditorium POV: Terminal to Cohort",
    fig: "FIG. 02",
    caption: "Over-the-shoulder POV from podium displaying '> GEMINI' terminal interface facing 40+ attentive engineering students with active laptops.",
    event: "GSA Hands-on Workshop",
    eventId: "gsa",
    category: "GSA Workshop",
    location: "Auditorium Lab, Mysuru",
    date: "Oct 2025",
    attendees: "40+ Active Laptops",
    imageUrl: "/Speaker_POW/GSA/GSA(3).jpeg",
    aspectRatio: "3/4",
    aspectClass: "aspect-[3/4]"
  },
  {
    id: "pow-gsa-03",
    title: "Live Terminal Command Projection",
    fig: "FIG. 03",
    caption: "Live coding projection deconstructing npm install @google/gemini-cli and PowerShell command execution to a synchronized classroom.",
    event: "Live Engineering Demonstration",
    eventId: "gsa",
    category: "GSA Workshop",
    location: "Auditorium Lab, Mysuru",
    date: "Oct 2025",
    attendees: "40+ Participants",
    imageUrl: "/Speaker_POW/GSA/GSA(4).jpeg",
    aspectRatio: "3/4",
    aspectClass: "aspect-[3/4]"
  },
  {
    id: "pow-gsa-04",
    title: "The Graduating Cohort",
    fig: "FIG. 04",
    caption: "Graduating cohort of 25+ student engineers smiling together after building and deploying AI-assisted web applications in 4 hours.",
    event: "GSA Workshop Graduation",
    eventId: "gsa",
    category: "GSA Workshop",
    location: "ATME College of Engineering, Mysuru",
    date: "Oct 2025",
    attendees: "40+ Certified Learners",
    imageUrl: "/Speaker_POW/GSA/GSA (2).jpeg",
    aspectRatio: "4/3",
    aspectClass: "aspect-[4/3]"
  },

  // --- IEEE IGNITE (5 Stage & Auditorium Photos) ---
  {
    id: "pow-ignite-02",
    title: "Auditorium Address & Student Memes",
    fig: "FIG. 05",
    caption: "Addressing ≈200 students and faculty from the stage, utilizing relatable student memes to unpack technical societies with humor and clarity.",
    event: "IEEE Ignite — Keynote Address",
    eventId: "ieee-ignite",
    category: "IEEE Ignite",
    location: "Main Auditorium, ATMECE Mysuru",
    date: "2024",
    attendees: "≈200 Attendees",
    imageUrl: "/Speaker_POW/IEEE_Ignite/IEEE_Ignite (2).jpeg",
    aspectRatio: "16/9",
    aspectClass: "aspect-[16/9]"
  },
  {
    id: "pow-ignite-03",
    title: "Engineering Realities & Student Struggles",
    fig: "FIG. 06",
    caption: "Engaging auditorium with meme-driven insights into project reviews, 5 exams in 2 hours, and deadline submissions to bridge student life with IEEE.",
    event: "IEEE Ignite — Stage Presentation",
    eventId: "ieee-ignite",
    category: "IEEE Ignite",
    location: "Main Auditorium, ATMECE Mysuru",
    date: "2024",
    attendees: "≈200 Attendees",
    imageUrl: "/Speaker_POW/IEEE_Ignite/IEEE_Ignite (3).jpeg",
    aspectRatio: "16/9",
    aspectClass: "aspect-[16/9]"
  },
  {
    id: "pow-ignite-04",
    title: "Podium Remarks: Exposure Expands Potential",
    fig: "FIG. 07",
    caption: "Delivering podium remarks on Emerson's quote 'Exposure expands potential', inspiring students to pursue hands-on technical opportunities.",
    event: "IEEE Ignite — Technical Address",
    eventId: "ieee-ignite",
    category: "IEEE Ignite",
    location: "Main Auditorium, ATMECE Mysuru",
    date: "2024",
    attendees: "Auditorium Cohort",
    imageUrl: "/Speaker_POW/IEEE_Ignite/IEEE_Ignite (4).jpeg",
    aspectRatio: "9/16",
    aspectClass: "aspect-[9/16]"
  },
  {
    id: "pow-ignite-05",
    title: "Dynamic Stage Movement & Audience Connection",
    fig: "FIG. 08",
    caption: "Commanding the auditorium stage with wireless mic, maintaining intense engagement across student batches and faculty counselors.",
    event: "IEEE Ignite — Stage Walk",
    eventId: "ieee-ignite",
    category: "IEEE Ignite",
    location: "Main Auditorium, ATMECE Mysuru",
    date: "2024",
    attendees: "≈200 Attendees",
    imageUrl: "/Speaker_POW/IEEE_Ignite/IEEE_Ignite (5).jpeg",
    aspectRatio: "9/16",
    aspectClass: "aspect-[9/16]"
  },
  {
    id: "pow-ignite-06",
    title: "Deconstructing Platform, Persona & Power Base",
    fig: "FIG. 09",
    caption: "Presenting the conceptual model connecting Platform, Self-Learning, and Personal Growth as the foundation for undergraduate engineering mastery.",
    event: "IEEE Ignite — Conceptual Breakdown",
    eventId: "ieee-ignite",
    category: "IEEE Ignite",
    location: "Main Auditorium, ATMECE Mysuru",
    date: "2024",
    attendees: "Auditorium Audience",
    imageUrl: "/Speaker_POW/IEEE_Ignite/IEEE_Ignite (6).jpeg",
    aspectRatio: "16/9",
    aspectClass: "aspect-[16/9]"
  },

  // --- IEEE SB LEADERSHIP (2 Photos) ---
  {
    id: "pow-secretary-01",
    title: "Official IEEE Executive Secretary Hoodie",
    fig: "FIG. 10",
    caption: "Abhinandan standing inside the auditorium wearing the official IEEE executive leadership hoodie: 'ABHINANDAN / SECRETARY / IEEE'.",
    event: "IEEE Student Branch Executive Leadership",
    eventId: "ieee-secretary",
    category: "IEEE Leadership",
    location: "ATME College of Engineering, Mysuru",
    date: "2024 – 2025",
    attendees: "Branch Leadership",
    imageUrl: "/Speaker_POW/IEEE_SB_Secretary/IEEE_SB_Secretary (2).jpeg",
    aspectRatio: "3/4",
    aspectClass: "aspect-[3/4]"
  },
  {
    id: "pow-secretary-02",
    title: "IEEE ATMECE Student Branch Leadership Team",
    fig: "FIG. 11",
    caption: "The full IEEE ATMECE Student Branch leadership council and volunteer cohort assembled on stage holding the official banner.",
    event: "IEEE Student Branch Executive Leadership",
    eventId: "ieee-secretary",
    category: "IEEE Leadership",
    location: "Main Auditorium, ATMECE Mysuru",
    date: "2024 – 2025",
    attendees: "Full Branch Delegation",
    imageUrl: "/Speaker_POW/IEEE_SB_Secretary/IEEE_SB_Secretary (1).jpeg",
    aspectRatio: "4/3",
    aspectClass: "aspect-[4/3]"
  },

  // --- TECHAVISHKAR 2.0 & SYMPOSIUM (2 Photos) ---
  {
    id: "pow-techavishkar-01",
    title: "TechAvishkar 2.0 Hackathon Hosting & Moderation",
    fig: "FIG. 12",
    caption: "Abhinandan at the podium hosting and moderating the 24-Hour TechAvishkar 2.0 Hackathon, managing jury timelines and energizing 200+ builders.",
    event: "TechAvishkar 2.0 — 24-Hour Hackathon",
    eventId: "techavishkar",
    category: "TechAvishkar & Symposium",
    location: "ATME Campus, Mysuru",
    date: "2024",
    attendees: "≈200 Participants & 20+ Jurors",
    imageUrl: "/Speaker_POW/TechAvishkar2.0_and_Symp/TechAvishkar.jpeg",
    aspectRatio: "4/3",
    aspectClass: "aspect-[4/3]"
  },
  {
    id: "pow-symposium-01",
    title: "IEEE Mini Project Symposium 2025 Address",
    fig: "FIG. 13",
    caption: "Delivering formal podium address at IEEE Mini Project Symposium 2025, organized by CEDA, IEEE Bangalore Section, and IEEE Mysore Subsection with dignitaries on the dais.",
    event: "IEEE Mini Project Symposium 2025",
    eventId: "ieee-symposium",
    category: "TechAvishkar & Symposium",
    location: "ATME College of Engineering, Mysuru",
    date: "2025",
    attendees: "Intercollegiate Competitors & Academic Jury",
    imageUrl: "/Speaker_POW/TechAvishkar2.0_and_Symp/IEE_MiniProject_Symposium.jpeg",
    aspectRatio: "4/3",
    aspectClass: "aspect-[4/3]"
  }
];

export const SPEAKING_EVENTS: SpeakerEvent[] = [
  {
    id: "gsa-2025",
    title: "Google Student Ambassador Hands-on Workshop",
    subtitle: "AI-Assisted Web Development & Deployment Using Gemini CLI",
    organization: "Google Student Ambassador (GSA)",
    role: "Technical Workshop Facilitator & Speaker",
    date: "2025",
    location: "ATME College of Engineering, Mysuru",
    audience: "40+ Engineering Students",
    duration: "4 Hours (Continuous Hands-on)",
    description: "Conducted a 4-hour immersive hands-on workshop guiding 40+ engineering participants from zero to live production deployments. Led students through Terminal fundamentals, Gemini CLI tools, Git, Vite, GitHub version control, and cloud hosting on Vercel.",
    keyTakeaways: [
      "Guided 40+ students through raw Terminal environments & environment variables",
      "Demystified Gemini CLI & prompt orchestration for real-world web apps",
      "Achieved 100% participation with working Vite projects deployed to Vercel",
      "Live troubleshooting of git merge conflicts, path resolution, and API keys"
    ],
    photoUrl: "/Speaker_POW/GSA/GSA(3).jpeg",
    photoCaption: "Auditorium POV: laptop terminal displaying ASCII GEMINI facing 40+ attentive students.",
    figNumber: "FIG. 02",
    tags: ["Gemini CLI", "Terminal", "Git", "Vite", "GitHub", "Vercel"]
  },
  {
    id: "ieee-ignite",
    title: "IEEE Ignite — IEEE Logo Launch",
    subtitle: "Connecting Professional Engineering to Student Experience",
    organization: "IEEE Student Branch, ATME College of Engineering",
    role: "Technical Speaker",
    date: "2024",
    location: "Main Auditorium, ATME College of Engineering, Mysuru",
    audience: "≈200 Audience (Students & Faculty)",
    duration: "15-Minute Formal Presentation",
    description: "Delivered a high-energy 15-minute formal presentation on IEEE's relevance to engineering students and technical professionals, using student-relatable memes, humor, and clear metaphors to sustain intense attention and connect career development to student life.",
    keyTakeaways: [
      "Addressed ≈200 engineering students, faculty, and branch counselors",
      "Pioneered meme-based visual analogies to explain technical societies",
      "Connected standards development (IEEE 802.11) to day-to-day engineering",
      "Received highest audience engagement ratings during the symposium"
    ],
    photoUrl: "/Speaker_POW/IEEE_Ignite/IEEE_Ignite (2).jpeg",
    photoCaption: "Abhinandan addressing ≈200 students & faculty from the main stage with meme-driven analogies.",
    figNumber: "FIG. 05",
    tags: ["Public Speaking", "Technical Storytelling", "Pedagogy", "IEEE"]
  },
  {
    id: "techavishkar",
    title: "TechAvishkar 2.0 — 24-Hour Hackathon",
    subtitle: "Coordination, Jury Management & Late-Night Audience Engagement",
    organization: "ATME College of Engineering",
    role: "Core Organising Committee & Host",
    date: "2024",
    location: "ATME Campus, Mysuru",
    audience: "≈200 Participants & 20+ Jurors",
    duration: "24-Hour Continuous Hackathon",
    description: "Helped plan and execute a premier 24-hour hackathon with ≈200 participants and 20+ industry jurors. Coordinated jury timelines, handled team disputes, and maintained participant energy and focus through late-night stages as official host and audience leader.",
    keyTakeaways: [
      "Managed logistics and engagement for 200 builders over 24 uninterrupted hours",
      "Coordinated evaluation rubric and scheduling for 20+ technical jury members",
      "Conducted midnight energizer sessions and real-time technical unblocking",
      "Delivered live announcements and hosted the final prize ceremonies"
    ],
    photoUrl: "/Speaker_POW/TechAvishkar2.0_and_Symp/TechAvishkar.jpeg",
    photoCaption: "Abhinandan hosting and moderating the 24-Hour TechAvishkar 2.0 Hackathon at the podium.",
    figNumber: "FIG. 12",
    tags: ["Hackathon Leadership", "Jury Coordination", "Audience Engagement"]
  },
  {
    id: "ieee-secretary",
    title: "IEEE Student Branch Executive Leadership",
    subtitle: "Branch Coordination, Technical Activities & Master of Ceremonies",
    organization: "IEEE Student Branch, ATME College of Engineering",
    role: "Secretary",
    date: "Mar 2024 – Dec 2025",
    location: "Mysuru, Karnataka",
    audience: "Entire Engineering Student Body & Regional Sections",
    duration: "Multi-Year Executive Leadership",
    description: "Coordinated student teams, event planning, timelines, official communications, and execution of high-impact technical activities. Regularly served as the primary speaker and master of ceremonies across flagship IEEE events and technical workshops.",
    keyTakeaways: [
      "Directed technical calendar and operations across multiple IEEE chapters",
      "Led weekly committee briefings and synchronized student volunteers",
      "Hosted technical guest lectures, code jams, and engineering competitions",
      "Strengthened branch membership retention through intuitive technical programming"
    ],
    photoUrl: "/Speaker_POW/IEEE_SB_Secretary/IEEE_SB_Secretary (2).jpeg",
    photoCaption: "Abhinandan wearing official IEEE Executive Secretary hoodie in the auditorium.",
    figNumber: "FIG. 10",
    tags: ["Leadership", "Operations", "Technical Planning", "Public Address"]
  },
  {
    id: "ieee-symposium",
    title: "IEEE Mini Project Symposium & AMC College Ideathon",
    subtitle: "Operations Leadership & External Presentation on Vayulekha",
    organization: "IEEE Computer Society & AMC College",
    role: "Volunteer & External Speaker",
    date: "2024",
    location: "Mysuru & AMC College Bangalore",
    audience: "Intercollegiate Competitors & Academic Jury",
    duration: "Multi-Day Symposium + 5-Min External Presentation",
    description: "Coordinated volunteers, team registration, certificates, participant flow, and jury support at the symposium. Spoke at its valedictory and delivered an invited 5-minute external presentation on 'Vayulekha' to an intercollegiate audience.",
    keyTakeaways: [
      "Facilitated seamless judging workflows for dozens of undergraduate mini-projects",
      "Selected as Valedictory representative speaker for the organizing delegation",
      "Delivered concise 5-minute lightning pitch on Vayulekha system architecture",
      "Recognized for outstanding organizational stewardship and clear technical communication"
    ],
    photoUrl: "/Speaker_POW/TechAvishkar2.0_and_Symp/IEE_MiniProject_Symposium.jpeg",
    photoCaption: "Podium address at IEEE Mini Project Symposium with dignitaries on the dais.",
    figNumber: "FIG. 13",
    tags: ["Project Evaluation", "Vayulekha", "Lightning Talks", "Symposium"]
  }
];

export const PROJECTS: ProjectData[] = [
  {
    id: "fixora",
    title: "Fixora — Autonomous CI/CD Self-Healing Engine",
    codeName: "FIXORA // ENGINE_01",
    year: "2025",
    role: "Lead Systems Architect & Developer",
    category: "AI & Automated DevOps",
    summary: "An AI-powered repository repair workflow that watches build failures, analyzes stack trace errors, applies code patches, generates isolated Git branches, and pushes fixes automatically.",
    problem: "CI/CD pipelines fail frequently on syntax slip-ups, misconfigured Dockerfiles, missing dependency imports, and broken test assertions. Developers spend valuable hours manually debugging runtime stack traces that follow predictable error topologies.",
    approach: "Fixora establishes an autonomous closed-loop feedback mechanism: it hooks into build runners, intercepts the failure payload, translates the stack trace into a concrete code diff via LLM reasoning, verifies the diff inside an isolated sandbox, and submits an isolated pull request.",
    pipelineSteps: [
      {
        number: "01",
        label: "ERROR INTERCEPT",
        sublabel: "Webhook Listener",
        detail: "Captures failed CI workflow dispatch from GitHub Actions with exit code != 0 and extracts stdout/stderr logs."
      },
      {
        number: "02",
        label: "LOG & AST PARSE",
        sublabel: "Error Context Extractor",
        detail: "Parses traceback down to file coordinates, offending line numbers, and token AST context."
      },
      {
        number: "03",
        label: "LLM DIFF PATCH",
        sublabel: "Generative Code Patching",
        detail: "Sends minimal code snippet + error diagnosis to Gemini API to produce a unified Git diff with zero extra hallucinations."
      },
      {
        number: "04",
        label: "DOCKER SANDBOX",
        sublabel: "Isolated Runtime Container",
        detail: "Applies generated patch inside an ephemeral Docker container to prevent contamination of host machines."
      },
      {
        number: "05",
        label: "AUTOMATED TEST",
        sublabel: "PyTest / Suite Verification",
        detail: "Runs test suite against the sandbox. If tests fail, it re-prompts with new error logs; if passed, marks verified."
      },
      {
        number: "06",
        label: "GIT AUTO PUSH",
        sublabel: "Isolated Branch & PR",
        detail: "Creates branch `fixora/patch-<hash>`, commits clean diff, pushes to remote repo, and opens PR with diagnostic summary."
      }
    ],
    stack: ["Python 3.12", "FastAPI", "Docker Engine API", "GitHub Webhooks", "Git Automation", "Gemini 1.5/2.0 API"],
    verifiedProof: "Autonomous CI/CD workflow self-healing engine (Resume Technical Projects 2025)",
    metrics: ["100% Automated Branch Creation", "Zero-Touch Error Intercept", "Ephemeral Container Isolation"],
    sampleLogOrOutput: `[FIXORA DAEMON] Listening on port 8090...
>> [EVENT] GitHub Webhook received: workflow_run.completed (status: failure)
>> [PARSE] StackTrace in tests/test_auth.py: line 42 (ModuleNotFoundError: 'jwt')
>> [GEMINI] Synthesizing minimal patch diff...
>> [DOCKER] Spawning ephemeral test container (id: 4a9f81bc2)...
>> [PYTEST] 18 passed, 0 failed in 1.42s
>> [GIT] Created branch 'fixora/patch-add-pyjwt-dep'
>> [GITHUB] PR #14 opened with telemetry summary and passing CI test results.`
  },
  {
    id: "mean-devops",
    title: "MEAN Stack DevOps Automated Cloud Pipeline",
    codeName: "MEAN_DEVOPS // INFRA_02",
    year: "2025",
    role: "DevOps & Cloud Systems Engineer",
    category: "Cloud Infrastructure & Containerization",
    summary: "Containerized MongoDB, Express, Angular, and Node.js using Docker Compose; engineered automated GitHub Actions CI/CD for DockerHub publishing and AWS EC2 deployment via SSH with Nginx as reverse proxy.",
    problem: "Deploying multi-tier MEAN stack applications manually leads to configuration drift, unpredictable production downtime, port exposure vulnerabilities, and complex multi-service networking between MongoDB and Express.",
    approach: "Designed an end-to-end automated deployment pipeline: modular multi-stage Docker builds for Angular frontend and Express backend, automated container registry publishing via GitHub Actions, and automated remote SSH deployment to AWS EC2 behind an Nginx reverse proxy.",
    pipelineSteps: [
      {
        number: "01",
        label: "ANGULAR 18 SPA",
        sublabel: "Client Layer",
        detail: "High-performance responsive frontend compiled into static assets via multi-stage Docker build."
      },
      {
        number: "02",
        label: "NODE / EXPRESS API",
        sublabel: "REST Microservice",
        detail: "Stateless backend handling API routing, authentication tokens, and MongoDB Mongoose connections."
      },
      {
        number: "03",
        label: "DOCKER COMPOSE",
        sublabel: "Container Orchestrator",
        detail: "Defines internal private bridge network linking Angular, Express, and secured MongoDB instances."
      },
      {
        number: "04",
        label: "GITHUB ACTIONS",
        sublabel: "CI/CD Test & Build",
        detail: "On every git push to main: runs linter, builds production Docker images, and authenticates to DockerHub."
      },
      {
        number: "05",
        label: "DOCKERHUB REPO",
        sublabel: "Artifact Registry",
        detail: "Pushes immutable, version-tagged container images for zero-drift cloud synchronization."
      },
      {
        number: "06",
        label: "AWS EC2 + NGINX",
        sublabel: "Production Cloud Gateway",
        detail: "Executes SSH deploy script: pulls fresh images, does zero-downtime container rolling restart, routed through Nginx."
      }
    ],
    stack: ["AWS EC2", "Docker", "Docker Compose", "GitHub Actions", "Nginx", "MongoDB", "Express.js", "Angular", "Node.js", "SSH Automation"],
    verifiedProof: "MEAN Stack DevOps Deployment (Resume Technical Projects 2025)",
    metrics: ["Automated SSH Cloud Rolling Updates", "Zero-Downtime Nginx Reverse Proxy", "Hardened Multi-Stage Docker Images"],
    sampleLogOrOutput: `[GITHUB ACTIONS RUNNER] Initiating CI/CD workflow: deploy-aws-ec2.yml
>> [STAGE 1] Docker build -f backend.Dockerfile -t abhinandan12317/mean-api:latest .
>> [STAGE 2] Docker build -f frontend.Dockerfile -t abhinandan12317/mean-web:latest .
>> [STAGE 3] DockerHub authentication: SUCCESS
>> [STAGE 4] Pushing images to registry: SUCCESS (digest: sha256:7f8a91c...)
>> [STAGE 5] SSH Connection to AWS EC2 (ubuntu@ec2-13-233-xxx-xxx):
   $ docker-compose pull && docker-compose up -d --remove-orphans
   $ sudo systemctl reload nginx
>> [HEALTHCHECK] https://api.prod.domain.internal/health -> 200 OK (latency: 14ms)`
  },
  {
    id: "vidhipath",
    title: "VidhiPath.ai — Specialized GenAI Legal Assistant",
    codeName: "VIDHIPATH // RAG_03",
    year: "2025",
    role: "GenAI Architect & Developer",
    category: "Retrieval-Augmented Generation & NLP",
    summary: "Developed a MySQL-backed GenAI assistant with document processing and semantic search during the IEEE Computer Society Internship & Mentorship Program.",
    problem: "Legal researchers and law students struggle with navigating thousands of pages of statutory Indian case laws and judicial precedents. Standard LLMs hallucinate statutory sections, invented citations, and inaccurate legal rulings.",
    approach: "Built a grounded Retrieval-Augmented Generation (RAG) system with a structured MySQL persistence layer. Legal PDF judgments are ingested, split with sliding-window chunking, vectorized with semantic embeddings, and paired with Gemini API calls strictly requiring precedent citations.",
    pipelineSteps: [
      {
        number: "01",
        label: "DOCUMENT INGESTION",
        sublabel: "Legal PDF Parser",
        detail: "Ingests Indian court judgments, statutory acts, and legal filings with metadata preservation."
      },
      {
        number: "02",
        label: "SLIDING CHUNKING",
        sublabel: "Context-Aware Slicing",
        detail: "Partitions legal texts into overlapping 512-token segments preserving paragraph and section coherence."
      },
      {
        number: "03",
        label: "VECTOR EMBEDDINGS",
        sublabel: "Semantic Indexing",
        detail: "Generates high-dimensional vector representations using embedding models with cosine similarity indices."
      },
      {
        number: "04",
        label: "SQL METADATA SYNC",
        sublabel: "MySQL Relational Store",
        detail: "Stores case numbers, judge citations, dates, and full text links in relational MySQL tables."
      },
      {
        number: "05",
        label: "GROUNDED SYNTHESIS",
        sublabel: "Gemini API Orchestration",
        detail: "Generates precise legal research briefs strictly grounded in the retrieved precedent chunks with zero hallucinations."
      }
    ],
    stack: ["Google Gemini API", "Python", "MySQL", "Vector Embeddings", "Document Processing", "Semantic Search", "LangChain/RAG"],
    verifiedProof: "Developed during IEEE Computer Society Internship & Mentorship Program (Resume 2025)",
    metrics: ["Hallucination-Free Statutory Grounding", "MySQL Relational Indexing", "IEEE CS Mentorship Developed"],
    sampleLogOrOutput: `[VIDHIPATH RAG ENGINE] Query: "Doctrine of basic structure precedents in Kesavananda Bharati"
>> [VECTOR SEARCH] Computed cosine similarity against 14,200 indexed judgment chunks.
>> [RETRIEVAL] Top 3 matched chunks retrieved (score: 0.942, 0.918, 0.897)
>> [SQL LOOKUP] SELECT case_name, year, citation FROM judgments WHERE id IN (104, 218);
>> [GEMINI PROMPT] Synthesizing brief with STRICT citations requirement...
>> [OUTPUT] Generated 4-point legal analysis citing Kesavananda Bharati v. State of Kerala (1973) 4 SCC 225 with exact statutory footnotes.`
  }
];

export const TECHNOLOGIES: TechnologyNode[] = [
  // AI & Automation
  {
    id: "gemini-cli",
    name: "Gemini CLI",
    category: "AI & Automation",
    level: "Core Pedagogical & Engineering Tool",
    proofTitle: "Google Student Ambassador Hands-on Workshop",
    proofDescription: "Trained 40+ engineering students over 4 hours on AI-assisted development and deployment using Gemini CLI.",
    contextTag: "GSA WORKSHOP // 40+ STUDENTS",
    relatedTechs: ["Terminal", "Git", "Vite", "Generative AI"]
  },
  {
    id: "generative-ai",
    name: "Generative AI",
    category: "AI & Automation",
    level: "Production Runtimes & Prompt Pipelines",
    proofTitle: "VidhiPath.ai & Fixora Self-Healing Engine",
    proofDescription: "Engineered automated LLM code patch generation in Fixora and legal document synthesis in VidhiPath.ai.",
    contextTag: "FIXORA & VIDHIPATH.AI",
    relatedTechs: ["Gemini CLI", "LLM APIs", "Vector Retrieval", "Python"]
  },
  {
    id: "llm-apis",
    name: "LLM APIs",
    category: "AI & Automation",
    level: "REST Invocations & SDK Integration",
    proofTitle: "API-Driven Autonomous Systems",
    proofDescription: "Direct integration of Gemini API models with structured output parsing, error trapping, and streaming.",
    contextTag: "RESUME: AI & AUTOMATION",
    relatedTechs: ["Gemini CLI", "Node.js", "Python", "Generative AI"]
  },
  {
    id: "ai-assisted-dev",
    name: "AI-Assisted Development",
    category: "AI & Automation",
    level: "Curriculum & Developer Workflows",
    proofTitle: "Curriculum at ATME College of Engineering",
    proofDescription: "Designed end-to-end syllabus moving students from command-line LLM prompts to production web apps.",
    contextTag: "RESUME: GSA 2025",
    relatedTechs: ["Gemini CLI", "Vite", "GitHub", "Vercel"]
  },
  {
    id: "n8n",
    name: "n8n Automation",
    category: "AI & Automation",
    level: "Workflow Orchestration",
    proofTitle: "AI Automation Workflows",
    proofDescription: "Built automated pipeline triggers and webhook nodes connecting services.",
    contextTag: "RESUME: AI & AUTOMATION",
    relatedTechs: ["Generative AI", "Docker", "Node.js"]
  },

  // DevOps & Systems
  {
    id: "docker",
    name: "Docker & Compose",
    category: "DevOps & Systems",
    level: "Multi-stage Builds & Container Orchestration",
    proofTitle: "MEAN Stack DevOps & Fixora Sandboxing",
    proofDescription: "Containerized MongoDB, Express, Angular, and Node.js using Docker Compose; ephemeral containers for test execution.",
    contextTag: "MEAN DEVOPS & FIXORA",
    relatedTechs: ["GitHub Actions", "AWS EC2", "Linux", "Node.js"]
  },
  {
    id: "github-actions",
    name: "GitHub Actions CI/CD",
    category: "DevOps & Systems",
    level: "Automated Build, Test & Deployment Runners",
    proofTitle: "MEAN Stack Automated Pipeline to AWS",
    proofDescription: "Authored YAML workflows for automated testing, DockerHub image pushing, and SSH deployment to AWS EC2.",
    contextTag: "MEAN DEVOPS PIPELINE",
    relatedTechs: ["Docker", "AWS EC2", "Git", "GitHub"]
  },
  {
    id: "linux",
    name: "Linux & Shell",
    category: "DevOps & Systems",
    level: "System Administration & CLI Mastery",
    proofTitle: "GSA Workshop & AWS EC2 Ubuntu Servers",
    proofDescription: "Led 40+ students through Linux shell commands, file permissions, environment variables, and SSH automation.",
    contextTag: "GSA WORKSHOP // 4 HOURS",
    relatedTechs: ["Terminal", "Docker", "AWS EC2", "Git"]
  },
  {
    id: "git-github",
    name: "Git & GitHub",
    category: "DevOps & Systems",
    level: "Version Control & Branching Workflows",
    proofTitle: "Workshop Training & Fixora Auto-Branching",
    proofDescription: "Guided participants through repo setup, commits, remote branches, and programmatic Git branch creation in Fixora.",
    contextTag: "GSA WORKSHOP & FIXORA",
    relatedTechs: ["GitHub Actions", "Terminal", "Vite"]
  },
  {
    id: "terminal",
    name: "Terminal",
    category: "DevOps & Systems",
    level: "Command-Line Development",
    proofTitle: "Auditorium Hands-on Instruction",
    proofDescription: "Trained entire auditorium cohort on navigating files, executing scripts, running dev servers, and managing processes.",
    contextTag: "GSA WORKSHOP 2025",
    relatedTechs: ["Linux", "Git", "Gemini CLI", "Docker"]
  },

  // Web & Full-Stack
  {
    id: "nodejs-express",
    name: "Node.js & Express.js",
    category: "Web & Full-Stack",
    level: "Backend REST APIs & Microservices",
    proofTitle: "MEAN Stack DevOps & API Architecture",
    proofDescription: "Constructed containerized REST APIs handling routes, middleware, and database connectivity with deterministic latency.",
    contextTag: "MEAN STACK DEVOPS 2025",
    relatedTechs: ["Docker", "MongoDB", "JavaScript", "Vite"]
  },
  {
    id: "vite",
    name: "Vite",
    category: "Web & Full-Stack",
    level: "Modern Frontend Tooling",
    proofTitle: "GSA Web Development Workshop",
    proofDescription: "Instructed participants on scaffolding, configuring, and building modern frontend applications with lightning HMR.",
    contextTag: "GSA WORKSHOP 2025",
    relatedTechs: ["JavaScript", "HTML", "CSS", "Vercel"]
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Web & Full-Stack",
    level: "ES6+ Full-Stack Runtimes",
    proofTitle: "Web Engineering & Workshop Curriculum",
    proofDescription: "Asynchronous mechanics, promises, DOM manipulation, and modern API fetch interfaces.",
    contextTag: "RESUME: WEB DOMAIN",
    relatedTechs: ["Node.js & Express.js", "Vite", "HTML", "CSS"]
  },
  {
    id: "html-css",
    name: "HTML & CSS",
    category: "Web & Full-Stack",
    level: "Responsive Semantic Markup & Layouts",
    proofTitle: "Undergraduate Curriculum & Projects",
    proofDescription: "Clean responsive design, Flexbox, CSS Grid, and accessible UI development.",
    contextTag: "RESUME: WEB DOMAIN",
    relatedTechs: ["JavaScript", "Vite"]
  },

  // Programming Fundamentals
  {
    id: "python",
    name: "Python",
    category: "Programming",
    level: "Systems Programming & Automation Scripts",
    proofTitle: "Fixora Engine & VidhiPath.ai Backend",
    proofDescription: "Engineered self-healing AST log parsing scripts, LangChain retrieval pipelines, and backend microservices.",
    contextTag: "FIXORA & VIDHIPATH.AI",
    relatedTechs: ["Generative AI", "FastAPI", "Docker", "MySQL"]
  },
  {
    id: "c-programming",
    name: "C & OOP Fundamentals",
    category: "Programming",
    level: "Memory Management & Core Computer Science",
    proofTitle: "ATME Computer Science Engineering Core",
    proofDescription: "Deep algorithmic problem solving, pointers, struct data layouts, and object-oriented paradigms.",
    contextTag: "RESUME: PROGRAMMING DOMAIN",
    relatedTechs: ["Python"]
  },

  // Cloud & Databases
  {
    id: "aws-ec2",
    name: "AWS EC2 & Nginx",
    category: "Cloud & DB",
    level: "Cloud Server Hosting & Reverse Proxying",
    proofTitle: "MEAN Stack Automated Deployment",
    proofDescription: "Configured Ubuntu EC2 instances, security groups, SSH key pairs, and Nginx reverse proxy routing.",
    contextTag: "MEAN STACK DEVOPS 2025",
    relatedTechs: ["Docker", "GitHub Actions", "Linux"]
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "Cloud & DB",
    level: "Edge Cloud Deployment",
    proofTitle: "GSA 4-Hour Hands-on Workshop",
    proofDescription: "Guided 40+ students through linking GitHub repositories to Vercel for zero-config production deployments.",
    contextTag: "GSA WORKSHOP 2025",
    relatedTechs: ["Vite", "Git", "GitHub"]
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Cloud & DB",
    level: "NoSQL Document Databases",
    proofTitle: "MEAN Stack Containerized Database",
    proofDescription: "Containerized MongoDB instance integrated with Docker Compose networks and Mongoose models.",
    contextTag: "MEAN STACK DEVOPS 2025",
    relatedTechs: ["Docker", "Node.js & Express.js"]
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Cloud & DB",
    level: "Relational Schema & Semantic Indices",
    proofTitle: "VidhiPath.ai GenAI Assistant",
    proofDescription: "Structured database schemas storing case judgment metadata, timestamps, and relational vector associations.",
    contextTag: "VIDHIPATH.AI // IEEE INTERNSHIP",
    relatedTechs: ["Python", "Generative AI"]
  }
];

export const TEACHING_STAGES = [
  {
    number: "01",
    title: "WHY",
    concept: "EXCAVATION OF NECESSITY",
    tagline: "No syntax before purpose.",
    description: "Engineers forget syntax; they never forget pain points. Before writing a single line of Dockerfile or prompting an LLM API, we simulate the breakdown: what happens when your local environment crashes at 3:00 AM on production? Why does static state fail under load? When the problem becomes painful and real, the architectural solution becomes obvious.",
    analogy: "You don't teach someone how to construct a ship by handing them wood and blueprints. You awaken within them a longing for the boundless open sea.",
    concreteExample: "Instead of memorizing 'docker run -p 8080:80', we first try to run two conflicting Node versions on the same machine and watch the port collisions occur. The need for isolated containers is born.",
    codeSample: `// [STAGE 01: UNMASKING THE ARCHITECTURAL FAULT]
// Simulating environment collision without container isolation:
const appA = require("node-v16-package");
const appB = require("node-v20-package"); // Conflict!

console.error("CRASH: Incompatible glibc and V8 engine bindings.");
// THE A-HA MOMENT: Why container namespaces are mandatory,
// not academic pedantry.`,
    metric: "100% RETENTION OF 'WHY' PREVENTS DRIFT IN CODE",
    statusBadge: "COGNITIVE NEED UNMASKED"
  },
  {
    number: "02",
    title: "SIMPLIFY",
    concept: "PHYSICAL COGNITIVE TRANSDUCTION",
    tagline: "Translate abstract math into tangible physical machinery.",
    description: "Abstract pointers and asynchronous event queues are mapped to tangible physical counterparts. Memory allocation becomes warehouse pallet staging; thread pools become bank teller counters. Once the intuition is fixed in physical reality, the digital implementation ceases to be intimidating.",
    analogy: "A Docker container is NOT a miniature computer. It is simply a regular Linux process wearing two pairs of glasses: cgroups (which limits what it can touch) and namespaces (which limits what it can see).",
    concreteExample: "Explaining LLM token embeddings by comparing them to coordinates on a world map: 'cat' and 'kitten' live in the same neighborhood; 'airplane' lives across an ocean.",
    codeSample: `// [STAGE 02: PHYSICAL EQUIVALENCE FORMULATION]
/*
 * PHYSICAL HEURISTIC:
 * A Docker container = Standard Linux Process + 2 Boundary Walls
 * Wall 1: cgroups -> Limits CPU / RAM allocation
 * Wall 2: namespaces -> Limits PID / Network / Filesystem vision
 */
const containerProcess = spawnIsolatedLinuxProcess({
  cgroups: { maxRAM: "512MB", maxCPU: 1.0 },
  namespaces: { isolatePID: true, privateNetwork: true }
});`,
    metric: "ZERO OPAQUE JARGON — 100% INTUITIVE RETENTION",
    statusBadge: "PHYSICAL INTUITION ESTABLISHED"
  },
  {
    number: "03",
    title: "DEMONSTRATE",
    concept: "ZERO-FAIL LIVE TERMINAL",
    tagline: "No sanitized slides. Code runs live in front of the room.",
    description: "No sanitized PowerPoint decks. The code runs live on the projection screen in front of the cohort. Errors are not hidden; they are deliberately triggered, intercepted, analyzed, and refactored in real time so students learn how senior engineers diagnose reality.",
    analogy: "Watching a flight simulator is informative. Watching an experienced pilot land in turbulent crosswinds builds true visceral competence.",
    concreteExample: "Demonstrating Gemini CLI in the auditorium: live invoking Gemini 2.0 streaming tokens in the bash terminal, encountering a rate limit, reading the HTTP headers, and writing a 4-line retry loop.",
    codeSample: `// [STAGE 03: LIVE TERMINAL EXECUTION & INTERCEPT]
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});
console.log(">> Initiating live token stream from auditorium podium...");

const stream = await ai.models.generateContentStream({
  model: "gemini-2.0-flash",
  contents: "Deconstruct Docker container namespaces into 3 plain rules."
});

for await (const chunk of stream) {
  process.stdout.write(chunk.text); // Live token emission to 40+ student screens
}`,
    metric: "100% UNGUARDED LIVE PROJECTION",
    statusBadge: "REAL-TIME OBSERVABILITY SHOWN"
  },
  {
    number: "04",
    title: "BUILD",
    concept: "IMMEDIATE AUTONOMOUS EXECUTION",
    tagline: "Learners ship working code to live servers within minutes.",
    description: "Within 60 minutes of conceptual delivery, every student has their hands on their own keyboard building the system independently. The workshop concludes with working, deployable software running on their local machines or live cloud servers.",
    analogy: "You do not learn to swim by reading about fluid dynamics. You dive into the pool while an instructor stands beside you.",
    concreteExample: "In the 4-hour GSA workshop, every single student configured their Git repo, integrated Gemini CLI API keys into Vite, ran the dev server, and deployed a live URL to Vercel.",
    codeSample: `// [STAGE 04: STUDENT VERIFIED REPO DEPLOYMENT]
$ cd ./student-ai-app
$ npm run build
$ git add . && git commit -m "feat: integrate gemini cli client"
$ vercel --prod --yes

>> Inspect: https://vercel.com/abhinandan-student/ai-app
>> Production: https://ai-app-student-gsa.vercel.app [200 OK]
>> [VERIFIED: 40/40 PARTICIPANTS SHIPPED INDEPENDENT PROJECTS]`,
    metric: "40/40 WORKING LOCAL & CLOUD BUILDS SHIPPED",
    statusBadge: "PRODUCTION CAPABILITY ATTAINED"
  }
];

export const TERMINAL_PRESETS = [
  {
    cmd: "teach",
    display: "query --pedagogy",
    description: "Inspect Abhinandan's 4-stage teaching methodology",
    response: `[PEDAGOGICAL COMPILER ARCHITECTURE]:
Abhinandan operates via the 4-Stage Recursive Compiler:
1. EXCAVATION (WHY): Simulate the failure state first. No syntax before purpose.
2. TRANSDUCTION (SIMPLIFY): Map abstract memory/async constructs to physical machines.
3. LIVE EXPERIMENT (DEMO): Unguarded live terminal execution on screen. No sanitized slides.
4. SYNTHESIS (BUILD): Every learner builds and deploys independent working code.
Core Creed: 'Technology is only useful when people can use it.'`
  },
  {
    cmd: "workshop",
    display: "query --gemini-workshop",
    description: "Google Student Ambassador 4-Hour Workshop Telemetry",
    response: `[GOOGLE STUDENT AMBASSADOR WORKSHOP (2025)]:
- Location: ATME College of Engineering, Mysuru, Karnataka
- Duration: 4.0 Continuous Hours (Hands-on)
- Cohort: 40+ Engineering Undergraduates with individual laptops
- Tools Covered: Terminal, Gemini CLI, Git, GitHub, Vite, Vercel
- Verification: 100% of participants scaffolded, integrated, and deployed their projects to live production URLs.`
  },
  {
    cmd: "projects",
    display: "query --projects",
    description: "Verified Technical Systems Built",
    response: `[VERIFIED TECHNICAL ARTIFACTS]:
1. FIXORA (2025):
   Autonomous CI/CD self-healing engine. Intercepts failed GitHub Action logs, calculates AST diffs, uses LLM to generate patches, verifies inside Docker containers, and pushes PRs automatically.
2. MEAN STACK DEVOPS PIPELINE (2025):
   Full CI/CD for Angular, Node/Express, and MongoDB. Docker Compose, GitHub Actions runner, DockerHub publishing, and AWS EC2 deployment via SSH with Nginx reverse proxy.
3. VIDHIPATH.AI (2025):
   MySQL-backed legal RAG assistant with sliding-window chunking, semantic vector search, and grounded Indian case law synthesis. Developed during IEEE CS Internship.`
  },
  {
    cmd: "speaking",
    display: "query --speaking-events",
    description: "Auditorium and Public Speaking Record",
    response: `[CHRONOLOGY OF SPEAKING & TECHNICAL LEADERSHIP]:
- GSA 2025: 4-Hour Hands-on Workshop Lead (40+ participants)
- IEEE Ignite: 15-Minute Technical Speaker on IEEE Engineering Relevance (≈200 audience)
- TechAvishkar 2.0: 24-Hour Hackathon Core Organising Committee & Host (≈200 hackers, 20+ jurors)
- IEEE Student Branch ATME: Secretary & Master of Ceremonies (Mar 2024 – Dec 2025)
- IEEE Mini Project Symposium: Valedictory Speaker & External Presentation on Vayulekha`
  },
  {
    cmd: "contact",
    display: "query --contact-coordinates",
    description: "Direct Dispatch & Contact Information",
    response: `[DIRECT COMMUNICATION CHANNELS]:
- Email: abhinandan4dev@gmail.com
- Location: Mysuru, Karnataka, India – 570023
- LinkedIn: https://linkedin.com/in/abhinandan-rk
- GitHub: https://github.com/Abhinandan12317
- Portfolio: https://abhinandan-r-k.vercel.app
- Availability: Technical Keynotes, Hands-on Engineering Workshops, Curriculum Architecture.`
  }
];
