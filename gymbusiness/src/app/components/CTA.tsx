export default function CTA() {
    return (
        <section className="bg-cta py-12 px-4 sm:px-6 md:px-8 text-center transition-colors duration-300">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para transformar tu cuerpo?
            </h2>
            <p className="mb-6 text-base sm:text-lg max-w-xl mx-auto">
                Únete a miles de usuarios que ya usan nuestra app.
            </p>
            <button
                className="btn-cta px-6 py-3 rounded-full font-semibold shadow-lg transition-colors duration-300 text-base sm:text-lg"
                aria-label="Descargar la aplicación GYMFIT"
            >
                Descárgala ahora
            </button>
        </section>
    );
}
