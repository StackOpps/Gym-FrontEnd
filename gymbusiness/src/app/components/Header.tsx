"use client";
import Link from "next/link";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

export default function Header() {
    const { darkMode, toggleDarkMode } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <header className="bg-bg shadow-md sticky top-0 z-50 transition-colors duration-300 flex items-center py-4">

            <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Image src="/img/logo.png" alt="GYMFIT Logo" width={40} height={40} />
                    <h1 className="text-2xl font-bold text-fg">GYMFIT</h1>
                </div>
                <nav className="space-x-6 font-medium text-fg">
                    <Link href="/">Inicio</Link>
                    <Link href="/servicios">Servicios</Link>
                    <Link href="/contactanos">Contacto</Link>
                </nav>
                <button
                    onClick={toggleDarkMode}
                    className="ml-4 p-2 rounded-full bg-[#a83466] hover:bg-[#922c59] text-white transition-colors"
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </header>
    );
}
