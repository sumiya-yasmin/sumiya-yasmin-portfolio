"use client";
import { motion, Variants } from "framer-motion";
import { formatTextWithBolds } from "./FormatTextBold";
import { educationData } from "@/data/educationData";
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function EducationSection() {
  const educationBG = "bg-[var(--color-bg-level-2)]";
  return (
    <section id="education" className={`px-6 py-24 ${educationBG}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-[var(--color-text-secondary)]">
          My Education
        </h2>
        <div className="h-0.5 w-26 bg-[var(--color-accent-secondary)] mx-auto mb-4" />
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {educationData.map((item, index) => {
            const educationCardClasses =
              "p-8 border-gray-700 border-t-[0.2px] border-b-2 border-l-1 border-r-1 rounded-lg shadow-xl shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-shadow duration-300";
            return (
              <motion.div
                className={`${educationCardClasses} flex flex-col items-start justify-center`}
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
              >
                <p className="text-sm px-2 py-1 rounded-xl font-semibold mb-2 bg-[var(--color-accent-secondary)]">
                  {item.date}
                </p>
                <h3 className="text-[22px] font-bold mb-2 text-[var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="text-sm font-medium mb-4 text-[var(--color-text-secondary)]">
                  {item.subtitle}
                </p>
                <p className="text-sm font-medium mb-4 text-[var(--color-text-secondary)]">
                   {formatTextWithBolds(item.grade)} 
                </p>
                <ul className="list-disc ml-5 text-sm space-y-2 text-[var(--color-text-secondary)]">
                  {item.descriptionPoints.map((point, i) => (
                    <li key={i}>{formatTextWithBolds(point)}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
