import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function AboutHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.about-hero-fade');
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
        {/* Text: Centered */}
        <div className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 md:px-8 max-w-[1400px] mx-auto text-center">
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent bg-brand-accent/10 px-4 py-1.5 rounded-full mb-6 inline-block about-hero-fade">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark mb-6 leading-tight about-hero-fade">
                A Safe Space for<br className="hidden md:block"/> Healing & Growth
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 about-hero-fade">
                At Soul Springs, we believe everyone deserves access to compassionate, professional mental health care. Our mission is to create a nurturing environment where you can explore your feelings and find your path to wellness.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 about-hero-fade">
                <div>
                    <h3 className="text-3xl md:text-4xl font-serif text-brand-dark">11+</h3>
                    <p className="text-xs text-gray-400">Years Experience</p>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                    <h3 className="text-3xl md:text-4xl font-serif text-brand-dark">5+</h3>
                    <p className="text-xs text-gray-400">Licensed Counselors</p>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                    <h3 className="text-3xl md:text-4xl font-serif text-brand-dark">500+</h3>
                    <p className="text-xs text-gray-400">Clients Helped</p>
                </div>
            </div>
        </div>

        {/* Image: Full Width */}
        <div className="px-4 md:px-8 max-w-[1400px] mx-auto pb-16 sm:pb-20 about-hero-fade">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden w-full aspect-[16/7] md:aspect-[21/9]">
                <img
                    src="/images/1573497620053.webp"
                    alt="Therapy session"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    </section>
  );
}
