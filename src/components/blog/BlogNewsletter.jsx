import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function BlogNewsletter() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.newsletter-fade');
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-brand-bg">
        <div className="py-16 sm:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-12 items-center">
                <div className="newsletter-fade">
                    <span className="text-xs font-semibold tracking-wider uppercase text-brand-red bg-brand-red/10 px-4 py-1.5 rounded-full mb-6 inline-block">Stay Connected</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-4 leading-tight">Receive Gentle Mental Health Notes</h2>
                    <p className="text-gray-500 text-sm leading-relaxed">Get monthly therapy insights, grounding exercises, and self-care reflections directly in your inbox.</p>
                </div>
                <div className="newsletter-fade bg-white rounded-[2rem] p-5 md:p-8 shadow-sm">
                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                        <input type="email" placeholder="Enter your email address" className="flex-1 bg-brand-bg px-5 py-4 rounded-full outline-none text-sm text-brand-dark placeholder:text-gray-400" />
                        <button className="bg-brand-dark text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-opacity-90 transition">Subscribe</button>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4 pt-5 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <i className="ph-fill ph-check-circle text-brand-accent"></i>
                            Monthly emails
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <i className="ph-fill ph-check-circle text-brand-accent"></i>
                            No spam
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <i className="ph-fill ph-check-circle text-brand-accent"></i>
                            Therapist-written
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
