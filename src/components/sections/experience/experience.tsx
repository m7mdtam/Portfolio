import { useScroll } from "@/contexts/scroll-context";

const Experience = () => {
  const { register } = useScroll();

  return <div ref={register("experience")} className="min-h-screen w-full" />;
};

export default Experience;
