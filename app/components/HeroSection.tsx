"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";
import { ClientCountUp } from "./ClientCountUp";
import { socialLinks, stats } from "@/data/heroData";
import Link from "next/link";
import { useContributions } from "@/app/hooks/useContributions";
const MY_GITHUB_USERNAME = "sumiya-yasmin";
const CURRENT_YEAR = new Date().getFullYear();

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
  const { data, isLoading } = useContributions(
    MY_GITHUB_USERNAME,
    CURRENT_YEAR
  );

  const totalContributions = data ? data.totalContributions : 0;

  const dynamicStats = stats.map((stat) => {
    if (stat.label.includes("Commits")) {
      return {
        ...stat,
        value: isLoading ? "..." : totalContributions,
        suffix: isLoading ? "" : "+",
        link: `https://github.com/${MY_GITHUB_USERNAME}?tab=overview&from=${CURRENT_YEAR}-01-01&to=${CURRENT_YEAR}-12-31`,
      };
    }
    return stat;
  });
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
            Full Stack Developer | Software Engineer
          </motion.p>
          <motion.p variants={itemVariants}>
            I build robust, high-performance web applications and scalable
            solutions, specializing in the MERN stack and modern frameworks like
            Next.js. Driven by a passion for clean, maintainable code, I focus
            on architectural improvements and delivering impactful, large-scale
            systems.
          </motion.p>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          {socialLinks.map((social, index) => {
            const iconButtonClasses =
              "w-9 h-9 flex justify-center items-center rounded-full bg-[var(--color-bg-level-4)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent-secondary)] hover:text-white transition-all duration-300 ease-in-out";
            return (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 p-3 rounded-full ${iconButtonClasses}`}
                variants={itemVariants}
              >
                <social.icon size={20} />
              </motion.a>
            );
          })}
        </div>
        <motion.div className="flex mt-5 gap-6" variants={itemVariants}>
          <Link href="#projects">
            <AnimatedButton variant="primary">View Projects</AnimatedButton>
          </Link>
          <a href="/sumiya_yasmin_cv.pdf" download target="_blank">
            <AnimatedButton variant="secondary">Download CV</AnimatedButton>
          </a>
        </motion.div>
      </div>

      <div className="w-full lg:w-2/5 grid grid-cols-1 md:grid-cols-2 gap-6">
        {dynamicStats.map((stat, index) => {
          const cardClasses =
            "bg-[var(--color-bg-level-4)] p-6 shadow-2xl transition duration-300 hover:shadow-teal-500/30";
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
