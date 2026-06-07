import Head from "next/head";
import ContactHero from "../components/contact/ContactHero";
import ContactCards from "../components/contact/ContactCards";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactMap from "../components/contact/ContactMap";
import BottomCTA from "../components/home/BottomCTA";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Soul Springs</title>
        <meta name="description" content="Contact Soul Springs for mental health counseling, therapy appointments, service questions, and compassionate support." />
      </Head>
      <main>
        <ContactHero />
        <ContactCards />
        <ContactFormSection />
        <ContactMap />
        <BottomCTA
          title={<>Your Healing Journey<br className="hidden md:block"/> Can Start Today</>}
          subtitle="Reach out when you're ready. We'll help you find the right therapist and support plan."
          primaryLabel="Book an Appointment"
          primaryHref="/book-appointment"
          secondaryLabel="View Services"
          secondaryHref="/services"
        />
      </main>
    </>
  );
}
