"use client";
import Image from "next/image";
import { Link, Eye } from "lucide-react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { categories, projectItems } from "@/data/projectData";
import { useMemo, useState } from "react";
import ProjectModal from "./ProjectModal";
import { Project } from "../types/index";

interface ModalState {
  isOpen: boolean;
  project: Project | null;
}
const initialModalState: ModalState = {
  isOpen: false,
  project: null,
};
const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.9, y: 20 },
};
export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [modalState, setModalState] = useState(initialModalState);

  const openModal = (project: Project) => {
    setModalState({ isOpen: true, project: project });
  };
  const closeModal = () => {
    setModalState(initialModalState);
  };

  const filteredItems = useMemo(() => {
    if (activeFilter == "ALL") {
      return projectItems;
    }
    return projectItems.filter((item) =>
      item.categories.includes(activeFilter)
    );
  }, [activeFilter]);
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-center text-[var(--color-text-secondary)]">
          My Projects
        </h2>
        <div className="h-0.5 w-26 bg-[var(--color-accent-secondary)] mx-auto mb-4" />
        <p className="text-[16px] mb-12 max-w-2xl mx-auto font-normal text-center text-[var(--color-text-secondary)]">
          Showcasing my best Fullstack, web applications, demonstrating clean
          code and technical depth.
        </p>

        <div className="flex justify-center space-x-6 mb-12 font-medium">
          {categories.map((category, index) => {
            return (
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={` cursor-pointer ${
                  activeFilter == category &&
                  "text-[var(--color-accent-secondary)]"
                }`}
                key={index}
                onClick={() => setActiveFilter(category)}
              >
                {category.split(/-/).join(" ")}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  className="group relative overflow-hidden rounded shadow-xl aspect-square project-card"
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute flex justify-center items-center inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300 delay-300 z-20">
                    <a
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 m-2 rounded-full border border-white hover:bg-gray-200 hover:text-[var(--color-accent-secondary)] transition-colors"
                    >
                      <Link size={24} />
                    </a>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openModal(item)}
                      className="p-4 m-2 rounded-full border border-white hover:bg-gray-200 hover:text-[var(--color-accent-secondary)] transition-colors"
                    >
                      <Eye size={24} />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
      {modalState.isOpen && (
        <ProjectModal project={modalState.project!} onClose={closeModal} />
      )}
    </section>
  );
}
