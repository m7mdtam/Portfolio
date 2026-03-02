import { BlurText, ScrollReveal } from "@/components/react-bits";
import type { HeroContentProps } from "@/types/hero.types";

const HeroContent = ({ name, title, subtitle, intro }: HeroContentProps) => (
  <div className="flex flex-col gap-4">
    <BlurText
      text={name}
      animateBy="words"
      direction="top"
      delay={160}
      stepDuration={0.65}
      className="text-title font-title  font-bold tracking-tight text-foreground justify-center md:justify-start"
    />

    <ScrollReveal delay={0.3}>
      <div>
        <p className="text-h3 font-title font-semibold text-primary">{title}</p>
        <p className="text-body font-title text-text-secondary tracking-wide">
          {subtitle}
        </p>
        <p className="text-body text-text-secondary max-w-lg leading-relaxed">
          {intro}
        </p>
      </div>
    </ScrollReveal>
  </div>
);

export default HeroContent;
