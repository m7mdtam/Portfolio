import { useScroll } from "@/contexts/scroll-context";
import { Projects } from "@/components/projects";
import { projectsData } from "@/data";

const ProjectsSection = () => {
  const { register } = useScroll();

  return (
    <div ref={register("projects")}>
      <Projects {...projectsData} />
    </div>
  );
};

export default ProjectsSection;
