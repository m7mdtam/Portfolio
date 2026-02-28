import { useScroll } from "@/contexts/scroll-context";
import Projects from "@/components/projects/Projects";
import { projectsData } from "@/data/projectsData";

const ProjectsSection = () => {
  const { register } = useScroll();

  return (
    <div ref={register("projects")}>
      <Projects
        tag={projectsData.tag}
        title={projectsData.title}
        subtitle={projectsData.subtitle}
        items={projectsData.items}
      />
    </div>
  );
};

export default ProjectsSection;
