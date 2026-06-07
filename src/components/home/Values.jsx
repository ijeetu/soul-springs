import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Values() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-fade-up', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-20 px-4 md:px-8 max-w-[1400px] mx-auto text-center">
        <span className="text-xs font-semibold tracking-wider uppercase text-brand-red bg-brand-red/10 px-4 py-1 rounded-full mb-4 inline-block gsap-fade-up">Why Choose Us</span>
        <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-10 md:mb-16 gsap-fade-up">What Makes Us Best</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-left gsap-fade-up">
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition">
                <i className="ph-fill ph-ear text-brand-accent text-3xl mb-4"></i>
                <h4 className="font-serif text-xl text-brand-dark mb-3">You'll Feel Heard & Understood</h4>
                <p className="text-sm text-gray-500">Our counselors listen attentively, creating a space where you can express yourself freely without judgment or pressure.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition">
                <i className="ph-fill ph-shield-check text-brand-red text-3xl mb-4"></i>
                <h4 className="font-serif text-xl text-brand-dark mb-3">Safe & Judgment-Free Environment</h4>
                <p className="text-sm text-gray-500">From your first session onward, we help you uncover patterns, build resilience, and make steady, meaningful progress.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition">
                <i className="ph-fill ph-trend-up text-brand-dark text-3xl mb-4"></i>
                <h4 className="font-serif text-xl text-brand-dark mb-3">Real Change</h4>
                <p className="text-sm text-gray-500">Investing in your mental health isn't a luxury — it's self-respect. You deserve the calm, clarity, and confidence that comes with it.</p>
            </div>
        </div>
    </section>
  );
}
