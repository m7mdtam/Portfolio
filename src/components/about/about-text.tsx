import { ScrollReveal } from "@/components/react-bits";
import type { AboutTextProps } from "@/types/about.types";

const AboutText = ({ tag, heading, bio }: AboutTextProps) => (
  <div className="flex flex-col gap-6 max-w-3xl">
    <ScrollReveal>
      <span className="text-sm font-mono uppercase tracking-widest text-primary">
        {tag}
      </span>
    </ScrollReveal>

    <ScrollReveal delay={0.1}>
      <h2 className="text-h1 font-bold text-foreground">{heading}</h2>
    </ScrollReveal>

    <ScrollReveal delay={0.2}>
      <div className="w-10 h-1 bg-primary" />
    </ScrollReveal>

    {bio.map((paragraph, i) => (
      <ScrollReveal key={i} delay={0.25 + i * 0.1}>
        <p className="text-body leading-relaxed text-text-secondary">
          {paragraph}
        </p>
      </ScrollReveal>
    ))}
  </div>
);

export default AboutText;
