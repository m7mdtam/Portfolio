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
import { useTheme } from "@/providers/theme-provider";

const LandingPage = () => {
  const { theme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const squareProps = isDark
    ? {
        borderColor: "#1e2247",
        hoverFillColor: "#1a1e40",
        gradientColor: "#060010",
      }
    : {
        borderColor: "#c2c6e0",
        hoverFillColor: "#dddff4",
        gradientColor: "#eeeef8",
      };

  return (
    <ScrollProvider>
      <div className="fixed inset-0 z-0 opacity-30 max-w-screen overflow-hidden">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          {...squareProps}
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
