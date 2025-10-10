"use client";
import { socialLinks, stats } from "@/data/aboutData";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";
import { ClientCountUp } from "./ClientCountUp";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
export default function AboutSection() {
  const aboutBG = "bg-[var(--color-bg-level-2)]";
  return (
    <section id="about" className={`${aboutBG} py-24 px-6`}>
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="text-xl font-medium text-[var(--color-accent-secondary)] mb-4"
          variants={itemVariants}
        >
          About me
        </motion.p>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
          <motion.div className="lg:w-3/5" variants={itemVariants}>
            <motion.h2
              className="text-2xl font-bold mb-6 leading-tight text-[var(--color-text-secondary)]"
              variants={itemVariants}
            >
              Hello! I&apos;m{" "}
              <span className="text-[var(--color-accent-secondary)]">
                Sumiya Yasmin
              </span>
              . I&apos;m a Professional{" "}
              <span className="text-[var(--color-accent-secondary)]">
                Fullstack Developer
              </span>{" "}
              & Aspiring Software Engineer.
            </motion.h2>
            <motion.p
              className="mb-6 text-[16px] leading-normal text-[var(--color-text-secondary)]"
              variants={itemVariants}
            >
              As a dedicated Fullstack Developer, I specialize in building
              robust, high-performance, and scalable web applications using the
              MERN stack -MongoDB, Express, React, Node.js and modern frameworks
              like Next.js. I am passionate about writing clean, maintainable
              code and solving complex technical challenges.
            </motion.p>
            <motion.p
              className="mb-8 text-[16px] leading-normal text-[var(--color-text-secondary)]"
              variants={itemVariants}
            >
              My goal is to transition into a Software Engineering role where I
              can contribute to large-scale systems and drive architectural
              improvements. I am constantly upskilling to ensure my work adheres
              to modern industry standards.
            </motion.p>

            <motion.div
              className="flex items-center space-x-4 mb-10"
              variants={itemVariants}
            >
              <p className="text-xl font-medium text-[var(--color-text-secondary)]">
                Follow Me:
              </p>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const iconButtonClasses =
                    "inline-flex justify-center items-center p-2 rounded-full bg-[var(--color-accent-tertiary)] text-[var(--color-text-primary)] hover:bg-white/60 ";
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full ${iconButtonClasses}`}
                      variants={itemVariants}
                    >
                      <social.icon size={16} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
            <motion.div className="flex mt-5 gap-6" variants={itemVariants}>
              <AnimatedButton variant="primary">Hire Me</AnimatedButton>
              <AnimatedButton variant="secondary">Download CV</AnimatedButton>
            </motion.div>
          </motion.div>
          <div className="w-full lg:w-2/5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const cardClasses = "bg-[var(--color-bg-level-4)] p-6";
              return (
                <motion.div
                  className={`${cardClasses} flex flex-col items-center justify-center text-center rounded-sm md:h-40`}
                  key={index}
                  variants={itemVariants}
                >
                  <h3 className="text-4xl font-bold mb-2.5 text-[var(--color-text-primary)]">
                   <ClientCountUp 
                      end={stat.value as number} 
                      duration={2.5}
                      decimals={stat.decimals || 0} 
                      suffix={stat.suffix || ''} 
                    />
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
