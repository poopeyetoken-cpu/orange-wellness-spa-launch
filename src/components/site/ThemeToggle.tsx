import { MoonStar, SunMedium } from "lucide-react";

const STORAGE_KEY = "orange-wellness-theme";

export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nextIsDark);
    root.style.colorScheme = nextIsDark ? "dark" : "light";
    try { localStorage.setItem(STORAGE_KEY, nextIsDark ? "dark" : "light"); } catch { /* iframe / restricted context */ }
  };

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      onClick={toggle}
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground transition-colors hover:bg-accent active:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <SunMedium className="h-4 w-4 dark:hidden" aria-hidden="true" />
      <MoonStar className="hidden h-4 w-4 dark:block" aria-hidden="true" />
    </button>
  );
}

