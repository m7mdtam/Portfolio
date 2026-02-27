import { useScroll } from "@/contexts/scroll-context";

const Skills = () => {
  const { register } = useScroll();

  return <div ref={register("skills")} className="min-h-screen w-full" />;
};

export default Skills;
