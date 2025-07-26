"use client";
import React from "react";
import Image from "next/image";

export default function Content() {
  return (
    <section className="bg-bg py-12 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg mb-4 leading-tight">
            Transforma tu cuerpo con{" "}
            <span className="text-[#a83466] dark:text-pink-400">GYMFIT</span>
          </h2>
          <p className="text-base sm:text-lg mb-6 text-fg max-w-xl mx-auto md:mx-0">
            En GYMFIT te ayudamos a alcanzar tus metas de salud y bienestar con
            programas personalizados, entrenadores expertos y el mejor ambiente
            de entrenamiento.
          </p>
          <ul className="list-disc list-inside text-fg text-left max-w-md mx-auto md:mx-0 mb-6 space-y-1">
            <li>Planes personalizados</li>
            <li>Entrenadores certificados</li>
            <li>Área de cardio, pesas y crossfit</li>
            <li>Clases grupales dinámicas</li>
          </ul>
          <a
            href="/servicios"
            className="inline-block bg-[#a83466] text-white px-6 py-3 rounded-lg hover:bg-[#922c59] transition"
          >
            Conoce nuestros servicios
          </a>
        </div>

        {/* Imagen */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/img/PesasGym.jpeg"
            alt="Entrenamiento GYMFIT"
            width={500}
            height={500}
            className="rounded-2xl shadow-md w-full max-w-sm sm:max-w-md md:max-w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
