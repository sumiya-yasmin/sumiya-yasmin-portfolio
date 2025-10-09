import  AboutSection  from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { MainContent } from "./components/MainContent";
import Navbar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";
import TechExpertiseSection from "./components/TechExpertiseSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MainContent>
        <HeroSection />
        <AboutSection />
        <TechExpertiseSection />
        <ExperienceSection />
        <ProjectSection />
      </MainContent>
    </>
  );
}
