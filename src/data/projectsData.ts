import type { ProjectsData } from "@/types/projects.types";

export const projectsData: ProjectsData = {
  tag: "What I've built",
  title: "Projects",
  subtitle:
    "Work done at IzTechValley — all projects listed are property of IzTechValley. Included to reflect my hands-on experience.",
  items: [
    {
      name: "BARAKA POS",
      type: "SaaS Web Application",
      status: "In Production",
      liveUrl: "https://console.baraka-app.com/",
      ownershipNote:
        "This project is property of IzTechValley. I contributed as a Front-End Developer.",
      description:
        "A full-featured point-of-sale SaaS platform built for Palestinian businesses. Handles sales, inventory, reporting, and multi-branch management.",
      role: "Responsible for UI architecture, routing, API integration, data tables, form validation, and internationalization.",
      tech: [
        "React.js",
        "TypeScript",
        "TanStack Router",
        "TanStack Query",
        "TanStack Table",
        "TanStack Form",
        "Zod",
        "Zustand",
        "react-i18next",
        "Tailwind CSS",
        "Shadcn UI",
        "Radix UI",
        "Motion",
        "dnd-kit",
      ],
      featured: true,
    },
    {
      name: "Company Web Applications",
      type: "Full Web Applications for Local Businesses",
      status: "In Progress",
      ownershipNote:
        "These projects are property of IzTechValley. I contributed as a Front-End Developer.",
      description:
        "Full web applications built for local Palestinian companies, featuring animated landing pages, multi-section layouts, and smooth user experiences across all devices.",
      role: "Responsible for full frontend development including animations, responsive design, and performance optimization.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Motion", "React Bits", "Shadcn UI"],
    },
  ],
};
