import React from "react";

interface BtnProps {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  external?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  size?: "sm" | "md";
}

export function Btn({
  href,
  variant = "outline",
  external,
  children,
  onClick,
  size = "sm",
}: BtnProps) {
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
