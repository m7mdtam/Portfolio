import { Squares } from "@/components";
import { Navbar } from "@/components/common";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
} from "@/components/sections";
import { ScrollProvider } from "@/contexts/scroll-context";

const LandingPage = () => {
  return (
    <ScrollProvider>
      <div className="fixed inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="#1a1e38"
          squareSize={40}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </ScrollProvider>
  );
};

export default LandingPage;
