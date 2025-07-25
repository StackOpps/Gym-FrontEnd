"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="hero"
            className="bg-gradient-to-br from-indigo-700 to-purple-700 text-white py-20"
        >
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    Tu gimnasio más cerca, más inteligente
                </motion.h2>
                <p className="text-lg md:text-xl mb-8">
                    Descubre nuestra app para entrenar donde y cuando quieras.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg"
                >
                    Conoce más
                </motion.button>
            </div>
        </section>
    );
}
