import { ScrollReveal } from "@/components/react-bits";
import { skillIcons } from "./skill-icons";
import { skillColors } from "./skill-colors";
import type { SkillCardProps } from "@/types/skills.types";

// Icons that have their color built-in and shouldn't be overridden
const ICONS_WITH_BUILT_IN_COLORS = new Set(["Claude AI"]);

const SkillCard = ({ name }: SkillCardProps) => {
  const Icon = skillIcons[name];
  const color = skillColors[name] || "#10b981"; // Green fallback
  const hasBuiltInColor = ICONS_WITH_BUILT_IN_COLORS.has(name);

  return (
    <ScrollReveal direction="up" delay={0}>
      <div className="group flex flex-col items-center justify-center gap-3 aspect-square border border-border bg-card/40 p-2 cursor-default transition-all duration-200 hover:bg-primary hover:border-primary hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
        {Icon && (
          <Icon
            size={36}
            className={`transition-colors duration-200 shrink-0 ${
              hasBuiltInColor ? "" : "group-hover:text-background"
            }`}
            style={hasBuiltInColor ? {} : { color }}
          />
        )}
        <span className="text-[0.75rem] font-title font-semibold text-center leading-tight text-foreground transition-colors duration-200 group-hover:text-background w-full px-1">
          {name}
        </span>
      </div>
    </ScrollReveal>
  );
};

export default SkillCard;
