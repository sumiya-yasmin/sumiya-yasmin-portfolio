"use client";
import Image from "next/image";
import { Link, Eye } from "lucide-react";
import { categories, projectItems } from "@/data/projectData";
import { useMemo, useState } from "react";

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filteredItems = useMemo(() => {
    if (activeFilter == "ALL") {
      return projectItems;
    }
    return projectItems.filter((item) =>
      item.categories.includes(activeFilter)
    );
  }, [activeFilter]);
  return (
    <section className="py-20 px-6">
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
              <button
                className={` cursor-pointer ${
                  activeFilter == category &&
                  "text-[var(--color-accent-secondary)]"
                }`}
                key={index}
                onClick={() => setActiveFilter(category)}
              >
                {category.split(/-/).join(" ")}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded shadow-xl aspect-square project-card"
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

                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 m-2 rounded-full border border-white hover:bg-gray-200 hover:text-[var(--color-accent-secondary)] transition-colors"
                  >
                    <Eye size={24} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
