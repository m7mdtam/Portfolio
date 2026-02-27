import { useScroll } from "@/contexts/scroll-context";

const Skills = () => {
  const { register } = useScroll();

  return (
    <div ref={register("skills")} className="bg-background-surface min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-h1 font-bold text-foreground">Skills</h2>
      </div>
    </div>
  );
};

export default Skills;
