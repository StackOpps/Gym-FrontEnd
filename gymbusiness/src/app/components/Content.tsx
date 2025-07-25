export default function Content() {
  return (
    <section className="bg-gray-50 py-12 px-4" id="hero">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Transforma tu cuerpo con{" "}
            <span className="text-purple-800">GYMFIT</span>
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            En GYMFIT te ayudamos a alcanzar tus metas de salud y bienestar con
            programas personalizados, entrenadores expertos y el mejor ambiente
            de entrenamiento.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Planes personalizados</li>
            <li>Entrenadores certificados</li>
            <li>Área de cardio, pesas y crossfit</li>
            <li>Clases grupales dinámicas</li>
          </ul>
          <a
            href="#servicios"
            className="inline-block bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-purple-900 transition"
          >
            Conoce nuestros servicios
          </a>
        </div>
        <div>
          <img
            src="../../../public/img/PesasGym.jpeg"
            alt="Entrenamiento GYMFIT"
            className="rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
