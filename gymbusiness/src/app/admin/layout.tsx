"use client";

import { useState, ReactNode, useEffect } from "react";

interface AdminLayoutProps {
    children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detectar si es pantalla móvil
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleOverlayClick = () => setSidebarOpen(false);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 bg-pink-800 text-white w-64 p-4 transition-transform transform z-20
        ${sidebarOpen || !isMobile ? "translate-x-0" : "-translate-x-full"}`}
            >
                <h2 className="text-xl font-bold mb-6">Admin</h2>
                <nav className="space-y-4">
                    <a href="/admin/dashboard" className="block hover:underline">Dashboard</a>
                    <a href="/admin/usuarios" className="block hover:underline">Usuarios</a>
                    <a href="/admin/configuracion" className="block hover:underline">Configuración</a>
                    <a href="/admin/clientes-control" className="block hover:underline">Control de clientes</a>
                    <a href="/admin/comunicacion" className="block hover:underline">Comunicación</a>
                    <a href="/admin/control-asistencia" className="block hover:underline">Control de Asistencias</a>
                    <a href="/admin/gestion" className="block hover:underline">Panel de Gestión</a>
                    <a href="/admin/horarios" className="block hover:underline">Horarios</a>
                    <a href="/admin/negocio" className="block hover:underline">Negocio</a>
                    <a href="/admin/perfil" className="block hover:underline">Perfil</a>
                    <a href="/admin/planes-membresias" className="block hover:underline">Planes y Membresias</a>
                    <a href="/admin/rutinas" className="block hover:underline">Rutinas</a>
                    <a href="/admin/usuarios" className="block hover:underline">Usuarios</a>
                </nav>
            </div>

            {/* Overlay solo en móvil cuando está abierto */}
            {sidebarOpen && isMobile && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10"
                    onClick={handleOverlayClick}
                ></div>
            )}

            {/* Contenido */}
            <div
                className={`flex-1 flex flex-col transition-all duration-300 ${!isMobile ? "ml-64" : ""
                    }`}
            >
                {/* Botón para abrir/cerrar sidebar solo en móvil */}
                {isMobile && (
                    <div className="p-2 bg-white shadow">
                        <button onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
                    </div>
                )}

                <main className="flex-1 p-6 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
}
