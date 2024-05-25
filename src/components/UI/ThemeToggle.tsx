"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun size={24} className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
            <Moon size={24} className="absolute transition-all scale-100 rotate-0 dark:rotate-90 dark:scale-0" />
        </button>
    )
}