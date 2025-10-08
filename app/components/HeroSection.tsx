"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedButton } from "./AnimatedButton";

  const containerVariants = {
  hidden: { opacity: 0 }, 
  visible: {
    opacity: 1,          
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.3,   
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 }, 
  visible: { opacity: 1, y: 0 },  
};
export const HeroSection = () => {


  return (
    <motion.div className="flex justify-between items-center min-h-[80vh]"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    >
      <div className="flex-1 max-w-lg">
        <div className="flex flex-col gap-5">
          <motion.p className="text-xl font-bold text-[var(--color-accent-secondary)]"
          variants={itemVariants}
          >Hello!</motion.p>
          <motion.p className="text-3xl font-bold"
          variants={itemVariants}
          > I'm Professional Web Designer &  
            <span className="text-[var(--color-accent-secondary)]"> Wordpress Developer</span></motion.p>
          <motion.p variants={itemVariants}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </motion.p>
        </div>
        <motion.div className="flex mt-5 gap-6" variants={itemVariants}>
          <AnimatedButton
          variant="primary"
          >Hire Me</AnimatedButton>
          <AnimatedButton
          variant="secondary"
          >Download CV</AnimatedButton>
        </motion.div>
      </div>
      <motion.div className="flex-1 h-[100vh] relative max-w-md"
      initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <Image src="/hero.png" alt={"hero"} fill className="object-cover object-center" />
      </motion.div>
    </motion.div>
  );
};
