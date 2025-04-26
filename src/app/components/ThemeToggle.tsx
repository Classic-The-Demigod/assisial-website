// ThemeToggle.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  // Theme states: 'system', 'light', or 'dark'
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system");
  // Actual theme that's applied (derived from system preference when in 'system' mode)
  const [actualTheme, setActualTheme] = useState<"light" | "dark">("light");

  // Initialize theme from localStorage and detect system preference
  useEffect(() => {
    // Check for stored theme preference
    const storedTheme = localStorage.getItem("theme") as
      | "system"
      | "light"
      | "dark"
      | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }

    // Set up system preference detection
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateActualTheme = () => {
      if (theme === "system") {
        setActualTheme(mediaQuery.matches ? "dark" : "light");
      } else {
        setActualTheme(theme as "light" | "dark");
      }
    };

    // Initial setting
    updateActualTheme();

    // Listen for system preference changes
    const listener = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        setActualTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [theme]);

  // Update document class when actual theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (actualTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [actualTheme]);

  // Toggle between themes (system -> light -> dark -> system)
  const toggleTheme = () => {
    const newTheme =
      theme === "system" ? "light" : theme === "light" ? "dark" : "system";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 transition-colors"
      aria-label={`Switch to ${
        theme === "system" ? "light" : theme === "light" ? "dark" : "system"
      } mode`}
    >
      <div className="relative w-6 h-6">
        {/* Sun icon */}
        <motion.div
          initial={{
            opacity: actualTheme === "light" ? 1 : 0,
            scale: actualTheme === "light" ? 1 : 0,
          }}
          animate={{
            opacity: actualTheme === "light" ? 1 : 0,
            scale: actualTheme === "light" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="text-amber-500" size={24} />
        </motion.div>

        {/* Moon icon */}
        <motion.div
          initial={{
            opacity: actualTheme === "dark" ? 1 : 0,
            scale: actualTheme === "dark" ? 1 : 0,
          }}
          animate={{
            opacity: actualTheme === "dark" ? 1 : 0,
            scale: actualTheme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="text-sky-300" size={24} />
        </motion.div>
      </div>

      {/* Optional indicator for system mode */}
      {theme === "system" && (
        <div className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full" />
      )}
    </button>
  );
};

export default ThemeToggle;
