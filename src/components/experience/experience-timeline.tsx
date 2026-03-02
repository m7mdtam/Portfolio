import { motion } from "motion/react";
import { ScrollReveal } from "@/components/react-bits";
import ExperienceCard from "./experience-card";
import type { ExperienceTimelineProps } from "@/types/experience.types";

const lineAnim = {
  initial: { scaleY: 0 },
  whileInView: { scaleY: 1 },
  viewport: { once: true } as const,
  transition: { duration: 1.6 },
};

const dotAnim = (delay: number) => ({
  initial: { scale: 0 },
  whileInView: { scale: 1 },
  viewport: { once: true } as const,
  transition: { delay, duration: 0.3 },
});

const ExperienceTimeline = ({ items }: ExperienceTimelineProps) => (
  <>
    <div className="md:hidden relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
      <motion.div
        {...lineAnim}
        className="absolute left-4 top-0 bottom-0 w-px bg-primary origin-top"
      />

      <div className="flex flex-col gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-0">
            <div className="shrink-0 w-8 flex justify-center pt-5 relative z-10">
              <motion.div
                {...dotAnim(0.4 + i * 0.15)}
                className="w-3 h-3 bg-primary shrink-0"
              />
            </div>

            <div className="flex-1 min-w-0">
              <ScrollReveal direction="up" delay={0}>
                <ExperienceCard item={item} />
              </ScrollReveal>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="hidden md:block relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
      <motion.div
        {...lineAnim}
        className="absolute left-1/2 top-0 bottom-0 w-px bg-primary -translate-x-1/2 origin-top"
      />

      <div className="flex flex-col gap-16">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div key={i} className="grid grid-cols-[1fr_4rem_1fr] items-start">
              <div className="relative pr-8">
                {isLeft && (
                  <>
                    <div className="absolute -right-8 top-6.5 w-8 h-px bg-primary/40" />
                    <ScrollReveal direction="right" delay={0}>
                      <ExperienceCard item={item} />
                    </ScrollReveal>
                  </>
                )}
              </div>

              <div className="flex justify-center pt-5 relative z-10">
                <motion.div
                  {...dotAnim(0.5 + i * 0.15)}
                  className="w-3 h-3 bg-primary shrink-0"
                />
              </div>

              <div className="relative pl-8">
                {!isLeft && (
                  <>
                    <div className="absolute -left-8 top-6.5 w-8 h-px bg-primary/40" />
                    <ScrollReveal direction="left" delay={0}>
                      <ExperienceCard item={item} />
                    </ScrollReveal>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </>
);

export default ExperienceTimeline;
