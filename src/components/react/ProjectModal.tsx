import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Badge } from "@components/react/ui/Badge";
import { Btn } from "@components/react/ui/Btn";
import type { Project } from "@/types/project.type";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
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
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(4px)",
        animation: "modal-backdrop-in 200ms ease both",
      }}
    >
      <button
        type="button"
        aria-label="Fermer la modale"
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background: "transparent",
          border: "none",
          cursor: "default",
        }}
      />
      <div
        role="document"
        aria-label={project.title}
        ref={panelRef}
        tabIndex={-1}
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "52rem",
          maxHeight: "90dvh",
          overflowY: "auto",
          borderRadius: "1rem",
          border: "1px solid var(--color-base-300)",
          background: "var(--color-base-100)",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          padding: "2rem",
          animation: "modal-panel-in 220ms ease both",
          outline: "none",
        }}
      >
        {/* Fermer */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "2rem",
            height: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0.375rem",
            border: "1px solid var(--color-base-300)",
            background: "transparent",
            color: "var(--color-base-content)",
            cursor: "pointer",
            fontSize: "1rem",
            lineHeight: 1,
            opacity: 0.7,
          }}
        >
          ✕
        </button>

        {/* Image */}
        <div
          style={{
            width: "calc(100% + 4rem)",
            marginInline: "-2rem",
            marginTop: "-2rem",
            borderRadius: "1rem 1rem 0 0",
            overflow: "hidden",
            aspectRatio: "3 / 2",
            background: "color-mix(in oklch, var(--color-primary) 8%, var(--color-base-200))",
            borderBottom: "1px solid var(--color-base-300)",
            flexShrink: 0,
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`Capture d'écran — ${project.title}`}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                color: "color-mix(in oklch, var(--color-primary) 40%, transparent)",
              }}
            >
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
              <span style={{ fontSize: "0.75rem", fontWeight: 500 }}>Capture à venir</span>
            </div>
          )}
        </div>

        {/* En-tête */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            paddingRight: "2.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0 }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-primary)",
                  flexShrink: 0,
                }}
              >
                Projet {project.index}
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-base-content)",
                  opacity: 0.5,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                · {project.label}
              </span>
            </div>
            {project.inProgress ? (
              <Badge variant="warning">En cours</Badge>
            ) : project.date ? (
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--color-base-content)",
                  opacity: 0.4,
                  flexShrink: 0,
                }}
              >
                {project.date}
              </span>
            ) : null}
          </div>

          <h3
            style={{
              margin: 0,
              fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "var(--color-base-content)",
            }}
          >
            {project.title}
          </h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
            {project.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </div>

        {/* Détails */}
        <dl
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
            gap: "1.25rem",
            margin: 0,
          }}
        >
          {(
            [
              ["Contexte", project.context],
              ["Problème", project.problem],
              ["Solution", project.solution],
              ["Résultat", project.result],
            ] as [string, string][]
          ).map(([label, text]) => (
            <div key={label}>
              <dt
                style={{
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  color: "var(--color-base-content)",
                  marginBottom: "0.35rem",
                }}
              >
                {label}
              </dt>
              <dd
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: "var(--color-base-content)",
                  opacity: 0.75,
                }}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          ))}
        </dl>

        {/* Actions */}
        {project.links && project.links.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              borderTop: "1px solid var(--color-base-300)",
              paddingTop: "1.25rem",
            }}
          >
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
