import type { ReactNode } from "react";

/**
 * Transforme les balises <strong>…</strong> d'une chaîne en nœuds React.
 * N'accepte que ce pattern — aucun HTML arbitraire n'est injecté dans le DOM.
 */
export function parseRichText(text: string): ReactNode {
  const segments = text.split(/(<strong>.*?<\/strong>)/g);
  return segments.map((seg, i) => {
    const match = seg.match(/^<strong>(.*?)<\/strong>$/);
    return match ? <strong key={i}>{match[1]}</strong> : seg;
  });
}
