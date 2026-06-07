import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AppointmentHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.appointment-hero-fade');
      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-28 sm:pt-36 pb-14 sm:pb-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
                <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent bg-brand-accent/10 px-4 py-1.5 rounded-full mb-6 inline-block appointment-hero-fade">Book Appointment</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-dark mb-6 leading-tight appointment-hero-fade">
                    Start Your Healing<br className="hidden md:block"/> Journey Today
                </h1>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 appointment-hero-fade">
                    Choose your preferred service, share your availability, and our care team will help match you with the right therapist.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 appointment-hero-fade">
                    <div className="bg-brand-bg rounded-2xl px-5 py-4">
                        <p className="text-2xl font-serif text-brand-dark">24h</p>
                        <p className="text-xs text-gray-500">Response time</p>
                    </div>
                    <div className="bg-brand-bg rounded-2xl px-5 py-4">
                        <p className="text-2xl font-serif text-brand-dark">Free</p>
                        <p className="text-xs text-gray-500">Initial consult</p>
                    </div>
                    <div className="bg-brand-bg rounded-2xl px-5 py-4">
                        <p className="text-2xl font-serif text-brand-dark">Online</p>
                        <p className="text-xs text-gray-500">or in-person</p>
                    </div>
                </div>
            </div>
            <div className="appointment-hero-fade rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/3]">
                <img src="/images/1521791136064.webp" alt="Therapy appointment" className="w-full h-full object-cover" />
            </div>
        </div>
    </section>
  );
}
