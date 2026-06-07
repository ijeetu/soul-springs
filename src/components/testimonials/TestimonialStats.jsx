import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const stats = [
  { value: '98%', label: 'Client satisfaction' },
  { value: '4.9/5', label: 'Average rating' },
  { value: '2k+', label: 'Sessions completed' },
  { value: '24h', label: 'Care team response' },
];

export default function TestimonialStats() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.testimonial-stat');
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-brand-dark">
        <div className="py-16 sm:py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="testimonial-stat text-center bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
                        <h3 className="text-4xl md:text-5xl font-serif text-white mb-2">{stat.value}</h3>
                        <p className="text-sm text-white/60">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
