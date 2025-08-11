export default function GymAppFeatures() {
    const steps = [
        { title: "Descarga la App", icon: "/img/app1.png" },
        { title: "Ingresa tu cédula*", icon: "/img/app2.png" },
        { title: "Ingresa el código por SMS**", icon: "/img/app3.png" },
        { title: "Acércate a un entrenador", icon: "/img/app4.png" },
        { title: "¡Listo! Tu rutina estará lista", icon: "/img/app5.png" },
    ];

    return (
        <section className="container py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            {/* Título */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-fg mb-4 tracking-tight">
                    ¿Cómo funciona?
                </h2>
                <p className="text-lg text-card-desc max-w-2xl mx-auto leading-relaxed">
                    Sigue estos sencillos pasos para activar y comenzar a usar tu{" "}
                    <span
                        className="font-semibold"
                        style={{ color: "var(--gim-btn-text)" }}
                    >
                        GymApp
                    </span>

                    .
                </p>
            </div>

            {/* Pasos */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center p-8 rounded-3xl
              bg-card border border-card-desc
              shadow-md dark:shadow-black/30
              hover:shadow-lg dark:hover:shadow-black/50
              transition-all duration-300
              cursor-pointer
              transform hover:-translate-y-1 hover:scale-[1.03]"
                    >
                        {/* Imagen sin número */}
                        <div className="mb-6">
                            <img
                                src={step.icon}
                                alt={step.title}
                                className="w-28 h-28 sm:w-32 sm:h-32 object-contain drop-shadow-sm"
                                loading="lazy"
                                draggable={false}
                            />
                        </div>
                        {/* Texto */}
                        <p className="text-center text-card-fg text-base sm:text-lg font-semibold leading-snug">
                            {step.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* Notas */}
            <div className="mt-12 text-sm text-card-desc text-center space-y-1 max-w-xl mx-auto">
                <p>* Verifica que tu cédula esté registrada correctamente.</p>
                <p>** Recibirás un código vía SMS al celular registrado en tu plan.</p>
            </div>
        </section>
    );
}
