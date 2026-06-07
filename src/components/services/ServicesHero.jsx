import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ServicesHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.svc-hero-fade');
      if (items.length) {
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12 }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef}>
        <div className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 md:px-8 max-w-[1400px] mx-auto text-center">
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-red bg-brand-red/10 px-4 py-1.5 rounded-full mb-6 inline-block svc-hero-fade">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark mb-6 leading-tight svc-hero-fade">
                Healing Tailored<br className="hidden md:block"/> to Your Needs
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto svc-hero-fade">
                We offer a range of professional mental health services designed to support you through every stage of your journey — from personal growth to overcoming life's toughest challenges.
            </p>
        </div>

        <div className="px-4 md:px-8 max-w-[1400px] mx-auto pb-16 sm:pb-20 svc-hero-fade">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden w-full aspect-[16/7] md:aspect-[21/9]">
                <img
                    src="/images/1527689368864.webp"
                    alt="Therapy services"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    </section>
  );
}
