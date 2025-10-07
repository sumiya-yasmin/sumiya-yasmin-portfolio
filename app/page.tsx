import { HeroSection } from "./components/HeroSection";
import { MainContent } from "./components/MainContent";
import Navbar from "./components/NavBar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MainContent>
        <HeroSection />
      </MainContent>
    </>
  );
}
