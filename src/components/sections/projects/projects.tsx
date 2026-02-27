import { useScroll } from "@/contexts/scroll-context";

const Projects = () => {
  const { register } = useScroll();

  return <div ref={register("projects")} className="min-h-screen w-full" />;
};

export default Projects;
