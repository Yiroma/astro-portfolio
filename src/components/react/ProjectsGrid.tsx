import React, { useState } from "react";
import { ProjectCard } from "@components/react/ProjectCard";
import { ProjectModal } from "@components/react/ProjectModal";
import type { Project } from "@/types/project.type";

export type { Project };

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <style>{`
        @keyframes card-flip-out {
          0%   { transform: perspective(800px) rotateY(0deg)   scale(1);    opacity: 1; }
          60%  { transform: perspective(800px) rotateY(-12deg) scale(0.97); opacity: 0.7; }
          100% { transform: perspective(800px) rotateY(0deg)   scale(1);    opacity: 1; }
        }
        @keyframes modal-backdrop-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modal-panel-in {
          from { opacity: 0; transform: scale(0.95) translateY(12px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 28rem), 1fr))",
          gap: "1.25rem",
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.index} project={p} onClick={() => setActive(p)} />
        ))}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </>
  );
}
