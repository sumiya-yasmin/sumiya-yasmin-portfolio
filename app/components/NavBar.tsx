"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "./ThemeSwitcher";
const navItems = [
    { name: "Home", id: "" }, 
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   const navTextColorClass = "text-[var(--color-text-navbar)]";
  const accentColorClass = "hover:text-[var(--color-text-primary)]";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--background)] backdrop-blur-lg shadow-sm border-b border-[var(--foreground)]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl px-4 py-4 mx-auto ">
        <div className="flex justify-between items-baseline">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-black text-3xl"
          >
            Sumiya Yasmin
          </motion.div>

          <div className={`hidden md:flex space-x-8 items-center ${navTextColorClass}`}>
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                 href={item.id === "" ? "/" : `#${item.id}`} 
                className={`${accentColorClass} transition-colors cursor-pointer uppercase`}
              >
                {item.name}
              </motion.a>
            ))}
             <ThemeSwitcher />
          </div>
           
        </div>
      </div>
    </motion.nav>
  );
}