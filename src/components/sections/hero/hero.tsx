import { heroData } from "@/data/hero-data";
import { useScroll } from "@/contexts/scroll-context";
import Hero from "@/components/hero/hero";

const HeroSection = () => {
  const { register } = useScroll();

  return (
    <div ref={register("hero")}>
      <Hero data={heroData} />
    </div>
  );
};

export default HeroSection;
