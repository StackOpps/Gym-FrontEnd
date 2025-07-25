import React from "react";

export default function InfoSection() {
    return (
        <section id="servicios" className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white rounded-xl shadow p-6">
                    <h3 className="text-xl font-bold mb-2">Clases en vivo</h3>
                    <p>Entrena con instructores desde tu celular o TV.</p>
                </div>
                <div className="bg-white rounded-xl shadow p-6">
                    <h3 className="text-xl font-bold mb-2">Rutinas personalizadas</h3>
                    <p>Planes según tus objetivos: fuerza, cardio o tonificación.</p>
                </div>
                <div className="bg-white rounded-xl shadow p-6">
                    <h3 className="text-xl font-bold mb-2">Seguimiento de progreso</h3>
                    <p>Visualiza tus avances y mantén tu motivación al máximo.</p>
                </div>
            </div>
        </section>
    );
}
