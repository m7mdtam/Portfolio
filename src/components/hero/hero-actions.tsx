import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/react-bits";
import type { HeroActionsProps, SocialPlatform } from "@/types/hero.types";
import type { ComponentType } from "react";

const socialIcons: Record<SocialPlatform, ComponentType<{ size?: number }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  facebook: FaFacebook,
  x: FaXTwitter,
};

const HeroActions = ({ cta, socials, onCtaClick }: HeroActionsProps) => {
  const handleDownloadCV = () => {
    const cvUrl =
      "https://drive.google.com/uc?export=download&id=1WEAx9ZTBtPfadxTLbxgMPfJWa8qnLckH";
    window.open(cvUrl, "_blank");
  };

  return (
    <ScrollReveal delay={0.6}>
      <div className="flex flex-col items-center gap-5 md:items-start">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          {cta.map((item) => (
            <Button
              key={item.label}
              variant={item.variant}
              size="lg"
              onClick={() => onCtaClick(item.section)}
              className="min-w-36 cursor-pointer"
            >
              {item.label}
            </Button>
          ))}
          <Button
            variant="outline"
            size="lg"
            onClick={handleDownloadCV}
            className="min-w-36 cursor-pointer flex items-center gap-2"
          >
            <Download size={18} />
            CV
          </Button>
        </div>

        <div className="flex items-center gap-5">
          {socials.map((social) => {
            const Icon = socialIcons[social.platform];
            return (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default HeroActions;
