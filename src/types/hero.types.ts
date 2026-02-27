export type SocialPlatform = "github" | "linkedin";

export type CTAVariant = "default" | "outline";

export interface HeroSocial {
  platform: SocialPlatform;
  href: string;
  label: string;
}

export interface HeroCTA {
  label: string;
  section: string;
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
  onCtaClick: (section: string) => void;
}

export interface HeroProps {
  data: HeroData;
}
