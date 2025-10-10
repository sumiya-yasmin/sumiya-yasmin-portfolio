"use client";
import { learningJourneyData } from "@/data/learningJourneyData";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { formatTextWithBolds } from "./FormatTextBold";
import { ChevronLeft, ChevronRight } from "lucide-react";
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 600 : -600,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 600 : -600,
    opacity: 0,
  }),
};
export const LearningJourneySection = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const data = learningJourneyData;
  const autoPlayRef = useRef<number | null>(null);
  const journeyIndex = Math.abs(page % data.length);

  const paginate = useCallback((newDirection: number) => {
    setPage((prev) => [prev[0] + newDirection, newDirection]);
  }, []);
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      window.clearInterval(autoPlayRef.current);
    }

    autoPlayRef.current = window.setInterval(() => {
      paginate(1);
    }, 4000);
  }, [paginate]);

  useEffect(() => {
    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        window.clearInterval(autoPlayRef.current);
      }
    };
  }, [startAutoPlay]);
  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      window.clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    startAutoPlay();
  };
  const BG = "bg-[var(--color-bg-level-2)]";

  return (
    <section className={`${BG} px-6 py-20`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-[var(--color-text-secondary)]">
          My Learning Journey
        </h2>
        <div className="h-0.5 w-26 bg-[var(--color-accent-secondary)] mx-auto mb-4" />
        <p className="text-[16px] mb-12 max-w-2xl mx-auto font-normal text-[var(--color-text-secondary)]">
          A glimpse of how my path evolved across different technologies and
          problem domains.
        </p>
        <div
          className="relative max-w-4xl mx-auto overflow-hidden flex items-center justify-center w-full min-h-[400px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.8, ease: "easeInOut" },
                opacity: { duration: 0.8 },
              }}
              layout="position"
              className="absolute w-[600px] h-auto max-w-full p-6 md:p-8 bg-[var(--color-bg-carousel)] rounded-lg shadow-2xl"
            >
              <p className="font-bold text-left text-xl mb-4 text-[var(--color-text-primary)]">
                {data[journeyIndex].title}
              </p>
              <p className="text-sm text-left font-semibold text-[var(--color-text-primary)] mb-3">
                &quot;{data[journeyIndex].subtitle}&quot;
              </p>
              <ul className="text-left text-[16px] text-[var(--color-text-tertiary)]">
                {data[journeyIndex].descriptionPoints.map((point, i) => (
                  <li key={i}>{formatTextWithBolds(point)}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => {
              handleMouseEnter();
              paginate(1);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-gray-700/50 rounded-full z-10 hover:bg-gray-700 transition-colors"
            aria-label="Next Journey"
          >
            <ChevronRight
              className="text-[var(--color-text-primary)]"
              size={24}
            />
          </button>
          <button
            onClick={() => {
              handleMouseEnter();
              paginate(-1);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-gray-700/50 rounded-full z-10 hover:bg-gray-700 transition-colors"
            aria-label="Previous Journey"
          >
            <ChevronLeft
              className="text-[var(--color-text-primary)]"
              size={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
