"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext"; // Ajusta la ruta según dónde tengas tu context

const brands = [
    { name: "Nike", light: "/img/marcas/nike.png", dark: "/img/marcas/nike-light.png" },
    { name: "Adidas", light: "/img/marcas/adidas.png", dark: "/img/marcas/adidas-light.webp" },
];

export default function BrandCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { darkMode } = useTheme();

    useEffect(() => {
        const interval = setInterval(() => {
            scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-10 bg-bg transition-colors duration-300">
            <h3 className="text-2xl font-semibold text-center text-fg mb-6">
                Marcas que confían en nosotros
            </h3>

            <div
                ref={scrollRef}
                className="flex flex-wrap justify-center gap-6 px-6 scrollbar-hide scroll-smooth"
            >
                {brands.map(({ name, light, dark }, index) => (
                    <motion.div
                        key={index}
                        className="w-[120px] h-[80px] flex items-center justify-center p-4 bg-card rounded-xl shadow-md transition-colors duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Image
                            src={darkMode ? dark : light}
                            alt={name}
                            width={100}
                            height={40}
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
