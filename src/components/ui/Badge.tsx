import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "outline" | "warning";
}

export function Badge({ children, variant = "outline" }: BadgeProps) {
  return (
    <span
      className={`badge badge-sm font-semibold ${variant === "warning" ? "badge-warning" : "border-base-300 bg-transparent text-base-content/50"}`}
    >
      {children}
    </span>
  );
}
