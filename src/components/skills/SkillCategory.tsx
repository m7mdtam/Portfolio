import ScrollReveal from "@/components/ScrollReveal";
import SkillCard from "./SkillCard";
import type { SkillCategoryProps } from "@/types/skills.types";

const SkillCategory = ({ label, skills, categoryDelay = 0 }: SkillCategoryProps) => (
  <div className="flex flex-col gap-5">
    <ScrollReveal delay={categoryDelay} direction="up">
      <div className="flex items-center gap-3">
        <div className="w-2.5 h-2.5 bg-primary shrink-0" />
        <span className="text-sm font-semibold uppercase tracking-widest text-foreground">
          {label}
        </span>
      </div>
    </ScrollReveal>

    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2.5">
      {skills.map((skill, i) => (
        <SkillCard key={skill} name={skill} delay={categoryDelay + 0.08 + i * 0.05} />
      ))}
    </div>
  </div>
);

export default SkillCategory;
