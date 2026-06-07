import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Custom404() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".error-404", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
      gsap.fromTo(".error-content", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: "power3.out" }
      );
      gsap.fromTo(".error-buttons", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Page Not Found | Soul Springs</title>
      </Head>
      <main ref={containerRef} className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-xl">
          <div className="error-404 mb-6">
            <span className="text-[120px] sm:text-[160px] md:text-[200px] font-serif text-brand-accent/20 leading-none block">404</span>
          </div>
          <div className="error-content">
            <h1 className="text-3xl sm:text-4xl font-serif text-brand-dark mb-4">Page Not Found</h1>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              The page you're looking for seems to have wandered off. Let's get you back on track.
            </p>
          </div>
          <div className="error-buttons flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="bg-brand-dark text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition text-sm">
              Back to Home
            </Link>
            <Link href="/contact" className="border border-gray-300 text-brand-dark px-8 py-4 rounded-full font-medium hover:bg-brand-bg transition text-sm">
              Contact Support
            </Link>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-400 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/services" className="text-brand-accent hover:underline">Services</Link>
              <span className="text-gray-300">•</span>
              <Link href="/about" className="text-brand-accent hover:underline">About</Link>
              <span className="text-gray-300">•</span>
              <Link href="/blog" className="text-brand-accent hover:underline">Blog</Link>
              <span className="text-gray-300">•</span>
              <Link href="/book-appointment" className="text-brand-accent hover:underline">Book Appointment</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
