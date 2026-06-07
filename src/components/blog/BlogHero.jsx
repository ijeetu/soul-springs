import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function BlogHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.blog-hero-fade');
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-28 sm:pt-36 pb-14 sm:pb-20 px-4 md:px-8 max-w-[1400px] mx-auto text-center">
        <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent bg-brand-accent/10 px-4 py-1.5 rounded-full mb-6 inline-block blog-hero-fade">Soul Springs Journal</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark mb-6 leading-tight blog-hero-fade">
            Thoughts for a Calmer,<br className="hidden md:block"/> Healthier Mind
        </h1>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 blog-hero-fade">
            Explore therapist-written insights, practical mental health tools, and gentle guidance for everyday emotional wellness.
        </p>
        <div className="blog-hero-fade max-w-2xl mx-auto bg-brand-bg rounded-full p-2 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-brand-accent flex-shrink-0">
                <i className="ph ph-magnifying-glass text-lg"></i>
            </div>
            <input
                type="text"
                placeholder="Search articles, tips, and resources..."
                className="w-full bg-transparent outline-none text-sm text-brand-dark placeholder:text-gray-400"
            />
            <button className="hidden sm:block bg-brand-dark text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition">
                Search
            </button>
        </div>
    </section>
  );
}
