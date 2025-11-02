"use client";
import { X, Link, Github } from "lucide-react";
import { Project } from "../types";
import Image from "next/image";
import { MouseEvent } from "react";
import { formatTextWithBolds } from "./FormatTextBold";
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div
        className="relative bg-[var(--color-bg-level-2)] max-w-4xl w-full h-full md:h-5/6 rounded-lg shadow-2xl overflow-y-auto"
        style={{ color: "var(--color-text-primary)" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[var(--color-text-primary)] bg-[var(--color-bg-level-4)] hover:bg-[var(--color-accent-secondary)] z-50 transition-colors"
          aria-label="Close Modal"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <h2 className="text-4xl font-extrabold mb-2 text-[var(--color-text-primary)]">
            {project.title}
          </h2>
          <div className="flex space-x-4 mb-8 mt-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-[var(--color-accent-secondary)]"
            >
              <Link size={18} />
              <span>Live Site</span>
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[var(--color-text-seconday)] hover:text-[var(--color-accent-secondary)]"
            >
              <Github size={18} />
              <span>GitHub Code</span>
            </a>
          </div>

          <hr className="border-[var(--color-bg-level-4)] mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-lg font-bold mb-2">Categories</h3>
              <p className="flex flex-wrap gap-2">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-sm px-3 py-1 bg-[var(--color-bg-level-3)] text-[var(--color-accent-secondary)] rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Stack</h3>
              <p className="text-[var(--color-text-seconday)]">
                {project.stackSummary} 
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
          <p className="text-[var(--color-text-seconday)] mb-8">
            {formatTextWithBolds(project.descriptionOverview)} 
          </p>

          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4">Screenshots & Features</h4>
            <div className="space-y-6">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={800}
                height={450}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          
          <h3 className="text-2xl font-bold mb-4">Core Features</h3>
          <ul className="list-disc list-inside space-y-3 text-[var(--color-text-seconday)] mb-10 ml-4">
            {project.coreFeatures.map((feature, i) => (
              <li key={i}>
                {formatTextWithBolds(feature)}
              </li>
            ))}
          </ul>
          
          <h3 className="text-2xl font-bold mb-4">Key Technical Implementations</h3>
          <ul className="list-disc list-inside space-y-4 text-[var(--color-text-seconday)] ml-4">
            {project.keyImplementations.map((impl, i) => (
              <li key={i} className="text-[var(--color-text-primary)]">
                {formatTextWithBolds(impl)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}