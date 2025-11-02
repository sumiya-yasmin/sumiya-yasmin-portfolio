import { ExpertiseData } from "@/app/types";
import { Code, Cpu, Database, Cloud, Zap } from "lucide-react"; 

export const techExpertiseData : ExpertiseData[] = [
  {
    title: "Languages",
    value: "Mastery of essential programming languages for application logic, systems development, and client-side interactivity.",
    icon: Zap, 
    techLogos: [
      { name: "JavaScript", componentKey: "JavaScript" },
      { name: "TypeScript", componentKey: "TypeScript" },
      { name: "C++", componentKey: "Cplusplus" },
      { name: "C", componentKey: "C" }, 
      // { name: "Java", componentKey: "Java" }, 
      { name: "C#", componentKey: "Csharp" },
      { name: "Python", componentKey: "Python" }, 
    ],
  },
  

  {
    title: "Frontend",
    value: "Crafting modern, responsive, and intuitive user interfaces using component-based architecture and utility-first styling.",
    icon: Code, // Using Code icon for development/UI
    techLogos: [
      { name: "React", componentKey: "React" },
      { name: "Next.js", componentKey: "Nextjs" },
      { name: "TailwindCSS", componentKey: "TailwindCSS" },
      { name: "MUI", componentKey: "MUI" }, // Added MUI from Full Stack
      { name: "React Native", componentKey: "ReactNative" }, // Added RN from Workflow/DevOps
    ],
  },

  // ------------------------- 3. BACKEND -------------------------
  {
    title: "Backend",
    value: "Designing and building robust, scalable server-side logic and APIs using powerful runtimes and framework ecosystems.",
    icon: Cpu, // Using Cpu icon for systems/processing
    techLogos: [
      { name: "Node.js", componentKey: "Nodejs" },
      { name: "Express", componentKey: "Express" },
      { name: "ASP.NET Core", componentKey: "ASPNetCore" },
    ],
  },

  // ------------------------- 4. DATABASES -------------------------
  {
    title: "Databases",
    value: "Expertise in both relational and non-relational databases for efficient data storage, retrieval, and management.",
    icon: Database,
    techLogos: [
      { name: "MongoDB", componentKey: "MongoDB" },
      { name: "PostgreSQL", componentKey: "PostgreSQL" },
      { name: "SQL Server", componentKey: "SQL" }, // Changed 'SQL' to 'SQL Server' to match image better and added componentKey
      // Note: Power BI is often considered a BI Tool, not a core Database, but you can add it here if preferred.
    ],
  },

  // ------------------------- 5. DEVOPS & TOOLS -------------------------
  {
    title: "DevOps & Tools",
    value: "Proficient in modern DevOps practices, containerization, API integration, and version control for reliable deployment.",
    icon: Cloud,
    techLogos: [
      { name: "Docker", componentKey: "Docker" },
      { name: "Git", componentKey: "Git" },
      { name: "GitHub", componentKey: "GitHub" }, // Added GitHub from Workflow
      { name: "Postman", componentKey: "Postman" },
      // { name: "Power BI", componentKey: "PowerBI" }, // Added Power BI from image
    ],
  },
];