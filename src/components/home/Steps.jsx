import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Steps() {
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
        stagger: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden gsap-fade-up order-2 md:order-1">
                <img src="/images/1520694478166.webp" alt="Therapy Session" className="w-full h-full object-cover" />
            </div>
            
            <div className="gsap-fade-up order-1 md:order-2">
                <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-4 md:mb-6">Steps toward mental <br className="hidden md:block"/>& emotional peace</h2>
                <p className="text-gray-600 mb-8 md:mb-10 text-sm">Personalized sessions to help you manage anxiety, depression, stress, or transitions in a judgment-free environment.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
                    <div>
                        <div className="bg-brand-card w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <i className="ph-fill ph-lightbulb text-brand-red text-xl"></i>
                        </div>
                        <h4 className="font-serif text-xl text-brand-dark mb-2">Therapy Session</h4>
                        <p className="text-xs text-gray-500">Guide on what to expect in a typical therapy session at Soul Springs.</p>
                    </div>
                    <div>
                        <div className="bg-brand-card w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <i className="ph-fill ph-plant text-brand-accent text-xl"></i>
                        </div>
                        <h4 className="font-serif text-xl text-brand-dark mb-2">Observe Progress</h4>
                        <p className="text-xs text-gray-500">When you arrive—either in person or virtually—you'll be in a safe, welcoming environment.</p>
                    </div>
                </div>

                <Link href="/book-appointment" className="w-full sm:w-auto text-center bg-brand-dark text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition inline-block text-sm">
                    Book an Appointment
                </Link>
            </div>
        </div>
    </section>
  );
}
