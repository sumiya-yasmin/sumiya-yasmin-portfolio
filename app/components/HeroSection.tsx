"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";
import { ClientCountUp } from "./ClientCountUp";
import { stats } from "@/data/heroData";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const statCardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const HeroSection = () => {
  return (
    <motion.div
      className="flex py-35 flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex-1 max-w-xl mb-10 lg:mb-0 lg:w-3/5">
        <div className="flex flex-col gap-5">
          <motion.h1 variants={titleVariants} className="text-6xl font-bold">
            Sumiya Yasmin
          </motion.h1>
          <motion.p className="text-2xl font-semibold" variants={titleVariants}>
            Full-Stack Developer | Software Engineer
          </motion.p>
          <motion.p variants={itemVariants}>
            I build robust, high-performance web applications and scalable
            solutions, specializing in the MERN stack and modern frameworks like
            Next.js. Driven by a passion for clean, maintainable code, I focus
            on architectural improvements and delivering impactful, large-scale
            systems.
          </motion.p>
        </div>
        <motion.div className="flex mt-5 gap-6" variants={itemVariants}>
          <AnimatedButton variant="primary">View Projects</AnimatedButton>
          <AnimatedButton variant="secondary">Download CV</AnimatedButton>
        </motion.div>
      </div>

      <div className="w-full lg:w-2/5 grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat, index) => {
          const cardClasses = "bg-[var(--color-bg-level-4)] p-6";
          return (
            <Link
              href={stat.link}
              key={index}
              target={stat.link.startsWith("http") ? "_blank" : "_self"}
              rel={
                stat.link.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              <motion.div
                className={`${cardClasses} flex flex-col items-center justify-center text-center rounded-sm md:h-40`}
                variants={statCardVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <h3 className="text-4xl font-bold mb-2.5 text-[var(--color-accent-secondary)]">
                  <ClientCountUp
                    end={stat.value as number}
                    duration={2.5}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix || ""}
                  />
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  {stat.label}
                </p>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};
