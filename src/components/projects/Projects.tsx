import { ScrollReveal } from "@/components/react-bits";
import { ProjectCard } from ".";
import type { ProjectsProps } from "@/types/projects.types";

const Projects = ({ tag, title, subtitle, items }: ProjectsProps) => {
  const featured = items.find((p) => p.featured);
  const rest = items.filter((p) => !p.featured);

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20">
      <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-border" />

      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <ScrollReveal>
            <span className="text-sm font-title uppercase tracking-widest text-primary">
              {tag}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-3">
              <h2 className="text-h1 font-title font-bold text-foreground">
                {title}
              </h2>
              <div className="w-3 h-3 bg-primary shrink-0" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="w-10 h-1 bg-primary" />
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="text-sm text-text-muted italic max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-6">
          {featured && <ProjectCard item={featured} index={0} />}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {rest.map((item, i) => (
                <ProjectCard
                  key={item.name}
                  item={item}
                  index={i + (featured ? 1 : 0)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
