import ScrollReveal from "@/components/react-bits/ScrollReveal";
import ExperienceTimeline from "./experience-timeline";
import type { ExperienceProps } from "@/types/experience.types";

const Experience = ({ tag, title, items }: ExperienceProps) => (
  <section className="relative w-full py-24 px-6 md:px-12 lg:px-20">
    <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-border" />

    <div className="max-w-5xl mx-auto flex flex-col gap-14">
      <div className="flex flex-col gap-4">
        <ScrollReveal>
          <span className="text-sm font-mono uppercase tracking-widest text-primary">
            {tag}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-3">
            <h2 className="text-h1 font-bold text-foreground">{title}</h2>
            <div className="w-3 h-3 bg-primary shrink-0" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="w-10 h-1 bg-primary" />
        </ScrollReveal>
      </div>

      <ExperienceTimeline items={items} />
    </div>
  </section>
);

export default Experience;
