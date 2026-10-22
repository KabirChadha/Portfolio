export type ProjectCategory = 'all' | 'ai-ml' | 'realtime-fullstack' | 'quantitative' | 'simulation';

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'ML/AI' | 'Database' | 'Visualization' | 'Infrastructure';
}

export interface MetricItem {
  label: string;
  value: string;
  detail?: string;
}

export interface Project {
  id: string;
  code: string;
  title: string;
  tagline: string;
  category: 'ai-ml' | 'realtime-fullstack' | 'quantitative' | 'simulation';
  categoryLabel: string;
  problemStatement: string;
  architecturalHighlights: string[];
  keyMetrics: MetricItem[];
  techStack: TechItem[];
  githubUrl: string;
  liveUrl?: string;
  terminalBadge: string;
  status: 'PRODUCTION READY' | 'DEPLOYED' | 'VERIFIED';
  architectureFlow: string[];
  coreCodeSnippet: {
    title: string;
    language: string;
    code: string;
  };
}

export interface FairnessCriterion {
  name: string;
  math: string;
  description: string;
}

export interface MitigationStage {
  stage: 'Pre-Processing' | 'In-Processing' | 'Post-Processing';
  techniques: string[];
  goal: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  indexedIn: string[];
  abstract: string;
  coreContributions: string[];
  fairnessCriteria: FairnessCriterion[];
  mitigationFramework: MitigationStage[];
  links: { label: string; url: string }[];
  journalUrl?: string;
  doiUrl?: string;
  doi?: string;
  bibtex: string;
}

export interface HackathonWin {
  id: string;
  award: string;
  hackathon: string;
  organizer: string;
  track: string;
  projectTitle: string;
  description: string;
  keyDeliverables: string[];
  techStack: string[];
  date: string;
}

export interface InternshipExperience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  keyAchievements: string[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  terminalLabel: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Core", "Advanced", "Specialized"
    percentage: number;
  }[];
}
