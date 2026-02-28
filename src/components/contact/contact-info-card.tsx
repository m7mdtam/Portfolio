import type {
  ContactInfoCardProps,
  ContactIconKey,
} from "@/types/contact.types";
import { MdEmail, MdLocationOn } from "react-icons/md";
import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import type { ComponentType } from "react";

const iconMap: Record<ContactIconKey, ComponentType<{ size?: number }>> = {
  email: MdEmail,
  phone: FaWhatsapp,
  location: MdLocationOn,
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  facebook: FaFacebook,
  x: FaXTwitter,
};

const ContactInfoCard = ({ item }: ContactInfoCardProps) => {
  const Icon = iconMap[item.icon];

  return (
    <div className="py-3">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-accent text-accent-foreground border border-border transition-colors duration-200 hover:border-accent-foreground">
          <Icon size={20} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">
            {item.label}
          </span>
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary underline-offset-2 hover:underline"
            >
              {item.value}
            </a>
          ) : (
            <span className="text-sm text-text-secondary">{item.value}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
