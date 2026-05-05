import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@components/react/ui/Badge";
import { Btn } from "@components/react/ui/Btn";
import type { Project } from "@/types/project.type";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [flipping, setFlipping] = useState(false);
  const timerRef = useRef<number | null>(null);

  function handleOpen() {
    if (flipping) return;
    setFlipping(true);
    timerRef.current = window.setTimeout(() => {
      onClick();
      setFlipping(false);
    }, 260);
  }

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.125rem",
        padding: "1.75rem",
        borderRadius: "1rem",
        border: "1px solid var(--color-base-300)",
        background: "var(--color-base-100)",
        cursor: "pointer",
        userSelect: "none",
        transition: "box-shadow 200ms ease, transform 200ms ease",
        boxShadow: hovered ? "0 8px 28px rgba(0,0,0,0.09)" : "none",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        animation: flipping ? "card-flip-out 260ms ease both" : undefined,
      }}
    >
      {/* Image */}
      <div
        style={{
          width: "calc(100% + 3.5rem)",
          marginInline: "-1.75rem",
          marginTop: "-1.75rem",
          borderRadius: "1rem 1rem 0 0",
          overflow: "hidden",
          aspectRatio: "3 / 2",
          background: "var(--color-base-200)",
          borderBottom: "1px solid var(--color-base-300)",
          marginBottom: "0.375rem",
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
            <span style={{ fontSize: "0.6875rem", fontWeight: 500 }}>Capture à venir</span>
          </div>
        )}
      </div>

      {/* Meta */}
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
              opacity: 0.5,
              color: "var(--color-base-content)",
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

      {/* Titre */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        <h3
          style={{
            margin: 0,
            fontSize: "1.0625rem",
            fontWeight: 700,
            lineHeight: 1.3,
            color: "var(--color-base-content)",
          }}
        >
          {project.title}
        </h3>
        {project.subtitle && (
          <h4
            style={{
              margin: 0,
              fontSize: "0.875rem",
              fontWeight: 500,
              lineHeight: 1.4,
              color: "var(--color-base-content)",
              opacity: 0.6,
            }}
          >
            {project.subtitle}
          </h4>
        )}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
        {project.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      {/* Résumé */}
      <p
        style={{
          margin: 0,
          fontSize: "0.8125rem",
          lineHeight: 1.65,
          color: "var(--color-base-content)",
          opacity: 0.7,
          flexGrow: 1,
        }}
      >
        {project.resume}
      </p>

      {/* Pied de card */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
          paddingTop: "0.75rem",
          borderTop: "1px solid var(--color-base-300)",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
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
