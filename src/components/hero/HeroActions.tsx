import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import type { HeroActionsProps, SocialPlatform } from "@/types/hero.types";
import type { ComponentType } from "react";

const socialIcons: Record<SocialPlatform, ComponentType<{ size?: number }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
};

const HeroActions = ({ cta, socials, onCtaClick }: HeroActionsProps) => {
  return (
    <div className="flex flex-col items-center gap-5 md:items-start">
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        {cta.map((item, i) => (
          <ScrollReveal key={item.label} delay={0.75 + i * 0.12} direction="up">
            <Button
              variant={item.variant}
              size="lg"
              onClick={() => onCtaClick(item.section)}
              className="min-w-36 cursor-pointer"
            >
              {item.label}
            </Button>
          </ScrollReveal>
        ))}
      </div>

      <div className="flex items-center gap-5">
        {socials.map((social, i) => {
          const Icon = socialIcons[social.platform];
          return (
            <ScrollReveal
              key={social.platform}
              delay={0.75 + cta.length * 0.12 + i * 0.12}
              direction="up"
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                <Icon size={22} />
              </a>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
};

export default HeroActions;
