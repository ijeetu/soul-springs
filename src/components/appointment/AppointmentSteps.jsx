import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const steps = [
  { icon: 'ph-clipboard-text', title: 'Share Your Needs', desc: 'Tell us what kind of support you are looking for and your preferred therapy format.' },
  { icon: 'ph-user-check', title: 'Get Matched', desc: 'Our care team recommends a therapist and service that fit your goals.' },
  { icon: 'ph-calendar-check', title: 'Confirm Schedule', desc: 'Choose a time that works for you and receive your appointment confirmation.' },
  { icon: 'ph-heart', title: 'Begin Healing', desc: 'Meet your therapist in a safe, supportive space online or in person.' },
];

export default function AppointmentSteps() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.appointment-step');
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
    <section ref={containerRef} className="bg-brand-bg">
        <div className="py-16 sm:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="text-center mb-12 appointment-step">
                <span className="text-xs font-semibold tracking-wider uppercase text-brand-red bg-brand-red/10 px-4 py-1.5 rounded-full mb-4 inline-block">How It Works</span>
                <h2 className="text-3xl md:text-5xl font-serif text-brand-dark">Simple Steps to Book</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                {steps.map((step, i) => (
                    <div key={i} className="appointment-step bg-white rounded-2xl md:rounded-3xl p-6 md:p-7 relative overflow-hidden">
                        <span className="absolute top-5 right-6 text-5xl font-serif text-brand-bg">{String(i + 1).padStart(2, '0')}</span>
                        <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-6 relative z-10">
                            <i className={`ph-fill ${step.icon} text-brand-accent text-xl`}></i>
                        </div>
                        <h3 className="font-serif text-xl text-brand-dark mb-2 relative z-10">{step.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed relative z-10">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
