import { ScrollReveal } from "@/components/react-bits";
import { SkillCategory } from ".";
import type { SkillsProps } from "@/types/skills.types";

const Skills = ({ tag, title, categories }: SkillsProps) => (
  <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
    <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-border" />

    <div className="max-w-5xl mx-auto flex flex-col gap-14">
      <ScrollReveal>
        <div className="flex flex-col gap-4">
          <span className="text-sm font-title uppercase tracking-widest text-primary">
            {tag}
          </span>
          <div className="flex items-center gap-3">
            <h2 className="text-h1 font-title font-bold text-foreground">
              {title}
            </h2>
            <div className="w-3 h-3 bg-primary shrink-0" />
          </div>
          <div className="w-10 h-1 bg-primary" />
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-10">
        {categories.map((cat, i) => (
          <div key={cat.label}>
            <SkillCategory
              label={cat.label}
              skills={cat.skills}
              categoryDelay={0}
            />
            {i < categories.length - 1 && (
              <div className="mt-10 h-px bg-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
