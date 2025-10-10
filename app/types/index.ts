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

export interface CertificateData {
    tag: string;
    date: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
    imageUrl: string;
}
