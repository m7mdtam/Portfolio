import { BlurFade } from "@/components/react-bits";
import { ProjectCard } from ".";
import type { ProjectsProps } from "@/types/projects.types";

const Projects = ({ tag, title, subtitle, items }: ProjectsProps) => {
  const featured = items.filter((p) => p.featured);
  const rest = items.filter((p) => !p.featured);

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-border" />

      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <BlurFade delay={0}>
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
            <p className="text-sm text-text-muted italic max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        </BlurFade>

        <div className="flex flex-col gap-6">
          {featured.length > 0 && (
            <div className="grid grid-cols-1 gap-6">
              {featured.map((item, i) => (
                <BlurFade key={item.name} delay={i * 0.1} className="h-full">
                  <ProjectCard item={item} index={i} />
                </BlurFade>
              ))}
            </div>
          )}

          {rest.length > 0 && (
            <div className={`grid gap-6 ${rest.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
              {rest.map((item, i) => (
                <BlurFade key={item.name} delay={i * 0.1} className="h-full">
                  <ProjectCard
                    item={item}
                    index={i + featured.length}
                  />
                </BlurFade>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
