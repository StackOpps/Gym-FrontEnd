"use client";
import React from "react";
import Image from "next/image";

export default function Content() {
  return (
    <section className="bg-bg py-12 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-fg mb-4">
            Transforma tu cuerpo con{" "}
            <span className="text-[#a83466] dark:text-pink-400">GYMFIT</span>
          </h2>
          <p className="text-fg text-lg mb-6">
            En GYMFIT te ayudamos a alcanzar tus metas de salud y bienestar con
            programas personalizados, entrenadores expertos y el mejor ambiente
            de entrenamiento.
          </p>
          <ul className="list-disc list-inside text-fg mb-6">
            <li>Planes personalizados</li>
            <li>Entrenadores certificados</li>
            <li>Área de cardio, pesas y crossfit</li>
            <li>Clases grupales dinámicas</li>
          </ul>
          <a
            href="#servicios"
            className="inline-block bg-[#a83466] text-white px-6 py-3 rounded-lg hover:bg-[#922c59] transition"
          >
            Conoce nuestros servicios
          </a>
        </div>
        <div>
          <Image
            src="/img/PesasGym.jpeg"
            alt="Entrenamiento GYMFIT"
            width={500}
            height={500}
            className="rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
