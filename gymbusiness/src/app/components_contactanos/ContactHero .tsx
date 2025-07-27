export default function ContactHero() {
    return (
        <section className="relative bg-hero-imagec bg-fixed bg-cover bg-center py-20 text-fg transition-colors">
            {/* Overlay oscuro con opacidad diferente para cada modo */}
            <div className="absolute inset-0 bg-white/40 dark:bg-black/60 z-0" />

            {/* Contenido encima del overlay */}
            <div className="relative z-10 container text-center">
                <h1 className="heading-xl mb-4">Contáctanos</h1>
                <p className="heading-sm text-black-800 dark:text-gray-100 max-w-2xl mx-auto mb-6">
                    ¿Tienes dudas o deseas más información? Estamos aquí para ayudarte.
                </p>
            </div>
        </section>
    );
}
