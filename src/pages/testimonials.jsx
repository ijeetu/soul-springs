import Head from "next/head";
import TestimonialsHero from "../components/testimonials/TestimonialsHero";
import TestimonialsGrid from "../components/testimonials/TestimonialsGrid";
import TestimonialStats from "../components/testimonials/TestimonialStats";
import FeaturedStory from "../components/testimonials/FeaturedStory";
import BottomCTA from "../components/home/BottomCTA";

export default function TestimonialsPage() {
  return (
    <>
      <Head>
        <title>Testimonials | Soul Springs</title>
        <meta name="description" content="Read real client testimonials and healing stories from Soul Springs therapy and counseling services." />
      </Head>
      <main>
        <TestimonialsHero />
        <TestimonialsGrid />
        <TestimonialStats />
        <FeaturedStory />
        <BottomCTA
          title={<>Ready to Begin<br className="hidden md:block"/> Your Own Story?</>}
          subtitle="Our compassionate counselors are ready to support you with care that feels personal and safe."
          primaryLabel="Book an Appointment"
          primaryHref="/book-appointment"
          secondaryLabel="View Services"
          secondaryHref="/services"
        />
      </main>
    </>
  );
}
