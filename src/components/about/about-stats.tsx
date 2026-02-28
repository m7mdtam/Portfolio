import { SpotlightCard, ScrollReveal } from "@/components/react-bits";
import type { AboutStatsProps } from "@/types/about.types";

const AboutStats = ({ stats }: AboutStatsProps) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {stats.map((stat, i) => (
      <ScrollReveal key={stat.label} delay={i * 0.12} direction="up">
        <SpotlightCard
          className="border border-border bg-card/80 backdrop-blur rounded-sm p-6 flex flex-col items-center justify-center text-center min-h-32 h-full"
          spotlightColor="rgba(100, 108, 255, 0.18)"
        >
          <span className="text-h1 font-title font-bold leading-none text-primary">
            {stat.value}
          </span>
          <span className="text-sm font-title mt-3 leading-snug text-text-secondary">
            {stat.label}
          </span>
        </SpotlightCard>
      </ScrollReveal>
    ))}
  </div>
);

export default AboutStats;
