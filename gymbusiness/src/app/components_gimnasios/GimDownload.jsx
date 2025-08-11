export default function GymAppDownload() {
    return (
        <section className="bg-card py-16 sm:py-20 text-center">
            <h2 className="heading-md mb-4">Descárgala Gratis</h2>
            <p className="text-lg text-card-desc mb-6 max-w-2xl mx-auto">
                Disponible para todos nuestros clientes. Activa tu cuenta y empieza a entrenar donde y cuando quieras.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
                <a 
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-105 transition"
                >
                    <img src="/img/playstore.png" alt="Play Store" className="h-14" />
                </a>
                <a 
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-105 transition"
                >
                    <img src="/img/appstore.png" alt="App Store" className="h-14" />
                </a>
            </div>
        </section>
    );
}
