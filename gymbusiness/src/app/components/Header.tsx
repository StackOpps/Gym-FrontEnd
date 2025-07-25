"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <header className="bg-white dark:bg-[#25142d] shadow-md sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                    <Image src="/img/logo.png" alt="GYMFIT Logo" width={40} height={40} />
                    <h1 className="text-2xl font-bold text-[#25142d] dark:text-white">GYMFIT</h1>
                </div>
                <nav className="space-x-6 text-gray-700 dark:text-gray-200 font-medium">
                    <Link href="#hero">Inicio</Link>
                    <Link href="#servicios">Servicios</Link>
                    <Link href="#contacto">Contacto</Link>
                </nav>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="ml-4 p-2 rounded-full bg-[#a83466] hover:bg-[#922c59] text-white transition-colors"
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </header>
    );
}
