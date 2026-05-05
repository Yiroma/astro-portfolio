import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Badge } from "@components/react/ui/Badge";
import { Btn } from "@components/react/ui/Btn";
import type { Project } from "@/types/project.type";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  isClosing?: boolean;
}

export function ProjectModal({ project, onClose, isClosing = false }: ProjectModalProps) {
  const panelRef = useRef<React.ElementRef<"div">>(null);

  useEffect(() => {
    const onKey: Parameters<typeof document.addEventListener<"keydown">>[1] = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm ${isClosing ? "animate-[modal-backdrop-out_300ms_ease_both]" : "animate-[modal-backdrop-in_200ms_ease_both]"}`}
    >
      <button
        type="button"
        aria-label="Fermer la modale"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default border-none bg-transparent"
      />
      <div
        role="document"
        aria-label={project.title}
        ref={panelRef}
        tabIndex={-1}
        className={`relative z-[1] flex max-h-[90dvh] w-full max-w-[52rem] flex-col gap-6 overflow-y-auto rounded-2xl border border-base-300 bg-base-100 p-8 outline-none ${isClosing ? "animate-[modal-panel-out_280ms_ease_both]" : "animate-[modal-panel-in_220ms_ease_both]"}`}
      >
        {/* Fermer */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-base-300 bg-transparent text-base leading-none text-base-content opacity-70"
        >
          ✕
        </button>

        {/* Image */}
        <div
          className="-mx-8 -mt-8 aspect-[3/2] w-[calc(100%+4rem)] shrink-0 overflow-hidden rounded-t-2xl border-b border-base-300"
          style={{
            background: "color-mix(in srgb, var(--color-primary) 8%, var(--color-base-200))",
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`Capture d'écran — ${project.title}`}
              className="block h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-primary/40">
              <svg
                width="40"
                height="40"
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
              <span className="text-xs font-medium">Capture à venir</span>
            </div>
          )}
        </div>

        {/* En-tête */}
        <div className="flex flex-col gap-3 pr-10">
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

          <h3 className="m-0 text-[clamp(1.125rem,2vw,1.375rem)] leading-[1.25] font-bold text-base-content">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-[0.375rem]">
            {project.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </div>

        {/* Détails */}
        <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-5">
          {(
            [
              ["Contexte", project.context],
              ["Problème", project.problem],
              ["Solution", project.solution],
              ["Résultat", project.result],
            ] as [string, string][]
          ).map(([label, text]) => (
            <div key={label}>
              <dt className="mb-[0.35rem] text-sm font-semibold text-base-content">{label}</dt>
              <dd
                className="m-0 text-sm leading-[1.7] text-base-content/75"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          ))}
        </dl>

        {/* Actions */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 border-t border-base-300 pt-5">
            {project.links.map((link) => (
              <Btn
                key={link.label}
                href={link.href}
                variant={link.variant ?? "outline"}
                external={link.external}
              >
                {link.label}
              </Btn>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
