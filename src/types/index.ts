export type CaseStudyTab = '2019-dtrack' | '2026-data-leak';

export interface SimulationStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technicalDetail: string;
  sourceNode: string;
  targetNode: string;
  status: 'normal' | 'threat' | 'alert' | 'blocked' | 'protected';
  speakerNote: string;
}

export interface SecurityConcept {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  explanation: string;
  kknppContext: string;
}

export interface MythFactItem {
  myth: string;
  fact: string;
  officialSource: string;
}

export interface PresentationSlide {
  id: number;
  caseStudy: CaseStudyTab | 'universal';
  title: string;
  subtitle: string;
  keyPoints: string[];
  whatToSay: string[];
  visualFocus: string;
}

export interface ReferenceItem {
  id: number;
  title: string;
  organization: string;
  type: 'Official Statement' | 'Research Report' | 'Technical Advisory' | 'Journalistic Report';
  date: string;
  summary: string;
  verifiedStatus: 'Confirmed by Authorities' | 'Third-Party Technical Research' | 'Reported Media Allegation';
  urlHint?: string;
}
