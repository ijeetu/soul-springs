import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const cards = [
  {
    icon: 'ph-envelope-simple',
    title: 'Email Us',
    value: 'hello@healspace.com',
    desc: 'Send us your questions anytime.',
    color: 'text-brand-accent',
    bg: 'bg-brand-accent/10',
  },
  {
    icon: 'ph-phone-call',
    title: 'Call Us',
    value: '+1 (123) 456-7890',
    desc: 'Mon-Sat, 9 AM - 7 PM.',
    color: 'text-brand-red',
    bg: 'bg-brand-red/10',
  },
  {
    icon: 'ph-map-pin',
    title: 'Visit Us',
    value: '123 Tranquil Avenue',
    desc: 'Wellness City, CA 90210.',
    color: 'text-[#5C80A1]',
    bg: 'bg-[#5C80A1]/10',
  },
];

export default function ContactCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.contact-card');
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
    <section ref={containerRef} className="px-4 md:px-8 max-w-[1400px] mx-auto pb-16 sm:pb-20">
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {cards.map((card, i) => (
                <div key={i} className="contact-card bg-brand-bg rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-md transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-5`}>
                        <i className={`ph-fill ${card.icon} ${card.color} text-xl`}></i>
                    </div>
                    <h3 className="font-serif text-xl text-brand-dark mb-2">{card.title}</h3>
                    <p className="text-sm font-medium text-brand-dark mb-1">{card.value}</p>
                    <p className="text-sm text-gray-500">{card.desc}</p>
                </div>
            ))}
        </div>
    </section>
  );
}
