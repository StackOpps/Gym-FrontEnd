"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import pesoAnimation from "../../../public/img/pesa.json";

export default function Hero() {
    return (
        <section
            id="hero"
            className="bg-cta py-20 sm:py-28 md:py-32 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between">
                {/* Texto y botón */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-cta-text"
                    >
                        Tu gimnasio más cerca, más inteligente
                    </motion.h2>
                    <p className="text-base sm:text-lg md:text-xl mb-10 text-cta-text max-w-lg mx-auto lg:mx-0">
                        Descubre nuestra app para entrenar donde y cuando quieras.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="btn-cta font-semibold px-8 py-4 rounded-full shadow-lg transition-colors duration-300 text-base sm:text-lg"
                    >
                        Conoce más
                    </motion.button>
                </div>

                {/* Animación Lottie */}
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-full lg:h-auto max-w-md mx-auto mb-12 lg:mb-0">
                    <Lottie animationData={pesoAnimation} loop={true} />
                </div>

            </div>
        </section>
    );
}
