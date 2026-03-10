import type { ProjectsData } from "@/types/projects.types";
import devboardPreview from "@/assets/images/devboard_preview_column.png";
import shelfiePreview1 from "@/assets/images/s1.png";
import shelfiePreview2 from "@/assets/images/s2.png";
import shelfiePreview3 from "@/assets/images/s3.PNG";
import shelfiePreview4 from "@/assets/images/s4.PNG";
import shelfiePreview5 from "@/assets/images/s5.PNG";
import shelfiePreview6 from "@/assets/images/s6.PNG";
import shelfiePreview7 from "@/assets/images/s7.PNG";

export const projectsData: ProjectsData = {
  tag: "What I've built",
  title: "Projects",
  subtitle: "Personal projects I've designed and built from scratch.",
  items: [
    {
      name: "Shelfie",
      type: "Full Stack Web Application",
      status: "In Production",
      liveUrl: "https://shelfie-book.vercel.app/",
      githubUrl: "https://github.com/m7mdtam/shelfie-frontend",
      description:
        "Shelfie is a social reading app where you can manage your personal book shelf and discover what others are reading. Add books with cover images, track reading status, control visibility, and leave star ratings and comments. The explore page surfaces public books from the community, and each book page shows half-star precision ratings, owner info, and threaded comments — all in a mobile-first UI with full dark mode support.",
      role: "Built the entire project solo end-to-end — designed the UI/UX from scratch, developed the full frontend and backend, set up the PostgreSQL database with Neon DB, handled transactional emails with Resend, implemented JWT authentication, file-based routing, server-side API with data validation, and deployed the full stack to production.",
      tech: [
        "React 18",
        "TypeScript",
        "Vite",
        "Tailwind CSS v4",
        "TanStack",
        "shadcn/ui",
        "React Hook Form",
        "Zod",
        "Motion",
        "Axios",
        "Three.js",
        "GSAP",
        "Lucide Icons",
        "Node.js",
        "PostgreSQL",
        "Neon DB",
        "Resend",
        "ESLint",
        "Prettier",
        "Husky",
      ],
      featured: true,
      previewImage: [
        shelfiePreview1,
        shelfiePreview2,
        shelfiePreview3,
        shelfiePreview4,
        shelfiePreview5,
        shelfiePreview6,
        shelfiePreview7,
      ],
    },
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
