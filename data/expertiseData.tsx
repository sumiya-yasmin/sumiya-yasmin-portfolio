import { BarChart3, Code, Database, GitBranch, Globe, Link } from "lucide-react";

export const techExpertiseData = [
  { 
    title: "Fullstack Development", 
    description: "Building end-to-end web applications with proficiency across modern, high-performance frameworks like React, Node.js, and Express.",
    icon: Code, 
  },
  { 
    title: "Database & ORM", 
    description: "Expertise in designing efficient data models, optimizing queries, and managing both MongoDB and PostgreSQL systems.",
    icon: Database,
  },
  { 
    title: "Data & Analytics", 
    description: "Translating complex datasets into actionable insights through visualization, reporting, and rigorous statistical analysis using Power BI and Tableau.",
    icon: BarChart3,
  },
  { 
    title: "API & Integration", 
    description: "Designing secure, well-documented RESTful APIs and managing complex client-side data fetching with tools like React Query and Postman.",
    icon: Link,
  },
  { 
    title: "Core Languages", 
    description: "Solid foundation in multiple programming paradigms (Python, C++, Java, C#), demonstrating strong algorithmic skills and system versatility.",
    icon: Globe,
  },
  { 
    title: "DevOps & Workflow", 
    description: "Proficiency in version control (Git/GitHub), basic containerization with Docker, and clear technical documentation for team collaboration.",
    icon: GitBranch,
  },
];