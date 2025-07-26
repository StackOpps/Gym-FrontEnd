"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X, Contact } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
    const { darkMode, toggleDarkMode } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md shadow-md border-b dark:border-gray-800 transition-colors duration-500 h-16 sm:h-20">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4 sm:px-6 lg:px-12">
                {/* Menú izquierdo */}
                <div className="flex items-center space-x-4">
                    <Image
                        src="/img/logo.png"
                        alt="Logo"
                        width={44}
                        height={44}
                        className="rounded-md"
                        priority
                    />
                    <nav className="hidden lg:flex items-center space-x-6 font-semibold text-fg tracking-wide">
                        {[
                            { href: "/", label: "Inicio" },
                            { href: "/servicios", label: "Servicios" },
                            { href: "/contactanos", label: "Contacto" },
                            { href: "/nosotros", label: "Nosotros" },

                        ].map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="relative group py-2 hover:text-[#a83466] transition-colors"
                            >
                                {label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a83466] group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Modo oscuro (solo escritorio) */}


                {/* Panel administrativo + móvil */}
                <div className="flex items-center space-x-3">
                    {/* Panel Admin visible siempre */}
                    <Link
                        href="/admin"
                        className="hidden sm:inline-flex px-4 py-2 bg-[#a83466] hover:bg-[#922c59] text-white rounded-md text-sm font-semibold transition"
                    >
                        Panel Administrativo
                    </Link>

                    {/* Botón modo oscuro solo móvil */}
                    <button
                        onClick={toggleDarkMode}
                        aria-label="Toggle dark mode"
                        className="lg:hidden p-2 rounded-full bg-[#a83466] hover:bg-[#922c59] text-white transition-colors"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    {/* Menú hamburguesa */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden p-2 text-fg rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Menú móvil */}
            <nav
                className={`lg:hidden bg-bg dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-screen py-5" : "max-h-0 py-0"
                    }`}
            >
                <ul className="flex flex-col px-6 space-y-3 font-semibold text-fg tracking-wide">
                    {[
                        { href: "/", label: "Inicio" },
                        { href: "/nosotros", label: "Nosotros" },
                        { href: "/horarios", label: "Horarios" },
                        { href: "/docentes", label: "Docentes" },
                        { href: "/aulas", label: "Aulas" },
                        { href: "/admin", label: "Panel Administrativo" },
                    ].map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className="block py-2 rounded-md hover:text-[#a83466] transition-colors"
                            >
                                {label}
                            </Link>
                            <hr className="border-gray-300 dark:border-gray-700 my-1" />
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
