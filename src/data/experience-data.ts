import type { ExperienceData } from "@/types/experience.types";
import { formatDuration } from "@/lib/utils";

export const experienceData: ExperienceData = {
  tag: "Where I've worked",
  title: "Experience",
  items: [
    {
      title: "Forward Deployed Engineer",
      company: "IzTechValley",
      companyUrl: "https://iztechvalley.com",
      location: "Hebron, West Bank, Palestine",
      type: "Full-Time",
      period: "Jul 2025 – Present",
      duration: formatDuration("2025-07"),
      responsibilities: [
        "Independently built and shipped iztechvalley.com end-to-end — the company's marketing website — owning architecture, UI, launch, and ongoing SEO and performance",
        "Solely designed and delivered petromall.iztech.net end-to-end, a multi-section product catalog and landing platform, from first commit to production",
        "Single-handedly built and shipped naab-app.com end-to-end, including the performance and reliability work behind a smooth experience across mobile and desktop",
        "Built the Barakat admin panel end-to-end — the operations dashboard for a live POS SaaS platform used by Palestinian businesses",
        "Owned each project alone from first commit to live deployment, working directly with stakeholders on scope and delivery",
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
