import Image from 'next/image';

export default function CTA() {
    return (
        <section className="bg-cta w-full py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 items-center min-h-[400px]">
                {/* Texto */}
                <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        ¿Listo para transformar tu cuerpo?
                    </h2>
                    <p className="mb-6 text-base sm:text-lg">
                        Únete a miles de usuarios que ya usan nuestra app.
                    </p>
                    <button
                        className="btn-cta px-6 py-3 rounded-full font-semibold shadow-lg transition-colors duration-300 text-base sm:text-lg"
                        aria-label="Descargar la aplicación GYMFIT"
                    >
                        Descárgala ahora
                    </button>
                </div>

                {/* Imagen */}
                <div className="relative w-full h-64 md:h-96 px-4">
                    <Image
                        src="/img/mockup.png"  // Cambia esta ruta por la de tu imagen
                        alt="Mockup de la aplicación GYMFIT"
                        layout="fill"
                        objectFit="contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
