// ThemeProvider.tsx
"use client";

import { ReactNode, useEffect } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    // On page load, check for theme preference
    const theme = localStorage.getItem("theme") || "system";
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Apply dark mode if:
    // 1. User explicitly selected dark theme OR
    // 2. User prefers system theme AND system is in dark mode
    if (theme === "dark" || (theme === "system" && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return <>{children}</>;
}
