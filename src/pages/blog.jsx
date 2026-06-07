import Head from "next/head";
import BlogHero from "../components/blog/BlogHero";
import FeaturedPost from "../components/blog/FeaturedPost";
import BlogGrid from "../components/blog/BlogGrid";
import BlogNewsletter from "../components/blog/BlogNewsletter";
import BottomCTA from "../components/home/BottomCTA";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Soul Springs - Mental Health Counseling</title>
        <meta name="description" content="Read therapist-written mental health articles, therapy tips, mindfulness practices, relationship guidance, and self-care resources from Soul Springs." />
      </Head>
      <main>
        <BlogHero />
        <FeaturedPost />
        <BlogGrid />
        <BlogNewsletter />
        <BottomCTA
          title={<>Need More Than<br className="hidden md:block"/> an Article?</>}
          subtitle="If you are ready for personalized support, our counselors are here to help you take the next step."
          primaryLabel="Book an Appointment"
          primaryHref="/book-appointment"
          secondaryLabel="View Services"
          secondaryHref="/services"
        />
      </main>
    </>
  );
}
