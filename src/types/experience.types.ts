export interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string;
  period: string;
  duration: string;
  responsibilities: string[];
}

export interface ExperienceData {
  tag: string;
  title: string;
  items: ExperienceItem[];
}

export interface ExperienceCardProps {
  item: ExperienceItem;
}

export interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export type ExperienceProps = ExperienceData;
