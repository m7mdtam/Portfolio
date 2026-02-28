import { useScroll } from "@/contexts/scroll-context";
import { Skills } from "@/components/skills";
import { skillsData } from "@/data";

const SkillsSection = () => {
  const { register } = useScroll();

  return (
    <div ref={register("skills")}>
      <Skills {...skillsData} />
    </div>
  );
};

export default SkillsSection;
