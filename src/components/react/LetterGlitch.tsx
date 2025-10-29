import { useRef, useEffect } from "react";

const LetterGlitch = ({
  glitchColors,
  glitchSpeed = 75,
}: {
  glitchColors?: string[];
  glitchSpeed?: number;
}) => {
  // eslint-disable-next-line no-undef
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>();

  const FONT_SIZE = 16;
  const CHAR_WIDTH = 10;
  const CHAR_HEIGHT = 20;

  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=[]{}:<>0123456789";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let letters: Array<{ char: string; color: string }> = [];
    let currentColors: string[] = [];

    const getThemeColors = (): string[] => {
      if (glitchColors && glitchColors.length > 0) return glitchColors;

      const computedStyle = window.getComputedStyle(document.documentElement);
      const primaryColor = computedStyle.getPropertyValue("--color-primary").trim();

      const colors = [
        primaryColor,
        `color-mix(in oklch, ${primaryColor} 40%, transparent)`,
        `color-mix(in oklch, ${primaryColor} 10%, transparent)`,
      ].filter((color) => color && color !== "");

      // Fallback si aucune couleur n'est trouvée
      return colors.length > 0 ? colors : ["#5e4491", "#A476FF", "#241a38"];
    };

    const updateColorsIfNeeded = () => {
      const newColors = getThemeColors();
      const colorsChanged = JSON.stringify(newColors) !== JSON.stringify(currentColors);

      if (colorsChanged && newColors.length > 0) {
        currentColors = newColors;
        // Vérifier que letters existe et n'est pas vide
        if (letters.length > 0) {
          letters.forEach((letter) => {
            letter.color = currentColors[Math.floor(Math.random() * currentColors.length)];
          });
        }
      }
    };

    // Initialiser les couleurs
    currentColors = getThemeColors();

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      canvas.width = rect.width;
      canvas.height = rect.height;

      const cols = Math.ceil(rect.width / CHAR_WIDTH);
      const rows = Math.ceil(rect.height / CHAR_HEIGHT);

      // S'assurer qu'on a des couleurs avant de créer les lettres
      if (currentColors.length === 0) {
        currentColors = getThemeColors();
      }

      letters = Array.from({ length: cols * rows }, () => ({
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        color: currentColors[Math.floor(Math.random() * currentColors.length)],
      }));
    };

    const draw = () => {
      if (letters.length === 0) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px monospace`;
      ctx.textBaseline = "top";

      const cols = Math.ceil(canvas.width / CHAR_WIDTH);

      letters.forEach((letter, i) => {
        const x = (i % cols) * CHAR_WIDTH;
        const y = Math.floor(i / cols) * CHAR_HEIGHT;
        ctx.fillStyle = letter.color;
        ctx.fillText(letter.char, x, y);
      });
    };

    const updateGlitch = () => {
      if (letters.length === 0 || currentColors.length === 0) return;

      const updateCount = Math.max(1, Math.floor(letters.length * 0.05));

      for (let i = 0; i < updateCount; i++) {
        const index = Math.floor(Math.random() * letters.length);
        // Vérifier que l'index est valide
        if (index >= 0 && index < letters.length) {
          letters[index] = {
            char: CHARS[Math.floor(Math.random() * CHARS.length)],
            color: currentColors[Math.floor(Math.random() * currentColors.length)],
          };
        }
      }
    };

    let lastUpdate = 0;
    let lastColorCheck = 0;
    const animate = (timestamp: number) => {
      if (lastUpdate === 0) {
        lastUpdate = timestamp;
      }

      // Vérifier les changements de couleurs toutes les 500ms
      if (timestamp - lastColorCheck >= 500) {
        updateColorsIfNeeded();
        lastColorCheck = timestamp;
      }

      if (timestamp - lastUpdate >= glitchSpeed) {
        updateGlitch();
        lastUpdate = timestamp;
      }
      draw();
      animationRef.current = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);
    animationRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== undefined) {
        window.cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [glitchColors, glitchSpeed]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-base-200">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
};

export default LetterGlitch;
