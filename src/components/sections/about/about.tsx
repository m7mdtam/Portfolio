import { useScroll } from "@/contexts/scroll-context";
import About from "@/components/about/About";
import { aboutData } from "@/data/aboutData";

const AboutSection = () => {
  const { register } = useScroll();

  return (
    <div ref={register("about")}>
      <About data={aboutData} />
    </div>
  );
};

export default AboutSection;
