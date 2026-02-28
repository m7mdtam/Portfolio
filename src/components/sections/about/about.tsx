import About from "@/components/about/about";
import { useScroll } from "@/contexts/scroll-context";
import { aboutData } from "@/data/about-data";

const AboutSection = () => {
  const { register } = useScroll();

  return (
    <div ref={register("about")}>
      <About data={aboutData} />
    </div>
  );
};

export default AboutSection;
