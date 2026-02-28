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
      className="text-title font-bold tracking-tight text-foreground justify-center md:justify-start"
    />

    <ScrollReveal delay={0.3}>
      <p className="text-h3 font-semibold text-primary">{title}</p>
    </ScrollReveal>

    <ScrollReveal delay={0.45}>
      <p className="text-body text-muted-foreground tracking-wide">
        {subtitle}
      </p>
    </ScrollReveal>

    <ScrollReveal delay={0.6}>
      <p className="text-body text-text-secondary max-w-lg leading-relaxed">
        {intro}
      </p>
    </ScrollReveal>
  </div>
);

export default HeroContent;
