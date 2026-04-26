import type { SkillCategoryProps } from "@/types/skills.types";
import SkillCard from "./skill-card";

const SkillCategory = ({ label, skills }: SkillCategoryProps) => (
  <div className="flex flex-col gap-5">
    <div className="flex items-center gap-3">
      <div className="w-2.5 h-2.5 bg-primary shrink-0" />
      <span className="text-sm font-title font-semibold uppercase tracking-widest text-foreground">
        {label}
      </span>
    </div>

    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2.5">
      {skills.map((skill) => (
        <SkillCard key={skill} name={skill} />
      ))}
    </div>
  </div>
);

export default SkillCategory;
