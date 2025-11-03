"use client";
import { techExpertiseData } from "@/data/expertiseData";
import { motion, Variants } from "framer-motion";
import { Logos } from "./Logos";
import Image from "next/image";

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

export default function ExpertiseCard() {
  return (
    <div className="flex gap-6 items-center justify-center flex-wrap">
      {techExpertiseData.map((skill, index) => {
        const IconComponent = skill.icon;
        const cardClasses = "bg-[var(--color-bg-level-4)]";
        
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`${cardClasses} w-lg flex justify-center items-center p-6 md:p-8 rounded-xl shadow-2xl transition duration-300 hover:shadow-teal-500/30`}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center mb-6">
                {IconComponent && (
                  <IconComponent size={24} className="text-teal-400 mr-3" />
                )}
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-4 items-center">
                {skill.techLogos.map((logo) => {
                  const LogoComponent = Logos[logo.componentKey];

                  return (
                    <div
                      key={logo.name}
                      className="group relative flex items-center transition-transform duration-300 hover:scale-110"
                    >
                      {LogoComponent && (
                        <Image
                          src={LogoComponent}
                          alt={logo.name}
                          width={32}
                          height={32}
                          className="h-8 w-8 object-contain"
                        />
                      )}
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-gray-700 text-white px-2 py-1 rounded-md whitespace-nowrap z-10">
                        {logo.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}