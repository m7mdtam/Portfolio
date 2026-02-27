import SpotlightCard from "@/components/SpotlightCard";
import ScrollReveal from "@/components/ScrollReveal";
import type { AboutStatsProps } from "@/types/about.types";

const cardStyle: React.CSSProperties = {
  borderColor: "var(--text-border)",
  background: "color-mix(in oklch, var(--background-surface) 80%, transparent)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
};

const AboutStats = ({ stats }: AboutStatsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <ScrollReveal key={stat.label} delay={i * 0.12} direction="up">
          <SpotlightCard
            className="rounded-sm border p-6 flex flex-col items-center justify-center text-center min-h-32 h-full"
            style={cardStyle}
            spotlightColor="rgba(100, 108, 255, 0.18)"
          >
            {/* Big bold value */}
            <span
              className="text-h1 font-bold leading-none"
              style={{ color: "var(--accent-primary)" }}
            >
              {stat.value}
            </span>

            {/* Label */}
            <span
              className="text-sm mt-3 leading-snug"
              style={{ color: "var(--text-secondary)" }}
            >
              {stat.label}
            </span>
          </SpotlightCard>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default AboutStats;
