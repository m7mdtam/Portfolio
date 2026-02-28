import ScrollReveal from "@/components/react-bits/ScrollReveal";
import type { ContactInfoProps } from "@/types/contact.types";
import ContactInfoCard from "./contact-info-card";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { ComponentType } from "react";

const socialIconMap: Record<
  "github" | "linkedin",
  ComponentType<{ size?: number }>
> = {
  github: FaGithub,
  linkedin: FaLinkedin,
};

const ContactInfo = ({ intro, infoItems, socialLinks }: ContactInfoProps) => (
  <div className="flex flex-col">
    <ScrollReveal>
      <p className="text-body text-text-secondary mb-6 max-w-md">{intro}</p>
    </ScrollReveal>

    <div className="flex flex-col gap-4">
      {infoItems.map((item, i) => (
        <ScrollReveal key={item.label} delay={0.3 + i * 0.1} direction="up">
          <ContactInfoCard item={item} />
        </ScrollReveal>
      ))}
    </div>

    <div className="flex items-center gap-4 mt-8">
      {socialLinks.map((link, i) => {
        const Icon = socialIconMap[link.icon as keyof typeof socialIconMap];
        return (
          <ScrollReveal key={link.href} delay={0.7 + i * 0.1} direction="up">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-10 h-10 flex items-center justify-center border border-accent transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              <Icon size={20} />
            </a>
          </ScrollReveal>
        );
      })}
    </div>
  </div>
);

export default ContactInfo;
