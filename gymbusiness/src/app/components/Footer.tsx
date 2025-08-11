// components/Footer.tsx
import React from "react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-900 text-gray-400 py-5">
            <div className="container mx-auto px-6 text-center">
                <p>© {new Date().getFullYear()} GymApp. Todos los derechos reservados.</p>
            </div>
        </footer>

    );
}
