import React from "react";
import { ProjectCard } from "@components/react/ProjectCard";
import { ProjectModal } from "@components/react/ProjectModal";
import { useModalPhase } from "@components/react/hooks/useModalPhase";
import type { Project } from "@/types/project.type";
import "@styles/projectAnimations.css";

export type { Project };

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const { active, phase, open, close } = useModalPhase();

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard
            key={p.index}
            project={p}
            onClick={() => open(p)}
            phase={active?.index === p.index ? phase : "idle"}
          />
        ))}
      </div>

      {active && <ProjectModal project={active} onClose={close} isClosing={phase === "closing"} />}
    </>
  );
}
