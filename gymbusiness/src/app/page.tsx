import Hero from './components/Hero';
import Content from './components/Content';
import CTA from './components/CTA';
import Features from './components/Features';
import Reviews from './components/Reviews';
import BrandCarousel from './components/BrandCarousel';
import WhyChooseUs from './components/WhyChooseUs';
import ActividadesCarousel from './components/ActividadesCarousel';


export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandCarousel />
      <WhyChooseUs />
      <ActividadesCarousel />
      <Content />
      <CTA />
      <Features />
      <Reviews />
    </>
  );
}
