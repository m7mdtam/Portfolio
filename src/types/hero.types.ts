import type { Section } from "@/contexts/scroll-context";

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "instagram"
  | "facebook"
  | "x";

export type CTAVariant = "default" | "outline";

export interface HeroSocial {
  platform: SocialPlatform;
  href: string;
  label: string;
}

export interface HeroCTA {
  label: string;
  section: Section;
  variant: CTAVariant;
}

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  intro: string;
  photo: string;
  cta: HeroCTA[];
  socials: HeroSocial[];
}

export interface HeroContentProps {
  name: string;
  title: string;
  subtitle: string;
  intro: string;
}

export interface HeroActionsProps {
  cta: HeroCTA[];
  socials: HeroSocial[];
  onCtaClick: (section: Section) => void;
}

export interface HeroProps {
  data: HeroData;
}
