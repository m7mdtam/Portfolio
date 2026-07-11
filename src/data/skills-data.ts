import type { SkillsData } from "@/types/skills.types";

export const skillsData: SkillsData = {
  tag: "What I work with",
  title: "Skills",
  categories: [
    {
      label: "Core Stack",
      skills: ["TypeScript", "React.js", "Next.js", "React Native", "Tailwind CSS"],
    },
    {
      label: "Backend & Data",
      skills: ["Node.js", "Elysia", "PostgreSQL", "ERP"],
    },
    {
      label: "Tooling & Deploy",
      skills: ["Git & GitHub", "Vite", "Bun", "Vercel"],
    },
  ],
};
