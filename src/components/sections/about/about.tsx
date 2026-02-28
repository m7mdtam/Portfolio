import { About } from "@/components/about";
import { useScroll } from "@/contexts/scroll-context";
import { aboutData } from "@/data";

const AboutSection = () => {
  const { register } = useScroll();

  return (
    <div ref={register("about")}>
      <About data={aboutData} />
    </div>
  );
};

export default AboutSection;
