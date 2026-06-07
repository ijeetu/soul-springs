import Head from "next/head";
import ServicesHero from "../components/services/ServicesHero";
import ServicesList from "../components/services/ServicesList";
import ServiceProcess from "../components/services/ServiceProcess";
import ServiceBenefits from "../components/services/ServiceBenefits";
import BottomCTA from "../components/home/BottomCTA";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Soul Springs - Mental Health Counseling</title>
        <meta name="description" content="Explore the therapy services offered by Soul Springs: individual therapy, couples counseling, family therapy, stress management, grief support, and trauma recovery." />
      </Head>
      <main>
        <ServicesHero />
        <ServicesList />
        <ServiceProcess />
        <ServiceBenefits />
        <BottomCTA
          title={<>Not Sure Which Service<br className="hidden md:block"/> is Right for You?</>}
          subtitle="Book a free 15-minute consultation and our team will help you find the best path forward."
          primaryLabel="Free Consultation"
          primaryHref="/book-appointment"
          secondaryLabel="Learn About Us"
          secondaryHref="/about"
        />
      </main>
    </>
  );
}
