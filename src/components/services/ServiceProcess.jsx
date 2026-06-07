import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const steps = [
  {
    num: '01',
    title: 'Book a Session',
    desc: 'Choose your preferred service and schedule a time that works for you — online or in-person.',
    icon: 'ph-calendar-check',
  },
  {
    num: '02',
    title: 'Initial Consultation',
    desc: 'Meet your therapist for a warm, introductory session to discuss your goals and concerns.',
    icon: 'ph-chat-circle-dots',
  },
  {
    num: '03',
    title: 'Personalized Plan',
    desc: 'Receive a tailored treatment plan designed around your specific needs and pace.',
    icon: 'ph-clipboard-text',
  },
  {
    num: '04',
    title: 'Ongoing Support',
    desc: 'Attend regular sessions, track your progress, and adjust your plan as you grow and heal.',
    icon: 'ph-trend-up',
  },
];

export default function ServiceProcess() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.process-card');
      if (items.length) {
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
            opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-brand-bg">
        <div className="py-16 sm:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="text-center mb-12 md:mb-16">
                <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent bg-brand-accent/10 px-4 py-1.5 rounded-full mb-4 inline-block process-card">How It Works</span>
                <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-4 process-card">Your Path to Wellness</h2>
                <p className="text-gray-500 text-sm max-w-lg mx-auto process-card">Getting started is simple. Here's what to expect when you begin your journey with Soul Springs.</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {steps.map((step, i) => (
                    <div key={i} className="process-card bg-white rounded-2xl p-6 md:p-8 relative group hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-3xl font-serif text-gray-200 group-hover:text-brand-accent transition-colors duration-300">{step.num}</span>
                            <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                                <i className={`ph-fill ${step.icon} text-brand-accent text-lg`}></i>
                            </div>
                        </div>
                        <h4 className="font-serif text-xl text-brand-dark mb-2">{step.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                        {i < steps.length - 1 && (
                            <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gray-200"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
