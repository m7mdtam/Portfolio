import { ScrollReveal } from "@/components/react-bits";
import type { AboutTextProps } from "@/types/about.types";

const AboutText = ({ tag, heading, bio }: AboutTextProps) => (
  <div className="flex flex-col gap-6 max-w-3xl">
    <ScrollReveal>
      <div className="flex flex-col gap-4">
        <span className="text-sm font-title uppercase tracking-widest text-primary">
          {tag}
        </span>
        <h2 className="text-h1 font-title font-bold text-foreground">
          {heading}
        </h2>
        <div className="w-10 h-1 bg-primary" />
      </div>
    </ScrollReveal>

    {bio.map((paragraph, i) => (
      <ScrollReveal key={i} delay={i * 0.08}>
        <p className="text-body leading-relaxed text-text-secondary">
          {paragraph}
        </p>
      </ScrollReveal>
    ))}
  </div>
);

export default AboutText;
