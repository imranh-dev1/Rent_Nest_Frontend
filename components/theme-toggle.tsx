"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Toggle theme"
            />
        );
    }

    const isDark =
        theme === "dark" ||
        (theme === "system" && resolvedTheme === "dark");

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="
                relative
                h-10
                w-10
                rounded-full
                border
                border-border/50
                bg-background/80
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-muted
                hover:shadow-md
            "
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <Sun
                className="
                    h-5
                    w-5
                    rotate-0
                    scale-100
                    transition-all
                    duration-300
                    dark:-rotate-90
                    dark:scale-0
                "
            />

            <Moon
                className="
                    absolute
                    h-5
                    w-5
                    rotate-90
                    scale-0
                    transition-all
                    duration-300
                    dark:rotate-0
                    dark:scale-100
                "
            />

            <span className="sr-only">
                {isDark ? "Switch to light mode" : "Switch to dark mode"}
            </span>
        </Button>
    );
}