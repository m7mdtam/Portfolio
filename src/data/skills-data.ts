import type { SkillsData } from "@/types/skills.types";

export const skillsData: SkillsData = {
  tag: "What I work with",
  title: "Skills",
  categories: [
    {
      label: "Core",
      skills: [
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      label: "Libraries & UI",
      skills: [
        "TanStack Router",
        "TanStack Query",
        "TanStack Table",
        "TanStack Form",
        "TanStack Virtual",
        "dnd-kit",
        "Zustand",
        "Zod",
        "i18n",
        "Motion",
        "React Bits",
        "Shadcn UI",
        "Radix UI",
        "React Hook Form",
        "date-fns",
        "Axios",
      ],
    },
    {
      label: "CMS & Backend",
      skills: ["Payload CMS"],
    },
    {
      label: "API & Data",
      skills: [
        "RESTful API",
        "async/await",
        "JSON handling",
        "Error handling",
      ],
    },
    {
      label: "Tooling & Workflow",
      skills: [
        "Git & GitHub",
        "Husky",
        "ESLint",
        "Prettier",
        "Lint-Staged",
        "Commitlint",
        "Vite",
        "pnpm",
        "Bun",
      ],
    },
    {
      label: "Other Experience",
      skills: ["Flutter & Dart", "POS Systems", "Network Config"],
    },
    {
      label: "Languages",
      skills: ["Arabic", "English", "Turkish"],
    },
  ],
};
