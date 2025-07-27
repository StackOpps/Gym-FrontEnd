import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactInfo() {
    return (
        <section className="bg-card py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-12 text-center md:text-left">
                <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-xl text-cta" />
                    <div>
                        <p className="font-semibold text-sm">Llámanos</p>
                        <p className="text-xs text-card-desc">+593 999 999 999</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <FaEnvelope className="text-xl text-cta" />
                    <div>
                        <p className="font-semibold text-sm">Escríbenos</p>
                        <p className="text-xs text-card-desc">info@gymbu.ec</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-xl text-cta" />
                    <div>
                        <p className="font-semibold text-sm">Visítanos</p>
                        <p className="text-xs text-card-desc">Av. Principal, Ciudad, País</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
