import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ProjectLink {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  external?: boolean;
}

export interface Project {
  index: number;
  label: string;
  date?: string;
  title: string;
  subtitle: string;
  tags: string[];
  resume: string;
  context: string;
  problem: string;
  solution: string;
  result: string;
  links?: ProjectLink[];
  inProgress?: boolean;
  image?: string;
}

// ─── Badge ────────────────────────────────────────────────────────────────────

function Badge({
  children,
  variant = "outline",
}: {
  children: React.ReactNode;
  variant?: "outline" | "warning";
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.2rem 0.55rem",
        borderRadius: "9999px",
        fontSize: "0.6875rem",
        fontWeight: 600,
        lineHeight: 1,
        border: "1px solid",
        whiteSpace: "nowrap",
        borderColor: variant === "warning" ? "var(--color-warning)" : "var(--color-base-300)",
        background:
          variant === "warning"
            ? "color-mix(in oklch, var(--color-warning) 12%, transparent)"
            : "transparent",
        color:
          variant === "warning"
            ? "var(--color-warning)"
            : "color-mix(in oklch, var(--color-base-content) 70%, transparent)",
      }}
    >
      {children}
    </span>
  );
}

// ─── Btn ──────────────────────────────────────────────────────────────────────

function Btn({
  href,
  variant = "outline",
  external,
  children,
  onClick,
  size = "sm",
}: {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  external?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  size?: "sm" | "md";
}) {
  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.375rem",
    fontWeight: 500,
    borderRadius: "0.375rem",
    border: "1px solid transparent",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    fontSize: size === "sm" ? "0.8125rem" : "0.875rem",
    height: size === "sm" ? "2rem" : "2.75rem",
    paddingInline: size === "sm" ? "0.75rem" : "1.25rem",
    transition: "filter 150ms ease, background 150ms ease, border-color 150ms ease",
    background: variant === "primary" ? "var(--color-primary)" : "transparent",
    color: variant === "primary" ? "var(--color-primary-content)" : "var(--color-base-content)",
    borderColor:
      variant === "outline"
        ? "var(--color-base-300)"
        : variant === "primary"
          ? "var(--color-primary)"
          : "transparent",
  };

  if (href) {
    return (
      <a
        href={href}
        style={style}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" style={style} onClick={onClick}>
      {children}
    </button>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
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
      {/* Bouton invisible couvrant tout le backdrop pour fermer au clic */}
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
      {/* Panneau — stoppe la propagation du click pour ne pas fermer en cliquant dedans */}
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

// ─── Card ─────────────────────────────────────────────────────────────────────

function Card({ project, onClick }: { project: Project; onClick: () => void }) {
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
          background: "color-mix(in oklch, var(--color-primary) 8%, var(--color-base-200))",
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

// ─── ProjectsGrid ─────────────────────────────────────────────────────────────

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
          <Card key={p.index} project={p} onClick={() => setActive(p)} />
        ))}
      </div>

      {active && <Modal project={active} onClose={() => setActive(null)} />}
    </>
  );
}
