export type ProjectStatus = "In Production" | "In Progress" | "Completed";

export interface ProjectItem {
  name: string;
  type: string;
  status: ProjectStatus;
  liveUrl?: string;
  ownershipNote?: string;
  description: string;
  role: string;
  tech: string[];
  featured?: boolean;
  previewImage?: string;
}

export interface ProjectsData {
  tag: string;
  title: string;
  subtitle: string;
  items: ProjectItem[];
}

export interface ProjectTagProps {
  label: string;
  delay?: number;
}

export interface ProjectCardProps {
  item: ProjectItem;
  index: number;
}

export interface ProjectsProps {
  tag: string;
  title: string;
  subtitle: string;
  items: ProjectItem[];
}
