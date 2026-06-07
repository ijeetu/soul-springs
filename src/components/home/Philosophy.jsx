import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Philosophy() {
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
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-20 px-4 md:px-8 max-w-[1400px] mx-auto overflow-hidden relative min-h-[400px] flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center relative z-10 gsap-fade-up">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-brand-dark leading-relaxed px-4">
                At Soul Springs, our approach is more than professional — it's deeply personal. Our core values shape every session.
            </h2>
        </div>
        
        {/* Floating Pills */}
        <div className="absolute top-4 md:top-10 left-4 md:left-[10%] bg-brand-red text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg floating-pill text-sm md:text-base" style={{ animationDelay: '0s', transform: 'rotate(-5deg)' }}>
            Compassion
        </div>
        <div className="absolute bottom-10 md:bottom-20 left-4 md:left-[20%] bg-[#5C80A1] text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg floating-pill text-sm md:text-base" style={{ animationDelay: '1s', transform: 'rotate(5deg)' }}>
            Connection
        </div>
        <div className="absolute top-10 md:top-20 right-4 md:right-[15%] bg-[#3D5A47] text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg floating-pill text-sm md:text-base" style={{ animationDelay: '2s', transform: 'rotate(10deg)' }}>
            Empathy
        </div>
        <div className="absolute bottom-4 md:bottom-10 right-4 md:right-[10%] bg-brand-accent text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg floating-pill text-sm md:text-base" style={{ animationDelay: '0.5s', transform: 'rotate(-10deg)' }}>
            Empowerment
        </div>
    </section>
  );
}
