"use client";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function DarkModeFloatingButton() {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="hidden lg:block fixed bottom-22 right-8 z-50 p-3 rounded-full bg-[#a83466] hover:bg-[#922c59] shadow-xl text-white transition-colors"
        >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
    );
}
