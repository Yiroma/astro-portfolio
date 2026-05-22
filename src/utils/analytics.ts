const CONSENT_COOKIE = "ga_consent";
const CONSENT_DURATION_DAYS = 395; // ~13 mois CNIL

export type ConsentValue = "granted" | "denied";

export function getConsent(): ConsentValue | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`));
  return match ? (decodeURIComponent(match[1]) as ConsentValue) : null;
}

export function setConsent(value: ConsentValue): void {
  const expires = new Date();
  expires.setDate(expires.getDate() + CONSENT_DURATION_DAYS);
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

export function initGA(measurementId: string): void {
  if (typeof window === "undefined") return;

  // Charge le script gtag uniquement si pas déjà présent
  if (!document.getElementById("gtag-script")) {
    const script = document.createElement("script");
    script.id = "gtag-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  window.dataLayer = window.dataLayer ?? [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", measurementId, { anonymize_ip: true });
}

export function updateGAConsent(value: ConsentValue): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", {
    analytics_storage: value,
  });
}

// Déclarations globales pour TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
