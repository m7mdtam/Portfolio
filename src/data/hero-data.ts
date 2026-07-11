import type { HeroData } from "@/types/hero.types";
import photo from "@/assets/images/my2.jpg";

export const heroData: HeroData = {
  name: "Mohammed Tamimi",
  title: "Forward Deployed Engineer",
  subtitle:
    "I build software end to end and connect it to the systems a business already runs on.",
  intro: "",
  photo,
  cta: [
    { label: "View Projects", section: "projects", variant: "default" },
    { label: "Contact Me", section: "contact", variant: "outline" },
  ],
  socials: [
    {
      platform: "github",
      href: "https://github.com/m7mdtam",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      href: "https://www.linkedin.com/in/mohammed-tamimi-b252b0321/",
      label: "LinkedIn",
    },
    {
      platform: "instagram",
      href: "https://www.instagram.com/eng_tamimi/",
      label: "Instagram",
    },
    {
      platform: "facebook",
      href: "https://www.facebook.com/abu.tamimi.xd",
      label: "Facebook",
    },
    {
      platform: "x",
      href: "https://x.com/eng_tamimi0",
      label: "X",
    },
  ],
};
