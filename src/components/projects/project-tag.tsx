import type { ProjectTagProps } from "@/types/projects.types";

const ProjectTag = ({ label }: ProjectTagProps) => (
  <span className="inline-block border border-primary/30 bg-accent px-2 py-0.5 text-[0.68rem] font-title font-medium text-foreground/80 whitespace-nowrap">
    {label}
  </span>
);

export default ProjectTag;
