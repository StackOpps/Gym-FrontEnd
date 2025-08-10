export default function AboutContent() {
    return (
        <section className="container py-16 sm:py-20">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                
                {/* Imagen */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                        src="/img/gimnasios.jpg" 
                        alt="Equipo de trabajo" 
                        className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                    />
                </div>

                {/* Texto */}
                <div className="text-center md:text-left">
                    <h2 className="heading-md mb-6">Asociados</h2>
                    <p className="text-lg text-card-desc mb-4 leading-relaxed">
                        Somos un equipo apasionado por el mundo fitness y la tecnología. 
                        Desarrollamos herramientas que optimizan la gestión de gimnasios, 
                        mejoran la experiencia de los clientes y ayudan a los negocios a crecer.
                    </p>
                    <p className="text-lg text-card-desc leading-relaxed">
                        Creemos que la innovación, el soporte cercano y los resultados medibles 
                        son la clave para el éxito de cualquier gimnasio.
                    </p>
                </div>
            </div>
        </section>
    );
}
