"use client";
import { motion, Variants } from "framer-motion";
import ExpertiseCard from "./ExpertiseCard";


const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export default function TechExpertiseSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <motion.div
        className="max-w-6xl mx-auto items-center justify-center flex flex-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-[var(--color-text-secondary)]">
          My Technical Expertise
        </h2>
        <div className="h-0.5 w-26 bg-[var(--color-accent-secondary)] mx-auto mb-4" />
        <p className="text-[16px] mt-4 max-w-2xl mx-auto font-normal text-center text-[var(--color-text-secondary)]">
          I focus on developing scalable systems through strong fundamental
          knowledge and hands-on experience with these key technologies and
          tools
        </p>
        <div className="mt-6 py-4">

        <ExpertiseCard />
        </div>
        
      </motion.div>
    </section>
  );
}
