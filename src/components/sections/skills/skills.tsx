import { useScroll } from "@/contexts/scroll-context";
import Skills from "@/components/skills/skills";
import { skillsData } from "@/data/skills-data";

const SkillsSection = () => {
  const { register } = useScroll();

  return (
    <div ref={register("skills")}>
      <Skills {...skillsData} />
    </div>
  );
};

export default SkillsSection;
