import { LucideIcon } from "lucide-react";
import { LogoKey } from "../components/Logos";

export interface Project{
  id: number;
  image: string;
  imagecover: string;
  title: string;
  categories: string[];
  liveLink?: string;
  githubLink: string;
  stackSummary?: string; 
  descriptionOverview: string;
  coreFeatures: string[];     
  keyImplementations: string[]; 
  role?: string;
  timeframe?: string;
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

export type TechLogo = {
  name: string;
  componentKey: LogoKey; 
};


export type ExpertiseData = {
  title: string;
  value: string;
  icon: LucideIcon;
  techLogos: TechLogo[];
};