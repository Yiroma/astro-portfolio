import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@components/react/ui/Badge";
import { Btn } from "@components/react/ui/Btn";
import type { Project } from "@/types/project.type";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  phase: "idle" | "open" | "closing";
}

export function ProjectCard({ project, onClick, phase }: ProjectCardProps) {
  const cardRef = useRef<React.ElementRef<"div">>(null);
  const [animStyle, setAnimStyle] = useState<React.CSSProperties | undefined>(undefined);
  const animating = useRef(false);
  const offsetRef = useRef<{ dx: number; dy: number } | null>(null);
  const resetTimerRef = useRef<number | null>(null);

  function handleOpen() {
    if (animating.current) return;

    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) {
      onClick();
      return;
    }

    const dx = window.innerWidth / 2 - (rect.left + rect.width / 2);
    const dy = window.innerHeight / 2 - (rect.top + rect.height / 2);

    offsetRef.current = { dx, dy };
    animating.current = true;
    setAnimStyle({
      transform: `translate(${dx}px, ${dy}px) scale(1.08)`,
      opacity: 0,
      transition: "transform 350ms cubic-bezier(0.4, 0, 0.2, 1), opacity 260ms ease-in",
      zIndex: 50,
      position: "relative",
      pointerEvents: "none",
    });

    window.setTimeout(() => onClick(), 180);
  }

  useEffect(() => {
    if (phase === "closing" && offsetRef.current) {
      const { dx, dy } = offsetRef.current;
      // Positionner instantanément à la position "envolée"
      setAnimStyle({
        transform: `translate(${dx}px, ${dy}px) scale(1.08)`,
        opacity: 0,
        transition: "none",
        zIndex: 50,
        position: "relative",
        pointerEvents: "none",
      });
      // Puis animer le retour vers la position d'origine
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setAnimStyle({
            transform: "translate(0px, 0px) scale(1)",
            opacity: 1,
            transition: "transform 320ms cubic-bezier(0.2, 0, 0, 1), opacity 280ms ease-out",
            zIndex: 50,
            position: "relative",
            pointerEvents: "none",
          });
        });
      });
    } else if (phase === "idle" && animating.current) {
      animating.current = false;
      offsetRef.current = null;
      // L'animation de retour est terminée, on retire juste les styles inline
      setAnimStyle({ transition: "none" });
      resetTimerRef.current = window.setTimeout(() => setAnimStyle(undefined), 50);
    }
  }, [phase]);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      }}
      className="flex cursor-pointer flex-col gap-[1.125rem] rounded-2xl border border-base-300 bg-base-100 p-7 select-none hover:-translate-y-[3px] hover:shadow-[0_8px_28px_rgba(0,0,0,0.09)]"
      style={
        animStyle ?? {
          transition: "box-shadow 200ms ease, transform 200ms ease",
        }
      }
    >
      {/* Image */}
      <div className="-mx-7 -mt-7 mb-1.5 aspect-[3/2] w-[calc(100%+3.5rem)] shrink-0 overflow-hidden rounded-t-2xl border-b border-base-300 bg-base-200">
        {project.image ? (
          <img
            src={project.image}
            alt={`Capture d'écran — ${project.title}`}
            className="block h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-primary/40">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
            <span className="text-[0.6875rem] font-medium">Capture à venir</span>
          </div>
        )}
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="shrink-0 text-xs font-semibold tracking-[0.08em] text-primary uppercase">
            Projet {project.index}
          </span>
          <span className="overflow-hidden text-xs text-ellipsis whitespace-nowrap text-base-content/50">
            · {project.label}
          </span>
        </div>
        {project.inProgress ? (
          <Badge variant="warning">En cours</Badge>
        ) : project.date ? (
          <span className="shrink-0 text-xs font-semibold text-base-content/40">
            {project.date}
          </span>
        ) : null}
      </div>

      {/* Titre */}
      <div className="flex flex-col gap-1">
        <h3 className="m-0 text-[1.0625rem] leading-[1.3] font-bold text-base-content">
          {project.title}
        </h3>
        {project.subtitle && (
          <h4 className="m-0 text-sm leading-[1.4] font-medium text-base-content/60">
            {project.subtitle}
          </h4>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-[0.35rem]">
        {project.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      {/* Résumé */}
      <p className="m-0 grow text-[0.8125rem] leading-[1.65] text-base-content/70">
        {project.resume}
      </p>

      {/* Pied de card */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-base-300 pt-3">
        <div className="flex flex-wrap gap-2">
          {project.links?.map((link) => (
            <Btn
              key={link.label}
              href={link.href}
              variant={link.variant ?? "outline"}
              external={link.external}
              size="sm"
            >
              {link.label}
            </Btn>
          ))}
        </div>
        <Btn variant="ghost" size="sm" onClick={handleOpen}>
          Voir les détails →
        </Btn>
      </div>
    </div>
  );
}
