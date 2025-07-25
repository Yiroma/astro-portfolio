import MoonIcon from "@/assets/icons/MoonIcon";
import SunIcon from "@/assets/icons/SunIcon";

export default function ThemeSwap() {
  return (
    <label className="swap swap-rotate border-l border-base-content/10 pl-4">
      <input
        type="checkbox"
        className="theme-controller"
        value="winter"
        data-toggle-theme="winter,night"
        data-act-class="ACTIVECLASS"
        aria-label="Basculer entre le thème clair et le thème sombre"
      />
      <span className="sr-only">Changer de thème sombre / thème clair</span>
      <SunIcon class="swap-off h-6 w-6 fill-current" />
      <MoonIcon class="swap-on h-6 w-6 fill-current" />
    </label>
  );
}
