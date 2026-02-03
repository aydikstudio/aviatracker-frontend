import { useTheme } from "@/providers/theme/useTheme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => {
          toggleTheme();
        }}
        className="p-2 sm:p-1 rounded-full bg-card hover:bg-neutral-700  transition-colors flex items-center justify-center"
      >
        {theme === "light" ? <Moon size={22} /> : <Sun size={23} />}
      </button>
    </div>
  );
}
