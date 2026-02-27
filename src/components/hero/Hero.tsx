import { useScroll } from "@/contexts/scroll-context";
import type { HeroProps } from "@/types/hero.types";
import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import ScrollReveal from "@/components/ScrollReveal";

const Hero = ({ data }: HeroProps) => {
  const { scrollTo } = useScroll();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 pt-24 pb-12 md:px-12 lg:px-20">
      <div className="w-full max-w-5xl flex flex-col items-center gap-10 md:flex-row md:gap-16 md:items-center">
        <ScrollReveal delay={0.1} direction="down" className="shrink-0 md:order-last">
          <img
            src={data.photo}
            alt={data.name}
            className="w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover object-top"
            style={{
              border: "2px solid var(--accent-primary)",
              boxShadow:
                "0 0 0 6px color-mix(in oklch, var(--accent-primary) 12%, transparent), 0 0 40px color-mix(in oklch, var(--accent-primary) 20%, transparent)",
            }}
          />
        </ScrollReveal>

        <div className="flex flex-col items-center text-center gap-6 md:items-start md:text-left md:order-first flex-1 min-w-0">
          <HeroContent
            name={data.name}
            title={data.title}
            subtitle={data.subtitle}
            intro={data.intro}
          />
          <HeroActions
            cta={data.cta}
            socials={data.socials}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onCtaClick={(section: string) => scrollTo(section as any)}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
