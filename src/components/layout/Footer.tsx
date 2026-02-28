import type { FooterProps } from "@/types/contact.types";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import type { ComponentType } from "react";

const iconMap: Record<
  "github" | "linkedin" | "instagram" | "facebook" | "x",
  ComponentType<{ size?: number }>
> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  facebook: FaFacebook,
  x: FaXTwitter,
};

const Footer = ({ copyright, links }: FooterProps) => {
  return (
    <footer className="w-full border-t border-accent/20 bg-background py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between text-sm text-text-muted px-6 md:px-12 lg:px-20">
        <span>{copyright}</span>
        <div className="flex items-center gap-4">
          {links.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="transition-colors duration-200 hover:text-foreground"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
