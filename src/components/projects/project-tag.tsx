import ScrollReveal from "@/components/react-bits/ScrollReveal";
import type { ProjectTagProps } from "@/types/projects.types";

const ProjectTag = ({ label, delay = 0 }: ProjectTagProps) => (
  <ScrollReveal delay={delay} direction="up">
    <span className="inline-block border border-primary/30 bg-accent px-2 py-0.5 text-[0.68rem] font-medium text-primary whitespace-nowrap">
      {label}
    </span>
  </ScrollReveal>
);

export default ProjectTag;
