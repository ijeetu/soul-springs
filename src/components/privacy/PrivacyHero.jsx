import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PrivacyHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.privacy-hero-fade');
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-28 sm:pt-36 pb-14 sm:pb-20 px-4 md:px-8 max-w-[1100px] mx-auto text-center">
        <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent bg-brand-accent/10 px-4 py-1.5 rounded-full mb-6 inline-block privacy-hero-fade">Privacy Policy</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark mb-6 leading-tight privacy-hero-fade">
            Your Privacy Matters<br className="hidden md:block"/> at Every Step
        </h1>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8 privacy-hero-fade">
            We are committed to protecting your personal information and maintaining the confidentiality of your care experience.
        </p>
        <div className="inline-flex items-center gap-3 bg-brand-bg rounded-full px-5 py-3 text-sm text-gray-500 privacy-hero-fade">
            <i className="ph-fill ph-shield-check text-brand-accent"></i>
            Last updated: January 2026
        </div>
    </section>
  );
}
