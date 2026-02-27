import { useScroll } from "@/contexts/scroll-context";

const About = () => {
  const { register } = useScroll();

  return <div ref={register("about")} className="min-h-screen w-full" />;
};

export default About;
