export default function AboutHero() {
    return (
        <section className="relative bg-hero-imageben bg-fixed bg-cover bg-center py-20 sm:py-28 text-fg transition-colors">
            {/* Overlay adaptativo */}
            <div className="absolute inset-0 bg-white/40 dark:bg-black/60 z-0" />

            {/* Contenido */}
            <div className="relative z-10 container text-center px-4">
                <h1 className="heading-xl mb-4 drop-shadow-lg">BENEFICIOS</h1>
                <p className="heading-sm text-card-desc max-w-2xl mx-auto leading-relaxed">
                    Descubre cómo nuestra plataforma transforma la experiencia de los gimnasios,
                    facilitando la gestión y mejorando la satisfacción de los clientes.
                </p>
            </div>
        </section>
    );
}
