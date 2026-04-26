import type { ExperienceData } from "@/types/experience.types";

export const experienceData: ExperienceData = {
  tag: "Where I've worked",
  title: "Experience",
  items: [
    {
      title: "Full Stack Engineer",
      company: "IzTechValley",
      companyUrl: "https://iztechvalley.ps",
      location: "Hebron, West Bank, Palestine",
      type: "Full-Time",
      period: "Jul 2025 – Present",
      duration: "9 months",
      responsibilities: [
        "Building and maintaining responsive UIs for BARAKA POS, a live SaaS platform for Palestinian businesses",
        "Integrating RESTful APIs with TanStack Query, routing with TanStack Router, data grids with TanStack Table",
        "Building full web applications with animated UIs for local companies using React Bits and Motion",
        "Managing forms with Zod + React Hook Form, global state with Zustand",
        "Handling internationalization with react-i18next (i18n)",
        "Maintaining code quality with Git, Husky, ESLint, Prettier, Commitlint",
        "Exploring Payload CMS for full-stack backend integration",
      ],
    },
    {
      title: "Hardware Engineer",
      company: "Gigabyte Ltd",
      location: "Nicosia, Cyprus",
      type: "Full-Time",
      period: "Feb 2025 – Jul 2025",
      duration: "6 months",
      responsibilities: [
        "Configured POS environments including hardware setup, OS installation, and network integration",
        "Diagnosed and resolved hardware/software issues to ensure minimal downtime across client sites",
      ],
    },
    {
      title: "Flutter Frontend Developer",
      company: "Gigabyte Ltd",
      location: "Nicosia, Cyprus",
      type: "Internship",
      period: "Jun 2024 – Oct 2024",
      duration: "5 months",
      responsibilities: [
        "Built cross-platform mobile UIs with Flutter and Dart, integrating APIs across Android and iOS",
        "Delivered responsive mobile interfaces and collaborated with the team on UI troubleshooting",
      ],
    },
  ],
};
