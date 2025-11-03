'use client'
import { CertificationsSection } from "./components/CertificateSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import { FooterSection } from "./components/FooterSection";
import { HeroSection } from "./components/HeroSection";
import { LearningJourneySection } from "./components/LearningJourneySection";
import { MainContent } from "./components/MainContent";
import Navbar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";
import TechExpertiseSection from "./components/TechExpertiseSection";
import ContributionGraph from "./components/GithubContributionGraph";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MainContent>
        <HeroSection />
        <ContributionGraph username="sumiya-yasmin"/>
        <TechExpertiseSection />
        <ExperienceSection />
        <ProjectSection />
        <EducationSection />
        {/* <LearningJourneySection /> */}
        <CertificationsSection />
        <ContactSection />
      </MainContent>
        <FooterSection/>
    </>
  );
}
