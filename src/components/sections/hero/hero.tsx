import Hero from "@/components/hero/Hero";
import { heroData } from "@/data/heroData";
import { useScroll } from "@/contexts/scroll-context";

const HeroSection = () => {
  const { register } = useScroll();

  return (
    <div ref={register("hero")}>
      <Hero data={heroData} />
    </div>
  );
};

export default HeroSection;
