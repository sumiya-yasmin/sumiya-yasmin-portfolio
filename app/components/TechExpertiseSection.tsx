"use client";
import { techExpertiseData } from "@/data/expertiseData";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};
export default function TechExpertiseSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <motion.div
        className="max-w-6xl mx-auto"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mt-12">
          {techExpertiseData.map((skill, index) => {
            const techCardClasses =
              "bg-[var(--color-bg-level-3)] p-8 rounded-lg shadow-xl group transition duration-300 ease-in-out";
            return (
              <motion.div
                className={`${techCardClasses} flex flex-col items-center justify-center`}
                variants={itemVariants}
                key={index}
                 whileHover={{ y: -8 }} 
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-[var(--color-accent-secondary)]">
                  <skill.icon
                    size={28}
                    className="text-[var(--color-text-colorful)]"
                  />
                </div>
                <h3 className="text-[22px] font-bold mb-3 text-[var(--color-text-primary)]  transition duration-300 group-hover:text-[var(--color-accent-secondary)]">
                  {skill.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-[16px]">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
