import { useScroll } from "@/contexts/scroll-context";
import Skills from "@/components/skills/skills";
import { skillsData } from "@/data/skillsData";

const SkillsSection = () => {
  const { register } = useScroll();

  return (
    <div ref={register("skills")}>
      <Skills
        tag={skillsData.tag}
        title={skillsData.title}
        categories={skillsData.categories}
      />
    </div>
  );
};

export default SkillsSection;
