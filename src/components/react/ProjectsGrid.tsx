import React, { useState } from "react";
import { ProjectCard } from "@components/react/ProjectCard";
import { ProjectModal } from "@components/react/ProjectModal";
import type { Project } from "@/types/project.type";

export type { Project };

type Phase = "idle" | "open" | "closing";

const CLOSE_DURATION = 320;

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  function handleOpen(p: Project) {
    setActive(p);
    setPhase("open");
  }

  function handleClose() {
    setPhase("closing");
    window.setTimeout(() => {
      setActive(null);
      setPhase("idle");
    }, CLOSE_DURATION);
  }

  return (
    <>
      <style>{`
        @keyframes modal-backdrop-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modal-backdrop-out {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes modal-panel-in {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        @keyframes modal-panel-out {
          from { opacity: 1; transform: scale(1)    translateY(0); }
          to   { opacity: 0; transform: scale(0.95) translateY(8px); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,28rem),1fr))] gap-5">
        {projects.map((p) => (
          <ProjectCard
            key={p.index}
            project={p}
            onClick={() => handleOpen(p)}
            phase={active?.index === p.index ? phase : "idle"}
          />
        ))}
      </div>

      {active && (
        <ProjectModal project={active} onClose={handleClose} isClosing={phase === "closing"} />
      )}
    </>
  );
}
