"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/data/aboutData";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const FooterSection = () => {
  const accentColor = "var(--color-accent-secondary)";
  const footerTextColor = "text-[var(--color-text-secondary)]";
  const linkHoverColor = "hover:text-[var(--color-accent-secondary)]";

  return (
    <section>
    <footer className={`py-12 px-6`}>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        <div>
          <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 border-b border-[var(--color-accent-secondary)] pb-2">
            Navigation
          </h4>
          <ul className={`space-y-3 text-sm ${footerTextColor}`}>
            <li>
              <Link href="/" className={linkHoverColor}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#skills" className={linkHoverColor}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className={linkHoverColor}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className={linkHoverColor}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 border-b border-[var(--color-accent-secondary)] pb-2">
            Connect
          </h4>
          <div className={`space-y-3 text-sm ${footerTextColor}`}>
            <p className="flex items-center space-x-2">
              <MapPin size={16} style={{ color: accentColor }} />
              <span>Dhaka, Bangladesh</span>
            </p>
            <p className="flex items-center space-x-2">
              <Phone size={16} style={{ color: accentColor }} />
              <span>Phone: +8801787738782</span>
            </p>
            <p className="flex items-center space-x-2">
              <Mail size={16} style={{ color: accentColor }} />
              <span>Email: rahmansimi3996@gmail.com</span>
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            {socialLinks.map((social, index) => {
              const iconButtonClasses =
                "inline-flex justify-center items-center p-2 rounded-full bg-gray-700 text-[var(--color-text-primary)] hover:bg-[var(--color-accent-secondary)] ";
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
        </div>
      </div>
    </footer>
    <div className=" bg-[var(--color-bg-level-2)] mx-auto py-8 mt-6 flex justify-center text-center">
        <p className={`text-sm ${footerTextColor}`}>
          &copy; {new Date().getFullYear()} Sumiya Yasmin. Built with Next.js
          and Tailwind CSS.
          <span className="ml-2 text-gray-300">
            Inspired by a professional portfolio layout.
        </span>
        </p>
      </div>
</section>
  );
};
