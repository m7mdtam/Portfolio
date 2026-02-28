import type { ExperienceData } from "@/types/experience.types";

export const experienceData: ExperienceData = {
  tag: "Where I've worked",
  title: "Experience",
  items: [
    {
      title: "Front-End Developer (React)",
      company: "IzTechValley",
      companyUrl: "https://iztechvalley.ps",
      location: "Hebron, West Bank, Palestine",
      type: "Full-Time",
      period: "Jul 2024 – Present",
      duration: "8 months",
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
      title: "Point of Sale Technician",
      company: "Gigabyte Ltd",
      location: "Nicosia, Cyprus",
      type: "Full-Time",
      period: "Feb 2025 – May 2025",
      duration: "4 months",
      responsibilities: [
        "Configured and installed POS environments including hardware, OS, and network integration",
        "Diagnosed and resolved hardware/software issues to ensure minimal downtime",
        "Provided technical support for retail operations",
      ],
    },
    {
      title: "Flutter Front-End Developer",
      company: "Gigabyte Ltd",
      location: "Nicosia, Cyprus",
      type: "Internship",
      period: "Jul 2024 – Sep 2024",
      duration: "3 months",
      responsibilities: [
        "Built cross-platform mobile UIs with Flutter and Dart for Android and iOS",
        "Integrated APIs and implemented responsive UI components",
        "Ensured smooth performance and user experience across devices",
      ],
    },
  ],
};
