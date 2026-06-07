import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function ContactMap() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.map-fade');
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
    <section ref={containerRef} className="py-16 sm:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-8 items-stretch">
            <div className="map-fade rounded-[2rem] overflow-hidden min-h-[360px] bg-brand-bg relative">
                <img src="/images/1524661135.webp" alt="Wellness city map" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white max-w-sm">
                    <p className="text-xs uppercase tracking-wider text-white/70 mb-2">Our Location</p>
                    <h3 className="text-3xl font-serif mb-2">Soul Springs Counseling Center</h3>
                    <p className="text-sm text-white/70">123 Tranquil Avenue, Wellness City, CA 90210</p>
                </div>
            </div>
            <div className="map-fade bg-brand-dark rounded-[2rem] p-6 md:p-8 text-white flex flex-col justify-between">
                <div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent mb-5 block">Office Hours</span>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4 text-sm">
                            <span>Monday - Friday</span>
                            <span className="text-white/70">9 AM - 7 PM</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-4 text-sm">
                            <span>Saturday</span>
                            <span className="text-white/70">10 AM - 4 PM</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span>Sunday</span>
                            <span className="text-white/70">Closed</span>
                        </div>
                    </div>
                </div>
                <div className="mt-10 rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-white/70 mb-2">Need urgent help?</p>
                    <p className="text-sm">If this is an emergency, please call your local emergency service immediately.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
