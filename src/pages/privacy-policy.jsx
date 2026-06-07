import Head from "next/head";
import PrivacyHero from "../components/privacy/PrivacyHero";
import PrivacyHighlights from "../components/privacy/PrivacyHighlights";
import PrivacyContent from "../components/privacy/PrivacyContent";
import BottomCTA from "../components/home/BottomCTA";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Soul Springs</title>
        <meta name="description" content="Read the Soul Springs privacy policy and learn how we protect your personal information and therapy-related data." />
      </Head>
      <main>
        <PrivacyHero />
        <PrivacyHighlights />
        <PrivacyContent />
        <BottomCTA
          title={<>Questions About<br className="hidden md:block"/> Your Privacy?</>}
          subtitle="Contact our team if you need clarification about how your information is collected, protected, or used."
          primaryLabel="Contact Us"
          primaryHref="/contact"
          secondaryLabel="View FAQ"
          secondaryHref="/faq"
        />
      </main>
    </>
  );
}
