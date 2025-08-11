"use client";

import { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaCog } from "react-icons/fa";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export default function FloatingSettings() {
    const [open, setOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useTheme();
    const menuRef = useRef<HTMLDivElement>(null);

    const buttonSize = 56;
    const radius = 140;

    const startAngle = 130;
    const endAngle = 155;

    const options = [
        {
            id: "whatsapp",
            component: (
                <Link
                    href="https://wa.me/593999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chatea con nosotros en WhatsApp"
                    className="bg-[#25D366] hover:bg-[#1ebe5b] text-white p-4 rounded-full shadow-lg flex items-center justify-center"
                    style={{ width: buttonSize, height: buttonSize }}
                >
                    <FaWhatsapp size={28} />
                </Link>
            ),
        },
        {
            id: "darkmode",
            component: (
                <button
                    onClick={toggleDarkMode}
                    aria-label="Toggle dark mode"
                    className="bg-[#a83466] hover:bg-[#922c59] text-white p-4 rounded-full shadow-lg flex items-center justify-center"
                    style={{ width: buttonSize, height: buttonSize }}
                >
                    {darkMode ? <Sun size={28} /> : <Moon size={28} />}
                </button>
            ),
        },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <>
            {/* WhatsApp SIEMPRE visible en móvil */}
            <div className="fixed bottom-6 right-6 z-50 block md:hidden">
                <Link
                    href="https://wa.me/593999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chatea con nosotros en WhatsApp"
                    className="bg-[#25D366] hover:bg-[#1ebe5b] text-white p-4 rounded-full shadow-lg flex items-center justify-center"
                    style={{ width: buttonSize, height: buttonSize }}
                >
                    <FaWhatsapp size={28} />
                </Link>
            </div>

            {/* Ajustes solo visibles en escritorio */}
            <div ref={menuRef} className="hidden md:block">
                {/* Botón principal */}
                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir ajustes"
                    className="fixed bottom-6 right-6 z-50 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 p-4 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                    style={{ width: buttonSize, height: buttonSize }}
                >
                    <FaCog size={28} />
                </button>

                {/* Botones secundarios */}
                <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
                    {options.map((option, index) => {
                        const total = options.length - 1 || 1;
                        const angleDeg = startAngle + ((endAngle - startAngle) * index) / total;
                        const angleRad = (angleDeg * Math.PI) / 180;

                        const x = open ? Math.cos(angleRad) * radius : 0;
                        const y = open ? -Math.sin(angleRad) * radius : 0;

                        return (
                            <div
                                key={option.id}
                                className="absolute pointer-events-auto transition-all duration-300"
                                style={{
                                    width: buttonSize,
                                    height: buttonSize,
                                    transform: `translate(${x}px, ${y}px)`,
                                    opacity: open ? 1 : 0,
                                }}
                            >
                                {option.component}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
