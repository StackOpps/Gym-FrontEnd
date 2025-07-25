// pages/index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import CAT from "./components/CTA";
import Content from "./components/Content";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GymApp - Tu app para gimnasios</title>
        <meta
          name="description"
          content="Gestiona tu gimnasio y motiva a tus clientes con GymApp."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main>
        <Hero />
        <InfoSection />
        <Content />
        <CAT />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default Home;
