import type { ProjectsData } from "@/types/projects.types";
import devboardPreview from "@/assets/images/devboard_preview_column.png";

export const projectsData: ProjectsData = {
  tag: "What I've built",
  title: "Projects",
  subtitle: "Personal projects I've designed and built from scratch.",
  items: [
    {
      name: "DevBoard",
      type: "Frontend Web Application",
      status: "In Production",
      liveUrl: "https://mt-devboard.vercel.app/",
      githubUrl: "https://github.com/m7mdtam/devboard",
      description:
        "DevBoard helps you stay on top of your work by organizing tasks across boards and columns — To Do, In Progress, and Done. You can create as many boards as you need, add tasks with a title, description, due date, and priority, then drag them across columns as work moves forward. It's built for people who want a clean, distraction-free space to manage their day without relying on heavy project management tools.",
      role: "Built this solo end-to-end — designed the UI/UX and logo from scratch, developed the full frontend, wired up localStorage as the persistence layer, and handled the deployment to production.",
      tech: [
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Shadcn UI",
        "React Bits",
        "Motion",
        "TanStack Router",
        "Zustand",
        "dnd-kit",
        "React Hook Form",
        "Zod",
        "date-fns",
        "Lucide Icons",
        "Font Awesome",
        "Node.js",
        "Bun",
        "ESLint",
        "Prettier",
        "Husky",
      ],
      featured: true,
      previewImage: devboardPreview,
    },
  ],
};
