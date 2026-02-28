import { useScroll } from "@/contexts/scroll-context";
import { Experience } from "@/components/experience";
import { experienceData } from "@/data";

const ExperienceSection = () => {
  const { register } = useScroll();

  return (
    <div ref={register("experience")}>
      <Experience {...experienceData} />
    </div>
  );
};

export default ExperienceSection;
