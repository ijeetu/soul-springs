import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const values = [
  {
    icon: 'ph-heart',
    title: 'Compassion First',
    desc: 'Every interaction is rooted in empathy, care, and genuine concern for your well-being.',
    color: 'text-brand-red',
    bg: 'bg-brand-red/10',
  },
  {
    icon: 'ph-shield-check',
    title: 'Safe & Confidential',
    desc: 'Your privacy matters. Every session is encrypted and protected under strict confidentiality.',
    color: 'text-brand-accent',
    bg: 'bg-brand-accent/10',
  },
  {
    icon: 'ph-users-three',
    title: 'Inclusive Care',
    desc: 'We welcome all backgrounds, identities, and experiences with open arms and zero judgment.',
    color: 'text-[#5C80A1]',
    bg: 'bg-[#5C80A1]/10',
  },
  {
    icon: 'ph-certificate',
    title: 'Evidence-Based',
    desc: 'Our methods are grounded in proven research and tailored to your unique needs.',
    color: 'text-[#3D5A47]',
    bg: 'bg-[#3D5A47]/10',
  },
  {
    icon: 'ph-hand-heart',
    title: 'Empowerment',
    desc: 'We equip you with the tools and confidence to take ownership of your mental health journey.',
    color: 'text-brand-dark',
    bg: 'bg-brand-dark/10',
  },
  {
    icon: 'ph-globe-hemisphere-west',
    title: 'Accessibility',
    desc: 'Offering both in-person and online sessions so help is always within reach, wherever you are.',
    color: 'text-brand-red',
    bg: 'bg-brand-red/10',
  },
];

export default function AboutValues() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.val-card');
      if (items.length) {
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
            opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-brand-red bg-brand-red/10 px-4 py-1.5 rounded-full mb-4 inline-block">Core Values</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-4">What We Stand For</h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">Our values are the foundation of everything we do — from the way we listen to the way we care.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {values.map((v, i) => (
                <div key={i} className="val-card bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center mb-5`}>
                        <i className={`ph-fill ${v.icon} ${v.color} text-xl`}></i>
                    </div>
                    <h4 className="font-serif text-xl text-brand-dark mb-2">{v.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
            ))}
        </div>
    </section>
  );
}
