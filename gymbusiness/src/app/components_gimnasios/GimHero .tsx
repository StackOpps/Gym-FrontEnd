export default function GymAppHero() {
    return (
        <section className="relative bg-hero-imageg bg-fixed bg-cover bg-center py-20 sm:py-28 text-fg">
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/40 dark:bg-black/60 z-0" />

            <div className="relative z-10 container text-center px-4">
                <h1 className="heading-xl mb-4 drop-shadow-lg">Conoce nuestra aplicación</h1>
                <p className="heading-sm text-card-desc max-w-2xl mx-auto leading-relaxed">
                    Lleva tu entrenamiento en la palma de tu mano.
                    Consulta tu rutina con videos, series y repeticiones en cualquier momento.
                </p>
            </div>
        </section>
    );
}
