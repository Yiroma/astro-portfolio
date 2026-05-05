import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "outline" | "warning";
}

export function Badge({ children, variant = "outline" }: BadgeProps) {
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
