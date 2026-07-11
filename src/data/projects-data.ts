import type { ProjectsData } from "@/types/projects.types";

export const projectsData: ProjectsData = {
  tag: "What I've built",
  title: "Projects",
  subtitle:
    "A mix of personal projects and client work I've designed, built, and shipped from scratch.",
  items: [
    {
      name: "ERP E-Commerce Template",
      type: "Full-Stack E-Commerce Platform",
      status: "MVP",
      githubUrl: "https://github.com/m7mdtam/erp-e-commerce-template",
      description:
        "An open-source, clone-per-store e-commerce template: a single Next.js 16 codebase that serves both a public SEO/SSR storefront and an owner dashboard, backed by a headless ERPNext instance over REST. It ships authentication, a product catalog with server-driven search, filtering, sorting and pagination, a tiered notification system, internationalization in Arabic, English and Hebrew (RTL-first), and a token-first shared UI library — all wired directly to ERPNext's native data model.",
      role:
        "Architecting and building it end to end — the ERPNext-native proxy layer folded into Next route handlers (service-token + httpOnly session-cookie auth, and a stable error registry that never leaks internals), the type-safe API and data hooks, RBAC and auth flows, the product catalog and product pages, the notification system, and a 35-component RTL-aware UI library. Designed so a new store spins up from a single config file.",
      tech: [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS v4",
        "ERPNext (Headless)",
        "REST API",
        "base-ui",
        "next-intl (i18n)",
        "Zod",
        "Bun",
      ],
      featured: true,
    },
    {
      name: "Dairy Market — POS & Inventory",
      type: "Forward Deployed Engineer Engagement",
      status: "In Progress",
      ownershipNote:
        "A paid client engagement — I met the shop owner on-site, scoped the requirements with him directly, and I'm now building and deploying the system for his business.",
      description:
        "A point-of-sale and inventory system for a local dairy, cheese and spices shop that brings the whole operation into one place. It covers a live overview dashboard, a full product catalog with flexible units of sale, real-time stock tracking with detailed reports, fast in-shop checkout, and complete supplier management — purchase invoices, running account statements, and print-ready PDF documents — all on a headless ERPNext backend.",
      role:
        "Sole engineer on the project — sat with the client to understand exactly how the shop runs day to day, turned that into a hardened plan, and I'm implementing the full Next.js app and its ERPNext integration end to end.",
      tech: [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS v4",
        "ERPNext (Headless)",
        "REST API",
      ],
      featured: true,
    },
    {
      name: "Shelfie",
      type: "Full Stack Web Application",
      status: "In Production",
      liveUrl: "https://shelfie-book.vercel.app/",
      githubUrl: "https://github.com/m7mdtam/shelfie-frontend",
      description:
        "Shelfie is a social reading app where you can manage your personal book shelf and discover what others are reading. Add books with cover images, track reading status, control visibility, and leave star ratings and comments. The explore page surfaces public books from the community, and each book page shows half-star precision ratings, owner info, and threaded comments — all in a mobile-first UI with full dark mode support.",
      role:
        "Built the entire project solo end-to-end — designed the UI/UX from scratch, developed the full frontend and backend, set up the PostgreSQL database with Neon DB, handled transactional emails with Resend, implemented JWT authentication, file-based routing, server-side API with data validation, and deployed the full stack to production.",
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
    },
    {
      name: "DevBoard",
      type: "Frontend Web Application",
      status: "In Production",
      liveUrl: "https://mt-devboard.vercel.app/",
      githubUrl: "https://github.com/m7mdtam/devboard",
      description:
        "DevBoard helps you stay on top of your work by organizing tasks across boards and columns — To Do, In Progress, and Done. You can create as many boards as you need, add tasks with a title, description, due date, and priority, then drag them across columns as work moves forward. It's built for people who want a clean, distraction-free space to manage their day without relying on heavy project management tools.",
      role:
        "Built this solo end-to-end — designed the UI/UX and logo from scratch, developed the full frontend, wired up localStorage as the persistence layer, and handled the deployment to production.",
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
      featured: false,
    },
    {
      name: "Portfolio",
      type: "Personal Website",
      status: "In Production",
      liveUrl: "https://mohammed-tamimi.vercel.app/",
      githubUrl: "https://github.com/m7mdtam/myPortfolio",
      description:
        "Personal portfolio showcasing projects, skills, and experience. Built with a focus on performance, clean design, and smooth animations.",
      role:
        "Built solo end-to-end — designed the UI/UX, developed the full frontend, and handled deployment to production.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Motion", "Vite"],
      featured: false,
    },
  ],
};
