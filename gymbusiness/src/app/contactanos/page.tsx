import CTA from "../components/CTA";
import ContactForm from "../components_contactanos/ContactForm ";
import ContactHero from "../components_contactanos/ContactHero ";
import ContactInfo from "../components_contactanos/ContactInfo ";


export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <CTA />
        </>
    );
}
