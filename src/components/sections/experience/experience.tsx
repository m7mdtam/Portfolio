import { useScroll } from "@/contexts/scroll-context";
import Experience from "@/components/experience/Experience";
import { experienceData } from "@/data/experienceData";

const ExperienceSection = () => {
  const { register } = useScroll();

  return (
    <div ref={register("experience")}>
      <Experience
        tag={experienceData.tag}
        title={experienceData.title}
        items={experienceData.items}
      />
    </div>
  );
};

export default ExperienceSection;
