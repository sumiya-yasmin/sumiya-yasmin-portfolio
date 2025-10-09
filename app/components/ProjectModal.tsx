"use client";
import { X, Link, Github } from "lucide-react";
import { Project } from "../types";
import Image from "next/image";
import { MouseEvent } from "react";
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
                MERN Stack, Next.js, Tailwind, etc.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
          <p className="text-[var(--color-text-seconday)] mb-8">
            This is a brief placeholder for the in-depth description of the
            project. Here, I will explain the problem solved, the user goals,
            and the overall architecture.Such as For LinkDeen, we will discuss
            JWT, MongoDB schemas, and real-time feeds.
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

          <h3 className="text-2xl font-bold mb-4">Technical Challenges</h3>
          <ul className="list-disc list-inside space-y-4 text-[var(--color-text-seconday)]">
            <li>
              <span className="font-semibold text-[var(--color-text-primary)]">
                Challenge:
              </span>{" "}
              Handling secure user authentication and authorization (JWT).
              <p className="ml-4 italic text-sm">
                Solution: Implemented secure, HttpOnly cookie-based JWT tokens
                for state management across server and client.
              </p>
            </li>
            <li>
              <span className="font-semibold text-[var(--color-text-primary)]">
                Challenge:
              </span>{" "}
              Optimizing performance for the infinite scroll feed.
              <p className="ml-4 italic text-sm">
                Solution: Used efficient MongoDB indexing and server-side
                cursor-based pagination.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
