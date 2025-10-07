import Image from "next/image";
import { AnimatedButton } from "./AnimatedButton";
export const HeroSection = () => {

  return (
    <div className="flex justify-between items-center min-h-[80vh]">
      <div className="flex-1 max-w-lg">
        <div className="flex flex-col gap-5">
          <p className="text-xl font-bold text-[var(--color-accent-secondary)]">Hello!</p>
          <p className="text-3xl font-bold"> I'm Professional Web Designer &  
            <span className="text-[var(--color-accent-secondary)]"> Wordpress Developer</span></p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="flex mt-5 gap-6">
          <AnimatedButton
          variant="primary"
          >Hire Me</AnimatedButton>
          <AnimatedButton
          variant="secondary"
          >Download CV</AnimatedButton>
        </div>
      </div>
      <div className="flex-1 h-[100vh] relative max-w-md">
        <Image src="/hero.png" alt={"hero"} fill className="object-cover object-center" />
      </div>
    </div>
  );
};
