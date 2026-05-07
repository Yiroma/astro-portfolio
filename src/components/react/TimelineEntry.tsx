import { useScrollReveal } from "@/components/react/hooks/useScrollReveal";
import { parseRichText } from "@/utils/parseRichText";
import type { TimelineItem } from "@/types/timeline.type";

interface Props {
  entry: TimelineItem;
  isLast: boolean;
}

export function TimelineEntry({ entry, isLast }: Props) {
  const { ref, isVisible } = useScrollReveal();

  const dotSize = entry.isCurrent ? "h-5 w-5" : "h-4 w-4";
  const dotShadow = entry.isCurrent
    ? "0 0 0 4px color-mix(in oklch, var(--color-primary) 30%, transparent)"
    : "0 0 0 2px var(--color-primary)";

  return (
    <div ref={ref} className="flex gap-5 sm:gap-7">
      {/* left column - dot and line */}
      <div className="flex w-5 shrink-0 flex-col items-center">
        <div
          className={`shrink-0 rounded-full border-[3px] border-base-200 bg-primary ${dotSize}`}
          style={
            isVisible
              ? {
                  animation: "tl-dot-in 350ms cubic-bezier(0.34, 1.56, 0.64, 1) both",
                  boxShadow: dotShadow,
                }
              : { opacity: 0 }
          }
          aria-hidden="true"
        />

        {!isLast && (
          <div
            className="relative mt-2 w-px flex-1 bg-base-300"
            style={{ minHeight: "3rem" }}
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 origin-top bg-primary"
              style={
                isVisible
                  ? {
                      animation: "tl-line-fill 500ms ease both",
                      animationDelay: "180ms",
                    }
                  : { transform: "scaleY(0)" }
              }
            />
          </div>
        )}
      </div>

      {/* right column - content */}
      <div
        className={!isLast ? "pb-10 sm:pb-14" : ""}
        style={
          isVisible
            ? {
                animation: "tl-content-in 450ms ease both",
                animationDelay: "80ms",
              }
            : { opacity: 0 }
        }
      >
        <span className="mb-1 text-xs font-semibold tracking-[0.08em] text-primary uppercase">
          {entry.period}
        </span>
        <h3 className="mb-0.5">{entry.title}</h3>
        <span className="mb-3 text-sm text-base-content/60">{entry.subtitle}</span>
        <p className="tl-description text-[0.9375rem] leading-relaxed text-base-content/75">
          {parseRichText(entry.description)}
        </p>
      </div>
    </div>
  );
}
