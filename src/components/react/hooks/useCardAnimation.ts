import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { Phase } from "@components/react/hooks/useModalPhase";

export function useCardAnimation(phase: Phase, onOpen: () => void) {
  const cardRef = useRef<HTMLElement>(null);
  const [animStyle, setAnimStyle] = useState<CSSProperties | undefined>(undefined);
  const animating = useRef(false);
  const offsetRef = useRef<{ dx: number; dy: number } | null>(null);
  const resetTimerRef = useRef<number | null>(null);

  function trigger() {
    if (animating.current) return;

    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) {
      onOpen();
      return;
    }

    const dx = window.innerWidth / 2 - (rect.left + rect.width / 2);
    const dy = window.innerHeight / 2 - (rect.top + rect.height / 2);

    offsetRef.current = { dx, dy };
    animating.current = true;
    setAnimStyle({
      transform: `translate(${dx}px, ${dy}px) scale(1.08)`,
      opacity: 0,
      transition: "transform 350ms cubic-bezier(0.4, 0, 0.2, 1), opacity 260ms ease-in",
      zIndex: 50,
      position: "relative",
      pointerEvents: "none",
    });

    window.setTimeout(() => onOpen(), 180);
  }

  useEffect(() => {
    if (phase === "closing" && offsetRef.current) {
      const { dx, dy } = offsetRef.current;
      setAnimStyle({
        transform: `translate(${dx}px, ${dy}px) scale(1.08)`,
        opacity: 0,
        transition: "none",
        zIndex: 50,
        position: "relative",
        pointerEvents: "none",
      });
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setAnimStyle({
            transform: "translate(0px, 0px) scale(1)",
            opacity: 1,
            transition: "transform 320ms cubic-bezier(0.2, 0, 0, 1), opacity 280ms ease-out",
            zIndex: 50,
            position: "relative",
            pointerEvents: "none",
          });
        });
      });
    } else if (phase === "idle" && animating.current) {
      animating.current = false;
      offsetRef.current = null;
      setAnimStyle({ transition: "none" });
      resetTimerRef.current = window.setTimeout(() => setAnimStyle(undefined), 50);
    }
  }, [phase]);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
    };
  }, []);

  return { cardRef, animStyle, trigger };
}
