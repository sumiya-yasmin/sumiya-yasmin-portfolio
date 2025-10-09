export interface Project{
  id: number;
  image: string;
  title: string;
  categories: string[];
  liveLink?: string;
  githubLink: string;
  summary?: string; 
  techStack?: string[];
  role?: string;
  timeframe?: string;
  challenges?: { problem: string; solution: string }[];
}