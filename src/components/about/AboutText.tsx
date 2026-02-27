import ScrollReveal from "@/components/ScrollReveal";
import type { AboutTextProps } from "@/types/about.types";

const AboutText = ({ tag, heading, bio }: AboutTextProps) => {
  return (
    <div className="flex flex-col gap-6 max-w-3xl">

      {/* Section tag */}
      <ScrollReveal>
        <span
          className="text-sm font-mono uppercase tracking-widest"
          style={{ color: "var(--accent-primary)" }}
        >
          {tag}
        </span>
      </ScrollReveal>

      {/* Heading */}
      <ScrollReveal delay={0.1}>
        <h2 className="text-h1 font-bold" style={{ color: "var(--text-primary)" }}>
          {heading}
        </h2>
      </ScrollReveal>

      {/* Accent divider — square/sharp, matches Squares theme */}
      <ScrollReveal delay={0.2}>
        <div
          className="w-10 h-1"
          style={{ background: "var(--accent-primary)" }}
        />
      </ScrollReveal>

      {/* Bio paragraphs */}
      {bio.map((paragraph, i) => (
        <ScrollReveal key={i} delay={0.25 + i * 0.1}>
          <p
            className="text-body leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {paragraph}
          </p>
        </ScrollReveal>
      ))}

    </div>
  );
};

export default AboutText;
