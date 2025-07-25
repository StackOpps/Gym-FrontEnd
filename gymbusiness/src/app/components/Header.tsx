
"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <div className="flex items-center space-x-2">
                    <Image src="./img/logo.png" alt="GYMFIT Logo" width={40} height={40} />
                    <h1 className="text-2xl font-bold" style={{ color: '#25142d' }}>GYMFIT</h1>
                </div>
                <nav className="space-x-6 text-gray-700 font-medium">
                    <Link href="#hero">Inicio</Link>
                    <Link href="#servicios">Servicios</Link>
                    <Link href="#contacto">Contacto</Link>
                </nav>
            </div>
        </header>
    );
}

