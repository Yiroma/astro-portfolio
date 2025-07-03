import React from "react";
import type { IconProps } from "@/types/icon.type";

interface BaseIconProps extends IconProps {
  viewBox?: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
}

export default function BaseIcon({
  class: className = "h-6 w-6",
  viewBox = "0 0 24 24",
  width = "24",
  height = "24",
  children,
}: BaseIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={width}
      height={height}
      fill="currentColor"
      className={`text-base-content ${className}`}
    >
      {children}
    </svg>
  );
}
