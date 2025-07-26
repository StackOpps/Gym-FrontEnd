export default function InfoSection() {
    return (
        <section id="servicios" className="bg-bg py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-card rounded-xl shadow p-6">
                    <h3 className="text-xl font-bold mb-2 text-card-fg">Clases en vivo</h3>
                    <p className="text-card-desc">Entrena con instructores desde tu celular o TV.</p>
                </div>
                <div className="bg-card rounded-xl shadow p-6">
                    <h3 className="text-xl font-bold mb-2 text-card-fg">Rutinas personalizadas</h3>
                    <p className="text-card-desc">Planes según tus objetivos: fuerza, cardio o tonificación.</p>
                </div>
                <div className="bg-card rounded-xl shadow p-6">
                    <h3 className="text-xl font-bold mb-2 text-card-fg">Seguimiento de progreso</h3>
                    <p className="text-card-desc">Visualiza tus avances y mantén tu motivación al máximo.</p>
                </div>
            </div>
        </section>
    );
}
