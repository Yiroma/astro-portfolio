import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Badge } from "@/components/ui/Badge";
import { Btn } from "@/components/ui/Btn";
import { GithubReactIcon, WebReactIcon } from "@/components/ui/icons";
import type { Project } from "@/types/project.type";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  isClosing?: boolean;
}

const FOCUSABLE =
  'a[href],button:not([disabled]),input,textarea,select,[tabindex]:not([tabindex="-1"])';

export function ProjectModal({ project, onClose, isClosing = false }: ProjectModalProps) {
  const panelRef = useRef<React.ElementRef<"div">>(null);
  const triggerRef = useRef<Element | null>(null);

  useEffect(() => {
    triggerRef.current = document.activeElement;

    const focusable = () =>
      Array.from(panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []).filter(
        (el) => !el.closest("[aria-hidden]")
      );

    const firstFocusable = focusable()[0];
    (firstFocusable ?? panelRef.current)?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      (triggerRef.current as HTMLElement | null)?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm ${isClosing ? "animate-[modal-backdrop-out_300ms_ease_both]" : "animate-[modal-backdrop-in_200ms_ease_both]"}`}
    >
      <button
        type="button"
        aria-label="Fermer la modale"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default border-none bg-transparent"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        ref={panelRef}
        tabIndex={-1}
        className={`relative z-[1] flex max-h-[90dvh] w-full max-w-[52rem] flex-col rounded-2xl border border-base-300 bg-base-100 outline-none ${isClosing ? "animate-[modal-panel-out_280ms_ease_both]" : "animate-[modal-panel-in_220ms_ease_both]"}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-white/20 bg-black/50 text-base leading-none text-white backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          ✕
        </button>

        <div className="flex flex-col gap-6 overflow-y-auto p-8">
          {/* Img */}
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
                <span className="shrink-0 text-xs font-semibold tracking-[0.08em] text-primary">
                  Projet {project.label}
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

            <h3
              id="modal-project-title"
              className="m-0 text-[clamp(1.125rem,2vw,1.375rem)] leading-[1.25] font-bold text-base-content"
            >
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-[0.375rem]">
              {project.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>

          {/* Details */}
          <dl className="m-0 flex flex-col">
            {(
              [
                ["Contexte", project.context],
                ["Problème", project.problem],
                ["Solution", project.solution],
                ["Résultat", project.result],
              ] as [string, string][]
            ).map(([label, text], index, arr) => {
              const isLast = index === arr.length - 1;
              const dotDelay = `${index * 280}ms`;
              const lineDelay = `${index * 280 + 120}ms`;

              return (
                <div key={label} className="flex gap-4">
                  {/* Vertical line */}
                  <div className="flex w-5 shrink-0 flex-col items-center pt-0.5">
                    {isLast ? (
                      /* Final Check */
                      <div
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white"
                        style={{
                          animation: `timeline-dot-in 250ms ease both, timeline-check-flip 350ms ease both`,
                          animationDelay: dotDelay,
                          opacity: 0,
                        }}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M2 6l3 3 5-5" />
                        </svg>
                      </div>
                    ) : (
                      /* Dot */
                      <div
                        className="h-2.5 w-2.5 rounded-full border-2 border-primary bg-base-100"
                        style={{
                          animation: `timeline-dot-in 250ms ease both`,
                          animationDelay: dotDelay,
                          opacity: 0,
                        }}
                      />
                    )}
                    {/* Line */}
                    {!isLast && (
                      <div
                        className="relative my-1.5 w-px flex-1 bg-base-300"
                        style={{ minHeight: "1.5rem" }}
                      >
                        <div
                          className="absolute inset-0 origin-top bg-primary"
                          style={{
                            animation: `timeline-line-fill 220ms ease both`,
                            animationDelay: lineDelay,
                            transform: "scaleY(0)",
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={!isLast ? "flex-1 pb-5" : "flex-1"}>
                    <dt className="mb-[0.35rem] text-sm font-semibold text-base-content">
                      {label}
                    </dt>
                    <dd
                      className="m-0 text-sm leading-[1.7] text-base-content/75"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  </div>
                </div>
              );
            })}
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
                  size="icon"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon === "github" ? <GithubReactIcon /> : <WebReactIcon />}
                </Btn>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
