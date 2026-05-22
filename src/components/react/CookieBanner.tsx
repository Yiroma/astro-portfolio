import React, { useEffect, useState } from "react";
import { getConsent, setConsent, initGA, updateGAConsent } from "@utils/analytics";

interface CookieBannerProps {
  measurementId: string;
}

export default function CookieBanner({ measurementId }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = getConsent();
    if (existing === null) {
      setVisible(true);
    } else if (existing === "granted") {
      initGA(measurementId);
    }
  }, [measurementId]);

  function handleAccept() {
    setConsent("granted");
    initGA(measurementId);
    updateGAConsent("granted");
    setVisible(false);
  }

  function handleDeny() {
    setConsent("denied");
    updateGAConsent("denied");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Bandeau de consentement aux cookies"
      aria-live="polite"
      className="fixed right-0 bottom-0 left-0 z-[9998] border-t border-base-300 bg-base-100 shadow-lg"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-5">
        <p className="flex-1 text-sm text-base-content/80">
          {`Ce site utilise des cookies pour mesurer l'audience et améliorer votre expérience. Vos
          données sont traitées conformément à notre `}
          <a
            href="/privacy"
            className="text-primary underline underline-offset-2 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ outlineColor: "var(--color-focus)" }}
          >
            Politique de confidentialité.
          </a>
        </p>

        <div className="flex shrink-0 gap-3">
          <button
            onClick={handleDeny}
            className="btn border border-base-300 text-base-content/70 btn-ghost btn-sm hover:border-base-content/30 hover:bg-base-200 focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ outlineColor: "var(--color-focus)" }}
            type="button"
          >
            Refuser
          </button>
          <button
            onClick={handleAccept}
            className="btn btn-sm btn-primary focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ outlineColor: "var(--color-focus)" }}
            type="button"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
