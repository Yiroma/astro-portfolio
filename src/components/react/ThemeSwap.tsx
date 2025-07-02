import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

export default function ThemeSwap() {
  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" className="theme-controller" value="winter" />
      <SunIcon class="swap-off h-6 w-6 fill-current" />
      <MoonIcon class="swap-on h-6 w-6 fill-current" />
    </label>
  );
}
