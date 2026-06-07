import Head from "next/head";
import FAQHero from "../components/faq/FAQHero";
import FAQTopics from "../components/faq/FAQTopics";
import FAQAccordion from "../components/faq/FAQAccordion";
import BottomCTA from "../components/home/BottomCTA";

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ | Soul Springs</title>
        <meta name="description" content="Find answers to common questions about Soul Springs therapy sessions, booking, confidentiality, online counseling, and policies." />
      </Head>
      <main>
        <FAQHero />
        <FAQTopics />
        <FAQAccordion />
        <BottomCTA
          title={<>Still Not Sure<br className="hidden md:block"/> Where to Begin?</>}
          subtitle="Our care team can help answer your questions and recommend the right first step."
          primaryLabel="Contact Us"
          primaryHref="/contact"
          secondaryLabel="View Services"
          secondaryHref="/services"
        />
      </main>
    </>
  );
}
