import React from "react";

interface BtnProps {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  external?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  size?: "sm" | "md" | "icon";
  "aria-label"?: string;
  title?: string;
}

export function Btn({
  href,
  variant = "outline",
  external,
  children,
  onClick,
  size = "sm",
  "aria-label": ariaLabel,
  title,
}: BtnProps) {
  const className = [
    "btn",
    size === "icon" ? "btn-square" : size === "sm" ? "btn-sm" : "",
    variant === "primary" ? "btn-primary" : variant === "ghost" ? "btn-ghost" : "btn-outline",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
        aria-label={ariaLabel}
        title={title}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </button>
  );
}
