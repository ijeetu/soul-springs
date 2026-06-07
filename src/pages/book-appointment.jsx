import Head from "next/head";
import AppointmentHero from "../components/appointment/AppointmentHero";
import AppointmentSteps from "../components/appointment/AppointmentSteps";
import AppointmentForm from "../components/appointment/AppointmentForm";
import FAQ from "../components/home/FAQ";
import BottomCTA from "../components/home/BottomCTA";

export default function BookAppointment() {
  return (
    <>
      <Head>
        <title>Book Appointment | Soul Springs</title>
        <meta name="description" content="Book a therapy appointment with Soul Springs. Choose your service, preferred schedule, and start your healing journey." />
      </Head>
      <main>
        <AppointmentHero />
        <AppointmentSteps />
        <AppointmentForm />
        <FAQ />
        <BottomCTA
          title={<>Have Questions Before<br className="hidden md:block"/> Booking?</>}
          subtitle="Our team can help you choose the right therapist, service, and session format."
          primaryLabel="Contact Us"
          primaryHref="/contact"
          secondaryLabel="View Services"
          secondaryHref="/services"
        />
      </main>
    </>
  );
}
