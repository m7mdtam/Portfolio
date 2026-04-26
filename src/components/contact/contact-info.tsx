import type { ContactInfoProps } from "@/types/contact.types";
import { ContactInfoCard } from ".";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import type { ComponentType } from "react";

const socialIconMap: Record<
  "github" | "linkedin" | "instagram" | "facebook" | "x",
  ComponentType<{ size?: number }>
> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  facebook: FaFacebook,
  x: FaXTwitter,
};

const ContactInfo = ({ intro, infoItems, socialLinks }: ContactInfoProps) => (
  <div className="flex flex-col">
    <p className="text-body text-text-secondary mb-6 max-w-md">{intro}</p>

    <div className="flex flex-col gap-4">
      {infoItems.map((item) => (
        <ContactInfoCard key={item.label} item={item} />
      ))}
    </div>

    <div className="flex items-center gap-4 mt-8">
      {socialLinks.map((link) => {
        const Icon = socialIconMap[link.icon as keyof typeof socialIconMap];
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="w-10 h-10 flex items-center justify-center border border-accent transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  </div>
);

export default ContactInfo;
