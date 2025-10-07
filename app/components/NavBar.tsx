"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

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
          ? "bg-[var(--background)]/80 backdrop-blur-lg shadow-sm border-b border-[var(--foreground)]/20"
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
            {["Home","About","Services","Resume", "Portfolio", "Blog", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                href={`#${item.toLowerCase()}`}
                className={`${accentColorClass} transition-colors cursor-pointer uppercase`}
              >
                {item}
              </motion.a>
            ))}
             <ThemeSwitcher />
          </div>

          {/* <div className="flex space-x-4 items-center">
            {[
              { icon: Github, href: "https://github.com/sumiya-yasmin" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/sumiya-yasmin/" },
              { icon: Mail, href: "mailto:rahmansimi3996@gmail.com" },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + 0.1 * i }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-[var(--foreground)]/10 rounded-lg transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div> */}
           
        </div>
      </div>
    </motion.nav>
  );
}