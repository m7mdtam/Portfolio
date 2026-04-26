export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface SkillsData {
  tag: string;
  title: string;
  categories: SkillCategory[];
}

export interface SkillCardProps {
  name: string;
}

export interface SkillCategoryProps {
  label: string;
  skills: string[];
}

export type SkillsProps = SkillsData;
