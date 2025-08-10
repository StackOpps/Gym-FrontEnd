export default function AboutCompany() {
    return (
        <section className="bg-card py-16 sm:py-20">
            <div className="container max-w-5xl mx-auto px-4 text-center">
                <h2 className="heading-md mb-6">GYMBU</h2>
                <p className="text-lg text-card-desc mb-6 leading-relaxed">
                    Esta aplicación es desarrollada por <strong>NextFit Solutions</strong>,
                    una empresa especializada en el desarrollo web y móvil utilizando
                    <span className="font-semibold"> Next.js</span> y <span className="font-semibold">Tailwind CSS</span>.
                    Nuestro objetivo es crear soluciones digitales escalables, eficientes y fáciles de usar.
                </p>

                {/* Lista de valores */}
                <div className="grid sm:grid-cols-3 gap-6 mt-10">
                    {[
                        { title: "Innovación", desc: "Usamos tecnologías modernas para mantenerte siempre a la vanguardia." },
                        { title: "Escalabilidad", desc: "Diseñamos sistemas que crecen contigo y tus clientes." },
                        { title: "Soporte", desc: "Acompañamos a nuestros clientes en cada paso del camino." }
                    ].map((item, i) => (
                        <div key={i} className="bg-bg rounded-xl shadow p-6 hover:shadow-lg transition">
                            <h3 className="heading-sm mb-3">{item.title}</h3>
                            <p className="text-card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
