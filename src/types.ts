export interface SpeakerEvent {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  role: string;
  date: string;
  location: string;
  audience: string;
  duration: string;
  description: string;
  keyTakeaways: string[];
  photoUrl: string;
  photoCaption: string;
  figNumber: string;
  tags: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  codeName: string;
  year: string;
  role: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  pipelineSteps: {
    number: string;
    label: string;
    sublabel: string;
    detail: string;
  }[];
  stack: string[];
  verifiedProof: string;
  metrics: string[];
  sampleLogOrOutput: string;
}

export interface TechnologyNode {
  id: string;
  name: string;
  category: 'AI & Automation' | 'DevOps & Systems' | 'Web & Full-Stack' | 'Programming' | 'Cloud & DB';
  level: string;
  proofTitle: string;
  proofDescription: string;
  contextTag: string;
  relatedTechs: string[];
}

export interface DocumentaryPhoto {
  id: string;
  title: string;
  fig: string;
  caption: string;
  event: string;
  eventId?: string;
  category?: string;
  location: string;
  date: string;
  attendees: string;
  imageUrl: string;
  aspectRatio: string;
  aspectClass: string;
}
