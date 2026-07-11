import { ExternalLink, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import ProjectTag from "./project-tag";
import type { ProjectCardProps, ProjectStatus } from "@/types/projects.types";

const statusStyles: Record<ProjectStatus, string> = {
  "In Production":
    "border-status-success bg-status-success-bg text-status-success",
  MVP: "border-primary bg-accent text-primary",
  "In Progress":
    "border-status-warning bg-status-warning-bg text-status-warning",
  Completed: "border-border bg-card text-text-secondary",
};

const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <div className="relative border border-border bg-card/60 transition-all duration-300 hover:shadow-[0_0_32px_rgba(99,102,241,0.12)] group h-full flex flex-col">
      <div className="h-0.5 w-full bg-primary transition-all duration-300 group-hover:h-1" />

      <div className="flex flex-col flex-1 p-6 gap-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-h3 font-title font-bold text-foreground leading-tight">
              {item.name}
            </h3>
            <span className="text-sm font-title text-text-muted">
              {item.type}
            </span>
          </div>

          <span
            className={`shrink-0 border px-2 py-0.5 text-xs font-title font-semibold uppercase tracking-wide ${statusStyles[item.status]}`}
          >
            {item.status}
          </span>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed">
          {item.description}
        </p>

        <div className="border-l-2 border-primary/40 bg-background/40 px-4 py-3 flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            My Role
          </span>
          <p className="text-sm text-text-secondary italic leading-relaxed">
            {item.role}
          </p>
          {item.ownershipNote && (
            <p className="text-xs text-text-muted italic mt-1">
              {item.ownershipNote}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {item.tech.map((tag) => (
            <ProjectTag key={tag} label={tag} />
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto pt-2">
          {item.liveUrl && (
            <Button asChild size="sm" className="gap-2 cursor-pointer">
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-3.5" />
                View Live
              </a>
            </Button>
          )}

          {item.githubUrl ? (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="gap-2 cursor-pointer"
            >
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="size-3.5" />
                GitHub
              </a>
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              disabled
              className="gap-2 opacity-50 cursor-not-allowed"
            >
              <Lock className="size-3.5" />
              Private Repo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
