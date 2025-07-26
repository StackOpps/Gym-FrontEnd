"use client";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function WhatsappButton() {
    return (
        <Link
            href="https://wa.me/593999999999" // Reemplaza con tu número real
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chatea con nosotros en WhatsApp"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5b] text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        >
            <FaWhatsapp size={28} />
        </Link>
    );
}
