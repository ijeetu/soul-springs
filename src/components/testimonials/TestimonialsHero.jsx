import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function TestimonialsHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.testimonials-hero-fade');
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-28 sm:pt-36 pb-14 sm:pb-20 px-4 md:px-8 max-w-[1100px] mx-auto text-center">
        <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent bg-brand-accent/10 px-4 py-1.5 rounded-full mb-6 inline-block testimonials-hero-fade">Client Stories</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark mb-6 leading-tight testimonials-hero-fade">
            Real Healing Stories<br className="hidden md:block"/> from Real People
        </h1>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto testimonials-hero-fade">
            Read how clients found support, clarity, resilience, and hope through compassionate counseling at Soul Springs.
        </p>
    </section>
  );
}
