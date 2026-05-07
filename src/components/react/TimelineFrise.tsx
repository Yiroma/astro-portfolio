import { TimelineEntry } from "@/components/react/TimelineEntry";
import type { TimelineItem } from "@/types/timeline.type";

interface Props {
  entries: TimelineItem[];
}

export function TimelineFrise({ entries }: Props) {
  return (
    <ol aria-label="Parcours professionnel">
      {entries.map((entry, index) => (
        <li key={entry.period}>
          <TimelineEntry entry={entry} isLast={index === entries.length - 1} />
        </li>
      ))}
    </ol>
  );
}
