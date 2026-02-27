import BlurText from "@/components/BlurText";
import ScrollReveal from "@/components/ScrollReveal";
import type { HeroContentProps } from "@/types/hero.types";

const HeroContent = ({ name, title, subtitle, intro }: HeroContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Name — BlurText word-by-word animation */}
      <BlurText
        text={name}
        animateBy="words"
        direction="top"
        delay={160}
        stepDuration={0.65}
        className="text-title font-bold tracking-tight text-foreground justify-center md:justify-start"
      />

      {/* Title */}
      <ScrollReveal delay={0.3}>
        <p className="text-h3 font-semibold" style={{ color: "var(--accent-primary)" }}>
          {title}
        </p>
      </ScrollReveal>

      {/* Subtitle */}
      <ScrollReveal delay={0.45}>
        <p className="text-body text-muted-foreground tracking-wide">{subtitle}</p>
      </ScrollReveal>

      {/* Intro */}
      <ScrollReveal delay={0.6}>
        <p className="text-body text-secondary-foreground max-w-lg leading-relaxed">{intro}</p>
      </ScrollReveal>
    </div>
  );
};

export default HeroContent;
