import ScrollReveal from "@/components/ScrollReveal";
import { skillIcons } from "./skillIcons";
import type { SkillCardProps } from "@/types/skills.types";

const SkillCard = ({ name, delay = 0 }: SkillCardProps) => {
  const Icon = skillIcons[name];

  return (
    <ScrollReveal delay={delay} direction="up">
      <div className="group flex flex-col items-center justify-center gap-3 aspect-square border border-border bg-card/40 p-2 cursor-default transition-all duration-200 hover:bg-primary hover:border-primary hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
        {Icon && (
          <Icon
            size={36}
            className="text-primary transition-colors duration-200 group-hover:text-background shrink-0"
          />
        )}
        <span className="text-[0.75rem] font-semibold text-center leading-tight text-foreground transition-colors duration-200 group-hover:text-background w-full px-1">
          {name}
        </span>
      </div>
    </ScrollReveal>
  );
};

export default SkillCard;
