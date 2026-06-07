import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { testimonials } from './testimonialsData';

export default function TestimonialsGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.testimonial-card');
      gsap.fromTo(items,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
          opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.08
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="px-4 md:px-8 max-w-[1400px] mx-auto pb-16 sm:pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((item, i) => (
                <div key={i} className={`testimonial-card bg-brand-bg rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col ${i === 0 ? 'lg:col-span-2' : ''}`}>
                    <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="flex gap-1">
                            {[...Array(item.stars)].map((_, j) => (
                                <i key={j} className="ph-fill ph-star text-yellow-400 text-sm"></i>
                            ))}
                        </div>
                        <span className="text-xs bg-white text-gray-500 px-3 py-1 rounded-full">{item.service}</span>
                    </div>
                    <p className="text-brand-dark text-sm md:text-base leading-relaxed flex-1 mb-8">“{item.text}”</p>
                    <div className="flex items-center gap-3 pt-5 border-t border-gray-200">
                        <img src={item.avatar} className="w-12 h-12 rounded-full object-cover" alt={item.name} />
                        <div>
                            <h5 className="text-sm font-semibold text-brand-dark">{item.name}</h5>
                            <p className="text-xs text-gray-400">{item.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}
