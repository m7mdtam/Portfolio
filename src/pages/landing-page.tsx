import Navbar from "@/components/common/navbar/navbar";
import Hero from "@/components/sections/hero/hero";
import About from "@/components/sections/about/about";
import Skills from "@/components/sections/skills/skills";
import Projects from "@/components/sections/projects/projects";
import Contact from "@/components/sections/contact/contact";
import { ScrollProvider } from "@/contexts/scroll-context";

const LandingPage = () => {
  return (
    <ScrollProvider>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </ScrollProvider>
  );
};

export default LandingPage;
