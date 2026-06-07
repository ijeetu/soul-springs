import Head from "next/head";
import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import Team from "../components/about/Team";
import AboutValues from "../components/about/AboutValues";
import BottomCTA from "../components/home/BottomCTA";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Soul Springs - Mental Health Counseling</title>
        <meta name="description" content="Learn about the mission, vision, and compassionate team behind Soul Springs mental health counseling services." />
      </Head>
      <main>
        <AboutHero />
        <OurStory />
        <MissionVision />
        <Team />
        <AboutValues />
        <BottomCTA
          title={<>Ready to Start<br className="hidden md:block"/> Your Healing Journey?</>}
          subtitle="Take the first step today. Our team is here to listen, support, and guide you every step of the way."
          primaryLabel="Book an Appointment"
          primaryHref="/book-appointment"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
        />
      </main>
    </>
  );
}
