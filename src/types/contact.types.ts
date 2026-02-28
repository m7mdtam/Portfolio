export type ContactIconKey =
  | "email"
  | "phone"
  | "location"
  | "github"
  | "linkedin"
  | "instagram"
  | "facebook"
  | "x";

export interface ContactInfoItem {
  icon: ContactIconKey;
  label: string;
  value: string;
  href?: string;
}

export interface ContactFormLabels {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  sendingLabel: string;
  successMessage: string;
  errorMessage: string;
  retryLabel: string;
}

export interface FooterLink {
  icon: "github" | "linkedin" | "instagram" | "facebook" | "x";
  href: string;
  label: string;
}

export interface ContactData {
  tag: string;
  title: string;
  intro: string;
  infoItems: ContactInfoItem[];
  socialLinks: FooterLink[];
  form: ContactFormLabels;
  footer: {
    copyright: string;
    links: FooterLink[];
  };
}

export interface ContactInfoCardProps {
  item: ContactInfoItem;
}

export interface ContactInfoProps {
  intro: string;
  infoItems: ContactInfoItem[];
  socialLinks: FooterLink[];
}

export interface ContactFormProps {
  labels: ContactFormLabels;
}

export interface ContactProps {
  tag: string;
  title: string;
  intro: string;
  infoItems: ContactInfoItem[];
  socialLinks: FooterLink[];
  form: ContactFormLabels;
}

export interface FooterProps {
  copyright: string;
  links: FooterLink[];
}
