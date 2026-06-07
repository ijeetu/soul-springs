import Head from "next/head";
import Hero from "../components/home/Hero";
import FeatureCards from "../components/home/FeatureCards";
import Services from "../components/home/Services";
import Steps from "../components/home/Steps";
import Values from "../components/home/Values";
import Philosophy from "../components/home/Philosophy";
import Gallery from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";
import MarqueeStats from "../components/home/MarqueeStats";
import Pricing from "../components/home/Pricing";
import FAQ from "../components/home/FAQ";
import BottomCTA from "../components/home/BottomCTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Soul Springs | Mental Health Counseling</title>
        <meta name="description" content="We offer compassionate and personalized mental health support to guide you through life's challenges." />
      </Head>
      <main>
        <Hero />
        <FeatureCards />
        <Services />
        <Steps />
        <Values />
        <Philosophy />
        <Gallery />
        <Testimonials />
        <MarqueeStats />
        <Pricing />
        <FAQ />
        <BottomCTA />
      </main>
    </>
  );
}
