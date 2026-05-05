import { useState } from "react";
import type { Project } from "@/types/project.type";

export type Phase = "idle" | "open" | "closing";

const CLOSE_DURATION = 320;

export function useModalPhase() {
  const [active, setActive] = useState<Project | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  function open(project: Project) {
    setActive(project);
    setPhase("open");
  }

  function close() {
    setPhase("closing");
    window.setTimeout(() => {
      setActive(null);
      setPhase("idle");
    }, CLOSE_DURATION);
  }

  return { active, phase, open, close };
}
