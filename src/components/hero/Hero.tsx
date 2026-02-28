import { useScroll } from "@/contexts/scroll-context";
import type { HeroProps } from "@/types/hero.types";
import { ScrollReveal } from "@/components/react-bits";
import { HeroContent, HeroActions } from ".";

const Hero = ({ data }: HeroProps) => {
  const { scrollTo } = useScroll();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 pt-24 pb-12 md:px-12 lg:px-20 overflow-hidden">
      <div className="w-full max-w-5xl flex flex-col items-center gap-10 md:flex-row md:gap-16 md:items-center">
        <div className="flex flex-col items-center text-center gap-6 md:items-start md:text-left order-last md:order-first flex-1 min-w-0">
          <HeroContent
            name={data.name}
            title={data.title}
            subtitle={data.subtitle}
            intro={data.intro}
          />
          <HeroActions
            cta={data.cta}
            socials={data.socials}
            onCtaClick={scrollTo}
          />
        </div>

        <ScrollReveal delay={0.2} direction="up" className="shrink-0">
          <div className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-primary">
            <img
              src={data.photo}
              alt={data.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
