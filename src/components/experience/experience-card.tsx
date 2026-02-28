import type { ExperienceCardProps } from "@/types/experience.types";

const ExperienceCard = ({ item }: ExperienceCardProps) => (
  <div className="relative border border-border bg-card/60 p-6 overflow-hidden transition-all duration-200 hover:bg-card hover:shadow-lg group">
    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary transition-all duration-200 group-hover:w-1" />

    <h3 className="text-h4 font-title font-bold text-foreground leading-tight mb-2">
      {item.title}
    </h3>

    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3">
      {item.companyUrl ? (
        <a
          href={item.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-title font-semibold hover:underline underline-offset-2"
        >
          {item.company}
        </a>
      ) : (
        <span className="text-primary font-title font-semibold">
          {item.company}
        </span>
      )}
      <span className="text-border">·</span>
      <span className="text-text-muted font-title text-sm">
        {item.location}
      </span>
    </div>

    <div className="flex flex-wrap items-center gap-2 mb-4">
      <span className="border border-primary/40 bg-accent px-2 py-0.5 text-xs font-semibold text-primary uppercase tracking-wide">
        {item.type}
      </span>
      <span className="text-text-muted text-xs">{item.period}</span>
      <span className="text-border text-xs">·</span>
      <span className="text-text-muted text-xs">{item.duration}</span>
    </div>

    <div className="h-px bg-border mb-4" />

    <ul className="flex flex-col gap-2">
      {item.responsibilities.map((r, i) => (
        <li
          key={i}
          className="flex gap-2.5 text-sm text-text-secondary leading-relaxed"
        >
          <span className="text-primary mt-0.5 shrink-0 text-xs">▸</span>
          <span>{r}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;
