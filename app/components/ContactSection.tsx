"use client";

import { AnimatedButton } from "./AnimatedButton";

export default function ContactSection() {
  const contactBG = "bg-[var(--color-bg-level-2)]";
  const inputBg = "bg-[var(--color-bg-level-1)]";
  const inputBorder = "border-[var(--color-bg-input-border)]";
  return (
    <section id="contact" className={`px-6 py-24 ${contactBG}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-[var(--color-text-secondary)]">
          Contact Me
        </h2>
        <div className="h-0.5 w-26 bg-[var(--color-accent-secondary)] mx-auto mb-4" />
        <p className="text-[16px] text-center mb-12 max-w-2xl mx-auto font-normal text-[var(--color-text-secondary)]">
          Feel free to reach out for collaboration, project inquiries, or just a
          quick chat!
        </p>
        <div className="max-w-3xl mx-auto">
          <form className="space-y-5">
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className={`w-full p-3.5 ${inputBg} border ${inputBorder} focus:ring-2 placeholder-[var(--color-text-input)] focus:ring-[var(--color-text-input)] focus:border-transparent transition-all`}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className={`w-full p-3.5 ${inputBg} border ${inputBorder} focus:ring-2 placeholder-[var(--color-text-input)] focus:ring-[var(--color-text-input)] focus:border-transparent transition-all`}
              />
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Your Subject"
                required
                className={`w-full p-3.5 ${inputBg} border ${inputBorder} focus:ring-2 placeholder-[var(--color-text-input)] focus:ring-[var(--color-text-input)] focus:border-transparent transition-all`}
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                required
                rows={6}
                className={`w-full p-3.5 ${inputBg} border ${inputBorder} focus:ring-2 placeholder-[var(--color-text-input)] focus:ring-[var(--color-text-input)] focus:border-transparent transition-all`}
              />
            </div>
            <div className="flex justify-start">
              <AnimatedButton
                variant="primary"
                type="submit"
                className="px-10 py-3 tracking-[2px] leading-[22.5px] font-semibold"
              >
                SUBMIT
              </AnimatedButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
