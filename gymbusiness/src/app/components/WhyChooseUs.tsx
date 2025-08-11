"use client";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
    "Entrenadores expertos",
    "Equipamiento de última generación",
    "Comunidad solidaria",
];

export default function PorQueElegirnosCollage() {
    return (
        <section className="py-16 px-4 sm:px-8 lg:px-24 bg-bg text-fg transition-colors duration-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Imagen */}
                <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[400px] rounded-lg overflow-hidden shadow-2xl bg-card">
                    <Image
                        src="/img/diseño1.png"
                        alt="Entrenamiento"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>


                {/* Texto y botones */}
                <div className="mx-auto max-w-lg text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-card-fg">
                        ¿Por qué elegirnos?
                    </h2>
                    <p className="text-base sm:text-lg mb-8 leading-relaxed text-card-desc">
                        Estamos comprometidos a ayudarte a alcanzar tus objetivos fitness
                        con los mejores recursos y apoyo disponibles.
                    </p>

                    <ul className="space-y-4 mb-8">
                        {features.map((feature, i) => (
                            <li
                                key={i}
                                className="flex items-center space-x-3 text-card-fg justify-center lg:justify-start text-sm sm:text-base"
                            >
                                <CheckCircle2 className="w-6 h-6 text-[#a83466] flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                        <a
                            href="/know-more"
                            className="font-semibold px-6 py-3 rounded-full shadow-md transition text-center"
                            style={{
                                backgroundColor: "#a83466",
                                color: "white",
                            }}
                            onMouseEnter={(e) =>
                                ((e.target as HTMLElement).style.backgroundColor = "#922c59")
                            }
                            onMouseLeave={(e) =>
                                ((e.target as HTMLElement).style.backgroundColor = "#a83466")
                            }
                        >
                            Saber más
                        </a>
                        <a
                            href="/contact"
                            className="border font-semibold px-6 py-3 rounded-full transition text-[#a83466] text-center"
                            style={{ borderColor: "#a83466" }}
                            onMouseEnter={(e) => {
                                (e.target as HTMLElement).style.backgroundColor = "#a83466";
                                (e.target as HTMLElement).style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                                (e.target as HTMLElement).style.backgroundColor = "transparent";
                                (e.target as HTMLElement).style.color = "#a83466";
                            }}
                        >
                            Contáctanos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
