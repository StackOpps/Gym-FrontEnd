"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const activities = [
    {
        title: "Entrenamiento de fuerza",
        imgSrc: "/img/actividades/strength.jpg",
    },
    {
        title: "Cardio",
        imgSrc: "/img/actividades/cardio.jpg",
    },
    {
        title: "Entrenamiento funcional",
        imgSrc: "/img/actividades/funcional.jpg",
    },
    {
        title: "Entrenamiento personalizado",
        imgSrc: "/img/actividades/personal.jpg",
    },
];

export default function ActividadesCarousel() {
    return (
        <section className="py-20 px-6 sm:px-8 lg:px-24 bg-bg text-fg transition-colors duration-300">
            <h2 className="text-4xl font-bold text-center mb-12 text-card-fg">
                NUESTRAS <span className="underline underline-offset-4">ACTIVIDADES</span>
            </h2>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="max-w-7xl mx-auto"
            >
                {activities.map(({ title, imgSrc }, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div className="relative rounded-lg overflow-hidden group shadow-xl bg-card">
                            <div className="relative w-full h-[32rem]">
                                <Image
                                    src={imgSrc}
                                    alt={title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    priority={index === 0}
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full bg-[color:var(--card-bg)]/90 p-4 text-center">
                                <h3 className="text-lg font-semibold uppercase text-card-fg">{title}</h3>
                                <button className="mt-3 text-sm px-4 py-2 border border-black-400 text-black-400 rounded hover:bg-gray-400 hover:text-black transition-colors">
                                    Ver más
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
