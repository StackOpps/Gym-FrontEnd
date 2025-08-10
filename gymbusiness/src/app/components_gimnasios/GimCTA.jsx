export default function AboutCTA() {
    return (
        <section className="bg-cta py-16 sm:py-20 text-center transition-colors">
            <div className="container px-4">
                <h2 className="heading-md mb-4">¿Listo para llevar tu gimnasio al siguiente nivel?</h2>
                <p className="mb-6 text-lg max-w-2xl mx-auto">
                    Contáctanos hoy y empieza a transformar tu negocio con tecnología de vanguardia.
                </p>
                <a
                    href="/contactanos"
                    className="btn-cta px-8 py-3 rounded-lg inline-block hover:opacity-90 hover:scale-105 transition-transform duration-300"
                >
                    Contáctanos
                </a>
            </div>
        </section>
    );
}
