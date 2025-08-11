"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    // Referencia para el formulario para saber su altura
    const formRef = useRef<HTMLDivElement>(null);
    const [formHeight, setFormHeight] = useState<number>(0);

    // Actualizar altura al montar y cuando cambie contenido
    useEffect(() => {
        if (formRef.current) {
            setFormHeight(formRef.current.offsetHeight);
        }
    }, [form]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Mensaje enviado");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section className="py-16 bg-bg">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-stretch gap-10">
                    {/* Imagen izquierda */}
                    <div
                        className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg relative"
                        style={{ height: formHeight || "auto", minHeight: 300 }}
                    >
                        <Image
                            src="/img/fondo6.jpg"
                            alt="Contacto"
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(min-width: 768px) 50vw, 100vw"
                            priority={true}
                            className="rounded-lg"
                        />
                    </div>

                    {/* Formulario derecha */}
                    <div
                        ref={formRef}
                        className="md:w-1/2 w-full bg-card p-8 rounded-lg shadow-md border-gray-300 dark:border-gray-700"
                    >
                        <h2 className="heading-md mb-6 text-center md:text-left">
                            Formulario de contacto
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre completo"
                                required
                                className=" w-full p-4 rounded bg-gray-100 dark:bg-gray-800 text-fg placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cta hover:border-gray-400 dark:hover:border-gray-500 transition"
                                onChange={handleChange}
                                value={form.name}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                required
                                className=" w-full p-4 rounded bg-gray-100 dark:bg-gray-800 text-fg placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cta hover:border-gray-400 dark:hover:border-gray-500 transition"
                                onChange={handleChange}
                                value={form.email}
                            />
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Tu mensaje"
                                required
                                className=" w-full p-4 rounded bg-gray-100 dark:bg-gray-800 text-fg placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cta hover:border-gray-400 dark:hover:border-gray-500 transition"
                                onChange={handleChange}
                                value={form.message}
                            ></textarea>
                            <button
                                type="submit"
                                className="btn-cta px-6 py-3 rounded w-full md:w-auto block mx-auto md:mx-0 border border-gray-700 dark:border-white hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition"
                            >
                                Enviar mensaje
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
