import Squares from "@/components/Squares";
import Navbar from "@/components/common/navbar/navbar";
import Hero from "@/components/sections/hero/hero";
import About from "@/components/sections/about/about";
import Skills from "@/components/sections/skills/skills";
import Experience from "@/components/sections/experience/experience";
import Projects from "@/components/sections/projects/projects";
import ContactSection from "@/components/sections/contact/contact";
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
          hoverFillColor="#131628"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ContactSection />
      </div>
    </ScrollProvider>
  );
};

export default LandingPage;
