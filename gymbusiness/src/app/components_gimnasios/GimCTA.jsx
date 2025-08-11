export default function GymAppCTA() {
    return (
        <section className="bg-cta py-16 sm:py-20 text-center">
            <div className="container px-4">
                <h2 className="heading-md mb-4">¡Ya no tienes excusas!</h2>
                <p className="mb-6 text-lg max-w-2xl mx-auto">
                    Descarga la app, activa tu cuenta y entrena en cualquier momento con rutinas personalizadas.
                </p>
                <a
                    href="#descarga"
                    className="btn-cta px-8 py-3 rounded-lg inline-block hover:opacity-90 hover:scale-105 transition-transform duration-300"
                >
                    Descargar Ahora
                </a>
            </div>
        </section>
    );
}
