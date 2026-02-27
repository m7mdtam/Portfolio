import { useScroll } from "@/contexts/scroll-context";

const About = () => {
  const { register } = useScroll();

  return (
    <div ref={register("about")} className="bg-background min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-h1 font-bold text-foreground">About</h2>
      </div>
    </div>
  );
};

export default About;
