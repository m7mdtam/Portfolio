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
  delay?: number;
}

export interface SkillCategoryProps {
  label: string;
  skills: string[];
  categoryDelay?: number;
}

export interface SkillsProps {
  tag: string;
  title: string;
  categories: SkillCategory[];
}
